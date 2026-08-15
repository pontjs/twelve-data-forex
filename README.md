# @pontx/twelve-data-forex

Type-safe TypeScript SDK and CLI for the Twelve Data Forex REST API and
realtime quote stream.

Install it with:

```bash
npm install @pontx/twelve-data-forex
```

Every caller supplies its own `PONTX_TWELVE_DATA_API_KEY`. The SDK and CLI call
Twelve Data directly; no credential or market-data response is proxied,
persisted, cached, or displayed by Pontx.

## SDK

```ts
import { createTwelveDataForexClient } from "@pontx/twelve-data-forex";

const client = createTwelveDataForexClient({
  apiKey: process.env.PONTX_TWELVE_DATA_API_KEY,
});

const quote = await client.market_data.GetQuote({ symbol: "EUR/USD" });
```

## Realtime quote stream

```ts
import { createTwelveDataForexStreamClient } from "@pontx/twelve-data-forex";

const stream = createTwelveDataForexStreamClient({
  apiKey: process.env.PONTX_TWELVE_DATA_API_KEY,
  createSocket: (url) => new WebSocket(url),
});
await stream.connect();
stream.send({ action: "subscribe", params: { symbols: "EUR/USD" } });
```

## CLI

```bash
export PONTX_TWELVE_DATA_API_KEY="..."
pontx-twelve-data-forex show-api market_data GetQuote
pontx-twelve-data-forex call market_data GetQuote --symbol EUR/USD --dry-run
```

The CLI adds the environment credential only when it executes a request. Its
dry-run and cURL previews intentionally contain no API key.
