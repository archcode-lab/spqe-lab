import React from 'react';
import htm from 'htm';

const html = htm.bind(React.createElement);

const colors = {
  navy: '#10233d',
  blue: '#1769aa',
  softBlue: '#eaf4fc',
  gray: '#f5f7f9',
  border: '#dbe3ea',
  muted: '#526273',
  white: '#ffffff',
};

const fallbackCatalog = {
  en: {
    navigation: {
      about: 'About',
      founder: 'Founder',
      manifesto: 'Manifesto',
      homeLabel: 'SPQE Lab home',
      sectionLabel: 'About section',
    },
    about: {
      eyebrow: 'About SPQE Lab',
      title: 'A founder-led practice for work that deserves attention.',
      intro: 'SPQE Lab brings clinical experience, systems thinking, and careful dialogue to work that must remain useful in the real world.',
      principles: [
        ['Clarity before ornament', 'We begin with the situation people are living through, the decisions they need to make, and the conditions that make those decisions difficult.'],
        ['Collaboration without theatre', 'The people closest to a problem remain part of the work. Questions, trade-offs, and next steps are made visible together.'],
        ['Systems that can be cared for', 'A useful system supports thoughtful action after the original project team has moved on.'],
      ],
      workingTitle: 'Working with SPQE Lab',
      workingBody: 'Engagements connect observation, shared understanding, practical testing, and implementation. The practice remains intentionally close to the people and systems involved.',
    },
    founder: {
      eyebrow: 'Founder',
      title: 'Clinical practice, systems thinking, and sustained attention.',
      intro: 'SPQE Lab is founded by Pierre Denis, an occupational physician whose work connects field practice with the conditions that shape health, work, and dialogue.',
      imageAlt: 'Private-preview portrait placeholder for Pierre Denis',
      photoNotice: 'Private-preview founder portrait placeholder. A verified public-release photograph is required before production launch.',
      profileTitle: 'Pierre Denis',
      paragraphs: [
        'Pierre Denis is an occupational physician with more than ten years of field practice. His work remains grounded in the realities people encounter in workplaces, services, and care settings.',
        'His professional background also includes emergency medicine, where attention, communication, and decisions must remain reliable under pressure.',
        'His systems-oriented practice considers relationships between people, organisations, tools, language, and constraints. It looks beyond isolated symptoms to understand how a situation is produced and how it can change.',
      ],
      cvTitle: 'Practice narrative',
      cv: [
        ['Observe', 'Attend to work as it is actually done, including the informal adaptations that keep a system moving.'],
        ['Test and listen', 'Use questions and small experiments to make assumptions visible and learn with the people affected.'],
        ['Carry learning forward', 'Translate understanding into practical structures that support dialogue, care, and durable action.'],
      ],
    },
    manifesto: {
      eyebrow: 'Manifesto',
      title: 'Understand before building.',
      intro: 'Useful change begins with attention to the human situation, not with a ready-made solution.',
      principles: [
        ['01', 'Understand before building', 'Do not begin with a tool, interface, or programme. Begin by understanding the situation, the work, and the people involved.'],
        ['02', 'Relationships are part of the system', 'Trust, language, roles, and everyday cooperation shape what a system can do. They deserve the same attention as formal processes.'],
        ['03', 'Failures are signals', 'A failure is not only a defect to remove. It can reveal a mismatch between a system and the conditions in which people use it.'],
        ['04', 'Observe, test, and listen', 'Move between observation, practical testing, and listening. Understanding grows through contact with real work.'],
        ['05', 'Technology should support dialogue', 'Technology can help people see, coordinate, and learn. It should support dialogue rather than replace it.'],
      ],
      closingTitle: 'A continuing practice',
      closingBody: 'The measure of the work is whether it helps people understand their situation, speak with one another, and take a clearer next step.',
    },
  },
  fr: {
    navigation: {
      about: 'À propos',
      founder: 'Fondateur',
      manifesto: 'Manifeste',
      homeLabel: 'Accueil SPQE Lab',
      sectionLabel: 'Section à propos',
    },
    about: {
      eyebrow: 'À propos de SPQE Lab',
      title: 'Une pratique portée par son fondateur pour les travaux qui méritent de l’attention.',
      intro: 'SPQE Lab relie expérience clinique, pensée systémique et dialogue attentif pour des travaux qui doivent rester utiles dans le réel.',
      principles: [
        ['La clarté avant l’ornement', 'Nous partons de la situation vécue, des décisions à prendre et des conditions qui rendent ces décisions difficiles.'],
        ['Collaborer sans mise en scène', 'Les personnes les plus proches d’un problème restent partie prenante du travail. Questions, arbitrages et prochaines étapes sont rendus visibles ensemble.'],
        ['Des systèmes dont on peut prendre soin', 'Un système utile soutient une action réfléchie après le départ de l’équipe initiale.'],
      ],
      workingTitle: 'Travailler avec SPQE Lab',
      workingBody: 'Les missions relient observation, compréhension partagée, essais pratiques et mise en œuvre. La pratique reste volontairement proche des personnes et des systèmes concernés.',
    },
    founder: {
      eyebrow: 'Fondateur',
      title: 'Pratique clinique, pensée systémique et attention durable.',
      intro: 'SPQE Lab a été fondé par Pierre Denis, médecin du travail dont la pratique relie le terrain aux conditions qui façonnent la santé, le travail et le dialogue.',
      imageAlt: 'Portrait provisoire privé de Pierre Denis',
      photoNotice: 'Portrait provisoire réservé à la prévisualisation privée. Une photographie vérifiée pour diffusion publique est requise avant la mise en production.',
      profileTitle: 'Pierre Denis',
      paragraphs: [
        'Pierre Denis est médecin du travail et possède plus de dix ans de pratique de terrain. Son travail reste ancré dans les réalités rencontrées dans les lieux de travail, les services et les contextes de soin.',
        'Son parcours professionnel comprend également la médecine d’urgence, où attention, communication et décisions doivent rester fiables sous pression.',
        'Cette pratique orientée systèmes considère les relations entre personnes, organisations, outils, langage et contraintes. Elle dépasse les symptômes isolés pour comprendre comment une situation se produit et comment elle peut évoluer.',
      ],
      cvTitle: 'Récit de pratique',
      cv: [
        ['Observer', 'Prêter attention au travail tel qu’il est réellement accompli, y compris aux adaptations informelles qui permettent à un système de fonctionner.'],
        ['Tester et écouter', 'Employer les questions et de petites expérimentations pour rendre les hypothèses visibles et apprendre avec les personnes concernées.'],
        ['Faire durer les apprentissages', 'Traduire la compréhension en structures pratiques qui soutiennent le dialogue, le soin et une action durable.'],
      ],
    },
    manifesto: {
      eyebrow: 'Manifeste',
      title: 'Comprendre avant de construire.',
      intro: 'Un changement utile commence par l’attention portée à la situation humaine, et non par une solution toute faite.',
      principles: [
        ['01', 'Comprendre avant de construire', 'Ne pas commencer par un outil, une interface ou un programme. Commencer par comprendre la situation, le travail et les personnes concernées.'],
        ['02', 'Les relations font partie du système', 'La confiance, le langage, les rôles et la coopération quotidienne déterminent ce qu’un système peut accomplir. Ils méritent autant d’attention que les processus formels.'],
        ['03', 'Les échecs sont des signaux', 'Un échec n’est pas seulement un défaut à supprimer. Il peut révéler un décalage entre un système et les conditions dans lesquelles les personnes l’utilisent.'],
        ['04', 'Observer, tester et écouter', 'Alterner observation, essais pratiques et écoute. La compréhension grandit au contact du travail réel.'],
        ['05', 'La technologie doit soutenir le dialogue', 'La technologie peut aider à voir, coordonner et apprendre. Elle doit soutenir le dialogue plutôt que le remplacer.'],
      ],
      closingTitle: 'Une pratique continue',
      closingBody: 'La mesure du travail est sa capacité à aider les personnes à comprendre leur situation, à se parler et à faire un prochain pas plus clair.',
    },
  },
};

