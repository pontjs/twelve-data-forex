import { createGracefulClient, type GracefulClient } from "@pontx/sdk";
import { APIs } from "./apis/twelveDataForex/apis";
import { specMeta } from "./apis/twelveDataForex/apiMeta";
import {
  createStreamClient,
  type StreamClientOptions,
} from "./apis/twelveDataForex/stream-client";
import type {
  StreamReceivedMessage,
  StreamSendMessage,
} from "./apis/twelveDataForex/streams";
import {
  DEFAULT_REST_BASE_URL,
  requestTwelveData,
  streamUrl,
  type TwelveDataRequestOptions,
} from "./runtime";

export type TwelveDataForexClientOptions = TwelveDataRequestOptions;

export type TwelveDataForexStreamClientOptions = Omit<StreamClientOptions, "url"> & {
  apiKey?: string;
  baseUrl?: string;
};

export function createTwelveDataForexClient(
  options: TwelveDataForexClientOptions = {},
) {
  return createGracefulClient<APIs>({
    pontxSpecMeta: specMeta as never,
    baseUrl: options.baseUrl ?? DEFAULT_REST_BASE_URL,
    baseRequestFn: (url, init) => requestTwelveData(url, init, options),
  }) as GracefulClient<APIs>
    & APIs["market_data"]
    & APIs["currencies"]
    & APIs["reference_data"]
    & APIs["technical_indicator"];
}

/**
 * Opens no connection until connect() is explicitly called. The caller injects
 * a browser WebSocket or Node adapter; the API key exists only in the runtime
 * URL passed to that adapter.
 */
export function createTwelveDataForexStreamClient(
  options: TwelveDataForexStreamClientOptions,
) {
  return createStreamClient({
    ...options,
    url: streamUrl(options.apiKey, options.baseUrl),
  });
}

const twelveDataForexClient = createTwelveDataForexClient();

export type { StreamReceivedMessage, StreamSendMessage };
export { twelveDataForexClient };
export default twelveDataForexClient;
