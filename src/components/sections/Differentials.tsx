import { ScanLine } from "lucide-react";
import Image from "next/image";
import { DifferentialGlyph } from "@/components/Icons";
import { differentials } from "@/lib/site";

export function Differentials() {
  return (
    <section
      id="diferenciais"
      aria-labelledby="diferenciais-titulo"
      data-panel
      className="on-dark relative overflow-hidden bg-navy-deep text-white"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-0 size-[36rem] rounded-full bg-azure/25 blur-[120px]" />
        <div className="absolute -bottom-40 right-0 size-[30rem] rounded-full bg-accent/15 blur-[120px]" />
      </div>

      <div className="shell section relative grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-[calc(var(--header-h)+2rem)]">
            <p data-reveal className="eyebrow">
              Diferenciais
            </p>
            <h2 id="diferenciais-titulo" data-title className="heading mt-5">
              Por que pacientes <em>confiam</em> na Clínica Sorriso
            </h2>
            <p data-reveal className="mt-6 max-w-md text-[1.0625rem] leading-relaxed text-sky">
              Unimos estrutura, tecnologia e uma equipe dedicada para que cada visita seja tranquila, do
              primeiro contato ao resultado final.
            </p>

            <div
              data-reveal-media
              className="relative mt-10 aspect-[4/3] overflow-hidden rounded-[1.75rem] ring-1 ring-white/10"
            >
              <Image
                src="/images/planejamento-raio-x.jpg"
                alt="Dentista mostrando uma radiografia panorâmica no monitor para a paciente durante a consulta"
                fill
                sizes="(max-width: 1024px) 100vw, 36vw"
                data-parallax
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/70 via-transparent to-transparent" />
              <p className="glass absolute bottom-4 left-4 flex items-center gap-2 rounded-full px-4 py-2 text-[0.8125rem] font-semibold text-navy">
                <ScanLine className="size-4 text-azure" aria-hidden="true" />
                Diagnóstico por imagem digital
              </p>
            </div>
          </div>
        </div>

        <ol className="lg:col-span-7">
          {differentials.map((item, index) => (
            <li
              key={item.title}
              data-row
              className="group grid grid-cols-[auto_1fr] gap-x-5 gap-y-2 border-b border-white/10 py-8 first:pt-0 sm:grid-cols-[auto_1fr_auto] sm:gap-x-7 lg:py-10 lg:first:pt-2"
            >
              <span className="icon-float grid size-14 place-items-center rounded-2xl border border-white/10 bg-white/5 text-accent transition-colors duration-500 group-hover:border-accent/40 group-hover:bg-accent/10">
                <DifferentialGlyph name={item.icon} className="size-6" />
              </span>
              <div>
                <h3 className="font-display text-[1.75rem] leading-tight sm:text-[2rem]">{item.title}</h3>
                <p className="mt-2 max-w-lg text-[0.9375rem] leading-relaxed text-sky">{item.text}</p>
              </div>
              <span
                aria-hidden="true"
                className="hidden font-display text-[2.5rem] leading-none text-white/15 transition-colors duration-500 group-hover:text-accent/60 sm:block"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
