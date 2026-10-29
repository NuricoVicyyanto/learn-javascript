# 03.4 Process Scaling

> **Level:** Expert · **Module:** 03 Advanced Concurrency · **Status:** ⬜ Not started
> **Estimated time:** 75–90 min

## Why it matters

Node.js runs one event loop per process. Scaling across cores means the cluster module, containers, or a process manager.

## Learning objectives

By the end of this note you can:

- [ ] Explain these concepts in your own words: Cluster module and shared ports; Container replicas vs in-process workers.
- [ ] Apply this topic in a small program or experiment.
- [ ] Recognize the common failure modes covered in this note.
- [ ] Connect this topic to the module project.

## Core concepts

Work through each idea. Replace every prompt with your own explanation and a runnable example.

### 1. Cluster module and shared ports

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Cluster module and shared ports"
```

### 2. Container replicas vs in-process workers

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Container replicas vs in-process workers"
```

### 3. Graceful restarts and zero-downtime deploys

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Graceful restarts and zero-downtime deploys"
```

### 4. Sticky sessions and shared state

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Sticky sessions and shared state"
```

### 5. Resource limits

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Resource limits"
```



## Code experiments

1. **Baseline** - reproduce the smallest working example for Cluster module and shared ports. Predict the output before running.
2. **Change** - modify one detail in Container replicas vs in-process workers. Explain the difference.
3. **Break** - break Resource limits on purpose. Capture the error and explain it.
4. **Combine** - use Cluster module and shared ports and Container replicas vs in-process workers in one small program.

```js
// TODO: experiment space
```

## Common mistakes

- **Mistake:** Assuming cluster shares memory. Explain the cause and the fix in your own words.
- **Mistake:** Using in-memory sessions with multiple replicas. Explain the cause and the fix in your own words.
- **Mistake:** Restarting all workers at once. Explain the cause and the fix in your own words.

## Practice

1. Build a minimal repro or benchmark that isolates Cluster module and shared ports.
2. Measure it with a profile, trace, or benchmark. Record before/after numbers for Resource limits.
3. Write a short ADR-style note explaining a trade-off in Process Scaling.

## Self-check

1. Explain Cluster module and shared ports without opening this note.
2. Compare Container replicas vs in-process workers with an alternative. When is each appropriate?
3. What happens at the edge case of Resource limits, and how do you detect it?
4. Where does Process Scaling appear in a production application?

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
