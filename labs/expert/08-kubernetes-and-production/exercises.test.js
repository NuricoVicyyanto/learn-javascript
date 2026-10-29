import test from "node:test";
import assert from "node:assert/strict";

import { exercise01 } from "./01_containers_and_kubernetes_lab.js";
import { exercise02 } from "./02_graceful_shutdown_and_scaling_lab.js";
import { exercise03 } from "./03_observability_and_slos_lab.js";

// These tests are intentionally skipped. For each exercise:
//   1. Implement the exercise function.
//   2. Remove the `skip` option.
//   3. Add real assertions for the behavior you implemented.
//   4. Run: node --test
//
// A skipped test is a reminder, not a passing grade.

test("01 - Containers and Kubernetes", { skip: "TODO: implement exercise01" }, async () => {
  await exercise01();
  // TODO: add assertions for the behavior you implemented.
  assert.ok(true);
});

test("02 - Graceful Shutdown and Scaling", { skip: "TODO: implement exercise02" }, async () => {
  await exercise02();
  // TODO: add assertions for the behavior you implemented.
  assert.ok(true);
});

test("03 - Observability and SLOs", { skip: "TODO: implement exercise03" }, async () => {
  await exercise03();
  // TODO: add assertions for the behavior you implemented.
  assert.ok(true);
});
