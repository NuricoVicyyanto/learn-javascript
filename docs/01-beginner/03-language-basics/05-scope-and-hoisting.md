# 03.5 Scope and Hoisting

> **Level:** Beginner · **Module:** 03 Language Basics · **Status:** ⬜ Not started
> **Estimated time:** 60–75 min

## Why it matters

Scope determines which binding a name refers to. Hoisting and the temporal dead zone explain many `ReferenceError` and shadowing bugs.

## Learning objectives

By the end of this note you can:

- [ ] Explain these concepts in your own words: Global, function, and block scope; Hoisting of declarations.
- [ ] Apply this topic in a small program or experiment.
- [ ] Recognize the common failure modes covered in this note.
- [ ] Connect this topic to the module project.

## Core concepts

Work through each idea. Replace every prompt with your own explanation and a runnable example.

### 1. Global, function, and block scope

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Global, function, and block scope"
```

### 2. Hoisting of declarations

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Hoisting of declarations"
```

### 3. The temporal dead zone for `let` and `const`

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "The temporal dead zone for `let` and `const`"
```

### 4. Shadowing and naming

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Shadowing and naming"
```

### 5. Strict mode and implicit globals

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Strict mode and implicit globals"
```



## Code experiments

1. **Baseline** — reproduce the smallest working example for Global, function, and block scope. Predict the output before running.
2. **Change** — modify one detail in Hoisting of declarations. Explain the difference.
3. **Break** — break Strict mode and implicit globals on purpose. Capture the error and explain it.
4. **Combine** — use Global, function, and block scope and Hoisting of declarations in one small program.

```js
// TODO: experiment space
```

## Common mistakes

- **Mistake:** Accessing a `let` binding before its declaration. Explain the cause and the fix in your own words.
- **Mistake:** Creating accidental globals by omitting a declaration. Explain the cause and the fix in your own words.
- **Mistake:** Shadowing an outer variable and losing access to it. Explain the cause and the fix in your own words.

## Practice

1. Write a small Node script that uses Global, function, and block scope and Hoisting of declarations. Keep it under 40 lines.
2. Add a test for the edge case around Strict mode and implicit globals. Use `node:test` and `node:assert/strict`.
3. Explain Scope and Hoisting aloud in three minutes, then write the summary from memory.

## Self-check

1. Explain Global, function, and block scope without opening this note.
2. Compare Hoisting of declarations with an alternative. When is each appropriate?
3. What happens at the edge case of Strict mode and implicit globals, and how do you detect it?
4. Where does Scope and Hoisting appear in a production application?

## Summary

- 
- 
- 
- 
- 

## References

- [ ] [MDN: JavaScript basics](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [ ] [javascript.info: The modern JavaScript tutorial](https://javascript.info/)
- [ ] [MDN: Equality comparisons](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness)
- [ ] [Node.js: JavaScript syntax](https://nodejs.org/en/learn/getting-started/javascript-language)

## Review

| Date | Recall score (1–5) | What I forgot | Next review |
| --- | --- | --- | --- |
|  |  |  |  |
