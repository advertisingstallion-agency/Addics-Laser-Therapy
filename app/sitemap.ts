import type { MetadataRoute } from "next";
import { site } from "@/content/site";

// One-page site: only the home page.
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: site.url, changeFrequency: "monthly", priority: 1 }];
}
