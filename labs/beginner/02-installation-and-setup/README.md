# Lab 02 - Installation and Setup

> **Level:** Beginner · **Module guide:** [02 Installation and Setup](../../../docs/01-beginner/02-installation-and-setup/README.md)

## Goal

Prove your toolchain works: run Node.js, use npm, format, test, and inspect the environment.

## TODO

1. Complete `greet()` so it handles an empty name.
2. Run the program with and without an argument.
3. Export `greet`, import it in `main.test.js`, and remove the `skip`.
4. Record the output of `node --version` and `npm --version` in your notes.

```bash
cd labs
node beginner/02-installation-and-setup/main.js
node beginner/02-installation-and-setup/main.js Alice
node --test beginner/02-installation-and-setup/main.test.js
```

## Definition of done

- [ ] The program handles zero, one, and multiple arguments.
- [ ] The test suite passes.
- [ ] You can explain `package.json`, `node_modules`, and the lockfile.
