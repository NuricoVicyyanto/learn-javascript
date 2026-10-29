# 03.2 Streams

> **Level:** Expert · **Module:** 03 Advanced Concurrency · **Status:** ⬜ Not started
> **Estimated time:** 90–120 min

## Why it matters

Streams process data incrementally, keeping memory bounded. They are essential for files, uploads, and large responses.

## Learning objectives

By the end of this note you can:

- [ ] Explain these concepts in your own words: Readable, Writable, Transform, and Duplex; Pipelines and error propagation.
- [ ] Apply this topic in a small program or experiment.
- [ ] Recognize the common failure modes covered in this note.
- [ ] Connect this topic to the module project.

## Core concepts

Work through each idea. Replace every prompt with your own explanation and a runnable example.

### 1. Readable, Writable, Transform, and Duplex

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Readable, Writable, Transform, and Duplex"
```

### 2. Pipelines and error propagation

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Pipelines and error propagation"
```

### 3. Object mode and encoding

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Object mode and encoding"
```

### 4. Async iterators over streams

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Async iterators over streams"
```

### 5. Cleanup and destruction

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Cleanup and destruction"
```



## Code experiments

1. **Baseline** — reproduce the smallest working example for Readable, Writable, Transform, and Duplex. Predict the output before running.
2. **Change** — modify one detail in Pipelines and error propagation. Explain the difference.
3. **Break** — break Cleanup and destruction on purpose. Capture the error and explain it.
4. **Combine** — use Readable, Writable, Transform, and Duplex and Pipelines and error propagation in one small program.

```js
// TODO: experiment space
```

## Common mistakes

- **Mistake:** Buffering an entire stream in memory. Explain the cause and the fix in your own words.
- **Mistake:** Ignoring pipeline errors. Explain the cause and the fix in your own words.
- **Mistake:** Writing to a destroyed stream. Explain the cause and the fix in your own words.

## Practice

1. Build a minimal repro or benchmark that isolates Readable, Writable, Transform, and Duplex.
2. Measure it with a profile, trace, or benchmark. Record before/after numbers for Cleanup and destruction.
3. Write a short ADR-style note explaining a trade-off in Streams.

## Self-check

1. Explain Readable, Writable, Transform, and Duplex without opening this note.
2. Compare Pipelines and error propagation with an alternative. When is each appropriate?
3. What happens at the edge case of Cleanup and destruction, and how do you detect it?
4. Where does Streams appear in a production application?

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
