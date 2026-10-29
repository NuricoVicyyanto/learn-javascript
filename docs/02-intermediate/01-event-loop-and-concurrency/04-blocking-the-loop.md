# 01.4 Blocking the Event Loop

> **Level:** Intermediate · **Module:** 01 Event Loop and Concurrency · **Status:** ⬜ Not started
> **Estimated time:** 75–90 min

## Why it matters

A single CPU-heavy operation can freeze a server for every user. Detecting and moving work off the main thread is a core backend skill.

## Learning objectives

By the end of this note you can:

- [ ] Explain these concepts in your own words: CPU-bound vs I/O-bound work; Synchronous APIs on request paths.
- [ ] Apply this topic in a small program or experiment.
- [ ] Recognize the common failure modes covered in this note.
- [ ] Connect this topic to the module project.

## Core concepts

Work through each idea. Replace every prompt with your own explanation and a runnable example.

### 1. CPU-bound vs I/O-bound work

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "CPU-bound vs I/O-bound work"
```

### 2. Synchronous APIs on request paths

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Synchronous APIs on request paths"
```

### 3. Chunking work with `setImmediate`

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Chunking work with `setImmediate`"
```

### 4. Worker threads and child processes

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Worker threads and child processes"
```

### 5. Event-loop delay metrics

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Event-loop delay metrics"
```



## Code experiments

1. **Baseline** — reproduce the smallest working example for CPU-bound vs I/O-bound work. Predict the output before running.
2. **Change** — modify one detail in Synchronous APIs on request paths. Explain the difference.
3. **Break** — break Event-loop delay metrics on purpose. Capture the error and explain it.
4. **Combine** — use CPU-bound vs I/O-bound work and Synchronous APIs on request paths in one small program.

```js
// TODO: experiment space
```

## Common mistakes

- **Mistake:** Using `fs.readFileSync` in a request handler. Explain the cause and the fix in your own words.
- **Mistake:** JSON-parsing huge payloads synchronously. Explain the cause and the fix in your own words.
- **Mistake:** Assuming async code cannot block. Explain the cause and the fix in your own words.

## Practice

1. Build a small module that applies CPU-bound vs I/O-bound work and Synchronous APIs on request paths. Export a clear API and test it.
2. Write an integration-style test or benchmark that exercises Event-loop delay metrics.
3. Document one trade-off and one failure mode of Blocking the Event Loop.

## Self-check

1. Explain CPU-bound vs I/O-bound work without opening this note.
2. Compare Synchronous APIs on request paths with an alternative. When is each appropriate?
3. What happens at the edge case of Event-loop delay metrics, and how do you detect it?
4. Where does Blocking the Event Loop appear in a production application?

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
