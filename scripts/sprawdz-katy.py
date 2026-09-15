#!/usr/bin/env python3
"""Sprawdza kolizje katow redakcyjnych miedzy stronami miast.

UWAGA: grep -i NIE radzi sobie z polskimi znakami diakrytycznymi (L/l),
dlatego ten skrypt uzywa Pythona.

Zrodla, ktore przeszukuje (w tej kolejnosci dla kazdego pliku):
  1. PELNY blok "KAT:" z naglowka /** ... */ — nie tylko pierwsza linia.
     Wczesniejsza wersja skryptu czytala wylacznie linie zawierajaca
     "KAT:", wiec gubila caly opis kata przeniesiony do nastepnych linii.
  2. Gdy pliku nie ma linii "KAT:" (tak jest w ~188 najstarszych stronach
     malopolskich, pisanych przed wprowadzeniem konwencji) — naglowki
     i pierwsze akapity sekcji NIESTANDARDOWYCH, czyli tych, ktore nie sa
     wspolnym szkieletem (prezentacja / jak-umowic / rodzina / cena / raty
     / tm7 / co-ugotujesz / tradycyjne-gotowanie), plus blok `culinary`.
     Dzieki temu kolizje wykrywaja sie takze wobec tamtych stron.

Uzycie:
  python3 katy.py                       -> wypisz wszystko
  python3 katy.py "slowo" "inne slowo"  -> TAKEN/FREE dla kazdego slowa
"""
import sys
import glob
import re

STD = {
    "prezentacja", "jak-umowic", "rodzina", "cena", "raty", "tm7",
    "co-ugotujesz", "tradycyjne-gotowanie",
}


def kat_z_naglowka(src):
    """Pelny, wieloliniowy blok KAT: z komentarza naglowkowego."""
    for blok in re.findall(r"/\*\*(.*?)\*/", src, re.S):
        m = re.search(r"K[ĄA]T:\s*(.*?)(?=\n\s*\*\s*\n|\Z)", blok, re.S)
        if m:
            txt = re.sub(r"\n\s*\*\s*", " ", m.group(1))
            return re.sub(r"\s+", " ", txt).strip()
    return None


def kat_z_tresci(src):
    """Awaryjnie: naglowki i pierwsze akapity sekcji niestandardowych."""
    bez_naglowka = re.sub(r"/\*\*.*?\*/", "", src, flags=re.S)
    kawalki = []

    k = bez_naglowka.find("sections:")
    if k >= 0:
        czesci = re.split(r'\n\s*\{\s*\n\s*id:\s*"([^"]+)"', bez_naglowka[k:])
        for i in range(1, len(czesci), 2):
            sid, tresc = czesci[i], czesci[i + 1]
            if sid in STD:
                continue
            h = re.search(r'heading:\s*\n?\s*"([^"]+)"', tresc)
            if h:
                kawalki.append(h.group(1))
            akapity = re.search(r"paragraphs:\s*\[(.*?)\]", tresc, re.S)
            if akapity:
                pierwszy = re.search(r'"((?:[^"\\]|\\.)+)"', akapity.group(1))
                if pierwszy:
                    kawalki.append(pierwszy.group(1)[:400])

    # blok `culinary` wystepuje w czesci starszych stron zamiast sekcji
    c = re.search(r"culinary:\s*\{(.*?)\n  \},", bez_naglowka, re.S)
    if c:
        h = re.search(r'heading:\s*\n?\s*"([^"]+)"', c.group(1))
        if h:
            kawalki.append(h.group(1))
        pierwszy = re.search(r'"((?:[^"\\]|\\.){40,})"', c.group(1))
        if pierwszy:
            kawalki.append(pierwszy.group(1)[:400])

    if not kawalki:
        return None
    return re.sub(r"\s+", " ", " / ".join(kawalki)).strip()


S = []
for p in sorted(glob.glob("data/locations/cities/*.ts")):
    nazwa = p.split("/")[-1]
    if nazwa in ("index.ts", "wspolne.ts"):
        continue
    src = open(p, encoding="utf8").read()
    kat = kat_z_naglowka(src)
    if kat:
        S.append((nazwa, kat, "K"))
    else:
        zastepczy = kat_z_tresci(src)
        if zastepczy:
            S.append((nazwa, zastepczy, "t"))

if len(sys.argv) > 1:
    for w in sys.argv[1:]:
        hits = [(f, t, z) for f, t, z in S if w.lower() in t.lower()]
        print(("TAKEN " if hits else "FREE  ") + w)
        for f, t, z in hits[:6]:
            znacznik = "" if z == "K" else "  [z tresci, nie z KAT]"
            print("    ", f, "|", t[:90] + znacznik)
else:
    for f, t, z in S:
        print(("KAT " if z == "K" else "tre "), f, "|", t[:140])
