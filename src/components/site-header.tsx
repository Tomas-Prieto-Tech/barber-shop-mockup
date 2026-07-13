import Link from "next/link";
import { navLinks } from "@/data/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/8 bg-[rgba(17,19,21,0.8)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4 sm:px-10">
        <Link href="/" className="flex flex-col">
          <span className="font-display text-3xl uppercase tracking-[0.14em] text-[var(--color-paper)]">
            The Standard
          </span>
          <span className="text-[11px] uppercase tracking-[0.35em] text-[var(--color-mist)]">
            Barbershop
          </span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm uppercase tracking-[0.24em] text-[var(--color-mist)] md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-[var(--color-paper)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/book"
          className="hidden min-h-11 items-center rounded-full border border-[var(--color-accent-red)] bg-[var(--color-accent-red)] px-5 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-paper)] transition hover:bg-transparent sm:inline-flex"
        >
          Book an Appointment
        </Link>
      </div>
    </header>
  );
}
