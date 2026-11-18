"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { BrandMark } from "@/components/brand-mark";
import { Rings } from "@/components/rings";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { nav, navLinks, site } from "@/content/site";

const SCROLL_THRESHOLD = 40;

export function Navbar() {
  const [solid, setSolid] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const update = () => setSolid(window.scrollY > SCROLL_THRESHOLD);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  const linkClass =
    "relative block px-4 py-2 text-xs leading-5 font-medium tracking-[0.16em] uppercase opacity-85 transition-opacity duration-300 hover:opacity-100 focus-visible:ring-2 focus-visible:ring-current focus-visible:outline-none rounded-full";

  return (
    <nav
      aria-label="Navigation principale"
      className={`fixed top-4 left-1/2 z-40 flex w-[calc(100%-32px)] max-w-[1200px] -translate-x-1/2 items-center justify-between gap-6 rounded-full py-2.5 pr-2.5 pl-3.5 transition-[background-color,border-color,color,box-shadow] duration-300 min-[900px]:top-6 min-[900px]:w-[calc(100%-64px)] ${
        solid
          ? "border border-line bg-ivory/90 text-ink shadow-soft backdrop-blur-lg"
          : "glass text-on-night"
      }`}
    >
      <a
        href="#accueil"
        className="flex min-w-0 items-center gap-2.5 sm:gap-3 rounded-full focus-visible:ring-2 focus-visible:ring-current focus-visible:outline-none"
      >
        <BrandMark />
        <span className="grid gap-0.5">
          <span className="text-[15px] leading-5 font-medium tracking-[0.01em] whitespace-nowrap sm:text-lg">
            {site.name}
          </span>
          <span
            className={`hidden text-[10px] leading-3 font-medium tracking-[0.26em] uppercase sm:block ${solid ? "text-champagne-text" : "text-champagne"}`}
          >
            {nav.brandSub}
          </span>
        </span>
      </a>

      <ul className="hidden gap-1 min-[900px]:flex">
        {navLinks.map((link, index) => (
          <li key={link.href}>
            <a
              href={link.href}
              aria-current={index === 0 && !solid ? "page" : undefined}
              className={`${linkClass} aria-[current=page]:opacity-100 aria-[current=page]:after:absolute aria-[current=page]:after:bottom-0 aria-[current=page]:after:left-1/2 aria-[current=page]:after:-ml-0.5 aria-[current=page]:after:size-1 aria-[current=page]:after:rounded-full aria-[current=page]:after:content-[''] ${solid ? "aria-[current=page]:after:bg-champagne-text" : "aria-[current=page]:after:bg-champagne"}`}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-2">
        <Button
          variant={solid ? "default" : "onNight"}
          size="sm"
          className="hidden min-[560px]:inline-flex"
          render={<a href="#reservation" />}
          nativeButton={false}
        >
          {nav.cta}
        </Button>

        <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
          <SheetTrigger
            aria-label={nav.openMenu}
            className="inline-flex size-[46px] items-center justify-center rounded-full border border-current/40 transition-colors duration-300 hover:bg-current/10 min-[900px]:hidden"
          >
            <Menu className="size-5" strokeWidth={1.5} />
          </SheetTrigger>
          <SheetContent
            side="right"
            showCloseButton={false}
            className="w-[min(92vw,400px)] gap-0 overflow-hidden rounded-l-[28px] border-l border-champagne/30 bg-night p-0 text-on-night data-[side=right]:sm:max-w-[400px]"
          >
            <Rings className="-right-[300px] -bottom-[300px] opacity-25" />

            <SheetHeader className="relative flex-row items-center justify-between p-5">
              <SheetTitle className="flex items-center gap-3 text-lg font-medium text-on-night">
                <BrandMark />
                {site.name}
              </SheetTitle>
              <SheetClose
                aria-label={nav.closeMenu}
                className="flex size-11 flex-none items-center justify-center rounded-full border border-champagne/60 text-champagne transition-colors duration-300 hover:bg-on-night/10 focus-visible:ring-2 focus-visible:ring-on-night focus-visible:outline-none"
              >
                <X className="size-5" strokeWidth={1.5} />
              </SheetClose>
            </SheetHeader>

            <div aria-hidden="true" className="mx-5 h-px bg-champagne/30" />

            <ul className="relative flex-1 overflow-y-auto px-5 py-4">
              {navLinks.map((link, index) => (
                <li
                  key={link.href}
                  style={{ animationDelay: `${150 + index * 70}ms` }}
                  className="animate-rise border-b border-champagne/20 last:border-b-0"
                >
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="group flex items-center gap-4 rounded-xl py-4 focus-visible:ring-2 focus-visible:ring-on-night focus-visible:outline-none"
                  >
                    <span className="w-6 text-xs font-medium tracking-[0.24em] text-champagne">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1 text-[28px] leading-8 font-semibold tracking-[-0.03em] transition-transform duration-300 group-hover:translate-x-1">
                      {link.label}
                    </span>
                    <ArrowRight
                      className="size-5 text-champagne opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      strokeWidth={1.5}
                    />
                  </a>
                </li>
              ))}
            </ul>

            <div
              style={{ animationDelay: "520ms" }}
              className="animate-rise relative grid gap-4 p-5 pb-6"
            >
              <Button
                variant="onNight"
                className="w-full"
                render={<a href="#reservation" />}
                nativeButton={false}
                onClick={() => setMenuOpen(false)}
              >
                {nav.cta}
                <ArrowRight />
              </Button>
              <p className="text-center text-[11px] leading-4 font-medium tracking-[0.26em] text-champagne uppercase">
                {nav.brandSub}
              </p>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
