import type { Metadata } from "next";
import { PageShell, PageHeader } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "The terms that govern your use of Sylabi.",
};

export default function TermsPage() {
  return (
    <PageShell>
      <PageHeader eyebrow="Legal" title="Terms of Use" lede="Last updated: July 2, 2026" />
      <section className="mx-auto max-w-3xl px-6 py-16">
        <div className="space-y-8 text-base leading-relaxed text-foreground/90">
          <div>
            <h2 className="font-display text-2xl">1. Acceptance</h2>
            <p>
              By using Sylabi services, you agree to these terms. If you do not agree, please do not
              use the services.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl">2. Service description</h2>
            <p>
              Sylabi provides syllabus comparison, curriculum insights, and study guidance. Our
              outputs are decision-support tools — they do not replace official course catalogues,
              faculty advice, or academic regulations at your institution.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl">3. No warranty on outputs</h2>
            <p>
              Curriculum data changes frequently. We work hard to keep comparisons accurate, but no
              result is guaranteed. You are responsible for verifying critical academic decisions
              with your faculty or registrar.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl">4. Acceptable use</h2>
            <p>
              You agree not to misuse the service, attempt to reverse-engineer our models, or upload
              content that is illegal or violates third-party rights (including copyrighted syllabi
              you don&apos;t have permission to share).
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl">5. Intellectual property</h2>
            <p>
              All software, models, and original content are owned by Sylabi unless stated
              otherwise. You retain ownership of documents you upload, but grant us a license to use
              anonymized versions to improve the service.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl">6. Liability</h2>
            <p>
              To the maximum extent permitted by law, Sylabi is not liable for indirect or
              consequential losses arising from use of the service.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl">7. Termination</h2>
            <p>We may suspend or terminate access for violations of these terms.</p>
          </div>
          <div>
            <h2 className="font-display text-2xl">8. Governing law</h2>
            <p>These terms are governed by the laws of the Federal Republic of Nigeria.</p>
          </div>
          <div>
            <h2 className="font-display text-2xl">9. Contact</h2>
            <p>
              Questions?{" "}
              <a className="text-plum underline" href="mailto:hello@sylabi.app">
                hello@sylabi.app
              </a>
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
