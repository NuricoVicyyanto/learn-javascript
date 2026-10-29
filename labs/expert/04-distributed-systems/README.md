# Lab 04 - Distributed Systems

> **Level:** Expert · **Module guide:** [04 Distributed Systems](../../../docs/03-expert/04-distributed-systems/README.md)

## What this lab is for

One runnable Node.js package for every topic in the module. Each topic has a starter file with a TODO. Your job is to turn the placeholder into a small, working experiment and then write a real test.

## Run it

From the `labs/` directory:

```bash
# list exercises
node expert/04-distributed-systems/main.js

# run one exercise
node expert/04-distributed-systems/main.js idempotency-and-retries

# run the package tests
node --test expert/04-distributed-systems/exercises.test.js
```

## Exercises

| # | Command | Topic |
| --- | --- | --- |
| 04.1 | `idempotency-and-retries` | [Idempotency and Retries](../../../docs/03-expert/04-distributed-systems/01-idempotency-and-retries.md) |
| 04.2 | `timeouts-and-circuit-breakers` | [Timeouts and Circuit Breakers](../../../docs/03-expert/04-distributed-systems/02-timeouts-and-circuit-breakers.md) |
| 04.3 | `queues-and-outbox` | [Queues and the Outbox Pattern](../../../docs/03-expert/04-distributed-systems/03-queues-and-outbox.md) |
| 04.4 | `consistency-and-observability` | [Consistency and Observability](../../../docs/03-expert/04-distributed-systems/04-consistency-and-observability.md) |

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
