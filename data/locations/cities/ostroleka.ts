import type { CityContent } from "../city-content";
import {
  REGION_MAZOWSZE,
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
 * OSTROŁĘKA — stolica Kurpiowszczyzny, miasto nad Narwią, ośrodek regionu
 * o bardzo silnej, żywej tradycji ludowej.
 *
 * KĄT: strach przed ekranem. To jest jedyne miejsce w serwisie na barierę,
 * o której nikt nie mówi, a która blokuje najwięcej osób po sześćdziesiątce:
 * „NIE ZNAM SIĘ NA TAKICH NOWOCZESNYCH RZECZACH, ZEPSUJĘ TO".
 *
 * SEKCJA MA BYĆ KONKRETNA I POZBAWIONA PROTEKCJONALNOŚCI. Nie wolno pisać
 * „to takie proste, że każdy da radę", bo to jest lekceważenie obawy.
 * Trzeba nazwać, co konkretnie jest łatwe (ekran prowadzi krok po kroku,
 * nie ma menu do zapamiętania, nic się nie zepsuje od naciśnięcia),
 * co bywa trudne na początku (przewijanie, wybieranie z listy), i co
 * z tym robię (zostaję dłużej, zapisuję kartkę, odbieram telefon).
 *
 * CZEGO TU NIE MA I BYĆ NIE MOŻE: opowiadania Kurpiom o kurpiowskiej
 * kulturze ani sięgania po folklor jako ozdobnik. Jedno zdanie o regionie
 * i przechodzimy do rzeczy.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Ostrołęka leży nad Narwią i jest ośrodkiem Kurpiowszczyzny.
 */
export const OSTROLEKA: CityContent = {
  slug: "ostroleka",
  h1: "Thermomix Ostrołęka – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Ostrołęka — prezentacja i cena",
  seoDescription:
    "Thermomix w Ostrołęce: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Ostrołęka — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Ostrołęce. Spokojnie i bez pośpiechu — także przy pierwszym kontakcie z ekranem.",

  lead:
    "Przyjeżdżam do Ostrołęki z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do okolicznych miejscowości.",

  highlights: highlightyStandardowe("Ostrołęka i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Ostrołęce – jak wygląda prezentacja?",
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
      id: "strach-przed-ekranem",
      heading: "„Nie znam się na takich nowoczesnych rzeczach”",
      paragraphs: [
        "To zdanie słyszę częściej niż jakiekolwiek inne i prawie zawsze mówi je ktoś, kto gotuje świetnie od czterdziestu lat. Nie zbywam go, bo obawa jest uzasadniona: urządzenie ma ekran, a ekrany w wielu sprzętach rzeczywiście są zrobione tak, żeby zniechęcić.",
        "Nie napiszę więc, że „to takie proste, że każdy da radę”, bo to jest lekceważenie. Napiszę konkretnie, co jest łatwe, a co nie.",
        "Łatwe jest to, że ekran prowadzi przez przepis krok po kroku, jak przepis czytany na głos. Pokazuje jedną rzecz naraz: wsyp tyle, ustaw tyle, poczekaj. Nie ma menu, które trzeba zapamiętać, i nie ma nic, co da się zepsuć przez naciśnięcie niewłaściwego miejsca — urządzenie po prostu nie zrobi tego, czego nie ma zrobić. Nie da się też skasować niczego na stałe.",
        "Trudniejsze bywa co innego i o tym się nie mówi. Wyszukiwanie przepisu na liście, przewijanie palcem, wpisywanie liter — to są czynności, których człowiek uczy się na telefonie, a nie w kuchni. Jeśli ktoś nie używa smartfona, właśnie to, a nie gotowanie, będzie na początku najbardziej niewygodne.",
        "Co z tym robię, konkretnie. Po pierwsze: przy takim spotkaniu zostaję dłużej niż godzinę i nie liczę tego czasu — to jest zwykłe uczciwe podejście, a nie uprzejmość. Po drugie: zapisuję na kartce, ręcznie, trzy najczęściej używane rzeczy, żeby było gdzie zajrzeć bez włączania niczego. Po trzecie: przez pierwsze tygodnie odbieram telefon i tłumaczę spokojnie tyle razy, ile trzeba. Nie mam z tego żadnego dodatkowego zarobku i właśnie dlatego mogę to obiecać.",
        "I rzecz ostatnia, która bywa najważniejsza: na spotkaniu to nie ja mam obsługiwać urządzenie. Ma je obsługiwać osoba, która będzie w nim gotować — od pierwszej minuty i przy mnie. Jeśli po godzinie okaże się, że to nie idzie, powiem to wprost i nikt niczego nie kupi.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Ostrołęce?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz, jeśli obsługa ekranu jest dla Was nowością — zarezerwuję wtedy więcej czasu i nie będziemy się śpieszyć.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Ostrołęce"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla ostrołęckiej rodziny",
      paragraphs: [
        "Obiad musi tu powstać w oknie między pracą, szkołą i wieczorem, a przygotowuje go zwykle jedna osoba.",
        "Thermomix pomaga tym, że nie wymaga obecności i że prowadzi przez przepis krok po kroku. Gotowanie odbywa się z ustawioną temperaturą i mieszaniem, w jednym naczyniu.",
        "Przy małym dziecku dochodzi Varoma: porcja na parze powstaje równolegle z obiadem dla dorosłych, w tym samym urządzeniu.",
      ],
      links: [
        { href: "/thermomix/dla-rodziny", label: "Thermomix dla rodziny" },
        { href: "/thermomix/dla-poczatkujacych", label: "Thermomix dla początkujących" },
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

  districtsHeading: "Do których części Ostrołęki i okolicy dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do okolicznych miejscowości, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać dzielnicę albo miejscowość. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Śródmieście",
    "Stare Miasto",
    "Wojciechowice",
    "Leśna",
    "Traugutta",
    "Centrum",
    "Łazek",
    "Pomian",
    "Dzbenin",
    "Olszewo-Borki",
  ],

  nearbyHeading: "Poza Ostrołękę też przyjadę",
  nearbyParagraphs: [
    "Maków Mazowiecki, Przasnysz, Ostrów Mazowiecka i Myszyniec są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Maków Mazowiecki", "Przasnysz", "Ostrów Mazowiecka", "Myszyniec", "Wyszków"],

  about: blokOMnie("do Ostrołęki", "w Ostrołęce i okolicy", REGION_MAZOWSZE),

  faq: [
    {
      question: "Czy dojeżdżasz do Ostrołęki bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do okolicznych miejscowości. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Ostrołęce"),
    {
      question: "Nie znam się na urządzeniach z ekranem. Czy dam radę?",
      answer:
        "Nie powiem, że „to takie proste, że każdy da radę”, bo to lekceważenie. Powiem konkretnie: ekran prowadzi przez przepis krok po kroku i pokazuje jedną rzecz naraz, nie ma menu do zapamiętania i nic się nie zepsuje od naciśnięcia. Trudniejsze bywa wyszukiwanie na liście i przewijanie — czyli to, czego uczymy się na telefonie, a nie w kuchni.",
    },
    {
      question: "Co zrobisz, żeby mi to ułatwić?",
      answer:
        "Zostanę dłużej niż godzinę i nie policzę tego czasu, zapiszę ręcznie na kartce trzy najczęściej używane rzeczy, a przez pierwsze tygodnie będę odbierać telefon i tłumaczyć tyle razy, ile trzeba. Na spotkaniu urządzenie obsługuje osoba, która będzie w nim gotować — nie ja. Jeśli po godzinie zobaczę, że to nie idzie, powiem wprost.",
    },
  ],

  geo: { lat: 53.0862, lng: 21.5758 },
};
