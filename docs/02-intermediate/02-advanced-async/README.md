# 02 · Advanced Async Patterns

> **Level:** Intermediate · **Status:** ⬜ Not started · **Estimated time:** 10 hours

## Why this module

Real async code must handle partial failure, cancellation, retries, and bounded concurrency. These patterns separate demos from services.

## Prerequisites

- Module 01 completed.

## Learning outcomes

- [ ] Choose the right promise combinator.
- [ ] Implement timeouts and retries safely.
- [ ] Bound concurrency to protect dependencies.
- [ ] Process async streams with `for await...of`.

## Topics

| # | Topic | Est. | Status |
| --- | --- | --- | --- |
| 02.1 | [Promise Combinators](01-promise-combinators.md) | 75–90 min | ⬜ |
| 02.2 | [Timeouts, Retries, and Backoff](02-timeouts-retries-backoff.md) | 90–120 min | ⬜ |
| 02.3 | [Bounded Concurrency](03-bounded-concurrency.md) | 75–90 min | ⬜ |
| 02.4 | [Async Iteration](04-async-iteration.md) | 75–90 min | ⬜ |

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

[`labs/intermediate/02-advanced-async`](../../../labs/intermediate/02-advanced-async/README.md)

```bash
cd labs
node intermediate/02-advanced-async/main.js
node --test intermediate/02-advanced-async/exercises.test.js
```

## Mini project — Deadline-Aware Aggregator

Build a service that aggregates data from three upstreams. Each upstream has its own timeout, the request has an overall budget, and slow upstreams degrade gracefully.

**Deliverables:**

- [ ] Implement a total request budget and per-upstream budgets.
- [ ] Return partial results with a structured warning.
- [ ] Cancel remaining work when the client disconnects.
- [ ] Test timeouts with controllable fake upstreams.

**Definition of done:**

- [ ] Runs from a clean checkout.
- [ ] Formatted with Prettier (or consistent style); lint passes.
- [ ] Tests cover the core behavior and at least two edge cases.
- [ ] README explains how to run it and one design decision.
- [ ] You can explain every line without notes.

## Self-assessment

1. When is `allSettled` better than `all`?
2. Why is jitter important in backoff?
3. What does a semaphore protect?
4. How do you stop an async iterator early?

Score yourself honestly. If you miss more than one question, review the module before moving on.

## References

- [ ] [MDN: Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [ ] [MDN: AbortController](https://developer.mozilla.org/en-US/docs/Web/API/AbortController)
- [ ] [MDN: for await...of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of)
- [ ] [Node.js: AbortSignal](https://nodejs.org/api/globals.html#class-abortsignal)
