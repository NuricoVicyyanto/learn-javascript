import { exercise01 } from "./01_idempotency_and_retries_lab.js";
import { exercise02 } from "./02_timeouts_and_circuit_breakers_lab.js";
import { exercise03 } from "./03_queues_and_outbox_lab.js";
import { exercise04 } from "./04_consistency_and_observability_lab.js";

export const labTitle = "Distributed Systems";

export const topics = [
  { name: "idempotency-and-retries", run: exercise01 },
  { name: "timeouts-and-circuit-breakers", run: exercise02 },
  { name: "queues-and-outbox", run: exercise03 },
  { name: "consistency-and-observability", run: exercise04 },
];
