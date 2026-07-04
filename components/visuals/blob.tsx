"use client";

import { motion } from "framer-motion";

export function FloatingBlob({
  className = "",
  color = "bg-amber/30",
  duration = 11,
}: {
  className?: string;
  color?: string;
  duration?: number;
}) {
  return (
    <motion.div
      aria-hidden="true"
      className={`pointer-events-none absolute rounded-full blur-3xl ${color} ${className}`}
      animate={{ x: [0, 16, 0], y: [0, -14, 0] }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}
