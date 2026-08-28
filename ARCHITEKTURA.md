# agahorche.pl — Raport architektury (fundament)

Status: **fundament zbudowany i zweryfikowany** (`npm run build` ✅, `npm run lint` ✅ — 0
błędów, 0 ostrzeżeń). Zgodnie z instrukcją projektu **nie wygenerowano** jeszcze pełnej treści,
380 stron lokalizacji, artykułów bloga ani opinii — powstał silnik, który to wszystko będzie
umiał obsłużyć, gdy przyjdzie na to czas, etapami.

---

## A. Architektura aplikacji

Next.js 16 (App Router, Turbopack domyślnie), TypeScript (strict), Tailwind CSS v4, React 19.
Warstwy są rozdzielone tak, żeby żadna z nich nie musiała znać szczegółów implementacji innej:

```
dane (data/)  →  silniki domenowe (lib/)  →  komponenty (components/)  →  strony (app/)
```

- **dane** — statyczne moduły TS (przyszłość: Supabase/CMS), zero logiki.
- **silniki** — czyste funkcje TS: lokalizacje, SEO, analityka, walidacja, AI, n8n. Testowalne
  bez Reacta.
- **komponenty** — prezentacja, podzielona na `ui` (atomy bez wiedzy domenowej), `layout`,
  `seo`, `location`, `lead`, `aga-club`, `marketing`.
- **strony** — cienka warstwa łącząca dane + silniki + komponenty przez `generateMetadata()`.

Zasada: żadna strona nie zawiera logiki biznesowej ani danych lokalizacji na sztywno — wszystko
przechodzi przez silniki w `/lib`.

## B. Struktura folderów

```
app/                          — routing (App Router)
  api/                        — leady, n8n (inbound), AI, lokalizacje, analytics
  thermomix/[...slug]/        — programmatic SEO catch-all (miasta/województwa/powiaty)
  blog/[slug]/, blog/kategoria/[category]/
  sitemap.ts, robots.ts, manifest.ts
components/
  ui/                         — Button, Card, Section, Heading, formularze...
  layout/                     — Header, Footer, MobileNav, StickyCTA, GTM
  seo/                        — JSON-LD renderer, Breadcrumbs, FaqSection
  location/                   — LocationHero, NearbyLocations, LocationPageTemplate...
  lead/                       — LeadForm
  aga-club/                   — FeatureCard (fundament UI)
  marketing/                  — bloki treści współdzielone (kroki prezentacji, audience...)
lib/
  seo/                        — metadata.ts, schema.ts, scoring.ts, internal-linking.ts
  locations/                  — silnik lokalizacji + generator treści strukturalnej
  analytics/                  — katalog eventów, track() (klient), trackServerEvent (serwer)
  ai/                         — provider-agnostyczny klient AI (nieaktywny do czasu klucza)
  n8n/                        — klient webhooków wychodzących
  database/                   — Supabase client (placeholder) + repozytorium leadów
  validation/                 — schematy Zod
data/
  locations/                  — 16 województw + ~20 miast (Tier A/B) + demo powiat/miejscowość
  blog/, faq/, aga-club/, content/, testimonials.ts, nav.ts
types/                        — kontrakty domenowe (Location, Seo, Lead, Blog, AgaClub, Analytics)
```

## C. Routing

Wszystkie adresy z sekcji 4 specyfikacji istnieją i renderują się poprawnie (zweryfikowano
buildem). Statyczne trasy (`/thermomix/tm7`, `/prezentacja/online` itd.) mają pierwszeństwo nad
catch-allem `/thermomix/[...slug]`, więc nie kolidują.

**Programmatic SEO routing** — jeden plik, `app/thermomix/[...slug]/page.tsx`, obsługuje:
- `/thermomix/[wojewodztwo]` (16 stron)
- `/thermomix/[miasto]` (płaski URL — patrz decyzja w sekcji F)
- `/thermomix/[wojewodztwo]/[powiat]/[miejscowosc]` (zagnieżdżony URL dla mniejszych miejscowości)

