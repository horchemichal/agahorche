import type { CityContent } from "../city-content";
import {
  REGION_POMORZE_ZACHODNIE,
  blokOMnie,
  faqWspolne,
  highlightyStandardowe,
  sekcjaCena,
  sekcjaCoUgotujesz,
  sekcjaRaty,
  sekcjaTm7,
  sekcjaTradycyjneGotowanie,
} from "./wspolne";

/**
 * TUCZNO — powiat wałecki, woj. zachodniopomorskie.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 * MIASTO: 1 765 mieszkańców (GUS 31.12.2024), 9,2 km²,
 *   gęstość 191,6 os./km².
 * CAŁA GMINA: 4 432 osoby, 249,5 km², 21 miejscowości,
 *   14 sołectw.
 * ⚠⚠ RÓŻNICA 2,51×. NIE MIESZAM TYCH LICZB.
 * ⚠ GEO: 53,1946 / 16,1559.
 * ⚠⚠ MEDIANY WIEKU I SPADKU LUDNOŚCI NIE PODAJĘ —
 *   demografia i wyludnianie. TWARDA GRANICA.
 *
 * ⚠⚠⚠ HOMONIMY — TRZY WARSTWY:
 *   TUCZNO (pow. wałecki, to miasto)
 *   ≠ TUCZNO KRAJEŃSKIE — osobna miejscowość, tam leży
 *     stacja kolejowa. NIE PISZĘ „stacja w Tucznie".
 *   ≠ TUCZNO DRUGIE — osobna miejscowość W TEJ SAMEJ
 *     GMINIE, to stamtąd pochodzi produkt z Listy.
 *     ⚠⚠⚠ NIE PISZĘ „miody z Tuczna" — piszę
 *     „z Tuczna Drugiego w gminie Tuczno".
 *   ≠ TUCZNA (gmina w lubelskim) ≠ Tuczno w Wielkopolsce
 *     (pow. poznański i międzychodzki) ≠ TUCHOLA.
 *   ROZGRANICZAM W FAQ — obowiązkowo.
 *
 * ⚠ ODMIANA: RODZAJ NIJAKI — „to Tuczno".
 *   D. TUCZNA, Ms. W TUCZNIE.
 *   ⚠⚠ NIE POTWIERDZONE W PWN.
 *   ⚠⚠ NAZWY MIESZKAŃCA I PRZYMIOTNIKA NIE UŻYWAM —
 *   piszę „dla rodziny z Tuczna".
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — LISTA PRODUKTÓW TRADYCYJNYCH:
 *   „MIODY LEŚNE Z TUCZNA DRUGIEGO", WPIS 12.02.2020,
 *   KATEGORIA MIODY, przypisanie potwierdzone na gov.pl:
 *   gmina Tuczno, powiat wałecki.
 *   ⚠⚠ DZIEWIĘĆ RODZAJÓW: czeremchowy, głogowy, akacjowy,
 *   wrzosowy, nawłociowy, lipowy, spadziowy iglasty,
 *   spadziowy liściasty, wielokwiatowy.
 *   ⚠ Postać: płynna (patoka) albo skrystalizowana
 *   (krupiec). Barwa od złocisto-żółtej do czarnej.
 *   Słoiki 315–900 ml.
 *   ⚠ Tradycja: 1946 — Koło Pszczelarzy w Wałczu;
 *   lata 70. — Koło Miejskie w Tucznie.
 *   ⚠⚠⚠ CYTAT Z KARTY O METODZIE PRACY:
 *   „NIE BIEGA SIĘ, NIE UŻYWA PERFUM". TO JEST CAŁY KĄT.
 *   ⚠⚠ TO MIÓD PSZCZELI, NIE PITNY — nie wchodzi
 *   pod wykluczenie alkoholowe. SPRAWDZONE.
 *   ⚠⚠⚠ „ULE REMONTOWANE, A NIE WYMIENIANE" —
 *   NIE UŻYWAM. Kąt „naprawić czy wymienić" zajęty
 *   (Dziwnów). TWARDA GRANICA BEZWZGLĘDNA.
 *
 * HISTORIA — FAKTY UŻYTE:
 * — 1296 — pierwsza wzmianka.
 * — 1305 — Tuczno nadane jako lenno rodowi Wedlów.
 * — 1306 — wzmianka o proboszczu, SZEŚCIU RAJCACH
 *   i mieszczanach; miasto jako „civitas".
 *   ⚠ PROBOSZCZA POMIJAM — wątek wyznaniowy.
 *   Podaję rajców i status.
 * — 1331 — prawa magdeburskie (brief zgodny).
 *   ⚠ Źródło podaje też 1333 — piszę 1331.
 * — 1338 — początek budowy murowanego zamku.
 * — 1349 — zamek główną siedzibą rodową.
 * — ⚠⚠ WZMIANKI KAROLA IV Z 1375 R. O „DWUNASTU
 *   NAJSILNIEJSZYCH ZAMKACH" NIE UŻYWAM — wątek
 *   obronno-militarny. ⚠ Strona gminy pisze „Karol V" —
 *   to błąd, ale i tak tego nie podaję.
 * — ok. 1400 — fosa o szerokości 25 m.
 * — 1717 — śmierć ostatniego z rodu Wedlów.
 * — 1723 — nowy przywilej miejski. ⚠ TREŚCI NIE ZNAM.
 * — 1810 — koniec okresu miasta prywatnego;
 *   1820 — wolny zarząd miejski.
 * — POŻARY: 1581, 1660, 1740, 1834.
 *   ⚠⚠ Po pożarze 1834 odbudowa ukończona do grudnia
 *   1836 — ponad dwa lata.
 *   ⚠⚠ TEGO NIE UŻYWAM JAKO KĄTA — „co zostało
 *   po pożarze" zajęte (Polanów), „tymczasowe, które
 *   zostaje na stałe" ociera się o Maszewo.
 *   Podaję daty jako fakty.
 * — ⚠⚠ RYNKU, KTÓRY NIGDY NIE WRÓCIŁ, NIE ROZWIJAM —
 *   to prowadzi w morał o pustce i zaniechaniu.
 *   Podaję sam kształt i osiem bloków zabudowy
 *   albo pomijam.
 * — KOLEJ: 1888, linia nr 403 (Kalisz Pomorski–Wałcz).
 *   ⚠⚠⚠ STACJA LEŻY NIECAŁE 4 KM OD RYNKU i nazywa się
 *   TUCZNO KRAJEŃSKIE.
 *   ⚠⚠⚠ TEGO NIE UŻYWAM JAKO KĄTA — kąt „stacja poza
 *   miastem" należy do SUCHANIA (ta sama fala, ta sama
 *   linia 403). Podaję jako fakt w sekcji rodzinnej
 *   i wspominam Suchań. TWARDA GRANICA.
 * — ⚠⚠⚠ EPIDEMII Z 1624 R. NIE UŻYWAM — temat zdrowotny
 *   i ofiary. TWARDA GRANICA BEZWZGLĘDNA.
 * — ⚠⚠⚠ ZERO WĄTKÓW MILITARNYCH: zajęć miasta,
 *   spalenia 1409, schronów 1934–1937, Wału Pomorskiego
 *   i lutego 1945. NIE ZBIERAM I NIE PISZĘ.
 *
 * ZAMEK — FAKTY UŻYTE:
 * — Plan trapezu: 39 × 36 × 35 × 28 m — cztery różne boki.
 * — Dom mieszkalny (skrzydło wschodnie): 35 × 13 m.
 * — Mur obwodowy do 7 m wysokości; fosa 25 m szerokości;
 *   park ponad 4 ha.
 * — Fazy: 1338 gotyk · 1542–1581 przebudowa renesansowa ·
 *   1608–1631 dwa nowe skrzydła · 1846 skrzydło
 *   zachodnie · 1903 remont · 1957–1962 badania ·
 *   1966–1976 odbudowa.
 * — ⚠⚠ ZAMEK OPISUJĘ WYŁĄCZNIE JAKO BUDOWLĘ
 *   O WYMIARACH I FAZACH. Zero wątku obronnego.
 * — ⚠ GRUBOŚCI MURÓW I WYSOKOŚCI BASZTY NIE USTALONO.
 *
 * ⚠⚠ KOŚCIOŁA NIE OPISUJĘ — wątek wyznaniowy.
 *   ⚠⚠ ORGANÓW (Bruno Goebel, opus 205, 1902, 18 głosów)
 *   I DZWONÓW (1923: śr. 148 i 92 cm; 1911) NIE UŻYWAM —
 *   wyposażenie kościelne. ⚠ Liczba przęseł sprzeczna
 *   (5 albo 4) — i tak nie podaję.
 *
 * GEOGRAFIA — FAKTY UŻYTE:
 * — Lesistość gminy 48,8 % (GUS).
 * — W granicach MIASTA leżą TRZY jeziora: Liptowskie,
 *   Tuczno i Zamkowe.
 * — Jezioro Tuczno (zwane też Młyńskim): 135,18 ha,
 *   dł. 2 450 m, szer. maks. 775 m.
 * — Jezioro Liptowskie: 134,9 ha, dł. 3 000 m,
 *   szer. maks. 810 m.
 *   ⚠⚠⚠ LIPTOWSKIE = LUBIATOWO = LUBIATOWSKIE —
 *   TO JEDNO JEZIORO. Trzy nazwy w źródłach.
 *   ⚠⚠ GŁĘBOKOŚCI NIE ZESTAWIAM ZE ŚREDNIĄ — kąt
 *   zajęty (Węgorzyno).
 * — ⚠⚠⚠ JEZIOR „CZARNE" I „KRĘPA" W GMINIE TUCZNO
 *   NIE MA. Oficjalna tabela gminy wymienia pięć jezior
 *   i żadne tak się nie nazywa. Jezioro Czarne leży
 *   w gminie BIAŁY BÓR (ta sama fala!). NIE MYLĘ.
 * — Nadleśnictwo Tuczno: ponad 20 023 ha, pięć gmin,
 *   dwa województwa, dwa powiaty. Pięć pomników
 *   przyrody; najstarszy to dąb bezszypułkowy
 *   w leśnictwie Martew, około 250 lat.
 *   ⚠ OBWODÓW PNI NIE USTALONO.
 * — Człopa 12,0 km, Mirosławiec 14,0, Wałcz 23,0,
 *   Kalisz Pomorski 24,1. ⚠ PODAJĘ „OKOŁO".
 *
 * ⚠ HERB: białe pole tarczy z błękitną tarczą sercową
 *   i dwoma pasami biało-czerwonej szachownicy; nad nią
 *   hełm z zielonym piórem pawim między dwoma czerwonymi
 *   kołami wozowymi. Z herbu rodu Wedel-Tuczyńskich.
 *   ⚠⚠ TO OPIS, NIE FORMALNY BLAZON, i brak daty
 *   uchwały. PODAJĘ CO NAJWYŻEJ SKRÓTOWO ALBO POMIJAM.
 *
 * ⚠ OSIEDLI STATUTOWYCH NIE USTALONO — districts PUSTE.
 *
 * KĄT: NIE BIEGA SIĘ — o tym, że tempo pracy i to,
 * co wnosi się ze sobą do pomieszczenia, wpływa
 * na wynik nie mniej niż technika.
 * Kąt od karty produktu tradycyjnego: w opisie miodów
 * z Tuczna Drugiego zapisano zasadę pracy przy ulach —
 * „nie biega się, nie używa perfum".
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że „Miody leśne z Tuczna Drugiego" trafiły na Listę
 *   Produktów Tradycyjnych 12 lutego 2020 r., a z jednej
 *   gminy pochodzi dziewięć rodzajów miodu,
 * — ŻE W KARCIE PRODUKTU — DOKUMENCIE URZĘDOWYM —
 *   ZAPISANO ZASADĘ PRACY: „NIE BIEGA SIĘ, NIE UŻYWA
 *   PERFUM". To jest rdzeń,
 * — ⚠⚠ ŻE TO NIE JEST PORADA O TECHNICE, TYLKO
 *   O WARUNKACH. Nie mówi, jak coś zrobić, tylko w jakim
 *   stanie się do tego podchodzi — i to zostało uznane
 *   za na tyle istotne, żeby wpisać to do dokumentu,
 * — ⚠⚠ ŻE W KUCHNI POŚPIECH JEST SKŁADNIKIEM, choć
 *   nie ma go na żadnej liście. Ten sam przepis, ten sam
 *   sprzęt i te same produkty dają inny wynik w środę
 *   o siedemnastej niż w sobotę o jedenastej,
 * — ⚠⚠ ŻE NIE CHODZI O NASTRÓJ ANI O CELEBRACJĘ,
 *   tylko o rzeczy mierzalne: czy zaczynasz z telefonem
 *   w ręce, czy masz wszystko wyjęte przed startem,
 *   czy ktoś co chwilę o coś pyta,
 * — ⚠⚠ ŻE DLATEGO NAJTAŃSZA POPRAWA W KUCHNI NIE
 *   KOSZTUJE NIC: to nie nowy sprzęt ani nowy przepis,
 *   tylko dziesięć minut wcześniej,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: NIE ZAWSZE SIĘ DA.
 *   Bywają dni, w których się biega, i to jest normalne.
 *   Chodzi o to, żeby wiedzieć, czym to jest — bo wtedy
 *   nie obwinia się przepisu ani siebie za wynik, który
 *   wynikał z tempa,
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie nie spowalnia
 *   człowieka i nie zmieni środy w sobotę. Zmniejsza
 *   za to liczbę rzeczy, które trzeba robić jednocześnie
 *   — a pośpiech bierze się przede wszystkim z tego,
 *   ile spraw dzieje się naraz. MÓWIĘ TO WPROST.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO NAPRAWIĆ CZY WYMIENIĆ — kąt zajęty
 *   (Dziwnów). Ule z karty produktu NIE POJAWIAJĄ SIĘ
 *   W TEKŚCIE W OGÓLE. TWARDA GRANICA BEZWZGLĘDNA.
 * — ⚠⚠⚠ ZERO STACJI POZA MIASTEM I ODLEGŁOŚCI DO
 *   SPRZĘTU — kąt zajęty (Suchań, ta sama fala).
 *   Stację Tuczno Krajeńskie podaję WYŁĄCZNIE jako fakt
 *   w sekcji rodzinnej.
 * — ⚠⚠⚠ ZERO PROGU USTALONEGO Z GÓRY I DECYZJI
 *   O ZŁYM DNIU — kąt zajęty (Mielno). ⚠⚠ TO JEST
 *   NAJBLIŻSZY KĄT. Tam chodzi o TO, CZY DZIŚ GOTUJESZ;
 *   TUTAJ o TO, W JAKIM TEMPIE, KIEDY JUŻ GOTUJESZ.
 *   Ani słowa o rezygnacji, o progu i o decyzji.
 *   ROZGRANICZAM WPROST.
 * — ⚠⚠ ZERO INNEJ METODY NA INNYM ETAPIE — kąt zajęty
 *   (Golczewo). Nie dzielę gotowania na fazy.
 * — ⚠⚠ ZERO CZEGO NIE WIDAĆ NA TALERZU — kąt zajęty
 *   (Mirosławiec). Nie piszę o niewidocznej robocie
 *   ani o liczeniu czasu.
 * — ⚠⚠ ZERO STAŁYCH WARUNKÓW ZAMIAST PILNOWANIA —
 *   kąt zajęty (Kalisz Pomorski).
 * — ⚠⚠ ZERO JEDNEJ DZIWNEJ RZECZY I TEGO, CO SIĘ
 *   ZAPAMIĘTUJE — kąt zajęty (Drawno). ⚠ Dziewięć
 *   rodzajów miodu aż się prosi o morał o różnorodności
 *   z jednego miejsca. NIE WCHODZĘ W NIEGO.
 * — ⚠⚠ ZERO KALENDARZA I SEZONOWOŚCI — dziewięć miodów
 *   wynika z tego, co kwitnie. NIE ROZWIJAM tego wątku:
 *   prowadzi do porad o sezonie i przechowywaniu.
 * — ⚠⚠ ZERO CZTERECH RÓŻNYCH BOKÓW ZAMKU JAKO MORAŁU —
 *   kształt naczynia zajęty (Choszczno), a nieregularność
 *   prowadziłaby w tamten obszar. Podaję wymiary zamku
 *   wyłącznie jako fakt.
 * — ⚠ ZERO POŚPIECHU JAKO TEMATU ZDROWOTNEGO — nie piszę
 *   o stresie, zmęczeniu ani samopoczuciu.
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH PORAD O PRZECHOWYWANIU MIODU I O TYM,
 *   JAK GO UŻYWAĆ — to byłaby porada o żywności.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH — ⚠⚠⚠ W SZCZEGÓLNOŚCI
 *   ŻADNYCH O MIODZIE. To jest najgroźniejsze miejsce
 *   na tej stronie. Miód opisuję WYŁĄCZNIE jako produkt
 *   z Listy, z rodzajami i datą wpisu.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠⚠ ZERO WĄTKÓW MILITARNYCH — zamek opisuję jako
 *   budowlę, nie jako fortyfikację. Zero Krzyżaków,
 *   zero schronów, zero Wału Pomorskiego, zero 1945.
 * — ⚠⚠⚠ ZERO EPIDEMII Z 1624 R.
 * — ⚠⚠ ZERO WĄTKU WYZNANIOWEGO — kościoła, jezuitów,
 *   organów i dzwonów nie wprowadzam.
 * — ⚠⚠ ZERO ROKU 1945, PRZESIEDLEŃ I NIEMIECKIEJ NAZWY.
 * — ⚠ ZERO DEMOGRAFII I MEDIANY WIEKU.
 * — ⚠ ZERO RYNKU, KTÓRY NIGDY NIE WRÓCIŁ.
 * — ⚠ ŹRÓDŁA ODRZUCONE: infodlapolaka.pl; strona gminy
 *   w zakresie „Karola V" (błąd).
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MIESZAM liczb miasta i gminy.
 * — NIE PISZĘ „miody z Tuczna" — pochodzą z Tuczna
 *   Drugiego, osobnej miejscowości w gminie.
 * — NIE PISZĘ „stacja w Tucznie" — stacja nazywa się
 *   Tuczno Krajeńskie i leży poza miastem.
 * — NIE PODAJĘ parametrów jezior Czarne i Krępa —
 *   w gminie Tuczno ich nie ma.
 * — NIE PODAJĘ liczby przęseł kościoła — źródła
 *   sprzeczne.
 * — NIE PODAJĘ grubości murów zamku ani wysokości baszty.
 * — NIE PODAJĘ treści przywileju z 1723 r.
 * — NIE PODAJĘ obwodów pni pomników przyrody.
 * — NIE PODAJĘ odległości jako pomiarów drogowych.
 * — NIE UŻYWAM nazwy mieszkańca ani przymiotnika.
 * — NIE MÓWIĘ NIC O WŁAŚCIWOŚCIACH MIODU.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Tuczno leży w powiecie wałeckim; miasto liczy
 *   1 765 mieszkańców (GUS, 31.12.2024) na 9,2 km²,
 *   a cała gmina 4 432 osoby na 249,5 km², z dwudziestoma
 *   jeden miejscowościami i czternastoma sołectwami;
 *   lasy zajmują 48,8 % jej powierzchni,
 * — pierwsza wzmianka pochodzi z 1296 r., w 1305 Tuczno
 *   nadano jako lenno rodowi Wedlów, a w 1306 r. źródła
 *   wymieniają już sześciu rajców i mieszczan, określając
 *   miejscowość jako civitas; prawa magdeburskie miasto
 *   otrzymało w 1331 r.,
 * — budowę murowanego zamku rozpoczęto w 1338 r.,
 *   a od 1349 r. był on główną siedzibą rodową;
 *   założono go na planie trapezu o bokach 39, 36, 35
 *   i 28 m, ze skrzydłem mieszkalnym 35 × 13 m i murem
 *   obwodowym dochodzącym do 7 m; około 1400 r. otoczono
 *   go fosą szeroką na 25 m, a park wokół ma ponad 4 ha;
 *   przebudowę renesansową prowadzono w latach
 *   1542–1581, dwa nowe skrzydła dostawiono w latach
 *   1608–1631, skrzydło zachodnie w 1846 r., a odbudowę
 *   po badaniach archeologicznych w latach 1966–1976,
 * — miasto płonęło w 1581, 1660, 1740 i 1834 r.;
 *   po ostatnim z tych pożarów odbudowę ukończono
 *   do grudnia 1836 r.,
 * — w 1717 r. zmarł ostatni z rodu Wedlów, w 1723 r.
 *   miasto otrzymało nowy przywilej, w 1810 r. skończył
 *   się okres miasta prywatnego, a w 1820 r. powołano
 *   wolny zarząd miejski,
 * — stację kolejową na linii nr 403 oddano w 1888 r.,
 *   ale leży ona niecałe cztery kilometry od rynku
 *   i nosi nazwę Tuczno Krajeńskie,
 * — w granicach miasta leżą trzy jeziora: Liptowskie,
 *   Tuczno i Zamkowe; jezioro Tuczno, zwane też Młyńskim,
 *   ma 135,18 ha i 2 450 m długości, a Liptowskie —
 *   występujące w źródłach także jako Lubiatowo —
 *   134,9 ha i 3 000 m,
 * — Nadleśnictwo Tuczno obejmuje ponad 20 023 ha w pięciu
 *   gminach, dwóch powiatach i dwóch województwach;
 *   najstarszym z jego pięciu pomników przyrody jest dąb
 *   bezszypułkowy w leśnictwie Martew, liczący około
 *   250 lat,
 * — „Miody leśne z Tuczna Drugiego" wpisano na Listę
 *   Produktów Tradycyjnych Ministerstwa Rolnictwa
 *   i Rozwoju Wsi 12 lutego 2020 r. w kategorii Miody;
 *   obejmują dziewięć rodzajów: czeremchowy, głogowy,
 *   akacjowy, wrzosowy, nawłociowy, lipowy, spadziowy
 *   iglasty, spadziowy liściasty i wielokwiatowy;
 *   występują w postaci płynnej i skrystalizowanej,
 *   a rozlewa się je do słoików o pojemności
 *   od 315 do 900 ml; pierwsze Koło Pszczelarzy powstało
 *   w Wałczu w 1946 r., a Koło Miejskie w Tucznie
 *   wyodrębniono w latach siedemdziesiątych; karta
 *   produktu zapisuje zasadę pracy przy ulach:
 *   „nie biega się, nie używa perfum".
 */
