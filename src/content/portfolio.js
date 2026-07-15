export const PORTFOLIO_CATEGORIES = [
  {
    id: 'research',
    label: { en: 'Research systems', fr: 'Systèmes de recherche' },
  },
  {
    id: 'product',
    label: { en: 'Product engineering', fr: 'Ingénierie produit' },
  },
  {
    id: 'platform',
    label: { en: 'Platform foundations', fr: 'Fondations de plateforme' },
  },
];

export const PORTFOLIO_ITEMS = [
  {
    slug: 'folder-archaeology',
    category: 'research',
    title: 'Folder Archaeology',
    year: '2024',
    role: {
      en: 'Research tooling and information architecture',
      fr: 'Outillage de recherche et architecture de l’information',
    },
    summary: {
      en: 'A careful workspace investigation method that turns inherited folders, fragmented notes, and ambiguous filenames into a navigable evidence map.',
      fr: 'Une méthode d’enquête d’espace de travail qui transforme des dossiers hérités, des notes fragmentées et des noms de fichiers ambigus en carte de preuves navigable.',
    },
    detail: {
      en: 'Folder Archaeology combines inventory, provenance notes, confidence markers, and plain-language naming guidance. It helps teams distinguish active material from historical residue before they reorganize a shared archive. The approach is intentionally lightweight: people can review evidence, retain context, and make small reversible improvements without adopting a heavy knowledge-management system.',
      fr: 'Folder Archaeology associe inventaire, notes de provenance, indicateurs de confiance et règles de nommage en langage clair. La méthode aide les équipes à distinguer les documents actifs des traces historiques avant de réorganiser une archive partagée. Elle reste volontairement légère : chacun peut examiner les preuves, préserver le contexte et apporter de petites améliorations réversibles sans adopter un système de gestion des connaissances lourd.',
    },
    outcomes: {
      en: [
        'A shared map of folders, owners, and evidence confidence',
        'A reviewable naming and retention vocabulary',
        'A migration sequence that preserves useful historical context',
      ],
      fr: [
        'Une carte partagée des dossiers, responsables et niveaux de confiance',
        'Un vocabulaire de nommage et de conservation révisable',
        'Une séquence de migration qui préserve le contexte historique utile',
      ],
    },
    technologies: ['Information architecture', 'Content design', 'Research synthesis'],
    image: {
      alt: {
        en: 'Calm blue workspace map with folders connected by evidence lines',
        fr: 'Carte d’espace de travail bleue et apaisée avec dossiers reliés par des lignes de preuve',
      },
      tone: 'navy',
    },
    urls: {
      caseStudy: null,
      live: null,
    },
  },
  {
    slug: 'noise-dose-lab',
    category: 'research',
    title: 'NoiseDoseLab',
    year: '2024',
    role: {
      en: 'Data product strategy and interaction design',
      fr: 'Stratégie produit data et conception d’interaction',
    },
    summary: {
      en: 'A bilingual exploratory tool for making environmental noise exposure legible without reducing uncertainty to a single alarming number.',
      fr: 'Un outil exploratoire bilingue qui rend l’exposition au bruit environnemental compréhensible sans réduire l’incertitude à un seul chiffre alarmant.',
    },
    detail: {
      en: 'NoiseDoseLab frames measurements as a conversation between place, duration, and confidence. Its interfaces compare everyday exposure patterns, explain assumptions in plain language, and reserve visual emphasis for decisions that deserve attention. The concept supports public-interest teams that need a credible bridge between technical measurements and practical community questions.',
      fr: 'NoiseDoseLab présente les mesures comme une conversation entre lieu, durée et confiance. Ses interfaces comparent les habitudes d’exposition quotidiennes, expliquent les hypothèses en langage clair et réservent l’accent visuel aux décisions qui méritent de l’attention. Le concept aide les équipes d’intérêt public qui ont besoin d’un lien crédible entre mesures techniques et questions concrètes des communautés.',
    },
    outcomes: {
      en: [
        'Readable comparisons of time, location, and exposure context',
        'Bilingual explanation patterns for uncertainty and assumptions',
        'A calm visual language for sensitive public-health information',
      ],
      fr: [
        'Des comparaisons lisibles entre temps, lieu et contexte d’exposition',
        'Des modèles d’explication bilingues pour l’incertitude et les hypothèses',
        'Un langage visuel calme pour des informations sensibles de santé publique',
      ],
    },
    technologies: ['Data storytelling', 'Accessibility', 'Bilingual UX'],
    image: {
      alt: {
        en: 'Layered blue sound-level chart with quiet explanatory annotations',
        fr: 'Graphique bleu de niveaux sonores avec annotations explicatives discrètes',
      },
      tone: 'blue',
    },
    urls: {
      caseStudy: null,
      live: null,
    },
  },
  {
    slug: 'evidence-timeline',
    category: 'product',
    title: 'Evidence Timeline',
    year: '2023',
    role: {
      en: 'Product design, content modelling, and frontend direction',
      fr: 'Conception produit, modélisation de contenu et direction frontend',
    },
    summary: {
      en: 'A timeline pattern for tracing decisions back to source material while keeping dates, changes, and unresolved questions visible.',
      fr: 'Un modèle de chronologie qui relie les décisions à leurs sources tout en gardant visibles les dates, les changements et les questions non résolues.',
    },
    detail: {
      en: 'Evidence Timeline was shaped for projects where confidence matters as much as chronology. Rather than presenting a polished final narrative alone, it gives readers a path through source excerpts, decision moments, and later revisions. The model supports careful editorial review and helps project teams communicate what is known, what changed, and what still needs verification.',
      fr: 'Evidence Timeline a été conçu pour des projets où la confiance compte autant que la chronologie. Au lieu de présenter uniquement un récit finalisé, il offre un parcours entre extraits de sources, moments de décision et révisions ultérieures. Le modèle soutient une relecture éditoriale attentive et aide les équipes à communiquer ce qui est établi, ce qui a changé et ce qui doit encore être vérifié.',
    },
    outcomes: {
      en: [
        'Traceable links between claims, decisions, and source excerpts',
        'Clear treatment of revisions and unresolved questions',
        'A reusable content model for editorial and research teams',
      ],
      fr: [
        'Des liens traçables entre affirmations, décisions et extraits de sources',
        'Un traitement clair des révisions et des questions non résolues',
        'Un modèle de contenu réutilisable pour les équipes éditoriales et de recherche',
      ],
    },
    technologies: ['Content modelling', 'Editorial systems', 'Frontend architecture'],
    image: {
      alt: {
        en: 'Horizontal evidence timeline with source cards and milestone markers',
        fr: 'Chronologie horizontale de preuves avec cartes sources et repères',
      },
      tone: 'slate',
    },
    urls: {
      caseStudy: null,
      live: null,
    },
  },
  {
    slug: 'platebridge',
    category: 'platform',
    title: 'PlateBridge',
    year: '2023',
    role: {
      en: 'Platform design and developer experience',
      fr: 'Conception de plateforme et expérience développeur',
    },
    summary: {
      en: 'A bridge between laboratory plate workflows and dependable digital handoffs for teams that need less transcription and more traceability.',
      fr: 'Un pont entre les flux de travail sur plaques de laboratoire et des transmissions numériques fiables pour les équipes qui veulent moins de transcription et plus de traçabilité.',
    },
    detail: {
      en: 'PlateBridge explores how operational software can respect the pace of laboratory work. It brings sample context, plate positions, handoff status, and validation cues into one restrained interface. The product direction favors explicit states and recoverable review points, so staff can identify a mismatch before it becomes a downstream data problem.',
      fr: 'PlateBridge explore la manière dont un logiciel opérationnel peut respecter le rythme du laboratoire. Il réunit contexte des échantillons, positions sur plaques, état des transmissions et indices de validation dans une interface sobre. La direction produit privilégie des états explicites et des points de revue récupérables afin que le personnel puisse repérer une incohérence avant qu’elle ne devienne un problème de données en aval.',
    },
    outcomes: {
      en: [
        'A shared view of plate context and handoff readiness',
        'Explicit validation cues for operational review',
        'A product vocabulary that connects laboratory and software teams',
      ],
      fr: [
        'Une vue partagée du contexte des plaques et de la préparation des transmissions',
        'Des indices de validation explicites pour la revue opérationnelle',
        'Un vocabulaire produit reliant équipes de laboratoire et équipes logicielles',
      ],
    },
    technologies: ['Workflow design', 'Developer experience', 'Operational UX'],
    image: {
      alt: {
        en: 'Abstract laboratory plate grid connected to a structured delivery path',
        fr: 'Grille abstraite de plaque de laboratoire reliée à un parcours de livraison structuré',
      },
      tone: 'indigo',
    },
    urls: {
      caseStudy: null,
      live: null,
    },
  },
];

export function getPortfolioItemBySlug(slug) {
  return PORTFOLIO_ITEMS.find((item) => item.slug === slug) || null;
}
