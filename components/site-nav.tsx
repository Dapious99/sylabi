"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, Menu, X } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MotionLink } from "@/components/motion/motion-link";

const links = [
  { href: "/", label: "Home" },
  { href: "/solution", label: "Solution" },
  { href: "/technology", label: "Technology" },
  { href: "/impact", label: "Impact" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">
        <Link href="/" className="flex shrink-0 items-center gap-2 font-display text-xl" onClick={() => setOpen(false)}>
          <span className="grid h-8 w-8 place-items-center rounded-full bg-primary text-primary-foreground">
            <BookOpen className="h-4 w-4" />
          </span>
          Sylabi
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`relative py-1 transition hover:text-foreground ${isActive(l.href) ? "text-foreground" : ""}`}
            >
              {l.label}
              {isActive(l.href) && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 right-0 h-px bg-foreground"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </nav>

        <MotionLink
          href="/contact"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="hidden rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground shadow-sm transition hover:brightness-95 md:inline-flex"
        >
          Contact us
        </MotionLink>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-border bg-background md:hidden"
          >
            <nav className="mx-auto flex max-w-7xl flex-col px-6 py-4">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`py-3 text-base text-muted-foreground transition hover:text-foreground ${isActive(l.href) ? "text-foreground" : ""}`}
                >
                  {l.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-3 inline-flex items-center justify-center rounded-full bg-accent px-5 py-3 text-sm font-medium text-accent-foreground"
              >
                Contact us
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
