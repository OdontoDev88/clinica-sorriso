"use client";

import { X } from "lucide-react";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { WhatsAppIcon } from "@/components/Icons";
import { clinic, isWhatsappConfigured, whatsapp, whatsappUrl } from "@/lib/site";

const DemoContext = createContext<(message: string) => void>(() => {});

/**
 * Sem número configurado em `src/lib/site.ts`, os botões de WhatsApp abrem este
 * aviso em vez de mandar mensagem para um número que pode ser de outra pessoa.
 */
export function WhatsAppProvider({ children }: { children: ReactNode }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [message, setMessage] = useState(whatsapp.message);

  const open = useCallback((text: string) => {
    setMessage(text);
    dialogRef.current?.showModal();
  }, []);
  const close = () => dialogRef.current?.close();

  return (
    <DemoContext.Provider value={open}>
      {children}
      {!isWhatsappConfigured && (
        <dialog
          ref={dialogRef}
          aria-labelledby="demo-dialog-title"
          className="demo-dialog m-auto w-[min(30rem,calc(100vw-2rem))] rounded-3xl bg-white p-0 text-ink shadow-2xl"
          onClick={(event) => {
            if (event.target === event.currentTarget) close();
          }}
        >
          <div className="relative p-7 sm:p-9">
            <button
              type="button"
              onClick={close}
              aria-label="Fechar aviso"
              className="absolute right-4 top-4 grid size-10 place-items-center rounded-full text-slate transition-colors hover:bg-mist hover:text-navy"
            >
              <X className="size-5" aria-hidden="true" />
            </button>
            <span className="grid size-12 place-items-center rounded-2xl bg-whatsapp/15 text-[#128c4a]">
              <WhatsAppIcon className="size-6" />
            </span>
            <h2 id="demo-dialog-title" className="mt-5 font-display text-[2rem] leading-tight text-navy">
              Este é um site demonstrativo
            </h2>
            <p className="mt-3 text-slate">
              A {clinic.name} é fictícia, então nenhuma mensagem é enviada. Em um site real, este botão
              abre o WhatsApp da clínica com a mensagem pronta:
            </p>
            <blockquote className="mt-4 rounded-2xl rounded-tl-sm bg-[#e7fbe9] px-4 py-3 text-[0.9375rem] text-[#0f3d22]">
              {message}
            </blockquote>
            <button type="button" onClick={close} className="btn btn-primary mt-7 w-full" autoFocus>
              Entendi
            </button>
          </div>
        </dialog>
      )}
    </DemoContext.Provider>
  );
}

type WhatsAppLinkProps = {
  children: ReactNode;
  className?: string;
  message?: string;
  ariaLabel?: string;
  onClick?: () => void;
  /** Para elementos que aparecem/somem: fora da tela, sai da ordem de foco. */
  visible?: boolean;
};

/** Link para o WhatsApp configurado; em modo demonstração, abre o aviso. */
export function WhatsAppLink({
  children,
  className = "",
  message = whatsapp.message,
  ariaLabel,
  onClick,
  visible,
}: WhatsAppLinkProps) {
  const openDemo = useContext(DemoContext);
  const visibility =
    visible === undefined
      ? {}
      : { "data-visible": visible, tabIndex: visible ? undefined : -1, "aria-hidden": !visible || undefined };

  if (isWhatsappConfigured) {
    return (
      <a
        href={whatsappUrl(message)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
        className={className}
        onClick={onClick}
        {...visibility}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      aria-label={ariaLabel}
      aria-haspopup="dialog"
      className={className}
      {...visibility}
      onClick={() => {
        onClick?.();
        openDemo(message);
      }}
    >
      {children}
    </button>
  );
}

/** Botão flutuante, exibido depois que a pessoa sai da primeira dobra. */
export function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-30 sm:bottom-7 sm:right-7">
      <WhatsAppLink
        ariaLabel="Agendar avaliação pelo WhatsApp"
        className="float-wa group relative flex items-center"
        visible={visible}
      >
        <span
          className="float-wa-label glass pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold text-navy shadow-lg md:block"
        >
          Agende pelo WhatsApp
        </span>
        <span className="relative grid size-14 place-items-center rounded-full bg-whatsapp text-white shadow-[0_14px_30px_-10px_rgb(37_211_102/0.8)] transition-transform duration-300 group-hover:scale-105">
          <span className="float-wa-ring absolute inset-0 rounded-full bg-whatsapp" aria-hidden="true" />
          <WhatsAppIcon className="relative size-7" />
        </span>
      </WhatsAppLink>
    </div>
  );
}