`generateStaticParams()` buduje statycznie **tylko** lokalizacje z `seo.indexable: true`.
`dynamicParams = true` pozwala jednocześnie oglądać/testować pozostałe lokalizacje on-demand
(SSR, ale z `noindex`) — edytorzy mogą zobaczyć stronę przed jej publikacją.

## D. Modele danych

Kluczowe typy w `/types`:

- **`Location`** (`types/location.ts`) — jeden kształt dla województwa/powiatu/gminy/miasta/
  miejscowości, rozróżniany przez `unitType`. Zawiera hierarchię (`wojewodztwoSlug`,
  `powiatSlug`), sąsiadów (`neighborSlugs`), SEO (`SeoControl`: `indexable`, `robots`,
  `inSitemap`, `contentStatus`), `tier`, `seoPriority`, `urlPath`.
- **`SeoInput` / `SeoScoreInputs` / `InternalLink`** (`types/seo.ts`)
- **`LeadFormValues` / `LeadRecord`** (`types/lead.ts`)
- **`BlogPostMeta`** (`types/blog.ts`) — kategoria + klaster jako osobne osie
- **`AgaClubFeatureFlags` i modele modułów** (`types/aga-club.ts`) — kontrakty na przyszłość
- **`AnalyticsEventPayloadMap`** (`types/analytics.ts`) — discriminated union, `track()` jest w
  pełni otypowane end-to-end

## E. SEO architecture

`lib/seo/metadata.ts` → `buildMetadata(input: SeoInput): Metadata`. Każda strona wywołuje tę
jedną funkcję zamiast ręcznie pisać obiekt `Metadata` — title, description, canonical, robots,
OpenGraph, Twitter Card generują się spójnie. Brak ręcznego wpisywania metadanych na sztywno w
którejkolwiek stronie (zweryfikowane — wszystkie 27 statycznych plików `page.tsx` przechodzą
przez `buildMetadata`).

## F. Location architecture (hierarchia lokalna)

`lib/locations/index.ts` to jedyny punkt odczytu danych lokalizacji — żaden komponent nie
importuje `data/locations/*` bezpośrednio. Funkcje: `resolveLocation(segments)`,
`buildLocationBreadcrumbs()`, `getNeighbors()`, `getCitiesInWojewodztwo()`,
`getIndexableLocations()`.

**Decyzja architektoniczna (świadomie odstępuje od literalnego przykładu w §7):** duże miasta
(Tier A/B) mają płaski URL `/thermomix/krakow` — zgodnie z dosłownym przykładem z §8. Zagnieżdżony
wzorzec `/thermomix/[woj]/[powiat]/[miejscowosc]` z §7 jest zarezerwowany dla mniejszych
miejscowości, gdzie occurs disambiguation (te same nazwy miejscowości w różnych powiatach). Oba
działają w tym samym silniku — wybór wzorca jest per-lokalizacja, nie architektoniczny. Przykład
pełnej głębokości hierarchii (Małopolskie → powiat krakowski → Wieliczka) jest zaimplementowany
i przetestowany (`data/locations/hierarchy-demo.ts`).

**Unikalność treści (§9):** `lib/locations/content.ts` generuje wstęp i FAQ WYŁĄCZNIE z realnych
danych strukturalnych (nazwa, województwo, sąsiedzi) — nigdy przez podmianę nazwy miasta w
identycznym zdaniu marketingowym. Generyczne bloki (jak wygląda prezentacja, dla kogo jest
Thermomix) są celowo współdzielone — to opis rzeczywistego procesu Agi, identyczny dla każdego
miasta z natury rzeczy; unikalność strony buduje się z hierarchii + sąsiadów + FAQ + linkowania,
zgodnie z duchem §9.

