import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Check,
  ScanLine,
  GitCompare,
  Layers,
  Globe2,
  Sparkles,
} from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { team } from "@/lib/team";

function Index() {
  return (
    <PageShell>
      <Hero />
      <Marquee />
      <Problem />
      <Solution />
      <Features />
      <HowItWorks />
      <Impact />
      <Team />
      <CTA />
    </PageShell>
  );
}

export default Index;

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_80%_0%,var(--amber-soft)_0%,transparent_60%)] opacity-70" />
      <div className="mx-auto grid max-w-7xl gap-14 px-6 py-20 md:py-28 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <div>
          <p className="mb-6 flex items-center gap-2 text-sm font-medium uppercase tracking-[0.18em] text-sage">
            <Sparkles className="h-4 w-4" />
            Syllabus intelligence for universities
          </p>
          <h1 className="font-display text-5xl leading-[1.02] tracking-tight md:text-6xl lg:text-7xl">
            Compare every syllabus <em className="text-plum">before</em> you pick a course.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Sylabi lets tertiary students compare course outlines across universities, departments
            and lecturers — so you study what actually gets tested and choose electives that carry
            weight.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90"
            >
              Start comparing <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/solution"
              className="inline-flex items-center rounded-full border border-border bg-card px-6 py-3 text-sm font-medium transition hover:bg-secondary"
            >
              Explore solutions
            </Link>
          </div>
          <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted-foreground">
            {["300+ courses indexed", "Side-by-side diffs", "Past-question mapping"].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <Check className="h-4 w-4 text-sage" />
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <Image
            src="/hero-student.jpg"
            alt="Student comparing course syllabi on phone in a warm library"
            width={1280}
            height={1280}
            priority
            className="aspect-[4/5] w-full rounded-3xl object-cover shadow-[0_30px_80px_-30px_rgba(15,25,55,0.28)]"
          />
          <div className="absolute -bottom-6 -left-6 hidden max-w-xs rounded-2xl border border-border bg-card p-4 shadow-xl md:block">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-sage/10 text-sage">
                <GitCompare className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
                  Diff
                </p>
                <p className="truncate text-sm font-medium">
                  CSC 201 · 3 topics missing at your school
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = [
    "Pilot at UNILAG",
    "KNUST partner (proposed)",
    "NUC-aligned",
    "Backed by student unions",
    "AWS Activate",
  ];
  return (
    <div className="border-y border-border bg-secondary/60">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-10 gap-y-3 px-6 py-5 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
        {items.map((i) => (
          <span key={i}>{i}</span>
        ))}
      </div>
    </div>
  );
}

function Problem() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-plum">
        The problem
      </p>
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-20">
        <h2 className="font-display text-4xl leading-tight md:text-5xl">
          Two students, same course code,{" "}
          <span className="text-destructive">completely different</span> syllabi.
        </h2>
        <div className="space-y-5 text-lg text-muted-foreground">
          <p>
            Across African universities, the same course title can hide wildly different scope,
            textbooks, and assessment weights. Students transferring, choosing electives, or
            preparing for professional exams are flying blind.
          </p>
          <p>
            Lecturers update outlines quietly. Past questions drift from the official syllabus.
            Study groups waste weeks on topics that never appear on the exam — and skip the ones
            that do.
          </p>
          <p className="text-foreground">
            The cost: lower grades, wasted tuition, and graduates whose transcripts don&apos;t reflect
            what they actually know.
          </p>
        </div>
      </div>
    </section>
  );
}

