# Raport końcowy — Aga Admin (CMS agahorche.pl)

Data: 14 sierpnia 2026
Zakres: pełne wdrożenie panelu administracyjnego `/admin` na istniejącym projekcie Next.js, zgodnie ze specyfikacją "Aga Admin". Wszystkie 16 etapów (ETAP 1–16) zostały zaimplementowane, zweryfikowane realnym buildem i przetestowane end-to-end w przeglądarce (Playwright) — nie tylko zaprojektowane.

## 1. Co dokładnie działa

Aga Admin to w pełni funkcjonalny, DZIAŁAJĄCY CMS, nie makieta. Każdy z poniższych modułów ma: listę, formularz z realną walidacją, zapis do bazy, usuwanie z potwierdzeniem, komunikaty sukcesu/błędu (toasty) i natychmiastową propagację zmian na stronę publiczną.

- **Logowanie `/admin`** — sesja podpisywana kryptograficznie (HMAC-SHA256, Web Crypto), dwa tryby: Supabase Auth (produkcja) lub dev-fallback (tylko lokalnie, blokowany na sztywno w produkcji).
- **Dashboard** — realne liczby: leady (łącznie, nowe, wykres 14 dni), aktywna oferta, aktywne promocje, ostatnie wpisy bloga, status integracji (Supabase/n8n/AI/GTM). Zero danych zmyślonych.
- **Oferta** — pojedyncze źródło prawdy dla cen (grosze w bazie, PLN w formularzu). Zmiana ceny TM7 w `/admin/oferta` propaguje się automatycznie na stronę główną, `/thermomix/tm7`, strony miast i wszystkie CTA — bez duplikacji.
- **Promocje** — CRUD z automatycznie liczonym statusem (DRAFT/SCHEDULED/ACTIVE/EXPIRED) na podstawie dat.
- **Lokalizacje** — pełny CRUD hierarchii województwo → powiat → gmina → miasto → miejscowość, pola SEO (tier, priorytet, index/noindex), `urlPath` liczony automatycznie (nie da się go błędnie wpisać ręcznie).
- **Strony (CMS)** — proste strony tekstowe, renderowane publicznie przez `/[...slug]`.
- **Blog** — wpisy + kategorie, status draft/published.
- **FAQ** — scentralizowane pytania, przypisywane do: globalnie / strony / produktu / miasta / artykułu / Aga Club. Zasila `FAQPage` schema.org.
- **Media** — biblioteka zdjęć: upload (Supabase Storage lub lokalny fallback `/public/uploads`), edycja opisu alt, usuwanie. Tylko obrazy (JPG/PNG/WebP/AVIF/SVG), limit 6MB.
- **SEO (globalne)** — domyślny tytuł/opis strony, favicon i obraz OG (wybierane z biblioteki Media), globalny przełącznik indeksowania (index/noindex całej strony) i włącznik/wyłącznik sitemapy. Wpięte realnie w `generateMetadata()` przez dziedziczenie pól Next.js — strony z własnym tytułem/opisem nie są nadpisywane, strony bez własnych ustawień dziedziczą z tego panelu.
- **Leady** — tabela z filtrami (status, wyszukiwanie), zmiana statusu (NOWY/SKONTAKTOWANO/PREZENTACJA UMÓWIONA/SPRZEDANO/UTRACONY) zapisywana natychmiast, widok szczegółów zgłoszenia (wiadomość, UTM, zgody).
- **Aga Club (lekki panel)** — lista członków (ręczne dodawanie — nie ma jeszcze publicznej rejestracji), edycja treści wyzwania „30 dni z Agą” (zadanie/porada/wideo/publikacja) dla wszystkich 30 dni.
- **AI** — panel statusu architektury: czy `AI_API_KEY` jest ustawiony, jakie endpointy istnieją (`/api/ai/chat`, `/api/ai/meal-suggest`) i ich stan, plus mapa drogowa funkcji z §34. Żadnych kosztownych wywołań modelu — zgodnie z poleceniem.
- **Analityka, Ustawienia** — świadomie pozostawione jako "wkrótce" (`AdminComingSoon`), bo nie były częścią zakresu 16 etapów i wymagają realnych integracji (Search Console/Analytics), których nie wolno zmyślać.

## 2. Baza danych i migracje

Jedna migracja: `supabase/migrations/20260101000000_init_cms.sql`, tabele: `admin_profiles`, `audit_log`, `offers`, `promotions`, `cms_pages`, `locations`, `blog_categories`, `blog_posts`, `faqs`, `media_assets`, `seo_settings`, `leads`, `aga_club_members`, `aga_club_challenge_days`. Wszystkie z RLS włączonym — publiczny odczyt tam gdzie sensowny, zapis tylko dla `admin_profiles`.

Każda tabela ma odpowiadające jej repozytorium w `lib/database/repositories/*` (plus `lib/database/leads-repository.ts`) w dualnym wzorcu: `SupabaseXRepository` używane, gdy `NEXT_PUBLIC_SUPABASE_URL` i `SUPABASE_SERVICE_ROLE_KEY` są ustawione, w przeciwnym razie `InMemoryXRepository` — więc cały panel działa od razu lokalnie, bez konfigurowania Supabase, do testów i rozwoju.

