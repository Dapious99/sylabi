"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, Check } from "lucide-react";

const interests = [
  "Early access",
  "Joining the pilot",
  "Partnership",
  "Investing",
  "Press / media",
  "Joining the team",
] as const;

type Fields = "name" | "email" | "organization" | "interest" | "message";

function validate(data: FormData): Partial<Record<Fields, string>> {
  const errors: Partial<Record<Fields, string>> = {};
  const name = String(data.get("name") ?? "").trim();
  const email = String(data.get("email") ?? "").trim();
  const message = String(data.get("message") ?? "").trim();

  if (!name) errors.name = "Name is required";
  else if (name.length > 100) errors.name = "Name is too long";

  if (!email) errors.email = "Please enter a valid email";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 255) {
    errors.email = "Please enter a valid email";
  }

  if (!message) errors.message = "Message is required";
  else if (message.length > 1000) errors.message = "Message is too long";

  return errors;
}

export function ContactForm() {
  const [errors, setErrors] = useState<Partial<Record<Fields, string>>>({});
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const nextErrors = validate(fd);
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }
    setErrors({});
    setSent(true);
    e.currentTarget.reset();
  }

  return (
    <div className="rounded-3xl border border-border bg-card p-8 md:p-10">
      {sent ? (
        <div className="flex flex-col items-start gap-4 py-6">
          <span className="grid h-12 w-12 place-items-center rounded-full bg-sage/15 text-sage">
            <Check className="h-6 w-6" />
          </span>
          <h2 className="font-display text-3xl">Thanks — we&apos;ll be in touch.</h2>
          <p className="max-w-md text-muted-foreground">
            We reply to every message within two working days. In the meantime, feel free to
            explore the rest of the site.
          </p>
          <button
            type="button"
            onClick={() => setSent(false)}
            className="mt-2 text-sm font-medium text-plum hover:underline"
          >
            Send another message
          </button>
        </div>
      ) : (
        <>
          <h2 className="font-display text-3xl">Send us a message</h2>
          <p className="mt-2 text-muted-foreground">All fields marked * are required.</p>
          <form onSubmit={onSubmit} noValidate className="mt-8 grid gap-5">
            <Field label="Name *" name="name" error={errors.name} />
            <Field label="Email *" name="email" type="email" error={errors.email} />
            <Field
              label="Organization (optional)"
              name="organization"
              error={errors.organization}
            />
            <div>
              <label className="mb-1.5 block text-sm font-medium">I&apos;m interested in *</label>
              <select
                name="interest"
                defaultValue={interests[0]}
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-amber"
              >
                {interests.map((i) => (
                  <option key={i}>{i}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium">Message *</label>
              <textarea
                name="message"
                rows={5}
                maxLength={1000}
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-amber"
              />
              {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
            </div>
            <button
              type="submit"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90"
            >
              Send message <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </>
      )}
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  error,
}: {
  label: string;
  name: string;
  type?: string;
  error?: string;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium">{label}</label>
      <input
        name={name}
        type={type}
        maxLength={type === "email" ? 255 : 120}
        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-amber"
      />
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}
