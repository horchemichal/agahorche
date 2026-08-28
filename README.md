# agahorche.pl — fundament aplikacji

Next.js 16 (App Router, Turbopack) + TypeScript + Tailwind CSS v4. Zobacz pełny raport
architektury (`ARCHITEKTURA.md` w projekcie Claude / dostarczony osobno) po szczegóły każdego
modułu. Ten plik to tylko instrukcja uruchomienia.

## Uruchomienie lokalne

```bash
npm install
cp .env.example .env.local   # uzupełnij zmienne, które już masz; reszta może zostać pusta
npm run dev
```

## Skrypty

- `npm run dev` — serwer developerski (Turbopack)
- `npm run build` — build produkcyjny
- `npm run start` — start builda produkcyjnego
- `npm run lint` — ESLint

## Status danych

- `/data/locations` zawiera realny, ale celowo NIEPEŁNY zestaw lokalizacji (16 województw + ok.
  20 miast Tier A/B + demo warstwy powiat/miejscowość). Docelowe 380+ jednostek dochodzi etapami
  — patrz `seo.tier` i `seo.indexable` w `types/location.ts`.
- `/data/testimonials.ts` i `/data/blog/posts.ts` są celowo puste — żadnych fikcyjnych opinii ani
  artykułów (zgodnie z zasadą projektu: nigdy nie wymyślaj danych).
- Wszystkie strony lokalizacji są obecnie `indexable: false` (poza samymi województwami) —
  włączanie indeksacji to świadoma, pojedyncza zmiana danych po zatwierdzeniu treści przez Agę.

## Zmienne środowiskowe

Patrz `.env.example`. Nic w aplikacji nie failuje przy braku zmiennych — integracje (Supabase,
n8n, AI, GTM) są no-op/wyłączone dopóki odpowiedni klucz nie zostanie ustawiony.
