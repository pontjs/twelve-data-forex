import { createWebSocketClient } from "@pontx/sdk";
import type {
  CreateWebSocketClientOptions,
  WebSocketStreamClient,
} from "@pontx/sdk";
import type { StreamReceivedMessage, StreamSendMessage } from "./streams";

export type StreamClientOptions = CreateWebSocketClientOptions<
  StreamSendMessage,
  StreamReceivedMessage
>;

/**
 * Creates the generated stream client. Pass the URL and socket factory at
 * runtime; do not embed credentials in generated source or logs.
 */
export function createStreamClient(
  options: StreamClientOptions
): WebSocketStreamClient<StreamSendMessage, StreamReceivedMessage> {
  return createWebSocketClient(options);
}
