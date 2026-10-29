# 04 · Databases

> **Level:** Intermediate · **Status:** ⬜ Not started · **Estimated time:** 16 hours

## Why this module

Most services are a database with an API in front. You need safe queries, schema changes, and transactions to keep data correct.

## Prerequisites

- Module 03 completed.
- Basic SQL knowledge.

## Learning outcomes

- [ ] Use parameterized SQL and a connection pool.
- [ ] Manage schema changes with migrations.
- [ ] Write correct transactions and handle isolation.
- [ ] Structure persistence behind testable repositories.

## Topics

| # | Topic | Est. | Status |
| --- | --- | --- | --- |
| 04.1 | [SQL and PostgreSQL](01-sql-and-pg.md) | 90–120 min | ⬜ |
| 04.2 | [Migrations](02-migrations.md) | 75–90 min | ⬜ |
| 04.3 | [Transactions](03-transactions.md) | 90–120 min | ⬜ |
| 04.4 | [Repositories](04-repositories.md) | 75–90 min | ⬜ |

## Module checklist

- [ ] Read every topic note and explain it without notes.
- [ ] Implement every exercise in the module lab.
- [ ] Complete the [exercises](exercises.md).
- [ ] Record your solutions in [solutions.md](solutions.md).
- [ ] Build the mini project.
- [ ] Pass the self-assessment.
- [ ] Run formatting, linting, and tests.
- [ ] Update `PROGRESS.md`.

## Exercises

Do the exercises without notes first. Then compare with `solutions.md` and write down what you missed.

- [Exercises](exercises.md)
- [Solutions](solutions.md)

## Lab starter

Runnable starter code for every topic in this module:

[`labs/intermediate/04-databases`](../../../labs/intermediate/04-databases/README.md)

```bash
cd labs
node intermediate/04-databases/main.js
node --test intermediate/04-databases/exercises.test.js
```

## Mini project - Bookmark Store

Build the persistence layer for a bookmark manager using PostgreSQL. Include migrations, a repository API, pagination, full-text search, and transaction tests.

**Deliverables:**

- [ ] Design the schema and write up/down migrations.
- [ ] Implement a repository with parameterized queries.
- [ ] Add integration tests against a disposable database.
- [ ] Write a note explaining one index and why it exists.

**Definition of done:**

- [ ] Runs from a clean checkout.
- [ ] Formatted with Prettier (or consistent style); lint passes.
- [ ] Tests cover the core behavior and at least two edge cases.
- [ ] README explains how to run it and one design decision.
- [ ] You can explain every line without notes.

## Self-assessment

1. Why is string interpolation dangerous in SQL?
2. How do you release a pooled client correctly?
3. What is a deadlock, and how should the application respond?
4. When is a repository interface worth the indirection?

Score yourself honestly. If you miss more than one question, review the module before moving on.

## References

- [ ] [node-postgres documentation](https://node-postgres.com/)
- [ ] [PostgreSQL documentation](https://www.postgresql.org/docs/)
- [ ] [OWASP: SQL injection](https://owasp.org/www-community/attacks/SQL_Injection)
- [ ] [Use The Index, Luke](https://use-the-index-luke.com/)
