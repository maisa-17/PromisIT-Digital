"use client";

import { useEffect, useState } from "react";
import { isWithinBusinessHours } from "@/lib/business-hours";
import { siteConfig } from "@/lib/site";
import { WhatsAppLink } from "@/components/whatsapp-link";

/**
 * Site-wide floating WhatsApp button, fixed to the bottom-right corner on
 * every page. Clicking it toggles a small chat card open/closed rather than
 * jumping straight to WhatsApp, so visitors can see business-hours status
 * before they leave the site.
 */
export function WhatsAppToggleButton() {
  const [open, setOpen] = useState(false);
  const [online, setOnline] = useState(true);

  useEffect(() => {
    const check = () => setOnline(isWithinBusinessHours());
    check();
    const id = setInterval(check, 60_000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="w-72 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl dark:border-gray-800 dark:bg-gray-900">
          <div className="flex items-center gap-3 bg-whatsapp px-4 py-3 text-white">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20">
              <WhatsAppIcon className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-semibold">{siteConfig.shortName}</p>
              <p className="flex items-center gap-1.5 text-xs text-white/90">
                <span
                  className={`h-1.5 w-1.5 rounded-full ${
                    online ? "bg-green-400" : "bg-gray-300"
                  }`}
                  aria-hidden="true"
                />
                {online ? "Online now" : `Closed · open ${siteConfig.hours}`}
              </p>
            </div>
          </div>

          <div className="space-y-3 p-4">
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {online
                ? "Hi! Have a question about our services? Chat with us on WhatsApp."
                : `We're closed right now — available ${siteConfig.hours}. Send us a message and we'll reply when we're back.`}
            </p>
            <WhatsAppLink
              onClick={() => setOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-whatsapp px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-whatsapp-dark"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Start Chat
            </WhatsAppLink>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? "Close WhatsApp chat" : "Chat with us on WhatsApp"}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-lg transition-transform hover:scale-105 hover:bg-whatsapp-dark"
      >
        {open ? (
          <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
            <path
              d="M6 6l12 12M18 6 6 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        ) : (
          <WhatsAppIcon className="h-7 w-7" />
        )}
      </button>
    </div>
  );
}

function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2.5a9.4 9.4 0 0 0-8.1 14.1L2.5 21.5l5.1-1.3A9.4 9.4 0 1 0 12 2.5Zm0 1.8a7.6 7.6 0 0 1 6.6 11.4l-.2.4.6 2.3-2.3-.6-.4.2A7.6 7.6 0 1 1 12 4.3Zm-3.4 3.9c-.2 0-.5 0-.7.3-.2.3-.9.9-.9 2.1s.9 2.5 1 2.6c.1.2 1.8 2.8 4.4 3.8 2.1.9 2.6.7 3 .7.7-.1 1.6-.6 1.8-1.3.2-.6.2-1.2.1-1.3-.1-.1-.3-.2-.6-.4-.3-.1-1.6-.8-1.9-.9-.3-.1-.4-.1-.6.1-.2.3-.7.9-.8 1-.2.2-.3.2-.6.1-.3-.2-1.2-.5-2.3-1.5-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.4.1-.6l.4-.5c.1-.2.2-.3.2-.5.1-.2 0-.4 0-.5-.1-.1-.6-1.6-.9-2.1-.2-.5-.4-.4-.6-.4h-.5Z" />
    </svg>
  );
}
