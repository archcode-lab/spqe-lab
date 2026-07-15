export const REQUIRED_CONTENT_PATHS = [
  '/', '/about', '/founder', '/services', '/applications', '/portfolio',
  '/manifesto', '/contact', '/privacy', '/legal', '/accessibility'
];

const deployment = {
  baseUrl: '[Confirm public base URL before release]',
  contactEmail: '[Confirm contact email before release]',
  legalEntity: '[Confirm legal entity before release]',
  founderPortrait: '[Confirm portrait asset before release]',
  liveLinks: null
};

const enApplications = [
  {
    slug: 'folder-archaeology',
    title: 'Folder Archaeology',
    summary: 'A practical workspace for finding structure, decisions, and useful evidence in inherited project material.',
    detail: {
      problem: 'Teams inherit folders, notes, and documents whose purpose and decision history are difficult to reconstruct.',
      intendedUsers: 'Operational teams, product leads, and new collaborators taking responsibility for existing work.',
      solution: 'A guided evidence map that groups source material, records assumptions, and identifies the next useful questions.',
      evidence: 'Designed around document review, working-session observations, and traceable links back to source material.',
      limits: 'It supports human review and does not determine the meaning, accuracy, or legal status of source documents.',
      status: 'Concept and prototype exploration.',
      visual: { alt: 'Abstract folder map with connected evidence cards', caption: 'A structured view of inherited project material.' },
      availability: null
    }
  },
  {
    slug: 'noise-dose-lab',
    title: 'NoiseDoseLab',
    summary: 'A clear tool concept for making occupational noise exposure discussions easier to understand and review.',
    detail: {
      problem: 'Exposure information can be technical, fragmented, and hard to discuss across professional roles.',
      intendedUsers: 'Occupational-health practitioners, safety teams, and organisations reviewing workplace conditions.',
      solution: 'An understandable workspace for recording context, comparing exposure information, and preparing a human review.',
      evidence: 'Informed by field-practice experience and the need to make assumptions and uncertainty visible.',
      limits: 'It is not a diagnostic tool, regulatory determination, or substitute for qualified occupational-health judgement.',
      status: 'Research and product-framing concept.',
      visual: { alt: 'Abstract sound-wave chart beside exposure review notes', caption: 'A concept for clearer exposure conversations.' },
      availability: null
    }
  },
  {
    slug: 'evidence-timeline',
    title: 'Evidence Timeline',
    summary: 'A timeline concept that helps teams connect events, evidence, decisions, and unresolved questions.',
    detail: {
      problem: 'Important evidence and decisions are often separated across dates, systems, and individual memory.',
      intendedUsers: 'Teams coordinating complex cases, services, investigations, or product decisions.',
      solution: 'A chronological view that links events to source evidence, decision notes, and explicit open questions.',
      evidence: 'Built to support review conversations where sequence, provenance, and uncertainty matter.',
      limits: 'It does not verify evidence or replace responsible professional interpretation.',
      status: 'Concept and interaction-design exploration.',
      visual: { alt: 'Abstract horizontal timeline with evidence markers', caption: 'A chronological view of evidence and decisions.' },
      availability: null
    }
  },
  {
    slug: 'plate-bridge',
    title: 'PlateBridge',
    summary: 'A collaboration concept for translating specialist observations into a shared, understandable working picture.',
    detail: {
      problem: 'Specialist teams need to coordinate without losing the context, limits, and judgement behind their observations.',
      intendedUsers: 'Expert teams working across operational, technical, design, and leadership boundaries.',
      solution: 'A shared review surface for observations, annotated visual material, responsibilities, and next actions.',
      evidence: 'Shaped around collaborative workshops and service-design methods that make different perspectives visible.',
      limits: 'It supports coordination and does not automate accountability or expert decisions.',
      status: 'Service-design and prototype concept.',
      visual: { alt: 'Abstract annotated plate connected to team notes', caption: 'A shared surface for specialist collaboration.' },
      availability: null
    }
  }
];

