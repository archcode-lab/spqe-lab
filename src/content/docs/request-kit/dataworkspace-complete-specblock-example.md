---
title: Complete DataWorkspace SpecBlock Example
description: Complete SpecBlock example for the family-driven Data Workspace CLI prototype.
sidebar:
  label: Complete DataWorkspace SpecBlock Example
  order: 99
---



This page contains the complete SpecBlock example used to frame the family-driven Data Workspace CLI prototype.

The goal is to make the prototype request inspectable: inputs, outputs, behavioral expectations, CLI surface, persistence assumptions, and family-driven lifecycle constraints can be reviewed before looking at the generated implementation.

```json
{
  "title": "Data Workspace CLI (CLI) - natural spec v5",
  "summary": "Deterministic, import-safe, stdlib-only multi-command CLI that manages local data workspaces, sources, transformations, runs, reports, and configuration through a coherent local state model, with stable help semantics, strict stdout/stderr discipline, deterministic JSON/text rendering, explicit read-versus-write behavior, declared write-target handling, and prototype-scale command coverage sufficient to exercise realistic multi-module orchestration over local file-backed data.",
  "comment_human": "Keep the contract focused on the external CLI boundary only: help behavior, stdout/stderr rules, exit-code mapping, deterministic outputs, and declared write-target behavior. Require app/cli.py as the CLI entrypoint and app/orchestrator.py as the execution coordinator, but do not constrain or name the other internal modules here. The prototype is intentionally local-only and file-based, but it should still behave like a credible operational CLI rather than a toy example. A workspace is a named directory tree under the managed root. Sources are named records attached to exactly one workspace and point to local JSON/CSV files only. Transform validate and preview are read-only. Transform apply is mutating. Run start is mutating because it records local tracked execution state; run status and run history are read-only. Report summary is read-only; report export is mutating only for its declared output target. Config show/get are read-only; config set/reset are mutating. Read paths must not create directories or files. Write-owning operations may create missing parent directories automatically, but only for declared write targets. Deterministic machine-readable JSON means one canonical serialization policy across the prototype; deterministic list outputs mean stable ordering for the same inputs and filesystem state. The CLI should expose enough semantic consistency that an automated reviewer can infer one coherent external contract from help text, deterministic outputs, and persisted local state. Treat --workspace-root as an authoritative behavioral input, not as a cosmetic CLI option. Every workspace-scoped read and write must resolve against the same effective workspace root explicitly provided by the caller for that command, and must never silently fall back to the current working directory or to an unrelated default location once a root has been supplied. For the same workspace_root and workspace-scoped identifiers, later read commands must observe the effects of earlier successful mutating commands; for a different workspace_root, they must not observe that state. Successful destructive actions must make the deleted entity absent from subsequent reads under that same workspace_root.",
  "input_sources": [
    "command-line parameters",
    "local JSON/CSV input files",
    "local workspace metadata files",
    "local configuration file"
  ],
  "output_targets": [
    "standard output (terminal)",
    "standard error (terminal)",
    "workspace metadata files",
    "run history files",
    "optional exported JSON/TXT report files"
  ],
  "behavior_contract": {
    "default_behavior": {
      "when_no_args": "print_help_and_exit_0",
      "stdout_notes": "When no args are provided, the CLI prints top-level help to stdout and exits with code 0. On successful read commands, stdout prints only the requested deterministic report text or deterministic JSON payload followed by exactly one trailing newline. On successful mutating commands, stdout prints only one deterministic action report followed by exactly one trailing newline. Expected failures print exactly one deterministic error line to stderr and no stack trace. No success path may emit banners, debug lines, progress text, logging noise, advisory prose, or duplicate payloads. For read commands, the success payload is the requested record, list, preview, status, history, summary, or config value only. For report export, stdout reports the completed export action only and does not also print the exported report body. For dry-run on mutating commands, stdout must remain deterministic and must describe the simulated action only; dry-run must not perform writes. Machine-readable success output must remain structurally canonical for the same logical result, regardless of incidental filesystem ordering or intermediate implementation choices. For any workspace-scoped entity lifecycle, successful mutating commands must be reflected by later deterministic read commands executed with the same explicit --workspace-root; commands executed with a different workspace root must not resolve that state."
    }
  },
  "help_contract": {
    "no_args_behavior": "print_help_and_exit_0",
    "rc_semantics": {
      "help": 0,
      "no_args": 0,
      "bad_args": 2,
      "unknown_subcommand": 2
    },
    "stable_fragments_all": [
      "usage:",
      "--help",
      "workspace",
      "source",
      "transform",
      "run",
      "report",
      "config"
    ],
    "subcommand_fragments": {
      "workspace": [
        "init",
        "show",
        "list",
        "delete"
      ],
      "source": [
        "add",
        "list",
        "show",
        "remove"
      ],
      "transform": [
        "validate",
        "preview",
        "apply"
      ],
      "run": [
        "start",
        "status",
        "history"
      ],
      "report": [
        "summary",
        "export"
      ],
      "config": [
        "show",
        "get",
        "set",
        "reset"
      ]
    }
  },

  "functional_objectives": [
    "Provide app/cli.py as the CLI entrypoint for a subcommand-based CLI that is testable via --help.",
    "app/cli.py must parse top-level arguments and subcommands, expose deterministic help, dispatch normalized requests to app/orchestrator.py, own final stdout/stderr emission, and own final exit-code mapping.",
    "Provide app/orchestrator.py as the execution coordinator.",
    "app/orchestrator.py must own normalized internal action dispatch, dry-run gating, cross-module coordination, read-only versus write-owning routing, and resolved success-payload assembly for consumption by app/cli.py.",
    "Provide the command groups: workspace, source, transform, run, report, and config.",
    "Support the top-level argument --workspace-root <str> with default value \".dws\".",
    "Support the top-level argument --format <str> with allowed values exactly: text, json, and default value \"text\".",
    "Support the top-level argument --profile <str> with default value \"default\".",
    "Support workspace init/show/list/delete for local named workspaces.",
    "Support source add/list/show/remove for sources attached to a workspace.",
    "Support transform validate/preview/apply for deterministic transformation workflows.",
    "Support run start/status/history for local tracked executions.",
    "Support report summary/export for deterministic human-readable and JSON reports.",
    "Support config show/get/set/reset for persistent local configuration and profiles.",
    "Validate command inputs before any mutating operation is applied.",
    "Create missing parent directories automatically for every declared CLI write target before writing.",
    "Preserve deterministic output ordering and deterministic JSON serialization for machine-readable outputs.",
    "Print only the requested success payload to stdout on success.",
    "On expected failures, print one deterministic error line to stderr and return the mapped exit code.",
    "Treat a workspace as a named local state container rooted under --workspace-root.",
    "Treat --workspace-root as the authoritative root for every workspace-scoped command and every later readback of state created by those commands.",
    "Ensure every successful workspace-scoped mutating command is later observable through the corresponding read commands when those reads use the same explicit --workspace-root.",
    "Ensure different --workspace-root values isolate state from one another so that reads under one root do not discover entities created under another root.",
    "Ensure no workspace-scoped command silently falls back to the current working directory or to an implicit alternate root once --workspace-root has been provided.",
    "Treat a source as a named local JSON/CSV record attached to exactly one workspace.",
    "Treat transform validate and transform preview as read-only operations and transform apply as the only mutating transform operation.",
    "Treat run start as a mutating action that records local tracked execution state; treat run status and run history as read-only lookups.",
    "Treat report summary as read-only and report export as a declared write action to one explicit output target.",
    "Treat config show/get as read-only and config set/reset as mutating configuration actions.",
    "Ensure list operations return a stable deterministic ordering for the same inputs and state.",
    "Ensure show/get/status-style operations return exactly one resolved logical record or one expected failure.",
    "Ensure destructive actions such as delete/remove/reset honor explicit confirm semantics where declared by the CLI contract.",
    "Ensure successful destructive actions make the deleted entity absent from subsequent list/show/get/status-style reads under the same explicit --workspace-root.",
    "Ensure the same logical entity is mutated and later read back through one coherent persisted state path for the same command context, rather than through disconnected write and read targets.",
    "Ensure read commands against a missing or empty workspace root fail or return empty deterministic results as appropriate, without creating any state.",
    "Ensure dry-run is supported only on mutating commands that declare it and never performs filesystem writes.",
    "Ensure the CLI can traverse a realistic local lifecycle in which workspaces are created, populated with named sources, transformed, recorded as runs, summarized, exported, and re-opened through deterministic read commands.",
    "Ensure every command group exposes behavior that is specific enough to generate non-trivial local state changes or queries, rather than being reduced to placeholder acknowledgements.",
    "Ensure report and status-style commands resolve their output from persisted local state rather than fabricating success text disconnected from the underlying files.",
    "Ensure command success payloads are semantically aligned with the requested operation so that text mode and json mode represent the same logical result.",
    "Ensure mutating operations fail deterministically when required local prerequisites are missing or invalid, rather than silently creating unrelated state.",
    "Ensure workspace-scoped actions reject cross-workspace ambiguity and always resolve against one explicit workspace context.",
    "Ensure source, transform, run, and report actions operate on named local entities that can later be listed, shown, or traced through deterministic read commands."
  ],
  "non_functional_constraints": [
    "Stdlib-only (Python 3.11+).",
    "No network access and no subprocess usage.",
    "Import-safe modules: no execution at import time.",
    "Deterministic behavior for the same inputs and args.",
    "No stack trace printed for expected failures.",
    "On success (excluding --help / CLI usage errors): stdout must contain only the requested success report or JSON payload, with exactly one trailing newline allowed and no other text.",
    "Expected failures must be rendered by the CLI as one deterministic stderr line with a stable mapped exit code.",
    "Local filesystem only; no external services are required for normal operation.",
    "Read commands must be side-effect free.",
    "Mutating commands must support dry-run semantics where declared.",
    "Machine-readable JSON must use one canonical serialization policy across the prototype for the same logical payload.",
    "Deterministic JSON serialization means stable key ordering and stable formatting choices for the same logical payload.",
    "List-like success payloads must use stable ordering for the same logical state; do not rely on incidental filesystem enumeration order.",
    "Read-only commands must not create directories or files as a side effect.",
    "Write-owning commands may create missing parent directories automatically, but only for their declared write targets.",
    "An explicit --workspace-root must remain behaviorally authoritative end to end and must not be ignored, shadowed, or replaced by incidental process working-directory state.",
    "Workspace-scoped state must be observationally coherent: if a successful command mutates an entity under one workspace root, subsequent reads of that entity under the same workspace root must resolve that updated state.",
    "Distinct workspace roots must remain observationally isolated for the same entity names and commands.",
    "Destructive success semantics must be observable through later reads: after a successful delete/remove/reset under a given workspace root, later reads under that same root must no longer resolve the deleted entity unless it has been recreated.",
    "Read/write coherence is required for each logical entity lifecycle: the location or state surface written by a successful mutating command must be the same one later consulted by the corresponding read commands for that entity context.",
    "No success path may emit debug prints, progress lines, banner text, trace text, or duplicated payloads.",
    "No module may require network-derived timestamps, remote metadata, or non-local services to complete normal operation.",
    "The same normalized internal action and the same persisted local state must produce the same success payload and exit code.",
    "app/cli.py must remain thin and must not absorb persistence, report-building, transformation, run-tracking, or configuration-storage responsibilities.",
    "app/orchestrator.py must remain CLI-agnostic and must not print directly to stdout or stderr.",
    "Prototype realism must come from coherent local state transitions and deterministic behavior, not from hidden mocks, fabricated remote abstractions, or non-local dependencies.",
    "The prototype must remain understandable to automated checkers: external behavior should be explicit, stable, and inferable from CLI help, filesystem state, and normalized action results.",
    "The same command in text mode and json mode must differ only in rendering form, not in logical content or success semantics.",
    "Error handling for expected failures must remain concise and deterministic even when multiple validation problems are possible; the CLI must choose one stable rendered failure outcome."
  ],
  "architectural_objectives": [
    "Preserve a clean separation between app/cli.py, app/orchestrator.py, and any additional internal modules inferred by PASS1.",
    "Favor import-safe, testable units with deterministic interfaces and minimal side effects.",
    "Keep the CLI entrypoint thin: argument parsing, command dispatch, stdout/stderr handling, help behavior, and exit-code mapping only.",
    "Keep expected-failure normalization at the CLI boundary; internal modules may raise simple built-in exceptions or lightweight application exceptions where useful.",
    "Avoid forcing a cross-cutting shared exception contract across the whole prototype.",
    "Keep command-group concerns, validation, persistence, transformation, run tracking, report building, output formatting, and configuration responsibilities outside app/cli.py and inferred only as needed.",
    "Treat app/orchestrator.py as the sole owner of normalized internal action dispatch, dry-run gating, cross-module coordination, and resolved payload assembly.",
    "Keep read-only versus write-owning responsibilities explicit and non-overlapping across the inferred internal architecture.",
    "Keep canonical JSON rendering decisions centralized rather than re-implemented inconsistently.",
    "Keep workspace, source, run, report, and config persistence semantics domain-local rather than leaking them into CLI handling.",
    "Keep directory creation responsibilities limited to write-owning paths after orchestration gating and never on read-only paths.",
    "Keep internal normalized action names stable across app/cli.py, app/orchestrator.py, and the inferred internal architecture so ASC can reason on one consistent action lexicon.",
    "Encourage PASS1 to infer a genuinely modular architecture capable of separating validation, persistence, rendering, and domain coordination without bloating app/orchestrator.py into a monolith.",
    "Encourage domain-local modules to own their own deterministic state semantics so that workspace, source, transform, run, report, and config behaviors remain composable and checkable.",
    "Encourage an architecture where read paths can be reasoned about independently from write paths, making dry-run, help, ASC analysis, and checker passes easier to keep stable.",
    "Encourage internal APIs that return resolved logical results rather than presentation text, so app/cli.py remains the single renderer of stdout/stderr outcomes.",
    "Encourage inferred modules to preserve one shared vocabulary for entities, actions, and persisted state, reducing contract drift across the prototype."
  ]
}
```

