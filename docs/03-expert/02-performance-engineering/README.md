# 02 · Performance Engineering

> **Level:** Expert · **Status:** ⬜ Not started · **Estimated time:** 16 hours

## Why this module

Performance work without measurement is guessing. You will build trustworthy benchmarks, read CPU profiles and heap snapshots, and prove that a change helped.

## Prerequisites

- Module 01 completed.
- A service or library you can profile.

## Learning outcomes

- [ ] Design benchmarks that measure the right thing.
- [ ] Read CPU profiles and flame graphs.
- [ ] Diagnose memory leaks with heap snapshots.
- [ ] Optimize with measured before/after results.

## Topics

| # | Topic | Est. | Status |
| --- | --- | --- | --- |
| 02.1 | [Benchmarking](01-benchmarking.md) | 90–120 min | ⬜ |
| 02.2 | [CPU Profiling](02-cpu-profiling.md) | 90–120 min | ⬜ |
| 02.3 | [Heap Snapshots and Leaks](03-heap-snapshots-and-leaks.md) | 90–120 min | ⬜ |
| 02.4 | [Optimization Patterns](04-optimization-patterns.md) | 90 min | ⬜ |

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

[`labs/expert/02-performance-engineering`](../../../labs/expert/02-performance-engineering/README.md)

```bash
cd labs
node expert/02-performance-engineering/main.js
node --test expert/02-performance-engineering/exercises.test.js
```

## Mini project - Performance Investigation

Take a deliberately slow service or library, establish a baseline, find the bottleneck with profiles, make one change at a time, and document the measured impact. Add a regression benchmark.

**Deliverables:**

- [ ] Write a reproducible load or benchmark harness.
- [ ] Capture baseline profiles and heap snapshots.
- [ ] Make three measured improvements with before/after data.
- [ ] Add a benchmark that would catch a regression.

**Definition of done:**

- [ ] Runs from a clean checkout.
- [ ] Formatted with Prettier (or consistent style); lint passes.
- [ ] Tests cover the core behavior and at least two edge cases.
- [ ] README explains how to run it and one design decision.
- [ ] You can explain every line without notes.

## Self-assessment

1. What makes a benchmark trustworthy?
2. When is a CPU profile misleading?
3. How do you find what retains a leaked object?
4. Why can an optimization hurt tail latency?

Score yourself honestly. If you miss more than one question, review the module before moving on.

## References

- [ ] [Node.js: profiling](https://nodejs.org/en/learn/diagnostics/profiling)
- [ ] [Chrome DevTools: performance](https://developer.chrome.com/docs/devtools/performance/)
- [ ] [V8: memory leak hunting](https://v8.dev/blog/)
- [ ] [Node.js: diagnostics](https://nodejs.org/en/learn/diagnostics)
