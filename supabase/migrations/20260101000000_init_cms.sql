-- Aga Admin — initial CMS schema.
--
-- How to apply:
--   supabase db push            (Supabase CLI, recommended)
--   or paste this file into the Supabase Dashboard SQL editor and run it.
--
-- Design notes:
-- - Every editorial table has created_at/updated_at and, where relevant,
--   updated_by (admin email) for a lightweight audit trail (spec §22).
--   audit_log below is the fuller history log.
-- - RLS is enabled on every table. Public (anon) reads are restricted to
--   published/active/indexable rows only; writes require an authenticated
--   admin (checked via the admin_profiles table). Service-role access
--   (used by Server Actions in this app) bypasses RLS by design — that's
--   the trusted server-side path.
-- - This mirrors, rather than replaces, the existing static data files —
--   locations_seed below is intentionally the SAME seed already reviewed
--   in /data/locations, so switching the app to read from Supabase doesn't
--   silently change what's public.

create extension if not exists "pgcrypto";

-- ============================================================
-- ADMIN IDENTITY
-- ============================================================

create table if not exists admin_profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  email text not null unique,
  display_name text not null,
  role text not null default 'admin' check (role in ('admin', 'editor')),
  created_at timestamptz not null default now()
);

alter table admin_profiles enable row level security;

create policy "admins can read own profile"
  on admin_profiles for select
  using (auth.uid() = id);

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

alter table audit_log enable row level security;

create policy "admins can read audit log"
  on audit_log for select
  using (exists (select 1 from admin_profiles where id = auth.uid()));

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

alter table offers enable row level security;

create policy "public can read active offers"
  on offers for select
  using (is_active = true);

create policy "admins can manage offers"
  on offers for all
  using (exists (select 1 from admin_profiles where id = auth.uid()))
  with check (exists (select 1 from admin_profiles where id = auth.uid()));

-- Only one primary offer at a time.
create unique index if not exists offers_single_primary
  on offers ((is_primary))
  where is_primary = true;

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

alter table promotions enable row level security;

create policy "public can read non-draft promotions"
  on promotions for select
  using (is_draft = false);

create policy "admins can manage promotions"
  on promotions for all
  using (exists (select 1 from admin_profiles where id = auth.uid()))
  with check (exists (select 1 from admin_profiles where id = auth.uid()));

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

alter table cms_pages enable row level security;

create policy "public can read published pages"
  on cms_pages for select
  using (status = 'published');

create policy "admins can manage pages"
  on cms_pages for all
  using (exists (select 1 from admin_profiles where id = auth.uid()))
  with check (exists (select 1 from admin_profiles where id = auth.uid()));

-- ============================================================
-- LOCATIONS (spec §8) — mirrors types/location.ts
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

alter table locations enable row level security;

create policy "public can read locations"
  on locations for select
  using (true);
  -- Locations are readable regardless of `indexable` (that flag only
  -- controls search engine indexing/sitemap inclusion, not app-level
  -- visibility — /miasta and /wojewodztwa intentionally list
  -- not-yet-indexable locations too). See lib/locations/index.ts.

create policy "admins can manage locations"
  on locations for all
  using (exists (select 1 from admin_profiles where id = auth.uid()))
  with check (exists (select 1 from admin_profiles where id = auth.uid()));

-- ============================================================
-- BLOG (spec §9)
-- ============================================================

create table if not exists blog_categories (
  slug text primary key,
  label text not null
);

alter table blog_categories enable row level security;

create policy "public can read categories"
  on blog_categories for select
  using (true);

create policy "admins can manage categories"
  on blog_categories for all
  using (exists (select 1 from admin_profiles where id = auth.uid()))
  with check (exists (select 1 from admin_profiles where id = auth.uid()));

create table if not exists blog_posts (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  excerpt text not null default '',
  content text not null default '',
  category text references blog_categories (slug),
  cluster text not null default 'thermomix-miasto',
  related_location_slug text references locations (slug),
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

alter table blog_posts enable row level security;

create policy "public can read published posts"
  on blog_posts for select
  using (status = 'published' and (published_at is null or published_at <= now()));

create policy "admins can manage posts"
  on blog_posts for all
  using (exists (select 1 from admin_profiles where id = auth.uid()))
  with check (exists (select 1 from admin_profiles where id = auth.uid()));

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

alter table faqs enable row level security;

create policy "public can read active faqs"
  on faqs for select
  using (active = true);

create policy "admins can manage faqs"
  on faqs for all
  using (exists (select 1 from admin_profiles where id = auth.uid()))
  with check (exists (select 1 from admin_profiles where id = auth.uid()));

-- ============================================================
-- MEDIA (spec §11)
-- ============================================================

create table if not exists media_assets (
  id uuid primary key default gen_random_uuid(),
  file_name text not null,
  url text not null,
  alt_text text not null default '',
  storage_provider text not null check (storage_provider in ('local', 'supabase')),
  size_bytes integer not null default 0,
  mime_type text not null default 'application/octet-stream',
  created_at timestamptz not null default now(),
  uploaded_by text
);

alter table media_assets enable row level security;

create policy "public can read media"
  on media_assets for select
  using (true);

create policy "admins can manage media"
  on media_assets for all
  using (exists (select 1 from admin_profiles where id = auth.uid()))
  with check (exists (select 1 from admin_profiles where id = auth.uid()));

-- ============================================================
-- SEO SETTINGS (spec §12) — singleton row, id = 'global'
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

alter table seo_settings enable row level security;

create policy "public can read seo settings"
  on seo_settings for select
  using (true);

create policy "admins can manage seo settings"
  on seo_settings for all
  using (exists (select 1 from admin_profiles where id = auth.uid()))
  with check (exists (select 1 from admin_profiles where id = auth.uid()));

insert into seo_settings (id) values ('global') on conflict (id) do nothing;

-- ============================================================
-- LEADS (spec §13) — upgrades the status enum used by /api/leads
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

alter table leads enable row level security;

-- No public select policy: leads are never publicly readable, only via the
-- service-role key from Server Actions/route handlers.
create policy "admins can read leads"
  on leads for select
  using (exists (select 1 from admin_profiles where id = auth.uid()));

create policy "admins can update leads"
  on leads for update
  using (exists (select 1 from admin_profiles where id = auth.uid()))
  with check (exists (select 1 from admin_profiles where id = auth.uid()));

-- ============================================================
-- AGA CLUB — light foundation only (spec §14)
-- ============================================================

create table if not exists aga_club_members (
  id uuid primary key default gen_random_uuid(),
  display_name text not null,
  email text not null unique,
  tier text not null default 'free' check (tier in ('free', 'premium')),
  created_at timestamptz not null default now()
);

alter table aga_club_members enable row level security;

create policy "admins can manage members"
  on aga_club_members for all
  using (exists (select 1 from admin_profiles where id = auth.uid()))
  with check (exists (select 1 from admin_profiles where id = auth.uid()));

create table if not exists aga_club_challenge_days (
  day integer primary key check (day between 1 and 30),
  task text not null default '',
  tip text not null default '',
  video_url text,
  active boolean not null default false,
  updated_at timestamptz not null default now()
);

alter table aga_club_challenge_days enable row level security;

create policy "public can read active challenge days"
  on aga_club_challenge_days for select
  using (active = true);

create policy "admins can manage challenge days"
  on aga_club_challenge_days for all
  using (exists (select 1 from admin_profiles where id = auth.uid()))
  with check (exists (select 1 from admin_profiles where id = auth.uid()));
