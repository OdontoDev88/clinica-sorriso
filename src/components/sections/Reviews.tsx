import { reviews } from "@/lib/site";

function Stars() {
  return (
    <svg viewBox="0 0 104 16" className="h-3.5 w-auto text-gold" fill="currentColor" aria-hidden="true">
      {[0, 22, 44, 66, 88].map((x) => (
        <path
          key={x}
          transform={`translate(${x})`}
          d="M8 0.8l2.1 4.6 5 .6-3.7 3.4 1 5-4.4-2.5-4.4 2.5 1-5L.9 6l5-.6z"
        />
      ))}
    </svg>
  );
}

export function Reviews() {
  return (
    <section
      id="avaliacoes"
      data-panel
      className="on-dark bg-cocoa py-[var(--section-y)] text-linen"
    >
      <div className="shell">
        <h2 data-title className="heading">
          O que nossos pacientes dizem.
        </h2>
        <p data-rise className="mt-5 max-w-[38rem] text-clay">
          Avaliações fictícias, escritas para esta demonstração. As estrelas são apenas ilustrativas
          e não vêm do Google nem de outra plataforma.
        </p>

        <ul className="mt-12 grid lg:mt-20 lg:grid-cols-3 lg:gap-x-12">
          {reviews.map((review, index) => (
            <li
              key={review.author}
              data-rise
              className={`border-t border-gold/40 py-8 lg:pb-0 ${
                index === 1 ? "lg:mt-14" : index === 2 ? "lg:mt-28" : ""
              }`}
            >
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                <Stars />
                <span className="rounded-full border border-gold/60 px-2.5 py-0.5 text-[0.8125rem] leading-snug text-gold-soft">
                  Demonstração
                </span>
              </div>
              <blockquote className="mt-6 font-display text-[clamp(1.5rem,2.1vw,2rem)] leading-[1.3]">
                “{review.quote}”
              </blockquote>
              <p className="mt-6 text-[0.9375rem] text-clay">
                {review.author} (avaliação fictícia)
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
