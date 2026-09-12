"use client";

import { useMemo, useState } from "react";
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

export function GalleryGrid({ items }: { items: GalleryItem[] }) {
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(items.map((item) => item.category)))],
    [items]
  );
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? items : items.filter((item) => item.category === active);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActive(category)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
              active === category
                ? "border-primary bg-primary text-white"
                : "border-gray-300 text-gray-700 hover:border-primary/40 dark:border-gray-700 dark:text-gray-300"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((item, index) => (
          <div
            key={item.title}
            className="overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900"
          >
            <div
              className={`flex aspect-[4/3] items-center justify-center bg-gradient-to-br ${
                palettes[index % palettes.length]
              }`}
            >
              <span className="text-4xl font-bold text-gray-900/10">
                {item.title
                  .split(" ")
                  .map((w) => w[0])
                  .slice(0, 2)
                  .join("")}
              </span>
            </div>
            <div className="p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                {item.category}
              </p>
              <h3 className="mt-2 text-lg font-bold text-gray-900 dark:text-white">{item.title}</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
