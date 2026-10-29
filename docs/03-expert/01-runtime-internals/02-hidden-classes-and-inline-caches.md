# 01.2 Hidden Classes and Inline Caches

> **Level:** Expert · **Module:** 01 Runtime Internals · **Status:** ⬜ Not started
> **Estimated time:** 90–120 min

## Why it matters

V8 represents objects with hidden classes and caches property lookups. Changing shapes or using many types can slow the same-looking code.

## Learning objectives

By the end of this note you can:

- [ ] Explain these concepts in your own words: Object shapes and property order; Monomorphic, polymorphic, and megamorphic access.
- [ ] Apply this topic in a small program or experiment.
- [ ] Recognize the common failure modes covered in this note.
- [ ] Connect this topic to the module project.

## Core concepts

Work through each idea. Replace every prompt with your own explanation and a runnable example.

### 1. Object shapes and property order

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Object shapes and property order"
```

### 2. Monomorphic, polymorphic, and megamorphic access

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Monomorphic, polymorphic, and megamorphic access"
```

### 3. Inline caches

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Inline caches"
```

### 4. Adding and deleting properties

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Adding and deleting properties"
```

### 5. Designing hot objects for stable shapes

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Designing hot objects for stable shapes"
```



## Code experiments

1. **Baseline** — reproduce the smallest working example for Object shapes and property order. Predict the output before running.
2. **Change** — modify one detail in Monomorphic, polymorphic, and megamorphic access. Explain the difference.
3. **Break** — break Designing hot objects for stable shapes on purpose. Capture the error and explain it.
4. **Combine** — use Object shapes and property order and Monomorphic, polymorphic, and megamorphic access in one small program.

```js
// TODO: experiment space
```

## Common mistakes

- **Mistake:** Adding properties in different orders across objects. Explain the cause and the fix in your own words.
- **Mistake:** Deleting properties in hot paths. Explain the cause and the fix in your own words.
- **Mistake:** Assuming a class syntax guarantees a stable shape. Explain the cause and the fix in your own words.

## Practice

1. Build a minimal repro or benchmark that isolates Object shapes and property order.
2. Measure it with a profile, trace, or benchmark. Record before/after numbers for Designing hot objects for stable shapes.
3. Write a short ADR-style note explaining a trade-off in Hidden Classes and Inline Caches.

## Self-check

1. Explain Object shapes and property order without opening this note.
2. Compare Monomorphic, polymorphic, and megamorphic access with an alternative. When is each appropriate?
3. What happens at the edge case of Designing hot objects for stable shapes, and how do you detect it?
4. Where does Hidden Classes and Inline Caches appear in a production application?

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
