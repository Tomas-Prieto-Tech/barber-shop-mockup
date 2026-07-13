type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="max-w-2xl space-y-3">
      <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-accent-blue)]">
        {eyebrow}
      </p>
      <h2 className="font-display text-4xl uppercase tracking-[0.08em] text-[var(--color-paper)] sm:text-5xl">
        {title}
      </h2>
      <p className="text-sm leading-7 text-[var(--color-mist)] sm:text-base">
        {description}
      </p>
    </div>
  );
}