export const TUCZNO: CityContent = {
  slug: "tuczno",
  h1: "Thermomix Tuczno – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Tuczno — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Tucznie (powiat wałecki): bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Dojazd bezpłatny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Tuczno — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Tucznie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Tuczna w powiecie wałeckim z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich wsi w gminie.",

  highlights: highlightyStandardowe("Tuczno"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "„Nie biega się, nie używa perfum”. To zdanie stoi w dokumencie urzędowym.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Tucznie – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem i ze składnikami — nie robisz zakupów ani porządków na tę okazję. Wystarczy blat, gniazdko i godzina spokoju.",
        "Gotujemy naprawdę: obiad, coś słodkiego i chętnie coś z tego, co macie w domu. Powiedz wcześniej, ile osób siada u Was do stołu i czego nie jecie, a dobiorę dania pod Was.",
        "Na koniec liczby: cena, aktualna promocja i rata przy kilku okresach spłaty. Nie musisz decydować tego samego dnia i nic za spotkanie nie płacisz.",
      ],
      links: [{ href: "/prezentacja/jak-wyglada", label: "Zobacz, jak wygląda prezentacja krok po kroku" }],
      photo: {
        src: "/media/aga-przedstawiciel-thermomix-hero-f49127f7.webp",
        alt: "Aga Horche z Thermomixem TM7 — napis „Przedstawiciel Thermomix”",
        caption: "Prezentację prowadzi Aga — ta sama osoba, która odbierze telefon po zakupie.",
      },
    },
    {
      id: "nie-biega-sie",
      heading: "Zdanie, które trafiło do dokumentu urzędowego",
      paragraphs: [
        "Gmina Tuczno ma swój wpis na Liście Produktów Tradycyjnych Ministerstwa Rolnictwa. To „Miody leśne z Tuczna Drugiego”, wpisane 12 lutego 2020 roku — dziewięć rodzajów z jednej gminy: czeremchowy, głogowy, akacjowy, wrzosowy, nawłociowy, lipowy, dwa spadziowe i wielokwiatowy.",
        "W karcie produktu, obok opisu barwy i pojemności słoików, zapisano zasadę pracy przy ulach: „nie biega się, nie używa perfum”.",
        "To zdanie zwraca uwagę, bo nie jest poradą o technice. Nie mówi, jak coś zrobić. Mówi, w jakim stanie się do tego podchodzi — i ktoś uznał to za na tyle istotne, żeby wpisać do dokumentu urzędowego, obok liczb i dat.",
        "W kuchni działa dokładnie to samo, tylko nikt tego nigdzie nie zapisuje.",
        "Pośpiech jest składnikiem. Nie ma go na żadnej liście zakupów i w żadnym przepisie, ale ten sam przepis, ten sam sprzęt i te same produkty dają inny wynik w środę o siedemnastej niż w sobotę o jedenastej. Każdy to wie i prawie nikt tego tak nie nazywa — raczej mówimy, że „tym razem nie wyszło”.",
        "I nie chodzi tu o nastrój ani o celebrację gotowania. Chodzi o rzeczy całkiem mierzalne.",
        "Czy zaczynasz z telefonem w ręce. Czy masz wyjęte wszystko przed startem, czy szukasz w trakcie. Czy ktoś co pięć minut wchodzi i o coś pyta. Czy między jedną czynnością a drugą przeskakujesz do czegoś zupełnie innego. To są warunki pracy, nie kwestia charakteru — i one decydują o wyniku razem z przepisem, a czasem bardziej niż on.",
        "Wynika z tego rzecz, której się nie spodziewamy: najtańsza poprawa w kuchni nie kosztuje nic. To nie jest nowy sprzęt ani lepszy przepis. To jest dziesięć minut wcześniej.",
        "Uczciwie o drugiej stronie: nie zawsze się da. Bywają dni, w których się biega, i to jest zupełnie normalne — nikt nie gotuje w niedzielnym tempie pięć razy w tygodniu. Chodzi tylko o to, żeby wiedzieć, czym to jest. Bo wtedy nie obwinia się przepisu ani siebie za wynik, który wziął się z tempa.",
        "Na koniec o urządzeniu, wprost. Ono nie spowolni człowieka i nie zamieni środy w sobotę — takiej obietnicy ode mnie nie usłyszycie.",
        "Robi coś węższego: zmniejsza liczbę rzeczy, które trzeba robić jednocześnie. A pośpiech w kuchni bierze się przede wszystkim właśnie stąd — nie z tego, że czegoś jest dużo, tylko z tego, że dzieje się naraz.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/funkcje", label: "Co Thermomix właściwie robi" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Tucznie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Umawiajmy się na porę, o której u Was nie jest najgoręcej — nie tuż przed obiadem. Wtedy naprawdę widać, jak urządzenie pracuje.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Tucznie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Tuczna",
      paragraphs: [
        "Tuczno leży w powiecie wałeckim: samo miasto liczy ponad tysiąc siedemset mieszkańców (GUS, 31.12.2024) na dziewięciu kilometrach kwadratowych, a cała gmina blisko cztery i pół tysiąca osób na dwustu pięćdziesięciu, z dwudziestoma jeden miejscowościami i czternastoma sołectwami — lasy zajmują niemal połowę jej powierzchni. Pierwsza wzmianka pochodzi z 1296 roku, w 1305 Tuczno nadano jako lenno rodowi Wedlów, a w 1306 źródła wymieniają już sześciu rajców i mieszczan; prawa magdeburskie miasto otrzymało w 1331. Budowę murowanego zamku rozpoczęto w 1338 i od 1349 był główną siedzibą rodową — założono go na planie trapezu o czterech różnych bokach: trzydzieści dziewięć, trzydzieści sześć, trzydzieści pięć i dwadzieścia osiem metrów, ze skrzydłem mieszkalnym trzydzieści pięć na trzynaście i murem dochodzącym do siedmiu metrów; około 1400 roku otoczono go fosą szeroką na dwadzieścia pięć metrów, a park wokół ma ponad cztery hektary. Przebudowę renesansową prowadzono w latach 1542–1581, dwa nowe skrzydła dostawiono w latach 1608–1631, a odbudowę w latach 1966–1976. Miasto płonęło w 1581, 1660, 1740 i 1834 — po ostatnim pożarze odbudowę ukończono do grudnia 1836. W 1723 roku Tuczno otrzymało nowy przywilej miejski, w 1810 skończył się okres miasta prywatnego, a w 1820 powołano wolny zarząd. Stację kolejową oddano w 1888, ale leży niecałe cztery kilometry od rynku i nazywa się Tuczno Krajeńskie. W granicach miasta leżą trzy jeziora: Liptowskie, Tuczno — zwane też Młyńskim — i Zamkowe.",
        "Thermomix pomaga tym, że nie wymaga obecności. Danie gotuje się z ustawioną temperaturą i mieszaniem, więc może pracować, gdy zajmujesz się czymś innym, a wszystko dzieje się w jednym naczyniu.",
        "Przy małym dziecku dochodzi Varoma: porcja na parze powstaje równolegle z obiadem dla dorosłych, w tym samym urządzeniu.",
      ],
      links: [
        { href: "/thermomix/dla-rodziny", label: "Thermomix dla rodziny" },
        { href: "/thermomix/dla-mamy", label: "Thermomix dla mamy" },
      ],
      photo: {
        src: "/media/gotuj-z-dzieckiem-1-be78fd1c.webp",
        alt: "Aga Horche z dzieckiem przy Thermomixie TM7 — napis „gotuj z dzieckiem i dla dziecka”",
        caption: "Obiad dla dziecka i dla dorosłych w jednym urządzeniu.",
      },
    },
    sekcjaCoUgotujesz(),
    sekcjaTradycyjneGotowanie(),
  ],

  districtsHeading: "Do których części Tuczna dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich wsi w gminie — także do Tuczna Drugiego, które jest osobną miejscowością. Bez wyjątku i bez dopłaty za odległość.",
    "Przy umawianiu wystarczy podać ulicę i numer domu albo nazwę miejscowości. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Tuczno też przyjadę",
  nearbyParagraphs: [
    "Człopa jest około dwunastu kilometrów stąd, Mirosławiec czternaście, Wałcz dwadzieścia trzy, a Kalisz Pomorski dwadzieścia cztery. Do każdego z nich dojeżdżam bezpłatnie.",
  ],
  nearbyTowns: ["Człopa", "Mirosławiec", "Wałcz", "Kalisz Pomorski", "Drawno"],

  about: blokOMnie("do Tuczna", "w Tucznie", REGION_POMORZE_ZACHODNIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Tuczna bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich wsi w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Warto uważać na nazwy: w tej samej gminie leży Tuczno Drugie, stacja kolejowa nazywa się Tuczno Krajeńskie, a poza województwem są jeszcze Tuczna w lubelskiem i Tuczno w Wielkopolsce. Chodzi o Tuczno w powiecie wałeckim.",
    },
    ...faqWspolne("w Tucznie"),
    {
      question: "Dlaczego ten sam przepis raz wychodzi, a raz nie?",
      answer:
        "Bo pośpiech jest składnikiem, tylko nie ma go na żadnej liście. Ten sam przepis i ten sam sprzęt dają inny wynik w środę o siedemnastej niż w sobotę o jedenastej — decydują warunki pracy: czy masz wyjęte wszystko przed startem, czy ktoś co chwilę o coś pyta, ile rzeczy dzieje się naraz. W karcie produktu tradycyjnego z gminy Tuczno zapisano to wprost jako zasadę pracy: „nie biega się, nie używa perfum”.",
    },
    {
      question: "Czy Thermomix sprawia, że gotuje się spokojniej?",
      answer:
        "Nie spowolni nikogo i nie zamieni środy w sobotę — takiej obietnicy ode mnie nie usłyszycie. Zmniejsza natomiast liczbę rzeczy, które trzeba robić jednocześnie, bo kilka etapów dzieje się w jednym naczyniu, z ustawioną temperaturą i mieszaniem. A pośpiech w kuchni bierze się przede wszystkim z tego, ile spraw toczy się naraz.",
    },
  ],

  geo: { lat: 53.1946, lng: 16.1559 },
};
