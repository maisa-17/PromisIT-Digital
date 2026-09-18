"use client";

import MaskedHeading from "@/components/masked-heading";
import { useLanguage } from "@/lib/use-language";
import { siteConfig } from "@/lib/site";

// Google Translate can't reach the hero heading — MaskedHeading draws it as
// an SVG clip-path mask, not translatable text — so it needs its own
// Malayalam string, swapped in when the translate button is active.
const taglineMl = "കാക്കനാടിന്റെ വൺസ്റ്റോപ്പ് ഡിജിറ്റൽ സേവന കേന്ദ്രം";

export function HeroTagline() {
  const lang = useLanguage();

  return (
    <MaskedHeading
      tag="h1"
      text={lang === "ml" ? taglineMl : siteConfig.tagline}
      src="/gallery/storefront.webp"
      priority
      align="left"
      weight={800}
      reveal="rise"
      trigger="view"
      tintColor="#ffffff"
      tintOpacity={0.85}
      tintBlend="normal"
      className="mt-6 max-w-3xl"
    />
  );
}
