# 01.5 Node.js Event Loop Phases

> **Level:** Intermediate · **Module:** 01 Event Loop and Concurrency · **Status:** ⬜ Not started
> **Estimated time:** 90 min

## Why it matters

Node.js extends the browser model with phases for timers, pending callbacks, polling, check, and close events. The phases explain I/O ordering.

## Learning objectives

By the end of this note you can:

- [ ] Explain these concepts in your own words: Timers, pending callbacks, and poll; Check phase and `setImmediate`.
- [ ] Apply this topic in a small program or experiment.
- [ ] Recognize the common failure modes covered in this note.
- [ ] Connect this topic to the module project.

## Core concepts

Work through each idea. Replace every prompt with your own explanation and a runnable example.

### 1. Timers, pending callbacks, and poll

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Timers, pending callbacks, and poll"
```

### 2. Check phase and `setImmediate`

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Check phase and `setImmediate`"
```

### 3. Close callbacks

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Close callbacks"
```

### 4. `process.nextTick` and microtasks

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "`process.nextTick` and microtasks"
```

### 5. Event-loop utilization and lag

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Event-loop utilization and lag"
```



## Code experiments

1. **Baseline** — reproduce the smallest working example for Timers, pending callbacks, and poll. Predict the output before running.
2. **Change** — modify one detail in Check phase and `setImmediate`. Explain the difference.
3. **Break** — break Event-loop utilization and lag on purpose. Capture the error and explain it.
4. **Combine** — use Timers, pending callbacks, and poll and Check phase and `setImmediate` in one small program.

```js
// TODO: experiment space
```

## Common mistakes

- **Mistake:** Confusing browser and Node.js ordering. Explain the cause and the fix in your own words.
- **Mistake:** Starving the poll phase with `setImmediate` recursion. Explain the cause and the fix in your own words.
- **Mistake:** Ignoring event-loop lag in production. Explain the cause and the fix in your own words.

## Practice

1. Build a small module that applies Timers, pending callbacks, and poll and Check phase and `setImmediate`. Export a clear API and test it.
2. Write an integration-style test or benchmark that exercises Event-loop utilization and lag.
3. Document one trade-off and one failure mode of Node.js Event Loop Phases.

## Self-check

1. Explain Timers, pending callbacks, and poll without opening this note.
2. Compare Check phase and `setImmediate` with an alternative. When is each appropriate?
3. What happens at the edge case of Event-loop utilization and lag, and how do you detect it?
4. Where does Node.js Event Loop Phases appear in a production application?

## Summary

- 
- 
- 
- 
- 

## References

- [ ] [MDN: Event loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Event_loop)
- [ ] [Node.js: Event loop](https://nodejs.org/en/learn/asynchronous-work/event-loop-timers-and-nexttick)
- [ ] [Node.js: worker_threads](https://nodejs.org/api/worker_threads.html)
- [ ] [Node.js: perf_hooks](https://nodejs.org/api/perf_hooks.html)

## Review

| Date | Recall score (1–5) | What I forgot | Next review |
| --- | --- | --- | --- |
|  |  |  |  |
