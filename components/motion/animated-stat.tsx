"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

export function AnimatedStat({ value, className }: { value: string; className?: string }) {
  const match = value.match(/^([\d,]+(?:\.\d+)?)(.*)$/);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 1.4, bounce: 0 });
  const [display, setDisplay] = useState(() => (match ? "0" : value));

  const numStr = match?.[1] ?? "";
  const suffix = match?.[2] ?? "";
  const target = parseFloat(numStr.replace(/,/g, "")) || 0;
  const decimals = numStr.includes(".") ? numStr.split(".")[1].length : 0;
  const hasCommas = numStr.includes(",");

  useEffect(() => {
    if (isInView) motionValue.set(target);
  }, [isInView, target, motionValue]);

  useEffect(() => {
    if (!match) return;
    const unsubscribe = spring.on("change", (v) => {
      const fixed = v.toFixed(decimals);
      setDisplay(
        hasCommas
          ? Number(fixed).toLocaleString(undefined, {
              minimumFractionDigits: decimals,
              maximumFractionDigits: decimals,
            })
          : fixed,
      );
    });
    return unsubscribe;
  }, [spring, decimals, hasCommas, match]);

  if (!match) {
    return <span ref={ref} className={className}>{value}</span>;
  }

  return (
    <span ref={ref} className={className}>
      {display}
      {suffix}
    </span>
  );
}
