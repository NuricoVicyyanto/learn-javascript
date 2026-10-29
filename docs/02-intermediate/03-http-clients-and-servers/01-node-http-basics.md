# 03.1 node:http Basics

> **Level:** Intermediate · **Module:** 03 HTTP Clients and Servers · **Status:** ⬜ Not started
> **Estimated time:** 90–120 min

## Why it matters

The built-in HTTP server teaches the request/response model that frameworks wrap. You need it to debug production behavior.

## Learning objectives

By the end of this note you can:

- [ ] Explain these concepts in your own words: Creating a server and handling requests; Request methods, URL, headers, and body.
- [ ] Apply this topic in a small program or experiment.
- [ ] Recognize the common failure modes covered in this note.
- [ ] Connect this topic to the module project.

## Core concepts

Work through each idea. Replace every prompt with your own explanation and a runnable example.

### 1. Creating a server and handling requests

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Creating a server and handling requests"
```

### 2. Request methods, URL, headers, and body

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Request methods, URL, headers, and body"
```

### 3. Response status, headers, and streaming

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Response status, headers, and streaming"
```

### 4. Server timeouts and keep-alive

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Server timeouts and keep-alive"
```

### 5. Graceful shutdown

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Graceful shutdown"
```



## Code experiments

1. **Baseline** - reproduce the smallest working example for Creating a server and handling requests. Predict the output before running.
2. **Change** - modify one detail in Request methods, URL, headers, and body. Explain the difference.
3. **Break** - break Graceful shutdown on purpose. Capture the error and explain it.
4. **Combine** - use Creating a server and handling requests and Request methods, URL, headers, and body in one small program.

```js
// TODO: experiment space
```

## Common mistakes

- **Mistake:** Assuming the request body is already parsed. Explain the cause and the fix in your own words.
- **Mistake:** Sending headers after the body. Explain the cause and the fix in your own words.
- **Mistake:** Leaving the server without timeouts. Explain the cause and the fix in your own words.

## Practice

1. Build a small module that applies Creating a server and handling requests and Request methods, URL, headers, and body. Export a clear API and test it.
2. Write an integration-style test or benchmark that exercises Graceful shutdown.
3. Document one trade-off and one failure mode of node:http Basics.

## Self-check

1. Explain Creating a server and handling requests without opening this note.
2. Compare Request methods, URL, headers, and body with an alternative. When is each appropriate?
3. What happens at the edge case of Graceful shutdown, and how do you detect it?
4. Where does node:http Basics appear in a production application?

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
