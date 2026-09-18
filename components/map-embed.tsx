"use client";

import { useState } from "react";

/**
 * Google's Maps embed iframe pulls in ~350 KiB of JS and sets two dozen
 * third-party cookies as soon as it's in the DOM — even with loading="lazy",
 * since it sits within the browser's near-viewport prefetch distance here.
 * Showing a static placeholder until the visitor asks for the live map
 * avoids that cost for everyone who was only going to tap "Get directions".
 */
export function MapEmbed({ src, title }: { src: string; title: string }) {
  const [loaded, setLoaded] = useState(false);

  if (loaded) {
    return (
      <iframe
        title={title}
        src={src}
        className="h-full w-full border-0 grayscale-[15%] dark:invert dark:hue-rotate-180"
        referrerPolicy="no-referrer-when-downgrade"
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setLoaded(true)}
      className="group flex h-full w-full flex-col items-center justify-center gap-2 bg-gray-100 text-sm font-semibold text-gray-600 transition-colors hover:bg-gray-200 dark:bg-gray-900 dark:text-gray-400 dark:hover:bg-gray-800"
    >
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-gray-400 transition-colors group-hover:text-primary dark:text-gray-600" aria-hidden="true">
        <path
          d="M12 21.5s7-6.1 7-11.8a7 7 0 1 0-14 0c0 5.7 7 11.8 7 11.8Z"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="9.7" r="2.5" stroke="currentColor" strokeWidth="1.75" />
      </svg>
      Show map
    </button>
  );
}
