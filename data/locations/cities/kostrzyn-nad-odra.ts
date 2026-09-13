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
 * KOSTRZYN NAD ODRĄ — ⚠ GMINA MIEJSKA, powiat gorzowski.
 * MIASTO 17 536 (GUS 31.12.2024), 46,1 km².
 * BEZ SOŁECTW — gmina miejska.
 *
 * ⚠⚠ HOMONIM: KOSTRZYN NAD ODRĄ (lubuskie, gmina miejska)
 * ≠ KOSTRZYN (wielkopolskie, powiat poznański, gmina
 * miejsko-wiejska, 20 510 mieszk.). TO DWA RÓŻNE MIASTA
 * I MYLĄ SIĘ NAGMINNIE. ⚠ „FESTIWAL KULINARNY W KOSTRZYNIE"
 * NALEŻY DO KOSTRZYNA WIELKOPOLSKIEGO — NIE PRZYPISUJĘ GO
 * TEMU MIASTU. FAQ rozróżnia oba miasta.
 *
 * ⚠ PRAWA MIEJSKIE — ŹRÓDŁA SPRZECZNE: ok. 1300 kontra 1261.
 * Pierwsza wzmianka 1232 r. NIE ROZSTRZYGAM — piszę
 * „na przełomie XIII i XIV wieku".
 *
 * GEOGRAFIA: U UJŚCIA WARTY DO ODRY. Także Kanał Warnicki.
 * Od 1535 r. stolica NOWEJ MARCHII.
 *
 * ⚠⚠ OSUSZENIE DOLINY — PODSTAWA KĄTA:
 * ODERBRUCH 1747–1753, pod nadzorem Fryderyka II, pracami
 * kierował FRANZ VON BRENKENHOFF; wykopano nowe koryto Odry,
 * SKRACAJĄC JEJ BIEG O 25 km.
 * ⚠⚠ CELE BYŁY WPROST SPOŻYWCZE: zwiększenie „podaży nabiału
 * i mięsa dla miast" oraz produkcji siana. TO JEST KOTWICA.
 * DOLINA WARTY: projekt I. J. Petriego z 1765 r., prace
 * 1767–1782; lewobrzeżny wał 1828–1832.
 * PARK NARODOWY „UJŚCIE WARTY": 1 LIPCA 2001, 8 074 ha,
 * gminy Kostrzyn nad Odrą, Słońsk i Witnica; dyrekcja
 * w Chyrzynie; utworzony dla ochrony ŁĄK I PASTWISK;
 * 245 gatunków ptaków, 174 lęgowe.
 *
 * MIEJSKIE TARGOWISKO PRZYGRANICZNE od 1993 r., 24 500 m²,
 * 940 pawilonów, czynne codziennie 6:00–20:00, a od 15 marca
 * do 30 listopada do 22:00.
 * ⚠ KĄTA TARGOWEGO NIE UŻYWAM — „targ" i „małe zakupy,
 *   częściej" są ZAJĘTE. Targowisko podaję jako fakt.
 *
 * TWIERDZA od 1537 r., ruiny Starego Miasta zwane
 * „Kostrzyńskimi Pompejami". Brama Berlińska, Bastion Filip
 * (Muzeum Twierdzy). DWORZEC DWUPOZIOMOWY 1872–1874,
 * proj. EDUARD RÖMER.
 * ⚠⚠ DWORZEC NIE JEST JEDYNY W POLSCE — drugi taki jest
 *   w KĘPNIE. NIE PISZĘ „jedyny".
 * ⚠ PRZYSTANEK WOODSTOCK / POL'AND'ROCK 2004–2019 —
 *   OD 2020 FESTIWALU TU NIE MA. Piszę w czasie przeszłym
 *   albo wcale. Wybieram: WCALE (temat nie dotyczy kuchni).
 *
 * KĄT: KURCZAK — NAJCZĘSTSZE MIĘSO I NAJCZĘSTSZY BŁĄD.
 * Kąt od doliny osuszonej wprost po to, żeby dawała miastom
 * mięso i nabiał.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że kurczak jest dziś najczęściej gotowanym mięsem
 *   w polskich domach i jednocześnie tym, które najczęściej
 *   wychodzi źle,
 * — GŁÓWNA PRZYCZYNA: pierś i udko to praktycznie dwa różne
 *   produkty, a traktuje się je tak samo,
 * — PIERŚ jest chuda i nie wybacza — kilka minut za długo
 *   i jest sucha, a tego się już nie odwróci,
 * — UDKO wybacza prawie wszystko — dłuższe gotowanie robi
 *   mu dobrze,
 * — WNIOSEK PRAKTYCZNY: do wszystkiego, co się dusi, piecze
 *   długo albo gotuje w sosie, bierz udka; pierś zostaw tam,
 *   gdzie ma być krótko,
 * — że pierś rozbita na równą grubość gotuje się równo,
 *   a cała nie — bo jest gruba z jednej strony i cienka
 *   z drugiej,
 * — ŻE KOŚĆ I SKÓRA MAJĄ ZNACZENIE: dają smak i chronią
 *   mięso, a zdejmuje się je odruchowo,
 * — że rosół z samej piersi jest mdły i to nie jest wina
 *   przepisu,
 * — CO ROBIĆ Z SUCHĄ PIERSIĄ, KTÓRA JUŻ WYSCHŁA: pokroić
 *   i wymieszać z czymś mokrym, zamiast odgrzewać,
 * — UCZCIWIE: urządzenie nie zrobi chrupiącej skóry
 *   i nie zastąpi piekarnika ani patelni,
 * — ale robi jedną rzecz naprawdę dobrze: gotowanie w sosie
 *   i na parze w pilnowanej temperaturze — czyli dokładnie
 *   to, przy czym kurczak najczęściej się psuje.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR. ⚠⚠ PRZY MIĘSIE
 *   PILNUJĘ TEGO PODWÓJNIE. Zero „ile minut", zero stopni.
 * — ŻADNYCH PROPORCJI.
 * — ⚠⚠ ZERO TEMATÓW BEZPIECZEŃSTWA ŻYWNOŚCI I ZDROWIA.
 *   Zero surowego mięsa jako zagrożenia, zero bakterii,
 *   zero „ile stopni w środku". Piszę WYŁĄCZNIE o smaku
 *   i o teksturze. TWARDA GRANICA.
 * — ŻADNYCH TWIERDZEŃ ŻYWIENIOWYCH („chude, więc zdrowsze").
 * — ŻADNYCH NAZW FIRM.
 * — ZERO tematów hodowli przemysłowej i etyki jedzenia mięsa.
 *
 * ⚠ ETYKA — LUBUSKIE:
 * — ZERO tematów wojennych i granicznych.
 * — ZERO wysiedleń, przesiedleń po 1945 r., „Ziem Odzyskanych"
 *   jako tematu politycznego.
 * — ZERO konfliktów narodowościowych.
 * — ZERO bezrobocia, biedy i wyludniania.
 * — Twierdzę i ruiny podaję WYŁĄCZNIE jako architekturę.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Tłuste kontra chude"
 * dotyczy zawartości tłuszczu jako zasady ogólnej. „Mielone
 * mięso" i „mielenie mięsa w domu" dotyczą jednej czynności.
 * „Dziczyzna" dotyczy innego mięsa. „Ryba" i „ryby" dotyczą
 * innego produktu. „Duszenie" dotyczy techniki. Tutaj chodzi
 * o JEDEN KONKRETNY GATUNEK MIĘSA i o różnicę między jego
 * częściami.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE ROZSTRZYGAM roku praw miejskich.
 * — NIE PISZĘ, że dworzec jest jedyny dwupoziomowy w Polsce.
 * — NIE PRZYPISUJĘ Kostrzynowi nad Odrą festiwalu kulinarnego
 *   z Kostrzyna wielkopolskiego.
 * — NIE PRZYPISUJĘ miastu produktu z Listy Produktów
 *   Tradycyjnych — nie znaleziono żadnego.
 * — NIE PISZĘ o zakładach spożywczych w strefie ekonomicznej
 *   (niepotwierdzone).
 * — NIE PODAJĘ dat Jarmarku Bożonarodzeniowego ani Dni
 *   Twierdzy (niepotwierdzona ciągłość i numeracja).
 * — districts: brak potwierdzonych osiedli. PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — gmina miejska licząca ponad siedemnaście tysięcy
 *   mieszkańców na 46,1 km²; pierwsza wzmianka 1232 r.,
 *   prawa miejskie na przełomie XIII i XIV wieku; od 1535 r.
 *   stolica Nowej Marchii,
 * — miasto leży u ujścia Warty do Odry; płynie tędy także
 *   Kanał Warnicki,
 * — Oderbruch osuszono w latach 1747–1753 pod nadzorem
 *   Fryderyka II, pracami kierował Franz von Brenkenhoff,
 *   a wykopanie nowego koryta skróciło bieg Odry o 25 km;
 *   celem było zwiększenie podaży nabiału i mięsa dla miast
 *   oraz produkcji siana; dolinę Warty regulowano według
 *   projektu I. J. Petriego z 1765 r. w latach 1767–1782,
 * — Park Narodowy „Ujście Warty” utworzono 1 lipca 2001 r.
 *   na 8 074 ha w gminach Kostrzyn nad Odrą, Słońsk i Witnica,
 *   dla ochrony rozległych łąk i pastwisk; stwierdzono tu
 *   245 gatunków ptaków, w tym 174 lęgowe, a dyrekcja mieści
 *   się w Chyrzynie,
 * — Miejskie Targowisko Przygraniczne działa od 1993 r.
 *   na 24 500 m², z blisko tysiącem pawilonów, czynne
 *   codziennie od szóstej rano,
 * — twierdzę zaczęto budować w 1537 r.; ruiny Starego Miasta
 *   nazywa się „Kostrzyńskimi Pompejami”, a Muzeum Twierdzy
 *   mieści się w Bastionie Filip; dwupoziomowy dworzec
 *   wzniesiono w latach 1872–1874 według projektu Eduarda
 *   Römera.
 */
export const KOSTRZYN_NAD_ODRA: CityContent = {
  slug: "kostrzyn-nad-odra",
  h1: "Thermomix Kostrzyn nad Odrą – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Kostrzyn nad Odrą — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Kostrzynie nad Odrą: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Kostrzyn nad Odrą — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Kostrzynie nad Odrą. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Kostrzyna nad Odrą z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta.",

  highlights: highlightyStandardowe("Kostrzyn nad Odrą"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Pierś i udko to praktycznie dwa różne produkty.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Kostrzynie nad Odrą – jak wygląda prezentacja?",
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
      id: "kurczak",
      heading: "Dolina osuszona po to, żeby dawała mięso — czyli o kurczaku i najczęstszym błędzie",
      paragraphs: [
        "Kotlinę po drugiej stronie Odry osuszono w latach 1747–1753, wykopując rzece nowe koryto i skracając jej bieg o dwadzieścia pięć kilometrów; dolinę Warty regulowano trzydzieści lat później. W dokumentach cel zapisano bez owijania: chodziło o zwiększenie podaży nabiału i mięsa dla miast oraz o siano. Ta ziemia została zrobiona pod jedzenie, a łąki i pastwiska, które z tego zostały, chroni dziś Park Narodowy „Ujście Warty”, utworzony 1 lipca 2001 roku.",
        "Skoro więc o mięsie — napiszę o tym, które gotuje się w polskich domach najczęściej i które najczęściej wychodzi źle. O kurczaku.",
        "Przyczyna jest jedna i prawie zawsze ta sama. Pierś i udko to praktycznie dwa różne produkty, a traktuje się je tak, jakby były tym samym mięsem w dwóch kształtach.",
        "Pierś jest chuda i niczego nie wybacza. Kilka minut za długo i robi się sucha i włóknista, a tego już nie da się odwrócić — żaden sos tego nie naprawi, można tylko ukryć.",
        "Udko jest dokładnie odwrotne. Wybacza prawie wszystko, a dłuższe gotowanie wychodzi mu na dobre: mięso robi się miękkie i wilgotne dokładnie wtedy, gdy pierś już dawno by wyschła.",
        "Z tego wynika najprostsza zasada, jaką znam. Do wszystkiego, co się dusi, piecze długo albo gotuje w sosie — bierz udka. Pierś zostaw tam, gdzie ma być krótko i szybko. Połowa nieudanych obiadów z kurczakiem to po prostu pierś użyta tam, gdzie powinno być udko.",
        "Druga rzecz, banalna i pomijana: pierś jest gruba z jednej strony i cienka z drugiej. Gotuje się więc nierówno z definicji — cienki koniec wysycha, zanim gruby będzie gotowy. Rozbita albo przekrojona na równą grubość zachowuje się zupełnie inaczej i nagle okazuje się, że przepis wcale nie był zły.",
        "Kość i skóra też mają znaczenie, a zdejmuje się je odruchowo, bo tak wygląda schludniej. Tymczasem kość daje smak, a skóra chroni mięso przed wysuszeniem. Można je zdjąć po ugotowaniu — efekt jest ten sam, a mięso zupełnie inne.",
        "Stąd również rzecz, która frustruje wiele osób: rosół z samej piersi jest mdły i to nie jest wina przepisu ani przypraw. Smak wywaru bierze się z kości, chrząstek i tłuszczu, a w piersi nie ma żadnego z tych trzech.",
        "A jeśli pierś już wyschła — bo zdarza się każdemu — to najgorsze, co można zrobić, to odgrzać ją w całości, bo wyschnie jeszcze bardziej. Lepiej pokroić drobno i wymieszać z czymś mokrym: z sosem, z pastą, z sałatką. Suche mięso w mokrym otoczeniu przestaje być suche.",
        "Teraz uczciwie o sprzęcie. Thermomix nie zrobi chrupiącej skóry i nie zastąpi ani piekarnika, ani patelni. Jeśli marzy Ci się pieczony kurczak z rumianą skórką, to jest zadanie dla piekarnika i tak zostanie.",
        "Robi natomiast dobrze dokładnie to, przy czym kurczak najczęściej się psuje: gotowanie w sosie i na parze, w temperaturze, która jest pilnowana i nie skacze. Udka duszone w sosie i pierś na parze to dwie rzeczy, które wychodzą tu powtarzalnie — a przy tym mięsie powtarzalność jest warta więcej niż jakakolwiek funkcja.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Kostrzynie nad Odrą?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedzcie przy umawianiu, co u Was najczęściej ląduje na obiad. Jeśli kurczak — pokażę go w wersji, która nie wysycha.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Kostrzynie nad Odrą"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla kostrzyńskiej rodziny",
      paragraphs: [
        "Kostrzyn nad Odrą liczy ponad siedemnaście tysięcy mieszkańców na czterdziestu sześciu kilometrach kwadratowych. Pierwsza wzmianka o mieście pochodzi z 1232 roku, prawa miejskie nadano na przełomie XIII i XIV wieku, a od 1535 roku było ono stolicą Nowej Marchii. Miasto stoi u ujścia Warty do Odry; płynie tędy także Kanał Warnicki. Kotlinę po drugiej stronie rzeki osuszono w latach 1747–1753 pod nadzorem Fryderyka II — pracami kierował Franz von Brenkenhoff, a nowe koryto skróciło bieg Odry o dwadzieścia pięć kilometrów; dolinę Warty regulowano według projektu z 1765 roku w latach 1767–1782. Łąki i pastwiska, które z tego zostały, chroni Park Narodowy „Ujście Warty”, utworzony 1 lipca 2001 roku na ponad ośmiu tysiącach hektarów w gminach Kostrzyn nad Odrą, Słońsk i Witnica; stwierdzono w nim dwieście czterdzieści pięć gatunków ptaków, a dyrekcja mieści się w Chyrzynie. Miejskie Targowisko Przygraniczne działa od 1993 roku na dwudziestu czterech i pół tysiąca metrów kwadratowych i jest czynne codziennie od szóstej rano. Twierdzę zaczęto budować w 1537 roku, ruiny Starego Miasta nazywa się „Kostrzyńskimi Pompejami”, a Muzeum Twierdzy mieści się w Bastionie Filip; dwupoziomowy dworzec wzniesiono w latach 1872–1874 według projektu Eduarda Römera.",
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

  districtsHeading: "Do których części Kostrzyna nad Odrą dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta. Dojazd jest wszędzie bezpłatny.",
    "Przy umawianiu wystarczy podać ulicę i numer domu.",
  ],
  districts: [],

  nearbyHeading: "Poza Kostrzyn nad Odrą też przyjadę",
  nearbyParagraphs: [
    "Witnica, Słońsk, Górzyca, Dębno i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Witnica", "Słońsk", "Górzyca", "Dębno"],

  about: blokOMnie("do Kostrzyna nad Odrą", "w Kostrzynie nad Odrą", REGION_LUBUSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Kostrzyna nad Odrą bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku, bo te nazwy mylą się nagminnie: chodzi o Kostrzyn nad Odrą w lubuskiem, a nie o Kostrzyn w Wielkopolsce pod Poznaniem.",
    },
    ...faqWspolne("w Kostrzynie nad Odrą"),
    {
      question: "Dlaczego pierś z kurczaka zawsze wychodzi sucha?",
      answer:
        "Bo jest chuda i niczego nie wybacza, a dodatkowo jest gruba z jednej strony i cienka z drugiej, więc gotuje się nierówno z definicji. Rozbita albo przekrojona na równą grubość zachowuje się zupełnie inaczej. Do wszystkiego, co się dusi albo gotuje w sosie, lepiej wziąć udka — one wybaczają prawie wszystko.",
    },
    {
      question: "Czy zdejmować skórę i kość przed gotowaniem?",
      answer:
        "Lepiej po. Kość daje smak, a skóra chroni mięso przed wysuszeniem — zdejmuje się je odruchowo, bo tak wygląda schludniej, i traci na tym danie. Z tego samego powodu rosół z samej piersi jest mdły: smak wywaru bierze się z kości, chrząstek i tłuszczu.",
    },
    {
      question: "Czy Thermomix upiecze kurczaka?",
      answer:
        "Nie zrobi chrupiącej skóry i nie zastąpi piekarnika ani patelni — pieczony kurczak z rumianą skórką to zadanie dla piekarnika. Robi natomiast dobrze to, przy czym kurczak psuje się najczęściej: duszenie w sosie i gotowanie na parze w pilnowanej temperaturze.",
    },
  ],

  geo: { lat: 52.5872, lng: 14.6497 },
};
