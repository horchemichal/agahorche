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
 * CZARNA WODA — miasto w powiecie starogardzkim, 2 643
 * mieszkańców (31.12.2024, GUS); gmina 2 999. Brief mówił
 * 3 000 dla miasta — zawyżone.
 *
 * PRAWA MIEJSKIE 1 STYCZNIA 1993 r. Od 1 STYCZNIA 2014 r.
 * gmina jest MIEJSKO-WIEJSKA, nie miejska (portal ZPP wciąż
 * podaje błędnie). Sołectwa: LUBIKI i HUTA KALNA — przyłączone
 * w 1995 r., status wsi odzyskały w 2014 r.
 *
 * OBALONE, WAŻNE: Czarna Woda NIE JEST jednym z najmniejszych
 * miast w Polsce. Ma 2 643 mieszkańców; najmniejsze to Wiślica
 * (465), Józefów nad Wisłą (812), Działoszyce (848),
 * Wyśmierzyce (878), Suraż (974). Slogan jest fałszywy
 * i NIE WEJDZIE na tę stronę.
 * OBALONE: nie jest też najmłodszym miastem Polski —
 * najmłodsze to piętnaście miast, które prawa odzyskały
 * 1 stycznia 2023 r.
 * OBALONE: gmina lokuje się na KOCIEWIU, nie na Kaszubach.
 * OBALONE: zakład produkował PŁYTY PILŚNIOWE, nie wiórowe.
 *
 * HISTORIA: osada u schyłku XVIII w. przy brodzie przez rzekę
 * ZŁE MIĘSO, z karczmą. W poł. XIX w. KANAŁ WDY i nawodnienia
 * ok. 700 ha łąk — akwedukty, zastawki i śluzy zachowane
 * do dziś. Kolej Chojnice–Starogard w 1873 r. W 1931 r. — 74
 * domy i 676 mieszkańców.
 *
 * RZEKA WDA, zwana też CZARNĄ WODĄ — szlak kajakowy 198 km;
 * odcinek Czarna Woda–Tleń (94 km) pokonuje latem ok. 12 000
 * kajakarzy. LESISTOŚĆ GMINY 55,2%.
 *
 * KĄT: OWOCE LEŚNE — jagody i żurawina. Kąt czysty, sezonowy
 * i osadzony w tym, że ponad połowa gminy to las. GRZYBY
 * SĄ ZAJĘTE (trzy strony w serwisie) i o nich nie piszę.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że urządzenie nie zbiera i nie rozpoznaje niczego —
 *   ODMAWIAM porad w rozpoznawaniu roślin dziko rosnących,
 * — że owoce leśne są drobne i miękkie, więc nóż zamienia
 *   je w mus w kilka sekund — czasem szybciej, niż się chce,
 * — co robi dobrze: mus, przecier, nadzienie, sos do mięsa
 *   i sera, koktajl z mrożonych owoców, masa do ciasta,
 * — że mrożone owoce rozbija bez rozmrażania i to jest realna
 *   zaleta poza sezonem,
 * — że pestek i szypułek nie usunie i trzeba je wybrać
 *   wcześniej,
 * — że przecieranie przez sito znika, a to była najgorsza
 *   część roboty z malinami i jagodami,
 * — i ODMOWA: nic o przetworach w słoikach, pasteryzacji
 *   i o zdrowiu.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNEGO DORADZANIA W ZBIERANIU I ROZPOZNAWANIU ROŚLIN
 *   DZIKO ROSNĄCYCH. ODMOWA STOI W TEKŚCIE.
 * — ŻADNYCH PORAD O PRZETWORACH W SŁOIKACH, PASTERYZACJI
 *   I PRZECHOWYWANIU.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH — „antyoksydanty",
 *   żurawina „na coś", witaminy. MÓWIĘ NIE.
 * — ŻADNYCH GRZYBÓW — kąt zajęty przez inne miasta.
 * — ŻADNYCH NAZW FIRM, w tym obecnego zakładu.
 * — NIE ROBIĘ TŁA z upadku państwowego zakładu ani
 *   z zależności miasta od jednego pracodawcy.
 * — NIE PISZĘ o nawałnicy z 2017 r. — zasięgu dla tej gminy
 *   nie potwierdzono, a nawet gdyby, to nie jest scenografia.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Grzyby" mają trzy strony
 * i tu ich nie ma. „Dżemy i konfitury" (Paczków) dotyczą
 * przetworów gotowanych z cukrem. „Kompoty i musy" (Biała)
 * dotyczą owoców z ogrodu i napojów. „Żelki, galaretki
 * i kisiele" (Otmuchów) dotyczą rzeczy, które tężeją. Tutaj
 * chodzi o OWOCE LEŚNE jako surowiec: drobne, miękkie,
 * sezonowe, najczęściej mrożone.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PISZĘ, że to jedno z najmniejszych ani najmłodszych
 *   miast w Polsce. NIE JEST.
 * — NIE PISZĘ, że to gmina miejska. Od 2014 r. jest
 *   miejsko-wiejska.
 * — NIE PISZĘ, że to Kaszuby. Gmina lokuje się na Kociewiu.
 * — NIE PODAJĘ nazwy zakładu ani liczby zatrudnionych.
 * — NIE PISZĘ o produkcie z Listy Produktów Tradycyjnych.
 * — districts: miasto nie ma osiedli statutowych.
 *   PUSTA TABLICA. Lubiki i Huta Kalna to SOŁECTWA, nie
 *   dzielnice, i tak je nazywam.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — 2 643 mieszkańców miasta, 2 999 gminy (31.12.2024, GUS),
 * — prawa miejskie 1 stycznia 1993 r.; od 1 stycznia 2014 r.
 *   gmina miejsko-wiejska z sołectwami Lubiki i Huta Kalna,
 * — osada powstała u schyłku XVIII w. przy brodzie przez rzekę
 *   Złe Mięso,
 * — w poł. XIX w. Kanał Wdy i nawodnienie ok. 700 ha łąk;
 *   zachowane akwedukty, zastawki i śluzy,
 * — kolej Chojnice–Starogard w 1873 r.; w 1931 r. 74 domy
 *   i 676 mieszkańców,
 * — Wda (zwana też Czarną Wodą): szlak kajakowy 198 km,
 *   odcinek do Tlenia 94 km, ok. 12 000 kajakarzy latem,
 * — lesistość gminy 55,2%,
 * — Szlak Kamiennych Kręgów prowadzi stąd do Odrów.
 */
