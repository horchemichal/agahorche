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
 * KRASNYSTAW — miasto nad Wieprzem, w środku najważniejszego w Polsce
 * rejonu uprawy chmielu. Co roku odbywają się tu Chmielaki, święto
 * związane właśnie z tą uprawą.
 *
 * KĄT: gotowanie dla ekipy. Zbiór chmielu jest pracą sezonową, w której
 * na gospodarstwie pojawia się naraz kilkanaście osób — i ktoś musi ich
 * nakarmić. To jest ZUPEŁNIE INNA KUCHNIA niż rodzinny obiad: nie chodzi
 * o urozmaicenie ani o efekt, tylko o objętość, sytość i o to, żeby zdążyć.
 * Nikt o tym nie pisze, bo to nie wygląda ładnie na zdjęciu.
 *
 * WARUNEK UCZCIWOŚCI: naczynie Thermomixa jest małe wobec takiej skali
 * i trzeba to powiedzieć wprost. Przy piętnastu osobach główne danie
 * i tak powstaje w dużym garnku — urządzenie pomaga przy cieście, sosach,
 * dodatkach i przy tym, co robi się dzień wcześniej.
 *
 * ROZGRANICZENIE: Busko dostało gości kuracjuszy, Ćmielów obiad na gości
 * od święta. Tu chodzi o karmienie pracujących ludzi w środku roboty —
 * inna skala, inne wymagania, inny tekst.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — okolice Krasnegostawu należą do najważniejszych w Polsce rejonów
 *   uprawy chmielu,
 * — w mieście odbywają się coroczne Chmielaki,
 * — Krasnystaw leży nad Wieprzem, między Lublinem, Chełmem i Zamościem,
 * — zbiór chmielu jest pracą sezonową.
 *
 * CZEGO NIE MA: wielkości areału, cen, opisu technologii zbioru, nazw
 * odmian chmielu.
 */
export const KRASNYSTAW: CityContent = {
  slug: "krasnystaw",
  h1: "Thermomix Krasnystaw – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Krasnystaw — prezentacja i cena",
  seoDescription:
    "Thermomix w Krasnymstawie: bezpłatna prezentacja TM7 u Ciebie w domu, miasto i cała gmina. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Krasnystaw — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Krasnymstawie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Krasnegostawu z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — także do Siennicy Nadolnej, Krupego, Białki i pozostałych sołectw.",

  highlights: highlightyStandardowe("Krasnystaw i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-6.webp",
    alt: "Świeżo upieczone bułki z ciasta zagniecionego w Thermomixie TM7",
    caption: "Ciasto wyrabia się bez ubrudzenia rąk — to zwykle pierwsza rzecz, którą ludzie chcą zobaczyć.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Krasnymstawie – jak wygląda prezentacja?",
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
      id: "gotowanie-dla-ekipy",
      heading: "Kuchnia, w której gotuje się dla ekipy",
      paragraphs: [
        "Krasnystaw leży w środku polskiego chmielu i ma z tego powodu własne święto. Ale za świętem stoi robota, o której nikt nie pisze, bo nie wygląda dobrze na zdjęciu — a zwłaszcza za jedną jej częścią, która dzieje się w domu, a nie na polu.",
        "W sezonie na gospodarstwie pojawia się naraz kilkanaście osób. I ktoś musi je nakarmić. To jest zupełnie inna kuchnia niż rodzinny obiad, choć wygląda podobnie. Nie chodzi w niej o urozmaicenie ani o to, żeby ładnie wyszło. Chodzi o objętość, o to, żeby najedli się na kilka godzin ciężkiej pracy, i o to, żeby było gotowe wtedy, kiedy schodzą — a nie kwadrans później.",
        "Powiem od razu, żeby nikt nie kupił tego z fałszywą nadzieją: przy piętnastu osobach główne danie i tak zrobicie w dużym garnku. Naczynie tego urządzenia jest na to za małe i nie zamierzam udawać inaczej.",
        "Pomaga natomiast w rzeczach, które w takim dniu zjadają najwięcej czasu i najbardziej męczą. W cieście — na drożdżówki i placek, wyrobionym wieczorem wcześniej i bez mąki po całej kuchni. W sosach i zupach, które gotują się bez pilnowania, gdy Wy zajmujecie się resztą. W surówkach i pastach, bo tarcie i siekanie dla kilkunastu osób to osobna godzina roboty. I w kompocie albo napoju, o którym zawsze się zapomina.",
        "Innymi słowy: nie zdejmie z Was tego dnia, ale zdejmie z niego kilka najbardziej upierdliwych kawałków.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Krasnymstawie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. W sezonie nie proponuję spotkań w środku dnia — powiedzcie po prostu, kiedy macie realnie godzinę spokoju, choćby późnym wieczorem.",
        "Podaj miejscowość, jeśli mieszkasz poza samym miastem. Jeżdżę po całej gminie, a od kierunku zależy tylko pora spotkania.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Krasnymstawie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla krasnostawskiej rodziny",
      paragraphs: [
        "Poza sezonem obiad musi powstać w oknie między pracą, szkołą i wieczorem, a robi go zwykle jedna osoba — ta sama, która w sezonie karmi wszystkich pozostałych.",
        "Thermomix pomaga tym, że nie wymaga obecności, a większa porcja nie kosztuje więcej pilnowania. Danie gotuje się z ustawioną temperaturą i mieszaniem, w jednym naczyniu.",
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

  districtsHeading: "Do których miejscowości gminy dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać miejscowość. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Krasnystaw",
    "Siennica Nadolna",
    "Krupe",
    "Białka",
    "Zakręcie",
    "Latyczów",
    "Stężyca",
    "Małochwiej Duży",
    "Bzite",
    "Józefów",
  ],

  nearbyHeading: "Poza gminę też przyjadę",
  nearbyParagraphs: [
    "Chełm, Zamość, Rejowiec Fabryczny i Piaski są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Chełm", "Zamość", "Rejowiec Fabryczny", "Piaski", "Lublin", "Szczebrzeszyn"],

  about: blokOMnie("do Krasnegostawu", "w Krasnymstawie i okolicy", REGION_LUBELSZCZYZNA),

  faq: [
    {
      question: "Czy dojeżdżasz do Krasnegostawu bez dodatkowej opłaty?",
      answer:
        "Tak, do miasta i do wszystkich sołectw gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Krasnymstawie"),
    {
      question: "Gotuję w sezonie dla kilkunastu osób. Czy to urządzenie mi wystarczy?",
      answer:
        "Nie na główne danie — naczynie jest na taką skalę za małe i wolę powiedzieć to wprost. Przy kilkunastu osobach zupa czy drugie danie i tak powstaje w dużym garnku. Urządzenie zdejmie z Was ciasto, sosy, surówki i to, co da się zrobić dzień wcześniej.",
    },
    {
      question: "Jesteśmy w sezonie i nie mamy chwili. Kiedy się umówić?",
      answer:
        "Najlepiej poza sezonem — wtedy naprawdę coś z tego spotkania wyniesiecie. Jeśli wolicie teraz, przyjadę o porze, którą wskażecie, także późnym wieczorem, i skrócę spotkanie do konkretów.",
    },
  ],

  geo: { lat: 50.9833, lng: 23.175 },
};
