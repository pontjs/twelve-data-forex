import assert from "node:assert/strict";
import { execFile } from "node:child_process";
import { createServer } from "node:http";
import { createRequire } from "node:module";
import { dirname, resolve } from "node:path";
import test from "node:test";
import { promisify } from "node:util";
import { fileURLToPath, pathToFileURL } from "node:url";
import WebSocket, { WebSocketServer } from "ws";

const execFileAsync = promisify(execFile);
const repositoryRoot = resolve(dirname(fileURLToPath(import.meta.url)), "../..");
const cli = resolve(repositoryRoot, "dist/bin/cli.cjs");

async function listen(server) {
  await new Promise((resolveListen) => server.listen(0, "127.0.0.1", resolveListen));
  const address = server.address();
  assert(address && typeof address === "object");
  return address.port;
}

test("the built SDK completes a direct Forex REST request with a caller key", async (context) => {
  const requests = [];
  const server = createServer((request, response) => {
    requests.push(request.url);
    response.writeHead(200, { "content-type": "application/json" });
    response.end(JSON.stringify({ symbol: "EUR/USD", close: "1.2345" }));
  });
  const port = await listen(server);
  context.after(() => new Promise((resolveClose) => server.close(resolveClose)));

  const esm = await import(`${pathToFileURL(resolve(repositoryRoot, "dist/index.mjs")).href}?e2e=${Date.now()}`);
  const client = esm.createTwelveDataForexClient({
    apiKey: "e2e-fixture-key",
    baseUrl: `http://127.0.0.1:${port}`,
  });
  const quote = await client.market_data.GetQuote({ symbol: "EUR/USD" });
  assert.deepEqual(quote, { symbol: "EUR/USD", close: "1.2345" });
  assert.deepEqual(requests, ["/quote?symbol=EUR%2FUSD&apikey=e2e-fixture-key"]);

  const require = createRequire(import.meta.url);
  const cjs = require(resolve(repositoryRoot, "dist/index.js"));
  assert.equal(cjs.default, cjs.twelveDataForexClient);
});

test("the built CLI hides credentials in dry runs and calls a caller-selected direct endpoint", async (context) => {
  const { stdout: api } = await execFileAsync(process.execPath, [
    cli, "show-api", "market_data", "GetQuote",
  ], { cwd: repositoryRoot });
  assert.match(api, /GetQuote/);

  const { stdout: dryRunStdout, stderr: dryRunStderr } = await execFileAsync(process.execPath, [
    cli, "call", "market_data", "GetQuote", "--symbol", "EUR/USD", "--dry-run",
  ], {
    cwd: repositoryRoot,
    env: { ...process.env, PONTX_TWELVE_DATA_API_KEY: "cli-fixture-key" },
  });
  const dryRun = `${dryRunStdout}${dryRunStderr}`;
  assert.match(dryRun, /Dry run - request not sent/);
  assert.doesNotMatch(dryRun, /cli-fixture-key|apikey=/i);

  const requests = [];
  const server = createServer((request, response) => {
    requests.push(request.url);
    response.writeHead(200, { "content-type": "application/json" });
    response.end(JSON.stringify({ symbol: "EUR/USD", close: "1.2345" }));
  });
  const port = await listen(server);
  context.after(() => new Promise((resolveClose) => server.close(resolveClose)));

  const { stdout } = await execFileAsync(process.execPath, [
    cli, "call", "market_data", "GetQuote", "--symbol", "EUR/USD",
  ], {
    cwd: repositoryRoot,
    env: {
      ...process.env,
      PONTX_TWELVE_DATA_API_KEY: "cli-fixture-key",
      PONTX_TWELVE_DATA_BASE_URL: `http://127.0.0.1:${port}`,
    },
  });
  assert.match(stdout, /EUR\/USD/);
  assert.deepEqual(requests, ["/quote?symbol=EUR%2FUSD&apikey=cli-fixture-key"]);
});

test("the built SDK exchanges typed local WebSocket Forex stream messages", async (context) => {
  const server = new WebSocketServer({ host: "127.0.0.1", port: 0 });
  await new Promise((resolveListen) => server.once("listening", resolveListen));
  const address = server.address();
  assert(address && typeof address === "object");
  context.after(() => new Promise((resolveClose) => server.close(resolveClose)));

  const receivedByServer = [];
  server.on("connection", (socket, request) => {
    assert.match(request.url ?? "", /apikey=stream-fixture-key/);
    socket.on("message", (data) => {
      receivedByServer.push(JSON.parse(String(data)));
      socket.send(JSON.stringify({
        event: "price",
        symbol: "EUR/USD",
        currency_base: "Euro",
        currency_quote: "US Dollar",
        type: "Physical Currency",
        timestamp: 1,
        price: 1.2345,
      }));
    });
  });

  const esm = await import(`${pathToFileURL(resolve(repositoryRoot, "dist/index.mjs")).href}?stream=${Date.now()}`);
  const messages = [];
  const stream = esm.createTwelveDataForexStreamClient({
    apiKey: "stream-fixture-key",
    baseUrl: `ws://127.0.0.1:${address.port}/v1/quotes/price`,
    createSocket: (url) => new WebSocket(url),
  });
  stream.onMessage((message) => messages.push(message));
  await stream.connect();
  stream.send({ action: "subscribe", params: { symbols: "EUR/USD" } });
  await new Promise((resolveMessage) => setTimeout(resolveMessage, 25));
  stream.close();

  assert.deepEqual(receivedByServer, [{ action: "subscribe", params: { symbols: "EUR/USD" } }]);
  assert.equal(messages.length, 1);
  assert.deepEqual(messages[0], {
    event: "price",
    symbol: "EUR/USD",
    currency_base: "Euro",
    currency_quote: "US Dollar",
    type: "Physical Currency",
    timestamp: 1,
    price: 1.2345,
  });
});

test("the npm package contains SDK declarations, CLI metadata, and stream bindings", async () => {
  const { stdout } = await execFileAsync("npm", ["pack", "--dry-run", "--json"], {
    cwd: repositoryRoot,
  });
  const [packed] = JSON.parse(stdout);
  const files = new Set(packed.files.map((file) => file.path));
  for (const expected of [
    "README.md",
    "LICENSE",
    "dist/index.d.ts",
    "dist/index.js",
    "dist/index.mjs",
    "dist/bin/api-lock.json",
    "dist/bin/cli.cjs",
  ]) {
    assert(files.has(expected), `missing npm artifact: ${expected}`);
  }
});
