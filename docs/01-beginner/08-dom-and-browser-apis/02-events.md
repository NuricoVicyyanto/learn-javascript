# 08.2 Events

> **Level:** Beginner · **Module:** 08 DOM and Browser APIs · **Status:** ⬜ Not started
> **Estimated time:** 90 min

## Why it matters

Events connect user actions to code. Bubbling, delegation, and default actions determine whether handlers behave correctly.

## Learning objectives

By the end of this note you can:

- [ ] Explain these concepts in your own words: `addEventListener` and handler signatures; Bubbling and capturing.
- [ ] Apply this topic in a small program or experiment.
- [ ] Recognize the common failure modes covered in this note.
- [ ] Connect this topic to the module project.

## Core concepts

Work through each idea. Replace every prompt with your own explanation and a runnable example.

### 1. `addEventListener` and handler signatures

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "`addEventListener` and handler signatures"
```

### 2. Bubbling and capturing

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Bubbling and capturing"
```

### 3. Event delegation

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Event delegation"
```

### 4. `preventDefault` and `stopPropagation`

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "`preventDefault` and `stopPropagation`"
```

### 5. Options: `once`, `passive`, and `signal`

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Options: `once`, `passive`, and `signal`"
```



## Code experiments

1. **Baseline** - reproduce the smallest working example for `addEventListener` and handler signatures. Predict the output before running.
2. **Change** - modify one detail in Bubbling and capturing. Explain the difference.
3. **Break** - break Options: `once`, `passive`, and `signal` on purpose. Capture the error and explain it.
4. **Combine** - use `addEventListener` and handler signatures and Bubbling and capturing in one small program.

```js
// TODO: experiment space
```

## Common mistakes

- **Mistake:** Attaching a listener to every row instead of delegating. Explain the cause and the fix in your own words.
- **Mistake:** Calling `preventDefault` too late. Explain the cause and the fix in your own words.
- **Mistake:** Forgetting to remove listeners and leaking memory. Explain the cause and the fix in your own words.

## Practice

1. Write a small Node script that uses `addEventListener` and handler signatures and Bubbling and capturing. Keep it under 40 lines.
2. Add a test for the edge case around Options: `once`, `passive`, and `signal`. Use `node:test` and `node:assert/strict`.
3. Explain Events aloud in three minutes, then write the summary from memory.

## Self-check

1. Explain `addEventListener` and handler signatures without opening this note.
2. Compare Bubbling and capturing with an alternative. When is each appropriate?
3. What happens at the edge case of Options: `once`, `passive`, and `signal`, and how do you detect it?
4. Where does Events appear in a production application?

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
