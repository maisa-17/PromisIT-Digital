"use client";

import { motion, type Variants } from "motion/react";
import { GlareHover } from "@/components/glare-hover";
import { WhatsAppLink } from "@/components/whatsapp-link";
import { siteConfig } from "@/lib/site";

type IconProps = { className?: string };

function PhoneIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M5 4.5h3.2l1.3 4.3-2 1.6a11.5 11.5 0 0 0 5.6 5.6l1.6-2 4.3 1.3V18a1.5 1.5 0 0 1-1.6 1.5A15 15 0 0 1 4 6.1 1.5 1.5 0 0 1 5.5 4.5Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function WhatsAppIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2.5a9.4 9.4 0 0 0-8.1 14.1L2.5 21.5l5.1-1.3A9.4 9.4 0 1 0 12 2.5Zm0 1.8a7.6 7.6 0 0 1 6.6 11.4l-.2.4.6 2.3-2.3-.6-.4.2A7.6 7.6 0 1 1 12 4.3Zm-3.4 3.9c-.2 0-.5 0-.7.3-.2.3-.9.9-.9 2.1s.9 2.5 1 2.6c.1.2 1.8 2.8 4.4 3.8 2.1.9 2.6.7 3 .7.7-.1 1.6-.6 1.8-1.3.2-.6.2-1.2.1-1.3-.1-.1-.3-.2-.6-.4-.3-.1-1.6-.8-1.9-.9-.3-.1-.4-.1-.6.1-.2.3-.7.9-.8 1-.2.2-.3.2-.6.1-.3-.2-1.2-.5-2.3-1.5-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.4.1-.6l.4-.5c.1-.2.2-.3.2-.5.1-.2 0-.4 0-.5-.1-.1-.6-1.6-.9-2.1-.2-.5-.4-.4-.6-.4h-.5Z" />
    </svg>
  );
}

function MailIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" stroke="currentColor" strokeWidth="1.75" />
      <path d="m4.5 7 7.5 6 7.5-6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ClockIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.75" />
      <path d="M12 7.5V12l3 2" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const quickContact = [
  {
    label: "Call Us",
    value: siteConfig.phoneDisplay,
    href: `tel:+91${siteConfig.phone}`,
    icon: PhoneIcon,
    accent: { bg: "bg-primary-light", text: "text-primary" },
  },
  {
    label: "WhatsApp",
    value: siteConfig.whatsappDisplay,
    isWhatsApp: true,
    icon: WhatsAppIcon,
    accent: { bg: "bg-whatsapp/10", text: "text-whatsapp-dark" },
  },
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    icon: MailIcon,
    accent: { bg: "bg-accent-light", text: "text-accent-dark" },
  },
  {
    label: "Hours",
    value: siteConfig.hours,
    icon: ClockIcon,
    accent: { bg: "bg-violet-light", text: "text-violet" },
  },
];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const tile: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

// Chrome (border/background/radius) lives on the outer element; the glare
// itself fills that box completely, so padding and layout move to the flex
// row inside it — otherwise the glare would only cover the padding box.
const tileChromeClassName =
  "overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900";

export function QuickContactGrid() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
    >
      {quickContact.map((item) => {
        const Icon = item.icon;
        const content = (
          <>
            <span
              className={`inline-flex h-11 w-11 flex-none items-center justify-center rounded-xl ${item.accent.bg} ${item.accent.text}`}
            >
              <Icon className="h-5 w-5" />
            </span>
            <span className="min-w-0">
              <span className="block text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                {item.label}
              </span>
              <span className="mt-0.5 block truncate text-base font-semibold text-gray-900 dark:text-white">
                {item.value}
              </span>
            </span>
          </>
        );

        const glare = (
          <GlareHover
            width="100%"
            height="100%"
            background="transparent"
            borderColor="transparent"
            borderRadius="1rem"
            glareColor="#3fb6da"
            glareOpacity={0.6}
            glareAngle={-30}
            glareSize={150}
            transitionDuration={800}
          >
            <div className="flex h-full w-full items-center gap-4 p-5">{content}</div>
          </GlareHover>
        );

        if (item.isWhatsApp) {
          return (
            <motion.div key={item.label} variants={tile} whileHover={{ y: -2 }}>
              <WhatsAppLink className={`${tileChromeClassName} block transition-colors hover:border-primary/40`}>
                {glare}
              </WhatsAppLink>
            </motion.div>
          );
        }

        return item.href ? (
          <motion.a
            key={item.label}
            href={item.href}
            variants={tile}
            whileHover={{ y: -2 }}
            className={`${tileChromeClassName} block transition-colors hover:border-primary/40`}
          >
            {glare}
          </motion.a>
        ) : (
          <motion.div key={item.label} variants={tile} className={tileChromeClassName}>
            {glare}
          </motion.div>
        );
      })}
    </motion.div>
  );
}
