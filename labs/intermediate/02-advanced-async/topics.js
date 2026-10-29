import { exercise01 } from "./01_promise_combinators_lab.js";
import { exercise02 } from "./02_timeouts_retries_backoff_lab.js";
import { exercise03 } from "./03_bounded_concurrency_lab.js";
import { exercise04 } from "./04_async_iteration_lab.js";

export const labTitle = "Advanced Async Patterns";

export const topics = [
  { name: "promise-combinators", run: exercise01 },
  { name: "timeouts-retries-backoff", run: exercise02 },
  { name: "bounded-concurrency", run: exercise03 },
  { name: "async-iteration", run: exercise04 },
];
