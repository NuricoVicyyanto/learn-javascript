# Lab 05 — Functions and Modules

> **Level:** Beginner · **Module guide:** [05 Functions and Modules](../../../docs/01-beginner/05-functions-and-modules/README.md)

## What this lab is for

One runnable Node.js package for every topic in the module. Each topic has a starter file with a TODO. Your job is to turn the placeholder into a small, working experiment and then write a real test.

## Run it

From the `labs/` directory:

```bash
# list exercises
node beginner/05-functions-and-modules/main.js

# run one exercise
node beginner/05-functions-and-modules/main.js closures

# run the package tests
node --test beginner/05-functions-and-modules/exercises.test.js
```

## Exercises

| # | Command | Topic |
| --- | --- | --- |
| 05.1 | `closures` | [Closures](../../../docs/01-beginner/05-functions-and-modules/01-closures.md) |
| 05.2 | `this-binding` | [this Binding](../../../docs/01-beginner/05-functions-and-modules/02-this-binding.md) |
| 05.3 | `es-modules` | [ES Modules](../../../docs/01-beginner/05-functions-and-modules/03-es-modules.md) |
| 05.4 | `iterators-and-generators` | [Iterators and Generators](../../../docs/01-beginner/05-functions-and-modules/04-iterators-and-generators.md) |

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
