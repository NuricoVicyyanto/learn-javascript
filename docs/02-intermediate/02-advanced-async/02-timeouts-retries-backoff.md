# 02.2 Timeouts, Retries, and Backoff

> **Level:** Intermediate · **Module:** 02 Advanced Async Patterns · **Status:** ⬜ Not started
> **Estimated time:** 90–120 min

## Why it matters

Networks fail transiently. Retries help only when they are bounded, delayed, and safe for the operation.

## Learning objectives

By the end of this note you can:

- [ ] Explain these concepts in your own words: `AbortController` and `AbortSignal.timeout`; Retryable vs permanent errors.
- [ ] Apply this topic in a small program or experiment.
- [ ] Recognize the common failure modes covered in this note.
- [ ] Connect this topic to the module project.

## Core concepts

Work through each idea. Replace every prompt with your own explanation and a runnable example.

### 1. `AbortController` and `AbortSignal.timeout`

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "`AbortController` and `AbortSignal.timeout`"
```

### 2. Retryable vs permanent errors

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Retryable vs permanent errors"
```

### 3. Exponential backoff with jitter

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Exponential backoff with jitter"
```

### 4. Idempotency and retry safety

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Idempotency and retry safety"
```

### 5. Retry budgets and maximum attempts

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Retry budgets and maximum attempts"
```



## Code experiments

1. **Baseline** — reproduce the smallest working example for `AbortController` and `AbortSignal.timeout`. Predict the output before running.
2. **Change** — modify one detail in Retryable vs permanent errors. Explain the difference.
3. **Break** — break Retry budgets and maximum attempts on purpose. Capture the error and explain it.
4. **Combine** — use `AbortController` and `AbortSignal.timeout` and Retryable vs permanent errors in one small program.

```js
// TODO: experiment space
```

## Common mistakes

- **Mistake:** Retrying non-idempotent writes. Explain the cause and the fix in your own words.
- **Mistake:** Retrying immediately in a tight loop. Explain the cause and the fix in your own words.
- **Mistake:** Adding retries without an overall deadline. Explain the cause and the fix in your own words.

## Practice

1. Build a small module that applies `AbortController` and `AbortSignal.timeout` and Retryable vs permanent errors. Export a clear API and test it.
2. Write an integration-style test or benchmark that exercises Retry budgets and maximum attempts.
3. Document one trade-off and one failure mode of Timeouts, Retries, and Backoff.

## Self-check

1. Explain `AbortController` and `AbortSignal.timeout` without opening this note.
2. Compare Retryable vs permanent errors with an alternative. When is each appropriate?
3. What happens at the edge case of Retry budgets and maximum attempts, and how do you detect it?
4. Where does Timeouts, Retries, and Backoff appear in a production application?

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
