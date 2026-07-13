import Link from "next/link";
import { MapLinkChooser } from "@/components/map-link-chooser";
import { businessInfo, navLinks } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/8 bg-black/30 px-6 py-10 sm:px-10">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[1.25fr_0.75fr_1fr]">
        <div className="space-y-3">
          <p className="font-display text-3xl uppercase tracking-[0.14em] text-[var(--color-paper)]">
            The Standard
          </p>
          <p className="max-w-sm text-sm leading-7 text-[var(--color-mist)]">
            Modern neighborhood barbershop in Bakersfield for clean cuts, solid
            conversation, and straightforward booking.
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-[var(--color-accent-blue)]">
            Explore
          </p>
          <div className="mt-4 space-y-3 text-sm uppercase tracking-[0.24em] text-[var(--color-mist)]">
            {navLinks.map((link) => (
              <div key={link.href}>
                <Link href={link.href} className="transition hover:text-white">
                  {link.label}
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-3 text-sm leading-7 text-[var(--color-mist)]">
          <p className="text-xs uppercase tracking-[0.35em] text-[var(--color-accent-blue)]">
            Contact
          </p>
          <p>{businessInfo.address}</p>
          <a href={`tel:${businessInfo.phone.replace(/[^\d+]/g, "")}`}>
            {businessInfo.phone}
          </a>
          <a href={`mailto:${businessInfo.email}`}>{businessInfo.email}</a>
          <div className="flex gap-5 uppercase tracking-[0.2em]">
            <MapLinkChooser links={businessInfo.mapLinks} />
            <a href={businessInfo.instagramUrl} target="_blank" rel="noreferrer">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
