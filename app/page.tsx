import Link from "next/link";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { TestimonialCard } from "@/components/testimonial-card";
import { services, testimonials } from "@/lib/data";
import { siteConfig } from "@/lib/site";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-brand py-24 text-white md:py-32">
        <div
          className="pointer-events-none absolute inset-0 opacity-15"
          style={{
            backgroundImage:
              "radial-gradient(circle at 15% 20%, #ff9933 0%, transparent 35%), radial-gradient(circle at 85% 75%, #128807 0%, transparent 35%)",
          }}
          aria-hidden="true"
        />
        <Container className="relative">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white ring-1 ring-white/20">
            <span className="flex gap-0.5" aria-hidden="true">
              <span className="h-2 w-2 rounded-full bg-saffron" />
              <span className="h-2 w-2 rounded-full bg-white" />
              <span className="h-2 w-2 rounded-full bg-flag-green" />
            </span>
            Authorized CSC Digital Seva Kendra
          </span>
          <h1 className="mt-6 max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
            {siteConfig.tagline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-100">
            {siteConfig.description}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={`https://wa.me/91${siteConfig.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-saffron px-6 py-3 font-semibold text-white shadow-lg shadow-saffron/30 transition-colors hover:bg-saffron-dark"
            >
              Chat on WhatsApp
            </a>
            <Link
              href="/services"
              className="rounded-lg border border-white/30 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur transition-colors hover:bg-white/20"
            >
              Our Services
            </Link>
          </div>
        </Container>
      </section>

      {/* Services preview */}
      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow="What we do"
            title="Government & digital services, all in one place"
            description="Authorized CSC services for the Kakkanad community — no long trips to government offices."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard
                key={service.slug}
                service={service}
                href={`/services#${service.slug}`}
              />
            ))}
          </div>
          <div className="mt-10">
            <Link
              href="/services"
              className="text-sm font-semibold text-brand hover:text-brand-dark"
            >
              View all services →
            </Link>
          </div>
        </Container>
      </section>

      {/* Why choose us */}
      <section className="bg-gray-50 py-20">
        <Container className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Why choose us"
              title="A CSC centre that treats you like a neighbour"
            />
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Government portals and paperwork can be confusing. We handle
              the process for you — in plain language, with correct
              documentation, and without unnecessary trips back and forth.
            </p>
          </div>
          <dl className="grid grid-cols-2 gap-6">
            {[
              { stat: "8+", label: "Services offered", accent: "bg-brand" },
              { stat: "6", label: "Days open a week", accent: "bg-saffron" },
              { stat: "9-6", label: "Daily service hours", accent: "bg-flag-green" },
              { stat: "100%", label: "Authorized CSC centre", accent: "bg-brand" },
            ].map((item) => (
              <div
                key={item.label}
                className="overflow-hidden rounded-2xl border border-gray-200 bg-white p-6"
              >
                <span className={`block h-1 w-10 rounded-full ${item.accent}`} aria-hidden="true" />
                <dt className="mt-4 text-3xl font-bold text-gray-900">{item.stat}</dt>
                <dd className="mt-1 text-sm text-gray-600">{item.label}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20">
        <Container>
          <SectionHeading
            eyebrow="Testimonials"
            title="Trusted by the people of Kakkanad"
            description="A few words from customers we've helped."
            align="center"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} testimonial={testimonial} />
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20">
        <Container>
          <div className="relative overflow-hidden rounded-3xl bg-brand px-8 py-16 text-center md:px-16">
            <div className="absolute inset-x-0 top-0 tricolor-strip" aria-hidden="true" />
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Need a government service today?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-blue-100">
              Visit us in Kakkanad or reach out on WhatsApp — we&apos;re open {siteConfig.hours}.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href={`https://wa.me/91${siteConfig.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-lg bg-saffron px-8 py-3 font-semibold text-white transition-colors hover:bg-saffron-dark"
              >
                Chat on WhatsApp
              </a>
              <Link
                href="/contact"
                className="inline-block rounded-lg border border-white/30 bg-white/10 px-8 py-3 font-semibold text-white backdrop-blur transition-colors hover:bg-white/20"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
