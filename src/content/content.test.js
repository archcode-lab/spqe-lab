import { describe, expect, it } from 'vitest';
import { SITE_CONTENT } from './site-content';

const PUBLIC_ROUTE_KEYS = [
  'home',
  'about',
  'applications',
  'contact',
  'manifesto',
  'privacy',
  'terms',
];

const FORBIDDEN_PUBLIC_TERMS = [
  'chatgpt',
  'openai',
  'anthropic',
  'claude',
  'gemini',
  'ai-free',
  'ai free',
  'automation-free',
  'automation free',
  'without ai',
  'no ai',
];

const ENGLISH_DIFFERENTIATOR =
  'You do not have to become an AI website builder. Tell us what you need. We will understand it, build it and guide you through it.';

function collectText(value) {
  /** Flatten rendered public-copy values into a string collection. */
  if (typeof value === 'string') {
    return [value];
  }

  if (Array.isArray(value)) {
    return value.flatMap(collectText);
  }

  if (value && typeof value === 'object') {
    return Object.values(value).flatMap(collectText);
  }

  return [];
}

function hasRouteRecord(locale, routeKey) {
  /** Report whether a locale supplies a public route record. */
  return Boolean(
    SITE_CONTENT[locale] &&
      SITE_CONTENT[locale][routeKey] &&
      typeof SITE_CONTENT[locale][routeKey] === 'object',
  );
}

function getSharedRouteKeys() {
  /** Return configured public routes supplied by both locale catalogs. */
  return PUBLIC_ROUTE_KEYS.filter(
    (routeKey) => hasRouteRecord('en', routeKey) && hasRouteRecord('fr', routeKey),
  );
}

function getRouteText(locale, routeKey) {
  /** Return flattened rendered text for one localized public route. */
  return collectText(SITE_CONTENT[locale][routeKey]).join(' ').trim();
}

describe('bilingual public content catalog', () => {
  it('provides complete rendered content for shared English and French routes', () => {
    const routeKeys = getSharedRouteKeys();

    expect(routeKeys).not.toEqual([]);

    for (const locale of ['en', 'fr']) {
      expect(SITE_CONTENT[locale]).toBeTruthy();

      for (const routeKey of routeKeys) {
        expect(getRouteText(locale, routeKey)).not.toBe('');
      }
    }
  });

  it('keeps shared localized route record structures aligned', () => {
    for (const routeKey of getSharedRouteKeys()) {
      expect(Object.keys(SITE_CONTENT.fr[routeKey]).sort()).toEqual(
        Object.keys(SITE_CONTENT.en[routeKey]).sort(),
      );
    }
  });

  it('publishes the required English differentiator', () => {
    const englishText = getSharedRouteKeys()
      .flatMap((routeKey) => collectText(SITE_CONTENT.en[routeKey]))
      .join(' ');

    expect(englishText).toContain(ENGLISH_DIFFERENTIATOR);
  });

  it('does not expose prohibited internal or AI-free claims in rendered copy', () => {
    for (const locale of ['en', 'fr']) {
      const localizedText = getSharedRouteKeys()
        .flatMap((routeKey) => collectText(SITE_CONTENT[locale][routeKey]))
        .join(' ')
        .toLowerCase();

      for (const forbiddenTerm of FORBIDDEN_PUBLIC_TERMS) {
        expect(localizedText).not.toContain(forbiddenTerm);
      }
    }
  });
});
