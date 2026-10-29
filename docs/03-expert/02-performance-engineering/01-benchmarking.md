# 02.1 Benchmarking

> **Level:** Expert · **Module:** 02 Performance Engineering · **Status:** ⬜ Not started
> **Estimated time:** 90–120 min

## Why it matters

A bad benchmark produces confident wrong answers. Warm-up, setup, noise, and statistics all matter.

## Learning objectives

By the end of this note you can:

- [ ] Explain these concepts in your own words: Measurement harness and iterations; Warm-up and steady state.
- [ ] Apply this topic in a small program or experiment.
- [ ] Recognize the common failure modes covered in this note.
- [ ] Connect this topic to the module project.

## Core concepts

Work through each idea. Replace every prompt with your own explanation and a runnable example.

### 1. Measurement harness and iterations

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Measurement harness and iterations"
```

### 2. Warm-up and steady state

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Warm-up and steady state"
```

### 3. `performance.now` and `perf_hooks`

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "`performance.now` and `perf_hooks`"
```

### 4. Statistical noise and repeated runs

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Statistical noise and repeated runs"
```

### 5. Benchmarking I/O vs CPU

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Benchmarking I/O vs CPU"
```



## Code experiments

1. **Baseline** — reproduce the smallest working example for Measurement harness and iterations. Predict the output before running.
2. **Change** — modify one detail in Warm-up and steady state. Explain the difference.
3. **Break** — break Benchmarking I/O vs CPU on purpose. Capture the error and explain it.
4. **Combine** — use Measurement harness and iterations and Warm-up and steady state in one small program.

```js
// TODO: experiment space
```

## Common mistakes

- **Mistake:** Including setup in the measured loop. Explain the cause and the fix in your own words.
- **Mistake:** Concluding from a single run. Explain the cause and the fix in your own words.
- **Mistake:** Benchmarking a workload that does not resemble production. Explain the cause and the fix in your own words.

## Practice

1. Build a minimal repro or benchmark that isolates Measurement harness and iterations.
2. Measure it with a profile, trace, or benchmark. Record before/after numbers for Benchmarking I/O vs CPU.
3. Write a short ADR-style note explaining a trade-off in Benchmarking.

## Self-check

1. Explain Measurement harness and iterations without opening this note.
2. Compare Warm-up and steady state with an alternative. When is each appropriate?
3. What happens at the edge case of Benchmarking I/O vs CPU, and how do you detect it?
4. Where does Benchmarking appear in a production application?

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
