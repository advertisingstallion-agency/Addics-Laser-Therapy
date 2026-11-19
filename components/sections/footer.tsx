import { ArrowRight } from "lucide-react";
import { BrandMark } from "@/components/brand-mark";
import { Button } from "@/components/ui/button";
import { footer, navLinks, site, therapies } from "@/content/site";

const textClass = "block py-1 text-sm leading-6 text-on-night/70";

// Champagne underline that grows from the left on hover and focus.
const linkClass = `${textClass} relative w-fit rounded-md transition-colors duration-300 hover:text-on-night focus-visible:ring-2 focus-visible:ring-on-night focus-visible:outline-none after:absolute after:inset-x-0 after:bottom-1 after:h-px after:origin-left after:scale-x-0 after:bg-champagne after:transition-transform after:duration-300 hover:after:scale-x-100 focus-visible:after:scale-x-100 motion-reduce:after:transition-none`;

const headingClass = "mb-4 text-base leading-6 font-semibold text-on-night";

export function Footer() {
  return (
    <footer className="bg-night p-3 sm:p-6">
      <div className="relative mx-auto max-w-[1392px] overflow-hidden rounded-[20px] border border-champagne/25 bg-deeper-night px-6 pt-8 text-on-night sm:rounded-3xl sm:px-8 sm:pt-12 lg:px-16 lg:pt-[72px]">
        <div className="grid grid-cols-2 items-start gap-x-8 gap-y-10 lg:grid-cols-[1.6fr_repeat(4,.8fr)]">
          <div className="col-span-2 lg:col-span-1">
            <a
              href="#accueil"
              className="mb-5 inline-flex items-center gap-3 rounded-md focus-visible:ring-2 focus-visible:ring-on-night focus-visible:outline-none"
            >
              <BrandMark />
              <span className="text-xl leading-6 font-semibold tracking-[-0.01em]">
                {site.name}
              </span>
            </a>
            <p className="mb-7 max-w-[320px] text-sm leading-6 text-on-night/70">
              {footer.about}
            </p>
            <Button
              variant="onNight"
              size="sm"
              render={<a href="#reservation" />}
              nativeButton={false}
            >
              {footer.cta}
              <ArrowRight />
            </Button>
          </div>

          <nav aria-label="Navigation du pied de page">
            <h3 className={headingClass}>{footer.columns.navigation}</h3>
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className={linkClass}>
                {link.label}
              </a>
            ))}
          </nav>

          <nav aria-label={footer.columns.soins}>
            <h3 className={headingClass}>{footer.columns.soins}</h3>
            {therapies.map((therapy) => (
              <a key={therapy.id} href="#soins" className={linkClass}>
                {therapy.name}
              </a>
            ))}
          </nav>

          <nav aria-label={footer.columns.infos}>
            <h3 className={headingClass}>{footer.columns.infos}</h3>
            {footer.infoLinks.map((link) => (
              <a key={link.href} href={link.href} className={linkClass}>
                {link.label}
              </a>
            ))}
          </nav>

          <div>
            <h3 className={headingClass}>{footer.columns.contact}</h3>
            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              Instagram
            </a>
            <span className={textClass}>{site.phone}</span>
            <span className={textClass}>{site.email}</span>
            <span className={textClass}>{site.city}</span>
          </div>
        </div>

        <p className="mt-12 text-[13px] leading-5 text-on-night/70 lg:mt-[72px]">
          {site.copyright}
        </p>

        <div
          aria-hidden="true"
          className="mt-10 -mb-[.12em] text-center text-[clamp(44px,10.4vw,150px)] leading-[.84] font-semibold tracking-[-0.045em] whitespace-nowrap text-champagne select-none [mask-image:linear-gradient(to_right,transparent_0%,#000_16%,#000_84%,transparent_100%)]"
        >
          {footer.wordmark}
        </div>
      </div>
    </footer>
  );
}
