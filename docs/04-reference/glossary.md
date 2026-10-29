# Glossary

Add terms as you meet them. The definitions below are starting points; rewrite them in your own words.

## Language

| Term | Working definition |
| --- | --- |
| **Hoisting** | Declarations are processed before execution. Function declarations are initialized; `let`/`const` bindings exist but are uninitialized until their line runs. |
| **Temporal dead zone (TDZ)** | The period between entering a scope and initializing a `let`/`const` binding. Accessing it throws `ReferenceError`. |
| **Closure** | A function together with the lexical environment it captured. The captured variables stay alive while the function is reachable. |
| **`this`** | A call-site-dependent binding. Rules: default, implicit object call, explicit `call`/`apply`/`bind`, `new`, and lexical arrows. |
| **Prototype** | The object a property lookup falls back to. The prototype chain ends at `Object.prototype` or `null`. |
| **Prototype pollution** | Injecting properties into `Object.prototype` through unsafe merges or key assignment. |
| **Coercion** | Implicit conversion between types, especially with `==`, `+`, and truthiness checks. |
| **Falsy** | `false`, `0`, `-0`, `0n`, `""`, `null`, `undefined`, `NaN`. Everything else is truthy. |
| **Pure function** | Returns the same output for the same input and causes no observable side effects. |
| **Higher-order function** | A function that takes or returns another function. |
| **IIFE** | Immediately invoked function expression; historically used for scoping before modules. |
| **ESM** | ECMAScript Modules: static `import`/`export`, one instance per module graph. |
| **CJS** | CommonJS: `require`/`module.exports`, historically used by Node.js. |
| **Tree shaking** | Bundler optimization that removes unused exports. Requires static, side-effect-free code. |
| **Iterator protocol** | An object with a `next()` method returning `{ value, done }`. |
| **Generator** | A function declared with `function*` that yields values lazily. |
| **Proxy** | An object that intercepts fundamental operations such as get, set, and delete. |
| **WeakMap** | A map with object keys that does not prevent garbage collection. |

## Async and runtime

| Term | Working definition |
| --- | --- |
| **Call stack** | The stack of currently executing function frames. |
| **Event loop** | The loop that takes tasks from queues and runs them on the call stack when it is empty. |
| **Task / macrotask** | A unit of work such as a timer or I/O callback. |
| **Microtask** | A high-priority job, typically a promise reaction or `queueMicrotask`. Drained after each task. |
| **Promise** | An object representing a future value with states pending, fulfilled, or rejected. |
| **Thenable** | Any object with a `then` method that promises can assimilate. |
| **async/await** | Syntax for writing promise-based code in a synchronous style. `await` suspends the async function, not the thread. |
| **Unhandled rejection** | A rejected promise with no handler. Node.js can terminate the process. |
| **AbortController** | A standard way to signal cancellation to async operations through `AbortSignal`. |
| **Worker thread** | A separate JavaScript isolate with its own event loop, used for CPU-bound work. |
| **Cluster** | A Node.js module for forking worker processes that share a server port. |
| **Backpressure** | A mechanism that slows producers when consumers cannot keep up. |
| **Stream** | An abstraction for incremental data flow: readable, writable, transform, or duplex. |
| **High-water mark** | The buffer threshold at which a stream signals the producer to slow down. |
| **AsyncLocalStorage** | A Node.js API for request-scoped context that survives async boundaries. |
| **Event-loop lag** | The delay between when a timer was scheduled and when it actually runs; a saturation signal. |

## Engine and performance

| Term | Working definition |
| --- | --- |
| **V8** | The JavaScript engine used by Chrome and Node.js. |
| **Ignition** | V8's bytecode interpreter. |
| **TurboFan** | V8's optimizing JIT compiler. |
| **Hidden class** | An internal object shape that makes property access fast and predictable. |
| **Inline cache** | A per-call-site cache of observed types/shapes used to speed up property access. |
| **Monomorphic** | A call site that has seen one shape/type. Fastest case. |
| **Megamorphic** | A call site that has seen many shapes/types. Often slower and harder to optimize. |
| **Deoptimization** | Discarding optimized code when a speculative assumption fails. |
| **Garbage collection** | Reclaiming memory that is no longer reachable. V8 uses a generational collector. |
| **Heap snapshot** | A capture of all live objects and their retainers, used to diagnose leaks. |
| **Flame graph** | A visualization of sampled stack traces where width represents time. |
| **p95 / p99** | The 95th or 99th percentile of a latency distribution. |

## Web and backend

| Term | Working definition |
| --- | --- |
| **DOM** | The browser's tree representation of an HTML document. |
| **Event bubbling** | An event travels from the target up through ancestors. |
| **Event delegation** | Handling events on a common ancestor instead of each child. |
| **CORS** | Browser policy and headers that control cross-origin requests. |
| **CSP** | Content Security Policy: headers that restrict which scripts and resources may run. |
| **XSS** | Cross-site scripting: untrusted input executed as code in the page. |
| **CSRF** | Cross-site request forgery: a third-party site triggers an authenticated request. |
| **SSRF** | Server-side request forgery: the server is tricked into requesting internal resources. |
| **JWT** | A signed token format. A JWT is not automatically a secure session. |
| **OIDC** | An identity layer on top of OAuth2 that provides authentication. |
| **Idempotency** | Repeating an operation produces the same observable result as doing it once. |
| **Transactional outbox** | Storing an event in the same database transaction as the state change, then publishing it later. |
| **At-least-once** | A delivery guarantee where messages may duplicate but are not lost. |
| **Dead-letter queue** | A queue for messages that cannot be processed after retries are exhausted. |
| **Cache stampede** | Many requests recompute the same missing cache entry at once. |
| **N+1 query** | One query for a list plus one query per item, usually a performance bug. |
| **SLO** | A target for a measurable service-level indicator. |
| **Cardinality** | The number of distinct label combinations in a metric. High cardinality is expensive. |

## Add your own

| Term | My definition | Where I used it |
| --- | --- | --- |
|  |  |  |
|  |  |  |
|  |  |  |
