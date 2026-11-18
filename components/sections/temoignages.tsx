"use client";

import { useState } from "react";
import { Pause, Play } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { temoignages } from "@/content/site";

const tints = ["#ece4d0", "#e2e6ec", "#e9dcc3", "#d5dde8", "#efe2d5", "#dde5de"];

// Same five placeholder cards in every row; the second row starts on another tint.
function Cards({ offset, hiddenFromReaders }: { offset: number; hiddenFromReaders?: boolean }) {
  return (
    <div
      aria-hidden={hiddenFromReaders}
      className={`flex ${hiddenFromReaders ? "motion-reduce:hidden" : ""}`}
    >
      {temoignages.items.map((text, index) => (
        <figure
          key={index}
          style={{ background: tints[(index + offset) % tints.length] }}
          className="mr-4 flex w-[272px] flex-none flex-col justify-between gap-5 rounded-[20px] p-5 sm:mr-6 sm:w-[380px] sm:gap-6 sm:p-7"
        >
          <blockquote className="text-[15px] leading-6 text-ink sm:text-base sm:leading-[26px]">{text}</blockquote>
          <figcaption className="grid grid-cols-[44px_minmax(0,1fr)] items-center gap-x-3 sm:grid-cols-[48px_minmax(0,1fr)] sm:gap-x-3.5">
            <span
              aria-hidden="true"
              className="row-span-2 flex size-11 sm:size-12 items-center justify-center rounded-full border border-champagne bg-raised text-[13px] leading-none font-semibold text-champagne-text"
            >
              {temoignages.initial}
            </span>
            <span className="font-semibold text-ink">{temoignages.name}</span>
            <span className="text-sm leading-5 text-[#3f4a5d]">{temoignages.role}</span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

function Row({
  animation,
  offset,
  paused,
}: {
  animation: string;
  offset: number;
  paused: boolean;
}) {
  return (
    <div className="group/row overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_4%,#000_96%,transparent)] sm:[mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)] motion-reduce:overflow-x-auto motion-reduce:[mask-image:none]">
      <div
        style={{ animationPlayState: paused ? "paused" : undefined }}
        className={`flex w-max ${animation} group-focus-within/row:[animation-play-state:paused] group-hover/row:[animation-play-state:paused] motion-reduce:animate-none`}
      >
        <Cards offset={offset} />
        <Cards offset={offset} hiddenFromReaders />
      </div>
    </div>
  );
}

export function Temoignages() {
  const [paused, setPaused] = useState(false);
  const Icon = paused ? Play : Pause;

  return (
    <section
      id="temoignages"
      className="relative overflow-hidden bg-ivory py-14 text-ink md:py-[72px] lg:py-24"
    >
      <header className="mx-auto mb-8 max-w-[720px] px-5 text-center sm:mb-14 sm:px-6">
        <SectionHeading
          eyebrow={temoignages.eyebrow}
          title={temoignages.title}
          centered
        />
        <p className="mt-4 text-base leading-7 text-ink-muted sm:mt-5 sm:text-[19px] sm:leading-[30px]">
          {temoignages.intro}
        </p>
      </header>

      <div className="mb-4 sm:mb-6">
        <Row animation="animate-marquee" offset={0} paused={paused} />
      </div>
      <Row animation="animate-marquee-slow" offset={3} paused={paused} />

      <div className="mt-8 flex justify-center sm:mt-10">
        <button
          type="button"
          onClick={() => setPaused((value) => !value)}
          aria-label={paused ? temoignages.playLabel : temoignages.pauseLabel}
          className="inline-flex h-11 items-center gap-2.5 rounded-full border border-champagne px-5 text-xs leading-5 font-medium tracking-[0.16em] text-navy uppercase transition-colors duration-300 hover:bg-navy/10 focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2 focus-visible:ring-offset-ivory focus-visible:outline-none motion-reduce:hidden"
        >
          <Icon className="size-4" strokeWidth={1.5} />
          {paused ? temoignages.playText : temoignages.pauseText}
        </button>
      </div>
    </section>
  );
}
