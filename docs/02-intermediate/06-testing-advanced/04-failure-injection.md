# 06.4 Failure Injection

> **Level:** Intermediate · **Module:** 06 Advanced Testing · **Status:** ⬜ Not started
> **Estimated time:** 75–90 min

## Why it matters

Happy-path tests do not prove resilience. Deliberately failing dependencies exposes missing timeouts and error handling.

## Learning objectives

By the end of this note you can:

- [ ] Explain these concepts in your own words: Faulty proxies and fake servers; Timeouts, resets, and malformed responses.
- [ ] Apply this topic in a small program or experiment.
- [ ] Recognize the common failure modes covered in this note.
- [ ] Connect this topic to the module project.

## Core concepts

Work through each idea. Replace every prompt with your own explanation and a runnable example.

### 1. Faulty proxies and fake servers

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Faulty proxies and fake servers"
```

### 2. Timeouts, resets, and malformed responses

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Timeouts, resets, and malformed responses"
```

### 3. Clock control

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Clock control"
```

### 4. Contract tests

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Contract tests"
```

### 5. Flaky test diagnosis

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Flaky test diagnosis"
```



## Code experiments

1. **Baseline** - reproduce the smallest working example for Faulty proxies and fake servers. Predict the output before running.
2. **Change** - modify one detail in Timeouts, resets, and malformed responses. Explain the difference.
3. **Break** - break Flaky test diagnosis on purpose. Capture the error and explain it.
4. **Combine** - use Faulty proxies and fake servers and Timeouts, resets, and malformed responses in one small program.

```js
// TODO: experiment space
```

## Common mistakes

- **Mistake:** Testing retries without asserting the final outcome. Explain the cause and the fix in your own words.
- **Mistake:** Using real sleeps in tests. Explain the cause and the fix in your own words.
- **Mistake:** Ignoring open handles that hide leaks. Explain the cause and the fix in your own words.

## Practice

1. Build a small module that applies Faulty proxies and fake servers and Timeouts, resets, and malformed responses. Export a clear API and test it.
2. Write an integration-style test or benchmark that exercises Flaky test diagnosis.
3. Document one trade-off and one failure mode of Failure Injection.

## Self-check

1. Explain Faulty proxies and fake servers without opening this note.
2. Compare Timeouts, resets, and malformed responses with an alternative. When is each appropriate?
3. What happens at the edge case of Flaky test diagnosis, and how do you detect it?
4. Where does Failure Injection appear in a production application?

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
