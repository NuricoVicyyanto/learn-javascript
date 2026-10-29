import { exercise01 } from "./01_dom_manipulation_lab.js";
import { exercise02 } from "./02_events_lab.js";
import { exercise03 } from "./03_forms_lab.js";
import { exercise04 } from "./04_browser_storage_lab.js";

export const labTitle = "DOM and Browser APIs";

export const topics = [
  { name: "dom-manipulation", run: exercise01 },
  { name: "events", run: exercise02 },
  { name: "forms", run: exercise03 },
  { name: "browser-storage", run: exercise04 },
];
