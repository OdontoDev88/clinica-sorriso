import { Logo } from "@/components/Logo";
import { clinic, navLinks } from "@/lib/site";

const footerLinks = [...navLinks, { label: "Onde estamos", href: "#localizacao" }];

function Column({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-display text-xl text-gold-soft">{title}</h2>
      <div className="mt-3 text-[0.9375rem] leading-relaxed text-sand">{children}</div>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="on-dark border-t border-gold/25 bg-cocoa pb-8 pt-16 text-linen lg:pt-20">
      <div className="shell">
        <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-12">
          <div className="sm:col-span-2 lg:col-span-4">
            <a
              href="#inicio"
              aria-label={`${clinic.name}, voltar ao início`}
              className="inline-flex min-h-11 items-center"
            >
              <Logo />
            </a>
            <p className="mt-4 text-sand">{clinic.slogan}</p>
          </div>

          <div className="lg:col-span-3">
            <Column title="Endereço fictício">
              <address className="not-italic">
                {clinic.address.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
            </Column>
          </div>

          <div className="lg:col-span-2">
            <Column title="Horários">
              <ul>
                {clinic.hours.map((row) => (
                  <li key={row.days} className="mb-1.5">
                    {row.days}
                    <br />
                    <span className="text-clay">{row.time}</span>
                  </li>
                ))}
              </ul>
            </Column>
          </div>

          <div className="lg:col-span-3">
            <Column title="Contato fictício">
              <p>Telefone: {clinic.phone}</p>
              <p>WhatsApp: {clinic.whatsapp}</p>
              <p className="break-words">E-mail: {clinic.email}</p>
            </Column>
          </div>
        </div>

        <nav aria-label="Rodapé" className="mt-12 border-t border-gold/25 pt-5">
          <ul className="flex flex-wrap gap-x-6 gap-y-1">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="inline-block py-2 text-[0.9375rem] underline-offset-[0.4em] decoration-gold hover:underline"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <p className="mt-5 max-w-[46rem] border-l-2 border-gold pl-4 text-[0.9375rem] text-sand">
          {clinic.demoNotice} As fotografias são ilustrativas.
        </p>
      </div>
    </footer>
  );
}
