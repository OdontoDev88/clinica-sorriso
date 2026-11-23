/**
 * Conteúdo e configurações do site.
 * Tudo aqui é fictício: a Clínica Sorriso é uma demonstração de portfólio.
 */

const vercelHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (vercelHost ? `https://${vercelHost}` : "http://localhost:3000");

/* ------------------------------------------------------------------ */
/* WHATSAPP — único lugar para configurar                              */
/* ------------------------------------------------------------------ */

export const whatsapp = {
  /**
   * Número com DDI + DDD + telefone, só dígitos. Ex.: "5511999991234".
   * Vazio = modo demonstração: os botões abrem um aviso explicando que a
   * clínica é fictícia, em vez de mandar mensagem para um número qualquer.
   */
  number: "",
  /** Mensagem padrão que aparece pronta no WhatsApp. */
  message: "Olá! Vim pelo site da Clínica Sorriso e gostaria de agendar uma avaliação.",
};

export const isWhatsappConfigured = /^\d{10,15}$/.test(whatsapp.number);

export function whatsappUrl(message: string = whatsapp.message) {
  return `https://wa.me/${whatsapp.number}?text=${encodeURIComponent(message)}`;
}

/* ------------------------------------------------------------------ */
/* Dados da clínica (demonstrativos)                                    */
/* ------------------------------------------------------------------ */

export const clinic = {
  name: "Clínica Sorriso",
  tagline: "Odontologia moderna e humanizada",
  address: {
    street: "Rua Exemplo, 123 — Sala Demonstração",
    district: "Bairro Fictício",
    city: "São Paulo – SP",
    zip: "CEP 00000-000",
  },
  phone: "(11) 0000-0000",
  email: "contato@clinicasorriso.example",
  hours: [
    { days: "Segunda a sexta", time: "8h às 19h" },
    { days: "Sábado", time: "8h às 13h" },
    { days: "Domingo e feriados", time: "Fechado" },
  ],
  demoNotice:
    "Site demonstrativo: a Clínica Sorriso é fictícia. Endereço, telefone, profissionais e depoimentos não são reais.",
};

export const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre nós", href: "#sobre" },
  { label: "Tratamentos", href: "#tratamentos" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Contato", href: "#contato" },
];

/** Perfis demonstrativos. Preencha `href` com o perfil real para virar link. */
export const socialLinks: { label: "Instagram" | "Facebook" | "LinkedIn"; href: string }[] = [
  { label: "Instagram", href: "" },
  { label: "Facebook", href: "" },
  { label: "LinkedIn", href: "" },
];

/* ------------------------------------------------------------------ */
/* Conteúdo das seções                                                 */
/* ------------------------------------------------------------------ */

export type TreatmentIcon =
  | "whitening"
  | "implant"
  | "braces"
  | "veneers"
  | "canal"
  | "cleaning";

export const treatments: {
  id: string;
  title: string;
  text: string;
  icon: TreatmentIcon;
  image: string;
  alt: string;
  position?: string;
}[] = [
  {
    id: "clareamento",
    title: "Clareamento dental",
    text: "Dentes mais claros de forma segura, com técnica escolhida para a sensibilidade de cada paciente.",
    icon: "whitening",
    image: "/images/tratamento-clareamento.jpg",
    alt: "Close de um sorriso com dentes claros e lábios naturais",
    position: "70% 50%",
  },
  {
    id: "implantes",
    title: "Implantes dentários",
    text: "Reposição de dentes com planejamento digital, para devolver firmeza ao sorriso e conforto ao mastigar.",
    icon: "implant",
    image: "/images/tratamento-implante.jpg",
    alt: "Mão com luva segurando um implante dentário com coroa",
    position: "50% 45%",
  },
  {
    id: "ortodontia",
    title: "Aparelhos ortodônticos",
    text: "Aparelhos fixos, estéticos ou alinhadores transparentes para alinhar os dentes no seu ritmo.",
    icon: "braces",
    image: "/images/tratamento-ortodontia.jpg",
    alt: "Dois modelos de arcada dentária, um com aparelho ortodôntico",
  },
  {
    id: "facetas",
    title: "Lentes e facetas",
    text: "Correção de forma, cor e proporção dos dentes com resultado natural, desenhado para o seu rosto.",
    icon: "veneers",
    image: "/images/tratamento-facetas.jpg",
    alt: "Paciente sorrindo enquanto observa o próprio sorriso em um espelho",
    position: "50% 35%",
  },
  {
    id: "canal",
    title: "Tratamento de canal",
    text: "Diagnóstico por imagem e anestesia cuidadosa para tratar a dor e preservar o dente natural.",
    icon: "canal",
    image: "/images/tratamento-canal.jpg",
    alt: "Dentista apontando uma tomografia dentária em um tablet",
  },
  {
    id: "limpeza",
    title: "Limpeza e prevenção",
    text: "Profilaxia, check-up e orientações para manter gengivas saudáveis e evitar tratamentos maiores.",
    icon: "cleaning",
    image: "/images/tratamento-limpeza.jpg",
    alt: "Dentista sorridente atendendo um paciente tranquilo na cadeira",
    position: "50% 40%",
  },
];

