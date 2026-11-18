"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, MessageCircle, Pause, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { hero, therapies } from "@/content/site";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [paused, setPaused] = useState(false);

  // Visitors who prefer reduced motion get a still poster.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      videoRef.current?.pause();
    }
  }, []);

  async function togglePlayback() {
    const video = videoRef.current;
    if (!video) return;
    if (!video.paused) {
      video.pause();
      return;
    }
    try {
      await video.play();
    } catch {
      // The browser refused to play: the button keeps showing "play".
    }
  }

  return (
    <section
      id="accueil"
      className="relative isolate flex min-h-[min(100svh,900px)] sm:min-h-[900px] flex-col justify-end overflow-hidden bg-night text-on-night"
    >
      <video
        ref={videoRef}
        src="/media/hero.mp4"
        poster="/media/hero-poster.jpg"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        onPlay={() => setPaused(false)}
        onPause={() => setPaused(true)}
        aria-hidden="true"
        className="absolute inset-0 -z-20 size-full object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,color-mix(in_srgb,var(--night)_55%,transparent)_0%,transparent_24%),linear-gradient(to_top,color-mix(in_srgb,var(--night)_94%,transparent)_0%,color-mix(in_srgb,var(--night)_62%,transparent)_36%,transparent_72%),linear-gradient(to_right,color-mix(in_srgb,var(--night)_72%,transparent)_0%,transparent_62%)]"
      />

      <div className="mx-auto w-full max-w-[1280px] px-6 pt-32 pb-5 sm:pt-40 min-[900px]:px-8">
        <div className="flex flex-wrap items-end justify-between gap-8 pb-12">
          <div className="max-w-[720px] flex-[1_1_520px]">
            <p className="eyebrow animate-rise mb-5 flex items-center gap-3 text-[11px] tracking-[0.18em] text-champagne sm:mb-6 sm:text-xs sm:tracking-[0.26em]">
              <span aria-hidden="true" className="h-px w-8 flex-none bg-champagne sm:w-12" />
              {hero.eyebrow}
            </p>
            <h1
              style={{ animationDelay: "120ms" }}
              className="animate-rise mb-6 text-[clamp(40px,5.4vw,76px)] leading-[1.08] tracking-[-0.035em] text-on-night"
            >
              {hero.titleStart}
              <span className="text-champagne">{hero.titleAccent}</span>
            </h1>
            <p
              style={{ animationDelay: "240ms" }}
              className="animate-rise mb-8 max-w-[520px] text-base leading-7 sm:text-[19px] sm:leading-[30px]"
            >
              {hero.lead}
            </p>
            <div
              style={{ animationDelay: "360ms" }}
              className="animate-rise flex flex-wrap gap-4 max-[560px]:[&>*]:w-full"
            >
              <Button
                variant="onNight"
                render={<a href="#reservation" />}
                nativeButton={false}
              >
                {hero.primaryCta}
              </Button>
              <Button
                variant="onNightOutline"
                render={<a href="#soins" />}
                nativeButton={false}
              >
                {hero.secondaryCta}
                <ArrowRight />
              </Button>
            </div>
          </div>

          <aside
            style={{ animationDelay: "480ms" }}
            className="glass animate-rise hidden flex-[0_0_300px] rounded-[20px] p-6 min-[900px]:block"
          >
            <div
              aria-hidden="true"
              className="mb-4 flex size-11 items-center justify-center rounded-full border border-champagne text-champagne"
            >
              <MessageCircle className="size-[18px]" strokeWidth={1.5} />
            </div>
            <p className="eyebrow mb-2 text-champagne">{hero.card.eyebrow}</p>
            <p className="mb-4 text-[15px] leading-6">{hero.card.text}</p>
            <a
              href="#reservation"
              className="inline-flex items-center gap-2 rounded-full text-xs leading-5 font-medium tracking-[0.16em] text-champagne uppercase transition-colors hover:text-on-night focus-visible:ring-2 focus-visible:ring-on-night focus-visible:outline-none"
            >
              {hero.card.link}
              <ArrowRight className="size-[18px]" strokeWidth={1.5} />
            </a>
          </aside>
        </div>

        <div className="flex items-center justify-between gap-6 border-t border-champagne/40 pt-4">
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-1.5 text-[11px] leading-5 font-medium tracking-[0.14em] uppercase sm:gap-x-4 sm:text-xs sm:tracking-[0.2em]">
            {therapies.map((therapy, index) => (
              <li key={therapy.id} className="flex items-center gap-4 text-on-night/90">
                {index > 0 && (
                  <span
                    aria-hidden="true"
                    className="hidden size-1 rounded-full bg-champagne sm:block"
                  />
                )}
                {therapy.name}
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={togglePlayback}
            aria-label={paused ? hero.play : hero.pause}
            className="inline-flex size-11 flex-none items-center justify-center rounded-full border border-champagne/60 text-champagne transition-colors hover:bg-on-night/10 focus-visible:ring-2 focus-visible:ring-on-night focus-visible:outline-none"
          >
            {paused ? (
              <Play className="size-[18px]" strokeWidth={1.5} />
            ) : (
              <Pause className="size-[18px]" strokeWidth={1.5} />
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
