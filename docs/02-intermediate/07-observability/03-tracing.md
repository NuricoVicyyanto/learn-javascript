# 07.3 Tracing

> **Level:** Intermediate · **Module:** 07 Observability · **Status:** ⬜ Not started
> **Estimated time:** 75–90 min

## Why it matters

Traces show where time went across services. They are essential once a request touches more than one process.

## Learning objectives

By the end of this note you can:

- [ ] Explain these concepts in your own words: Spans, traces, and context propagation; OpenTelemetry SDK and exporters.
- [ ] Apply this topic in a small program or experiment.
- [ ] Recognize the common failure modes covered in this note.
- [ ] Connect this topic to the module project.

## Core concepts

Work through each idea. Replace every prompt with your own explanation and a runnable example.

### 1. Spans, traces, and context propagation

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Spans, traces, and context propagation"
```

### 2. OpenTelemetry SDK and exporters

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "OpenTelemetry SDK and exporters"
```

### 3. Instrumenting HTTP and database calls

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Instrumenting HTTP and database calls"
```

### 4. Sampling strategies

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Sampling strategies"
```

### 5. Correlating logs and traces

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Correlating logs and traces"
```



## Code experiments

1. **Baseline** — reproduce the smallest working example for Spans, traces, and context propagation. Predict the output before running.
2. **Change** — modify one detail in OpenTelemetry SDK and exporters. Explain the difference.
3. **Break** — break Correlating logs and traces on purpose. Capture the error and explain it.
4. **Combine** — use Spans, traces, and context propagation and OpenTelemetry SDK and exporters in one small program.

```js
// TODO: experiment space
```

## Common mistakes

- **Mistake:** Creating spans without useful attributes. Explain the cause and the fix in your own words.
- **Mistake:** Sampling everything in high-traffic systems. Explain the cause and the fix in your own words.
- **Mistake:** Breaking trace context across async boundaries. Explain the cause and the fix in your own words.

## Practice

1. Build a small module that applies Spans, traces, and context propagation and OpenTelemetry SDK and exporters. Export a clear API and test it.
2. Write an integration-style test or benchmark that exercises Correlating logs and traces.
3. Document one trade-off and one failure mode of Tracing.

## Self-check

1. Explain Spans, traces, and context propagation without opening this note.
2. Compare OpenTelemetry SDK and exporters with an alternative. When is each appropriate?
3. What happens at the edge case of Correlating logs and traces, and how do you detect it?
4. Where does Tracing appear in a production application?

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