export type DifferentialIcon = "heart" | "building" | "award" | "plan" | "tech";

export const differentials: { title: string; text: string; icon: DifferentialIcon }[] = [
  {
    title: "Atendimento humanizado",
    text: "Tempo para ouvir, explicar cada etapa e respeitar o seu conforto, inclusive para quem tem medo de dentista.",
    icon: "heart",
  },
  {
    title: "Estrutura moderna",
    text: "Consultórios amplos, iluminados e equipados, com protocolos rigorosos de esterilização.",
    icon: "building",
  },
  {
    title: "Profissionais qualificados",
    text: "Equipe com especialistas em cada área, em atualização constante.",
    icon: "award",
  },
  {
    title: "Planejamento personalizado",
    text: "Plano de tratamento sob medida, com prazos e etapas claros desde a primeira consulta.",
    icon: "plan",
  },
  {
    title: "Tecnologia odontológica",
    text: "Radiografia digital, escaneamento intraoral e simulação do sorriso antes de começar.",
    icon: "tech",
  },
];

export const experience = [
  {
    src: "/images/consultorio-moderno.jpg",
    alt: "Consultório odontológico amplo e claro, com cadeira, armários brancos e janelas",
    caption: "Consultórios amplos e iluminados",
  },
  {
    src: "/images/sala-espera.jpg",
    alt: "Sala de espera minimalista com cadeiras pretas, planta e quadro na parede",
    caption: "Recepção tranquila",
  },
  {
    src: "/images/cadeira-odontologica.jpg",
    alt: "Cadeira odontológica branca moderna ao lado de uma janela",
    caption: "Equipamentos modernos",
  },
  {
    src: "/images/atendimento-acolhedor.jpg",
    alt: "Dentista de jaleco azul ajustando o refletor antes de atender uma paciente",
    caption: "Atendimento acolhedor",
  },
  {
    src: "/images/consulta-planejamento.jpg",
    alt: "Dentista mostrando a imagem de um sorriso em um monitor para a paciente",
    caption: "Planejamento explicado",
  },
  {
    src: "/images/corredor-clinica.jpg",
    alt: "Corredor claro da clínica com poltrona e iluminação suave",
    caption: "Ambiente sereno",
  },
];

export const testimonials = [
  {
    quote:
      "Sempre tive medo de dentista, mas me senti segura desde a primeira consulta. Explicaram cada etapa com muita calma.",
    name: "Paciente A.",
    detail: "Clareamento dental",
  },
  {
    quote:
      "O planejamento do implante foi todo mostrado na tela antes de começar. Saber o que ia acontecer fez toda a diferença.",
    name: "Paciente R.",
    detail: "Implante dentário",
  },
  {
    quote:
      "Ambiente lindo, pontualidade e uma equipe muito atenciosa. Meus filhos agora pedem para voltar.",
    name: "Paciente M.",
    detail: "Limpeza e prevenção",
  },
];
