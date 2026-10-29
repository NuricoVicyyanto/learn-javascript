# 02.1 Promise Combinators

> **Level:** Intermediate · **Module:** 02 Advanced Async Patterns · **Status:** ⬜ Not started
> **Estimated time:** 75–90 min

## Why it matters

`all`, `allSettled`, `race`, and `any` answer different questions. Using the wrong one hides failures or waits too long.

## Learning objectives

By the end of this note you can:

- [ ] Explain these concepts in your own words: `Promise.all` and fail-fast behavior; `Promise.allSettled` and partial results.
- [ ] Apply this topic in a small program or experiment.
- [ ] Recognize the common failure modes covered in this note.
- [ ] Connect this topic to the module project.

## Core concepts

Work through each idea. Replace every prompt with your own explanation and a runnable example.

### 1. `Promise.all` and fail-fast behavior

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "`Promise.all` and fail-fast behavior"
```

### 2. `Promise.allSettled` and partial results

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "`Promise.allSettled` and partial results"
```

### 3. `Promise.race` and timeouts

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "`Promise.race` and timeouts"
```

### 4. `Promise.any` and first success

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "`Promise.any` and first success"
```

### 5. Aggregate errors

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Aggregate errors"
```



## Code experiments

1. **Baseline** - reproduce the smallest working example for `Promise.all` and fail-fast behavior. Predict the output before running.
2. **Change** - modify one detail in `Promise.allSettled` and partial results. Explain the difference.
3. **Break** - break Aggregate errors on purpose. Capture the error and explain it.
4. **Combine** - use `Promise.all` and fail-fast behavior and `Promise.allSettled` and partial results in one small program.

```js
// TODO: experiment space
```

## Common mistakes

- **Mistake:** Using `Promise.all` when one failure should not cancel the rest. Explain the cause and the fix in your own words.
- **Mistake:** Leaving losing promises running after `race`. Explain the cause and the fix in your own words.
- **Mistake:** Ignoring rejected reasons in `allSettled`. Explain the cause and the fix in your own words.

## Practice

1. Build a small module that applies `Promise.all` and fail-fast behavior and `Promise.allSettled` and partial results. Export a clear API and test it.
2. Write an integration-style test or benchmark that exercises Aggregate errors.
3. Document one trade-off and one failure mode of Promise Combinators.

## Self-check

1. Explain `Promise.all` and fail-fast behavior without opening this note.
2. Compare `Promise.allSettled` and partial results with an alternative. When is each appropriate?
3. What happens at the edge case of Aggregate errors, and how do you detect it?
4. Where does Promise Combinators appear in a production application?

## Summary

- 
- 
- 
- 
- 

## References

- [ ] [MDN: Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [ ] [MDN: AbortController](https://developer.mozilla.org/en-US/docs/Web/API/AbortController)
- [ ] [MDN: for await...of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of)
- [ ] [Node.js: AbortSignal](https://nodejs.org/api/globals.html#class-abortsignal)

## Review

| Date | Recall score (1–5) | What I forgot | Next review |
| --- | --- | --- | --- |
|  |  |  |  |
