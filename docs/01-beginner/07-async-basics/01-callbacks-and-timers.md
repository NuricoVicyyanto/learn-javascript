# 07.1 Callbacks and Timers

> **Level:** Beginner · **Module:** 07 Async Basics · **Status:** ⬜ Not started
> **Estimated time:** 75–90 min

## Why it matters

Callbacks are the original async primitive. Timers and callback ordering still appear in every codebase.

## Learning objectives

By the end of this note you can:

- [ ] Explain these concepts in your own words: Callback functions and error-first style; `setTimeout`, `setInterval`, and `clearInterval`.
- [ ] Apply this topic in a small program or experiment.
- [ ] Recognize the common failure modes covered in this note.
- [ ] Connect this topic to the module project.

## Core concepts

Work through each idea. Replace every prompt with your own explanation and a runnable example.

### 1. Callback functions and error-first style

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Callback functions and error-first style"
```

### 2. `setTimeout`, `setInterval`, and `clearInterval`

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "`setTimeout`, `setInterval`, and `clearInterval`"
```

### 3. Callback hell and inversion of control

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Callback hell and inversion of control"
```

### 4. Timer drift and cleanup

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Timer drift and cleanup"
```

### 5. Promisifying callback APIs

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Promisifying callback APIs"
```



## Code experiments

1. **Baseline** - reproduce the smallest working example for Callback functions and error-first style. Predict the output before running.
2. **Change** - modify one detail in `setTimeout`, `setInterval`, and `clearInterval`. Explain the difference.
3. **Break** - break Promisifying callback APIs on purpose. Capture the error and explain it.
4. **Combine** - use Callback functions and error-first style and `setTimeout`, `setInterval`, and `clearInterval` in one small program.

```js
// TODO: experiment space
```

## Common mistakes

- **Mistake:** Forgetting to clear an interval. Explain the cause and the fix in your own words.
- **Mistake:** Assuming `setTimeout(fn, 0)` runs immediately. Explain the cause and the fix in your own words.
- **Mistake:** Throwing inside a callback and losing the error. Explain the cause and the fix in your own words.

## Practice

1. Write a small Node script that uses Callback functions and error-first style and `setTimeout`, `setInterval`, and `clearInterval`. Keep it under 40 lines.
2. Add a test for the edge case around Promisifying callback APIs. Use `node:test` and `node:assert/strict`.
3. Explain Callbacks and Timers aloud in three minutes, then write the summary from memory.

## Self-check

1. Explain Callback functions and error-first style without opening this note.
2. Compare `setTimeout`, `setInterval`, and `clearInterval` with an alternative. When is each appropriate?
3. What happens at the edge case of Promisifying callback APIs, and how do you detect it?
4. Where does Callbacks and Timers appear in a production application?

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
