import type { CityContent } from "../city-content";
import {
  REGION_WARMIA_MAZURY,
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
 * PIENIĘŻNO — gmina miejsko-wiejska w powiecie braniewskim.
 * MIASTO 2 400, GMINA 5 465 (GUS 31.12.2024).
 * ⚠ Notatka projektowa podawała 2 600 — ZAWYŻONE.
 * LICZBY SOŁECTW NIE PODAJĘ — nie potwierdzono.
 * NIE MA osobnej gminy wiejskiej.
 *
 * PRAWA MIEJSKIE 1312 r., prawo chełmińskie, zasadźca
 * TEODORYK Z LICHTENFELD. ⚠ Inne źródło podaje 1295 —
 * KONFLIKT. Piszę „na początku XIV wieku".
 * ⚠ WARMIA, ale domena KAPITUŁY WARMIŃSKIEJ, nie biskupa.
 * To istotne rozróżnienie: Warmia dzieliła się na domenę
 * biskupią i komornictwa kapituły.
 * UTRATA PRAW 1945, ODZYSKANIE 1973.
 *
 * MOST KOLEJOWY NAD WAŁSZĄ — NAJWYŻSZY CZYNNY most kolejowy
 * w Polsce. 157 m długości, dwa filary po 28 m, trzy przęsła
 * łukowe, oddany 1884 r.
 * ⚠ ZAWSZE ZE SŁOWEM „CZYNNY" — wiadukty w Stańczykach są
 * wyższe, ale nieczynne. Bez tego zastrzeżenia to nieprawda.
 * ZAMEK KAPITUŁY WARMIŃSKIEJ — I poł. XIV w. Zachowane
 * skrzydło zachodnie i mury skrzydła północnego.
 * MUZEUM MISYJNO-ETNOGRAFICZNE KSIĘŻY WERBISTÓW — jeden
 * z najbogatszych kościelnych zbiorów tego typu w Polsce:
 * Daleki Wschód, Afryka, Ameryka Łacińska, Oceania.
 * TO JEST PODSTAWA KĄTA.
 * KOŚCIÓŁ ŚŚ. APOSTOŁÓW PIOTRA I PAWŁA — 1897 r.; figury
 * patronów z 1688 r. SZPITAL ŚW. JERZEGO — 1359 r.
 * RZEKA WAŁSZA opływa wysoczyznę miejską.
 * HERB: TRZY WORKI MĄKI — od zniekształconej pruskiej nazwy.
 * ⚠ Nazwa miasta pochodzi od Seweryna Pieniężnego (nadanie
 * polskiej nazwy 1947), NIE od pieniędzy.
 * ⚠ CITTASLOW: NIE NALEŻY.
 * ⚠ Kopernik rezydował tu jako administrator komornictwa
 * od października 1518 do marca 1519 — ALE Kopernik jest już
 * wątkiem w Lidzbarku Warmińskim, Lubawie i Fromborku.
 * WYMIENIAM GO KRÓTKO, JAKO URZĘDNIKA, NIE JAKO OŚ STRONY.
 *
 * KĄT: PRZYPRAWY CAŁE KONTRA MIELONE. Kąt od muzeum
 * misyjnego ze zbiorami z czterech kontynentów.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że to samo ziarno w całości i zmielone to praktycznie
 *   dwa różne składniki, i że nikt tego nie tłumaczy,
 * — że zmielona przyprawa oddaje smak od razu i szybko go
 *   traci, a cała oddaje powoli i trzyma miesiącami,
 * — że stąd wynika reguła: całe na początek gotowania,
 *   mielone pod koniec,
 * — że urządzenie mieli przyprawy na sucho i że to jest
 *   jedna z rzeczy, w których jest naprawdę dobre,
 * — że część przypraw ma sens wyłącznie w całości i nie
 *   należy ich mielić: liść laurowy, ziele angielskie,
 *   goździki, cynamon w lasce, ziarna pieprzu do zalewy,
 * — że mielone przyprawy w słoiku po roku to głównie kurz
 *   o kolorze przyprawy — i że to jest najczęstsza przyczyna
 *   „dosypałem, a nic nie czuć",
 * — i ODMOWA: nie doradzam nic o właściwościach przypraw.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH — zero o „właściwościach"
 *   przypraw, trawieniu, odporności. ODMOWA STOI W TEKŚCIE.
 * — ŻADNYCH PROPORCJI.
 * — ŻADNYCH NAZW FIRM.
 * — NIE PISZĘ o moście bez słowa „czynny".
 * — NIE PISZĘ, że Pieniężno należy do Cittaslow.
 *
 * ⚠ ETYKA — WARMIŃSKO-MAZURSKIE:
 * — NIE UŻYWAM niemieckiej nazwy miasta.
 * — ZERO roku 1945, zniszczenia mostu i zamku.
 * — ZERO granicy z obwodem kaliningradzkim (powiat braniewski
 *   z nią graniczy).
 * — ZERO wysiedleń i akcji „Wisła".
 * — Utratę praw miejskich podaję jako suchy fakt, bez
 *   przyczyny.
 * — Zbiory muzeum opisuję rzeczowo, bez egzotyzowania kultur.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Przyprawy" (miasto
 * na dawnym szlaku handlowym) dotyczą przypraw jako grupy
 * składników i ich roli w kuchni. Tutaj chodzi o JEDNĄ
 * KONKRETNĄ RÓŻNICĘ: całe kontra zmielone. „Mąka i mielenie"
 * dotyczą ziarna zbóż. „Rodzaje mąki" (Korsze) dotyczą mąki.
 * „Zioła — świeże i suszone" dotyczą ziół.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE ROZSTRZYGAM daty praw miejskich (1295 czy 1312).
 * — NIE PODAJĘ liczby sołectw.
 * — NIE PODAJĘ numerów rejestru zabytków.
 * — NIE PODAJĘ roku założenia muzeum misyjnego.
 * — NIE PODAJĘ wydarzeń cyklicznych — nie potwierdzono.
 * — NIE PRZYPISUJĘ Pieniężnu produktu z Listy Produktów
 *   Tradycyjnych — nie ma takiego.
 * — NIE MYLĘ Pieniężna z przymiotnikiem „pieniężny" —
 *   FAQ i tekst mają twarde kotwice geograficzne.
 * — districts: brak potwierdzonych osiedli. PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — miasto 2 400, gmina 5 465 mieszkańców,
 * — prawa miejskie na początku XIV w., na prawie chełmińskim;
 *   miasto należało do kapituły warmińskiej; prawa utracone
 *   w 1945 r. i odzyskane w 1973 r.,
 * — most kolejowy nad Wałszą z 1884 r. ma 157 m długości
 *   i dwa filary po 28 m; to najwyższy czynny most kolejowy
 *   w Polsce,
 * — zamek kapituły warmińskiej z pierwszej połowy XIV w.,
 *   zachowany w skrzydle zachodnim,
 * — Muzeum Misyjno-Etnograficzne Księży Werbistów ze zbiorami
 *   z Dalekiego Wschodu, Afryki, Ameryki Łacińskiej i Oceanii,
 * — kościół świętych Apostołów Piotra i Pawła z 1897 r.
 *   z figurami patronów z 1688 r.,
 * — szpital świętego Jerzego z 1359 r.,
 * — w herbie miasta są trzy worki mąki,
 * — Mikołaj Kopernik zarządzał stąd komornictwem na przełomie
 *   1518 i 1519 r.
 */
