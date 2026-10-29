# 05.2 Server-Sent Events

> **Level:** Expert · **Module:** 05 Real-time and Messaging · **Status:** ⬜ Not started
> **Estimated time:** 75–90 min

## Why it matters

SSE is a simpler one-way stream over HTTP. It is often enough for notifications and dashboards.

## Learning objectives

By the end of this note you can:

- [ ] Explain these concepts in your own words: Event stream format and `text/event-stream`; Reconnection and `Last-Event-ID`.
- [ ] Apply this topic in a small program or experiment.
- [ ] Recognize the common failure modes covered in this note.
- [ ] Connect this topic to the module project.

## Core concepts

Work through each idea. Replace every prompt with your own explanation and a runnable example.

### 1. Event stream format and `text/event-stream`

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Event stream format and `text/event-stream`"
```

### 2. Reconnection and `Last-Event-ID`

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Reconnection and `Last-Event-ID`"
```

### 3. Proxies, buffering, and heartbeats

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Proxies, buffering, and heartbeats"
```

### 4. Client `EventSource` behavior

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Client `EventSource` behavior"
```

### 5. When SSE is better than WebSockets

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "When SSE is better than WebSockets"
```



## Code experiments

1. **Baseline** — reproduce the smallest working example for Event stream format and `text/event-stream`. Predict the output before running.
2. **Change** — modify one detail in Reconnection and `Last-Event-ID`. Explain the difference.
3. **Break** — break When SSE is better than WebSockets on purpose. Capture the error and explain it.
4. **Combine** — use Event stream format and `text/event-stream` and Reconnection and `Last-Event-ID` in one small program.

```js
// TODO: experiment space
```

## Common mistakes

- **Mistake:** Letting a proxy buffer the stream. Explain the cause and the fix in your own words.
- **Mistake:** Forgetting keep-alive comments. Explain the cause and the fix in your own words.
- **Mistake:** Using SSE for bidirectional communication. Explain the cause and the fix in your own words.

## Practice

1. Build a minimal repro or benchmark that isolates Event stream format and `text/event-stream`.
2. Measure it with a profile, trace, or benchmark. Record before/after numbers for When SSE is better than WebSockets.
3. Write a short ADR-style note explaining a trade-off in Server-Sent Events.

## Self-check

1. Explain Event stream format and `text/event-stream` without opening this note.
2. Compare Reconnection and `Last-Event-ID` with an alternative. When is each appropriate?
3. What happens at the edge case of When SSE is better than WebSockets, and how do you detect it?
4. Where does Server-Sent Events appear in a production application?

## Summary

- 
- 
- 
- 
- 

## References

- [ ] [MDN: WebSockets](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API)
- [ ] [MDN: Server-sent events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events)
- [ ] [NATS documentation](https://docs.nats.io/)
- [ ] [Kafka documentation](https://kafka.apache.org/documentation/)

## Review

| Date | Recall score (1–5) | What I forgot | Next review |
| --- | --- | --- | --- |
|  |  |  |  |
