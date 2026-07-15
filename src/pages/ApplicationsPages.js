import React, { useMemo, useState } from "react";
import { html } from "htm/react";

const COPY = {
    en: {
        all: "All",
        catalogEyebrow: "Selected applications",
        catalogTitle: "Practical products, thoughtfully delivered.",
        catalogCopy: "A focused collection of digital work shaped around clear problems, useful outcomes, and sustainable product decisions.",
        search: "Search applications",
        filter: "Filter applications",
        category: "Application category",
        shown: "shown",
        application: "application",
        applications: "applications",
        noMatches: "No matching applications",
        noMatchesCopy: "Try another search term or choose a different category.",
        clear: "Clear filters",
        view: "View case study",
        readCaseStudy: "Read the {title} case study",
        status: "Project status: {status}",
        back: "All applications",
        unavailableEyebrow: "Application not found",
        unavailableTitle: "That case study is unavailable.",
        unavailableCopy: "The requested case study is not available in this portfolio.",
        returnToCatalog: "Return to applications",
        focusAreas: "Focus areas",
        problem: "The problem",
        users: "Who it helps",
        solution: "The solution",
        evidence: "Evidence",
        limits: "Limits and considerations",
        availability: "Availability",
        available: "A public application link is available.",
        unavailable: "A public application link is not currently available.",
        explore: "Explore the application",
        exploreCopy: "Visit the published application in a new tab.",
        visit: "Visit application",
        moreWork: "More work",
        related: "Related applications",
        inProgress: "In progress",
        problemFallback: "{title} addresses the product context described in this case study.",
        usersFallback: "{title} is shaped for the people and context identified by the project.",
        solutionFallback: "The project details describe the approach used for {title}.",
        evidenceFallback: "The documented role and outcomes provide the available evidence for {title}.",
        limitsFallback: "Further delivery considerations are recorded with the {title} case study.",
    },
    fr: {
        all: "Toutes",
        catalogEyebrow: "Applications sélectionnées",
        catalogTitle: "Des produits utiles, conçus avec attention.",
        catalogCopy: "Une sélection de travaux numériques centrés sur des problèmes clairs, des résultats utiles et des décisions produit durables.",
        search: "Rechercher des applications",
        filter: "Filtrer les applications",
        category: "Catégorie d’application",
        shown: "affichée(s)",
        application: "application",
        applications: "applications",
        noMatches: "Aucune application correspondante",
        noMatchesCopy: "Essayez un autre terme ou choisissez une autre catégorie.",
        clear: "Effacer les filtres",
        view: "Voir l’étude de cas",
        readCaseStudy: "Lire l’étude de cas de {title}",
        status: "Statut du projet : {status}",
        back: "Toutes les applications",
        unavailableEyebrow: "Application introuvable",
        unavailableTitle: "Cette étude de cas est indisponible.",
        unavailableCopy: "L’étude de cas demandée n’est pas disponible dans ce portfolio.",
        returnToCatalog: "Retour aux applications",
        focusAreas: "Domaines clés",
        problem: "Le problème",
        users: "Public concerné",
        solution: "La solution",
        evidence: "Éléments de preuve",
        limits: "Limites et considérations",
        availability: "Disponibilité",
        available: "Un lien public vers l’application est disponible.",
        unavailable: "Aucun lien public vers l’application n’est disponible actuellement.",
        explore: "Explorer l’application",
        exploreCopy: "Ouvrez l’application publiée dans un nouvel onglet.",
        visit: "Visiter l’application",
        moreWork: "Autres réalisations",
        related: "Applications similaires",
        inProgress: "En cours",
        problemFallback: "{title} répond au contexte produit décrit dans cette étude de cas.",
        usersFallback: "{title} est conçu pour les personnes et le contexte identifiés par le projet.",
        solutionFallback: "Les détails du projet présentent l’approche utilisée pour {title}.",
        evidenceFallback: "Le rôle et les résultats documentés constituent les éléments disponibles pour {title}.",
        limitsFallback: "Les considérations de réalisation sont consignées dans l’étude de cas de {title}.",
    },
};

function languageFor(locale) {
    return locale === "fr" ? "fr" : "en";
}

