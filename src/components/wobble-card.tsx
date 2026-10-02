"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, type MouseEvent, type ReactNode } from "react";
import { useFinePointer, usePrefersReducedMotion } from "@/components/use-prefers-reduced-motion";

const spring = { stiffness: 280, damping: 22, mass: 0.35 };

export function WobbleCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  const reduce = usePrefersReducedMotion();
  const finePointer = useFinePointer();
  const allow = finePointer && reduce === false;

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);

  const x = useSpring(rawX, spring);
  const y = useSpring(rawY, spring);
  const rotateX = useSpring(tiltX, spring);
  const rotateY = useSpring(tiltY, spring);

  useEffect(() => {
    if (allow) return;
    rawX.set(0);
    rawY.set(0);
    tiltX.set(0);
    tiltY.set(0);
  }, [allow, rawX, rawY, tiltX, tiltY]);

  if (!allow) {
    return <div className={className}>{children}</div>;
  }

  const onMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const dx = event.clientX - (rect.left + rect.width / 2);
    const dy = event.clientY - (rect.top + rect.height / 2);
    rawX.set(dx / 28);
    rawY.set(dy / 28);
    tiltY.set((dx / rect.width) * 6);
    tiltX.set(-(dy / rect.height) * 6);
  };

  const reset = () => {
    rawX.set(0);
    rawY.set(0);
    tiltX.set(0);
    tiltY.set(0);
  };

  return (
    <motion.div
      data-wobble-card
      onMouseMove={onMouseMove}
      onMouseLeave={reset}
      style={{
        x,
        y,
        rotateX,
        rotateY,
        transformPerspective: 900,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
