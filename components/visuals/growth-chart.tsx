"use client";

import { motion } from "framer-motion";

const BARS = [38, 52, 47, 61, 70, 66, 82, 91];
const WIDTH = 320;
const HEIGHT = 200;
const STEP = WIDTH / (BARS.length - 1);

export function GrowthChart({ className = "" }: { className?: string }) {
  return (
    <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} className={className} aria-hidden="true">
      {BARS.map((v, i) => {
        const x = i * STEP;
        const y = HEIGHT - v * 1.9;
        return (
          <motion.line
            key={`bar-${i}`}
            x1={x}
            y1={HEIGHT}
            x2={x}
            y2={y}
            stroke="currentColor"
            className="text-amber/25"
            strokeWidth={10}
            strokeLinecap="round"
            initial={{ opacity: 0, scaleY: 0 }}
            whileInView={{ opacity: 1, scaleY: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            style={{ transformOrigin: `${x}px ${HEIGHT}px` }}
            transition={{ duration: 0.6, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
          />
        );
      })}
      <motion.polyline
        points={BARS.map((v, i) => `${i * STEP},${HEIGHT - v * 1.9}`).join(" ")}
        fill="none"
        stroke="currentColor"
        className="text-plum"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1.3, ease: "easeInOut" }}
      />
      {BARS.map((v, i) => {
        const x = i * STEP;
        const y = HEIGHT - v * 1.9;
        return (
          <motion.circle
            key={`pt-${i}`}
            cx={x}
            cy={y}
            r={4}
            className="fill-plum"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.4, delay: 0.4 + i * 0.06 }}
          />
        );
      })}
    </svg>
  );
}
