# 02.4 Optimization Patterns

> **Level:** Expert · **Module:** 02 Performance Engineering · **Status:** ⬜ Not started
> **Estimated time:** 90 min

## Why it matters

Most performance wins come from fewer allocations, less work, better batching, and removing blocking operations, not micro-tricks.

## Learning objectives

By the end of this note you can:

- [ ] Explain these concepts in your own words: Batching and caching; Avoiding unnecessary serialization.
- [ ] Apply this topic in a small program or experiment.
- [ ] Recognize the common failure modes covered in this note.
- [ ] Connect this topic to the module project.

## Core concepts

Work through each idea. Replace every prompt with your own explanation and a runnable example.

### 1. Batching and caching

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Batching and caching"
```

### 2. Avoiding unnecessary serialization

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Avoiding unnecessary serialization"
```

### 3. Object and array reuse

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Object and array reuse"
```

### 4. Lazy computation

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Lazy computation"
```

### 5. Measuring the impact on p95 and p99

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Measuring the impact on p95 and p99"
```



## Code experiments

1. **Baseline** - reproduce the smallest working example for Batching and caching. Predict the output before running.
2. **Change** - modify one detail in Avoiding unnecessary serialization. Explain the difference.
3. **Break** - break Measuring the impact on p95 and p99 on purpose. Capture the error and explain it.
4. **Combine** - use Batching and caching and Avoiding unnecessary serialization in one small program.

```js
// TODO: experiment space
```

## Common mistakes

- **Mistake:** Micro-optimizing unreadable code. Explain the cause and the fix in your own words.
- **Mistake:** Caching without invalidation. Explain the cause and the fix in your own words.
- **Mistake:** Improving the average while making tail latency worse. Explain the cause and the fix in your own words.

## Practice

1. Build a minimal repro or benchmark that isolates Batching and caching.
2. Measure it with a profile, trace, or benchmark. Record before/after numbers for Measuring the impact on p95 and p99.
3. Write a short ADR-style note explaining a trade-off in Optimization Patterns.

## Self-check

1. Explain Batching and caching without opening this note.
2. Compare Avoiding unnecessary serialization with an alternative. When is each appropriate?
3. What happens at the edge case of Measuring the impact on p95 and p99, and how do you detect it?
4. Where does Optimization Patterns appear in a production application?

## Summary

- 
- 
- 
- 
- 

## References

- [ ] [Node.js: profiling](https://nodejs.org/en/learn/diagnostics/profiling)
- [ ] [Chrome DevTools: performance](https://developer.chrome.com/docs/devtools/performance/)
- [ ] [V8: memory leak hunting](https://v8.dev/blog/)
- [ ] [Node.js: diagnostics](https://nodejs.org/en/learn/diagnostics)

## Review

| Date | Recall score (1–5) | What I forgot | Next review |
| --- | --- | --- | --- |
|  |  |  |  |
