import type { Testimonial } from "@/lib/data";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="flex h-full flex-col justify-between rounded-2xl border border-gray-200 bg-white p-8">
      <blockquote>
        <div className="mb-3 flex gap-0.5 text-saffron" aria-hidden="true">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg key={i} viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
              <path d="M10 1.5 12.6 7l6 .9-4.3 4.2 1 6-5.3-2.8L4.7 18l1-6L1.4 7.9l6-.9L10 1.5Z" />
            </svg>
          ))}
        </div>
        <p className="text-lg leading-7 text-gray-700">“{testimonial.quote}”</p>
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand text-sm font-semibold text-white">
          {testimonial.initials}
        </span>
        <span>
          <span className="block text-sm font-semibold text-gray-900">
            {testimonial.name}
          </span>
          <span className="block text-sm text-gray-500">{testimonial.role}</span>
        </span>
      </figcaption>
    </figure>
  );
}
