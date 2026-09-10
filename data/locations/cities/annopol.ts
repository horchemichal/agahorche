import type { CityContent } from "../city-content";
import {
  REGION_LUBELSZCZYZNA,
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
 * ANNOPOL — 2 302 mieszkańców (31.12.2024), spadek o 15,5% od 2002 r.
 * Miasto nad Wisłą, na styku trzech województw. „Jabłka kraśnickie"
 * są na Liście Produktów Tradycyjnych od 31 lipca 2013 r. — wpis
 * dotyczy REGIONU POWIATU kraśnickiego, w którym leży Annopol.
 *
 * KĄT: jabłko. Jeden składnik, najzwyklejszy z możliwych, i to,
 * ile z niego naprawdę da się zrobić — bez ani jednego zdania
 * o przetworach.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że jabłko jest składnikiem lekceważonym, bo tanim i zawsze
 *   dostępnym,
 * — co realnie się z niego robi w tym urządzeniu: mus bez cukru
 *   dla dziecka, sos do mięsa, nadzienie, ciasto,
 * — że mus jabłkowy jest jedną z pierwszych rzeczy, jakie robi się
 *   dla niemowlaka — i że to jest praktyczny powód zakupu u młodych
 *   rodziców,
 * — i odmowa: nic o przetworach i nic o tym, ile cukru komu wolno.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH PORAD O PRZETWORACH, PASTERYZACJI I PRZECHOWYWANIU.
 *   Zasada z Hrubieszowa i Opola Lubelskiego.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH I ŻYWIENIOWYCH. W szczególności
 *   ani słowa o tym, od kiedy podawać dziecku mus, ile cukru
 *   dziennie i co jest „zdrowe". Żywienie niemowląt to dziedzina
 *   lekarza i dietetyka — strona mówi tylko, CO urządzenie robi.
 * — ŻADNYCH USTAWIEŃ, TEMPERATUR ANI CZASÓW.
 * — ŻADNYCH WYLICZEŃ oszczędności względem słoiczków ze sklepu.
 * — ŻADNEJ HISTORII WOJENNEJ.
 *
 * ROZGRANICZENIE — TU GĘSTO, WIĘC PILNUJĘ:
 * — „owoc, który nie poszedł do skupu" i „soki i moszcze z owoców"
 *   są ZAJĘTE — dlatego nie ma tu ani słowa o skupie, o sokach
 *   ani o nadmiarze,
 * — Hrubieszów ma kąt „kilogramy zamiast porcji" (ILOŚĆ),
 *   a Opole Lubelskie „mieszanie" (CZYNNOŚĆ CIĄGŁA). Ta strona jest
 *   o JEDNYM SKŁADNIKU i jego wszechstronności — nie o skali
 *   ani o długim gotowaniu,
 * — kąt „prąd" i „ile to zżera prądu" są zajęte, więc mimo powodzi
 *   w historii miasta NIE piszę o braku prądu.
 *
 * CZEGO NIE TWIERDZĘ, MIMO ŻE BYŁO KUSZĄCE:
 * — NIE przypisuję „jabłek kraśnickich" Annopolowi. Wpis dotyczy
 *   REGIONU POWIATU, a miejscowości wymienione we wpisie (Moniaki,
 *   Wierzbica, Boby) prawdopodobnie leżą w innych gminach.
 *   W tekście jest „w tym powiecie", i tylko tak,
 * — NIE wymieniam zakładu T.B.Fruit jako pracodawcy. Upadłość
 *   ogłoszono 25 października 2022 r., a według artykułu z 13
 *   sierpnia 2026 r. zakład w Annopolu NADAL STOI NIECZYNNY.
 *   Starsze materiały opisują go jako prosperujący — to nieaktualne
 *   od czterech lat,
 * — NIE podaję powierzchni upraw ani miejsca w rankingu. Kierunek
 *   sadowniczy powiatu jest realny, ale TWARDYCH DANYCH dla gminy
 *   Annopol nie ma. Dlatego w tekście nie ma ani jednej liczby
 *   o uprawach,
 * — NIE podaję roku utraty praw miejskich (źródła: 1869 albo 1870).
 *   Podaję pewne: nadanie 1761 r. przez Augusta III i odzyskanie
 *   1 stycznia 1996 r. Miasto założono na gruntach starszej wsi
 *   RACHÓW, a nazwa pochodzi od imienia św. Anny,
 * — o powodzi z 2010 r. (przerwany wał w Kopcu 7 czerwca) jest
 *   JEDNO zdanie i tylko jako fakt o położeniu miasta. Bez opisu
 *   strat, bez dramatyzowania i bez porad kryzysowych.
 *
 * districts: miasto MA oficjalny wykaz jednostek pomocniczych —
 * dwa osiedla, Annopol I i Annopol II. To rzadkość przy miastach
 * tej wielkości i dlatego districts NIE jest tu pustą tablicą.
 *
 * PUŁAPKA: „Annopol" to także ulica w Warszawie i kilka innych
 * miejscowości w Polsce. Kalkulator tras podał dla Annopol–Kraśnik
 * ponad dwieście kilometrów przez Warszawę, bo trafił na inną
 * miejscowość. Realnie jest 30,5 km drogą krajową 74.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone — źródła w notatce
 * projektowej):
 * — miasto leży nad Wisłą; za rzeką jest województwo świętokrzyskie,
 *   od południa gmina Radomyśl w podkarpackim,
 * — prawa miejskie 1761 r. (August III), odzyskane 1 stycznia 1996 r.,
 * — 2 302 mieszkańców na 31.12.2024,
 * — do Kraśnika 30,5 km drogą krajową 74, do Lublina ok. 90 km,
 *   ok. godziny i kwadransa,
 * — działa tu FAMET Serwis (konstrukcje stalowe), rekrutujący
 *   w 2026 r.,
 * — „jabłka kraśnickie" na Liście Produktów Tradycyjnych
 *   od 31 lipca 2013 r., kategoria warzywa i owoce.
 */
