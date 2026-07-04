"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Reveal({
  children,
  delay = 0,
  y = 28,
  duration = 0.7,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  duration?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      transition={{ duration, delay, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const groupVariants: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.05 },
  },
};

export function StaggerGroup({
  children,
  className,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "ol" | "ul";
}) {
  const Component = motion[as];
  return (
    <Component
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      variants={groupVariants}
      className={className}
    >
      {children}
    </Component>
  );
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};

export function StaggerItem({
  children,
  className,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "li";
}) {
  const Component = motion[as];
  return (
    <Component variants={itemVariants} className={className}>
      {children}
    </Component>
  );
}
