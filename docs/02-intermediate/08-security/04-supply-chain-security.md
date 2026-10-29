# 08.4 Supply Chain Security

> **Level:** Intermediate · **Module:** 08 Security · **Status:** ⬜ Not started
> **Estimated time:** 75–90 min

## Why it matters

A typical Node.js app depends on hundreds of transitive packages. Knowing what is inside is part of shipping safely.

## Learning objectives

By the end of this note you can:

- [ ] Explain these concepts in your own words: `npm audit` and lockfiles; Dependency provenance and SBOMs.
- [ ] Apply this topic in a small program or experiment.
- [ ] Recognize the common failure modes covered in this note.
- [ ] Connect this topic to the module project.

## Core concepts

Work through each idea. Replace every prompt with your own explanation and a runnable example.

### 1. `npm audit` and lockfiles

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "`npm audit` and lockfiles"
```

### 2. Dependency provenance and SBOMs

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Dependency provenance and SBOMs"
```

### 3. Postinstall scripts and typosquatting

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Postinstall scripts and typosquatting"
```

### 4. Signed releases and checksums

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Signed releases and checksums"
```

### 5. Dependency update policy

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Dependency update policy"
```



## Code experiments

1. **Baseline** - reproduce the smallest working example for `npm audit` and lockfiles. Predict the output before running.
2. **Change** - modify one detail in Dependency provenance and SBOMs. Explain the difference.
3. **Break** - break Dependency update policy on purpose. Capture the error and explain it.
4. **Combine** - use `npm audit` and lockfiles and Dependency provenance and SBOMs in one small program.

```js
// TODO: experiment space
```

## Common mistakes

- **Mistake:** Ignoring transitive dependency vulnerabilities. Explain the cause and the fix in your own words.
- **Mistake:** Installing packages without checking ownership. Explain the cause and the fix in your own words.
- **Mistake:** Allowing arbitrary postinstall scripts in CI. Explain the cause and the fix in your own words.

## Practice

1. Build a small module that applies `npm audit` and lockfiles and Dependency provenance and SBOMs. Export a clear API and test it.
2. Write an integration-style test or benchmark that exercises Dependency update policy.
3. Document one trade-off and one failure mode of Supply Chain Security.

## Self-check

1. Explain `npm audit` and lockfiles without opening this note.
2. Compare Dependency provenance and SBOMs with an alternative. When is each appropriate?
3. What happens at the edge case of Dependency update policy, and how do you detect it?
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
- [ ] [npm audit documentation](https://docs.npmjs.com/cli/commands/npm-audit)
- [ ] [Node.js: security](https://nodejs.org/en/learn/getting-started/security-best-practices)

## Review

| Date | Recall score (1–5) | What I forgot | Next review |
| --- | --- | --- | --- |
|  |  |  |  |
