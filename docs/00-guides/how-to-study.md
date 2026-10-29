# How to Study

This curriculum is designed for deliberate practice, not passive reading. The notes are a thinking tool; the code and the tests are the evidence.

---

## The learning loop

For every topic:

1. **Preview (5 min)** — read the objectives and the topic headings. Write two questions you expect to answer.
2. **Study (20–30 min)** — read one authoritative source. Take sparse notes: ideas, examples, and questions. Do not highlight.
3. **Experiment (20–30 min)** — type the examples. Change one thing at a time. Predict the result before running.
4. **Recall (10 min)** — close everything and explain the topic aloud or on a blank page.
5. **Apply (20–40 min)** — solve the practice task and write a test.
6. **Review (5 min)** — add mistakes to the note and schedule a review.

If you cannot do step 4, you studied but did not learn. Go back to step 2 with a smaller question.

---

## A good 90-minute session

| Phase | Time | Output |
| --- | --- | --- |
| Warm-up recall | 10 min | Answer 3 questions from the previous session |
| Read and annotate | 25 min | Topic note with your own explanation |
| Code experiments | 30 min | Working examples, at least one deliberate failure |
| Exercise | 20 min | Attempt committed in `labs/` |
| Wrap-up | 5 min | Summary, questions, next step in `PROGRESS.md` |

Do not optimize for hours. Optimize for the number of concepts you can use without help.

---

## Note-taking that works

### Explain, do not transcribe

Bad note:

> `map` creates a new array.

Better note:

> `map` calls the callback once per element and returns a new array of the same length. It does not skip holes, and it does not flatten nested arrays. I used it to transform API records, then compared it with `flatMap` for a case where one input produced zero or many outputs.

### Use the three-question pattern

For each concept, write:

1. **What is it?** A definition in one sentence.
2. **Why does it exist?** The problem it solves.
3. **When does it bite?** The failure mode or trade-off.

### Keep a question list

Unanswered questions are the most valuable part of a note. Move them to the review queue in `PROGRESS.md`.

### Use the Feynman test

Explain the concept to an imaginary junior developer who knows another language but not JavaScript. If you need jargon you cannot define, you found a gap.

---

## Code experiments

Every topic note has an experiment section. Use this pattern:

```js
// 1. Predict what happens.
// 2. Run it with `node file.js` or in the browser console.
// 3. Change one thing.
// 4. Explain the difference.
```

Rules:

- Type the code manually; do not paste.
- Keep experiments in `labs/`, not in the docs.
- Make the smallest program that shows the behavior.
- Break it on purpose: remove an `await`, compare `==` and `===`, block the event loop.
- Add a test when the behavior is subtle.
- Open DevTools when the behavior is browser-specific.

---

## Debugging as a learning method

When something fails:

1. Read the entire error, including the stack trace.
2. Reproduce it in the smallest possible program.
3. State the expected and actual behavior in one sentence.
4. Form one hypothesis and test only that.
5. Record the bug in the [debug log](templates/debug-log.md).

Useful tools:

```bash
node --inspect-brk file.js     # pause before the first line
node --trace-uncaught file.js  # richer uncaught-error trace
node --test --test-reporter spec
```

A bug you can explain is worth more than three tutorials you finished.

---

## Spaced review

Schedule reviews after:

- **1 day** — recall the summary and one code example.
- **1 week** — solve one exercise again from scratch.
- **1 month** — explain the topic and connect it to a later module.

Use the review queue in `PROGRESS.md`. If you fail a review, mark the topic 🔁 and revisit the note, not the whole module.

---

## Using AI assistants well

AI is useful for feedback and explanation, not for replacing the struggle.

Good uses:

- Ask for a critique of your code and tests.
- Ask "what am I missing?" after you have an attempt.
- Generate edge cases, then verify them yourself.
- Explain an error message you already tried to understand.

Bad uses:

- Generating a solution before you have attempted the exercise.
- Accepting code you cannot explain line by line.
- Letting the assistant write your notes.
- Trusting generated APIs without checking MDN or Node.js docs.

Rule: **if you cannot defend it in review, you do not own it.**

---

## When you are stuck

| Symptom | Try |
| --- | --- |
| Cannot understand the docs | Find a smaller example; inspect the value in DevTools |
| Works in one browser, fails in another | Check compatibility on MDN; read the error, not the symptom |
| Async code resolves in the wrong order | Draw the stack, microtask, and task queues |
| Test hangs | Look for an unawaited promise, open server, or interval |
| Too many options | Write the simplest version; list trade-offs; choose one |
| Losing motivation | Shrink the task to 15 minutes; build something visible |
| Tutorial hell | Close the tutorial and rebuild from memory |

Escalate after 30–45 minutes of genuine effort:

1. Write the question with goal, minimal code, expected vs actual, and what you tried.
2. Ask a peer or a community.
3. Record the answer in your note.

---

## Weekly review

Once a week, spend 30 minutes on:

- [ ] Which topics can I explain without notes?
- [ ] Which exercises failed, and why?
- [ ] What did I build that works?
- [ ] What am I avoiding?
- [ ] What is the next concrete task?

Update `PROGRESS.md` and clean up the lab code. A tidy workspace reduces friction for the next session.

---

## Motivation

- **Ship small things.** A working CLI at the end of beginner level is more motivating than ten unfinished tutorials.
- **Keep a win log.** Record what now works that did not work last week.
- **Read real code.** Once you know the basics, read the source of a library you use.
- **Teach.** Write a short explanation or pair with someone.
- **Rest.** Sleep consolidates learning; grinding through fatigue does not.
