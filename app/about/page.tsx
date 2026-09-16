import type { Metadata } from "next";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import SplashCursor from "@/components/splash-cursor";
import { SparklesCTA } from "@/components/sparkles-cta";
import { values } from "@/lib/data";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${siteConfig.name} — an authorized Common Service Centre in Kakkanad, our mission, vision and values.`,
};

type IconProps = { className?: string };

function ShieldCheckIcon({ className }: IconProps) {
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

function UsersIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="9" cy="8.5" r="3" stroke="currentColor" strokeWidth="1.75" />
      <path d="M3.5 19c.7-3 2.8-4.5 5.5-4.5s4.8 1.5 5.5 4.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      <path
        d="M15.5 6c1.4.3 2.5 1.4 2.5 2.9 0 1.4-1 2.5-2.3 2.9M17.5 14.7c2 .5 3.4 1.9 4 4.3"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CheckCircleIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.75" />
      <path d="m8.5 12.3 2.3 2.3 4.7-5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function HeartIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 20s-7.5-4.6-7.5-10.2A4.3 4.3 0 0 1 12 6.5a4.3 4.3 0 0 1 7.5 3.3C19.5 15.4 12 20 12 20Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const valueIcons = [ShieldCheckIcon, UsersIcon, CheckCircleIcon, HeartIcon];

const stats = [
  { stat: "13+", label: "Services offered", accent: "bg-primary" },
  { stat: "6", label: "Days open a week", accent: "bg-accent" },
  { stat: "9-6", label: "Daily service hours", accent: "bg-violet" },
  { stat: "100%", label: "Authorized CSC centre", accent: "bg-primary" },
];

export default function AboutPage() {
  return (
    <>
      <SplashCursor />

      {/* Intro */}
      <section className="relative overflow-hidden bg-gray-50 py-20 dark:bg-gray-950 md:py-28">
        <div
          className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-primary/20 blur-3xl dark:bg-primary/25"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-accent/20 blur-3xl dark:bg-accent/25"
          aria-hidden="true"
        />
        <Container className="relative">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent-dark">
            About Us
          </p>
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-gray-900 dark:text-white md:text-5xl">
            Bringing government services to your doorstep
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-400">
            {siteConfig.name} is an authorized CSC (Common Service Centre)
            under the Digital Seva initiative, serving the Kakkanad
            community with everyday government and digital services — done
            right, without the long queues.
          </p>
        </Container>
      </section>

      {/* Stats */}
      <section className="py-14">
        <Container>
          <dl className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {stats.map((item) => (
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

      {/* Mission & Vision */}
      <section className="py-20">
        <Container>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="overflow-hidden rounded-2xl border border-gray-200 p-8 transition-shadow hover:shadow-lg dark:border-gray-800">
              <span className="block h-1 w-10 rounded-full bg-primary" aria-hidden="true" />
              <span className="mt-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary-light text-primary">
                <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
                  <path
                    d="M12 3.5 19 6v6c0 4.5-3 7.5-7 8.5-4-1-7-4-7-8.5V6l7-2.5Z"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <h2 className="mt-5 text-2xl font-bold text-gray-900 dark:text-white">Our Mission</h2>
              <p className="mt-3 text-gray-600 leading-7 dark:text-gray-400">
                To bring essential government and digital services to the
                doorstep of every citizen in Kakkanad — delivered
                accurately, affordably, and without the hassle of navigating
                government offices alone.
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl border border-gray-200 p-8 transition-shadow hover:shadow-lg dark:border-gray-800">
              <span className="block h-1 w-10 rounded-full bg-violet" aria-hidden="true" />
              <span className="mt-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-violet-light text-violet">
                <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
                  <circle cx="12" cy="12" r="3.25" stroke="currentColor" strokeWidth="1.75" />
                  <path
                    d="M3 12c1.8-4 5-6 9-6s7.2 2 9 6c-1.8 4-5 6-9 6s-7.2-2-9-6Z"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <h2 className="mt-5 text-2xl font-bold text-gray-900 dark:text-white">Our Vision</h2>
              <p className="mt-3 text-gray-600 leading-7 dark:text-gray-400">
                A digitally empowered and financially included community,
                where every resident of Kakkanad can access government
                schemes and essential services conveniently, close to home.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="bg-gray-50 py-20 dark:bg-gray-950">
        <Container>
          <SectionHeading
            eyebrow="What guides us"
            title="Our values"
            description="The principles behind every customer we serve."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {values.map((value, index) => {
              const accents = [
                { bg: "bg-primary-light", text: "text-primary" },
                { bg: "bg-accent-light", text: "text-accent-dark" },
                { bg: "bg-violet-light", text: "text-violet" },
                { bg: "bg-primary-light", text: "text-primary" },
              ];
              const accent = accents[index % accents.length];
              const Icon = valueIcons[index % valueIcons.length];
              return (
                <div
                  key={value.title}
                  className="flex gap-4 overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 transition-shadow hover:shadow-lg dark:border-gray-800 dark:bg-gray-900"
                >
                  <span
                    className={`inline-flex h-11 w-11 flex-none items-center justify-center rounded-xl ${accent.bg} ${accent.text}`}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">{value.title}</h3>
                    <p className="mt-2 text-gray-600 dark:text-gray-400">{value.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <SparklesCTA
        title="Need a service today?"
        description="Visit our centre in Kakkanad or reach out — we're happy to help."
        secondaryHref="/contact"
        secondaryLabel="Get in Touch"
      />
    </>
  );
}
