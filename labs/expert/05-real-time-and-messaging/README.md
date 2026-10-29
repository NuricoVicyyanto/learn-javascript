# Lab 05 - Real-time and Messaging

> **Level:** Expert · **Module guide:** [05 Real-time and Messaging](../../../docs/03-expert/05-real-time-and-messaging/README.md)

## What this lab is for

One runnable Node.js package for every topic in the module. Each topic has a starter file with a TODO. Your job is to turn the placeholder into a small, working experiment and then write a real test.

## Run it

From the `labs/` directory:

```bash
# list exercises
node expert/05-real-time-and-messaging/main.js

# run one exercise
node expert/05-real-time-and-messaging/main.js websockets

# run the package tests
node --test expert/05-real-time-and-messaging/exercises.test.js
```

## Exercises

| # | Command | Topic |
| --- | --- | --- |
| 05.1 | `websockets` | [WebSockets](../../../docs/03-expert/05-real-time-and-messaging/01-websockets.md) |
| 05.2 | `server-sent-events` | [Server-Sent Events](../../../docs/03-expert/05-real-time-and-messaging/02-server-sent-events.md) |
| 05.3 | `message-brokers` | [Message Brokers](../../../docs/03-expert/05-real-time-and-messaging/03-message-brokers.md) |

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