function Solution() {
  return (
    <section className="bg-secondary/40">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 md:py-32 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <Image
          src="/syllabus-docs.jpg"
          alt="Syllabus documents laid out for comparison"
          width={1280}
          height={960}
          className="aspect-[4/3] w-full rounded-3xl object-cover shadow-lg"
        />
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-plum">
            The solution
          </p>
          <h2 className="font-display text-4xl leading-tight md:text-5xl">
            A side-by-side view of every course you&apos;ll ever take.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Upload your outline or pick a course code. Sylabi pulls matching syllabi from other
            departments, campuses and cohorts, highlights the differences, and maps each topic to
            past questions and trusted resources — in seconds.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              {
                icon: GitCompare,
                title: "Diff view",
                body: "See topic-by-topic overlaps and gaps between any two syllabi.",
              },
              {
                icon: Layers,
                title: "Weight mapping",
                body: "Know what carries the most marks before the exam.",
              },
              {
                icon: ScanLine,
                title: "Past-question links",
                body: "Every topic connects to real questions from previous years.",
              },
              {
                icon: Globe2,
                title: "Cross-university",
                body: "Compare with schools across Nigeria, Ghana, Kenya and beyond.",
              },
            ].map(({ icon: Icon, title, body }) => (
              <div key={title} className="rounded-2xl border border-border bg-card p-5">
                <Icon className="h-5 w-5 text-sage" />
                <p className="mt-3 font-medium">{title}</p>
                <p className="mt-1 text-sm text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Features() {
  const items = [
    {
      k: "01",
      t: "Course library",
      b: "Search 300-level Mechanical Engineering to 100-level Law — the index grows with every upload.",
    },
    {
      k: "02",
      t: "Lecturer profiles",
      b: "See how the same course changes hands. Which lecturer emphasises theory, which one leans practical.",
    },
    {
      k: "03",
      t: "Study packs",
      b: "Turn any syllabus into a week-by-week study plan with checkpoints and resources.",
    },
    {
      k: "04",
      t: "Elective advisor",
      b: "Get elective suggestions based on your major, career goals, and current CGPA trend.",
    },
    {
      k: "05",
      t: "Group sync",
      b: "Share a syllabus view with a study group. Everyone sees the same gaps.",
    },
    { k: "06", t: "Offline mode", b: "Download your comparison as a PDF. No data? No problem." },
  ];
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
      <div className="max-w-3xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-plum">
          What you get
        </p>
        <h2 className="font-display text-4xl leading-tight md:text-5xl">
          Built for how students actually plan a semester.
        </h2>
      </div>
      <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {items.map((i) => (
          <div key={i.k} className="bg-background p-8 transition hover:bg-card">
            <p className="font-display text-sm text-amber">{i.k}</p>
            <h3 className="mt-4 font-display text-2xl">{i.t}</h3>
            <p className="mt-3 text-muted-foreground">{i.b}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      t: "Drop your course",
      b: "Paste a course code or upload a syllabus PDF from your department.",
    },
    {
      t: "Pick what to compare",
      b: "Another school, another lecturer, or last year's version of the same course.",
    },
    {
      t: "Get the diff",
      b: "Overlaps in green, gaps in amber, weight shifts in plum. Everything actionable.",
    },
  ];
  return (
    <section id="how" className="border-y border-border bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-amber">
          How it works
        </p>
        <h2 className="max-w-2xl font-display text-4xl leading-tight md:text-5xl">
          Three steps between you and a smarter semester.
        </h2>
        <ol className="mt-14 grid gap-8 md:grid-cols-3">
          {steps.map((s, idx) => (
            <li key={s.t} className="border-t border-primary-foreground/20 pt-6">
              <p className="font-display text-5xl text-amber">{String(idx + 1).padStart(2, "0")}</p>
              <h3 className="mt-4 font-display text-2xl">{s.t}</h3>
              <p className="mt-3 text-primary-foreground/70">{s.b}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Impact() {
  const stats = [
    { n: "12,400+", l: "topics indexed across faculties" },
    { n: "3.2x", l: "faster exam prep in pilot cohorts" },
    { n: "84%", l: "of students found a gap in their outline" },
    { n: "6", l: "universities in the current pilot" },
  ];
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
      <div className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:items-end">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-plum">Impact</p>
          <h2 className="font-display text-4xl leading-tight md:text-5xl">
            Small tool. Real difference.
          </h2>
        </div>
        <p className="text-lg text-muted-foreground">
          Sylabi started as a spreadsheet passed around a WhatsApp group before finals. Today it&apos;s
          the study layer thousands of students open before every semester — and every year the
          numbers get better.
        </p>
      </div>
      <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.l} className="bg-background p-8">
            <p className="font-display text-4xl md:text-5xl">{s.n}</p>
            <p className="mt-3 text-sm text-muted-foreground">{s.l}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Team() {
  return (
    <section className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-plum">
              The team
            </p>
            <h2 className="max-w-2xl font-display text-4xl leading-tight md:text-5xl">
              Real people. Real classrooms.
            </h2>
          </div>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-sm font-medium text-plum hover:underline"
          >
            Meet the whole team <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {team.map((m) => (
            <article key={m.name} className="rounded-3xl border border-border bg-card p-8">
              <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-secondary/40">
                <Image
                  src={m.image}
                  alt={`${m.name}, ${m.role} at Sylabi`}
                  width={1024}
                  height={1024}
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="mt-6 font-display text-2xl">{m.name}</h3>
              <p className="mt-1 text-sm uppercase tracking-widest text-muted-foreground">
                {m.role}
              </p>
              <p className="mt-4 text-muted-foreground">{m.bio}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="cta" className="mx-auto max-w-7xl px-6 pb-24 md:pb-32">
      <div className="relative overflow-hidden rounded-[2rem] bg-primary p-10 text-primary-foreground md:p-16">
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-amber/30 blur-3xl" />
        <div className="relative grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <div>
            <h2 className="font-display text-4xl leading-tight md:text-5xl">
              Ready to see your syllabus in a new light?
            </h2>
            <p className="mt-5 max-w-xl text-primary-foreground/70">
              Tell us your course and school — we&apos;ll add it to the index first and reach out with
              your first comparison.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-amber px-6 py-3 text-sm font-medium text-ink transition hover:brightness-95"
            >
              Contact us <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/solution"
              className="inline-flex items-center rounded-full border border-primary-foreground/30 px-6 py-3 text-sm font-medium text-primary-foreground transition hover:bg-primary-foreground/10"
            >
              See solutions
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
