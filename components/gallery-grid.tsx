"use client";

import { useMemo, useState } from "react";
import type { GalleryItem } from "@/lib/data";

const palettes = [
  "from-brand-light to-blue-50",
  "from-orange-100 to-amber-50",
  "from-flag-green-light to-emerald-50",
  "from-blue-100 to-brand-light",
  "from-amber-100 to-orange-50",
  "from-emerald-100 to-flag-green-light",
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
                ? "border-brand bg-brand text-white"
                : "border-gray-300 text-gray-700 hover:border-brand/40"
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
            className="overflow-hidden rounded-2xl border border-gray-200"
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
              <p className="text-xs font-semibold uppercase tracking-wider text-brand">
                {item.category}
              </p>
              <h3 className="mt-2 text-lg font-bold text-gray-900">{item.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
