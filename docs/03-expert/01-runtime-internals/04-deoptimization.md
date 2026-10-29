# 01.4 Deoptimization

> **Level:** Expert · **Module:** 01 Runtime Internals · **Status:** ⬜ Not started
> **Estimated time:** 75–90 min

## Why it matters

Optimized code can be discarded when assumptions break. Deoptimization explains sudden slowdowns after a new data shape arrives.

## Learning objectives

By the end of this note you can:

- [ ] Explain these concepts in your own words: Speculative optimization; Type feedback and assumptions.
- [ ] Apply this topic in a small program or experiment.
- [ ] Recognize the common failure modes covered in this note.
- [ ] Connect this topic to the module project.

## Core concepts

Work through each idea. Replace every prompt with your own explanation and a runnable example.

### 1. Speculative optimization

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Speculative optimization"
```

### 2. Type feedback and assumptions

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Type feedback and assumptions"
```

### 3. Triggers for deoptimization

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Triggers for deoptimization"
```

### 4. Reading `--trace-deopt` output

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Reading `--trace-deopt` output"
```

### 5. Stabilizing hot paths

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Stabilizing hot paths"
```



## Code experiments

1. **Baseline** — reproduce the smallest working example for Speculative optimization. Predict the output before running.
2. **Change** — modify one detail in Type feedback and assumptions. Explain the difference.
3. **Break** — break Stabilizing hot paths on purpose. Capture the error and explain it.
4. **Combine** — use Speculative optimization and Type feedback and assumptions in one small program.

```js
// TODO: experiment space
```

## Common mistakes

- **Mistake:** Mixing value types in a hot function. Explain the cause and the fix in your own words.
- **Mistake:** Using `arguments` or `eval` in optimized code. Explain the cause and the fix in your own words.
- **Mistake:** Chasing deopts that are not on the hot path. Explain the cause and the fix in your own words.

## Practice

1. Build a minimal repro or benchmark that isolates Speculative optimization.
2. Measure it with a profile, trace, or benchmark. Record before/after numbers for Stabilizing hot paths.
3. Write a short ADR-style note explaining a trade-off in Deoptimization.

## Self-check

1. Explain Speculative optimization without opening this note.
2. Compare Type feedback and assumptions with an alternative. When is each appropriate?
3. What happens at the edge case of Stabilizing hot paths, and how do you detect it?
4. Where does Deoptimization appear in a production application?

## Summary

- 
- 
- 
- 
- 

## References

- [ ] [V8 blog](https://v8.dev/blog)
- [ ] [V8: hidden classes](https://v8.dev/blog/fast-properties)
- [ ] [V8: garbage collection](https://v8.dev/blog/trash-talk)
- [ ] [Node.js: command-line options](https://nodejs.org/api/cli.html)

## Review

| Date | Recall score (1–5) | What I forgot | Next review |
| --- | --- | --- | --- |
|  |  |  |  |
