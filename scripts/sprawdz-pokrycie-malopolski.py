# -*- coding: utf-8 -*-
"""
SPRAWDZENIE POKRYCIA MAŁOPOLSKI — uruchamiać PO KAŻDEJ FALI stron gminnych.

Po co to jest. 30.08.2026 ogłosiłem, że „cała Małopolska jest pokryta",
bo policzyłem powiaty, nad którymi pracowaliśmy falami, zamiast porównać
stan z pełną listą gmin. Brakowało wtedy 35 gmin, w tym 14 w powiecie
tarnowskim, który nigdy nie był przedmiotem żadnej fali. Ten skrypt istnieje
po to, żeby taka pomyłka nie mogła się powtórzyć: porównuje slugi
zarejestrowane w `data/locations/malopolska.ts` z ręcznie wpisaną, pełną
listą 183 gmin województwa.

Użycie (z katalogu głównego repo):
    python3 scripts/sprawdz-pokrycie-malopolski.py

Wypisuje per powiat KOMPLET albo listę brakujących gmin, a na końcu sumę.

⚠️ LISTA REFERENCYJNA JEST RĘCZNA I MA STAN NA 30.08.2026 — 183 gminy,
22 powiaty (19 ziemskich + 3 miasta na prawach powiatu). Uwaga na dwie
rzeczy przy aktualizacji:
— od 1.01.2025 istnieje gmina SZCZAWA (wiejska, powiat limanowski),
  wydzielona z gminy Kamienica. Starsze opracowania podają 182 gminy
  i są nieaktualne,
— od 1.01.2023 Czarny Dunajec i Książ Wielki są miejsko-wiejskie.

Słowniki MANUAL i `extra` domykają przypadki, w których slug w repo nie
wynika wprost z nazwy gminy: pary miasto + gmina wiejska (`-gmina`),
duplikaty nazw w różnych powiatach (Bolesław, Spytkowice) oraz cztery
najstarsze strony, których treść leży w `city-content.ts`, a nie
w `cities/`.
"""

import re, json
REF = {
"bochenski": ["Bochnia (miasto)","Bochnia (gmina wiejska)","Nowy Wiśnicz","Drwinia","Lipnica Murowana","Łapanów","Rzezawa","Trzciana","Żegocina"],
"brzeski": ["Brzesko","Czchów","Borzęcin","Dębno","Gnojnik","Iwkowa","Szczurowa"],
"chrzanowski": ["Chrzanów","Trzebinia","Libiąż","Alwernia","Babice"],
"dabrowski": ["Dąbrowa Tarnowska","Szczucin","Bolesław (dąbrowski)","Gręboszów","Mędrzechów","Olesno","Radgoszcz"],
"gorlicki": ["Gorlice (miasto)","Gorlice (gmina wiejska)","Biecz","Bobowa","Lipinki","Łużna","Moszczenica","Ropa","Sękowa","Uście Gorlickie"],
"krakowski": ["Skawina","Krzeszowice","Skała","Słomniki","Świątniki Górne","Czernichów","Igołomia-Wawrzeńczyce","Iwanowice","Jerzmanowice-Przeginia","Kocmyrzów-Luborzyca","Liszki","Michałowice","Mogilany","Sułoszowa","Wielka Wieś","Zabierzów","Zielonki"],
"limanowski": ["Limanowa (miasto)","Limanowa (gmina wiejska)","Mszana Dolna (miasto)","Mszana Dolna (gmina wiejska)","Dobra","Jodłownik","Kamienica","Laskowa","Łukowica","Niedźwiedź","Słopnice","Szczawa","Tymbark"],
"miechowski": ["Miechów","Książ Wielki","Charsznica","Gołcza","Kozłów","Racławice","Słaboszów"],
"myslenicki": ["Myślenice","Dobczyce","Sułkowice","Lubień","Pcim","Raciechowice","Siepraw","Tokarnia","Wiśniowa"],
"nowosadecki": ["Grybów (miasto)","Grybów (gmina wiejska)","Stary Sącz","Krynica-Zdrój","Muszyna","Piwniczna-Zdrój","Chełmiec","Gródek nad Dunajcem","Kamionka Wielka","Korzenna","Łabowa","Łącko","Łososina Dolna","Nawojowa","Podegrodzie","Rytro"],
"nowotarski": ["Nowy Targ (miasto)","Nowy Targ (gmina wiejska)","Czarny Dunajec","Rabka-Zdrój","Szczawnica","Czorsztyn","Jabłonka","Krościenko nad Dunajcem","Lipnica Wielka","Łapsze Niżne","Ochotnica Dolna","Raba Wyżna","Spytkowice (nowotarski)","Szaflary"],
"olkuski": ["Bukowno","Olkusz","Wolbrom","Bolesław (olkuski)","Klucze","Trzyciąż"],
"oswiecimski": ["Oświęcim (miasto)","Oświęcim (gmina wiejska)","Kęty","Brzeszcze","Chełmek","Zator","Osiek","Polanka Wielka","Przeciszów"],
"proszowicki": ["Proszowice","Nowe Brzesko","Koszyce","Koniusza","Pałecznica","Radziemice"],
"suski": ["Sucha Beskidzka","Jordanów (miasto)","Jordanów (gmina wiejska)","Maków Podhalański","Budzów","Bystra-Sidzina","Stryszawa","Zawoja","Zembrzyce"],
"tarnowski": ["Tuchów","Żabno","Ciężkowice","Radłów","Ryglice","Wojnicz","Zakliczyn","Gromnik","Lisia Góra","Pleśna","Rzepiennik Strzyżewski","Skrzyszów","Szerzyny","Tarnów (gmina wiejska)","Wierzchosławice","Wietrzychowice"],
"tatrzanski": ["Zakopane","Biały Dunajec","Bukowina Tatrzańska","Kościelisko","Poronin"],
"wadowicki": ["Wadowice","Andrychów","Kalwaria Zebrzydowska","Brzeźnica","Lanckorona","Mucharz","Spytkowice (wadowicki)","Stryszów","Tomice","Wieprz"],
"wielicki": ["Wieliczka","Niepołomice","Biskupice","Gdów","Kłaj"],
"MnPP": ["Kraków","Nowy Sącz","Tarnów (miasto)"],
}

