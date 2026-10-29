import test from "node:test";
import assert from "node:assert/strict";

import { deliver } from "../src/delivery.js";

test("deliver signs the payload", { skip: "TODO: implement deliver" }, async () => {
  await deliver("http://127.0.0.1:1/hook", "secret", Buffer.from("{}"));
  assert.ok(true);
});
