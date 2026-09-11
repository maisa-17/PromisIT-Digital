import Link from "next/link";
import type { Service } from "@/lib/data";
import { ServiceIcon } from "@/components/icons";

export function ServiceCard({
  service,
  href,
}: {
  service: Service;
  href?: string;
}) {
  const content = (
    <>
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-light text-brand">
        <ServiceIcon icon={service.icon} />
      </span>
      <h3 className="mt-5 text-xl font-bold text-gray-900">{service.title}</h3>
      <p className="mt-2 text-gray-600">{service.summary}</p>
      {href && (
        <span className="mt-4 inline-flex items-center text-sm font-semibold text-brand">
          Learn more
          <svg viewBox="0 0 24 24" fill="none" className="ml-1 h-4 w-4" aria-hidden="true">
            <path
              d="M5 12h14M13 6l6 6-6 6"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      )}
    </>
  );

  const className =
    "group block h-full rounded-2xl border border-gray-200 p-6 transition-colors hover:border-brand/30 hover:bg-brand-light/60 hover:shadow-md";

  if (href) {
    return (
      <Link href={href} className={className}>
        {content}
      </Link>
    );
  }

  return <div className={className}>{content}</div>;
}
