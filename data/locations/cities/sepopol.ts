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
 * SĘPOPOL — gmina miejsko-wiejska w powiecie bartoszyckim.
 * MIASTO 1 887, GMINA 5 658 (GUS 31.12.2024).
 * ⚠ Notatka projektowa podawała 2 000 — ZAWYŻONE.
 * LICZBY SOŁECTW NIE PODAJĘ — nie potwierdzono.
 *
 * PRAWA MIEJSKIE 1351 r., nadał WIELKI MISTRZ
 * HENRYK DUSEMER.
 * PRAWA UTRACONE w 1946 r., PRZYWRÓCONE w 1973 r.
 * ⚠ PRZYNALEŻNOŚĆ: BARCJA. TO NIE JEST ANI WARMIA,
 * ANI MAZURY. Nie piszę „na Warmii” ani „na Mazurach”.
 *
 * ⚠ POŁOŻENIE: U UJŚCIA GUBRA DO ŁYNY.
 * TO JEST PODSTAWA KĄTA — dwie rzeki łączące się w jedną.
 *
 * KOŚCIÓŁ ŚW. MICHAŁA ARCHANIOŁA — prezbiterium
 * ok. 1360–1370; ołtarz 1668; ambona 1609; organy 1859;
 * dzwon 1732.
 * SECESYJNA WIEŻA CIŚNIEŃ — 1912 r., wysokość 29 m.
 * MURY OBRONNE — XIV w.
 * PUNKT WIDOKOWY „KACZY DOŁEK”.
 * SĘPOPOL NALEŻY DO SIECI CITTASLOW — JEDYNY Z TEJ PIĄTKI.
 * ROKU PRZYSTĄPIENIA NIE PODAJĘ.
 *
 * KĄT: EMULSJA — MAJONEZ, WINEGRET I WSZYSTKO, CO NIE CHCE
 * SIĘ POŁĄCZYĆ.
 * Kąt od ujścia Gubra do Łyny: dwóch nurtów, które schodzą
 * się w jedno koryto.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — czym emulsja jest naprawdę: tłuszcz rozbity na krople
 *   zawieszone w wodzie, a nie „wymieszany”,
 * — że to jest jedyna technika, w której SZYBKOŚĆ DODAWANIA
 *   jest ważniejsza od wszystkiego innego,
 * — że domowy majonez wychodzi lub nie wychodzi w pierwszych
 *   sekundach i potem już nic tego nie zmieni,
 * — że winegret rozwarstwia się nie dlatego, że jest zły,
 *   tylko dlatego, że nie ma emulgatora,
 * — że musztarda i żółtko to emulgatory i po to się je dodaje,
 * — co robić z rozwarstwionym majonezem — odbudowa od nowej
 *   bazy (BEZ LICZB),
 * — że sos holenderski i beurre blanc to ta sama zasada
 *   z ciepłem, więc trudniejsza,
 * — UCZCIWIE I MOCNO: to jest rzecz, w której urządzenie
 *   z regulowaną prędkością i możliwością wlewania po trochu
 *   ma realną przewagę nad ręką i trzepaczką,
 * — ALE także: przy małej ilości ostrze może nie sięgać
 *   i wtedy ręka wygrywa.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PROPORCJI ANI LICZB SKŁADNIKÓW.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH — także żadnych ostrzeżeń
 *   ani zapewnień o surowych jajkach (to porada sanitarna,
 *   nie moja rola).
 * — ŻADNYCH NAZW FIRM.
 *
 * ⚠⚠ ETYKA — SĘPOPOL JEST NAJTRUDNIEJSZY W TEJ DZIESIĄTCE:
 * — GMINA GRANICZY BEZPOŚREDNIO Z ROSJĄ, MIASTO LEŻY
 *   OK. 12 km OD GRANICY. ZERO GRANICY. ZERO przejść,
 *   ZERO bezpieczeństwa, ZERO wojska, ZERO polityki.
 * — ZERO bezrobocia, ZERO przestępczości, ZERO wyludniania —
 *   tematy stygmatyzujące.
 * — NIE UŻYWAM niemieckiej nazwy miasta (Schippenbeil).
 * — ZERO roku 1945/1946 i wysiedleń. Utratę praw miejskich
 *   podaję jako fakt administracyjny, bez przyczyny.
 * — ZERO cmentarzy wojennych.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Zagęszczanie” (Barczewo)
 * dotyczy gęstości. „Sos na bazie warzyw” (Górowo Iławeckie)
 * dotyczy bazy. „Kolejność dodawania składników” (Wolbórz)
 * dotyczy sekwencji. Tutaj chodzi o JEDNO ZJAWISKO FIZYCZNE:
 * zawieszenie tłuszczu w wodzie i o tempo, w jakim się to robi.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PISZĘ, że Sępopol leży na Warmii ani na Mazurach.
 * — NIE PODAJĘ liczby sołectw.
 * — NIE PODAJĘ roku przystąpienia do Cittaslow.
 * — NIE PODAJĘ dat budowy murów co do roku.
 * — NIE PRZYPISUJĘ Sępopolowi produktu z Listy Produktów
 *   Tradycyjnych — nie ma takiego.
 * — NIE MYLĘ Sępopola z SĘPÓLNEM KRAJEŃSKIM ani z Sępólnem
 *   Wielkim. FAQ to rozróżnia.
 * — districts: brak potwierdzonych osiedli. PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — miasto 1 887, gmina 5 658 mieszkańców,
 * — prawa miejskie nadane w 1351 r. przez wielkiego mistrza
 *   Henryka Dusemera, przywrócone w 1973 r.,
 * — Sępopol leży w historycznej Barcji, u ujścia Gubra do Łyny,
 * — kościół świętego Michała Archanioła: prezbiterium
 *   z lat około 1360–1370, ambona z 1609 r., ołtarz z 1668 r.,
 *   dzwon z 1732 r., organy z 1859 r.,
 * — secesyjna wieża ciśnień z 1912 r., wysoka na 29 m,
 * — mury obronne z XIV w.,
 * — punkt widokowy „Kaczy Dołek”,
 * — Sępopol należy do sieci Cittaslow.
 */
