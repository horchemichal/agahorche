import type { CityContent } from "../city-content";
import {
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
 * ZABIERZÓW — jedyna gmina w tym zestawie z CZTEREMA przystankami
 * kolejowymi. To jest oś strony i celowe przeciwieństwo Michałowic, gdzie
 * kolei nie ma wcale. Drugi wątek: w tej gminie leży lotnisko Balice i duży
 * kompleks biurowy, więc nie wszyscy stąd wyjeżdżają do pracy — część
 * pracuje na miejscu.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — 23 sołectwa: Aleksandrowice, Balice, Bolechowice, Brzezie, Brzezinka,
 *   Brzoskwinia, Burów, Karniowice, Kleszczów, Kobylany, Kochanów, Młynka,
 *   Niegoszowice, Nielepice, Pisary, Radwanowice, Rudawa, Rząska,
 *   Szczyglice, Ujazd, Więckowice, Zabierzów, Zelków
 *   (zabierzow.org.pl/solectwa.html),
 * — gmina WIEJSKA, siedzibą jest wieś Zabierzów — nie ma tu miasta,
 * — 29 718 mieszkańców (GUS, 31.12.2024), powierzchnia ok. 99,6 km²,
 * — wzrost liczby ludności o 37,5% w latach 2002–2024, saldo migracji
 *   2024: +336 osób (polskawliczbach.pl),
 * — przeciętna powierzchnia mieszkania 116,1 m² przy 75,6 m² dla Polski
 *   (zabierzow.geoportal-krajowy.pl/statystyki-gus),
 * — linia kolejowa nr 133 (E30), trasa SKA3 Kraków Główny – Trzebinia –
 *   Oświęcim; przystanki w gminie: Zabierzów Rząska, Zabierzów, Rudawa,
 *   Pisary (kolejemalopolskie.com.pl),
 * — DK79 Kraków–Katowice przez Zabierzów; A4 i S52 w rejonie gminy,
 * — obwodnica Zabierzowa w ciągu DK79: ok. 10,3 km od węzła Modlniczka do
 *   ronda w Rudawie, omija Zabierzów od północy, w budowie od sierpnia
 *   2023, w ciągu tunel ok. 300 m (dk79obwodnicazabierzowa.pl),
 * — lotnisko Kraków-Balice leży w granicach gminy; Balice są jej sołectwem,
 * — Kraków Business Park w Zabierzowie, ok. 45 600 m² powierzchni biurowej,
 * — Instytut Zootechniki – Państwowy Instytut Badawczy w Balicach,
 * — parki krajobrazowe Dolinki Krakowskie i Tenczyński; Brama Bolechowicka
 *   i Skała Kmity nad Rudawą.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — daty otwarcia obwodnicy — prasa pisze o 2027, GDDKiA podaje tylko
 *   kamienie milowe. NIE POTWIERDZONE, więc piszemy „w budowie”,
 * — dokładnego czasu przejazdu pociągiem — tylko agregatory rozkładów
 *   (10–15 min). Piszemy „kwadrans”, bez liczby co do minuty,
 * — Doliny Będkowskiej i Mnikowskiej — strona gminy opisuje cały region
 *   Dolinek Podkrakowskich, ale te dwie leżą POZA gminą Zabierzów,
 * — korków na DK79 — brak wiarygodnego źródła,
 * — produktów z ministerialnej Listy Produktów Tradycyjnych — gmina ma
 *   własną listę „produktów lokalnych”, to nie to samo,
 * — liczby zatrudnionych na lotnisku i w Kraków Business Park.
 *
 * PUŁAPKA: Zabierzów Bocheński to wieś w gminie Niepołomice, na wschód od
 * Krakowa — zupełnie inne miejsce niż gmina Zabierzów.
 */
export const ZABIERZOW: CityContent = {
  slug: "zabierzow",
  h1: "Thermomix Zabierzów – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Zabierzów — prezentacja i cena",
  seoDescription:
    "Thermomix w gminie Zabierzów: bezpłatna prezentacja TM7 u Ciebie w kuchni — Balice, Rudawa, Rząska, Bolechowice i pozostałe sołectwa. Tel. 517 185 691.",
  ogTitle: "Thermomix Zabierzów — zobacz TM7 na żywo u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w gminie Zabierzów. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead:
    "Do gminy Zabierzów przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Przywożę urządzenie i składniki — Ty nie kupujesz i nie przygotowujesz nic. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje.",

  highlights: highlightyStandardowe("cała gmina Zabierzów, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Zabierzowie – jak wygląda prezentacja?",
      paragraphs: [
        "Przywożę urządzenie, składniki i naczynia, gdyby były potrzebne. Ty przygotowujesz tylko kawałek wolnego blatu i gniazdko. Reszta jest po mojej stronie — łącznie z posprzątaniem po gotowaniu.",
        "Gotujemy realny posiłek: coś obiadowego, coś słodkiego i, jeśli chcesz, coś z tego, co masz akurat w lodówce. To ostatnie mówi najwięcej, bo pokazuje urządzenie na Waszym jedzeniu, a nie na przepisie dobranym pod pokaz.",
        "Liczby zostawiam na koniec: aktualna cena, obowiązująca promocja i rata przy różnych okresach spłaty. Nie oczekuję decyzji tego samego dnia i nie dzwonię potem co tydzień z pytaniem, czy już.",
      ],
      links: [{ href: "/prezentacja/jak-wyglada", label: "Zobacz, jak wygląda prezentacja krok po kroku" }],
      photo: {
        src: "/media/aga-przedstawiciel-thermomix-hero-f49127f7.webp",
        alt: "Aga Horche z Thermomixem TM7 — napis „Przedstawiciel Thermomix”",
        caption: "Prezentację prowadzi Aga — ta sama osoba, która odbierze telefon po zakupie.",
      },
    },
    {
      id: "na-zywo",
      heading: "Cztery przystanki kolejowe w jednej gminie — i co z tego wynika",
      paragraphs: [
        "Zabierzów ma coś, czego nie ma prawie żadna gmina pod Krakowem: cztery przystanki na linii kolejowej do Krakowa. Zabierzów Rząska, Zabierzów, Rudawa i Pisary leżą na trasie kolei aglomeracyjnej, a przejazd do Krakowa Głównego zajmuje mniej więcej kwadrans. To znaczy, że stąd da się dojeżdżać do miasta bez samochodu — a to pod Krakowem rzadkość.",
        "Druga rzecz, o której warto pamiętać: w granicach tej gminy leży lotnisko Kraków-Balice, a w samym Zabierzowie duży kompleks biurowy. Nie wszyscy więc rano stąd wyjeżdżają. Część mieszkańców pracuje na miejscu, a lotnisko żyje w rytmie, który nie kończy się o siedemnastej.",
        "Dla kuchni oba te fakty prowadzą do tego samego wniosku: godziny posiłków są tu bardzo różne w różnych domach, a często nawet w jednym. Dlatego najczęściej rozmawiamy nie o efektownym gotowaniu na pokaz, tylko o tym, jak ugotować raz i mieć z tego dwa dni. Danie przygotowane rano czeka i odgrzewa się w tym samym naczyniu, w którym powstało, bez brudzenia kolejnych garnków.",
        "Jeśli ktoś w domu pracuje na zmiany albo wraca w środku nocy, przydaje się jeszcze jedno: TM7 pracuje ciszej od poprzedniego modelu i nie wymaga stania obok. Można nastawić i wyjść z kuchni.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w gminie Zabierzów?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej rozmowie. Możesz też zostawić kontakt w formularzu na dole strony; wtedy podaj porę, o której mogę oddzwonić.",
        "Przy umawianiu przyda mi się nazwa sołectwa. Gmina jest duża i rozciągnięta — z Rząskiej pod Krakowem do Pisar czy Radwanowic jest kawałek drogi, a przez środek prowadzi krajowa siódemdziesiątka dziewiątka, na której trwa budowa obwodnicy. Wolę wyjechać z zapasem, niż się spóźnić.",
        "Powiedz też, ile osób będzie na spotkaniu — od tego zależy, co ugotujemy i ile składników wezmę.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w gminie Zabierzów"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z gminy Zabierzów",
      paragraphs: [
        "To gmina domów, a nie bloków — przeciętne mieszkanie ma tu około stu szesnastu metrów, przy średniej krajowej niecałych siedemdziesięciu sześciu. Miejsce na blacie rzadko bywa więc argumentem przeciw, a jeśli już pada, to raczej w formie „mam już wszystkie sprzęty”.",
        "Odpowiadam na to zawsze tak samo, bo to uczciwa odpowiedź: Thermomix nie dokłada czwartego urządzenia do trzech, które masz. Sprawia, że część z nich przestaje być potrzebna — a przede wszystkim zabiera stanie przy garnku. Robot planetarny nie pilnuje temperatury przez czterdzieści minut i nie miesza sam.",
        "Przy dzieciach największą różnicę robi to, że da się ugotować i zmiksować w jednym naczyniu, bez przelewania gorących rzeczy. Na parze w Varomie porcja dla najmłodszych powstaje równolegle z obiadem dla reszty domu — jedno urządzenie, dwa piętra, jedno zmywanie.",
        "W domach z ogrodem wraca też temat przetworów: konfitury i przeciery gotują się z ustawioną temperaturą i mieszaniem, które nie pozwala przywrzeć.",
      ],
      links: [
        { href: "/thermomix/dla-rodziny", label: "Thermomix dla rodziny" },
        { href: "/thermomix/dla-mamy", label: "Thermomix dla mamy" },
      ],
      photo: {
        src: "/media/gotuj-z-dzieckiem-1-be78fd1c.webp",
        alt: "Aga Horche z synem i Thermomixem TM7 — napis „gotuj z dzieckiem i dla dziecka”",
        caption: "Posiłek dla dziecka może powstawać równolegle z obiadem dla reszty domu.",
      },
    },
    sekcjaCoUgotujesz(),
    sekcjaTradycyjneGotowanie(),
  ],

  districtsHeading: "Gdzie w gminie Zabierzów dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich dwudziestu trzech sołectw i bez dopłaty za odległość — od Rząskiej i Szczyglic, które stykają się z Krakowem, po Radwanowice, Pisary i Kochanów przy zachodniej granicy gminy.",
    "Zabierzów jest gminą wiejską — nie ma tu miasta, a siedzibą jest wieś Zabierzów. Sołectwa mają bardzo różny charakter: część leży w dolinkach jurajskich, część wzdłuż krajowej drogi, a Balice to sołectwo, na którego terenie stoi lotnisko Kraków-Balice.",
    "Przez środek gminy przebiega droga krajowa numer 79, a od 2023 roku trwa budowa obwodnicy, która ma wyprowadzić ten ruch poza Zabierzów. Do czasu jej otwarcia po prostu rezerwuję więcej czasu na dojazd — dla Ciebie nic to nie zmienia, bo dojazd i tak jest bezpłatny.",
    "Przy umawianiu wystarczy nazwa sołectwa i adres. W domach przyda się jeszcze informacja, czy da się podjechać pod posesję.",
  ],
  districts: [
    "Zabierzów",
    "Balice",
    "Rząska",
    "Szczyglice",
    "Bolechowice",
    "Kobylany",
    "Zelków",
    "Brzezie",
    "Brzezinka",
    "Brzoskwinia",
    "Aleksandrowice",
    "Burów",
    "Karniowice",
    "Kleszczów",
    "Kochanów",
    "Młynka",
    "Niegoszowice",
    "Nielepice",
    "Pisary",
    "Radwanowice",
    "Rudawa",
    "Ujazd",
    "Więckowice",
  ],

  nearbyHeading: "Zachodnie okolice Krakowa też obsługuję",
  nearbyParagraphs: [
    "Zabierzów leży na trasie, którą jeżdżę na zachód od Krakowa — dalej są Krzeszowice, a za nimi Chrzanów. Do żadnej z tych miejscowości nie doliczam opłaty za dojazd.",
    "Przy dalszych kierunkach zwykle umawiam kilka spotkań w jednym rejonie tego samego dnia. Dlatego czasem proponuję termin kilka dni później niż najbliższy wolny — za to taki, przy którym mam spokojnie czas.",
  ],
  nearbyTowns: [
    "Kraków",
    "Krzeszowice",
    "Chrzanów",
    "Zielonki",
    "Michałowice",
    "Skawina",
    "Mogilany",
  ],

  about: blokOMnie("do Zabierzowa", "w gminach na zachód od Krakowa"),

  faq: [
    {
      question: "Czy dojeżdżasz do wszystkich sołectw gminy Zabierzów?",
      answer:
        "Tak — do wszystkich dwudziestu trzech, od Rząskiej i Balic po Pisary, Radwanowice i Kochanów. Dojazd jest bezpłatny niezależnie od odległości.",
    },
    ...faqWspolne("w gminie Zabierzów"),
    {
      question: "Pracuję na zmiany. Czy da się umówić na nietypową porę?",
      answer:
        "Tak i w tej gminie zdarza się to często. Podaj przy umawianiu, które dni albo godziny odpadają — łatwiej mi ułożyć trasę wokół Twojego grafiku niż Tobie dopasować się do mojego.",
    },
    {
      question: "Mam już robot planetarny i blender. Czy Thermomix ma sens?",
      answer:
        "Zobaczysz konkretnie, co z tych sprzętów zastępuje, a czego nie — i sama ocenisz. Różnica polega na tym, że Thermomix trzyma temperaturę i miesza sam przez czterdzieści minut, a tego żaden mikser nie robi. Nie namawiam do dokładania czwartego urządzenia do szafki.",
    },
    {
      question: "Czy trwająca budowa obwodnicy utrudnia dojazd na prezentację?",
      answer:
        "Mnie czasem tak, Tobie nie. Po prostu rezerwuję sobie więcej czasu na dojazd przez gminę. Dojazd jest bezpłatny i nie zmienia się to niezależnie od organizacji ruchu.",
    },
  ],

  geo: { lat: 50.1, lng: 19.7969 },
};
