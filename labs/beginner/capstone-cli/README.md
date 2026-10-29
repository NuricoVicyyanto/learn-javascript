# Capstone Lab — CLI Application

> **Level:** Beginner · **Spec:** [Capstone CLI](../../../docs/01-beginner/11-capstone-cli/README.md)

## Goal

Turn this skeleton into the tested task CLI described in the capstone requirements.

## Layout

```text
capstone-cli/
├── src/main.js        entry point and wiring
├── src/app.js         commands and business rules
├── src/store.js       JSON persistence
└── test/              app and store tests
```

## Run

```bash
cd labs
node beginner/capstone-cli/src/main.js add "Learn JavaScript"
node beginner/capstone-cli/src/main.js list
node --test beginner/capstone-cli/test
```

## TODO order

1. Define the task model and store contract in `src/app.js`.
2. Implement load/save with atomic writes in `src/store.js`.
3. Implement `add`, `list`, `done`, `delete`, and `stats`.
4. Add `--json` output.
5. Replace every `skip` with real tests.
6. Add help text and non-zero exit codes.

## Definition of done

- [ ] All commands work from the README examples.
- [ ] Data survives restarts and a corrupt file is reported safely.
- [ ] `--json` output is stable and testable.
- [ ] `node --check`, `node --test`, and formatting pass.
- [ ] You can explain the module boundaries.
