# 10 · Testing Basics

> **Level:** Beginner · **Status:** ⬜ Not started · **Estimated time:** 8 hours

## Why this module

Tests are executable documentation and a safety net for refactoring. Node.js has a built-in test runner, so there is no excuse to skip them.

## Prerequisites

- Module 09 completed.
- At least one project with several modules.

## Learning outcomes

- [ ] Write tests with `node:test` and `node:assert/strict`.
- [ ] Use table-driven tests and hooks.
- [ ] Measure coverage and interpret it honestly.
- [ ] Replace dependencies with fakes.

## Topics

| # | Topic | Est. | Status |
| --- | --- | --- | --- |
| 10.1 | [node:test](01-node-test.md) | 60–75 min | ⬜ |
| 10.2 | [Table-Driven Tests](02-table-driven-tests.md) | 60–75 min | ⬜ |
| 10.3 | [Coverage and Fakes](03-coverage-and-fakes.md) | 75–90 min | ⬜ |

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

[`labs/beginner/10-testing-basics`](../../../labs/beginner/10-testing-basics/README.md)

```bash
cd labs
node beginner/10-testing-basics/main.js
node --test beginner/10-testing-basics/exercises.test.js
```

## Mini project - Test Suite for the Task Store

Take the JSON task store from an earlier module and give it a real test suite: unit tests, filesystem tests with temporary directories, and coverage. Document one intentional gap.

**Deliverables:**

- [ ] Use `fs.mkdtemp` for filesystem tests.
- [ ] Cover corrupt input, empty input, and duplicate IDs.
- [ ] Add a fake clock or fake storage where time matters.
- [ ] Write a note on what coverage misses.

**Definition of done:**

- [ ] Runs from a clean checkout.
- [ ] Formatted with Prettier (or consistent style); lint passes.
- [ ] Tests cover the core behavior and at least two edge cases.
- [ ] README explains how to run it and one design decision.
- [ ] You can explain every line without notes.

## Self-assessment

1. When should a test assert on behavior rather than implementation?
2. Why is high coverage not proof of correctness?
3. How do you test a failure path without the real dependency?
4. Why must async tests be awaited?

Score yourself honestly. If you miss more than one question, review the module before moving on.

## References

- [ ] [Node.js: test runner](https://nodejs.org/api/test.html)
- [ ] [Node.js: assert](https://nodejs.org/api/assert.html)
- [ ] [Node.js: test coverage](https://nodejs.org/api/test.html#collecting-code-coverage)
- [ ] [MDN: Testing](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Testing)
