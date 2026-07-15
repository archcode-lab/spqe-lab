export const SUPPORTED_LOCALES = ["en", "fr"];
export const DEFAULT_LOCALE = "en";

const STORAGE_KEY = "spqe-lab.locale";

const CONTENT = {
  en: {
    localeName: "English",
    navigation: {
      home: "Home",
      about: "About",
      services: "Services",
      applications: "Applications",
      founder: "Founder",
      manifesto: "Manifesto",
      contact: "Contact",
      policies: "Policies",
    },
    common: {
      learnMore: "Learn more",
      contactUs: "Contact us",
      backToTop: "Back to top",
      language: "Language",
    },
  },
  fr: {
    localeName: "Français",
    navigation: {
      home: "Accueil",
      about: "À propos",
      services: "Services",
      applications: "Applications",
      founder: "Fondateur",
      manifesto: "Manifeste",
      contact: "Contact",
      policies: "Politiques",
    },
    common: {
      learnMore: "En savoir plus",
      contactUs: "Nous joindre",
      backToTop: "Haut de page",
      language: "Langue",
    },
  },
};

const ROUTE_PAIRS = [
  { en: "/en", fr: "/fr" },
  { en: "/en/about", fr: "/fr/a-propos" },
  { en: "/en/services", fr: "/fr/services" },
  { en: "/en/applications", fr: "/fr/applications" },
  {
    en: "/en/applications/:slug",
    fr: "/fr/applications/:slug",
    applicationDetail: true,
  },
  { en: "/en/about/founder", fr: "/fr/a-propos/fondateur" },
  { en: "/en/about/manifesto", fr: "/fr/a-propos/manifeste" },
  { en: "/en/contact", fr: "/fr/contact" },
  { en: "/en/legal", fr: "/fr/mentions-legales" },
  { en: "/en/privacy", fr: "/fr/confidentialite" },
  { en: "/en/accessibility", fr: "/fr/accessibilite" },
  { en: "/en/not-found", fr: "/fr/not-found" },
];

const LEGACY_ROUTE_ALIASES = {
  "/": "/en",
  "/about": "/en/about",
  "/services": "/en/services",
  "/applications": "/en/applications",
  "/founder": "/en/about/founder",
  "/manifesto": "/en/about/manifesto",
  "/contact": "/en/contact",
  "/legal": "/en/legal",
  "/privacy": "/en/privacy",
  "/accessibility": "/en/accessibility",
  "/not-found": "/en/not-found",
  "/fr/about": "/fr/a-propos",
  "/fr/founder": "/fr/a-propos/fondateur",
  "/fr/manifesto": "/fr/a-propos/manifeste",
  "/fr/legal": "/fr/mentions-legales",
  "/fr/privacy": "/fr/confidentialite",
  "/fr/accessibility": "/fr/accessibilite",
};

function isSupportedLocale(locale) {
  return SUPPORTED_LOCALES.includes(locale);
}

function splitRoute(pathname) {
  let value = typeof pathname === "string" && pathname ? pathname : "/";

  if (value.startsWith("#!/")) {
    value = value.slice(2);
  } else if (value.startsWith("#/")) {
    value = value.slice(1);
  } else if (value.startsWith("/#!/")) {
    value = value.slice(3);
  } else if (value.startsWith("/#/")) {
    value = value.slice(2);
  }

  const hashIndex = value.indexOf("#");
  const queryIndex = value.indexOf("?");
  const suffixIndex = [hashIndex, queryIndex]
    .filter((index) => index >= 0)
    .sort((left, right) => left - right)[0];

  if (suffixIndex === undefined) {
    return { path: value, suffix: "" };
  }

  return {
    path: value.slice(0, suffixIndex) || "/",
    suffix: value.slice(suffixIndex),
  };
}

function normalizePath(pathname) {
  const path = String(pathname || "/").replace(/\/+$/, "") || "/";
  return path.startsWith("/") ? path : `/${path}`;
}

function canonicalizeLegacyPath(pathname) {
  if (pathname.startsWith("/applications/")) {
    return `/en/applications/${pathname.slice("/applications/".length)}`;
  }
  return LEGACY_ROUTE_ALIASES[pathname] || pathname;
}

function findRoutePair(pathname) {
  const directPair = ROUTE_PAIRS.find(
    (pair) =>
      !pair.applicationDetail &&
      (pair.en === pathname || pair.fr === pathname),
  );

  if (directPair) {
    return directPair;
  }

  const englishDetailPrefix = "/en/applications/";
  const frenchDetailPrefix = "/fr/applications/";

  if (
    pathname.startsWith(englishDetailPrefix) &&
    pathname.length > englishDetailPrefix.length
  ) {
    return ROUTE_PAIRS.find((pair) => pair.applicationDetail) || null;
  }

  if (
    pathname.startsWith(frenchDetailPrefix) &&
    pathname.length > frenchDetailPrefix.length
  ) {
    return ROUTE_PAIRS.find((pair) => pair.applicationDetail) || null;
  }

  return null;
}

function mapApplicationDetail(pathname, locale) {
  const englishDetailPrefix = "/en/applications/";
  const frenchDetailPrefix = "/fr/applications/";
  const slug = pathname.startsWith(frenchDetailPrefix)
    ? pathname.slice(frenchDetailPrefix.length)
    : pathname.slice(englishDetailPrefix.length);

  return locale === "fr"
    ? `${frenchDetailPrefix}${slug}`
    : `${englishDetailPrefix}${slug}`;
}

export function localeFromRoute(pathname) {
  const { path } = splitRoute(pathname);
  const normalizedPath = canonicalizeLegacyPath(normalizePath(path));
  if (normalizedPath === "/fr" || normalizedPath.startsWith("/fr/")) {
    return "fr";
  }
  if (normalizedPath === "/en" || normalizedPath.startsWith("/en/")) {
    return "en";
  }
  return null;
}

export function readStoredLocale() {
  if (typeof window === "undefined" || !window.localStorage) {
    return DEFAULT_LOCALE;
  }

  try {
    const storedLocale = window.localStorage.getItem(STORAGE_KEY);
    return isSupportedLocale(storedLocale) ? storedLocale : DEFAULT_LOCALE;
  } catch {
    return DEFAULT_LOCALE;
  }
}

export function storeLocale(locale) {
  if (!isSupportedLocale(locale)) {
    return false;
  }

  if (typeof window === "undefined" || !window.localStorage) {
    return false;
  }

  try {
    window.localStorage.setItem(STORAGE_KEY, locale);
    return true;
  } catch {
    return false;
  }
}

export function getContent(locale = DEFAULT_LOCALE) {
  return CONTENT[isSupportedLocale(locale) ? locale : DEFAULT_LOCALE];
}

export function mapRouteToLocale(pathname, locale) {
  const targetLocale = isSupportedLocale(locale) ? locale : DEFAULT_LOCALE;
  const { path, suffix } = splitRoute(pathname);
  const normalizedPath = canonicalizeLegacyPath(normalizePath(path));
  const routePair = findRoutePair(normalizedPath);

  if (!routePair) {
    const notFoundPair = ROUTE_PAIRS.find(
      (pair) => pair.en === "/en/not-found",
    );
    return `${notFoundPair[targetLocale]}${suffix}`;
  }

  if (routePair.applicationDetail) {
    return `${mapApplicationDetail(normalizedPath, targetLocale)}${suffix}`;
  }

  return `${routePair[targetLocale]}${suffix}`;
}
