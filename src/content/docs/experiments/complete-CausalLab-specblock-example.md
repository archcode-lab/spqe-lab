---
title: Complete CausalLab SpecBlock Example
description: Complete SpecBlock example for the CausalLab CLI prototype.
sidebar:
  label: Complete CausalLab SpecBlock Example
  order: 99
---



```json
{
  "title": "CausalLab CLI",
  "summary": "18/06/2026 - Prototype CLI local permettant d'explorer simplement des relations entre variables dans un petit jeu de données tabulaire, sans apprentissage automatique lourd. Le prototype charge un fichier CSV, décrit les variables, calcule des associations déterministes, explique les relations principales en langage lisible, simule une variation simple d'une variable numérique et produit un rapport stable.",
  "comment_human": "Prototype volontairement hors famille S-091. L'objectif est de fournir un terrain naturel pour UM_HARNESS : fichiers locaux, fixtures CSV, workflow multi-commandes, sorties texte et JSON, redaction absente, déterminisme, cohérence entre commandes et usage du sandbox HARNESS comme espace de travail isolé.",
  "input_sources": [
    "fichier CSV local contenant une ligne d'en-tête et des colonnes numériques ou catégorielles simples",
    "arguments CLI décrivant la cible, la variable à simuler, le format de sortie et le chemin de rapport"
  ],
  "output_targets": [
    "stdout texte pour les commandes de découverte, corrélation, explication et simulation",
    "stdout JSON lorsque le format JSON est demandé",
    "fichier de rapport JSON déterministe écrit dans un chemin fourni par l'utilisateur"
  ],
  "functional_objectives": [
    "Fournir une commande de schéma ou de contrat public décrivant les colonnes attendues pour les fixtures d'exemple et les formats de sortie.",
    "Charger ou lire un fichier CSV local sans réseau ni service persistant.",
    "Lister les variables détectées avec leur type inféré, le nombre de valeurs et les valeurs manquantes.",
    "Calculer des associations simples entre une variable cible numérique et les autres variables numériques du fichier.",
    "Expliquer en texte lisible les relations principales, par exemple association positive, association négative ou absence d'association nette.",
    "Simuler une variation simple d'une variable numérique et produire une estimation déterministe de l'effet attendu sur la cible à partir des associations calculées.",
    "Produire un rapport JSON stable résumant le dataset, les variables, les associations, l'explication et la simulation demandée.",
    "Garantir que le même workflow exécuté deux fois sur le même CSV produit les mêmes sorties observables."
  ],
  "non_functional_constraints": [
    "Exécution locale uniquement.",
    "Aucun accès réseau.",
    "Aucune dépendance à une base de données ou à un serveur.",
    "Comportement déterministe pour un même fichier et les mêmes options.",
    "Modules import-safe sans effet de bord au moment de l'import.",
    "Compatibilité Linux et Windows.",
    "Messages d'erreur courts et exploitables sur stderr pour les fichiers manquants, CSV invalides, colonnes absentes ou options incohérentes.",
    "Ne pas prétendre démontrer une causalité scientifique forte ; présenter les résultats comme des associations exploratoires simples."
  ],
  "architectural_objectives": [
    "Séparer strictement parsing CLI, lecture CSV, inférence de schéma, calcul statistique simple, simulation, rendu texte, rendu JSON et écriture de rapport.",
    "Prévoir une architecture suffisamment modulaire pour que UM_HARNESS puisse tester un workflow utilisateur complet sans dépendre des détails internes.",
    "Exposer un contrat runtime machine-readable afin que UM_HARNESS puisse construire des fixtures conformes plutôt que deviner les champs depuis les exemples narratifs."
  ],
  "behavior_contract": {
    "default_behavior": {
      "when_no_args": "afficher l'aide de premier niveau et retourner 0",
      "stdout_notes": "les sorties texte doivent être stables, lisibles et ne pas contenir de traceback Python"
    },
    "runtime_contract": {
      "schema_command": "schema --format json",
      "schema_expectation": "retourner un objet JSON stable décrivant les commandes documentées, les formats acceptés, les champs minimaux du CSV d'exemple et les clés de rapport JSON"
    },
    "workflow": {
      "steps": [
        "schema --format json",
        "variables fixtures/study.csv --format json",
        "correlate fixtures/study.csv --target stress_score --format json",
        "explain fixtures/study.csv --target stress_score",
        "simulate fixtures/study.csv --target stress_score --var sleep_hours --delta 1 --format json",
        "report fixtures/study.csv --target stress_score --var sleep_hours --delta 1 --output outputs/report.json"
      ],
      "expected_properties": [
        "la commande variables détecte sleep_hours, stress_score et coffee_cups",
        "la commande correlate produit des associations déterministes triées de manière stable",
        "la commande explain reste cohérente avec le signe des associations calculées",
        "la commande simulate retourne une estimation déterministe et mentionne la cible et la variable modifiée",
        "la commande report écrit un fichier JSON relisible contenant dataset, variables, associations, explanation et simulation"
      ]
    }
  },
  "help_contract": {
    "rc_semantics": {
      "help": 0,
      "no_args": 0,
      "bad_args": 2
    },
    "no_args_behavior": "afficher l'aide de premier niveau",
    "stable_fragments_all": [
      "usage:",
      "schema",
      "variables",
      "correlate",
      "explain",
      "simulate",
      "report"
    ],
    "stable_fragments_any": [
      "CausalLab",
      "causal",
      "association",
      "CSV"
    ],
    "subcommand_fragments": {
      "schema": [
        "--format"
      ],
      "variables": [
        "input",
        "--format"
      ],
      "correlate": [
        "input",
        "--target",
        "--format"
      ],
      "explain": [
        "input",
        "--target"
      ],
      "simulate": [
        "input",
        "--target",
        "--var",
        "--delta",
        "--format"
      ],
      "report": [
        "input",
        "--target",
        "--var",
        "--delta",
        "--output"
      ]
    },
    "notes": "Le contrat d'aide ne doit pas remplacer le test fonctionnel UM_HARNESS. S-050 couvre l'aide ; UM_HARNESS doit jouer le workflow documenté avec fichiers réels dans le sandbox."
  }
}

````

