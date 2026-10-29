# Lab 01 - Runtime Internals

> **Level:** Expert · **Module guide:** [01 Runtime Internals](../../../docs/03-expert/01-runtime-internals/README.md)

## What this lab is for

One runnable Node.js package for every topic in the module. Each topic has a starter file with a TODO. Your job is to turn the placeholder into a small, working experiment and then write a real test.

## Run it

From the `labs/` directory:

```bash
# list exercises
node expert/01-runtime-internals/main.js

# run one exercise
node expert/01-runtime-internals/main.js v8-pipeline-and-jit

# run the package tests
node --test expert/01-runtime-internals/exercises.test.js
```

## Exercises

| # | Command | Topic |
| --- | --- | --- |
| 01.1 | `v8-pipeline-and-jit` | [V8 Pipeline and JIT](../../../docs/03-expert/01-runtime-internals/01-v8-pipeline-and-jit.md) |
| 01.2 | `hidden-classes-and-inline-caches` | [Hidden Classes and Inline Caches](../../../docs/03-expert/01-runtime-internals/02-hidden-classes-and-inline-caches.md) |
| 01.3 | `memory-and-garbage-collection` | [Memory and Garbage Collection](../../../docs/03-expert/01-runtime-internals/03-memory-and-garbage-collection.md) |
| 01.4 | `deoptimization` | [Deoptimization](../../../docs/03-expert/01-runtime-internals/04-deoptimization.md) |

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
