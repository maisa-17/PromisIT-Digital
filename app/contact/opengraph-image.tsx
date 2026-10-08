import { OG_IMAGE_SIZE, renderOgImage } from "@/lib/og-image";

export const size = OG_IMAGE_SIZE;
export const contentType = "image/png";
export const alt = "Contact PromisIt Digital Solutions";

export default async function OpengraphImage() {
  return renderOgImage(
    "Get in Touch",
    "Phone, WhatsApp, email or visit us in Kakkanad, Kerala."
  );
}
