"use client";

import { useId } from "react";
import { motion, useAnimation } from "motion/react";
import Particles, { ParticlesProvider } from "@tsparticles/react";
import type { Container, Engine } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

// Stable reference: ParticlesProvider requires its `init` callback to stay
// the same function across the app's lifetime.
const initEngine = async (engine: Engine) => {
  await loadSlim(engine);
};

type SparklesProps = {
  id?: string;
  className?: string;
  background?: string;
  minSize?: number;
  maxSize?: number;
  speed?: number;
  particleColor?: string;
  particleDensity?: number;
};

/**
 * Aceternity-style "Sparkles" background — a field of small animated
 * particles, meant to sit behind a heading as an absolutely-positioned
 * layer (pair it with a radial-gradient mask so it fades at the edges).
 */
function SparklesParticles({
  id,
  className,
  background,
  minSize,
  maxSize,
  speed,
  particleColor,
  particleDensity,
}: SparklesProps) {
  const controls = useAnimation();
  const generatedId = useId();

  async function particlesLoaded(container?: Container) {
    if (container) {
      await controls.start({ opacity: 1, transition: { duration: 1 } });
    }
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={controls} className={className}>
      <Particles
        id={id ?? generatedId}
        className="h-full w-full"
        particlesLoaded={particlesLoaded}
        options={{
          fullScreen: { enable: false },
          fpsLimit: 120,
          background: { color: { value: background ?? "transparent" } },
          particles: {
            number: {
              value: particleDensity ?? 100,
              density: { enable: true, width: 400, height: 400 },
            },
            color: { value: particleColor ?? "#ffffff" },
            shape: { type: "circle" },
            opacity: {
              value: { min: 0.1, max: 1 },
              animation: {
                enable: true,
                speed: speed ?? 4,
                sync: false,
                startValue: "random",
              },
            },
            size: { value: { min: minSize ?? 1, max: maxSize ?? 3 } },
            move: {
              enable: true,
              speed: { min: 0.1, max: 1 },
              direction: "none",
              random: false,
              straight: false,
              outModes: { default: "out" },
            },
            links: { enable: false },
          },
          detectRetina: true,
        }}
      />
    </motion.div>
  );
}

export function SparklesCore(props: SparklesProps) {
  return (
    <ParticlesProvider init={initEngine}>
      <SparklesParticles {...props} />
    </ParticlesProvider>
  );
}
