import type { CityContent } from "../city-content";
import {
  REGION_LUBUSKIE,
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
 * MAŁOMICE — gmina miejsko-wiejska w powiecie żagańskim.
 * MIASTO 3 402, GMINA 5 158 (GUS 31.12.2024).
 * POWIERZCHNIA MIASTA 6,8 km², GMINY 79,6 km², 6 SOŁECTW:
 * Bobrzany, Chichy, Lubiechów, Śliwnik, Żelisław, Janowiec.
 * ⚠ Portal geoportalowy podaje 5 134 bez daty — NIE CYTUJĘ.
 * W KAŻDYM SOŁECTWIE JEST ŚWIETLICA WIEJSKA, a przy większości
 * KOŁO GOSPODYŃ WIEJSKICH.
 *
 * ⚠⚠ DATY PRAW MIEJSKICH NIE PODAJĘ — TRZY SPRZECZNE WERSJE:
 * 1 stycznia 1969 (strona gminy, po statusie osiedla miejskiego
 * z 1958), 1959 (konserwator) i 1968 (wynikające z jubileuszu
 * opisanego w prasie). Strona gminy wspomina też o częściowych
 * prawach miejskich w 1572 r. PISZĘ OGÓLNIE: „prawa miejskie
 * odzyskane w drugiej połowie XX wieku".
 *
 * ⚠ HOMONIMY: MAŁOMICE ≠ MAŁOMIERZYCE (wieś, gmina Iłża,
 * mazowieckie). FAQ to rozróżnia.
 *
 * GEOGRAFIA: RZEKA BÓBR — „naturalna oś przestrzenna gminy",
 * jeden z ważniejszych dopływów Odry. Historycznie nad jej
 * brzegami działały MŁYNY, TARTAKI I ZAKŁADY HUTNICZE.
 * DOLINA IŁAWKI, zwanej też MŁYNÓWKĄ, w Bobrzanach —
 * NIEGDYŚ MIEJSCE MŁYNÓW WODNYCH.
 * ZALEW W MAŁOMICACH — kąpielisko z piaszczystą plażą,
 * linia brzegowa 105 m. Lesistość gminy 47,2%.
 * Przynależność historyczna: DOLNY ŚLĄSK, rubież Borów
 * Dolnośląskich.
 *
 * ⚠⚠ GOSPODARKA TO HUTNICTWO, NIE JEDZENIE — TO JEST PODSTAWA
 * KĄTA. Produkcja żelaza rozwijała się tu OD XV w.; w XVIII
 * i XIX w. działały HUTY ŻELAZA; fabryka hutnicza zakończyła
 * działalność w 1933 r.; kolej doprowadzono w 1875 r.
 * Za sprawą huty Małomice przekształciły się w XIX w.
 * w osiedle przemysłowe.
 * ⚠ FABRYKI NIE NAZYWAM I NIE OPISUJĘ JEJ KOŃCA jako upadku
 *   — ZERO tematów bezrobocia i upadku zakładów.
 *
 * ⚠⚠ W GMINIE MAŁOMICE NIE ZNALEZIONO ŻADNEGO CZYNNEGO
 * ZAKŁADU SPOŻYWCZEGO, PIEKARNI, MŁYNA, MASARNI, SADU,
 * PASIEKI ANI WINNICY. Nie znaleziono też żadnej cyklicznej
 * imprezy kulinarnej, dożynek gminnych ani jarmarku.
 * TO NIE JEST LUKA W RESEARCHU — TO JEST FAKT O TYM MIEJSCU
 * I WŁAŚNIE Z NIEGO BIORĘ KĄT.
 * ⚠⚠ „LUBUSKIE ŚWIĘTO PLONÓW" ODBYWA SIĘ WE WSCHOWIE —
 * NIE PRZYPISUJĘ GO MAŁOMICOM.
 * ⚠⚠ PRODUKTY Z LISTY PRODUKTÓW TRADYCYJNYCH Z SĄSIEDNICH
 * GMIN (drożdżowiec, babka ucierana, smalcówki i powidła
 * z gminy Niegosławice, ocet jabłkowo-miodowy z gminy
 * Szprotawa, olej lniany z odmiany „szafir") NIE NALEŻĄ
 * DO MAŁOMIC. Mogę wspomnieć o nich WYŁĄCZNIE jako o okolicy
 * powiatu żagańskiego, nigdy jako o produktach miejscowych.
 *
 * ZABYTKI: kościół Narodzenia NMP w Małomicach — budowa
 * 1928–1929, konsekracja 20 października 1929, rozbudowa
 * 1984–1992. KOŚCIÓŁ ŚW. JANA CHRZCICIELA W CHICHACH —
 * wczesnogotycki, druga połowa XIII w., sklepienie sieciowe
 * z początku XVI w., przebudowy 1614 i 1710. PAŁAC W CHICHACH
 * — wzniesiony 1718, przebudowa neoklasyczna ok. 1840,
 * DZIŚ MIEŚCI PRACOWNIĘ CERAMIKI I POKOJE GOŚCINNE.
 * ZAMEK GRANICZNY W JANOWCU — budowa ok. 1462, prace
 * rozszerzone 1541–1543, dziś ruina.
 * PARK KRAJOBRAZOWY po dawnym założeniu barokowym
 * w Małomicach.
 * ⚠ WŁAŚCICIELI MAŁOMIC NIE PODAJĘ — sprzeczność źródeł.
 * ⚠ FAKTÓW Z MONOGRAFII (Steller, Gielczewsky, wizyta cesarza
 *   „w roku 1000") NIE UŻYWAM — wewnętrznie wątpliwe.
 *
 * KĄT: KUCHNIA BEZ WŁASNEJ TRADYCJI — co gotować tam,
 * gdzie nie ma „dania regionalnego".
 * Kąt od miasta, które przez pięćset lat żyło z żelaza,
 * a nie z jedzenia — i nie ma ani jednego produktu na liście
 * produktów tradycyjnych.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że są w Polsce miejsca z rozpoznawalną kuchnią i miejsca,
 *   które takiej kuchni nie mają — i że to drugie jest
 *   znacznie częstsze, niż się mówi,
 * — ŻE MAŁOMICE SĄ TAKIM MIEJSCEM I MÓWIĘ TO WPROST:
 *   miasto żyło z żelaza, nie z jedzenia; nie ma tu dania,
 *   które można by nazwać miejscowym,
 * — ŻE TO NIE JEST BRAK ANI WSTYD, tylko zwykły fakt
 *   gospodarczy — kuchnia regionalna rodzi się tam, gdzie
 *   był surowiec i handel nim,
 * — ŻE W TAKICH DOMACH KUCHNIA JEST SKŁADANA: z przepisów
 *   przywiezionych, podpatrzonych, wziętych z telewizji
 *   i od sąsiadki,
 * — ŻE TO JEST ZALETA, A NIE WADA — nikt nie pilnuje,
 *   czy robisz „poprawnie", i nie ma sporu o jedyną słuszną
 *   wersję,
 * — CO ROBIĆ ZAMIAST SZUKANIA TRADYCJI: zbudować własny
 *   repertuar — dziesięć dań, które umiesz i które lubicie,
 * — ŻE DANIE STAJE SIĘ „NASZE" PRZEZ POWTARZANIE, a nie
 *   przez pochodzenie: po trzech latach robienia go co drugi
 *   tydzień jest Wasze i tyle,
 * — ŻE WARTO JE ZAPISAĆ W SWOJEJ WERSJI, ze zmianami, które
 *   już wprowadziliście,
 * — ŻE KOŁA GOSPODYŃ WIEJSKICH I ŚWIETLICE robią dokładnie
 *   to samo w skali wsi — składają kuchnię z tego, co
 *   przynoszą ludzie,
 * — UCZCIWIE: urządzenie nie da Wam tradycji i nie zastąpi
 *   jej setką przepisów z ekranu,
 * — ale robi jedną rzecz dla takiego domu cenną: powtarza
 *   dokładnie. A skoro danie staje się własne przez
 *   powtarzanie, to powtarzalność jest tu warta więcej
 *   niż jakikolwiek przepis.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PROPORCJI.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH NAZW FIRM.
 * — ⚠⚠ ZERO SMUTKU I ZERO PROTEKCJONALNOŚCI. Piszę, że brak
 *   kuchni regionalnej to fakt, nie strata. NIE PISZĘ, że tu
 *   „nic nie ma" ani że mieszkańcy czegoś nie mają.
 *   TWARDA GRANICA.
 * — ⚠ ZERO tematów upadku przemysłu, bezrobocia i wyludniania.
 * — ZERO wymyślania miejscowych potraw.
 *
 * ⚠ ETYKA — LUBUSKIE:
 * — ZERO tematów wojennych i granicznych.
 * — ZERO wysiedleń i przesiedleń po 1945 r.
 * — ZERO „Ziem Odzyskanych" jako tematu politycznego.
 * — ZERO konfliktów narodowościowych i wyznaniowych.
 * — ZERO bezrobocia, biedy i wyludniania.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Co wygląda na tradycję,
 * a co nią jest" dotyczy odróżniania tradycji prawdziwej
 * od wymyślonej. „Przepisy, które przyjechały z ludźmi"
 * i „kuchnia, która przyjechała w walizkach" dotyczą kuchni
 * przywiezionej z konkretnego miejsca. „Stałe menu" dotyczy
 * powtarzalnego repertuaru jako zjawiska. „Odtwarzanie
 * przepisu, którego nikt nie zapisał" dotyczy rekonstrukcji.
 * „Wieś, która nie jest samowystarczalna" dotyczy zaopatrzenia.
 * Tutaj chodzi o SYTUACJĘ, W KTÓREJ NIE MA CZEGO ODTWARZAĆ
 * — i o to, że własną kuchnię trzeba wtedy po prostu zbudować.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ roku nadania praw miejskich.
 * — NIE PODAJĘ właścicieli miasta ani fundatorów pałacu.
 * — NIE UŻYWAM faktów z monografii o Stellerze i Gielczewskym.
 * — NIE WYMYŚLAM miejscowej potrawy, imprezy kulinarnej
 *   ani dożynek — nie ma ich w źródłach.
 * — NIE PRZYPISUJĘ Małomicom produktów z sąsiednich gmin.
 * — NIE PRZYPISUJĘ gminie Lubuskiego Święta Plonów.
 * — NIE MYLĘ MAŁOMIC z MAŁOMIERZYCAMI.
 * — districts: brak potwierdzonych osiedli. PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — miasto liczy ponad trzy tysiące mieszkańców na 6,8 km²,
 *   cała gmina ponad pięć tysięcy na 79,6 km², z sześcioma
 *   sołectwami — Bobrzanami, Chichami, Lubiechowem, Śliwnikiem,
 *   Żelisławiem i Janowcem — w których działają świetlice
 *   wiejskie, a przy większości koła gospodyń wiejskich;
 *   lasy zajmują blisko połowę powierzchni gminy,
 * — prawa miejskie Małomice odzyskały w drugiej połowie
 *   XX wieku,
 * — przez gminę płynie Bóbr, nazywany naturalną osią
 *   przestrzenną gminy; nad jego brzegami działały dawniej
 *   młyny, tartaki i zakłady hutnicze, a dolina Iławki,
 *   zwanej też Młynówką, w Bobrzanach była niegdyś miejscem
 *   młynów wodnych. W Małomicach jest zalew z piaszczystą
 *   plażą; historycznie to Dolny Śląsk, rubież Borów
 *   Dolnośląskich,
 * — produkcja żelaza rozwijała się tu od XV wieku, w XVIII
 *   i XIX stuleciu działały huty żelaza, a kolej doprowadzono
 *   w 1875 r.; za sprawą huty miasto przekształciło się
 *   w XIX w. w osiedle przemysłowe, a fabryka hutnicza
 *   zakończyła działalność w 1933 r.,
 * — kościół Narodzenia NMP wzniesiono w latach 1928–1929
 *   i konsekrowano 20 października 1929, a rozbudowano
 *   w latach 1984–1992; w Chichach stoi wczesnogotycki kościół
 *   świętego Jana Chrzciciela z drugiej połowy XIII w.,
 *   ze sklepieniem sieciowym z początku XVI stulecia
 *   i przebudowami z 1614 i 1710 r., oraz pałac wzniesiony
 *   w 1718 i przebudowany około 1840 r., w którym mieszczą się
 *   dziś pracownia ceramiki i pokoje gościnne; w Janowcu
 *   zachowały się ruiny zamku granicznego budowanego około
 *   1462 r., z pracami rozszerzonymi w latach 1541–1543,
 *   a w samych Małomicach park krajobrazowy po dawnym
 *   założeniu barokowym.
 */
export const MALOMICE: CityContent = {
  slug: "malomice",
  h1: "Thermomix Małomice – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Małomice — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Małomicach: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Małomice — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Małomicach. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Małomic z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do całej gminy.",

  highlights: highlightyStandardowe("Małomice i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Danie staje się „nasze” przez powtarzanie, a nie przez pochodzenie.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Małomicach – jak wygląda prezentacja?",
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
      id: "bez-tradycji",
      heading: "Miasto, które żyło z żelaza — czyli o kuchni bez własnej tradycji",
      paragraphs: [
        "Małomice przez pięćset lat żyły z żelaza. Produkcja rozwijała się tu od XV wieku, w XVIII i XIX stuleciu pracowały huty, a w XIX wieku miasto przekształciło się w osiedle przemysłowe. Nad Bobrem — nazywanym naturalną osią przestrzenną gminy — stały młyny i tartaki, a dolina Iławki w Bobrzanach, do dziś nazywana Młynówką, była miejscem młynów wodnych.",
        "Piszę to, bo prowadzi do rzeczy, której nie napiszę na żadnej innej stronie w tym serwisie. Małomice nie mają dania, które można by nazwać miejscowym. Nie ma tu produktu na ministerialnej liście, nie ma święta kulinarnego, nie ma potrawy, którą znałaby cała okolica.",
        "I to nie jest brak ani powód do wstydu, tylko zwykły fakt gospodarczy. Kuchnia regionalna rodzi się tam, gdzie był surowiec i handel nim: gdzie łowiono ryby, gdzie pasły się owce, gdzie rósł len albo winorośl. Tam, gdzie ludzie żyli z wytapiania żelaza, jadło się po prostu to, co dało się kupić.",
        "Takich miejsc jest w Polsce znacznie więcej, niż sugerują przewodniki. I warto powiedzieć wprost: kuchnia w takich domach jest składana. Z przepisów przywiezionych, podpatrzonych u sąsiadki, wziętych z telewizji, z internetu, od teściowej.",
        "Uważam, że to jest zaleta, nie wada. Nikt nie pilnuje, czy robisz „poprawnie”. Nie ma sporu o jedyną słuszną wersję ani o to, czy do tego dania wolno dodać paprykę. Można gotować to, co się chce, i nikt nie powie, że nie tak się to robi u nas.",
        "Praktyczny wniosek jest taki: zamiast szukać tradycji, której nie ma, warto zbudować własny repertuar. Dziesięć dań, które umiecie i które u Was lubią. Nie trzydzieści, nie sto — dziesięć. Tyle wystarczy, żeby mieć kuchnię.",
        "Bo danie staje się „nasze” przez powtarzanie, a nie przez pochodzenie. Przepis podpatrzony w internecie i robiony co drugi tydzień przez trzy lata jest po tych trzech latach Wasz. Dzieci będą go pamiętać jako domowy, a nie jako pobrany z sieci — i będą mieć rację.",
        "Warto tylko zapisać go w swojej wersji. Nie tej oryginalnej, ale tej ze zmianami, które już wprowadziliście: z mniejszą ilością cukru, bez papryki, z dodatkową cebulą. To ta wersja jest wasza i to ją warto mieć na papierze.",
        "Robią to zresztą dokładnie koła gospodyń wiejskich i świetlice, które działają w sołectwach gminy. Składają kuchnię z tego, co przynoszą ludzie — i po kilkunastu latach okazuje się, że na dożynkach pojawiają się „te nasze” placki, choć nikt nie pamięta, czyja babcia je przywiozła.",
        "Teraz uczciwie o sprzęcie. Thermomix nie da Wam tradycji i nie zastąpi jej setką przepisów na ekranie. Sto przepisów, z których używa się trzech, to nie jest kuchnia — to jest katalog.",
        "Robi natomiast jedną rzecz, która dla takiego domu jest cenniejsza, niż się wydaje: powtarza dokładnie. A skoro danie staje się własne właśnie przez powtarzanie, to powtarzalność jest tu warta więcej niż jakikolwiek przepis. Zwłaszcza gdy zaczyna się od zera i buduje swoją kuchnię od podstaw.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Małomicach?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedzcie przy umawianiu, jakie dania powtarzają się u Was najczęściej. To one są Waszą kuchnią i pod nie dobiorę pokaz.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Małomicach"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla małomickiej rodziny",
      paragraphs: [
        "Samo miasto liczy ponad trzy tysiące mieszkańców na niecałych siedmiu kilometrach kwadratowych, a cała gmina ponad pięć tysięcy na osiemdziesięciu, z sześcioma sołectwami — Bobrzanami, Chichami, Lubiechowem, Śliwnikiem, Żelisławiem i Janowcem — w których działają świetlice wiejskie, a przy większości koła gospodyń wiejskich; lasy zajmują blisko połowę powierzchni gminy. Prawa miejskie Małomice odzyskały w drugiej połowie XX wieku. Przez gminę płynie Bóbr, nazywany jej naturalną osią przestrzenną; nad jego brzegami działały dawniej młyny, tartaki i zakłady hutnicze, a dolina Iławki, zwanej Młynówką, w Bobrzanach była niegdyś miejscem młynów wodnych. W mieście jest zalew z piaszczystą plażą; historycznie to Dolny Śląsk, rubież Borów Dolnośląskich. Produkcja żelaza rozwijała się tu od XV wieku, w XVIII i XIX stuleciu działały huty, a kolej doprowadzono w 1875 roku. Kościół Narodzenia Najświętszej Marii Panny wzniesiono w latach 1928–1929 i konsekrowano 20 października 1929, a rozbudowano w latach 1984–1992. W Chichach stoi wczesnogotycki kościół świętego Jana Chrzciciela z drugiej połowy XIII wieku, ze sklepieniem sieciowym z początku XVI stulecia, oraz pałac wzniesiony w 1718 i przebudowany około 1840 roku, w którym mieszczą się dziś pracownia ceramiki i pokoje gościnne; w Janowcu zachowały się ruiny zamku granicznego budowanego około 1462 roku, a w samych Małomicach park krajobrazowy po dawnym założeniu barokowym.",
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

  districtsHeading: "Do których części gminy Małomice dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich sześciu sołectw. Dojazd jest wszędzie bezpłatny.",
    "Przy umawianiu wystarczy podać miejscowość i ulicę albo numer domu.",
  ],
  districts: [],

  nearbyHeading: "Poza Małomice też przyjadę",
  nearbyParagraphs: [
    "Szprotawa, Żagań, Nowogród Bobrzański, Żary i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Szprotawa", "Żagań", "Nowogród Bobrzański", "Żary"],

  about: blokOMnie("do Małomic", "w Małomicach i całej gminie", REGION_LUBUSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Małomic bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich sześciu sołectw. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku, bo nazwy bywają mylone: Małomice w powiecie żagańskim to nie Małomierzyce na Mazowszu.",
    },
    ...faqWspolne("w Małomicach"),
    {
      question: "Co gotować tam, gdzie nie ma kuchni regionalnej?",
      answer:
        "Budować własny repertuar zamiast szukać tradycji, której nie ma. Dziesięć dań, które umiecie i które u Was lubią, w zupełności wystarczy, żeby mieć kuchnię. Kuchnia regionalna rodzi się tam, gdzie był surowiec i handel nim — w miastach żyjących z przemysłu jadło się po prostu to, co dało się kupić.",
    },
    {
      question: "Czy przepis z internetu może stać się rodzinny?",
      answer:
        "Jak najbardziej. Danie staje się „nasze” przez powtarzanie, a nie przez pochodzenie — przepis robiony co drugi tydzień przez trzy lata jest po tych trzech latach Wasz. Warto go tylko zapisać w swojej wersji, ze zmianami, które już wprowadziliście.",
    },
    {
      question: "Czy Thermomix daje przepisy na dania regionalne?",
      answer:
        "Ma ich setki, ale sto przepisów, z których używa się trzech, to nie jest kuchnia, tylko katalog. Urządzenie daje co innego i cenniejszego dla domu, który buduje swój repertuar od zera: powtarza dokładnie, a to właśnie powtarzanie sprawia, że danie staje się własne.",
    },
  ],

  geo: { lat: 51.5558, lng: 15.4497 },
};
