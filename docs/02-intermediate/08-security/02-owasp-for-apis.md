# 08.2 OWASP for APIs

> **Level:** Intermediate · **Module:** 08 Security · **Status:** ⬜ Not started
> **Estimated time:** 90 min

## Why it matters

Most breaches come from a small set of preventable mistakes. A checklist plus tests prevents regressions.

## Learning objectives

By the end of this note you can:

- [ ] Explain these concepts in your own words: Broken object-level authorization; XSS and unsafe DOM APIs.
- [ ] Apply this topic in a small program or experiment.
- [ ] Recognize the common failure modes covered in this note.
- [ ] Connect this topic to the module project.

## Core concepts

Work through each idea. Replace every prompt with your own explanation and a runnable example.

### 1. Broken object-level authorization

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Broken object-level authorization"
```

### 2. XSS and unsafe DOM APIs

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "XSS and unsafe DOM APIs"
```

### 3. Prototype pollution

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Prototype pollution"
```

### 4. Input validation and request limits

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Input validation and request limits"
```

### 5. SSRF and rate limiting

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "SSRF and rate limiting"
```



## Code experiments

1. **Baseline** - reproduce the smallest working example for Broken object-level authorization. Predict the output before running.
2. **Change** - modify one detail in XSS and unsafe DOM APIs. Explain the difference.
3. **Break** - break SSRF and rate limiting on purpose. Capture the error and explain it.
4. **Combine** - use Broken object-level authorization and XSS and unsafe DOM APIs in one small program.

```js
// TODO: experiment space
```

## Common mistakes

- **Mistake:** Trusting client-provided IDs or roles. Explain the cause and the fix in your own words.
- **Mistake:** Returning stack traces to clients. Explain the cause and the fix in your own words.
- **Mistake:** Merging untrusted objects into configuration or prototypes. Explain the cause and the fix in your own words.

## Practice

1. Build a small module that applies Broken object-level authorization and XSS and unsafe DOM APIs. Export a clear API and test it.
2. Write an integration-style test or benchmark that exercises SSRF and rate limiting.
3. Document one trade-off and one failure mode of OWASP for APIs.

## Self-check

1. Explain Broken object-level authorization without opening this note.
2. Compare XSS and unsafe DOM APIs with an alternative. When is each appropriate?
3. What happens at the edge case of SSRF and rate limiting, and how do you detect it?
4. Where does OWASP for APIs appear in a production application?

## Summary

- 
- 
- 
- 
- 

## References

- [ ] [OWASP API Security Top 10](https://owasp.org/API-Security/editions/2023/en/0x11-t10/)
- [ ] [OWASP Node.js security cheat sheet](https://cheatsheetseries.owasp.org/cheatsheets/Nodejs_Security_Cheat_Sheet.html)
- [ ] [npm audit documentation](https://docs.npmjs.com/cli/commands/npm-audit)
- [ ] [Node.js: security](https://nodejs.org/en/learn/getting-started/security-best-practices)

## Review

| Date | Recall score (1–5) | What I forgot | Next review |
| --- | --- | --- | --- |
|  |  |  |  |
