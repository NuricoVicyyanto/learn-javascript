# 06 · Security

> **Level:** Expert · **Status:** ⬜ Not started · **Estimated time:** 14 hours

## Why this module

Security is a property of the whole system. At expert level you threat-model, design authorization, harden TLS and secrets, and secure the supply chain.

## Prerequisites

- Intermediate security module completed.

## Learning outcomes

- [ ] Design OAuth2/OIDC and session-based authentication.
- [ ] Threat-model an application and prioritize mitigations.
- [ ] Configure TLS, mTLS, and secret management.
- [ ] Secure the npm and build supply chain.

## Topics

| # | Topic | Est. | Status |
| --- | --- | --- | --- |
| 06.1 | [OAuth2 and OIDC](01-oauth-and-oidc.md) | 90–120 min | ⬜ |
| 06.2 | [Threat Modeling](02-threat-modeling.md) | 90 min | ⬜ |
| 06.3 | [TLS and Secrets](03-tls-and-secrets.md) | 90 min | ⬜ |
| 06.4 | [Supply Chain Security](04-supply-chain.md) | 90 min | ⬜ |

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

[`labs/expert/06-security`](../../../labs/expert/06-security/README.md)

```bash
cd labs
node expert/06-security/main.js
node --test expert/06-security/exercises.test.js
```

## Mini project - Security Hardening Review

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

1. Why is the authorization code flow with PKCE preferred?
2. What claims must be validated in an OIDC token?
3. How should a service obtain secrets in production?
4. What makes an npm install reproducible?

Score yourself honestly. If you miss more than one question, review the module before moving on.

## References

- [ ] [OWASP API Security Top 10](https://owasp.org/API-Security/editions/2023/en/0x11-t10/)
- [ ] [OWASP Node.js security cheat sheet](https://cheatsheetseries.owasp.org/cheatsheets/Nodejs_Security_Cheat_Sheet.html)
- [ ] [OAuth 2.0 Security Best Current Practice](https://datatracker.ietf.org/doc/html/draft-ietf-oauth-security-topics)
- [ ] [npm audit](https://docs.npmjs.com/cli/commands/npm-audit)
