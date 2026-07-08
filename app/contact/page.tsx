import type { Metadata } from "next";
import { Mail, Phone, MapPin } from "lucide-react";
import { PageShell, PageHeader } from "@/components/page-shell";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with the Sylabi team — students, faculties, investors and press are all welcome.",
  openGraph: {
    title: "Contact — Sylabi",
    description: "Let's talk about your syllabus, your school, or your idea.",
  },
};

export default function ContactPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Get in touch"
        title={<>Let&apos;s talk.</>}
        lede="Whether you're a student, lecturer, faculty lead, investor, or future teammate — we read every message."
      />

      <section className="mx-auto grid max-w-7xl gap-14 px-6 py-24 md:py-32 lg:grid-cols-[1fr_1.3fr]">
        <aside className="space-y-8">
          <ContactRow
            icon={Mail}
            label="Email"
            value="tochukwu@sylabi.site"
            href="mailto:tochukwu@sylabi.site"
          />
          <ContactRow
            icon={Phone}
            label="Phone"
            value="+234 903 726 0061"
            href="tel:+2349037260061"
          />
          <ContactRow
            icon={MapPin}
            label="Headquarters"
            value="2d Umunogo Street, Achara Layout, Enugu"
            sub="Sylabi Technologies Ltd · RC pending"
          />
          <div className="rounded-3xl border border-border bg-card p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-plum">
              Press & partnerships
            </p>
            <a
              href="mailto:tochukwu@sylabi.site"
              className="mt-2 block font-display text-xl hover:underline"
            >
              tochukwu@sylabi.site
            </a>
          </div>
        </aside>

        <ContactForm />
      </section>
    </PageShell>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
  sub,
}: {
  icon: typeof Mail;
  label: string;
  value: string;
  href?: string;
  sub?: string;
}) {
  const content = (
    <div className="flex items-start gap-4">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-amber/20 text-plum">
        <Icon className="h-5 w-5" />
      </span>
      <div className="min-w-0">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          {label}
        </p>
        <p className="font-display text-xl">{value}</p>
        {sub && <p className="mt-1 text-sm text-muted-foreground">{sub}</p>}
      </div>
    </div>
  );
  return href ? (
    <a href={href} className="block transition hover:opacity-80">
      {content}
    </a>
  ) : (
    content
  );
}
