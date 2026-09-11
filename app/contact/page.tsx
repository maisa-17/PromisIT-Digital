import type { Metadata } from "next";
import { Container } from "@/components/container";
import { ContactForm } from "@/components/contact-form";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Get in touch with ${siteConfig.name} in Kakkanad, Kerala — by phone, WhatsApp, email or in person.`,
};

const infoCards = [
  {
    label: "Phone",
    value: siteConfig.phoneDisplay,
    href: `tel:+91${siteConfig.phone}`,
  },
  {
    label: "WhatsApp",
    value: siteConfig.whatsappDisplay,
    href: `https://wa.me/91${siteConfig.whatsapp}`,
  },
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    label: "Operating Hours",
    value: siteConfig.hours,
  },
  {
    label: "Address",
    value: siteConfig.address,
    href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      siteConfig.address
    )}`,
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Intro */}
      <section className="bg-gray-50 py-20 md:py-28">
        <Container>
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-saffron-dark">
            Contact Us
          </p>
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
            Let&apos;s work together
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Have a question about a service, or want to check what documents
            to bring? Fill out the form below, message us on WhatsApp, or
            visit us during working hours.
          </p>
        </Container>
      </section>

      {/* Form + info */}
      <section className="py-20">
        <Container className="grid gap-12 md:grid-cols-5">
          <div className="md:col-span-3">
            <div className="rounded-2xl border border-gray-200 p-8">
              <ContactForm />
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="space-y-4">
              {infoCards.map((card) => (
                <div
                  key={card.label}
                  className={`rounded-2xl border p-6 ${
                    card.label === "WhatsApp"
                      ? "border-saffron/30 bg-saffron/5"
                      : "border-gray-200"
                  }`}
                >
                  <p
                    className={`text-xs font-semibold uppercase tracking-wider ${
                      card.label === "WhatsApp" ? "text-saffron-dark" : "text-brand"
                    }`}
                  >
                    {card.label}
                  </p>
                  {card.href ? (
                    <a
                      href={card.href}
                      target={card.href.startsWith("http") ? "_blank" : undefined}
                      rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="mt-2 block text-lg font-medium text-gray-900 hover:text-brand"
                    >
                      {card.value}
                    </a>
                  ) : (
                    <p className="mt-2 text-lg font-medium text-gray-900">{card.value}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
