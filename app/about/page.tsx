import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { values } from "@/lib/data";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${siteConfig.name} — an authorized Common Service Centre in Kakkanad, our mission, vision and values.`,
};

export default function AboutPage() {
  return (
    <>
      {/* Intro */}
      <section className="bg-gray-50 py-20 dark:bg-gray-950 md:py-28">
        <Container>
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

      {/* Mission & Vision */}
      <section className="py-20">
        <Container>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-gray-200 p-8 dark:border-gray-800">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary-light text-primary">
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

            <div className="rounded-2xl border border-gray-200 p-8 dark:border-gray-800">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-violet-light text-violet">
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
              const accents = ["bg-primary", "bg-accent", "bg-violet", "bg-primary"];
              return (
                <div
                  key={value.title}
                  className="overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900"
                >
                  <span
                    className={`block h-1 w-10 rounded-full ${accents[index % accents.length]}`}
                    aria-hidden="true"
                  />
                  <h3 className="mt-4 text-lg font-bold text-gray-900 dark:text-white">{value.title}</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">{value.description}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20">
        <Container className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
            Need a service today?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-gray-600 dark:text-gray-400">
            Visit our centre in Kakkanad or reach out — we&apos;re happy to
            help.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-block rounded-lg bg-primary px-8 py-3 font-semibold text-white transition-colors hover:bg-primary-dark"
            >
              Get in Touch
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
