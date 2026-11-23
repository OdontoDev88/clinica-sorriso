"use client";

import { useRef, type ReactNode } from "react";
import { gsap, ScrollTrigger, SplitText, useGSAP } from "@/lib/gsap";

/**
 * Animações da página, ligadas por atributos data-*, para que as seções
 * continuem sendo componentes de servidor.
 *
 * Primeira dobra: data-hero, data-hero-title, data-hero-ctas, data-hero-list,
 * data-hero-media, data-hero-img, data-hero-card, data-hero-decor.
 * Rolagem: data-title (linhas), data-reveal (sobe e aparece), data-reveal-media
 * (imagem se revela), data-cards (cards escalonados), data-gallery (mosaico),
 * data-row (linhas da lista), data-parallax (paralaxe leve), data-panel
 * (seção escura que se abre até a largura total).
 *
 * Só transform, opacity e clip-path são animados, para manter 60 fps.
 * Com "reduzir movimento" ativado no aparelho, nada disso roda.
 */
export function PageMotion({ children }: { children: ReactNode }) {
  const scope = useRef<HTMLElement>(null);

  useGSAP(
    (_context, contextSafe) => {
      const root = document.documentElement;

      const init = contextSafe!(() => {
        const mm = gsap.matchMedia();

        mm.add(
          {
            motion: "(prefers-reduced-motion: no-preference)",
            desktop: "(min-width: 1024px)",
          },
          (ctx) => {
            const { motion, desktop } = ctx.conditions as { motion: boolean; desktop: boolean };
            if (!motion) return;

            const ease = "power3.out";
            const soft = "expo.out";

            /* ---------- Primeira dobra ---------- */
            const title = document.querySelector<HTMLElement>("[data-hero-title]");
            const split = title ? SplitText.create(title, { type: "lines", mask: "lines" }) : null;

            const intro = gsap.timeline({
              defaults: { ease },
              onComplete: () => split?.revert(),
            });

            intro
              // Imagem: a moldura se abre e a foto assenta devagar.
              .fromTo(
                "[data-hero-media]",
                { clipPath: "inset(14% 10% 14% 10% round 2rem)", autoAlpha: 0 },
                { clipPath: "inset(0% 0% 0% 0% round 2rem)", autoAlpha: 1, duration: 1.6, ease: soft },
                0.15,
              )
              .fromTo("[data-hero-img]", { scale: 1.18 }, { scale: 1, duration: 2.2, ease: soft }, 0.15)
              .fromTo(
                "[data-hero-decor]",
                { autoAlpha: 0, scale: 0.85 },
                { autoAlpha: 1, scale: 1, duration: 1.4, stagger: 0.12, ease: soft },
                0.5,
              )
              // Selo, título, subtítulo, botões e destaques, em sequência.
              .fromTo(
                "[data-hero-ctas] > *",
                { autoAlpha: 0, y: 20 },
                { autoAlpha: 1, y: 0, duration: 0.9, stagger: 0.1, clearProps: "transform" },
                0.75,
              )
              .fromTo(
                "[data-hero-list] li",
                { autoAlpha: 0, y: 14 },
                { autoAlpha: 1, y: 0, duration: 0.8, stagger: 0.08 },
                0.95,
              )
              .fromTo(
                "[data-hero-card]",
                { autoAlpha: 0, y: 24, x: -12 },
                { autoAlpha: 1, y: 0, x: 0, duration: 1.1, ease: soft },
                1.05,
              );

            if (split) {
              intro.from(split.lines, { yPercent: 110, duration: 1.15, stagger: 0.11 }, 0.12);
            }
            // Selo antes do título; subtítulo logo depois dele.
            const [badge, subtitle] = gsap.utils.toArray<HTMLElement>("[data-hero]");
            if (badge) intro.fromTo(badge, { autoAlpha: 0, y: 14 }, { autoAlpha: 1, y: 0, duration: 0.9 }, 0);
            if (subtitle) {
              intro.fromTo(subtitle, { autoAlpha: 0, y: 18 }, { autoAlpha: 1, y: 0, duration: 1.1 }, 0.55);
            }

            /* ---------- Títulos de seção ---------- */
            gsap.utils.toArray<HTMLElement>("[data-title]").forEach((heading) => {
              const lines = SplitText.create(heading, { type: "lines", mask: "lines" });
              gsap.from(lines.lines, {
                yPercent: 110,
                duration: 1.1,
                stagger: 0.09,
                ease,
                onComplete: () => lines.revert(),
                scrollTrigger: { trigger: heading, start: "top 88%", once: true },
              });
            });

            /* ---------- Textos e blocos ---------- */
            gsap.set("[data-reveal]", { autoAlpha: 0, y: 26 });
            ScrollTrigger.batch("[data-reveal]", {
              start: "top 90%",
              once: true,
              onEnter: (targets) =>
                gsap.to(targets, {
                  autoAlpha: 1,
                  y: 0,
                  duration: 0.95,
                  stagger: 0.09,
                  ease,
                  clearProps: "transform",
                }),
            });

            /* ---------- Imagens isoladas ---------- */
            gsap.utils.toArray<HTMLElement>("[data-reveal-media]").forEach((media) => {
              gsap.fromTo(
                media,
                { clipPath: "inset(10% 4% 0% 4% round 2rem)", autoAlpha: 0, y: 36 },
                {
                  clipPath: "inset(0% 0% 0% 0% round 0rem)",
                  autoAlpha: 1,
                  y: 0,
                  duration: 1.3,
                  ease: soft,
                  clearProps: "clipPath,transform",
                  scrollTrigger: { trigger: media, start: "top 90%", once: true },
                },
              );
            });

            /* ---------- Cards escalonados (tratamentos, depoimentos) ---------- */
            gsap.utils.toArray<HTMLElement>("[data-cards]").forEach((list) => {
              const cards = Array.from(list.children) as HTMLElement[];
              gsap.set(cards, { autoAlpha: 0, y: 44 });
              ScrollTrigger.batch(cards, {
                start: "top 92%",
                once: true,
                onEnter: (targets) => {
                  gsap.to(targets, {
                    autoAlpha: 1,
                    y: 0,
                    duration: 1.1,
                    stagger: 0.12,
                    ease: soft,
                    clearProps: "transform",
                  });
                  // A foto dentro do card assenta enquanto o card sobe.
                  targets.forEach((card, i) => {
                    const img = card.querySelector("[data-card-img]");
                    if (img) {
                      gsap.fromTo(
                        img,
                        { scale: 1.14 },
                        { scale: 1, duration: 1.6, delay: i * 0.12, ease: soft, clearProps: "transform" },
                      );
                    }
                  });
                },
              });
            });

            /* ---------- Mosaico da experiência ---------- */
            gsap.utils.toArray<HTMLElement>("[data-gallery]").forEach((gallery) => {
              const tiles = Array.from(gallery.children) as HTMLElement[];
              gsap.set(tiles, { autoAlpha: 0, clipPath: "inset(18% 0% 0% 0%)" });
              ScrollTrigger.batch(tiles, {
                start: "top 92%",
                once: true,
                onEnter: (targets) => {
                  gsap.to(targets, {
                    autoAlpha: 1,
                    clipPath: "inset(0% 0% 0% 0%)",
                    duration: 1.3,
                    stagger: 0.1,
                    ease: soft,
                    clearProps: "clipPath",
                  });
                  targets.forEach((tile, i) => {
                    const img = tile.querySelector("img");
                    if (img) {
                      gsap.fromTo(
                        img,
                        { scale: 1.16 },
                        { scale: 1, duration: 1.8, delay: i * 0.1, ease: soft, clearProps: "transform" },
                      );
                    }
                  });
                },
              });
            });

            /* ---------- Lista de diferenciais ---------- */
            gsap.set("[data-row]", { autoAlpha: 0, x: 28 });
            ScrollTrigger.batch("[data-row]", {
              start: "top 90%",
              once: true,
              onEnter: (targets) =>
                gsap.to(targets, {
                  autoAlpha: 1,
                  x: 0,
                  duration: 1,
                  stagger: 0.1,
                  ease: soft,
                  clearProps: "transform",
                }),
            });

            /* ---------- Paralaxe leve (só no desktop) ---------- */
            if (desktop) {
              gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((img) => {
                gsap.fromTo(
                  img,
                  { yPercent: -5, scale: 1.12 },
                  {
                    yPercent: 5,
                    scale: 1.12,
                    ease: "none",
                    scrollTrigger: {
                      trigger: img.parentElement,
                      start: "top bottom",
                      end: "bottom top",
                      scrub: 0.6,
                    },
                  },
                );
              });
            }

            /* ---------- Transição entre seções ---------- */
            gsap.utils.toArray<HTMLElement>("[data-panel]").forEach((panel) => {
              gsap.fromTo(
                panel,
                { clipPath: "inset(0% 3% 0% 3% round 2.5rem)" },
                {
                  clipPath: "inset(0% 0% 0% 0% round 0rem)",
                  ease: "none",
                  scrollTrigger: {
                    trigger: panel,
                    start: "top bottom",
                    end: "top 30%",
                    scrub: 0.6,
                  },
                },
              );
            });
          },
        );

        root.classList.add("motion-ready");
        ScrollTrigger.refresh();
      });

      // Dividir as linhas só depois das fontes evita quebras diferentes das finais.
      document.fonts.ready.then(init);
    },
    { scope },
  );

  return <main ref={scope}>{children}</main>;
}
