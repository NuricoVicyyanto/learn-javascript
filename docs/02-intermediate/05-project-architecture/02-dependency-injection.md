# 05.2 Dependency Injection

> **Level:** Intermediate · **Module:** 05 Project Architecture · **Status:** ⬜ Not started
> **Estimated time:** 60–75 min

## Why it matters

Explicit dependencies make code testable and startup failures obvious. JavaScript needs no framework for this.

## Learning objectives

By the end of this note you can:

- [ ] Explain these concepts in your own words: Constructor and factory injection; Wiring in the entry point.
- [ ] Apply this topic in a small program or experiment.
- [ ] Recognize the common failure modes covered in this note.
- [ ] Connect this topic to the module project.

## Core concepts

Work through each idea. Replace every prompt with your own explanation and a runnable example.

### 1. Constructor and factory injection

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Constructor and factory injection"
```

### 2. Wiring in the entry point

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Wiring in the entry point"
```

### 3. Interfaces through plain objects

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Interfaces through plain objects"
```

### 4. Avoiding global state

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Avoiding global state"
```

### 5. Options objects for configuration

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Options objects for configuration"
```



## Code experiments

1. **Baseline** - reproduce the smallest working example for Constructor and factory injection. Predict the output before running.
2. **Change** - modify one detail in Wiring in the entry point. Explain the difference.
3. **Break** - break Options objects for configuration on purpose. Capture the error and explain it.
4. **Combine** - use Constructor and factory injection and Wiring in the entry point in one small program.

```js
// TODO: experiment space
```

## Common mistakes

- **Mistake:** Using a DI container to hide dependencies. Explain the cause and the fix in your own words.
- **Mistake:** Importing singletons everywhere. Explain the cause and the fix in your own words.
- **Mistake:** Creating abstractions with no second implementation. Explain the cause and the fix in your own words.

## Practice

1. Build a small module that applies Constructor and factory injection and Wiring in the entry point. Export a clear API and test it.
2. Write an integration-style test or benchmark that exercises Options objects for configuration.
3. Document one trade-off and one failure mode of Dependency Injection.

## Self-check

1. Explain Constructor and factory injection without opening this note.
2. Compare Wiring in the entry point with an alternative. When is each appropriate?
3. What happens at the edge case of Options objects for configuration, and how do you detect it?
4. Where does Dependency Injection appear in a production application?

## Summary

- 
- 
- 
- 
- 

## References

- [ ] [Node.js: packages and modules](https://nodejs.org/api/packages.html)
- [ ] [pino documentation](https://getpino.io/)
- [ ] [Twelve-Factor App](https://12factor.net/)
- [ ] [MDN: JavaScript modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)

## Review

| Date | Recall score (1–5) | What I forgot | Next review |
| --- | --- | --- | --- |
|  |  |  |  |
