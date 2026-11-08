import Image from "next/image";
import { BookingButton } from "@/components/Booking";

export function About() {
  return (
    <section id="sobre" className="py-[var(--section-y)]">
      <div className="shell">
        <h2 data-title className="heading max-w-[20ch]">
          Uma clínica completa para cuidar do seu sorriso.
        </h2>

        <div className="mt-10 grid gap-y-9 lg:mt-16 lg:grid-cols-12 lg:items-end lg:gap-x-6">
          <div
            data-reveal
            className="relative -mx-[var(--gutter)] aspect-[3/2] overflow-hidden bg-clay sm:aspect-[2/1] lg:col-span-7 lg:mr-0 lg:aspect-[1.75/1]"
          >
            <div data-parallax className="absolute inset-x-0 -top-[8%] h-[116%]">
              <Image
                src="/images/consulta-paciente.webp"
                alt="Dentista sorridente mostrando uma radiografia em um tablet durante a consulta"
                fill
                quality={85}
                sizes="(max-width: 1023px) 100vw, 60vw"
                className="object-cover object-[62%_50%]"
              />
            </div>
          </div>

          <div className="lg:col-span-4 lg:col-start-9">
            <p data-rise className="lede">
              Na Clínica Sorriso, acreditamos que cada sorriso merece atenção especial. Unimos
              tecnologia, cuidado e acolhimento para proporcionar uma experiência odontológica
              confortável, personalizada e de qualidade.
            </p>
            <div data-rise className="mt-8">
              <BookingButton label="Agendar avaliação" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
