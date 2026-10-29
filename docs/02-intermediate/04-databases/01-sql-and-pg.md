# 04.1 SQL and PostgreSQL

> **Level:** Intermediate · **Module:** 04 Databases · **Status:** ⬜ Not started
> **Estimated time:** 90–120 min

## Why it matters

PostgreSQL is the default relational database for Node.js services. Parameterized queries prevent injection and make plans reusable.

## Learning objectives

By the end of this note you can:

- [ ] Explain these concepts in your own words: Connections and pools with `pg`; Parameterized queries and placeholders.
- [ ] Apply this topic in a small program or experiment.
- [ ] Recognize the common failure modes covered in this note.
- [ ] Connect this topic to the module project.

## Core concepts

Work through each idea. Replace every prompt with your own explanation and a runnable example.

### 1. Connections and pools with `pg`

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Connections and pools with `pg`"
```

### 2. Parameterized queries and placeholders

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Parameterized queries and placeholders"
```

### 3. Result rows and type mapping

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Result rows and type mapping"
```

### 4. `RETURNING` and generated IDs

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "`RETURNING` and generated IDs"
```

### 5. Connection pool sizing

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Connection pool sizing"
```



## Code experiments

1. **Baseline** — reproduce the smallest working example for Connections and pools with `pg`. Predict the output before running.
2. **Change** — modify one detail in Parameterized queries and placeholders. Explain the difference.
3. **Break** — break Connection pool sizing on purpose. Capture the error and explain it.
4. **Combine** — use Connections and pools with `pg` and Parameterized queries and placeholders in one small program.

```js
// TODO: experiment space
```

## Common mistakes

- **Mistake:** Building SQL with string interpolation. Explain the cause and the fix in your own words.
- **Mistake:** Checking out a client and never releasing it. Explain the cause and the fix in your own words.
- **Mistake:** Assuming JavaScript numbers map exactly to bigint. Explain the cause and the fix in your own words.

## Practice

1. Build a small module that applies Connections and pools with `pg` and Parameterized queries and placeholders. Export a clear API and test it.
2. Write an integration-style test or benchmark that exercises Connection pool sizing.
3. Document one trade-off and one failure mode of SQL and PostgreSQL.

## Self-check

1. Explain Connections and pools with `pg` without opening this note.
2. Compare Parameterized queries and placeholders with an alternative. When is each appropriate?
3. What happens at the edge case of Connection pool sizing, and how do you detect it?
4. Where does SQL and PostgreSQL appear in a production application?

## Summary

- 
- 
- 
- 
- 

## References

- [ ] [node-postgres documentation](https://node-postgres.com/)
- [ ] [PostgreSQL documentation](https://www.postgresql.org/docs/)
- [ ] [OWASP: SQL injection](https://owasp.org/www-community/attacks/SQL_Injection)
- [ ] [Use The Index, Luke](https://use-the-index-luke.com/)

## Review

| Date | Recall score (1–5) | What I forgot | Next review |
| --- | --- | --- | --- |
|  |  |  |  |
