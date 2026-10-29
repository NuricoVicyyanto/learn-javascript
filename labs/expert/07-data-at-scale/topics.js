import { exercise01 } from "./01_caching_lab.js";
import { exercise02 } from "./02_query_tuning_lab.js";
import { exercise03 } from "./03_sharding_and_replication_lab.js";

export const labTitle = "Data at Scale";

export const topics = [
  { name: "caching", run: exercise01 },
  { name: "query-tuning", run: exercise02 },
  { name: "sharding-and-replication", run: exercise03 },
];
