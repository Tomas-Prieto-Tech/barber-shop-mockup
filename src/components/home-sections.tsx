import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import {
  businessInfo,
  galleryItems,
  services,
  testimonials,
  trustHighlights,
  whyChooseUs,
} from "@/data/site";
import { getBarbers } from "@/lib/barbers";

export function HeroSection() {
  return (
    <section className="page-shell overflow-hidden px-6 pb-14 pt-10 sm:px-10 sm:pb-18 sm:pt-16">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="space-y-7">
          <div className="inline-flex rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs uppercase tracking-[0.28em] text-[var(--color-mist)]">
            Bakersfield, California
          </div>
          <div className="space-y-5">
            <p className="text-sm uppercase tracking-[0.35em] text-[var(--color-accent-blue)]">
              Modern Grooming
            </p>
            <h1 className="max-w-4xl font-display text-7xl uppercase leading-[0.88] tracking-[0.07em] text-[var(--color-paper)] sm:text-[6.5rem]">
              Clean cuts. No wasted motion.
            </h1>
            <p className="max-w-xl text-sm leading-8 text-[var(--color-mist)] sm:text-base">
              The Standard Barbershop serves Bakersfield clients who want a
              sharp haircut, fair pricing, and an easy way to book the barber
              they prefer.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="/book"
              className="inline-flex min-h-14 items-center justify-center rounded-full bg-[var(--color-accent-red)] px-7 text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-paper)] transition hover:bg-[#d44b3a]"
            >
              Book an Appointment
            </Link>
            <a
              href={businessInfo.mapUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-7 text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-paper)] transition hover:border-[var(--color-accent-blue)]"
            >
              View on Google Maps
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -left-6 top-10 hidden h-36 w-36 rounded-full bg-[var(--color-accent-blue)]/10 blur-3xl lg:block" />
          <div className="absolute -right-6 bottom-10 hidden h-40 w-40 rounded-full bg-[var(--color-accent-red)]/10 blur-3xl lg:block" />
          <div className="relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-[linear-gradient(150deg,rgba(255,255,255,0.05),rgba(255,255,255,0.01))] p-3 shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem]">
              <Image
                src="/hero-standard.svg"
                alt="Illustrated hero scene for The Standard Barbershop"
                fill
                priority
                className="object-cover"
              />
            </div>
            <div className="absolute bottom-8 left-8 max-w-xs rounded-[1.5rem] border border-white/10 bg-[rgba(8,10,12,0.72)] p-5 backdrop-blur-md">
              <p className="text-xs uppercase tracking-[0.35em] text-[var(--color-accent-blue)]">
                Walk-ins Welcome
              </p>
              <p className="mt-3 text-sm leading-7 text-[var(--color-paper)]">
                Fade work, beard cleanups, longer scissor cuts, and dependable
                appointments from a neighborhood shop that keeps things moving.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function TrustHighlightsSection() {
  return (
    <section className="border-t border-white/8 bg-black/20 px-6 py-18 sm:px-10">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <SectionHeading
          eyebrow="Why Clients Book"
          title="Everything a client needs is easy to find."
          description="Quick booking, clear pricing, experienced barbers, and a central Bakersfield location are front and center from the first screen."
        />
        <div className="rounded-[1.9rem] border border-white/8 bg-white/[0.03] p-6 sm:p-7">
          <ul className="space-y-5">
            {trustHighlights.map((item) => (
              <li
                key={item.title}
                className="flex gap-4 border-b border-white/8 pb-5 last:border-b-0 last:pb-0"
              >
                <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[var(--color-accent-red)]" />
                <div>
                  <h3 className="font-display text-2xl uppercase tracking-[0.08em] text-[var(--color-paper)]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-[var(--color-mist)]">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function FeaturedServices() {
  return (
    <section className="bg-[var(--color-ink)] px-6 py-18 sm:px-10">
      <div className="mx-auto max-w-6xl space-y-10">
        <SectionHeading
          eyebrow="Services"
          title="Simple pricing. Real appointment times."
          description="See what each service includes, how long to set aside, and what you’ll pay before you book."
        />
        <div className="grid gap-5 lg:grid-cols-3">
          {services.slice(0, 3).map((service) => (
            <article
              key={service.name}
              className="rounded-[1.9rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-[var(--color-accent-blue)]">
                    {service.duration}
                  </p>
                  <h3 className="mt-3 font-display text-3xl uppercase tracking-[0.08em] text-[var(--color-paper)]">
                    {service.name}
                  </h3>
                </div>
                <p className="text-lg font-semibold text-[var(--color-paper)]">
                  {service.price}
                </p>
              </div>
              <p className="mt-4 text-sm leading-7 text-[var(--color-mist)]">
                {service.description}
              </p>
            </article>
          ))}
        </div>
        <Link
          href="/services"
          className="inline-flex min-h-12 items-center rounded-full border border-white/10 bg-white/[0.03] px-6 text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-paper)] transition hover:border-[var(--color-accent-blue)]"
        >
          View Services and Pricing
        </Link>
      </div>
    </section>
  );
}

export function WhyChooseUsSection() {
  return (
    <section className="border-t border-white/8 bg-black/20 px-6 py-18 sm:px-10">
      <div className="mx-auto max-w-6xl space-y-10">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="A shop clients can trust for the next visit too."
          description="The reasons people return are straightforward: reliable service, easy scheduling, and cuts that hold up between appointments."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {whyChooseUs.map((item) => (
            <article
              key={item.title}
              className="rounded-[1.75rem] border border-white/8 bg-white/[0.03] p-6"
            >
              <h3 className="font-display text-2xl uppercase tracking-[0.08em] text-[var(--color-paper)]">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[var(--color-mist)]">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export async function BarberGrid() {
  const barbers = await getBarbers();

  return (
    <section className="border-t border-white/8 bg-black/20 px-6 py-18 sm:px-10">
      <div className="mx-auto max-w-6xl space-y-10">
        <SectionHeading
          eyebrow="Barbers"
          title="Choose the barber that fits your style."
          description="Each barber has a clear specialty so clients can book with confidence instead of guessing."
        />
        {barbers.length > 0 ? (
          <div className="grid gap-5 lg:grid-cols-3">
            {barbers.map((barber) => (
              <article
                key={barber.name}
                className="overflow-hidden rounded-[1.9rem] border border-white/8 bg-white/[0.03]"
              >
                <div className="relative aspect-[4/4.6] overflow-hidden bg-[linear-gradient(180deg,rgba(198,211,220,0.14),rgba(16,18,21,0.8))]">
                  {barber.image ? (
                    <Image
                      src={barber.image}
                      alt={barber.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="flex h-full items-end p-6">
                      <p className="font-display text-4xl uppercase tracking-[0.08em] text-[var(--color-paper)]">
                        {barber.name}
                      </p>
                    </div>
                  )}
                </div>
                <div className="space-y-4 p-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-accent-blue)]">
                      {barber.role}
                    </p>
                    <h3 className="mt-2 font-display text-3xl uppercase tracking-[0.08em] text-[var(--color-paper)]">
                      {barber.name}
                    </h3>
                  </div>
                  <p className="text-sm leading-7 text-[var(--color-mist)]">
                    {barber.bio}
                  </p>
                  {barber.specialties.length > 0 ? (
                    <div className="flex flex-wrap gap-2">
                      {barber.specialties.map((specialty) => (
                        <span
                          key={specialty}
                          className="rounded-full border border-white/8 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-[var(--color-paper)]"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-[1.9rem] border border-dashed border-white/10 bg-white/[0.03] p-8 text-sm leading-7 text-[var(--color-mist)]">
            The barber roster is being updated. Check back shortly for the current team.
          </div>
        )}
      </div>
    </section>
  );
}

export function GalleryPreview() {
  return (
    <section className="bg-[var(--color-ink)] px-6 py-18 sm:px-10">
      <div className="mx-auto max-w-6xl space-y-10">
        <SectionHeading
          eyebrow="Gallery"
          title="See the shop, the work, and the finish."
          description="A quick look at the room, the atmosphere, and the kind of detail clients can expect in the chair."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {galleryItems.map((item) => (
            <article
              key={item.title}
              className="overflow-hidden rounded-[1.75rem] border border-white/8 bg-white/[0.03]"
            >
              <div className="relative aspect-[4/5]">
                <Image src={item.image} alt={item.title} fill className="object-cover" />
              </div>
              <div className="space-y-2 p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-accent-blue)]">
                  {item.tag}
                </p>
                <h3 className="font-display text-2xl uppercase tracking-[0.08em] text-[var(--color-paper)]">
                  {item.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
        <Link
          href="/gallery"
          className="inline-flex min-h-12 items-center rounded-full border border-white/10 bg-white/[0.03] px-6 text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-paper)] transition hover:border-[var(--color-accent-blue)]"
        >
          Browse Full Gallery
        </Link>
      </div>
    </section>
  );
}

export function ReviewsSection() {
  return (
    <section className="border-t border-white/8 bg-black/20 px-6 py-18 sm:px-10">
      <div className="mx-auto max-w-6xl space-y-10">
        <SectionHeading
          eyebrow="Reviews"
          title="What clients say after the first visit."
          description="The feedback people care about most is simple: convenience, consistency, and a cut worth coming back for."
        />
        <div className="grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="rounded-[1.75rem] border border-white/8 bg-white/[0.03] p-6"
            >
              <div className="mb-5 flex items-center gap-1 text-[var(--color-accent-red)]">
                {Array.from({ length: 5 }).map((_, index) => (
                  <span key={index}>★</span>
                ))}
              </div>
              <p className="text-sm leading-7 text-[var(--color-paper)]">
                “{testimonial.quote}”
              </p>
              <div className="mt-5 border-t border-white/8 pt-5">
                <p className="font-semibold text-[var(--color-paper)]">
                  {testimonial.name}
                </p>
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-mist)]">
                  {testimonial.meta}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HoursAndLocation() {
  return (
    <section className="bg-[var(--color-ink)] px-6 py-18 sm:px-10">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[2rem] border border-white/8 bg-white/[0.03] p-7 sm:p-8">
          <SectionHeading
            eyebrow="Visit"
            title="Hours and location"
            description="Find the shop fast, check the hours, and book or call from the same screen."
          />
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-accent-blue)]">
                Address
              </p>
              <p className="mt-3 text-sm leading-7 text-[var(--color-paper)]">
                {businessInfo.address}
              </p>
              <a
                href={`tel:${businessInfo.phone.replace(/[^\d+]/g, "")}`}
                className="mt-4 block text-sm leading-7 text-[var(--color-paper)]"
              >
                {businessInfo.phone}
              </a>
              <a
                href={businessInfo.mapUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex text-sm uppercase tracking-[0.22em] text-[var(--color-paper)] underline decoration-[var(--color-accent-blue)] underline-offset-6"
              >
                Open in Google Maps
              </a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-accent-blue)]">
                Hours
              </p>
              <div className="mt-3 space-y-2 text-sm leading-7 text-[var(--color-paper)]">
                {businessInfo.hours.map((slot) => (
                  <p key={slot.day} className="flex justify-between gap-4">
                    <span>{slot.day}</span>
                    <span>{slot.hours}</span>
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="overflow-hidden rounded-[2rem] border border-white/8 bg-[linear-gradient(145deg,rgba(255,255,255,0.06),rgba(0,0,0,0.18))] p-4">
          <div className="relative flex min-h-[420px] flex-col justify-end overflow-hidden rounded-[1.5rem] border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(138,166,184,0.18),transparent_28%),linear-gradient(180deg,rgba(17,19,21,0.28),rgba(17,19,21,0.75)),url('/map-card.svg')] bg-cover bg-center p-7">
            <div className="max-w-sm rounded-[1.5rem] border border-white/10 bg-[rgba(8,10,12,0.72)] p-5 backdrop-blur-sm">
              <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-accent-blue)]">
                Near Downtown Bakersfield
              </p>
              <p className="mt-3 text-sm leading-7 text-[var(--color-paper)]">
                Easy parking nearby, strong street visibility, and quick access
                whether you’re heading in from downtown or stopping by after work.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
