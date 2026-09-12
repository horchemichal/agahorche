import type { CityContent } from "../city-content";
import {
  REGION_POMORZE,
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
 * NOWY DWÓR GDAŃSKI — miasto powiatowe na Żuławach, 9 435
 * mieszkańców (31.12.2024, GUS). W briefie 10 000 — zawyżone.
 * Nazywany „stolicą Żuław".
 *
 * OBALONE, WAŻNE: NAJNIŻSZY PUNKT POLSKI leży w MARZĘCINIE
 * w gminie Nowy Dwór Gdański — 2,2 m p.p.m. NIE w Raczkach
 * Elbląskich, jak podaje ogromna część źródeł. Pomiar
 * geodezyjny potwierdził Marzęcino.
 *
 * PRODUKT Z LISTY PRODUKTÓW TRADYCYJNYCH: TWARÓG ŻUŁAWSKI
 * Z MARZĘCINA, wpis 23 stycznia 2018 r. TO JEST OŚ STRONY —
 * i pięknie się składa, bo to ta sama miejscowość co najniższy
 * punkt kraju.
 *
 * MLECZARNIA: spółdzielnia mleczarska przerabiająca ok. 40 mln
 * litrów mleka rocznie. NAZWY NIE PODAJĘ.
 *
 * DZIEDZICTWO MENNONICKIE: osadnicy z Niderlandów od XVI w.,
 * to oni osuszyli Żuławy. Zachowane domy podcieniowe, cmentarze.
 * Miejscowa wytwórnia nalewki jałowcowej działa od 1776 r. —
 * NAZWY NIE PODAJĘ i O ALKOHOLU NIE PISZĘ NIC WIĘCEJ.
 *
 * ŻUŁAWSKA KOLEJ DOJAZDOWA — wąskotorówka, kursuje w 2026 r.
 *
 * KĄT: TWARÓG. Domowy ser twarogowy — co urządzenie z tym zrobi,
 * a czego nie. Twaróg żuławski z Marzęcina daje temu kątowi
 * twardą, sprawdzoną podstawę.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że twarogu z mleka SUROWEGO nie robimy i tego nie doradzam
 *   — ODMOWA MUSI BYĆ WYRAŹNA,
 * — że urządzenie NIE JEST serowarnią i nie zastępuje wiedzy
 *   o serowarstwie,
 * — co realnie robi: podgrzewa równomiernie z mieszaniem, więc
 *   mleko się nie przypala i nie kożuszy — to jest cała jego
 *   rola w tym temacie i jest ona rzeczywista,
 * — co robi z GOTOWYM twarogiem: masy serowe, pasty, sernik na
 *   zimno, kremy, farsze do pierogów — na gładko, bez sita,
 * — że przetarcie twarogu przez sito to jedna z najbardziej
 *   znienawidzonych czynności w polskiej kuchni i to akurat
 *   znika naprawdę,
 * — i że dobrego twarogu ze sklepu ono nie poprawi.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNEGO MLEKA SUROWEGO, ŻADNEJ PASTERYZACJI W DOMU,
 *   ŻADNYCH PORAD O KULTURACH BAKTERII I PODPUSZCZCE.
 *   ODMOWA STOI W TEKŚCIE.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH (białko, wapń, dieta).
 * — ŻADNYCH NAZW FIRM — ani mleczarni, ani wytwórni.
 * — O ALKOHOLU nie piszę poza jednym neutralnym zdaniem
 *   historycznym; żadnych przepisów na nalewki.
 * — NIE PODAJĘ warunków przechowywania nabiału.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Bita śmietana" (Kietrz)
 * dotyczy ubijania i tłuszczu w śmietanie. „Mleko dla niemowlaka"
 * (Morawica) dotyczy dziecka. Tutaj chodzi o TWARÓG jako produkt
 * i o pracę z nim.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PISZĘ, że najniższy punkt Polski jest w Raczkach
 *   Elbląskich. JEST W MARZĘCINIE, 2,2 m p.p.m.
 * — NIE PODAJĘ nazwy mleczarni ani wytwórni nalewki.
 * — NIE PODAJĘ rozkładu ani cen kolei wąskotorowej — piszę
 *   tylko, że kursuje.
 * — NIE OPISUJĘ receptury twarogu żuławskiego. Wymieniam wpis
 *   na Listę i tyle.
 * — districts: miasto nie ma statutowych osiedli. PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — 9 435 mieszkańców (31.12.2024, GUS),
 * — najniższy punkt Polski: Marzęcino, 2,2 m p.p.m.,
 * — twaróg żuławski z Marzęcina na Liście Produktów
 *   Tradycyjnych od 23 stycznia 2018 r.,
 * — miejscowa spółdzielnia mleczarska przerabia ok. 40 mln
 *   litrów mleka rocznie,
 * — Żuławy osuszone przez osadników mennonickich od XVI w.;
 *   zachowane domy podcieniowe,
 * — Żuławska Kolej Dojazdowa kursuje.
 */
export const NOWY_DWOR_GDANSKI: CityContent = {
  slug: "nowy-dwor-gdanski",
  h1: "Thermomix Nowy Dwór Gdański – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Nowy Dwór Gdański — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Nowym Dworze Gdańskim: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i Żuławy. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Nowy Dwór Gdański — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Nowym Dworze Gdańskim. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Nowego Dworu Gdańskiego z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wsi żuławskich.",

  highlights: highlightyStandardowe("Nowy Dwór Gdański i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Koniec z przecieraniem twarogu przez sito. To akurat znika naprawdę.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Nowym Dworze Gdańskim – jak wygląda prezentacja?",
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
      id: "twarog",
      heading: "Twaróg z Marzęcina — czyli o serze, sicie i o tym, czego nie zrobię",
      paragraphs: [
        "W gminie Nowy Dwór Gdański leży Marzęcino — najniżej położone miejsce w Polsce, dwa metry i dwadzieścia centymetrów poniżej poziomu morza. Warto to napisać, bo połowa źródeł podaje w tym miejscu Raczki Elbląskie, a pomiar geodezyjny mówi co innego. I z tej samej wsi pochodzi twaróg żuławski z Marzęcina, wpisany na Listę Produktów Tradycyjnych 23 stycznia 2018 roku. Miejscowa mleczarnia przerabia rocznie około czterdziestu milionów litrów mleka. Trudno o lepsze miejsce, żeby napisać o twarogu uczciwie.",
        "Zacznę od odmowy, bo ona jest najważniejsza. Nie doradzę Wam robienia sera z mleka surowego. Ani w tym urządzeniu, ani w garnku, ani w żaden inny sposób. Mleko prosto od krowy to jest temat, w którym pomyłka kończy się chorobą, a nie nieudanym deserem — i nie będę udawać, że mam tu kompetencje. Nie napiszę też nic o pasteryzacji w domu, o kulturach bakterii ani o podpuszczce. To jest serowarstwo, osobne rzemiosło, i po tę wiedzę trzeba pójść gdzie indziej.",
        "Teraz to, co jest prawdą — i jest jej mniej, niż by chciał sprzedawca.",
        "Urządzenie nie jest serowarnią. Jedyne, co robi w temacie robienia sera, to podgrzewa mleko równomiernie i przy stałym mieszaniu, więc nie przypala się na dnie i nie robi kożucha. To jest realna pomoc i każdy, kto kiedyś przypalił mleko w garnku, wie ile warta. Ale to jest cała jej rola. Reszta — co dolać, jak długo trzymać, jak odcedzić — to nie sprzęt, tylko wiedza, i sprzęt jej nie zastąpi.",
        "Za to z GOTOWYM twarogiem robi rzecz, dla której naprawdę warto. Znika przecieranie przez sito. Ta jedna czynność — kwadrans przy misce, obolałe ramię, sito do mycia — po prostu przestaje istnieć, bo masa wychodzi gładka z naczynia. Sernik, masa na kołacz, masa do naleśników, farsz do pierogów ruskich i leniwych, pasta na kanapki z rzodkiewką i szczypiorkiem, dip. Wszystko na gładko, w jednym naczyniu, w kilkadziesiąt sekund.",
        "I ostatnia rzecz, uczciwie: jeżeli macie tu dostęp do dobrego twarogu — a macie — to żadne urządzenie go nie poprawi. Ono tylko oszczędza Wam roboty przy nim. Czasem to jest dokładnie to, o co chodzi.",
        "Dodam jedno zdanie historyczne, bo bez niego obraz Żuław jest niepełny: te pola i te rowy istnieją dlatego, że od XVI wieku osuszali je osadnicy mennoniccy, po których zostały domy podcieniowe i cmentarze. Ziemia, z której bierze się tutejsze mleko, jest w dosłownym sensie zrobiona ludzką ręką.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Nowym Dworze Gdańskim?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeżeli chcesz zobaczyć masę serową bez sita — kup twaróg przed moim przyjazdem i zrobimy ją na miejscu.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Nowym Dworze Gdańskim"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla nowodworskiej rodziny",
      paragraphs: [
        "Nowy Dwór Gdański liczy niecałe dziewięć i pół tysiąca mieszkańców i bywa nazywany stolicą Żuław. W gminie leży Marzęcino — najniżej położony punkt Polski, dwa metry i dwadzieścia centymetrów poniżej poziomu morza — i stamtąd pochodzi twaróg żuławski, na Liście Produktów Tradycyjnych od stycznia 2018 roku. Krajobraz Żuław jest dziełem osadników mennonickich, którzy od XVI wieku osuszali te tereny; została po nich charakterystyczna zabudowa podcieniowa. Przez gminę kursuje też Żuławska Kolej Dojazdowa, wąskotorówka, która w 2026 roku nadal wozi pasażerów.",
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

  districtsHeading: "Do których części Nowego Dworu Gdańskiego dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wsi gminy — Marzęcina, Kmiecina, Lubieszewa, Orłowa, Jazowej, Tujska i pozostałych. Dojazd jest wszędzie bezpłatny.",
    "Miasto nie dzieli się na statutowe osiedla, więc przy umawianiu wystarczy podać ulicę albo miejscowość.",
  ],
  districts: [],

  nearbyHeading: "Poza Nowy Dwór Gdański też przyjadę",
  nearbyParagraphs: [
    "Nowy Staw, Malbork, Sztutowo, Krynica Morska, Elbląg, Pruszcz Gdański i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Nowy Staw", "Malbork", "Sztutowo", "Krynica Morska", "Elbląg", "Pruszcz Gdański"],

  about: blokOMnie("do Nowego Dworu Gdańskiego", "w Nowym Dworze Gdańskim i na Żuławach", REGION_POMORZE),

  faq: [
    {
      question: "Czy dojeżdżasz do Nowego Dworu Gdańskiego bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wsi gminy, w tym do Marzęcina i Lubieszewa. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Nowym Dworze Gdańskim"),
    {
      question: "Zrobię w nim domowy twaróg?",
      answer:
        "Nie doradzę robienia sera z mleka surowego — ani w tym urządzeniu, ani w garnku. To temat, w którym pomyłka kończy się chorobą, i nie będę udawać, że mam tu kompetencje. Nie napiszę też nic o pasteryzacji w domu, kulturach bakterii ani podpuszczce.",
    },
    {
      question: "To co urządzenie robi z mlekiem?",
      answer:
        "Podgrzewa je równomiernie i przy stałym mieszaniu, więc nie przypala się na dnie i nie robi kożucha. To realna pomoc, ale to cała jego rola — reszta to wiedza serowarska, której sprzęt nie zastąpi.",
    },
    {
      question: "A z gotowym twarogiem?",
      answer:
        "Tu jest jego prawdziwa robota: znika przecieranie przez sito. Masa na sernik, na kołacz, do naleśników, farsz do pierogów, pasta na kanapki — wszystko na gładko, w jednym naczyniu, w kilkadziesiąt sekund.",
    },
  ],

  geo: { lat: 54.2131, lng: 19.1178 },
};
