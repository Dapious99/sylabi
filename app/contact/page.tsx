import type { Metadata } from "next";
import { Mail, Phone, MapPin } from "lucide-react";
import { PageShell, PageHeader } from "@/components/page-shell";
import { ContactForm } from "./contact-form";

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
    </svg>
  );
}

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

          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Follow us on X
            </p>
            <a
              href="https://x.com/Sylabi_health"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 transition hover:opacity-80"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-amber/20 text-plum">
                <XIcon className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Company
                </p>
                <p className="font-display text-xl">@Sylabi_health</p>
              </div>
            </a>
            <a
              href="https://x.com/deyunblackboi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 transition hover:opacity-80"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-amber/20 text-plum">
                <XIcon className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  CEO
                </p>
                <p className="font-display text-xl">@deyunblackboi</p>
              </div>
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