export const ANNOPOL: CityContent = {
  slug: "annopol",
  h1: "Thermomix Annopol – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Annopol — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Annopolu: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Annopol — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Annopolu. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Annopola z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do miejscowości gminy.",

  highlights: highlightyStandardowe("Annopol i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-5.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Najzwyklejszy składnik pod ręką — i najczęściej marnowany.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Annopolu – jak wygląda prezentacja?",
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
      id: "jablko",
      heading: "Powiat jabłek kraśnickich — i jeden składnik, którego nikt nie traktuje poważnie",
      paragraphs: [
        "Annopol leży nad Wisłą, na samym styku trzech województw: za rzeką jest świętokrzyskie, od południa podkarpackie. Miasto powstało w 1761 roku na gruntach starszej wsi Rachów, a nazwa wzięła się od imienia świętej Anny. Prawa miejskie odzyskało dopiero z początkiem 1996 roku. Rzeka daje o sobie znać — w czerwcu 2010 przerwała wał w pobliskim Kopcu — i tyle o tym, bo strona jest o kuchni.",
        "Fakt, który dla kuchni znaczy więcej: w tym powiecie rosną jabłka wpisane na ministerialną Listę Produktów Tradycyjnych jako „jabłka kraśnickie”. Wpis dotyczy regionu powiatu, nie konkretnie tego miasta — pilnuję tego rozróżnienia, bo przy takich nazwach mylę się cała reszta internetu.",
        "I to jest dobry pretekst, żeby napisać o składniku, którego nikt nie traktuje poważnie. Jabłko jest tanie, jest zawsze, leży w misce na stole i przez to jakoś nie liczy się jako składnik. A jest jednym z niewielu, z których w tym urządzeniu robi się cztery zupełnie różne rzeczy — bez dokupywania czegokolwiek.",
        "Pierwsza i najbardziej praktyczna: mus. Obrane jabłka, kilka minut, i macie gładki mus bez cukru i bez niczego więcej. To jest jedna z pierwszych rzeczy, jakie robi się dla małego dziecka, i szczerze mówiąc jeden z częstszych powodów, dla których młodzi rodzice w ogóle o tym urządzeniu myślą. Nie powiem Wam, od kiedy i ile podawać — to pytanie do lekarza albo dietetyka, nie do mnie. Powiem tylko, co maszyna robi: rozdrabnia i podgrzewa w jednym naczyniu, bez przekładania.",
        "Druga: sos do mięsa. Jabłko z cebulą, odrobiną octu i przypraw — to samo urządzenie, ten sam garnek, a wychodzi coś, co zwykle się kupuje w słoiku.",
        "Trzecia: nadzienie. Do naleśników, do pierogów, do strudla. Rozdrobnienie i odparowanie to dokładnie ta robota, przy której normalnie trzeba stać i mieszać.",
        "Czwarta: ciasto. Szarlotka zaczyna się od jabłek i kruchego ciasta, a jedno i drugie powstaje w tej samej misie, jedno po drugim.",
        "Czego tu nie znajdziecie: ani słowa o przetworach, wekowaniu i przechowywaniu. To granica, przy której nie ustąpię — błąd w tej dziedzinie kończy się zatruciem, a ja jestem przedstawicielką handlową, nie technologiem żywności. Wszystko, co napisałam wyżej, dotyczy jedzenia zrobionego i zjedzonego w ciągu tych samych paru dni.",
      ],
      links: [{ href: "/przepisy", label: "Przepisy" }],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Annopolu?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli w domu jest małe dziecko, powiedzcie o tym przy umawianiu — zrobimy mus i zobaczycie, ile to naprawdę trwa. To jedna z tych rzeczy, które lepiej raz zobaczyć, niż o nich przeczytać.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Annopolu"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla annopolskiej rodziny",
      paragraphs: [
        "Annopol liczył nieco ponad dwa tysiące trzysta mieszkańców na koniec 2024 roku i od dwóch dekad ich ubywa. Do Kraśnika jest stąd trzydzieści kilometrów drogą krajową, do Lublina około dziewięćdziesięciu — czyli godzina z kwadransem. To nie jest miasto, z którego wyskakuje się po zakupy.",
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

  districtsHeading: "Do których części Annopola dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do miejscowości gminy, bez dopłaty za dojazd.",
    "Miasto dzieli się na dwa osiedla — przy umawianiu wystarczy podać ulicę albo miejscowość.",
  ],
  districts: ["Osiedle Annopol I", "Osiedle Annopol II"],

  nearbyHeading: "Poza Annopol też przyjadę",
  nearbyParagraphs: [
    "Gościeradów, Dzierzkowice, Józefów nad Wisłą i Kraśnik są w zasięgu jednej trasy, a za Wisłą i na południe — także gminy z sąsiednich województw. Dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Kraśnik", "Gościeradów", "Dzierzkowice", "Józefów nad Wisłą", "Opole Lubelskie", "Zaklików"],

  about: blokOMnie("do Annopola", "w Annopolu i okolicy", REGION_LUBELSZCZYZNA),

  faq: [
    {
      question: "Czy dojeżdżasz do Annopola bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do miejscowości gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Annopolu"),
    {
      question: "Zrobię w tym mus jabłkowy dla dziecka?",
      answer:
        "Tak — obrane jabłka, kilka minut, gładki mus bez cukru, wszystko w jednym naczyniu, bez przekładania. To jedna z pierwszych rzeczy, jakie robi się dla małego dziecka. Nie doradzam natomiast, od kiedy i ile podawać — to pytanie do lekarza albo dietetyka, nie do mnie.",
    },
    {
      question: "A przetwory z jabłek na zimę?",
      answer:
        "Nie doradzam nic o przetworach, wekowaniu ani przechowywaniu — błąd w tej dziedzinie kończy się zatruciem, a ja jestem przedstawicielką handlową, nie technologiem żywności. Wszystko, o czym mówię, dotyczy jedzenia zrobionego i zjedzonego w ciągu tych samych paru dni: musu, sosu do mięsa, nadzienia, ciasta.",
    },
  ],

  geo: { lat: 50.8867, lng: 21.8517 },
};
