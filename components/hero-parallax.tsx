"use client";

import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  type MotionValue,
} from "motion/react";
import { useRef, type ReactNode } from "react";
import { ServiceIcon } from "@/components/icons";
import type { Service } from "@/lib/data";

/**
 * Aceternity UI's "Hero Parallax" — a 3D scroll-driven hero where rows of
 * cards slide in opposite directions and the whole grid tilts back into
 * place as you scroll. Adapted here to showcase our services as photo
 * tiles, falling back to a gradient + icon when a service has no photo.
 */

const cardAccents = [
  "from-primary to-primary-dark",
  "from-accent to-accent-dark",
  "from-violet to-violet-dark",
];

function chunkIntoRows<T>(items: T[], rows: number): T[][] {
  const size = Math.ceil(items.length / rows);
  return Array.from({ length: rows }, (_, i) => items.slice(i * size, i * size + size));
}

export function HeroParallax({
  services,
  header,
}: {
  services: Service[];
  header: ReactNode;
}) {
  const [firstRow, secondRow, thirdRow] = chunkIntoRows(services, 3);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(useTransform(scrollYProgress, [0, 1], [0, 700]), springConfig);
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -700]),
    springConfig
  );
  const rotateX = useSpring(useTransform(scrollYProgress, [0, 0.2], [15, 0]), springConfig);
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.2], [0.2, 1]), springConfig);
  const rotateZ = useSpring(useTransform(scrollYProgress, [0, 0.2], [20, 0]), springConfig);
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-500, 300]),
    springConfig
  );

  return (
    <div
      ref={ref}
      className="relative flex h-[220vh] flex-col self-auto overflow-hidden bg-ink py-16 antialiased [perspective:1000px] [transform-style:preserve-3d]"
    >
      {header}
      <motion.div style={{ rotateX, rotateZ, translateY, opacity }}>
        <Row items={firstRow} translate={translateX} reverse />
        <Row items={secondRow} translate={translateXReverse} />
        <Row items={thirdRow} translate={translateX} reverse />
      </motion.div>
    </div>
  );
}

function Row({
  items,
  translate,
  reverse = false,
}: {
  items: Service[];
  translate: MotionValue<number>;
  reverse?: boolean;
}) {
  return (
    <div className={`mb-14 flex gap-8 ${reverse ? "flex-row-reverse" : "flex-row"}`}>
      {items.map((service, index) => (
        <ServiceTile
          key={service.slug}
          service={service}
          translate={translate}
          accent={cardAccents[index % cardAccents.length]}
        />
      ))}
    </div>
  );
}

function ServiceTile({
  service,
  translate,
  accent,
}: {
  service: Service;
  translate: MotionValue<number>;
  accent: string;
}) {
  return (
    <motion.div
      style={{ x: translate }}
      whileHover={{ y: -16 }}
      className="group relative h-72 w-80 shrink-0 md:h-96 md:w-[26rem]"
    >
      <Link
        href={`/services#${service.slug}`}
        className={`relative flex h-full w-full items-center justify-center overflow-hidden rounded-2xl shadow-xl transition-shadow group-hover:shadow-2xl ${
          service.photo ? "bg-ink" : `bg-gradient-to-br ${accent}`
        }`}
      >
        {service.photo ? (
          <Image
            src={service.photo}
            alt=""
            fill
            sizes="(min-width: 768px) 26rem, 20rem"
            className="object-cover"
          />
        ) : (
          <ServiceIcon icon={service.icon} className="h-24 w-24 text-white/25 md:h-32 md:w-32" />
        )}
        <div className="absolute inset-0 bg-black opacity-0 transition-opacity group-hover:opacity-40" />
        <h3 className="absolute bottom-5 left-5 right-5 text-lg font-bold text-white opacity-0 transition-opacity group-hover:opacity-100">
          {service.title}
        </h3>
      </Link>
    </motion.div>
  );
}
