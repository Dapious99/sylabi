import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { PageShell, PageHeader } from "@/components/page-shell";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/reveal";
import { AnimatedStat } from "@/components/motion/animated-stat";
import { MotionLink } from "@/components/motion/motion-link";
import { GrowthChart } from "@/components/visuals/growth-chart";

export const metadata: Metadata = {
  title: "Impact",
  description:
    "How Sylabi measures success: student grades saved, curriculum quality raised, and access widened across African tertiary institutions.",
  openGraph: {
    title: "Impact — Sylabi",
    description: "The numbers we chase and the goals we align with.",
  },
};

const numbers = [
  {
    n: "40%",
    l: "of tertiary students in Africa fail at least one course each year — most avoidably.",
  },
  { n: "12M+", l: "students across Sub-Saharan universities Sylabi is built to serve." },
  { n: "3.2x", l: "faster exam prep reported by students in early pilot cohorts." },
  { n: "84%", l: "of students found a real gap between their outline and their exam." },
];

const pillars = [
  {
    t: "Student outcomes",
    b: "Every prevented resit is a saved semester. We measure success in grades protected, not just app installs.",
  },
  {
    t: "Curriculum quality",
    b: "Faculties get a live view of how their courses compare and where they've drifted from peers.",
  },
  {
    t: "Equity of access",
    b: "A student at a smaller polytechnic sees the same syllabus intelligence as one at a top-ranked federal university.",
  },
  {
    t: "Women in STEM",
    b: "We design for shared devices, voice-readable summaries and low-data usage — where most drop-offs happen.",
  },
];

const sdgs = [
  {
    t: "SDG 4 · Quality Education",
    b: "Directly closes the gap between what is taught and what is tested.",
  },
  {
    t: "SDG 5 · Gender Equality",
    b: "Lowers the on-ramp for women in male-dominated technical courses.",
  },
  {
    t: "SDG 8 · Decent Work",
    b: "Graduates leave school with skills that actually match the transcript.",
  },
  {
    t: "SDG 10 · Reduced Inequalities",
    b: "Levels curriculum access across elite and under-resourced institutions.",
  },
];

export default function ImpactPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Impact"
        title={<>Technology that protects grades — and the futures behind them.</>}
        lede="Sylabi exists to close the gap between what tertiary students are taught and what they're tested on. Here's how we measure ourselves."
      />

      <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <Reveal>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-plum">
            The scale of the problem
          </p>
          <h2 className="max-w-3xl font-display text-4xl leading-tight md:text-5xl">
            The numbers we&apos;re chasing.
          </h2>
        </Reveal>
        <StaggerGroup className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
          {numbers.map((s) => (
            <StaggerItem key={s.l} className="bg-background p-8">
              <AnimatedStat value={s.n} className="font-display text-5xl" />
              <p className="mt-4 text-sm text-muted-foreground">{s.l}</p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 md:py-32 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <Reveal>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-plum">
              Our trajectory
            </p>
            <h2 className="font-display text-4xl leading-tight md:text-5xl">
              Adoption is compounding every semester.
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Every new pilot cohort brings more syllabi into the index — and every comparison
              makes the next one more accurate.
            </p>
          </Reveal>
          <Reveal delay={0.1} y={36}>
            <GrowthChart className="mx-auto w-full max-w-md" />
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <Reveal>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-plum">
            Our four pillars
          </p>
          <h2 className="max-w-3xl font-display text-4xl leading-tight md:text-5xl">
            Where we focus our impact.
          </h2>
        </Reveal>
        <StaggerGroup className="mt-14 grid gap-6 md:grid-cols-2">
          {pillars.map((p) => (
            <StaggerItem
              key={p.t}
              className="rounded-3xl border border-border bg-card p-8 transition hover:-translate-y-1 hover:shadow-md"
            >
              <h3 className="font-display text-2xl">{p.t}</h3>
              <p className="mt-3 text-muted-foreground">{p.b}</p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <Reveal>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-plum">
            Aligned with the UN SDGs
          </p>
          <h2 className="max-w-3xl font-display text-4xl leading-tight md:text-5xl">
            Four goals. One platform.
          </h2>
        </Reveal>
        <StaggerGroup className="mt-14 grid gap-6 md:grid-cols-2">
          {sdgs.map((s) => (
            <StaggerItem
              key={s.t}
              className="rounded-3xl border border-border bg-background p-8 transition hover:-translate-y-1 hover:shadow-md"
            >
              <h3 className="font-display text-xl text-plum">{s.t}</h3>
              <p className="mt-3 text-muted-foreground">{s.b}</p>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal
          delay={0.1}
          className="mt-16 flex flex-col items-start justify-between gap-6 rounded-3xl bg-primary p-10 text-primary-foreground md:flex-row md:items-center"
        >
          <div>
            <h3 className="font-display text-3xl">Partner with us on impact.</h3>
            <p className="mt-2 text-primary-foreground/70">
              Universities, NGOs and student unions — we&apos;d love to talk.
            </p>
          </div>
          <MotionLink
            href="/contact"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 rounded-full bg-amber px-6 py-3 text-sm font-medium text-ink"
          >
            Contact us <ArrowRight className="h-4 w-4" />
          </MotionLink>
        </Reveal>
      </section>
    </PageShell>
  );
}
