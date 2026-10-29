# Capstone: CLI Application

> **Level:** Beginner · **Status:** ⬜ Not started · **Estimated time:** 15 hours

## The problem

Small teams need a dependable command-line tool for a daily task, but shell scripts become unmaintainable and spreadsheet workflows do not scale. You will build a focused CLI with clear commands, stable output, and tests.

## Users and main flows

A developer or operations person who runs the tool from a terminal, pipes input, and scripts it in a pipeline.

## What you will build

A Node.js command-line application with at least three subcommands, persistent local storage, human-readable and machine-readable output, and a test suite.

## Functional requirements

- [ ] Create, list, update, and delete records from the command line
- [ ] Support filtering or search with at least two criteria
- [ ] Persist data between runs without corruption
- [ ] Provide a `--json` output mode for scripting
- [ ] Return non-zero exit codes and useful messages on failure
- [ ] Include a `--help` page for every command

## Non-functional requirements

- **Performance:** List 10,000 records in under 200 ms on a laptop
- **Reliability:** No data loss on interrupted writes; corrupt input is reported, not overwritten
- **Usability:** A new user can complete the main flow from `--help` alone
- **Portability:** Runs on the current LTS Node.js on Windows, macOS, and Linux
- **Testability:** Core logic and command behavior are covered by automated tests

## Suggested architecture

```text
src/main.js       -> argument parsing, wiring, exit codes
src/app.js        -> business rules and validation
src/store.js      -> JSON persistence and atomic writes
src/output.js     -> table and JSON rendering
```

## Milestones

| # | Milestone | Definition of done |
| --- | --- | --- |
| 1 | Walking skeleton | One command persists and lists one record |
| 2 | Core commands | CRUD works with validation and atomic save |
| 3 | Search and output | Filters, table output, and `--json` work |
| 4 | Robustness | Corrupt file, interrupted write, and invalid input handled |
| 5 | Polish | Help text, README, exit codes, and install instructions |

## Deliverables

- [ ] Working repository in `labs/beginner/capstone-cli/`
- [ ] README with setup, run, and test instructions
- [ ] Tests: unit + at least one integration or end-to-end test
- [ ] Formatting and linting pass
- [ ] `node --test` passes
- [ ] Design decision log
- [ ] Retrospective

## Start here

1. Read [requirements.md](requirements.md) and write the acceptance criteria.
2. Copy the milestone table into your project plan.
3. Build the walking skeleton before adding features.
4. Commit after every working milestone.

## Files

- [Requirements](requirements.md)
- [Milestones](milestones.md)
- [Rubric](rubric.md)
- [Retrospective](retrospective.md)
