# 03 · Advanced Concurrency

> **Level:** Expert · **Status:** ⬜ Not started · **Estimated time:** 16 hours

## Why this module

At scale, concurrency bugs become outages. You will use worker threads, streams, backpressure, and process-level scaling without losing correctness.

## Prerequisites

- Intermediate event-loop module completed.
- Module 01 of this level.

## Learning outcomes

- [ ] Move CPU work to worker threads safely.
- [ ] Process data with streams and bounded memory.
- [ ] Apply backpressure and load shedding.
- [ ] Scale across processes and propagate async context.

## Topics

| # | Topic | Est. | Status |
| --- | --- | --- | --- |
| 03.1 | [Worker Threads](01-worker-threads.md) | 90–120 min | ⬜ |
| 03.2 | [Streams](02-streams.md) | 90–120 min | ⬜ |
| 03.3 | [Backpressure and Load Shedding](03-backpressure.md) | 90 min | ⬜ |
| 03.4 | [Process Scaling](04-process-scaling.md) | 75–90 min | ⬜ |
| 03.5 | [Async Context](05-async-context.md) | 75–90 min | ⬜ |

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

[`labs/expert/03-advanced-concurrency`](../../../labs/expert/03-advanced-concurrency/README.md)

```bash
cd labs
node expert/03-advanced-concurrency/main.js
node --test expert/03-advanced-concurrency/exercises.test.js
```

## Mini project — Bounded Job Runner

Build a reusable job runner with a fixed worker budget, per-job timeouts, retry policy, graceful shutdown, and metrics. It should survive one slow job without blocking the rest.

**Deliverables:**

- [ ] Define ownership and shutdown semantics in writing.
- [ ] Add per-job timeout and bounded retries.
- [ ] Expose queue depth, in-flight, failures, and latency.
- [ ] Prove no leaks with repeated runs and heap snapshots.

**Definition of done:**

- [ ] Runs from a clean checkout.
- [ ] Formatted with Prettier (or consistent style); lint passes.
- [ ] Tests cover the core behavior and at least two edge cases.
- [ ] README explains how to run it and one design decision.
- [ ] You can explain every line without notes.

## Self-assessment

1. When should work move to a worker thread?
2. What does a stream's high-water mark control?
3. Why is an unbounded queue not backpressure?
4. What problem does `AsyncLocalStorage` solve?

Score yourself honestly. If you miss more than one question, review the module before moving on.

## References

- [ ] [Node.js: worker_threads](https://nodejs.org/api/worker_threads.html)
- [ ] [Node.js: stream](https://nodejs.org/api/stream.html)
- [ ] [Node.js: AsyncLocalStorage](https://nodejs.org/api/async_context.html)
- [ ] [Node.js: cluster](https://nodejs.org/api/cluster.html)
