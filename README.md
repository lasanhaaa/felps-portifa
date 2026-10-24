# felps.me

Portfólio do Felipe Terra, recriado em Next.js a partir do site que estava no Framer.

## Stack

- [Next.js 16](https://nextjs.org) (App Router) + React 19 + TypeScript
- CSS Modules, com os mesmos breakpoints do Framer (`≥1920`, `1440–1919`, `1200–1439`, `<1200`)
- [Lenis](https://lenis.darkroom.engineering) para o smooth scroll
- [dotLottie](https://developers.lottiefiles.com/docs/dotlottie-player/) para os ícones animados do hero
- `next/image` com imagens art-directed por breakpoint
- Rota `/api/now-playing` que consulta o Last.fm no servidor (a API key não vai mais para o browser)

## Rodando localmente

```bash
npm install
cp .env.example .env.local   # coloque sua LASTFM_API_KEY
npm run dev
```

## Variáveis de ambiente

| Nome | Descrição |
| --- | --- |
| `LASTFM_API_KEY` | Chave da API do Last.fm. Sem ela o widget "Listening now" fica escondido. |
| `LASTFM_USERNAME` | Usuário do Last.fm (padrão: `lasanhaaa`). |

## Assets

Imagens, fontes (Awesome Serif) e arquivos Lottie foram exportados do Framer e ficam em `public/`.
A lista com a origem de cada arquivo está em `scripts/assets.json`; `npm run assets` baixa o que estiver faltando
(o workflow `Sync Framer assets` faz o mesmo no GitHub Actions).

## Estrutura

```
src/
  app/            layout, página e rota da API
  components/     Header, Hero, RecentWork, Marquee, Footer e helpers
  lib/            conteúdo do site e cliente do Last.fm
```
