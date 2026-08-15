import { afterEach, describe, expect, it, vi } from "vitest";
import twelveDataForexClient, {
  createTwelveDataForexClient,
  createTwelveDataForexStreamClient,
  twelveDataForexClient as namedClient,
} from "../../src/index";

class FakeSocket {
  readonly sent: string[] = [];
  private listeners = new Map<string, Array<(event: unknown) => void>>();

  send(data: string) {
    this.sent.push(data);
  }

  close() {
    this.emit("close", { code: 1000 });
  }

  on(event: string, listener: (event: unknown) => void) {
    this.listeners.set(event, [...(this.listeners.get(event) ?? []), listener]);
  }

  off(event: string, listener: (event: unknown) => void) {
    this.listeners.set(event, (this.listeners.get(event) ?? []).filter((item) => item !== listener));
  }

  emit(event: string, payload: unknown = undefined) {
    for (const listener of this.listeners.get(event) ?? []) listener(payload);
  }
}

describe("@pontx/twelve-data-forex", () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("exports the same default and named client", () => {
    expect(twelveDataForexClient).toBe(namedClient);
  });

  it("serializes a Forex quote and appends the caller key only at fetch time", async () => {
    const payload = { symbol: "EUR/USD", close: "1.2345" };
    const fetchMock = vi.fn().mockResolvedValue(new Response(JSON.stringify(payload), {
      headers: { "content-type": "application/json" },
    }));
    vi.stubGlobal("fetch", fetchMock);

    const client = createTwelveDataForexClient({ apiKey: "unit-test-key" });
    await expect(client.market_data.GetQuote({ symbol: "EUR/USD" })).resolves.toEqual(payload);
    expect(fetchMock).toHaveBeenCalledWith(
      "https://api.twelvedata.com/quote?symbol=EUR%2FUSD&apikey=unit-test-key",
      expect.objectContaining({ method: "GET" }),
    );
  });

  it("does not include the caller key in an HTTP error", async () => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue(new Response("denied", { status: 401 })));
    const client = createTwelveDataForexClient({ apiKey: "unit-test-key" });
    await expect(client.market_data.GetQuote({ symbol: "EUR/USD" }))
      .rejects.toThrow("HTTP 401");
    await expect(client.market_data.GetQuote({ symbol: "EUR/USD" }))
      .rejects.not.toThrow("unit-test-key");
  });

  it("creates an explicit, typed price-stream client without opening on import", async () => {
    let socket: FakeSocket | undefined;
    const received: unknown[] = [];
    const stream = createTwelveDataForexStreamClient({
      apiKey: "unit-test-key",
      createSocket: () => {
        socket = new FakeSocket();
        return socket;
      },
    });
    stream.onMessage((message) => received.push(message));

    const connecting = stream.connect();
    expect(stream.state).toBe("connecting");
    socket?.emit("open");
    await connecting;
    stream.send({ action: "subscribe", params: { symbols: "EUR/USD" } });
    socket?.emit("message", JSON.stringify({
      event: "price",
      symbol: "EUR/USD",
      currency_base: "Euro",
      currency_quote: "US Dollar",
      type: "Physical Currency",
      timestamp: 1,
      price: 1.2345,
    }));

    expect(socket?.sent).toEqual([JSON.stringify({
      action: "subscribe", params: { symbols: "EUR/USD" },
    })]);
    expect(received).toEqual([expect.objectContaining({ event: "price", symbol: "EUR/USD" })]);
    stream.close();
    expect(stream.state).toBe("closed");
  });
});
