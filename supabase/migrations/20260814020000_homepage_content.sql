-- ============================================================
-- HOMEPAGE CONTENT (Aga Admin: /admin/strona-glowna) — singleton row,
-- same shape as seo_settings. Lets Aga edit the hero and "Gdzie pracuje
-- Aga" copy/photos herself instead of needing a code change.
-- ============================================================

create table if not exists homepage_content (
  id text primary key default 'global' check (id = 'global'),
  hero_headline text not null default 'Poznaj Thermomix® TM7',
  hero_description text not null default 'Zobacz Thermomix® TM7 na żywo, poznaj aktualną ofertę i sprawdź, jak może ułatwić codzienne gotowanie.',
  hero_image_media_id uuid references media_assets(id) on delete set null,
  service_area_intro text not null default 'Obsługuję klientów w całej Polsce — na miejscu jestem najczęściej w Małopolsce.',
  service_area_image_media_id uuid references media_assets(id) on delete set null,
  service_area_cities text[] not null default array['Kraków', 'Bochnia', 'Brzesko', 'Tarnów', 'Wieliczka', 'Niepołomice', 'Dobczyce', 'Limanowa'],
  updated_at timestamptz not null default now(),
  updated_by text
);

alter table homepage_content enable row level security;

create policy "public can read homepage content"
  on homepage_content for select
  using (true);

create policy "admins can manage homepage content"
  on homepage_content for all
  using (exists (select 1 from admin_profiles where id = auth.uid()))
  with check (exists (select 1 from admin_profiles where id = auth.uid()));

insert into homepage_content (id) values ('global') on conflict (id) do nothing;
