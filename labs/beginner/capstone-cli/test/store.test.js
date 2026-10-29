import test from "node:test";
import assert from "node:assert/strict";
import { mkdtemp } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";

import { JsonStore } from "../src/store.js";

test("save and load round-trip", { skip: "TODO: implement store" }, async () => {
  const dir = await mkdtemp(join(tmpdir(), "tasks-"));
  const store = new JsonStore(join(dir, "tasks.json"));

  await store.save([]);
  assert.deepEqual(await store.load(), []);
});
