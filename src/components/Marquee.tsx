"use client";

import Image from "next/image";
import { useRef } from "react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";
import type { GalleryPhoto } from "@/lib/site";

const SPEED_MOBILE = 26;
const SPEED_DESKTOP = 46;

function PhotoGroup({ photos, clone = false }: { photos: GalleryPhoto[]; clone?: boolean }) {
  return (
    <ul className="marquee-group" aria-hidden={clone || undefined}>
      {photos.map((photo) => (
        <li key={photo.src} className="shrink-0">
          <figure>
            <div
              className="marquee-photo"
              style={{ width: `calc(var(--marquee-h) * ${photo.ratio})` }}
            >
              <Image
                src={photo.src}
                alt={clone ? "" : photo.alt}
                fill
                sizes="(max-width: 768px) 440px, 860px"
                quality={85}
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3 text-[0.9375rem] text-umber">{photo.caption}</figcaption>
          </figure>
        </li>
      ))}
    </ul>
  );
}

/** Faixa contínua de fotos. O grupo é duplicado e a faixa anda metade da própria largura. */
export function Marquee({
  photos,
  label,
  reverse = false,
}: {
  photos: GalleryPhoto[];
  label: string;
  reverse?: boolean;
}) {
  const rootRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(
    (_context, contextSafe) => {
      const root = rootRef.current!;
      const track = trackRef.current!;
      const mm = gsap.matchMedia();

      const start = (speed: number) => {
        const tween = gsap.fromTo(
          track,
          { xPercent: reverse ? -50 : 0 },
          {
            xPercent: reverse ? 0 : -50,
            ease: "none",
            repeat: -1,
            duration: track.scrollWidth / 2 / speed,
            paused: !ScrollTrigger.isInViewport(root),
          },
        );

        // Fora da tela a animação fica parada, para poupar processamento.
        ScrollTrigger.create({
          trigger: root,
          start: "top bottom",
          end: "bottom top",
          onToggle: (self) => (self.isActive ? tween.play() : tween.pause()),
        });

        // Desacelera aos poucos sob o cursor, para facilitar a leitura, sem parada brusca.
        const ease = contextSafe!((scale: number) => {
          gsap.to(tween, { timeScale: scale, duration: 0.9, ease: "power2.out", overwrite: true });
        });
        const onEnter = (event: PointerEvent) => {
          if (event.pointerType === "mouse") ease(0.12);
        };
        const onLeave = () => ease(1);
        root.addEventListener("pointerenter", onEnter);
        root.addEventListener("pointerleave", onLeave);
        return () => {
          root.removeEventListener("pointerenter", onEnter);
          root.removeEventListener("pointerleave", onLeave);
        };
      };

      mm.add("(prefers-reduced-motion: no-preference) and (max-width: 767px)", () =>
        start(SPEED_MOBILE),
      );
      mm.add("(prefers-reduced-motion: no-preference) and (min-width: 768px)", () =>
        start(SPEED_DESKTOP),
      );
    },
    { scope: rootRef },
  );

  return (
    <div ref={rootRef} className="marquee" role="group" aria-label={label}>
      <div ref={trackRef} className="marquee-track">
        <PhotoGroup photos={photos} />
        <PhotoGroup photos={photos} clone />
      </div>
    </div>
  );
}
