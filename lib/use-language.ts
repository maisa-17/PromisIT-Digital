"use client";

import { useSyncExternalStore } from "react";

// The Google Website Translator widget can't reach text drawn inside an SVG
// clip-path (see MaskedHeading), so a handful of components keep their own
// Malayalam string and switch to it manually. They read the same googtrans
// cookie the translate button sets, and re-render when it dispatches this
// event — mirrors the theme toggle's external-store pattern.
export const LANGUAGE_CHANGE_EVENT = "app-language-change";

export type AppLanguage = "en" | "ml";

function subscribe(callback: () => void) {
  window.addEventListener(LANGUAGE_CHANGE_EVENT, callback);
  return () => window.removeEventListener(LANGUAGE_CHANGE_EVENT, callback);
}

// Anchored to a whole cookie so a similarly named cookie or a longer value
// (e.g. "googtrans=/en/ml-IN") can't match by accident.
const MALAYALAM_COOKIE = /(?:^|;\s*)googtrans=\/en\/ml(?:;|$)/;

function getSnapshot(): AppLanguage {
  return MALAYALAM_COOKIE.test(document.cookie) ? "ml" : "en";
}

// Pins the page back to English. The Google widget writes googtrans scoped to
// the whole domain (".example.com") on real hosts, while our own writes are
// host-only, so the two coexist and overwriting just ours leaves the domain
// one behind — the page reloads still translated. Expire every variant first,
// then pin the host-only "/en/en" (see MalayalamTranslateButton.toEnglish for
// why it's pinned rather than left deleted).
export function resetLanguageCookie() {
  const expired = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
  document.cookie = expired;

  const parts = window.location.hostname.split(".");
  for (let i = 0; i < parts.length - 1; i++) {
    const domain = parts.slice(i).join(".");
    document.cookie = `${expired}; domain=${domain}`;
    document.cookie = `${expired}; domain=.${domain}`;
  }

  document.cookie = "googtrans=/en/en; path=/";
}

function getServerSnapshot(): AppLanguage {
  return "en";
}

export function useLanguage(): AppLanguage {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

export function announceLanguageChange() {
  window.dispatchEvent(new Event(LANGUAGE_CHANGE_EVENT));
}
