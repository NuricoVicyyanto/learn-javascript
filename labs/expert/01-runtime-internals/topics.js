import { exercise01 } from "./01_v8_pipeline_and_jit_lab.js";
import { exercise02 } from "./02_hidden_classes_and_inline_caches_lab.js";
import { exercise03 } from "./03_memory_and_garbage_collection_lab.js";
import { exercise04 } from "./04_deoptimization_lab.js";

export const labTitle = "Runtime Internals";

export const topics = [
  { name: "v8-pipeline-and-jit", run: exercise01 },
  { name: "hidden-classes-and-inline-caches", run: exercise02 },
  { name: "memory-and-garbage-collection", run: exercise03 },
  { name: "deoptimization", run: exercise04 },
];
