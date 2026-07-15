import React from 'react';
import htm from 'htm';

const html = htm.bind(React.createElement);

const applicationOrder = [
  'folder-archaeology',
  'noise-dose-lab',
  'evidence-timeline',
  'plate-bridge',
];

const fallbackHome = {
  en: {
    eyebrow: 'SPQE Lab',
    title: 'Better questions create better public experiences.',
    lead:
      'We help teams understand complex human needs and make useful things with care, clarity, and momentum.',
    differentiator:
      'You do not have to become an AI website builder. Tell us what you need. We will understand it, build it and guide you through it.',
    humanPromise:
      'There is no chatbot at the front door. Every project begins with a real human conversation.',
    principles: [
      {
        title: 'Understand',
        description:
          'Research, listening, and synthesis that reveal what matters in the everyday context of a challenge.',
      },
      {
        title: 'Imagine',
        description:
          'Collaborative framing and concept work that make promising opportunities visible and discussable.',
      },
      {
        title: 'Make',
        description:
          'Prototypes, service blueprints, and practical tools that help teams move from intention to action.',
      },
    ],
  },
  fr: {
    eyebrow: 'SPQE Lab',
    title: 'De meilleures questions créent de meilleures expériences publiques.',
    lead:
      'Nous aidons les équipes à comprendre des besoins humains complexes et à créer des choses utiles avec attention, clarté et élan.',
    differentiator:
      'Vous n’avez pas besoin de devenir créateur de sites web par IA. Dites-nous ce dont vous avez besoin. Nous le comprendrons, le construirons et vous guiderons tout au long du processus.',
    humanPromise:
      'Il n’y a pas de chatbot à la porte d’entrée. Chaque projet commence par une véritable conversation humaine.',
    principles: [
      {
        title: 'Comprendre',
        description:
          'Une recherche, une écoute et une synthèse qui révèlent ce qui compte dans le contexte quotidien d’un défi.',
      },
      {
        title: 'Imaginer',
        description:
          'Un cadrage collaboratif et un travail de conception qui rendent les occasions prometteuses visibles et discutables.',
      },
      {
        title: 'Réaliser',
        description:
          'Des prototypes, des schémas de service et des outils pratiques qui aident les équipes à passer de l’intention à l’action.',
      },
    ],
  },
};

