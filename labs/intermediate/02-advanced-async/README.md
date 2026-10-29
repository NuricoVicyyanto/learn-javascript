# Lab 02 — Advanced Async Patterns

> **Level:** Intermediate · **Module guide:** [02 Advanced Async Patterns](../../../docs/02-intermediate/02-advanced-async/README.md)

## What this lab is for

One runnable Node.js package for every topic in the module. Each topic has a starter file with a TODO. Your job is to turn the placeholder into a small, working experiment and then write a real test.

## Run it

From the `labs/` directory:

```bash
# list exercises
node intermediate/02-advanced-async/main.js

# run one exercise
node intermediate/02-advanced-async/main.js promise-combinators

# run the package tests
node --test intermediate/02-advanced-async/exercises.test.js
```

## Exercises

| # | Command | Topic |
| --- | --- | --- |
| 02.1 | `promise-combinators` | [Promise Combinators](../../../docs/02-intermediate/02-advanced-async/01-promise-combinators.md) |
| 02.2 | `timeouts-retries-backoff` | [Timeouts, Retries, and Backoff](../../../docs/02-intermediate/02-advanced-async/02-timeouts-retries-backoff.md) |
| 02.3 | `bounded-concurrency` | [Bounded Concurrency](../../../docs/02-intermediate/02-advanced-async/03-bounded-concurrency.md) |
| 02.4 | `async-iteration` | [Async Iteration](../../../docs/02-intermediate/02-advanced-async/04-async-iteration.md) |

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