const pageStyle = {
  background: colors.gray,
  color: colors.navy,
  fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  lineHeight: 1.65,
  minHeight: '100vh',
};

const containerStyle = {
  margin: '0 auto',
  maxWidth: '1080px',
  padding: '48px 24px 72px',
};

const cardStyle = {
  background: colors.white,
  border: `1px solid ${colors.border}`,
  borderRadius: '18px',
  boxShadow: '0 8px 24px rgba(16, 35, 61, 0.06)',
  padding: '30px',
};

function selectedCatalog(locale, content) {
  const language = locale === 'fr' ? 'fr' : 'en';
  const fallback = fallbackCatalog[language];
  const record = content && content[language]
    ? content[language]
    : content && content.about && content.founder && content.manifesto
      ? content
      : null;

  if (!record) {
    return fallback;
  }

  return {
    navigation: { ...fallback.navigation, ...(record.navigation || {}) },
    about: { ...fallback.about, ...(record.about || {}) },
    founder: { ...fallback.founder, ...(record.founder || {}) },
    manifesto: { ...fallback.manifesto, ...(record.manifesto || {}) },
  };
}

function requiredArray(value, fallback) {
  return Array.isArray(value) && value.length ? value : fallback;
}

function readableValue(value, fallback) {
  return typeof value === 'string' && value.trim() ? value : fallback;
}

