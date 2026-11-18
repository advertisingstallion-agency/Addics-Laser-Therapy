// Eyebrow with a hairline, then the section title.
export function SectionHeading({
  eyebrow,
  title,
  dark = false,
  centered = false,
}: {
  eyebrow: string;
  title: string;
  dark?: boolean;
  centered?: boolean;
}) {
  return (
    <div>
      <p
        className={`eyebrow mb-5 flex items-center gap-3 ${centered ? "justify-center" : ""} ${dark ? "text-champagne" : "text-champagne-text"}`}
      >
        <span aria-hidden="true" className="h-px w-12 bg-champagne" />
        {eyebrow}
        {centered && (
          <span aria-hidden="true" className="h-px w-12 bg-champagne" />
        )}
      </p>
      <h2
        className={`text-[34px] leading-[38px] tracking-[-0.035em] min-[420px]:text-[40px] min-[420px]:leading-[44px] sm:text-[52px] sm:leading-[56px] lg:text-[64px] lg:leading-[64px] ${dark ? "text-on-night" : "text-ink"}`}
      >
        {title}
      </h2>
    </div>
  );
}
