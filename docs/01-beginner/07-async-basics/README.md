# 07 · Async Basics

> **Level:** Beginner · **Status:** ⬜ Not started · **Estimated time:** 10 hours

## Why this module

JavaScript runs on one thread but handles many concurrent operations. Callbacks, promises, and async/await are the core tools for non-blocking code.

## Prerequisites

- Module 06 completed.

## Learning outcomes

- [ ] Use callbacks and timers without leaks or callback hell.
- [ ] Chain promises and handle rejections correctly.
- [ ] Write async/await with sequential and parallel execution.
- [ ] Call HTTP APIs with fetch and handle failures.

## Topics

| # | Topic | Est. | Status |
| --- | --- | --- | --- |
| 07.1 | [Callbacks and Timers](01-callbacks-and-timers.md) | 75–90 min | ⬜ |
| 07.2 | [Promises](02-promises.md) | 90–120 min | ⬜ |
| 07.3 | [async/await](03-async-await.md) | 75–90 min | ⬜ |
| 07.4 | [fetch Basics](04-fetch-basics.md) | 75–90 min | ⬜ |

## Module checklist

- [ ] Read every topic note and explain it without notes.
- [ ] Implement every exercise in the module lab.
- [ ] Complete the [exercises](exercises.md).
- [ ] Record your solutions in [solutions.md](solutions.md).
- [ ] Build the mini project.
- [ ] Pass the self-assessment.
- [ ] Run formatting, linting, and tests.
- [ ] Update `PROGRESS.md`.

## Exercises

Do the exercises without notes first. Then compare with `solutions.md` and write down what you missed.

- [Exercises](exercises.md)
- [Solutions](solutions.md)

## Lab starter

Runnable starter code for every topic in this module:

[`labs/beginner/07-async-basics`](../../../labs/beginner/07-async-basics/README.md)

```bash
cd labs
node beginner/07-async-basics/main.js
node --test beginner/07-async-basics/exercises.test.js
```

## Mini project - Async Weather CLI

Build a CLI that fetches weather data for several cities concurrently, handles timeouts and HTTP errors, and prints a deterministic summary. Use a fake API in tests.

**Deliverables:**

- [ ] Accept multiple cities and fetch them concurrently.
- [ ] Add a total timeout with `AbortController`.
- [ ] Report per-city failures without failing the whole command.
- [ ] Test success, timeout, and non-2xx responses with a local fake server.

**Definition of done:**

- [ ] Runs from a clean checkout.
- [ ] Formatted with Prettier (or consistent style); lint passes.
- [ ] Tests cover the core behavior and at least two edge cases.
- [ ] README explains how to run it and one design decision.
- [ ] You can explain every line without notes.

## Self-assessment

1. What are the three promise states?
2. When does `Promise.all` reject?
3. Why is `await` inside a loop sometimes a bug?
4. Why does `fetch` not throw on a 500 response?

Score yourself honestly. If you miss more than one question, review the module before moving on.

## References

- [ ] [MDN: Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [ ] [MDN: async function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
- [ ] [MDN: fetch](https://developer.mozilla.org/en-US/docs/Web/API/fetch)
- [ ] [Node.js: fetch](https://nodejs.org/en/learn/getting-started/fetch)
