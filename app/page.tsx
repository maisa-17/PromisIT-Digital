import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/container";
import { CountUp } from "@/components/count-up";
import { HeroParallax } from "@/components/hero-parallax";
import { HeroTagline } from "@/components/hero-tagline";
import { SectionHeading } from "@/components/section-heading";
import { SparklesCTA } from "@/components/sparkles-cta";
import { TestimonialsCarousel } from "@/components/testimonials-carousel";
import { services, testimonials } from "@/lib/data";
import { siteConfig } from "@/lib/site";

function HeroHeader() {
  return (
    <Container className="relative z-10 py-10 md:py-16">
      <span className="inline-flex items-center gap-2.5 rounded-full bg-white/10 py-2 pl-2 pr-4 text-xs font-semibold uppercase tracking-wider text-white ring-1 ring-white/20">
        <Image
          src="/csc-digital-seva-logo.webp"
          alt=""
          width={40}
          height={22}
          className="h-5 w-auto flex-none rounded-sm bg-white/90 object-contain p-0.5"
        />
        Authorized {siteConfig.csc}
      </span>
      <HeroTagline />
      <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-300">
        {siteConfig.description}
      </p>
      <div className="mt-10 flex flex-wrap gap-4">
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
                <dt className="mt-4 text-3xl font-bold text-gray-900 dark:text-white">
                  <CountUp value={item.stat} />
                </dt>
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
            className="group grid items-center gap-8 rounded-2xl border border-gray-200 p-8 transition-colors hover:border-primary dark:border-gray-800 md:grid-cols-2 md:p-10"
          >
            <div>
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
            </div>
            <Image
              src="/about-services-overview.webp"
              alt="All our Digital Seva Kendra services — RTO, PAN card, passport, ration card, certificates, insurance, bill payments and more — under one roof"
              width={935}
              height={512}
              sizes="(min-width: 768px) 40vw, 100vw"
              className="h-auto w-full rounded-xl"
            />
          </Link>
        </Container>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="bg-gray-50 py-20 dark:bg-gray-950">
        <Container>
          <TestimonialsCarousel
            eyebrow="Testimonials"
            title="Trusted by the people of Kakkanad"
            testimonials={testimonials.map((testimonial) => ({
              quote: testimonial.quote,
              name: testimonial.name,
              designation: testimonial.role,
              initials: testimonial.initials,
            }))}
          />
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
