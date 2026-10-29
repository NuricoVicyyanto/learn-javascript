# Lab 03 — HTTP Clients and Servers

> **Level:** Intermediate · **Module guide:** [03 HTTP Clients and Servers](../../../docs/02-intermediate/03-http-clients-and-servers/README.md)

## What this lab is for

One runnable Node.js package for every topic in the module. Each topic has a starter file with a TODO. Your job is to turn the placeholder into a small, working experiment and then write a real test.

## Run it

From the `labs/` directory:

```bash
# list exercises
node intermediate/03-http-clients-and-servers/main.js

# run one exercise
node intermediate/03-http-clients-and-servers/main.js node-http-basics

# run the package tests
node --test intermediate/03-http-clients-and-servers/exercises.test.js
```

## Exercises

| # | Command | Topic |
| --- | --- | --- |
| 03.1 | `node-http-basics` | [node:http Basics](../../../docs/02-intermediate/03-http-clients-and-servers/01-node-http-basics.md) |
| 03.2 | `routing-and-middleware` | [Routing and Middleware](../../../docs/02-intermediate/03-http-clients-and-servers/02-routing-and-middleware.md) |
| 03.3 | `json-apis` | [JSON APIs](../../../docs/02-intermediate/03-http-clients-and-servers/03-json-apis.md) |
| 03.4 | `http-clients` | [HTTP Clients and Resilience](../../../docs/02-intermediate/03-http-clients-and-servers/04-http-clients.md) |

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
