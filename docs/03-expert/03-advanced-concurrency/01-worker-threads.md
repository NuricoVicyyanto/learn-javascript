# 03.1 Worker Threads

> **Level:** Expert · **Module:** 03 Advanced Concurrency · **Status:** ⬜ Not started
> **Estimated time:** 90–120 min

## Why it matters

Worker threads run JavaScript in parallel within one process. They are the right tool for CPU-bound work, not for every async task.

## Learning objectives

By the end of this note you can:

- [ ] Explain these concepts in your own words: `worker_threads` and message passing; Worker lifecycle and termination.
- [ ] Apply this topic in a small program or experiment.
- [ ] Recognize the common failure modes covered in this note.
- [ ] Connect this topic to the module project.

## Core concepts

Work through each idea. Replace every prompt with your own explanation and a runnable example.

### 1. `worker_threads` and message passing

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "`worker_threads` and message passing"
```

### 2. Worker lifecycle and termination

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Worker lifecycle and termination"
```

### 3. Transferable objects and structured clone

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Transferable objects and structured clone"
```

### 4. Worker pools

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Worker pools"
```

### 5. Error handling and crashes

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Error handling and crashes"
```



## Code experiments

1. **Baseline** — reproduce the smallest working example for `worker_threads` and message passing. Predict the output before running.
2. **Change** — modify one detail in Worker lifecycle and termination. Explain the difference.
3. **Break** — break Error handling and crashes on purpose. Capture the error and explain it.
4. **Combine** — use `worker_threads` and message passing and Worker lifecycle and termination in one small program.

```js
// TODO: experiment space
```

## Common mistakes

- **Mistake:** Sharing mutable state between workers. Explain the cause and the fix in your own words.
- **Mistake:** Creating a worker per request. Explain the cause and the fix in your own words.
- **Mistake:** Forgetting to terminate workers on shutdown. Explain the cause and the fix in your own words.

## Practice

1. Build a minimal repro or benchmark that isolates `worker_threads` and message passing.
2. Measure it with a profile, trace, or benchmark. Record before/after numbers for Error handling and crashes.
3. Write a short ADR-style note explaining a trade-off in Worker Threads.

## Self-check

1. Explain `worker_threads` and message passing without opening this note.
2. Compare Worker lifecycle and termination with an alternative. When is each appropriate?
3. What happens at the edge case of Error handling and crashes, and how do you detect it?
4. Where does Worker Threads appear in a production application?

## Summary

- 
- 
- 
- 
- 

## References

- [ ] [Node.js: worker_threads](https://nodejs.org/api/worker_threads.html)
- [ ] [Node.js: stream](https://nodejs.org/api/stream.html)
- [ ] [Node.js: AsyncLocalStorage](https://nodejs.org/api/async_context.html)
- [ ] [Node.js: cluster](https://nodejs.org/api/cluster.html)

## Review

| Date | Recall score (1–5) | What I forgot | Next review |
| --- | --- | --- | --- |
|  |  |  |  |
