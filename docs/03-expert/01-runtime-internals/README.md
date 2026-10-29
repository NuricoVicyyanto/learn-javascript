# 01 · Runtime Internals

> **Level:** Expert · **Status:** ⬜ Not started · **Estimated time:** 16 hours

## Why this module

Expert JavaScript work requires a model of the engine: parsing, JIT compilation, object shapes, memory, and garbage collection. That model explains performance cliffs that source code alone cannot.

## Prerequisites

- Intermediate level completed.
- Comfort with profiling and async code.

## Learning outcomes

- [ ] Explain the V8 parsing, bytecode, and JIT pipeline.
- [ ] Reason about hidden classes and inline caches.
- [ ] Describe garbage collection phases and memory pressure.
- [ ] Recognize deoptimization and megamorphic call sites.

## Topics

| # | Topic | Est. | Status |
| --- | --- | --- | --- |
| 01.1 | [V8 Pipeline and JIT](01-v8-pipeline-and-jit.md) | 90–120 min | ⬜ |
| 01.2 | [Hidden Classes and Inline Caches](02-hidden-classes-and-inline-caches.md) | 90–120 min | ⬜ |
| 01.3 | [Memory and Garbage Collection](03-memory-and-garbage-collection.md) | 90–120 min | ⬜ |
| 01.4 | [Deoptimization](04-deoptimization.md) | 75–90 min | ⬜ |

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

[`labs/expert/01-runtime-internals`](../../../labs/expert/01-runtime-internals/README.md)

```bash
cd labs
node expert/01-runtime-internals/main.js
node --test expert/01-runtime-internals/exercises.test.js
```

## Mini project — Engine Lab

Create a reproducible lab with experiments for shapes, inline caches, deoptimization, and GC. Each experiment needs a hypothesis, measurement, result, and explanation.

**Deliverables:**

- [ ] Build three isolated experiments with exact commands.
- [ ] Capture traces or profiles as evidence.
- [ ] Write a one-page explanation of each result.
- [ ] List one production implication per experiment.

**Definition of done:**

- [ ] Runs from a clean checkout.
- [ ] Formatted with Prettier (or consistent style); lint passes.
- [ ] Tests cover the core behavior and at least two edge cases.
- [ ] README explains how to run it and one design decision.
- [ ] You can explain every line without notes.

## Self-assessment

1. What are the main V8 execution tiers?
2. Why can adding a property in a different order hurt performance?
3. What triggers a major GC?
4. What does deoptimization tell you about your data?

Score yourself honestly. If you miss more than one question, review the module before moving on.

## References

- [ ] [V8 blog](https://v8.dev/blog)
- [ ] [V8: hidden classes](https://v8.dev/blog/fast-properties)
- [ ] [V8: garbage collection](https://v8.dev/blog/trash-talk)
- [ ] [Node.js: command-line options](https://nodejs.org/api/cli.html)