**Status danych: 16 województw + ~20 miast Tier A/B, żadne miasto nie jest jeszcze
`indexable: true`.** Województwa są `indexable: true` (to strony-huby, nawigacyjne, nie
"thin content"). To świadoma decyzja zgodna z §43/§47 — pełne 380 jednostek i realna, unikalna
treść dochodzą etapami, ocenianie przez Search Console/Analytics przed każdym kolejnym tier.

## G. Programmatic SEO engine

Modele z §25 zaimplementowane:

| Model z specyfikacji | Implementacja |
|---|---|
| Location model | `types/location.ts` + `data/locations/*` |
| SEO model | `types/seo.ts` + `lib/seo/*` |
| Content model | `lib/locations/content.ts` (generator strukturalny) |
| InternalLinks model | `lib/seo/internal-linking.ts` |
| FAQ model | `buildLocationFaq()` + `FaqSection` |
| Indexing model | `Location.seo` (`indexable`, `inSitemap`, `contentStatus`, `robots`) |

**SEO Scoring (§26)** — `lib/seo/scoring.ts`, `computeSeoScore()`: ważona suma 0-100
(populacja, tier, obecność treści, linki wewnętrzne, dane Search Console, ruch organiczny,
odwrócona konkurencyjność). Każda waga jest nazwana i czytelna — brakujące dane (np. Search
Console jeszcze niepodłączony) liczą się jako 0, nie jako zgadywanie. Zwraca rekomendację:
`build | optimize | expand | hold`. Dostępne przez `GET /api/locations` (score na żywo dla
każdej lokalizacji) i `POST /api/n8n/seo` (przyjmuje dane z Search Console przez n8n).

**Internal linking engine (§12)** — `lib/seo/internal-linking.ts`: osobne, ograniczone funkcje
per relacja (`hierarchyUpLinks`, `nearbyLocationLinks`, `conversionLinks`, `blogRelatedLinks`),
`composeLinks()` deduplikuje i ogranicza liczbę linków (domyślnie 12) — celowo NIE linkuje
wszystkiego ze wszystkim.

## H. Sitemap architecture

`app/sitemap.ts` — trzy źródła (statyczne trasy, silnik lokalizacji przez
`getIndexableLocations()`, opublikowane posty bloga), złożone w jeden `MetadataRoute.Sitemap`.
Żadna strona `noindex`, niegotowa lub pusta nie trafia do sitemapy — filtr jest na poziomie
danych (`seo.indexable`, `post.status === "published"`), nie trzeba nic ręcznie dopisywać przy
każdej nowej lokalizacji. Zweryfikowano: `curl /sitemap.xml` zwraca poprawny XML.

## I. Schema architecture (JSON-LD)

`lib/seo/schema.ts` — czyste funkcje budujące JSON-LD (bez Reacta, testowalne), renderowane przez
`components/seo/json-ld.tsx` (`JsonLdScript`, akceptuje `null` dla warunkowego schema).
Zaimplementowane: `Organization`, `Person`, `WebSite`, `WebPage`, `Service`, `FAQPage`,
`BreadcrumbList`, `Article`. **`LocalBusiness` celowo NIE jest podpięty nigdzie** —
`localBusinessSchemaTodo()` zwraca `null` z komentarzem: wymaga prawdziwego adresu/telefonu,
których nie mamy (§11/§42). Żadne dane nie są zmyślone — zweryfikowano ręcznie każdy schemat pod
kątem braku fikcyjnych adresów/telefonów/opinii.

## J. Analytics

`types/analytics.ts` definiuje dokładnie 16 eventów z §23 jako discriminated union.
`lib/analytics/track.ts` (klient) pcha do `window.dataLayer` — GTM odpowiada za fan-out do GA4 i
innych narzędzi, ta warstwa nigdy nie rozmawia z GA4 bezpośrednio. `lib/analytics/server.ts`
(serwer) — używane m.in. w `/api/leads` po potwierdzonym zapisie leada, żeby zdarzenie było
zarejestrowane nawet jeśli klient ma zablokowany JS/GTM. `components/layout/gtm.tsx` ładuje GTM
tylko gdy `NEXT_PUBLIC_GTM_ID` jest ustawione (żeby dev nie zaśmiecał produkcyjnych danych).

