import { exercise01 } from "./01_npm_scripts_and_workspaces_lab.js";
import { exercise02 } from "./02_bundlers_lab.js";
import { exercise03 } from "./03_typescript_essentials_lab.js";
import { exercise04 } from "./04_lint_format_ci_lab.js";

export const labTitle = "Tooling and TypeScript";

export const topics = [
  { name: "npm-scripts-and-workspaces", run: exercise01 },
  { name: "bundlers", run: exercise02 },
  { name: "typescript-essentials", run: exercise03 },
  { name: "lint-format-ci", run: exercise04 },
];
