"use client";

import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { WhatsAppIcon } from "@/components/Icons";
import { Logo } from "@/components/Logo";
import { WhatsAppLink } from "@/components/WhatsApp";
import { clinic, navLinks } from "@/lib/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("#inicio");
  const [hidden, setHidden] = useState(false);
  const [pill, setPill] = useState<{ x: number; w: number } | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const navRef = useRef<HTMLUListElement>(null);
  const openButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  // Rolagem: fundo com desfoque, barra de progresso e cabeçalho que se recolhe
  // ao descer a página e volta ao subir. Atualizado uma vez por quadro.
  useEffect(() => {
    let lastY = window.scrollY;
    let frame = 0;
    const update = () => {
      frame = 0;
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      headerRef.current?.style.setProperty("--progress", String(max > 0 ? y / max : 0));
      setScrolled(y > 24);
      if (Math.abs(y - lastY) > 6) {
        setHidden(y > lastY && y > 600);
        lastY = y;
      }
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  // Indicador que desliza até o link da seção atual.
  useEffect(() => {
    const place = () => {
      // Mede o <li>: o link fica dentro dele, e o <li> é posicionado em relação à lista.
      const item = navRef.current?.querySelector<HTMLElement>(`a[href="${active}"]`)?.parentElement;
      setPill(item && item.offsetWidth ? { x: item.offsetLeft, w: item.offsetWidth } : null);
    };
    place();
    window.addEventListener("resize", place);
    document.fonts?.ready.then(place);
    return () => window.removeEventListener("resize", place);
  }, [active]);

  // Destaca no menu a seção que está no meio da tela.
  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector<HTMLElement>(link.href))
      .filter((el): el is HTMLElement => Boolean(el));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
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

  const close = () => setMenuOpen(false);

  return (
    <>
      <header
        ref={headerRef}
        data-hidden={hidden && !menuOpen}
        onFocusCapture={() => setHidden(false)}
        className="site-header sticky top-0 z-40"
      >
        <div
          className={`transition-[background-color,box-shadow,backdrop-filter] duration-500 ${
            scrolled
              ? "bg-white/85 shadow-[0_1px_0_var(--color-line),0_10px_30px_-20px_rgb(11_31_68/0.35)] backdrop-blur-xl"
              : "bg-white/0"
          }`}
        >
          <div
            className={`shell flex items-center justify-between gap-6 transition-[height] duration-500 ${
              scrolled ? "h-16" : "h-[var(--header-h)]"
            }`}
          >
            <a
              href="#inicio"
              aria-label={`${clinic.name}, ir para o início`}
              className="flex min-h-11 shrink-0 items-center"
            >
              <Logo />
            </a>

            <nav aria-label="Principal" className="hidden lg:block">
              <ul
                ref={navRef}
                className="relative flex items-center gap-1 rounded-full border border-line bg-white/70 p-1 backdrop-blur"
              >
                <span
                  aria-hidden="true"
                  className="nav-pill absolute left-0 top-1 h-10 rounded-full bg-mist"
                  style={{
                    width: pill?.w ?? 0,
                    transform: `translateX(${pill?.x ?? 0}px)`,
                    opacity: pill ? 1 : 0,
                  }}
                />
                {navLinks.map((link) => (
                  <li key={link.href} className="relative">
                    <a
                      href={link.href}
                      aria-current={active === link.href || undefined}
                      className={`nav-link flex h-10 items-center rounded-full px-4 text-[0.875rem] font-medium transition-colors ${
                        active === link.href ? "text-navy" : "text-slate hover:text-navy"
                      }`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex items-center gap-2">
              <WhatsAppLink className="btn btn-primary btn-sm hidden sm:inline-flex">
                <WhatsAppIcon className="size-4" />
                Agendar pelo WhatsApp
              </WhatsAppLink>
              <button
                ref={openButtonRef}
                type="button"
                aria-label="Abrir menu"
                aria-expanded={menuOpen}
                aria-controls="menu-movel"
                onClick={() => setMenuOpen(true)}
                className="-mr-1 grid size-11 place-items-center rounded-full border border-line bg-white lg:hidden"
              >
                <span className="flex flex-col gap-[5px]">
                  <span className="block h-[1.5px] w-5 rounded bg-navy" />
                  <span className="block h-[1.5px] w-3.5 self-end rounded bg-navy" />
                </span>
              </button>
            </div>
          </div>
          <div
            aria-hidden="true"
            className={`scroll-progress h-[2px] bg-gradient-to-r from-azure to-accent transition-opacity duration-500 ${
              scrolled ? "opacity-100" : "opacity-0"
            }`}
          />
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
        className="mobile-menu on-dark fixed inset-0 z-50 flex flex-col overflow-y-auto bg-navy-deep text-white lg:hidden"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 size-80 rounded-full bg-azure/30 blur-3xl"
        />
        <div className="shell relative flex h-[var(--header-h)] shrink-0 items-center justify-between">
          <a
            href="#inicio"
            aria-label={`${clinic.name}, ir para o início`}
            onClick={close}
            className="flex min-h-11 items-center"
          >
            <Logo tone="light" />
          </a>
          <button
            ref={closeButtonRef}
            type="button"
            aria-label="Fechar menu"
            onClick={close}
            className="relative -mr-1 size-11 rounded-full border border-white/15"
          >
            <span className="absolute left-1/2 top-1/2 block h-[1.5px] w-5 -translate-x-1/2 rotate-45 bg-white" />
            <span className="absolute left-1/2 top-1/2 block h-[1.5px] w-5 -translate-x-1/2 -rotate-45 bg-white" />
          </button>
        </div>

        <nav aria-label="Menu móvel" className="shell relative flex flex-1 flex-col justify-center py-8">
          <ul>
            {navLinks.map((link, index) => (
              <li key={link.href} className="border-b border-white/10">
                <a
                  href={link.href}
                  onClick={close}
                  style={{ "--i": index } as React.CSSProperties}
                  className="mobile-menu-item flex items-center justify-between py-4 font-display text-[clamp(2rem,9vw,3rem)] leading-tight"
                >
                  {link.label}
                  <ArrowRight className="size-5 text-sky" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="shell relative shrink-0 pb-8">
          <WhatsAppLink
            onClick={close}
            className="mobile-menu-item btn btn-whatsapp w-full"
          >
            <WhatsAppIcon />
            Agendar pelo WhatsApp
          </WhatsAppLink>
          <p className="mobile-menu-item mt-4 text-center text-sm text-sky">
            Site demonstrativo · clínica fictícia
          </p>
        </div>
      </div>
    </>
  );
}
