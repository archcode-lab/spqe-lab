
import React, { useEffect, useMemo, useRef, useState } from "react";
import htm from "htm";
import {
    localeFromRoute,
    mapRouteToLocale,
    readStoredLocale,
    storeLocale,
} from "./lib/locale.js";
import { SITE_CONFIG } from "./config/site-config.js";
import { SITE_CONTENT } from "./content/site-content.js";
import { PORTFOLIO_ITEMS } from "./content/portfolio.js";
import { submitContactRequest } from "./lib/contact.js";
import SiteShell from "./components/SiteShell.js";
import HomePage from "./pages/HomePage.js";
import ServicesPage from "./pages/ServicesPage.js";
import {
    ApplicationDetailPage,
    ApplicationsPage,
} from "./pages/ApplicationsPages.js";
import {
    AboutPage,
    FounderPage,
    ManifestoPage,
} from "./pages/AboutPages.js";
import {
    AccessibilityPage,
    ContactPage,
    LegalPage,
    PrivacyPage,
} from "./pages/ContactAndPolicyPages.js";

const html = htm.bind(React.createElement);

const ROUTES = [
    { path: "/en", key: "home" },
    { path: "/en/applications", key: "applications" },
    { path: "/en/services", key: "services" },
    { path: "/en/about", key: "about" },
    { path: "/en/about/founder", key: "founder" },
    { path: "/en/about/manifesto", key: "manifesto" },
    { path: "/en/contact", key: "contact" },
    { path: "/en/privacy", key: "privacy" },
    { path: "/en/legal", key: "legal" },
    { path: "/en/accessibility", key: "accessibility" },
];

