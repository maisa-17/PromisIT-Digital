"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { navLinks } from "@/lib/site";

/**
 * Desktop nav links with an Aceternity-style hover effect: a soft pill
 * fades and slides between items as the cursor moves, using a shared
 * layoutId so the background morphs instead of jump-cutting.
 */
export function NavLinks() {
  const pathname = usePathname();
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <nav
      onMouseLeave={() => setHovered(null)}
      className="hidden items-center gap-1 md:flex"
    >
      {navLinks.map((link, index) => {
        const active =
          link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
        return (
          <Link
            key={link.href}
            href={link.href}
            onMouseEnter={() => setHovered(index)}
            className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              active
                ? "text-primary"
                : hovered === index
                  ? "text-primary dark:text-gray-900"
                  : "text-gray-600 dark:text-gray-400"
            }`}
          >
            <AnimatePresence>
              {hovered === index && (
                <motion.span
                  layoutId="nav-hover-pill"
                  className="absolute inset-0 rounded-full bg-primary/10 dark:bg-accent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </AnimatePresence>
            <span className="relative z-10">{link.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
