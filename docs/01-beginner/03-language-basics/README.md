# 03 · Language Basics

> **Level:** Beginner · **Status:** ⬜ Not started · **Estimated time:** 12 hours

## Why this module

JavaScript's small syntax hides significant rules: dynamic types, coercion, hoisting, closures, and functions as values. Fluency here prevents most beginner bugs.

## Prerequisites

- Modules 01 and 02 completed.
- Basic programming experience in any language.

## Learning outcomes

- [ ] Declare and use values without accidental coercion bugs.
- [ ] Write control flow with the right loop and early-return structure.
- [ ] Use function declarations, expressions, and arrows deliberately.
- [ ] Explain scope, hoisting, the temporal dead zone, and closures.

## Topics

| # | Topic | Est. | Status |
| --- | --- | --- | --- |
| 03.1 | [Variables and Types](01-variables-and-types.md) | 75–90 min | ⬜ |
| 03.2 | [Operators and Coercion](02-operators-and-coercion.md) | 75–90 min | ⬜ |
| 03.3 | [Control Flow](03-control-flow.md) | 75–90 min | ⬜ |
| 03.4 | [Functions](04-functions.md) | 90–120 min | ⬜ |
| 03.5 | [Scope and Hoisting](05-scope-and-hoisting.md) | 60–75 min | ⬜ |

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

[`labs/beginner/03-language-basics`](../../../labs/beginner/03-language-basics/README.md)

```bash
cd labs
node beginner/03-language-basics/main.js
node --test beginner/03-language-basics/exercises.test.js
```

## Mini project - Command-Line Calculator

Build a calculator that parses simple expressions from the command line, supports `+ - * /`, handles division by zero, and prints a readable error for invalid input. Keep parsing and evaluation in separate functions.

**Deliverables:**

- [ ] Support one operation per invocation, e.g. `node main.js 12 / 3`.
- [ ] Return a non-zero exit code and a clear message on invalid input.
- [ ] Separate parsing, evaluation, and output into testable functions.
- [ ] Add tests for valid and invalid expressions using `node:test`.

**Definition of done:**

- [ ] Runs from a clean checkout.
- [ ] Formatted with Prettier (or consistent style); lint passes.
- [ ] Tests cover the core behavior and at least two edge cases.
- [ ] README explains how to run it and one design decision.
- [ ] You can explain every line without notes.

## Self-assessment

1. What is the difference between `let`, `const`, and `var`?
2. When does implicit type coercion surprise you?
3. What is the temporal dead zone?
4. Why does an arrow function not have its own `this`?

Score yourself honestly. If you miss more than one question, review the module before moving on.

## References

- [ ] [MDN: JavaScript basics](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [ ] [javascript.info: The modern JavaScript tutorial](https://javascript.info/)
- [ ] [MDN: Equality comparisons](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness)
- [ ] [Node.js: JavaScript syntax](https://nodejs.org/en/learn/getting-started/javascript-language)
