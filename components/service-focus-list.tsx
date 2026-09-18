"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ServiceIcon } from "@/components/icons";
import type { Service } from "@/lib/data";

/**
 * The full services list, styled as an Aceternity "Cards: Hover Effect":
 * hovering a card fades in a shared, sliding highlight behind it
 * (layoutId-based, so it glides from card to card instead of popping).
 */
const cardAccents = [
  "from-primary to-primary-dark",
  "from-accent to-accent-dark",
  "from-violet to-violet-dark",
];

// Hover highlight tint, paired with each card's accent gradient above.
const hoverAccents = [
  "bg-primary/10 dark:bg-primary/20",
  "bg-accent/10 dark:bg-accent/20",
  "bg-violet/10 dark:bg-violet/20",
];

export function ServiceFocusList({ services }: { services: Service[] }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service, index) => (
        <div
          key={service.slug}
          id={service.slug}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          className={`group relative h-full scroll-mt-24 rounded-2xl p-1 ${
            index === services.length - 1
              ? "sm:col-span-2 sm:max-w-sm sm:justify-self-center lg:col-span-1 lg:max-w-none lg:col-start-2"
              : ""
          }`}
        >
          <AnimatePresence>
            {hoveredIndex === index && (
              <motion.span
                layoutId="service-hover-background"
                className={`absolute inset-0 block rounded-2xl ${
                  hoverAccents[index % hoverAccents.length]
                }`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.15 } }}
                exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.1 } }}
              />
            )}
          </AnimatePresence>

          <div className="relative z-10 flex h-full min-h-[550px] flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
            {service.photo ? (
              <div className="relative aspect-video bg-gray-50 dark:bg-gray-950">
                <Image
                  src={service.photo}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  quality={90}
                  className="object-cover"
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
        </div>
      ))}
    </div>
  );
}
