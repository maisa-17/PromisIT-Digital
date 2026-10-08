import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

// Static route list — this site has no dynamic/CMS-driven routes, so a
// generated MetadataRoute.Sitemap is enough. Add a new entry here whenever a
// top-level page is added under app/.
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: siteConfig.url, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${siteConfig.url}/about`, lastModified, changeFrequency: "yearly", priority: 0.7 },
    { url: `${siteConfig.url}/services`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteConfig.url}/gallery`, lastModified, changeFrequency: "yearly", priority: 0.5 },
    { url: `${siteConfig.url}/contact`, lastModified, changeFrequency: "yearly", priority: 0.6 },
  ];
}
