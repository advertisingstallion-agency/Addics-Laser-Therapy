import Image from "next/image";
import { ArrowRight, Clock } from "lucide-react";
import { Rings } from "@/components/rings";
import { SectionHeading } from "@/components/section-heading";
import { therapyIcons } from "@/components/sections/therapy-icons";
import { Button } from "@/components/ui/button";
import {
  soins,
  therapies,
  therapyDuration,
  therapyPrice,
} from "@/content/site";

export function Soins() {
  return (
    <section
      id="soins"
      className="relative overflow-hidden bg-ivory px-5 py-14 text-ink md:px-8 md:py-20 lg:px-16 lg:py-24"
    >
      <Rings className="-top-[260px] -right-[260px] opacity-35" />
      <div className="relative mx-auto max-w-[1200px]">
        <header className="mb-12 grid items-end gap-6 lg:mb-16 lg:grid-cols-[1.15fr_.85fr] lg:gap-16">
          <SectionHeading eyebrow={soins.eyebrow} title={soins.title} />
          <div>
            <p className="mb-5 text-base leading-7 sm:text-[19px] sm:leading-[30px] text-ink-muted">
              {soins.intro}
            </p>
            <a
              href="#tarifs"
              className="group inline-flex items-center gap-2 rounded-full text-xs leading-5 font-medium tracking-[0.16em] text-navy uppercase focus-visible:ring-2 focus-visible:ring-navy focus-visible:outline-none"
            >
              {soins.pricesLink}
              <ArrowRight
                className="size-[18px] transition-transform duration-300 group-hover:translate-x-1"
                strokeWidth={1.5}
              />
            </a>
          </div>
        </header>

        <div className="grid grid-cols-[minmax(0,1fr)] gap-5 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Photo tile */}
          <article className="relative isolate flex min-h-[300px] flex-col justify-end overflow-hidden rounded-[20px] border border-night bg-night p-6 sm:min-h-[340px] sm:p-8 text-on-night md:col-span-2 lg:col-span-1 lg:row-span-2 lg:min-h-0">
            <Image
              src="/media/hero-poster.jpg"
              alt={soins.photo.alt}
              fill
              sizes="(min-width: 1024px) 33vw, 100vw"
              className="-z-20 object-cover object-[62%_center]"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 -z-10 bg-[linear-gradient(to_top,color-mix(in_srgb,var(--night)_94%,transparent)_0%,color-mix(in_srgb,var(--night)_55%,transparent)_40%,transparent_75%)]"
            />
            <p className="glass mb-5 self-start rounded-full px-3.5 text-[11px] leading-7 font-medium tracking-[0.18em] uppercase">
              {soins.photo.badge}
            </p>
            <h3 className="mb-3 text-[24px] leading-8 sm:text-[30px] sm:leading-9 tracking-[-0.025em] text-on-night">
              {soins.photo.title}
            </h3>
            <p className="opacity-90">{soins.photo.text}</p>
          </article>

          {/* Five therapy cards */}
          {therapies.map((therapy, index) => {
            const Icon = therapyIcons[therapy.id];
            const isLast = index === therapies.length - 1;
            return (
              <article
                key={therapy.id}
                className={`group relative isolate flex min-h-[300px] flex-col overflow-hidden rounded-[20px] border border-line bg-raised p-6 shadow-soft sm:p-8 transition-[transform,box-shadow,border-color] duration-300  hover:border-navy hover:shadow-[0_28px_56px_rgba(26,34,49,.14)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 ${isLast ? "md:col-span-2" : ""}`}
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 220 220"
                  className="absolute -right-[70px] -bottom-[70px] -z-10 size-[220px] fill-none stroke-champagne opacity-35 transition-[transform,opacity] duration-500 group-hover:rotate-[8deg] group-hover:scale-110 group-hover:opacity-65 motion-reduce:transition-none"
                >
                  <circle cx="110" cy="110" r="108" />
                  <circle cx="110" cy="110" r="78" />
                  <circle cx="110" cy="110" r="48" />
                </svg>
                <div className="mb-7 flex items-start justify-between">
                  <div
                    aria-hidden="true"
                    className="flex size-14 items-center justify-center rounded-full border border-champagne text-navy"
                  >
                    <Icon className="size-[26px]" strokeWidth={1.5} />
                  </div>
                  <span className="text-xs leading-4 font-medium tracking-[0.24em] text-champagne-text">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mb-3 text-[26px] leading-8 tracking-[-0.02em]">
                  {therapy.name}
                </h3>
                <p className="max-w-[480px] text-ink-muted">
                  {therapy.description}
                </p>
                <div className="mt-auto flex items-center justify-between gap-4 pt-7">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-champagne-soft px-3 text-xs leading-[26px] font-medium text-champagne-text">
                      <Clock className="size-3.5" strokeWidth={1.5} />
                      {therapyDuration}
                    </span>
                    <span className="font-medium text-navy">
                      {therapyPrice}
                    </span>
                  </div>
                  <a
                    href="#reservation"
                    aria-label={`${soins.bookLabel} ${therapy.name}`}
                    className="flex size-11 flex-none items-center justify-center rounded-full border border-champagne text-navy transition-colors duration-300 group-hover:border-navy group-hover:bg-navy group-hover:text-on-navy after:absolute after:inset-0 after:rounded-[20px] after:content-[''] focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2 focus-visible:outline-none"
                  >
                    <ArrowRight
                      className="size-[18px] transition-transform duration-300 group-hover:translate-x-0.5"
                      strokeWidth={1.5}
                    />
                  </a>
                </div>
              </article>
            );
          })}

          {/* Dark CTA tile */}
          <aside className="relative flex flex-col justify-end overflow-hidden rounded-[20px] bg-night p-6 text-on-night sm:p-8 md:col-span-2 lg:col-span-1">
            <svg
              aria-hidden="true"
              viewBox="0 0 300 300"
              className="absolute -top-[90px] -right-[90px] size-[300px] fill-none stroke-champagne opacity-55"
            >
              <circle cx="150" cy="150" r="140" />
              <circle cx="150" cy="150" r="104" />
              <circle cx="150" cy="150" r="68" />
              <circle
                cx="150"
                cy="150"
                r="4"
                className="fill-champagne stroke-none"
              />
            </svg>
            <p className="eyebrow relative mb-3 text-champagne">
              {soins.cta.eyebrow}
            </p>
            <h3 className="relative mb-3 text-[26px] leading-8 tracking-[-0.02em] text-on-night">
              {soins.cta.title}
            </h3>
            <p className="relative mb-6 opacity-90">{soins.cta.text}</p>
            <div className="relative">
              <Button
                variant="onNight"
                render={<a href="#reservation" />}
                nativeButton={false}
              >
                {soins.cta.button}
                <ArrowRight />
              </Button>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
