"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform, useVelocity } from "framer-motion";

interface ScrollBasedVelocityProps {
  children: React.ReactNode;
  baseVelocity?: number;
  className?: string;
}

export function ScrollBasedVelocity({
  children,
  baseVelocity = 100,
  className = "",
}: ScrollBasedVelocityProps) {
  const baseX = useRef(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(velocityFactor, (latest) => {
    let moveBy = latest * baseVelocity;
    if (baseVelocity < 0) moveBy *= -1;
    baseX.current += moveBy;
    return baseX.current;
  });

  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <motion.div
        className="flex whitespace-nowrap"
        style={{ x }}
      >
        <span className="block mr-8">{children}</span>
        <span className="block mr-8">{children}</span>
        <span className="block mr-8">{children}</span>
        <span className="block mr-8">{children}</span>
      </motion.div>
    </div>
  );
}