function namedValue(record, names, fallback) {
  if (!record || typeof record !== 'object' || Array.isArray(record)) {
    return fallback;
  }

  for (const name of names) {
    const value = record[name];
    if (typeof value === 'string' && value.trim()) {
      return value;
    }
  }

  return fallback;
}

function aboutPrinciple(record, fallback) {
  const fallbackTitle = fallback[0];
  const fallbackBody = fallback[1];

  if (Array.isArray(record)) {
    return {
      title: readableValue(record[0], fallbackTitle),
      body: readableValue(record[1], fallbackBody),
    };
  }

  return {
    title: namedValue(record, ['title', 'heading', 'name'], fallbackTitle),
    body: namedValue(record, ['text', 'description', 'body', 'content'], fallbackBody),
  };
}

function cvEntry(record, fallback) {
  const fallbackTitle = fallback[0];
  const fallbackBody = fallback[1];

  if (Array.isArray(record)) {
    return {
      title: readableValue(record[0], fallbackTitle),
      body: readableValue(record[1], fallbackBody),
    };
  }

  return {
    title: namedValue(record, ['title', 'heading', 'name'], fallbackTitle),
    body: namedValue(record, ['text', 'description', 'body', 'content'], fallbackBody),
  };
}

function manifestoPrinciple(record, fallback) {
  const fallbackNumber = fallback[0];
  const fallbackTitle = fallback[1];
  const fallbackBody = fallback[2];

  if (Array.isArray(record)) {
    return {
      number: readableValue(record[0], fallbackNumber),
      title: readableValue(record[1], fallbackTitle),
      body: readableValue(record[2], fallbackBody),
    };
  }

  return {
    number: namedValue(record, ['number', 'index', 'label', 'id'], fallbackNumber),
    title: namedValue(record, ['title', 'heading', 'name'], fallbackTitle),
    body: namedValue(record, ['text', 'description', 'body', 'content'], fallbackBody),
  };
}

