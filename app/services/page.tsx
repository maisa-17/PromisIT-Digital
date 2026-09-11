import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { ServiceIcon } from "@/components/icons";
import { services } from "@/lib/data";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description: `Explore the PAN card, bill payment, certificate, insurance, passport, Voter ID, printing and education services offered by ${siteConfig.name}.`,
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
      <section className="bg-gray-50 py-20 md:py-28">
        <Container>
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-saffron-dark">
            Services
          </p>
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
            Government & digital services for every resident
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            From PAN card corrections to passport applications, we handle
            the paperwork so you don&apos;t have to navigate government
            portals alone.
          </p>
        </Container>
      </section>

      {/* Services list */}
      <section className="py-20">
        <Container>
          <div className="flex flex-col gap-16">
            {services.map((service, index) => (
              <div
                key={service.slug}
                id={service.slug}
                className="grid scroll-mt-24 gap-8 md:grid-cols-2 md:items-center"
              >
                <div className={index % 2 === 1 ? "md:order-2" : ""}>
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-light text-brand">
                    <ServiceIcon icon={service.icon} />
                  </span>
                  <h2 className="mt-5 text-2xl font-bold text-gray-900 md:text-3xl">
                    {service.title}
                  </h2>
                  <p className="mt-3 text-lg text-gray-600">{service.description}</p>
                  <ul className="mt-6 space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          className="mt-0.5 h-5 w-5 flex-none text-flag-green"
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
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div
                  className={`flex aspect-[4/3] items-center justify-center rounded-3xl bg-gradient-to-br from-brand-light to-gray-100 ${
                    index % 2 === 1 ? "md:order-1" : ""
                  }`}
                >
                  <ServiceIcon icon={service.icon} className="h-20 w-20 text-brand/25" />
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="bg-gray-50 py-20">
        <Container>
          <SectionHeading
            eyebrow="How it works"
            title="A simple, transparent process"
            description="No surprises — here's what to expect when you visit us."
            align="center"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((item) => (
              <div key={item.step} className="rounded-2xl border border-gray-200 bg-white p-6">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-saffron text-sm font-bold text-white">
                  {item.step}
                </span>
                <h3 className="mt-4 text-lg font-bold text-gray-900">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20">
        <Container className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Not sure which service you need?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-gray-600">
            Call, WhatsApp, or visit us — we&apos;ll help you figure out the
            right service for your situation.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-block rounded-lg bg-brand px-8 py-3 font-semibold text-white transition-colors hover:bg-brand-dark"
            >
              Talk to Us
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
