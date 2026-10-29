# 03.5 Async Context

> **Level:** Expert · **Module:** 03 Advanced Concurrency · **Status:** ⬜ Not started
> **Estimated time:** 75–90 min

## Why it matters

Request-scoped data such as trace IDs must survive async boundaries. `AsyncLocalStorage` solves this without threading parameters through every function.

## Learning objectives

By the end of this note you can:

- [ ] Explain these concepts in your own words: `AsyncLocalStorage` and async context; Request IDs and tracing.
- [ ] Apply this topic in a small program or experiment.
- [ ] Recognize the common failure modes covered in this note.
- [ ] Connect this topic to the module project.

## Core concepts

Work through each idea. Replace every prompt with your own explanation and a runnable example.

### 1. `AsyncLocalStorage` and async context

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "`AsyncLocalStorage` and async context"
```

### 2. Request IDs and tracing

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Request IDs and tracing"
```

### 3. Context loss across callbacks

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Context loss across callbacks"
```

### 4. Performance and memory implications

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Performance and memory implications"
```

### 5. When to pass explicit parameters instead

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "When to pass explicit parameters instead"
```



## Code experiments

1. **Baseline** — reproduce the smallest working example for `AsyncLocalStorage` and async context. Predict the output before running.
2. **Change** — modify one detail in Request IDs and tracing. Explain the difference.
3. **Break** — break When to pass explicit parameters instead on purpose. Capture the error and explain it.
4. **Combine** — use `AsyncLocalStorage` and async context and Request IDs and tracing in one small program.

```js
// TODO: experiment space
```

## Common mistakes

- **Mistake:** Using async context for required dependencies. Explain the cause and the fix in your own words.
- **Mistake:** Assuming context survives worker threads. Explain the cause and the fix in your own words.
- **Mistake:** Leaking context across unrelated requests. Explain the cause and the fix in your own words.

## Practice

1. Build a minimal repro or benchmark that isolates `AsyncLocalStorage` and async context.
2. Measure it with a profile, trace, or benchmark. Record before/after numbers for When to pass explicit parameters instead.
3. Write a short ADR-style note explaining a trade-off in Async Context.

## Self-check

1. Explain `AsyncLocalStorage` and async context without opening this note.
2. Compare Request IDs and tracing with an alternative. When is each appropriate?
3. What happens at the edge case of When to pass explicit parameters instead, and how do you detect it?
4. Where does Async Context appear in a production application?

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
