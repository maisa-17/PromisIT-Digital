import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SplashCursorGate } from "@/components/splash-cursor-gate";
import { WhatsAppToggleButton } from "@/components/whatsapp-toggle-button";
import { RouteProgressBar } from "@/components/route-progress-bar";
import { PageLoader } from "@/components/page-loader";
import { siteConfig } from "@/lib/site";
import "./globals.css";

// Applies the saved (or system) theme to <html> before the page paints, so
// there's no flash of the wrong theme on load. Runs before hydration.
const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem("theme");
    var dark = stored ? stored === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.documentElement.classList.toggle("dark", dark);
  } catch (e) {}
})();
`;

// Defines the callback the Google Translate widget script (loaded below)
// invokes once ready. Must be defined before that script runs.
const googleTranslateInitScript = `
window.googleTranslateElementInit = function () {
  new window.google.translate.TranslateElement(
    { pageLanguage: "en", includedLanguages: "ml", autoDisplay: false },
    "google_translate_element"
  );
};
`;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | PAN Card, Certificates & Government Services in Kakkanad`,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Script id="theme-init" strategy="beforeInteractive">
          {themeInitScript}
        </Script>
        <Script id="google-translate-init" strategy="beforeInteractive">
          {googleTranslateInitScript}
        </Script>
        <Script
          src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          strategy="afterInteractive"
        />
        <div id="google_translate_element" className="hidden" />
        <PageLoader />
        <RouteProgressBar />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <SplashCursorGate />
        <WhatsAppToggleButton />
      </body>
    </html>
  );
}
