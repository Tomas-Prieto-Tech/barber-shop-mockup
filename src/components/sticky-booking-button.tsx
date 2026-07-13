import Link from "next/link";

export function StickyBookingButton() {
  return (
    <div className="sticky-booking-button fixed inset-x-0 bottom-4 z-50 px-4 md:hidden">
      <Link
        href="/book"
        className="flex min-h-14 items-center justify-center rounded-full bg-[var(--color-accent-red)] px-5 text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-paper)] shadow-[0_16px_40px_rgba(0,0,0,0.45)]"
      >
        Book an Appointment
      </Link>
    </div>
  );
}
