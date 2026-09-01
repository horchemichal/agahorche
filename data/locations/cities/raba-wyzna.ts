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
 * RABA WYŻNA — GMINA WIEJSKA w powiecie nowotarskim.
 * 14 464 mieszkańców (31.12.2024), 89,0 km² wg GUS (88,28 km² wg UG).
 *
 * OŚ STRONY: MAŁA ARMIA JANOSIKA — zespół z gminy, który śpiewał
 * dla papieża w Watykanie, a liczy około trzystu osób w wieku od 2 do 70 lat.
 * To oś rozłączna z resztą Podhala: Zakopane ma sport i turystykę,
 * Nowy Targ targ i skórę, Ochotnica długość doliny, Jabłonka Orawę,
 * Szaflary termy, Czorsztyn zaporę, Lipnica Wielka Babią Górę.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — MAŁA ARMIA JANOSIKA: pierwszy nabór 15 marca 2015 r.,
 *   ok. 300 członków w wieku 2–70 lat, koncert dla papieża Franciszka
 *   w Watykanie (maj 2024), występ na Stadionie Narodowym w 2018 r.,
 *   dwie złote płyty, 10-lecie we wrześniu 2025 r.
 *   ⚠️ TO PODMIOT PRYWATNY / STOWARZYSZENIOWY, NIE INSTYTUCJA GMINNA.
 *   Nie pisać „gminny zespół” ani „zespół urzędu”,
 * — 8 SOŁECTW: Raba Wyżna, Rokiciny Podhalańskie, Sieniawa, Skawa,
 *   Bielanka, Podsarnie, Harkabuz, Bukowina-Osiedle.
 *   ⚠️ PODSARNIE, HARKABUZ I BUKOWINA-OSIEDLE TO ORAWA, NIE PODHALE,
 * — KOLEJ: trzy przystanki linii 99 w granicach gminy — Rokiciny
 *   Podhalańskie (km 3,275), Raba Wyżna (km 5,621), Sieniawa (km 10,988);
 *   dodatkowo Skawa i Skawa Środkowa na linii 98,
 * — HISTORIA: 1581 r. „Novae Radices”, 43 zagrody, dobra Spytka Jordana;
 *   1902 r. pałac secesyjny; 1906 r. bank spółdzielczy (ks. Adam
 *   Oczkowski); 2 listopada 1939 r. potyczka, spalono 40 domów;
 *   gmina w obecnym kształcie od stycznia 1973 r.,
 * — GEOGRAFIA: dział wodny Raby i Skawy; Bukowiński Wierch 940 m n.p.m.,
 *   najniższy punkt ok. 500 m n.p.m.,
 * — GOSPODARKA: 1 340 podmiotów REGON, bezrobocie ok. 4,8%,
 *   budownictwo 35,0%, handel 17,6%.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — NAZW DUŻYCH PRACODAWCÓW. Żadnego nie udało się potwierdzić.
 *   NIE WYMYŚLAĆ FIRM,
 * — WPISÓW NA LISTĘ PRODUKTÓW TRADYCYJNYCH przypisanych gminie.
 *   Nie znaleziono,
 * — KÓŁ GOSPODYŃ WIEJSKICH. Żadnego nie potwierdzono,
 * — CYKLICZNYCH IMPREZ GMINNYCH. Nie potwierdzono,
 * — FRAZY „BRAMA PODHALA”. To hasło marketingowe, nie fakt.
 *
 * PUŁAPKI:
 * — STACJA CHABÓWKA LEŻY POZA GMINĄ (gmina Rabka-Zdrój). Nie przypisywać,
 * — NIE MYLIĆ ZE SKAWĄ-RZEKĄ ANI Z GMINĄ SKAWINA — Skawa to tutaj sołectwo,
 * — RABA WYŻNA TO NIE RABKA-ZDRÓJ. Dwie różne gminy, sąsiadujące.
 */