const interfaceCopy = {
  en: {
    startConversation: 'Start a conversation',
    exploreApplications: 'Explore applications',
    introEyebrow: 'A different kind of partner',
    introTitle: 'We make space for the questions that are easy to skip.',
    introBody:
      'SPQE Lab works with organisations facing meaningful change: a new service, a difficult transition, a product that needs to earn trust, or a strategy that needs to work in the real world.',
    introDetail:
      'We combine rigorous inquiry with practical making, so insight becomes something people can use.',
    howWeWork: 'How we work',
    workEyebrow: 'Selected applications',
    workTitle: 'Tools and experiments that connect insight to action.',
    viewAll: 'View all applications',
    readStory: 'Explore application',
    capabilitiesEyebrow: 'What we do',
    capabilitiesTitle: 'Thoughtful work for complicated territory.',
    capabilitiesSummary:
      'We work across research, strategy, service design, and digital product development. The right mix depends on the challenge in front of you.',
    methodEyebrow: 'Our method',
    methodTitle: 'A steady way to move through uncertainty.',
    methodBody:
      'There is no single recipe for complex work. Our process gives a team enough structure to learn quickly while staying responsive to what emerges.',
    methodSteps: [
      ['Listen and frame', 'Learn from people, evidence, and the realities behind the brief.'],
      ['Design', 'Turn a shared focus into useful concepts and practical service directions.'],
      ['Prototype', 'Make ideas tangible early enough for teams and communities to respond.'],
      ['Test and refine', 'Use what we learn to improve decisions before delivery becomes expensive.'],
      ['Deliver and guide', 'Support implementation and leave teams with confidence and useful tools.'],
    ],
    founderEyebrow: 'Meet the founder',
    founderTitle: 'A practice built around curiosity and care.',
    founderBody:
      'SPQE Lab is led by a practitioner who helps teams turn complex evidence into useful decisions. The work is collaborative, direct, and grounded in respect for the people affected by change.',
    founderLink: 'More about SPQE Lab',
    founderAlt: 'Portrait of the founder of SPQE Lab',
    contactEyebrow: 'Let us begin',
    contactTitle: 'Bring the question you cannot stop thinking about.',
    contactBody:
      'Whether the next step is clear or still taking shape, we would be glad to talk it through with you.',
    contactAction: 'Get in touch',
  },
  fr: {
    startConversation: 'Commencer une conversation',
    exploreApplications: 'Découvrir les applications',
    introEyebrow: 'Un autre type de partenaire',
    introTitle: 'Nous faisons de la place aux questions faciles à oublier.',
    introBody:
      'SPQE Lab travaille avec des organisations qui vivent un changement important : un nouveau service, une transition difficile, un produit qui doit gagner la confiance ou une stratégie qui doit fonctionner dans le monde réel.',
    introDetail:
      'Nous associons une recherche rigoureuse à une fabrication concrète afin que les enseignements deviennent réellement utiles.',
    howWeWork: 'Notre manière de travailler',
    workEyebrow: 'Applications sélectionnées',
    workTitle: 'Des outils et des expériences qui relient les enseignements à l’action.',
    viewAll: 'Voir toutes les applications',
    readStory: 'Découvrir l’application',
    capabilitiesEyebrow: 'Ce que nous faisons',
    capabilitiesTitle: 'Un travail attentif pour des territoires complexes.',
    capabilitiesSummary:
      'Nous intervenons en recherche, stratégie, conception de services et produits numériques. La bonne combinaison dépend du défi qui se présente à vous.',
    methodEyebrow: 'Notre méthode',
    methodTitle: 'Une façon stable d’avancer dans l’incertitude.',
    methodBody:
      'Il n’existe pas de recette unique pour le travail complexe. Notre démarche donne à une équipe assez de structure pour apprendre vite tout en restant attentive à ce qui émerge.',
    methodSteps: [
      ['Écouter et cadrer', 'Apprendre des personnes, des données et des réalités qui se cachent derrière le mandat.'],
      ['Concevoir', 'Transformer un objectif commun en concepts utiles et en orientations de service concrètes.'],
      ['Prototyper', 'Rendre les idées tangibles assez tôt pour permettre aux équipes et aux communautés de réagir.'],
      ['Tester et affiner', 'Utiliser les apprentissages pour améliorer les décisions avant que la réalisation ne devienne coûteuse.'],
      ['Réaliser et guider', 'Soutenir la mise en œuvre et laisser aux équipes des outils utiles et la confiance nécessaire.'],
    ],
    founderEyebrow: 'Rencontrer le fondateur',
    founderTitle: 'Une pratique fondée sur la curiosité et l’attention.',
    founderBody:
      'SPQE Lab est dirigé par un praticien qui aide les équipes à transformer des données complexes en décisions utiles. Le travail est collaboratif, direct et ancré dans le respect des personnes touchées par le changement.',
    founderLink: 'En savoir plus sur SPQE Lab',
    founderAlt: 'Portrait du fondateur de SPQE Lab',
    contactEyebrow: 'Commençons',
    contactTitle: 'Apportez la question à laquelle vous ne cessez de penser.',
    contactBody:
      'Que la prochaine étape soit claire ou encore en formation, nous serions heureux d’en parler avec vous.',
    contactAction: 'Nous joindre',
  },
};

