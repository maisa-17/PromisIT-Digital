"use client";

import { useEffect, useState } from "react";
import { announceLanguageChange, useLanguage } from "@/lib/use-language";

type Lang = "en" | "ml";

function findSelect(): HTMLSelectElement | null {
  return document.querySelector<HTMLSelectElement>("select.goog-te-combo");
}

function applyMalayalam(): boolean {
  const select = findSelect();
  if (!select) return false;
  select.value = "ml";
  select.dispatchEvent(new Event("change", { bubbles: true }));
  return true;
}

/**
 * Drives the Google Website Translator widget (initialized in the root
 * layout) to translate the page to Malayalam, without showing any of
 * Google's own UI. The widget's <select> only exists once its script has
 * loaded, so on click we try immediately and poll briefly if it isn't ready
 * yet; if it never shows up we fall back to a reload, which picks up the
 * language from the googtrans cookie we set below.
 */
export function MalayalamTranslateButton() {
  const syncedLang = useLanguage();
  const [lang, setLang] = useState<Lang>("en");
  const [pending, setPending] = useState(false);

  useEffect(() => {
    setLang(syncedLang);
  }, [syncedLang]);

  function toMalayalam() {
    setPending(true);
    document.cookie = "googtrans=/en/ml; path=/";

    if (applyMalayalam()) {
      setLang("ml");
      setPending(false);
      announceLanguageChange();
      return;
    }

    let attempts = 0;
    const id = setInterval(() => {
      attempts += 1;
      if (applyMalayalam()) {
        clearInterval(id);
        setLang("ml");
        setPending(false);
        announceLanguageChange();
      } else if (attempts >= 15) {
        clearInterval(id);
        window.location.reload();
      }
    }, 200);
  }

  function toEnglish() {
    setPending(true);
    // The widget's <select> has no option for the page's own source
    // language, so setting it to "en" silently no-ops and leaves the page
    // translated. Reloading is the reliable revert — but deleting the
    // cookie outright (rather than pinning it to the self-mapped
    // "/en/en") leaves the widget free to re-derive a language from the
    // browser's own locale on the next load, which can silently re-apply
    // Malayalam and make this button look like it's doing nothing.
    document.cookie = "googtrans=/en/en; path=/";
    window.location.reload();
  }

  function toggle() {
    if (pending) return;
    if (lang === "ml") {
      toEnglish();
    } else {
      toMalayalam();
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      disabled={pending}
      aria-pressed={lang === "ml"}
      aria-label={lang === "ml" ? "Switch back to English" : "Translate this page to Malayalam"}
      title={lang === "ml" ? "View in English" : "മലയാളത്തിൽ വായിക്കുക"}
      className="inline-flex h-9 items-center justify-center gap-1.5 rounded-md border border-gray-300 px-2.5 text-xs font-semibold text-gray-600 transition-colors hover:border-primary/40 hover:text-primary disabled:opacity-60 dark:border-gray-700 dark:text-gray-300 dark:hover:border-primary/40 dark:hover:text-primary"
    >
      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
        <path
          d="M4 5h9M8.5 3v2M6 5c0 4 2.5 6.5 6 8M11.5 5c-1 3-3 6-7 8.5M13 21l4-9 4 9M14.5 18h5"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span>{lang === "ml" ? "English" : "മലയാളം"}</span>
    </button>
  );
}
