# 06.2 HTTP Integration Tests

> **Level:** Intermediate · **Module:** 06 Advanced Testing · **Status:** ⬜ Not started
> **Estimated time:** 75–90 min

## Why it matters

Handler tests catch routing, serialization, and status-code mistakes that unit tests cannot.

## Learning objectives

By the end of this note you can:

- [ ] Explain these concepts in your own words: Starting the app on an ephemeral port; Calling it with `fetch`.
- [ ] Apply this topic in a small program or experiment.
- [ ] Recognize the common failure modes covered in this note.
- [ ] Connect this topic to the module project.

## Core concepts

Work through each idea. Replace every prompt with your own explanation and a runnable example.

### 1. Starting the app on an ephemeral port

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Starting the app on an ephemeral port"
```

### 2. Calling it with `fetch`

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Calling it with `fetch`"
```

### 3. Testing middleware and auth

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Testing middleware and auth"
```

### 4. Waiting for readiness

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Waiting for readiness"
```

### 5. Cleaning up servers and sockets

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Cleaning up servers and sockets"
```



## Code experiments

1. **Baseline** — reproduce the smallest working example for Starting the app on an ephemeral port. Predict the output before running.
2. **Change** — modify one detail in Calling it with `fetch`. Explain the difference.
3. **Break** — break Cleaning up servers and sockets on purpose. Capture the error and explain it.
4. **Combine** — use Starting the app on an ephemeral port and Calling it with `fetch` in one small program.

```js
// TODO: experiment space
```

## Common mistakes

- **Mistake:** Hard-coding a port that may be in use. Explain the cause and the fix in your own words.
- **Mistake:** Testing against a server that is not ready. Explain the cause and the fix in your own words.
- **Mistake:** Leaking open handles after the suite. Explain the cause and the fix in your own words.

## Practice

1. Build a small module that applies Starting the app on an ephemeral port and Calling it with `fetch`. Export a clear API and test it.
2. Write an integration-style test or benchmark that exercises Cleaning up servers and sockets.
3. Document one trade-off and one failure mode of HTTP Integration Tests.

## Self-check

1. Explain Starting the app on an ephemeral port without opening this note.
2. Compare Calling it with `fetch` with an alternative. When is each appropriate?
3. What happens at the edge case of Cleaning up servers and sockets, and how do you detect it?
4. Where does HTTP Integration Tests appear in a production application?

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
