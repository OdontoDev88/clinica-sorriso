# Clínica Sorriso

Landing page de uma clínica odontológica **fictícia**, criada como projeto de portfólio. A clínica, os profissionais, o endereço, os contatos e as avaliações não são reais.

## Tecnologias

Next.js 16, React 19, TypeScript, Tailwind CSS 4, GSAP e ScrollTrigger.

## Como rodar

```bash
npm install
npm run dev
```

Outros comandos: `npm run build`, `npm run start` e `npm run lint`.

## Imagens

As fotos em `public/images/` foram recortadas das colagens em `source-images/` pelo script abaixo, que exige Python com Pillow e NumPy:

```bash
python scripts/crop_collages.py
```

O script detecta as divisórias brancas, recorta com margem de segurança, amplia 2x e salva em WebP. As colagens têm baixa resolução (cada foto tem de 365 a 593 px de largura na origem). Para um cliente real, substitua por fotos originais em alta resolução.

Recortes não usados por escolha: `ortodontia.webp` tem um defeito no lábio superior e um dente deformado.

## Publicação

O projeto funciona na Vercel sem configuração adicional. `NEXT_PUBLIC_SITE_URL` é opcional (veja `.env.example`).

## Para transformar em site de um cliente real

- Trocar o conteúdo em `src/lib/site.ts` e remover os avisos de demonstração.
- Ligar os botões de `src/components/Booking.tsx` ao WhatsApp ou à agenda real.
- Trocar o mapa ilustrativo de `src/components/sections/Location.tsx` por um mapa real.
- Trocar os dados estruturados de `src/app/page.tsx` por `Dentist`, com dados reais.
- Usar apenas avaliações reais, com autorização dos pacientes.
