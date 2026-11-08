import Image from "next/image";
import { BookingButton } from "@/components/Booking";
import { TOOTH_PATH } from "@/components/Logo";

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-8 sm:pt-12 lg:pt-14">
      <div className="shell">
        <h1 data-hero-title data-hero-hidden className="display max-w-[15ch] lg:max-w-none">
          Seu sorriso merece <br className="hidden lg:block" />
          cuidado especial.
        </h1>
      </div>

      <div className="mt-7 grid gap-y-9 lg:mt-12 lg:grid-cols-12 lg:gap-x-6">
        <div className="pl-[var(--gutter)] pr-[var(--gutter)] lg:col-span-4 lg:pr-0 min-[100rem]:pl-[max(var(--gutter),calc((100vw-100rem)/2+var(--gutter)))]">
          <p data-hero-copy data-hero-hidden className="lede">
            Odontologia moderna, atendimento humanizado e cuidado personalizado para transformar
            sua experiência no dentista.
          </p>
          <div
            data-hero-copy
            data-hero-hidden
            className="mt-7 flex flex-wrap items-center gap-x-7 gap-y-2"
          >
            <BookingButton label="Agendar avaliação" />
            <a href="#estrutura" className="text-link">
              Conheça a clínica
            </a>
          </div>
        </div>

        <div className="relative lg:col-span-8">
          <div
            data-hero-image
            data-hero-hidden
            className="relative aspect-[4/3] overflow-hidden bg-clay sm:aspect-[2/1] lg:aspect-[1.85/1]"
          >
            <div data-parallax className="absolute inset-x-0 -top-[8%] h-[116%]">
              <Image
                src="/images/recepcao.webp"
                alt="Recepção da Clínica Sorriso, com balcão de mármore, painel de madeira ripada, orquídeas e logotipo iluminado"
                fill
                priority
                quality={85}
                sizes="(max-width: 1023px) 100vw, 70vw"
                className="object-cover object-[46%_50%]"
              />
            </div>
          </div>

          {/* A linha do letreiro da clínica, desenhada na entrada da página. */}
          <svg
            viewBox="0 0 100 120"
            fill="none"
            aria-hidden="true"
            className="pointer-events-none absolute -top-8 right-5 h-24 w-auto text-gold-deep sm:-top-16 sm:right-8 sm:h-40 lg:-top-[13vw] lg:right-[7vw] lg:h-[20vw] lg:max-h-[24rem]"
          >
            <path
              data-hero-tooth
              d={TOOTH_PATH}
              pathLength={1}
              strokeDasharray="1"
              stroke="currentColor"
              strokeWidth="0.9"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
