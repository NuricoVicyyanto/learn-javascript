# 05.2 this Binding

> **Level:** Beginner · **Module:** 05 Functions and Modules · **Status:** ⬜ Not started
> **Estimated time:** 75–90 min

## Why it matters

`this` depends on how a function is called, not where it is defined. The rules are small but easy to forget.

## Learning objectives

By the end of this note you can:

- [ ] Explain these concepts in your own words: Default binding and strict mode; Implicit binding through an object.
- [ ] Apply this topic in a small program or experiment.
- [ ] Recognize the common failure modes covered in this note.
- [ ] Connect this topic to the module project.

## Core concepts

Work through each idea. Replace every prompt with your own explanation and a runnable example.

### 1. Default binding and strict mode

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Default binding and strict mode"
```

### 2. Implicit binding through an object

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Implicit binding through an object"
```

### 3. Explicit binding with `call`, `apply`, and `bind`

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Explicit binding with `call`, `apply`, and `bind`"
```

### 4. `new` binding

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "`new` binding"
```

### 5. Arrow functions and lexical `this`

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Arrow functions and lexical `this`"
```



## Code experiments

1. **Baseline** - reproduce the smallest working example for Default binding and strict mode. Predict the output before running.
2. **Change** - modify one detail in Implicit binding through an object. Explain the difference.
3. **Break** - break Arrow functions and lexical `this` on purpose. Capture the error and explain it.
4. **Combine** - use Default binding and strict mode and Implicit binding through an object in one small program.

```js
// TODO: experiment space
```

## Common mistakes

- **Mistake:** Passing a method as a callback and losing `this`. Explain the cause and the fix in your own words.
- **Mistake:** Using an arrow function as a constructor. Explain the cause and the fix in your own words.
- **Mistake:** Assuming `bind` changes an arrow function's `this`. Explain the cause and the fix in your own words.

## Practice

1. Write a small Node script that uses Default binding and strict mode and Implicit binding through an object. Keep it under 40 lines.
2. Add a test for the edge case around Arrow functions and lexical `this`. Use `node:test` and `node:assert/strict`.
3. Explain this Binding aloud in three minutes, then write the summary from memory.

## Self-check

1. Explain Default binding and strict mode without opening this note.
2. Compare Implicit binding through an object with an alternative. When is each appropriate?
3. What happens at the edge case of Arrow functions and lexical `this`, and how do you detect it?
4. Where does this Binding appear in a production application?

## Summary

- 
- 
- 
- 
- 

## References

- [ ] [MDN: Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
- [ ] [MDN: this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)
- [ ] [MDN: Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
- [ ] [MDN: Iterators and generators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_generators)

## Review

| Date | Recall score (1–5) | What I forgot | Next review |
| --- | --- | --- | --- |
|  |  |  |  |
