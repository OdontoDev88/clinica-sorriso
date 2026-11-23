import { ArrowRight, CalendarCheck2, ShieldCheck, Sparkles } from "lucide-react";
import Image from "next/image";
import { WhatsAppIcon } from "@/components/Icons";
import { WhatsAppLink } from "@/components/WhatsApp";

const highlights = [
  { icon: Sparkles, label: "Planejamento digital do sorriso" },
  { icon: ShieldCheck, label: "Protocolos rigorosos de biossegurança" },
  { icon: CalendarCheck2, label: "Horários estendidos e aos sábados" },
];

export function Hero() {
  return (
    <section id="inicio" aria-labelledby="hero-title" className="relative overflow-hidden">
      {/* Fundo: gradiente suave e textura de pontos */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-[20%] -top-[30%] h-[85%] w-[75%] rounded-full bg-[radial-gradient(closest-side,var(--color-mist),transparent)]" />
        <div className="absolute -left-[15%] top-[40%] h-[60%] w-[45%] rounded-full bg-[radial-gradient(closest-side,rgb(220_244_239/0.7),transparent)]" />
        <div className="dot-grid absolute left-[4%] top-[12%] h-40 w-56 opacity-60 [mask-image:radial-gradient(closest-side,black,transparent)]" />
      </div>

      <div className="shell grid items-center gap-14 pb-16 pt-8 sm:pt-12 lg:grid-cols-12 lg:gap-10 lg:pb-24 lg:pt-14">
        <div className="lg:col-span-6 xl:col-span-6">
          <p data-hero className="inline-flex items-center gap-2 rounded-full border border-line bg-white/80 py-1.5 pl-1.5 pr-4 text-[0.8125rem] font-medium text-slate shadow-[var(--shadow-soft)] backdrop-blur">
            <span className="rounded-full bg-accent-soft px-2.5 py-0.5 text-[0.6875rem] font-bold uppercase tracking-wider text-accent-deep">
              Novo
            </span>
            Avaliação com escaneamento digital
          </p>

          <h1 id="hero-title" data-hero-title className="display mt-7 text-navy">
            Seu sorriso merece um cuidado <em>especial.</em>
          </h1>

          <p data-hero className="lede mt-6 max-w-[34rem]">
            Odontologia moderna, atendimento humanizado e tratamentos personalizados para transformar a
            sua experiência com o dentista.
          </p>

          <div data-hero-ctas className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <WhatsAppLink className="btn btn-primary">
              <WhatsAppIcon className="size-[1.125rem]" />
              Agende sua avaliação
            </WhatsAppLink>
            <a href="#tratamentos" className="btn btn-outline">
              Conheça nossos tratamentos
              <ArrowRight className="btn-arrow size-4" aria-hidden="true" />
            </a>
          </div>

          <ul data-hero-list className="mt-11 grid gap-3 border-t border-line pt-7 sm:grid-cols-3 sm:gap-5">
            {highlights.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-start gap-3 text-[0.875rem] leading-snug text-slate">
                <span className="grid size-8 shrink-0 place-items-center rounded-full bg-mist text-azure">
                  <Icon className="size-4" aria-hidden="true" />
                </span>
                {label}
              </li>
            ))}
          </ul>
        </div>

        {/* Composição de imagens */}
        <div className="relative lg:col-span-6 lg:pl-6 xl:pl-10">
          <div
            aria-hidden="true"
            data-hero-decor
            className="absolute -right-6 -top-6 hidden size-40 rounded-full border border-haze sm:block"
          />
          <div
            aria-hidden="true"
            data-hero-decor
            className="absolute -bottom-8 -left-8 hidden size-28 rounded-[2rem] bg-accent-soft sm:block"
          />

          <div
            data-hero-media
            className="relative aspect-[4/4.4] overflow-hidden rounded-[2rem] bg-mist shadow-[var(--shadow-lift)] sm:aspect-[4/4] lg:aspect-[4/4.6]"
          >
            <div data-hero-img className="absolute inset-0">
              <Image
                src="/images/hero-consulta.jpg"
                alt="Dentista conversando com uma paciente sorridente em um consultório claro e moderno"
                fill
                priority
                quality={85}
                sizes="(max-width: 1024px) 100vw, 46vw"
                className="object-cover object-[38%_50%]"
              />
            </div>
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-navy/35 to-transparent" />
          </div>

          {/* Cartão: avaliação (fica sobre a parte de baixo da foto, longe dos rostos) */}
          <div
            data-hero-card
            className="absolute -left-3 bottom-6 w-[min(17rem,72%)] sm:-left-8 sm:bottom-10"
          >
            <div className="glass float-y rounded-2xl p-4 shadow-[var(--shadow-lift)]">
              <div className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-xl bg-navy text-white">
                  <CalendarCheck2 className="size-5" aria-hidden="true" />
                </span>
                <div className="leading-tight">
                  <p className="text-[0.9375rem] font-bold text-navy">Avaliação completa</p>
                  <p className="text-[0.8125rem] text-slate">Plano claro desde a 1ª consulta</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