function SiteHeader({ current, catalog }) {
  const links = [
    ['about', '#/about'],
    ['founder', '#/founder'],
    ['manifesto', '#/manifesto'],
  ];

  return html`
    <header style=${{ background: colors.white, borderBottom: `1px solid ${colors.border}` }}>
      <div style=${{
        alignItems: 'center',
        display: 'flex',
        gap: '24px',
        justifyContent: 'space-between',
        margin: '0 auto',
        maxWidth: '1080px',
        padding: '18px 24px',
      }}>
        <a href="#/" aria-label=${catalog.navigation.homeLabel} style=${{
          color: colors.navy,
          fontSize: '1.05rem',
          fontWeight: 800,
          letterSpacing: '0.04em',
          textDecoration: 'none',
        }}>SPQE</a>
        <nav aria-label=${catalog.navigation.sectionLabel}>
          <ul style=${{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '6px',
            listStyle: 'none',
            margin: 0,
            padding: 0,
          }}>
            ${links.map(([key, href]) => html`
              <li key=${href}>
                <a href=${href} aria-current=${current === key ? 'page' : undefined} style=${{
                  background: current === key ? colors.softBlue : 'transparent',
                  borderRadius: '8px',
                  color: colors.blue,
                  display: 'inline-block',
                  fontWeight: 700,
                  minHeight: '44px',
                  padding: '10px 12px',
                  textDecoration: current === key ? 'underline' : 'none',
                }}>${catalog.navigation[key]}</a>
              </li>
            `)}
          </ul>
        </nav>
      </div>
    </header>
  `;
}

function PageIntro({ page }) {
  return html`
    <section aria-labelledby="page-title" style=${{ marginBottom: '34px', maxWidth: '760px' }}>
      <p style=${{
        color: colors.blue,
        fontSize: '0.82rem',
        fontWeight: 800,
        letterSpacing: '0.12em',
        margin: '0 0 10px',
        textTransform: 'uppercase',
      }}>${page.eyebrow}</p>
      <h1 id="page-title" style=${{
        fontSize: 'clamp(2.2rem, 5vw, 4rem)',
        letterSpacing: '-0.045em',
        lineHeight: 1.08,
        margin: 0,
      }}>${page.title}</h1>
      <p style=${{ color: colors.muted, fontSize: '1.1rem', margin: '18px 0 0' }}>${page.intro}</p>
    </section>
  `;
}

export function AboutPage({ locale = 'en', content } = {}) {
  const catalog = selectedCatalog(locale, content);
  const language = locale === 'fr' ? 'fr' : 'en';
  const page = catalog.about;
  const fallbackPrinciples = fallbackCatalog[language].about.principles;
  const principles = requiredArray(page.principles, fallbackPrinciples);

  return html`
    <div style=${pageStyle}>
      <${SiteHeader} current="about" catalog=${catalog} />
      <main style=${containerStyle}>
        <${PageIntro} page=${page} />
        <section aria-label=${page.eyebrow} style=${{
          display: 'grid',
          gap: '22px',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        }}>
          ${principles.map((record, index) => {
            const entry = aboutPrinciple(record, fallbackPrinciples[index] || fallbackPrinciples[0]);
            return html`
              <article key=${`${entry.title}-${index}`} style=${cardStyle}>
                <h2 style=${{ fontSize: '1.3rem', marginTop: 0 }}>${entry.title}</h2>
                <p style=${{ color: colors.muted, marginBottom: 0 }}>${entry.body}</p>
              </article>
            `;
          })}
        </section>
        <section aria-labelledby="working-with-us-title" style=${{ ...cardStyle, marginTop: '28px' }}>
          <h2 id="working-with-us-title" style=${{ fontSize: '1.5rem', marginTop: 0 }}>${page.workingTitle}</h2>
          <p style=${{ color: colors.muted, marginBottom: 0 }}>${page.workingBody}</p>
        </section>
      </main>
    </div>
  `;
}

