import { exercise01 } from "./01_fakes_and_spies_lab.js";
import { exercise02 } from "./02_http_integration_tests_lab.js";
import { exercise03 } from "./03_database_integration_tests_lab.js";
import { exercise04 } from "./04_failure_injection_lab.js";

export const labTitle = "Advanced Testing";

export const topics = [
  { name: "fakes-and-spies", run: exercise01 },
  { name: "http-integration-tests", run: exercise02 },
  { name: "database-integration-tests", run: exercise03 },
  { name: "failure-injection", run: exercise04 },
];
