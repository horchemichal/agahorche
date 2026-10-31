#!/usr/bin/env python3
"""
Usunięcie list zakupów z diet. Decyzja Michała z 31.10.2026: „Usuń listy zakupów”.

DLACZEGO: data/diets/shopping-lists.ts powstał ze składników przepisów
Cookidoo (nagłówek pliku: „Derived from the day-1 recipes in ./recipes.ts”).
To ta sama kategoria danych co usunięte 31.10 skladniki.ts — listy produktów
pochodzące z Cookidoo. Zostają nazwy przepisów z linkami do Cookidoo.

CO ROBI:
- usuwa dane, komponent listy, generator PDF i trasę /api/diety/shopping-list-pdf,
- wyjmuje listę z podglądu jadłospisu (strona diety i Strefa Klienta),
- poprawia wszystkie teksty, które obiecywały listę zakupów — żeby strona
  nie zapowiadała czegoś, czego już nie ma.

NIE RUSZA: wzmianek o listach zakupów w Cookidoo (to funkcja Cookidoo,
nie nasza), poradnika o jadłospisie (metoda, lista pisana samodzielnie),
treści stron miast i wpisów poradnika w bazie.

Każde podstawienie musi trafić dokładnie raz — inaczej STOP przed zapisem.
Uruchomienie z katalogu głównego repozytorium:  python3 scripts/usun-listy-zakupow.py
"""
import os, sys

USUN = [
    "data/diets/shopping-lists.ts",
    "components/diets/shopping-list.tsx",
    "lib/diets/shopping-list-pdf.ts",
    "app/api/diety/shopping-list-pdf/route.ts",
]

P = [
    # podgląd jadłospisu — sam komponent
    ("components/diets/diet-plan-preview.tsx",
     'import { ShoppingList } from "./shopping-list";\n', ""),
    ("components/diets/diet-plan-preview.tsx",
     "\n      {!isLocked && hasContent && <ShoppingList planId={plan.id} />}\n", "\n"),
    ("components/diets/diet-plan-preview.tsx",
     " * w podsumowaniu. Filtrujemy na wejściu, więc sumy dnia, widok tygodnia\n"
     " * i lista zakupów liczą się już z przyciętego planu — same z siebie,\n",
     " * w podsumowaniu. Filtrujemy na wejściu, więc sumy dnia i widok tygodnia\n"
     " * liczą się już z przyciętego planu — same z siebie,\n"),
    # teksty obiecujące listę zakupów
    ("app/(site)/strefa-klienta/rejestracja/page.tsx",
     "Pełne plany diet na 7 dni, listy zakupów i eksport do PDF — bez umawiania prezentacji.",
     "Pełne plany diet na 7 dni i eksport do PDF — bez umawiania prezentacji."),
    ("app/(site)/strefa-klienta/logowanie/page.tsx",
     "Zaloguj się, aby zobaczyć pełne plany diet i listy zakupów.",
     "Zaloguj się, aby zobaczyć pełne plany diet."),
    ("app/(site)/strefa-klienta/page.tsx",
     "z linkiem do każdego przepisu na Cookidoo i listą zakupów.",
     "z linkiem do każdego przepisu na Cookidoo."),
    ("app/(site)/diety/page.tsx",
     "Gotowy plan i lista zakupów pozwalają zaoszczędzić czas i uniknąć stresu.",
     "Gotowy plan na cały tydzień pozwala zaoszczędzić czas i uniknąć stresu."),
    ("app/(site)/przepisy/page.tsx",
     "bezglutenowa, dla dzieci i sześć innych — razem z listą zakupów i możliwością\n",
     "bezglutenowa, dla dzieci i sześć innych — z możliwością\n"),
    ("components/diets/diet-category-page.tsx",
     "Pełny plan — siedem dni, oba warianty kaloryczne i lista zakupów — czeka w",
     "Pełny plan — siedem dni i oba warianty kaloryczne — czeka w"),
    ("components/diets/diet-configurator.tsx",
     " * 14 dni, drugi wariant kaloryczny, listy zakupów — zostaje w Aga Club.",
     " * 14 dni, drugi wariant kaloryczny — zostaje w Aga Club."),
    ("components/diets/diet-configurator.tsx",
     "Wszystkie diety — pełne siedem dni, warianty 1500 i 2000 kcal oraz listy\n"
     "                zakupów — są dostępne",
     "Wszystkie diety — pełne siedem dni oraz warianty 1500 i 2000 kcal — są\n"
     "                dostępne"),
    ("components/diets/client-zone-teaser.tsx", '  "lista zakupów",\n', ""),
    ("components/diets/client-zone-teaser.tsx",
     "1500 i 2000 kcal, listy zakupów oraz pozostałe narzędzia klubu.",
     "1500 i 2000 kcal oraz pozostałe narzędzia klubu."),
    ("data/diets/faq.ts",
     "warianty 7 i 14 dni, kaloryczności 1500 i 2000 kcal oraz lista zakupów na cały tydzień — dostępna",
     "warianty 7 i 14 dni oraz kaloryczności 1500 i 2000 kcal — dostępna"),
    ("data/aga-club/pozycje-klubu.ts",
     'opis: "Pełne jadłospisy 7 i 14 dni z listą zakupów.",',
     'opis: "Pełne jadłospisy na 7 i 14 dni.",'),
    ("data/locations/city-content.ts",
     'label: "Jadłospisy i listy zakupów — bezpłatny PDF"',
     'label: "Jadłospisy diet — bezpłatny PDF"'),
    ("lib/diets/jadlospis-pdf.ts",
     "warianty 14-dniowe i listy zakupów przekazuję wyłącznie",
     "warianty 14-dniowe przekazuję wyłącznie"),
    # komentarze odsyłające do usuniętych plików
    ("lib/diets/jadlospis-pdf.ts",
     " * Silnik PDF i czcionki jak w lib/diets/shopping-list-pdf.ts — pdf-lib +\n",
     " * Silnik PDF: pdf-lib +\n"),
    ("app/api/diety/jadlospis-pdf/route.ts",
     " * dzięki temu zwykły `<a download>` wystarczy, bez JS-owego POST-a\n"
     " * (identycznie jak /api/diety/shopping-list-pdf).\n",
     " * dzięki temu zwykły `<a download>` wystarczy, bez JS-owego POST-a.\n"),
]

zmiany = {}
for p, stary, nowy in P:
    if p not in zmiany:
        zmiany[p] = open(p, encoding="utf8").read()
    n = zmiany[p].count(stary)
    if n != 1:
        sys.exit(f"STOP: {p}: fragment wystąpił {n} raz(y), oczekiwano 1:\n{stary[:140]!r}")
    zmiany[p] = zmiany[p].replace(stary, nowy)

for p in USUN:
    if not os.path.exists(p):
        sys.exit(f"STOP: brak pliku do usunięcia: {p}")

for p, s in zmiany.items():
    open(p, "w", encoding="utf8").write(s)
for p in USUN:
    os.remove(p)
d = "app/api/diety/shopping-list-pdf"
if os.path.isdir(d) and not os.listdir(d):
    os.rmdir(d)
print(f"usunięte pliki: {len(USUN)}, zmienione pliki: {len(zmiany)}")
