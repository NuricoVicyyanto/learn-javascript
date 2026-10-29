# Lab 04 - Databases

> **Level:** Intermediate · **Module guide:** [04 Databases](../../../docs/02-intermediate/04-databases/README.md)

## What this lab is for

One runnable Node.js package for every topic in the module. Each topic has a starter file with a TODO. Your job is to turn the placeholder into a small, working experiment and then write a real test.

## Run it

From the `labs/` directory:

```bash
# list exercises
node intermediate/04-databases/main.js

# run one exercise
node intermediate/04-databases/main.js sql-and-pg

# run the package tests
node --test intermediate/04-databases/exercises.test.js
```

## Exercises

| # | Command | Topic |
| --- | --- | --- |
| 04.1 | `sql-and-pg` | [SQL and PostgreSQL](../../../docs/02-intermediate/04-databases/01-sql-and-pg.md) |
| 04.2 | `migrations` | [Migrations](../../../docs/02-intermediate/04-databases/02-migrations.md) |
| 04.3 | `transactions` | [Transactions](../../../docs/02-intermediate/04-databases/03-transactions.md) |
| 04.4 | `repositories` | [Repositories](../../../docs/02-intermediate/04-databases/04-repositories.md) |

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
