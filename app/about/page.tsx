import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { PageShell, PageHeader } from "@/components/page-shell";
import { team } from "@/lib/team";

export const metadata: Metadata = {
  title: "About",
  description:
    "Sylabi is a small team of former students, engineers and educators building syllabus intelligence for African tertiary institutions.",
  openGraph: {
    title: "About — Sylabi",
    description: "A small team with a serious mission.",
  },
};

export default function AboutPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="About Sylabi"
        title={<>A small team with a serious mission.</>}
        lede="Sylabi is a Nigerian edtech company building curriculum intelligence for the students who make up Africa's next generation of professionals."
      />

      <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-plum">The team</p>
        <h2 className="max-w-3xl font-display text-4xl leading-tight md:text-5xl">
          Real people. Real classrooms.
        </h2>
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
      </section>

      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 md:py-32 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-plum">
              Our story
            </p>
            <h2 className="font-display text-4xl leading-tight md:text-5xl">
              Why we started Sylabi.
            </h2>
          </div>
          <div className="space-y-5 text-lg text-muted-foreground">
            <p>
              In 2023, half of our final-year computer science class failed a compulsory course
              because the exam covered three topics that weren&apos;t in the syllabus most of us had
              been given. A friend at another federal university had studied those exact topics for
              weeks.
            </p>
            <p>
              We built the first version of Sylabi that weekend — a shared Google Sheet comparing
              every course across four schools. It spread through WhatsApp faster than anything
              we&apos;d ever built.
            </p>
            <p className="text-foreground">
              We&apos;re building Sylabi because every tertiary student deserves to know exactly what
              they&apos;re being tested on — and every faculty deserves the tools to keep their
              curriculum honest.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex flex-col items-start justify-between gap-6 rounded-3xl bg-primary p-10 text-primary-foreground md:flex-row md:items-center">
          <div>
            <h3 className="font-display text-3xl">We&apos;re hiring — and always listening.</h3>
            <p className="mt-2 text-primary-foreground/70">
              Educators, engineers and student ambassadors welcome.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-amber px-6 py-3 text-sm font-medium text-ink"
          >
            Contact us <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
