import test from "node:test";
import assert from "node:assert/strict";

import { exercise01 } from "./01_call_stack_and_queues_lab.js";
import { exercise02 } from "./02_microtasks_and_macrotasks_lab.js";
import { exercise03 } from "./03_timers_lab.js";
import { exercise04 } from "./04_blocking_the_loop_lab.js";
import { exercise05 } from "./05_node_event_loop_phases_lab.js";

// These tests are intentionally skipped. For each exercise:
//   1. Implement the exercise function.
//   2. Remove the `skip` option.
//   3. Add real assertions for the behavior you implemented.
//   4. Run: node --test
//
// A skipped test is a reminder, not a passing grade.

test("01 — Call Stack and Queues", { skip: "TODO: implement exercise01" }, async () => {
  await exercise01();
  // TODO: add assertions for the behavior you implemented.
  assert.ok(true);
});

test("02 — Microtasks and Macrotasks", { skip: "TODO: implement exercise02" }, async () => {
  await exercise02();
  // TODO: add assertions for the behavior you implemented.
  assert.ok(true);
});

test("03 — Timers", { skip: "TODO: implement exercise03" }, async () => {
  await exercise03();
  // TODO: add assertions for the behavior you implemented.
  assert.ok(true);
});

test("04 — Blocking the Event Loop", { skip: "TODO: implement exercise04" }, async () => {
  await exercise04();
  // TODO: add assertions for the behavior you implemented.
  assert.ok(true);
});

test("05 — Node.js Event Loop Phases", { skip: "TODO: implement exercise05" }, async () => {
  await exercise05();
  // TODO: add assertions for the behavior you implemented.
  assert.ok(true);
});
