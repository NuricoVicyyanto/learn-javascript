# 05.1 WebSockets

> **Level:** Expert · **Module:** 05 Real-time and Messaging · **Status:** ⬜ Not started
> **Estimated time:** 90–120 min

## Why it matters

WebSockets provide full-duplex communication. Connection state, heartbeats, and fan-out are the hard parts.

## Learning objectives

By the end of this note you can:

- [ ] Explain these concepts in your own words: The WebSocket handshake and lifecycle; Sending, receiving, and message framing.
- [ ] Apply this topic in a small program or experiment.
- [ ] Recognize the common failure modes covered in this note.
- [ ] Connect this topic to the module project.

## Core concepts

Work through each idea. Replace every prompt with your own explanation and a runnable example.

### 1. The WebSocket handshake and lifecycle

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "The WebSocket handshake and lifecycle"
```

### 2. Sending, receiving, and message framing

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Sending, receiving, and message framing"
```

### 3. Heartbeats and reconnect strategy

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Heartbeats and reconnect strategy"
```

### 4. Fan-out and room subscriptions

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Fan-out and room subscriptions"
```

### 5. Backpressure and slow consumers

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Backpressure and slow consumers"
```



## Code experiments

1. **Baseline** — reproduce the smallest working example for The WebSocket handshake and lifecycle. Predict the output before running.
2. **Change** — modify one detail in Sending, receiving, and message framing. Explain the difference.
3. **Break** — break Backpressure and slow consumers on purpose. Capture the error and explain it.
4. **Combine** — use The WebSocket handshake and lifecycle and Sending, receiving, and message framing in one small program.

```js
// TODO: experiment space
```

## Common mistakes

- **Mistake:** Assuming messages are delivered exactly once. Explain the cause and the fix in your own words.
- **Mistake:** Leaving dead connections open. Explain the cause and the fix in your own words.
- **Mistake:** Broadcasting to every client without limits. Explain the cause and the fix in your own words.

## Practice

1. Build a minimal repro or benchmark that isolates The WebSocket handshake and lifecycle.
2. Measure it with a profile, trace, or benchmark. Record before/after numbers for Backpressure and slow consumers.
3. Write a short ADR-style note explaining a trade-off in WebSockets.

## Self-check

1. Explain The WebSocket handshake and lifecycle without opening this note.
2. Compare Sending, receiving, and message framing with an alternative. When is each appropriate?
3. What happens at the edge case of Backpressure and slow consumers, and how do you detect it?
4. Where does WebSockets appear in a production application?

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
