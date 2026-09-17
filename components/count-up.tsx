"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Animates the leading number in a stat string (e.g. "13+", "100%") from 0
 * up to its target value once it scrolls into view. Any prefix/suffix around
 * the number (a "+", "%", or a trailing range like "-6") is preserved as
 * static text. Strings with no leading number (or with reduced-motion
 * requested) render as-is, unanimated.
 */

const DURATION_MS = 1400;

export function CountUp({ value, className }: { value: string; className?: string }) {
  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? parseInt(match[1], 10) : null;
  const suffix = match ? match[2] : "";

  const [display, setDisplay] = useState(target === null ? value : "0");
  const rootRef = useRef<HTMLSpanElement>(null);
  const playedRef = useRef(false);

  useEffect(() => {
    if (target === null) return;

    const root = rootRef.current;
    if (!root) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setDisplay(String(target));
      return;
    }

    const animate = () => {
      if (playedRef.current) return;
      playedRef.current = true;
      const start = performance.now();
      const tick = (now: number) => {
        const progress = Math.min((now - start) / DURATION_MS, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setDisplay(String(Math.round(target * eased)));
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          animate();
          io.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    io.observe(root);

    return () => io.disconnect();
  }, [target]);

  return (
    <span ref={rootRef} className={className}>
      {display}
      {suffix}
    </span>
  );
}
