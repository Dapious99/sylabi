import type { ReactNode } from "react";
import { SiteNav } from "./site-nav";
import { SiteFooter } from "./site-footer";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: ReactNode;
  lede?: string;
}) {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-plum">{eyebrow}</p>
        <h1 className="max-w-4xl font-display text-5xl leading-[1.05] md:text-6xl">{title}</h1>
        {lede && <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{lede}</p>}
      </div>
    </section>
  );
}