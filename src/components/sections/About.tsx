import { Check, HeartPulse } from "lucide-react";
import Image from "next/image";

const values = [
  "Consultas sem pressa, com tempo para tirar dúvidas",
  "Explicação visual de cada etapa do tratamento",
  "Ambiente pensado para o conforto de adultos e crianças",
  "Acompanhamento próximo depois de cada procedimento",
];

export function About() {
  return (
    <section id="sobre" aria-labelledby="sobre-titulo" className="section bg-snow">
      <div className="shell grid items-center gap-16 lg:grid-cols-12 lg:gap-12">
        <div className="relative order-2 lg:order-1 lg:col-span-6">
          <div
            data-reveal-media
            className="relative aspect-[5/4] overflow-hidden rounded-[2rem] bg-mist shadow-[var(--shadow-lift)] lg:mr-14"
          >
            <Image
              src="/images/consultorio-azul.jpg"
              alt="Consultório da clínica com cadeira odontológica azul, equipamentos modernos e quadro colorido"
              fill
              sizes="(max-width: 1024px) 100vw, 44vw"
              data-parallax
              className="object-cover object-[60%_50%]"
            />
          </div>

          <div
            data-reveal-media
            className="absolute -bottom-10 right-0 w-[46%] overflow-hidden rounded-[1.5rem] border-[6px] border-snow shadow-[var(--shadow-lift)] sm:-bottom-12"
          >
            <div className="relative aspect-[4/3.4]">
              <Image
                src="/images/dentista-paciente.jpg"
                alt="Dentista explicando o tratamento para a paciente sentada na cadeira"
                fill
                sizes="(max-width: 1024px) 46vw, 20vw"
                className="object-cover object-[65%_50%]"
              />
            </div>
          </div>

          <div
            data-reveal
            className="absolute -top-6 left-5 flex items-center gap-3 rounded-2xl bg-navy px-4 py-3 text-white shadow-[var(--shadow-lift)] sm:left-8"
          >
            <span className="grid size-9 place-items-center rounded-xl bg-white/10 text-accent">
              <HeartPulse className="size-5" aria-hidden="true" />
            </span>
            <p className="text-[0.8125rem] font-semibold leading-tight">
              Cuidado para
              <br />
              toda a família
            </p>
          </div>
        </div>

        <div className="order-1 lg:order-2 lg:col-span-6 lg:pl-4">
          <p data-reveal className="eyebrow">
            Sobre nós
          </p>
          <h2 id="sobre-titulo" data-title className="heading mt-5 text-navy">
            Uma clínica pensada para você se sentir <em>em casa.</em>
          </h2>
          <p data-reveal className="lede mt-6">
            A Clínica Sorriso une tecnologia odontológica de ponta a um atendimento próximo e
            acolhedor. Cada paciente é recebido com calma, ouvido com atenção e acompanhado por uma
            equipe que acredita que saúde bucal é parte do bem-estar.
          </p>
          <p data-reveal className="mt-4 text-slate">
            Do check-up preventivo à reabilitação completa do sorriso, construímos planos de tratamento
            transparentes, com etapas, prazos e opções explicados antes de começar.
          </p>

          <ul className="mt-9 grid gap-3 sm:grid-cols-2">
            {values.map((value) => (
              <li
                key={value}
                data-reveal
                className="group flex items-start gap-3 rounded-2xl border border-line bg-white p-4 text-[0.9375rem] leading-snug text-ink transition-[border-color,box-shadow,transform] duration-500 hover:-translate-y-0.5 hover:border-haze hover:shadow-[var(--shadow-soft)]"
              >
                <span className="icon-pop mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-accent-soft text-accent-deep">
                  <Check className="size-3.5" strokeWidth={2.5} aria-hidden="true" />
                </span>
                {value}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
