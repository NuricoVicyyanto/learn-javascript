# 06 · Errors and Debugging

> **Level:** Beginner · **Status:** ⬜ Not started · **Estimated time:** 8 hours

## Why this module

Production code fails. You need to throw, catch, wrap, and inspect errors, and you need a debugging workflow that finds causes instead of guessing.

## Prerequisites

- Module 05 completed.

## Learning outcomes

- [ ] Use try/catch/finally and custom errors deliberately.
- [ ] Preserve causes and add context.
- [ ] Handle rejected promises and async errors.
- [ ] Debug with breakpoints, DevTools, and `node --inspect`.

## Topics

| # | Topic | Est. | Status |
| --- | --- | --- | --- |
| 06.1 | [Exceptions](01-exceptions.md) | 60–75 min | ⬜ |
| 06.2 | [Error Types and Causes](02-error-types.md) | 75–90 min | ⬜ |
| 06.3 | [Async Errors](03-async-errors.md) | 60–75 min | ⬜ |
| 06.4 | [Debugging](04-debugging.md) | 75–90 min | ⬜ |

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

[`labs/beginner/06-errors-and-debugging`](../../../labs/beginner/06-errors-and-debugging/README.md)

```bash
cd labs
node beginner/06-errors-and-debugging/main.js
node --test beginner/06-errors-and-debugging/exercises.test.js
```

## Mini project - Resilient CSV Importer

Build a CSV importer that validates rows, reports all row-level errors with line numbers, and continues processing valid rows. Distinguish parse, validation, and I/O errors.

**Deliverables:**

- [ ] Define typed errors for parse, validation, and I/O failures.
- [ ] Return a report containing valid rows and per-row failures.
- [ ] Use `instanceof` and error codes in tests to prove the contract.
- [ ] Add a recover boundary only where a crash would lose work.

**Definition of done:**

- [ ] Runs from a clean checkout.
- [ ] Formatted with Prettier (or consistent style); lint passes.
- [ ] Tests cover the core behavior and at least two edge cases.
- [ ] README explains how to run it and one design decision.
- [ ] You can explain every line without notes.

## Self-assessment

1. When should you catch an error?
2. What does the `cause` option preserve?
3. Why can an unhandled rejection crash Node.js?
4. How do you debug a process started by npm?

Score yourself honestly. If you miss more than one question, review the module before moving on.

## References

- [ ] [MDN: Error](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)
- [ ] [Node.js: Errors](https://nodejs.org/api/errors.html)
- [ ] [Node.js: Debugging](https://nodejs.org/en/learn/getting-started/debugging)
- [ ] [Chrome DevTools: Debug JavaScript](https://developer.chrome.com/docs/devtools/javascript/)
