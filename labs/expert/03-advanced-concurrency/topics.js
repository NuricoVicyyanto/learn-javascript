import { exercise01 } from "./01_worker_threads_lab.js";
import { exercise02 } from "./02_streams_lab.js";
import { exercise03 } from "./03_backpressure_lab.js";
import { exercise04 } from "./04_process_scaling_lab.js";
import { exercise05 } from "./05_async_context_lab.js";

export const labTitle = "Advanced Concurrency";

export const topics = [
  { name: "worker-threads", run: exercise01 },
  { name: "streams", run: exercise02 },
  { name: "backpressure", run: exercise03 },
  { name: "process-scaling", run: exercise04 },
  { name: "async-context", run: exercise05 },
];
