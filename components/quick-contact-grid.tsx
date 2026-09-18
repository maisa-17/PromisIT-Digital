"use client";

import { motion, type Variants } from "motion/react";
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

const tileChromeClassName =
  "min-w-0 overflow-hidden rounded-2xl border border-gray-200 bg-white transition-colors hover:border-primary/40 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900";

export function QuickContactGrid() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="grid gap-4 sm:grid-cols-3"
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
              <span className="mt-0.5 block break-words text-base font-semibold text-gray-900 dark:text-white">
                {item.value}
              </span>
            </span>
          </>
        );

        const inner = (
          <div className="flex h-full min-h-28 w-full min-w-0 items-center gap-4 p-5">{content}</div>
        );

        return item.href ? (
          <motion.a
            key={item.label}
            href={item.href}
            variants={tile}
            whileHover={{ y: -2 }}
            className={`${tileChromeClassName} block`}
          >
            {inner}
          </motion.a>
        ) : (
          <motion.div
            key={item.label}
            variants={tile}
            whileHover={{ y: -2 }}
            className={tileChromeClassName}
          >
            {inner}
          </motion.div>
        );
      })}
    </motion.div>
  );
}
