import { OG_IMAGE_SIZE, renderOgImage } from "@/lib/og-image";

export const size = OG_IMAGE_SIZE;
export const contentType = "image/png";
export const alt = "Services offered by PromisIt Digital Solutions";

export default async function OpengraphImage() {
  return renderOgImage(
    "13+ Government Services, One Roof",
    "RTO, PAN card, passport, certificates, insurance, ration card, bill payments and more."
  );
}
