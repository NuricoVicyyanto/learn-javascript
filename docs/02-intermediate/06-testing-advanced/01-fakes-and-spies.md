# 06.1 Fakes and Spies

> **Level:** Intermediate · **Module:** 06 Advanced Testing · **Status:** ⬜ Not started
> **Estimated time:** 75–90 min

## Why it matters

A test double should make a test faster and clearer. Over-mocking produces tests that pass while production breaks.

## Learning objectives

By the end of this note you can:

- [ ] Explain these concepts in your own words: Fakes vs stubs vs spies; Dependency injection for tests.
- [ ] Apply this topic in a small program or experiment.
- [ ] Recognize the common failure modes covered in this note.
- [ ] Connect this topic to the module project.

## Core concepts

Work through each idea. Replace every prompt with your own explanation and a runnable example.

### 1. Fakes vs stubs vs spies

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Fakes vs stubs vs spies"
```

### 2. Dependency injection for tests

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Dependency injection for tests"
```

### 3. `t.mock` and module mocking

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "`t.mock` and module mocking"
```

### 4. Fixtures and builders

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Fixtures and builders"
```

### 5. When to use the real dependency

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "When to use the real dependency"
```



## Code experiments

1. **Baseline** - reproduce the smallest working example for Fakes vs stubs vs spies. Predict the output before running.
2. **Change** - modify one detail in Dependency injection for tests. Explain the difference.
3. **Break** - break When to use the real dependency on purpose. Capture the error and explain it.
4. **Combine** - use Fakes vs stubs vs spies and Dependency injection for tests in one small program.

```js
// TODO: experiment space
```

## Common mistakes

- **Mistake:** Mocking every dependency and testing nothing real. Explain the cause and the fix in your own words.
- **Mistake:** Asserting on call counts instead of behavior. Explain the cause and the fix in your own words.
- **Mistake:** Sharing mutable fixtures between tests. Explain the cause and the fix in your own words.

## Practice

1. Build a small module that applies Fakes vs stubs vs spies and Dependency injection for tests. Export a clear API and test it.
2. Write an integration-style test or benchmark that exercises When to use the real dependency.
3. Document one trade-off and one failure mode of Fakes and Spies.

## Self-check

1. Explain Fakes vs stubs vs spies without opening this note.
2. Compare Dependency injection for tests with an alternative. When is each appropriate?
3. What happens at the edge case of When to use the real dependency, and how do you detect it?
4. Where does Fakes and Spies appear in a production application?

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
