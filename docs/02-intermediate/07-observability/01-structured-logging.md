# 07.1 Structured Logging

> **Level:** Intermediate · **Module:** 07 Observability · **Status:** ⬜ Not started
> **Estimated time:** 60–75 min

## Why it matters

Structured logs are queryable. The difference between a log line and a field is the difference between grep and an investigation.

## Learning objectives

By the end of this note you can:

- [ ] Explain these concepts in your own words: JSON logs and levels; Request IDs and child loggers.
- [ ] Apply this topic in a small program or experiment.
- [ ] Recognize the common failure modes covered in this note.
- [ ] Connect this topic to the module project.

## Core concepts

Work through each idea. Replace every prompt with your own explanation and a runnable example.

### 1. JSON logs and levels

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "JSON logs and levels"
```

### 2. Request IDs and child loggers

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Request IDs and child loggers"
```

### 3. Sampling and redaction

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Sampling and redaction"
```

### 4. Correlating logs with traces

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Correlating logs with traces"
```

### 5. Pino or `console` with discipline

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Pino or `console` with discipline"
```



## Code experiments

1. **Baseline** - reproduce the smallest working example for JSON logs and levels. Predict the output before running.
2. **Change** - modify one detail in Request IDs and child loggers. Explain the difference.
3. **Break** - break Pino or `console` with discipline on purpose. Capture the error and explain it.
4. **Combine** - use JSON logs and levels and Request IDs and child loggers in one small program.

```js
// TODO: experiment space
```

## Common mistakes

- **Mistake:** Logging high-cardinality values as labels. Explain the cause and the fix in your own words.
- **Mistake:** Emitting secrets or tokens. Explain the cause and the fix in your own words.
- **Mistake:** Logging at debug level in production without sampling. Explain the cause and the fix in your own words.

## Practice

1. Build a small module that applies JSON logs and levels and Request IDs and child loggers. Export a clear API and test it.
2. Write an integration-style test or benchmark that exercises Pino or `console` with discipline.
3. Document one trade-off and one failure mode of Structured Logging.

## Self-check

1. Explain JSON logs and levels without opening this note.
2. Compare Request IDs and child loggers with an alternative. When is each appropriate?
3. What happens at the edge case of Pino or `console` with discipline, and how do you detect it?
4. Where does Structured Logging appear in a production application?

## Summary

- 
- 
- 
- 
- 

## References

- [ ] [OpenTelemetry JavaScript](https://opentelemetry.io/docs/languages/js/)
- [ ] [Prometheus client for Node.js](https://github.com/siimon/prom-client)
- [ ] [pino documentation](https://getpino.io/)
- [ ] [Google SRE book: monitoring](https://sre.google/sre-book/monitoring-distributed-systems/)

## Review

| Date | Recall score (1–5) | What I forgot | Next review |
| --- | --- | --- | --- |
|  |  |  |  |
