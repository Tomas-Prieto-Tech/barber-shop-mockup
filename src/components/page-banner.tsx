type PageBannerProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageBanner({
  eyebrow,
  title,
  description,
}: PageBannerProps) {
  return (
    <section className="page-shell overflow-hidden border-b border-white/8 px-6 py-18 sm:px-10 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
        <div className="space-y-5">
          <p className="text-sm uppercase tracking-[0.35em] text-[var(--color-accent-blue)]">
            {eyebrow}
          </p>
          <h1 className="max-w-4xl break-words font-display text-5xl uppercase leading-[0.9] tracking-[0.05em] text-[var(--color-paper)] sm:text-7xl sm:tracking-[0.08em]">
            {title}
          </h1>
        </div>
        <p className="max-w-xl text-sm leading-8 text-[var(--color-mist)] sm:text-base">
          {description}
        </p>
      </div>
    </section>
  );
}
