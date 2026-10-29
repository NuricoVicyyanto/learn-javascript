# 02 · Installation and Setup

> **Level:** Beginner · **Status:** ⬜ Not started · **Estimated time:** 3 hours

## Why this module

A reliable toolchain removes friction from every later module. You should know how to install Node.js, inspect versions, create a package, run code, use the test runner, and fix the most common setup errors.

## Learning objectives

By the end of this module you can:

- [ ] Install Node.js on Windows, macOS, Linux, or Android/Termux.
- [ ] Explain the roles of Node.js, npm, and the browser.
- [ ] Create a `package.json` with ES modules and scripts.
- [ ] Run, test, and debug a JavaScript file.
- [ ] Configure an editor with formatting and linting.
- [ ] Diagnose common installation problems.

---

## 1. Choose your runtime

You need two environments eventually:

| Environment | Use it for |
| --- | --- |
| **Node.js** | CLI tools, servers, tests, build tooling |
| **Browser** | DOM, events, fetch, storage, DevTools |

Node.js ships with npm. The browser ships with DevTools. Install both.

---

## 2. Install Node.js

Download the current **LTS** release from <https://nodejs.org/>. LTS is the right default for application work.

Verify:

```bash
node --version
npm --version
```

### Windows

1. Download the `.msi` installer.
2. Run it and keep the "Add to PATH" option enabled.
3. Open a new terminal and run `node --version`.

### macOS

With Homebrew:

```bash
brew install node@22
```

Or use the official `.pkg` installer. For managing multiple versions, use `nvm` or `fnm`.

### Linux

Use the NodeSource repository or a version manager. With `nvm`:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
source ~/.bashrc
nvm install --lts
nvm use --lts
```

### Android with Termux

```bash
pkg update && pkg upgrade
pkg install nodejs
node --version
```

Termux is fine for exercises. Browser DevTools and Docker will not be available.

---

## 3. Version managers

Version managers avoid "works on my machine" problems:

```bash
# nvm
nvm install --lts
nvm use --lts

# fnm (fast, cross-platform)
fnm install --lts
fnm use --lts
```

Pin the version in `package.json`:

```json
{
  "engines": {
    "node": ">=22"
  }
}
```

---

## 4. Create your first project

```bash
mkdir hello-js
cd hello-js
npm init -y
```

Edit `package.json` to enable ES modules:

```json
{
  "name": "hello-js",
  "version": "1.0.0",
  "private": true,
  "type": "module",
  "scripts": {
    "start": "node main.js",
    "test": "node --test"
  }
}
```

Create `main.js`:

```js
const name = process.argv[2] ?? "JavaScript";
console.log(`Hello, ${name}!`);
```

Run it:

```bash
node main.js
npm start
node main.js Alice
```

---

## 5. The browser environment

Open DevTools with `F12` or `Ctrl+Shift+I` (`Cmd+Option+I` on macOS).

Useful panels:

- **Console** — run JavaScript and inspect values.
- **Sources** — breakpoints, call stack, scope.
- **Network** — requests, status codes, payloads, timing.
- **Application** — storage, cookies, service workers.
- **Performance** — CPU profiles, long tasks, rendering.
- **Memory** — heap snapshots.

Create `index.html` and open it in the browser:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Hello</title>
  </head>
  <body>
    <main id="app"></main>
    <script type="module">
      document.querySelector("#app").textContent = "Hello from the browser";
    </script>
  </body>
</html>
```

---

## 6. Editor setup

Use VS Code with the built-in JavaScript support, or WebStorm. Enable:

- Format on save with Prettier.
- ESLint diagnostics (optional but recommended).
- `jsconfig.json` for editor hints.
- Debug configuration for Node.js and the browser.
- Integrated terminal for `node --test`.

Minimal `jsconfig.json`:

```json
{
  "compilerOptions": {
    "checkJs": true,
    "module": "nodenext",
    "target": "es2024"
  },
  "exclude": ["node_modules"]
}
```

---

## 7. Recommended workflow

```bash
npm init -y                 # once
npm install                 # install dependencies
node main.js                # run
node --check main.js        # syntax check
node --test                 # tests
node --test --watch         # test watch mode
npm run build               # if the project has a build
```

Useful extras:

```bash
node --inspect-brk main.js  # debugger, pause at start
node --trace-uncaught main.js
npm audit
npm outdated
```

---

## 8. Understanding the files

| Path | Purpose |
| --- | --- |
| `package.json` | Metadata, scripts, dependencies |
| `package-lock.json` | Exact resolved dependency versions; commit it |
| `node_modules/` | Installed packages; never commit |
| `.env` | Local secrets; never commit |
| `main.js` | Entry point in these labs |

---

## 9. Troubleshooting

| Problem | Fix |
| --- | --- |
| `node: command not found` | Add Node.js to PATH; open a new terminal |
| `Cannot use import statement outside a module` | Add `"type": "module"` or rename to `.mjs` |
| `ERR_MODULE_NOT_FOUND` | Check the relative path and include the `.js` extension in ESM |
| `EADDRINUSE` | Another process is using the port; change `PORT` or stop it |
| `npm ERR! code EACCES` | Do not use `sudo npm`; fix npm prefix or use a version manager |
| Tests hang | Look for an unclosed server, interval, or unresolved promise |
| Editor shows no types | Add `jsconfig.json`; check the workspace root |
| `fetch is not defined` | Use Node.js 18+ or a browser |

---

## Exercises

1. Install Node.js and record `node --version` and `npm --version`.
2. Create a package with `"type": "module"`, a `start` script, and a `test` script.
3. Print your name and the current Node.js version from `main.js`.
4. Add a `main.test.js` using `node:test` and `node:assert/strict`.
5. Open a page in the browser and run one expression in the console.

## Self-check

1. What is the difference between Node.js and npm?
2. Why does ESM require the `.js` extension in relative imports?
3. Why is `package-lock.json` committed?
4. When would you use the browser DevTools instead of Node.js?
5. What does `"type": "module"` change?

## Lab starter

Runnable starter code for this module:

[`labs/beginner/02-installation-and-setup`](../../../labs/beginner/02-installation-and-setup/README.md)

```bash
cd labs
node beginner/02-installation-and-setup/main.js
node --test beginner/02-installation-and-setup/main.test.js
```

## Module checklist

- [ ] Node.js and npm are installed and on PATH.
- [ ] I created a package with `"type": "module"` and scripts.
- [ ] I ran a JavaScript file with Node.js.
- [ ] I ran a test with `node --test`.
- [ ] I opened DevTools and used the console.
- [ ] My editor formats on save.
- [ ] I completed the lab starter in `labs/beginner/02-installation-and-setup`.
- [ ] I updated `PROGRESS.md`.

## References

- [Node.js downloads](https://nodejs.org/en/download)
- [Node.js: getting started](https://nodejs.org/en/learn/getting-started/introduction-to-nodejs)
- [npm docs: package.json](https://docs.npmjs.com/cli/configuring-npm/package-json)
- [MDN: JavaScript modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
- [Chrome DevTools](https://developer.chrome.com/docs/devtools/)
- [VS Code JavaScript](https://code.visualstudio.com/docs/languages/javascript)
