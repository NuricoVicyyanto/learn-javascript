# 03 · HTTP Clients and Servers

> **Level:** Intermediate · **Status:** ⬜ Not started · **Estimated time:** 16 hours

## Why this module

HTTP is the default interface between services. You need to build safe handlers and resilient clients without hiding behind a framework.

## Prerequisites

- Modules 01–02 completed.

## Learning outcomes

- [ ] Build an HTTP server with `node:http`.
- [ ] Compose routing and middleware.
- [ ] Design JSON APIs with validation and consistent errors.
- [ ] Build a client with timeouts, retries, and tests.

## Topics

| # | Topic | Est. | Status |
| --- | --- | --- | --- |
| 03.1 | [node:http Basics](01-node-http-basics.md) | 90–120 min | ⬜ |
| 03.2 | [Routing and Middleware](02-routing-and-middleware.md) | 90–120 min | ⬜ |
| 03.3 | [JSON APIs](03-json-apis.md) | 90–120 min | ⬜ |
| 03.4 | [HTTP Clients and Resilience](04-http-clients.md) | 90–120 min | ⬜ |

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

[`labs/intermediate/03-http-clients-and-servers`](../../../labs/intermediate/03-http-clients-and-servers/README.md)

```bash
cd labs
node intermediate/03-http-clients-and-servers/main.js
node --test intermediate/03-http-clients-and-servers/exercises.test.js
```

## Mini project — URL Shortener API

Build a URL shortener with create, redirect, stats, and delete endpoints. Include validation, collision handling, request limits, and a client package used by integration tests.

**Deliverables:**

- [ ] Use only `node:http` and the standard library for the core server.
- [ ] Validate URLs and reject unsafe schemes.
- [ ] Handle short-code collisions and expired links.
- [ ] Write tests with a real ephemeral server.

**Definition of done:**

- [ ] Runs from a clean checkout.
- [ ] Formatted with Prettier (or consistent style); lint passes.
- [ ] Tests cover the core behavior and at least two edge cases.
- [ ] README explains how to run it and one design decision.
- [ ] You can explain every line without notes.

## Self-assessment

1. Why does `fetch` not reject on a 500 response?
2. How does middleware ordering affect behavior?
3. What should a JSON error response contain?
4. How do you cancel an in-flight request?

Score yourself honestly. If you miss more than one question, review the module before moving on.

## References

- [ ] [Node.js: http](https://nodejs.org/api/http.html)
- [ ] [MDN: HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP)
- [ ] [Node.js: fetch](https://nodejs.org/en/learn/getting-started/fetch)
- [ ] [MDN: AbortController](https://developer.mozilla.org/en-US/docs/Web/API/AbortController)
