import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { GalleryGrid } from "@/components/gallery-grid";
import { galleryItems } from "@/lib/data";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Gallery",
  description: `A look inside ${siteConfig.name} — our service counter and community outreach camps in Kakkanad.`,
};

export default function GalleryPage() {
  return (
    <>
      {/* Intro */}
      <section className="relative overflow-hidden bg-gray-50 py-20 dark:bg-gray-950 md:py-28">
        <div
          className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-accent/20 blur-3xl dark:bg-accent/25"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-violet/20 blur-3xl dark:bg-violet/25"
          aria-hidden="true"
        />
        <Container className="relative">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent-dark">
            Gallery
          </p>
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-gray-900 dark:text-white md:text-5xl">
            A look inside our centre
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-400">
            A glimpse of our service counter, day-to-day work, and community
            outreach camps here in Kakkanad.
          </p>
        </Container>
      </section>

      {/* Grid */}
      <section className="py-20">
        <Container>
          <GalleryGrid items={galleryItems} />
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 py-20 dark:bg-gray-950">
        <Container className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
            Ready to visit us?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-gray-600 dark:text-gray-400">
            Drop by our centre in Kakkanad, or reach out first to check what
            you&apos;ll need to bring.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-block rounded-lg bg-primary-deep px-8 py-3 font-semibold text-white transition-colors hover:bg-primary-dark"
            >
              Get in Touch
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
