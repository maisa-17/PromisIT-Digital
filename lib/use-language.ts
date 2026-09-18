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

function getSnapshot(): AppLanguage {
  return document.cookie.includes("googtrans=/en/ml") ? "ml" : "en";
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
