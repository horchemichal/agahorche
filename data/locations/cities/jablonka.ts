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
 * JABŁONKA — gmina wiejska, powiat nowotarski. Siedem sołectw,
 * ok. 19 tys. mieszkańców na 212,7 km². Największa obszarowo gmina
 * powiatu.
 *
 * OŚ STRONY: ORAWA JAKO OSOBNY REGION — i Jabłonka jako miejsce,
 * w którym stoją wszystkie instytucje, które o tym regionie
 * opowiadają. To gminie Jabłonka przypisuję temat odrębności Orawy
 * od Podhala, bo ma na to twarde podstawy: Orawski Park Etnograficzny
 * w Zubrzycy Górnej, Orawskie Centrum Kultury i kościół w Orawce
 * będący Pomnikiem Historii.
 *
 * ⚠️ PODZIAŁ Z LIPNICĄ WIELKĄ (`lipnica-wielka.ts`) jest ostry
 * i celowy: JABŁONKA = kultura i instytucje regionu.
 * LIPNICA WIELKA = historia i granica (podział wsi w 1920 r.,
 * Piotr Borowy). Żadne zdanie nie powinno dać się przenieść
 * między tymi stronami.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — ORAWSKI PARK ETNOGRAFICZNY W ZUBRZYCY GÓRNEJ leży w gminie
 *   Jabłonka (klasyfikacja BIP MKiDN: małopolskie / nowotarski /
 *   Jabłonka). ⚠️ To instytucja WOJEWÓDZTWA MAŁOPOLSKIEGO,
 *   nie gminna, i stoi w ZUBRZYCY GÓRNEJ, nie w samej Jabłonce,
 * — KOŚCIÓŁ ŚW. JANA CHRZCICIELA W ORAWCE — POMNIK HISTORII,
 *   rozporządzenie podpisane 8 kwietnia 2021 r. (Dz.U. 2021 poz. 719).
 *   Opisywany jako najstarszy katolicki i jedyny drewniany kościół
 *   polskiej części Górnej Orawy,
 * — ORAWSKIE CENTRUM KULTURY w Jabłonce,
 * — CZTERY PRODUKTY ORAWSKIE NA LIŚCIE PRODUKTÓW TRADYCYJNYCH
 *   MRiRW, wpisane ok. lipca 2012 r.: sałata po orawsku, krzonówka
 *   po orawsku, orawskie zawijańce weselne, chleb orawski na liściu
 *   kapusty. ⚠️ SĄ TO PRODUKTY REGIONALNE (orawskie), NIE GMINNE —
 *   gmina zgłaszająca niepotwierdzona. NIE PISAĆ „produkt z Jabłonki”,
 * — SOŁECTWA (7): Jabłonka (5 515), Zubrzyca Górna, Zubrzyca Dolna,
 *   Lipnica Mała, Podwilk, Orawka (1 061), Chyżne (1 096).
 *   Ludność pozostałych niepotwierdzona,
 * — POWIERZCHNIA 212,7 km², ludność 19 195. ⚠️ Strategia gminy
 *   zaznacza, że realna liczba mieszkańców może wynosić ok. 15,9 tys.
 *   (wg deklaracji śmieciowych) — rozbieżność typowa dla gmin
 *   emigracyjnych. Podaję z zastrzeżeniem,
 * — DK7 (E77) z PRZEJŚCIEM GRANICZNYM CHYŻNE–TRSTENÁ — główny
 *   korytarz drogowy Polska–Słowacja,
 * — DOJAZD: BEZ KOLEI. Samochodem ok. 92–97 km do Krakowa,
 *   ok. 1 h 30 min,
 * — GOSPODARKA: 1 540 podmiotów REGON (2023), wzrost o 25% od 2019 r.
 *   Budownictwo i handel razem ok. 50%; turystyka tylko 2,6%.
 *   Pracodawcy z dokumentu strategii: Zakłady Mięsne Kabanos
 *   (Jabłonka), Chyżbet — wyroby betonowe (Chyżne), KOŁTON —
 *   urządzenia grzewcze. Emigracja zarobkowa: Kraków, Górny Śląsk
 *   i zagranica, w strategii wskazana AUSTRIA,
 * — ŚWIĘTO BORÓWKI w Zubrzycy Górnej, w Orawskim Parku
 *   Etnograficznym: 23. edycja w 2025 r., 24. EDYCJA 2 SIERPNIA
 *   2026 R., hasło „Uskrzydleni. Orawa silna Małopolską!”.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — NAZW I DAT ZAŁOŻENIA KÓŁ GOSPODYŃ. Strategia potwierdza,
 *   że działają, ale nazw nie ustalono,
 * — LUDNOŚCI CZTERECH Z SIEDMIU SOŁECTW,
 * — PLEBISCYTU NA ORAWIE. Nie odbył się — decyzję podjęła Rada
 *   Ambasadorów. Temat granicy należy zresztą do Lipnicy Wielkiej,
 * — HISTORII PODZIAŁU ORAWY jako narracji. Tu tylko jedno zdanie
 *   tła; rozwinięcie jest na stronie Lipnicy Wielkiej.
 *
 * PUŁAPKI:
 * — „STOLICA POLSKIEJ ORAWY” to określenie ZWYCZAJOWE, nie tytuł
 *   administracyjny. Pisać „nazywana”, nigdy „jest oficjalnie”,
 * — SKANSEN JEST W ZUBRZYCY GÓRNEJ, nie w Jabłonce, i należy
 *   do województwa, nie do gminy,
 * — JABŁONKA NIE MA PRAW MIEJSKICH — to wieś, siedziba gminy
 *   wiejskiej,
 * — LIPNICA MAŁA JEST SOŁECTWEM GMINY JABŁONKA. Nie mylić
 *   z gminą Lipnica Wielka, która jest osobną jednostką,
 * — DANIELKI I ZAWODZIE bywają wymieniane jako miejscowości —
 *   nie są sołectwami,
 * — CZTERY PRODUKTY SĄ ORAWSKIE, nie jabłonkowskie (patrz wyżej).
 */

