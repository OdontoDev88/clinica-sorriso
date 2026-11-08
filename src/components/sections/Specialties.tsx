import Image from "next/image";
import { services, specialties } from "@/lib/site";

export function Specialties() {
  return (
    <section id="especialidades" className="py-[var(--section-y)]">
      <div className="shell">
        <h2 data-title className="heading max-w-[22ch]">
          Soluções completas para cuidar do seu sorriso.
        </h2>

        <ul className="mt-12 grid gap-y-12 md:grid-cols-3 md:gap-x-6 lg:mt-20 lg:gap-x-10">
          {specialties.map((item, index) => (
            <li key={item.title} className={index === 1 ? "md:mt-14" : index === 2 ? "md:mt-28" : ""}>
              <div data-reveal className="group relative aspect-[4/3] overflow-hidden bg-clay">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  quality={85}
                  sizes="(max-width: 767px) 100vw, 34vw"
                  style={{ objectPosition: item.position }}
                  className="object-cover transition-transform duration-700 ease-[var(--ease-soft)] group-hover:scale-[1.03]"
                />
              </div>
              <h3 data-rise className="mt-5 font-display text-[clamp(1.625rem,2.3vw,2.25rem)] leading-tight">
                {item.title}
              </h3>
              <p data-rise className="mt-2 max-w-[28rem] text-umber">
                {item.text}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-16 lg:mt-28">
          <h3 data-rise className="font-display text-2xl">
            Também cuidamos de
          </h3>
          <ul className="mt-5 grid border-b border-clay sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-10">
            {services.map((service) => (
              <li key={service} data-rise className="border-t border-clay py-4 text-[1.0625rem]">
                {service}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
