import { exercise01 } from "./01_closures_lab.js";
import { exercise02 } from "./02_this_binding_lab.js";
import { exercise03 } from "./03_es_modules_lab.js";
import { exercise04 } from "./04_iterators_and_generators_lab.js";

export const labTitle = "Functions and Modules";

export const topics = [
  { name: "closures", run: exercise01 },
  { name: "this-binding", run: exercise02 },
  { name: "es-modules", run: exercise03 },
  { name: "iterators-and-generators", run: exercise04 },
];
