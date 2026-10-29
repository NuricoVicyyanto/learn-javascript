# 08 · Security

> **Level:** Intermediate · **Status:** ⬜ Not started · **Estimated time:** 12 hours

## Why this module

Security is a property of the whole system, not a middleware you add at the end. JavaScript and npm add specific risks: XSS, prototype pollution, and dependency supply chains.

## Prerequisites

- Intermediate HTTP and database modules completed.

## Learning outcomes

- [ ] Implement authentication and authorization with clear boundaries.
- [ ] Recognize and mitigate common web and API vulnerabilities.
- [ ] Manage secrets and TLS configuration.
- [ ] Harden the npm dependency supply chain.

## Topics

| # | Topic | Est. | Status |
| --- | --- | --- | --- |
| 08.1 | [Authentication and Authorization](01-authentication-and-authorization.md) | 90–120 min | ⬜ |
| 08.2 | [OWASP for APIs](02-owasp-for-apis.md) | 90 min | ⬜ |
| 08.3 | [Secrets and TLS](03-secrets-and-tls.md) | 75–90 min | ⬜ |
| 08.4 | [Supply Chain Security](04-supply-chain-security.md) | 75–90 min | ⬜ |

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

[`labs/intermediate/08-security`](../../../labs/intermediate/08-security/README.md)

```bash
cd labs
node intermediate/08-security/main.js
node --test intermediate/08-security/exercises.test.js
```

## Mini project — Security Hardening Review

Take the intermediate capstone API and perform a security review: threat model, authn/authz tests, input limits, secret handling, TLS, and dependency scanning. Fix the top three findings.

**Deliverables:**

- [ ] Write a threat model with trust boundaries.
- [ ] Add negative authorization tests for every resource.
- [ ] Harden headers, limits, and error responses.
- [ ] Document residual risks and accepted trade-offs.

**Definition of done:**

- [ ] Runs from a clean checkout.
- [ ] Formatted with Prettier (or consistent style); lint passes.
- [ ] Tests cover the core behavior and at least two edge cases.
- [ ] README explains how to run it and one design decision.
- [ ] You can explain every line without notes.

## Self-assessment

1. What is the difference between authentication and authorization?
2. Why is object-level authorization easy to miss?
3. How should a Node.js service obtain secrets in production?
4. What risks come with npm postinstall scripts?

Score yourself honestly. If you miss more than one question, review the module before moving on.

## References

- [ ] [OWASP API Security Top 10](https://owasp.org/API-Security/editions/2023/en/0x11-t10/)
- [ ] [OWASP Node.js security cheat sheet](https://cheatsheetseries.owasp.org/cheatsheets/Nodejs_Security_Cheat_Sheet.html)
- [ ] [npm audit documentation](https://docs.npmjs.com/cli/commands/npm-audit)
- [ ] [Node.js: security](https://nodejs.org/en/learn/getting-started/security-best-practices)