export const RABA_WYZNA: CityContent = {
  slug: "raba-wyzna",
  h1: "Thermomix Raba Wyżna – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Raba Wyżna — prezentacja i cena",
  seoDescription:
    "Thermomix w gminie Raba Wyżna: bezpłatna prezentacja TM7 u Ciebie w kuchni, cena i raty 0%. Dojazd do wszystkich sołectw bez dopłat. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Raba Wyżna — zobacz TM7 na żywo u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w gminie Raba Wyżna. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do Raby Wyżnej i wszystkich ośmiu sołectw gminy przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje.",

  highlights: highlightyStandardowe("wszystkie sołectwa, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption:
      "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Rabie Wyżnej – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem, ze składnikami i z naczyniami, gdyby były potrzebne. Ty nie kupujesz nic i niczego nie przygotowujesz — wystarczy wolny kawałek blatu, gniazdko i godzina spokoju.",
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
      heading: "Trzysta osób od drugiego do siedemdziesiątego roku życia",
      paragraphs: [
        "O gminie Raba Wyżna najczęściej dowiadujesz się z jednego powodu i jest to powód nietypowy. Działa tu Mała Armia Janosika — zespół, który zaczął się od naboru piętnastego marca dwa tysiące piętnastego roku, a dziś liczy około trzystu osób. Najmłodsi członkowie mają dwa lata, najstarsi siedemdziesiąt.",
        "Powiem od razu, jak to jest zorganizowane, bo bywa to mylone. To nie jest zespół urzędu gminy ani gminnego ośrodka kultury. To inicjatywa prywatna, prowadzona przez stowarzyszenie — po prostu wyrosła tutaj i tutaj ma swoich ludzi.",
        "Lista występów jest niekrótka: Stadion Narodowy w dwa tysiące osiemnastym, dwie złote płyty, koncert dla papieża Franciszka w Watykanie w maju dwa tysiące dwudziestego czwartego roku, dziesięciolecie obchodzone we wrześniu dwa tysiące dwudziestego piątego.",
        "Zatrzymam się jednak nie na scenie, tylko na tych trzystu osobach. Zespół, w którym śpiewają dwulatki i siedemdziesięciolatkowie, oznacza jedno: próby, wyjazdy i przygotowania obejmują w jednym domu kilka pokoleń naraz. Babcia, córka i wnuczka jadą tym samym autokarem.",
        "To ma bardzo konkretne przełożenie na kuchnię i dlatego o tym piszę. W domu, z którego w sobotę rano wyjeżdżają trzy osoby, jedzenie musi być gotowe wcześniej albo w ogóle go nie ma. A gotować dla wielopokoleniowego stołu to co innego niż gotować dla dwojga.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w gminie Raba Wyżna?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Podaj sołectwo, nie tylko nazwę gminy. Gmina ma osiem sołectw rozrzuconych po dwóch stronach działu wodnego i jazda z Raby Wyżnej do Harkabuza to zupełnie co innego niż jazda do Rokicin.",
        "Jeśli w domu ktoś jeździ na próby zespołu, powiedz to od razu — soboty bywają wtedy zajęte od rana. Umawiam się w tygodniu, wieczorami i w niedziele, więc znajdziemy termin bez przestawiania Wam planów.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w gminie Raba Wyżna"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Gdy w jednym domu mieszkają trzy pokolenia",
      paragraphs: [
        "Gmina liczy czternaście i pół tysiąca mieszkańców w ośmiu sołectwach — to wieś, w której wciąż dominuje dom jednorodzinny, a nie mieszkanie. A w domu jednorodzinnym częściej niż w bloku mieszkają obok siebie dziadkowie, rodzice i dzieci.",
        "Taki stół ma trzy różne wymagania naraz. Dziecko chce czegoś prostego, dorosły czegoś konkretnego, a starszy człowiek zwykle czegoś lżejszego i mniej solonego. Jedna osoba przy garnkach musi to pogodzić, najczęściej w tej samej godzinie.",
        "Najbardziej praktyczna rzecz jest tu banalna, więc powiem ją wprost: dania jednogarnkowe. Zupa albo gulasz na sześć osób gotuje się bez pilnowania, sam się wyłącza i czeka. Nie trzeba stać, mieszać ani wracać co dziesięć minut.",
        "Druga to gotowanie z zapasem. Jedna duża porcja w niedzielę, podzielona na pojemniki, obsługuje kilka dni — a w domu, z którego ktoś regularnie wyjeżdża na próby albo do pracy w Nowym Targu, to jest różnica między obiadem a kanapką.",
        "Trzecia dotyczy tego, kto gotuje. Przepis prowadzi krok po kroku, więc obiad może przygotować nastolatek albo mąż, który dotąd tego nie robił. W wielopokoleniowym domu odciążenie jednej osoby bywa ważniejsze niż sam czas gotowania.",
        "Rodzicom najmłodszych dzieci przydaje się to, że da się ugotować i zmiksować w jednym naczyniu, bez przelewania gorących rzeczy między naczyniami.",
      ],
      links: [
        { href: "/thermomix/dla-rodziny", label: "Thermomix dla rodziny" },
        { href: "/thermomix/dla-mamy", label: "Thermomix dla mamy" },
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
    heading: "Raba Wyżna i gotowanie — dwie tradycje w jednej gminie",
    paragraphs: [
      "Zacznę od uczciwego zastrzeżenia. Nie znalazłam żadnego wpisu na ministerialnej Liście Produktów Tradycyjnych przypisanego wprost tej gminie ani żadnego potwierdzonego koła gospodyń. Nie będę więc dopisywać gminie kulinarnego dorobku, którego nie umiem wskazać źródłem.",
      "Ciekawsze i pewniejsze jest co innego. Ta gmina leży w poprzek granicy dwóch krain. Raba Wyżna, Rokiciny, Sieniawa i Skawa to Podhale, natomiast Podsarnie, Harkabuz i Bukowina-Osiedle to już Orawa. Nie jest to dzielenie włosa na czworo — to dwie różne tradycje domowe w jednej gminie.",
      "Widać to zresztą także w wodzie. Przez gminę biegnie dział wodny: część potoków spływa do Raby, część do Skawy. Wsie po dwóch stronach tego grzbietu przez wieki ciążyły w różne strony i po różne targi.",
      "Dla gotowania oznacza to jedną rzecz, którą warto powiedzieć: nie ma tu jednej listy „naszych dań”, którą można by wypisać i zamknąć temat. Jest natomiast kuchnia domowa — kwaśnica, zupy na kościach, ziemniaki, kapusta, ciasto drożdżowe — robiona tak, jak ją robiła babcia w konkretnym domu.",
      "I dokładnie z tym urządzenie sobie radzi, bo nie narzuca przepisów. Możesz w nim odtworzyć zupę babci co do składnika, tylko bez trzydziestu minut przy garnku. Czego nie zrobi, mówię wprost: nie zastąpi wprawy i nie ulepi za Ciebie pierogów. Zabiera tę część, która jest tylko czasem — rozdrabnianie, wyrabianie i stanie przy kuchni.",
    ],
  },

  districtsHeading: "Do których sołectw gminy Raba Wyżna dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich ośmiu, bez żadnej dopłaty za odległość. Gmina zajmuje osiemdziesiąt dziewięć kilometrów kwadratowych i liczy ponad czternaście tysięcy mieszkańców — to jedna z ludniejszych gmin wiejskich powiatu nowotarskiego.",
    "Sołectwa to: Raba Wyżna, Rokiciny Podhalańskie, Sieniawa, Skawa, Bielanka, Podsarnie, Harkabuz i Bukowina-Osiedle. Trzy ostatnie leżą już na Orawie, co warto wiedzieć, zanim ktoś powie, że to wszystko jedno Podhale.",
    "Teren jest wyraźnie pofałdowany: najwyższy punkt to Bukowiński Wierch, dziewięćset czterdzieści metrów, najniższy około pięciuset. Przez gminę przechodzi dział wodny między Rabą a Skawą.",
    "Dojazd jest tu wyjątkowo wygodny jak na wieś. W granicach gminy są aż trzy przystanki kolejowe na linii z Chabówki do Zakopanego — Rokiciny Podhalańskie, Raba Wyżna i Sieniawa — a do tego dwa na linii przez Suchą Beskidzką, w Skawie. Samą stację Chabówka wymieniam tylko po to, żeby zaznaczyć, że leży już poza gminą.",
  ],
  districts: [
    "Raba Wyżna",
    "Rokiciny Podhalańskie",
    "Sieniawa",
    "Skawa",
    "Bielanka",
    "Podsarnie",
    "Harkabuz",
    "Bukowina-Osiedle",
  ],

  nearbyHeading: "Rabka-Zdrój, Nowy Targ i Jordanów też są na mojej trasie",
  nearbyParagraphs: [
    "Od razu jedno rozróżnienie, bo bywa mylone: Raba Wyżna to nie Rabka-Zdrój. To dwie sąsiadujące, ale osobne gminy — i dojeżdżam do obu.",
    "Dalej są Nowy Targ, Jordanów, Spytkowice i Jabłonka. Do żadnej z tych gmin nie doliczam kosztu dojazdu, a przy umawianiu wystarczy, że podasz sołectwo.",
  ],
  nearbyTowns: [
    "Nowy Targ",
    "Jordanów",
    "Zawoja",
    "Jabłonka",
    "Szaflary",
    "Kraków",
  ],

  about: blokOMnie("do gminy Raba Wyżna", "w powiecie nowotarskim"),

  faq: [
    {
      question: "Mieszkam w Harkabuzie albo Podsarniu. Dojedziesz tam?",
      answer:
        "Dojadę i nie doliczę za to ani złotówki. To najdalsze sołectwa gminy, leżące już po orawskiej stronie, ale traktuję je dokładnie tak samo jak Rabę Wyżną. Podaj tylko sołectwo przy umawianiu, żebym dobrze rozplanowała trasę.",
    },
    ...faqWspolne("w gminie Raba Wyżna"),
    {
      question: "W domu mieszkają trzy pokolenia. Czy to ma znaczenie?",
      answer:
        "Ma, i akurat na korzyść. Przy większym stole najbardziej opłaca się gotowanie jednogarnkowe i z zapasem — jedna duża porcja bez pilnowania zamiast trzech osobnych. Na prezentacji chętnie ugotuję coś, co jada u Was cała rodzina, żeby było widać to na Waszym jedzeniu, a nie na przepisie z folderu.",
    },
  ],

  geo: { lat: 49.5758, lng: 19.8547 },
};
