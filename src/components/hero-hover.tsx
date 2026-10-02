"use client";

import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { createContext, useContext, useState, type CSSProperties, type ReactNode } from "react";
import { useFinePointer, usePrefersReducedMotion } from "@/components/use-prefers-reduced-motion";

type HoverState = {
  hovered: number | null;
  setHovered: (index: number | null) => void;
  allowMotion: boolean;
};

const HeroHoverContext = createContext<HoverState | null>(null);

export function HeroHoverGroup({
  children,
  className,
  style,
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}) {
  const [hovered, setHovered] = useState<number | null>(null);
  const reduce = usePrefersReducedMotion();
  const finePointer = useFinePointer();

  return (
    <HeroHoverContext.Provider value={{ hovered, setHovered, allowMotion: finePointer && reduce === false }}>
      <LayoutGroup id="hero-card-hover">
        <div className={className} style={style}>
          {children}
        </div>
      </LayoutGroup>
    </HeroHoverContext.Provider>
  );
}

export function HeroHoverCard({
  index,
  radius,
  children,
}: {
  index: number;
  radius: number;
  children: ReactNode;
}) {
  const ctx = useContext(HeroHoverContext);
  if (!ctx) {
    throw new Error("HeroHoverCard must be used within HeroHoverGroup");
  }

  const { hovered, setHovered, allowMotion } = ctx;
  const active = allowMotion && hovered === index;

  return (
    <div
      className="relative"
      data-hero-card={index}
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
    >
      <AnimatePresence>
        {active ? (
          <motion.span
            layoutId="heroHoverHighlight"
            className="pointer-events-none absolute inset-0 z-20 block"
            style={{ borderRadius: radius, boxShadow: "inset 0 0 0 3px #4a7a2e" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.15 } }}
            exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
          />
        ) : null}
      </AnimatePresence>
      <div className="relative z-10">{children}</div>
    </div>
  );
}
