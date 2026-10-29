# Lab 07 — Observability

> **Level:** Intermediate · **Module guide:** [07 Observability](../../../docs/02-intermediate/07-observability/README.md)

## What this lab is for

One runnable Node.js package for every topic in the module. Each topic has a starter file with a TODO. Your job is to turn the placeholder into a small, working experiment and then write a real test.

## Run it

From the `labs/` directory:

```bash
# list exercises
node intermediate/07-observability/main.js

# run one exercise
node intermediate/07-observability/main.js structured-logging

# run the package tests
node --test intermediate/07-observability/exercises.test.js
```

## Exercises

| # | Command | Topic |
| --- | --- | --- |
| 07.1 | `structured-logging` | [Structured Logging](../../../docs/02-intermediate/07-observability/01-structured-logging.md) |
| 07.2 | `metrics` | [Metrics](../../../docs/02-intermediate/07-observability/02-metrics.md) |
| 07.3 | `tracing` | [Tracing](../../../docs/02-intermediate/07-observability/03-tracing.md) |
| 07.4 | `health-checks` | [Health Checks](../../../docs/02-intermediate/07-observability/04-health-checks.md) |

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
