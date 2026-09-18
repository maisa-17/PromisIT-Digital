import type { Metadata } from "next";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { ServiceFocusList } from "@/components/service-focus-list";
import { ServiceJumpLinks } from "@/components/service-jump-links";
import { SparklesCTA } from "@/components/sparkles-cta";
import { services } from "@/lib/data";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description: `Explore all ${siteConfig.name} services — RTO, certificates, PAN card, passport, Voter ID, insurance, ration card, bill payments, land & municipality, student support, printing and more.`,
};

type IconProps = { className?: string };

function ChatIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v7a2.5 2.5 0 0 1-2.5 2.5H10l-4.5 4v-4H6.5A2.5 2.5 0 0 1 4 13.5v-7Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DocumentIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M7 3.5h7l4 4v13H7v-17Z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
      <path d="M14 3.5V8h4" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
      <path d="M9.5 12.5h5M9.5 15.5h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function GearIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.75" />
      <path
        d="M12 3.5v2M12 18.5v2M20.5 12h-2M5.5 12h-2M17.8 6.2l-1.4 1.4M7.6 16.4l-1.4 1.4M17.8 17.8l-1.4-1.4M7.6 7.6 6.2 6.2"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CheckBadgeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 3.5 19 6v6c0 4.5-3 7.5-7 8.5-4-1-7-4-7-8.5V6l7-2.5Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <path d="m9 12 2 2 4-4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const process = [
  {
    step: "01",
    title: "Visit or WhatsApp us",
    description: "Walk in during working hours, or message us on WhatsApp to ask what you need.",
    icon: ChatIcon,
    accent: { bg: "bg-primary-light", text: "text-primary" },
  },
  {
    step: "02",
    title: "Share your documents",
    description: "We'll tell you exactly which documents and IDs are needed for your service.",
    icon: DocumentIcon,
    accent: { bg: "bg-accent-light", text: "text-accent-dark" },
  },
  {
    step: "03",
    title: "We process your application",
    description: "Your application is filled and submitted correctly through official channels.",
    icon: GearIcon,
    accent: { bg: "bg-violet-light", text: "text-violet" },
  },
  {
    step: "04",
    title: "Collect your service",
    description: "Get your certificate, receipt or confirmation — or we'll let you know when it's ready.",
    icon: CheckBadgeIcon,
    accent: { bg: "bg-primary-light", text: "text-primary" },
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Intro */}
      <section className="relative overflow-hidden bg-gray-50 py-20 dark:bg-gray-950 md:py-28">
        <div
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/20 blur-3xl dark:bg-primary/25"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-violet/20 blur-3xl dark:bg-violet/25"
          aria-hidden="true"
        />
        <Container className="relative">
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
          <ServiceJumpLinks services={services} />
        </Container>
      </section>

      {/* Services list — Focus Cards: hovering one keeps it sharp and blurs the rest */}
      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow="All services"
            title="Browse everything we offer"
            description="13+ government and digital services, all handled under one roof."
          />
          <div className="mt-12">
            <ServiceFocusList services={services} />
          </div>
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
          <div className="relative mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={item.step} className="relative h-full">
                  <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 transition-shadow hover:shadow-lg dark:border-gray-800 dark:bg-gray-900">
                    <div className="flex items-center gap-3">
                      <span
                        className={`inline-flex h-11 w-11 flex-none items-center justify-center rounded-xl ${item.accent.bg} ${item.accent.text}`}
                      >
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                        Step {item.step}
                      </span>
                    </div>
                    <h3 className="mt-4 text-lg font-bold text-gray-900 dark:text-white">{item.title}</h3>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
                  </div>
                  {index < process.length - 1 && (
                    <span
                      className="absolute top-1/2 right-0 hidden h-px w-6 translate-x-full -translate-y-1/2 bg-gray-300 dark:bg-gray-700 lg:block"
                      aria-hidden="true"
                    />
                  )}
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <SparklesCTA
        title="Not sure which service you need?"
        description="Call, WhatsApp, or visit us — we'll help you figure out the right service for your situation."
        secondaryHref="/contact"
        secondaryLabel="Talk to Us"
      />
    </>
  );
}
