# Specification-to-Prototype Qualification Engine Lab

**SpQE Lab** is an applied research showcase on controlled AI software generation.

SpQE stands for **Specification-to-Prototype Qualification Engine**.

Public showcase:

https://archcode-lab.github.io/spqe-lab/

## What SpQE Lab does

SpQE Lab explores how a structured prototype request can be transformed into a generated, tested, repaired, documented, and inspectable software prototype.

The project does not simply ask an LLM to “write code”.

It studies a controlled generation loop where a structured specification is used to generate a prototype, execute it, observe its behavior, detect failures, repair targeted files, validate again, and produce reviewable artifacts.

## Why this repository exists

This repository hosts the public showcase for SpQE Lab.

The showcase documents:

- prototype experiments;
- generated artifacts;
- SpecBlock examples;
- validation outputs;
- repair loops;
- user manuals;
- qualification notes;
- request forms for external prototype use cases.

The live website is the recommended entry point:

https://archcode-lab.github.io/spqe-lab/

## Looking for real prototype use cases

SpQE Lab is looking for small, concrete, real-world prototype requests.

Good test cases include:

- command-line tools;
- CSV or JSON processors;
- validation utilities;
- extraction tools;
- report generators;
- local workflow tools;
- scientific or technical calculators;
- deterministic data-processing prototypes.

A good request should describe:

1. what the prototype should do;
2. what input it should accept;
3. what output it should produce;
4. one normal example;
5. one error case or edge case;
6. any constraints that should remain stable.

To prepare a prototype request, please use the [SpQE Lab Request Kit](https://archcode-lab.github.io/spqe-lab/request-kit/).

## Current status

SpQE Lab is an early applied research project.

The goal is not to claim that AI software generation is solved.

The goal is to make prototype generation more observable, testable, repairable, documented, and economically realistic.

## Start here

Visit the public showcase:

https://archcode-lab.github.io/spqe-lab/

Then see:

- the experiments section;
- the methods section;
- the request kit;
- the discussion area for feedback and prototype test cases.
