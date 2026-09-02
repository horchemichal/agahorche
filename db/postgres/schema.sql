-- Aga Horche — self-hosted Postgres schema (Zadanie 4, Krok 2).
--
-- Zamiennik dla supabase/migrations/*.sql, przygotowany pod docelową bazę
-- Postgres postawioną w Dockerze na VPS (agahorche-postgres, Krok 1).
-- Mirror strukturalny obecnych tabel Supabase — te same nazwy tabel/kolumn,
-- te same typy i ograniczenia (constraints), więc migracja danych (Krok 5)
-- będzie prostym przepisaniem wierszy 1:1, bez przemapowywania kolumn.
--
-- Co się różni względem supabase/migrations/20260101000000_init_cms.sql
-- i dlaczego:
--
-- 1. Brak RLS (row level security) i polityk `using (auth.uid() = ...)`.
--    Cała aplikacja i tak nigdy nie łączy się z bazą bezpośrednio z
--    przeglądarki — zawsze przez zaufany serwer Next.js (patrz
--    lib/database/supabase.ts: klient anon i klient service-role są tworzone
--    tylko po stronie serwera). RLS w Supabase był więc dodatkową siecią
--    bezpieczeństwa, nie realnym mechanizmem kontroli dostępu z przeglądarki.
--    W wersji self-hosted to samo rozgraniczenie publiczne/admin robi kod
--    repozytoriów (np. `where is_active = true` dla publicznych odczytów) —
--    dokładnie tak samo, jak dziś robi to serwer, gdy używa klienta
--    service-role i pomija RLS.
--
-- 2. `admin_profiles` (FK do `auth.users`, tabeli specyficznej dla Supabase
--    Auth) zastąpione samodzielną tabelą `admin_users` z własnym `id` i
--    nową kolumną `password_hash`. Supabase Auth (`signInWithPassword`) nie
--    istnieje poza Supabase — Krok 4 podmieni logikę logowania w
--    lib/auth/admin-auth.ts na sprawdzanie `password_hash` (np. bcrypt)
--    zamiast Supabase Auth. Kolumna jest już tutaj, żeby Krok 4 nie
--    wymagał kolejnej migracji schematu.
--
-- 3. Poza tym: identyczne tabele, kolumny, typy, wartości domyślne i
--    ograniczenia (check/unique) jak w Supabase — łącznie z wierszami
--    singleton ('global') dla seo_settings i homepage_content.
--
-- Idempotentny — bezpieczny do wielokrotnego uruchomienia
-- (`create table if not exists`, `on conflict do nothing`).

create extension if not exists "pgcrypto";

-- ============================================================
-- ADMIN IDENTITY (zamiennik admin_profiles + auth.users)
-- ============================================================

create table if not exists admin_users (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  display_name text not null,
  role text not null default 'admin' check (role in ('admin', 'editor')),
  -- Wypełniane w Kroku 4 (własny system logowania). NULL do tego czasu.
  password_hash text,
  created_at timestamptz not null default now()
);

-- ============================================================
-- AUDIT LOG (spec §22)
-- ============================================================

create table if not exists audit_log (
  id uuid primary key default gen_random_uuid(),
  actor_email text not null,
  entity_type text not null,
  entity_id text not null,
  action text not null check (action in ('create', 'update', 'delete', 'publish', 'unpublish')),
  summary text not null,
  created_at timestamptz not null default now()
);

create index if not exists audit_log_created_at_idx on audit_log (created_at desc);
create index if not exists audit_log_entity_idx on audit_log (entity_type, entity_id);

-- ============================================================
-- OFFERS (spec §5)
-- ============================================================

create table if not exists offers (
  id uuid primary key default gen_random_uuid(),
  product_name text not null,
  model text not null,
  price_cents integer,
  installment_cents integer,
  installment_months integer,
  description text not null default '',
  image_media_id uuid,
  cta_label text not null default 'Umów bezpłatną prezentację',
  cta_href text not null default '/prezentacja',
  bonuses text[] not null default '{}',
  conditions text not null default '',
  starts_at date,
  ends_at date,
  is_active boolean not null default false,
  is_primary boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  updated_by text
);

-- Tylko jedna oferta "primary" naraz — identycznie jak w Supabase.
create unique index if not exists offers_single_primary
  on offers ((is_primary))
  where is_primary = true;

create index if not exists offers_active_idx on offers (is_active);

-- ============================================================
-- PROMOTIONS (spec §6)
-- ============================================================

create table if not exists promotions (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  short_description text not null default '',
  full_description text not null default '',
  image_media_id uuid,
  cta_label text not null default 'Sprawdź szczegóły',
  cta_href text not null default '/prezentacja',
  starts_at date not null,
  ends_at date not null,
  priority integer not null default 0,
  is_draft boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  updated_by text
);

create index if not exists promotions_draft_idx on promotions (is_draft);

-- ============================================================
-- CMS PAGES (spec §7)
-- ============================================================

create table if not exists cms_pages (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  content text not null default '',
  status text not null default 'draft' check (status in ('draft', 'published')),
  seo_title text,
  seo_description text,
  og_image_media_id uuid,
  canonical_path text,
  indexable boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  updated_by text
);

create index if not exists cms_pages_status_idx on cms_pages (status);

-- ============================================================
-- LOCATIONS (spec §8) — mirror types/location.ts
-- ============================================================

create table if not exists locations (
  location_id text primary key,
  name text not null,
  name_locative text,
  slug text not null,
  unit_type text not null check (unit_type in ('wojewodztwo', 'powiat', 'gmina', 'miasto', 'miejscowosc')),
  wojewodztwo_slug text,
  powiat_slug text,
  gmina_slug text,
  region text,
  population integer,
  population_source text,
  lat double precision,
  lng double precision,
  neighbor_slugs text[] not null default '{}',
  larger_city_slug text,
  aga_serves_location boolean not null default true,
  seo_priority integer not null default 50,
  tier text not null check (tier in ('A', 'B', 'C', 'long-tail')),
  indexable boolean not null default false,
  robots text,
  canonical_path text,
  in_sitemap boolean not null default false,
  content_status text not null default 'not_started' check (content_status in ('not_started', 'draft', 'published', 'thin', 'retired')),
  url_path text not null,
  local_facts text[] not null default '{}',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  updated_by text,
  unique (url_path)
);

create index if not exists locations_unit_type_idx on locations (unit_type);
create index if not exists locations_wojewodztwo_idx on locations (wojewodztwo_slug);
create index if not exists locations_powiat_idx on locations (powiat_slug);
create index if not exists locations_tier_idx on locations (tier);
create index if not exists locations_slug_idx on locations (slug);

-- ============================================================
-- BLOG (spec §9)
-- ============================================================

create table if not exists blog_categories (
  slug text primary key,
  label text not null
);

create table if not exists blog_posts (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  excerpt text not null default '',
  content text not null default '',
  category text references blog_categories (slug),
  cluster text not null default 'thermomix-miasto',
  -- Odwołuje się do locations.location_id (stabilny identyfikator — patrz
  -- types/location.ts). Nazwa kolumny została po staremu (related_location_slug)
  -- z powodów historycznych/aplikacyjnych — kod zawsze traktuje jej wartość
  -- jako location_id (patrz getLocationById w lib/locations/index.ts).
  related_location_slug text references locations (location_id),
  cover_image_media_id uuid,
  author text not null default 'aga-horche',
  status text not null default 'draft' check (status in ('draft', 'published')),
  indexable boolean not null default true,
  seo_title text,
  seo_description text,
  published_at timestamptz,
  scheduled_for timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  updated_by text
);

create index if not exists blog_posts_status_idx on blog_posts (status);
create index if not exists blog_posts_category_idx on blog_posts (category);
create index if not exists blog_posts_location_idx on blog_posts (related_location_slug);

-- ============================================================
-- FAQ (spec §10)
-- ============================================================

create table if not exists faqs (
  id uuid primary key default gen_random_uuid(),
  question text not null,
  answer text not null,
  priority integer not null default 0,
  active boolean not null default true,
  entity_type text not null check (entity_type in ('page', 'product', 'city', 'article', 'aga-club', 'global')),
  entity_id text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists faqs_entity_idx on faqs (entity_type, entity_id);

-- ============================================================
-- MEDIA (spec §11)
-- ============================================================

create table if not exists media_assets (
  id uuid primary key default gen_random_uuid(),
  file_name text not null,
  url text not null,
  alt_text text not null default '',
  -- 'supabase' zostaje na liście dopuszczalnych wartości do czasu Kroku 3
  -- (zamiennik przechowywania zdjęć) i Kroku 5 (migracja istniejących
  -- zdjęć) — część istniejących wierszy będzie jeszcze wskazywać na pliki
  -- w Supabase Storage aż do ich fizycznego przeniesienia.
  storage_provider text not null check (storage_provider in ('local', 'supabase')),
  size_bytes integer not null default 0,
  mime_type text not null default 'application/octet-stream',
  created_at timestamptz not null default now(),
  uploaded_by text
);

-- ============================================================
-- SEO SETTINGS (spec §12) — wiersz singleton, id = 'global'
-- ============================================================

create table if not exists seo_settings (
  id text primary key default 'global' check (id = 'global'),
  site_title text not null default 'Aga Horche — Przedstawicielka Thermomix',
  site_description text not null default '',
  og_image_media_id uuid,
  favicon_media_id uuid,
  robots_default text not null default 'index,follow' check (robots_default in ('index,follow', 'noindex,follow')),
  sitemap_enabled boolean not null default true,
  updated_at timestamptz not null default now(),
  updated_by text
);

insert into seo_settings (id) values ('global') on conflict (id) do nothing;

-- ============================================================
-- HOMEPAGE CONTENT (Aga Admin: /admin/strona-glowna) — wiersz singleton
-- ============================================================

create table if not exists homepage_content (
  id text primary key default 'global' check (id = 'global'),
  hero_headline text not null default 'Przedstawiciel Thermomix® w Bochni i Małopolsce – Thermomix TM7',
  hero_description text not null default 'Aga Horche – oficjalna przedstawicielka Thermomix®. Umów bezpłatną i niezobowiązującą prezentację Thermomix TM7 w Bochni, Krakowie, Brzesku, Wieliczce, Niepołomicach i okolicy. Zobacz urządzenie na żywo, poznaj jego możliwości, aktualną cenę i dostępne formy finansowania.',
  hero_image_media_id uuid references media_assets (id) on delete set null,
  service_area_intro text not null default 'Obsługuję klientów w całej Polsce — na miejscu jestem najczęściej w Małopolsce.',
  service_area_image_media_id uuid references media_assets (id) on delete set null,
  service_area_cities text[] not null default array['Kraków', 'Bochnia', 'Brzesko', 'Tarnów', 'Wieliczka', 'Niepołomice', 'Dobczyce', 'Limanowa'],
  instagram_reel_urls text[] not null default '{}',
  updated_at timestamptz not null default now(),
  updated_by text
);

insert into homepage_content (id) values ('global') on conflict (id) do nothing;

-- ============================================================
-- LEADS (spec §13)
-- ============================================================

create table if not exists leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  phone text not null,
  email text not null,
  city text not null,
  preferred_date text,
  message text,
  presentation_type text,
  consent_processing boolean not null,
  consent_marketing boolean not null default false,
  source text not null,
  source_path text not null,
  utm jsonb,
  status text not null default 'NEW' check (status in ('NEW', 'CONTACTED', 'PRESENTATION_BOOKED', 'SOLD', 'LOST'))
);

create index if not exists leads_status_idx on leads (status);
create index if not exists leads_created_at_idx on leads (created_at desc);

-- ============================================================
-- AGA CLUB — fundament (spec §14)
-- ============================================================

create table if not exists aga_club_members (
  id uuid primary key default gen_random_uuid(),
  display_name text not null,
  email text not null unique,
  tier text not null default 'free' check (tier in ('free', 'premium')),
  created_at timestamptz not null default now()
);

create table if not exists aga_club_challenge_days (
  day integer primary key check (day between 1 and 30),
  task text not null default '',
  tip text not null default '',
  video_url text,
  active boolean not null default false,
  updated_at timestamptz not null default now()
);

-- ============================================================
-- CLIENT ZONE — "Strefa Klienta" (ETAP 7, 19 sierpnia 2026)
-- ============================================================
-- Real, registered end users of /strefa-klienta — separate identity space
-- from admin_users (Aga Admin) on purpose: a client account must never be
-- able to reach /admin, and vice versa, so they don't share a table or a
-- session cookie (see lib/auth/client-auth.ts vs lib/auth/admin-auth.ts).

create table if not exists client_users (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  password_hash text not null,
  display_name text not null,
  phone text,
  consent_processing boolean not null,
  consent_marketing boolean not null default false,
  created_at timestamptz not null default now()
);

create index if not exists client_users_email_idx on client_users (lower(email));

-- ============================================================
-- USTAWIENIA FINANSOWANIA (1 września 2026)
-- ============================================================
-- Jeden wiersz, jak seo_settings. Powstało, bo raty 0% to promocja
-- Vorwerk, która wraca i znika, a wcześniej ta informacja była wpisana
-- w kod (data/finansowanie/dostepnosc.ts) — każda zmiana promocji
-- wymagała wgrania pliku i przebudowania obrazu. Aga przełącza to teraz
-- sama w /admin/ustawienia.
--
-- `raty_zero_dostepne = false` sprawia, że kalkulator otwiera się na
-- wariancie 0,6%, kafelek 0% dostaje plakietkę „chwilowo niedostępne",
-- a nad kalkulatorem i na /finansowanie pojawia się komunikat z kolumny
-- `raty_zero_komunikat`. Hasło „Raty 0%" zostaje w menu i w treściach —
-- promocja wraca, a to jest fraza, której ludzie szukają.

create table if not exists financing_settings (
  id text primary key default 'global' check (id = 'global'),
  raty_zero_dostepne boolean not null default false,
  raty_zero_komunikat text not null default 'W tej chwili raty 0% nie obowiązują — dostępne jest finansowanie z ratą 0,6% miesięcznie. Promocje 0% wracają okresowo: zajrzyj tu za jakiś czas albo napisz do mnie, a dam znać, kiedy będą.',
  updated_at timestamptz not null default now(),
  updated_by text
);

insert into financing_settings (id) values ('global') on conflict (id) do nothing;

-- ============================================================
-- PORADNIK (1 września 2026)
-- ============================================================
-- Jeden typ treści dla ośmiu działów poradnika Aga Club: czyszczenie
-- Thermomixa, triki na czas, co można zamrozić, kuchenny SOS, dlaczego
-- mi nie wyszło, kuchenny słownik, baza podstaw i domowe sposoby.
--
-- DLACZEGO JEDNA TABELA, A NIE OSIEM. Z punktu widzenia bazy te działy
-- niczym się nie różnią — mają tytuł, zdanie wprowadzenia i treść. Osiem
-- tabel oznaczałoby osiem formularzy w panelu i osiem miejsc do zmiany
-- przy każdej poprawce. Lista działów jest stała i mieszka w kodzie
-- (types/poradnik.ts), bo nowy dział to decyzja projektowa, nie wpis.
--
-- `wlasne` rozróżnia treść Agi od wgranej wiedzy ogólnej — panel pokazuje
-- przy tej drugiej znacznik „do przepisania własnymi słowami”.

create table if not exists poradnik_wpisy (
  id uuid primary key default gen_random_uuid(),
  dzial text not null,
  slug text not null unique,
  tytul text not null,
  lead text not null default '',
  tresc text not null default '',
  przepis_id text,
  wlasne boolean not null default true,
  opublikowany boolean not null default true,
  kolejnosc integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists poradnik_dzial_idx on poradnik_wpisy (dzial, kolejnosc);

-- 1.09.2026 — wyzwanie „30 dni z Thermomixem" dostało treść startową.
-- `przepis_id` wiąże dzień z konkretnym przepisem z rejestru (wyzwanie mówi
-- CO ugotować, przepis na Cookidoo mówi JAK — nie przepisujemy ustawień
-- urządzenia). `wlasne` odróżnia treść Agi od wgranego planu do przepisania,
-- tak samo jak w tabeli poradnik_wpisy.
alter table aga_club_challenge_days add column if not exists przepis_id text;
alter table aga_club_challenge_days add column if not exists wlasne boolean not null default true;
