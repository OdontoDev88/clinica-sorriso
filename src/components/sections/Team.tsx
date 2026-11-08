import { Marquee } from "@/components/Marquee";
import { dentist, teamPhotos } from "@/lib/site";

export function Team() {
  return (
    <section id="quem-somos" className="bg-sand py-[var(--section-y)]">
      <div className="shell grid gap-y-5 lg:grid-cols-12 lg:items-end lg:gap-x-6">
        <h2 data-title className="heading lg:col-span-7">
          Conheça nossa equipe.
        </h2>
        <p data-rise className="lede lg:col-span-4 lg:col-start-9">
          Uma equipe comprometida com o cuidado, a atenção e a saúde do seu sorriso.
        </p>
      </div>

      <div className="mt-10 lg:mt-16">
        <Marquee photos={teamPhotos} label="Fotografias da equipe e de atendimentos" reverse />
      </div>

      <div className="shell mt-14 grid gap-y-8 lg:mt-24 lg:grid-cols-12 lg:gap-x-6">
        <div className="lg:col-span-5">
          <h3 data-rise className="font-display text-[clamp(1.75rem,3vw,2.75rem)] leading-tight">
            {dentist.name}
          </h3>
          <p data-rise className="mt-2 text-umber">
            {dentist.role}, {dentist.experience}.
          </p>
          <p data-rise className="mt-2 text-[0.9375rem] text-umber">
            Profissional e currículo fictícios, sem registro real.
          </p>
        </div>
        <ul className="border-b border-clay lg:col-span-6 lg:col-start-7">
          {dentist.education.map((item) => (
            <li key={item} data-rise className="border-t border-clay py-3.5">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
