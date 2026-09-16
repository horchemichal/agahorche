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
 * SUCHAŃ — powiat stargardzki,
 * woj. zachodniopomorskie.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 * MIASTO: 1 395 mieszkańców (GUS 31.12.2024), 3,6 km²,
 *   gęstość 390,8 os./km².
 * CAŁA GMINA: 4 060 osób, 133,1 km², 13 miejscowości.
 * ⚠⚠ RÓŻNICA 2,91×. NIE MIESZAM TYCH LICZB.
 * ⚠ GEO: 53,2799 / 15,3254.
 * ⚠⚠ TO OSTATNIE MIASTO ZACHODNIOPOMORSKIEGO —
 *   58 z 58 po tej stronie.
 *
 * ⚠⚠⚠ PUŁAPKA WEWNĄTRZGMINNA — POWAŻNA:
 *   W GMINIE SUCHAŃ LEŻĄ WSIE SUCHANKI I SUCHANÓWKO.
 *   TRZY NAZWY Z JEDNEGO RDZENIA W JEDNEJ GMINIE.
 *   ⚠ Jest też para SŁODKOWO / SŁODKÓWKO.
 *   ⚠⚠ ROZGRANICZAM W FAQ — obowiązkowo.
 *   ≠ SUCHA BESKIDZKA ≠ SUCHEDNIÓW ≠ SUCHOWOLA.
 *
 * ⚠⚠ ODMIANA — NIETYPOWA:
 *   „w SUCHANIU", „do SUCHANIA" — końcowe „-ń" miękczy
 *   się do „-ni-". ⚠⚠⚠ NIGDY „w Suchańu".
 *   ⚠⚠ NIE POTWIERDZONE W PWN.
 *   ⚠⚠ NAZWY MIESZKAŃCA I PRZYMIOTNIKA NIE UŻYWAM —
 *   piszę „dla rodziny z Suchania".
 *
 * HISTORIA — FAKTY UŻYTE:
 * — X wiek — początki grodu.
 * — 1269 — pierwsza dokumentacja, jako „villa Zukan",
 *   czyli jako WIEŚ.
 * — ⚠⚠⚠ 1487 — WYMIENIONY JUŻ JAKO MIASTO.
 *   ⚠⚠⚠ TO NIE JEST DATA NADANIA PRAW MIEJSKICH —
 *   dokument lokacyjny NIE JEST ZNANY.
 *   PISZĘ „w 1487 wymieniany już jako miasto",
 *   NIGDY „prawa miejskie w 1487". TWARDA GRANICA.
 * — Zamek: II poł. XIII w.; 1312 — siedziba komtura;
 *   1382 — koniec znaczenia zamku.
 *   ⚠⚠ KOMTURA NIE WYMIENIAM — wątek zakonny
 *   i militarny. Podaję same daty albo pomijam zamek.
 * — 1551 — przejście pod zarząd dóbr książęcych
 *   w Szadku.
 * — 1828–1831 — rozparcelowanie folwarku; powstaje
 *   Kolonia Suchań. 1850 — Kolonia włączona do miasta.
 * — Główne źródło utrzymania mieszkańców PRZEZ CAŁY
 *   OKRES ISTNIENIA MIASTA: rolnictwo i handel
 *   płodami rolnymi.
 * — Pieczęć miasta z XIV w. ⚠ BEZ OPISU GODŁA.
 * — Zachowany historyczny układ ulic „w kształcie
 *   wrzeciona" i zabudowa ryglowa (mur pruski).
 * — ⚠⚠ DAT POŻARÓW, RATUSZA, JARMARKÓW, CECHÓW
 *   I MŁYNÓW W SAMYM SUCHANIU NIE USTALONO.
 *   Nie zmyślam. Murów miejskich prawdopodobnie
 *   nie było.
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — KOLEJ:
 *   W 1895 R. LINIA PIŁA–ULIKOWO (DZIŚ NR 403) DOTARŁA
 *   W REJON SUCHANIA, ALE PRZEBIEGAŁA PRZEZ TARNOWO
 *   POMORSKIE, ODDALONE O 5 KM OD MIASTA.
 *   ⚠⚠ SUCHAŃ NIE DOSTAŁ WŁASNEJ STACJI.
 *   ⚠⚠ ZESTAWIENIE: TUCZNO (ta sama fala, ta sama
 *   linia 403) dostało stację w 1888 r., również poza
 *   miastem — niecałe 4 km od rynku. Dwa miasta,
 *   jedna linia, dwa razy stacja obok.
 *   TO JEST CAŁY KĄT.
 *
 * ZABYTKI — FAKTY UŻYTE:
 * — Kościół w Suchaniu: późnogotycki, 1491–1492,
 *   wieża barokowa z 1696 r. — korpus i wieżę dzieli
 *   ponad dwieście lat.
 *   ⚠ NIE OPISUJĘ — wątek wyznaniowy. Podaję co najwyżej
 *   daty jako fakt budowlany w sekcji rodzinnej.
 * — Bramki cmentarne, murowane, 2 poł. XV w.
 *   ⚠⚠ NIE WYMIENIAM — cmentarz.
 * — SUCHANÓWKO: kościół z I ćwierci XIV w. —
 *   nawa 22,2 × 10,4 m, grubość murów nawy 1,1 m,
 *   wieża 7,6 × 7,3 m, grubość murów wieży u podstawy
 *   1,4 m; kamienie granitowe na zaprawie wapiennej;
 *   wieża dostawiona w XV w.; odbudowa zakończona 1986.
 *   ⚠⚠ TO JEDYNE PEŁNE WYMIARY W CAŁEJ TRÓJCE.
 *   ⚠⚠⚠ NIE UŻYWAM ICH JAKO KĄTA — morał „im wyżej,
 *   tym szerzej u podstawy" należy do obszaru
 *   zajętego (Lipiany: wzmacniać tam, gdzie obciążenie;
 *   Resko: grubość murów). TWARDA GRANICA.
 *   Podaję wymiary co najwyżej jako fakt.
 * — ⚠ MŁYN WODNY, RYGLOWY, Z 1827 R. w Suchanówku —
 *   jedyny datowany młyn. PODAJĘ JAKO FAKT.
 * — Pięć kościołów w gminie liczącej 13 miejscowości.
 *   ⚠ NIE ROZWIJAM — wątek wyznaniowy.
 *
 * GEOGRAFIA — FAKTY UŻYTE:
 * — ⚠⚠ LESISTOŚĆ GMINY 17,4 % — wobec 48,8 % w Tucznie
 *   i 50,1 % w Białym Borze (obie z tej samej fali).
 *   Tereny zieleni 0,07 % powierzchni gminy.
 *   Suchań jest gminą ROLNĄ, nie leśną — i ma to
 *   potwierdzone zarówno liczbą, jak i zapisem
 *   historycznym.
 *   ⚠⚠ TEGO NIE UŻYWAM JAKO KĄTA — „gotuj z tego,
 *   co masz najbliżej" prowadzi w obszar zajęty
 *   (Nowogard: to, co już masz, a czego nie używasz).
 *   Podaję jako fakt w sekcji rodzinnej.
 * — Rzeka Ina: długość 128 km, dorzecze ponad 2 130 km²,
 *   źródło w jeziorze Ińsko, ujście do Odry
 *   w Inoujściu, średni przepływ przy ujściu 10 m³/s.
 *   ⚠⚠⚠ ŹRÓDŁO NIE WYMIENIA SUCHANIA — podaję
 *   parametry RZEKI JAKO CAŁOŚCI. NIGDY nie przypisuję
 *   szerokości ani przepływu do miasta.
 *   ⚠⚠ SPADKU 4 ‰ GÓRĄ I 0,2 ‰ DOŁEM NIE UŻYWAM —
 *   kąt „charakter rzeki wynika ze spadku" zajęty
 *   (Człopa).
 * — Jezioro Wapnickie 62,5 ha; Jezioro Sierakowskie
 *   65 ha. ⚠ BEZ GŁĘBOKOŚCI I WYMIARÓW.
 * — Szczecin ok. 56 km, Stargard ok. 20 km.
 *   Sąsiednie gminy: Dobrzany 8,9 km, Recz 12,1,
 *   Choszczno 13,3, Marianowo 13,4, Dolice 15,6.
 *   ⚠ ODLEGŁOŚCI SĄSIEDNICH GMIN W LINII PROSTEJ —
 *   podaję „około".
 *
 * ⚠⚠ DANE MIESZKANIOWE Z 2009 R. (196 budynków,
 *   456 mieszkań, 28 675 m²) — NIE UŻYWAM.
 *   Dane sprzed kilkunastu lat.
 * ⚠⚠⚠ DEMOGRAFII HISTORYCZNEJ (450 w 1654, 1 602
 *   w 1861) NIE UŻYWAM — porównanie z dzisiejszymi
 *   1 395 to wprost temat wyludniania.
 *   TWARDA GRANICA BEZWZGLĘDNA.
 *
 * ⚠⚠ LISTA PRODUKTÓW TRADYCYJNYCH: NA LIŚCIE MRiRW
 *   NIE MA WPISU PRZYPISANEGO GMINIE SUCHAŃ.
 *   ⚠⚠⚠ NIE PISZĘ „GMINA NIE MA PRODUKTÓW
 *   TRADYCYJNYCH". TEMAT NIE POJAWIA SIĘ W TEKŚCIE.
 * ⚠⚠ HERBU NIE USTALONO — BIP gminy zwraca błąd 403,
 *   a strona podaje tylko, że pieczęć pochodzi z XIV w.
 *   ⚠⚠⚠ NIE ZGADUJĘ Z NAZWY. NIE OPISUJĘ HERBU.
 * ⚠ OSIEDLI STATUTOWYCH NIE USTALONO — districts PUSTE.
 *
 * KĄT: PIĘĆ KILOMETRÓW OD TORU — o tym, że rzecz może
 * być formalnie dostępna i praktycznie nie istnieć,
 * a decyduje o tym odległość, nie wola.
 * Kąt od kolei: w 1895 r. linia dotarła w rejon Suchania,
 * ale stację postawiono w Tarnowie Pomorskim, pięć
 * kilometrów od miasta.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że w 1895 r. linia Piła–Ulikowo dotarła w okolice
 *   Suchania, a stację postawiono w Tarnowie Pomorskim,
 *   pięć kilometrów od miasta,
 * — ŻE SĄSIEDNIE TUCZNO, NA TEJ SAMEJ LINII, DOSTAŁO
 *   STACJĘ SIEDEM LAT WCZEŚNIEJ — TEŻ POZA MIASTEM,
 *   niecałe cztery kilometry od rynku. To jest rdzeń:
 *   dwa miasta, jedna linia, dwa razy to samo,
 * — ⚠⚠ ŻE Z PUNKTU WIDZENIA MAPY OBA MIASTA MIAŁY
 *   KOLEJ. Z punktu widzenia człowieka z walizką —
 *   miały pięć i cztery kilometry do kolei, co jest
 *   czymś zupełnie innym,
 * — ⚠⚠ ŻE W KUCHNI TA ARYTMETYKA DZIAŁA IDENTYCZNIE
 *   I DOTYCZY WIĘCEJ NIŻ SPRZĘTU. Rzecz, do której
 *   trzeba się schylić, przejść do drugiego pokoju,
 *   zejść do piwnicy albo otworzyć aplikację i się
 *   zalogować, jest formalnie Wasza i praktycznie
 *   nie istnieje,
 * — ⚠⚠ ŻE NIE JEST TO KWESTIA LENISTWA, TYLKO PROGU:
 *   każdy dodatkowy krok odsiewa część okazji,
 *   a przy czynności powtarzanej codziennie te części
 *   się sumują aż do zera,
 * — ⚠⚠ ŻE DLATEGO PYTANIE PRZED KAŻDYM ZAKUPEM
 *   POWINNO BRZMIEĆ NIE „CZY TEGO UŻYJĘ", TYLKO
 *   „ILE KROKÓW BĘDZIE DO TEGO ZA KAŻDYM RAZEM".
 *   Pierwsze pytanie zawsze dostaje odpowiedź „tak",
 *   drugie bywa uczciwe,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: NIE WSZYSTKO MUSI BYĆ
 *   BLISKO i nie da się mieć wszystkiego pod ręką.
 *   Stacja w Tarnowie Pomorskim działała i ludzie
 *   z niej korzystali — tylko rzadziej, niż gdyby
 *   stała w mieście. Odległość nie jest zakazem,
 *   jest podatkiem,
 * — ⚠ UCZCIWIE O SPRZĘCIE: to jest pytanie także
 *   do mnie i zadaję je sama. Urządzenie ma sens
 *   wtedy, gdy stoi na blacie, a nie wtedy, gdy trafia
 *   do szafki. MÓWIĘ TO WPROST, bo drugi scenariusz
 *   zdarza się naprawdę i nie zamierzam udawać,
 *   że nie.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO POD RĘKĄ CZY SCHOWANE — kąt zajęty
 *   (Płoty). ⚠⚠ TO JEST NAJBLIŻSZY KĄT W CAŁYM
 *   SERWISIE. Tam chodzi o TO, CZY RZECZ MA STAĆ NA
 *   WIERZCHU, CZY BYĆ SCHOWANA — o porządek i estetykę.
 *   TUTAJ o TO, ŻE KAŻDY DODATKOWY KROK ODSIEWA CZĘŚĆ
 *   UŻYĆ, I ŻE TO ARYTMETYKA, NIE PORZĄDEK.
 *   ⚠⚠⚠ Nie używam słów „schowane", „na wierzchu",
 *   „zasięg ręki" ani „porządek". Piszę o krokach
 *   i o progu. ROZGRANICZAM WPROST.
 * — ⚠⚠⚠ ZERO KRÓTKIEJ LISTY SPRZĘTU I TEGO, CZEGO SIĘ
 *   UŻYWA — kąt zajęty (Polanów). Nie robię przeglądu
 *   szafek i nie proponuję niczego wyrzucać.
 * — ⚠⚠ ZERO TEGO, CO JUŻ MASZ, A CZEGO NIE UŻYWASZ —
 *   kąt zajęty (Nowogard). ⚠ Tam chodzi o ZASOBY,
 *   KTÓRE LEŻĄ NIEWYKORZYSTANE; tutaj o PRZYCZYNĘ,
 *   czyli o odległość. Nie piszę o marnowaniu
 *   ani o odkrywaniu rzeczy na nowo.
 * — ⚠⚠ ZERO PUNKTÓW WEJŚCIA — kąt zajęty (Moryń).
 *   Nie piszę o tym, co wchodzi do domu.
 * — ⚠⚠ ZERO DZIESIĘCIU KAWAŁKÓW I FUNKCJI MIEJSC —
 *   kąt zajęty (Tychowo).
 * — ⚠⚠ ZERO POJEMNOŚCI KONTRA GABARYTU — kąt zajęty
 *   (Nowe Warpno).
 * — ⚠⚠ ZERO PROGU USTALONEGO Z GÓRY — kąt zajęty
 *   (Mielno). ⚠ Słowa „próg" używam w znaczeniu
 *   fizycznym (próg wejścia w użycie), nie decyzyjnym,
 *   i pilnuję, żeby nie zabrzmiało jak tamto.
 * — ⚠⚠ ZERO CELU BEZ WYTYCZONEJ DROGI — kąt zajęty
 *   (Biały Bór, ta sama fala). Nie piszę o pierwszym
 *   kroku ani o nauce.
 * — ⚠⚠ ZERO TEMPA I POŚPIECHU — kąt zajęty (Tuczno,
 *   ta sama fala).
 * — ⚠ ZERO GRUBOŚCI MURÓW I FUNDAMENTU POD WYSOKĄ
 *   KONSTRUKCJĄ — kąt zajęty (Lipiany, Resko).
 *   Wymiary z Suchanówka podaję wyłącznie jako fakt.
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNEGO GOTOWEGO UKŁADU KUCHNI — podaję WYŁĄCZNIE
 *   pytanie, które warto zadać przed zakupem.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠ ZERO ZAKONU, KOMTURA I WĄTKU MILITARNEGO.
 * — ⚠⚠ ZERO ROKU 1945, PRZESIEDLEŃ I NIEMIECKIEJ NAZWY
 *   (poza „villa Zukan" z 1269 r. jako zapisem
 *   źródłowym — a i tego nie muszę używać).
 * — ⚠⚠ ZERO WĄTKU WYZNANIOWEGO — pięciu kościołów
 *   gminy nie rozwijam, bramek cmentarnych
 *   nie wymieniam.
 * — ⚠⚠⚠ ZERO DEMOGRAFII HISTORYCZNEJ I PORÓWNAŃ
 *   LUDNOŚCI W CZASIE.
 * — ⚠ ZERO HERBU — nieustalony, BIP niedostępny.
 * — ⚠ ZERO DANYCH MIESZKANIOWYCH Z 2009 R.
 * — ⚠ ZERO LISTY PRODUKTÓW TRADYCYJNYCH.
 * — ⚠ ŹRÓDŁA ODRZUCONE: infodlapolaka.pl.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MIESZAM liczb miasta i gminy.
 * — NIE PISZĘ „prawa miejskie w 1487" — dokument
 *   lokacyjny nie jest znany; w 1487 Suchań był już
 *   wymieniany jako miasto.
 * — NIE PRZYPISUJĘ Suchaniowi parametrów Iny —
 *   źródło podaje je dla całej rzeki.
 * — NIE PODAJĘ spadku Iny.
 * — NIE PODAJĘ głębokości jezior Wapnickie
 *   i Sierakowskie.
 * — NIE OPISUJĘ herbu i nie zgaduję go z nazwy.
 * — NIE PODAJĘ dat pożarów ani ratusza — nie ustalono.
 * — NIE PODAJĘ odległości sąsiednich gmin jako pomiarów
 *   drogowych.
 * — NIE PISZĘ, czy gmina ma wpis na Liście Produktów
 *   Tradycyjnych.
 * — NIE UŻYWAM nazwy mieszkańca ani przymiotnika.
 * — NIE PODAJĘ ŻADNEGO GOTOWEGO UKŁADU KUCHNI.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Suchań leży w powiecie stargardzkim, nad Iną,
 *   około dwudziestu kilometrów od Stargardu
 *   i pięćdziesięciu sześciu od Szczecina; miasto liczy
 *   1 395 mieszkańców (GUS, 31.12.2024) na 3,6 km²,
 *   a cała gmina 4 060 osób na 133,1 km²,
 *   z trzynastoma miejscowościami,
 * — początki grodu sięgają X w., pierwsza dokumentacja
 *   pochodzi z 1269 r. i wymienia miejscowość jako wieś
 *   („villa Zukan"), a w 1487 r. Suchań wymieniany jest
 *   już jako miasto — dokument lokacyjny nie jest znany,
 * — w 1551 r. miejscowość przeszła pod zarząd dóbr
 *   książęcych w Szadku; w latach 1828–1831
 *   rozparcelowano folwark, na którego gruntach powstała
 *   Kolonia Suchań, włączona do miasta w 1850 r.,
 * — przez cały okres istnienia miasta głównym źródłem
 *   utrzymania mieszkańców było rolnictwo i handel
 *   płodami rolnymi; lasy zajmują dziś 17,4 %
 *   powierzchni gminy,
 * — zachował się historyczny układ ulic w kształcie
 *   wrzeciona oraz zabudowa ryglowa, a pieczęć miasta
 *   pochodzi z XIV w.,
 * — kościół w Suchaniu wzniesiono w latach 1491–1492,
 *   a jego barokową wieżę dobudowano w 1696 r.,
 * — w Suchanówku stoi kościół z pierwszej ćwierci
 *   XIV w. o nawie 22,2 × 10,4 m i murach grubych
 *   na 1,1 m, z wieżą 7,6 × 7,3 m dostawioną w XV w.;
 *   zbudowano go z kamieni granitowych na zaprawie
 *   wapiennej, a odbudowę zakończono w 1986 r.;
 *   w tej samej wsi zachował się ryglowy młyn wodny
 *   z 1827 r.,
 * — Ina ma 128 km długości i dorzecze o powierzchni
 *   ponad 2 130 km²; wypływa z jeziora Ińsko i uchodzi
 *   do Odry w Inoujściu, a jej średni przepływ przy
 *   ujściu wynosi 10 m³/s,
 * — w gminie leżą jeziora Wapnickie (62,5 ha)
 *   i Sierakowskie (65 ha),
 * — w 1895 r. linia kolejowa Piła–Ulikowo, dziś
 *   oznaczona numerem 403, dotarła w rejon Suchania,
 *   ale przebiegała przez Tarnowo Pomorskie, oddalone
 *   o pięć kilometrów od miasta; na tej samej linii
 *   Tuczno otrzymało stację w 1888 r., również poza
 *   miastem — niecałe cztery kilometry od rynku.
 */
export const SUCHAN: CityContent = {
  slug: "suchan",
  h1: "Thermomix Suchań – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Suchań — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Suchaniu (powiat stargardzki): bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Dojazd bezpłatny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Suchań — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Suchaniu. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Suchania w powiecie stargardzkim z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich wsi w gminie.",

  highlights: highlightyStandardowe("Suchań"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Kolej dotarła w 1895 roku. Stację postawiono pięć kilometrów dalej.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Suchaniu – jak wygląda prezentacja?",
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
      id: "piec-kilometrow",
      heading: "Kolej, która minęła miasto o pięć kilometrów",
      paragraphs: [
        "W 1895 roku linia kolejowa Piła–Ulikowo, dziś oznaczona numerem 403, dotarła w rejon Suchania. Stację postawiono w Tarnowie Pomorskim — pięć kilometrów od miasta.",
        "Na tej samej linii leży Tuczno. Ono dostało stację siedem lat wcześniej, w 1888 roku, i też poza miastem: niecałe cztery kilometry od rynku. Dwa miasta, jedna linia, dwa razy to samo rozwiązanie.",
        "Z punktu widzenia mapy oba miasta miały kolej. Z punktu widzenia człowieka z walizką miały do niej cztery i pięć kilometrów, a to jest coś zupełnie innego.",
        "Ta arytmetyka działa w kuchni dokładnie tak samo i dotyczy znacznie więcej niż sprzętu.",
        "Rzecz, po którą trzeba zejść do piwnicy, przejść do drugiego pokoju albo wyjąć spod trzech innych, jest formalnie Wasza i praktycznie nie istnieje. Przepis w aplikacji, do której trzeba się zalogować, też nie istnieje. Ani ten wycięty z gazety i schowany w teczce w szafie.",
        "I nie jest to kwestia lenistwa — to kwestia progu.",
        "Każdy dodatkowy krok odsiewa jakąś część okazji. Nie wszystkie: część razy i tak pójdziecie do piwnicy. Ale przy czynności powtarzanej codziennie te odsiane części sumują się szybciej, niż się wydaje, i po kilku tygodniach dochodzą do zera. Rzecz zostaje, użycie znika, a pamięć o tym, że się ją w ogóle ma, zanika najpóźniej.",
        "Dlatego pytanie przed każdym zakupem do kuchni nie powinno brzmieć „czy tego użyję”. Na to pytanie odpowiedź zawsze brzmi „tak” — bo w momencie kupowania naprawdę tak myślimy.",
        "Sensowne pytanie brzmi: ile kroków będzie do tego za każdym razem. Gdzie to stanie i co trzeba będzie zrobić, żeby po to sięgnąć. To pytanie bywa nieprzyjemne i właśnie dlatego jest uczciwe.",
        "Uczciwie o drugiej stronie: nie wszystko musi być blisko i nie da się mieć wszystkiego pod ręką — miejsca jest tyle, ile jest. Stacja w Tarnowie Pomorskim działała przez dziesięciolecia i ludzie z niej korzystali, tylko rzadziej, niż gdyby stała w mieście. Odległość nie jest zakazem. Jest podatkiem, który się płaci przy każdym użyciu.",
        "Na koniec o urządzeniu — bo to pytanie zadaję też sobie i zadaję je przed sprzedażą, nie po.",
        "Thermomix ma sens wtedy, gdy stoi na blacie. Nie wtedy, gdy po trzech miesiącach trafia do szafki i wyjmuje się go na święta. Ten drugi scenariusz zdarza się naprawdę i nie zamierzam udawać, że nie — dlatego przy umawianiu pytam, ile macie wolnego blatu. To nie jest pytanie o wygodę. To jest pytanie o to, czy w ogóle warto.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/funkcje", label: "Co Thermomix właściwie robi" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Suchaniu?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, ile macie wolnego miejsca na blacie. To jedyna rzecz, którą warto sprawdzić przed spotkaniem — i najważniejsza.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Suchaniu"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Suchania",
      paragraphs: [
        "Suchań leży w powiecie stargardzkim, nad Iną, około dwudziestu kilometrów od Stargardu i pięćdziesięciu sześciu od Szczecina. Samo miasto liczy blisko tysiąc czterysta mieszkańców (GUS, 31.12.2024) na trzech i sześciu dziesiątych kilometra kwadratowego, a cała gmina ponad cztery tysiące osób na stu trzydziestu trzech, z trzynastoma miejscowościami. Początki grodu sięgają dziesiątego wieku, pierwsza dokumentacja pochodzi z 1269 roku i wymienia miejscowość jako wieś, a w 1487 Suchań wymieniany jest już jako miasto — dokument lokacyjny nie jest znany. W 1551 przeszedł pod zarząd dóbr książęcych w Szadku, a w latach 1828–1831 rozparcelowano folwark, na którego gruntach powstała Kolonia Suchań, włączona do miasta w 1850. Przez cały okres istnienia miasta głównym źródłem utrzymania mieszkańców było rolnictwo i handel płodami rolnymi; lasy zajmują dziś siedemnaście procent powierzchni gminy. Zachował się historyczny układ ulic w kształcie wrzeciona i zabudowa ryglowa, a pieczęć miasta pochodzi z czternastego wieku. Kościół w Suchaniu wzniesiono w latach 1491–1492, a jego wieżę dobudowano w 1696 — dzieli je ponad dwieście lat. W Suchanówku stoi kościół z pierwszej ćwierci czternastego wieku o nawie dwadzieścia dwa na dziesięć metrów i murach grubych na metr dziesięć, a w tej samej wsi zachował się ryglowy młyn wodny z 1827 roku. Ina ma sto dwadzieścia osiem kilometrów długości i dorzecze ponad dwóch tysięcy stu kilometrów kwadratowych; wypływa z jeziora Ińsko i uchodzi do Odry w Inoujściu. W gminie leżą też jeziora Wapnickie i Sierakowskie, każde po kilkadziesiąt hektarów.",
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

  districtsHeading: "Do których części Suchania dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — razem z dawną Kolonią Suchań, włączoną do niego w 1850 roku — i do wszystkich wsi w gminie. Bez wyjątku i bez dopłaty za odległość.",
    "Przy umawianiu wystarczy podać ulicę i numer domu albo nazwę miejscowości. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Suchań też przyjadę",
  nearbyParagraphs: [
    "Dobrzany są około dziewięciu kilometrów stąd, Recz dwanaście, Choszczno trzynaście, Stargard dwadzieścia. Do Ińska też dojeżdżam — bezpłatnie, tak samo jak wszędzie.",
  ],
  nearbyTowns: ["Stargard", "Dobrzany", "Recz", "Choszczno", "Ińsko"],

  about: blokOMnie("do Suchania", "w Suchaniu", REGION_POMORZE_ZACHODNIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Suchania bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich wsi w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Przy umawianiu warto podać pełną nazwę miejscowości, bo w gminie Suchań leżą też wsie Suchanki i Suchanówko — trzy nazwy z jednego rdzenia — a do tego para Słodkowo i Słodkówko.",
    },
    ...faqWspolne("w Suchaniu"),
    {
      question: "Jak sprawdzić przed zakupem, czy naprawdę będę z czegoś korzystać?",
      answer:
        "Nie pytając „czy tego użyję” — na to pytanie odpowiedź zawsze brzmi „tak”, bo w momencie kupowania naprawdę tak myślimy. Sensowne pytanie brzmi: ile kroków będzie do tego za każdym razem. Każdy dodatkowy krok odsiewa część okazji, a przy czynności powtarzanej codziennie te części sumują się aż do zera. Kolej dotarła do Suchania w 1895 roku i zatrzymała się pięć kilometrów dalej — formalnie miasto ją miało.",
    },
    {
      question: "Gdzie Thermomix powinien stać, żeby miał sens?",
      answer:
        "Na blacie, a nie w szafce — i mówię to przed zakupem, nie po. Urządzenie, które po kilku miesiącach ląduje w szafce i wyjmuje się je na święta, przestaje się liczyć, choć formalnie się je ma. Dlatego przy umawianiu pytam, ile macie wolnego blatu; to nie jest pytanie o wygodę, tylko o to, czy w ogóle warto.",
    },
  ],

  geo: { lat: 53.2799, lng: 15.3254 },
};