export const SEPOPOL: CityContent = {
  slug: "sepopol",
  h1: "Thermomix Sępopol – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Sępopol — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Sępopolu: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Sępopol — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Sępopolu. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Sępopola z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do całej gminy.",

  highlights: highlightyStandardowe("Sępopol i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Majonez wychodzi albo nie wychodzi w pierwszych sekundach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Sępopolu – jak wygląda prezentacja?",
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
      id: "emulsja",
      heading: "Dwie rzeki w jednym korycie — czyli o emulsji",
      paragraphs: [
        "Sępopol leży tam, gdzie Guber wpada do Łyny. Dwa nurty schodzą się w jedno koryto i od tego miejsca płyną razem. To nie jest metafora naciągana na siłę — to najlepszy obraz tego, co próbujecie zrobić za każdym razem, gdy ubijacie majonez albo winegret. Dwie rzeczy, które osobno się nie mieszają, mają zacząć płynąć jako jedno.",
        "Zacznę od tego, czym emulsja właściwie jest, bo prawie nikt tego nie tłumaczy. To nie jest „wymieszanie” oliwy z octem. To rozbicie tłuszczu na krople tak drobne, że zawisają w wodzie i nie mają jak się z powrotem zebrać. Majonez nie jest mieszaniną — jest zawiesiną milionów kropelek oleju.",
        "Z tego wynika jedyna rzecz, którą naprawdę trzeba zapamiętać: przy emulsji tempo dodawania jest ważniejsze od wszystkiego innego. Ważniejsze od jakości oliwy, od temperatury, od tego, czy ubijacie ręcznie, czy nie. Olej wlany za szybko nie zdąży się rozbić na krople i całość zostanie tym, czym była — tłuszczem pływającym po żółtku.",
        "Dlatego domowy majonez rozstrzyga się w pierwszych sekundach. Jeżeli baza się nie zawiąże na samym początku, przy pierwszych kroplach, to potem już nic tego nie odwróci — można dolewać powoli, można ubijać kwadrans, nie pomoże. To jest ten rzadki przypadek w kuchni, gdy początek decyduje o wszystkim.",
        "Winegret rozwarstwia się z innego powodu i to warto rozróżnić. On się nie „psuje” — on po prostu nie ma czym się trzymać. Sam olej i sam ocet zawsze się w końcu rozejdą. Dlatego do winegretu dodaje się musztardę: nie tylko dla smaku, ale dlatego, że jest emulgatorem, czyli substancją, która utrzymuje krople w zawieszeniu. W majonezie tę rolę pełni żółtko. Jeśli ktoś robi winegret bez musztardy i dziwi się, że po pięciu minutach stoi w dwóch warstwach — to nie jest błąd, to jest fizyka.",
        "Kiedy majonez się zetnie, nie wyrzuca się go. Zaczyna się od nowa: świeża baza w czystej misce i do niej dolewa się po trochu ten nieudany majonez, tak jak dolewałoby się olej. Emulsja odbudowuje się wtedy na nowym emulgatorze, a nic się nie marnuje. To jedna z tych rzeczy, które ratują niedzielny obiad.",
        "Na koniec sosy trudniejsze: holenderski, beurre blanc i wszystko z tej rodziny. To ta sama zasada, tylko z ciepłem w tle — a ciepło pracuje przeciwko Wam, bo zbyt gorące żółtko po prostu się ścina. Stąd ich reputacja.",
        "I teraz uczciwie, bo tu akurat mam dobrą wiadomość i chcę ją powiedzieć wprost: emulsje to jedna z tych nielicznych rzeczy, w których urządzenie z regulowaną prędkością i możliwością wlewania po trochu przez otwór w pokrywce ma nad ręką realną, wyraźną przewagę. Nie „ułatwia” — po prostu robi to lepiej, bo utrzymuje stałe obroty i stałą strużkę, czego ręka nie utrzyma przez trzy minuty. Majonez i winegret to u mnie jedne z najczęściej pokazywanych rzeczy właśnie dlatego.",
        "Ale jest i druga strona, o której też trzeba powiedzieć: przy naprawdę małej ilości — jeden słoiczek sosu do sałatki — ostrze może po prostu nie sięgać do dna i wtedy trzepaczka w małej miseczce wygrywa. Sprzęt nie jest lepszy zawsze. Jest lepszy tam, gdzie jest go czym zająć.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Sępopolu?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli chcecie zobaczyć majonez albo sos do sałatki robiony od zera — powiedzcie przy umawianiu. To jest akurat rzecz, którą najlepiej ocenić na własne oczy, bo trwa krótko i albo się udaje, albo nie.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Sępopolu"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla sępopolskiej rodziny",
      paragraphs: [
        "Samo miasto liczy niecałe dwa tysiące mieszkańców, a cała gmina blisko pięć i pół tysiąca. Sępopol leży w historycznej Barcji — to ani Warmia, ani Mazury, choć bywa dołączany do obu. Prawa miejskie nadał mu w 1351 roku wielki mistrz Henryk Dusemer, a po przerwie miasto odzyskało je w 1973 roku. Najstarszą częścią kościoła świętego Michała Archanioła jest prezbiterium z lat około 1360–1370; w środku stoi ambona z 1609 roku i ołtarz z 1668, dzwon pochodzi z 1732, a organy z 1859 roku. Nad miastem góruje secesyjna wieża ciśnień z 1912 roku, wysoka na dwadzieścia dziewięć metrów. Zachowały się też mury obronne z czternastego wieku, a nad doliną urządzono punkt widokowy „Kaczy Dołek”. Sępopol należy do sieci Cittaslow.",
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

  districtsHeading: "Do których części gminy Sępopol dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich miejscowości gminy. Dojazd jest wszędzie bezpłatny.",
    "Przy umawianiu wystarczy podać miejscowość i ulicę albo numer domu.",
  ],
  districts: [],

  nearbyHeading: "Poza Sępopol też przyjadę",
  nearbyParagraphs: [
    "Bartoszyce, Korsze, Bisztynek, Reszel i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Bartoszyce", "Korsze", "Bisztynek", "Reszel"],

  about: blokOMnie("do Sępopola", "w Sępopolu i całej gminie", REGION_WARMIA_MAZURY),

  faq: [
    {
      question: "Czy dojeżdżasz do Sępopola bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich miejscowości gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku, bo nazwy bywają mylone: Sępopol w powiecie bartoszyckim to nie Sępólno Krajeńskie.",
    },
    ...faqWspolne("w Sępopolu"),
    {
      question: "Dlaczego majonez mi się nie udaje?",
      answer:
        "Prawie zawsze dlatego, że olej trafia zbyt szybko. Emulsja to tłuszcz rozbity na drobniutkie krople zawieszone w wodzie — jeśli wlejecie go za dużo naraz, nie ma jak się rozbić. Majonez rozstrzyga się w pierwszych sekundach: jeśli baza nie zawiąże się na początku, dalsze ubijanie już nic nie da.",
    },
    {
      question: "Co zrobić z majonezem, który się zważył?",
      answer:
        "Nie wyrzucać. Zaczyna się od nowa: świeża baza w czystej misce, a nieudany majonez dolewa się do niej po trochu, dokładnie tak jak dolewałoby się olej. Emulsja odbudowuje się na nowym emulgatorze i nic się nie marnuje.",
    },
    {
      question: "Czy Thermomix robi majonez lepiej niż ręcznie?",
      answer:
        "Tu akurat tak i mówię to bez owijania: utrzymuje stałe obroty i stałą strużkę oleju przez cały czas, czego ręka po prostu nie utrzyma. To jedna z niewielu rzeczy, w których przewaga jest bezdyskusyjna. Wyjątek to bardzo małe porcje — przy jednym słoiczku sosu ostrze może nie sięgać i wtedy trzepaczka w małej miseczce wypada lepiej.",
    },
  ],

  geo: { lat: 54.2725, lng: 21.1547 },
};
