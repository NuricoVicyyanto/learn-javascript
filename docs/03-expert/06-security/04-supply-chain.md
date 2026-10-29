# 06.4 Supply Chain Security

> **Level:** Expert · **Module:** 06 Security · **Status:** ⬜ Not started
> **Estimated time:** 90 min

## Why it matters

Your application includes every transitive npm package. Knowing what is inside and what changed is part of shipping safely.

## Learning objectives

By the end of this note you can:

- [ ] Explain these concepts in your own words: Lockfiles and deterministic installs; `npm audit` and advisory databases.
- [ ] Apply this topic in a small program or experiment.
- [ ] Recognize the common failure modes covered in this note.
- [ ] Connect this topic to the module project.

## Core concepts

Work through each idea. Replace every prompt with your own explanation and a runnable example.

### 1. Lockfiles and deterministic installs

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Lockfiles and deterministic installs"
```

### 2. `npm audit` and advisory databases

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "`npm audit` and advisory databases"
```

### 3. SBOM and provenance

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "SBOM and provenance"
```

### 4. Postinstall script risk

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Postinstall script risk"
```

### 5. Signed releases and dependency policy

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Signed releases and dependency policy"
```



## Code experiments

1. **Baseline** - reproduce the smallest working example for Lockfiles and deterministic installs. Predict the output before running.
2. **Change** - modify one detail in `npm audit` and advisory databases. Explain the difference.
3. **Break** - break Signed releases and dependency policy on purpose. Capture the error and explain it.
4. **Combine** - use Lockfiles and deterministic installs and `npm audit` and advisory databases in one small program.

```js
// TODO: experiment space
```

## Common mistakes

- **Mistake:** Ignoring transitive vulnerabilities. Explain the cause and the fix in your own words.
- **Mistake:** Installing unreviewed packages. Explain the cause and the fix in your own words.
- **Mistake:** Allowing arbitrary install scripts in CI. Explain the cause and the fix in your own words.

## Practice

1. Build a minimal repro or benchmark that isolates Lockfiles and deterministic installs.
2. Measure it with a profile, trace, or benchmark. Record before/after numbers for Signed releases and dependency policy.
3. Write a short ADR-style note explaining a trade-off in Supply Chain Security.

## Self-check

1. Explain Lockfiles and deterministic installs without opening this note.
2. Compare `npm audit` and advisory databases with an alternative. When is each appropriate?
3. What happens at the edge case of Signed releases and dependency policy, and how do you detect it?
4. Where does Supply Chain Security appear in a production application?

## Summary

- 
- 
- 
- 
- 

## References

- [ ] [OWASP API Security Top 10](https://owasp.org/API-Security/editions/2023/en/0x11-t10/)
- [ ] [OWASP Node.js security cheat sheet](https://cheatsheetseries.owasp.org/cheatsheets/Nodejs_Security_Cheat_Sheet.html)
- [ ] [OAuth 2.0 Security Best Current Practice](https://datatracker.ietf.org/doc/html/draft-ietf-oauth-security-topics)
- [ ] [npm audit](https://docs.npmjs.com/cli/commands/npm-audit)

## Review

| Date | Recall score (1–5) | What I forgot | Next review |
| --- | --- | --- | --- |
|  |  |  |  |
