import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowRight,
  Users,
  Building2,
  GraduationCap,
  Briefcase,
  GitCompare,
  Layers,
  ScanLine,
  Globe2,
  BookOpen,
  Clock,
} from "lucide-react";
import { PageShell, PageHeader } from "@/components/page-shell";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/reveal";
import { MotionLink } from "@/components/motion/motion-link";
import { DiffMockup } from "@/components/visuals/diff-mockup";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "One platform for students, study groups, lecturers and universities to compare and align on course syllabi.",
  openGraph: {
    title: "Solutions — Sylabi",
    description: "Tailored to every role in the tertiary learning value chain.",
  },
};

const audiences = [
  {
    icon: GraduationCap,
    title: "For individual students",
    body: "Compare your outline to top-performing schools, generate a study plan, and see exactly what's likely to appear on the exam.",
    perks: [
      "Free tier for individual students",
      "Works on entry-level phones",
      "Syllabus-to-past-question mapping",
    ],
  },
  {
    icon: Users,
    title: "For study groups & clubs",
    body: "Sync a shared syllabus view so every member studies the same topics with the same weights and resources.",
    perks: ["Shared comparisons", "Weekly checkpoints", "Group progress dashboard"],
  },
  {
    icon: Briefcase,
    title: "For lecturers & tutors",
    body: "See how your outline compares with peer institutions and update your course with confidence.",
    perks: ["Peer benchmarking", "Resource suggestions", "Anonymous student gap reports"],
  },
  {
    icon: Building2,
    title: "For universities & faculties",
    body: "Standardise course quality across departments and accreditation cycles with a single source of truth.",
    perks: ["Faculty-wide dashboards", "NUC / accreditation alignment", "Enterprise syllabus API"],
  },
];

const capabilities = [
  {
    icon: GitCompare,
    t: "Syllabus diffing",
    b: "Line-by-line comparison across schools, lecturers and cohorts.",
  },
  {
    icon: Layers,
    t: "Weight mapping",
    b: "See how marks are distributed before you open a textbook.",
  },
  {
    icon: ScanLine,
    t: "Past-question links",
    b: "Every topic tied to real questions from previous exams.",
  },
  {
    icon: BookOpen,
    t: "Curated resources",
    b: "Textbook chapters, lectures and videos ranked by relevance.",
  },
  { icon: Clock, t: "Study planner", b: "Auto-generate a week-by-week plan from any syllabus." },
  {
    icon: Globe2,
    t: "Cross-border",
    b: "Nigerian, Ghanaian, Kenyan and UK curricula in one library.",
  },
];

export default function SolutionPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Solutions"
        title={<>One platform. Built for every corner of campus.</>}
        lede="Sylabi meets students, study groups, lecturers and faculties where they are — from the first syllabus upload to full-department curriculum intelligence."
      />

      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 md:py-32 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <Reveal>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-plum">
              See it in action
            </p>
            <h2 className="font-display text-4xl leading-tight md:text-5xl">
              Every gap, weight shift and overlap — laid out instantly.
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Pick any two syllabi and Sylabi renders a live diff in seconds: green for overlaps,
              amber for gaps, plum for weight shifts.
            </p>
          </Reveal>
          <Reveal delay={0.1} y={36}>
            <DiffMockup />
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <Reveal>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-plum">
            Who we serve
          </p>
          <h2 className="max-w-3xl font-display text-4xl leading-tight md:text-5xl">
            Tailored to your role in the learning journey.
          </h2>
        </Reveal>
        <StaggerGroup className="mt-14 grid gap-6 md:grid-cols-2">
          {audiences.map(({ icon: Icon, title, body, perks }) => (
            <StaggerItem
              key={title}
              className="rounded-3xl border border-border bg-card p-8 transition hover:-translate-y-1 hover:shadow-md"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-amber/20 text-plum">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-display text-2xl">{title}</h3>
              <p className="mt-3 text-muted-foreground">{body}</p>
              <ul className="mt-5 space-y-2 text-sm">
                {perks.map((p) => (
                  <li key={p} className="flex gap-2 text-muted-foreground">
                    <span className="text-sage">•</span>
                    {p}
                  </li>
                ))}
              </ul>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 md:py-32 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <Reveal y={36}>
            <Image
              src="/syllabus-docs.jpg"
              alt="Syllabus documents on a desk"
              width={1280}
              height={960}
              className="aspect-[4/3] w-full rounded-3xl object-cover shadow-lg transition duration-500 hover:scale-[1.02]"
            />
          </Reveal>
          <div>
            <Reveal>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-plum">
                Core capabilities
              </p>
              <h2 className="font-display text-4xl leading-tight md:text-5xl">
                Everything you need in one app.
              </h2>
              <p className="mt-5 text-lg text-muted-foreground">
                Whether you&apos;re prepping for your first CA or mapping an entire faculty, Sylabi
                brings comparison, analysis and study planning into one workflow.
              </p>
            </Reveal>
            <StaggerGroup className="mt-8 grid gap-4 sm:grid-cols-2">
              {capabilities.map(({ icon: Icon, t, b }) => (
                <StaggerItem
                  key={t}
                  className="rounded-2xl border border-border bg-card p-5 transition hover:-translate-y-1 hover:shadow-md"
                >
                  <Icon className="h-5 w-5 text-sage" />
                  <p className="mt-3 font-medium">{t}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{b}</p>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <Reveal className="flex flex-col items-start justify-between gap-6 rounded-3xl border border-border bg-card p-10 md:flex-row md:items-center">
          <div>
            <h3 className="font-display text-3xl">Ready to compare your course?</h3>
            <p className="mt-2 text-muted-foreground">
              Tell us your school and department — we&apos;ll get you a first comparison within 48 hours.
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
