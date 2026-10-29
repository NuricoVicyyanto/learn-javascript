# 05.4 Structured Logging

> **Level:** Intermediate · **Module:** 05 Project Architecture · **Status:** ⬜ Not started
> **Estimated time:** 60–75 min

## Why it matters

Logs are an interface for operators. Structured fields and request IDs make incidents debuggable.

## Learning objectives

By the end of this note you can:

- [ ] Explain these concepts in your own words: JSON logs and log levels; Request IDs and child loggers.
- [ ] Apply this topic in a small program or experiment.
- [ ] Recognize the common failure modes covered in this note.
- [ ] Connect this topic to the module project.

## Core concepts

Work through each idea. Replace every prompt with your own explanation and a runnable example.

### 1. JSON logs and log levels

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "JSON logs and log levels"
```

### 2. Request IDs and child loggers

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Request IDs and child loggers"
```

### 3. Redaction and PII

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Redaction and PII"
```

### 4. Logs vs metrics vs traces

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Logs vs metrics vs traces"
```

### 5. Library choices such as pino

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Library choices such as pino"
```



## Code experiments

1. **Baseline** — reproduce the smallest working example for JSON logs and log levels. Predict the output before running.
2. **Change** — modify one detail in Request IDs and child loggers. Explain the difference.
3. **Break** — break Library choices such as pino on purpose. Capture the error and explain it.
4. **Combine** — use JSON logs and log levels and Request IDs and child loggers in one small program.

```js
// TODO: experiment space
```

## Common mistakes

- **Mistake:** Logging the same error at every layer. Explain the cause and the fix in your own words.
- **Mistake:** Using string concatenation instead of fields. Explain the cause and the fix in your own words.
- **Mistake:** Logging request bodies with credentials. Explain the cause and the fix in your own words.

## Practice

1. Build a small module that applies JSON logs and log levels and Request IDs and child loggers. Export a clear API and test it.
2. Write an integration-style test or benchmark that exercises Library choices such as pino.
3. Document one trade-off and one failure mode of Structured Logging.

## Self-check

1. Explain JSON logs and log levels without opening this note.
2. Compare Request IDs and child loggers with an alternative. When is each appropriate?
3. What happens at the edge case of Library choices such as pino, and how do you detect it?
4. Where does Structured Logging appear in a production application?

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