function normalizePath(value) {
    const path = (value || "/")
        .replace(/^#/, "")
        .split("?")[0]
        .replace(/\/+$/, "") || "/";
    return path.startsWith("/") ? path : `/${path}`;
}

function useHashRoute() {
    const [path, setPath] = useState(() => normalizePath(window.location.hash));

    useEffect(() => {
        const update = () => setPath(normalizePath(window.location.hash));
        window.addEventListener("hashchange", update);
        return () => window.removeEventListener("hashchange", update);
    }, []);

    return path;
}

function routeForPath(path) {
    const canonicalPath = normalizePath(mapRouteToLocale(path, "en"));

    if (canonicalPath.startsWith("/en/applications/")) {
        return { key: "applicationDetail", path: canonicalPath };
    }

    const route = ROUTES.find((item) => item.path === canonicalPath);
    return route ? { ...route, path: canonicalPath } : null;
}

function portfolioForSlug(slug) {
    return PORTFOLIO_ITEMS.find((item) => item.slug === slug) || null;
}

function routeLabel(record) {
    if (typeof record === "string") {
        return record;
    }
    return record?.title || "";
}

function localizedValue(value, locale) {
    if (typeof value === "string") {
        return value;
    }
    return value?.[locale] || value?.en || "";
}

function configuredContact() {
    const nested = SITE_CONFIG.contact || {};
    const urls = SITE_CONFIG.urls || {};
    return {
        endpoint:
            SITE_CONFIG.contactEndpoint ||
            nested.endpoint ||
            nested.contactEndpoint ||
            urls.contactEndpoint ||
            "",
        recipient:
            SITE_CONFIG.contactEmail ||
            nested.recipient ||
            nested.email ||
            nested.contactEmail ||
            "",
    };
}

function NotFoundPage({ notFound, locale }) {
    const homeHref = locale === "fr" ? "#/fr" : "#/en";
    const applicationsHref = locale === "fr"
        ? "#/fr/applications"
        : "#/en/applications";
    const actionLabel = notFound.action?.label
        || notFound.returnHome
        || (locale === "fr" ? "Retour à l’accueil" : "Return home");

    return html`
        <section className="page-header">
            <div className="shell narrow">
                <p className="eyebrow">SPQE Lab</p>
                <h1>${notFound.title}</h1>
                ${notFound.body && html`<p>${notFound.body}</p>`}
                <div className="hero__actions">
                    <a className="button button--primary" href=${homeHref}>
                        ${actionLabel}
                    </a>
                    <a className="button button--secondary" href=${applicationsHref}>
                        ${locale === "fr" ? "Voir les applications" : "Open Applications"}
                    </a>
                </div>
            </div>
        </section>
    `;
}

function App() {
    const currentPath = useHashRoute();
    const [locale, setLocale] = useState(() => {
        const routeLocale = localeFromRoute(currentPath);
        if (routeLocale) {
            return routeLocale;
        }
        return readStoredLocale() === "fr" ? "fr" : "en";
    });
    const routeHeadingRef = useRef(null);
    const route = useMemo(() => routeForPath(currentPath), [currentPath]);
    const selectedLocaleContent = SITE_CONTENT[locale];
    const notFound = selectedLocaleContent.notFound;
    const contactConfig = configuredContact();
    const application = route?.key === "applicationDetail"
        ? portfolioForSlug(route.path.split("/").pop())
        : null;
    const pageTitle = application
        ? localizedValue(application.title, locale)
        : route
            ? routeLabel(selectedLocaleContent[route.key])
            : notFound.title;
    const siteName = selectedLocaleContent.metadata?.siteName || "SPQE Lab";

    useEffect(() => {
        const explicitLocale = localeFromRoute(currentPath);

        if (currentPath === "/") {
            const initialLocale = readStoredLocale() === "fr" ? "fr" : "en";
            window.location.hash = initialLocale === "fr" ? "#/fr" : "#/en";
            return;
        }

        if (explicitLocale && explicitLocale !== locale) {
            setLocale(explicitLocale);
            return;
        }

        if (!explicitLocale) {
            const canonicalPath = normalizePath(mapRouteToLocale(currentPath, locale));
            if (canonicalPath !== currentPath) {
                window.location.hash = `#${canonicalPath}`;
            }
        }
    }, [currentPath, locale]);

    useEffect(() => {
        document.documentElement.lang = locale;
        document.title = `${pageTitle} | ${siteName}`;
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
        const frame = window.requestAnimationFrame(() => {
            routeHeadingRef.current?.focus();
        });
        return () => window.cancelAnimationFrame(frame);
    }, [currentPath, locale, pageTitle, siteName]);

    const changeLocale = (requestedLocale) => {
        const nextLocale = requestedLocale === "fr" ? "fr" : "en";
        if (nextLocale === locale) {
            return;
        }

        const equivalentPath = normalizePath(
            mapRouteToLocale(currentPath, nextLocale),
        );

        storeLocale(nextLocale);
        setLocale(nextLocale);
        window.location.hash = `#${equivalentPath}`;
    };

    const submitContact = (values, overrides = {}) => submitContactRequest(values, {
        endpoint: overrides.endpoint || contactConfig.endpoint,
        recipient: overrides.recipient || contactConfig.recipient,
    });

    let page = html`<${NotFoundPage} notFound=${notFound} locale=${locale} />`;

    if (route?.key === "home") {
        page = html`
            <${HomePage}
                locale=${locale}
                content=${selectedLocaleContent}
                portfolio=${PORTFOLIO_ITEMS}
            />
        `;
    } else if (route?.key === "applications") {
        page = html`
            <${ApplicationsPage}
                locale=${locale}
                content=${selectedLocaleContent}
                portfolio=${PORTFOLIO_ITEMS}
            />
        `;
    } else if (application) {
        page = html`
            <${ApplicationDetailPage}
                locale=${locale}
                content=${selectedLocaleContent}
                application=${application}
            />
        `;
    } else if (route?.key === "services") {
        page = html`<${ServicesPage} locale=${locale} content=${SITE_CONTENT} />`;
    } else if (route?.key === "about") {
        page = html`<${AboutPage} locale=${locale} content=${selectedLocaleContent} />`;
    } else if (route?.key === "founder") {
        page = html`<${FounderPage} locale=${locale} content=${selectedLocaleContent} />`;
    } else if (route?.key === "manifesto") {
        page = html`<${ManifestoPage} locale=${locale} content=${selectedLocaleContent} />`;
    } else if (route?.key === "contact") {
        page = html`
            <${ContactPage}
                locale=${locale}
                content=${SITE_CONTENT}
                configuration=${contactConfig}
                onSubmit=${submitContact}
            />
        `;
    } else if (route?.key === "privacy") {
        page = html`<${PrivacyPage} locale=${locale} content=${SITE_CONTENT} />`;
    } else if (route?.key === "legal") {
        page = html`<${LegalPage} locale=${locale} content=${SITE_CONTENT} />`;
    } else if (route?.key === "accessibility") {
        page = html`
            <${AccessibilityPage} locale=${locale} content=${SITE_CONTENT} />
        `;
    }

    return html`
        <${SiteShell}
            locale=${locale}
            currentPath=${currentPath}
            content=${selectedLocaleContent}
            routes=${ROUTES}
            onLocaleChange=${changeLocale}
        >
            <div className="route-root">
                <div
                    id="main-content"
                    className="focus-heading"
                    ref=${routeHeadingRef}
                    tabIndex="-1"
                    aria-label=${pageTitle}
                ></div>
                ${page}
            </div>
        </${SiteShell}>
    `;
}

export default App;
export { App };
