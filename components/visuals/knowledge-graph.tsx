"use client";

import { motion } from "framer-motion";

const NODES = [
  { x: 40, y: 130, big: false },
  { x: 130, y: 55, big: true },
  { x: 130, y: 205, big: false },
  { x: 230, y: 100, big: true },
  { x: 230, y: 190, big: false },
  { x: 320, y: 45, big: false },
  { x: 320, y: 140, big: true },
  { x: 320, y: 225, big: false },
  { x: 405, y: 100, big: true },
];

const EDGES: [number, number][] = [
  [0, 1],
  [0, 2],
  [1, 3],
  [2, 4],
  [1, 2],
  [3, 5],
  [3, 6],
  [4, 6],
  [4, 7],
  [6, 8],
  [5, 8],
];

export function KnowledgeGraph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 440 260" className={className} aria-hidden="true">
      {EDGES.map(([from, to], i) => {
        const a = NODES[from];
        const b = NODES[to];
        return (
          <motion.line
            key={`e-${i}`}
            x1={a.x}
            y1={a.y}
            x2={b.x}
            y2={b.y}
            stroke="currentColor"
            strokeOpacity={0.28}
            strokeWidth={1.5}
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.9, delay: i * 0.05, ease: "easeOut" }}
          />
        );
      })}
      {NODES.map((n, i) => (
        <motion.circle
          key={`n-${i}`}
          cx={n.x}
          cy={n.y}
          r={n.big ? 9 : 5.5}
          className={n.big ? "fill-amber" : "fill-sage"}
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.45, delay: 0.4 + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
        />
      ))}
      {NODES.filter((n) => n.big).map((n, i) => (
        <motion.circle
          key={`p-${i}`}
          cx={n.x}
          cy={n.y}
          r={9}
          className="fill-none stroke-amber"
          strokeWidth={1.5}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.5, 0], scale: [1, 1.8, 1.8] }}
          transition={{ duration: 2.6, repeat: Infinity, delay: i * 0.5, ease: "easeOut" }}
          style={{ transformOrigin: `${n.x}px ${n.y}px` }}
        />
      ))}
    </svg>
  );
}
