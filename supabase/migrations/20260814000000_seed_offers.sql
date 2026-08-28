-- Seeds Aga's real, confirmed launch offers (2026-08-14) into `offers`.
-- Mirrors data/offers/seed.ts (the in-memory dev fallback) so a fresh
-- Supabase project starts with correct live pricing instead of an empty
-- state. Every value here was explicitly confirmed by Aga — not invented
-- (spec §42). Idempotent: safe to re-run, upserts by fixed id.

insert into offers (
  id, product_name, model, price_cents, installment_cents, installment_months,
  description, cta_label, cta_href, bonuses, conditions,
  is_active, is_primary
) values
  (
    '00000000-0000-4000-8000-00000000a001',
    'Thermomix TM7', 'TM7', 666900, null, null,
    'Podstawowy zestaw Thermomix TM7 — zobacz na bezpłatnej prezentacji, jak działa na żywo.',
    'Umów bezpłatną prezentację', '/prezentacja', '{}',
    'Cena orientacyjna — dokładne warunki i dostępne bonusy Aga potwierdza podczas prezentacji.',
    true, true
  ),
  (
    '00000000-0000-4000-8000-00000000a002',
    'Thermomix TM7 z Nester', 'TM7', 671500, null, null,
    'Thermomix TM7 w zestawie z Nester — dodatkowym akcesorium do przygotowywania potraw.',
    'Sprawdź szczegóły', '/prezentacja', '{"Nester w zestawie"}',
    'Cena orientacyjna — dokładne warunki i dostępne bonusy Aga potwierdza podczas prezentacji.',
    true, false
  ),
  (
    '00000000-0000-4000-8000-00000000a003',
    'Thermomix TM7 + Akcesoria', 'TM7', null, null, null,
    'Thermomix TM7 rozszerzony o pakiet dodatkowych akcesoriów — zestaw dopasowany podczas prezentacji.',
    'Sprawdź szczegóły', '/prezentacja', '{}',
    'Skład zestawu i cena ustalane indywidualnie z Agą.',
    true, false
  ),
  (
    '00000000-0000-4000-8000-00000000a004',
    'Thermomix TM7 w 36 ratach 0%', 'TM7', 666900, 15747, 36,
    'Thermomix TM7 rozłożony na 36 rat 0% — RRSO 0%, bez dodatkowych kosztów finansowania.',
    'Sprawdź szczegóły', '/finansowanie', '{"RATY 0%","RRSO 0%"}',
    'Rata orientacyjna przy wpłacie własnej 1000 zł — szczegółowe warunki finansowania zależą od aktualnej oferty oraz decyzji instytucji finansującej.',
    true, false
  )
on conflict (id) do update set
  product_name = excluded.product_name,
  model = excluded.model,
  price_cents = excluded.price_cents,
  installment_cents = excluded.installment_cents,
  installment_months = excluded.installment_months,
  description = excluded.description,
  cta_label = excluded.cta_label,
  cta_href = excluded.cta_href,
  bonuses = excluded.bonuses,
  conditions = excluded.conditions,
  is_active = excluded.is_active,
  is_primary = excluded.is_primary,
  updated_at = now();
