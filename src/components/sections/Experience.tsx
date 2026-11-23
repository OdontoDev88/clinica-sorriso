import Image from "next/image";
import { experience } from "@/lib/site";

/** Posição de cada foto no mosaico. As mesmas regras funcionam com 2 ou 4 colunas. */
const layout = [
  "col-span-2 row-span-2",
  "row-span-2",
  "row-span-2",
  "col-span-2",
  "",
  "",
];

const sizes = [
  "(max-width: 768px) 100vw, 50vw",
  "(max-width: 768px) 50vw, 25vw",
  "(max-width: 768px) 50vw, 25vw",
  "(max-width: 768px) 100vw, 50vw",
  "(max-width: 768px) 50vw, 25vw",
  "(max-width: 768px) 50vw, 25vw",
];

export function Experience() {
  return (
    <section aria-labelledby="experiencia-titulo" className="section">
      <div className="shell">
        <div className="mx-auto max-w-3xl text-center">
          <p data-reveal className="eyebrow justify-center">
            Experiência Clínica Sorriso
          </p>
          <h2 id="experiencia-titulo" data-title className="heading mt-5 text-navy">
            Um ambiente leve, claro e <em>acolhedor.</em>
          </h2>
          <p data-reveal className="lede mx-auto mt-6 max-w-2xl">
            Da recepção ao consultório, cada espaço foi planejado para transmitir calma, com
            equipamentos modernos e uma equipe que recebe você pelo nome.
          </p>
        </div>

        <ul data-gallery className="mt-14 grid auto-rows-[10.5rem] grid-cols-2 gap-3 sm:auto-rows-[14rem] sm:gap-4 md:grid-cols-4 lg:mt-16 lg:auto-rows-[15.5rem] lg:gap-5">
          {experience.map((photo, index) => (
            <li
              key={photo.src}
              className={`group relative overflow-hidden rounded-[1.25rem] bg-mist sm:rounded-[1.75rem] ${layout[index]}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes={sizes[index]}
                className="zoom-media object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/45 via-navy/0 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />
              <p className="absolute bottom-3 left-3 right-3 text-[0.8125rem] font-semibold text-white sm:bottom-5 sm:left-5 sm:text-[0.9375rem]">
                <span className="mr-2 inline-block size-1.5 -translate-y-0.5 rounded-full bg-accent" aria-hidden="true" />
                {photo.caption}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
