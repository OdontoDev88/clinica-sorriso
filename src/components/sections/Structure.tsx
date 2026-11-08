import { Marquee } from "@/components/Marquee";
import { structurePhotos } from "@/lib/site";

export function Structure() {
  return (
    <section id="estrutura" className="bg-sand py-[var(--section-y)]">
      <div className="shell">
        <h2 data-title className="heading mb-10 lg:mb-16">
          Conheça nossa estrutura.
        </h2>
      </div>
      <Marquee photos={structurePhotos} label="Fotografias da estrutura da clínica" />
    </section>
  );
}
