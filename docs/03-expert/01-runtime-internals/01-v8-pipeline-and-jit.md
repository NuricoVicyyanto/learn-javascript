# 01.1 V8 Pipeline and JIT

> **Level:** Expert · **Module:** 01 Runtime Internals · **Status:** ⬜ Not started
> **Estimated time:** 90–120 min

## Why it matters

JavaScript is parsed, compiled to bytecode, and optimized at runtime. The pipeline explains warm-up, deoptimization, and why microbenchmarks lie.

## Learning objectives

By the end of this note you can:

- [ ] Explain these concepts in your own words: Parsing, bytecode, and Ignition; Sparkplug and Maglev baseline tiers.
- [ ] Apply this topic in a small program or experiment.
- [ ] Recognize the common failure modes covered in this note.
- [ ] Connect this topic to the module project.

## Core concepts

Work through each idea. Replace every prompt with your own explanation and a runnable example.

### 1. Parsing, bytecode, and Ignition

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Parsing, bytecode, and Ignition"
```

### 2. Sparkplug and Maglev baseline tiers

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Sparkplug and Maglev baseline tiers"
```

### 3. TurboFan optimizing compiler

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "TurboFan optimizing compiler"
```

### 4. Deoptimization and bailouts

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Deoptimization and bailouts"
```

### 5. Warm-up and steady-state performance

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Warm-up and steady-state performance"
```



## Code experiments

1. **Baseline** - reproduce the smallest working example for Parsing, bytecode, and Ignition. Predict the output before running.
2. **Change** - modify one detail in Sparkplug and Maglev baseline tiers. Explain the difference.
3. **Break** - break Warm-up and steady-state performance on purpose. Capture the error and explain it.
4. **Combine** - use Parsing, bytecode, and Ignition and Sparkplug and Maglev baseline tiers in one small program.

```js
// TODO: experiment space
```

## Common mistakes

- **Mistake:** Benchmarking only cold code. Explain the cause and the fix in your own words.
- **Mistake:** Assuming optimization is permanent. Explain the cause and the fix in your own words.
- **Mistake:** Writing code for the JIT at the cost of clarity. Explain the cause and the fix in your own words.

## Practice

1. Build a minimal repro or benchmark that isolates Parsing, bytecode, and Ignition.
2. Measure it with a profile, trace, or benchmark. Record before/after numbers for Warm-up and steady-state performance.
3. Write a short ADR-style note explaining a trade-off in V8 Pipeline and JIT.

## Self-check

1. Explain Parsing, bytecode, and Ignition without opening this note.
2. Compare Sparkplug and Maglev baseline tiers with an alternative. When is each appropriate?
3. What happens at the edge case of Warm-up and steady-state performance, and how do you detect it?
4. Where does V8 Pipeline and JIT appear in a production application?

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
