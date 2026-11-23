import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageMotion } from "@/components/PageMotion";
import { About } from "@/components/sections/About";
import { Differentials } from "@/components/sections/Differentials";
import { Experience } from "@/components/sections/Experience";
import { FinalCta } from "@/components/sections/FinalCta";
import { Hero } from "@/components/sections/Hero";
import { Location } from "@/components/sections/Location";
import { Testimonials } from "@/components/sections/Testimonials";
import { Treatments } from "@/components/sections/Treatments";
import { FloatingWhatsApp, WhatsAppProvider } from "@/components/WhatsApp";
import { clinic, siteUrl } from "@/lib/site";

/**
 * Dados estruturados de um site de demonstração. Não usam Dentist nem
 * LocalBusiness, para não declarar endereço, horários ou notas como reais.
 * Em um site de cliente real, troque por "Dentist" com os dados verdadeiros.
 */
const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: `${clinic.name} (site demonstrativo)`,
  url: siteUrl,
  inLanguage: "pt-BR",
  description:
    "Site demonstrativo de uma clínica odontológica fictícia, criado como portfólio de landing pages.",
  about: { "@type": "Thing", name: "Odontologia" },
};

export default function Home() {
  return (
    <WhatsAppProvider>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-navy focus:px-5 focus:py-3 focus:text-white"
      >
        Pular para o conteúdo
      </a>
      <p className="bg-navy px-5 py-2 text-center text-[0.75rem] leading-snug text-sky">
        <span className="font-semibold text-white">Site demonstrativo</span> · A Clínica Sorriso é
        fictícia e não realiza atendimentos.
      </p>
      <Header />
      <PageMotion>
        <div id="conteudo" tabIndex={-1} className="outline-none">
          <Hero />
          <About />
          <Treatments />
          <Differentials />
          <Experience />
          <Testimonials />
          <FinalCta />
          <Location />
        </div>
      </PageMotion>
      <Footer />
      <FloatingWhatsApp />
    </WhatsAppProvider>
  );
}
