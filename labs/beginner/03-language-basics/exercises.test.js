import test from "node:test";
import assert from "node:assert/strict";

import { exercise01 } from "./01_variables_and_types_lab.js";
import { exercise02 } from "./02_operators_and_coercion_lab.js";
import { exercise03 } from "./03_control_flow_lab.js";
import { exercise04 } from "./04_functions_lab.js";
import { exercise05 } from "./05_scope_and_hoisting_lab.js";

// These tests are intentionally skipped. For each exercise:
//   1. Implement the exercise function.
//   2. Remove the `skip` option.
//   3. Add real assertions for the behavior you implemented.
//   4. Run: node --test
//
// A skipped test is a reminder, not a passing grade.

test("01 — Variables and Types", { skip: "TODO: implement exercise01" }, async () => {
  await exercise01();
  // TODO: add assertions for the behavior you implemented.
  assert.ok(true);
});

test("02 — Operators and Coercion", { skip: "TODO: implement exercise02" }, async () => {
  await exercise02();
  // TODO: add assertions for the behavior you implemented.
  assert.ok(true);
});

test("03 — Control Flow", { skip: "TODO: implement exercise03" }, async () => {
  await exercise03();
  // TODO: add assertions for the behavior you implemented.
  assert.ok(true);
});

test("04 — Functions", { skip: "TODO: implement exercise04" }, async () => {
  await exercise04();
  // TODO: add assertions for the behavior you implemented.
  assert.ok(true);
});

test("05 — Scope and Hoisting", { skip: "TODO: implement exercise05" }, async () => {
  await exercise05();
  // TODO: add assertions for the behavior you implemented.
  assert.ok(true);
});
