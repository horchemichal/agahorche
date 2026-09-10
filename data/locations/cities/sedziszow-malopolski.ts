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
 * SĘDZISZÓW MAŁOPOLSKI — miasto w powiecie ropczycko-sędziszowskim,
 * 12 405 mieszkańców (31.12.2024, GUS). Prawa miejskie 28 lutego
 * 1483 r. (Jan Odrowąż ze Sprowy, zatwierdzenie Kazimierza
 * Jagiellończyka) — NIEPRZERWANIE od 543 lat. Działa tu PZL
 * Sędziszów S.A., producent filtrów samochodowych i hydraulicznych.
 *
 * UWAGA — DWA SĘDZISZOWY. Ten (małopolski, podkarpackie) i Sędziszów
 * w świętokrzyskim. To DRUGI stracił i odzyskał prawa miejskie
 * (1989); materiały o „35-leciu nadania praw miejskich" dotyczą
 * tamtego miasta. Przy każdym fakcie trzeba było sprawdzać powiat.
 *
 * KĄT: sosy, które się warzą — czyli o kilku stopniach różnicy.
 * Miasto, w którym od dziesięcioleci produkuje się FILTRY (wyroby,
 * których cała funkcja polega na trzymaniu tolerancji), jest
 * właściwym miejscem na jedyny w serwisie tekst o tym, że sos
 * holenderski, budyń i krem zależą nie od umiejętności, tylko
 * od kilku stopni.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że „zwarzył się" to nie jest wina kucharza, tylko przekroczona
 *   temperatura albo za szybkie dodanie tłuszczu,
 * — że TO JEST dokładnie ta rodzina dań, w której urządzenie
 *   realnie zmienia wynik, bo trzyma temperaturę i miesza równocześnie,
 * — że NIE zmienia nic tam, gdzie problemem jest kolejność albo
 *   jakość składników,
 * — i uczciwie: że zwarzonego sosu zwykle się nie ratuje i nie będę
 *   udawać, że urządzenie ma na to guzik.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR. Przy emulsjach pokusa
 *   jest największa w całym serwisie — konkretne stopnie są
 *   w przepisach urządzenia, nie u przedstawicielki handlowej.
 * — ŻADNYCH PORAD O SUROWYCH JAJKACH: bezpieczeństwo, stopień
 *   ścięcia, temperatura ścinania białka. To dziedzina
 *   bezpieczeństwa żywności. Ta sama rodzina odmów co podroby
 *   w Piaskach i surowe mięso w Modliborzycach.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNEGO OBIECYWANIA, że „zawsze wyjdzie".
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Beza / ubijanie piany" (Ostrów
 * Lubelski) dotyczy NAPOWIETRZANIA. „Mieszanie" (Opole Lubelskie) —
 * czynności ciągłej jako takiej. „Precyzja i to, gdzie NIE jest
 * potrzebna" (Tomaszów Lubelski) mówi o dokładności WAŻENIA. Tutaj
 * chodzi wyłącznie o TEMPERATURĘ jako o czynnik, który rozstrzyga
 * — i o emulsje, których nigdzie indziej w serwisie nie ma.
 * „Danie nie wyszło i nie wiadomo dlaczego" to lista diagnostyczna;
 * tu przyczyna jest znana z góry i nazwana.
 *
 * ŚWIADOME POMINIĘCIE — ODNOTOWANE, NIEUŻYTE:
 * — ZAGŁADA społeczności żydowskiej miasta (ok. 280 zamordowanych,
 *   ok. 1000 ofiar łącznie, ok. 30 osób uratowanych przez
 *   mieszkańców) i zniszczenie ok. 70% zabudowy w 1944 r. Fakty
 *   sprawdzone. NIE UŻYWAM ICH na stronie o sprzęcie AGD.
 *
 * CZEGO NIE TWIERDZĘ, MIMO ŻE BYŁO KUSZĄCE:
 * — NIE PISZĘ, że w Sędziszowie jest fabryka autobusów. AUTOSAN
 *   JEST W SANOKU (dziś HSW S.A. Oddział Autosan), ok. 70 km stąd.
 *   Pomyłka bierze się prawdopodobnie z podobieństwa skrótu „PZL".
 *   Tutejszy zakład produkuje FILTRY,
 * — NIE PISZĘ, że PZL Sędziszów jest największym pracodawcą miasta.
 *   Żadne źródło tego wprost nie stwierdza — piszę tylko, co zakład
 *   produkuje i że działa (KRS 0000059050, aktywna),
 * — NIE PISZĘ, że miasto jest sypialnią Rzeszowa. Nie ma
 *   opublikowanych danych o dojazdach do pracy dla tej gminy.
 *   To hipoteza, nie fakt,
 * — NIE ŁĄCZĘ MIASTA Z POLIGONEM V-2 W BLIŹNIE. Blizna leży
 *   w GMINIE OSTRÓW, nie w gminie Sędziszów Małopolski. Angielska
 *   Wikipedia miesza te dwie rzeczy,
 * — NIE PODAJĘ nazwy piątego osiedla. BIP potwierdza CZTERY z nazwy,
 *   a jedno źródło mówi o pięciu. Wymieniam tylko potwierdzone,
 * — NIE PODAJĘ żadnego produktu z Listy Produktów Tradycyjnych.
 *   Dla miasta i powiatu nie znaleziono wpisu,
 * — NIE UŻYWAM liczby 7 121 z Wikipedii (2022). Rozbieżność z GUS
 *   (12 405 na 31.12.2024) niewyjaśniona; biorę dane GUS.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — prawa miejskie 28 lutego 1483 r., nieprzerwanie do dziś,
 * — PZL Sędziszów S.A. produkuje filtry samochodowe i hydrauliczne,
 *   m.in. do ciągników i maszyn rolniczych; spółka aktywna,
 * — cukrownia działała tu w latach 1870–1890 i od 1881 r. miała
 *   pozycję monopolisty w Galicji,
 * — klub Lechia Sędziszów założony w 1914 r.,
 * — osiedla potwierdzone w BIP: Młodych, Śródmieście, 1000-lecia,
 *   Przedmieście,
 * — 12 405 mieszkańców (31.12.2024).
 */
