# Lab 06 — Security

> **Level:** Expert · **Module guide:** [06 Security](../../../docs/03-expert/06-security/README.md)

## What this lab is for

One runnable Node.js package for every topic in the module. Each topic has a starter file with a TODO. Your job is to turn the placeholder into a small, working experiment and then write a real test.

## Run it

From the `labs/` directory:

```bash
# list exercises
node expert/06-security/main.js

# run one exercise
node expert/06-security/main.js oauth-and-oidc

# run the package tests
node --test expert/06-security/exercises.test.js
```

## Exercises

| # | Command | Topic |
| --- | --- | --- |
| 06.1 | `oauth-and-oidc` | [OAuth2 and OIDC](../../../docs/03-expert/06-security/01-oauth-and-oidc.md) |
| 06.2 | `threat-modeling` | [Threat Modeling](../../../docs/03-expert/06-security/02-threat-modeling.md) |
| 06.3 | `tls-and-secrets` | [TLS and Secrets](../../../docs/03-expert/06-security/03-tls-and-secrets.md) |
| 06.4 | `supply-chain` | [Supply Chain Security](../../../docs/03-expert/06-security/04-supply-chain.md) |

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
