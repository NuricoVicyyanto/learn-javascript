# 01 · Introduction to JavaScript

> **Level:** Beginner · **Status:** ⬜ Not started · **Estimated time:** 3 hours

## Why this module

Before learning syntax, you need a mental model of what JavaScript is good at and what it deliberately leaves to the platform. That model helps you choose the right runtime and avoid importing assumptions from other languages.

## Learning objectives

By the end of this module you can:

- [ ] Explain what JavaScript is and where it runs.
- [ ] Describe the difference between the language, the browser platform, and Node.js.
- [ ] List its main strengths, weaknesses, and design trade-offs.
- [ ] Name the main areas of the ecosystem and the tools used there.
- [ ] Decide whether JavaScript is a good fit for a given project.

---

## What is JavaScript?

JavaScript is a dynamic, interpreted (or JIT-compiled) programming language standardized as ECMAScript. It is the only language that runs natively in every major browser, and it also runs on servers, desktop apps, mobile apps, and edge runtimes through engines such as V8, SpiderMonkey, and JavaScriptCore.

**Key ideas:**

- Dynamically typed, with values carrying their own types.
- Functions are first-class values.
- Prototype-based object orientation.
- Single-threaded execution with an event loop per isolate.
- Asynchronous I/O through callbacks, promises, and async/await.
- A huge ecosystem distributed through npm.

JavaScript is not just "for the browser" anymore, but the browser remains the platform with the richest set of APIs.

---

## A short history

| Year | Event |
| --- | --- |
| 1995 | Brendan Eich creates JavaScript at Netscape in ten days |
| 1997 | ECMAScript 1 is standardized |
| 2009 | ECMAScript 5; Node.js is created by Ryan Dahl |
| 2015 | ECMAScript 2015 (ES6): `let`/`const`, classes, promises, modules, arrow functions |
| 2017 | `async`/`await` becomes standard |
| 2020 | Optional chaining and nullish coalescing |
| Today | Yearly ECMAScript releases; the language is mature and still evolving |

The name "JavaScript" was a marketing decision and has little to do with Java. The language is standardized by TC39.

---

## The language vs the platform

This distinction matters more than in most languages:

| Layer | Browser | Node.js |
| --- | --- | --- |
| Language | ECMAScript | ECMAScript |
| Global object | `window` | `global` |
| DOM | Yes | No |
| File system | No | `node:fs` |
| HTTP server | No (service workers aside) | `node:http` |
| Module system | ESM | ESM and CommonJS |
| Package manager | npm (build-time) | npm |

Learning the language means learning values, functions, objects, scope, and async. Learning the platform means learning the APIs the runtime exposes.

---

## Why JavaScript is popular

- **Ubiquitous.** It runs on every device with a browser.
- **One language across the stack.** Browser, server, CLI, and tests can share code.
- **Huge ecosystem.** npm hosts millions of packages.
- **Fast feedback.** No compile step for plain JavaScript; the browser console is always available.
- **Flexible.** Functions, objects, and modules compose in many styles.
- **Strong tooling.** DevTools, Node inspector, bundlers, linters, and TypeScript.

---

## Strengths

| Strength | What it means in practice |
| --- | --- |
| Runs everywhere | Browser, server, desktop, mobile, edge |
| Low ceremony | Start with one `.js` file and a runtime |
| First-class functions | Closures, callbacks, and higher-order functions are natural |
| Async I/O | The event loop handles many concurrent connections |
| Huge ecosystem | A package exists for almost every problem |
| JSON-native | Data exchange is built into the language |
| Incremental typing | TypeScript can be adopted gradually |

---

## Weaknesses and trade-offs

| Weakness | Trade-off to understand |
| --- | --- |
| Dynamic typing | Fast to write, easy to break; TypeScript mitigates it |
| Coercion rules | `==` and truthiness produce surprises; use `===` |
| Single-threaded execution | CPU-bound work blocks the event loop |
| Mutable by default | Shared references cause accidental changes |
| Prototype-based OO | Powerful but unfamiliar if you expect classes |
| Ecosystem churn | Many packages, varying quality and maintenance |
| Async complexity | Easy to leak promises, timers, or unhandled rejections |
| Security surface | XSS, prototype pollution, and npm supply chain risk |

