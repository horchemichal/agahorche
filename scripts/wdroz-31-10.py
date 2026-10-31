#!/usr/bin/env python3
"""
Wdrożenie 31.10.2026 — część 2 (po scripts/usun-lodowke.py i scripts/gen-4-poradniki.py):
przekierowanie po usuniętym module lodówki, porządek w komentarzach Aga Club,
4 trasy nowych poradników, sitemap, llms.txt, nawigacja.

Każde podstawienie musi trafić dokładnie raz — inaczej STOP przed zapisem.
Uruchomienie z katalogu głównego repozytorium:  python3 scripts/wdroz-31-10.py
"""
import os, sys

STRONY = [
    ("thermomix-odstapienie-od-umowy", "/thermomix/odstapienie-od-umowy"),
    ("thermomix-jadlospis-na-tydzien", "/thermomix/jadlospis-na-tydzien"),
    ("thermomix-czego-nie-zrobi", "/thermomix/czego-nie-zrobi"),
    ("thermomix-gotowanie-na-zapas", "/thermomix/gotowanie-na-zapas"),
]

zmiany = {}
def czytaj(p):
    if p not in zmiany:
        zmiany[p] = open(p, encoding="utf8").read()
    return zmiany[p]

def podmien(p, stary, nowy):
    s = czytaj(p)
    n = s.count(stary)
    if n != 1:
        sys.exit(f"STOP: {p}: fragment wystąpił {n} raz(y), oczekiwano 1:\n{stary[:140]!r}")
    zmiany[p] = s.replace(stary, nowy)

# 1) przekierowanie
podmien("next.config.ts",
'''  experimental: {
    // Default 1MB is too small for admin media uploads (spec §11).''',
'''  // 31.10.2026: moduł „Co mam w lodówce?” usunięty (opierał się na listach
  // składników pobranych z Cookidoo). Adres był w indeksie Google, więc
  // przenosimy go na stałe na wyszukiwarkę przepisów zamiast zostawiać 404.
  async redirects() {
    return [
      { source: "/przepisy/co-mam-w-lodowce", destination: "/przepisy", permanent: true },
    ];
  },
  experimental: {
    // Default 1MB is too small for admin media uploads (spec §11).''')

# 2) Aga Club: komentarze i nieużywana ikona
P = "data/aga-club/pozycje-klubu.ts"
podmien(P,
'''   * /diety/keto ma podświetlić „Diety". Wyjątkiem jest /przepisy, które
   * dopasowuje się dokładnie, bo /przepisy/co-mam-w-lodowce jest osobną
   * pozycją i podświetlenie obu naraz byłoby mylące.''',
'''   * /diety/keto ma podświetlić „Diety". Wyjątkiem jest /przepisy, które
   * dopasowuje się dokładnie (dawniej obok stała osobna pozycja
   * /przepisy/co-mam-w-lodowce — usunięta 31.10.2026).''')
podmien(P, ''' * /przepisy/co-mam-w-lodowce podświetla „Lodówkę", a nie „Co ugotować?".''',
           ''' * /diety/keto podświetla „Diety", a nie żadną krótszą pozycję.''')
podmien(P, "  CartIcon,\n", "")

# 3) sitemap
podmien("app/sitemap.ts",
        '  { path: "/thermomix/lidlomix-czy-thermomix", priority: 0.75, changeFrequency: "monthly" },\n',
        '  { path: "/thermomix/lidlomix-czy-thermomix", priority: 0.75, changeFrequency: "monthly" },\n'
        + "".join(f'  {{ path: "{pa}", priority: 0.75, changeFrequency: "monthly" }},\n' for _, pa in STRONY))

# 4) llms.txt
a = '- [Jak kupić Thermomix](${U}/jak-kupic-thermomix) i [finansowanie / raty](${U}/finansowanie)\n'
podmien("app/llms.txt/route.ts", a, a +
    '- [Odstąpienie od umowy po prezentacji](${U}/thermomix/odstapienie-od-umowy): 14 dni od dostawy, 30 dni tylko przy wizycie nieumówionej, raty i kredyt powiązany\n'
    '- [Czego Thermomix nie zrobi](${U}/thermomix/czego-nie-zrobi): uczciwa lista ograniczeń przed zakupem\n'
    '- [Jak ułożyć jadłospis na tydzień](${U}/thermomix/jadlospis-na-tydzien): metoda planowania 4–5 obiadów, lista zakupów\n'
    '- [Gotowanie na zapas](${U}/thermomix/gotowanie-na-zapas): co gotować hurtem, w jakiej kolejności, Varoma\n')

# 5) nawigacja: menu „Thermomix” (1. wystąpienie) i stopka (2. wystąpienie)
N = "data/nav.ts"
s = czytaj(N)
WADY = '      { label: "Wady i zalety", href: "/thermomix/wady-i-zalety" },\n'
CZEGO = '      { label: "Czego Thermomix nie zrobi", href: "/thermomix/czego-nie-zrobi" },\n'
KUPIC = '      { label: "Jak kupić Thermomixa", href: "/jak-kupic-thermomix" },\n'
MYC = '      { label: "Jak myć Thermomix", href: "/thermomix/mycie-i-obsluga" },\n'
if s.count(WADY) != 2 or s.count(KUPIC) != 2 or s.count(MYC) != 1:
    sys.exit(f"STOP: {N}: nieoczekiwany układ (wady={s.count(WADY)}, kupić={s.count(KUPIC)}, myć={s.count(MYC)})")
s = s.replace(WADY, WADY + CZEGO)                       # oba wystąpienia: menu i stopka
i = s.index(KUPIC); j = s.index(KUPIC, i + 1)           # tylko stopka (drugie)
s = s[:j + len(KUPIC)] + '      { label: "Odstąpienie od umowy", href: "/thermomix/odstapienie-od-umowy" },\n' + s[j + len(KUPIC):]
s = s.replace(MYC, MYC + '      { label: "Jadłospis na tydzień", href: "/thermomix/jadlospis-na-tydzien" },\n'
                        '      { label: "Gotowanie na zapas", href: "/thermomix/gotowanie-na-zapas" },\n')
zmiany[N] = s

# 6) trasy
for slug, path in STRONY:
    d = "app/(site)" + path
    if os.path.exists(d + "/page.tsx"):
        sys.exit(f"STOP: trasa już istnieje: {d}")
    if not os.path.exists(f"content/poradniki/{slug}.md"):
        sys.exit(f"STOP: brak treści content/poradniki/{slug}.md — najpierw gen-4-poradniki.py")

# zapis — wszystko albo nic
for p, s in zmiany.items():
    open(p, "w", encoding="utf8").write(s)
for slug, path in STRONY:
    d = "app/(site)" + path
    os.makedirs(d, exist_ok=True)
    open(d + "/page.tsx", "w", encoding="utf8").write(
        'import { PoradnikPage, poradnikMetadata } from "@/components/poradnik/poradnik-page";\n\n'
        f'export const generateMetadata = () => poradnikMetadata("{slug}");\n\n'
        'export default function Page() {\n'
        f'  return <PoradnikPage slug="{slug}" />;\n'
        '}\n')
print(f"zmienione pliki: {len(zmiany)}, nowe trasy: {len(STRONY)}")
