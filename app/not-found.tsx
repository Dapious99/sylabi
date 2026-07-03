import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background px-6 py-24 text-foreground">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-medium uppercase tracking-widest text-primary">404</p>
        <h1 className="mt-4 font-display text-4xl font-medium md:text-6xl">Page not found</h1>
        <p className="mt-5 text-lg text-muted-foreground">
          The page you are looking for does not exist or has moved.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90"
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}
