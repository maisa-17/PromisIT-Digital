import Image from "next/image";
import Link from "next/link";
import CardSwap, { Card } from "@/components/card-swap";
import { Container } from "@/components/container";
import { HeroParallax } from "@/components/hero-parallax";
import { SectionHeading } from "@/components/section-heading";
import { SparklesCTA } from "@/components/sparkles-cta";
import { WhatsAppLink } from "@/components/whatsapp-link";
import { services, testimonials } from "@/lib/data";
import { siteConfig } from "@/lib/site";

// The *-light background swaps automatically between its pale (light mode)
// and desaturated dark (dark mode) value via the CSS variable in
// app/globals.css — no dark: variant needed for that part.
const testimonialAccent = { bg: "bg-primary-light", border: "border-primary/30", avatar: "bg-primary" };

function HeroHeader() {
  return (
    <Container className="relative z-10 py-10 md:py-16">
      <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white ring-1 ring-white/20">
        <span className="flex gap-0.5" aria-hidden="true">
          <span className="h-2 w-2 rounded-full bg-accent" />
          <span className="h-2 w-2 rounded-full bg-white" />
          <span className="h-2 w-2 rounded-full bg-violet" />
        </span>
        Authorized {siteConfig.csc}
      </span>
      <h1 className="mt-6 max-w-3xl text-4xl font-bold tracking-tight text-white md:text-6xl">
        {siteConfig.tagline}
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-300">
        {siteConfig.description}
      </p>
      <div className="mt-10 flex flex-wrap gap-4">
        <WhatsAppLink className="rounded-lg bg-whatsapp px-6 py-3 font-semibold text-white shadow-lg shadow-whatsapp/30 transition-colors hover:bg-whatsapp-dark">
          Chat on WhatsApp
        </WhatsAppLink>
        <Link
          href="/services"
          className="rounded-lg border border-white/30 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur transition-colors hover:bg-white/20"
        >
          Our Services
        </Link>
      </div>
    </Container>
  );
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      <HeroParallax services={services} header={<HeroHeader />} />

      {/* Franchise strip */}
      <section className="border-y border-gray-200 bg-white py-8 dark:border-gray-800 dark:bg-gray-950">
        <Container className="flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
          <Image
            src="/csc-digital-seva-logo.jpg"
            alt="CSC Digital Seva"
            width={147}
            height={80}
            className="h-16 w-auto flex-none rounded-lg object-contain"
          />
          <p className="text-base leading-7 text-gray-600 dark:text-gray-400">
            <span className="font-semibold text-gray-900 dark:text-white">
              {siteConfig.name}
            </span>{" "}
            is an authorized franchise of{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              CSC Digital Seva
            </span>
            , operating under the Government of India&apos;s Common Service Centre scheme.
          </p>
        </Container>
      </section>

      {/* Why choose us */}
      <section className="bg-gray-50 py-20 dark:bg-gray-950">
        <Container className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Why choose us"
              title="A CSC centre that treats you like a neighbour"
            />
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
              Government portals and paperwork can be confusing. We handle
              the process for you — in plain language, with correct
              documentation, and without unnecessary trips back and forth.
            </p>
          </div>
          <dl className="grid grid-cols-2 gap-6">
            {[
              { stat: "13+", label: "Services offered", accent: "bg-primary" },
              { stat: "6", label: "Days open a week", accent: "bg-accent" },
              { stat: "9-6", label: "Daily service hours", accent: "bg-violet" },
              { stat: "100%", label: "Authorized CSC centre", accent: "bg-primary" },
            ].map((item) => (
              <div
                key={item.label}
                className="overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900"
              >
                <span className={`block h-1 w-10 rounded-full ${item.accent}`} aria-hidden="true" />
                <dt className="mt-4 text-3xl font-bold text-gray-900 dark:text-white">{item.stat}</dt>
                <dd className="mt-1 text-sm text-gray-600 dark:text-gray-400">{item.label}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* About us */}
      <section className="py-20">
        <Container>
          <Link
            href="/about"
            className="group block rounded-2xl border border-gray-200 p-8 transition-colors hover:border-primary dark:border-gray-800 md:p-10"
          >
            <SectionHeading eyebrow="About Us" title="Who we are" />
            <p className="mt-4 max-w-2xl text-base leading-7 text-gray-600 dark:text-gray-400">
              {siteConfig.description}
            </p>
            <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-primary">
              Learn more about us
              <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </span>
          </Link>
        </Container>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="bg-gray-50 py-20 dark:bg-gray-950">
        <Container>
          <SectionHeading
            eyebrow="Testimonials"
            title="Trusted by the people of Kakkanad"
            description="A few words from customers we've helped."
            align="center"
          />
          <div className="relative mt-20 h-[460px] sm:h-[420px]">
            <CardSwap cardDistance={40} verticalDistance={20} delay={3500} pauseOnHover={false} width={400} height={280}>
              {testimonials.map((testimonial) => (
                <Card
                  key={testimonial.name}
                  className={`flex flex-col justify-between border p-8 shadow-xl ${testimonialAccent.bg} ${testimonialAccent.border}`}
                >
                  <div>
                    <div className="mb-3 flex gap-0.5 text-accent" aria-hidden="true">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <svg key={i} viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                          <path d="M10 1.5 12.6 7l6 .9-4.3 4.2 1 6-5.3-2.8L4.7 18l1-6L1.4 7.9l6-.9L10 1.5Z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-base leading-7 text-gray-700 dark:text-gray-300">
                      “{testimonial.quote}”
                    </p>
                  </div>
                  <div className="mt-6 flex items-center gap-3">
                    <span
                      className={`flex h-10 w-10 flex-none items-center justify-center rounded-full text-sm font-semibold text-white ${testimonialAccent.avatar}`}
                    >
                      {testimonial.initials}
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-gray-900 dark:text-white">
                        {testimonial.name}
                      </span>
                      <span className="block text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</span>
                    </span>
                  </div>
                </Card>
              ))}
            </CardSwap>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <SparklesCTA
        title="Need a government service today?"
        description={`Visit us in Kakkanad or reach out on WhatsApp — we're open ${siteConfig.hours}.`}
        secondaryHref="/contact"
        secondaryLabel="Contact Us"
      />
    </>
  );
}