function formatCopy(value, title) {
    return value.replace("{title}", title || "");
}

function textFor(value, locale) {
    if (typeof value === "string") {
        return value.trim();
    }
    if (Array.isArray(value)) {
        return value.map((item) => textFor(item, locale)).filter(Boolean).join(" ");
    }
    if (!value || typeof value !== "object") {
        return "";
    }

    const language = languageFor(locale);
    return textFor(
        value[language] || value.en || value.fr || value.default || value.text,
        language,
    );
}

function fieldValue(application, field, locale) {
    const language = languageFor(locale);
    const localized = application?.locales?.[language]
        || application?.content?.[language]
        || application?.translations?.[language]
        || {};

    return textFor(
        localized?.[field]
        || application?.content?.[field]
        || application?.[field],
        language,
    );
}

function recordValue(application, fields, locale) {
    for (const field of fields) {
        const value = fieldValue(application, field, locale);
        if (value) {
            return value;
        }
    }
    return "";
}

function applicationsFor(portfolio, content) {
    if (Array.isArray(portfolio)) {
        return portfolio;
    }
    if (Array.isArray(content?.portfolio)) {
        return content.portfolio;
    }
    if (Array.isArray(content?.applications)) {
        return content.applications;
    }
    return [];
}

function applicationPath(application, locale) {
    const prefix = locale === 'fr' ? '/fr' : '/en';
    return `#${prefix}/applications/${application.slug}`;
}

function safeUrl(application) {
    const urls = application?.urls || application?.links || {};
    const value = urls.live
        || urls.public
        || urls.application
        || application?.url
        || application?.publicUrl;

    return typeof value === "string" && value.trim() ? value.trim() : "";
}

function imageSource(application, locale) {
    const image = application?.image || fieldValue(application, "image", locale);
    if (typeof image === "string") {
        return image.trim();
    }
    if (image && typeof image === "object") {
        return textFor(image.src || image.url || image.path, locale);
    }
    return "";
}

function imageAlternative(application, locale, title) {
    const image = application?.image;
    return recordValue(application, ["imageAlt", "alt"], locale)
        || textFor(image?.alt || image?.description, locale)
        || `${title} application preview`;
}

function readableStatus(application, locale, labels) {
    const status = recordValue(application, ["status", "stage"], locale);

    if (!status) {
        return labels.inProgress;
    }
    return status.replace(/[-_]/g, " ");
}

function detailSections(application, locale, labels, title) {
    const detail = recordValue(
        application,
        ["detail", "description", "summary"],
        locale,
    );
    const role = recordValue(
        application,
        ["role", "intendedUsers", "users", "audience", "context"],
        locale,
    );
    const outcomes = recordValue(
        application,
        ["outcomes", "evidence", "results", "impact"],
        locale,
    );
    const problem = recordValue(application, ["problem"], locale) || detail
        || formatCopy(labels.problemFallback, title);
    const users = recordValue(
        application,
        ["users", "intendedUsers", "audience", "context", "role"],
        locale,
    ) || role || formatCopy(labels.usersFallback, title);
    const solution = recordValue(application, ["solution", "approach"], locale)
        || detail || formatCopy(labels.solutionFallback, title);
    const evidence = recordValue(
        application,
        ["evidence", "outcomes", "results", "impact"],
        locale,
    ) || outcomes || role || formatCopy(labels.evidenceFallback, title);
    const limits = recordValue(
        application,
        ["limits", "considerations", "constraints", "nextSteps"],
        locale,
    ) || outcomes || detail || formatCopy(labels.limitsFallback, title);

    return [
        [labels.problem, problem],
        [labels.users, users],
        [labels.solution, solution],
        [labels.evidence, evidence],
        [labels.limits, limits],
    ];
}

function StatusBadge({ application, locale, labels }) {
    const status = readableStatus(application, locale, labels);

    return html`
        <span className="application-status" aria-label=${labels.status.replace("{status}", status)}>
            <span aria-hidden="true" className="application-status__dot"></span>
            ${status}
        </span>
    `;
}

