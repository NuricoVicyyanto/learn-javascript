# Lab 05 — Project Architecture

> **Level:** Intermediate · **Module guide:** [05 Project Architecture](../../../docs/02-intermediate/05-project-architecture/README.md)

## What this lab is for

One runnable Node.js package for every topic in the module. Each topic has a starter file with a TODO. Your job is to turn the placeholder into a small, working experiment and then write a real test.

## Run it

From the `labs/` directory:

```bash
# list exercises
node intermediate/05-project-architecture/main.js

# run one exercise
node intermediate/05-project-architecture/main.js modules-and-layers

# run the package tests
node --test intermediate/05-project-architecture/exercises.test.js
```

## Exercises

| # | Command | Topic |
| --- | --- | --- |
| 05.1 | `modules-and-layers` | [Modules and Layers](../../../docs/02-intermediate/05-project-architecture/01-modules-and-layers.md) |
| 05.2 | `dependency-injection` | [Dependency Injection](../../../docs/02-intermediate/05-project-architecture/02-dependency-injection.md) |
| 05.3 | `configuration` | [Configuration](../../../docs/02-intermediate/05-project-architecture/03-configuration.md) |
| 05.4 | `logging` | [Structured Logging](../../../docs/02-intermediate/05-project-architecture/04-logging.md) |

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
