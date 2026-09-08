import type { CityContent } from "../city-content";
import {
  REGION_DOLNOSLASKIE,
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
 * BYSTRZYCA KŁODZKA — miasto w Kotlinie Kłodzkiej, z zachowanym układem
 * średniowiecznym i murami. Mieści jedyne w Polsce Muzeum Filumenistyczne,
 * czyli muzeum zapałek i etykiet zapałczanych.
 *
 * KĄT: ogień. Muzeum zapałek jest jedynym pretekstem w całym serwisie,
 * żeby napisać sekcję o czymś, co dla wielu osób jest ważniejsze niż
 * wszystkie funkcje razem wzięte: W TYM URZĄDZENIU NIE MA OTWARTEGO OGNIA.
 * Nic nie kipi na palnik, nic się nie przypala do dna, nic nie zostaje
 * włączone po wyjściu z kuchni.
 *
 * DLA KOGO TO JEST NAPRAWDĘ WAŻNE — i to trzeba nazwać wprost, bo nikt
 * o tym nie mówi: dla starszych osób mieszkających samotnie, dla domów
 * z małymi dziećmi i dla każdego, kto zna uczucie wracania z połowy drogi,
 * żeby sprawdzić kuchenkę.
 *
 * CZEGO TU NIE MA I BYĆ NIE MOŻE: straszenia pożarem, statystyk, obietnic
 * bezpieczeństwa absolutnego ani sugestii, że urządzenie zastępuje czujnik
 * czadu albo nadzór nad kimś, kto go potrzebuje. Piszę o różnicy między
 * palnikiem a grzaniem elektrycznym z wyłącznikiem — i na tym kończę.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — w Bystrzycy Kłodzkiej działa jedyne w Polsce muzeum FILUMENISTYCZNE
 *   (zweryfikowane 8.09.2026). NIE „jedyne muzeum zapałczarstwa" — w
 *   Częstochowie działa Muzeum Produkcji Zapałek, więc taki zapis byłby
 *   nieprawdziwy,
 * — miasto leży w Kotlinie Kłodzkiej i zachowało średniowieczny układ.
 */
export const BYSTRZYCA_KLODZKA: CityContent = {
  slug: "bystrzyca-klodzka",
  h1: "Thermomix Bystrzyca Kłodzka – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Bystrzyca Kłodzka — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Bystrzycy Kłodzkiej: bezpłatna prezentacja TM7 u Ciebie w domu, miasto i cała gmina. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Bystrzyca Kłodzka — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Bystrzycy Kłodzkiej. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Bystrzycy Kłodzkiej z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do miasta i do wszystkich sołectw gminy.",

  highlights: highlightyStandardowe("Bystrzyca Kłodzka i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "bez-otwartego-ognia",
      heading: "Miasto z muzeum zapałek — i kuchnia bez otwartego ognia",
      paragraphs: [
        "W Bystrzycy Kłodzkiej działa jedyne w Polsce muzeum filumenistyczne — poświęcone etykietom i pudełkom zapałczanym oraz historii krzesania ognia. Nie zamierzam z tego robić anegdoty, bo mam z tego pretekst do rzeczy poważniejszej — takiej, o której na pokazach mówi się na końcu i szeptem, a dla części osób jest ważniejsza niż wszystkie funkcje razem wzięte.",
        "W tym urządzeniu nie ma otwartego ognia. Grzeje elektrycznie, w zamkniętym naczyniu, do ustawionej temperatury, przez ustawiony czas — i po tym czasie przestaje grzać samo. Nic nie kipi na palnik. Nic nie przywiera do dna, bo miesza się bez przerwy. Nic nie zostaje włączone dlatego, że ktoś wyszedł z kuchni do telefonu i zapomniał.",
        "Dla większości osób to jest drobiazg. Ale są trzy sytuacje, w których to jest cała rzecz.",
        "Pierwsza: starszy rodzic mieszkający sam, o którego wszyscy się martwią. Nie napiszę Wam, że urządzenie kogokolwiek pilnuje ani że zastępuje opiekę, bo to byłaby nieprawda i nieprzyzwoitość. Napiszę tylko tyle: garnek zapomniany na palniku i garnek zapomniany w wyłączonym urządzeniu to nie jest ta sama sytuacja.",
        "Druga: dom z małym dzieckiem, w którym kuchenka jest tym jednym miejscem, do którego nie wolno podchodzić. Naczynie jest zamknięte pokrywą, a gotowanie odbywa się w środku.",
        "Trzecia jest najbardziej codzienna: obiad, który ma się gotować, kiedy Was nie ma w kuchni. Bez tego można się obejść, ale kto raz się przyzwyczai, ten nie wraca do stania i pilnowania.",
        "To wszystko, co mam do powiedzenia na ten temat, i nie dołożę ani zdania więcej — bo od strachu nie chcę niczego sprzedawać.",
      ],
    },
    {
      id: "prezentacja",
      heading: "Thermomix w Bystrzycy Kłodzkiej – jak wygląda prezentacja?",
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
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Bystrzycy Kłodzkiej?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Podaj miejscowość, jeśli mieszkasz poza samym miastem. Jeżdżę po całej gminie, a od kierunku i od pogody zależy tylko pora spotkania.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Bystrzycy Kłodzkiej"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla bystrzyckiej rodziny",
      paragraphs: [
        "Obiad musi tu powstać w oknie między pracą, szkołą i wieczorem, a przygotowuje go zwykle jedna osoba.",
        "Thermomix pomaga tym, że nie wymaga obecności i wyłącza się po ustawionym czasie. Gotowanie odbywa się z ustawioną temperaturą i mieszaniem, w jednym naczyniu.",
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
    "Bystrzyca Kłodzka",
    "Międzygórze",
    "Wilkanów",
    "Długopole-Zdrój",
    "Idzików",
    "Stary Waliszów",
    "Nowa Bystrzyca",
    "Poręba",
    "Pławnica",
    "Gorzanów",
  ],

  nearbyHeading: "Poza gminę też przyjadę",
  nearbyParagraphs: [
    "Kłodzko, Lądek-Zdrój, Stronie Śląskie i Międzylesie są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Kłodzko", "Lądek-Zdrój", "Stronie Śląskie", "Międzylesie", "Polanica-Zdrój"],

  about: blokOMnie("do Bystrzycy Kłodzkiej", "w gminie i całej Kotlinie", REGION_DOLNOSLASKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Bystrzycy Kłodzkiej bez dodatkowej opłaty?",
      answer:
        "Tak, do miasta i do wszystkich sołectw gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Bystrzycy Kłodzkiej"),
    {
      question: "Czy urządzenie wyłączy się samo?",
      answer:
        "Tak — grzeje do ustawionej temperatury przez ustawiony czas i po tym czasie przestaje. Nie ma otwartego ognia, nic nie kipi na palnik i nic nie przywiera do dna, bo zawartość jest mieszana. To bywa ważniejsze niż wszystkie funkcje razem wzięte.",
    },
    {
      question: "Myślę o takim urządzeniu dla starszego rodzica. Czy to dobry pomysł?",
      answer:
        "Może być, ale powiem uczciwie: żadne urządzenie nikogo nie pilnuje i nie zastępuje opieki. Realna różnica jest tylko taka, że garnek zapomniany na palniku i garnek zapomniany w urządzeniu, które samo się wyłączyło, to dwie różne sytuacje. Warto też sprawdzić, czy obsługa nie będzie za trudna — na spotkaniu można to spokojnie przetestować.",
    },
  ],

  geo: { lat: 50.2942, lng: 16.6472 },
};