const fallbackApplications = {
  en: [
    ['folder-archaeology', 'Folder Archaeology', 'A practical way to turn scattered project material into a shared evidence base.'],
    ['noise-dose-lab', 'NoiseDoseLab', 'An experiment for understanding how noise affects daily life and public decisions.'],
    ['evidence-timeline', 'Evidence Timeline', 'A clear timeline that helps teams connect evidence, decisions, and delivery.'],
    ['plate-bridge', 'PlateBridge', 'A service concept for making food access easier to navigate with dignity.'],
  ],
  fr: [
    ['folder-archaeology', 'Folder Archaeology', 'Une manière concrète de transformer des documents de projet dispersés en une base de connaissances commune.'],
    ['noise-dose-lab', 'NoiseDoseLab', 'Une expérience pour comprendre comment le bruit influe sur la vie quotidienne et les décisions publiques.'],
    ['evidence-timeline', 'Evidence Timeline', 'Une chronologie claire qui aide les équipes à relier les données, les décisions et la réalisation.'],
    ['plate-bridge', 'PlateBridge', 'Un concept de service qui rend l’accès à l’alimentation plus simple à comprendre et plus digne.'],
  ],
};

function applicationPath(slug, locale) {
  /** Return the canonical locale-prefixed detail route for an application slug. */
  return `#/${locale === 'fr' ? 'fr' : 'en'}/applications/${slug}`;
}

function localizedText(value, locale, fallback = '') {
  if (typeof value === 'string') {
    return value;
  }
  if (value && typeof value === 'object') {
    return value[locale] || value.en || fallback;
  }
  return fallback;
}

function routeHref(locale, route) {
  const routes = {
    en: {
      about: '#/en/about',
      applications: '#/en/applications',
      contact: '#/en/contact',
    },
    fr: {
      about: '#/fr/a-propos',
      applications: '#/fr/applications',
      contact: '#/fr/contact',
    },
  };
  return routes[locale === 'fr' ? 'fr' : 'en'][route];
}

function resolveHome(content, locale) {
  /** Return the canonical locale-specific home record when one is available. */
  if (!content || typeof content !== 'object') {
    return null;
  }

  const localeContent =
    content[locale] && typeof content[locale] === 'object'
      ? content[locale]
      : content;
  return localeContent.home && typeof localeContent.home === 'object'
    ? localeContent.home
    : null;
}

function findApplication(records, slug, fallback) {
  /** Return a supplied application matching a seeded slug or its catalog fallback. */
  return (
    records.find(
      (record) =>
        record.slug === slug ||
        record.id === slug ||
        record.handle === slug,
    ) || {
      slug: fallback[0],
      title: fallback[1],
      description: fallback[2],
    }
  );
}

