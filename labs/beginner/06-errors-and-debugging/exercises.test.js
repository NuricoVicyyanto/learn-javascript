import test from "node:test";
import assert from "node:assert/strict";

import { exercise01 } from "./01_exceptions_lab.js";
import { exercise02 } from "./02_error_types_lab.js";
import { exercise03 } from "./03_async_errors_lab.js";
import { exercise04 } from "./04_debugging_lab.js";

// These tests are intentionally skipped. For each exercise:
//   1. Implement the exercise function.
//   2. Remove the `skip` option.
//   3. Add real assertions for the behavior you implemented.
//   4. Run: node --test
//
// A skipped test is a reminder, not a passing grade.

test("01 - Exceptions", { skip: "TODO: implement exercise01" }, async () => {
  await exercise01();
  // TODO: add assertions for the behavior you implemented.
  assert.ok(true);
});

test("02 - Error Types and Causes", { skip: "TODO: implement exercise02" }, async () => {
  await exercise02();
  // TODO: add assertions for the behavior you implemented.
  assert.ok(true);
});

test("03 - Async Errors", { skip: "TODO: implement exercise03" }, async () => {
  await exercise03();
  // TODO: add assertions for the behavior you implemented.
  assert.ok(true);
});

test("04 - Debugging", { skip: "TODO: implement exercise04" }, async () => {
  await exercise04();
  // TODO: add assertions for the behavior you implemented.
  assert.ok(true);
});