const frApplications = [
  {
    slug: 'folder-archaeology',
    title: 'Folder Archaeology',
    summary: 'Un espace de travail pour retrouver la structure, les décisions et les éléments utiles dans des archives de projet.',
    detail: {
      problem: 'Les équipes héritent de dossiers, de notes et de documents dont l’objectif et l’historique des décisions sont difficiles à reconstituer.',
      intendedUsers: 'Les équipes opérationnelles, responsables produit et nouveaux collaborateurs qui reprennent un travail existant.',
      solution: 'Une carte guidée des éléments qui regroupe les sources, consigne les hypothèses et met en évidence les prochaines questions utiles.',
      evidence: 'Conçu à partir de la revue de documents, d’observations en atelier et de liens traçables vers les sources.',
      limits: 'Il soutient une revue humaine et ne détermine ni le sens, ni l’exactitude, ni le statut juridique des documents.',
      status: 'Exploration de concept et de prototype.',
      visual: { alt: 'Carte abstraite de dossiers et de cartes d’éléments reliées', caption: 'Une vue structurée de documents de projet hérités.' },
      availability: null
    }
  },
  {
    slug: 'noise-dose-lab',
    title: 'NoiseDoseLab',
    summary: 'Un concept d’outil clair pour faciliter les échanges sur l’exposition professionnelle au bruit.',
    detail: {
      problem: 'Les informations sur l’exposition peuvent être techniques, dispersées et difficiles à discuter entre plusieurs métiers.',
      intendedUsers: 'Les professionnels de santé au travail, équipes de prévention et organisations qui examinent les conditions de travail.',
      solution: 'Un espace compréhensible pour consigner le contexte, comparer les informations d’exposition et préparer une revue humaine.',
      evidence: 'Nourri par une pratique de terrain et par la nécessité de rendre visibles les hypothèses et les incertitudes.',
      limits: 'Ce n’est ni un outil de diagnostic, ni une décision réglementaire, ni un substitut au jugement qualifié en santé au travail.',
      status: 'Concept de recherche et de cadrage produit.',
      visual: { alt: 'Graphique abstrait d’ondes sonores avec notes de revue', caption: 'Un concept pour des échanges plus clairs sur l’exposition.' },
      availability: null
    }
  },
  {
    slug: 'evidence-timeline',
    title: 'Evidence Timeline',
    summary: 'Un concept de chronologie qui relie événements, éléments, décisions et questions non résolues.',
    detail: {
      problem: 'Les éléments importants et les décisions sont souvent séparés entre dates, systèmes et mémoires individuelles.',
      intendedUsers: 'Les équipes qui coordonnent des situations, services, enquêtes ou décisions produit complexes.',
      solution: 'Une vue chronologique reliant les événements aux sources, notes de décision et questions explicitement ouvertes.',
      evidence: 'Pensé pour des revues où la séquence, la provenance et l’incertitude sont importantes.',
      limits: 'Il ne vérifie pas les éléments et ne remplace pas une interprétation professionnelle responsable.',
      status: 'Exploration de concept et de conception d’interaction.',
      visual: { alt: 'Chronologie horizontale abstraite avec repères d’éléments', caption: 'Une vue chronologique des éléments et des décisions.' },
      availability: null
    }
  },
  {
    slug: 'plate-bridge',
    title: 'PlateBridge',
    summary: 'Un concept de collaboration pour traduire des observations spécialisées en une représentation de travail partagée.',
    detail: {
      problem: 'Les équipes expertes doivent se coordonner sans perdre le contexte, les limites et le jugement qui accompagnent leurs observations.',
      intendedUsers: 'Les équipes expertes travaillant entre les fonctions opérationnelles, techniques, de conception et de direction.',
      solution: 'Une surface de revue partagée pour les observations, les supports visuels annotés, les responsabilités et les prochaines actions.',
      evidence: 'Façonné par des ateliers collaboratifs et des méthodes de conception de services qui rendent les perspectives visibles.',
      limits: 'Il soutient la coordination et n’automatise ni la responsabilité ni les décisions expertes.',
      status: 'Concept de conception de service et de prototype.',
      visual: { alt: 'Planche abstraite annotée reliée à des notes d’équipe', caption: 'Une surface partagée pour la collaboration spécialisée.' },
      availability: null
    }
  }
];

