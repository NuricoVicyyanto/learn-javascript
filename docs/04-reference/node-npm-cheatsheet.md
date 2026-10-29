# Node and npm Cheatsheet

## Runtime

```bash
node --version
node file.js
node --watch file.js
node --check file.js          # syntax check without running
node --input-type=module -e "console.log('hi')"
```

## npm and packages

```bash
npm init -y
npm install                 # install from package.json
npm install --save-dev pkg
npm ci                      # clean, reproducible install for CI
npm update
npm outdated
npm audit
npm audit fix
npm ls --depth=0
npm run                     # list scripts
npm run test
npx package-name            # run a local/one-off binary
```

## Testing

```bash
node --test
node --test --watch
node --test path/to/file.test.js
node --test --test-name-pattern="adds"
node --test --experimental-test-coverage
node --test --test-reporter spec
```

Minimal test:

```js
import test from "node:test";
import assert from "node:assert/strict";

test("adds numbers", () => {
  assert.equal(1 + 1, 2);
});
```

Skipped test:

```js
test("TODO", { skip: "implement me" }, () => {});
```

## Debugging and profiling

```bash
node --inspect file.js
node --inspect-brk file.js
node --trace-uncaught file.js
node --cpu-prof file.js
node --heap-prof file.js
node --trace-gc file.js
node --max-old-space-size=512 file.js
```

Open `chrome://inspect` for the inspector, or load `.cpuprofile`/`.heapprofile` in Chrome DevTools.

## Environment and arguments

```bash
node app.js --port 8080
PORT=8080 node app.js          # macOS/Linux
$env:PORT=8080; node app.js    # PowerShell
```

```js
console.log(process.argv.slice(2));
console.log(process.env.PORT);
process.exitCode = 1;
```

## HTTP quick checks

```bash
curl -i http://localhost:8080/healthz
curl -s -X POST http://localhost:8080/v1/tasks \
  -H 'content-type: application/json' \
  -d '{"title":"Learn JS"}'
```

## Formatting and linting

```bash
npx prettier --check .
npx prettier --write .
npx eslint .
npx tsc --noEmit
```

## Git hygiene

```bash
git status
git add -A
git commit -m "docs(beginner): complete closures note"
git log --oneline --graph --decorate -20
```

Before committing:

```bash
npm run check
node --test
npx prettier --check .
npx eslint .
```

## Common patterns

### Read a file

```js
import { readFile } from "node:fs/promises";

const text = await readFile("data.txt", "utf8");
```

### Atomic write

```js
import { writeFile, rename } from "node:fs/promises";

const tmp = `${path}.tmp`;
await writeFile(tmp, data, "utf8");
await rename(tmp, path);
```

### Timeout with AbortSignal

```js
const response = await fetch(url, {
  signal: AbortSignal.timeout(5_000),
});
```

### Bounded concurrency

```js
async function mapLimit(items, limit, fn) {
  const results = new Array(items.length);
  let next = 0;

  async function worker() {
    while (next < items.length) {
      const index = next++;
      results[index] = await fn(items[index], index);
    }
  }

  await Promise.all(
    Array.from({ length: Math.min(limit, items.length) }, worker),
  );
  return results;
}
```

### Retry with backoff

```js
async function retry(fn, { attempts = 3, baseMs = 100 } = {}) {
  for (let i = 0; i < attempts; i++) {
    try {
      return await fn();
    } catch (error) {
      if (i === attempts - 1) throw error;
      const delay = baseMs * 2 ** i * (0.5 + Math.random() / 2);
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
  }
}
```

### Graceful shutdown

```js
process.on("SIGTERM", async () => {
  server.close(async () => {
    await pool.end();
    process.exit(0);
  });
});
```
