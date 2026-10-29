import { loadConfig } from "./config.js";
import { Worker } from "./delivery.js";
import { MemoryStore } from "./store.js";

const config = loadConfig();
const worker = new Worker(new MemoryStore(), config.workerCount);
const controller = new AbortController();

process.once("SIGTERM", () => controller.abort());
process.once("SIGINT", () => controller.abort());

try {
  await worker.run(controller.signal);
} catch (error) {
  if (error.name !== "AbortError") {
    console.error("worker error:", error.message);
    process.exitCode = 1;
  }
}
