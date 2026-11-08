import Image from "next/image";
import { BookingButton } from "@/components/Booking";

export function FinalCta() {
  return (
    <section
      id="agendar"
      data-panel
      className="on-dark relative flex min-h-[38rem] items-end overflow-hidden bg-cocoa text-linen lg:min-h-[46rem]"
    >
      <div data-parallax className="absolute inset-x-0 -top-[8%] h-[116%]">
        <Image
          src="/images/fachada-clinica.webp"
          alt=""
          fill
          quality={85}
          sizes="100vw"
          className="object-cover object-[72%_50%]"
        />
      </div>
      {/* Véu necessário para o contraste do texto sobre a fotografia. */}
      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgb(47_32_24/0.95)_18%,rgb(47_32_24/0.78)_62%,rgb(47_32_24/0.35)_100%)] lg:bg-[linear-gradient(to_right,rgb(47_32_24/0.92)_12%,rgb(47_32_24/0.62)_52%,rgb(47_32_24/0.1)_82%)]" />

      <div className="shell relative py-16 lg:py-24">
        <h2 data-title className="heading max-w-[17ch]">
          Seu sorriso merece atenção, cuidado e os melhores profissionais ao seu lado.
        </h2>
        <p data-rise className="mt-5 max-w-[34rem] text-[1.125rem] text-sand">
          Conheça a Clínica Sorriso e descubra uma experiência odontológica acolhedora.
        </p>
        <div data-rise className="mt-8">
          <BookingButton label="Agendar avaliação" tone="light" />
        </div>
      </div>
    </section>
  );
}
