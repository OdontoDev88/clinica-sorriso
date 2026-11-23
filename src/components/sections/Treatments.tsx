import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { TreatmentGlyph } from "@/components/Icons";
import { WhatsAppLink } from "@/components/WhatsApp";
import { treatments } from "@/lib/site";

export function Treatments() {
  return (
    <section id="tratamentos" aria-labelledby="tratamentos-titulo" className="section relative">
      <div className="shell">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p data-reveal className="eyebrow">
              Tratamentos
            </p>
            <h2 id="tratamentos-titulo" data-title className="heading mt-5 text-navy">
              Tudo o que o seu sorriso precisa, <em>em um só lugar.</em>
            </h2>
          </div>
          <p data-reveal className="lede lg:col-span-5 lg:pb-2">
            Tratamentos completos, do preventivo ao estético, sempre com diagnóstico cuidadoso e um plano
            pensado para a sua rotina.
          </p>
        </div>

        <ul data-cards className="mt-14 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-7">
          {treatments.map((treatment, index) => (
            <li key={treatment.id} className="h-full">
              <article className="group card card-hover flex h-full flex-col overflow-hidden">
                <div className="relative aspect-[16/11] overflow-hidden bg-mist">
                  <Image
                    src={treatment.image}
                    alt={treatment.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                    data-card-img
                    className="zoom-media object-cover"
                    style={{ objectPosition: treatment.position ?? "50% 50%" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/25 via-transparent to-transparent" />
                  <span className="glass absolute right-4 top-4 rounded-full px-3 py-1 text-[0.75rem] font-bold tracking-wider text-navy">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="relative flex flex-1 flex-col px-6 pb-6 pt-10 sm:px-7 sm:pb-7">
                  <span className="icon-tilt absolute -top-7 left-6 grid size-14 place-items-center rounded-2xl border border-line bg-white text-navy shadow-[var(--shadow-soft)] transition-colors duration-500 group-hover:bg-navy group-hover:text-white sm:left-7">
                    <TreatmentGlyph name={treatment.icon} className="size-7" />
                  </span>
                  <h3 className="font-display text-[1.75rem] leading-tight text-navy">
                    {treatment.title}
                  </h3>
                  <p className="mt-3 flex-1 text-[0.9375rem] leading-relaxed text-slate">
                    {treatment.text}
                  </p>
                  <WhatsAppLink
                    message={`Olá! Vim pelo site da Clínica Sorriso e gostaria de saber mais sobre ${treatment.title.toLowerCase()}.`}
                    ariaLabel={`Falar sobre ${treatment.title.toLowerCase()} pelo WhatsApp`}
                    className="mt-6 inline-flex min-h-11 items-center gap-2 self-start text-[0.9375rem] font-semibold text-azure transition-colors hover:text-navy"
                  >
                    Quero saber mais
                    <ArrowRight
                      className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </WhatsAppLink>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
