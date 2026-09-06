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
 * KRAŚNIK — miasto złożone z dwóch części: starego Kraśnika Lubelskiego
 * z rynkiem i kościołem oraz Kraśnika Fabrycznego, zbudowanego wraz
 * z zakładem w połowie XX wieku. Okolica — razem z Urzędowem i całą
 * zachodnią Lubelszczyzną — należy do najważniejszych w Polsce rejonów
 * uprawy owoców miękkich, przede wszystkim malin.
 *
 * KĄT: owoc, który nie poszedł do skupu. To jest wąska, konkretna
 * i nigdzie indziej nieopisana sprawa. O zbiorach i o przetworach pisałam
 * już kilka razy (Łącko, Laskowa, Nowy Sącz, Jasło), więc kolejna wersja
 * „wrzesień, kosz, słoiki” byłaby powtórzeniem. Tu chodzi o coś innego:
 * o TO, CO ZOSTAJE PO SORTOWANIU. Owoc przejrzały, pogięty, za miękki —
 * do skupu nie pójdzie, a wyrzucić szkoda. I to jest jedyny moment,
 * w którym rozmowa o urządzeniu ma tu realny sens.
 *
 * ROZGRANICZENIE WOBEC LASKOWEJ. Tam kąt brzmiał „owoc jest jednocześnie
 * pracą i jedzeniem”. Tu jest węziej i praktyczniej: nadwyżka drugiego
 * gatunku i lipcowy dzień, w którym nikt nie ma czasu gotować.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Kraśnik składa się z dwóch części: starego miasta i Kraśnika
 *   Fabrycznego, zbudowanego wraz z zakładem przemysłowym,
 * — okolica Kraśnika i Urzędowa należy do ważnych rejonów uprawy owoców
 *   miękkich, w tym malin,
 * — zbiór owoców miękkich jest pracą sezonową, angażującą całe rodziny.
 *
 * CZEGO NIE MA: wielkości zbiorów, cen skupu, nazw odmian, twierdzeń
 * o dochodach plantatorów.
 */
