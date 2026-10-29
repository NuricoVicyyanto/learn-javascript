# 04.4 Repositories

> **Level:** Intermediate · **Module:** 04 Databases · **Status:** ⬜ Not started
> **Estimated time:** 75–90 min

## Why it matters

A repository hides query details behind a domain-facing API, making business logic testable and storage replaceable.

## Learning objectives

By the end of this note you can:

- [ ] Explain these concepts in your own words: Repository interfaces at the consumer boundary; Mapping rows to domain objects.
- [ ] Apply this topic in a small program or experiment.
- [ ] Recognize the common failure modes covered in this note.
- [ ] Connect this topic to the module project.

## Core concepts

Work through each idea. Replace every prompt with your own explanation and a runnable example.

### 1. Repository interfaces at the consumer boundary

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Repository interfaces at the consumer boundary"
```

### 2. Mapping rows to domain objects

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Mapping rows to domain objects"
```

### 3. Pagination and filtering

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Pagination and filtering"
```

### 4. Transactions across repositories

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Transactions across repositories"
```

### 5. Testing with fakes and a real database

<!-- What is it? Why does it exist? When does it bite?
     Write 2–4 sentences in your own words, then add a minimal example. -->

**My explanation:**

**Minimal example:**

```js
// TODO: smallest example for "Testing with fakes and a real database"
```



## Code experiments

1. **Baseline** - reproduce the smallest working example for Repository interfaces at the consumer boundary. Predict the output before running.
2. **Change** - modify one detail in Mapping rows to domain objects. Explain the difference.
3. **Break** - break Testing with fakes and a real database on purpose. Capture the error and explain it.
4. **Combine** - use Repository interfaces at the consumer boundary and Mapping rows to domain objects in one small program.

```js
// TODO: experiment space
```

## Common mistakes

- **Mistake:** Creating one generic repository for every entity. Explain the cause and the fix in your own words.
- **Mistake:** Leaking driver types into the domain. Explain the cause and the fix in your own words.
- **Mistake:** Over-mocking the database and never testing SQL. Explain the cause and the fix in your own words.

## Practice

1. Build a small module that applies Repository interfaces at the consumer boundary and Mapping rows to domain objects. Export a clear API and test it.
2. Write an integration-style test or benchmark that exercises Testing with fakes and a real database.
3. Document one trade-off and one failure mode of Repositories.

## Self-check

1. Explain Repository interfaces at the consumer boundary without opening this note.
2. Compare Mapping rows to domain objects with an alternative. When is each appropriate?
3. What happens at the edge case of Testing with fakes and a real database, and how do you detect it?
4. Where does Repositories appear in a production application?

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
