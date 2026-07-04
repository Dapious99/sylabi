import type { Metadata } from "next";
import { ArrowRight, Cpu, Database, Server, Shield, Zap, Network, Rocket } from "lucide-react";
import { PageShell, PageHeader } from "@/components/page-shell";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/reveal";
import { MotionLink } from "@/components/motion/motion-link";
import { KnowledgeGraph } from "@/components/visuals/knowledge-graph";

export const metadata: Metadata = {
  title: "Technology",
  description:
    "Inside the Sylabi stack: syllabus parsing, semantic diffing, and a curriculum knowledge graph built for African universities.",
  openGraph: {
    title: "Technology — Sylabi",
    description: "Semantic syllabus intelligence, engineered for the real classroom.",
  },
};

const pipeline = [
  {
    n: "1. Ingest",
    b: "Students and faculties upload PDFs, DOCX outlines or paste raw text. We also crawl publicly-listed course pages with permission.",
  },
  {
    n: "2. Parse",
    b: "A layout-aware parser splits every syllabus into topics, sub-topics, learning outcomes, assessment weights and reading lists.",
  },
  {
    n: "3. Normalise",
    b: "Topics are mapped to a shared taxonomy so 'Ohm's Law' at UNILAG equals 'Ohm's Law' at KNUST — even when the wording differs.",
  },
  {
    n: "4. Diff",
    b: "A semantic diff engine finds overlaps, gaps and weight shifts across any two syllabi in under a second.",
  },
  {
    n: "5. Link",
    b: "Each topic is joined with past-question banks, textbook chapters and vetted online lectures via a curriculum knowledge graph.",
  },
  {
    n: "6. Explain",
    b: "An LLM layer summarises differences and suggests a study plan — always grounded in cited source syllabi.",
  },
];

const stack = [
  {
    icon: Cpu,
    t: "Parsing",
    b: "Layout-aware PDF/DOCX pipeline with OCR fallback for scanned handouts.",
  },
  {
    icon: Network,
    t: "Knowledge graph",
    b: "Topics, courses, lecturers and resources modelled as a queryable graph.",
  },
  {
    icon: Zap,
    t: "Vector search",
    b: "Embeddings power semantic matching across differently-worded outlines.",
  },
  {
    icon: Rocket,
    t: "GPU inference",
    b: "NVIDIA GPUs run our embedding and LLM inference, keeping diffs fast even at scale.",
  },
  {
    icon: Server,
    t: "Cloud infrastructure",
    b: "Built on AWS — edge functions and managed compute keep the app fast on 3G and cheap to scale per student.",
  },
  {
    icon: Database,
    t: "Postgres + storage",
    b: "Every syllabus versioned, every diff reproducible, every source cited.",
  },
  {
    icon: Shield,
    t: "Safety & privacy",
    b: "Uploads are scoped to your school. Personal data never leaves the region.",
  },
];

export default function TechPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Technology"
        title={<>A real intelligence stack, built for the classroom.</>}
        lede="Sylabi combines document AI, a curriculum knowledge graph, and grounded language models — engineered for African university networks, not Silicon Valley demo days."
      />

      <div className="border-b border-border bg-secondary/40">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-12 gap-y-3 px-6 py-6 text-sm text-muted-foreground">
          <span className="text-xs font-semibold uppercase tracking-[0.18em]">Powered by</span>
          <span className="font-display text-xl text-foreground">AWS</span>
          <span className="font-display text-xl text-foreground">NVIDIA</span>
        </div>
      </div>

      <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <Reveal>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-plum">
            The pipeline
          </p>
          <h2 className="max-w-3xl font-display text-4xl leading-tight md:text-5xl">
            From raw PDF to a study plan you can trust.
          </h2>
        </Reveal>
        <StaggerGroup className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {pipeline.map((s) => (
            <StaggerItem key={s.n} className="bg-background p-8">
              <p className="font-display text-xl text-amber">{s.n}</p>
              <p className="mt-3 text-muted-foreground">{s.b}</p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 md:py-32 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <Reveal>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-plum">
              The knowledge graph
            </p>
            <h2 className="font-display text-4xl leading-tight md:text-5xl">
              Every topic, course and resource — one connected graph.
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Topics, lecturers, past questions and reading lists are modelled as nodes in a
              queryable graph, so a diff isn&apos;t just text matching — it&apos;s a walk across shared
              curriculum structure.
            </p>
          </Reveal>
          <Reveal delay={0.1} y={36} className="text-sage">
            <KnowledgeGraph className="mx-auto w-full max-w-md" />
          </Reveal>
        </div>
      </section>

      <section className="border-b border-border bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <Reveal>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-amber">
              The stack
            </p>
            <h2 className="max-w-3xl font-display text-4xl leading-tight md:text-5xl">
              Built on tools we can operate — not ones we can only demo.
            </h2>
          </Reveal>
          <StaggerGroup className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {stack.map(({ icon: Icon, t, b }) => (
              <StaggerItem
                key={t}
                className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-6 transition hover:-translate-y-1 hover:bg-primary-foreground/10"
              >
                <Icon className="h-5 w-5 text-amber" />
                <p className="mt-4 font-display text-xl">{t}</p>
                <p className="mt-2 text-primary-foreground/70">{b}</p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <Reveal className="flex flex-col items-start justify-between gap-6 rounded-3xl border border-border bg-card p-10 md:flex-row md:items-center">
          <div>
            <h3 className="font-display text-3xl">Want a technical deep-dive?</h3>
            <p className="mt-2 text-muted-foreground">
              We&apos;re happy to walk research teams and university IT through the architecture.
            </p>
          </div>
          <MotionLink
            href="/contact"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground"
          >
            Contact us <ArrowRight className="h-4 w-4" />
          </MotionLink>
        </Reveal>
      </section>
    </PageShell>
  );
}
