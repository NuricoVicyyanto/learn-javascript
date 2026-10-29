# 07.3 async/await

> **Level:** Beginner · **Module:** 07 Async Basics · **Status:** ⬜ Not started
> **Estimated time:** 75–90 min

## Why it matters

async/await makes asynchronous code read like synchronous code, but it is still promises underneath. Parallelism must be explicit.

## Learning objectives

By the end of this note you can:

- [ ] Explain these concepts in your own words: `async` functions and returned promises; `await` and synchronous-looking flow.
- [ ] Apply this topic in a small program or experiment.
- [ ] Recognize the common failure modes covered in this note.
- [ ] Connect this topic to the module project.

## Core concepts

Work through each idea. Replace every prompt with your own explanation and a runnable example.

### 1. `async` functions and returned promises

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "`async` functions and returned promises"
```

### 2. `await` and synchronous-looking flow

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "`await` and synchronous-looking flow"
```

### 3. Sequential vs parallel execution

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Sequential vs parallel execution"
```

### 4. Error handling with try/catch

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Error handling with try/catch"
```

### 5. Top-level await in modules

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Top-level await in modules"
```



## Code experiments

1. **Baseline** — reproduce the smallest working example for `async` functions and returned promises. Predict the output before running.
2. **Change** — modify one detail in `await` and synchronous-looking flow. Explain the difference.
3. **Break** — break Top-level await in modules on purpose. Capture the error and explain it.
4. **Combine** — use `async` functions and returned promises and `await` and synchronous-looking flow in one small program.

```js
// TODO: experiment space
```

## Common mistakes

- **Mistake:** Awaiting in a loop and serializing independent work. Explain the cause and the fix in your own words.
- **Mistake:** Using `forEach` with an async callback and not waiting. Explain the cause and the fix in your own words.
- **Mistake:** Forgetting that an async function always returns a promise. Explain the cause and the fix in your own words.

## Practice

1. Write a small Node script that uses `async` functions and returned promises and `await` and synchronous-looking flow. Keep it under 40 lines.
2. Add a test for the edge case around Top-level await in modules. Use `node:test` and `node:assert/strict`.
3. Explain async/await aloud in three minutes, then write the summary from memory.

## Self-check

1. Explain `async` functions and returned promises without opening this note.
2. Compare `await` and synchronous-looking flow with an alternative. When is each appropriate?
3. What happens at the edge case of Top-level await in modules, and how do you detect it?
4. Where does async/await appear in a production application?

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
