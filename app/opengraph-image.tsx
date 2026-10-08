import { OG_IMAGE_SIZE, renderOgImage } from "@/lib/og-image";
import { siteConfig } from "@/lib/site";

// Home page's card — routes below (about/, services/, …) each define their
// own opengraph-image.tsx, which Next.js prefers over this one.
export const size = OG_IMAGE_SIZE;
export const contentType = "image/png";
export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;

export default async function OpengraphImage() {
  return renderOgImage(siteConfig.tagline, siteConfig.csc);
}
