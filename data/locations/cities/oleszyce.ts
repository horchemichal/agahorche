import type { CityContent } from "../city-content";
import {
  REGION_PODKARPACIE,
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
 * OLESZYCE — miasto w powiecie lubaczowskim, 2 803 mieszkańców
 * (31.12.2024, GUS), spadek o 13,3% od 2002 r. Lokowane w 1576 r.
 * przez wojewodę Hieronima Sieniawskiego POD NAZWĄ „HIERONIMÓW",
 * potwierdzenie przez Stefana Batorego 26 lutego 1578 r. W marcu
 * 2026 r. miasto obchodziło 450-lecie lokacji. Prawa miejskie
 * odzyskane w 1989 r.
 *
 * KĄT: pierogi. Jedyne miejsce w serwisie, gdzie tematem jest
 * danie, przy którym urządzenie robi DWIE TRZECIE roboty i ani
 * grama więcej — bo lepienie zostaje w rękach. Miasto, które
 * założono pod wymyślną nazwą „Hieronimów", a które i tak wróciło
 * do zwykłej, starszej nazwy, jest właściwym miejscem na tekst
 * o rzeczy najzwyklejszej, która przetrwała wszystko.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że ciasto i farsz to realna pomoc: wyrabianie ciasta
 *   pierogowego jest ciężkie, a farsz wymaga rozdrobnienia,
 * — że LEPIENIE ZOSTAJE RĘCZNE i żadne urządzenie tego nie zmieni,
 * — że to nie jest wada — przy pierogach ręce są sensem, nie
 *   przeszkodą, i wiele osób właśnie dlatego je robi,
 * — i uczciwie: kto nie lubi lepić, temu ten sprzęt nie pomoże.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNEJ RECEPTURY na ciasto ani farsz. To są rzeczy, które
 *   w tej okolicy robi się od pokoleń i nie moja rzecz je rozdawać.
 * — ŻADNYCH PORAD O MROŻENIU I PRZECHOWYWANIU pierogów ani
 *   o farszach mięsnych — to dziedzina bezpieczeństwa żywności.
 *   Ta sama rodzina odmów co surowe mięso w Modliborzycach.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNEGO SUGEROWANIA, że urządzenie „ułatwia" pierogi bardziej,
 *   niż faktycznie ułatwia. To jest sedno strony.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Makaron" (Radymno) też mówi
 * o cieście, ale tam problemem jest WAŁKOWANIE I CIĘCIE, a sedno
 * strony leży w sosie. Tutaj sedno jest w LEPIENIU jako czynności,
 * której się nie oddaje maszynie — i w tym, że to bywa świadomy
 * wybór. „Mielenie mięsa" (Modliborzyce) dotyczy samego mielenia.
 * „Mąka i mielenie" — ziarna. „Wprawa" (Janów Lubelski) mówi
 * o umiejętnościach ogólnie; tu chodzi o JEDNO konkretne danie.
 *
 * ŚWIADOME POMINIĘCIA — ODNOTOWANE, NIEUŻYTE:
 * — SKŁAD NARODOWOŚCIOWY MIASTA PRZED WOJNĄ (spis 1921: 51,7%
 *   ludności żydowskiej, 26,0% polskiej, 21,9% ukraińskiej)
 *   i to, co się z tym stało. Fakty sprawdzone. NIE UŻYWAM ICH.
 * — SPALENIE DUŻEJ CZĘŚCI MIASTA w nocy z 5 na 6 września 1945 r.
 *   oraz więzienie NKWD w zamku w 1941 r. Fakty sprawdzone.
 *   NIE UŻYWAM ICH — to nie są ozdobniki do strony o sprzęcie AGD.
 *
 * CZEGO NIE TWIERDZĘ, MIMO ŻE BYŁO KUSZĄCE:
 * — NIE PODAJĘ ROKU UTRATY PRAW MIEJSKICH. Trzy źródła podają trzy
 *   różne daty: 1880 (sztetl), 1896 (lista miejscowości pozbawionych
 *   praw) i 1915 (OFICJALNA STRONA MIASTA). Do tego jedno źródło
 *   opisuje aż dwie degradacje (1784 i 1896) z okresem miejskim
 *   1879–1896 pomiędzy. Nie rozstrzygam tego. Podaję tylko datę
 *   pewną: odzyskanie w 1989 r.,
 * — NIE PISZĘ, ŻE W OLESZYCACH STOI ZAMEK. NIE STOI. Rezydencja
 *   Sieniawskich SPŁONĘŁA DOSZCZĘTNIE 22 CZERWCA 1941 r., a mury
 *   rozebrano po wojnie. Zostały ziemne bastiony i park
 *   krajobrazowy. Gmina prowadzi wieloetapowy projekt
 *   zagospodarowania terenu, ale to nie jest istniejący zabytek
 *   i w tekście jest to napisane wprost,
 * — NIE PISZĘ O KLASZTORZE FRANCISZKANÓW. Nie znalazłem ŻADNEGO
 *   źródła potwierdzającego, że taki klasztor w Oleszycach istnieje.
 *   Zakładanie jego istnienia byłoby zgadywaniem,
 * — NIE WSKAZUJĘ NAJWIĘKSZEGO PRACODAWCY. Jedyna zidentyfikowana
 *   instytucja o znaczeniu gospodarczym to Nadleśnictwo Oleszyce,
 *   ale to nie to samo co największy pracodawca,
 * — NIE PODAJĘ żadnego produktu z Listy Produktów Tradycyjnych.
 *   Sprawdzona podkarpacka lista NIE ZAWIERA nic z Oleszyc ani
 *   z powiatu lubaczowskiego poza miodami z samego Lubaczowa —
 *   i tych oczywiście nie przypisuję Oleszycom,
 * — NIE wymyślam osiedli. Brak wykazu. districts to PUSTA TABLICA.
 *   Uwaga: w gminie istnieje odrębna miejscowość STARE OLESZYCE,
 *   której relacji do miasta nie zweryfikowałem — nie mieszam ich.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — lokacja 1576 r. przez Hieronima Sieniawskiego pod nazwą
 *   „Hieronimów", na prawie magdeburskim; potwierdzenie przez
 *   Stefana Batorego 26 lutego 1578 r.,
 * — 450-lecie lokacji obchodzone w marcu 2026 r.,
 * — prawa miejskie odzyskane w 1989 r.,
 * — rezydencja Sieniawskich spłonęła 22 czerwca 1941 r.; pozostały
 *   ziemne bastiony i park krajobrazowy,
 * — w mieście ma siedzibę Nadleśnictwo Oleszyce,
 * — 2 803 mieszkańców (31.12.2024), spadek o 13,3% od 2002 r.
 */
export const OLESZYCE: CityContent = {
  slug: "oleszyce",
  h1: "Thermomix Oleszyce – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Oleszyce — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Oleszycach: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Oleszyce — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Oleszycach. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Oleszyc z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do miejscowości gminy.",

  highlights: highlightyStandardowe("Oleszyce i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-6.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Ciasto i farsz — tak. Lepienie — Wasze i tylko Wasze.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Oleszycach – jak wygląda prezentacja?",
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
      id: "pierogi",
      heading: "Miasto, które nazwano Hieronimowem — czyli o pierogach",
      paragraphs: [
        "Oleszyce lokowano w 1576 roku, a wojewoda Hieronim Sieniawski nazwał nowe miasto na własną cześć: Hieronimów. Dwa lata później, dwudziestego szóstego lutego 1578 roku, lokację potwierdził w Warszawie Stefan Batory. Ta wymyślna nazwa się jednak nie przyjęła — miasto wróciło do starszej, zwyklejszej, i nosi ją do dziś. W marcu 2026 roku obchodzono tu czterysta pięćdziesiąt lat od lokacji.",
        "To jest dobre miejsce, żeby napisać o rzeczy najzwyklejszej z możliwych, która też przetrwała wszystko: o pierogach.",
        "Zacznę od tego, co urządzenie faktycznie robi, bo robi sporo. Wyrabia ciasto — a ciasto pierogowe jest ciężkie i wyrabianie go ręcznie potrafi zniechęcić bardziej niż cała reszta razem wzięta. Robi farsz: rozdrabnia, miksuje, gotuje to, co ma być ugotowane. Dwa z trzech etapów są po jego stronie i to nie jest mało.",
        "A teraz trzeci etap, i tu nie ma o czym dyskutować: lepienie zostaje w rękach. Całe. Każdy pieróg z osobna, tak jak zawsze. Żadne urządzenie w tej klasie tego nie zmieni i nikt, kto Wam mówi inaczej, nie mówi prawdy.",
        "Powiem jednak coś, czego nie usłyszycie na pokazie sprzętu, bo nie sprzyja sprzedaży: przy pierogach ręce nie są przeszkodą. Są sensem. W wielu domach lepienie jest tym, po co się w ogóle siada razem przy stole — z dziećmi, z siostrą, z teściową — i gdyby maszyna to przejęła, zniknęłoby dokładnie to, co w tym najlepsze. Nie sprzedaję sprzętu jako sposobu na skrócenie czegoś, co ludzie robią dla samej czynności.",
        "Z tego wynika prosta rzecz: jeśli ktoś nie lubi lepić i liczy, że urządzenie go z tego zwolni — nie zwolni. Lepiej to wiedzieć przed zakupem. Jeśli natomiast lepienie Wam nie przeszkadza, a zniechęca Was wyrabianie ciasta i szykowanie farszu, to jest dokładnie ta sytuacja, w której sprzęt zdejmuje właściwą część roboty.",
        "Receptury nie podam ani na ciasto, ani na farsz. W tej okolicy robi się to od pokoleń i nie moja rzecz rozdawać cudze przepisy. Nie doradzę też nic o mrożeniu, przechowywaniu ani o farszach mięsnych — to jest dziedzina bezpieczeństwa żywności, a ja jestem przedstawicielką handlową.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Oleszycach?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli chcecie zobaczyć akurat ciasto pierogowe — powiedzcie przy umawianiu. To jest krótkie, a różnicę widać od razu, bo wyrabianie jest tym etapem, który najbardziej męczy.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Oleszycach"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla oleszyckiej rodziny",
      paragraphs: [
        "Oleszyce liczą nieco ponad dwa tysiące osiemset mieszkańców i od dwóch dekad ich ubywa. Prawa miejskie miasto odzyskało w 1989 roku. Rezydencji Sieniawskich, którą można znaleźć na starych opisach, dziś nie ma — spłonęła doszczętnie dwudziestego drugiego czerwca 1941 roku, a mury rozebrano po wojnie; zostały ziemne bastiony i park. W mieście ma siedzibę nadleśnictwo.",
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

  districtsHeading: "Do których części Oleszyc dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do miejscowości gminy, bez dopłaty za dojazd.",
    "Miasto nie publikuje wykazu osiedli, więc nie będę wymyślać nazw; przy umawianiu wystarczy podać ulicę albo miejscowość.",
  ],
  districts: [],

  nearbyHeading: "Poza Oleszyce też przyjadę",
  nearbyParagraphs: [
    "Lubaczów, Cieszanów, Jarosław, Sieniawa i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Lubaczów", "Cieszanów", "Jarosław", "Sieniawa", "Narol", "Radymno"],

  about: blokOMnie("do Oleszyc", "w Oleszycach i okolicy", REGION_PODKARPACIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Oleszyc bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do miejscowości gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Oleszycach"),
    {
      question: "Czy Thermomix zrobi pierogi?",
      answer:
        "Dwa etapy z trzech — tak. Wyrobi ciasto, co jest realną pomocą, bo ciasto pierogowe jest ciężkie, i przygotuje farsz. Lepienia natomiast nie zrobi: to zostaje w rękach, każdy pieróg z osobna. Jeśli ktoś liczy, że urządzenie go z lepienia zwolni, wolę powiedzieć od razu, że nie zwolni.",
    },
    {
      question: "Skoro lepienie i tak zostaje, to czy warto?",
      answer:
        "Zależy, co Was męczy. Jeśli zniechęca Was wyrabianie ciasta i szykowanie farszu — warto, bo dokładnie te dwie rzeczy przechodzą na sprzęt. Jeśli nie lubicie samego lepienia, urządzenie tego nie rozwiąże. Dodam też rzecz, której nie usłyszycie na pokazie: w wielu domach lepienie jest tym, po co się siada razem przy stole, i nie uważam, żeby to była czynność do skracania.",
    },
  ],

  geo: { lat: 50.1653, lng: 23.0344 },
};