export const KRASNIK: CityContent = {
  slug: "krasnik",
  h1: "Thermomix Kraśnik – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Kraśnik — prezentacja i cena",
  seoDescription:
    "Thermomix w Kraśniku: bezpłatna prezentacja TM7 u Ciebie w domu, obie części miasta i okolica. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Kraśnik — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Kraśniku. Prezentacja i dojazd bezpłatne, terminy także poza sezonem zbiorów.",

  lead:
    "Przyjeżdżam do Kraśnika z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do obu części miasta i do okolicznych miejscowości.",

  highlights: highlightyStandardowe("Kraśnik i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-6.webp",
    alt: "Świeżo upieczone bułki z ciasta zagniecionego w Thermomixie TM7",
    caption: "Ciasto wyrabia się bez ubrudzenia rąk — to zwykle pierwsza rzecz, którą ludzie chcą zobaczyć.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Kraśniku – jak wygląda prezentacja?",
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
      id: "drugi-gatunek",
      heading: "To, co zostaje po sortowaniu",
      paragraphs: [
        "Okolice Kraśnika i Urzędowa to jeden z ważniejszych w Polsce rejonów uprawy owoców miękkich. W lipcu wygląda to tak, jak wygląda: dzień zaczyna się przed świtem, na plantacji jest cała rodzina i sąsiedzi, a w domu nikt nie gotuje, bo nie ma kiedy. To nie jest temat na wzruszający akapit — to jest ciężka robota na akord.",
        "Chcę napisać o wąskim fragmencie tej roboty, o którym nie pisze nikt, bo nie nadaje się do folderu. O tym, co zostaje po sortowaniu. Owoc przejrzały, pogięty, za miękki albo zbyt dojrzały na transport do skupu nie pójdzie. Wyrzucić szkoda, przerobić nie ma kiedy, a przez trzy dni i tak się zmarnuje.",
        "I to jest jedyny moment, w którym rozmowa o tym urządzeniu ma tu naprawdę sens. Mus albo przecier z takiego owocu powstaje w kilkanaście minut, w jednym naczyniu, z ustawioną temperaturą i mieszaniem — czyli bez stania przy garnku po całym dniu na kolanach. Sorbet z zamrożonych owoców robi się w kilka chwil i jest tym, na co po lipcowym dniu ma się ochotę najbardziej.",
        "Powiem od razu, czego to nie zrobi, bo nie chcę, żeby ktoś kupował z nadzieją. Nie zbierze, nie posortuje i nie odszypułkuje. Nie przerobi trzydziestu kilogramów naraz, bo naczynie ma swoją pojemność i robi się to partiami. I nie zastąpi zamrażarki — mrozić trzeba dalej tak, jak dotąd.",
        "A jeśli w lipcu nikt u Was nie ma godziny wolnej, to najlepszy wniosek z tej strony jest taki: umówmy się poza sezonem. Prezentacja we wrześniu albo w lutym będzie dla Was zwyczajnie użyteczniejsza niż wciśnięta między dwa dni zbioru.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Kraśniku?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Jeśli jesteście w sezonie, powiedzcie o tym wprost — chętnie umówię się na porę, w której ktoś w domu ma realnie godzinę spokoju, także wieczorem.",
        "Podaj część miasta albo miejscowość. Jeżdżę i po Kraśniku Lubelskim, i po Fabrycznym, i po okolicy.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Kraśniku"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla kraśnickiej rodziny",
      paragraphs: [
        "Przez większość roku obiad musi powstać w oknie między pracą, szkołą i wieczorem, a robi go zwykle jedna osoba. W sezonie ten układ przestaje działać, bo wszyscy są na polu.",
        "Thermomix pomaga w obu przypadkach tym samym: nie wymaga obecności. Danie gotuje się z ustawioną temperaturą i mieszaniem, więc może powstać wcześniej i doczekać do powrotu.",
        "Przy małym dziecku dochodzi Varoma: porcja na parze powstaje równolegle z obiadem dla dorosłych, w tym samym urządzeniu.",
      ],
      links: [
        { href: "/thermomix/dla-rodziny", label: "Thermomix dla rodziny" },
        { href: "/thermomix/dla-mamy", label: "Thermomix dla mamy" },
      ],
      photo: {
        src: "/media/gotuj-z-dzieckiem-2-13135854.webp",
        alt: "Aga Horche z synem i Thermomixem TM7 — napis „gotuj z dzieckiem i dla dziecka”",
        caption: "Obiad dla dziecka i dla dorosłych w jednym urządzeniu.",
      },
    },
    sekcjaCoUgotujesz(),
    sekcjaTradycyjneGotowanie(),
  ],

  districtsHeading: "Do których części Kraśnika i okolicy dojeżdżam?",
  districtsParagraphs: [
    "Do obu części miasta i do okolicznych miejscowości, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać dzielnicę albo miejscowość. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Kraśnik Lubelski",
    "Kraśnik Fabryczny",
    "Osiedle Młodych",
    "Piaski",
    "Zarzecze",
    "Budzyń",
    "Podlesie",
    "Karpiówka",
    "Lasek",
    "Suchynia",
  ],

  nearbyHeading: "Poza Kraśnik też przyjadę",
  nearbyParagraphs: [
    "Urzędów, Annopol, Janów Lubelski, Modliborzyce i Bełżyce są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Urzędów", "Annopol", "Janów Lubelski", "Modliborzyce", "Bełżyce", "Bychawa"],

  about: blokOMnie("do Kraśnika", "w Kraśniku i okolicy", REGION_LUBELSZCZYZNA),

  faq: [
    {
      question: "Czy dojeżdżasz do Kraśnika bez dodatkowej opłaty?",
      answer:
        "Tak, do obu części miasta i do okolicznych miejscowości. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Kraśniku"),
    {
      question: "Czy w Thermomixie da się przerobić owoce z plantacji?",
      answer:
        "Mus, przecier i sorbet — tak, w jednym naczyniu i bez stania przy garnku. Ale robi się to partiami, bo naczynie ma swoją pojemność, i nie zastąpi to zamrażarki ani sortowania. Jeśli macie duże ilości, powiedzcie o tym na spotkaniu, a policzymy uczciwie, ile to realnie zajmie.",
    },
    {
      question: "Jesteśmy w sezonie i nie mamy czasu. Kiedy się umówić?",
      answer:
        "Najlepiej poza sezonem — powiem to wprost, choć nie jest w moim interesie. Prezentacja wciśnięta między dwa dni zbioru nic Wam nie da. Jeśli jednak wolicie teraz, przyjadę o porze, którą wskażecie, także późnym wieczorem.",
    },
  ],

  geo: { lat: 50.9231, lng: 22.2244 },
};
