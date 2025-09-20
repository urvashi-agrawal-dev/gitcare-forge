"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

interface ArcTimelineProps {
  items: TimelineItem[];
  className?: string;
}

export function ArcTimeline({ items, className = "" }: ArcTimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const radius = 300;
  const centerX = radius + 50;
  const centerY = radius + 50;

  return (
    <div ref={containerRef} className={`relative ${className}`} style={{ height: `${radius * 1.5}px` }}>
      <svg
        className="absolute inset-0"
        width={centerX * 2}
        height={radius * 1.5}
        viewBox={`0 0 ${centerX * 2} ${radius * 1.5}`}
      >
        {/* Arc path */}
        <motion.path
          d={`M 50 ${centerY} A ${radius} ${radius} 0 0 1 ${centerX * 2 - 50} ${centerY}`}
          fill="none"
          stroke="hsl(var(--border))"
          strokeWidth="2"
          strokeDasharray="5 5"
          initial={{ pathLength: 0 }}
          animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        
        {/* Animated beam along arc */}
        <motion.path
          d={`M 50 ${centerY} A ${radius} ${radius} 0 0 1 ${centerX * 2 - 50} ${centerY}`}
          fill="none"
          stroke="url(#arc-gradient)"
          strokeWidth="3"
          strokeDasharray="20 80"
          initial={{ strokeDashoffset: 100 }}
          animate={isInView ? { strokeDashoffset: -100 } : { strokeDashoffset: 100 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />

        <defs>
          <linearGradient id="arc-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="1" />
            <stop offset="100%" stopColor="hsl(var(--secondary))" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      {/* Timeline items */}
      {items.map((item, index) => {
        const angle = (index / (items.length - 1)) * Math.PI;
        const x = centerX - Math.cos(angle) * radius;
        const y = centerY - Math.sin(angle) * radius;

        return (
          <motion.div
            key={index}
            className="absolute glass-card max-w-xs"
            style={{
              left: `${x}px`,
              top: `${y - 60}px`,
              transform: "translate(-50%, -50%)",
            }}
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={
              isInView
                ? { opacity: 1, scale: 1, y: 0 }
                : { opacity: 0, scale: 0.5, y: 20 }
            }
            transition={{
              duration: 0.6,
              delay: index * 0.2,
              ease: "easeOut",
            }}
          >
            <div className="p-4">
              <div className="text-sm font-bold text-primary mb-1">{item.year}</div>
              <div className="text-sm font-semibold text-foreground mb-2">{item.title}</div>
              <div className="text-xs text-muted-foreground">{item.description}</div>
            </div>
            
            {/* Connection point */}
            <motion.div
              className="absolute w-3 h-3 bg-primary rounded-full shadow-neon"
              style={{
                left: "50%",
                bottom: "-6px",
                transform: "translateX(-50%)",
              }}
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.3, delay: index * 0.2 + 0.3 }}
            />
          </motion.div>
        );
      })}
    </div>
  );
}