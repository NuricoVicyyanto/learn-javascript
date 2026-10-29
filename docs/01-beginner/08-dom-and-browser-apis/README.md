# 08 · DOM and Browser APIs

> **Level:** Beginner · **Status:** ⬜ Not started · **Estimated time:** 10 hours

## Why this module

JavaScript in the browser exists to manipulate the DOM and respond to users. You need safe, accessible patterns before reaching for a framework.

## Prerequisites

- Modules 03–07 completed.

## Learning outcomes

- [ ] Select, create, update, and remove DOM nodes safely.
- [ ] Handle events with delegation and correct default behavior.
- [ ] Read forms with FormData and validate input.
- [ ] Use browser storage without corrupting data.

## Topics

| # | Topic | Est. | Status |
| --- | --- | --- | --- |
| 08.1 | [DOM Manipulation](01-dom-manipulation.md) | 90–120 min | ⬜ |
| 08.2 | [Events](02-events.md) | 90 min | ⬜ |
| 08.3 | [Forms](03-forms.md) | 75–90 min | ⬜ |
| 08.4 | [Browser Storage](04-browser-storage.md) | 60–75 min | ⬜ |

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

[`labs/beginner/08-dom-and-browser-apis`](../../../labs/beginner/08-dom-and-browser-apis/README.md)

```bash
cd labs
node beginner/08-dom-and-browser-apis/main.js
node --test beginner/08-dom-and-browser-apis/exercises.test.js
```

## Mini project - Browser Task Board

Build a task board with columns, drag-free move buttons, filters, and local persistence. Use semantic HTML, event delegation, and accessible status messages.

**Deliverables:**

- [ ] Model tasks and render them from state.
- [ ] Use event delegation for all task actions.
- [ ] Persist with a schema version and recover from corrupt data.
- [ ] Test pure state functions and manually verify keyboard navigation.

**Definition of done:**

- [ ] Runs from a clean checkout.
- [ ] Formatted with Prettier (or consistent style); lint passes.
- [ ] Tests cover the core behavior and at least two edge cases.
- [ ] README explains how to run it and one design decision.
- [ ] You can explain every line without notes.

## Self-assessment

1. Why is `innerHTML` dangerous with user input?
2. How does event delegation work?
3. When should you call `preventDefault`?
4. What are the risks of storing data in `localStorage`?

Score yourself honestly. If you miss more than one question, review the module before moving on.

## References

- [ ] [MDN: DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)
- [ ] [MDN: Event reference](https://developer.mozilla.org/en-US/docs/Web/Events)
- [ ] [MDN: FormData](https://developer.mozilla.org/en-US/docs/Web/API/FormData)
- [ ] [MDN: Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API)
