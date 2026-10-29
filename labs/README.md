# Labs

Every module has a **runnable Node.js starter package**. You do not need to create folders or guess file names: open the module lab, read the TODO, implement it, and run the tests.

All labs share one `package.json` with `"type": "module"`, so commands are simple.

## Quick start

```bash
cd labs

# list the exercises in a module
node beginner/03-language-basics/main.js

# run one exercise
node beginner/03-language-basics/main.js variables-and-types

# run the tests
node --test beginner/03-language-basics/exercises.test.js
```

An unimplemented exercise prints `TODO` and exits with status 1. That is expected until you fill it in.

## How a module lab works

```text
labs/beginner/03-language-basics/
├── README.md
├── main.js                        exercise runner
├── topics.js                      registry of exercises
├── 01_variables_and_types_lab.js
├── 02_operators_and_coercion_lab.js
├── ...
└── exercises.test.js              one skipped test per exercise
```

- Each `NN_<topic>_lab.js` file exports one async function with a TODO.
- `main.js` runs a single exercise by slug, or lists them.
- `exercises.test.js` starts every test with `{ skip: "TODO" }`. Remove the skip and add assertions when you implement the exercise.
- The module README links to every topic note in `docs/`.

## Level map

### Beginner

| Module | Command |
| --- | --- |
| 01 Introduction to JavaScript | `node beginner/01-introduction-to-javascript/main.js` |
| 02 Installation and Setup | `node beginner/02-installation-and-setup/main.js` |
| 03 Language Basics | `node beginner/03-language-basics/main.js` |
| 04 Data Structures | `node beginner/04-data-structures/main.js` |
| 05 Functions and Modules | `node beginner/05-functions-and-modules/main.js` |
| 06 Errors and Debugging | `node beginner/06-errors-and-debugging/main.js` |
| 07 Async Basics | `node beginner/07-async-basics/main.js` |
| 08 DOM and Browser APIs | `node beginner/08-dom-and-browser-apis/main.js` |
| 09 Node.js Fundamentals | `node beginner/09-node-fundamentals/main.js` |
| 10 Testing Basics | `node beginner/10-testing-basics/main.js` |
| Capstone: CLI | `node beginner/capstone-cli/src/main.js` |

### Intermediate

| Module | Command |
| --- | --- |
| 01 Event Loop and Concurrency | `node intermediate/01-event-loop-and-concurrency/main.js` |
| 02 Advanced Async Patterns | `node intermediate/02-advanced-async/main.js` |
| 03 HTTP Clients and Servers | `node intermediate/03-http-clients-and-servers/main.js` |
| 04 Databases | `node intermediate/04-databases/main.js` |
| 05 Project Architecture | `node intermediate/05-project-architecture/main.js` |
| 06 Advanced Testing | `node intermediate/06-testing-advanced/main.js` |
| 07 Observability | `node intermediate/07-observability/main.js` |
| 08 Security | `node intermediate/08-security/main.js` |
| 09 Tooling and TypeScript | `node intermediate/09-tooling-and-typescript/main.js` |
| Capstone: REST API | `node intermediate/capstone-rest-api/src/server.js` |

### Expert

| Module | Command |
| --- | --- |
| 01 Runtime Internals | `node expert/01-runtime-internals/main.js` |
| 02 Performance Engineering | `node expert/02-performance-engineering/main.js` |
| 03 Advanced Concurrency | `node expert/03-advanced-concurrency/main.js` |
| 04 Distributed Systems | `node expert/04-distributed-systems/main.js` |
| 05 Real-time and Messaging | `node expert/05-real-time-and-messaging/main.js` |
| 06 Security | `node expert/06-security/main.js` |
| 07 Data at Scale | `node expert/07-data-at-scale/main.js` |
| 08 Kubernetes and Production | `node expert/08-kubernetes-and-production/main.js` |
| Capstone: Production Platform | `node expert/capstone-platform/src/api.js` |

## Workflow for each topic

1. Open the module lab README and the linked topic note in `docs/`.
2. Open the matching `NN_<topic>_lab.js`.
3. Replace the placeholder with a small runnable experiment that covers the concepts in the file header.
4. Run the exercise and read the output.
5. Open `exercises.test.js`, remove `{ skip: ... }`, and add real assertions.
6. Run:

   ```bash
   npm run check
   node --test
   npx prettier --check .   # if installed
   ```

7. Mark the topic and module in `PROGRESS.md`.

## Rules

- Keep one exercise small enough for one sitting.
- Print labels so the output is understandable.
- Do not import a dependency unless the topic needs it.
- Do not silently delete TODOs; implement them or mark them blocked.
- If a module needs PostgreSQL, Redis, or a broker, start it with Docker Compose and document the command in the module README.
- Do not commit secrets, `.env` files, `node_modules`, or generated databases.

## Capstones

The three capstone labs are project skeletons, not single exercises:

- `beginner/capstone-cli` - commands, JSON store, tests
- `intermediate/capstone-rest-api` - HTTP API, config, store, migrations, Docker
- `expert/capstone-platform` - API and worker entry points, delivery logic, Kubernetes manifests

Read the capstone README in `docs/` first, then follow the TODO order in the lab README.
