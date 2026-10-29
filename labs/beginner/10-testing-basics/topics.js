import { exercise01 } from "./01_node_test_lab.js";
import { exercise02 } from "./02_table_driven_tests_lab.js";
import { exercise03 } from "./03_coverage_and_fakes_lab.js";

export const labTitle = "Testing Basics";

export const topics = [
  { name: "node-test", run: exercise01 },
  { name: "table-driven-tests", run: exercise02 },
  { name: "coverage-and-fakes", run: exercise03 },
];
