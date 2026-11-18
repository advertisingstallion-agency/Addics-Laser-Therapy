import { Footer } from "@/components/sections/footer";
import { Galerie } from "@/components/sections/galerie";
import { Hero } from "@/components/sections/hero";
import { Navbar } from "@/components/sections/navbar";
import { Reservation } from "@/components/sections/reservation";
import { Soins } from "@/components/sections/soins";
import { Tarifs } from "@/components/sections/tarifs";
import { Temoignages } from "@/components/sections/temoignages";
import { site } from "@/content/site";

// Phone, e-mail and opening hours are left out: they are still placeholders.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  name: site.name,
  description: site.description,
  url: site.url,
  image: `${site.url}/media/hero-poster.jpg`,
  logo: `${site.url}/logo/logo-badge.jpg`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mohammedia",
    addressCountry: "MA",
  },
  sameAs: [site.instagramUrl],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Navbar />
      <main>
        <Hero />
        <Soins />
        <Tarifs />
        <Temoignages />
        <Galerie />
        <Reservation />
      </main>
      <Footer />
    </>
  );
}
