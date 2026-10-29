# 09 · Node.js Fundamentals

> **Level:** Beginner · **Status:** ⬜ Not started · **Estimated time:** 8 hours

## Why this module

Node.js runs JavaScript outside the browser. File system, paths, process arguments, environment variables, and npm are the daily tools of backend work.

## Prerequisites

- Modules 03–08 completed.

## Learning outcomes

- [ ] Read and write files safely with `node:fs/promises`.
- [ ] Handle CLI arguments, environment variables, and exit codes.
- [ ] Structure a package with `package.json` and scripts.
- [ ] Understand semantic versioning and lockfiles.

## Topics

| # | Topic | Est. | Status |
| --- | --- | --- | --- |
| 09.1 | [Filesystem and Paths](01-filesystem-and-paths.md) | 75–90 min | ⬜ |
| 09.2 | [Process, Environment, and Args](02-process-env-args.md) | 60–75 min | ⬜ |
| 09.3 | [npm and Packages](03-npm-and-packages.md) | 75–90 min | ⬜ |

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

[`labs/beginner/09-node-fundamentals`](../../../labs/beginner/09-node-fundamentals/README.md)

```bash
cd labs
node beginner/09-node-fundamentals/main.js
node --test beginner/09-node-fundamentals/exercises.test.js
```

## Mini project - Log Analyzer

Build a CLI that reads a log file or stdin, parses timestamp and level, and reports counts per level, the busiest minute, and the slowest request. Stream input instead of loading everything into memory.

**Deliverables:**

- [ ] Support both a file argument and stdin.
- [ ] Parse without crashing on malformed lines; report skipped lines.
- [ ] Sort and format the report deterministically.
- [ ] Test with fixtures and malformed input.

**Definition of done:**

- [ ] Runs from a clean checkout.
- [ ] Formatted with Prettier (or consistent style); lint passes.
- [ ] Tests cover the core behavior and at least two edge cases.
- [ ] README explains how to run it and one design decision.
- [ ] You can explain every line without notes.

## Self-assessment

1. Why is `path.join` safer than string concatenation?
2. What is the difference between `process.exit` and `process.exitCode`?
3. Why is the lockfile committed?
4. When is a dependency worth adding?

Score yourself honestly. If you miss more than one question, review the module before moving on.

## References

- [ ] [Node.js: fs](https://nodejs.org/api/fs.html)
- [ ] [Node.js: path](https://nodejs.org/api/path.html)
- [ ] [Node.js: process](https://nodejs.org/api/process.html)
- [ ] [npm docs: package.json](https://docs.npmjs.com/cli/configuring-npm/package-json)
