# 01.3 Memory and Garbage Collection

> **Level:** Expert · **Module:** 01 Runtime Internals · **Status:** ⬜ Not started
> **Estimated time:** 90–120 min

## Why it matters

V8 uses a generational collector. Allocation pressure and retention determine latency and memory limits.

## Learning objectives

By the end of this note you can:

- [ ] Explain these concepts in your own words: Young generation and scavenges; Old generation and major GC.
- [ ] Apply this topic in a small program or experiment.
- [ ] Recognize the common failure modes covered in this note.
- [ ] Connect this topic to the module project.

## Core concepts

Work through each idea. Replace every prompt with your own explanation and a runnable example.

### 1. Young generation and scavenges

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Young generation and scavenges"
```

### 2. Old generation and major GC

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Old generation and major GC"
```

### 3. Incremental and concurrent marking

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Incremental and concurrent marking"
```

### 4. Heap limits and `--max-old-space-size`

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Heap limits and `--max-old-space-size`"
```

### 5. Retention and memory pressure

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Retention and memory pressure"
```



## Code experiments

1. **Baseline** - reproduce the smallest working example for Young generation and scavenges. Predict the output before running.
2. **Change** - modify one detail in Old generation and major GC. Explain the difference.
3. **Break** - break Retention and memory pressure on purpose. Capture the error and explain it.
4. **Combine** - use Young generation and scavenges and Old generation and major GC in one small program.

```js
// TODO: experiment space
```

## Common mistakes

- **Mistake:** Tuning heap size without measuring. Explain the cause and the fix in your own words.
- **Mistake:** Assuming GC frees objects still referenced by closures. Explain the cause and the fix in your own words.
- **Mistake:** Ignoring container memory limits. Explain the cause and the fix in your own words.

## Practice

1. Build a minimal repro or benchmark that isolates Young generation and scavenges.
2. Measure it with a profile, trace, or benchmark. Record before/after numbers for Retention and memory pressure.
3. Write a short ADR-style note explaining a trade-off in Memory and Garbage Collection.

## Self-check

1. Explain Young generation and scavenges without opening this note.
2. Compare Old generation and major GC with an alternative. When is each appropriate?
3. What happens at the edge case of Retention and memory pressure, and how do you detect it?
4. Where does Memory and Garbage Collection appear in a production application?

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
