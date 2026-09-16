"use client";

import { useEffect, useState, type ReactNode } from "react";
import { isWithinBusinessHours } from "@/lib/business-hours";
import { siteConfig } from "@/lib/site";

/**
 * Wraps WhatsApp CTAs so they become inert (and visibly dimmed) outside
 * business hours, instead of opening a chat nobody will answer yet.
 * Starts "open" on the server render and corrects itself on mount to
 * avoid a hydration mismatch — this trades a brief flash for correctness.
 */
export function WhatsAppLink({
  className = "",
  onClick,
  children,
}: {
  className?: string;
  onClick?: () => void;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    const check = () => setOpen(isWithinBusinessHours());
    check();
    const id = setInterval(check, 60_000);
    return () => clearInterval(id);
  }, []);

  if (!open) {
    return (
      <span
        aria-disabled="true"
        title={`We're closed right now — available ${siteConfig.hours}`}
        onClick={onClick}
        className={`cursor-not-allowed opacity-50 ${className}`}
      >
        {children}
      </span>
    );
  }

  return (
    <a
      href={`https://wa.me/91${siteConfig.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className={className}
    >
      {children}
    </a>
  );
}
