# 02.2 CPU Profiling

> **Level:** Expert · **Module:** 02 Performance Engineering · **Status:** ⬜ Not started
> **Estimated time:** 90–120 min

## Why it matters

CPU profiles show where time actually goes. Flame graphs turn a vague slowdown into a ranked list of causes.

## Learning objectives

By the end of this note you can:

- [ ] Explain these concepts in your own words: `node --cpu-prof` and `.cpuprofile` files; Chrome DevTools performance panel.
- [ ] Apply this topic in a small program or experiment.
- [ ] Recognize the common failure modes covered in this note.
- [ ] Connect this topic to the module project.

## Core concepts

Work through each idea. Replace every prompt with your own explanation and a runnable example.

### 1. `node --cpu-prof` and `.cpuprofile` files

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "`node --cpu-prof` and `.cpuprofile` files"
```

### 2. Chrome DevTools performance panel

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Chrome DevTools performance panel"
```

### 3. Flame graphs and inverted stacks

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Flame graphs and inverted stacks"
```

### 4. Self time vs total time

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Self time vs total time"
```

### 5. Profiling in production safely

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Profiling in production safely"
```



## Code experiments

1. **Baseline** - reproduce the smallest working example for `node --cpu-prof` and `.cpuprofile` files. Predict the output before running.
2. **Change** - modify one detail in Chrome DevTools performance panel. Explain the difference.
3. **Break** - break Profiling in production safely on purpose. Capture the error and explain it.
4. **Combine** - use `node --cpu-prof` and `.cpuprofile` files and Chrome DevTools performance panel in one small program.

```js
// TODO: experiment space
```

## Common mistakes

- **Mistake:** Profiling for too short a window. Explain the cause and the fix in your own words.
- **Mistake:** Exposing the inspector publicly. Explain the cause and the fix in your own words.
- **Mistake:** Optimizing a function that is not on the hot path. Explain the cause and the fix in your own words.

## Practice

1. Build a minimal repro or benchmark that isolates `node --cpu-prof` and `.cpuprofile` files.
2. Measure it with a profile, trace, or benchmark. Record before/after numbers for Profiling in production safely.
3. Write a short ADR-style note explaining a trade-off in CPU Profiling.

## Self-check

1. Explain `node --cpu-prof` and `.cpuprofile` files without opening this note.
2. Compare Chrome DevTools performance panel with an alternative. When is each appropriate?
3. What happens at the edge case of Profiling in production safely, and how do you detect it?
4. Where does CPU Profiling appear in a production application?

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
