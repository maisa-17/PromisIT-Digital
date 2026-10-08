import { OG_IMAGE_SIZE, renderOgImage } from "@/lib/og-image";

export const size = OG_IMAGE_SIZE;
export const contentType = "image/png";
export const alt = "About PromisIt Digital Solutions";

export default async function OpengraphImage() {
  return renderOgImage(
    "About Us",
    "Kakkanad's authorized CSC centre — our mission, vision and values."
  );
}
