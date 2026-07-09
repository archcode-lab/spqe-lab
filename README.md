# Specification-to-Prototype Qualification Engine Lab

**SpQE Lab** is an applied research project on controlled AI software generation.

SpQE stands for **Specification-to-Prototype Qualification Engine**.

The project explores how structured software requirements can be transformed into generated, tested, repaired, documented, and inspectable software prototypes.

## Public showcase

The live showcase is the recommended entry point:

https://archcode-lab.github.io/spqe-lab/

## What SpQE Lab does

SpQE Lab studies a controlled software-generation process.

The system does not simply ask an LLM to “write code”.

It starts from a structured specification, called a **SpecBlock**, and runs a complete generation and qualification loop around it:

```text
specification
→ generation
→ execution
→ validation
→ targeted repair
→ revalidation
→ documentation
→ qualified prototype
````

The objective is not only to generate source code.

The objective is to produce a runnable and inspectable prototype together with evidence about its behavior, validation results, repair history, documentation, and current limitations.

## Why this repository exists

This repository hosts the source content of the public SpQE Lab showcase.

The showcase documents:

* concrete prototype experiments;
* generated software artifacts;
* SpecBlock examples;
* execution and validation outputs;
* detected failures;
* targeted repair loops;
* user manuals;
* qualification evidence;
* methods for controlled prototype generation;
* resources for submitting external prototype use cases.

The live website provides the clearest overview of the project:

[https://archcode-lab.github.io/spqe-lab/](https://archcode-lab.github.io/spqe-lab/)

## Looking for external prototype use cases

SpQE has already been developed and tested across several concrete prototype cases.

The current objective is to evaluate the system on small external use cases: prototype needs that originate outside the project and were not designed in advance around SpQE.

These external cases can help reveal new requirements, assumptions, constraints, failure modes, and software patterns.

Suitable examples include:

* command-line tools;
* CSV or JSON processors;
* validation utilities;
* extraction tools;
* report generators;
* local workflow tools;
* automation utilities;
* scientific or technical calculators;
* deterministic data-processing prototypes;
* other bounded, concrete, and testable software needs.

A useful request should describe:

1. what the prototype should do;
2. what input it should accept;
3. what output it should produce;
4. one normal usage example;
5. one error case or edge case;
6. any constraints that should remain stable.

To prepare an external prototype request, please use the:

[SpQE Lab Request Kit](https://archcode-lab.github.io/spqe-lab/request-kit/)

## Current status

SpQE Lab is an active applied research project.

The project does not claim that AI software generation is solved.

It studies the conditions that may make AI-generated software more:

* structured;
* observable;
* testable;
* repairable;
* reproducible;
* documented;
* inspectable;
* economically accessible.

The current research phase focuses on external prototype use cases and independent technical feedback.

## Start here

Visit the public showcase:

[https://archcode-lab.github.io/spqe-lab/](https://archcode-lab.github.io/spqe-lab/)

Then explore:

* the documented prototype experiments;
* the generation and qualification methods;
* the SpecBlock examples;
* the Request Kit;
* GitHub Discussions for questions and technical feedback;
* GitHub Issues for concrete external prototype cases.

