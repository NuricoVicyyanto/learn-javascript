import test from "node:test";
import assert from "node:assert/strict";
import http from "node:http";

import { createRouter } from "../src/router.js";
import { MemoryStore } from "../src/store.js";

test("GET /healthz returns 200", async () => {
  const server = http.createServer(createRouter(new MemoryStore()));
  await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));

  const { port } = server.address();

  try {
    const response = await fetch(`http://127.0.0.1:${port}/healthz`);
    assert.equal(response.status, 200);
    assert.deepEqual(await response.json(), { status: "ok" });
  } finally {
    await new Promise((resolve, reject) => {
      server.close((error) => (error ? reject(error) : resolve()));
    });
  }
});

test("bookmark CRUD", { skip: "TODO: implement the API" }, () => {
  assert.ok(true);
});
