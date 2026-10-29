# 05 · Project Architecture

> **Level:** Intermediate · **Status:** ⬜ Not started · **Estimated time:** 10 hours

## Why this module

Architecture is the set of decisions that make change cheap or expensive. You will learn module boundaries, dependency injection, configuration, and logging without over-engineering.

## Prerequisites

- Modules 03 and 04 completed.

## Learning outcomes

- [ ] Choose a project layout that matches the size.
- [ ] Wire dependencies explicitly from the entry point.
- [ ] Load, validate, and document configuration.
- [ ] Use structured logging with request context.

## Topics

| # | Topic | Est. | Status |
| --- | --- | --- | --- |
| 05.1 | [Modules and Layers](01-modules-and-layers.md) | 75–90 min | ⬜ |
| 05.2 | [Dependency Injection](02-dependency-injection.md) | 60–75 min | ⬜ |
| 05.3 | [Configuration](03-configuration.md) | 60–75 min | ⬜ |
| 05.4 | [Structured Logging](04-logging.md) | 60–75 min | ⬜ |

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

[`labs/intermediate/05-project-architecture`](../../../labs/intermediate/05-project-architecture/README.md)

```bash
cd labs
node intermediate/05-project-architecture/main.js
node --test intermediate/05-project-architecture/exercises.test.js
```

## Mini project — Service Skeleton

Create a reusable service skeleton with explicit wiring, validated configuration, structured logging, health endpoints, and clean shutdown. Small enough to read in one sitting.

**Deliverables:**

- [ ] Write the entry point as wiring only.
- [ ] Load config from env and flags with clear precedence.
- [ ] Add request-ID-aware structured logs.
- [ ] Write a short ADR for the module layout.

**Definition of done:**

- [ ] Runs from a clean checkout.
- [ ] Formatted with Prettier (or consistent style); lint passes.
- [ ] Tests cover the core behavior and at least two edge cases.
- [ ] README explains how to run it and one design decision.
- [ ] You can explain every line without notes.

## Self-assessment

1. Why is the entry point a good place for wiring?
2. When does an interface at a dependency boundary pay off?
3. What configuration errors should stop startup?
4. What is the difference between a log and a metric?

Score yourself honestly. If you miss more than one question, review the module before moving on.

## References

- [ ] [Node.js: packages and modules](https://nodejs.org/api/packages.html)
- [ ] [pino documentation](https://getpino.io/)
- [ ] [Twelve-Factor App](https://12factor.net/)
- [ ] [MDN: JavaScript modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
