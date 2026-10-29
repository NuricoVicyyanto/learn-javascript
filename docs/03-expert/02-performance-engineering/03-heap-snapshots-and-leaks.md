# 02.3 Heap Snapshots and Leaks

> **Level:** Expert · **Module:** 02 Performance Engineering · **Status:** ⬜ Not started
> **Estimated time:** 90–120 min

## Why it matters

Memory leaks in JavaScript come from retained references, listeners, caches, and closures. Heap snapshots show what is still alive and why.

## Learning objectives

By the end of this note you can:

- [ ] Explain these concepts in your own words: Taking and comparing heap snapshots; Retainers and dominators.
- [ ] Apply this topic in a small program or experiment.
- [ ] Recognize the common failure modes covered in this note.
- [ ] Connect this topic to the module project.

## Core concepts

Work through each idea. Replace every prompt with your own explanation and a runnable example.

### 1. Taking and comparing heap snapshots

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Taking and comparing heap snapshots"
```

### 2. Retainers and dominators

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Retainers and dominators"
```

### 3. Detached DOM nodes and listeners

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Detached DOM nodes and listeners"
```

### 4. Caches without eviction

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Caches without eviction"
```

### 5. Leak reproduction and verification

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Leak reproduction and verification"
```



## Code experiments

1. **Baseline** — reproduce the smallest working example for Taking and comparing heap snapshots. Predict the output before running.
2. **Change** — modify one detail in Retainers and dominators. Explain the difference.
3. **Break** — break Leak reproduction and verification on purpose. Capture the error and explain it.
4. **Combine** — use Taking and comparing heap snapshots and Retainers and dominators in one small program.

```js
// TODO: experiment space
```

## Common mistakes

- **Mistake:** Assuming GC will fix a reference cycle. Explain the cause and the fix in your own words.
- **Mistake:** Ignoring detached nodes. Explain the cause and the fix in your own words.
- **Mistake:** Using an unbounded cache as a fix. Explain the cause and the fix in your own words.

## Practice

1. Build a minimal repro or benchmark that isolates Taking and comparing heap snapshots.
2. Measure it with a profile, trace, or benchmark. Record before/after numbers for Leak reproduction and verification.
3. Write a short ADR-style note explaining a trade-off in Heap Snapshots and Leaks.

## Self-check

1. Explain Taking and comparing heap snapshots without opening this note.
2. Compare Retainers and dominators with an alternative. When is each appropriate?
3. What happens at the edge case of Leak reproduction and verification, and how do you detect it?
4. Where does Heap Snapshots and Leaks appear in a production application?

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
