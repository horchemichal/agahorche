import type { CityContent } from "../city-content";
import {
  REGION_OPOLSKIE,
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
 * KĘDZIERZYN-KOŹLE — największe miasto województwa po Opolu, powstałe
 * w 1975 roku z połączenia Kędzierzyna, Koźla i sąsiednich miejscowości.
 * Leży nad Odrą i Kanałem Gliwickim, przy dużym zakładzie chemicznym
 * i porcie rzecznym. W 1997 roku miasto zostało ciężko dotknięte przez
 * powódź.
 *
 * KĄT: prąd. To jedyne miejsce, w którym mogę napisać rzecz, której nie
 * napisze żaden sprzedawca, a która jest po prostu prawdziwa: TO
 * URZĄDZENIE BEZ PRĄDU JEST SZAFKĄ. W mieście, które pamięta, co znaczy
 * być odciętym, takie zdanie nie jest efekciarstwem, tylko elementarną
 * uczciwością — i prowadzi do sensownego wniosku: Thermomix nigdy nie
 * zastępuje kuchenki gazowej, a jeśli ktoś planuje wymianę kuchni,
 * to jest argument za tym, żeby jakieś palniki zostały.
 *
 * TON: powódź wspominam jednym rzeczowym zdaniem, bez dramatyzowania
 * i bez wykorzystywania cudzej traumy jako chwytu. Sekcja jest o prądzie
 * i o wnioskach praktycznych, a nie o 1997 roku.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Kędzierzyn-Koźle powstał w 1975 roku z połączenia kilku miejscowości,
 * — leży nad Odrą i Kanałem Gliwickim, działa tu port rzeczny
 *   i duży zakład chemiczny,
 * — miasto zostało dotknięte powodzią w 1997 roku,
 * — dzielnice: Kędzierzyn, Koźle, Sławięcice, Kłodnica, Blachownia Śląska,
 *   Pogorzelec, Azoty, Rogi, Cisowa, Miejsce Kłodnickie, Lenartowice.
 *
 * CZEGO NIE MA: opisu powodzi, nazwy zakładu, danych o zatrudnieniu,
 * porad dotyczących bezpieczeństwa i przygotowania na sytuacje kryzysowe
 * — nie jestem od tego.
 */
export const KEDZIERZYN_KOZLE: CityContent = {
  slug: "kedzierzyn-kozle",
  h1: "Thermomix Kędzierzyn-Koźle – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Kędzierzyn-Koźle — prezentacja i cena",
  seoDescription:
    "Thermomix w Kędzierzynie-Koźlu: bezpłatna prezentacja TM7 u Ciebie w domu, wszystkie dzielnice. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Kędzierzyn-Koźle — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Kędzierzynie-Koźlu. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Kędzierzyna-Koźla z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do wszystkich dzielnic, od Koźla po Sławięcice i Blachownię.",

  highlights: highlightyStandardowe("Kędzierzyn-Koźle i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-6.webp",
    alt: "Świeżo upieczone bułki z ciasta zagniecionego w Thermomixie TM7",
    caption: "Ciasto wyrabia się bez ubrudzenia rąk — to zwykle pierwsza rzecz, którą ludzie chcą zobaczyć.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Kędzierzynie-Koźlu – jak wygląda prezentacja?",
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
      id: "bez-pradu-to-szafka",
      heading: "Bez prądu to jest szafka — i lepiej, żebyście usłyszeli to ode mnie",
      paragraphs: [
        "Kędzierzyn-Koźle powstało w tysiąc dziewięćset siedemdziesiątym piątym roku ze zrośnięcia kilku miejscowości i od zawsze żyje przy rzece, kanale, porcie i zakładach. W dziewięćdziesiątym siódmym miasto mocno oberwało od powodzi. Nie będę o tym pisać więcej, bo pamiętają to tutaj lepiej ode mnie i nie zamierzam robić z cudzego doświadczenia chwytu reklamowego.",
        "Wspominam o tym z jednego, całkiem praktycznego powodu. W mieście, które wie, co znaczy być odciętym, wypada powiedzieć na głos coś, co w folderach nie występuje: to urządzenie działa wyłącznie na prąd. Nie ma opcji zapasowej. Bez gniazdka jest ładną, ciężką szafką i tyle.",
        "Z tego wynika jedna konkretna rada i daję ją wbrew własnemu interesowi. Jeśli planujecie remont kuchni i zastanawiacie się nad płytą całkowicie elektryczną albo indukcyjną, to Thermomix nie jest argumentem za pozbyciem się gazu. Jest urządzeniem dodatkowym, nie zapasowym. Zostawcie sobie coś, co ugotuje wodę, kiedy prądu nie ma.",
        "Druga rzecz, mniej dramatyczna, a częstsza: gniazdko. Urządzenie potrzebuje własnego, a nie trzeciej wolnej dziurki w rozgałęźniku za lodówką, do którego podpięty jest już czajnik i mikrofalówka. Na prezentacji sprawdzę to u Was od razu — to zajmuje minutę, a oszczędza późniejszych nerwów.",
        "I tyle. Reszta tej strony jest o gotowaniu, bo po to przyjeżdżam. Ale wolałam zacząć od zdania, które ktoś powinien Wam powiedzieć przed zakupem, a nie po.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Kędzierzynie-Koźlu?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Podaj dzielnicę. Koźle, Kędzierzyn i Sławięcice to trzy różne końce miasta, a od tego zależy tylko pora spotkania, nigdy jego koszt.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Kędzierzynie-Koźlu"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla kędzierzyńskiej rodziny",
      paragraphs: [
        "Gdy w domu ktoś pracuje w grafiku, obiad rzadko jest wspólnym posiłkiem o jednej porze — musi powstać wcześniej i doczekać do powrotu.",
        "Thermomix pomaga tym, że nie wymaga obecności. Danie gotuje się z ustawioną temperaturą i mieszaniem, więc może powstać rano i poczekać, a wszystko dzieje się w jednym naczyniu.",
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

  districtsHeading: "Do których dzielnic dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać dzielnicę. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Kędzierzyn",
    "Koźle",
    "Sławięcice",
    "Kłodnica",
    "Blachownia Śląska",
    "Pogorzelec",
    "Azoty",
    "Rogi",
    "Cisowa",
    "Miejsce Kłodnickie",
    "Lenartowice",
  ],

  nearbyHeading: "Poza miasto też przyjadę",
  nearbyParagraphs: [
    "Zdzieszowice, Krapkowice, Ujazd, Leśnica, Głogówek, a po śląskiej stronie Racibórz — wszystko w zasięgu jednej trasy i wszędzie dojazd bezpłatny.",
  ],
  nearbyTowns: ["Zdzieszowice", "Krapkowice", "Ujazd", "Leśnica", "Głogówek", "Racibórz"],

  about: blokOMnie("do Kędzierzyna-Koźla", "w Kędzierzynie-Koźlu i okolicy", REGION_OPOLSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Kędzierzyna-Koźla bez dodatkowej opłaty?",
      answer:
        "Tak, do wszystkich dzielnic i do okolicznych gmin. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Kędzierzynie-Koźlu"),
    {
      question: "Czy Thermomix zadziała bez prądu?",
      answer:
        "Nie. Działa wyłącznie z gniazdka i nie ma żadnego trybu zapasowego. Dlatego nie traktujcie go jako powodu, żeby pozbyć się gazu przy remoncie kuchni — to urządzenie dodatkowe, a nie awaryjne.",
    },
    {
      question: "Czy potrzebuje jakiegoś specjalnego przyłącza?",
      answer:
        "Nie, zwykłego gniazdka — ale najlepiej własnego, a nie trzeciej dziurki w rozgałęźniku, do którego podpięty jest już czajnik i mikrofalówka. Sprawdzę to u Was na spotkaniu, zanim cokolwiek podłączę.",
    },
  ],

  geo: { lat: 50.3494, lng: 18.2264 },
};