def naSlug(n):
    import unicodedata
    n = n.split(' (')[0]
    n = n.lower().replace('ł','l')
    n = unicodedata.normalize('NFD', n)
    n = ''.join(c for c in n if not unicodedata.combining(c))
    n = re.sub(r'[^a-z0-9]+','-',n).strip('-')
    return n

m = open('data/locations/malopolska.ts', encoding='utf-8').read()
have = set(re.findall(r'slug:\s*"([^"]+)"', m))
have.add('krakow')

# recznie mapowane slugi w repo
MANUAL = {
 "Bolesław (dąbrowski)":"boleslaw-dabrowski","Bolesław (olkuski)":"boleslaw",
 "Spytkowice (nowotarski)":"spytkowice-nowotarskie","Spytkowice (wadowicki)":"spytkowice",
 "Gorlice (gmina wiejska)":"gorlice-gmina","Gorlice (miasto)":"gorlice",
 "Grybów (gmina wiejska)":"grybow-gmina","Grybów (miasto)":"grybow",
 "Nowy Targ (gmina wiejska)":"nowy-targ-gmina","Nowy Targ (miasto)":"nowy-targ",
 "Jordanów (gmina wiejska)":"jordanow-gmina","Jordanów (miasto)":"jordanow",
 "Bochnia (miasto)":"bochnia","Bochnia (gmina wiejska)":"bochnia-gmina",
 "Limanowa (miasto)":"limanowa","Limanowa (gmina wiejska)":"limanowa-gmina",
 "Mszana Dolna (miasto)":"mszana-dolna","Mszana Dolna (gmina wiejska)":"mszana-dolna-gmina",
 "Oświęcim (miasto)":"oswiecim","Oświęcim (gmina wiejska)":"oswiecim-gmina",
 "Tarnów (miasto)":"tarnow","Tarnów (gmina wiejska)":"tarnow-gmina",
 "Krościenko nad Dunajcem":"kroscienko",
}

total=0; miss_all=[]
for pow_, gminy in REF.items():
    braki=[]
    for g in gminy:
        total+=1
        sl = MANUAL.get(g, naSlug(g))
        if sl not in have: braki.append((g,sl))
    status = "KOMPLET" if not braki else f"BRAKI {len(braki)}/{len(gminy)}"
    print(f"{pow_:<14} {len(gminy):>2} gmin  {status}")
    for g,sl in braki:
        print(f"                 - {g}  ({sl})")
        miss_all.append(g)
print()
print("gmin w referencji:", total)
print("BRAKUJE ŁĄCZNIE:", len(miss_all))
