import type { Metadata, Viewport } from "next";
import { Figtree, Marcellus } from "next/font/google";
import type { ReactNode } from "react";
import { clinic, siteUrl } from "@/lib/site";
import "./globals.css";

const marcellus = Marcellus({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-marcellus",
  display: "swap",
});

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  display: "swap",
});

const title = "Clínica Sorriso | Clínica odontológica fictícia para portfólio";
const description =
  "Demonstração de portfólio: site de uma clínica odontológica fictícia, com estética dental, implantodontia e ortodontia. As informações não são reais.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  applicationName: clinic.name,
  alternates: { canonical: "/" },
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
  themeColor: "#fbf8f2",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="pt-BR"
      className={`${marcellus.variable} ${figtree.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
