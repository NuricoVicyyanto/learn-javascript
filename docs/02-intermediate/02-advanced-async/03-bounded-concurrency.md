# 02.3 Bounded Concurrency

> **Level:** Intermediate · **Module:** 02 Advanced Async Patterns · **Status:** ⬜ Not started
> **Estimated time:** 75–90 min

## Why it matters

`Promise.all` over thousands of items can exhaust sockets, memory, or a downstream service. Concurrency needs a budget.

## Learning objectives

By the end of this note you can:

- [ ] Explain these concepts in your own words: Worker-pool pattern with promises; A simple semaphore.
- [ ] Apply this topic in a small program or experiment.
- [ ] Recognize the common failure modes covered in this note.
- [ ] Connect this topic to the module project.

## Core concepts

Work through each idea. Replace every prompt with your own explanation and a runnable example.

### 1. Worker-pool pattern with promises

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Worker-pool pattern with promises"
```

### 2. A simple semaphore

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "A simple semaphore"
```

### 3. Queueing and backpressure

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Queueing and backpressure"
```

### 4. Preserving output order

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Preserving output order"
```

### 5. Metrics for queue depth and failures

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Metrics for queue depth and failures"
```



## Code experiments

1. **Baseline** - reproduce the smallest working example for Worker-pool pattern with promises. Predict the output before running.
2. **Change** - modify one detail in A simple semaphore. Explain the difference.
3. **Break** - break Metrics for queue depth and failures on purpose. Capture the error and explain it.
4. **Combine** - use Worker-pool pattern with promises and A simple semaphore in one small program.

```js
// TODO: experiment space
```

## Common mistakes

- **Mistake:** Creating all promises before limiting execution. Explain the cause and the fix in your own words.
- **Mistake:** Forgetting to release a semaphore on error. Explain the cause and the fix in your own words.
- **Mistake:** Sizing concurrency without measuring the dependency. Explain the cause and the fix in your own words.

## Practice

1. Build a small module that applies Worker-pool pattern with promises and A simple semaphore. Export a clear API and test it.
2. Write an integration-style test or benchmark that exercises Metrics for queue depth and failures.
3. Document one trade-off and one failure mode of Bounded Concurrency.

## Self-check

1. Explain Worker-pool pattern with promises without opening this note.
2. Compare A simple semaphore with an alternative. When is each appropriate?
3. What happens at the edge case of Metrics for queue depth and failures, and how do you detect it?
4. Where does Bounded Concurrency appear in a production application?

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