export const JABLONKA: CityContent = {
  slug: "jablonka",
  h1: "Thermomix Jabłonka – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Jabłonka — prezentacja i cena",
  seoDescription:
    "Thermomix w gminie Jabłonka na Orawie: bezpłatna prezentacja TM7 u Ciebie w kuchni — Jabłonka, Zubrzyca, Podwilk, Chyżne. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Jabłonka — zobacz TM7 na żywo u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w gminie Jabłonka. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do gminy Jabłonka przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje. Dojeżdżam do wszystkich siedmiu sołectw, bez dopłaty za odległość.",

  highlights: highlightyStandardowe("wszystkie siedem sołectw, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption:
      "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w gminie Jabłonka – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem, ze składnikami i z naczyniami, gdyby były potrzebne. Ty nie kupujesz nic i niczego nie przygotowujesz — wystarczy wolny kawałek blatu, gniazdko i godzina spokoju. Tak samo w Jabłonce, jak w Zubrzycy, Podwilku czy Chyżnem.",
        "Potem gotujemy. Coś na obiad, coś słodkiego i — jeśli chcesz — coś z tego, co akurat masz w lodówce. To ostatnie jest najlepszym testem, bo pokazuje, czy urządzenie pasuje do jedzenia, które i tak u Was powstaje, a nie do przepisu z folderu.",
        "Na koniec siadamy do liczb: aktualna cena, obowiązująca promocja i rata przy różnych okresach spłaty. Nie domykam niczego tego samego dnia i nie zostawiam nikogo z poczuciem, że musi zdecydować od razu.",
      ],
      links: [
        {
          href: "/prezentacja/jak-wyglada",
          label: "Zobacz, jak wygląda prezentacja krok po kroku",
        },
      ],
      photo: {
        src: "/media/aga-przedstawiciel-thermomix-hero-f49127f7.webp",
        alt: "Aga Horche z Thermomixem TM7 — napis „Przedstawiciel Thermomix”",
        caption:
          "Prezentację prowadzi Aga — ta sama osoba, która odbierze telefon po zakupie.",
      },
    },
    {
      id: "na-zywo",
      heading: "Orawa to nie Podhale — i tutaj się o tym opowiada",
      paragraphs: [
        "Pierwsza rzecz, którą trzeba powiedzieć o tej gminie, jest zarazem najczęściej mylona: Orawa to nie Podhale. Inna gwara, inny strój, inna architektura i inna kuchnia. Że to osobny region, wie w Polsce mało kto poza Orawiakami — i właśnie dlatego Jabłonka jest ważna, bo to tutaj stoją instytucje, które ten region opisują.",
        "W Zubrzycy Górnej, jednym z sołectw tej gminy, działa Orawski Park Etnograficzny. To muzeum wojewódzkie, nie gminne, i warto dodać, że stoi w Zubrzycy, a nie w samej Jabłonce — mylenie tych dwóch miejsc jest tu regułą. W samej Jabłonce działa Orawskie Centrum Kultury.",
        "Najważniejszy zabytek jest jednak gdzie indziej: w Orawce stoi drewniany kościół świętego Jana Chrzciciela, opisywany jako najstarszy katolicki i jedyny drewniany kościół polskiej części Górnej Orawy. W kwietniu dwa tysiące dwudziestego pierwszego roku został uznany za Pomnik Historii — to najwyższy status ochronny, jaki w Polsce istnieje, przyznawany rozporządzeniem Prezydenta.",
        "Jabłonkę nazywa się stolicą polskiej Orawy. Dodam uczciwie, że to określenie zwyczajowe, a nie żaden tytuł administracyjny — Jabłonka nie ma nawet praw miejskich, jest wsią i siedzibą gminy wiejskiej. Ale to największa wieś regionu, z ponad pięcioma i pół tysiąca mieszkańców, i faktycznie zbiega się tu wszystko, co orawskie.",
        "Sama gmina jest największa obszarowo w powiecie — dwieście dwanaście kilometrów kwadratowych, siedem sołectw. Przechodzi tędy droga krajowa numer siedem z przejściem granicznym Chyżne–Trstená, czyli główny korytarz drogowy między Polską a Słowacją.",
        "Warto jeszcze wiedzieć, z czego się tu żyje, bo to zaskakuje. Turystyka daje zaledwie dwa i pół procenta działalności — mimo skansenu i Pomnika Historii. Połowa firm to budownictwo i handel. Działa kilka realnych zakładów: przetwórnia mięsna w Jabłonce, wytwórnia wyrobów betonowych w Chyżnem, producent urządzeń grzewczych. Sporo osób pracuje też za granicą, najczęściej w Austrii.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w gminie Jabłonka?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Powiedz nazwę sołectwa i uważaj na dwie rzeczy. Zubrzyca jest podwójna: Górna i Dolna. A Lipnica Mała jest sołectwem tej gminy — nie mylić z gminą Lipnica Wielka, która jest osobną jednostką z własnym urzędem. Dojazd wszędzie jest bez dopłaty.",
        "Jeśli pracujesz za granicą i jesteś w domu tylko okresowo, powiedz to od razu. Umawiam się chętnie w krótkim oknie, a jeśli akurat nie zdążymy — nie ma sprawy, bo cenę ustala producent i nie ma tu czegoś takiego jak oferta, która przepada.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w gminie Jabłonka"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Dom, w którym ktoś pracuje daleko",
      paragraphs: [
        "W gminie Jabłonka mieszka według meldunków ponad dziewiętnaście tysięcy osób, ale sama gmina w swojej strategii przyznaje, że realnie może być ich około szesnastu tysięcy — bo tyle wynika z deklaracji śmieciowych. Ta różnica ma jedno wyjaśnienie: emigrację zarobkową. Ludzie są zameldowani, ale pracują w Krakowie, na Śląsku albo za granicą, najczęściej w Austrii.",
        "To bardzo konkretnie kształtuje tutejsze domy. Ktoś wyjeżdża na tygodnie albo miesiące, ktoś zostaje. Gotowanie spada wtedy na jedną osobę — i ta osoba często dodatkowo pracuje. Albo odwrotnie: wraca ktoś, kto przez pół roku jadał na budowie, i pierwsze, czego chce, to normalny obiad.",
        "Praktyczna korzyść jest tu bardzo prosta. Danie jednogarnkowe wstawia się i wychodzi — gotuje się bez nikogo, samo się wyłącza i czeka. Przy jednej osobie prowadzącej dom przy okazji wszystkiego innego to jest realna różnica, a nie wygoda.",
        "Druga rzecz jest ważniejsza i rzadko się o niej mówi. Ponieważ przepis prowadzi krok po kroku, gotować może ktokolwiek — także nastolatek albo ktoś, kto dotąd nie gotował. W domu, w którym jedna osoba bywa nieobecna tygodniami, przekazanie kuchni komuś innemu przestaje być problemem.",
        "Trzecia rzecz to zapasy. Zupy do zamrożenia, sosy, pasty kanapkowe, ciasto na pierogi, chleb — robione seriami, w jednym naczyniu, na czas gdy będzie ciężej. W gminie, z której tyle osób wyjeżdża, mrożonka jest formą organizacji, a nie lenistwa.",
        "Rodzicom najmłodszych dzieci przydaje się to, że da się ugotować i zmiksować w jednym naczyniu, bez przelewania gorących rzeczy między naczyniami.",
      ],
      links: [
        { href: "/thermomix/dla-rodziny", label: "Thermomix dla rodziny" },
        { href: "/thermomix/dla-poczatkujacych", label: "Thermomix dla początkujących" },
      ],
      photo: {
        src: "/media/gotuj-z-dzieckiem-1-be78fd1c.webp",
        alt: "Aga Horche z synem i Thermomixem TM7 — napis „gotuj z dzieckiem i dla dziecka”",
        caption:
          "Posiłek dla dziecka może powstawać równolegle z obiadem dla reszty domu.",
      },
    },
    sekcjaCoUgotujesz(),
    sekcjaTradycyjneGotowanie(),
  ],

  culinary: {
    heading: "Cztery orawskie produkty z ministerialnej listy",
    paragraphs: [
      "Orawa ma na ministerialnej Liście Produktów Tradycyjnych cztery pozycje, wpisane w dwa tysiące dwunastym roku: sałatę po orawsku, krzonówkę po orawsku, orawskie zawijańce weselne i chleb orawski na liściu kapusty. To rzadkość — na kilkudziesięciu stronach tego serwisu większość gmin nie ma ani jednego wpisu.",
      "Muszę jednak od razu postawić sprawę uczciwie: to są produkty ORAWSKIE, czyli regionalne, a nie przypisane konkretnie gminie Jabłonka. Nie napiszę więc, że to „produkty z Jabłonki”, bo byłoby to naciąganie. Jabłonka jest natomiast miejscem, w którym o tej kuchni najwięcej się mówi i pokazuje.",
      "Sama lista mówi zresztą sporo o tym, czym orawska kuchnia się różni. Chleb pieczony na liściu kapusty to technika, nie ozdobnik — liść zapobiega przywieraniu i oddaje wilgoć. Krzonówka jest zupą chrzanową, jadaną na Wielkanoc. Zawijańce weselne to wypiek okazjonalny, przygotowywany w dużych ilościach na jeden konkretny dzień.",
      "Raz do roku, w Zubrzycy Górnej przy skansenie, odbywa się Święto Borówki — w dwa tysiące dwudziestym szóstym roku dwudziesta czwarta edycja, w pierwszą niedzielę sierpnia. Borówka to tutejszy surowiec dostępny sezonowo i w dużych ilościach naraz, czyli dokładnie ten rodzaj, przy którym przetwarzanie jest robotą, a nie przyjemnością.",
      "I tu urządzenie ma najwięcej do zrobienia. Dżemy, konfitury, soki i przeciery gotują się bez pilnowania i bez mieszania, żeby nie przywarło — a przy borówce, którą przerabia się kilogramami w krótkim sezonie, to jest różnica liczona w godzinach. Ciasto na zawijańce wyrabia się samo. Zupy chrzanowej nie trzeba pilnować.",
      "Czego nie zrobi: nie upiecze chleba na liściu kapusty w piecu i nie zastąpi wprawy. Wyrobi za to ciasto, a to jest przy wypieku najcięższa część roboty.",
    ],
  },

  districtsHeading: "Gdzie w gminie Jabłonka dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich siedmiu sołectw, bez żadnej dopłaty za odległość: Jabłonki, Zubrzycy Górnej, Zubrzycy Dolnej, Lipnicy Małej, Podwilka, Orawki i Chyżnego.",
    "Sama Jabłonka liczy ponad pięć i pół tysiąca mieszkańców i jest największą wsią regionu, choć praw miejskich nie ma. Cała gmina zajmuje dwieście trzynaście kilometrów kwadratowych — najwięcej w powiecie nowotarskim.",
    "Warto wiedzieć, gdzie co leży, bo nazwy mylą. Orawski Park Etnograficzny stoi w Zubrzycy Górnej, nie w Jabłonce, i jest muzeum wojewódzkim. Kościół uznany za Pomnik Historii znajduje się w Orawce. A Lipnica Mała jest sołectwem tej gminy — z gminą Lipnica Wielka, o której piszę osobno, łączy ją tylko podobna nazwa.",
    "Dojazd: kolei w gminie nie ma. Przechodzi tędy natomiast droga krajowa numer siedem z przejściem granicznym w Chyżnem, więc do Krakowa jest stąd około dziewięćdziesięciu kilku kilometrów, czyli mniej więcej półtorej godziny. To jeden z lepszych dojazdów w tej części Małopolski.",
  ],
  districts: [
    "Jabłonka",
    "Zubrzyca Górna",
    "Zubrzyca Dolna",
    "Lipnica Mała",
    "Podwilk",
    "Orawka",
    "Chyżne",
  ],

  nearbyHeading: "Lipnica Wielka, Czarny Dunajec i Nowy Targ też są na mojej trasie",
  nearbyParagraphs: [
    "Do Lipnicy Wielkiej, drugiej gminy polskiej Orawy, mam stąd najbliżej — droga do niej prowadzi zresztą przez Jabłonkę. Dalej są Czarny Dunajec i Nowy Targ. Do żadnej z tych gmin nie doliczam kosztu dojazdu.",
    "Jeśli mieszkasz w Chyżnem, przy samej granicy, to bliżej Ci do słowackiej Trstenej niż do Nowego Targu. Dla umówienia prezentacji to bez znaczenia — przyjeżdżam tak samo.",
  ],
  nearbyTowns: [
    "Lipnica Wielka",
    "Czarny Dunajec",
    "Nowy Targ",
    "Zawoja",
    "Kraków",
  ],

  about: blokOMnie("do gminy Jabłonka", "na Orawie"),

  faq: [
    {
      question: "Czy Orawa to to samo co Podhale?",
      answer:
        "Nie — to osobny region, z inną gwarą, innym strojem, inną architekturą i inną kuchnią. Orawa ma zresztą własne wpisy na ministerialnej Liście Produktów Tradycyjnych: sałatę po orawsku, krzonówkę, zawijańce weselne i chleb pieczony na liściu kapusty. Mylenie Orawy z Podhalem jest bardzo częste, więc prostuję przy okazji.",
    },
    ...faqWspolne("w gminie Jabłonka"),
    {
      question: "Pracuję za granicą, w domu bywam okresowo. Da się to umówić?",
      answer:
        "Da się i to częsty scenariusz w tej gminie — sporo osób pracuje w Austrii albo na Śląsku. Powiedz po prostu, kiedy jesteś w domu, a znajdziemy dwie godziny. Jeśli akurat nie zdążymy, nic nie tracisz: cenę ustala producent i jest taka sama przez cały rok, więc nie ma tu oferty, która przepada.",
    },
    {
      question: "Czy skansen jest w Jabłonce?",
      answer:
        "Nie, Orawski Park Etnograficzny stoi w Zubrzycy Górnej — to jedno z sołectw tej gminy, ale osobna miejscowość. Jest to zresztą muzeum województwa małopolskiego, nie gminne. W Orawce, kolejnym sołectwie, znajduje się drewniany kościół uznany w dwa tysiące dwudziestym pierwszym roku za Pomnik Historii.",
    },
  ],

  geo: { lat: 49.4772, lng: 19.7 },
};
