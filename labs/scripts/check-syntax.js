import { readdir } from "node:fs/promises";
import { execFile } from "node:child_process";
import { join, extname } from "node:path";
import { fileURLToPath } from "node:url";
import { promisify } from "node:util";

const execFileAsync = promisify(execFile);
const root = fileURLToPath(new URL("..", import.meta.url));

async function collect(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    if (entry.name === "node_modules") continue;

    const fullPath = join(directory, entry.name);

    if (entry.isDirectory()) {
      files.push(...(await collect(fullPath)));
    } else if (entry.isFile() && extname(entry.name) === ".js") {
      files.push(fullPath);
    }
  }

  return files;
}

const files = await collect(root);
let failed = 0;

for (const file of files) {
  try {
    await execFileAsync(process.execPath, ["--check", file]);
  } catch (error) {
    failed += 1;
    console.error(`FAIL ${file}`);
    console.error(error.stderr ?? error.message);
  }
}

console.log(`Checked ${files.length} JavaScript files.`);

if (failed > 0) {
  process.exitCode = 1;
}
