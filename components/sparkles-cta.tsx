import Link from "next/link";
import { Container } from "@/components/container";
import { SparklesCore } from "@/components/sparkles";
import { WhatsAppLink } from "@/components/whatsapp-link";

export function SparklesCTA({
  title,
  description,
  secondaryHref,
  secondaryLabel,
}: {
  title: string;
  description: string;
  secondaryHref: string;
  secondaryLabel: string;
}) {
  return (
    <section className="py-20">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-ink px-8 py-16 text-center shadow-xl shadow-ink/20 dark:bg-black dark:shadow-[0_0_60px_-10px_rgba(63,182,218,0.25)] dark:ring-1 dark:ring-white/10 md:px-16">
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={70}
            particleColor="#ffffff"
            className="absolute inset-0 h-full w-full"
          />
          <div className="pointer-events-none absolute inset-0 bg-ink [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black" />
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-white md:text-4xl">{title}</h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-gray-300">{description}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <WhatsAppLink className="inline-block rounded-lg bg-whatsapp px-8 py-3 font-semibold text-white transition-colors hover:bg-whatsapp-dark">
                Chat on WhatsApp
              </WhatsAppLink>
              <Link
                href={secondaryHref}
                className="inline-block rounded-lg border border-white/30 bg-white/10 px-8 py-3 font-semibold text-white backdrop-blur transition-colors hover:bg-white/20"
              >
                {secondaryLabel}
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
