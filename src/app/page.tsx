import { BookingProvider } from "@/components/Booking";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageMotion } from "@/components/PageMotion";
import { About } from "@/components/sections/About";
import { FinalCta } from "@/components/sections/FinalCta";
import { Hero } from "@/components/sections/Hero";
import { Location } from "@/components/sections/Location";
import { Reviews } from "@/components/sections/Reviews";
import { Specialties } from "@/components/sections/Specialties";
import { Structure } from "@/components/sections/Structure";
import { Team } from "@/components/sections/Team";
import { clinic, siteUrl } from "@/lib/site";

/**
 * Dados estruturados de um site de demonstração. Não usam Dentist nem
 * LocalBusiness, para não declarar endereço, horários ou notas como reais.
 */
const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: `${clinic.name} (projeto de demonstração)`,
  url: siteUrl,
  inLanguage: "pt-BR",
  description:
    "Site de demonstração para portfólio de desenvolvimento web. A clínica odontológica apresentada é fictícia.",
  genre: "Portfólio de desenvolvimento web",
  about: { "@type": "Thing", name: "Odontologia" },
};

export default function Home() {
  return (
    <BookingProvider>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <p className="on-dark bg-cocoa px-5 py-2 text-center text-[0.8125rem] leading-snug text-sand">
        Clínica fictícia. Demonstração de portfólio, sem atendimento real.
      </p>
      <Header />
      <PageMotion>
        <Hero />
        <Structure />
        <About />
        <Reviews />
        <Location />
        <Specialties />
        <Team />
        <FinalCta />
      </PageMotion>
      <Footer />
    </BookingProvider>
  );
}