export function FounderPage({ locale = 'en', content } = {}) {
  const catalog = selectedCatalog(locale, content);
  const language = locale === 'fr' ? 'fr' : 'en';
  const page = catalog.founder;
  const paragraphs = requiredArray(page.paragraphs, fallbackCatalog[language].founder.paragraphs);
  const fallbackCv = fallbackCatalog[language].founder.cv;
  const cv = requiredArray(page.cv, fallbackCv);

  return html`
    <div style=${pageStyle}>
      <${SiteHeader} current="founder" catalog=${catalog} />
      <main style=${containerStyle}>
        <${PageIntro} page=${page} />
        <section aria-labelledby="founder-profile-title" style=${{
          alignItems: 'start',
          display: 'grid',
          gap: '30px',
          gridTemplateColumns: 'minmax(220px, 0.8fr) minmax(0, 1.2fr)',
        }}>
          <figure style=${{ ...cardStyle, margin: 0, padding: '16px' }}>
            <img src="/founder-photo-placeholder.svg" alt=${page.imageAlt} style=${{
              background: colors.softBlue,
              borderRadius: '12px',
              display: 'block',
              minHeight: '280px',
              objectFit: 'cover',
              width: '100%',
            }} />
            <figcaption style=${{ color: colors.muted, fontSize: '0.88rem', marginTop: '12px' }}>
              ${page.photoNotice}
            </figcaption>
          </figure>
          <article style=${cardStyle}>
            <h2 id="founder-profile-title" style=${{ fontSize: '1.55rem', marginTop: 0 }}>${page.profileTitle}</h2>
            ${paragraphs.map((paragraph, index) => html`
              <p key=${`${paragraph}-${index}`} style=${{ color: colors.muted }}>${paragraph}</p>
            `)}
          </article>
        </section>
        <section aria-labelledby="cv-title" style=${{ marginTop: '30px' }}>
          <h2 id="cv-title" style=${{ fontSize: '1.5rem' }}>${page.cvTitle}</h2>
          <div style=${{
            display: 'grid',
            gap: '18px',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          }}>
            ${cv.map((record, index) => {
              const entry = cvEntry(record, fallbackCv[index] || fallbackCv[0]);
              return html`
                <article key=${`${entry.title}-${index}`} style=${cardStyle}>
                  <h3 style=${{ marginTop: 0 }}>${entry.title}</h3>
                  <p style=${{ color: colors.muted, marginBottom: 0 }}>${entry.body}</p>
                </article>
              `;
            })}
          </div>
        </section>
      </main>
    </div>
  `;
}

export function ManifestoPage({ locale = 'en', content } = {}) {
  const catalog = selectedCatalog(locale, content);
  const language = locale === 'fr' ? 'fr' : 'en';
  const page = catalog.manifesto;
  const fallbackPrinciples = fallbackCatalog[language].manifesto.principles;
  const principles = requiredArray(page.principles, fallbackPrinciples);

  return html`
    <div style=${pageStyle}>
      <${SiteHeader} current="manifesto" catalog=${catalog} />
      <main style=${containerStyle}>
        <${PageIntro} page=${page} />
        <section aria-label=${page.eyebrow} style=${{
          display: 'grid',
          gap: '18px',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        }}>
          ${principles.map((record, index) => {
            const entry = manifestoPrinciple(
              record,
              fallbackPrinciples[index] || fallbackPrinciples[0],
            );
            return html`
              <article key=${`${entry.number}-${index}`} style=${cardStyle}>
                <p style=${{
                  color: colors.blue,
                  fontSize: '0.84rem',
                  fontWeight: 800,
                  margin: '0 0 8px',
                }}>${entry.number}</p>
                <h2 style=${{ fontSize: '1.35rem', margin: '0 0 10px' }}>${entry.title}</h2>
                <p style=${{ color: colors.muted, marginBottom: 0 }}>${entry.body}</p>
              </article>
            `;
          })}
        </section>
        <aside aria-labelledby="manifesto-close-title" style=${{
          ...cardStyle,
          background: colors.softBlue,
          marginTop: '30px',
        }}>
          <h2 id="manifesto-close-title" style=${{ fontSize: '1.4rem', marginTop: 0 }}>
            ${page.closingTitle}
          </h2>
          <p style=${{ color: colors.navy, marginBottom: 0 }}>${page.closingBody}</p>
        </aside>
      </main>
    </div>
  `;
}
