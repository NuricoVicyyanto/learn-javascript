# 01.3 Timers

> **Level:** Intermediate · **Module:** 01 Event Loop and Concurrency · **Status:** ⬜ Not started
> **Estimated time:** 60–75 min

## Why it matters

Timers are not precise and do not guarantee order. They are useful for delays, polling, and deadlines when used with cleanup.

## Learning objectives

By the end of this note you can:

- [ ] Explain these concepts in your own words: `setTimeout`, `setInterval`, and `setImmediate`; Timer drift and minimum delays.
- [ ] Apply this topic in a small program or experiment.
- [ ] Recognize the common failure modes covered in this note.
- [ ] Connect this topic to the module project.

## Core concepts

Work through each idea. Replace every prompt with your own explanation and a runnable example.

### 1. `setTimeout`, `setInterval`, and `setImmediate`

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "`setTimeout`, `setInterval`, and `setImmediate`"
```

### 2. Timer drift and minimum delays

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Timer drift and minimum delays"
```

### 3. Clearing timers and cleanup

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Clearing timers and cleanup"
```

### 4. `AbortSignal.timeout`

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "`AbortSignal.timeout`"
```

### 5. Testing time-dependent code

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Testing time-dependent code"
```



## Code experiments

1. **Baseline** - reproduce the smallest working example for `setTimeout`, `setInterval`, and `setImmediate`. Predict the output before running.
2. **Change** - modify one detail in Timer drift and minimum delays. Explain the difference.
3. **Break** - break Testing time-dependent code on purpose. Capture the error and explain it.
4. **Combine** - use `setTimeout`, `setInterval`, and `setImmediate` and Timer drift and minimum delays in one small program.

```js
// TODO: experiment space
```

## Common mistakes

- **Mistake:** Leaving intervals running after shutdown. Explain the cause and the fix in your own words.
- **Mistake:** Using timers for precise scheduling. Explain the cause and the fix in your own words.
- **Mistake:** Sleeping in tests instead of controlling time. Explain the cause and the fix in your own words.

## Practice

1. Build a small module that applies `setTimeout`, `setInterval`, and `setImmediate` and Timer drift and minimum delays. Export a clear API and test it.
2. Write an integration-style test or benchmark that exercises Testing time-dependent code.
3. Document one trade-off and one failure mode of Timers.

## Self-check

1. Explain `setTimeout`, `setInterval`, and `setImmediate` without opening this note.
2. Compare Timer drift and minimum delays with an alternative. When is each appropriate?
3. What happens at the edge case of Testing time-dependent code, and how do you detect it?
4. Where does Timers appear in a production application?

## Summary

- 
- 
- 
- 
- 

## References

- [ ] [MDN: Event loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Event_loop)
- [ ] [Node.js: Event loop](https://nodejs.org/en/learn/asynchronous-work/event-loop-timers-and-nexttick)
- [ ] [Node.js: worker_threads](https://nodejs.org/api/worker_threads.html)
- [ ] [Node.js: perf_hooks](https://nodejs.org/api/perf_hooks.html)

## Review

| Date | Recall score (1–5) | What I forgot | Next review |
| --- | --- | --- | --- |
|  |  |  |  |
