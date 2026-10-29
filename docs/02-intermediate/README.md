# Intermediate Level

> **Status:** ⬜ Not started · **Estimated time:** 10–14 weeks · 120–160 hours

## Who this level is for

Developers who know JavaScript and want to build, test, deploy, and operate real services. This level assumes you have shipped at least one small program.

## Prerequisites

- Beginner level completed and gate passed.
- Basic SQL and HTTP knowledge.
- Familiarity with the command line and Git.
- Node.js installed (Docker is needed for the deployment module).

## Learning outcomes

- [ ] Design and implement concurrent JavaScript services safely.
- [ ] Build HTTP APIs with validation, middleware, and resilient clients.
- [ ] Persist data with SQL, migrations, and transactions.
- [ ] Structure a codebase for testability and change.
- [ ] Instrument, containerize, and deploy a service.

## Modules

| # | Module | Est. |
| --- | --- | --- |
| 01 | [Event Loop and Concurrency](01-event-loop-and-concurrency/README.md) | 14 hours |
| 02 | [Advanced Async Patterns](02-advanced-async/README.md) | 10 hours |
| 03 | [HTTP Clients and Servers](03-http-clients-and-servers/README.md) | 16 hours |
| 04 | [Databases](04-databases/README.md) | 16 hours |
| 05 | [Project Architecture](05-project-architecture/README.md) | 10 hours |
| 06 | [Advanced Testing](06-testing-advanced/README.md) | 10 hours |
| 07 | [Observability](07-observability/README.md) | 10 hours |
| 08 | [Security](08-security/README.md) | 12 hours |
| 09 | [Tooling and TypeScript](09-tooling-and-typescript/README.md) | 10 hours |
| 10 | **[Capstone: REST API](10-capstone-rest-api/README.md)** | 30 hours |

## Capstone

Build and operate a production-style bookmark manager API with authentication, PostgreSQL, search, observability, Docker, and a full test suite. See [10 Capstone: REST API](10-capstone-rest-api/README.md).

## How to work through this level

1. Read this page and the module README before starting.
2. Follow the weekly rhythm in [`ROADMAP.md`](../../ROADMAP.md).
3. Fill every topic note in your own words.
4. Complete the exercises before the mini project.
5. Build the capstone over multiple sessions; do not wait until the end.
6. Run the exit gate before moving to the next level.

## Common pitfalls at this level

- **Launching async work without awaiting it.** Fire-and-forget promises hide failures.
- **Blocking the event loop.** One synchronous CPU loop freezes every request.
- **Skipping cancellation.** A missing abort signal turns a timeout into a stuck request.
- **Treating the database as an implementation detail.** SQL, indexes, and transactions are design.
- **Over-abstracting too early.** Add boundaries when a second implementation or test exists.
- **Testing only the happy path.** Most bugs live in timeouts, partial failures, and invalid input.

## Exit gate

Complete the capstone, pass its rubric with at least 18/24, and demonstrate cancellation, migrations, a failing-dependency test, and a container run. Then run the gate review in `ROADMAP.md`.

## References

- [ ] [MDN JavaScript guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [ ] [Node.js documentation](https://nodejs.org/docs/latest/api/)
- [ ] [javascript.info](https://javascript.info/)
- [ ] [Google SRE book](https://sre.google/sre-book/table-of-contents/)
