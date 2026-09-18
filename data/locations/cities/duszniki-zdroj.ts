import type { CityContent } from "../city-content";
import {
  REGION_DOLNOSLASKIE,
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
 * DUSZNIKI-ZDRÓJ — powiat kłodzki, woj. dolnośląskie.
 * ⚠⚠⚠ GMINA MIEJSKA — GRANICE GMINY POKRYWAJĄ SIĘ
 *   Z GRANICAMI MIASTA. 3 946 mieszkańców
 *   (GUS 31.12.2024), 22,3 km², gęstość 177,1 os./km².
 *   ⚠ KONTROLA: 3 946 / 22,3 = 176,95 — DOMYKA SIĘ.
 *   ⚠⚠⚠ ZERO WSI. „LUDNOŚĆ MIASTA" I „LUDNOŚĆ GMINY"
 *   TO TA SAMA LICZBA. NIE PISZĘ „MIASTO I GMINA".
 * ⚠ WYSOKOŚĆ: ok. 583 m n.p.m. [NP, jedno źródło] —
 *   najwyżej położone miasto w tej fali. PODAJĘ OSTROŻNIE.
 * ⚠ LESISTOŚĆ: 57,9 % (1 290 ha lasów, dane GUS 2019).
 *   ⚠⚠ DANYCH LUDNOŚCIOWYCH Z 2019 R. NIE ZESTAWIAM
 *   Z LICZBĄ Z 2024 — to wątek wyludniania, wykluczony.
 * ⚠ GEO: 50,4043 / 16,3905.
 *
 * ⚠⚠⚠ NOTA ETYCZNA NAJWYŻSZEJ WAGI:
 *   DUSZNIKI-ZDRÓJ SĄ ZNANE PRZEDE WSZYSTKIM JAKO
 *   UZDROWISKO — wody lecznicze, sanatoria, pijalnia,
 *   kuracje, park zdrojowy jako obiekt leczniczy.
 *   ⚠⚠⚠ CAŁY TEN WĄTEK POMIJAM W CAŁOŚCI, BEZ WZMIANKI
 *   I BEZ ALUZJI. Temat zdrowotny.
 *   TWARDA GRANICA BEZWZGLĘDNA — dokładnie tak samo
 *   jak w Kudowie-Zdroju.
 *   ⚠⚠ DAT WYŁĄCZONYCH TEMATYCZNIE NIE PODAJĘ:
 *   1408 (wody mineralne), 1769 i 1797 (lecznictwo),
 *   1819 i 1844 (pożary), 1998 (powódź), rok 1945.
 *   ⚠ 1601 — powódź niszcząca budynek papierni — PODAJĘ
 *   WYŁĄCZNIE JAKO PUNKT NA OSI CZASU, jednym półzdaniem,
 *   bez opisu żywiołu.
 *
 * ⚠⚠⚠ ODMIANA — OBA CZŁONY ODMIENIANE, PIERWSZY W LICZBIE
 *   MNOGIEJ, DRUGI W POJEDYNCZEJ:
 *   M. Duszniki-Zdrój · D. DUSZNIK-ZDROJU · Ms. W DUSZNIKACH-ZDROJU
 *   N. Dusznikami-Zdrojem
 *   ⚠⚠⚠ CZTERY BŁĘDY, KTÓRE TRZEBA WYŁAPAĆ:
 *   „w Duszniki-Zdrój" (nieodmieniony pierwszy człon),
 *   „do Dusznik-Zdrój" (nieodmieniony drugi),
 *   „do Duszników" (końcówka zamiast zerowej),
 *   uzgodnienie orzeczenia w liczbie pojedynczej.
 *   SPRAWDZIĆ OSOBNYM PRZEBIEGIEM.
 *   ⚠⚠ PRZYMIOTNIKA OD NAZWY MIASTA NIE UŻYWAM —
 *   NIE USTALONO ŻADNEJ FORMY. Piszę opisowo.
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM — nie ustalono.
 *
 * ⚠⚠ KOLIZJE NAZEWNICZE:
 *   — ⚠⚠⚠ DUSZNIKI (wielkopolskie, wieś gminna w powiecie
 *     szamotulskim) — najgroźniejsza. Pominięcie członu
 *     „-Zdrój" prowadzi wprost do innej miejscowości.
 *   — ⚠⚠ CZTERY Z JEDENASTU MIAST POWIATU KŁODZKIEGO MAJĄ
 *     CZŁON „-ZDRÓJ": Duszniki, Kudowa, Lądek, Polanica.
 *     Leżą blisko siebie i opisy okolicy nagminnie
 *     przypisują fakty jednego drugiemu.
 *     ⚠⚠ KUDOWA-ZDRÓJ JEST JUŻ OPISANA W TYM CYKLU.
 *   — „Dusznik" jako forma dopełniacza wygląda jak osobna
 *     nazwa miejscowa — mylące w indeksach.
 *   ROZGRANICZAM W FAQ — OBOWIĄZKOWO.
 *
 * ⚠⚠ PRAWA MIEJSKIE I PIERWSZA WZMIANKA — ROZDZIELONE:
 *   PIERWSZA WZMIANKA: 1324 r.
 *   PRAWA MIEJSKIE: 1346 r., lokacja na prawie niemieckim
 *   [ZW — trzy źródła zgodne].
 *   ⚠⚠ ODSTĘP: 22 LATA — NAJKRÓTSZY W CAŁEJ FALI
 *   (Żarów 646 lat, Szczytna ok. 600, Leśna 185).
 *   PODAJĘ JAKO FAKT.
 *   ⚠ Jedno źródło rozmywa to na „1324–1350" i wymienia
 *   1366 jako datę dokumentu potwierdzającego status
 *   miejski [NP] — NIE PODAJĘ tej daty.
 *   ⚠ 1584 — wzniesienie ratusza [NP]. PODAJĘ OSTROŻNIE.
 *   ⚠ 1648 — status miasta królewskiego [NP] — pomijam.
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — PROPORCJA RĘKI DO MASZYNY:
 *   Papier robiono w Dusznikach-Zdroju OD 1562 DO 1939 r.
 *   — 377 LAT.
 *   MASZYNĘ PAPIERNICZĄ WSTAWIONO DOPIERO W 1905 R.,
 *   czyli 34 LATA PRZED KOŃCEM.
 *   PRZEZ POZOSTAŁE 343 LATA CZERPANO RĘCZNIE.
 *   STOSUNEK DZIESIĘĆ DO JEDNEGO na korzyść sposobu,
 *   który dziś uchodzi za ciekawostkę, a nie za metodę.
 *   To jest cały kąt.
 *   ⚠⚠ KONIEC PRODUKCJI [SP]: 1937 (źródło turystyczne)
 *   kontra 1939 (wydawnictwo własne muzeum + drugie
 *   źródło). PODAJĘ 1939.
 *   ⚠ Obecny budynek stoi od 1605 r., więc obsłużył
 *   334 z tych 377 lat.
 *
 * MŁYN I MUZEUM — POZOSTAŁE FAKTY:
 * — Pierwsze wzmianki o papierni: przed 1562 r.
 * — 1601 — powódź niszczy budynek. ⚠ JEDNYM PÓŁZDANIEM,
 *   BEZ OPISU ŻYWIOŁU.
 * — 1605 — odbudowa; Z TEGO ROKU POCHODZI OBECNY BUDYNEK.
 * — Materiały: kamień, konstrukcja szachulcowa, drewno.
 * — GRUBOŚĆ ŚCIAN ZEWNĘTRZNYCH: zachodnia 110–120 cm,
 *   południowa 90 cm — jeden budynek, ściany różnej
 *   grubości.
 *   ⚠⚠ „JEDNOLITOŚĆ KOSZTUJE" JAKO KĄT — NIE UŻYWAM:
 *   ociera się o ustalony wymiar (Kamienna Góra) i o dwie
 *   odporności (Żarów, ta sama fala). PODAJĘ JAKO FAKT.
 * — Dach pierwotnie schodkowy, wymieniony w latach 40.
 *   XX w. ⚠ PODAJĘ SAM FAKT PIERWOTNEJ FORMY.
 * — Elementy zdobne: wolutowy szczyt zachodni, ozdobna
 *   altana wejściowa, rozety i półrozety nad oknami,
 *   osłony dachowe w kształcie ślimacznic, zachowane
 *   oryginalne otwory wentylacyjne w młynie i w suszarni,
 *   polichromie ścienne z XVII–XIX w.
 * — ⚠⚠⚠ LICZBY KONDYGNACJI NIE PODAJĘ — [SP] nieusuwalne:
 *   3 + poddasze / 3 (wydawnictwo muzeum) kontra 5 / 6
 *   (inne źródło). TWARDA GRANICA.
 * — ⚠⚠ WYMIARÓW ZEWNĘTRZNYCH BUDYNKU NIE USTALONO —
 *   sześć prób. NIE PODAJĘ.
 * — MUZEUM: otwarte 26 lipca 1968 r. (pierwszy etap);
 *   1971 — wznowienie pokazowej produkcji papieru
 *   czerpanego; 1974 — uruchomienie drukarni.
 *   ⚠⚠ „KOLEJNOŚĆ ODTWARZANIA NIE JEST KOLEJNOŚCIĄ
 *   PROCESU" JAKO KĄT — NIE UŻYWAM: ociera się o metodę
 *   i kolejność (Milicz) oraz o ustaloną procedurę
 *   (Środa Śląska). PODAJĘ JAKO TRZY DATY.
 * — ⚠⚠⚠ WIELKOŚCI ZBIORÓW, LICZBY MUZEALIÓW I POWIERZCHNI
 *   EKSPOZYCJI NIE USTALONO — siedem prób, w tym strona
 *   własna muzeum. NIE PODAJĘ.
 * — ⚠ LICZBY ZWIEDZAJĄCYCH (ok. 70 tys. rocznie)
 *   NIE PODAJĘ — jedno źródło [NP].
 * — ⚠ WPISU NA LISTĘ POMNIKÓW HISTORII (2011) NIE PODAJĘ
 *   — jedno źródło [NP].
 *
 * KĄT: TRZYSTA CZTERDZIEŚCI TRZY LATA RĘKĄ,
 *   TRZYDZIEŚCI CZTERY MASZYNĄ
 * — o tym, że narzędzie kojarzone z całym rzemiosłem bywa
 * obecne tylko przez jego ostatni ułamek, a metoda działała
 * wcześniej i bez niego. Kąt od dusznickiej papierni:
 * papier robiono tu 377 lat, maszynę wstawiono na 34 lata
 * przed końcem.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że papier robiono w Dusznikach-Zdroju od 1562
 *   do 1939 roku, czyli 377 lat, a obecny budynek młyna
 *   stoi od 1605,
 * — że maszynę papierniczą wstawiono dopiero w 1905 r.,
 *   czyli 34 lata przed końcem produkcji, a przez
 *   pozostałe 343 lata czerpano ręcznie — dziesięć do
 *   jednego. TO JEST RDZEŃ,
 * — ⚠⚠ ŻE W KUCHNI MYLIMY SPRZĘT Z METODĄ: ucząc się
 *   czegoś nowego, zaczynamy od kupienia rzeczy,
 *   a nie od ustalenia kolejności czynności,
 * — ⚠⚠ ŻE SPRZĘT JEST SKRÓTEM WEWNĄTRZ METODY, A NIE
 *   METODĄ — i że kto zaczyna od skrótu, ten nie umie
 *   zrobić rzeczy, gdy sprzęt jest zajęty, brudny
 *   albo zepsuty,
 * — ⚠⚠ ŻE PRAKTYCZNY RUCH JEST JEDEN: zanim kupisz coś
 *   do nowej dla siebie czynności, zrób ją raz bez tego
 *   czegoś. Wyjdzie gorzej i zajmie dłużej — i właśnie
 *   dlatego zobaczysz, który krok jest naprawdę
 *   uciążliwy, a który tylko wygląda na uciążliwy,
 * — ⚠⚠ ŻE DOPIERO WTEDY WIADOMO, KTÓRY KROK WARTO KOMUŚ
 *   ODDAĆ — i czy w ogóle ten sprzęt ten krok obsługuje,
 * — ⚠⚠ ŻE TO NIE JEST TEKST O TYM, KIEDY DOKŁADAĆ SPRZĘT
 *   ANI O USTALANIU PROCEDURY — ROZGRANICZAM WPROST,
 *   BO OBA TE OBSZARY SĄ ZAJĘTE,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: to nie jest pochwała
 *   robienia wszystkiego ręcznie. Maszynę wstawiono nie
 *   dlatego, że ktoś nie doceniał rzemiosła, tylko
 *   dlatego, że ręcznie nie dawało się nadążyć.
 *   Skrót ma sens — pod warunkiem, że wiesz, co skraca,
 * — ⚠ UCZCIWIE O SPRZĘCIE: Thermomix jest dokładnie takim
 *   skrótem. MÓWIĘ TO WPROST — i mówię też, że warto
 *   przed zakupem ugotować to danie raz bez niego,
 *   bo inaczej nie da się ocenić, ile naprawdę oszczędza.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO DOKŁADANIA PO OKRESIE UŻYWANIA — kąt zajęty
 *   (Syców). ⚠⚠ TO NAJBLIŻSZY OBSZAR: tamten tekst mówi,
 *   KIEDY dołożyć sprzęt (po roku używania); ten mówi,
 *   ŻE METODA POPRZEDZA NARZĘDZIE i że sprzęt jest
 *   skrótem wewnątrz metody. ROZGRANICZAM JAWNIE,
 *   JEDNYM ZDANIEM W TEKŚCIE.
 * — ⚠⚠⚠ ZERO USTALONEJ PROCEDURY POWIELANEJ — kąt zajęty
 *   (Środa Śląska).
 * — ⚠⚠⚠ ZERO METODY I KOLEJNOŚCI CZYNNOŚCI JAKO TEMATU —
 *   kąt zajęty (Milicz). Wspominam o kolejności jednym
 *   półzdaniem, nie rozwijam.
 * — ⚠⚠ ZERO LICZENIA CZĘŚCI — kąt zajęty (Pieszyce).
 * — ⚠⚠ ZERO ZAPASU I DRUGIEJ DROGI — kąt zajęty
 *   (Chocianów). „Gdy sprzęt jest zajęty" wymieniam
 *   półzdaniem i NIE ROZWIJAM w stronę zastępników.
 * — ⚠⚠ ZERO KRÓTSZEJ DROGI I CZASU W KROKACH BEZCZYNNYCH
 *   — kąt zajęty (Sobótka).
 * — ⚠⚠ ZERO USTALONEGO WYMIARU I DWÓCH ODPORNOŚCI —
 *   kąty zajęte (Kamienna Góra; Żarów, ta sama fala).
 *   Dlatego różnych grubości ścian NIE UŻYWAM jako morału.
 * — ⚠⚠ ZERO PUNKTÓW STAŁYCH — kąt zajęty (Kudowa-Zdrój,
 *   czyli sąsiedni zdrój tego samego powiatu!).
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNEJ LISTY, CO ROBIĆ RĘCZNIE, A CO SPRZĘTEM —
 *   podaję WYŁĄCZNIE zasadę: zrób raz bez.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠⚠ ZERO UZDROWISKA, WÓD LECZNICZYCH, SANATORIÓW,
 *   KURACJI I PIJALNI.
 * — ⚠⚠ ZERO ROKU 1945, PRZESIEDLEŃ I NIEMIECKIEJ NAZWY.
 * — ⚠⚠ ZERO POŻARÓW I POWODZI JAKO ŻYWIOŁU — rok 1601
 *   wyłącznie jako punkt na osi czasu.
 * — ⚠⚠ ZERO WĄTKU WYZNANIOWEGO.
 * — ⚠ ZERO DEMOGRAFII, WYLUDNIANIA I BEZROBOCIA.
 * — ⚠ ZERO PRZECIĘTNEGO WYNAGRODZENIA — ⚠⚠ to wartość
 *   POWIATOWA, identyczna ze Szczytną.
 * — ⚠ ZERO HERBU — nieustalony.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PISZĘ „miasto i gmina" — to jedno i to samo.
 * — NIE PODAJĘ liczby kondygnacji młyna ani suszarni —
 *   źródła sprzeczne.
 * — NIE PODAJĘ wymiarów zewnętrznych budynku.
 * — NIE PODAJĘ wielkości zbiorów muzeum ani powierzchni
 *   ekspozycji — nie ustalono mimo siedmiu prób.
 * — NIE PODAJĘ liczby zwiedzających.
 * — NIE PODAJĘ roku 1937 jako końca produkcji — podaję
 *   1939 za wydawnictwem muzeum.
 * — NIE PODAJĘ daty 1366 ani statusu miasta królewskiego.
 * — NIE ZESTAWIAM danych ludnościowych z 2019 i 2024 roku.
 * — NIE PODAJĘ przeciętnego wynagrodzenia.
 * — NIE UŻYWAM przymiotnika od nazwy miasta ani nazwy
 *   mieszkańca.
 * — NIE PISZĘ ANI SŁOWA o uzdrowisku.
 * — NIE PISZĘ, czy gmina ma wpis na Liście Produktów
 *   Tradycyjnych. ⚠ „Pstrąg kłodzki", „pstrąg kłodzki
 *   wędzony" i „ciasto z kruszonką z Ziemi Kłodzkiej"
 *   to oznaczenia ZIEMI KŁODZKIEJ, a produkty „sudeckie"
 *   — oznaczenia pasma. NIE PRZYPISUJĘ ICH DUSZNIKOM.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Duszniki-Zdrój leżą w powiecie kłodzkim, na wysokości
 *   około 583 m n.p.m.; są gminą miejską, więc granice
 *   gminy pokrywają się z granicami miasta i nie ma tu
 *   żadnych wsi; liczą 3 946 mieszkańców
 *   (GUS, 31.12.2024) na 22,3 km², a lasy zajmują
 *   1 290 ha, czyli blisko trzy piąte powierzchni,
 * — pierwsza wzmianka pochodzi z 1324 r., a prawa miejskie
 *   miasto otrzymało w 1346 — dwadzieścia dwa lata
 *   później; ratusz wzniesiono w 1584 r.,
 * — papier robiono tu od 1562 do 1939 r., czyli przez
 *   377 lat; budynek papierni zniszczyła powódź w 1601,
 *   a odbudowano go w 1605 — i to z tego roku pochodzi
 *   obecny młyn, wzniesiony z kamienia, w konstrukcji
 *   szachulcowej, z drewnem; jego ściana zachodnia ma
 *   od 110 do 120 cm grubości, a południowa 90 cm;
 *   dach był pierwotnie schodkowy, a zachowały się między
 *   innymi wolutowy szczyt zachodni, ozdobna altana
 *   wejściowa, rozety nad oknami, osłony dachowe
 *   w kształcie ślimacznic, oryginalne otwory wentylacyjne
 *   i polichromie ścienne z XVII–XIX w.,
 * — maszynę papierniczą wstawiono w 1905 r. — trzydzieści
 *   cztery lata przed końcem produkcji; przez poprzednie
 *   trzysta czterdzieści trzy lata papier czerpano ręcznie,
 * — Muzeum Papiernictwa otwarto 26 lipca 1968 r., pokazową
 *   produkcję papieru czerpanego wznowiono w 1971,
 *   a drukarnię uruchomiono w 1974,
 * — w mieście jest 2 074 mieszkania o przeciętnej
 *   powierzchni 61,50 m² i 3,34 izby; w 2024 r. oddano
 *   do użytku sześć nowych,
 * — z Kłodzka do Dusznik-Zdroju jest 24 km drogą krajową
 *   nr 8, około 28 minut jazdy.
 */
export const DUSZNIKI_ZDROJ: CityContent = {
  slug: "duszniki-zdroj",
  h1: "Thermomix Duszniki-Zdrój – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Duszniki-Zdrój — prezentacja i cena",
  seoDescription:
    "Thermomix w Dusznikach-Zdroju: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Dojazd bezpłatny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Duszniki-Zdrój — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Dusznikach-Zdroju. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Dusznik-Zdroju z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta.",

  highlights: highlightyStandardowe("Duszniki-Zdrój"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Trzysta czterdzieści trzy lata ręką. Trzydzieści cztery maszyną.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Dusznikach-Zdroju – jak wygląda prezentacja?",
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
      id: "reka-i-maszyna",
      heading: "Trzysta czterdzieści trzy lata ręką, trzydzieści cztery maszyną",
      paragraphs: [
        "W Dusznikach-Zdroju robiono papier od 1562 do 1939 roku. Trzysta siedemdziesiąt siedem lat. Budynek, który stoi tam dziś, pochodzi z 1605 — postawiono go po tym, jak poprzedni zniszczyła powódź w 1601.",
        "Maszynę papierniczą wstawiono dopiero w 1905 roku. Trzydzieści cztery lata przed końcem produkcji.",
        "Przez pozostałe trzysta czterdzieści trzy lata papier czerpano ręcznie. Dziesięć do jednego — na korzyść sposobu, który dziś uchodzi za ciekawostkę dla zwiedzających, a nie za metodę pracy.",
        "W kuchni mylimy te dwie rzeczy dokładnie tak samo.",
        "Kiedy chcemy nauczyć się czegoś nowego — chleba, makaronu, kiszenia, czegokolwiek — zaczynamy od kupienia rzeczy. Sprzęt jest pierwszym krokiem, bo jest najłatwiejszym: wymaga decyzji i pieniędzy, a nie uwagi.",
        "Tyle że sprzęt jest skrótem wewnątrz metody, a nie metodą.",
        "Kto zaczyna od skrótu, ten nie umie zrobić rzeczy, gdy sprzęt akurat jest zajęty, brudny albo zepsuty. I — co gorsze — nie wie, który krok ten sprzęt właściwie obsługuje, więc nie umie ocenić, czy był wart swojej ceny.",
        "Ruch, który to rozstrzyga, jest prosty i darmowy: zanim kupisz coś do nowej dla siebie czynności, zrób ją raz bez tego czegoś.",
        "Wyjdzie gorzej i zajmie dłużej. I właśnie dlatego zobaczysz, który krok jest naprawdę uciążliwy, a który tylko wygląda na uciążliwy w opisie. Zwykle okazuje się, że najbardziej męczy coś zupełnie innego, niż się spodziewałaś — i że sprzęt, po który sięgałaś, akurat tego kroku nie dotyka.",
        "Dopowiem, bo to leży blisko: nie piszę tu o tym, kiedy dokładać sprzęt do kuchni, ani o ustalaniu stałej procedury. Piszę o kolejności poznawania: najpierw metoda, potem narzędzie.",
        "Uczciwie o drugiej stronie, bo to nie jest pochwała robienia wszystkiego ręcznie. Maszynę w dusznickiej papierni wstawiono nie dlatego, że ktoś przestał cenić rzemiosło, tylko dlatego, że ręcznie nie dawało się nadążyć. Skrót ma sens — pod warunkiem, że wiesz, co skraca.",
        "Na koniec o moim urządzeniu, i to jest chyba najuczciwsza rzecz, jaką mogę tu napisać.",
        "Thermomix jest dokładnie takim skrótem. Nie metodą, nie umiejętnością, nie wiedzą — skrótem wewnątrz czegoś, co trzeba znać wcześniej. Dlatego przed zakupem warto ugotować to jedno danie, o które Wam chodzi, raz bez niego. Inaczej nie da się policzyć, ile naprawdę oszczędza; a ja wolę, żebyście to policzyli, niż żebyście mi uwierzyli na słowo.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/funkcje", label: "Co Thermomix właściwie robi" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Dusznikach-Zdroju?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, jakie jedno danie robicie najczęściej i co Was w nim najbardziej męczy. Na tym zwykle najlepiej widać, czy urządzenie coś u Was zmieni, czy nie.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Dusznikach-Zdroju"),
    sekcjaRaty("w Dusznikach-Zdroju"),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Dusznik-Zdroju",
      paragraphs: [
        "Duszniki-Zdrój leżą w powiecie kłodzkim, na wysokości około pięciuset osiemdziesięciu metrów nad poziomem morza — najwyżej ze wszystkich miast, o których ostatnio pisałam. Są gminą miejską, więc granice gminy pokrywają się z granicami miasta i nie ma tu żadnych wsi. Mieszka tu 3 946 osób (GUS, 31.12.2024) na dwudziestu dwóch kilometrach kwadratowych, a lasy zajmują tysiąc dwieście dziewięćdziesiąt hektarów, czyli blisko trzy piąte powierzchni. Pierwsza wzmianka pochodzi z 1324 roku, a prawa miejskie miasto otrzymało w 1346 — dwadzieścia dwa lata później, co jest wyjątkowo krótkim odstępem; dla porównania Żarów czekał na nie sześćset czterdzieści sześć lat. Ratusz wzniesiono w 1584 roku. Papier robiono tutaj od 1562 do 1939, czyli przez trzysta siedemdziesiąt siedem lat. Budynek papierni zniszczyła powódź w 1601 roku, a odbudowano go w 1605 — i to z tego roku pochodzi obecny młyn: kamień, konstrukcja szachulcowa i drewno, ściana zachodnia grubości od stu dziesięciu do stu dwudziestu centymetrów, południowa dziewięćdziesięciu. Dach był pierwotnie schodkowy. Zachowały się między innymi wolutowy szczyt zachodni, ozdobna altana wejściowa, rozety i półrozety nad oknami, osłony dachowe w kształcie ślimacznic, oryginalne otwory wentylacyjne w młynie i w suszarni oraz polichromie ścienne z siedemnastego, osiemnastego i dziewiętnastego wieku. Maszynę papierniczą wstawiono w 1905 roku. Muzeum Papiernictwa otwarto 26 lipca 1968, pokazową produkcję papieru czerpanego wznowiono w 1971, a drukarnię uruchomiono w 1974. W mieście jest 2 074 mieszkania o przeciętnej powierzchni sześćdziesięciu jeden metrów kwadratowych; w 2024 roku oddano do użytku sześć nowych. Z Kłodzka jest tu dwadzieścia cztery kilometry drogą krajową numer 8, około dwudziestu ośmiu minut jazdy.",
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

  districtsHeading: "Do których części Dusznik-Zdroju dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta. Duszniki-Zdrój są gminą miejską, więc nie ma tu odrębnych wsi — dwadzieścia dwa kilometry kwadratowe, z czego blisko trzy piąte to las. Do każdej części miasta dojeżdżam bez dopłaty.",
    "Przy umawianiu wystarczy podać ulicę i numer domu. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Duszniki-Zdrój też przyjadę",
  nearbyParagraphs: [
    "Szczytna jest stąd kilka kilometrów drogą krajową numer 8, Polanica-Zdrój i Kudowa-Zdrój niewiele dalej, a do Kłodzka jest dwadzieścia cztery kilometry tą samą trasą. Dojeżdżam też do Lewina Kłodzkiego i Radkowa — wszędzie bezpłatnie.",
  ],
  nearbyTowns: ["Szczytna", "Polanica-Zdrój", "Kudowa-Zdrój", "Kłodzko", "Lewin Kłodzki"],

  about: blokOMnie("do Dusznik-Zdroju", "w Dusznikach-Zdroju i okolicy", REGION_DOLNOSLASKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Dusznik-Zdroju bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta. Duszniki-Zdrój są gminą miejską, więc nie ma tu odrębnych wsi — jest dwadzieścia dwa kilometry kwadratowe, z czego blisko trzy piąte to las. Dojazd jest bezpłatny tak samo jak sama prezentacja. Ważne przy umawianiu: chodzi o Duszniki-Zdrój w powiecie kłodzkim, nie o Duszniki w Wielkopolsce — pominięcie członu „-Zdrój” prowadzi do zupełnie innej miejscowości. W tym samym powiecie są jeszcze Kudowa-Zdrój, Lądek-Zdrój i Polanica-Zdrój, a opisy okolicy nagminnie przypisują fakty jednego zdroju drugiemu.",
    },
    ...faqWspolne("w Dusznikach-Zdroju"),
    {
      question: "Chcę nauczyć się piec chleb. Zacząć od kupienia sprzętu?",
      answer:
        "Odradzam, choć to działa przeciwko mnie. W Dusznikach-Zdroju papier robiono przez trzysta siedemdziesiąt siedem lat, a maszynę papierniczą wstawiono dopiero trzydzieści cztery lata przed końcem — przez poprzednie trzysta czterdzieści trzy czerpano ręcznie. Sprzęt jest skrótem wewnątrz metody, a nie metodą. Zrób to raz bez niego: wyjdzie gorzej i zajmie dłużej, ale dopiero wtedy zobaczysz, który krok jest naprawdę uciążliwy — a bardzo często okazuje się, że to nie ten, który miał obsłużyć sprzęt.",
    },
    {
      question: "Czy Thermomix zastąpi umiejętność gotowania?",
      answer:
        "Nie. Jest skrótem wewnątrz czegoś, co trzeba znać wcześniej — nie metodą, nie umiejętnością i nie wiedzą. Dlatego przed zakupem warto ugotować to jedno danie, o które Wam chodzi, raz bez niego; inaczej nie da się policzyć, ile naprawdę oszczędza. Wolę, żebyście to policzyli, niż żebyście mi uwierzyli na słowo, i właśnie po to jeżdżę gotować u ludzi w domu.",
    },
  ],

  geo: { lat: 50.4043, lng: 16.3905 },
};
