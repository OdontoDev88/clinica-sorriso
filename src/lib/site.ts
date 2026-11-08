/** Todo o conteúdo abaixo é fictício e existe só para demonstração de portfólio. */

const vercelHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (vercelHost ? `https://${vercelHost}` : "http://localhost:3000");

export const clinic = {
  name: "Clínica Sorriso",
  slogan: "Seu sorriso, nossa prioridade.",
  address: ["Av. das Palmeiras, 850", "Jardim Paulista", "São Paulo - SP", "CEP 01423-001"],
  phone: "(11) 3456-7890",
  whatsapp: "(11) 99999-1234",
  email: "contato@clinicasorriso.example",
  hours: [
    { days: "Segunda a sexta", time: "08h às 19h" },
    { days: "Sábado", time: "08h às 13h" },
    { days: "Domingo", time: "Fechado" },
  ],
  demoNotice:
    "Clínica fictícia. Este site é uma demonstração de portfólio: nomes, profissionais, endereço, contatos e avaliações não são reais.",
};

export const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Especialidades", href: "#especialidades" },
  { label: "Estrutura", href: "#estrutura" },
  { label: "Quem somos", href: "#quem-somos" },
  { label: "Avaliações", href: "#avaliacoes" },
];

export type GalleryPhoto = {
  src: string;
  alt: string;
  caption: string;
  /** Proporção de exibição, próxima da original para não cortar o assunto. */
  ratio: number;
};

export const structurePhotos: GalleryPhoto[] = [
  {
    src: "/images/fachada-clinica.webp",
    alt: "Fachada da clínica ao entardecer, com o letreiro iluminado e jardim",
    caption: "Fachada",
    ratio: 2.05,
  },
  {
    src: "/images/recepcao-02.webp",
    alt: "Recepção com balcão de mármore, orquídeas e logotipo na parede",
    caption: "Recepção",
    ratio: 1.72,
  },
  {
    src: "/images/sala-espera.webp",
    alt: "Sala de espera com poltronas bege, plantas e quadros de linhas finas",
    caption: "Sala de espera",
    ratio: 1.95,
  },
  {
    src: "/images/consultorio-01.webp",
    alt: "Consultório claro com cadeira odontológica e janelas com persianas",
    caption: "Consultório",
    ratio: 1.95,
  },
  {
    src: "/images/consultorio-04.webp",
    alt: "Cadeira, refletor e equipamentos odontológicos em consultório iluminado",
    caption: "Equipamentos",
    ratio: 1.9,
  },
];

export const teamPhotos: GalleryPhoto[] = [
  {
    src: "/images/dentista-atendimento-01.webp",
    alt: "Dentista com lupa de aumento atendendo uma paciente na cadeira",
    caption: "Atendimento",
    ratio: 2.2,
  },
  {
    src: "/images/equipe-odontologica-02.webp",
    alt: "Quatro profissionais de jaleco branco sorrindo em frente ao logotipo iluminado",
    caption: "Equipe odontológica",
    ratio: 2.15,
  },
  {
    src: "/images/consulta-raio-x.webp",
    alt: "Dentista mostrando uma radiografia panorâmica em um monitor para a paciente",
    caption: "Explicação do exame",
    ratio: 2.1,
  },
  {
    src: "/images/procedimento-clinico.webp",
    alt: "Dupla de profissionais com touca e máscara durante um procedimento clínico",
    caption: "Procedimento clínico",
    ratio: 1.65,
  },
  {
    src: "/images/consulta-paciente-02.webp",
    alt: "Dentista sorridente apresentando uma radiografia em um tablet para a paciente",
    caption: "Consulta",
    ratio: 2.05,
  },
];

export const specialties = [
  {
    title: "Estética Dental",
    text: "Cuidados estéticos personalizados para valorizar seu sorriso.",
    src: "/images/estetica-dental.webp",
    alt: "Sorriso de uma paciente ao lado de uma escala de cor dental",
    position: "42% 50%",
  },
  {
    title: "Implantodontia",
    text: "Tratamentos voltados à reabilitação oral e reposição dentária.",
    src: "/images/implante-dentario.webp",
    alt: "Modelo odontológico transparente com um implante dentário",
    position: "50% 50%",
  },
  {
    title: "Ortodontia",
    text: "Acompanhamento odontológico para alinhamento dos dentes.",
    src: "/images/ortodontia-02.webp",
    alt: "Sorriso com aparelho ortodôntico metálico",
    position: "55% 50%",
  },
];

export const services = [
  "Clínica Geral",
  "Clareamento Dental",
  "Facetas Dentais",
  "Lentes de Contato Dental",
  "Tratamento de Canal",
  "Próteses Dentárias",
  "Odontopediatria",
  "Periodontia",
];

export const reviews = [
  {
    quote:
      "Fui muito bem atendida desde o primeiro contato. A equipe é atenciosa e o ambiente muito agradável.",
    author: "Ana Martins",
  },
  {
    quote: "Gostei muito da atenção e da clareza nas explicações durante a consulta.",
    author: "Carlos Ferreira",
  },
  {
    quote: "Uma experiência acolhedora e muito profissional. Recomendo conhecer a clínica.",
    author: "Juliana Costa",
  },
];

export const dentist = {
  name: "Dra. Mariana Oliveira",
  role: "Cirurgiã-dentista",
  experience: "12 anos de experiência",
  education: [
    "Graduação em Odontologia pela Universidade Paulista",
    "Especialização em Dentística",
    "Especialização em Implantodontia",
    "Formação complementar em Estética Dental",
  ],
};
