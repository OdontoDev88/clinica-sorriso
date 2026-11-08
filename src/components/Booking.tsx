"use client";

import { createContext, useCallback, useContext, useRef, type ReactNode } from "react";
import { clinic } from "@/lib/site";

const BookingContext = createContext<() => void>(() => {});

/**
 * Como a clínica é fictícia, os botões de agendamento abrem um aviso em vez de
 * apontar para telefone ou WhatsApp: os números podem pertencer a pessoas reais.
 */
export function BookingProvider({ children }: { children: ReactNode }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const open = useCallback(() => dialogRef.current?.showModal(), []);
  const close = () => dialogRef.current?.close();

  return (
    <BookingContext.Provider value={open}>
      {children}
      <dialog
        ref={dialogRef}
        aria-labelledby="demo-dialog-title"
        className="demo-dialog m-auto w-[min(32rem,calc(100vw-2.5rem))] bg-linen p-7 text-cocoa sm:p-10"
        onClick={(event) => {
          if (event.target === event.currentTarget) close();
        }}
      >
        <h2 id="demo-dialog-title" className="font-display text-[2rem] leading-tight">
          Esta clínica é fictícia
        </h2>
        <p className="mt-4 text-umber">
          A {clinic.name} é um projeto de demonstração para portfólio. Nenhuma consulta é agendada
          e nenhum dado é enviado.
        </p>
        <p className="mt-3 text-umber">
          Em um site real, este botão levaria ao WhatsApp ou à agenda da clínica.
        </p>
        <button type="button" onClick={close} className="btn btn-dark mt-7" autoFocus>
          Entendi
        </button>
      </dialog>
    </BookingContext.Provider>
  );
}

export function BookingButton({
  label,
  tone = "dark",
  small = false,
  className = "",
}: {
  label: string;
  tone?: "dark" | "light";
  small?: boolean;
  className?: string;
}) {
  const open = useContext(BookingContext);
  return (
    <button
      type="button"
      onClick={open}
      className={`btn btn-${tone} ${small ? "btn-sm" : ""} ${className}`}
    >
      {label}
    </button>
  );
}
