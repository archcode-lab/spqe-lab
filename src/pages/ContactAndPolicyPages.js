import React from 'react';
import htm from 'htm';

import { ContactForm } from '../components/ContactForm';
import { submitContactRequest } from '../lib/contact.js';

const html = htm.bind(React.createElement);

function resolveLocale(locale) {
    return locale === 'fr' ? 'fr' : 'en';
}

function resolvePage(content, locale, pageName) {
    const selectedLocale = resolveLocale(locale);
    const catalog = content || {};
    const selected = catalog[selectedLocale] || catalog;
    const pages = selected.pages || {};
    return selected[pageName] || pages[pageName] || {};
}

function PageHeader({ page }) {
    return html`
        <header className="page-hero">
            <div className="page-shell">
                ${page.eyebrow && html`<p className="eyebrow">${page.eyebrow}</p>`}
                <h1>${page.title}</h1>
                ${page.description && html`<p className="page-intro">${page.description}</p>`}
            </div>
        </header>
    `;
}

function RichText({ value }) {
    if (Array.isArray(value)) {
        return html`${value.map((paragraph, index) => html`<p key=${index}>${paragraph}</p>`)}`;
    }
    return value ? html`<p>${value}</p>` : null;
}

function PolicySections({ sections }) {
    if (!Array.isArray(sections)) {
        return null;
    }

    return html`${sections.map((section, index) => {
        const heading = section.title || section.heading;
        const body = section.body || section.content || section.text;

        return html`
            <section className="content-card policy-section" key=${section.id || index}>
                ${heading && html`<h2>${heading}</h2>`}
                <${RichText} value=${body} />
                ${Array.isArray(section.items) && html`
                    <ul>
                        ${section.items.map((item, itemIndex) => html`<li key=${itemIndex}>${item}</li>`)}
                    </ul>
                `}
            </section>
        `;
    })}`;
}

function PolicyPage({ locale, content, pageName }) {
    const page = resolvePage(content, locale, pageName);
    const sections = Array.isArray(page.sections)
        ? page.sections
        : Array.isArray(page.body)
            ? page.body
            : [];

    return html`
        <main id="main-content">
            <${PageHeader} page=${page} />
            <article className="page-section">
                <div className="page-shell policy-layout">
                    <${PolicySections} sections=${sections} />
                    ${page.updated && html`<p className="policy-meta">${page.updated}</p>`}
                </div>
            </article>
        </main>
    `;
}

export function ContactPage({
    locale = 'en',
    content,
    configuration = {},
    onSubmit = submitContactRequest,
}) {
    const page = resolvePage(content, locale, 'contact');
    const contactConfiguration = configuration.contact || configuration;
    const fallbackEmail = contactConfiguration.email || contactConfiguration.contactEmail;

    return html`
        <main id="main-content">
            <${PageHeader} page=${page} />
            <section className="page-section">
                <div className="page-shell contact-layout">
                    <div className="content-card">
                        ${page.formTitle && html`<h2>${page.formTitle}</h2>`}
                        <${RichText} value=${page.introduction || page.body || page.text} />
                        <${ContactForm}
                            locale=${resolveLocale(locale)}
                            content=${page.form || page}
                            config=${contactConfiguration}
                            onSubmit=${onSubmit}
                        />
                    </div>
                    ${page.aside && html`
                        <aside className="content-card contact-aside" aria-label=${page.aside.label}>
                            ${page.aside.title && html`<h2>${page.aside.title}</h2>`}
                            <${RichText} value=${page.aside.body || page.aside.content || page.aside.text} />
                            ${Array.isArray(page.aside.items) && html`
                                <ul>
                                    ${page.aside.items.map((item, index) => html`<li key=${index}>${item}</li>`)}
                                </ul>
                            `}
                            ${fallbackEmail && page.directEmailLabel && html`
                                <p>
                                    ${page.directEmailLabel}
                                    <a href=${`mailto:${fallbackEmail}`}>${fallbackEmail}</a>
                                </p>
                            `}
                        </aside>
                    `}
                </div>
            </section>
        </main>
    `;
}

export function PrivacyPage({ locale = 'en', content, configuration }) {
    return html`
        <${PolicyPage}
            locale=${locale}
            content=${content}
            configuration=${configuration}
            pageName="privacy"
        />
    `;
}

export function LegalNoticePage({ locale = 'en', content, configuration }) {
    return html`
        <${PolicyPage}
            locale=${locale}
            content=${content}
            configuration=${configuration}
            pageName="legal"
        />
    `;
}

export function LegalPage({ locale = 'en', content, configuration }) {
    return html`
        <${LegalNoticePage}
            locale=${locale}
            content=${content}
            configuration=${configuration}
        />
    `;
}

export function AccessibilityPage({ locale = 'en', content, configuration }) {
    return html`
        <${PolicyPage}
            locale=${locale}
            content=${content}
            configuration=${configuration}
            pageName="accessibility"
        />
    `;
}

export function ServicesPage({ locale = 'en', content, configuration }) {
    return html`
        <${PolicyPage}
            locale=${locale}
            content=${content}
            configuration=${configuration}
            pageName="services"
        />
    `;
}

export function NotFoundPage({ locale = 'en', content }) {
    const page = resolvePage(content, locale, 'notFound');
    const homeHref = typeof page.homeHref === 'string' && page.homeHref.startsWith('#')
        ? page.homeHref
        : '#/';

    return html`
        <main id="main-content">
            <section className="page-section not-found-section" aria-labelledby="not-found-title">
                <div className="page-shell not-found-card">
                    ${page.eyebrow && html`<p className="eyebrow">${page.eyebrow}</p>`}
                    <h1 id="not-found-title">${page.title}</h1>
                    <${RichText} value=${page.description} />
                    <a className="button button-primary" href=${homeHref}>
                        ${page.homeLabel}
                    </a>
                </div>
            </section>
        </main>
    `;
}
