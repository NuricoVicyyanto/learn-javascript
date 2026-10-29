# 08.4 Browser Storage

> **Level:** Beginner · **Module:** 08 DOM and Browser APIs · **Status:** ⬜ Not started
> **Estimated time:** 60–75 min

## Why it matters

Storage keeps state across reloads, but all browser storage is untrusted and limited. Choosing the right store affects security and performance.

## Learning objectives

By the end of this note you can:

- [ ] Explain these concepts in your own words: `localStorage` and `sessionStorage`; Serialization and schema versioning.
- [ ] Apply this topic in a small program or experiment.
- [ ] Recognize the common failure modes covered in this note.
- [ ] Connect this topic to the module project.

## Core concepts

Work through each idea. Replace every prompt with your own explanation and a runnable example.

### 1. `localStorage` and `sessionStorage`

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "`localStorage` and `sessionStorage`"
```

### 2. Serialization and schema versioning

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Serialization and schema versioning"
```

### 3. Cookies and their security flags

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Cookies and their security flags"
```

### 4. IndexedDB overview

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "IndexedDB overview"
```

### 5. Storage limits and quota errors

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Storage limits and quota errors"
```



## Code experiments

1. **Baseline** - reproduce the smallest working example for `localStorage` and `sessionStorage`. Predict the output before running.
2. **Change** - modify one detail in Serialization and schema versioning. Explain the difference.
3. **Break** - break Storage limits and quota errors on purpose. Capture the error and explain it.
4. **Combine** - use `localStorage` and `sessionStorage` and Serialization and schema versioning in one small program.

```js
// TODO: experiment space
```

## Common mistakes

- **Mistake:** Storing tokens or secrets in `localStorage` without understanding XSS. Explain the cause and the fix in your own words.
- **Mistake:** Assuming storage is synchronous and unlimited. Explain the cause and the fix in your own words.
- **Mistake:** Reading corrupt JSON without a fallback. Explain the cause and the fix in your own words.

## Practice

1. Write a small Node script that uses `localStorage` and `sessionStorage` and Serialization and schema versioning. Keep it under 40 lines.
2. Add a test for the edge case around Storage limits and quota errors. Use `node:test` and `node:assert/strict`.
3. Explain Browser Storage aloud in three minutes, then write the summary from memory.

## Self-check

1. Explain `localStorage` and `sessionStorage` without opening this note.
2. Compare Serialization and schema versioning with an alternative. When is each appropriate?
3. What happens at the edge case of Storage limits and quota errors, and how do you detect it?
4. Where does Browser Storage appear in a production application?

## Summary

- 
- 
- 
- 
- 

## References

- [ ] [MDN: DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)
- [ ] [MDN: Event reference](https://developer.mozilla.org/en-US/docs/Web/Events)
- [ ] [MDN: FormData](https://developer.mozilla.org/en-US/docs/Web/API/FormData)
- [ ] [MDN: Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API)

## Review

| Date | Recall score (1–5) | What I forgot | Next review |
| --- | --- | --- | --- |
|  |  |  |  |
