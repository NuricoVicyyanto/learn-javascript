# 05 · Functions and Modules

> **Level:** Beginner · **Status:** ⬜ Not started · **Estimated time:** 10 hours

## Why this module

Closures, `this`, modules, and iterators are the features that separate beginner JavaScript from maintainable JavaScript.

## Prerequisites

- Module 04 completed.

## Learning outcomes

- [ ] Use closures to encapsulate state.
- [ ] Predict `this` binding in every call form.
- [ ] Split code into ES modules with clear public APIs.
- [ ] Write generators and understand the iterable protocol.

## Topics

| # | Topic | Est. | Status |
| --- | --- | --- | --- |
| 05.1 | [Closures](01-closures.md) | 75–90 min | ⬜ |
| 05.2 | [this Binding](02-this-binding.md) | 75–90 min | ⬜ |
| 05.3 | [ES Modules](03-es-modules.md) | 75–90 min | ⬜ |
| 05.4 | [Iterators and Generators](04-iterators-and-generators.md) | 75–90 min | ⬜ |

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

[`labs/beginner/05-functions-and-modules`](../../../labs/beginner/05-functions-and-modules/README.md)

```bash
cd labs
node beginner/05-functions-and-modules/main.js
node --test beginner/05-functions-and-modules/exercises.test.js
```

## Mini project - Notification System

Build a small notification service with a notifier interface and email, SMS, and console implementations. A dispatcher selects notifiers from configuration and records delivery results.

**Deliverables:**

- [ ] Define the smallest useful notifier contract.
- [ ] Implement at least three notifiers, including one fake for tests.
- [ ] Add a dispatcher that handles partial failure and retries once.
- [ ] Test the dispatcher with a table of success and failure cases.

**Definition of done:**

- [ ] Runs from a clean checkout.
- [ ] Formatted with Prettier (or consistent style); lint passes.
- [ ] Tests cover the core behavior and at least two edge cases.
- [ ] README explains how to run it and one design decision.
- [ ] You can explain every line without notes.

## Self-assessment

1. What exactly does a closure capture?
2. What are the four `this` binding rules?
3. Why are ES modules evaluated once?
4. When is a generator better than an array?

Score yourself honestly. If you miss more than one question, review the module before moving on.

## References

- [ ] [MDN: Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
- [ ] [MDN: this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)
- [ ] [MDN: Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
- [ ] [MDN: Iterators and generators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_generators)
