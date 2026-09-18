"use client";

import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";

const SplashCursor = dynamic(() => import("@/components/splash-cursor"), { ssr: false });

/**
 * Renders the WebGL splash-cursor effect on every page except the home
 * page, where the hero's own parallax/particle effects already carry the
 * visual interest and an extra full-screen canvas would compete with them.
 * Intensity is toned down from SplashCursor's defaults so the effect reads
 * as a subtle accent rather than the main event.
 */
export function SplashCursorGate() {
  const pathname = usePathname();

  if (pathname === "/") return null;

  return (
    <SplashCursor
      DENSITY_DISSIPATION={4.5}
      VELOCITY_DISSIPATION={2.5}
      SPLAT_RADIUS={0.12}
      SPLAT_FORCE={3500}
      CURL={2}
    />
  );
}
