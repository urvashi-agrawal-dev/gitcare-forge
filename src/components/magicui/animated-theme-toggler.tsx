"use client";

import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useState } from "react";

interface AnimatedThemeTogglerProps {
  className?: string;
}

export function AnimatedThemeToggler({ className = "" }: AnimatedThemeTogglerProps) {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    setIsDark(!isDark);
    // In a real app, you'd toggle the theme here
  };

  return (
    <motion.button
      className={`relative flex items-center justify-center w-14 h-8 rounded-full bg-glass border border-glass-border p-1 ${className}`}
      onClick={toggleTheme}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Background glow */}
      <motion.div
        className="absolute inset-0 rounded-full"
        animate={{
          boxShadow: isDark
            ? "0 0 20px hsl(var(--primary) / 0.3)"
            : "0 0 20px hsl(var(--warning) / 0.3)",
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Toggle switch */}
      <motion.div
        className="absolute w-6 h-6 rounded-full bg-gradient-to-r flex items-center justify-center"
        animate={{
          x: isDark ? -12 : 12,
          background: isDark
            ? "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--secondary)))"
            : "linear-gradient(135deg, hsl(var(--warning)), hsl(var(--warning) / 0.8))",
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
      >
        <motion.div
          animate={{ rotate: isDark ? 0 : 180 }}
          transition={{ duration: 0.3 }}
        >
          {isDark ? (
            <Moon className="w-3 h-3 text-background" />
          ) : (
            <Sun className="w-3 h-3 text-background" />
          )}
        </motion.div>
      </motion.div>

      {/* Background icons */}
      <div className="flex items-center justify-between w-full px-1">
        <motion.div
          animate={{ opacity: isDark ? 0.3 : 0.7 }}
          transition={{ duration: 0.3 }}
        >
          <Sun className="w-3 h-3 text-muted-foreground" />
        </motion.div>
        <motion.div
          animate={{ opacity: isDark ? 0.7 : 0.3 }}
          transition={{ duration: 0.3 }}
        >
          <Moon className="w-3 h-3 text-muted-foreground" />
        </motion.div>
      </div>
    </motion.button>
  );
}