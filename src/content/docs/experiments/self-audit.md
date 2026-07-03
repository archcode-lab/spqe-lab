---
title: Self-audit doctrinal
description: ARCHCode generates tools to audit its own multi-agent prompt doctrine.
sidebar:
  label: Self-audit doctrinal
  order: 1
  badge: "Signature"
---

# Self-audit doctrinal

## Status

Validated prototype.

## Research question

Can ARCHCode generate tools to inspect the prompt doctrine that drives ARCHCode itself?

## Generated system

ARCHCode generated two specialized tools:

- a Doctrine Extractor
- a Mismatch Reviewer

## Validation

The extractor produced structured doctrine slices from multi-agent prompts.

The reviewer compared critical doctrinal zones and reported the compatible topics after correction.

## Findings

The audit revealed a real PASS2 tension around the CLI/orchestrator boundary.

After correction, the reviewer confirmed that no typed mismatch was reportable on the two tested critical nodes.

## Metrics

- Doctrine slices: 439
- Mismatches: 0
- Compatible topics: 2
