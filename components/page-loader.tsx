"use client";

import { useEffect, useState } from "react";

/**
 * Full-screen splash for hard reloads/initial loads. Renders visible on the
 * server so it's already painted in the SSR HTML, then fades out once the
 * page (including images/fonts) finishes loading. State-driven rather than
 * a raw DOM-mutating script, so React's hydration never sees a mismatch.
 */
export function PageLoader() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    function reveal() {
      setFading(true);
      const timeout = setTimeout(() => setVisible(false), 300);
      return () => clearTimeout(timeout);
    }

    if (document.readyState === "complete") {
      return reveal();
    }
    window.addEventListener("load", reveal);
    return () => window.removeEventListener("load", reveal);
  }, []);

  if (!visible) return null;

  return (
    <div
      aria-hidden
      className={`fixed inset-0 z-[200] flex flex-col items-center justify-center gap-4 bg-background transition-opacity duration-300 ${
        fading ? "opacity-0" : "opacity-100"
      }`}
    >
      <div
        className="h-12 w-12 animate-spin rounded-full border-4 border-primary-light"
        style={{
          borderTopColor: "var(--primary)",
          borderRightColor: "var(--accent)",
          borderBottomColor: "var(--violet)",
        }}
      />
    </div>
  );
}
