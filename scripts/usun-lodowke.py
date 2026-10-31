#!/usr/bin/env python3
"""
Usunięcie modułu „Co mam w lodówce?” razem z listami składników pobranymi
z Cookidoo (data/diets/skladniki.ts). Decyzja Michała z 30.10.2026:
„Usuń listę produktów ze strony tak, żeby nie naruszało zasad Cookidoo”.

DLACZEGO CAŁY MODUŁ, A NIE TYLKO UKRYCIE WYNIKÓW: komponent jest kliencki
(„use client”) i importuje SKLADNIKI — cała baza składników 252 przepisów
trafiała do publicznego pakietu JS, niezależnie od logowania. Bramka
logowania chowała tylko interfejs, nie dane.

ZASADY: każde podstawienie musi trafić dokładnie tyle razy, ile oczekujemy,
inaczej skrypt przerywa PRZED zapisaniem czegokolwiek.

Uruchomienie z katalogu głównego repozytorium:  python3 scripts/usun-lodowke.py
"""
import os, re, sys

USUN = [
    "data/diets/skladniki.ts",
    "lib/przepisy/lodowka.ts",
    "lib/przepisy/produkty.ts",
    "components/przepisy/lodowka.tsx",
    "app/(site)/przepisy/co-mam-w-lodowce/page.tsx",
]

NOWY_LINK = '{ href: "/thermomix/jadlospis-na-tydzien", label: "Jak ułożyć jadłospis na tydzień" }'

# (plik, stary_fragment, nowy_fragment, oczekiwana_liczba)
PODSTAWIENIA = [
    ("app/sitemap.ts",
     '  { path: "/przepisy/co-mam-w-lodowce", priority: 0.7, changeFrequency: "weekly" },\n', "", 1),
    ("app/manifest.ts",
     '      { name: "Co mam w lodówce?", short_name: "Lodówka", url: "/przepisy/co-mam-w-lodowce" },\n', "", 1),
    ("data/nav.ts",
     '      { label: "Co mam w lodówce?", href: "/przepisy/co-mam-w-lodowce" },\n', "", 1),
    ("app/(site)/poradnik/page.tsx",
     '            <ButtonLink href="/przepisy/co-mam-w-lodowce" variant="outline" className="bg-neutral-0">\n'
     '              Co mam w lodówce?\n'
     '            </ButtonLink>\n', "", 1),
    ("app/(site)/poradnik/page.tsx",
     '            Wyszukiwarka „Co ugotować dzisiaj?” pyta o czas, liczbę osób i rodzaj dania.\n'
     '            A jeśli chcesz ugotować z tego, co już masz — sprawdź „Co mam w lodówce?”.\n',
     '            Wyszukiwarka „Co ugotować dzisiaj?” pyta o czas, liczbę osób i rodzaj dania.\n', 1),
    ("data/aga-club/pozycje-klubu.ts",
     '  {\n'
     '    href: "/przepisy/co-mam-w-lodowce",\n'
     '    ikona: CartIcon,\n'
     '    tytul: "Co mam w lodówce?",\n'
     '    krotki: "Lodówka",\n'
     '    opis: "Zaznacz produkty, zobacz, co da się z nich zrobić.",\n'
     '    prefiksy: ["/przepisy/co-mam-w-lodowce"],\n'
     '  },\n', "", 1),
    # Kafel w klubie: flaga na false chowa go uczciwie zamiast linku w próżnię.
    ("data/aga-club/features.ts", "  mojaLodowka: true,\n",
     "  // 31.10.2026: moduł usunięty — opierał się na listach składników pobranych\n"
     "  // z Cookidoo. Flaga zostaje na false, kafel znika z /aga-club.\n"
     "  mojaLodowka: false,\n", 1),
    ("data/aga-club/features.ts", '    href: "/przepisy/co-mam-w-lodowce",\n', '    href: "/przepisy",\n', 1),
]


def main():
    zmiany = {}
    def czytaj(p):
        if p not in zmiany:
            zmiany[p] = open(p, encoding="utf8").read()
        return zmiany[p]

    for p, stary, nowy, ile in PODSTAWIENIA:
        s = czytaj(p)
        n = s.count(stary)
        if n != ile:
            sys.exit(f"STOP: {p}: fragment wystąpił {n} raz(y), oczekiwano {ile}:\n{stary[:120]!r}")
        zmiany[p] = s.replace(stary, nowy)

    # Miasta: każdy obiekt linku do lodówki → link do jadłospisu tygodniowego.
    wzorzec = re.compile(r'\{ href: "/przepisy/co-mam-w-lodowce", label: "[^"]*" \}')
    katalog = "data/locations/cities"
    miasta = 0
    for f in sorted(os.listdir(katalog)):
        p = os.path.join(katalog, f)
        s = open(p, encoding="utf8").read()
        if "co-mam-w-lodowce" not in s:
            continue
        nowe, n = wzorzec.subn(NOWY_LINK, s)
        if "co-mam-w-lodowce" in nowe:
            sys.exit(f"STOP: {p}: zostało odwołanie w nietypowej formie — sprawdź ręcznie")
        zmiany[p] = nowe
        miasta += n

    for p in USUN:
        if not os.path.exists(p):
            sys.exit(f"STOP: brak pliku do usunięcia: {p}")

    # Dopiero teraz zapis — wszystko albo nic.
    for p, s in zmiany.items():
        open(p, "w", encoding="utf8").write(s)
    for p in USUN:
        os.remove(p)
    katalog_trasy = "app/(site)/przepisy/co-mam-w-lodowce"
    if os.path.isdir(katalog_trasy) and not os.listdir(katalog_trasy):
        os.rmdir(katalog_trasy)

    print(f"usunięte pliki: {len(USUN)}")
    print(f"zmienione pliki: {len(zmiany)} (w tym linki w miastach: {miasta})")


if __name__ == "__main__":
    main()
