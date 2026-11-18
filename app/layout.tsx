import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { QueryProvider } from "@/components/providers/query-provider";
import { SmoothScroll } from "@/components/providers/smooth-scroll";
import { Toaster } from "@/components/ui/sonner";
import { site } from "@/content/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const title = `${site.name} — Centre de bien-être à Mohammedia`;
const ogImage = {
  url: "/media/hero-poster.jpg",
  width: 1920,
  height: 1012,
  alt: `${site.name}, Mohammedia`,
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title,
  description: site.description,
  keywords: [
    "centre de bien-être",
    "Mohammedia",
    "EMDR",
    "hypnose",
    "sablothérapie",
    "laserothérapie",
    "madérothérapie",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description: site.description,
    siteName: site.name,
    locale: "fr_MA",
    type: "website",
    url: "/",
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: site.description,
    images: [ogImage.url],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={`${inter.variable} h-full`}>
      <body className="flex min-h-full flex-col">
        <QueryProvider>
          <SmoothScroll>{children}</SmoothScroll>
          <Toaster position="top-center" />
        </QueryProvider>
      </body>
    </html>
  );
}
