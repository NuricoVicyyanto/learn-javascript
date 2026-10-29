import { App } from "./app.js";
import { JsonStore } from "./store.js";

const store = new JsonStore("tasks.json");
const app = new App(store);

try {
  await app.run(process.argv.slice(2));
} catch (error) {
  console.error("error:", error.message);
  process.exitCode = 1;
}
