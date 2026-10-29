# Definition of Done

"This feels finished" is not a completion criterion. Use the checklists below as evidence.

---

## A topic note is done when...

- [ ] The status line says ✅.
- [ ] Every section has content in your own words.
- [ ] You can explain the concept without opening the note.
- [ ] At least one code experiment ran, including a deliberate failure.
- [ ] You recorded at least one real mistake or edge case.
- [ ] The self-check questions are answered correctly.
- [ ] The summary is five bullets or fewer.
- [ ] You added an official reference and one useful community source.
- [ ] You scheduled a review in `PROGRESS.md`.

**Quality test:** explain the topic to a peer in under three minutes and answer two follow-up questions.

---

## A module is done when...

- [ ] All topic notes are ✅.
- [ ] Every module lab exercise in `labs/` is implemented.
- [ ] Every exercise is attempted; failures are documented, not hidden.
- [ ] `solutions.md` contains your working solution and a short explanation.
- [ ] The mini project runs and is formatted consistently.
- [ ] The mini project has tests and they pass.
- [ ] `node --check` passes on every JavaScript file.
- [ ] `node --test` passes.
- [ ] `npm audit` has no unresolved critical issue, or the exception is documented.
- [ ] The module self-assessment is passed without notes.
- [ ] `PROGRESS.md` is updated.
- [ ] The lab code is committed.

**Quality test:** delete the code, rebuild the core of the mini project from memory, and pass the tests again.

---

## A level is done when...

### Beginner gate

- [ ] You can write a 300–500 line program split into ES modules.
- [ ] You use arrays, objects, maps, and sets for the right reasons.
- [ ] You explain closures, `this`, hoisting, and the temporal dead zone.
- [ ] You handle promise rejections and `async/await` errors.
- [ ] You build a browser UI with safe DOM updates and event delegation.
- [ ] You write `node:test` suites and use `node --test`.
- [ ] The CLI capstone is complete, tested, and documented.
- [ ] You can explain every design decision in the capstone.

### Intermediate gate

- [ ] You can prove where an operation blocks the event loop.
- [ ] You propagate cancellation with `AbortController` from HTTP to the database.
- [ ] You design a REST API with validation, consistent errors, and pagination.
- [ ] You write unit, HTTP, and integration tests.
- [ ] You run migrations and explain transaction isolation.
- [ ] You build and run a non-root container image.
- [ ] You expose logs, metrics, traces, and health checks.
- [ ] You use TypeScript in strict mode for application code.
- [ ] The API capstone is complete, tested, and documented.

### Expert gate

- [ ] You can read a CPU profile or heap snapshot and explain the bottleneck.
- [ ] You produce a benchmark and a measurable improvement.
- [ ] You design for partial failure: timeouts, retries, idempotency, backpressure.
- [ ] You justify consistency, availability, and cost trade-offs in writing.
- [ ] You threat-model a service and fix the top risks.
- [ ] You run a production readiness review and an incident postmortem.
- [ ] The platform capstone is complete, reviewed, and documented.

---

## Scoring rubric

Use this for self-review or peer review. Score each row 0–3.

| Criterion | 0 | 1 | 2 | 3 |
| --- | --- | --- | --- | --- |
| Correctness | Does not run | Runs, wrong behavior | Works for happy path | Works for edge cases |
| Idiomatic JavaScript | Fights the language | Mixed style | Mostly idiomatic | Simple, clear, conventional |
| Tests | None | Happy path only | Good coverage | Edge cases, table-driven, fast |
| Error handling | Ignored rejections | Inconsistent | Handled with context | Deliberate boundaries and messages |
| Async correctness | Races or leaks | Works by luck | Mostly correct | Cancellation, timeouts, no leaks |
| Documentation | None | Comments restate code | Explains why | Notes, README, and decisions are clear |
| Review | Cannot explain | Partial explanation | Explains code | Explains trade-offs and alternatives |

**Target for a completed module:** at least 16/21, with no zero in correctness or review.

---

## Evidence to keep

For each level, keep:

- The capstone repository history.
- A short architecture note with trade-offs.
- Test output, including coverage and failure tests.
- One benchmark or performance comparison (intermediate and expert).
- One debugging story with root cause.
- One retrospective: what you would do differently.

These artifacts are more convincing than a list of completed tutorials.

---

## Anti-patterns

Do not mark a module done because:

- You watched a video without coding.
- The code works but you cannot explain it.
- Tests exist but assert nothing meaningful.
- You copied a solution from a tutorial or an AI without verification.
- You skipped the exercises because the project "covers the same thing".
- The project has no error handling, timeouts, or tests.
- Async work is launched without `await`, `.catch`, or a deliberate reason.

If any of these are true, mark the module 🔁 and fix it before advancing.
