import test from "node:test";
import assert from "node:assert/strict";

import { App } from "../src/app.js";

class FakeStore {
  constructor(tasks = []) {
    this.tasks = tasks;
  }

  async load() {
    return this.tasks;
  }

  async save(tasks) {
    this.tasks = tasks;
  }
}

test("add stores a task", { skip: "TODO: implement add" }, async () => {
  const store = new FakeStore();
  const app = new App(store);

  await app.run(["add", "Learn JavaScript"]);

  assert.equal(store.tasks.length, 1);
});
