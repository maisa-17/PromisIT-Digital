import { Marquee } from "@/components/magicui/marquee";
import { ServiceIcon } from "@/components/icons";
import type { Service } from "@/lib/data";

function ServicePill({ service }: { service: Service }) {
  return (
    <a
      href={`#${service.slug}`}
      className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-gray-300 bg-white px-4 py-1.5 text-sm font-medium text-gray-700 transition-colors hover:border-primary/40 hover:bg-primary-light hover:text-primary dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:bg-primary/10"
    >
      <ServiceIcon icon={service.icon} className="h-4 w-4 flex-none" />
      {service.title}
    </a>
  );
}

export function ServiceJumpLinks({ services }: { services: Service[] }) {
  const firstRow = services.slice(0, Math.ceil(services.length / 2));
  const secondRow = services.slice(Math.ceil(services.length / 2));

  return (
    <div className="relative mt-6 flex w-full flex-col gap-3 overflow-hidden">
      <Marquee pauseOnHover className="[--duration:35s]">
        {firstRow.map((service) => (
          <ServicePill key={service.slug} service={service} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:35s]">
        {secondRow.map((service) => (
          <ServicePill key={service.slug} service={service} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-gray-50 dark:from-gray-950" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-gray-50 dark:from-gray-950" />
    </div>
  );
}
