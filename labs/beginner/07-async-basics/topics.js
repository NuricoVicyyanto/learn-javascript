import { exercise01 } from "./01_callbacks_and_timers_lab.js";
import { exercise02 } from "./02_promises_lab.js";
import { exercise03 } from "./03_async_await_lab.js";
import { exercise04 } from "./04_fetch_basics_lab.js";

export const labTitle = "Async Basics";

export const topics = [
  { name: "callbacks-and-timers", run: exercise01 },
  { name: "promises", run: exercise02 },
  { name: "async-await", run: exercise03 },
  { name: "fetch-basics", run: exercise04 },
];
