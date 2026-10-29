# 07.2 Promises

> **Level:** Beginner · **Module:** 07 Async Basics · **Status:** ⬜ Not started
> **Estimated time:** 90–120 min

## Why it matters

Promises represent a future value and make async composition possible. Misunderstanding chaining and rejection leads to silent failures.

## Learning objectives

By the end of this note you can:

- [ ] Explain these concepts in your own words: Promise states and settlement; `.then`, `.catch`, and `.finally`.
- [ ] Apply this topic in a small program or experiment.
- [ ] Recognize the common failure modes covered in this note.
- [ ] Connect this topic to the module project.

## Core concepts

Work through each idea. Replace every prompt with your own explanation and a runnable example.

### 1. Promise states and settlement

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Promise states and settlement"
```

### 2. `.then`, `.catch`, and `.finally`

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "`.then`, `.catch`, and `.finally`"
```

### 3. Chaining and returning values

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Chaining and returning values"
```

### 4. `Promise.all`, `allSettled`, `race`, and `any`

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "`Promise.all`, `allSettled`, `race`, and `any`"
```

### 5. Common anti-patterns with `new Promise`

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Common anti-patterns with `new Promise`"
```



## Code experiments

1. **Baseline** - reproduce the smallest working example for Promise states and settlement. Predict the output before running.
2. **Change** - modify one detail in `.then`, `.catch`, and `.finally`. Explain the difference.
3. **Break** - break Common anti-patterns with `new Promise` on purpose. Capture the error and explain it.
4. **Combine** - use Promise states and settlement and `.then`, `.catch`, and `.finally` in one small program.

```js
// TODO: experiment space
```

## Common mistakes

- **Mistake:** Forgetting to return a promise inside `.then`. Explain the cause and the fix in your own words.
- **Mistake:** Creating a promise wrapper around an existing promise. Explain the cause and the fix in your own words.
- **Mistake:** Assuming `Promise.all` waits for all rejections. Explain the cause and the fix in your own words.

## Practice

1. Write a small Node script that uses Promise states and settlement and `.then`, `.catch`, and `.finally`. Keep it under 40 lines.
2. Add a test for the edge case around Common anti-patterns with `new Promise`. Use `node:test` and `node:assert/strict`.
3. Explain Promises aloud in three minutes, then write the summary from memory.

## Self-check

1. Explain Promise states and settlement without opening this note.
2. Compare `.then`, `.catch`, and `.finally` with an alternative. When is each appropriate?
3. What happens at the edge case of Common anti-patterns with `new Promise`, and how do you detect it?
4. Where does Promises appear in a production application?

## Summary

- 
- 
- 
- 
- 

## References

- [ ] [MDN: Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [ ] [MDN: async function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
- [ ] [MDN: fetch](https://developer.mozilla.org/en-US/docs/Web/API/fetch)
- [ ] [Node.js: fetch](https://nodejs.org/en/learn/getting-started/fetch)

## Review

| Date | Recall score (1–5) | What I forgot | Next review |
| --- | --- | --- | --- |
|  |  |  |  |
