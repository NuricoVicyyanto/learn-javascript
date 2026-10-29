# 01 · Event Loop and Concurrency

> **Level:** Intermediate · **Status:** ⬜ Not started · **Estimated time:** 14 hours

## Why this module

JavaScript's concurrency model is cooperative and single-threaded per isolate. Understanding the event loop explains latency, ordering, and the difference between async and parallel.

## Prerequisites

- Beginner level completed.
- Comfort with promises and async/await.

## Learning outcomes

- [ ] Explain the call stack, microtasks, and macrotasks.
- [ ] Predict timer and promise ordering.
- [ ] Recognize and fix event-loop blocking.
- [ ] Reason about Node.js event-loop phases.

## Topics

| # | Topic | Est. | Status |
| --- | --- | --- | --- |
| 01.1 | [Call Stack and Queues](01-call-stack-and-queues.md) | 75–90 min | ⬜ |
| 01.2 | [Microtasks and Macrotasks](02-microtasks-and-macrotasks.md) | 75–90 min | ⬜ |
| 01.3 | [Timers](03-timers.md) | 60–75 min | ⬜ |
| 01.4 | [Blocking the Event Loop](04-blocking-the-loop.md) | 75–90 min | ⬜ |
| 01.5 | [Node.js Event Loop Phases](05-node-event-loop-phases.md) | 90 min | ⬜ |

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

[`labs/intermediate/01-event-loop-and-concurrency`](../../../labs/intermediate/01-event-loop-and-concurrency/README.md)

```bash
cd labs
node intermediate/01-event-loop-and-concurrency/main.js
node --test intermediate/01-event-loop-and-concurrency/exercises.test.js
```

## Mini project - Event Loop Lab

Build a small server with one fast endpoint, one CPU-heavy endpoint, and one I/O endpoint. Measure latency and event-loop lag, then fix the blocking path.

**Deliverables:**

- [ ] Document predicted ordering before running each experiment.
- [ ] Measure event-loop delay with `perf_hooks`.
- [ ] Move CPU work off the main thread and compare results.
- [ ] Write a note explaining the trade-offs.

**Definition of done:**

- [ ] Runs from a clean checkout.
- [ ] Formatted with Prettier (or consistent style); lint passes.
- [ ] Tests cover the core behavior and at least two edge cases.
- [ ] README explains how to run it and one design decision.
- [ ] You can explain every line without notes.

## Self-assessment

1. What is the difference between a microtask and a macrotask?
2. Why does a long synchronous loop freeze a Node.js server?
3. When would you use a worker thread?
4. How do you measure event-loop lag?

Score yourself honestly. If you miss more than one question, review the module before moving on.

## References

- [ ] [MDN: Event loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Event_loop)
- [ ] [Node.js: Event loop](https://nodejs.org/en/learn/asynchronous-work/event-loop-timers-and-nexttick)
- [ ] [Node.js: worker_threads](https://nodejs.org/api/worker_threads.html)
- [ ] [Node.js: perf_hooks](https://nodejs.org/api/perf_hooks.html)
