---
title: "Complete Prototype SpecBlock Example"
description: "A minimal complete SpecBlock example using only canonical mandatory fields."
---

# Complete Prototype SpecBlock Example

This page provides a minimal complete SpecBlock example.

It intentionally uses only mandatory canonical fields.



```json
{
  "title": "Greeter CLI",
  "summary": "A small command-line prototype that prints a greeting message.",

  "comment_human": "A deliberately simple documentary example of a CLI SpecBlock.",

  "input_sources": [
    "command-line argument"
  ],

  "output_targets": [
    "standard output"
  ],

  "functional_objectives": [
    "Provide a greeting command.",
    "Accept an optional user name.",
    "Print a deterministic greeting message."
  ],

  "non_functional_constraints": [
    "Behavior must be simple and deterministic.",
    "The prototype must not require network access.",
    "Modules must be import-safe.",
    "User-facing output must not include timestamps, random values, raw tracebacks, or platform-specific exception strings."
  ],

  "architectural_objectives": [
    "Generate a small, readable CLI prototype under the app package.",
    "Do not create a top-level core package."
  ],

  "behavior_contract": {
    "default_behavior": {
      "when_no_args": "print_default_greeting_and_exit_0",
      "stdout_notes": "Standard output contains only the expected greeting message."
    },
    "named_greeting_behavior": {
      "when_name_is_provided": "print_greeting_for_name_and_exit_0",
      "stdout_notes": "The provided name is preserved in the greeting."
    },
    "error_behavior": {
      "bad_args": "return_2_and_write_short_corrective_message_to_stderr"
    }
  },

  "help_contract": {
    "rc_semantics": {
      "help": 0,
      "no_args": 0,
      "bad_args": 2
    },
    "no_args_behavior": "print_default_greeting_and_exit_0",
    "stable_fragments_all": [
      "usage:",
      "--help"
    ],
    "stable_fragments_any": [
      "options:",
      "optional arguments:",
      "positional arguments:"
    ],
    "subcommand_fragments": {},
    "notes": "Help fragments are minimal, robust, and case-insensitive. The no-args path is a product behavior, not a help path. Bad arguments return rc=2 and write a short corrective message to stderr."
  }
}
```

## Why this example is useful

This example shows a complete SpecBlock without relying on metadata, legacy structure, or private implementation planning.

The contract stays focused on observable behavior:

* what the prototype accepts;
* what it produces;
* how it behaves with and without arguments;
* how help and bad arguments are separated;
* which deterministic constraints must remain true;
* where architecture is constrained only when it matters.

## Important distinction

This Greeter CLI intentionally uses no-args as a product behavior:

```text
no args → print default greeting → rc 0
```

That is different from many utility CLIs, where the safer default is:

```text
no args → print help → rc 0
```

Both patterns are acceptable, but the SpecBlock must choose one explicitly and avoid contradiction between `behavior_contract` and `help_contract`.
