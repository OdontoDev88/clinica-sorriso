import { ArrowRight, Clock } from "lucide-react";
import Image from "next/image";
import { WhatsAppIcon } from "@/components/Icons";
import { WhatsAppLink } from "@/components/WhatsApp";

export function FinalCta() {
  return (
    <section aria-labelledby="cta-titulo" className="py-[calc(var(--section-y)*0.6)]">
      <div className="shell">
        <div
          data-reveal-media
          className="on-dark relative isolate overflow-hidden rounded-[2rem] bg-navy text-white shadow-[var(--shadow-lift)] sm:rounded-[2.5rem]"
        >
          <div className="absolute inset-y-0 right-0 -z-10 w-full md:w-[55%]">
            <Image
              src="/images/sorriso-natural.jpg"
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 55vw"
              data-parallax
              className="object-cover object-[60%_40%]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-navy/10 max-md:bg-navy/80 max-md:bg-none" />
          </div>
          <div
            aria-hidden="true"
            className="absolute -left-24 -top-24 -z-10 size-80 rounded-full bg-azure/40 blur-3xl"
          />

          <div className="max-w-2xl px-7 py-14 sm:px-12 sm:py-20 lg:px-16 lg:py-24">
            <p className="eyebrow">Agende sua avaliação</p>
            <h2 id="cta-titulo" className="heading mt-5">
              Está na hora de cuidar do seu <em>sorriso?</em>
            </h2>
            <p className="mt-6 max-w-lg text-[1.0625rem] leading-relaxed text-sky">
              Converse com a nossa equipe pelo WhatsApp, tire suas dúvidas e encontre o melhor horário
              para a sua primeira avaliação. Sem compromisso.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <WhatsAppLink className="btn btn-whatsapp">
                <WhatsAppIcon />
                Chamar no WhatsApp
              </WhatsAppLink>
              <a
                href="#contato"
                className="btn border border-white/25 text-white hover:-translate-y-0.5 hover:bg-white/10"
              >
                Ver endereço e horários
                <ArrowRight className="btn-arrow size-4" aria-hidden="true" />
              </a>
            </div>
            <p className="mt-7 flex items-center gap-2 text-[0.875rem] text-sky">
              <Clock className="size-4 text-accent" aria-hidden="true" />
              Resposta em horário comercial
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
