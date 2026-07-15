import React from "react";
import htm from "htm";

const html = htm.bind(React.createElement);

export function ButtonLink({
  children,
  className = "",
  href,
  kind = "primary",
  target,
  rel,
  ...props
}) {
  const relTokens = typeof rel === "string" ? rel.split(/\s+/) : [];
  const hasSafeRel =
    relTokens.includes("noopener") && relTokens.includes("noreferrer");
  const safeRel = target === "_blank"
    ? hasSafeRel ? rel : "noopener noreferrer"
    : rel;

  return html`
    <a
      className=${`button-link button-link--${kind} ${className}`.trim()}
      href=${href}
      target=${target}
      rel=${safeRel}
      ...${props}
    >
      <span>${children}</span>
      <span className="button-link__arrow" aria-hidden="true">→</span>
    </a>
  `;
}

export function Badge({ children, tone = "blue" }) {
  return html`
    <span className=${`badge badge--${tone}`}>${children}</span>
  `;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  as: Heading = "h2",
}) {
  return html`
    <header className=${`section-heading section-heading--${align}`}>
      ${eyebrow && html`<p className="section-heading__eyebrow">${eyebrow}</p>`}
      <${Heading} className="section-heading__title">${title}</${Heading}>
      ${description && html`
        <p className="section-heading__description">${description}</p>
      `}
    </header>
  `;
}

export function FeatureCard({
  title,
  description,
  icon,
  href,
  linkLabel = "Learn more",
  children,
}) {
  const body = html`
    <${React.Fragment}>
      ${icon && html`<div className="feature-card__icon" aria-hidden="true">${icon}</div>`}
      <h3 className="feature-card__title">${title}</h3>
      ${description && html`<p className="feature-card__description">${description}</p>`}
      ${children && html`<div className="feature-card__content">${children}</div>`}
      ${href && html`
        <span className="feature-card__link">
          ${linkLabel}<span aria-hidden="true"> →</span>
        </span>
      `}
    </${React.Fragment}>
  `;

  return href
    ? html`<a className="feature-card feature-card--link" href=${href}>${body}</a>`
    : html`<article className="feature-card">${body}</article>`;
}

export function Callout({
  title,
  children,
  tone = "info",
  label = "Important information",
}) {
  return html`
    <aside className=${`callout callout--${tone}`} aria-label=${label}>
      <div className="callout__marker" aria-hidden="true">i</div>
      <div>
        ${title && html`<h3 className="callout__title">${title}</h3>`}
        <div className="callout__content">${children}</div>
      </div>
    </aside>
  `;
}

export function EngagementCard({
  title,
  description,
  image,
  imageAlt = "",
  meta,
  href,
  actionLabel = "Explore",
}) {
  const content = html`
    <${React.Fragment}>
      ${image && html`
        <div className="engagement-card__media">
          <img src=${image} alt=${imageAlt} loading="lazy" />
        </div>
      `}
      <div className="engagement-card__body">
        ${meta && html`<p className="engagement-card__meta">${meta}</p>`}
        <h3 className="engagement-card__title">${title}</h3>
        ${description && html`
          <p className="engagement-card__description">${description}</p>
        `}
        ${href && html`
          <span className="engagement-card__action">
            ${actionLabel}<span aria-hidden="true"> →</span>
          </span>
        `}
      </div>
    </${React.Fragment}>
  `;

  return href
    ? html`<a className="engagement-card engagement-card--link" href=${href}>${content}</a>`
    : html`<article className="engagement-card">${content}</article>`;
}

export function ExternalAction({
  href,
  children,
  className = "",
  description,
  ...props
}) {
  return html`
    <a
      className=${`external-action ${className}`.trim()}
      href=${href}
      target="_blank"
      rel="noopener noreferrer"
      ...${props}
    >
      <span className="external-action__content">
        <span className="external-action__label">${children}</span>
        ${description && html`
          <span className="external-action__description">${description}</span>
        `}
      </span>
      <span className="external-action__icon" aria-hidden="true">↗</span>
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  `;
}
