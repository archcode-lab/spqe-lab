
import React, { useId, useMemo, useState } from 'react';
import htm from 'htm';

const html = htm.bind(React.createElement);

const FILTERS = [
  { value: 'all', label: 'All work' },
  { value: 'product', label: 'Product design' },
  { value: 'brand', label: 'Brand systems' },
  { value: 'web', label: 'Web experiences' },
];

const STATUS_LABELS = {
  live: 'Live project',
  selected: 'Selected case study',
  archived: 'Archive',
  confidential: 'Confidential',
};

function projectTypeLabel(type) {
  const item = FILTERS.find((filter) => filter.value === type);
  return item ? item.label : 'Independent work';
}

function visualFor(project) {
  const palette = project.palette || ['#dcecff', '#8fb4e9', '#18365c'];
  const shape = project.visual || 'orb';

  if (shape === 'editorial') {
    return html`
      <div className="portfolio-visual portfolio-visual--editorial" aria-hidden="true"
        style=${{ '--visual-a': palette[0], '--visual-b': palette[1], '--visual-c': palette[2] }}>
        <span className="portfolio-visual__line"></span>
        <span className="portfolio-visual__headline">A considered<br />point of view</span>
        <span className="portfolio-visual__caption">Editorial system</span>
      </div>
    `;
  }

  if (shape === 'interface') {
    return html`
      <div className="portfolio-visual portfolio-visual--interface" aria-hidden="true"
        style=${{ '--visual-a': palette[0], '--visual-b': palette[1], '--visual-c': palette[2] }}>
        <span className="portfolio-visual__browser">
          <span className="portfolio-visual__dots"><i></i><i></i><i></i></span>
          <span className="portfolio-visual__panel portfolio-visual__panel--wide"></span>
          <span className="portfolio-visual__panel"></span>
          <span className="portfolio-visual__panel"></span>
        </span>
      </div>
    `;
  }

  return html`
    <div className="portfolio-visual portfolio-visual--orb" aria-hidden="true"
      style=${{ '--visual-a': palette[0], '--visual-b': palette[1], '--visual-c': palette[2] }}>
      <span className="portfolio-visual__grid"></span>
      <span className="portfolio-visual__orb"></span>
      <span className="portfolio-visual__square"></span>
    </div>
  `;
}

export function PortfolioFilters({ activeFilter = 'all', onChange, counts = {} }) {
  const labelId = useId();

  return html`
    <div className="portfolio-filters" aria-labelledby=${labelId}>
      <p className="portfolio-filters__label" id=${labelId}>Browse by discipline</p>
      <div className="portfolio-filters__controls" role="group" aria-label="Portfolio categories">
        ${FILTERS.map((filter) => {
          const isActive = activeFilter === filter.value;
          const count = counts[filter.value];
          return html`
            <button
              className=${`portfolio-filter${isActive ? ' is-active' : ''}`}
              type="button"
              aria-pressed=${isActive}
              onClick=${() => onChange && onChange(filter.value)}
              key=${filter.value}
            >
              <span>${filter.label}</span>
              ${typeof count === 'number' ? html`<small>${count}</small>` : null}
            </button>
          `;
        })}
      </div>
    </div>
  `;
}

export function PortfolioActions({ project, onOpenCaseStudy, onInquiry }) {
  const title = project && project.title ? project.title : 'this project';
  const caseStudyAvailable = Boolean(project && project.caseStudyAvailable);

  return html`
    <div className="portfolio-actions">
      ${caseStudyAvailable ? html`
        <button
          className="button button--secondary"
          type="button"
          onClick=${() => onOpenCaseStudy && onOpenCaseStudy(project)}
          aria-label=${`Read the case study for ${title}`}
        >
          Read case study
        </button>
      ` : html`
        <span className="portfolio-actions__note">Details available on request</span>
      `}
      <button
        className="button button--text"
        type="button"
        onClick=${() => onInquiry && onInquiry(project)}
        aria-label=${`Ask about work related to ${title}`}
      >
        Discuss a similar project <span aria-hidden="true">→</span>
      </button>
    </div>
  `;
}

export function PortfolioCard({ project, onOpenCaseStudy, onInquiry }) {
  if (!project) {
    return null;
  }

  const status = STATUS_LABELS[project.status] || STATUS_LABELS.selected;
  const services = Array.isArray(project.services) ? project.services : [];

  return html`
    <article className="portfolio-card">
      <div className="portfolio-card__media">
        ${visualFor(project)}
        <div className="portfolio-card__badges">
          <span className="portfolio-card__status">
            <span className="portfolio-card__status-dot" aria-hidden="true"></span>
            ${status}
          </span>
          <span className="portfolio-card__type">${projectTypeLabel(project.type)}</span>
        </div>
      </div>
      <div className="portfolio-card__body">
        <header className="portfolio-card__header">
          <div>
            <p className="portfolio-card__eyebrow">${project.client || 'Independent collaboration'}</p>
            <h3 className="portfolio-card__title">${project.title || 'Untitled project'}</h3>
          </div>
          ${project.year ? html`<span className="portfolio-card__year">${project.year}</span>` : null}
        </header>
        ${project.summary ? html`<p className="portfolio-card__summary">${project.summary}</p>` : null}
        ${services.length ? html`
          <ul className="portfolio-card__services" aria-label=${`Services for ${project.title || 'project'}`}>
            ${services.map((service) => html`<li key=${service}>${service}</li>`)}
          </ul>
        ` : null}
        <${PortfolioActions}
          project=${project}
          onOpenCaseStudy=${onOpenCaseStudy}
          onInquiry=${onInquiry}
        />
      </div>
    </article>
  `;
}

export function PortfolioGrid({
  projects = [],
  initialFilter = 'all',
  onOpenCaseStudy,
  onInquiry,
  emptyMessage = 'No projects match this category yet.',
}) {
  const [activeFilter, setActiveFilter] = useState(initialFilter);
  const safeProjects = Array.isArray(projects) ? projects : [];

  const counts = useMemo(() => {
    const nextCounts = { all: safeProjects.length };
    FILTERS.forEach((filter) => {
      if (filter.value !== 'all') {
        nextCounts[filter.value] = safeProjects.filter((project) => project.type === filter.value).length;
      }
    });
    return nextCounts;
  }, [safeProjects]);

  const visibleProjects = useMemo(() => {
    if (activeFilter === 'all') {
      return safeProjects;
    }
    return safeProjects.filter((project) => project.type === activeFilter);
  }, [activeFilter, safeProjects]);

  return html`
    <section className="portfolio-browser" aria-label="Portfolio projects">
      <${PortfolioFilters}
        activeFilter=${activeFilter}
        onChange=${setActiveFilter}
        counts=${counts}
      />
      ${visibleProjects.length ? html`
        <div className="portfolio-grid">
          ${visibleProjects.map((project) => html`
            <${PortfolioCard}
              key=${project.id || `${project.title}-${project.year}`}
              project=${project}
              onOpenCaseStudy=${onOpenCaseStudy}
              onInquiry=${onInquiry}
            />
          `)}
        </div>
      ` : html`
        <div className="portfolio-empty" role="status">
          <h3>No matching projects</h3>
          <p>${emptyMessage}</p>
          <button className="button button--secondary" type="button" onClick=${() => setActiveFilter('all')}>
            View all work
          </button>
        </div>
      `}
    </section>
  `;
}
