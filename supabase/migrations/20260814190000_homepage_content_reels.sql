-- ============================================================
-- HOMEPAGE CONTENT: Instagram reel links for the "Zostań ze mną na dłużej"
-- module (spec §41: Aga manages this herself, same pattern as
-- service_area_cities). Up to the first 4 render — see SocialFollowSection.
-- ============================================================

alter table homepage_content
  add column if not exists instagram_reel_urls text[] not null default '{}';
