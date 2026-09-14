"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NavLinks } from "@/components/nav-links";
import { ThemeToggle } from "@/components/theme-toggle";
import { navLinks, siteConfig } from "@/lib/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur dark:bg-gray-950/95">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo-mark.svg"
            alt=""
            width={40}
            height={40}
            className="h-10 w-10"
            priority
            unoptimized
          />
          <span className="flex flex-col leading-tight">
            <span className="text-lg font-extrabold tracking-tight text-gray-900 dark:text-white">
              {siteConfig.shortName}
            </span>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
              {siteConfig.brandLine2}
            </span>
          </span>
        </Link>

        <NavLinks />

        <div className="flex items-center gap-3">
          <ThemeToggle />

          <a
            href={`https://wa.me/91${siteConfig.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-lg bg-whatsapp px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-whatsapp-dark md:inline-flex"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
              <path d="M12 2.5a9.4 9.4 0 0 0-8.1 14.1L2.5 21.5l5.1-1.3A9.4 9.4 0 1 0 12 2.5Zm0 1.8a7.6 7.6 0 0 1 6.6 11.4l-.2.4.6 2.3-2.3-.6-.4.2A7.6 7.6 0 1 1 12 4.3Zm-3.4 3.9c-.2 0-.5 0-.7.3-.2.3-.9.9-.9 2.1s.9 2.5 1 2.6c.1.2 1.8 2.8 4.4 3.8 2.1.9 2.6.7 3 .7.7-.1 1.6-.6 1.8-1.3.2-.6.2-1.2.1-1.3-.1-.1-.3-.2-.6-.4-.3-.1-1.6-.8-1.9-.9-.3-.1-.4-.1-.6.1-.2.3-.7.9-.8 1-.2.2-.3.2-.6.1-.3-.2-1.2-.5-2.3-1.5-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.4.1-.6l.4-.5c.1-.2.2-.3.2-.5.1-.2 0-.4 0-.5-.1-.1-.6-1.6-.9-2.1-.2-.5-.4-.4-.6-.4h-.5Z" />
            </svg>
            WhatsApp Us
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Toggle navigation menu"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-gray-300 dark:border-gray-700 md:hidden"
          >
            <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-gray-700 dark:text-gray-300" aria-hidden="true">
              {open ? (
                <path
                  d="M6 6l12 12M18 6 6 18"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav className="px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const active =
                link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`block rounded-md px-3 py-2 text-base font-medium ${
                      active
                        ? "bg-primary-light text-primary"
                        : "text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-900"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
            <li className="mt-2">
              <a
                href={`https://wa.me/91${siteConfig.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="block rounded-lg bg-whatsapp px-3 py-2.5 text-center text-base font-semibold text-white"
              >
                WhatsApp Us
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
