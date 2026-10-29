# 01.1 Call Stack and Queues

> **Level:** Intermediate · **Module:** 01 Event Loop and Concurrency · **Status:** ⬜ Not started
> **Estimated time:** 75–90 min

## Why it matters

Every callback runs on the same call stack. The queue that schedules it determines when it runs relative to other work.

## Learning objectives

By the end of this note you can:

- [ ] Explain these concepts in your own words: The call stack and synchronous execution; Task queue and microtask queue.
- [ ] Apply this topic in a small program or experiment.
- [ ] Recognize the common failure modes covered in this note.
- [ ] Connect this topic to the module project.

## Core concepts

Work through each idea. Replace every prompt with your own explanation and a runnable example.

### 1. The call stack and synchronous execution

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "The call stack and synchronous execution"
```

### 2. Task queue and microtask queue

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Task queue and microtask queue"
```

### 3. The event loop cycle

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "The event loop cycle"
```

### 4. Starvation and fairness

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Starvation and fairness"
```

### 5. Why long tasks delay everything

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Why long tasks delay everything"
```



## Code experiments

1. **Baseline** - reproduce the smallest working example for The call stack and synchronous execution. Predict the output before running.
2. **Change** - modify one detail in Task queue and microtask queue. Explain the difference.
3. **Break** - break Why long tasks delay everything on purpose. Capture the error and explain it.
4. **Combine** - use The call stack and synchronous execution and Task queue and microtask queue in one small program.

```js
// TODO: experiment space
```

## Common mistakes

- **Mistake:** Assuming asynchronous work runs on another thread. Explain the cause and the fix in your own words.
- **Mistake:** Blocking the stack with a CPU-heavy loop. Explain the cause and the fix in your own words.
- **Mistake:** Expecting timers to run at exact times. Explain the cause and the fix in your own words.

## Practice

1. Build a small module that applies The call stack and synchronous execution and Task queue and microtask queue. Export a clear API and test it.
2. Write an integration-style test or benchmark that exercises Why long tasks delay everything.
3. Document one trade-off and one failure mode of Call Stack and Queues.

## Self-check

1. Explain The call stack and synchronous execution without opening this note.
2. Compare Task queue and microtask queue with an alternative. When is each appropriate?
3. What happens at the edge case of Why long tasks delay everything, and how do you detect it?
4. Where does Call Stack and Queues appear in a production application?

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
