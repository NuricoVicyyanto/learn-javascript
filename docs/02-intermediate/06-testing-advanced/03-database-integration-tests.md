# 06.3 Database Integration Tests

> **Level:** Intermediate · **Module:** 06 Advanced Testing · **Status:** ⬜ Not started
> **Estimated time:** 90–120 min

## Why it matters

Integration tests catch SQL and migration mistakes that fakes cannot. They must be isolated and repeatable.

## Learning objectives

By the end of this note you can:

- [ ] Explain these concepts in your own words: Disposable databases and testcontainers; Schema setup and cleanup.
- [ ] Apply this topic in a small program or experiment.
- [ ] Recognize the common failure modes covered in this note.
- [ ] Connect this topic to the module project.

## Core concepts

Work through each idea. Replace every prompt with your own explanation and a runnable example.

### 1. Disposable databases and testcontainers

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Disposable databases and testcontainers"
```

### 2. Schema setup and cleanup

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Schema setup and cleanup"
```

### 3. Transactions per test

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Transactions per test"
```

### 4. Deterministic fixtures

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Deterministic fixtures"
```

### 5. Running integration tests in CI

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Running integration tests in CI"
```



## Code experiments

1. **Baseline** - reproduce the smallest working example for Disposable databases and testcontainers. Predict the output before running.
2. **Change** - modify one detail in Schema setup and cleanup. Explain the difference.
3. **Break** - break Running integration tests in CI on purpose. Capture the error and explain it.
4. **Combine** - use Disposable databases and testcontainers and Schema setup and cleanup in one small program.

```js
// TODO: experiment space
```

## Common mistakes

- **Mistake:** Sharing one database across parallel tests without isolation. Explain the cause and the fix in your own words.
- **Mistake:** Depending on data left by a previous run. Explain the cause and the fix in your own words.
- **Mistake:** Making integration tests so slow nobody runs them. Explain the cause and the fix in your own words.

## Practice

1. Build a small module that applies Disposable databases and testcontainers and Schema setup and cleanup. Export a clear API and test it.
2. Write an integration-style test or benchmark that exercises Running integration tests in CI.
3. Document one trade-off and one failure mode of Database Integration Tests.

## Self-check

1. Explain Disposable databases and testcontainers without opening this note.
2. Compare Schema setup and cleanup with an alternative. When is each appropriate?
3. What happens at the edge case of Running integration tests in CI, and how do you detect it?
4. Where does Database Integration Tests appear in a production application?

## Summary

- 
- 
- 
- 
- 

## References

- [ ] [Node.js: test runner](https://nodejs.org/api/test.html)
- [ ] [Node.js: test mocking](https://nodejs.org/api/test.html#mocking)
- [ ] [Testcontainers for Node.js](https://node.testcontainers.org/)
- [ ] [Node.js: fetch](https://nodejs.org/en/learn/getting-started/fetch)

## Review

| Date | Recall score (1–5) | What I forgot | Next review |
| --- | --- | --- | --- |
|  |  |  |  |
