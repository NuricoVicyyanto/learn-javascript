import { exercise01 } from "./01_structured_logging_lab.js";
import { exercise02 } from "./02_metrics_lab.js";
import { exercise03 } from "./03_tracing_lab.js";
import { exercise04 } from "./04_health_checks_lab.js";

export const labTitle = "Observability";

export const topics = [
  { name: "structured-logging", run: exercise01 },
  { name: "metrics", run: exercise02 },
  { name: "tracing", run: exercise03 },
  { name: "health-checks", run: exercise04 },
];