export const PIENIEZNO: CityContent = {
  slug: "pieniezno",
  h1: "Thermomix Pieniężno – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Pieniężno na Warmii — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Pieniężnie na Warmii, powiat braniewski: bezpłatna prezentacja TM7 u Ciebie w domu. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Pieniężno — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Pieniężnie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Pieniężna na Warmii z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wsi gminy.",

  highlights: highlightyStandardowe("Pieniężno i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "To samo ziarno w całości i zmielone to prawie dwa różne składniki.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Pieniężnie – jak wygląda prezentacja?",
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
      id: "przyprawy-cale-mielone",
      heading: "Muzeum misyjne ze zbiorami z czterech kontynentów — czyli całe kontra mielone",
      paragraphs: [
        "Pieniężno ma dwie rzeczy, których nie ma żadne inne miasteczko tej wielkości. Pierwsza to most kolejowy nad Wałszą z 1884 roku — sto pięćdziesiąt siedem metrów długości, dwa filary po dwadzieścia osiem metrów, najwyższy czynny most kolejowy w Polsce; zastrzeżenie „czynny” jest tu istotne, bo wiadukty w Stańczykach są wyższe, tylko nic po nich nie jeździ. Druga to Muzeum Misyjno-Etnograficzne Księży Werbistów, jeden z najbogatszych kościelnych zbiorów etnograficznych w kraju, z przedmiotami z Dalekiego Wschodu, Afryki, Ameryki Łacińskiej i Oceanii. Samo miasto należało nie do biskupa warmińskiego, lecz do kapituły — to na Warmii dwie różne rzeczy.",
        "Zbiory z czterech kontynentów to dobry pretekst do składnika, przy którym prawie wszyscy popełniają ten sam błąd: do przypraw. A konkretnie do różnicy, o której nie mówi żaden przepis.",
        "Bo to samo ziarno w całości i zmielone to praktycznie dwa różne składniki. Nie „to samo, tylko drobniejsze”. Dwa różne.",
        "Różnica polega na tym, kiedy oddają smak. Przyprawa zmielona ma ogromną powierzchnię, więc oddaje wszystko od razu — i równie szybko traci, także w słoiku. Przyprawa w całości oddaje powoli, przez cały czas gotowania, i trzyma smak miesiącami, bo jest szczelnie zamknięta we własnej skorupce.",
        "Z tego wynika reguła, którą warto zapamiętać, bo streszcza całą sprawę: całe idą na początek gotowania, mielone pod koniec. Ziarna pieprzu, ziele angielskie i liść laurowy wrzuca się do garnka razem z resztą. Mielony pieprz, papryka czy kmin dodane na starcie długiego gotowania po prostu wyparują — dosłownie stracicie to, za co zapłaciliście.",
        "Urządzenie robi tu rzecz, którą uważam za jedną z jego najlepszych: mieli przyprawy na sucho, w tym samym naczyniu, w kilkanaście sekund. Świeżo zmielony pieprz albo kmin to nie jest snobizm — to po prostu inna intensywność. Warto mielić małe porcje i często, zamiast trzymać duży słoik.",
        "Są też przyprawy, których mielić po prostu nie należy, i to nie z sentymentu. Liść laurowy, ziele angielskie, goździki, cynamon w lasce, ziarna pieprzu do zalewy — one mają oddać smak i zostać wyjęte. Zmielone zostają w daniu na zawsze i zwykle je psują: zmielony liść laurowy potrafi zgorzknieć całą zupę.",
        "I diagnoza najczęstszego problemu, który słyszę: „dosypuję, a nic nie czuć”. Zwykle nie chodzi o ilość. Mielona przyprawa stojąca w słoiku rok to w dużej mierze kurz o właściwym kolorze. Można jej dosypać trzy razy tyle i nadal nic nie będzie czuć.",
        "I granica: nie napiszę Wam ani słowa o właściwościach przypraw — o tym, co na co pomaga, co wspiera trawienie ani co wzmacnia. To są twierdzenia zdrowotne, a ja mówię wyłącznie o smaku i o tym, kiedy co dodać.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Pieniężnie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeżeli macie w szafce przyprawy, które stoją tam od lat — weźcie jedną na spotkanie. Zmielimy ją świeżo obok tej ze słoika i różnicę poczujecie bez żadnego komentarza z mojej strony.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Pieniężnie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla pieniężnieńskiej rodziny",
      paragraphs: [
        "Miasto liczy dwa tysiące czterysta mieszkańców, a cała gmina blisko pięć i pół tysiąca. Pieniężno leży na Warmii, ale było miastem kapituły warmińskiej, nie biskupa — prawa miejskie dostało na początku czternastego wieku, na prawie chełmińskim; utraciło je w 1945 roku i odzyskało w 1973. Nad Wałszą stoi most kolejowy z 1884 roku, najwyższy czynny most kolejowy w Polsce. Zachowało się skrzydło zamku kapituły z pierwszej połowy czternastego wieku — na przełomie 1518 i 1519 roku zarządzał stąd komornictwem Mikołaj Kopernik, wtedy w roli urzędnika, nie astronoma. W mieście działa Muzeum Misyjno-Etnograficzne Księży Werbistów, a w herbie widnieją trzy worki mąki.",
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

  districtsHeading: "Do których części gminy Pieniężno dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wsi gminy. Dojazd jest wszędzie bezpłatny.",
    "Przy umawianiu wystarczy podać miejscowość i ulicę albo numer domu.",
  ],
  districts: [],

  nearbyHeading: "Poza Pieniężno też przyjadę",
  nearbyParagraphs: [
    "Braniewo, Orneta, Lidzbark Warmiński, Górowo Iławeckie i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Braniewo", "Orneta", "Górowo Iławeckie", "Frombork"],

  about: blokOMnie("do Pieniężna", "w Pieniężnie i całej gminie", REGION_WARMIA_MAZURY),

  faq: [
    {
      question: "Czy dojeżdżasz do Pieniężna bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wsi gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku, bo nazwa myli wyszukiwarki: chodzi o miasto Pieniężno w powiecie braniewskim, na Warmii, nad Wałszą — nazwa pochodzi od nazwiska Seweryna Pieniężnego, a nie od pieniędzy.",
    },
    ...faqWspolne("w Pieniężnie"),
    {
      question: "Czy przyprawy w całości i mielone to to samo?",
      answer:
        "Praktycznie dwa różne składniki. Mielona oddaje smak od razu i szybko go traci, także w słoiku. Cała oddaje powoli, przez cały czas gotowania, i trzyma smak miesiącami. Stąd reguła: całe na początek gotowania, mielone pod koniec.",
    },
    {
      question: "Których przypraw nie należy mielić?",
      answer:
        "Liścia laurowego, ziela angielskiego, goździków, cynamonu w lasce i ziaren pieprzu do zalewy. One mają oddać smak i zostać wyjęte — zmielone zostają w daniu na zawsze i często je psują. Zmielony liść laurowy potrafi zgorzknieć całą zupę.",
    },
    {
      question: "Dosypuję przyprawy, a nic nie czuć — dlaczego?",
      answer:
        "Zwykle nie chodzi o ilość, tylko o wiek. Mielona przyprawa stojąca w słoiku rok to w dużej mierze kurz o właściwym kolorze. Urządzenie mieli przyprawy na sucho w kilkanaście sekund, więc warto mielić małe porcje i często. O właściwościach przypraw nie wypowiadam się w ogóle — mówię tylko o smaku.",
    },
  ],

  geo: { lat: 54.2363, lng: 20.1286 },
};
