# Lab 02 - Performance Engineering

> **Level:** Expert · **Module guide:** [02 Performance Engineering](../../../docs/03-expert/02-performance-engineering/README.md)

## What this lab is for

One runnable Node.js package for every topic in the module. Each topic has a starter file with a TODO. Your job is to turn the placeholder into a small, working experiment and then write a real test.

## Run it

From the `labs/` directory:

```bash
# list exercises
node expert/02-performance-engineering/main.js

# run one exercise
node expert/02-performance-engineering/main.js benchmarking

# run the package tests
node --test expert/02-performance-engineering/exercises.test.js
```

## Exercises

| # | Command | Topic |
| --- | --- | --- |
| 02.1 | `benchmarking` | [Benchmarking](../../../docs/03-expert/02-performance-engineering/01-benchmarking.md) |
| 02.2 | `cpu-profiling` | [CPU Profiling](../../../docs/03-expert/02-performance-engineering/02-cpu-profiling.md) |
| 02.3 | `heap-snapshots-and-leaks` | [Heap Snapshots and Leaks](../../../docs/03-expert/02-performance-engineering/03-heap-snapshots-and-leaks.md) |
| 02.4 | `optimization-patterns` | [Optimization Patterns](../../../docs/03-expert/02-performance-engineering/04-optimization-patterns.md) |

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
