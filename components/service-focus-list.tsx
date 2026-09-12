"use client";

import Image from "next/image";
import { useState } from "react";
import { ServiceIcon } from "@/components/icons";
import type { Service } from "@/lib/data";

/**
 * The full services list, styled as Aceternity "Focus Cards": hovering one
 * service keeps it sharp while every other one blurs and shrinks slightly.
 * Laid out as a compact grid (rows & columns) rather than one big card per
 * row.
 *
 * Each card leads with a picture area — a real photo/graphic when a
 * service has one (`service.photo`), otherwise a brand-gradient + icon
 * placeholder.
 */
const cardAccents = [
  "from-primary to-primary-dark",
  "from-accent to-accent-dark",
  "from-violet to-violet-dark",
];

export function ServiceFocusList({ services }: { services: Service[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service, index) => (
        <div
          key={service.slug}
          id={service.slug}
          onMouseEnter={() => setHovered(index)}
          onMouseLeave={() => setHovered(null)}
          className={`scroll-mt-24 overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-300 ease-out dark:border-gray-800 dark:bg-gray-900 ${
            hovered !== null && hovered !== index ? "scale-[0.98] blur-sm" : ""
          }`}
        >
          {service.photo ? (
            <div className="relative flex aspect-video items-center justify-center bg-gray-50 dark:bg-gray-950">
              <Image
                src={service.photo}
                alt=""
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-contain p-6"
                priority={index < 3}
              />
            </div>
          ) : (
            <div
              className={`flex aspect-video items-center justify-center bg-gradient-to-br ${
                cardAccents[index % cardAccents.length]
              }`}
            >
              <ServiceIcon icon={service.icon} className="h-12 w-12 text-white/80" />
            </div>
          )}

          <div className="p-6">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white">{service.title}</h2>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{service.summary}</p>
            <ul className="mt-4 space-y-2">
              {service.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="mt-0.5 h-4 w-4 flex-none text-violet"
                    aria-hidden="true"
                  >
                    <path
                      d="m5 13 4 4 10-10"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
