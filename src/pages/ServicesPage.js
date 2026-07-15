import React from 'react';
import htm from 'htm';

const html = htm.bind(React.createElement);
const CONTACT_ROUTE = '#/contact';

const fallbackServicesContent = {
  en: {
    eyebrow: 'Services',
    title: 'Practical work for complex questions.',
    lede: 'SPQE Lab helps people and organisations investigate challenges, make informed choices, and develop useful responses with care.',
    exploreLabel: 'Explore engagement modes',
    categoriesEyebrow: 'What we do',
    categoriesTitle: 'Services shaped around your context.',
    categoriesDescription: 'We combine research, design, and facilitation when they are useful. The work is tailored to the question at hand rather than fitted to a pre-packaged process.',
    categories: [
      {
        title: 'Research and framing',
        description: 'We clarify the problem, examine evidence, map stakeholders, and define a responsible direction before substantial delivery work begins.',
        points: ['Discovery interviews', 'Evidence review', 'Decision framing'],
      },
      {
        title: 'Data and systems',
        description: 'We design practical data workflows and digital systems that make complex work more understandable, reliable, and useful.',
        points: ['Data strategy', 'Workflow design', 'System prototypes'],
      },
      {
        title: 'Learning and collaboration',
        description: 'We create learning experiences and collaborative formats that help teams build capability while keeping decisions visible.',
        points: ['Facilitated workshops', 'Team learning', 'Service co-design'],
      },
    ],
    methodEyebrow: 'Our method',
    methodTitle: 'A five-step method that leaves room for judgment.',
    methodDescription: 'Our process offers enough structure to move work forward while recognising that meaningful decisions require human interpretation, accountability, and care.',
    methodSteps: [
      { number: '01', title: 'Listen and frame', description: 'We listen to the people involved, understand the context, and frame a focused question for the work.' },
      { number: '02', title: 'Design', description: 'We shape a practical approach, define useful outcomes, and make responsibilities and decisions visible.' },
      { number: '03', title: 'Prototype', description: 'We turn ideas into tangible services, tools, workflows, or learning materials that can be explored together.' },
      { number: '04', title: 'Test and refine', description: 'We test the work with the people who will use it, learn from evidence, and refine it with care.' },
      { number: '05', title: 'Deliver and guide', description: 'We document useful next steps and help teams carry the work forward in ways that fit their responsibilities.' },
    ],
    proposalEyebrow: 'Tailored proposals',
    proposalTitle: 'A proposal should reflect the real work.',
    proposalText: 'Every engagement starts with a conversation about your aims, constraints, people, and available evidence. We then prepare a clear proposal describing the scope, roles, working rhythm, and expected outputs.',
    proposalResponsibility: 'We do not treat automated outputs as independent decisions. Human judgment, domain knowledge, and responsibility remain visible throughout the work.',
    proposalLink: 'Start a conversation',
    engagementsEyebrow: 'Ways to work together',
    engagementsTitle: 'Choose a pace that fits the need.',
    engagementModes: [
      { title: 'Exploratory framing', description: 'A short engagement for understanding an emerging challenge and identifying responsible next steps.' },
      { title: 'Focused prototype', description: 'A bounded project that develops and tests one concrete service, tool, workflow, or learning experience.' },
      { title: 'Custom application', description: 'A tailored collaboration for organisations with a defined context and a need for sustained specialist support.' },
      { title: 'Iterative improvement', description: 'An ongoing partnership for reviewing an existing service or system and improving it through repeated learning cycles.' },
    ],
    closingEyebrow: 'Next step',
    closingTitle: 'Bring us the question you are working on.',
    closingLink: 'Contact SPQE Lab',
  },
  fr: {
    eyebrow: 'Services',
    title: 'Un travail concret pour des questions complexes.',
    lede: 'SPQE Lab aide les personnes et les organisations à examiner leurs enjeux, à faire des choix éclairés et à développer des réponses utiles avec attention.',
    exploreLabel: 'Découvrir les modalités de collaboration',
    categoriesEyebrow: 'Ce que nous faisons',
    categoriesTitle: 'Des services adaptés à votre contexte.',
    categoriesDescription: 'Nous combinons recherche, conception et facilitation lorsqu’elles sont utiles. Le travail est adapté à la question posée plutôt qu’à un processus préétabli.',
    categories: [
      {
        title: 'Recherche et cadrage',
        description: 'Nous clarifions le problème, examinons les éléments disponibles, cartographions les parties prenantes et définissons une direction responsable avant le travail de réalisation.',
        points: ['Entretiens de découverte', 'Analyse des éléments', 'Cadrage des décisions'],
      },
      {
        title: 'Données et systèmes',
        description: 'Nous concevons des flux de données et des systèmes numériques pratiques qui rendent le travail complexe plus compréhensible, fiable et utile.',
        points: ['Stratégie de données', 'Conception de flux', 'Prototypes de systèmes'],
      },
      {
        title: 'Apprentissage et collaboration',
        description: 'Nous créons des expériences d’apprentissage et des formats collaboratifs qui renforcent les capacités des équipes tout en rendant les décisions visibles.',
        points: ['Ateliers facilités', 'Apprentissage en équipe', 'Co-conception de services'],
      },
    ],
    methodEyebrow: 'Notre méthode',
    methodTitle: 'Une méthode en cinq étapes qui laisse place au jugement.',
    methodDescription: 'Notre processus apporte suffisamment de structure pour faire avancer le travail tout en reconnaissant que les décisions importantes exigent interprétation humaine, responsabilité et attention.',
    methodSteps: [
      { number: '01', title: 'Écouter et cadrer', description: 'Nous écoutons les personnes concernées, comprenons le contexte et formulons une question précise pour le travail.' },
      { number: '02', title: 'Concevoir', description: 'Nous élaborons une approche pratique, définissons des résultats utiles et rendons les responsabilités et décisions visibles.' },
      { number: '03', title: 'Prototyper', description: 'Nous transformons les idées en services, outils, flux de travail ou supports d’apprentissage tangibles à explorer ensemble.' },
      { number: '04', title: 'Tester et affiner', description: 'Nous testons le travail avec les personnes qui l’utiliseront, apprenons des éléments observés et l’affinons avec attention.' },
      { number: '05', title: 'Livrer et accompagner', description: 'Nous documentons les prochaines étapes utiles et aidons les équipes à poursuivre le travail selon leurs responsabilités.' },
    ],
    proposalEyebrow: 'Propositions sur mesure',
    proposalTitle: 'Une proposition doit refléter le travail réel.',
    proposalText: 'Chaque collaboration commence par une conversation sur vos objectifs, vos contraintes, les personnes concernées et les éléments disponibles. Nous préparons ensuite une proposition claire décrivant le périmètre, les rôles, le rythme de travail et les résultats attendus.',
    proposalResponsibility: 'Nous ne traitons pas les résultats automatisés comme des décisions indépendantes. Le jugement humain, la connaissance du domaine et la responsabilité restent visibles tout au long du travail.',
    proposalLink: 'Entamer la conversation',
    engagementsEyebrow: 'Façons de travailler ensemble',
    engagementsTitle: 'Choisissez un rythme adapté au besoin.',
    engagementModes: [
      { title: 'Cadrage exploratoire', description: 'Une courte collaboration pour comprendre un enjeu émergent et identifier des prochaines étapes responsables.' },
      { title: 'Prototype ciblé', description: 'Un projet délimité qui développe et teste un service, un outil, un flux de travail ou une expérience d’apprentissage concrète.' },
      { title: 'Application sur mesure', description: 'Une collaboration adaptée aux organisations disposant d’un contexte défini et ayant besoin d’un accompagnement spécialisé soutenu.' },
      { title: 'Amélioration itérative', description: 'Un partenariat continu pour examiner un service ou système existant et l’améliorer par des cycles d’apprentissage répétés.' },
    ],
    closingEyebrow: 'Prochaine étape',
    closingTitle: 'Parlez-nous de la question sur laquelle vous travaillez.',
    closingLink: 'Contacter SPQE Lab',
  },
};