function tagsFor(application, locale) {
    const tags = application?.tags || application?.technologies || fieldValue(application, "tags", locale);
    return Array.isArray(tags) ? tags : [];
}

function ApplicationCard({ application, locale, labels, onSelect }) {
    const title = recordValue(application, ["title", "name"], locale);
    const summary = recordValue(application, ["summary", "description", "detail"], locale);
    const category = recordValue(application, ["category", "type"], locale);
    const tags = tagsFor(application, locale);

    return html`
        <article className="application-card">
            <div className="application-card__topline">
                <span className="application-card__category">${category}</span>
                <${StatusBadge} application=${application} locale=${locale} labels=${labels} />
            </div>
            <h2 className="application-card__title">${title}</h2>
            ${summary && html`<p className="application-card__summary">${summary}</p>`}
            ${tags.length > 0 && html`
                <ul className="application-tags" aria-label=${`${title} technologies`}>
                    ${tags.map((tag) => html`<li key=${textFor(tag, locale)}>${textFor(tag, locale)}</li>`)}
                </ul>
            `}
            <a
                className="application-card__link"
                href=${applicationPath(application, locale)}
                onClick=${(event) => {
                    if (onSelect) {
                        event.preventDefault();
                        onSelect(application);
                    }
                }}
                aria-label=${labels.readCaseStudy.replace("{title}", title)}
            >
                ${labels.view} <span aria-hidden="true">→</span>
            </a>
        </article>
    `;
}

export function ApplicationsPage({ locale, content, portfolio, onSelectApplication }) {
    const language = languageFor(locale);
    const labels = COPY[language];
    const catalog = applicationsFor(portfolio, content);
    const [query, setQuery] = useState("");
    const [category, setCategory] = useState(labels.all);
    const categories = useMemo(() => [
        labels.all,
        ...new Set(catalog.map((application) => (
            recordValue(application, ["category", "type"], language)
        )).filter(Boolean)),
    ], [catalog, labels.all, language]);
    const normalizedQuery = query.trim().toLowerCase();

    const applications = useMemo(() => catalog.filter((application) => {
        const tags = tagsFor(application, language).map((tag) => textFor(tag, language));
        const applicationCategory = recordValue(application, ["category", "type"], language);
        const searchable = [
            recordValue(application, ["title", "name"], language),
            recordValue(application, ["summary", "description", "detail"], language),
            applicationCategory,
            ...tags,
        ].filter(Boolean).join(" ").toLowerCase();

        return (category === labels.all || applicationCategory === category)
            && (!normalizedQuery || searchable.includes(normalizedQuery));
    }), [catalog, category, labels.all, language, normalizedQuery]);

    return html`
        <main className="applications-page">
            <header className="applications-hero">
                <p className="eyebrow">${labels.catalogEyebrow}</p>
                <h1>${labels.catalogTitle}</h1>
                <p className="applications-hero__copy">${labels.catalogCopy}</p>
            </header>

            <section className="applications-controls" aria-label=${labels.filter}>
                <label className="application-search">
                    <span className="sr-only">${labels.search}</span>
                    <input
                        type="search"
                        value=${query}
                        onInput=${(event) => setQuery(event.target.value)}
                        placeholder=${labels.search}
                    />
                </label>
                <div className="application-filter" role="group" aria-label=${labels.category}>
                    ${categories.map((item) => html`
                        <button
                            key=${item}
                            type="button"
                            className=${item === category ? "is-active" : ""}
                            aria-pressed=${item === category}
                            onClick=${() => setCategory(item)}
                        >${item}</button>
                    `)}
                </div>
            </section>

            <section aria-live="polite" aria-label=${labels.applications}>
                <p className="applications-count">
                    ${applications.length} ${applications.length === 1 ? labels.application : labels.applications} ${labels.shown}
                </p>
                ${applications.length > 0 ? html`
                    <div className="applications-grid">
                        ${applications.map((application) => html`
                            <${ApplicationCard}
                                key=${application.slug}
                                application=${application}
                                locale=${language}
                                labels=${labels}
                                onSelect=${onSelectApplication}
                            />
                        `)}
                    </div>
                ` : html`
                    <div className="applications-empty">
                        <h2>${labels.noMatches}</h2>
                        <p>${labels.noMatchesCopy}</p>
                        <button type="button" onClick=${() => {
                            setQuery("");
                            setCategory(labels.all);
                        }}>${labels.clear}</button>
                    </div>
                `}
            </section>
        </main>
    `;
}

