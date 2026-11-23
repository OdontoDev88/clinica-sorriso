import { Info, Quote } from "lucide-react";
import { testimonials } from "@/lib/site";

export function Testimonials() {
  return (
    <section aria-labelledby="depoimentos-titulo" className="section relative overflow-hidden bg-mist">
      <div
        aria-hidden="true"
        className="dot-grid pointer-events-none absolute -right-10 top-10 h-64 w-80 opacity-70 [mask-image:radial-gradient(closest-side,black,transparent)]"
      />
      <div className="shell relative">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p data-reveal className="eyebrow">
              Depoimentos
            </p>
            <h2 id="depoimentos-titulo" data-title className="heading mt-5 text-navy">
              Experiências que <em>fazem sorrir.</em>
            </h2>
          </div>
          <p
            data-reveal
            className="flex items-start gap-3 rounded-2xl border border-haze bg-white/70 p-4 text-[0.875rem] leading-snug text-slate lg:col-span-5"
          >
            <Info className="mt-0.5 size-4 shrink-0 text-azure" aria-hidden="true" />
            Depoimentos fictícios, criados apenas para demonstrar o layout. Não são avaliações reais de
            pacientes.
          </p>
        </div>

        <ul data-cards className="mt-14 grid gap-6 md:grid-cols-3 lg:mt-16 lg:gap-7">
          {testimonials.map((item, index) => (
            <li key={item.name}>
              <figure
                className={`card card-hover relative flex h-full flex-col p-7 sm:p-8 ${
                  index === 1 ? "md:-translate-y-6" : ""
                }`}
              >
                <Quote className="size-9 fill-accent-soft text-accent" strokeWidth={1.2} aria-hidden="true" />
                <blockquote className="mt-5 flex-1 font-display text-[1.375rem] leading-snug text-navy">
                  “{item.quote}”
                </blockquote>
                <figcaption className="mt-7 flex items-center gap-3 border-t border-line pt-5">
                  <span
                    aria-hidden="true"
                    className="grid size-11 place-items-center rounded-full bg-navy font-display text-lg text-white"
                  >
                    {item.name.split(" ")[1]?.[0] ?? item.name[0]}
                  </span>
                  <span className="leading-tight">
                    <span className="block text-[0.9375rem] font-bold text-navy">{item.name}</span>
                    <span className="block text-[0.8125rem] text-slate">
                      {item.detail} · exemplo fictício
                    </span>
                  </span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
