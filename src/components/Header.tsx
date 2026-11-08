"use client";

import { useEffect, useRef, useState } from "react";
import { BookingButton } from "@/components/Booking";
import { Logo } from "@/components/Logo";
import { clinic, navLinks } from "@/lib/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const openButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const opener = openButtonRef.current;
    document.documentElement.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        return;
      }
      if (event.key !== "Tab" || !panelRef.current) return;
      const focusable = panelRef.current.querySelectorAll<HTMLElement>("a, button");
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    const desktop = window.matchMedia("(min-width: 1024px)");
    const onBreakpoint = () => desktop.matches && setMenuOpen(false);

    document.addEventListener("keydown", onKeyDown);
    desktop.addEventListener("change", onBreakpoint);
    return () => {
      document.documentElement.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
      desktop.removeEventListener("change", onBreakpoint);
      opener?.focus({ preventScroll: true });
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`sticky top-0 z-40 border-b bg-linen/95 backdrop-blur-sm transition-colors duration-300 ${
          scrolled ? "border-clay" : "border-transparent"
        }`}
      >
        <div className="shell flex h-[var(--header-h)] items-center justify-between gap-6">
          <a
            href="#inicio"
            aria-label={`${clinic.name}, ir para o início`}
            className="flex min-h-11 shrink-0 items-center"
          >
            <Logo />
          </a>

          <nav aria-label="Principal" className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="py-2 text-[0.9375rem] underline-offset-[0.4em] decoration-gold hover:underline"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <BookingButton label="Agendar consulta" small className="hidden sm:inline-flex" />
            <button
              ref={openButtonRef}
              type="button"
              aria-label="Abrir menu"
              aria-expanded={menuOpen}
              aria-controls="menu-movel"
              onClick={() => setMenuOpen(true)}
              className="-mr-2 flex size-11 flex-col items-center justify-center gap-[7px] lg:hidden"
            >
              <span className="block h-px w-6 bg-cocoa" />
              <span className="block h-px w-6 bg-cocoa" />
            </button>
          </div>
        </div>
      </header>

      <div
        ref={panelRef}
        id="menu-movel"
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        data-open={menuOpen}
        inert={!menuOpen}
        className="mobile-menu on-dark fixed inset-0 z-50 flex flex-col overflow-y-auto bg-cocoa text-linen lg:hidden"
      >
        <div className="shell flex h-[var(--header-h)] shrink-0 items-center justify-between">
          <a
            href="#inicio"
            aria-label={`${clinic.name}, ir para o início`}
            onClick={() => setMenuOpen(false)}
            className="flex min-h-11 items-center"
          >
            <Logo />
          </a>
          <button
            ref={closeButtonRef}
            type="button"
            aria-label="Fechar menu"
            onClick={() => setMenuOpen(false)}
            className="relative -mr-2 size-11"
          >
            <span className="absolute left-2.5 top-1/2 block h-px w-6 rotate-45 bg-linen" />
            <span className="absolute left-2.5 top-1/2 block h-px w-6 -rotate-45 bg-linen" />
          </button>
        </div>

        <nav aria-label="Menu móvel" className="shell flex flex-1 flex-col justify-center py-8">
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{ "--i": index } as React.CSSProperties}
              className="mobile-menu-item py-2 font-display text-[clamp(2.25rem,10vw,3.5rem)] leading-tight"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="shell shrink-0 pb-8">
          <BookingButton
            label="Agendar consulta"
            tone="light"
            className="mobile-menu-item w-full sm:w-auto"
          />
          <p className="mobile-menu-item mt-4 text-sm text-clay">
            Clínica fictícia, para demonstração de portfólio.
          </p>
        </div>
      </div>
    </>
  );
}
