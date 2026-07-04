"use client";

import { motion } from "framer-motion";
import { GitCompare } from "lucide-react";

const ROWS = [
  { t: "Week 1 · Foundations of Algorithms", tone: "match" as const },
  { t: "Week 3 · Recursion & Complexity", tone: "match" as const },
  { t: "Week 5 · Dynamic Programming", tone: "gap" as const },
  { t: "Week 7 · Graph Traversal", tone: "match" as const },
  { t: "Week 9 · NP-Completeness", tone: "shift" as const },
  { t: "Week 11 · Amortised Analysis", tone: "gap" as const },
];

const TONE = {
  match: { dot: "bg-sage", text: "text-sage", label: "Overlap" },
  gap: { dot: "bg-amber", text: "text-amber", label: "Gap" },
  shift: { dot: "bg-plum", text: "text-plum", label: "Weight shift" },
};

export function DiffMockup({ className = "" }: { className?: string }) {
  return (
    <div
      className={`rounded-3xl border border-border bg-card p-6 shadow-[0_30px_80px_-30px_rgba(15,25,55,0.28)] ${className}`}
    >
      <div className="flex items-center justify-between border-b border-border pb-4">
        <div className="flex items-center gap-2 text-sm font-medium">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary/10 text-primary">
            <GitCompare className="h-4 w-4" />
          </span>
          CSC 301 · UNILAG vs. OAU
        </div>
        <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
          Live diff
        </span>
      </div>
      <ul className="mt-4 space-y-2">
        {ROWS.map((row, i) => {
          const tone = TONE[row.tone];
          return (
            <motion.li
              key={row.t}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.45, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center justify-between gap-3 rounded-xl border border-border/70 bg-background px-4 py-3 text-sm"
            >
              <span className="flex min-w-0 items-center gap-3">
                <span className={`h-2 w-2 shrink-0 rounded-full ${tone.dot}`} />
                <span className="truncate">{row.t}</span>
              </span>
              <span className={`shrink-0 text-xs font-medium ${tone.text}`}>{tone.label}</span>
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
}
