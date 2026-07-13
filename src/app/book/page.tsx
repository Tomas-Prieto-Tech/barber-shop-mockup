import { PageBanner } from "@/components/page-banner";
import { bookingExpectations, businessInfo } from "@/data/site";

export default function BookPage() {
  return (
    <>
      <PageBanner
        eyebrow="Booking"
        title="Book your appointment online through Booksy."
        description="Use our dedicated Booksy page to choose your service, pick your barber, and lock in an appointment in a few quick taps."
      />
      <section className="bg-[var(--color-ink)] px-6 py-18 sm:px-10">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-7 sm:p-8">
            <div className="space-y-6">
              <div className="space-y-3">
                <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-accent-blue)]">
                  Dedicated Booking Link
                </p>
                <h2 className="font-display text-5xl uppercase tracking-[0.08em] text-[var(--color-paper)]">
                  Reserve on Booksy
                </h2>
                <p className="max-w-2xl text-sm leading-7 text-[var(--color-mist)]">
                  Booksy handles live availability and appointment confirmation,
                  so you can see open times and reserve directly without waiting
                  on a follow-up message from the shop.
                </p>
              </div>

              <div className="rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(198,211,220,0.08),rgba(16,18,21,0.72))] p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-mist)]">
                  Booking Destination
                </p>
                <p className="mt-3 text-sm leading-7 text-[var(--color-paper)]">
                  Open the shop&apos;s Booksy page to browse services, check
                  available times, and confirm your appointment online.
                </p>
                <a
                  href={businessInfo.booksyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex min-h-14 items-center justify-center rounded-full bg-[var(--color-accent-red)] px-7 text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-paper)] transition hover:bg-[#d44b3a]"
                >
                  Book on Booksy
                </a>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(198,211,220,0.08),rgba(16,18,21,0.72))] p-7 sm:p-8">
              <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-accent-blue)]">
                What customers can expect
              </p>
              <ul className="mt-5 space-y-4 text-sm leading-7 text-[var(--color-paper)]">
                {bookingExpectations.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 border-b border-white/8 pb-4 last:border-b-0 last:pb-0"
                  >
                    <span className="mt-2 h-2 w-2 rounded-full bg-[var(--color-accent-red)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-7 sm:p-8">
              <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-accent-blue)]">
                Shop contact
              </p>
              <div className="mt-5 space-y-4 text-sm leading-7 text-[var(--color-mist)]">
                <p>{businessInfo.address}</p>
                <a href={`tel:${businessInfo.phone.replace(/[^\d+]/g, "")}`}>
                  {businessInfo.phone}
                </a>
                <a href={`mailto:${businessInfo.email}`}>{businessInfo.email}</a>
                <p>{businessInfo.hoursSummary}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
