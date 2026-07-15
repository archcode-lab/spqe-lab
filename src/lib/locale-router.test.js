import { afterEach, describe, expect, it } from "vitest";
import {
  DEFAULT_LOCALE,
  mapRouteToLocale,
  readStoredLocale,
  storeLocale,
} from "./locale";

afterEach(() => {
  window.localStorage.clear();
});

describe("locale utilities", () => {
  it("uses English when no explicit locale has been stored", () => {
    expect(DEFAULT_LOCALE).toBe("en");
    expect(readStoredLocale()).toBe("en");
  });

  it("persists an explicit supported locale choice", () => {
    storeLocale("fr");

    expect(readStoredLocale()).toBe("fr");
  });

  it("round-trips canonical known routes between English and French", () => {
    const routePairs = [
      ["/en", "/fr"],
      ["/en/about", "/fr/a-propos"],
      ["/en/applications", "/fr/applications"],
      ["/en/contact", "/fr/contact"],
    ];

    routePairs.forEach(([englishPath, frenchPath]) => {
      expect(mapRouteToLocale(englishPath, "fr")).toBe(frenchPath);
      expect(mapRouteToLocale(frenchPath, "en")).toBe(englishPath);
    });
  });

  it("preserves an application detail suffix while switching locales", () => {
    const englishPath = "/en/applications/research";
    const frenchPath = "/fr/applications/research";

    expect(mapRouteToLocale(englishPath, "fr")).toBe(frenchPath);
    expect(mapRouteToLocale(frenchPath, "en")).toBe(englishPath);
  });

  it("maps unknown paths to the localized Not Found route", () => {
    expect(mapRouteToLocale("/does-not-exist", "fr")).toBe("/fr/not-found");
    expect(mapRouteToLocale("/fr/does-not-exist", "en")).toBe("/en/not-found");
  });
});
