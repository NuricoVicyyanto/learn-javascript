import { exercise01 } from "./01_benchmarking_lab.js";
import { exercise02 } from "./02_cpu_profiling_lab.js";
import { exercise03 } from "./03_heap_snapshots_and_leaks_lab.js";
import { exercise04 } from "./04_optimization_patterns_lab.js";

export const labTitle = "Performance Engineering";

export const topics = [
  { name: "benchmarking", run: exercise01 },
  { name: "cpu-profiling", run: exercise02 },
  { name: "heap-snapshots-and-leaks", run: exercise03 },
  { name: "optimization-patterns", run: exercise04 },
];
