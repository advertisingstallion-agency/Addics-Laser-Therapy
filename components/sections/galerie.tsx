import Image from "next/image";
import { ArrowRight, Camera } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { galerie, site } from "@/content/site";

// Colours of the four photo placeholders, until the centre sends real photos.
const placeholders = [
  "bg-navy-soft text-navy",
  "bg-line text-champagne-text",
  "bg-line text-champagne-text",
  "bg-navy-soft text-navy",
];

export function Galerie() {
  return (
    <section
      id="galerie"
      className="relative overflow-hidden bg-sand px-5 py-14 text-ink md:px-8 md:py-20 lg:px-16 lg:py-24"
    >
      <div className="mx-auto max-w-[1200px]">
        <header className="mb-14 grid items-end gap-6 lg:grid-cols-[1.15fr_.85fr] lg:gap-16">
          <SectionHeading eyebrow={galerie.eyebrow} title={galerie.title} />
          <div>
            <p className="mb-5 text-base leading-7 sm:text-[19px] sm:leading-[30px] text-ink-muted">
              {galerie.intro}
            </p>
            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full text-xs leading-5 font-medium tracking-[0.16em] text-navy uppercase focus-visible:ring-2 focus-visible:ring-navy focus-visible:outline-none"
            >
              {galerie.follow}
              <ArrowRight
                className="size-[18px] transition-transform duration-300 group-hover:translate-x-1"
                strokeWidth={1.5}
              />
            </a>
          </div>
        </header>

        {/* Bento grid */}
        <div className="grid auto-rows-[150px] grid-cols-2 gap-3 sm:auto-rows-[220px] sm:gap-4 lg:auto-rows-[260px] lg:grid-cols-4">
          <div className="group relative overflow-hidden rounded-xl bg-night col-span-2 row-span-2">
            <Image
              src="/media/hero-poster.jpg"
              alt={galerie.photoAlt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-[62%_center] transition-transform duration-[900ms] ease-out group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
            />
          </div>
          {placeholders.map((colors, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-center gap-2 rounded-xl px-2 text-center sm:gap-3 ${colors}`}
            >
              <Camera aria-hidden="true" className="size-7" strokeWidth={1.5} />
              <span className="text-[11px] leading-4 font-medium tracking-[0.18em] uppercase">
                {galerie.placeholder}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
