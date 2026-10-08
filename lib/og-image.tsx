import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

// Shared by app/opengraph-image.tsx and each route's own opengraph-image.tsx
// so every page gets a distinct share-card image (not one generic one reused
// everywhere) without re-typing the gradient/layout markup per file. Next.js
// picks up whichever opengraph-image.tsx is nearest a given route and wires
// its PNG into both og:image and twitter:image automatically.
export const OG_IMAGE_SIZE = { width: 1200, height: 630 };

export function renderOgImage(title: string, subtitle: string) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #3fb6da 0%, #8b7bc9 55%, #f28b93 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            marginBottom: "36px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "72px",
              height: "72px",
              borderRadius: "20px",
              background: "rgba(255,255,255,0.22)",
              fontSize: "40px",
              fontWeight: 700,
            }}
          >
            P&D
          </div>
          <div style={{ display: "flex", fontSize: "30px", fontWeight: 600, letterSpacing: "-0.01em" }}>
            {siteConfig.shortName} {siteConfig.brandLine2}
          </div>
        </div>
        <div style={{ display: "flex", fontSize: "60px", fontWeight: 700, lineHeight: 1.15, maxWidth: "920px" }}>
          {title}
        </div>
        <div style={{ display: "flex", fontSize: "28px", marginTop: "28px", opacity: 0.92, maxWidth: "860px" }}>
          {subtitle}
        </div>
      </div>
    ),
    { ...OG_IMAGE_SIZE }
  );
}
