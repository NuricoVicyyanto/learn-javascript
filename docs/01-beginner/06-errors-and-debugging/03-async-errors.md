# 06.3 Async Errors

> **Level:** Beginner · **Module:** 06 Errors and Debugging · **Status:** ⬜ Not started
> **Estimated time:** 60–75 min

## Why it matters

Promise rejections do not behave like synchronous throws. Unhandled rejections can crash Node.js or disappear in the browser.

## Learning objectives

By the end of this note you can:

- [ ] Explain these concepts in your own words: Rejected promises and `.catch`; `try/catch` with `await`.
- [ ] Apply this topic in a small program or experiment.
- [ ] Recognize the common failure modes covered in this note.
- [ ] Connect this topic to the module project.

## Core concepts

Work through each idea. Replace every prompt with your own explanation and a runnable example.

### 1. Rejected promises and `.catch`

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Rejected promises and `.catch`"
```

### 2. `try/catch` with `await`

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "`try/catch` with `await`"
```

### 3. `unhandledRejection` in Node.js

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "`unhandledRejection` in Node.js"
```

### 4. Abort errors and cancellation

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Abort errors and cancellation"
```

### 5. Error handling at boundaries

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Error handling at boundaries"
```



## Code experiments

1. **Baseline** - reproduce the smallest working example for Rejected promises and `.catch`. Predict the output before running.
2. **Change** - modify one detail in `try/catch` with `await`. Explain the difference.
3. **Break** - break Error handling at boundaries on purpose. Capture the error and explain it.
4. **Combine** - use Rejected promises and `.catch` and `try/catch` with `await` in one small program.

```js
// TODO: experiment space
```

## Common mistakes

- **Mistake:** Forgetting to await a promise and missing its rejection. Explain the cause and the fix in your own words.
- **Mistake:** Catching an error without checking its type. Explain the cause and the fix in your own words.
- **Mistake:** Treating cancellation as an unexpected failure. Explain the cause and the fix in your own words.

## Practice

1. Write a small Node script that uses Rejected promises and `.catch` and `try/catch` with `await`. Keep it under 40 lines.
2. Add a test for the edge case around Error handling at boundaries. Use `node:test` and `node:assert/strict`.
3. Explain Async Errors aloud in three minutes, then write the summary from memory.

## Self-check

1. Explain Rejected promises and `.catch` without opening this note.
2. Compare `try/catch` with `await` with an alternative. When is each appropriate?
3. What happens at the edge case of Error handling at boundaries, and how do you detect it?
4. Where does Async Errors appear in a production application?

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
