# Lab 03 — Language Basics

> **Level:** Beginner · **Module guide:** [03 Language Basics](../../../docs/01-beginner/03-language-basics/README.md)

## What this lab is for

One runnable Node.js package for every topic in the module. Each topic has a starter file with a TODO. Your job is to turn the placeholder into a small, working experiment and then write a real test.

## Run it

From the `labs/` directory:

```bash
# list exercises
node beginner/03-language-basics/main.js

# run one exercise
node beginner/03-language-basics/main.js variables-and-types

# run the package tests
node --test beginner/03-language-basics/exercises.test.js
```

## Exercises

| # | Command | Topic |
| --- | --- | --- |
| 03.1 | `variables-and-types` | [Variables and Types](../../../docs/01-beginner/03-language-basics/01-variables-and-types.md) |
| 03.2 | `operators-and-coercion` | [Operators and Coercion](../../../docs/01-beginner/03-language-basics/02-operators-and-coercion.md) |
| 03.3 | `control-flow` | [Control Flow](../../../docs/01-beginner/03-language-basics/03-control-flow.md) |
| 03.4 | `functions` | [Functions](../../../docs/01-beginner/03-language-basics/04-functions.md) |
| 03.5 | `scope-and-hoisting` | [Scope and Hoisting](../../../docs/01-beginner/03-language-basics/05-scope-and-hoisting.md) |

## Workflow

1. Read the linked topic note in `docs/`.
2. Open `NN_<topic>_lab.js` and implement the TODO.
3. Run the exercise and inspect the output.
4. Open `exercises.test.js`, remove the `skip` option, and add assertions.
5. Run `node --test` and `npm run check`.
6. Mark the topic done in the docs note and `PROGRESS.md`.

## Rules

- Keep each exercise small. One concept per function is enough.
- Print labels so the output is readable.
- Do not delete `throw new Error("not implemented")` from another exercise.
- Do not import a dependency unless the topic requires it.
- When the module needs PostgreSQL, Redis, or a broker, start it with Docker Compose and document the command in this README.

## Definition of done

- [ ] Every exercise prints a useful result and does not throw.
- [ ] Every test has its `skip` removed and real assertions.
- [ ] `npm run check` passes for the folder.
- [ ] `node --test` passes.
- [ ] You can explain each experiment without notes.
