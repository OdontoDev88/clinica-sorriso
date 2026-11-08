"use client";

import { useRef, type ReactNode } from "react";
import { gsap, ScrollTrigger, SplitText, useGSAP } from "@/lib/gsap";

const MASK_CLASS = "title-line";

function splitLines(element: Element) {
  return SplitText.create(element, {
    type: "lines",
    mask: "lines",
    linesClass: MASK_CLASS,
  });
}

/**
 * Concentra as animações da página, ligadas por atributos data-*, para que as
 * seções continuem sendo componentes de servidor.
 */
export function PageMotion({ children }: { children: ReactNode }) {
  const scope = useRef<HTMLElement>(null);

  useGSAP(
    (_context, contextSafe) => {
      const root = document.documentElement;

      const init = contextSafe!(() => {
        const mm = gsap.matchMedia();

        mm.add("(prefers-reduced-motion: no-preference)", () => {
          /* Entrada do hero: o único momento orquestrado da página. */
          const heroTitle = gsap.utils.toArray<HTMLElement>("[data-hero-title]")[0];
          const heroSplit = splitLines(heroTitle);
          const hero = gsap.timeline({
            defaults: { ease: "power3.out" },
            onComplete: () => heroSplit.revert(),
          });

          hero
            .fromTo(
              "[data-hero-image]",
              { clipPath: "inset(0% 100% 0% 0%)" },
              { clipPath: "inset(0% 0% 0% 0%)", duration: 1.5, ease: "power3.inOut" },
              0,
            )
            .from(heroSplit.lines, { yPercent: 108, duration: 1.15, stagger: 0.12 }, 0.2)
            .fromTo(
              "[data-hero-tooth]",
              { strokeDashoffset: 1 },
              { strokeDashoffset: 0, duration: 2, ease: "power2.inOut" },
              0.45,
            )
            .from("[data-hero-copy]", { autoAlpha: 0, y: 14, duration: 0.9, stagger: 0.1 }, 0.95);

          root.classList.add("hero-ready");

          /* Títulos de seção. */
          gsap.utils.toArray<HTMLElement>("[data-title]").forEach((title) => {
            const split = splitLines(title);
            gsap.from(split.lines, {
              yPercent: 106,
              duration: 1,
              stagger: 0.08,
              ease: "power3.out",
              onComplete: () => split.revert(),
              scrollTrigger: { trigger: title, start: "top 88%", once: true },
            });
          });

          /* Revelação das imagens. */
          gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((image) => {
            gsap.fromTo(
              image,
              { clipPath: "inset(0% 0% 100% 0%)" },
              {
                clipPath: "inset(0% 0% 0% 0%)",
                duration: 1.3,
                ease: "power3.inOut",
                scrollTrigger: { trigger: image, start: "top 90%", once: true },
              },
            );
          });

          /* Parágrafos e listas. */
          ScrollTrigger.batch("[data-rise]", {
            start: "top 92%",
            once: true,
            onEnter: (targets) =>
              gsap.fromTo(
                targets,
                { autoAlpha: 0, y: 16 },
                { autoAlpha: 1, y: 0, duration: 0.8, stagger: 0.06, ease: "power2.out" },
              ),
          });
          gsap.set("[data-rise]", { autoAlpha: 0 });

          /* Paralaxe discreta nas imagens grandes. */
          gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((image) => {
            gsap.fromTo(
              image,
              { yPercent: -6 },
              {
                yPercent: 6,
                ease: "none",
                scrollTrigger: {
                  trigger: image.parentElement,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: true,
                },
              },
            );
          });

          /* Transição entre seções: os painéis escuros se abrem até a largura total. */
          gsap.utils.toArray<HTMLElement>("[data-panel]").forEach((panel) => {
            gsap.fromTo(
              panel,
              { clipPath: "inset(3% 4% 0% 4%)" },
              {
                clipPath: "inset(0% 0% 0% 0%)",
                ease: "none",
                scrollTrigger: {
                  trigger: panel,
                  start: "top bottom",
                  end: "top 45%",
                  scrub: true,
                },
              },
            );
          });
        });

        root.classList.add("hero-ready");
        ScrollTrigger.refresh();
      });

      // Dividir as linhas só depois das fontes evita quebras diferentes das finais.
      document.fonts.ready.then(init);
    },
    { scope },
  );

  return <main ref={scope}>{children}</main>;
}
