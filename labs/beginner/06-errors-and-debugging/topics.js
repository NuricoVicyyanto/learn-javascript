import { exercise01 } from "./01_exceptions_lab.js";
import { exercise02 } from "./02_error_types_lab.js";
import { exercise03 } from "./03_async_errors_lab.js";
import { exercise04 } from "./04_debugging_lab.js";

export const labTitle = "Errors and Debugging";

export const topics = [
  { name: "exceptions", run: exercise01 },
  { name: "error-types", run: exercise02 },
  { name: "async-errors", run: exercise03 },
  { name: "debugging", run: exercise04 },
];
