import { exercise01 } from "./01_filesystem_and_paths_lab.js";
import { exercise02 } from "./02_process_env_args_lab.js";
import { exercise03 } from "./03_npm_and_packages_lab.js";

export const labTitle = "Node.js Fundamentals";

export const topics = [
  { name: "filesystem-and-paths", run: exercise01 },
  { name: "process-env-args", run: exercise02 },
  { name: "npm-and-packages", run: exercise03 },
];
