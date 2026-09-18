import Link from "next/link";
import { Container } from "@/components/container";
import { WhatsAppLink } from "@/components/whatsapp-link";
import { navLinks, siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-black">
      <Container className="grid gap-10 py-14 md:grid-cols-3">
        <div>
          <p className="text-sm font-semibold text-white">Navigate</p>
          <ul className="mt-4 space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-gray-400 hover:text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-white">Contact</p>
          <ul className="mt-4 space-y-2 text-sm text-gray-400">
            <li>
              <a href={`tel:+91${siteConfig.phone}`} className="hover:text-primary">
                {siteConfig.phoneDisplay}
              </a>
            </li>
            <li>
              <WhatsAppLink className="hover:text-primary">
                WhatsApp: {siteConfig.whatsappDisplay}
              </WhatsAppLink>
            </li>
            <li>
              <a href={`mailto:${siteConfig.email}`} className="hover:text-primary">
                {siteConfig.email}
              </a>
            </li>
            <li>{siteConfig.hours}</li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-white">Address</p>
          <ul className="mt-4 space-y-2 text-sm text-gray-400">
            <li>{siteConfig.address}</li>
          </ul>
        </div>
      </Container>

      <div>
        <Container className="flex flex-col items-center justify-between gap-2 py-6 text-sm text-gray-400 md:flex-row">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p>An authorized CSC (Common Service Centre) Digital Seva Kendra.</p>
        </Container>
      </div>
    </footer>
  );
}