export const CZARNA_WODA: CityContent = {
  slug: "czarna-woda",
  h1: "Thermomix Czarna Woda – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Czarna Woda (pomorskie) — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Czarnej Wodzie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Czarna Woda — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Czarnej Wodzie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Czarnej Wody z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta oraz do Lubik i Huty Kalnej.",

  highlights: highlightyStandardowe("Czarna Woda, Lubiki i Huta Kalna"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Mrożone owoce rozbija bez rozmrażania. Sito idzie do szafki.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Czarnej Wodzie – jak wygląda prezentacja?",
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
      id: "owoce-lesne",
      heading: "Ponad połowa gminy to las — czyli o jagodach, żurawinie i o sicie",
      paragraphs: [
        "Zacznę od sprostowania, bo o Czarnej Wodzie powtarza się w internecie nieprawdę. To nie jest jedno z najmniejszych miast w Polsce — ma dwa tysiące sześćset mieszkańców, a najmniejsze polskie miasta liczą po czterysta, osiemset osób. Nie jest też najmłodszym miastem w kraju: prawa miejskie dostała 1 stycznia 1993 roku, a piętnaście innych miast odzyskało je dopiero w 2023. I jeszcze jedno, bo bywa mylone: to Kociewie, nie Kaszuby, a od 2014 roku jest to gmina miejsko-wiejska z dwoma sołectwami — Lubikami i Hutą Kalną.",
        "Co jest natomiast prawdą: ponad pięćdziesiąt pięć procent gminy to las. Miasto zaczęło się u schyłku osiemnastego wieku od karczmy przy brodzie przez rzekę o nazwie Złe Mięso, a w połowie dziewiętnastego zbudowano tu Kanał Wdy z akweduktami i śluzami, żeby nawodnić siedemset hektarów łąk. Rzeka Wda, zwana też Czarną Wodą, prowadzi jeden z najdłuższych szlaków kajakowych w Polsce.",
        "Skoro las — napiszę o owocach leśnych. O grzybach nie, bo o nich w tym serwisie już napisałam gdzie indziej i nie będę się powtarzać.",
        "Najpierw odmowa, bo jest ważna: nie doradzę Wam nic w sprawie zbierania i rozpoznawania roślin dziko rosnących. Ani co wolno zbierać, ani jak odróżnić jedno od drugiego. Zakładam, że przynosicie do domu to, co znacie — bo w tej okolicy ludzie znają — i piszę wyłącznie o tym, co się z tym robi w kuchni.",
        "Rzecz pierwsza, techniczna: owoce leśne są drobne i miękkie, więc nóż rozbija je w kilka sekund. Czasem szybciej, niż byście chcieli — z borówek robi się mus, zanim zdążycie policzyć do pięciu. To znaczy, że przy owocach pracuje się krótko i patrząc, a nie na czas.",
        "Rzecz druga i dla mnie najważniejsza: znika przecieranie przez sito. Kto kiedykolwiek przecierał maliny albo jagody, żeby pozbyć się pestek i skórek, wie, że to jest najgorsza pół godzina całego lata. Tutaj masa wychodzi z naczynia gładka.",
        "Rzecz trzecia, na resztę roku: mrożone owoce rozbija bez rozmrażania. Prosto z zamrażarki, w kilkanaście sekund, na mus albo na koktajl. To jest ta funkcja, dzięki której worek jagód z sierpnia ma sens jeszcze w lutym. Zaznaczę tylko od razu, bo to częste nieporozumienie: to nie urządzenie mrozi — ono tylko rozbija to, co wcześniej zamroziła zamrażarka.",
        "Czego nie zrobi: nie usunie szypułek ani pestek. Wiśnie, śliwki, dziką różę trzeba przygotować wcześniej i tego nie da się obejść.",
        "I ostatnie dwie granice. Nie doradzę Wam nic o przetworach w słoikach, o pasteryzacji ani o przechowywaniu — to jest bezpieczeństwo żywności i osobna wiedza. I nie napiszę ani słowa o tym, że jagody albo żurawina są na coś dobre. Wiem, ile się o tym pisze. Ja mówię o smaku.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Czarnej Wodzie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeżeli macie w zamrażarce worek owoców z lata — wyjmijcie go przed moim przyjazdem i zrobimy z niego mus na miejscu, prosto z mrożonki.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Czarnej Wodzie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Czarnej Wody",
      paragraphs: [
        "Czarna Woda liczy nieco ponad dwa i pół tysiąca mieszkańców, a cała gmina niecałe trzy. Prawa miejskie otrzymała 1 stycznia 1993 roku, a od 1 stycznia 2014 roku jest gminą miejsko-wiejską z sołectwami Lubiki i Huta Kalna. Ponad połowę jej powierzchni zajmują lasy. Historia zaczęła się od karczmy przy brodzie, a w połowie dziewiętnastego wieku powstał tu Kanał Wdy z akweduktami i śluzami, nawadniający siedemset hektarów łąk — zachowany do dziś. Latem odcinkiem Wdy stąd do Tlenia spływa około dwunastu tysięcy kajakarzy.",
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

  districtsHeading: "Do których części gminy Czarna Woda dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta oraz do obu sołectw gminy — Lubik i Huty Kalnej. Dojazd jest wszędzie bezpłatny.",
    "Miasto nie dzieli się na osiedla statutowe, więc przy umawianiu wystarczy podać ulicę albo miejscowość.",
  ],
  districts: [],

  nearbyHeading: "Poza Czarną Wodę też przyjadę",
  nearbyParagraphs: [
    "Czersk, Skórcz, Starogard Gdański, Chojnice, Brusy i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Czersk", "Skórcz", "Starogard Gdański", "Chojnice", "Brusy"],

  about: blokOMnie("do Czarnej Wody", "w Czarnej Wodzie i okolicy", REGION_POMORZE),

  faq: [
    {
      question: "Czy dojeżdżasz do Czarnej Wody bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta oraz do Lubik i Huty Kalnej. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku: chodzi o miasto w powiecie starogardzkim w pomorskim — nie o rzekę Czarną Wodę, czyli Wdę, i nie o Czarne w powiecie człuchowskim.",
    },
    ...faqWspolne("w Czarnej Wodzie"),
    {
      question: "Czy poradzi sobie z mrożonymi owocami?",
      answer:
        "Tak, i to jest jedna z jego lepszych stron. Rozbija je prosto z zamrażarki, bez rozmrażania, w kilkanaście sekund — na mus albo koktajl. Zaznaczę tylko, że to nie urządzenie mrozi; ono rozbija to, co zamroziła zamrażarka.",
    },
    {
      question: "Czy usunie pestki i szypułki?",
      answer:
        "Nie. Wiśnie, śliwki czy dziką różę trzeba przygotować wcześniej i nie da się tego obejść. Znika za to przecieranie przez sito — masa z malin czy jagód wychodzi z naczynia gładka, bez tej najgorszej pół godziny całego lata.",
    },
    {
      question: "Doradzisz, co można zbierać w lesie?",
      answer:
        "Nie i nie będę udawać, że umiem. Zbieranie i rozpoznawanie roślin dziko rosnących to nie moja dziedzina, a pomyłka bywa poważna. Nie doradzę też nic o przetworach w słoikach i pasteryzacji, ani nie napiszę, że jakiekolwiek owoce są na coś dobre.",
    },
  ],

  geo: { lat: 53.8446, lng: 18.1001 },
};