export const SEDZISZOW_MALOPOLSKI: CityContent = {
  slug: "sedziszow-malopolski",
  h1: "Thermomix Sędziszów Małopolski – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Sędziszów Małopolski — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Sędziszowie Małopolskim: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Sędziszów Małopolski — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Sędziszowie Małopolskim. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Sędziszowa Małopolskiego z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do miejscowości gminy.",

  highlights: highlightyStandardowe("Sędziszów Małopolski i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-2.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Sos się zwarzył. To nie była Twoja wina.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Sędziszowie Małopolskim – jak wygląda prezentacja?",
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
      id: "sosy",
      heading: "Miasto, które robi filtry — czyli o sosach, które się warzą",
      paragraphs: [
        "W Sędziszowie Małopolskim od dziesięcioleci produkuje się filtry — samochodowe i hydrauliczne, między innymi do ciągników i maszyn rolniczych. Filtr to wyrób, którego cała wartość polega na tym, że trzyma tolerancję. Albo mieści się w niej, albo jest do wyrzucenia; nie ma stanu pośredniego.",
        "W kuchni jest jedna rodzina dań, która działa dokładnie tak samo, i chcę o niej napisać właśnie tutaj. To sosy i kremy na emulsji: holenderski, beszamel na końcowym etapie, budyń, krem do tortu, sos maślany do ryby. Ich wspólna cecha jest taka, że rozstrzyga o nich kilka stopni.",
        "Powiem coś, co powinno usłyszeć wiele osób, które w domu przestały robić takie rzeczy: „zwarzył mi się” to prawie nigdy nie jest kwestia umiejętności. To jest przekroczona temperatura albo tłuszcz dodany za szybko. Dwa mechanizmy, oba czysto fizyczne, oba niezależne od tego, ile lat ktoś gotuje. Ludzie latami noszą przekonanie, że „nie umieją robić kremów”, podczas gdy problem był w tym, że nie da się jednocześnie mieszać i pilnować płomienia.",
        "To jest jeden z niewielu obszarów, w których napiszę bez zastrzeżeń: tutaj urządzenie zmienia wynik. Trzyma zadaną temperaturę i miesza w tym samym czasie, więc znika dokładnie ten moment, w którym zwykle wszystko się psuje. Nie chodzi o wygodę — chodzi o to, że coś, co wcześniej wychodziło raz na trzy razy, zaczyna wychodzić za każdym razem.",
        "Teraz granice, bo one też są ostre. Jeśli sos nie wychodzi przez złą kolejność składników albo przez to, że masło było ciepłe, kiedy miało być zimne — urządzenie nie pomoże. Ono nie poprawia przepisu, tylko wykonuje go dokładnie. Zły przepis wykonany dokładnie jest nadal złym przepisem.",
        "I rzecz, której nie usłyszycie na pokazie: zwarzonego sosu zwykle się nie ratuje. Bywają sztuczki, czasem działają, częściej nie, i żadne urządzenie nie ma na to guzika. Wolę powiedzieć to teraz.",
        "Konkretnych temperatur i czasów ode mnie nie usłyszycie — są w przepisach urządzenia. Nie doradzę też nic o surowych jajkach: ani o bezpieczeństwie, ani o stopniu ścięcia. To jest dziedzina bezpieczeństwa żywności, a ja jestem przedstawicielką handlową.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/funkcje", label: "Funkcje TM7" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Sędziszowie Małopolskim?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli jest sos albo krem, który Wam kiedyś nie wyszedł i od tego czasu go nie robicie — powiedzcie mi o tym. To jest najlepsza możliwa rzecz do zrobienia na prezentacji.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Sędziszowie Małopolskim"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla sędziszowskiej rodziny",
      paragraphs: [
        "Sędziszów Małopolski liczy ponad dwanaście tysięcy mieszkańców i ma prawa miejskie nieprzerwanie od 1483 roku — to rzadkość w tej części kraju, gdzie większość miasteczek utraciła je po powstaniu styczniowym. Przez dwadzieścia lat, od 1870 do 1890, działała tu cukrownia, która w Galicji miała pozycję monopolisty. Klub Lechia gra tu od 1914 roku.",
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

  districtsHeading: "Do których części Sędziszowa Małopolskiego dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do miejscowości gminy, bez dopłaty za dojazd.",
    "Miasto ma oficjalny podział na osiedla — poniżej te potwierdzone w Biuletynie Informacji Publicznej. Przy umawianiu wystarczy podać osiedle albo ulicę.",
  ],
  districts: ["Osiedle Młodych", "Śródmieście", "Osiedle 1000-lecia", "Przedmieście"],

  nearbyHeading: "Poza Sędziszów Małopolski też przyjadę",
  nearbyParagraphs: [
    "Ropczyce, Dębica, Rzeszów, Głogów Małopolski i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Ropczyce", "Dębica", "Rzeszów", "Głogów Małopolski", "Kolbuszowa", "Łańcut"],

  about: blokOMnie("do Sędziszowa Małopolskiego", "w Sędziszowie Małopolskim i okolicy", REGION_PODKARPACIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Sędziszowa Małopolskiego bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do miejscowości gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Sędziszowie Małopolskim"),
    {
      question: "Zawsze warzą mi się kremy i sosy. Czy to urządzenie to naprawi?",
      answer:
        "W większości przypadków tak — i powiem od razu, że to prawie nigdy nie była Wasza wina. Kremy i emulsje warzą się od przekroczonej temperatury albo od zbyt szybkiego dodania tłuszczu, a nie od braku umiejętności. Urządzenie trzyma temperaturę i miesza równocześnie, czyli usuwa dokładnie ten moment, w którym to się psuje. Nie pomoże natomiast, gdy problemem jest sam przepis albo kolejność składników — wykona go dokładnie, ale go nie poprawi.",
    },
    {
      question: "Da się uratować zwarzony sos?",
      answer:
        "Zwykle nie. Krążą sztuczki, czasem działają, najczęściej nie, i żadne urządzenie nie ma na to osobnej funkcji. Wolę to powiedzieć przed zakupem niż zostawić Was z rozczarowaniem po. Sensowniejsza droga to nie doprowadzać do zwarzenia — a tu akurat sprzęt naprawdę pomaga.",
    },
  ],

  geo: { lat: 50.0692, lng: 21.7008 },
};