export const SITE_CONTENT = {
  deployment,
  en: {
    locale: 'en',
    localeLabel: 'English',
    metadata: {
      siteName: 'SPQE Lab',
      title: 'SPQE Lab | Founder-led software studio',
      description: 'SPQE Lab is a founder-led software studio for useful, durable digital products.'
    },
    navigation: {
      primary: [
        { label: 'Home', path: '/en' },
        { label: 'About', path: '/en/about', children: [
          { label: 'Meet the founder', path: '/en/about/founder' },
          { label: 'Manifesto', path: '/en/about/manifesto' }
        ] },
        { label: 'Services', path: '/en/services' },
        { label: 'Applications', path: '/en/applications' },
        { label: 'Contact', path: '/en/contact' }
      ],
      utility: [
        { label: 'Privacy', path: '/en/privacy' },
        { label: 'Legal Notice', path: '/en/legal' },
        { label: 'Accessibility', path: '/en/accessibility' }
      ]
    },
    routeLabels: {
      home: 'Home', about: 'About', founder: 'Founder', services: 'Services',
      applications: 'Applications', portfolio: 'Portfolio', manifesto: 'Manifesto',
      contact: 'Contact', privacy: 'Privacy', legal: 'Legal Notice', accessibility: 'Accessibility'
    },
    home: {
      eyebrow: 'SPQE Lab',
      title: 'Software with human judgement at its centre.',
      lead: 'SPQE Lab is a founder-led software studio that helps organisations turn difficult work into clear, reliable digital products.',
      lede: 'SPQE Lab is a founder-led software studio that helps organisations turn difficult work into clear, reliable digital products.',
      differentiator: 'You do not have to become an AI website builder. Tell us what you need. We will understand it, build it and guide you through it.',
      introduction: 'We combine product strategy, design, and engineering in small accountable teams. The goal is useful tools that fit the people, decisions, and conditions they support.',
      actions: [
        { label: 'Explore our work', path: '/en/applications', variant: 'primary' },
        { label: 'Start a conversation', path: '/en/contact', variant: 'secondary' }
      ],
      principles: [
        { title: 'Start with the real work', text: 'We study tasks, constraints, and decisions before deciding what to build.' },
        { title: 'Keep people in the loop', text: 'Automation can assist good work, but judgement, accountability, and human contact remain visible.' },
        { title: 'Make the useful thing', text: 'We prefer understandable, maintainable systems to unnecessary complexity.' }
      ],
      closing: { title: 'A good product makes room for better work.', text: 'We help teams choose what a digital product should do, for whom, and why.' }
    },
    about: {
      eyebrow: 'About SPQE Lab',
      title: 'A software studio for work worth making clearer.',
      lead: 'A founder-led studio for organisations with work worth making clearer.',
      intro: 'SPQE Lab brings product framing, interaction design, and technical delivery into one practical conversation.',
      principles: [
        { title: 'Plain language', text: 'We make important choices and product boundaries understandable.', description: 'We make important choices and product boundaries understandable.' },
        { title: 'Thoughtful boundaries', text: 'We design for real responsibilities, constraints, and consequences.', description: 'We design for real responsibilities, constraints, and consequences.' },
        { title: 'Durable systems', text: 'We favour work a team can understand and maintain after launch.', description: 'We favour work a team can understand and maintain after launch.' }
      ],
      working: { title: 'How we work', text: 'We begin with people using a service, people responsible for it, and people affected by its decisions. We then make small, testable moves that reduce uncertainty.' },
      founder: { title: 'Founder-led', text: 'SPQE Lab is led by Pierre Denis, combining field practice, product strategy, and software design.', label: 'Meet the founder', path: '/founder' },
      manifesto: { title: 'Our manifesto', text: 'Our approach keeps human judgement, clarity, accessibility, and durability central to software work.', label: 'Read the manifesto', path: '/manifesto' },
      sections: [
        { heading: 'Our role', title: 'Our role', text: 'We partner with mission-led organisations, expert teams, and independent founders who need software to support real work.', description: 'We partner with mission-led organisations, expert teams, and independent founders who need software to support real work.' },
        { heading: 'What we value', title: 'What we value', text: 'We value accessible interfaces, privacy-conscious choices, and systems with clear ownership.', description: 'We value accessible interfaces, privacy-conscious choices, and systems with clear ownership.' }
      ],
      founderLink: { label: 'Meet the founder', path: '/founder' },
      manifestoLink: { label: 'Read the manifesto', path: '/manifesto' }
    },
    founder: {
      eyebrow: 'Founder',
      title: 'Pierre Denis',
      role: 'Founder, SPQE Lab',
      lead: 'A physician, product strategist, and software-studio founder working where field practice, service design, and digital tools meet.',
      intro: 'Pierre Denis brings medical field practice and product thinking to the design of useful digital systems.',
      biography: [
        'Pierre Denis is a medical doctor with a background in occupational medicine, where the quality of a decision depends on careful attention to people, work, and context.',
        'He brings more than ten years of field practice to SPQE Lab. That experience has shaped a practical approach to software: listen closely, make the work visible, and avoid promising more than a tool can responsibly deliver.',
        'His earlier emergency-medicine experience also informs his work. In urgent settings, information must be clear, priorities must be explicit, and systems must support people under pressure rather than add avoidable friction.',
        'Through SPQE Lab, Pierre helps teams frame, design, and build software products that respect professional judgement and the realities of everyday use.'
      ],
      areas: ['Product strategy and discovery', 'Software product design', 'Service and workflow design', 'Human-centred automation', 'Accessible digital systems'],
      note: 'SPQE Lab does not provide emergency care, individual diagnosis, or treatment advice through this website.'
    },
    services: {
      eyebrow: 'Services',
      title: 'Focused support for useful digital products.',
      lead: 'Focused support for teams turning an important idea, service, or workflow into a useful digital product.',
      lede: 'Focused support for teams turning an important idea, service, or workflow into a useful digital product.',
      categories: [
        { title: 'Product framing', text: 'Clarify the problem, audience, boundaries, and outcomes before committing to a solution.', description: 'Clarify the problem, audience, boundaries, and outcomes before committing to a solution.' },
        { title: 'Software design', text: 'Shape understandable flows, interfaces, and content patterns that help people complete meaningful work.', description: 'Shape understandable flows, interfaces, and content patterns that help people complete meaningful work.' },
        { title: 'Prototype and delivery support', text: 'Turn decisions into testable product slices and support a durable path to working software.', description: 'Turn decisions into testable product slices and support a durable path to working software.' },
        { title: 'Team workshops', text: 'Create a shared language across operational, technical, design, and leadership perspectives.', description: 'Create a shared language across operational, technical, design, and leadership perspectives.' }
      ],
      items: [
        { title: 'Product framing', text: 'Clarify the problem, audience, boundaries, and outcomes before committing to a solution.', description: 'Clarify the problem, audience, boundaries, and outcomes before committing to a solution.' },
        { title: 'Software design', text: 'Shape understandable flows, interfaces, and content patterns that help people complete meaningful work.', description: 'Shape understandable flows, interfaces, and content patterns that help people complete meaningful work.' },
        { title: 'Prototype and delivery support', text: 'Turn decisions into testable product slices and support a durable path to working software.', description: 'Turn decisions into testable product slices and support a durable path to working software.' },
        { title: 'Team workshops', text: 'Create a shared language across operational, technical, design, and leadership perspectives.', description: 'Create a shared language across operational, technical, design, and leadership perspectives.' }
      ],
      method: { title: 'A practical method', steps: ['Listen to the people, work, constraints, and existing systems involved.', 'Define the decision, task, or outcome the product must support.', 'Make the current work and its uncertainties visible.', 'Develop clear concepts, prototypes, and implementation priorities.', 'Review the result for usefulness, accessibility, safety, and operational fit.'] },
      process: { title: 'A practical process', steps: ['Listen to the people, work, constraints, and existing systems involved.', 'Define the decision, task, or outcome the product must support.', 'Make the current work and its uncertainties visible.', 'Develop clear concepts, prototypes, and implementation priorities.', 'Review the result for usefulness, accessibility, safety, and operational fit.'] },
      engagementModes: [
        { title: 'Focused engagement', text: 'A bounded piece of framing, design, or workshop work for a specific decision.', description: 'A bounded piece of framing, design, or workshop work for a specific decision.' },
        { title: 'Embedded support', text: 'Ongoing product and delivery support alongside an internal team.', description: 'Ongoing product and delivery support alongside an internal team.' },
        { title: 'Discovery sprint', text: 'A short, structured investigation that turns uncertainty into practical next steps.', description: 'A short, structured investigation that turns uncertainty into practical next steps.' }
      ],
      closing: { title: 'Start with a clear conversation.', text: 'We can discuss the work, the people involved, and the next useful step.' }
    },
    applications: { eyebrow: 'Applications', title: 'Applications', lead: 'Selected ways the SPQE Lab approach can support meaningful digital work.', lede: 'Selected ways the SPQE Lab approach can support meaningful digital work.', items: enApplications },
    portfolio: {
      eyebrow: 'Portfolio',
      title: 'Portfolio',
      lead: 'Examples of questions and deliverables SPQE Lab can help a team address.',
      disclaimer: 'Project descriptions are intentionally concise and do not disclose confidential client information.',
      filters: [{ id: 'all', label: 'All work' }, { id: 'content', label: 'Product framing' }, { id: 'service', label: 'Service design' }, { id: 'product', label: 'Software product' }],
      projects: enApplications.map((item, index) => ({ id: item.slug, category: ['content', 'service', 'product', 'service'][index], title: item.title, summary: item.summary, detail: item.detail, outcomes: [item.detail.solution, item.detail.evidence, item.detail.status] }))
    },
    manifesto: {
      eyebrow: 'Manifesto', title: 'Software with people, not around them.', lead: 'A short statement of how we approach software, services, and the people who use them.',
      statements: [
        { title: 'Software should serve real work.', text: 'A product is useful when it helps someone understand, decide, coordinate, or act in real conditions.' },
        { title: 'People remain responsible.', text: 'Automation should not obscure judgement, accountability, or the route to a human decision.' },
        { title: 'Clarity is a design responsibility.', text: 'Plain language, honest labels, and visible boundaries help people understand a product.' },
        { title: 'Accessibility is part of quality.', text: 'A product is not complete if people cannot perceive, navigate, understand, or use it.' },
        { title: 'Durability matters.', text: 'We favour maintainable systems and decisions that remain understandable after launch.' }
      ],
      closing: 'We build software with people, not around them.'
    },
    contact: {
      eyebrow: 'Contact', title: 'Start with a human conversation.', lead: 'Tell us about the work, service, or product you are considering.',
      introduction: 'SPQE Lab begins every engagement with a human conversation. A person reads enquiries and responds where there is a relevant fit; this form is not an automated decision system.',
      humanIntake: 'Every enquiry is read by a human. We do not use automated intake decisions.',
      emailLabel: 'Email', email: 'Contact details are available through the published SPQE Lab channel.',
      form: { name: 'Name', organisation: 'Organisation', email: 'Email address', subject: 'What would you like to discuss?', message: 'Message', submit: 'Send enquiry', sending: 'Sending…', success: 'Thank you. Your enquiry has been received.', error: 'We could not send your enquiry. Please try again using the published contact channel.', required: 'Required field' },
      notice: 'Please do not include urgent medical concerns, personal health records, passwords, financial details, or other sensitive information in this form.'
    },
    privacy: { eyebrow: 'Privacy', title: 'Privacy', body: [{ title: 'Overview', body: 'This website provides information about SPQE Lab and uses only the services described in its published privacy information.' }, { title: 'Contact enquiries', body: 'Information provided in an enquiry is used to respond and manage a potential professional relationship. Do not send sensitive information through the website.' }, { title: 'Your choices', body: 'You may request access to, correction of, or deletion of personal information held in connection with an enquiry, subject to applicable legal obligations.' }, { title: 'Contact', body: 'For privacy questions, use the published SPQE Lab contact channel.' }], updated: 'Privacy information is reviewed when site services change.' },
    legal: { eyebrow: 'Legal Notice', title: 'Legal Notice', body: [{ title: 'Information only', body: 'Website content provides general information about SPQE Lab and does not constitute medical, legal, financial, or professional advice.' }, { title: 'No emergency use', body: 'Do not use this website or its contact form for emergencies. Contact local emergency services or an appropriate professional service for urgent help.' }, { title: 'Use of content', body: 'Unless otherwise stated, site content may not be reproduced or redistributed without permission.' }, { title: 'Changes', body: 'This legal notice may be updated when the website, legal entity, or applicable requirements change.' }], updated: 'Legal information is reviewed when the organisation or website changes.' },
    accessibility: { eyebrow: 'Accessibility', title: 'Accessibility', body: [{ title: 'Our approach', body: 'SPQE Lab aims to provide a website that is understandable, operable, and useful to as many people as possible.' }, { title: 'Design principles', body: 'We use semantic structure, readable language, keyboard access, visible focus, and sufficient contrast as part of normal product quality.' }, { title: 'Feedback', body: 'If you encounter an accessibility barrier, contact SPQE Lab through the published contact channel and describe the page or task involved.' }] },
    notFound: { eyebrow: 'Not found', title: 'Page not found', body: 'The page you requested is not available.', action: { label: 'Return home', path: '/en' } },
    ui: { skipToContent: 'Skip to content', openMenu: 'Open navigation', closeMenu: 'Close navigation', changeLanguage: 'Change language', languageSwitch: 'Français', backToTop: 'Back to top', readMore: 'Read more', viewProject: 'View project', close: 'Close', previous: 'Previous', next: 'Next', all: 'All', footer: 'Founder-led software studio for useful digital products.' }
  },
  fr: {
    locale: 'fr',
    localeLabel: 'Français',
    metadata: {
      siteName: 'SPQE Lab',
      title: 'SPQE Lab | Studio logiciel dirigé par son fondateur',
      description: 'SPQE Lab est un studio logiciel dirigé par son fondateur qui crée des produits numériques utiles et durables.'
    },
    navigation: {
      primary: [
        { label: 'Accueil', path: '/fr' },
        { label: 'À propos', path: '/fr/a-propos', children: [
          { label: 'Rencontrer le fondateur', path: '/fr/a-propos/fondateur' },
          { label: 'Manifeste', path: '/fr/a-propos/manifeste' }
        ] },
        { label: 'Services', path: '/fr/services' },
        { label: 'Applications', path: '/fr/applications' },
        { label: 'Contact', path: '/fr/contact' }
      ],
      utility: [
        { label: 'Confidentialité', path: '/fr/confidentialite' },
        { label: 'Mentions légales', path: '/fr/mentions-legales' },
        { label: 'Accessibilité', path: '/fr/accessibilite' }
      ]
    },
    routeLabels: { home: 'Accueil', about: 'À propos', founder: 'Fondateur', services: 'Services', applications: 'Applications', portfolio: 'Portfolio', manifesto: 'Manifeste', contact: 'Contact', privacy: 'Confidentialité', legal: 'Mentions légales', accessibility: 'Accessibilité' },
    home: {
      eyebrow: 'SPQE Lab', title: 'Des logiciels guidés par le jugement humain.',
      lead: 'SPQE Lab est un studio logiciel dirigé par son fondateur qui aide les organisations à transformer un travail difficile en produits numériques clairs et fiables.',
      lede: 'SPQE Lab est un studio logiciel dirigé par son fondateur qui aide les organisations à transformer un travail difficile en produits numériques clairs et fiables.',
      differentiator: 'Vous n’avez pas besoin de devenir créateur de sites web avec l’IA. Dites-nous ce dont vous avez besoin. Nous le comprendrons, le construirons et vous accompagnerons tout au long du processus.',
      introduction: 'Nous réunissons stratégie produit, conception et ingénierie dans de petites équipes responsables afin de créer des outils utiles.',
      actions: [{ label: 'Découvrir nos travaux', path: '/fr/applications', variant: 'primary' }, { label: 'Échanger avec nous', path: '/fr/contact', variant: 'secondary' }],
      principles: [{ title: 'Partir du travail réel', text: 'Nous étudions les tâches, les contraintes et les décisions avant de décider quoi construire.' }, { title: 'Garder les personnes dans la boucle', text: 'Le jugement, la responsabilité et le contact humain doivent rester visibles.' }, { title: 'Faire ce qui est utile', text: 'Nous préférons des systèmes compréhensibles et maintenables à une complexité inutile.' }],
      closing: { title: 'Un bon produit laisse place à un meilleur travail.', text: 'Nous aidons les équipes à choisir avec intention ce qu’un produit numérique doit faire, pour qui et pourquoi.' }
    },
    about: {
      eyebrow: 'À propos de SPQE Lab', title: 'Un studio logiciel pour rendre le travail important plus clair.',
      lead: 'Un studio logiciel dirigé par son fondateur pour les organisations qui ont un travail important à rendre plus clair.',
      intro: 'SPQE Lab réunit cadrage produit, conception d’interactions et réalisation technique dans une même conversation concrète.',
      principles: [{ title: 'Langage clair', text: 'Nous rendons les choix et les limites d’un produit compréhensibles.', description: 'Nous rendons les choix et les limites d’un produit compréhensibles.' }, { title: 'Limites réfléchies', text: 'Nous concevons avec les responsabilités et contraintes réelles.', description: 'Nous concevons avec les responsabilités et contraintes réelles.' }, { title: 'Systèmes durables', text: 'Nous privilégions un travail qu’une équipe peut comprendre et maintenir.', description: 'Nous privilégions un travail qu’une équipe peut comprendre et maintenir.' }],
      working: { title: 'Notre façon de travailler', text: 'Nous commençons par les personnes qui utilisent un service, celles qui en sont responsables et celles qui sont affectées par ses décisions.' },
      founder: { title: 'Dirigé par son fondateur', text: 'SPQE Lab est dirigé par Pierre Denis, au croisement de la pratique de terrain, de la stratégie produit et de la conception logicielle.', label: 'Rencontrer le fondateur', path: '/founder' },
      manifesto: { title: 'Notre manifeste', text: 'Notre approche place le jugement humain, la clarté, l’accessibilité et la durabilité au centre du travail logiciel.', label: 'Lire le manifeste', path: '/manifesto' },
      sections: [{ heading: 'Notre rôle', title: 'Notre rôle', text: 'Nous accompagnons des organisations d’intérêt général, des équipes expertes et des fondateurs indépendants.', description: 'Nous accompagnons des organisations d’intérêt général, des équipes expertes et des fondateurs indépendants.' }, { heading: 'Nos principes', title: 'Nos principes', text: 'Nous privilégions des interfaces accessibles, des choix attentifs à la vie privée et des systèmes aux responsabilités claires.', description: 'Nous privilégions des interfaces accessibles, des choix attentifs à la vie privée et des systèmes aux responsabilités claires.' }],
      founderLink: { label: 'Rencontrer le fondateur', path: '/founder' }, manifestoLink: { label: 'Lire le manifeste', path: '/manifesto' }
    },
    founder: {
      eyebrow: 'Fondateur', title: 'Pierre Denis', role: 'Fondateur, SPQE Lab',
      lead: 'Médecin, stratège produit et fondateur de studio logiciel, au croisement du terrain, de la conception de services et des outils numériques.',
      intro: 'Pierre Denis apporte une pratique médicale de terrain et une pensée produit à la conception de systèmes numériques utiles.',
      biography: ['Pierre Denis est médecin et possède une expérience en médecine du travail, où la qualité d’une décision dépend d’une attention précise aux personnes, au travail et au contexte.', 'Il apporte plus de dix ans de pratique de terrain à SPQE Lab. Cette expérience a façonné une approche concrète du logiciel : écouter attentivement, rendre le travail visible et ne pas promettre davantage qu’un outil ne peut offrir de manière responsable.', 'Son expérience antérieure en médecine d’urgence nourrit également son travail. Dans les situations urgentes, l’information doit être claire, les priorités explicites et les systèmes doivent soutenir les personnes sous pression plutôt que créer des frictions évitables.', 'Avec SPQE Lab, Pierre aide les équipes à cadrer, concevoir et créer des produits logiciels qui respectent le jugement professionnel et les réalités de l’usage quotidien.'],
      areas: ['Stratégie produit et découverte', 'Conception de produits logiciels', 'Conception de services et de flux de travail', 'Automatisation centrée sur l’humain', 'Systèmes numériques accessibles'],
      note: 'SPQE Lab ne fournit pas de soins d’urgence, de diagnostic individuel ni de conseil thérapeutique par ce site.'
    },
    services: {
      eyebrow: 'Services', title: 'Un accompagnement ciblé pour des produits numériques utiles.',
      lead: 'Un accompagnement ciblé pour les équipes qui transforment une idée, un service ou un flux de travail important en produit numérique utile.',
      lede: 'Un accompagnement ciblé pour les équipes qui transforment une idée, un service ou un flux de travail important en produit numérique utile.',
      categories: [{ title: 'Cadrage produit', text: 'Clarifier le problème, les publics, les limites et les résultats attendus avant de s’engager dans une solution.', description: 'Clarifier le problème, les publics, les limites et les résultats attendus avant de s’engager dans une solution.' }, { title: 'Conception logicielle', text: 'Concevoir des parcours, interfaces et modèles de contenu compréhensibles.', description: 'Concevoir des parcours, interfaces et modèles de contenu compréhensibles.' }, { title: 'Prototype et accompagnement de réalisation', text: 'Transformer les décisions en étapes produit testables et durables.', description: 'Transformer les décisions en étapes produit testables et durables.' }, { title: 'Ateliers d’équipe', text: 'Créer un langage commun entre les perspectives opérationnelles, techniques, de conception et de direction.', description: 'Créer un langage commun entre les perspectives opérationnelles, techniques, de conception et de direction.' }],
      items: [{ title: 'Cadrage produit', text: 'Clarifier le problème, les publics, les limites et les résultats attendus avant de s’engager dans une solution.', description: 'Clarifier le problème, les publics, les limites et les résultats attendus avant de s’engager dans une solution.' }, { title: 'Conception logicielle', text: 'Concevoir des parcours, interfaces et modèles de contenu compréhensibles.', description: 'Concevoir des parcours, interfaces et modèles de contenu compréhensibles.' }, { title: 'Prototype et accompagnement de réalisation', text: 'Transformer les décisions en étapes produit testables et durables.', description: 'Transformer les décisions en étapes produit testables et durables.' }, { title: 'Ateliers d’équipe', text: 'Créer un langage commun entre les perspectives opérationnelles, techniques, de conception et de direction.', description: 'Créer un langage commun entre les perspectives opérationnelles, techniques, de conception et de direction.' }],
      method: { title: 'Une démarche pratique', steps: ['Écouter les personnes, le travail, les contraintes et les systèmes existants.', 'Définir la décision, la tâche ou le résultat que le produit doit soutenir.', 'Rendre le travail actuel et ses incertitudes visibles.', 'Développer des concepts, prototypes et priorités de réalisation clairs.', 'Examiner le résultat au regard de l’utilité, de l’accessibilité, de la sécurité et de la faisabilité.'] },
      process: { title: 'Une démarche pratique', steps: ['Écouter les personnes, le travail, les contraintes et les systèmes existants.', 'Définir la décision, la tâche ou le résultat que le produit doit soutenir.', 'Rendre le travail actuel et ses incertitudes visibles.', 'Développer des concepts, prototypes et priorités de réalisation clairs.', 'Examiner le résultat au regard de l’utilité, de l’accessibilité, de la sécurité et de la faisabilité.'] },
      engagementModes: [{ title: 'Mission ciblée', text: 'Un travail cadré de conception, de cadrage ou d’atelier pour une décision précise.', description: 'Un travail cadré de conception, de cadrage ou d’atelier pour une décision précise.' }, { title: 'Accompagnement intégré', text: 'Un soutien continu à la conception produit et à la réalisation avec une équipe interne.', description: 'Un soutien continu à la conception produit et à la réalisation avec une équipe interne.' }, { title: 'Sprint de découverte', text: 'Une investigation courte et structurée qui transforme l’incertitude en prochaines étapes concrètes.', description: 'Une investigation courte et structurée qui transforme l’incertitude en prochaines étapes concrètes.' }],
      closing: { title: 'Commençons par une conversation claire.', text: 'Nous pouvons parler du travail, des personnes concernées et de la prochaine étape utile.' }
    },
    applications: { eyebrow: 'Applications', title: 'Applications', lead: 'Quelques manières dont l’approche SPQE Lab peut soutenir un travail numérique utile.', lede: 'Quelques manières dont l’approche SPQE Lab peut soutenir un travail numérique utile.', items: frApplications },
    portfolio: {
      eyebrow: 'Portfolio', title: 'Portfolio', lead: 'Exemples de questions et de livrables auxquels SPQE Lab peut aider une équipe à répondre.',
      disclaimer: 'Les descriptions de projets restent volontairement concises et ne révèlent pas d’informations confidentielles.',
      filters: [{ id: 'all', label: 'Tous les travaux' }, { id: 'content', label: 'Cadrage produit' }, { id: 'service', label: 'Conception de services' }, { id: 'product', label: 'Produit logiciel' }],
      projects: frApplications.map((item, index) => ({ id: item.slug, category: ['content', 'service', 'product', 'service'][index], title: item.title, summary: item.summary, detail: item.detail, outcomes: [item.detail.solution, item.detail.evidence, item.detail.status] }))
    },
    manifesto: {
      eyebrow: 'Manifeste', title: 'Des logiciels avec les personnes, pas autour d’elles.', lead: 'Une courte déclaration sur notre manière d’aborder les logiciels, les services et les personnes qui les utilisent.',
      statements: [{ title: 'Le logiciel doit servir le travail réel.', text: 'Un produit est utile lorsqu’il aide une personne à comprendre, décider, coordonner ou agir dans des conditions réelles.' }, { title: 'Les personnes restent responsables.', text: 'L’automatisation ne doit pas masquer le jugement, la responsabilité ni le chemin vers une décision humaine.' }, { title: 'La clarté est une responsabilité de conception.', text: 'Un langage simple, des intitulés honnêtes et des limites visibles aident à comprendre un produit.' }, { title: 'L’accessibilité fait partie de la qualité.', text: 'Un produit n’est pas complet si les personnes ne peuvent pas le percevoir, le parcourir, le comprendre ou l’utiliser.' }, { title: 'La durabilité compte.', text: 'Nous privilégions des systèmes maintenables et des décisions qui restent compréhensibles après la mise en ligne.' }],
      closing: 'Nous créons des logiciels avec les personnes, pas autour d’elles.'
    },
    contact: {
      eyebrow: 'Contact', title: 'Commençons par une conversation humaine.', lead: 'Parlez-nous du travail, du service ou du produit que vous envisagez.',
      introduction: 'SPQE Lab commence chaque collaboration par une conversation humaine. Une personne lit les demandes et répond lorsqu’il existe une adéquation pertinente ; ce formulaire n’est pas un système de décision automatisé.',
      humanIntake: 'Chaque demande est lue par une personne. Nous n’utilisons pas de décisions d’accueil automatisées.',
      emailLabel: 'E-mail', email: 'Les coordonnées sont disponibles par le canal SPQE Lab publié.',
      form: { name: 'Nom', organisation: 'Organisation', email: 'Adresse e-mail', subject: 'De quoi souhaitez-vous discuter ?', message: 'Message', submit: 'Envoyer la demande', sending: 'Envoi en cours…', success: 'Merci. Votre demande a été reçue.', error: 'Nous n’avons pas pu envoyer votre demande. Réessayez en utilisant le canal de contact publié.', required: 'Champ obligatoire' },
      notice: 'N’incluez pas de problème médical urgent, de dossier de santé personnel, de mot de passe, de donnée financière ou d’autre information sensible dans ce formulaire.'
    },
    privacy: { eyebrow: 'Confidentialité', title: 'Confidentialité', body: [{ title: 'Vue d’ensemble', body: 'Ce site présente SPQE Lab et utilise uniquement les services décrits dans ses informations de confidentialité publiées.' }, { title: 'Demandes de contact', body: 'Les informations fournies dans une demande servent à y répondre et à gérer une éventuelle relation professionnelle. N’envoyez pas d’informations sensibles via le site.' }, { title: 'Vos choix', body: 'Vous pouvez demander l’accès, la correction ou la suppression des informations personnelles détenues dans le cadre d’une demande, sous réserve des obligations légales applicables.' }, { title: 'Contact', body: 'Pour toute question relative à la confidentialité, utilisez le canal de contact SPQE Lab publié.' }], updated: 'Les informations de confidentialité sont revues lorsque les services du site évoluent.' },
    legal: { eyebrow: 'Mentions légales', title: 'Mentions légales', body: [{ title: 'Information générale', body: 'Le contenu de ce site fournit des informations générales sur SPQE Lab et ne constitue pas un avis médical, juridique, financier ou professionnel.' }, { title: 'Pas d’usage en urgence', body: 'N’utilisez pas ce site ou son formulaire de contact pour une urgence. Contactez les services d’urgence locaux ou un service professionnel adapté.' }, { title: 'Utilisation des contenus', body: 'Sauf indication contraire, le contenu du site ne peut être reproduit ou redistribué sans autorisation.' }, { title: 'Modifications', body: 'Ces mentions légales peuvent être mises à jour lorsque le site, l’entité juridique ou les exigences applicables évoluent.' }], updated: 'Les informations légales sont revues lorsque l’organisation ou le site évolue.' },
    accessibility: { eyebrow: 'Accessibilité', title: 'Accessibilité', body: [{ title: 'Notre approche', body: 'SPQE Lab cherche à proposer un site compréhensible, utilisable et utile au plus grand nombre.' }, { title: 'Principes de conception', body: 'Nous utilisons une structure sémantique, un langage lisible, l’accès au clavier, un focus visible et un contraste suffisant.' }, { title: 'Retours', body: 'Si vous rencontrez un obstacle d’accessibilité, contactez SPQE Lab par le canal publié en indiquant la page ou la tâche concernée.' }] },
    notFound: { eyebrow: 'Introuvable', title: 'Page introuvable', body: 'La page demandée n’est pas disponible.', action: { label: 'Retour à l’accueil', path: '/fr' } },
    ui: { skipToContent: 'Aller au contenu', openMenu: 'Ouvrir la navigation', closeMenu: 'Fermer la navigation', changeLanguage: 'Changer de langue', languageSwitch: 'English', backToTop: 'Retour en haut', readMore: 'En savoir plus', viewProject: 'Voir le projet', close: 'Fermer', previous: 'Précédent', next: 'Suivant', all: 'Tous', footer: 'Studio logiciel dirigé par son fondateur, pour des produits numériques utiles.' }
  }
};
