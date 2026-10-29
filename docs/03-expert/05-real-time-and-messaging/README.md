# 05 · Real-time and Messaging

> **Level:** Expert · **Status:** ⬜ Not started · **Estimated time:** 12 hours

## Why this module

Users expect live updates and systems need asynchronous communication. WebSockets, Server-Sent Events, and brokers each have different delivery and operational trade-offs.

## Prerequisites

- Modules 03–04 completed.

## Learning outcomes

- [ ] Design WebSocket and SSE endpoints.
- [ ] Handle connection lifecycle, backpressure, and fan-out.
- [ ] Choose between real-time transports and queues.
- [ ] Operate a consumer with lag and replay awareness.

## Topics

| # | Topic | Est. | Status |
| --- | --- | --- | --- |
| 05.1 | [WebSockets](01-websockets.md) | 90–120 min | ⬜ |
| 05.2 | [Server-Sent Events](02-server-sent-events.md) | 75–90 min | ⬜ |
| 05.3 | [Message Brokers](03-message-brokers.md) | 90–120 min | ⬜ |

## Module checklist

- [ ] Read every topic note and explain it without notes.
- [ ] Implement every exercise in the module lab.
- [ ] Complete the [exercises](exercises.md).
- [ ] Record your solutions in [solutions.md](solutions.md).
- [ ] Build the mini project.
- [ ] Pass the self-assessment.
- [ ] Run formatting, linting, and tests.
- [ ] Update `PROGRESS.md`.

## Exercises

Do the exercises without notes first. Then compare with `solutions.md` and write down what you missed.

- [Exercises](exercises.md)
- [Solutions](solutions.md)

## Lab starter

Runnable starter code for every topic in this module:

[`labs/expert/05-real-time-and-messaging`](../../../labs/expert/05-real-time-and-messaging/README.md)

```bash
cd labs
node expert/05-real-time-and-messaging/main.js
node --test expert/05-real-time-and-messaging/exercises.test.js
```

## Mini project — Typed Event Service

Build a real-time service with a WebSocket or SSE endpoint and a companion event consumer. The service owns one aggregate, publishes events through an outbox, and exposes delivery status.

**Deliverables:**

- [ ] Define the event schema and version it.
- [ ] Implement one real-time transport with heartbeats.
- [ ] Publish and consume one event type idempotently.
- [ ] Document compatibility rules and failure handling.

**Definition of done:**

- [ ] Runs from a clean checkout.
- [ ] Formatted with Prettier (or consistent style); lint passes.
- [ ] Tests cover the core behavior and at least two edge cases.
- [ ] README explains how to run it and one design decision.
- [ ] You can explain every line without notes.

## Self-assessment

1. When is SSE a better choice than WebSockets?
2. How do you detect a dead WebSocket connection?
3. What does consumer lag tell you?
4. How do you version an event schema without breaking consumers?

Score yourself honestly. If you miss more than one question, review the module before moving on.

## References

- [ ] [MDN: WebSockets](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API)
- [ ] [MDN: Server-sent events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events)
- [ ] [NATS documentation](https://docs.nats.io/)
- [ ] [Kafka documentation](https://kafka.apache.org/documentation/)
