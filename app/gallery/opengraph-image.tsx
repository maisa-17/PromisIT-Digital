import { OG_IMAGE_SIZE, renderOgImage } from "@/lib/og-image";

export const size = OG_IMAGE_SIZE;
export const contentType = "image/png";
export const alt = "Gallery — inside PromisIt Digital Solutions";

export default async function OpengraphImage() {
  return renderOgImage(
    "Inside Our Service Centre",
    "A look at our counter and community outreach camps in Kakkanad."
  );
}
