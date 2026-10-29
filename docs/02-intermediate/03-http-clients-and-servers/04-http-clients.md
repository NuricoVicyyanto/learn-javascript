# 03.4 HTTP Clients and Resilience

> **Level:** Intermediate · **Module:** 03 HTTP Clients and Servers · **Status:** ⬜ Not started
> **Estimated time:** 90–120 min

## Why it matters

The network is unreliable and slow. Clients need timeouts, bounded retries, and tests for failure modes.

## Learning objectives

By the end of this note you can:

- [ ] Explain these concepts in your own words: `fetch` in Node.js vs the browser; Timeouts and `AbortController`.
- [ ] Apply this topic in a small program or experiment.
- [ ] Recognize the common failure modes covered in this note.
- [ ] Connect this topic to the module project.

## Core concepts

Work through each idea. Replace every prompt with your own explanation and a runnable example.

### 1. `fetch` in Node.js vs the browser

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "`fetch` in Node.js vs the browser"
```

### 2. Timeouts and `AbortController`

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Timeouts and `AbortController`"
```

### 3. Retries and idempotency

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Retries and idempotency"
```

### 4. Connection reuse and keep-alive

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Connection reuse and keep-alive"
```

### 5. Testing with a local server

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Testing with a local server"
```



## Code experiments

1. **Baseline** — reproduce the smallest working example for `fetch` in Node.js vs the browser. Predict the output before running.
2. **Change** — modify one detail in Timeouts and `AbortController`. Explain the difference.
3. **Break** — break Testing with a local server on purpose. Capture the error and explain it.
4. **Combine** — use `fetch` in Node.js vs the browser and Timeouts and `AbortController` in one small program.

```js
// TODO: experiment space
```

## Common mistakes

- **Mistake:** Fetching without a timeout. Explain the cause and the fix in your own words.
- **Mistake:** Retrying a request that is not safe. Explain the cause and the fix in your own words.
- **Mistake:** Ignoring response bodies and leaking connections. Explain the cause and the fix in your own words.

## Practice

1. Build a small module that applies `fetch` in Node.js vs the browser and Timeouts and `AbortController`. Export a clear API and test it.
2. Write an integration-style test or benchmark that exercises Testing with a local server.
3. Document one trade-off and one failure mode of HTTP Clients and Resilience.

## Self-check

1. Explain `fetch` in Node.js vs the browser without opening this note.
2. Compare Timeouts and `AbortController` with an alternative. When is each appropriate?
3. What happens at the edge case of Testing with a local server, and how do you detect it?
4. Where does HTTP Clients and Resilience appear in a production application?

## Summary

- 
- 
- 
- 
- 

## References

- [ ] [Node.js: http](https://nodejs.org/api/http.html)
- [ ] [MDN: HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP)
- [ ] [Node.js: fetch](https://nodejs.org/en/learn/getting-started/fetch)
- [ ] [MDN: AbortController](https://developer.mozilla.org/en-US/docs/Web/API/AbortController)

## Review

| Date | Recall score (1–5) | What I forgot | Next review |
| --- | --- | --- | --- |
|  |  |  |  |
