# 01.2 Microtasks and Macrotasks

> **Level:** Intermediate · **Module:** 01 Event Loop and Concurrency · **Status:** ⬜ Not started
> **Estimated time:** 75–90 min

## Why it matters

Promise callbacks and timers have different priorities. Mixing them produces ordering that looks random until you know the rules.

## Learning objectives

By the end of this note you can:

- [ ] Explain these concepts in your own words: Promise jobs and the microtask queue; Timers, I/O, and macrotasks.
- [ ] Apply this topic in a small program or experiment.
- [ ] Recognize the common failure modes covered in this note.
- [ ] Connect this topic to the module project.

## Core concepts

Work through each idea. Replace every prompt with your own explanation and a runnable example.

### 1. Promise jobs and the microtask queue

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Promise jobs and the microtask queue"
```

### 2. Timers, I/O, and macrotasks

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Timers, I/O, and macrotasks"
```

### 3. Microtask draining between tasks

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Microtask draining between tasks"
```

### 4. `queueMicrotask` and `process.nextTick`

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "`queueMicrotask` and `process.nextTick`"
```

### 5. Ordering examples

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Ordering examples"
```



## Code experiments

1. **Baseline** — reproduce the smallest working example for Promise jobs and the microtask queue. Predict the output before running.
2. **Change** — modify one detail in Timers, I/O, and macrotasks. Explain the difference.
3. **Break** — break Ordering examples on purpose. Capture the error and explain it.
4. **Combine** — use Promise jobs and the microtask queue and Timers, I/O, and macrotasks in one small program.

```js
// TODO: experiment space
```

## Common mistakes

- **Mistake:** Assuming `setTimeout(0)` runs before a promise callback. Explain the cause and the fix in your own words.
- **Mistake:** Creating an infinite microtask chain. Explain the cause and the fix in your own words.
- **Mistake:** Using `nextTick` recursively and starving I/O. Explain the cause and the fix in your own words.

## Practice

1. Build a small module that applies Promise jobs and the microtask queue and Timers, I/O, and macrotasks. Export a clear API and test it.
2. Write an integration-style test or benchmark that exercises Ordering examples.
3. Document one trade-off and one failure mode of Microtasks and Macrotasks.

## Self-check

1. Explain Promise jobs and the microtask queue without opening this note.
2. Compare Timers, I/O, and macrotasks with an alternative. When is each appropriate?
3. What happens at the edge case of Ordering examples, and how do you detect it?
4. Where does Microtasks and Macrotasks appear in a production application?

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
