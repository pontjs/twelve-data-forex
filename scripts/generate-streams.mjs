import { readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { generateAsyncApiClient, generateAsyncApiTypes } from "@pontx/spec";

const spec = JSON.parse(await readFile(resolve("pontx-spec.json"), "utf8"));
if (!spec.asyncapi) {
  throw new Error("pontx-spec.json must contain an AsyncAPI contract for stream generation.");
}

const output = resolve("src/apis/twelveDataForex");
await writeFile(resolve(output, "streams.ts"), generateAsyncApiTypes(spec.asyncapi));
await writeFile(resolve(output, "stream-client.ts"), generateAsyncApiClient(spec.asyncapi));
console.log("Generated Twelve Data Forex stream types and runtime binding.");
