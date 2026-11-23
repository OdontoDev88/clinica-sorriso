import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/Icons";
import { LogoMark } from "@/components/Logo";
import { WhatsAppLink } from "@/components/WhatsApp";
import { clinic } from "@/lib/site";

function DemoTag() {
  return (
    <span className="ml-2 inline-flex rounded-full bg-mist px-2 py-0.5 align-middle text-[0.6875rem] font-semibold uppercase tracking-wider text-azure">
      demonstrativo
    </span>
  );
}

function InfoRow({
  icon: Icon,
  title,
  children,
}: {
  icon: typeof MapPin;
  title: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="group flex gap-4 border-b border-line py-5 last:border-0">
      <span className="icon-badge icon-pop size-11 rounded-xl text-azure transition-colors duration-500 group-hover:bg-navy group-hover:text-white">
        <Icon className="size-5" aria-hidden="true" />
      </span>
      <div className="min-w-0">
        <h3 className="text-[0.8125rem] font-bold uppercase tracking-wider text-navy">{title}</h3>
        <div className="mt-1.5 text-[0.9375rem] leading-relaxed text-slate">{children}</div>
      </div>
    </div>
  );
}

/** Mapa ilustrativo em SVG: não aponta para um endereço real. */
function IllustrativeMap() {
  return (
    <div
      role="img"
      aria-label="Mapa ilustrativo da região da clínica, sem endereço real"
      className="relative h-full min-h-[22rem] overflow-hidden rounded-[1.75rem] bg-[#eaf0f7]"
    >
      <svg
        viewBox="0 0 600 520"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 size-full"
        aria-hidden="true"
      >
        <rect width="600" height="520" fill="#eaf0f7" />
        {/* Parque e rio */}
        <path d="M-10 380 C 120 340, 180 430, 300 400 S 480 330, 620 360 L 620 420 C 480 390, 420 470, 300 460 S 100 410, -10 440 Z" fill="#cfe0f3" />
        <rect x="40" y="60" width="150" height="120" rx="22" fill="#d6efe8" />
        <rect x="420" y="210" width="140" height="90" rx="20" fill="#d6efe8" />
        {/* Quarteirões */}
        {[
          [220, 50, 160, 100],
          [400, 50, 170, 130],
          [40, 205, 150, 120],
          [220, 175, 170, 125],
          [220, 320, 90, 50],
          [330, 320, 70, 50],
          [420, 320, 140, 30],
        ].map(([x, y, w, h], i) => (
          <rect key={i} x={x} y={y} width={w} height={h} rx="10" fill="#f8fafd" />
        ))}
        {/* Ruas */}
        <g stroke="#ffffff" strokeWidth="14" strokeLinecap="round">
          <path d="M0 190 H600" />
          <path d="M205 0 V520" />
          <path d="M395 0 V330" />
          <path d="M0 40 H600" />
        </g>
        <g stroke="#ffffff" strokeWidth="7" strokeLinecap="round">
          <path d="M205 310 H600" />
          <path d="M310 190 V310" />
          <path d="M20 0 L 205 190" />
        </g>
        {/* Rota tracejada */}
        <path
          d="M60 500 C 120 440, 170 330, 205 300 S 300 250, 302 238"
          fill="none"
          stroke="#3d6fb6"
          strokeWidth="3"
          strokeDasharray="2 9"
          strokeLinecap="round"
        />
      </svg>

      {/* Pino */}
      <div className="absolute left-1/2 top-[44%] -translate-x-1/2 -translate-y-full">
        <div className="relative flex flex-col items-center">
          <span className="float-wa-ring absolute top-[1.35rem] size-12 rounded-full bg-azure/40" aria-hidden="true" />
          <span className="relative grid size-14 place-items-center rounded-2xl bg-white p-1.5 shadow-[var(--shadow-lift)]">
            <LogoMark className="size-full" />
          </span>
          <span className="h-4 w-0.5 bg-navy" aria-hidden="true" />
          <span className="size-2 rounded-full bg-navy" aria-hidden="true" />
        </div>
      </div>

      <div className="glass absolute bottom-4 left-4 right-4 flex items-center justify-between gap-4 rounded-2xl p-4 shadow-[var(--shadow-soft)] sm:left-auto sm:w-72">
        <div className="leading-tight">
          <p className="text-[0.9375rem] font-bold text-navy">{clinic.name}</p>
          <p className="mt-1 text-[0.8125rem] text-slate">Localização ilustrativa</p>
        </div>
        <MapPin className="size-5 shrink-0 text-azure" aria-hidden="true" />
      </div>
    </div>
  );
}

export function Location() {
  const { address } = clinic;
  return (
    <section id="contato" aria-labelledby="contato-titulo" className="section pt-[calc(var(--section-y)*0.5)]">
      <div className="shell">
        <div className="max-w-2xl">
          <p data-reveal className="eyebrow">
            Localização e contato
          </p>
          <h2 id="contato-titulo" data-title className="heading mt-5 text-navy">
            Venha nos fazer uma <em>visita.</em>
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-12 lg:gap-8">
          <div data-reveal className="card p-6 sm:p-8 lg:col-span-5">
            <InfoRow icon={MapPin} title={<>Endereço <DemoTag /></>}>
              <address className="not-italic">
                {address.street}
                <br />
                {address.district} · {address.city}
                <br />
                {address.zip}
              </address>
            </InfoRow>
            <InfoRow icon={Clock} title={<>Horários <DemoTag /></>}>
              <ul>
                {clinic.hours.map((row) => (
                  <li key={row.days} className="flex justify-between gap-4">
                    <span>{row.days}</span>
                    <span className="font-semibold text-navy">{row.time}</span>
                  </li>
                ))}
              </ul>
            </InfoRow>
            <InfoRow icon={Phone} title={<>Telefone <DemoTag /></>}>
              {clinic.phone}
            </InfoRow>
            <InfoRow icon={Mail} title={<>E-mail <DemoTag /></>}>
              <span className="break-words">{clinic.email}</span>
            </InfoRow>

            <WhatsAppLink className="btn btn-whatsapp mt-4 w-full">
              <WhatsAppIcon />
              Falar com a clínica
            </WhatsAppLink>
          </div>

          <div data-reveal-media className="lg:col-span-7">
            <IllustrativeMap />
          </div>
        </div>
      </div>
    </section>
  );
}
