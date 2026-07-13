import { PageBanner } from "@/components/page-banner";
import { SectionHeading } from "@/components/section-heading";
import { services } from "@/data/site";

export default function ServicesPage() {
  return (
    <>
      <PageBanner
        eyebrow="Services"
        title="Haircuts, fades, and beard work with clear pricing."
        description="Choose the service that fits your routine, see how much time to set aside, and book the chair that works best for you."
      />
      <section className="bg-[var(--color-ink)] px-6 py-18 sm:px-10">
        <div className="mx-auto max-w-6xl space-y-10">
          <SectionHeading
            eyebrow="Pricing"
            title="Service menu"
            description="Simple descriptions, real appointment lengths, and prices you can scan in seconds."
          />
          <div className="grid gap-5 lg:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.name}
                className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-7 transition hover:-translate-y-1 hover:border-[var(--color-accent-blue)]"
              >
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div>
                    <h2 className="font-display text-3xl uppercase tracking-[0.08em] text-[var(--color-paper)]">
                      {service.name}
                    </h2>
                    <p className="mt-3 max-w-xl text-sm leading-7 text-[var(--color-mist)]">
                      {service.description}
                    </p>
                  </div>
                  <div className="rounded-full border border-white/10 bg-black/30 px-4 py-3 text-right">
                    <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-mist)]">
                      {service.duration}
                    </p>
                    <p className="mt-1 text-xl font-semibold text-[var(--color-paper)]">
                      {service.price}
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {service.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="rounded-full border border-white/8 bg-white/[0.04] px-3 py-1 text-xs uppercase tracking-[0.2em] text-[var(--color-paper)]"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
