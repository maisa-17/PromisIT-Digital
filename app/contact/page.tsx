import type { Metadata } from "next";
import { Container } from "@/components/container";
import { ContactForm } from "@/components/contact-form";
import { MapEmbed } from "@/components/map-embed";
import { QuickContactGrid } from "@/components/quick-contact-grid";
import { siteConfig } from "@/lib/site";

const title = "Contact Us";
const description = `Get in touch with ${siteConfig.name} in Kakkanad, Kerala — by phone, WhatsApp, email or in person.`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/contact" },
  openGraph: {
    url: "/contact",
    title: `${title} | ${siteConfig.shortName}`,
    description,
  },
  twitter: {
    title: `${title} | ${siteConfig.shortName}`,
    description,
  },
};

type IconProps = { className?: string };

function MapPinIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 21.5s7-6.1 7-11.8a7 7 0 1 0-14 0c0 5.7 7 11.8 7 11.8Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="9.7" r="2.5" stroke="currentColor" strokeWidth="1.75" />
    </svg>
  );
}

const mapEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(
  siteConfig.address
)}&output=embed`;
const mapDirectionsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  siteConfig.address
)}`;

export default function ContactPage() {
  return (
    <>
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
            Contact Us
          </p>
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-gray-900 dark:text-white md:text-5xl">
            Let&apos;s work together
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-400">
            Have a question about a service, or want to check what documents
            to bring? Fill out the form below, message us on WhatsApp, or
            visit us during working hours.
          </p>
        </Container>
      </section>

      {/* Quick contact */}
      <section className="py-14">
        <Container>
          <QuickContactGrid />
        </Container>
      </section>

      {/* Form + visit us */}
      <section className="pb-20">
        <Container className="grid gap-8 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-gray-200 p-8 dark:border-gray-800">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">Send us a message</h2>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                We usually reply within a few hours during working hours.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800">
              <div className="aspect-[4/3] w-full bg-gray-100 dark:bg-gray-900">
                <MapEmbed src={mapEmbedSrc} title="Map to our centre in Kakkanad" />
              </div>
              <div className="p-6">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary-light text-primary">
                  <MapPinIcon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-lg font-bold text-gray-900 dark:text-white">Visit our centre</h3>
                <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
                  {siteConfig.address}
                </p>
                <a
                  href={mapDirectionsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary"
                >
                  Get directions
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
