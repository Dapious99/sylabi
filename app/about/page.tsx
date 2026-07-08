import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { PageShell, PageHeader } from "@/components/page-shell";
import { team } from "@/lib/team";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/reveal";
import { MotionLink } from "@/components/motion/motion-link";

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
        <Reveal>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-plum">
            The team
          </p>
          <h2 className="max-w-3xl font-display text-4xl leading-tight md:text-5xl">
            Real people. Real classrooms.
          </h2>
        </Reveal>
        <StaggerGroup className="mt-14 grid gap-8 md:grid-cols-2">
          {team.map((m) => (
            <StaggerItem
              key={m.name}
              className="rounded-3xl border border-border bg-card p-8 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <article>
                <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-secondary/40">
                  <Image
                    src={m.image}
                    alt={`${m.name}, ${m.role} at Sylabi`}
                    width={1024}
                    height={1024}
                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                  />
                </div>
                <h3 className="mt-6 font-display text-2xl">{m.name}</h3>
                <p className="mt-1 text-sm uppercase tracking-widest text-muted-foreground">
                  {m.role}
                </p>
                <p className="mt-4 text-muted-foreground">{m.bio}</p>
                {m.socials && (
                  <div className="mt-5 flex items-center gap-3">
                    {m.socials.twitter && (
                      <a
                        href={m.socials.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${m.name} on X`}
                        className="grid h-9 w-9 place-items-center rounded-full bg-secondary/60 text-foreground transition hover:bg-amber/20 hover:text-plum"
                      >
                        <XIcon className="h-4 w-4" />
                      </a>
                    )}
                    {m.socials.facebook && (
                      <a
                        href={m.socials.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${m.name} on Facebook`}
                        className="grid h-9 w-9 place-items-center rounded-full bg-secondary/60 text-foreground transition hover:bg-amber/20 hover:text-plum"
                      >
                        <FacebookIcon className="h-4 w-4" />
                      </a>
                    )}
                    {m.socials.linkedin && (
                      <a
                        href={m.socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${m.name} on LinkedIn`}
                        className="grid h-9 w-9 place-items-center rounded-full bg-secondary/60 text-foreground transition hover:bg-amber/20 hover:text-plum"
                      >
                        <LinkedinIcon className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                )}
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 md:py-32 lg:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-plum">
              Our story
            </p>
            <h2 className="font-display text-4xl leading-tight md:text-5xl">
              Why we started Sylabi.
            </h2>
          </Reveal>
          <Reveal delay={0.12} className="space-y-5 text-lg text-muted-foreground">
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
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <Reveal className="flex flex-col items-start justify-between gap-6 rounded-3xl bg-primary p-10 text-primary-foreground md:flex-row md:items-center">
          <div>
            <h3 className="font-display text-3xl">We&apos;re hiring — and always listening.</h3>
            <p className="mt-2 text-primary-foreground/70">
              Educators, engineers and student ambassadors welcome.
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

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-5.22-6.82-5.97 6.82H1.65l7.73-8.84L1.2 2.25h6.83l4.72 6.24zm-1.16 17.52h1.83L7.02 4.13H5.06z" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.78-1.63 1.57v1.87h2.78l-.44 2.91h-2.34V22c4.78-.76 8.44-4.92 8.44-9.94z" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56z" />
    </svg>
  );
}