function normalizeServiceCategory(category) {
  const record = category || {};
  return {
    title: record.title,
    description: record.description || record.text || '',
    points: Array.isArray(record.points) ? record.points : [],
  };
}

function resolveServices(locale, content) {
  const selectedRecord = content && content[locale] ? content[locale] : content;
  const suppliedServices =
    selectedRecord && selectedRecord.services ? selectedRecord.services : {};
  const fallback = fallbackServicesContent[locale] || fallbackServicesContent.en;
  const categories = Array.isArray(suppliedServices.categories)
    ? suppliedServices.categories
    : fallback.categories;

  return {
    ...fallback,
    ...suppliedServices,
    categories: categories.map(normalizeServiceCategory),
    methodSteps: Array.isArray(suppliedServices.methodSteps)
      ? suppliedServices.methodSteps
      : fallback.methodSteps,
    engagementModes: Array.isArray(suppliedServices.engagementModes)
      ? suppliedServices.engagementModes
      : fallback.engagementModes,
  };
}

export function ServicesPage({ locale = 'en', content } = {}) {
  const services = resolveServices(locale, content);

  return html`
    <main id="main-content" className="page services-page" data-locale=${locale}>
      <section className="page-hero page-hero--services" aria-labelledby="services-title">
        <div className="page-shell">
          <p className="eyebrow">${services.eyebrow}</p>
          <h1 id="services-title">${services.title}</h1>
          <p className="page-hero__lede">${services.lede}</p>
          <a className="button button--primary" href="#engagements">
            ${services.exploreLabel}
          </a>
        </div>
      </section>

      <section className="section" aria-labelledby="services-categories-title">
        <div className="page-shell">
          <div className="section-heading">
            <p className="eyebrow">${services.categoriesEyebrow}</p>
            <h2 id="services-categories-title">${services.categoriesTitle}</h2>
            <p>${services.categoriesDescription}</p>
          </div>
          <div className="card-grid card-grid--three">
            ${services.categories.map((service) => html`
              <article className="service-card" key=${service.title}>
                <h3>${service.title}</h3>
                <p>${service.description}</p>
                ${service.points.length > 0 && html`
                  <ul>
                    ${service.points.map((point) => html`<li key=${point}>${point}</li>`)}
                  </ul>
                `}
              </article>
            `)}
          </div>
        </div>
      </section>

      <section className="section section--soft" aria-labelledby="method-title">
        <div className="page-shell">
          <div className="section-heading">
            <p className="eyebrow">${services.methodEyebrow}</p>
            <h2 id="method-title">${services.methodTitle}</h2>
            <p>${services.methodDescription}</p>
          </div>
          <ol className="method-list">
            ${services.methodSteps.map((step) => html`
              <li className="method-list__item" key=${step.number}>
                <span className="method-list__number" aria-hidden="true">${step.number}</span>
                <div>
                  <h3>${step.title}</h3>
                  <p>${step.description}</p>
                </div>
              </li>
            `)}
          </ol>
        </div>
      </section>

      <section className="section" aria-labelledby="proposal-title">
        <div className="page-shell proposal-panel">
          <div>
            <p className="eyebrow">${services.proposalEyebrow}</p>
            <h2 id="proposal-title">${services.proposalTitle}</h2>
          </div>
          <div className="proposal-panel__body">
            <p>${services.proposalText}</p>
            <p>${services.proposalResponsibility}</p>
            <a className="text-link" href=${CONTACT_ROUTE}>
              ${services.proposalLink} <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      <section id="engagements" className="section section--soft" aria-labelledby="engagements-title">
        <div className="page-shell">
          <div className="section-heading">
            <p className="eyebrow">${services.engagementsEyebrow}</p>
            <h2 id="engagements-title">${services.engagementsTitle}</h2>
          </div>
          <div className="card-grid card-grid--two">
            ${services.engagementModes.map((mode) => html`
              <article className="engagement-card" key=${mode.title}>
                <h3>${mode.title}</h3>
                <p>${mode.description}</p>
              </article>
            `)}
          </div>
        </div>
      </section>

      <section className="section section--closing" aria-labelledby="services-contact-title">
        <div className="page-shell closing-panel">
          <div>
            <p className="eyebrow">${services.closingEyebrow}</p>
            <h2 id="services-contact-title">${services.closingTitle}</h2>
          </div>
          <a className="button button--primary" href=${CONTACT_ROUTE}>
            ${services.closingLink}
          </a>
        </div>
      </section>
    </main>
  `;
}

export default ServicesPage;
