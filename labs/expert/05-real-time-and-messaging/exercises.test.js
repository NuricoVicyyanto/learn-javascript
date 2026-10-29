import test from "node:test";
import assert from "node:assert/strict";

import { exercise01 } from "./01_websockets_lab.js";
import { exercise02 } from "./02_server_sent_events_lab.js";
import { exercise03 } from "./03_message_brokers_lab.js";

// These tests are intentionally skipped. For each exercise:
//   1. Implement the exercise function.
//   2. Remove the `skip` option.
//   3. Add real assertions for the behavior you implemented.
//   4. Run: node --test
//
// A skipped test is a reminder, not a passing grade.

test("01 - WebSockets", { skip: "TODO: implement exercise01" }, async () => {
  await exercise01();
  // TODO: add assertions for the behavior you implemented.
  assert.ok(true);
});

test("02 - Server-Sent Events", { skip: "TODO: implement exercise02" }, async () => {
  await exercise02();
  // TODO: add assertions for the behavior you implemented.
  assert.ok(true);
});

test("03 - Message Brokers", { skip: "TODO: implement exercise03" }, async () => {
  await exercise03();
  // TODO: add assertions for the behavior you implemented.
  assert.ok(true);
});
