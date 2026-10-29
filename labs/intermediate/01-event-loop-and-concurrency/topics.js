import { exercise01 } from "./01_call_stack_and_queues_lab.js";
import { exercise02 } from "./02_microtasks_and_macrotasks_lab.js";
import { exercise03 } from "./03_timers_lab.js";
import { exercise04 } from "./04_blocking_the_loop_lab.js";
import { exercise05 } from "./05_node_event_loop_phases_lab.js";

export const labTitle = "Event Loop and Concurrency";

export const topics = [
  { name: "call-stack-and-queues", run: exercise01 },
  { name: "microtasks-and-macrotasks", run: exercise02 },
  { name: "timers", run: exercise03 },
  { name: "blocking-the-loop", run: exercise04 },
  { name: "node-event-loop-phases", run: exercise05 },
];
