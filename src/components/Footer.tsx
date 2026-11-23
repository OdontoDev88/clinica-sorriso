import { ArrowUp } from "lucide-react";
import { SocialIcon, WhatsAppIcon } from "@/components/Icons";
import { Logo } from "@/components/Logo";
import { WhatsAppLink } from "@/components/WhatsApp";
import { clinic, navLinks, socialLinks } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();
  const { address } = clinic;

  return (
    <footer className="on-dark relative overflow-hidden bg-navy-deep text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 size-96 rounded-full bg-azure/20 blur-[100px]"
      />
      <div className="shell relative pb-8 pt-16 lg:pt-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="sm:col-span-2 lg:col-span-4">
            <a
              href="#inicio"
              aria-label={`${clinic.name}, voltar ao início`}
              className="inline-flex min-h-11 items-center"
            >
              <Logo tone="light" />
            </a>
            <p className="mt-5 max-w-xs text-[0.9375rem] leading-relaxed text-sky">
              {clinic.tagline}. Tecnologia, cuidado e planejamento para o seu sorriso.
            </p>
            <ul className="mt-6 flex gap-2" aria-label="Redes sociais (demonstrativas)">
              {socialLinks.map((social) => (
                <li key={social.label}>
                  {social.href ? (
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="grid size-11 place-items-center rounded-full border border-white/15 text-white transition-colors hover:border-accent hover:text-accent"
                    >
                      <SocialIcon name={social.label} />
                    </a>
                  ) : (
                    <span
                      title={`${social.label}: perfil demonstrativo`}
                      className="grid size-11 place-items-center rounded-full border border-white/15 text-white/80"
                    >
                      <SocialIcon name={social.label} />
                      <span className="sr-only">{social.label} (perfil demonstrativo)</span>
                    </span>
                  )}
                </li>
              ))}
            </ul>
            {socialLinks.some((s) => !s.href) && (
              <p className="mt-3 text-[0.75rem] text-sky/80">Perfis demonstrativos.</p>
            )}
          </div>

          <nav aria-label="Rodapé" className="lg:col-span-2">
            <h2 className="text-[0.75rem] font-bold uppercase tracking-[0.16em] text-accent">
              Navegação
            </h2>
            <ul className="mt-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="inline-flex min-h-10 items-center text-[0.9375rem] text-sky transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <h2 className="text-[0.75rem] font-bold uppercase tracking-[0.16em] text-accent">
              Contato demonstrativo
            </h2>
            <address className="mt-4 space-y-2 text-[0.9375rem] not-italic leading-relaxed text-sky">
              <p>
                {address.street}
                <br />
                {address.district} · {address.city}
              </p>
              <p>{clinic.phone}</p>
              <p className="break-words">{clinic.email}</p>
            </address>
          </div>

          <div className="lg:col-span-3">
            <h2 className="text-[0.75rem] font-bold uppercase tracking-[0.16em] text-accent">
              Horários
            </h2>
            <ul className="mt-4 space-y-2 text-[0.9375rem] text-sky">
              {clinic.hours.map((row) => (
                <li key={row.days} className="flex justify-between gap-4 border-b border-white/10 pb-2">
                  <span>{row.days}</span>
                  <span className="text-white">{row.time}</span>
                </li>
              ))}
            </ul>
            <WhatsAppLink className="btn btn-whatsapp btn-sm mt-6">
              <WhatsAppIcon className="size-4" />
              Agendar pelo WhatsApp
            </WhatsAppLink>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 text-[0.8125rem] text-sky sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {clinic.name}. Todos os direitos reservados.
          </p>
          <a
            href="#inicio"
            className="inline-flex min-h-10 items-center gap-2 self-start text-white transition-colors hover:text-accent sm:self-auto"
          >
            Voltar ao topo
            <ArrowUp className="size-4" aria-hidden="true" />
          </a>
        </div>
        <p className="mt-4 max-w-3xl text-[0.75rem] leading-relaxed text-sky/80">
          {clinic.demoNotice} Fotografias ilustrativas do Unsplash.
        </p>
      </div>
    </footer>
  );
}
