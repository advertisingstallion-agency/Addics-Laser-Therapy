import Image from "next/image";
import { site } from "@/content/site";

// The round logo badge, cropped to a circle with a champagne hairline.
export function BrandMark() {
  return (
    <span className="flex size-[46px] flex-none items-center justify-center overflow-hidden rounded-full bg-ivory ring-1 ring-champagne">
      <Image
        src="/logo/logo-badge.jpg"
        alt={`Logo ${site.name}`}
        width={76}
        height={76}
        className="max-w-none flex-none"
      />
    </span>
  );
}
