# 07.4 fetch Basics

> **Level:** Beginner · **Module:** 07 Async Basics · **Status:** ⬜ Not started
> **Estimated time:** 75–90 min

## Why it matters

`fetch` is the standard HTTP client in browsers and Node.js. It does not reject on HTTP error status, so response handling matters.

## Learning objectives

By the end of this note you can:

- [ ] Explain these concepts in your own words: Requests, responses, headers, and bodies; Checking `response.ok` and status.
- [ ] Apply this topic in a small program or experiment.
- [ ] Recognize the common failure modes covered in this note.
- [ ] Connect this topic to the module project.

## Core concepts

Work through each idea. Replace every prompt with your own explanation and a runnable example.

### 1. Requests, responses, headers, and bodies

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Requests, responses, headers, and bodies"
```

### 2. Checking `response.ok` and status

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Checking `response.ok` and status"
```

### 3. Parsing JSON and text

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Parsing JSON and text"
```

### 4. AbortController and timeouts

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "AbortController and timeouts"
```

### 5. CORS in the browser

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "CORS in the browser"
```



## Code experiments

1. **Baseline** - reproduce the smallest working example for Requests, responses, headers, and bodies. Predict the output before running.
2. **Change** - modify one detail in Checking `response.ok` and status. Explain the difference.
3. **Break** - break CORS in the browser on purpose. Capture the error and explain it.
4. **Combine** - use Requests, responses, headers, and bodies and Checking `response.ok` and status in one small program.

```js
// TODO: experiment space
```

## Common mistakes

- **Mistake:** Assuming `fetch` rejects on 404 or 500. Explain the cause and the fix in your own words.
- **Mistake:** Reading the body twice. Explain the cause and the fix in your own words.
- **Mistake:** Leaving requests without a timeout or abort signal. Explain the cause and the fix in your own words.

## Practice

1. Write a small Node script that uses Requests, responses, headers, and bodies and Checking `response.ok` and status. Keep it under 40 lines.
2. Add a test for the edge case around CORS in the browser. Use `node:test` and `node:assert/strict`.
3. Explain fetch Basics aloud in three minutes, then write the summary from memory.

## Self-check

1. Explain Requests, responses, headers, and bodies without opening this note.
2. Compare Checking `response.ok` and status with an alternative. When is each appropriate?
3. What happens at the edge case of CORS in the browser, and how do you detect it?
4. Where does fetch Basics appear in a production application?

## Summary

- 
- 
- 
- 
- 

## References

- [ ] [MDN: Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [ ] [MDN: async function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
- [ ] [MDN: fetch](https://developer.mozilla.org/en-US/docs/Web/API/fetch)
- [ ] [Node.js: fetch](https://nodejs.org/en/learn/getting-started/fetch)

## Review

| Date | Recall score (1–5) | What I forgot | Next review |
| --- | --- | --- | --- |
|  |  |  |  |
