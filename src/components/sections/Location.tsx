import { BookingButton } from "@/components/Booking";
import { TOOTH_PATH } from "@/components/Logo";
import { clinic } from "@/lib/site";

/** Desenho próprio, sem serviço de mapas: não aponta para nenhum local real. */
function DemoMap() {
  return (
    <svg
      viewBox="0 0 640 480"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label="Mapa ilustrativo com a Av. das Palmeiras e um marcador da clínica fictícia"
      className="absolute inset-0 size-full"
    >
      <rect width="640" height="480" fill="#e3d6c5" />
      <path d="M-20 340C70 300 150 320 215 400L180 500H-20Z" fill="#d3cdb0" />
      <g fill="none" stroke="#fbf8f2" strokeWidth="7">
        <path d="M-10 70H650M-10 190H650M-10 300L650 380M110 -10L80 490M250 -10L235 490M395 -10L420 490M540 -10L575 490" />
      </g>
      <path
        id="avenida"
        d="M-20 410C120 360 200 250 330 228C450 208 540 150 660 96"
        fill="none"
        stroke="#fbf8f2"
        strokeWidth="24"
      />
      <text fontFamily="var(--font-figtree), sans-serif" fontSize="17" fill="#2f2018" dy="6">
        <textPath href="#avenida" startOffset="5%">
          Av. das Palmeiras
        </textPath>
      </text>
      <circle cx="356" cy="224" r="40" fill="#2f2018" />
      <path
        d={TOOTH_PATH}
        transform="translate(330 193) scale(0.52)"
        fill="none"
        stroke="#d8bf8e"
        strokeWidth="4.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Location() {
  return (
    <section id="localizacao" className="bg-sand py-[var(--section-y)]">
      <div className="shell grid gap-y-10 lg:grid-cols-12 lg:gap-x-6">
        <div className="lg:col-span-5">
          <h2 data-title className="heading">
            Onde estamos.
          </h2>

          <address data-rise className="mt-8 text-[1.125rem] not-italic">
            {clinic.address.slice(0, 3).map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </address>
          <p data-rise className="mt-2 text-[0.9375rem] text-umber">
            Endereço fictício, usado apenas nesta demonstração.
          </p>

          <h3 data-rise className="mt-10 font-display text-2xl">
            Horários de atendimento
          </h3>
          <dl data-rise className="mt-3 max-w-[26rem]">
            {clinic.hours.map((row) => (
              <div
                key={row.days}
                className="flex justify-between gap-6 border-t border-clay py-2.5 last:border-b"
              >
                <dt>{row.days}</dt>
                <dd>{row.time}</dd>
              </div>
            ))}
          </dl>

          <div data-rise className="mt-8">
            <BookingButton label="Falar com a clínica" />
          </div>
        </div>

        <figure className="lg:col-span-7">
          <div
            data-reveal
            className="relative -mx-[var(--gutter)] aspect-[4/3] overflow-hidden bg-clay lg:mx-0 lg:h-full lg:min-h-[32rem] lg:aspect-auto"
          >
            <DemoMap />
          </div>
          <figcaption className="mt-3 text-[0.9375rem] text-umber">
            Mapa ilustrativo, sem correspondência com ruas reais.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