## K. System leadów

Przepływ: `LeadForm` (client) → `POST /api/leads` → walidacja Zod (`lib/validation/lead.ts`,
identyczna logika po stronie serwera co była po stronie klienta) → rate limiting
(`lib/rate-limit.ts`, 5 prób / 10 min / IP) → honeypot (pole `website`, ukryte przez CSS a nie
`type="hidden"`) → zapis (`lib/database/leads-repository.ts`, interfejs gotowy pod Supabase) →
`trackServerEvent("submit_lead", ...)` → best-effort forward do n8n
(`lib/n8n/client.ts` → `N8N_LEAD_WEBHOOK_URL`), błąd forwardu nigdy nie psuje odpowiedzi dla
użytkownika. Zweryfikowano end-to-end (curl): walidacja odrzuca brak zgody, poprawne zgłoszenie
zwraca `leadId`.

## L. Aga Club

`/aga-club` renderuje siatkę modułów z §16 (`data/aga-club/features.ts`), każdy pod
`AgaClubFeatureFlags` — **wszystkie wyłączone** (`false`), karty pokazują "Wkrótce" zamiast
udawać działającą funkcję. Kontrakty typów dla każdego modułu (`FridgeQuery`,
`MealSuggestion`, `MamaModeInput`, `WeeklyPlanInput`, `ThirtyDaysProgress`...) są gotowe w
`types/aga-club.ts`, żeby kolejne zadania ("Zbuduj AI Meal Planner") miały stabilny kontrakt do
implementacji zamiast projektować typy od zera. `app/manifest.ts` przygotowuje PWA
(`start_url: "/aga-club"`) — brakuje tylko finalnych ikon.

## M. AI architecture