export function HomePage({
  locale = 'en',
  content = {},
  selectedPortfolio = [],
  portfolio = [],
  applications = [],
}) {
  const activeLocale = locale === 'fr' ? 'fr' : 'en';
  const page = resolveHome(content, activeLocale) || fallbackHome[activeLocale];
  const copy = interfaceCopy[activeLocale];
  const records =
    selectedPortfolio.length > 0
      ? selectedPortfolio
      : portfolio.length > 0
        ? portfolio
        : applications.length > 0
          ? applications
          : [];
  const selectedApplications = applicationOrder.map((slug) => {
    const fallback = fallbackApplications[activeLocale].find(
      ([entrySlug]) => entrySlug === slug,
    );
    return findApplication(records, slug, fallback);
  });

  return html`
    <main>
      <section className="hero" aria-labelledby="home-title">
        <div className="container hero__grid">
          <div className="hero__content">
            <p className="eyebrow">${page.eyebrow}</p>
            <h1 id="home-title">${page.title}</h1>
            <p className="hero__lede">${page.lead}</p>
            <p className="hero__differentiator">${page.differentiator}</p>
            <p className="hero__note">${page.humanPromise}</p>
            <div className="hero__actions">
              <a className="button button--primary" href=${routeHref(activeLocale, 'contact')}>${copy.startConversation}</a>
              <a className="button button--secondary" href=${routeHref(activeLocale, 'applications')}>${copy.exploreApplications}</a>
            </div>
          </div>
          <div className="hero__visual" aria-label=${page.title}>
            <div className="hero__orbit hero__orbit--one"></div>
            <div className="hero__orbit hero__orbit--two"></div>
            <div className="hero__node hero__node--one">People</div>
            <div className="hero__node hero__node--two">Evidence</div>
            <div className="hero__node hero__node--three">Action</div>
          </div>
        </div>
      </section>

      <section className="section section--soft" aria-labelledby="intro-title">
        <div className="container split-layout">
          <div>
            <p className="eyebrow">${copy.introEyebrow}</p>
            <h2 id="intro-title">${copy.introTitle}</h2>
          </div>
          <div className="prose">
            <p>${copy.introBody}</p>
            <p>${copy.introDetail}</p>
            <a className="text-link" href=${routeHref(activeLocale, 'about')}>
              ${copy.howWeWork} <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      <section className="section" id="applications" aria-labelledby="applications-title">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">${copy.workEyebrow}</p>
              <h2 id="applications-title">${copy.workTitle}</h2>
            </div>
            <a className="text-link" href=${routeHref(activeLocale, 'applications')}>
              ${copy.viewAll} <span aria-hidden="true">→</span>
            </a>
          </div>
          <div className="card-grid card-grid--four">
            ${selectedApplications.map(
              (application) => html`
                <article className="work-card" key=${application.slug}>
                  <h3>${localizedText(application.title, activeLocale)}</h3>
                  <p>${localizedText(application.description || application.summary, activeLocale)}</p>
                  <a
                    className="text-link"
                    href=${applicationPath(application.slug, activeLocale)}
                    aria-label=${`${copy.readStory}: ${localizedText(application.title, activeLocale)}`}
                  >
                    ${copy.readStory} <span aria-hidden="true">→</span>
                  </a>
                </article>
              `,
            )}
          </div>
        </div>
      </section>

      <section className="section section--navy" aria-labelledby="capabilities-title">
        <div className="container">
          <div className="section-heading section-heading--light">
            <div>
              <p className="eyebrow">${copy.capabilitiesEyebrow}</p>
              <h2 id="capabilities-title">${copy.capabilitiesTitle}</h2>
            </div>
            <p className="section-heading__summary">${copy.capabilitiesSummary}</p>
          </div>
          <div className="card-grid card-grid--three">
            ${page.principles.map(
              (principle, index) => html`
                <article className="capability-card" key=${principle.title}>
                  <p className="capability-card__number">${String(index + 1).padStart(2, '0')}</p>
                  <h3>${principle.title}</h3>
                  <p>${principle.description || principle.text}</p>
                </article>
              `,
            )}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="method-title">
        <div className="container method-layout">
          <div className="method-layout__intro">
            <p className="eyebrow">${copy.methodEyebrow}</p>
            <h2 id="method-title">${copy.methodTitle}</h2>
            <p>${copy.methodBody}</p>
          </div>
          <ol className="method-list">
            ${copy.methodSteps.map(
              ([title, description], index) => html`
                <li className="method-list__item" key=${title}>
                  <span className="method-list__number">${String(index + 1).padStart(2, '0')}</span>
                  <div>
                    <h3>${title}</h3>
                    <p>${description}</p>
                  </div>
                </li>
              `,
            )}
          </ol>
        </div>
      </section>

      <section className="section section--soft" aria-labelledby="founder-title">
        <div className="container founder-preview">
          <div className="founder-preview__image">
            <img src="./founder-photo-placeholder.svg" alt=${copy.founderAlt} />
          </div>
          <div className="founder-preview__content">
            <p className="eyebrow">${copy.founderEyebrow}</p>
            <h2 id="founder-title">${copy.founderTitle}</h2>
            <p>${copy.founderBody}</p>
            <a className="text-link" href=${routeHref(activeLocale, 'about')}>
              ${copy.founderLink} <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      <section className="section cta-section" aria-labelledby="contact-title">
        <div className="container cta-section__content">
          <p className="eyebrow">${copy.contactEyebrow}</p>
          <h2 id="contact-title">${copy.contactTitle}</h2>
          <p>${copy.contactBody}</p>
          <a className="button button--primary" href=${routeHref(activeLocale, 'contact')}>${copy.contactAction}</a>
        </div>
      </section>
    </main>
  `;
}

export default HomePage;
