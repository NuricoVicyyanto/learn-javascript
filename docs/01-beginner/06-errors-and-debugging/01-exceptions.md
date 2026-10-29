# 06.1 Exceptions

> **Level:** Beginner · **Module:** 06 Errors and Debugging · **Status:** ⬜ Not started
> **Estimated time:** 60–75 min

## Why it matters

Exceptions interrupt normal flow and unwind the stack. Used well, they separate the happy path from failure handling.

## Learning objectives

By the end of this note you can:

- [ ] Explain these concepts in your own words: `throw` and `try/catch/finally`; Error propagation through callers.
- [ ] Apply this topic in a small program or experiment.
- [ ] Recognize the common failure modes covered in this note.
- [ ] Connect this topic to the module project.

## Core concepts

Work through each idea. Replace every prompt with your own explanation and a runnable example.

### 1. `throw` and `try/catch/finally`

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "`throw` and `try/catch/finally`"
```

### 2. Error propagation through callers

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Error propagation through callers"
```

### 3. Catching only what you can handle

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Catching only what you can handle"
```

### 4. Rethrowing and preserving context

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Rethrowing and preserving context"
```

### 5. Cleanup with `finally`

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Cleanup with `finally`"
```



## Code experiments

1. **Baseline** - reproduce the smallest working example for `throw` and `try/catch/finally`. Predict the output before running.
2. **Change** - modify one detail in Error propagation through callers. Explain the difference.
3. **Break** - break Cleanup with `finally` on purpose. Capture the error and explain it.
4. **Combine** - use `throw` and `try/catch/finally` and Error propagation through callers in one small program.

```js
// TODO: experiment space
```

## Common mistakes

- **Mistake:** Catching an error and silently ignoring it. Explain the cause and the fix in your own words.
- **Mistake:** Using exceptions for ordinary control flow. Explain the cause and the fix in your own words.
- **Mistake:** Returning from `finally` and swallowing an error. Explain the cause and the fix in your own words.

## Practice

1. Write a small Node script that uses `throw` and `try/catch/finally` and Error propagation through callers. Keep it under 40 lines.
2. Add a test for the edge case around Cleanup with `finally`. Use `node:test` and `node:assert/strict`.
3. Explain Exceptions aloud in three minutes, then write the summary from memory.

## Self-check

1. Explain `throw` and `try/catch/finally` without opening this note.
2. Compare Error propagation through callers with an alternative. When is each appropriate?
3. What happens at the edge case of Cleanup with `finally`, and how do you detect it?
4. Where does Exceptions appear in a production application?

## Summary

- 
- 
- 
- 
- 

## References

- [ ] [MDN: Error](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)
- [ ] [Node.js: Errors](https://nodejs.org/api/errors.html)
- [ ] [Node.js: Debugging](https://nodejs.org/en/learn/getting-started/debugging)
- [ ] [Chrome DevTools: Debug JavaScript](https://developer.chrome.com/docs/devtools/javascript/)

## Review

| Date | Recall score (1–5) | What I forgot | Next review |
| --- | --- | --- | --- |
|  |  |  |  |
