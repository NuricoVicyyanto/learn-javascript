import { exercise01 } from "./01_modules_and_layers_lab.js";
import { exercise02 } from "./02_dependency_injection_lab.js";
import { exercise03 } from "./03_configuration_lab.js";
import { exercise04 } from "./04_logging_lab.js";

export const labTitle = "Project Architecture";

export const topics = [
  { name: "modules-and-layers", run: exercise01 },
  { name: "dependency-injection", run: exercise02 },
  { name: "configuration", run: exercise03 },
  { name: "logging", run: exercise04 },
];
