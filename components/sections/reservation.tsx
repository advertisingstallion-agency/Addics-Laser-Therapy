import { AtSign, Clock, Mail, MapPin, Phone, type LucideIcon } from "lucide-react";
import { Rings } from "@/components/rings";
import { SectionHeading } from "@/components/section-heading";
import { BookingForm } from "@/components/sections/booking-form";
import { reservation, site } from "@/content/site";

type ContactRow = {
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string;
};

// Phone and e-mail are plain text until the real values replace the placeholders.
const contactRows: ContactRow[] = [
  { icon: Phone, label: reservation.labels.phone, value: site.phone },
  { icon: Mail, label: reservation.labels.email, value: site.email },
  {
    icon: AtSign,
    label: reservation.labels.instagram,
    value: site.instagramHandle,
    href: site.instagramUrl,
  },
  { icon: MapPin, label: reservation.labels.address, value: site.address },
  { icon: Clock, label: reservation.labels.hours, value: site.hours },
];

export function Reservation() {
  return (
    <section
      id="reservation"
      className="relative overflow-hidden bg-night px-5 py-14 text-on-night md:px-8 md:py-20 lg:px-16 lg:py-28"
    >
      <Rings className="-top-[280px] -left-[280px] opacity-20" />
      <div className="relative mx-auto grid max-w-[1200px] items-start gap-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-[72px]">
        <div>
          <SectionHeading eyebrow={reservation.eyebrow} title={reservation.title} dark />
          <p className="mt-6 mb-10 max-w-[460px] text-base leading-7 sm:text-[19px] sm:leading-[30px] opacity-90">
            {reservation.intro}
          </p>

          <ul className="grid gap-5 sm:gap-7">
            {contactRows.map(({ icon: Icon, label, value, href }) => {
              const content = (
                <>
                  <span
                    aria-hidden="true"
                    className="flex size-[52px] flex-none items-center justify-center rounded-full border border-champagne text-champagne"
                  >
                    <Icon className="size-[22px]" strokeWidth={1.5} />
                  </span>
                  <span className="grid min-w-0 gap-0.5">
                    <span className="text-[11px] leading-4 font-medium tracking-[0.22em] text-champagne uppercase">
                      {label}
                    </span>
                    <span className="text-base font-medium break-words sm:text-lg">{value}</span>
                  </span>
                </>
              );
              return (
                <li key={label}>
                  {href ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 rounded-xl focus-visible:ring-2 focus-visible:ring-on-night focus-visible:ring-offset-2 focus-visible:ring-offset-night focus-visible:outline-none"
                    >
                      {content}
                    </a>
                  ) : (
                    <div className="flex items-center gap-4">{content}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        <BookingForm />
      </div>
    </section>
  );
}
