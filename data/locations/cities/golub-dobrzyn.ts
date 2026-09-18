import type { CityContent } from "../city-content";
import {
  REGION_KUJAWSKO_POMORSKIE,
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
 * GOLUB-DOBRZYŃ — powiat golubsko-dobrzyński,
 * woj. kujawsko-pomorskie.
 * GMINA MIEJSKA. 11 205 mieszkańców (GUS 31.12.2024),
 * 7,5 km².
 * ⚠⚠ OBOK ISTNIEJE ODRĘBNA GMINA WIEJSKA GOLUB-DOBRZYŃ
 *   (8 878 osób, 197,7 km²). NAZWA NIEZMIENIONA.
 *   NIE MIESZAM TYCH DANYCH. TWARDA GRANICA.
 * ⚠ ODMIANA: D. GOLUBIA-DOBRZYNIA,
 *   Ms. W GOLUBIU-DOBRZYNIU (ODMIENIAM OBA CZŁONY),
 *   przym. GOLUBSKO-DOBRZYŃSKI.
 *   ⚠ ZAWSZE PEŁNA NAZWA Z ŁĄCZNIKIEM.
 *   ⚠ NAZWY MIESZKAŃCA NIE USTALONO — NIE UŻYWAM.
 *
 * ⚠⚠ PUŁAPKI NAZEWNICZE — NAJGROŹNIEJSZE:
 * — DOBRZYŃ NAD WISŁĄ to OSOBNE MIASTO w powiecie
 *   lipnowskim. TO NIE JEST CZĘŚĆ GOLUBIA-DOBRZYNIA.
 * — ZIEMIA DOBRZYŃSKA obejmuje Lipno, Rypin i Dobrzyń
 *   nad Wisłą. ⚠⚠ GOLUB HISTORYCZNIE NALEŻAŁ DO ZIEMI
 *   CHEŁMIŃSKIEJ, NIE DOBRZYŃSKIEJ. Miasto łączy dwa
 *   różne regiony po dwóch brzegach Drwęcy.
 *   ⚠⚠ DLATEGO NIE PRZYPISUJĘ MIASTU PRODUKTU „TWARÓG
 *   Z KUJAW I ZIEMI DOBRZYŃSKIEJ". TWARDA GRANICA.
 *
 * HISTORIA — FAKTY UŻYTE:
 * — 1258 — pierwsza wzmianka o wsi („villa golube"),
 * — 1296–1306 — budowa zamku, czteroskrzydłowego,
 * — ⚠⚠ RDZEŃ KĄTA — PRAWA MIEJSKIE GOLUBIA:
 *   ŹRÓDŁA PODAJĄ TRZY RÓŻNE DATY (ok. 1293, ok. 1331,
 *   1421) I NIE DA SIĘ TEGO ROZSTRZYGNĄĆ.
 *   ⚠⚠ JEDYNA DATA ZGODNA W DWÓCH ŹRÓDŁACH TO 1421 —
 *   I TO JEST WŁAŚNIE PONOWNE WYSTAWIENIE PRZYWILEJU
 *   LOKACYJNEGO PRZEZ WIELKIEGO MISTRZA MICHAŁA
 *   KÜCHMEISTRA, BO ORYGINAŁ ZAGINĄŁ.
 *   ⚠ TO JEST CAŁY FUNDAMENT KĄTA: dokument spisano
 *   drugi raz, z pamięci i z użycia, bo pierwszego
 *   już nie było.
 * — 1527 — prawo do CZTERECH JARMARKÓW ROCZNIE.
 *   ⚠ DAT TYCH JARMARKÓW NIE USTALONO.
 * — 1611 — starostwo golubskie obejmuje ANNA WAZÓWNA;
 *   przebudowała warownię na renesansową siedzibę
 *   otoczoną ogrodami,
 * — ⚠⚠ 1613 — ANNA WAZÓWNA SFINANSOWAŁA WYDANIE
 *   „ZIELNIKA" SZYMONA SYRENIUSZA: OPISY I RYCINY
 *   765 ROŚLIN.
 *   ⚠⚠⚠ UŻYWAM WYŁĄCZNIE LICZBY 765 I FAKTU SPISANIA.
 *   ZERO ZIOŁOLECZNICTWA, ZERO ZDROWIA, ZERO RECEPTUR.
 *   ⚠⚠ ZERO TYTONIU — Anna Wazówna uprawiała go
 *   w golubskich ogrodach, ale tytoń to używka
 *   i NIE DOTYKAM TEGO. TWARDA GRANICA.
 *   ⚠⚠ ZERO BIOGRAFII ANNY WAZÓWNY POZA TYMI DWOMA
 *   FAKTAMI — jej wyznanie i pochówek to drażliwa
 *   historia. TWARDA GRANICA.
 * — 1611–1625 — „powstają nowe cechy"
 *   ⚠ ILE I JAKICH — NIE USTALONO, NIE ZGADUJĘ.
 * — DOBRZYŃ, drugi brzeg: 1684 — Zygmunt Działyński
 *   nadał przywileje osadzie zwanej Przedmieściem
 *   Golubskim; prawa miejskie 1789 (trzy źródła).
 * — SPIS ZAKŁADÓW DOBRZYNIA, II poł. XIX w.:
 *   manufaktury kartonu, świec i mydła, kilka piekarń,
 *   zakłady stolarskie, TRZY MAŁE GARBARNIE, młyn wodny.
 *   ⚠⚠ NAZWISK WŁAŚCICIELI NIE PODAJĘ — patrz etyka.
 *   ⚠⚠ ZERO ROZWIJANIA GARBARSTWA — kąt zajęty.
 *   ⚠⚠ ZERO CYKORII JAKO TEMATU — „zamienniki" to kąt
 *   zajęty (Kwidzyn). TWARDA GRANICA.
 * — 1880 — Dobrzyń: 200 DOMÓW, 3 665 mieszkańców,
 * — 1897 — most na Drwęcy; 1905 — elektrownia miejska,
 * — 1951 — połączenie Golubia i Dobrzynia w jedno miasto.
 *   ⚠ 5 albo 15 maja — ŹRÓDŁA SIĘ RÓŻNIĄ, PODAJĘ
 *   TYLKO ROK.
 * — zamek: „końskie schody" ⚠ WYMIARÓW NIE USTALONO.
 *
 * ⚠⚠ LISTA PRODUKTÓW TRADYCYJNYCH: BRAK produktu
 *   z gminy miejskiej ani wiejskiej Golub-Dobrzyń.
 *   ⚠⚠ PUŁAPKA: pięć produktów przypisywanych
 *   „powiatowi golubsko-dobrzyńskiemu" pochodzi
 *   w całości z GMINY KOWALEWO POMORSKIE — i do tego
 *   z katalogu regionalnego, nie z listy MRiRW.
 *   NIE UŻYWAM ICH. TWARDA GRANICA.
 * ⚠ OSIEDLI MIASTA NIE USTALONO — districts PUSTE.
 *
 * KĄT: PRZEPIS, KTÓREGO NIKT NIE ZAPISAŁ — i jak go
 * odtworzyć.
 * Kąt od 1421 r.: przywilej lokacyjny wystawiono drugi
 * raz, bo pierwszy dokument przepadł. Miasto istniało
 * dalej — tylko trzeba było spisać od nowa to, co i tak
 * wszyscy robili. To jest dokładnie sytuacja przepisu,
 * który był w głowie jednej osoby.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że w 1421 roku wielki mistrz Michał Küchmeister
 *   wystawił przywilej lokacyjny Golubia PO RAZ DRUGI,
 *   bo oryginał zaginął; że do dziś źródła podają trzy
 *   różne daty pierwszej lokacji i nie da się tego
 *   rozstrzygnąć,
 * — ŻE MIASTO PRZEZ TEN CZAS DZIAŁAŁO NORMALNIE —
 *   zniknął dokument, nie miasto. Spisano to, co i tak
 *   było w użyciu,
 * — ⚠⚠ ŻE TO JEST DOKŁADNIE SYTUACJA DOMOWEGO PRZEPISU,
 *   KTÓREGO NIKT NIGDY NIE ZAPISAŁ — TO JEST RDZEŃ,
 * — ŻE TAKI PRZEPIS NIE GINIE NAGLE, TYLKO SIĘ ROZMYWA:
 *   najpierw nikt nie pamięta, ile było czego, potem
 *   nikt nie pamięta kolejności, na końcu zostaje sama
 *   nazwa,
 * — ⚠⚠ JAK GO ODTWORZYĆ — KONKRETNIE, TO JEST
 *   NAJWAŻNIEJSZA CZĘŚĆ:
 *   — ZAPISYWAĆ PRZY GOTOWANIU, NIE PO. Notatka robiona
 *     po fakcie jest już wygładzona i niepełna,
 *   — ZAPISYWAĆ TO, CZEGO NIE MA W PRZEPISACH: nie
 *     „dodać mąkę", tylko „mąki tyle, żeby ciasto
 *     przestało kleić się do rąk" — bo dokładnie te
 *     zdania giną pierwsze,
 *   — ZAPISYWAĆ ZMIANY, A NIE TYLKO WERSJĘ KOŃCOWĄ:
 *     „za mało soli", „za długo w piekarniku". Przepis
 *     bez historii poprawek jest bezużyteczny za trzecim
 *     razem,
 *   — ZAPISYWAĆ, CZYJ TO PRZEPIS I OD KOGO — bo za
 *     dwadzieścia lat to będzie najważniejsza linijka,
 * — ŻE JEDNO MIEJSCE JEST WAŻNIEJSZE NIŻ FORMA: zeszyt,
 *   notatka w telefonie, kartka w szufladzie — obojętne,
 *   byle JEDNO. Przepisy rozrzucone po pięciu miejscach
 *   są tym samym, co przepisy niezapisane,
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie zapisze ustawienia,
 *   ale NIE ZAPISZE POWODU. Zapamięta „ile", nie zapamięta
 *   „dlaczego akurat tyle" — a to drugie jest tym, co
 *   naprawdę ginie. Notatka obok przepisu zostaje robotą
 *   człowieka i tak zostanie.
 *   ⚠ ODSYŁAM DO STRONY O PRZENOSZENIU RODZINNEGO
 *   PRZEPISU DO URZĄDZENIA — ROZGRANICZENIE OBOWIĄZKOWE.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO ZIOŁOLECZNICTWA I ZERO ZDROWIA przy
 *   zielniku. Wolno wyłącznie: liczba 765 i fakt, że
 *   ktoś spisał rośliny z rycinami.
 * — ⚠⚠⚠ ZERO TYTONIU.
 * — ⚠⚠ ZERO NAZWISK WŁAŚCICIELI ZAKŁADÓW.
 * — ⚠⚠ ZERO GARBARSTWA I ZERO CYKORII JAKO TEMATÓW.
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH NAZW FIRM.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠⚠ ZERO STRUKTURY WYZNANIOWEJ I NARODOWOŚCIOWEJ
 *   MIASTA. Główne opracowanie naukowe o Golubiu-Dobrzyniu
 *   operuje procentami w każdym akapicie i to jest
 *   pierwsza rzecz, jaką zwraca wyszukiwarka.
 *   CAŁY TEN BLOK WYŁĄCZONY — łącznie z nazwiskami
 *   właścicieli młynów, które ten kontekst niosą.
 *   TWARDA GRANICA BEZWZGLĘDNA.
 * — ⚠⚠ ZERO WOJEN, NAJAZDÓW I EPIDEMII: potop szwedzki,
 *   wojna golubska 1422, dżuma, utrata 70% ludności.
 *   TWARDA GRANICA.
 * — ZERO biografii Anny Wazówny poza zielnikiem
 *   i ogrodami.
 * — ZERO wyludniania (−13,5%) i bezrobocia (10,6%).
 * — ZERO wątków zaborczych.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH — OBOWIĄZKOWE:
 * — „RODZINNY PRZEPIS PRZENIESIONY DO URZĄDZENIA"
 *   (Łomża) dotyczy PRZEŁOŻENIA GOTOWEGO PRZEPISU
 *   NA THERMOMIX — pytania „czy zrobi to samo".
 *   ⚠⚠ TO JEST NAJBLIŻSZY KĄT. TUTAJ chodzi o to,
 *   że PRZEPISU W OGÓLE NIE MA NA PIŚMIE i trzeba go
 *   najpierw odtworzyć i spisać. Odsyłam tam wprost.
 * — „ZAMIENNIKI" (Kwidzyn) dotyczy BRAKUJĄCEGO
 *   SKŁADNIKA.
 * — „RODZAJE MĄKI" (Korsze) dotyczy MĄKI.
 * — „CIASTO, KTÓRE ZOSTAŁO" (Tuchola) dotyczy RESZTEK.
 * TUTAJ chodzi o SPISYWANIE TEGO, CO ISTNIEJE TYLKO
 * W CZYJEJŚ GŁOWIE.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MIESZAM danych gminy miejskiej i wiejskiej.
 * — NIE PISZĘ, że Golub leży w ziemi dobrzyńskiej.
 * — NIE PRZYPISUJĘ miastu twarogu z ziemi dobrzyńskiej
 *   ani produktów z gminy Kowalewo Pomorskie.
 * — NIE ROZSTRZYGAM daty pierwszej lokacji.
 * — NIE PODAJĘ dnia połączenia miast w 1951 r.
 * — NIE PODAJĘ nazwisk właścicieli zakładów.
 * — NIE PISZĘ o tytoniu ani o ziołolecznictwie.
 * — NIE PODAJĘ nazw osiedli ani nazwy mieszkańca.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Golub-Dobrzyń jest gminą miejską i siedzibą powiatu
 *   golubsko-dobrzyńskiego; liczy 11 205 mieszkańców
 *   (GUS, 31.12.2024) na siedmiu i pół kilometra
 *   kwadratowego, a obok istnieje odrębna gmina wiejska
 *   o tej samej nazwie, licząca 8 878 osób,
 * — miasto powstało z połączenia w 1951 roku dwóch
 *   osobnych miast leżących po dwóch brzegach Drwęcy;
 *   pierwsza wzmianka o wsi Golub pochodzi z 1258 roku,
 *   a zamek budowano w latach 1296–1306,
 * — źródła podają trzy różne daty nadania Golubiowi praw
 *   miejskich i nie da się tego rozstrzygnąć; pewne jest
 *   natomiast, że w 1421 roku wielki mistrz Michał
 *   Küchmeister wystawił przywilej lokacyjny po raz drugi,
 *   ponieważ oryginalny dokument zaginął,
 * — w 1527 roku miasto otrzymało prawo do czterech
 *   jarmarków rocznie,
 * — w 1611 roku starostwo golubskie objęła Anna Wazówna,
 *   która przebudowała warownię na renesansową siedzibę
 *   otoczoną ogrodami, a w 1613 roku sfinansowała wydanie
 *   „Zielnika" Szymona Syreniusza z opisami i rycinami
 *   765 roślin,
 * — w drugiej połowie XIX wieku po drugiej stronie rzeki
 *   działały manufaktury kartonu, świec i mydła, kilka
 *   piekarń, zakłady stolarskie, trzy małe garbarnie
 *   i młyn wodny; w 1880 roku było tam dwieście domów
 *   i 3 665 mieszkańców,
 * — most na Drwęcy zbudowano w 1897 roku, a elektrownię
 *   miejską uruchomiono w 1905.
 */
export const GOLUB_DOBRZYN: CityContent = {
  slug: "golub-dobrzyn",
  h1: "Thermomix Golub-Dobrzyń – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Golub-Dobrzyń — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Golubiu-Dobrzyniu: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i okolica. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Golub-Dobrzyń — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Golubiu-Dobrzyniu. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Golubia-Dobrzynia z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do obu części miasta i do okolicznych wsi.",

  highlights: highlightyStandardowe("Golub-Dobrzyń"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Przepis nie ginie nagle. Najpierw znikają proporcje, potem kolejność, na końcu zostaje nazwa.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Golubiu-Dobrzyniu – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem i ze składnikami — nie robisz zakupów ani porządków na tę okazję. Wystarczy blat, gniazdko i godzina spokoju.",
        "Gotujemy naprawdę: obiad, coś słodkiego i chętnie coś z tego, co masz w domu. Powiedz wcześniej, ile osób siada u Was do stołu i czego nie jecie, a dobiorę dania pod Was.",
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
      id: "przepis-niezapisany",
      heading: "Dokument, który trzeba było spisać drugi raz",
      paragraphs: [
        "Z Golubiem jest taka historia, że do dziś nie wiadomo, kiedy dokładnie dostał prawa miejskie. Źródła podają trzy różne daty i żadnej nie da się rozstrzygnąć. Pewna jest natomiast jedna rzecz: w 1421 roku wielki mistrz Michał Küchmeister wystawił przywilej lokacyjny po raz drugi — ponieważ oryginalny dokument zaginął.",
        "Miasto przez ten czas działało normalnie. Ludzie mieszkali, targowali, płacili. Zniknął dokument, nie miasto. Trzeba było tylko spisać od nowa to, co i tak wszyscy robili — z pamięci i z użycia.",
        "I to jest dokładnie sytuacja przepisu, którego nikt nigdy nie zapisał.",
        "Taki przepis nie ginie nagle. On się rozmywa. Najpierw nikt nie pamięta, ile było czego — „na oko, ale zawsze tyle samo”. Potem nikt nie pamięta kolejności, bo kolejność była oczywista dla osoby, która to robiła. Na końcu zostaje sama nazwa i zdanie „u babci to smakowało inaczej”, z którym nic już nie da się zrobić.",
        "Odtworzyć się jednak da i to jest prostsze, niż wygląda. Cztery rzeczy.",
        "Po pierwsze: zapisywać przy gotowaniu, nie po. Notatka robiona po fakcie jest już wygładzona — człowiek pamięta, jak powinno być, a nie jak było. Kartka ma leżeć obok miski i ma być pobrudzona.",
        "Po drugie: zapisywać to, czego nie ma w książkach kucharskich. Nie „dodać mąkę”, tylko „mąki tyle, żeby ciasto przestało kleić się do rąk”. Nie „piec do zrumienienia”, tylko „aż brzegi zaczną odchodzić od formy”. Dokładnie te zdania giną pierwsze, bo wydają się zbyt oczywiste, żeby je notować.",
        "Po trzecie: zapisywać zmiany, a nie tylko wersję końcową. „Za mało soli”. „Za długo, następnym razem krócej”. „Wyszło lepiej na zimnym cieście”. Przepis bez historii poprawek jest bezużyteczny za trzecim razem, bo znowu trzeba zgadywać.",
        "Po czwarte: zapisywać, czyj to przepis i od kogo. Dziś to wygląda na zbędny sentyment. Za dwadzieścia lat będzie to najważniejsza linijka w całej notatce.",
        "I jedna rzecz ważniejsza od formy: wszystko w jednym miejscu. Zeszyt, notatka w telefonie, kartka w szufladzie — obojętne. Byle jedno. Przepisy rozrzucone po pięciu miejscach są praktycznie tym samym, co przepisy niezapisane.",
        "Uczciwie o sprzęcie, bo tu jest granica, o której się nie mówi. Urządzenie zapamięta ustawienia, ale nie zapamięta powodu. Zapisze „ile”, nie zapisze „dlaczego akurat tyle” — a ginie właśnie to drugie. O samym przenoszeniu rodzinnego przepisu na Thermomix pisałam osobno, bo to inne pytanie; tutaj chodzi o etap wcześniejszy, kiedy przepisu nie ma jeszcze nigdzie poza czyjąś głową.",
        "Notatka obok przepisu zostaje robotą człowieka. I chyba dobrze — bo to jest ta część, która się potem czyta.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/funkcje", label: "Funkcje Thermomixa" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Golubiu-Dobrzyniu?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli masz w domu przepis, którego nikt nie spisał, a chciałabyś go wreszcie mieć na papierze — powiedz to przy umawianiu. Możemy go zrobić razem i notować na bieżąco.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Golubiu-Dobrzyniu"),
    sekcjaRaty("w Golubiu-Dobrzyniu"),
    {
      id: "rodzina",
      heading: "Thermomix dla golubsko-dobrzyńskiej rodziny",
      paragraphs: [
        "Golub-Dobrzyń jest gminą miejską i siedzibą powiatu golubsko-dobrzyńskiego; liczy ponad jedenaście tysięcy mieszkańców na siedmiu i pół kilometra kwadratowego, a obok istnieje odrębna gmina wiejska o tej samej nazwie. Miasto powstało w 1951 roku z połączenia dwóch osobnych miast leżących po dwóch brzegach Drwęcy. Pierwsza wzmianka o wsi Golub pochodzi z 1258 roku, zamek budowano w latach 1296–1306, a w 1421 roku wielki mistrz Michał Küchmeister wystawił przywilej lokacyjny po raz drugi, bo oryginał zaginął; w 1527 roku miasto otrzymało prawo do czterech jarmarków rocznie. W 1611 roku starostwo objęła Anna Wazówna, która przebudowała warownię na renesansową siedzibę otoczoną ogrodami, a dwa lata później sfinansowała wydanie „Zielnika” Szymona Syreniusza — z opisami i rycinami siedmiuset sześćdziesięciu pięciu roślin. Po drugiej stronie rzeki działały w XIX wieku manufaktury kartonu, świec i mydła, kilka piekarń, zakłady stolarskie, trzy małe garbarnie i młyn wodny; w 1880 roku stało tam dwieście domów. Most na Drwęcy zbudowano w 1897 roku, elektrownię miejską w 1905.",
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

  districtsHeading: "Do których części Golubia-Dobrzynia dojeżdżam?",
  districtsParagraphs: [
    "Do obu części miasta, po obu brzegach Drwęcy — od okolic zamku i starego centrum po osiedla przy wylotach dróg. Dojeżdżam też do wsi w okolicznej gminie wiejskiej.",
    "Przy umawianiu wystarczy podać ulicę i numer domu albo nazwę miejscowości. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Golub-Dobrzyń też przyjadę",
  nearbyParagraphs: [
    "Kowalewo Pomorskie, Wąbrzeźno, Brodnica, Rypin, Lipno, Chełmża i Toruń są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Kowalewo Pomorskie", "Wąbrzeźno", "Brodnica", "Rypin"],

  about: blokOMnie("do Golubia-Dobrzynia", "w Golubiu-Dobrzyniu", REGION_KUJAWSKO_POMORSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Golubia-Dobrzynia bez dodatkowej opłaty?",
      answer:
        "Tak, do obu części miasta i do wsi w okolicy. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku: Golub-Dobrzyń to gmina miejska i siedziba powiatu, a obok istnieje odrębna gmina wiejska o tej samej nazwie — do obu przyjeżdżam tak samo.",
    },
    ...faqWspolne("w Golubiu-Dobrzyniu"),
    {
      question: "Jak spisać przepis, którego nikt w rodzinie nie zapisał?",
      answer:
        "Notować przy gotowaniu, nie po — notatka robiona po fakcie jest już wygładzona. Zapisywać to, czego nie ma w książkach: nie „dodać mąkę”, tylko „mąki tyle, żeby ciasto przestało kleić się do rąk”. Zapisywać poprawki, a nie tylko wersję końcową. I zapisać, czyj to przepis — za dwadzieścia lat to będzie najważniejsza linijka.",
    },
    {
      question: "Czy Thermomix zapamięta rodzinny przepis?",
      answer:
        "Zapamięta ustawienia, ale nie zapamięta powodu. Zapisze „ile”, nie zapisze „dlaczego akurat tyle” — a ginie właśnie to drugie. Dlatego notatka obok przepisu zostaje robotą człowieka i tak już zostanie.",
    },
  ],

  geo: { lat: 53.1105, lng: 19.0539 },
};