export function ApplicationDetailPage({
    application,
    locale,
    content,
    portfolio,
    onBack,
    onSelectApplication,
}) {
    const language = languageFor(locale);
    const labels = COPY[language];
    const catalog = applicationsFor(portfolio, content);

    if (!application) {
        return html`
            <main className="application-detail application-detail--missing">
                <p className="eyebrow">${labels.unavailableEyebrow}</p>
                <h1>${labels.unavailableTitle}</h1>
                <p>${labels.unavailableCopy}</p>
                <a href=${locale === 'fr' ? '#/fr/applications' : '#/en/applications'} onClick=${(event) => {
                    if (onBack) {
                        event.preventDefault();
                        onBack();
                    }
                }}>${labels.returnToCatalog}</a>
            </main>
        `;
    }

    const title = recordValue(application, ["title", "name"], language);
    const summary = recordValue(application, ["summary", "description", "detail"], language);
    const category = recordValue(application, ["category", "type"], language);
    const image = imageSource(application, language);
    const imageAlt = imageAlternative(application, language, title);
    const tags = tagsFor(application, language);
    const url = safeUrl(application);
    const sections = detailSections(application, language, labels, title);
    const related = catalog
        .filter((item) => item.slug !== application.slug
            && recordValue(item, ["category", "type"], language) === category)
        .slice(0, 3);

    return html`
        <main className="application-detail">
            <a className="back-link" href=${locale === 'fr' ? '#/fr/applications' : '#/en/applications'} onClick=${(event) => {
                if (onBack) {
                    event.preventDefault();
                    onBack();
                }
            }}>
                <span aria-hidden="true">←</span> ${labels.back}
            </a>

            <header className="application-detail__hero">
                <div>
                    <p className="eyebrow">${category}</p>
                    <h1>${title}</h1>
                    ${summary && html`<p className="application-detail__summary">${summary}</p>`}
                </div>
                <${StatusBadge} application=${application} locale=${language} labels=${labels} />
            </header>

            ${image && html`
                <figure className="application-detail__image">
                    <img src=${image} alt=${imageAlt} />
                </figure>
            `}

            ${tags.length > 0 && html`
                <section className="application-detail__meta" aria-label=${labels.focusAreas}>
                    <h2>${labels.focusAreas}</h2>
                    <ul className="application-tags">
                        ${tags.map((tag) => html`<li key=${textFor(tag, language)}>${textFor(tag, language)}</li>`)}
                    </ul>
                </section>
            `}

            <div className="application-detail__sections">
                ${sections.map(([heading, body]) => html`
                    <section key=${heading} className="application-detail__section">
                        <h2>${heading}</h2>
                        <p>${body}</p>
                    </section>
                `)}
            </div>

            <section className="application-detail__action" aria-labelledby="application-action-heading">
                <h2 id="application-action-heading">${labels.availability}</h2>
                <p>${url ? labels.available : labels.unavailable}</p>
                ${url && html`
                    <div>
                        <h3>${labels.explore}</h3>
                        <p>${labels.exploreCopy}</p>
                        <a
                            className="button button--primary"
                            href=${url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            ${labels.visit} <span aria-hidden="true">↗</span>
                        </a>
                    </div>
                `}
            </section>

            ${related.length > 0 && html`
                <section className="related-applications" aria-labelledby="related-applications-heading">
                    <div className="section-heading">
                        <p className="eyebrow">${labels.moreWork}</p>
                        <h2 id="related-applications-heading">${labels.related}</h2>
                    </div>
                    <div className="applications-grid">
                        ${related.map((item) => html`
                            <${ApplicationCard}
                                key=${item.slug}
                                application=${item}
                                locale=${language}
                                labels=${labels}
                                onSelect=${onSelectApplication}
                            />
                        `)}
                    </div>
                </section>
            `}
        </main>
    `;
}
