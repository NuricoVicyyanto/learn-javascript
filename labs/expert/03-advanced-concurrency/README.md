# Lab 03 — Advanced Concurrency

> **Level:** Expert · **Module guide:** [03 Advanced Concurrency](../../../docs/03-expert/03-advanced-concurrency/README.md)

## What this lab is for

One runnable Node.js package for every topic in the module. Each topic has a starter file with a TODO. Your job is to turn the placeholder into a small, working experiment and then write a real test.

## Run it

From the `labs/` directory:

```bash
# list exercises
node expert/03-advanced-concurrency/main.js

# run one exercise
node expert/03-advanced-concurrency/main.js worker-threads

# run the package tests
node --test expert/03-advanced-concurrency/exercises.test.js
```

## Exercises

| # | Command | Topic |
| --- | --- | --- |
| 03.1 | `worker-threads` | [Worker Threads](../../../docs/03-expert/03-advanced-concurrency/01-worker-threads.md) |
| 03.2 | `streams` | [Streams](../../../docs/03-expert/03-advanced-concurrency/02-streams.md) |
| 03.3 | `backpressure` | [Backpressure and Load Shedding](../../../docs/03-expert/03-advanced-concurrency/03-backpressure.md) |
| 03.4 | `process-scaling` | [Process Scaling](../../../docs/03-expert/03-advanced-concurrency/04-process-scaling.md) |
| 03.5 | `async-context` | [Async Context](../../../docs/03-expert/03-advanced-concurrency/05-async-context.md) |

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
