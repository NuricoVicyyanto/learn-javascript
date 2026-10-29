# Lab 01 - Event Loop and Concurrency

> **Level:** Intermediate · **Module guide:** [01 Event Loop and Concurrency](../../../docs/02-intermediate/01-event-loop-and-concurrency/README.md)

## What this lab is for

One runnable Node.js package for every topic in the module. Each topic has a starter file with a TODO. Your job is to turn the placeholder into a small, working experiment and then write a real test.

## Run it

From the `labs/` directory:

```bash
# list exercises
node intermediate/01-event-loop-and-concurrency/main.js

# run one exercise
node intermediate/01-event-loop-and-concurrency/main.js call-stack-and-queues

# run the package tests
node --test intermediate/01-event-loop-and-concurrency/exercises.test.js
```

## Exercises

| # | Command | Topic |
| --- | --- | --- |
| 01.1 | `call-stack-and-queues` | [Call Stack and Queues](../../../docs/02-intermediate/01-event-loop-and-concurrency/01-call-stack-and-queues.md) |
| 01.2 | `microtasks-and-macrotasks` | [Microtasks and Macrotasks](../../../docs/02-intermediate/01-event-loop-and-concurrency/02-microtasks-and-macrotasks.md) |
| 01.3 | `timers` | [Timers](../../../docs/02-intermediate/01-event-loop-and-concurrency/03-timers.md) |
| 01.4 | `blocking-the-loop` | [Blocking the Event Loop](../../../docs/02-intermediate/01-event-loop-and-concurrency/04-blocking-the-loop.md) |
| 01.5 | `node-event-loop-phases` | [Node.js Event Loop Phases](../../../docs/02-intermediate/01-event-loop-and-concurrency/05-node-event-loop-phases.md) |

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
