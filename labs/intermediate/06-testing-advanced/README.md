# Lab 06 — Advanced Testing

> **Level:** Intermediate · **Module guide:** [06 Advanced Testing](../../../docs/02-intermediate/06-testing-advanced/README.md)

## What this lab is for

One runnable Node.js package for every topic in the module. Each topic has a starter file with a TODO. Your job is to turn the placeholder into a small, working experiment and then write a real test.

## Run it

From the `labs/` directory:

```bash
# list exercises
node intermediate/06-testing-advanced/main.js

# run one exercise
node intermediate/06-testing-advanced/main.js fakes-and-spies

# run the package tests
node --test intermediate/06-testing-advanced/exercises.test.js
```

## Exercises

| # | Command | Topic |
| --- | --- | --- |
| 06.1 | `fakes-and-spies` | [Fakes and Spies](../../../docs/02-intermediate/06-testing-advanced/01-fakes-and-spies.md) |
| 06.2 | `http-integration-tests` | [HTTP Integration Tests](../../../docs/02-intermediate/06-testing-advanced/02-http-integration-tests.md) |
| 06.3 | `database-integration-tests` | [Database Integration Tests](../../../docs/02-intermediate/06-testing-advanced/03-database-integration-tests.md) |
| 06.4 | `failure-injection` | [Failure Injection](../../../docs/02-intermediate/06-testing-advanced/04-failure-injection.md) |

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
