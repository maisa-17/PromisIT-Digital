"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { SectionHeading } from "@/components/section-heading";

/**
 * Aceternity UI's "Testimonials With Carousel" block (from the Blocks/Pro
 * library) — a row of testimonial cards that page through with wraparound,
 * each card fading and blurring in with a slight stagger. Rebuilt for this
 * project from the block's preview and description (the source itself is
 * behind Aceternity's paid tier). Since our testimonials don't have customer
 * photos, `src` is optional and falls back to a colored initial avatar.
 */

export type CarouselTestimonial = {
  quote: string;
  name: string;
  designation: string;
  src?: string;
  initials?: string;
};

function ChevronLeftIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M15 5 8 12l7 7" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronRightIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M9 5 16 12l-7 7" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function TestimonialsCarousel({
  eyebrow,
  title,
  testimonials,
  visibleCount = 3,
}: {
  eyebrow?: string;
  title: string;
  testimonials: CarouselTestimonial[];
  visibleCount?: number;
}) {
  const [start, setStart] = useState(0);
  const count = Math.min(visibleCount, testimonials.length);

  const handleNext = () => setStart((prev) => (prev + 1) % testimonials.length);
  const handlePrev = () => setStart((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const visible = Array.from({ length: count }, (_, i) => testimonials[(start + i) % testimonials.length]);

  return (
    <div>
      <div className="flex items-start justify-between gap-6">
        <SectionHeading eyebrow={eyebrow} title={title} />
        <div className="flex flex-none gap-2">
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous testimonials"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-800"
          >
            <ChevronLeftIcon className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next testimonials"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-800"
          >
            <ChevronRightIcon className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <AnimatePresence mode="popLayout" initial={false}>
          {visible.map((testimonial, index) => (
            <motion.div
              key={`slide-${start}-${index}`}
              initial={{ opacity: 0, filter: "blur(6px)", y: 12 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              exit={{ opacity: 0, filter: "blur(6px)", y: -12 }}
              transition={{ duration: 0.35, ease: "easeOut", delay: index * 0.08 }}
              className="flex flex-col justify-between rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900"
            >
              <p className="text-base leading-7 text-gray-700 dark:text-gray-300">{testimonial.quote}</p>
              <div className="mt-6 flex items-center gap-3">
                {testimonial.src ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={testimonial.src}
                    alt={testimonial.name}
                    className="h-10 w-10 flex-none rounded-full object-cover"
                  />
                ) : (
                  <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-primary text-sm font-semibold text-white">
                    {testimonial.initials ?? testimonial.name.charAt(0)}
                  </span>
                )}
                <span>
                  <span className="block text-sm font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </span>
                  <span className="block text-sm text-gray-500 dark:text-gray-400">
                    {testimonial.designation}
                  </span>
                </span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
