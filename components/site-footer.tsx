import Link from "next/link";
import { Container } from "@/components/container";
import { navLinks, siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-950">
      <div className="primary-strip" aria-hidden="true" />
      <Container className="grid gap-10 py-14 md:grid-cols-3">
        <div>
          <p className="text-lg font-bold text-primary">{siteConfig.shortName}</p>
          <p className="mt-3 max-w-xs text-sm leading-6 text-gray-600 dark:text-gray-400">
            {siteConfig.description}
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold text-gray-900 dark:text-white">Navigate</p>
          <ul className="mt-4 space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-gray-600 hover:text-primary dark:text-gray-400"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-gray-900 dark:text-white">Contact</p>
          <ul className="mt-4 space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <li>
              <a href={`tel:+91${siteConfig.phone}`} className="hover:text-primary">
                {siteConfig.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={`https://wa.me/91${siteConfig.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
              >
                WhatsApp: {siteConfig.whatsappDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${siteConfig.email}`} className="hover:text-primary">
                {siteConfig.email}
              </a>
            </li>
            <li>{siteConfig.address}</li>
            <li>{siteConfig.hours}</li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-gray-200 dark:border-gray-800">
        <Container className="flex flex-col items-center justify-between gap-2 py-6 text-sm text-gray-500 md:flex-row">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p>An authorized CSC (Common Service Centre) Digital Seva Kendra.</p>
        </Container>
      </div>
    </footer>
  );
}
