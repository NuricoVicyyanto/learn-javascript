# 09 · Tooling and TypeScript

> **Level:** Intermediate · **Status:** ⬜ Not started · **Estimated time:** 10 hours

## Why this module

Modern JavaScript development depends on package scripts, bundlers, linting, and often TypeScript. These tools should reduce friction, not hide the platform.

## Prerequisites

- Modules 01–08 completed.

## Learning outcomes

- [ ] Organize scripts and workspaces with npm.
- [ ] Choose a bundler and explain its trade-offs.
- [ ] Use TypeScript types, interfaces, and generics in application code.
- [ ] Set up formatting, linting, and CI checks.

## Topics

| # | Topic | Est. | Status |
| --- | --- | --- | --- |
| 09.1 | [npm Scripts and Workspaces](01-npm-scripts-and-workspaces.md) | 75–90 min | ⬜ |
| 09.2 | [Bundlers](02-bundlers.md) | 75–90 min | ⬜ |
| 09.3 | [TypeScript Essentials](03-typescript-essentials.md) | 90–120 min | ⬜ |
| 09.4 | [Lint, Format, and CI](04-lint-format-ci.md) | 75–90 min | ⬜ |

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

[`labs/intermediate/09-tooling-and-typescript`](../../../labs/intermediate/09-tooling-and-typescript/README.md)

```bash
cd labs
node intermediate/09-tooling-and-typescript/main.js
node --test intermediate/09-tooling-and-typescript/exercises.test.js
```

## Mini project - Developer Experience Upgrade

Take an existing project and add scripts, linting, formatting, a bundler, and a CI pipeline. Then migrate one module to TypeScript and document the cost and benefit.

**Deliverables:**

- [ ] Create a single command for format, lint, test, and build.
- [ ] Add a CI workflow that runs on every push.
- [ ] Migrate one module with `strict` enabled.
- [ ] Write a note on one tool you rejected and why.

**Definition of done:**

- [ ] Runs from a clean checkout.
- [ ] Formatted with Prettier (or consistent style); lint passes.
- [ ] Tests cover the core behavior and at least two edge cases.
- [ ] README explains how to run it and one design decision.
- [ ] You can explain every line without notes.

## Self-assessment

1. When is a bundler unnecessary?
2. What does strict TypeScript catch that JavaScript does not?
3. Why is a lockfile required in CI?
4. What belongs in a pre-commit hook?

Score yourself honestly. If you miss more than one question, review the module before moving on.

## References

- [ ] [npm workspaces](https://docs.npmjs.com/cli/using-npm/workspaces)
- [ ] [Vite guide](https://vite.dev/guide/)
- [ ] [TypeScript handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [ ] [ESLint documentation](https://eslint.org/docs/latest/)
