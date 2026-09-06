import type { CityContent } from "../city-content";
import {
  REGION_SWIETOKRZYSKIE,
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
 * WĄCHOCK — bardzo małe miasto nad Kamienną, między Starachowicami
 * a Skarżyskiem. Jest tu opactwo cystersów z XIII wieku, jeden
 * z najlepiej zachowanych zespołów romańskich w Polsce; przy klasztorze
 * spoczywa Jan Piwnik „Ponury". Miasto jest też bohaterem najbardziej
 * znanego polskiego cyklu dowcipów.
 *
 * KĄT: dowcipy — ale użyte odwrotnie, niż wszyscy się spodziewają.
 * Zaczynam od przyznania, że je znam, i od zapowiedzi, że żadnego nie
 * opowiem. A potem przechodzę do rzeczy, która w miasteczku na dwa i pół
 * tysiąca osób jest naprawdę ważna i nigdzie indziej nie jest tak ważna:
 * DYSKRECJA. W takim miejscu wszyscy wiedzą, kto co kupił, i to bywa
 * powodem, dla którego ktoś w ogóle nie dzwoni. Więc strona ma powiedzieć
 * wprost: nie robię spotkań grupowych, jeśli tego nie chcecie, i nie
 * opowiadam nikomu, u kogo byłam.
 *
 * TON: bez wyższości i bez podlizywania się. Żadnego dowcipu — także
 * „dobrotliwego". Miasto ma tego dość.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — opactwo cystersów w Wąchocku pochodzi z XIII wieku i jest jednym
 *   z najlepiej zachowanych zespołów romańskich w Polsce,
 * — przy opactwie pochowany jest Jan Piwnik „Ponury",
 * — Wąchock leży nad Kamienną, między Starachowicami a Skarżyskiem,
 * — miasto jest bohaterem znanego cyklu dowcipów,
 * — do gminy należą m.in. Parszów, Marcinków, Rataje, Wielka Wieś, Węglów.
 *
 * CZEGO NIE MA: ani jednego dowcipu, liczby mieszkańców podanej jako
 * argument, danych o dojazdach do pracy.
 */
export const WACHOCK: CityContent = {
  slug: "wachock",
  h1: "Thermomix Wąchock – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Wąchock — prezentacja i cena",
  seoDescription:
    "Thermomix w Wąchocku: bezpłatna prezentacja TM7 u Ciebie w domu, bez spotkań grupowych. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Wąchock — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Wąchocku. Prezentacja bezpłatna, tylko dla Was — bez zapraszania znajomych.",

  lead:
    "Przyjeżdżam do Wąchocka z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — także do Parszowa, Marcinkowa, Rataj i Wielkiej Wsi.",

  highlights: highlightyStandardowe("Wąchock i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Wąchocku – jak wygląda prezentacja?",
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
      id: "bez-widowni",
      heading: "Znam te dowcipy i żadnego nie opowiem",
      paragraphs: [
        "Tak, znam. Wszyscy znają i wszyscy uważają, że są pierwszymi, którzy je tu przywożą. Nie będę więc zaczynać od żartu, bo w Wąchocku to nie jest wstęp do rozmowy, tylko jej koniec. Powiem za to, po co naprawdę tu przyjeżdżam — i co w miasteczku tej wielkości działa inaczej niż w Ostrowcu czy Skarżysku.",
        "Wąchock jest mały. Opactwo cystersów stoi tu od trzynastego wieku, przy nim spoczywa „Ponury”, a poza tym jest to po prostu miejsce, gdzie ludzie się znają. I to jest rzecz, o której warto powiedzieć wprost, bo bywa powodem, dla którego ktoś w ogóle nie dzwoni: w takim miasteczku wiadomo, kto co kupił, zanim jeszcze zdąży to rozpakować.",
        "Dlatego u mnie prezentacja to spotkanie tylko dla Was. Nie muszę zapraszać koleżanek, nie potrzebuję widowni, nie robię „pokazu u kogoś w domu”, jeśli sami tego nie chcecie. Przyjeżdżam do Waszej kuchni, gotujemy, rozmawiamy o cenie i wyjeżdżam.",
        "Druga rzecz z tej samej pary: nie opowiadam nikomu, u kogo byłam ani kto co kupił. Ani sąsiadce, ani następnej klientce, ani „dla przykładu” na spotkaniu. To brzmi jak oczywistość, ale w małym mieście nie jest oczywiste i wolę mieć to powiedziane na stronie, a nie dopiero w Waszej kuchni.",
        "A jeśli akurat WOLICIE spotkanie w kilka osób — bo tak raźniej i bo koleżanka też się zastanawia — to też jest w porządku. Wtedy umawiamy się tak i wszyscy mają te same warunki. Chodzi tylko o to, żeby to była Wasza decyzja, a nie mój warunek.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Wąchocku?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Jeśli wolisz nie rozmawiać przez telefon, napisz wiadomość z formularza — oddzwonię o porze, którą wskażesz.",
        "Podaj miejscowość, jeśli mieszkasz poza samym Wąchockiem. Jeżdżę po całej gminie, a od kierunku zależy tylko pora spotkania.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Wąchocku"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla wąchockiej rodziny",
      paragraphs: [
        "W wielu tutejszych domach ktoś pracuje w Starachowicach albo w Skarżysku, więc dzień kończy się po dojeździe, a obiad powstaje później, niż by chciał ten, kto go robi.",
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

  districtsHeading: "Do których miejscowości gminy dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać miejscowość. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: ["Wąchock", "Parszów", "Marcinków", "Rataje", "Wielka Wieś", "Węglów"],

  nearbyHeading: "Poza gminę też przyjadę",
  nearbyParagraphs: [
    "Starachowice, Skarżysko-Kamienna, Suchedniów i Bodzentyn są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Starachowice", "Skarżysko-Kamienna", "Suchedniów", "Bodzentyn", "Kunów"],

  about: blokOMnie("do Wąchocka", "w Wąchocku i okolicy", REGION_SWIETOKRZYSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Wąchocka bez dodatkowej opłaty?",
      answer:
        "Tak, do miasta i do wszystkich miejscowości gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Wąchocku"),
    {
      question: "Czy muszę zaprosić znajome, żeby prezentacja się odbyła?",
      answer:
        "Nie. Przyjeżdżam do Was i tylko do Was, niezależnie od tego, ile osób jest w domu. Jeśli wolicie spotkanie w kilka osób, umówimy się tak — ale to Wasz wybór, a nie mój warunek.",
    },
    {
      question: "Czy ktoś się dowie, że u nas byłaś?",
      answer:
        "Ode mnie nie. Nie opowiadam, u kogo byłam ani kto co kupił — ani sąsiadom, ani kolejnym klientkom. W małym mieście to jest ważniejsze niż gdziekolwiek indziej i traktuję to poważnie.",
    },
  ],

  geo: { lat: 51.0708, lng: 21.01 },
};
