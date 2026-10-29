# JavaScript and Platform Map

JavaScript is the language; the runtime provides the APIs. Use this map to find the right built-in before adding a dependency.

## Language core (ECMAScript)

| Feature | Use it for | Notes |
| --- | --- | --- |
| `Array` | Ordered lists and transformations | `map`, `filter`, `reduce`, `sort`, `at` |
| `Object` | Records and namespaces | `keys`, `values`, `entries`, `freeze`, `groupBy` |
| `Map` / `Set` | Dynamic keyed collections and uniqueness | Preserve insertion order; any key type |
| `WeakMap` / `WeakSet` | Object-keyed metadata | Keys are weakly held; not enumerable |
| `Promise` | Async composition | `all`, `allSettled`, `race`, `any` |
| `JSON` | Serialization boundary | No `undefined`, functions, or cycles |
| `Intl` | Dates, numbers, collation, plurals | Prefer over hand-rolled formatting |
| `structuredClone` | Deep copy of supported values | Handles cycles; not functions or DOM nodes |
| `Proxy` / `Reflect` | Interception and metaprogramming | Powerful, easy to misuse |
| `Symbol` | Unique property keys and protocols | `Symbol.iterator`, `Symbol.asyncIterator` |
| `WeakRef` / `FinalizationRegistry` | Weak references and cleanup | Rare; nondeterministic |
| `Iterator` helpers | Lazy transformations | `map`, `filter`, `take` on iterators |

## Browser and Web APIs

| API | Use it for | Notes |
| --- | --- | --- |
| DOM | Selecting and updating the page | Prefer `textContent`; avoid untrusted `innerHTML` |
| Events | User interaction | Delegation, `once`, `passive`, `AbortSignal` |
| `fetch` | HTTP requests | Does not reject on HTTP 4xx/5xx |
| `URL` / `URLSearchParams` | Parsing and building URLs | Do not concatenate query strings |
| `AbortController` | Cancellation and timeouts | `AbortSignal.timeout(ms)` |
| Web Storage | Small key/value persistence | Synchronous; XSS can read it |
| IndexedDB | Larger structured client storage | Async; more complex than localStorage |
| WebSocket | Full-duplex real-time | Heartbeats and reconnect are your job |
| `EventSource` | Server-sent events | One-way; automatic reconnect |
| Web Workers | CPU work off the main thread | No DOM access; message passing |
| `MutationObserver` | React to DOM changes | Useful for integration, not app state |
| `IntersectionObserver` | Visibility and lazy loading | Efficient alternative to scroll checks |
| `crypto.randomUUID` | IDs | Not a substitute for cryptographic tokens |

## Node.js core

| Module | Use it for | Notes |
| --- | --- | --- |
| `node:fs` / `node:fs/promises` | Files and directories | Prefer async APIs on servers |
| `node:path` | Cross-platform paths | Never concatenate paths manually |
| `node:url` | URL parsing and file URLs | `fileURLToPath(import.meta.url)` |
| `node:http` | HTTP servers and clients | Set timeouts; handle request streams |
| `node:https` | TLS servers and clients | Prefer a reverse proxy for certificates |
| `node:stream` | Incremental I/O | Use `pipeline`; respect backpressure |
| `node:worker_threads` | Parallel JavaScript | CPU-bound work, not I/O |
| `node:cluster` | Multi-process servers | One event loop per process |
| `node:child_process` | External processes | Beware shell injection |
| `node:crypto` | Hashing, HMAC, encryption, keys | Use high-level protocols when possible |
| `node:test` | Test runner | Built-in: tests, mocks, coverage |
| `node:assert` | Assertions | Use `node:assert/strict` |
| `node:perf_hooks` | Timing and event-loop delay | `performance.now`, `monitorEventLoopDelay` |
| `node:async_hooks` | Async context | `AsyncLocalStorage` for request context |
| `node:diagnostics_channel` | Instrumentation channels | Low-level observability |
| `node:process` | Args, env, signals, exit | Validate env at startup |
| `node:os` | CPU, memory, host info | Useful for capacity decisions |
| `node:util` | Helpers | `parseArgs`, `inspect`, `promisify` |
| `node:events` | Event emitters | Understand listener leaks |

## Common packages and when they earn their place

| Package | Use it for | Add it when... |
| --- | --- | --- |
| `express` / `fastify` | HTTP routing | You need routing ergonomics beyond `node:http` |
| `zod` | Runtime validation | You accept untrusted input |
| `pg` | PostgreSQL driver | You use PostgreSQL |
| `pino` | Structured logging | You need fast JSON logs |
| `prom-client` | Prometheus metrics | You expose metrics |
| `@opentelemetry/*` | Tracing and metrics | You need distributed traces |
| `ws` | WebSockets | You need full-duplex real-time |
| `vite` | Browser dev server and bundling | You build a browser app |
| `typescript` | Static types | The project is large enough to benefit |
| `eslint` / `prettier` | Linting and formatting | More than one person or file |
| `vitest` / `jest` | Test runner with richer DX | `node:test` is insufficient |
| `playwright` | Browser end-to-end tests | You need real browser behavior |
| `testcontainers` | Disposable infrastructure | You need real database integration tests |

## When to add a dependency

Add a package when:

- It implements a protocol or format you should not build yourself (SQL driver, OpenTelemetry, protobuf).
- It has a maintenance and security story you can verify.
- It removes meaningful operational risk, not just a few lines.

Do not add a package for:

- A helper you can write clearly in 20 lines.
- A tiny wrapper around `fetch` or `fs`.
- A framework when `node:http` is enough for the exercise.
- Anything you have not checked for ownership, downloads, and recent maintenance.

## Runtime differences to remember

| Concern | Browser | Node.js |
| --- | --- | --- |
| Global object | `window` / `globalThis` | `global` / `globalThis` |
| Modules | ESM via `<script type="module">` | ESM or CommonJS |
| DOM | Available | Not available |
| File system | Not available | `node:fs` |
| `fetch` | Native | Native in modern Node.js |
| Timers | Browser semantics | Node.js event-loop phases |
| Security boundary | Untrusted client | Trusted server (but still validate) |
