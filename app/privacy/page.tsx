import type { Metadata } from "next";
import { PageShell, PageHeader } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Sylabi collects, uses, and protects student data.",
};

export default function PrivacyPage() {
  return (
    <PageShell>
      <PageHeader eyebrow="Legal" title="Privacy Policy" lede="Last updated: July 2, 2026" />
      <section className="mx-auto max-w-3xl px-6 py-16">
        <div className="prose prose-neutral max-w-none space-y-8 text-base leading-relaxed text-foreground/90">
          <div>
            <h2 className="font-display text-2xl">1. Who we are</h2>
            <p>
              Sylabi (&quot;Sylabi&quot;, &quot;we&quot;, &quot;us&quot;) is an edtech company building syllabus intelligence
              tools for tertiary students in Africa. Reach us at{" "}
              <a className="text-plum underline" href="mailto:hello@sylabi.app">
                hello@sylabi.app
              </a>
              .
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl">2. What we collect</h2>
            <ul className="list-disc pl-6">
              <li>
                <strong>Account data:</strong> name, email, institution, department, level.
              </li>
              <li>
                <strong>Syllabus data:</strong> course outlines you upload, notes, comparison
                history.
              </li>
              <li>
                <strong>Device data:</strong> device model, OS, app version, anonymized usage
                events.
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-display text-2xl">3. How we use your data</h2>
            <p>
              We use your data to power syllabus comparisons, personalise recommendations, notify
              you about curriculum updates you&apos;ve opted into, and improve our models. We never sell
              personal data.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl">4. Your uploaded syllabi</h2>
            <p>
              Course outlines you upload may be used (anonymized and stripped of identifiers) to
              improve our curriculum knowledge graph. You can opt out at any time from your account
              settings.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl">5. Sharing</h2>
            <p>
              We share data with infrastructure providers under strict data-processing agreements.
              We may share anonymized, aggregated curriculum insights with faculties and academic
              partners.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl">6. Security</h2>
            <p>
              Data is encrypted in transit (TLS) and at rest (AES-256). Access is restricted to
              authorized personnel and audited.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl">7. Your rights</h2>
            <p>
              You may request a copy of your data, correct it, or delete your account at any time by
              emailing{" "}
              <a className="text-plum underline" href="mailto:hello@sylabi.app">
                hello@sylabi.app
              </a>
              . We respond within 30 days.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl">8. Changes</h2>
            <p>We will notify you of material changes to this policy via email or in-app notice.</p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
