---
title: "Complete NoiseDoseLab SpecBlock Example"
description: "A complete applied scientific SpecBlock example for a deterministic occupational-noise CLI."
---

# Complete NoiseDoseLab SpecBlock Example

This page provides a complete applied scientific SpecBlock example.

It shows how a richer prototype can remain explicit, testable, and deterministic while still avoiding private implementation instructions.

The example covers:

- CSV validation;
- scientific calculation rules;
- text and JSON output contracts;
- error behavior;
- help behavior;
- semantic closure across segments, workers, scenarios, summaries, and renderers.

```json
{
"title": "NoiseDoseLab Level 1 CLI",
"summary": "Scientific CLI prototype for deterministic screening of daily occupational noise exposure from a local CSV file. It computes energy-based normalized 8-hour sound exposure per worker, compares worker results to a user-supplied reference level, and produces a deterministic text or JSON report.",

"comment_human": "21/06/2026 - Out-of-family prototype designed to test UM_HARNESS on an applied scientific domain without a canonical S0-91 lifecycle. The prototype must remain deterministic and medium difficulty: local CSV validation, logarithmic sound-energy calculations, worker aggregation, optional scenario comparison, screening verdict, text and JSON outputs. The SpecBlock is binding on public invariants and semantic payload meaning, but must avoid brittle exact prose, private implementation details, unnecessary CLI flags, and over-fitted formatting expectations. The prototype must not depend on any external scientific library and must not claim to provide a complete regulatory noise assessment.",

"input_sources": [
"Local CSV file containing occupational noise exposure segments.",
"CLI arguments indicating the CSV path, the reference dB value, optional scenario CSV path, alert margin, and output format.",
"Optional CSV file containing explicit scenario adjustments."
],

"output_targets": [
"Deterministic text report on stdout.",
"Deterministic JSON report on stdout.",
"Short actionable error messages on stderr for invalid input.",
"Stable CLI return code according to the situation category."
],

"functional_objectives": [
"Provide an analyze CLI command to analyze a CSV file of occupational noise exposure segments.",
"Validate that the baseline CSV file exists, is readable, and contains the required columns.",
"Validate that the reference dB value provided by the user is numeric and strictly positive.",
"Read baseline rows containing a worker, a task, an equivalent continuous sound level in dB, a duration in hours, and a hearing protection attenuation value in dB.",
"Ignore invalid baseline rows while counting them in invalid_rows.",
"Compute each valid segment using energy-based decibel mathematics, not arithmetic averaging of dB values.",
"Compute for each valid segment the effective dB level, sound-energy contribution, normalized 8-hour energy, optional segment LEX,8h value, energy ratio to reference, and deterministic status.",
"Aggregate valid segments by worker.",
"Compute for each worker the number of valid segments, task names, total duration, total sound energy, normalized 8-hour energy, LEX,8h value, energy ratio to reference, and deterministic status.",
"Compute a global summary including maximum worker LEX,8h, maximum worker energy ratio, workers above reference, and segments above reference.",
"Support an optional scenario CSV that applies explicit dB and duration adjustments to the valid baseline segments.",
"Compute for each scenario a deterministic summary comparable to baseline.",
"Produce a global quality verdict among pass, warn, or fail.",
"Produce explicit deterministic reason codes justifying the quality verdict.",
"Support a stable text output intended for human users.",
"Support a stable JSON output intended for automated tests."
],

"non_functional_constraints": [
"No network access.",
"No mandatory external dependency outside the Python standard library.",
"Import-safe modules: importing the package must not read files, run the CLI, write to stdout, or write to stderr.",
"Windows and POSIX compatibility.",
"All generated application modules must live under the app/ package; the generated repository must not create a top-level core/ package.",
"Deterministic numeric results with public rounding to six decimals.",
"Public JSON numeric values must remain JSON numbers, never strings.",
"Any rounded value equal to 0.0 must be rendered as 0.0 and never as -0.0.",
"Deterministic public content: no timestamps, random identifiers, raw OS exception strings, or absolute paths in user-facing messages.",
"User errors must return rc 2.",
"The --help command must return rc 0.",
"No-argument mode must return rc 0 and print short help.",
"Calculations must remain robust if the CSV contains only one valid segment.",
"The prototype must remain medium difficulty: no NumPy, SciPy, pandas, dose-response model, Monte Carlo model, or advanced statistical fitting.",
"The report must not present the result as a definitive regulatory decision."
],

"architectural_objectives": [
"Separate the CLI layer, CSV reading, row validation, noise exposure calculations, scenario comparison, verdict logic, and output rendering.",
"Preserve pure functions for noise calculations so UM_HARNESS can isolate behavioral divergences.",
"Avoid a monolithic architecture so post-HARNESS regenerations can target a precise responsibility.",
"Centralize user-error semantics to stabilize return codes and stderr.",
"Keep rendering as pure formatting: report renderers must render the explicit payload they receive and must not replace it with a stale internal contract.",
"Prefer top-level private helpers over nested helper functions when a checker may need to inspect symbols.",
"Keep the internal structure readable enough to distinguish parsing errors, calculation errors, scenario errors, verdict errors, and JSON rendering errors."
],

"behavior_contract": {
"entrypoint_contract": {
"module": "python -m app.cli",
"primary_command": "analyze",
"canonical_invocation": "python -m app.cli analyze --csv fixtures/noise.csv --reference-db 85 --format json"
},

"default_behavior": {
  "when_no_args": "print short help on stdout with rc 0",
  "stdout_notes": "No-argument output exposes the analyze command and the core options needed to run a baseline analysis."
},

"commands": {
  "analyze": {
    "required_args": [
      "--csv",
      "--reference-db"
    ],
    "optional_args": [
      "--scenario-csv",
      "--format",
      "--alert-margin-db"
    ],
    "default_format": "text",
    "format_values": [
      "text",
      "json"
    ],
    "default_alert_margin_db": 3.0,
    "success_rc": 0,
    "bad_input_rc": 2
  }
},

"csv_contract": {
  "required_default_columns": [
    "worker",
    "task",
    "leq_db",
    "duration_h",
    "protection_db"
  ],
  "worker_semantics": "The worker is the main aggregation unit of the report. It must be non-empty in valid rows.",
  "task_semantics": "The task represents a noise exposure segment. It must be non-empty in valid rows.",
  "leq_semantics": "leq_db is the equivalent continuous sound level for the segment, expressed in decibels. It must be numeric and greater than or equal to 0.0.",
  "duration_semantics": "duration_h is expressed in hours. It must be numeric and between 0.0 and 24.0 inclusive.",
  "protection_semantics": "protection_db is a simplified hearing protection attenuation value in decibels. It must be numeric and greater than or equal to 0.0.",
  "invalid_row_semantics": "A row is invalid if worker or task is empty, if leq_db, duration_h, or protection_db is empty or non-numeric, if leq_db is negative, if duration_h is outside 0.0 to 24.0, or if protection_db is negative.",
  "total_rows_semantics": "total_rows counts CSV data rows, excluding the header row.",
  "valid_rows_semantics": "valid_rows counts rows used for calculations after validation.",
  "invalid_rows_semantics": "invalid_rows counts rows ignored because of an empty business field or invalid numeric value."
},

"scenario_contract": {
  "scenario_csv_optional": true,
  "required_columns_when_present": [
    "scenario",
    "leq_delta_db",
    "duration_factor",
    "protection_delta_db"
  ],
  "scenario_semantics": "The scenario name must be non-empty and unique in the scenario CSV file.",
  "factor_semantics": "duration_factor is a non-negative numeric multiplier applied to baseline duration_h. leq_delta_db and protection_delta_db are numeric decibel adjustments applied to baseline leq_db and protection_db.",
  "invalid_scenario_semantics": "A missing, unreadable, malformed, duplicate-name, missing-column, or numerically invalid scenario CSV must return rc 2 with a short stderr diagnostic.",
  "application_rule": "For each valid baseline segment, a scenario computes scenario_leq_db = leq_db + leq_delta_db, scenario_duration_h = duration_h * duration_factor, and scenario_protection_db = protection_db + protection_delta_db.",
  "empty_scenario_behavior": "If --scenario-csv is not provided, the JSON scenarios list is empty and counts.scenarios is 0."
},

"calculation_rules": {
  "effective_db": "leq_db - protection_db",
  "sound_energy": "duration_h * (10.0 ** (effective_db / 10.0))",
  "normalized_8h_energy": "sound_energy / 8.0",
  "segment_lex_8h": "10.0 * log10(normalized_8h_energy) when normalized_8h_energy is strictly positive; otherwise null.",
  "reference_energy": "10.0 ** (reference_db / 10.0)",
  "segment_energy_ratio": "normalized_8h_energy / reference_energy",
  "worker_total_duration_h": "Sum of duration_h values for valid segments of the worker.",
  "worker_total_sound_energy": "Sum of sound_energy values for valid segments of the worker.",
  "worker_normalized_8h_energy": "worker_total_sound_energy / 8.0",
  "worker_lex_8h": "10.0 * log10(worker_normalized_8h_energy) when worker_normalized_8h_energy is strictly positive; otherwise null.",
  "worker_energy_ratio": "worker_normalized_8h_energy / reference_energy",
  "status_below_alert": "Status applied if the relevant LEX,8h value is null or strictly lower than reference_db minus alert_margin_db.",
  "status_alert": "Status applied if the relevant LEX,8h value is greater than or equal to reference_db minus alert_margin_db and less than or equal to reference_db.",
  "status_above_reference": "Status applied if the relevant LEX,8h value is strictly greater than reference_db.",
  "scenario_sound_energy": "scenario_duration_h * (10.0 ** ((scenario_leq_db - scenario_protection_db) / 10.0))",
  "scenario_worker_lex_8h": "10.0 * log10(sum(scenario_sound_energy) / 8.0) when the worker scenario normalized energy is strictly positive; otherwise null.",
  "scenario_reduction_db_vs_baseline_max": "If both baseline max_worker_lex_8h and scenario max_worker_lex_8h are not null, calculate baseline max_worker_lex_8h minus scenario max_worker_lex_8h. Otherwise return null."
},

"semantic_closure_contract": {
  "single_source_of_truth": [
    "The JSON renderer must render the explicit report payload produced by the analysis workflow and must not replace it with a stale internal schema copy.",
    "Text and JSON outputs must describe the same baseline computation, worker identifiers, scenario names, verdict, and reason codes."
  ],
  "canonical_records": {
    "segment_record": {
      "required_identifiers": [
        "row_index",
        "worker",
        "task"
      ],
      "required_metrics": [
        "leq_db",
        "duration_h",
        "protection_db",
        "effective_db",
        "sound_energy",
        "normalized_8h_energy",
        "segment_lex_8h",
        "energy_ratio",
        "status"
      ],
      "consumer_rule": "Every module that aggregates, renders, summarizes, or compares segment records must preserve row_index, worker, and task."
    },
    "worker_record": {
      "required_identifiers": [
        "worker"
      ],
      "required_metrics": [
        "segments",
        "tasks",
        "total_duration_h",
        "total_sound_energy",
        "normalized_8h_energy",
        "lex_8h",
        "energy_ratio",
        "status"
      ],
      "consumer_rule": "Every report or scenario comparison that refers to a worker must preserve the non-empty worker identifier."
    },
    "scenario_record": {
      "required_identifiers": [
        "scenario"
      ],
      "required_metrics": [
        "max_worker_lex_8h",
        "max_worker_energy_ratio",
        "workers_above_reference",
        "segments_above_reference",
        "reduction_db_vs_baseline_max"
      ],
      "consumer_rule": "Scenario summaries must preserve the non-empty scenario name from the scenario CSV."
    }
  },
  "non_empty_domain_identifiers": [
    "Structured product records must not contain empty strings, null values, generic placeholders, or implementation defaults as worker, task, or scenario identifiers.",
    "Reports and scenario outputs must preserve the identifiers of the entities they describe."
  ],
  "cross_section_coherence": [
    "Worker names appearing in workers must come from valid baseline segment records.",
    "Scenario names appearing in scenarios must come from valid scenario CSV records.",
    "Summary counts must be internally consistent with the segments, workers, and scenarios sections."
  ]
},

"noise_output_policy": {
  "include_segments": "Include in the output all valid segments.",
  "segment_order": "Segments should be rendered in a deterministic order by worker, task, and row_index.",
  "row_index_semantics": "row_index is the 1-based index of the data row in the CSV, excluding the header row.",
  "worker_order": "Workers should be rendered in deterministic alphabetical order.",
  "task_order": "Tasks listed inside each worker should be rendered in deterministic alphabetical order.",
  "scenario_order": "Scenarios should be rendered in deterministic alphabetical order by scenario name.",
  "aggregation_scope": "Baseline and scenario aggregations use only valid segments."
},

"quality_rules": {
  "fail_rule": "The global verdict is fail if the file contains no valid rows, if at least one worker has total duration strictly greater than 24.0 hours, or if at least one worker has worker_lex_8h strictly greater than reference_db.",
  "warn_rule": "The global verdict is warn if the verdict is not fail and if at least one invalid row was ignored, or if at least one worker has worker_lex_8h greater than or equal to reference_db minus alert_margin_db.",
  "pass_rule": "The global verdict is pass if at least one valid row exists, no invalid row was ignored, no worker exceeds 24.0 hours total duration, and all worker_lex_8h values are strictly lower than reference_db minus alert_margin_db.",
  "reason_order": [
    "no_valid_rows",
    "worker_duration_over_24h",
    "noise_above_reference",
    "invalid_rows_ignored",
    "noise_at_or_above_alert",
    "all_screening_checks_passed"
  ]
},

"numeric_public_policy": {
  "json_numbers": "Public JSON numeric values remain numbers, not strings.",
  "rounding": "Round public floats to six decimals with round(value, 6).",
  "negative_zero": "Any rounded value equal to 0.0 must be rendered as 0.0, never -0.0.",
  "null_semantics": "Non-computable logarithmic values are rendered as null in JSON.",
  "text_format": "Text output may display numbers with at most six decimals in a stable way."
},

"json_serialization_policy": {
  "top_level_order_is_binding": false,
  "top_level_sections": [
    "schema_version",
    "status",
    "input",
    "counts",
    "segments",
    "workers",
    "summary",
    "scenarios",
    "verdict",
    "reasons"
  ],
  "ordering_rule": "The public section names and record meanings are binding, but automated checks should parse JSON and validate semantic content rather than rely on exact serialized key order."
},

"json_output_contract": {
  "schema_version": "noisedoselab_level1_report.v1",
  "status_success_value": "ok",
  "rounding": "All public floats are rounded to six decimals.",
  "null_semantics": "Non-computable logarithmic values, notably segment_lex_8h, worker_lex_8h, scenario max values, or scenario_reduction_db_vs_baseline_max when energy is zero, are rendered as null in JSON.",
  "section_presence": "The JSON report contains the public sections schema_version, status, input, counts, segments, workers, summary, scenarios, verdict, and reasons.",
  "record_order": "Lists are rendered in deterministic order, but tests should prefer parsed semantic checks over full-text comparisons."
},

"json_shape_contract": {
  "root": {
    "type": "object",
    "required_keys": [
      "schema_version",
      "status",
      "input",
      "counts",
      "segments",
      "workers",
      "summary",
      "scenarios",
      "verdict",
      "reasons"
    ]
  },
  "input": {
    "type": "object",
    "required_keys": [
      "csv",
      "reference_db",
      "scenario_csv",
      "alert_margin_db"
    ],
    "csv_semantics": "CSV path exactly as provided by the user, with no mandatory absolute normalization.",
    "scenario_csv_semantics": "Scenario CSV path exactly as provided by the user, or null when no scenario CSV is provided."
  },
  "counts": {
    "type": "object",
    "required_keys": [
      "total_rows",
      "valid_rows",
      "invalid_rows",
      "workers",
      "tasks",
      "scenarios"
    ],
    "workers_semantics": "Number of distinct workers having at least one valid segment.",
    "tasks_semantics": "Number of distinct tasks having at least one valid segment.",
    "scenarios_semantics": "Number of valid scenarios loaded from --scenario-csv, or 0 if no scenario CSV is provided."
  },
  "segments": {
    "type": "list",
    "item_required_keys": [
      "row_index",
      "worker",
      "task",
      "leq_db",
      "duration_h",
      "protection_db",
      "effective_db",
      "sound_energy",
      "normalized_8h_energy",
      "segment_lex_8h",
      "energy_ratio",
      "status"
    ],
    "status_allowed_values": [
      "below_alert",
      "alert",
      "above_reference"
    ]
  },
  "workers": {
    "type": "list",
    "item_required_keys": [
      "worker",
      "segments",
      "tasks",
      "total_duration_h",
      "total_sound_energy",
      "normalized_8h_energy",
      "lex_8h",
      "energy_ratio",
      "status"
    ],
    "status_allowed_values": [
      "below_alert",
      "alert",
      "above_reference"
    ]
  },
  "summary": {
    "type": "object",
    "required_keys": [
      "reference_db",
      "max_worker_lex_8h",
      "max_worker_energy_ratio",
      "workers_above_reference",
      "segments_above_reference"
    ]
  },
  "scenarios": {
    "type": "list",
    "item_required_keys": [
      "scenario",
      "max_worker_lex_8h",
      "max_worker_energy_ratio",
      "workers_above_reference",
      "segments_above_reference",
      "reduction_db_vs_baseline_max"
    ]
  },
  "verdict": {
    "type": "string",
    "allowed_values": [
      "pass",
      "warn",
      "fail"
    ]
  },
  "reasons": {
    "type": "list[str]",
    "allowed_values": [
      "no_valid_rows",
      "worker_duration_over_24h",
      "noise_above_reference",
      "invalid_rows_ignored",
      "noise_at_or_above_alert",
      "all_screening_checks_passed"
    ],
    "order": "same order as behavior_contract.quality_rules.reason_order"
  }
},

"text_output_contract": {
  "required_fragments_on_success": [
    "NoiseDoseLab",
    "valid_rows:",
    "workers:",
    "reference_db:",
    "verdict:"
  ],
  "semantic_fragments": [
    "The text report must expose worker-level results, the global summary, and the verdict without requiring exact heading wording."
  ]
},

"error_contract": {
  "missing_csv": {
    "rc": 2,
    "stderr_fragment": "--csv"
  },
  "missing_reference_db": {
    "rc": 2,
    "stderr_fragment": "--reference-db"
  },
  "bad_reference_db": {
    "rc": 2,
    "stderr_fragment": "reference-db"
  },
  "missing_file": {
    "rc": 2,
    "stderr_fragment": "csv"
  },
  "missing_column": {
    "rc": 2,
    "stderr_fragment": "missing required column"
  },
  "bad_format": {
    "rc": 2,
    "stderr_fragment": "invalid choice"
  },
  "bad_alert_margin_db": {
    "rc": 2,
    "stderr_fragment": "alert-margin-db"
  },
  "invalid_scenario_csv": {
    "rc": 2,
    "stderr_fragment": "scenario"
  }
}


},

"help_contract": {
"rc_semantics": {
"help": 0,
"no_args": 0,
"bad_args": 2,
"unknown_subcommand": 2
},
"no_args_behavior": "print_help_and_exit_0",
"stable_fragments_all": [
"usage:",
"--help",
"analyze",
"--csv"
],
"stable_fragments_any": [
"NoiseDoseLab",
"noise",
"8h",
"options:",
"optional arguments:",
"positional arguments:"
],
"subcommand_fragments": {
"analyze": [
"--csv",
"--reference-db",
"--format"
]
},
}
}
```
