# 06 · Advanced Testing

> **Level:** Intermediate · **Status:** ⬜ Not started · **Estimated time:** 10 hours

## Why this module

Unit tests are not enough for services. You need fakes, HTTP tests, real-database integration tests, and deliberate failure injection.

## Prerequisites

- Modules 03–05 completed.

## Learning outcomes

- [ ] Choose fakes, stubs, or spies deliberately.
- [ ] Test HTTP handlers with a real ephemeral server.
- [ ] Write reliable integration tests with disposable infrastructure.
- [ ] Inject network and database failures.

## Topics

| # | Topic | Est. | Status |
| --- | --- | --- | --- |
| 06.1 | [Fakes and Spies](01-fakes-and-spies.md) | 75–90 min | ⬜ |
| 06.2 | [HTTP Integration Tests](02-http-integration-tests.md) | 75–90 min | ⬜ |
| 06.3 | [Database Integration Tests](03-database-integration-tests.md) | 90–120 min | ⬜ |
| 06.4 | [Failure Injection](04-failure-injection.md) | 75–90 min | ⬜ |

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

[`labs/intermediate/06-testing-advanced`](../../../labs/intermediate/06-testing-advanced/README.md)

```bash
cd labs
node intermediate/06-testing-advanced/main.js
node --test intermediate/06-testing-advanced/exercises.test.js
```

## Mini project - Test Harness for the API

Build a test harness around the URL shortener or bookmark API: service tests with fakes, HTTP tests with an ephemeral server, and integration tests against a disposable database. Document the test pyramid.

**Deliverables:**

- [ ] Separate unit, HTTP, and integration tests.
- [ ] Create reusable fixtures and a server helper.
- [ ] Test one timeout and one malformed response path.
- [ ] Write a note on what is intentionally not tested.

**Definition of done:**

- [ ] Runs from a clean checkout.
- [ ] Formatted with Prettier (or consistent style); lint passes.
- [ ] Tests cover the core behavior and at least two edge cases.
- [ ] README explains how to run it and one design decision.
- [ ] You can explain every line without notes.

## Self-assessment

1. When is a fake better than a mock?
2. How do you test a handler without a production port?
3. What makes a database integration test reliable?
4. Why are real sleeps a problem in tests?

Score yourself honestly. If you miss more than one question, review the module before moving on.

## References

- [ ] [Node.js: test runner](https://nodejs.org/api/test.html)
- [ ] [Node.js: test mocking](https://nodejs.org/api/test.html#mocking)
- [ ] [Testcontainers for Node.js](https://node.testcontainers.org/)
- [ ] [Node.js: fetch](https://nodejs.org/en/learn/getting-started/fetch)
