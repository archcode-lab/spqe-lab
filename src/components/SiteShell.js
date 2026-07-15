import React, { useEffect, useState } from 'react';
import htm from 'htm';

const html = htm.bind(React.createElement);

function normalizePath(value) {
  const path = String(value || '/').replace(/^#/, '');
  return path.startsWith('/') ? path : `/${path}`;
}

function toHashRoute(value) {
  const route = String(value || '/');
  return route.startsWith('#') ? route : `#${normalizePath(route)}`;
}

function navigationRecords(records) {
  return Array.isArray(records) ? records.filter((record) => (
    record && typeof record === 'object' && record.label && (record.path || record.href)
  )) : [];
}

function routePath(route) {
  return normalizePath(route.path || route.href);
}

function routeKey(route) {
  return String(route.key || route.id || route.name || routePath(route));
}

function uniqueRoutes(records) {
  const seen = new Set();
  return navigationRecords(records).filter((route) => {
    const key = routeKey(route);
    if (seen.has(key)) {
      return false;
    }
    seen.add(key);
    return true;
  });
}

function isAboutParent(route) {
  const key = routeKey(route).toLowerCase();
  return key === 'about' || ['/about', '/en/about', '/fr/a-propos'].includes(routePath(route));
}

function isAboutChild(route) {
  const key = routeKey(route).toLowerCase();
  const path = routePath(route);
  return (
    key === 'founder' ||
    key === 'manifesto' ||
    path.startsWith('/about/') ||
    path.startsWith('/en/about/') ||
    path.startsWith('/fr/a-propos/') ||
    path === '/founder' ||
    path === '/manifesto'
  );
}

function isSupportedPrimaryRoute(route) {
  return routePath(route) !== '/portfolio';
}

function footerItems(footer, primary, utility) {
  if (Array.isArray(footer.links)) {
    return navigationRecords(footer.links);
  }

  const footerKeys = new Set(['about', 'contact', 'privacy', 'terms']);
  return [...primary, ...utility].filter((route) => footerKeys.has(routeKey(route)));
}

export function SiteShell({
  locale = 'en',
  content = {},
  currentPath = '/',
  onLocaleChange,
  children,
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const normalizedLocale = locale === 'fr' ? 'fr' : 'en';
  const homeHref = normalizedLocale === 'fr' ? '#/fr' : '#/en';
  const metadata = content.metadata || {};
  const ui = content.ui || {};
  const navigation = content.navigation || {};
  const footer = content.footer || {};
  const primaryRecords = navigationRecords(navigation.primary);
  const utilityRecords = navigationRecords(navigation.utility);
  const aboutParent = primaryRecords.find(isAboutParent);
  const aboutChildren = uniqueRoutes([
    ...navigationRecords(aboutParent?.children),
    ...primaryRecords.filter((route) => !isAboutParent(route) && isAboutChild(route)),
    ...utilityRecords.filter(isAboutChild),
  ]);
  const primaryRoutes = primaryRecords.filter((route) => (
    !isAboutParent(route) && !isAboutChild(route) && isSupportedPrimaryRoute(route)
  ));
  const activePath = normalizePath(currentPath);
  const siteName = metadata.siteName || content.siteName || content.brand?.name || 'SPQE Lab';
  const skipToContentLabel = ui.skipToContent || content.skipToContent ||
    navigation.skipToContent || 'Skip to content';
  const menuLabel = ui.menu || navigation.menu || 'Menu';
  const languageLabel = ui.language || content.languageLabel || navigation.language || 'Language';
  const primaryNavigationLabel = ui.primaryNavigation || navigation.primaryLabel || menuLabel;
  const footerRoutes = footerItems(footer, primaryRecords, utilityRecords);
  const legal = footer.legal || footer.copyright || `(c) ${new Date().getFullYear()} ${siteName}`;
  const isCurrent = (route) => routePath(route) === activePath;
  const closeMenus = () => {
    setMenuOpen(false);
    setAboutOpen(false);
  };
  const chooseLocale = (nextLocale) => {
    if (typeof onLocaleChange === 'function') {
      onLocaleChange(nextLocale);
    }
  };

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        closeMenus();
      }
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, []);

  return html`
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        ${skipToContentLabel}
      </a>

      <header className="site-header">
        <div className="site-header__inner">
          <a className="site-brand" href=${homeHref} aria-label=${content.homeLabel || siteName}>
            <span className="site-brand__mark" aria-hidden="true">SP</span>
            <span className="site-brand__name">${siteName}</span>
          </a>

          <button
            className="primary-nav__toggle"
            type="button"
            aria-expanded=${menuOpen}
            aria-controls="primary-navigation"
            onClick=${() => setMenuOpen((open) => !open)}
          >
            <span className="sr-only">${menuLabel}</span>
            <span aria-hidden="true">☰</span>
          </button>

          <nav
            id="primary-navigation"
            className=${menuOpen ? 'primary-nav is-open' : 'primary-nav'}
            data-open=${menuOpen ? 'true' : 'false'}
            aria-label=${primaryNavigationLabel}
          >
            <ul className="primary-nav__list">
              ${primaryRoutes.map((route) => html`
                <li key=${routeKey(route)}>
                  <a
                    href=${toHashRoute(route.path || route.href)}
                    aria-current=${isCurrent(route) ? 'page' : undefined}
                    onClick=${closeMenus}
                  >${route.label}</a>
                </li>
              `)}
              ${aboutParent && html`
                <li className="primary-nav__about">
                  <a
                    className="primary-nav__about-link"
                    href=${toHashRoute(aboutParent.path || aboutParent.href)}
                    aria-current=${isCurrent(aboutParent) ? 'page' : undefined}
                    onClick=${closeMenus}
                  >${aboutParent.label}</a>
                  ${aboutChildren.length > 0 && html`
                    <button
                      className=${aboutOpen ? 'primary-nav__about-button is-open' : 'primary-nav__about-button'}
                      type="button"
                      aria-expanded=${aboutOpen}
                      aria-controls="about-submenu"
                      onClick=${() => setAboutOpen((open) => !open)}
                    >
                      <span className="sr-only">${aboutParent.label}</span>
                      <span aria-hidden="true">▾</span>
                    </button>
                  `}
                  ${aboutOpen && aboutChildren.length > 0 && html`
                    <ul id="about-submenu" className="about-submenu" aria-label=${aboutParent.label}>
                      ${aboutChildren.map((route) => html`
                        <li key=${routeKey(route)}>
                          <a
                            href=${toHashRoute(route.path || route.href)}
                            aria-current=${isCurrent(route) ? 'page' : undefined}
                            onClick=${closeMenus}
                          >${route.label}</a>
                        </li>
                      `)}
                    </ul>
                  `}
                </li>
              `}
            </ul>
          </nav>

          <div className="locale-switcher" role="group" aria-label=${languageLabel}>
            <button
              type="button"
              className=${normalizedLocale === 'en' ? 'is-active' : ''}
              aria-pressed=${normalizedLocale === 'en'}
              onClick=${() => chooseLocale('en')}
            >EN</button>
            <span aria-hidden="true">/</span>
            <button
              type="button"
              className=${normalizedLocale === 'fr' ? 'is-active' : ''}
              aria-pressed=${normalizedLocale === 'fr'}
              onClick=${() => chooseLocale('fr')}
            >FR</button>
          </div>
        </div>
      </header>

      ${children}

      <footer className="site-footer">
        <div className="site-footer__inner">
          <div>
            <a className="site-footer__brand" href=${homeHref}>${siteName}</a>
            ${footer.description && html`<p>${footer.description}</p>`}
          </div>
          ${footerRoutes.length > 0 && html`
            <nav aria-label=${footer.navigationLabel || footer.label}>
              <ul className="site-footer__links">
                ${footerRoutes.map((route) => html`
                  <li key=${routeKey(route)}>
                    <a href=${toHashRoute(route.path || route.href)}>${route.label}</a>
                  </li>
                `)}
              </ul>
            </nav>
          `}
        </div>
        <div className="site-footer__legal">${legal}</div>
      </footer>
    </div>
  `;
}

export default SiteShell;