`lib/ai/client.ts` — provider-agnostyczny punkt wejścia (`requestAiCompletion()`).
`isAiConfigured()` gate'uje każde wywołanie; bez `AI_API_KEY` funkcja rzuca jawny błąd zamiast
zwracać fałszywą odpowiedź. `/api/ai/chat` (Aga AI) i `/api/ai/meal-suggest` ("Co dziś
ugotować?"/"Moja lodówka") zwracają `503`/`501` z jasnym komunikatem, dopóki (a) provider AI nie
jest podłączony i (b), dla przepisów, dopóki nie istnieje prawdziwa, legalna baza przepisów —
zgodnie z §17 (zakaz linkowania do przepisów bez prawa dostępu).

## N. n8n architecture

Dwa kierunki:
- **Wychodzące** (`lib/n8n/client.ts`): `forwardLeadToN8n`, `forwardSeoSignalToN8n`,
  `forwardSocialContentToN8n` — każde postuje pod URL z env var, no-op (z logiem) gdy niepodane.
- **Przychodzące** (`/api/n8n/content`, `/api/n8n/seo`, `/api/n8n/social`) — chronione wspólnym
  sekretem (`N8N_INBOUND_SECRET`, nagłówek `x-n8n-secret`). `/api/n8n/seo` jest w pełni
  funkcjonalne już teraz (przelicza SEO score na podstawie danych z Search Console);
  `/api/n8n/content` i `/api/n8n/social` są zarysowane (401 bez sekretu, 501 z sekretem) —
  czekają na warstwę trwałości dla draftów treści.

Docelowe workflowy z §35 mają gotowe punkty zaczepienia po obu stronach; brakuje tylko
konfiguracji n8n po drugiej stronie i (dla contentu) bazy danych zamiast plików statycznych.

## O. Performance

- Turbopack (domyślny w Next 16) dla dev i builda.
- Fonty: **celowo bez `next/font/google`** — środowisko builda w tym sandboxie nie ma dostępu do
  `fonts.googleapis.com` (typowe ograniczenie CI), a wywołania do Google Fonts to też realny temat
  RODO dla strony w UE (adres IP odwiedzającego trafia do Google). Na razie stos systemowy
  (`ui-sans-serif`, `Georgia`), gotowy do podmiany na `next/font/local` z hostowanymi plikami
  `.woff2`, gdy tylko Aga/projekt graficzny potwierdzi docelową typografię (Inter + Fraunces jako
  kandydaci pasujący do briefu "premium, ciepły, nie zimny").
- Zero ciężkich bibliotek — jedyne zależności runtime poza Next/React to `zod`, `clsx`,
  `tailwind-merge`, `@supabase/supabase-js`.
- Brak sliderów, brak ciężkich animacji — tylko hover/fade na poziomie CSS.
- `next/image` gotowe do użycia (jeszcze nieużywane — brak realnych zdjęć od Agi, §42).

## P. Security

- Walidacja **zawsze po stronie serwera** (Zod), niezależnie od walidacji klienta.
- Rate limiting na `/api/leads` (in-memory — udokumentowano w kodzie, że przy skalowaniu na
  wiele instancji trzeba przenieść na współdzielony store, np. Upstash Redis).
- Honeypot anty-spam w formularzu leadowym.
- Endpointy n8n przychodzące chronione sekretem w nagłówku.
- `robots.txt` blokuje `/api/`.
- Brak zapisu w `localStorage` (nigdzie w kodzie).
- `SUPABASE_SERVICE_ROLE_KEY` używany wyłącznie w `getSupabaseAdminClient()` — nigdy nie trafia
  do komponentu klienckiego (plik nie ma `"use client"`, klucz nie ma prefiksu `NEXT_PUBLIC_`).

## Q. Plan wdrożenia

1. **Hosting**: dowolny nowoczesny host Next.js (Vercel — najmniej tarcia z App Router +
   Turbopack; Cloudflare/self-hosted Node również możliwe).
2. **Zmienne środowiskowe**: skopiować `.env.example` → skonfigurować w hostingu. Aplikacja
   działa (build + wszystkie strony) nawet z pustymi wartościami — integracje są no-op.
3. **Supabase**: założyć projekt, uzupełnić `NEXT_PUBLIC_SUPABASE_URL` /
   `NEXT_PUBLIC_SUPABASE_ANON_KEY` / `SUPABASE_SERVICE_ROLE_KEY`, podmienić
   `InMemoryLeadsRepository` na implementację Supabase (jeden plik:
   `lib/database/leads-repository.ts`).
4. **GTM/GA4**: utworzyć kontener, ustawić `NEXT_PUBLIC_GTM_ID`, zmapować eventy z
   `lib/analytics/events.ts` na tagi GA4 w GTM.
5. **n8n**: skonfigurować webhooki wychodzące (lead/SEO/social) i sekret dla żądań
   przychodzących.
6. **Fonty**: dodać docelowe pliki `.woff2` do `/public/fonts`, podpiąć przez `next/font/local`.
7. **Google Search Console**: dodać i zweryfikować domenę, potwierdzić `sitemap.xml`.

---

## Co dalej (zgodnie z §48 — kolejne zadania, jedno na raz)

Silnik jest gotowy na komendy typu:

- „Zbuduj stronę główną" (pełna, docelowa treść — obecna to fundament/demo komponentów)
- „Zbuduj stronę TM7" / „TM6" / „TM7 vs TM6"
- „Zbuduj stronę Thermomix Kraków" (uzupełnienie prawdziwych `localFacts`, recenzja treści,
  przełączenie `seo.indexable` na `true`)
- „Rozszerz bazę lokalizacji o Tier C"
- „Zbuduj Aga AI" / „Zbuduj AI Meal Planner"
- „Podłącz Supabase do leadów"

Żadna z tych rzeczy nie wymaga zmiany architektury — tylko wypełnienia jej prawdziwą treścią i
danymi, etapami, tak jak zakładała specyfikacja.
