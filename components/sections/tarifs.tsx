import { ArrowRight, Check } from "lucide-react";
import { Rings } from "@/components/rings";
import { SectionHeading } from "@/components/section-heading";
import { therapyIcons } from "@/components/sections/therapy-icons";
import { Button } from "@/components/ui/button";
import { tarifs, therapies, therapyDuration, therapyPrice } from "@/content/site";

export function Tarifs() {
  const pack = tarifs.package;

  return (
    <section
      id="tarifs"
      className="relative overflow-hidden bg-night px-5 py-14 text-on-night md:px-8 md:py-20 lg:px-16 lg:py-28"
    >
      <Rings className="-bottom-[300px] -left-[300px] opacity-20" />
      <div className="relative mx-auto max-w-[1200px]">
        <header className="mb-14 grid items-end gap-6 lg:grid-cols-[1.15fr_.85fr] lg:gap-16">
          <SectionHeading eyebrow={tarifs.eyebrow} title={tarifs.title} dark />
          <p className="text-base leading-7 sm:text-[19px] sm:leading-[30px] opacity-90">{tarifs.intro}</p>
        </header>

        <div className="grid grid-cols-[minmax(0,1fr)] items-stretch gap-6 sm:gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,.8fr)]">
          {/* Price list with leader dots */}
          <div className="glass overflow-hidden rounded-[20px]">
            <ul>
              {therapies.map((therapy) => {
                const Icon = therapyIcons[therapy.id];
                return (
                  <li
                    key={therapy.id}
                    className="flex items-center gap-3 border-b border-champagne/30 px-5 py-5 sm:gap-4 sm:px-8 sm:py-7 transition-colors duration-300 last:border-b-0 hover:bg-on-night/5"
                  >
                    <div
                      aria-hidden="true"
                      className="hidden size-11 flex-none items-center justify-center rounded-full border border-champagne text-champagne min-[420px]:flex"
                    >
                      <Icon className="size-5" strokeWidth={1.5} />
                    </div>
                    <div className="grid gap-0.5">
                      <span className="text-lg leading-6 font-semibold tracking-[-0.01em] sm:text-xl sm:leading-[26px]">
                        {therapy.name}
                      </span>
                      <span className="text-[13px] leading-5 text-champagne">
                        {therapyDuration}
                      </span>
                    </div>
                    <span
                      aria-hidden="true"
                      className="mb-2 hidden flex-1 self-end border-b border-dotted border-champagne/60 sm:block"
                    />
                    <span className="ml-auto text-base font-semibold tracking-[-0.01em] whitespace-nowrap sm:text-xl">
                      {therapyPrice}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Package card: the only promo badge on the page */}
          <aside className="flex flex-col rounded-[20px] border border-line bg-raised p-6 text-ink sm:p-8 shadow-[0_24px_56px_rgba(0,0,0,.35)]">
            <p className="mb-5 self-start rounded-full bg-promo-soft px-3 text-[11px] leading-[22px] font-medium tracking-[0.16em] text-promo uppercase">
              {pack.badge}
            </p>
            <h3 className="mb-2 text-[26px] leading-8 tracking-[-0.02em]">
              {pack.title}
            </h3>
            <p className="text-ink-muted">{pack.text}</p>
            <div className="mt-6 flex flex-wrap items-baseline gap-x-3 gap-y-1 border-t border-line pt-6">
              <strong className="text-[40px] leading-[44px] font-semibold sm:text-[52px] sm:leading-[52px] tracking-[-0.035em] text-navy">
                {pack.price}
              </strong>
              <s className="text-base text-promo">{pack.oldPrice}</s>
            </div>
            <ul className="mt-6 mb-8 grid gap-3">
              {pack.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <Check
                    aria-hidden="true"
                    className="mt-1 size-[18px] flex-none text-champagne-text"
                    strokeWidth={1.75}
                  />
                  {feature}
                </li>
              ))}
            </ul>
            <Button
              className="mt-auto w-full"
              render={<a href="#reservation" />}
              nativeButton={false}
            >
              {pack.cta}
              <ArrowRight />
            </Button>
          </aside>
        </div>

        <p className="mt-8 text-center text-[13px] leading-5 text-champagne">
          {tarifs.note}
        </p>
      </div>
    </section>
  );
}
