import Link from "next/link";
import Image from "next/image";

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
    </svg>
  );
}

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
            <div className="flex items-center gap-2 font-display text-xl text-foreground">
              <Image src="/sylabi-logo.png" alt="Sylabi" width={32} height={32} className="h-8 w-8 rounded-full" />
              Sylabi
            </div>
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
          <div className="flex items-center gap-4">
            <a
              href="https://x.com/Sylabi_health"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Sylabi on X"
              className="hover:text-foreground transition-colors"
            >
              <XIcon className="h-4 w-4" />
            </a>
                     <p className="text-xs">Made with care in Lagos, Nigeria.</p>
          </div>
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