These are design choices, not accidents. Learn the idioms instead of importing patterns from other languages.

---

## Ecosystem

| Area | Common tools and libraries |
| --- | --- |
| Browser apps | React, Vue, Svelte, Solid, Vite |
| HTTP servers | `node:http`, Express, Fastify, Hono |
| Databases | `pg`, Prisma, Drizzle, Kysely |
| Validation | Zod, Valibot, Ajv |
| Testing | `node:test`, Vitest, Jest, Playwright |
| Logging | pino, winston |
| Observability | OpenTelemetry, Prometheus clients |
| Real-time | `ws`, Socket.IO, SSE |
| CLI tools | Commander, yargs, `node:util` parseArgs |
| Type checking | TypeScript, JSDoc + `checkJs` |
| Formatting | Prettier |
| Linting | ESLint |

Prefer the platform and small, well-maintained packages over a large framework while learning.

---

## Real projects built with JavaScript

- **Visual Studio Code** — Electron desktop app.
- **Netflix** — browser and server rendering.
- **PayPal** — Node.js services.
- **LinkedIn** — Node.js backend.
- **Discord** — desktop and web clients.
- **Upwork** — Node.js and browser apps.
- Countless SaaS products, dashboards, and internal tools.

---

## When to use JavaScript

Choose JavaScript when you need:

- Interactive browser interfaces.
- Full-stack applications with shared language and types.
- APIs and real-time services with high I/O concurrency.
- CLI tools and automation.
- Rapid prototyping and product iteration.
- Edge functions and serverless handlers.

## When not to use JavaScript

Consider another language when you need:

- Predictable CPU-bound performance with tight memory control.
- Heavy numerical computing, ML training, or data science (Python or native code).
- Hard real-time or embedded systems.
- Very large teams without TypeScript discipline.
- A platform where the JS ecosystem is immature.

---

## How JavaScript compares to languages you may know

| Concern | JavaScript | Typical alternative |
| --- | --- | --- |
| Typing | Dynamic (optional TypeScript) | Static |
| Concurrency | Event loop + async I/O | Threads, async runtimes |
| Objects | Prototypes + classes | Class-based inheritance |
| Equality | `===` and coercion rules | Usually one equality operator |
| Numbers | IEEE-754 doubles + BigInt | Integers and floats |
| Build | Optional bundler/transpiler | Compiled toolchain |
| Runtime | Browser or Node.js | OS process or VM |

---

## Exercises

1. Write a one-page summary of JavaScript in your own words. Do not copy this page.
2. Compare JavaScript with the language you know best: typing, concurrency, modules, and deployment.
3. Find three projects that use JavaScript in different environments (browser, server, desktop).
4. Write a short recommendation: for your next project, would you choose JavaScript? Why or why not?

## Self-check

1. What is the difference between ECMAScript and the browser platform?
2. Why is JavaScript called single-threaded if it handles concurrent I/O?
3. What does "functions are first-class values" mean?
4. What is the cost of JavaScript's flexibility?
5. When would you *not* choose JavaScript?

## Lab starter

Runnable starter code for this module:

[`labs/beginner/01-introduction-to-javascript`](../../../labs/beginner/01-introduction-to-javascript/README.md)

```bash
cd labs
node beginner/01-introduction-to-javascript/main.js
node --test beginner/01-introduction-to-javascript/main.test.js
```

## Module checklist

- [ ] I can explain the language vs platform distinction without notes.
- [ ] I can name three strengths and three weaknesses.
- [ ] I can map at least five ecosystem tools to their use cases.
- [ ] I completed the exercises.
- [ ] I completed the lab starter in `labs/beginner/01-introduction-to-javascript`.
- [ ] I updated `PROGRESS.md`.

## References

- [MDN: JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [ECMAScript specification](https://tc39.es/ecma262/)
- [Node.js: Introduction](https://nodejs.org/en/learn/getting-started/introduction-to-nodejs)
- [javascript.info](https://javascript.info/)
- [The Modern JavaScript Tutorial](https://javascript.info/)
- [State of JS survey](https://2024.stateofjs.com/)