## 3. Jak uruchomić lokalnie

```bash
npm install
cp .env.example .env.local
# ustaw przynajmniej AUTH_SECRET (openssl rand -base64 32)
# oraz ADMIN_DEV_EMAIL / ADMIN_DEV_PASSWORD, jeśli nie masz jeszcze Supabase
npm run dev
```

Bez Supabase panel działa na danych w pamięci procesu (resetują się po restarcie serwera) — świetne do testowania przepływów, ale produkcja wymaga Supabase.

## 4. Jak utworzyć pierwszego admina (Supabase)

```bash
# ustaw NEXT_PUBLIC_SUPABASE_URL i SUPABASE_SERVICE_ROLE_KEY w środowisku
node scripts/create-admin.mjs --email aga@agahorche.pl --password "silne-haslo" --name "Agnieszka Horche"
```

Skrypt tworzy użytkownika w Supabase Auth i odpowiadający mu wiersz w `admin_profiles` (sam użytkownik Supabase Auth to za mało — logowanie sprawdza oba). Bez Supabase (dev-fallback) wystarczą `ADMIN_DEV_EMAIL`/`ADMIN_DEV_PASSWORD` w `.env.local` — ale to działa WYŁĄCZNIE lokalnie, jest twardo zablokowane w produkcji.

## 5. Jak przetestować kluczowe przepływy

**Zmiana ceny oferty:** `/admin/oferta` → edytuj aktywną ofertę → zmień cenę → zapisz → sprawdź `/`, `/thermomix/tm7` i dowolną stronę miasta — nowa cena widoczna wszędzie natychmiast (rewalidacja Next.js po zapisie).

**Edycja miasta:** `/admin/lokalizacje` → wybierz miasto lub dodaj nowe → zapisz → sprawdź publiczny URL (widoczny w formularzu jako `urlPath`, liczony automatycznie) → strona ładuje się z nowymi danymi; usunięcie lokalizacji poprawnie zwraca 404 publicznie.

**Lead:** wypełnij dowolny formularz „Umów prezentację" na stronie publicznej → zgłoszenie pojawia się natychmiast w `/admin/leady` → zmień status → zmiana zapisuje się i filtruje poprawnie.

Wszystkie powyższe przepływy zostały przetestowane end-to-end w tej sesji realną przeglądarką (Playwright + Chromium), łącznie z odświeżeniem strony w celu potwierdzenia trwałości zapisu — nie tylko sprawdzone wzrokowo.

## 6. Bezpieczeństwo — ważna uwaga operacyjna

W trybie produkcyjnym (`NODE_ENV=production`, czyli `npm run start` i każdy realny deployment) logowanie dev-fallback jest CAŁKOWICIE zablokowane — to zostało jawnie zweryfikowane w tej sesji. Oznacza to: **jeśli Supabase nie jest skonfigurowany w produkcji, nikt nie może się zalogować do `/admin`.** To zamierzone, bezpieczne zachowanie (fail-closed), ale wymaga pamiętania: przed wdrożeniem produkcyjnym Supabase musi być skonfigurowany i pierwszy admin utworzony skryptem z punktu 4.

## 7. Co pozostaje (świadomie poza zakresem)

- **Analityka i Ustawienia** — placeholdery „wkrótce"; wymagają integracji Google Search Console/Analytics, których dane nie mogą być zmyślone.
- **Prawdziwa integracja AI** — architektura i endpointy gotowe (`lib/ai/client.ts`), ale bez podpiętego dostawcy modelu — zgodnie z poleceniem „bez kosztownej implementacji".
- **Publiczna rejestracja do Aga Club** — obecnie członków dodaje tylko admin ręcznie; logowanie/personalizacja to kolejny, osobny etap (spec §16).
- **Programmatic SEO na skalę** — silnik (model danych lokalizacji, scoring, sitemap) jest gotowy, ale zgodnie z §43/§47 nie wygenerowano masowo stron miast — to ma być kontrolowane, etapowe zadanie po analizie danych z Search Console.
- **Panel administratora treści bloga/FAQ dla współpracowników innych niż Aga** — role/uprawnienia poza `admin`/`editor` nie zostały rozbudowane (fundament w `admin_profiles.role` istnieje).

## 8. Weryfikacja końcowa

Pełny `npm run build` (produkcyjny) i `npx eslint .` przechodzą bez błędów. Przeprowadzono kompleksowy przegląd end-to-end: wszystkie strony publiczne (26 tras) zwracają 200 w trybie produkcyjnym, wszystkie 23 trasy panelu `/admin` renderują się poprawnie po zalogowaniu, dostęp bez logowania jest poprawnie blokowany, wylogowanie poprawnie odbiera dostęp. Repozytorium jest czyste — brak plików testowych/tymczasowych pozostawionych w drzewie.
