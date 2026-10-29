import { exercise01 } from "./01_variables_and_types_lab.js";
import { exercise02 } from "./02_operators_and_coercion_lab.js";
import { exercise03 } from "./03_control_flow_lab.js";
import { exercise04 } from "./04_functions_lab.js";
import { exercise05 } from "./05_scope_and_hoisting_lab.js";

export const labTitle = "Language Basics";

export const topics = [
  { name: "variables-and-types", run: exercise01 },
  { name: "operators-and-coercion", run: exercise02 },
  { name: "control-flow", run: exercise03 },
  { name: "functions", run: exercise04 },
  { name: "scope-and-hoisting", run: exercise05 },
];
