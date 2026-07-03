import Link from "next/link";

const primaryLinks = [
  { href: "/solution", label: "Solution" },
  { href: "/technology", label: "Technology" },
  { href: "/impact", label: "Impact" },
] as const;

const companyLinks = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

const legalLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Use" },
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-14 text-sm text-muted-foreground">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <p className="font-display text-xl text-foreground">Sylabi</p>
            <p className="mt-3 max-w-xs text-sm">
              Syllabus intelligence for tertiary students — compare, understand, and choose your courses with clarity.
            </p>
          </div>
          <FooterColumn title="Product" links={primaryLinks} />
          <FooterColumn title="Company" links={companyLinks} />
          <FooterColumn title="Legal" links={legalLinks} />
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-6 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Sylabi. Built for students, by students.</p>
          <p className="text-xs">Made with care in Lagos, Nigeria.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: ReadonlyArray<{ href: string; label: string }>;
}) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground">{title}</p>
      <ul className="mt-4 flex flex-col gap-3">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="hover:text-foreground">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
