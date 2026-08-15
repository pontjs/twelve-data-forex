export const DEFAULT_REST_BASE_URL = "https://api.twelvedata.com";
export const DEFAULT_STREAM_BASE_URL = "wss://ws.twelvedata.com/v1/quotes/price";
export const API_KEY_ENV = "PONTX_TWELVE_DATA_API_KEY";
export const REST_BASE_URL_ENV = "PONTX_TWELVE_DATA_BASE_URL";

const runtimeEnv: Record<string, string | undefined> =
  typeof process === "undefined" ? {} : process.env;

export type TwelveDataRequestOptions = {
  apiKey?: string;
  baseUrl?: string;
  fetchImpl?: typeof fetch;
};

function requiredApiKey(apiKey?: string) {
  const resolved = apiKey ?? runtimeEnv[API_KEY_ENV];
  if (!resolved) {
    throw new Error(`${API_KEY_ENV} is required to call Twelve Data.`);
  }
  return resolved;
}

export function authorizedUrl(url: string, apiKey: string) {
  const result = new URL(url);
  result.searchParams.set("apikey", apiKey);
  return result.toString();
}

async function decode(response: Response) {
  if (!response.ok) {
    throw new Error(`Twelve Data request failed with HTTP ${response.status}.`);
  }
  const contentType = response.headers.get("content-type") ?? "";
  return contentType.includes("json") ? response.json() : response.text();
}

export async function requestTwelveData(
  input: string,
  init: RequestInit,
  options: TwelveDataRequestOptions = {},
) {
  const apiKey = requiredApiKey(options.apiKey);
  const fetchImpl = options.fetchImpl ?? fetch;
  const url = new URL(input, options.baseUrl ?? runtimeEnv[REST_BASE_URL_ENV] ?? DEFAULT_REST_BASE_URL);
  return decode(await fetchImpl(authorizedUrl(url.toString(), apiKey), init));
}

/**
 * The generated CLI passes a relative URL to this function. The API key is
 * appended only immediately before fetch, so dry runs and cURL previews cannot
 * reveal it.
 */
export async function directTwelveDataFetch(url: string, init: RequestInit) {
  return requestTwelveData(url, init);
}

export function streamUrl(apiKey?: string, baseUrl = DEFAULT_STREAM_BASE_URL) {
  return authorizedUrl(baseUrl, requiredApiKey(apiKey));
}
