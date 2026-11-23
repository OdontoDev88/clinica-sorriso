# Clínica Sorriso

Landing page de uma clínica odontológica **fictícia**, criada como peça de portfólio para vender landing pages a clínicas reais. A clínica, o endereço, os contatos e os depoimentos não são reais.

## Tecnologias

Next.js 16, React 19, TypeScript, Tailwind CSS 4, GSAP (ScrollTrigger e SplitText) e ícones Lucide.

## Como rodar

```bash
npm install
npm run dev
```

Outros comandos: `npm run build`, `npm run start` e `npm run lint`.

## Configurar o WhatsApp (um único lugar)

Abra `src/lib/site.ts` e preencha:

```ts
export const whatsapp = {
  number: "5511999991234", // DDI + DDD + número, só dígitos
  message: "Olá! Vim pelo site...", // mensagem que já aparece escrita
};
```

- Com o número preenchido, **todos** os botões (cabeçalho, hero, cards de tratamento, CTA, contato, rodapé e botão flutuante) abrem `wa.me` com a mensagem pronta. Os cards de tratamento mandam uma mensagem citando o tratamento.
- Com `number` vazio (padrão), o site fica em **modo demonstração**: os botões abrem um aviso explicando que a clínica é fictícia e mostrando a mensagem que seria enviada. Assim nenhum clique manda mensagem para um número aleatório.

## Estrutura

```
src/
  app/            layout, página, SEO (metadados, sitemap, robots, imagem de compartilhamento)
  components/
    Header, Footer, Logo, Icons, WhatsApp (link, aviso e botão flutuante), PageMotion (animações)
    sections/     Hero, About, Treatments, Differentials, Experience, Testimonials, FinalCta, Location
  lib/site.ts     todo o conteúdo e as configurações (WhatsApp, endereço, horários, tratamentos...)
public/images/    fotografias
```

## Imagens

Fotografias do [Unsplash](https://unsplash.com/license) (licença gratuita para uso comercial), baixadas em alta resolução para `public/images/`. O Next.js gera versões AVIF/WebP no tamanho certo para cada tela.

| Arquivo | Foto no Unsplash |
| --- | --- |
| hero-consulta.jpg | photo-1777331903190-341a3dd0441b |
| sorriso-natural.jpg | photo-1489278353717-f64c6ee8a4d2 |
| consultorio-moderno.jpg | photo-1629909613654-28e377c37b09 |
| consultorio-azul.jpg | photo-1643660526741-094639fbe53a |
| cadeira-odontologica.jpg | photo-1728342057953-94bfad8f0e7e |
| sala-espera.jpg | photo-1762625570087-6d98fca29531 |
| corredor-clinica.jpg | photo-1759262151080-e05ba1c6294f |
| planejamento-raio-x.jpg | photo-1606811841689-23dfddce3e95 |
| consulta-planejamento.jpg | photo-1606811811225-10635e4c9a39 |
| dentista-paciente.jpg | photo-1606811842243-af7e16970c1f |
| atendimento-acolhedor.jpg | photo-1681939282781-341ac4f61996 |
| tratamento-clareamento.jpg | photo-1677026010083-78ec7f1b84ed |
| tratamento-implante.jpg | photo-1771442873035-474765b40ac6 |
| tratamento-ortodontia.jpg | photo-1720685193942-5a1c5ac7fd80 |
| tratamento-facetas.jpg | photo-1785860817740-c95735ba03b1 |
| tratamento-canal.jpg | photo-1600170311833-c2cf5280ce49 |
| tratamento-limpeza.jpg | photo-1663755489920-5e09f66d011a |

(O endereço de cada foto é `https://images.unsplash.com/<id>`.)

## Publicação

Funciona na Vercel sem configuração adicional. `NEXT_PUBLIC_SITE_URL` é opcional (veja `.env.example`).

## Para transformar em site de um cliente real

1. Trocar textos, endereço, horários e redes sociais em `src/lib/site.ts`.
2. Preencher o número do WhatsApp (seção acima).
3. Remover a faixa “Site demonstrativo” em `src/app/page.tsx`, as etiquetas “demonstrativo” em `Location.tsx` e o aviso do rodapé.
4. Trocar o mapa ilustrativo de `src/components/sections/Location.tsx` por um mapa real (ex.: iframe do Google Maps).
5. Usar apenas depoimentos reais, com autorização dos pacientes, e remover o aviso de depoimentos fictícios.
6. Trocar os dados estruturados de `src/app/page.tsx` por `Dentist`, com dados verdadeiros.
7. Substituir as fotos do banco de imagens por fotos da clínica real, sempre que possível.
