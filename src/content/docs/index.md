---
title: Specification-to-Prototype Qualification Engine Lab
description: SpQE Lab turns structured prototype requests into generated, tested, repaired, documented, and inspectable software prototypes.
---

**SpQE Lab**

*This public showcase was launched in July 2026.*

SpQE Lab turns a structured prototype request into a generated, tested, repaired, documented, and inspectable software prototype.

SpQE Lab explores a simple but difficult question:

Can AI systems generate useful software prototypes in a controlled, testable, auditable and economically realistic way?

The project behind this showcase is **SpQE**, pronounced **Speky**.

SpQE stands for **Specification-to-Prototype Qualification Engine**.

Its purpose is to turn a structured prototype request into a working software prototype, then surround that generated prototype with evidence: generated source files, execution traces, validation outputs, repair notes, packaging checks, user-facing documentation, and qualification artifacts.

## What SpQE does

SpQE is an automatic prototype-generation and qualification system.

It does not simply ask an LLM to “write code”.

It starts from a structured request, called a **SpecBlock**, then runs a controlled generation pipeline around the model. The system decomposes the request into software responsibilities, generates a multi-file prototype, checks whether the result behaves as expected, repairs defects when evidence points to a failure, and validates the final prototype through observable behavior.

The goal is not to produce a persuasive screenshot.

The goal is to produce something concrete:

* a runnable prototype;
* source files that can be inspected;
* inputs and outputs that can be tested;
* command-line behavior that can be executed;
* error behavior that can be observed;
* documentation that can be read;
* artifacts that can be archived and reviewed.

## A contract-first approach

SpQE begins with a SpecBlock.

A SpecBlock is not a vague prompt.

It is a compact machine-readable contract describing what the prototype should do, what it should accept as input, what it should produce as output, how it should behave in normal and error cases, and which constraints must remain stable.

This matters because the main challenge in AI software generation is not producing code once.

The challenge is producing code that remains coherent when it is split into files, executed, repaired, packaged, documented, and tested.

## Evidence-guided experimental software generation

SpQE Lab treats prototype generation as an experimental engineering process.

Each run produces evidence.

The generated prototype is not accepted merely because the source code looks plausible. It is executed, checked, observed, and compared against the public contract.

When something fails, the system does not blindly restart from zero. It collects evidence, identifies the likely repair target, patches the relevant part of the codebase, and validates again.

This creates a cybernetic loop:

```text
specification
→ generation
→ execution
→ evidence
→ repair
→ revalidation
→ qualified prototype
```

The prototype is improved through feedback.

The important question is not whether the first generated version is perfect. It is whether defects can be detected, localized, repaired, and revalidated.

## A complete agentic pipeline

SpQE is built around a complete agentic software-generation pipeline.

Depending on the experiment, the pipeline may include:

* SpecBlock normalization;
* architecture planning;
* multi-file source generation;
* static checks;
* runtime validation;
* black-box probes;
* user-manual generation;
* user-manual conformance checks;
* packaging checks;
* targeted repair;
* final qualification notes.

This makes SpQE closer to a small experimental software forge than to a single prompt.

The system is designed to produce not only code, but also the surrounding proof that the code was generated, tested, corrected, and documented.

## Dumped artifacts and inspectable runs

A key principle of SpQE Lab is artifact visibility.

A generated prototype should leave traces that can be inspected after the run.

Typical artifacts may include:

* the original SpecBlock;
* generated source files;
* architecture notes;
* validation reports;
* harness outputs;
* packaging outputs;
* user manual files;
* repair traces;
* final qualification notes.

This makes the process reviewable.

A prototype run is not just a result. It is an experiment with a trace.

## Prototype cost and economic relevance

SpQE is designed for low-cost prototype generation.

In many experiments, the LLM cost of generating and qualifying a prototype is expected to remain in the low-dollar range, often around a few dollars for a controlled run depending on the size, model choices, number of repair loops, and validation depth.

This should be compared with the real cost of human software work.

A developer team, an external contractor, or a freelance developer does not cost a few dollars to explore, implement, test, correct, document, and package even a modest prototype. Human development remains essential for production systems, product strategy, security review, maintenance, and domain responsibility. But for early prototype exploration, SpQE aims to make the first executable version dramatically cheaper, faster, and more observable.

The ambition is not to replace developers.

The ambition is to give developers, researchers, founders, technical teams, and domain experts a faster way to move from structured intent to a working prototype that can be discussed, tested, rejected, improved, or used as the basis for deeper engineering.

## What kind of prototypes?

SpQE is especially suited to technical and scientific prototypes where observable correctness matters more than visual polish.

Examples include:

* command-line tools;
* CSV or JSON processors;
* validation utilities;
* extraction tools;
* report generators;
* local workflow tools;
* scientific calculators;
* domain screening tools;
* documentation capsule extractors;
* testable data-processing prototypes.

A typical prototype may read a local file, validate records, compute metrics, generate text or JSON output, handle invalid input cleanly, and produce deterministic results.

These are not toys.

They are small software artifacts with public behavior, error semantics, input/output contracts, and validation evidence.

## Research direction

SpQE Lab is applied research on controlled AI software generation.

The project does not claim that AI software generation is solved.

It studies, experiment after experiment, the conditions that make AI-generated software more reliable, more observable, and more governable.

The central hypothesis is that automated software generation becomes more useful when it is surrounded by:

* structured specifications;
* explicit behavioral contracts;
* runtime validation;
* evidence capture;
* targeted repair;
* user-facing documentation;
* reproducible artifacts;
* final qualification.

This is the purpose of SpQE:

to transform prototype generation from a one-shot prompt into an evidence-guided engineering loop.

## In one sentence

SpQE turns a structured prototype request into a tested, documented, inspectable software prototype, using an agentic generation-and-validation pipeline designed to make AI software generation more concrete, more controlled, and more economically accessible.
