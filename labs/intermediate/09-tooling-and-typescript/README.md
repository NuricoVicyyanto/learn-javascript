# Lab 09 — Tooling and TypeScript

> **Level:** Intermediate · **Module guide:** [09 Tooling and TypeScript](../../../docs/02-intermediate/09-tooling-and-typescript/README.md)

## What this lab is for

One runnable Node.js package for every topic in the module. Each topic has a starter file with a TODO. Your job is to turn the placeholder into a small, working experiment and then write a real test.

## Run it

From the `labs/` directory:

```bash
# list exercises
node intermediate/09-tooling-and-typescript/main.js

# run one exercise
node intermediate/09-tooling-and-typescript/main.js npm-scripts-and-workspaces

# run the package tests
node --test intermediate/09-tooling-and-typescript/exercises.test.js
```

## Exercises

| # | Command | Topic |
| --- | --- | --- |
| 09.1 | `npm-scripts-and-workspaces` | [npm Scripts and Workspaces](../../../docs/02-intermediate/09-tooling-and-typescript/01-npm-scripts-and-workspaces.md) |
| 09.2 | `bundlers` | [Bundlers](../../../docs/02-intermediate/09-tooling-and-typescript/02-bundlers.md) |
| 09.3 | `typescript-essentials` | [TypeScript Essentials](../../../docs/02-intermediate/09-tooling-and-typescript/03-typescript-essentials.md) |
| 09.4 | `lint-format-ci` | [Lint, Format, and CI](../../../docs/02-intermediate/09-tooling-and-typescript/04-lint-format-ci.md) |

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
