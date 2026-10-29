# 09.1 Filesystem and Paths

> **Level:** Beginner · **Module:** 09 Node.js Fundamentals · **Status:** ⬜ Not started
> **Estimated time:** 75–90 min

## Why it matters

Backend scripts read configuration, process uploads, and write output. Path handling differs across platforms and is a common source of bugs.

## Learning objectives

By the end of this note you can:

- [ ] Explain these concepts in your own words: `node:fs/promises` and async file operations; `node:path` and cross-platform paths.
- [ ] Apply this topic in a small program or experiment.
- [ ] Recognize the common failure modes covered in this note.
- [ ] Connect this topic to the module project.

## Core concepts

Work through each idea. Replace every prompt with your own explanation and a runnable example.

### 1. `node:fs/promises` and async file operations

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "`node:fs/promises` and async file operations"
```

### 2. `node:path` and cross-platform paths

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "`node:path` and cross-platform paths"
```

### 3. File URLs and `import.meta.url`

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "File URLs and `import.meta.url`"
```

### 4. Atomic writes and temporary files

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Atomic writes and temporary files"
```

### 5. Permissions and error codes

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Permissions and error codes"
```



## Code experiments

1. **Baseline** - reproduce the smallest working example for `node:fs/promises` and async file operations. Predict the output before running.
2. **Change** - modify one detail in `node:path` and cross-platform paths. Explain the difference.
3. **Break** - break Permissions and error codes on purpose. Capture the error and explain it.
4. **Combine** - use `node:fs/promises` and async file operations and `node:path` and cross-platform paths in one small program.

```js
// TODO: experiment space
```

## Common mistakes

- **Mistake:** Building paths with string concatenation. Explain the cause and the fix in your own words.
- **Mistake:** Assuming a file write is atomic. Explain the cause and the fix in your own words.
- **Mistake:** Using synchronous I/O on a server request path. Explain the cause and the fix in your own words.

## Practice

1. Write a small Node script that uses `node:fs/promises` and async file operations and `node:path` and cross-platform paths. Keep it under 40 lines.
2. Add a test for the edge case around Permissions and error codes. Use `node:test` and `node:assert/strict`.
3. Explain Filesystem and Paths aloud in three minutes, then write the summary from memory.

## Self-check

1. Explain `node:fs/promises` and async file operations without opening this note.
2. Compare `node:path` and cross-platform paths with an alternative. When is each appropriate?
3. What happens at the edge case of Permissions and error codes, and how do you detect it?
4. Where does Filesystem and Paths appear in a production application?

## Summary

- 
- 
- 
- 
- 

## References

- [ ] [Node.js: fs](https://nodejs.org/api/fs.html)
- [ ] [Node.js: path](https://nodejs.org/api/path.html)
- [ ] [Node.js: process](https://nodejs.org/api/process.html)
- [ ] [npm docs: package.json](https://docs.npmjs.com/cli/configuring-npm/package-json)

## Review

| Date | Recall score (1–5) | What I forgot | Next review |
| --- | --- | --- | --- |
|  |  |  |  |
