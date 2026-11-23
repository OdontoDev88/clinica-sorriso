import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Manrope } from "next/font/google";
import type { ReactNode } from "react";
import { clinic, siteUrl } from "@/lib/site";
import "./globals.css";

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const title = "Clínica Sorriso | Odontologia moderna e humanizada (site demonstrativo)";
const description =
  "Clareamento, implantes, aparelhos, lentes e facetas, canal e prevenção com atendimento humanizado. Site demonstrativo de uma clínica odontológica fictícia.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  applicationName: clinic.name,
  alternates: { canonical: "/" },
  keywords: [
    "clínica odontológica",
    "dentista",
    "clareamento dental",
    "implante dentário",
    "aparelho ortodôntico",
    "lentes de contato dental",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: `${clinic.name} (demonstração)`,
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="pt-BR"
      className={`${instrument.variable} ${manrope.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "document.documentElement.classList.add('js');setTimeout(function(){document.documentElement.classList.add('motion-ready')},2500)",
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
