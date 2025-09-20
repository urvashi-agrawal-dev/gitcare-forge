"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface AnimatedBeamProps {
  containerRef: React.RefObject<HTMLElement>;
  fromRef: React.RefObject<HTMLElement>;
  toRef: React.RefObject<HTMLElement>;
  curvature?: number;
  reverse?: boolean;
  duration?: number;
  delay?: number;
  className?: string;
}

export function AnimatedBeam({
  containerRef,
  fromRef,
  toRef,
  curvature = 0,
  reverse = false,
  duration = 3,
  delay = 0,
  className = "",
}: AnimatedBeamProps) {
  const pathRef = useRef<SVGPathElement>(null);
  const [pathD, setPathD] = useState("");

  useEffect(() => {
    const updatePath = () => {
      if (!containerRef.current || !fromRef.current || !toRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const fromRect = fromRef.current.getBoundingClientRect();
      const toRect = toRef.current.getBoundingClientRect();

      const fromX = fromRect.left + fromRect.width / 2 - containerRect.left;
      const fromY = fromRect.top + fromRect.height / 2 - containerRect.top;
      const toX = toRect.left + toRect.width / 2 - containerRect.left;
      const toY = toRect.top + toRect.height / 2 - containerRect.top;

      const midX = (fromX + toX) / 2;
      const midY = (fromY + toY) / 2 - curvature;

      const path = `M ${fromX} ${fromY} Q ${midX} ${midY} ${toX} ${toY}`;
      setPathD(path);
    };

    updatePath();
    const handleResize = () => updatePath();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [containerRef, fromRef, toRef, curvature]);

  return (
    <svg
      className={`pointer-events-none absolute inset-0 z-0 ${className}`}
      viewBox={`0 0 ${containerRef.current?.offsetWidth || 0} ${containerRef.current?.offsetHeight || 0}`}
    >
      <path
        d={pathD}
        fill="none"
        stroke="url(#beam-gradient)"
        strokeWidth="2"
        strokeOpacity="0.3"
      />
      <motion.path
        ref={pathRef}
        d={pathD}
        fill="none"
        stroke="url(#beam-gradient)"
        strokeWidth="2"
        strokeDasharray="4 4"
        strokeDashoffset={reverse ? -8 : 8}
        animate={{
          strokeDashoffset: reverse ? 8 : -8,
        }}
        transition={{
          duration,
          delay,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <defs>
        <linearGradient id="beam-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0" />
          <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="1" />
          <stop offset="100%" stopColor="hsl(var(--secondary))" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}