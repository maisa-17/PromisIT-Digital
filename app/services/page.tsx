import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { ServiceFocusList } from "@/components/service-focus-list";
import { ServiceIcon } from "@/components/icons";
import { services } from "@/lib/data";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description: `Explore all ${siteConfig.name} services — RTO, certificates, PAN card, passport, Voter ID, insurance, ration card, bill payments, land & municipality, student support, printing and more.`,
};

const process = [
  {
    step: "01",
    title: "Visit or WhatsApp us",
    description: "Walk in during working hours, or message us on WhatsApp to ask what you need.",
  },
  {
    step: "02",
    title: "Share your documents",
    description: "We'll tell you exactly which documents and IDs are needed for your service.",
  },
  {
    step: "03",
    title: "We process your application",
    description: "Your application is filled and submitted correctly through official channels.",
  },
  {
    step: "04",
    title: "Collect your service",
    description: "Get your certificate, receipt or confirmation — or we'll let you know when it's ready.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Intro */}
      <section className="bg-gray-50 py-20 dark:bg-gray-950 md:py-28">
        <Container>
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent-dark">
            Services
          </p>
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-gray-900 dark:text-white md:text-5xl">
            Government & digital services for every resident
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-400">
            From RTO paperwork to passport applications, we handle the
            process so you don&apos;t have to navigate government portals
            alone. Jump straight to what you need:
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {services.map((service) => (
              <a
                key={service.slug}
                href={`#${service.slug}`}
                className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-1.5 text-sm font-medium text-gray-700 transition-colors hover:border-primary/40 hover:text-primary dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300"
              >
                <ServiceIcon icon={service.icon} className="h-4 w-4 flex-none" />
                {service.title}
              </a>
            ))}
          </div>
        </Container>
      </section>

      {/* Services list — Focus Cards: hovering one keeps it sharp and blurs the rest */}
      <section className="py-20">
        <Container>
          <ServiceFocusList services={services} />
        </Container>
      </section>

      {/* Process */}
      <section className="bg-gray-50 py-20 dark:bg-gray-950">
        <Container>
          <SectionHeading
            eyebrow="How it works"
            title="A simple, transparent process"
            description="No surprises — here's what to expect when you visit us."
            align="center"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((item) => (
              <div key={item.step} className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">
                  {item.step}
                </span>
                <h3 className="mt-4 text-lg font-bold text-gray-900 dark:text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20">
        <Container className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
            Not sure which service you need?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-gray-600 dark:text-gray-400">
            Call, WhatsApp, or visit us — we&apos;ll help you figure out the
            right service for your situation.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-block rounded-lg bg-primary px-8 py-3 font-semibold text-white transition-colors hover:bg-primary-dark"
            >
              Talk to Us
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
