# 06.2 Error Types and Causes

> **Level:** Beginner · **Module:** 06 Errors and Debugging · **Status:** ⬜ Not started
> **Estimated time:** 75–90 min

## Why it matters

Not all failures are the same. Typed errors and `cause` let callers make decisions and keep diagnostic context.

## Learning objectives

By the end of this note you can:

- [ ] Explain these concepts in your own words: Built-in error types; Custom error classes.
- [ ] Apply this topic in a small program or experiment.
- [ ] Recognize the common failure modes covered in this note.
- [ ] Connect this topic to the module project.

## Core concepts

Work through each idea. Replace every prompt with your own explanation and a runnable example.

### 1. Built-in error types

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Built-in error types"
```

### 2. Custom error classes

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Custom error classes"
```

### 3. The `cause` option

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "The `cause` option"
```

### 4. `AggregateError`

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "`AggregateError`"
```

### 5. Serializing errors for logs and APIs

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Serializing errors for logs and APIs"
```



## Code experiments

1. **Baseline** - reproduce the smallest working example for Built-in error types. Predict the output before running.
2. **Change** - modify one detail in Custom error classes. Explain the difference.
3. **Break** - break Serializing errors for logs and APIs on purpose. Capture the error and explain it.
4. **Combine** - use Built-in error types and Custom error classes in one small program.

```js
// TODO: experiment space
```

## Common mistakes

- **Mistake:** Throwing strings instead of Error objects. Explain the cause and the fix in your own words.
- **Mistake:** Losing the original error when wrapping. Explain the cause and the fix in your own words.
- **Mistake:** Leaking stack traces or secrets to clients. Explain the cause and the fix in your own words.

## Practice

1. Write a small Node script that uses Built-in error types and Custom error classes. Keep it under 40 lines.
2. Add a test for the edge case around Serializing errors for logs and APIs. Use `node:test` and `node:assert/strict`.
3. Explain Error Types and Causes aloud in three minutes, then write the summary from memory.

## Self-check

1. Explain Built-in error types without opening this note.
2. Compare Custom error classes with an alternative. When is each appropriate?
3. What happens at the edge case of Serializing errors for logs and APIs, and how do you detect it?
4. Where does Error Types and Causes appear in a production application?

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
