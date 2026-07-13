import Link from "next/link";
import {
  BarberGrid,
  FeaturedServices,
  GalleryPreview,
  HeroSection,
  HoursAndLocation,
  ReviewsSection,
  TrustHighlightsSection,
  WhyChooseUsSection,
} from "@/components/home-sections";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustHighlightsSection />
      <FeaturedServices />
      <WhyChooseUsSection />
      <BarberGrid />
      <ReviewsSection />
      <GalleryPreview />
      <HoursAndLocation />
      <section className="border-t border-white/10 bg-[var(--color-ink)] px-6 py-18 sm:px-10">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 shadow-[0_24px_80px_rgba(0,0,0,0.25)] md:flex-row md:items-center md:p-10">
          <div className="max-w-2xl space-y-3">
            <p className="text-sm uppercase tracking-[0.35em] text-[var(--color-accent-blue)]">
              Ready to Book
            </p>
            <h2 className="font-display text-4xl uppercase tracking-[0.08em] text-[var(--color-paper)] sm:text-5xl">
              Book your next cut in a few quick taps.
            </h2>
            <p className="max-w-xl text-sm leading-7 text-[var(--color-mist)] sm:text-base">
              Choose your service, request your preferred barber, and send your
              appointment request without calling around or waiting on a reply.
            </p>
          </div>
          <Link
            href="/book"
            className="inline-flex min-h-14 items-center rounded-full bg-[var(--color-accent-red)] px-7 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-paper)] transition hover:bg-[#d44b3a]"
          >
            Book an Appointment
          </Link>
        </div>
      </section>
    </>
  );
}
