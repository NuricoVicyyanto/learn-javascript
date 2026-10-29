# Lab 08 - Security

> **Level:** Intermediate · **Module guide:** [08 Security](../../../docs/02-intermediate/08-security/README.md)

## What this lab is for

One runnable Node.js package for every topic in the module. Each topic has a starter file with a TODO. Your job is to turn the placeholder into a small, working experiment and then write a real test.

## Run it

From the `labs/` directory:

```bash
# list exercises
node intermediate/08-security/main.js

# run one exercise
node intermediate/08-security/main.js authentication-and-authorization

# run the package tests
node --test intermediate/08-security/exercises.test.js
```

## Exercises

| # | Command | Topic |
| --- | --- | --- |
| 08.1 | `authentication-and-authorization` | [Authentication and Authorization](../../../docs/02-intermediate/08-security/01-authentication-and-authorization.md) |
| 08.2 | `owasp-for-apis` | [OWASP for APIs](../../../docs/02-intermediate/08-security/02-owasp-for-apis.md) |
| 08.3 | `secrets-and-tls` | [Secrets and TLS](../../../docs/02-intermediate/08-security/03-secrets-and-tls.md) |
| 08.4 | `supply-chain-security` | [Supply Chain Security](../../../docs/02-intermediate/08-security/04-supply-chain-security.md) |

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
