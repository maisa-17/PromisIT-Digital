"use client";

import { useState, type FormEvent } from "react";
import { services } from "@/lib/data";
import { siteConfig } from "@/lib/site";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "");
    const email = String(form.get("email") ?? "");
    const service = String(form.get("service") ?? "");
    const message = String(form.get("message") ?? "");

    const subject = `New enquiry from ${name || "website visitor"}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      service && `Service needed: ${service}`,
      "",
      message,
    ]
      .filter(Boolean)
      .join("\n");

    window.location.href = `mailto:${siteConfig.email}?cc=${encodeURIComponent(
      siteConfig.emailCc
    )}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-900 dark:text-gray-200">
            Full name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Jane Doe"
            className="mt-2 w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-gray-900 outline-none focus:border-primary focus:ring-1 focus:ring-primary dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 dark:placeholder-gray-500"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-900 dark:text-gray-200">
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className="mt-2 w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-gray-900 outline-none focus:border-primary focus:ring-1 focus:ring-primary dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 dark:placeholder-gray-500"
          />
        </div>
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium text-gray-900 dark:text-gray-200">
          What are you interested in?
        </label>
        <select
          id="service"
          name="service"
          defaultValue=""
          className="mt-2 w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-gray-900 outline-none focus:border-primary focus:ring-1 focus:ring-primary dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 dark:placeholder-gray-500"
        >
          <option value="" disabled>
            Select a service
          </option>
          {services.map((service) => (
            <option key={service.slug} value={service.title}>
              {service.title}
            </option>
          ))}
          <option value="Something else">Something else</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-900 dark:text-gray-200">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us what you need help with — we'll let you know what documents to bring."
          className="mt-2 w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-gray-900 outline-none focus:border-primary focus:ring-1 focus:ring-primary dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 dark:placeholder-gray-500"
        />
      </div>

      <div className="flex flex-wrap gap-3">
        <button
          type="submit"
          className="rounded-lg bg-primary px-6 py-3 font-semibold text-white transition-colors hover:bg-primary-dark"
        >
          Send Message
        </button>
        <a
          href={`https://wa.me/91${siteConfig.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg bg-whatsapp px-6 py-3 font-semibold text-white transition-colors hover:bg-whatsapp-dark"
        >
          Or WhatsApp Us Instead
        </a>
      </div>

      {submitted && (
        <p className="text-sm text-gray-600 dark:text-gray-400" role="status">
          Your email app should now be open with your message pre-filled —
          just hit send. If nothing opened, email us directly at{" "}
          <a href={`mailto:${siteConfig.email}`} className="font-medium text-primary">
            {siteConfig.email}
          </a>
          .
        </p>
      )}
    </form>
  );
}
