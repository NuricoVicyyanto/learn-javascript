# 04 · Data Structures

> **Level:** Beginner · **Status:** ⬜ Not started · **Estimated time:** 12 hours

## Why this module

Most application code is data transformation. Arrays, objects, maps, and sets are the core containers, and choosing the right one changes correctness and performance.

## Prerequisites

- Module 03 completed.

## Learning outcomes

- [ ] Transform arrays with map, filter, reduce, and sort.
- [ ] Model records with objects and understand reference semantics.
- [ ] Choose Map or Set over plain objects when appropriate.
- [ ] Use destructuring, spread, and JSON without accidental mutation.

## Topics

| # | Topic | Est. | Status |
| --- | --- | --- | --- |
| 04.1 | [Arrays](01-arrays.md) | 90–120 min | ⬜ |
| 04.2 | [Objects](02-objects.md) | 75–90 min | ⬜ |
| 04.3 | [Maps and Sets](03-maps-and-sets.md) | 60–75 min | ⬜ |
| 04.4 | [Destructuring, Spread, and JSON](04-destructuring-and-json.md) | 75–90 min | ⬜ |

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

[`labs/beginner/04-data-structures`](../../../labs/beginner/04-data-structures/README.md)

```bash
cd labs
node beginner/04-data-structures/main.js
node --test beginner/04-data-structures/exercises.test.js
```

## Mini project — Contact Book

Build a command-line contact book backed by objects and a Map. Support add, search, update, delete, and list. Keep storage behind a small interface so it can later be replaced by a JSON file.

**Deliverables:**

- [ ] Define a contact model with validation rules.
- [ ] Use a Map keyed by ID and sort list output.
- [ ] Return typed errors for duplicate, missing, and invalid contacts.
- [ ] Write tests for each operation and empty input.

**Definition of done:**

- [ ] Runs from a clean checkout.
- [ ] Formatted with Prettier (or consistent style); lint passes.
- [ ] Tests cover the core behavior and at least two edge cases.
- [ ] README explains how to run it and one design decision.
- [ ] You can explain every line without notes.

## Self-assessment

1. When does `map` return a new array, and when does `forEach` not?
2. Why is object assignment not a copy?
3. When is a Map better than an object?
4. What is the difference between shallow and deep copy?

Score yourself honestly. If you miss more than one question, review the module before moving on.

## References

- [ ] [MDN: Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [ ] [MDN: Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
- [ ] [MDN: Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)
- [ ] [MDN: JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON)
