import { exercise01 } from "./01_arrays_lab.js";
import { exercise02 } from "./02_objects_lab.js";
import { exercise03 } from "./03_maps_and_sets_lab.js";
import { exercise04 } from "./04_destructuring_and_json_lab.js";

export const labTitle = "Data Structures";

export const topics = [
  { name: "arrays", run: exercise01 },
  { name: "objects", run: exercise02 },
  { name: "maps-and-sets", run: exercise03 },
  { name: "destructuring-and-json", run: exercise04 },
];
