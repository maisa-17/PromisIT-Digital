"use client";

import { useEffect, useId, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import type { GalleryItem } from "@/lib/data";

// Fixed (non-theme-adaptive) pastel gradients — these tiles stand in for
// photos, so they stay bright in both light and dark mode.
const palettes = [
  "from-sky-100 to-blue-50",
  "from-orange-100 to-amber-50",
  "from-violet-100 to-purple-50",
  "from-blue-100 to-sky-50",
  "from-amber-100 to-orange-50",
  "from-emerald-100 to-teal-50",
];

function initials(title: string) {
  return title
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");
}

/**
 * Gallery tiles, styled as an Aceternity "Expandable Card" (same effect as
 * the services list): click a tile and it grows in place (shared layoutId)
 * into a centered overlay, while the rest of the page dims behind it.
 */
export function GalleryGrid({ items }: { items: GalleryItem[] }) {
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(items.map((item) => item.category)))],
    [items]
  );
  const [activeCategory, setActiveCategory] = useState("All");
  const [active, setActive] = useState<GalleryItem | null>(null);
  const layoutId = useId();
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const filtered =
    activeCategory === "All" ? items : items.filter((item) => item.category === activeCategory);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setActive(null);
    }
    if (active) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", onKeyDown);
      closeButtonRef.current?.focus();
    }
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [active]);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
              activeCategory === category
                ? "border-primary bg-primary text-white"
                : "border-gray-300 text-gray-700 hover:border-primary/40 dark:border-gray-700 dark:text-gray-300"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-40 bg-black/60"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {active && (
          <div className="fixed inset-0 z-50 grid place-items-center p-4">
            <motion.div
              layoutId={`${layoutId}-${active.title}`}
              role="dialog"
              aria-modal="true"
              aria-labelledby={`${layoutId}-${active.title}-title`}
              className="relative flex w-full max-w-lg max-h-[90vh] flex-col overflow-hidden rounded-2xl bg-white dark:bg-gray-900"
            >
              <button
                ref={closeButtonRef}
                type="button"
                onClick={() => setActive(null)}
                aria-label="Close"
                className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-gray-700 shadow-sm transition-colors hover:bg-white dark:bg-gray-800/90 dark:text-gray-300 dark:hover:bg-gray-800"
              >
                <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
                  <path
                    d="M6 6l12 12M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>

              <div className="overflow-y-auto">
                <motion.div
                  layoutId={`${layoutId}-${active.title}-image`}
                  className={`flex aspect-[4/3] items-center justify-center bg-gradient-to-br ${
                    palettes[items.indexOf(active) % palettes.length]
                  }`}
                >
                  <span className="text-6xl font-bold text-gray-900/10">
                    {initials(active.title)}
                  </span>
                </motion.div>

                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                    {active.category}
                  </p>
                  <motion.h2
                    layoutId={`${layoutId}-${active.title}-title`}
                    id={`${layoutId}-${active.title}-title`}
                    className="mt-2 text-xl font-bold text-gray-900 dark:text-white"
                  >
                    {active.title}
                  </motion.h2>
                  <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
                    {active.description}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((item, index) => (
          <motion.button
            key={item.title}
            layoutId={`${layoutId}-${item.title}`}
            onClick={() => setActive(item)}
            className="overflow-hidden rounded-2xl border border-gray-200 bg-white text-left transition-shadow hover:shadow-lg dark:border-gray-800 dark:bg-gray-900"
          >
            <motion.div
              layoutId={`${layoutId}-${item.title}-image`}
              className={`flex aspect-[4/3] items-center justify-center bg-gradient-to-br ${
                palettes[index % palettes.length]
              }`}
            >
              <span className="text-4xl font-bold text-gray-900/10">{initials(item.title)}</span>
            </motion.div>
            <div className="p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                {item.category}
              </p>
              <motion.h2
                layoutId={`${layoutId}-${item.title}-title`}
                className="mt-2 text-lg font-bold text-gray-900 dark:text-white"
              >
                {item.title}
              </motion.h2>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
}
