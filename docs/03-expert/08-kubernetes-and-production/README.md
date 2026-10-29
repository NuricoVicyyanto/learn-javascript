# 08 · Kubernetes and Production Operations

> **Level:** Expert · **Status:** ⬜ Not started · **Estimated time:** 12 hours

## Why this module

Node.js services run in containers and often on Kubernetes. You need to make the process a good citizen: healthy, observable, scalable, and able to shut down without losing work.

## Prerequisites

- Intermediate Docker and deployment module completed.

## Learning outcomes

- [ ] Deploy a Node.js service with sane probes and limits.
- [ ] Implement graceful shutdown and connection draining.
- [ ] Configure autoscaling and disruption budgets.
- [ ] Define SLIs, SLOs, and actionable alerts.

## Topics

| # | Topic | Est. | Status |
| --- | --- | --- | --- |
| 08.1 | [Containers and Kubernetes](01-containers-and-kubernetes.md) | 90–120 min | ⬜ |
| 08.2 | [Graceful Shutdown and Scaling](02-graceful-shutdown-and-scaling.md) | 90 min | ⬜ |
| 08.3 | [Observability and SLOs](03-observability-and-slos.md) | 90 min | ⬜ |

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

[`labs/expert/08-kubernetes-and-production`](../../../labs/expert/08-kubernetes-and-production/README.md)

```bash
cd labs
node expert/08-kubernetes-and-production/main.js
node --test expert/08-kubernetes-and-production/exercises.test.js
```

## Mini project — Production Deployment

Deploy a Node.js service to a local Kubernetes cluster with manifests, probes, autoscaling, graceful shutdown, dashboards, and SLO-based alerts. Run a rollout under load without dropping requests.

**Deliverables:**

- [ ] Separate liveness and readiness correctly.
- [ ] Drain in-flight requests on SIGTERM.
- [ ] Add HPA and PDB with rationale.
- [ ] Write an SLO document and one runbook.

**Definition of done:**

- [ ] Runs from a clean checkout.
- [ ] Formatted with Prettier (or consistent style); lint passes.
- [ ] Tests cover the core behavior and at least two edge cases.
- [ ] README explains how to run it and one design decision.
- [ ] You can explain every line without notes.

## Self-assessment

1. Why should liveness not check dependencies?
2. What happens to in-flight requests during a rolling update?
3. When is CPU-based autoscaling the wrong choice?
4. What is an error budget?

Score yourself honestly. If you miss more than one question, review the module before moving on.

## References

- [ ] [Kubernetes documentation](https://kubernetes.io/docs/home/)
- [ ] [Kubernetes: pod lifecycle](https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/)
- [ ] [Google SRE workbook: SLOs](https://sre.google/workbook/implementing-slos/)
- [ ] [OpenTelemetry JavaScript](https://opentelemetry.io/docs/languages/js/)
