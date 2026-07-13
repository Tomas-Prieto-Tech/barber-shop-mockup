import Image from "next/image";
import { PageBanner } from "@/components/page-banner";
import { SectionHeading } from "@/components/section-heading";
import { galleryItems } from "@/data/site";

export default function GalleryPage() {
  return (
    <>
      <PageBanner
        eyebrow="Gallery"
        title="A closer look at the shop, the chairs, and the finished work."
        description="Browse the space, the atmosphere, and the kind of detail clients can expect from a visit to The Standard."
      />
      <section className="bg-[var(--color-ink)] px-6 py-18 sm:px-10">
        <div className="mx-auto max-w-6xl space-y-10">
          <SectionHeading
            eyebrow="Inside the Shop"
            title="Sharp cuts, clean room, easygoing atmosphere"
            description="A quick look at the kind of work and environment people talk about after their appointment."
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {galleryItems.map((item) => (
              <article
                key={item.title}
                className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.03]"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition duration-700 hover:scale-105"
                  />
                </div>
                <div className="space-y-2 p-5">
                  <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-accent-blue)]">
                    {item.tag}
                  </p>
                  <h2 className="font-display text-2xl uppercase tracking-[0.08em] text-[var(--color-paper)]">
                    {item.title}
                  </h2>
                  <p className="text-sm leading-7 text-[var(--color-mist)]">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
