# FAQ

## Do I need prior programming experience?

Yes, some. The beginner level assumes you understand variables, loops, functions, and arrays in another language. If you have never programmed, start with a general programming course, then return here.

## How long does the whole path take?

Roughly 30–40 weeks at 10 hours per week, or 15–20 weeks at 20 hours per week. The capstones are the largest items; do not compress them into a weekend.

## Can I skip the beginner level if I know another language?

Skim modules 01–02, then take the beginner self-assessment. If you can explain closures, `this`, scope, promises, and modules, you can move faster. Do not skip the capstone: it exposes gaps that reading does not.

## Should I learn TypeScript now or later?

Learn JavaScript first, then TypeScript in the intermediate tooling module. Types are much easier once you understand the runtime behavior they describe.

## Should I use a framework?

Not while learning. Build with the DOM, `fetch`, `node:http`, and the standard library first. A framework hides decisions you need to understand. After the intermediate level, choose based on measured needs.

## Which Node.js version should I use?

Use the current LTS release for application work. The labs target modern Node.js with ESM, `fetch`, `node:test`, and `AbortSignal.timeout`. Check `node --version` before starting.

## Why does my async code run in the wrong order?

Draw the call stack, the microtask queue, and the task queue. Promise callbacks run before timers. `await` pauses the async function, not the whole program. See the event-loop module.

## How much of the platform should I memorize?

None. Learn the map: language built-ins, DOM, `fetch`, Node's `fs`/`http`/`stream`/`worker_threads`/`test`, and the major package categories. Look up details.

## How do I know I am ready for the next level?

Use the exit gates in [`ROADMAP.md`](../../ROADMAP.md) and the rubric in [`definition-of-done.md`](../00-guides/definition-of-done.md). If you cannot explain the capstone and pass its tests without notes, you are not ready.

## Is it okay to use AI assistants?

Yes, for explanation, critique, and edge-case generation after you have attempted the work. Do not use them to produce solutions you cannot defend. See [How to study](../00-guides/how-to-study.md#using-ai-assistants-well).

## Why are the notes mostly empty?

Because writing the explanation is the exercise. The repository provides structure, questions, and projects. Filling the notes in your own words is what turns reading into recall.

## What if I get stuck for hours?

Use the 30–45 minute rule: write the minimal reproduction, state expected vs actual, list hypotheses, then ask for help with those details. Record the answer in a debug log. Getting unstuck is a skill you are practicing.

## Do I need Docker and Kubernetes?

Docker is required for the intermediate deployment work. Kubernetes is required for the expert production module. Both can be run locally with Docker Desktop, kind, or minikube.

## Do I need a database?

Yes, for the intermediate level onward. PostgreSQL is the default recommendation. Use Docker Compose or a disposable test database; do not point exercises at production data.

## How do I practice async and concurrency safely?

Start with small programs, always handle rejections, use `AbortController`, and run tests that assert cleanup. For CPU work, move it to a worker thread and measure the main-thread lag before and after.

## What should I build after the curriculum?

Contribute to an open-source JavaScript project, build a service in a domain you care about, or deepen one area: browsers, databases, compilers, networking, or distributed storage. Teaching the material is also a strong next step.

## Can I use this repository for a study group?

Yes. Assign one module per week, have each person fill their own notes, and use the capstone rubric for peer review. The gate reviews work well as group sessions.
