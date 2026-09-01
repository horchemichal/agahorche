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
 * JORDANÓW — GMINA MIEJSKA, powiat suski. Ok. 5,4 tys. mieszkańców
 * na 21 km².
 *
 * ⚠️ UWAGA NA BLIŹNIAKA: obok istnieje GMINA WIEJSKA JORDANÓW
 * (plik `jordanow-gmina.ts`, slug `jordanow-gmina`) — inna jednostka,
 * pięć sołectw, ponad dwa razy więcej mieszkańców, a urząd ma
 * W TYM SAMYM MIEŚCIE, przy tym samym rynku. Osie obu stron MUSZĄ
 * pozostać rozłączne:
 *   — MIASTO: rynek, architektura Jana Sasa Zubrzyckiego, handel,
 *   — GMINA WIEJSKA: Wysoka i wrzesień 1939, koła gospodyń, kamień.
 * Nie przenosić bitwy z 1939 r. na stronę miasta — kluczowe walki
 * toczyły się o Wysoką i Naprawę, czyli o wsie gminy wiejskiej.
 *
 * OŚ STRONY: RYNEK ZA DUŻY NA TO MIASTO. Około dwóch hektarów placu
 * w miasteczku liczącym pięć i pół tysiąca ludzi — bo zbudowano go
 * pod handel bydłem, a nie pod dzisiejszą liczbę mieszkańców.
 * Wokół niego stoi zespół budynków jednego architekta.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — LOKACJA: przywilej Zygmunta Augusta z 7 listopada 1564 r. dla
 *   Wawrzyńca Spytka Jordana z Zakliczyna, wojewody krakowskiego,
 *   na gruntach wsi Malejowa. Miasto słynęło z targów bydła,
 * — ARCHITEKTURA Jana Sasa Zubrzyckiego: ratusz (1911), dawny sąd
 *   powiatowy (1895), kościół Trójcy Przenajświętszej (1908–1912).
 *   Rynek o powierzchni ok. 2 ha, położony na wzgórzu, z pomnikiem
 *   założyciela,
 * — „ZIELONE MIASTECZKO” — określenie z okresu międzywojennego,
 *   od przyjeżdżających tu letników,
 * — LUDNOŚĆ 5 389 (GUS, 31.12.2024), powierzchnia 21,0 km²,
 *   gęstość 256,3 os./km², średni wiek 40,9 lat,
 * — KOLEJ: stacja Jordanów przy ul. Kolejowej, linia nr 98
 *   Sucha Beskidzka–Chabówka. LINIA JEST W TRAKCIE MODERNIZACJI,
 *   RUCH PASAŻERSKI ZAWIESZONY, kursuje komunikacja zastępcza,
 * — DROGA: DK28 (Wadowice–Nowy Sącz) przechodzi przez miasto,
 * — DNI JORDANOWA 2026: 6–9 sierpnia, w programie VII Bieg
 *   Jordanowski. Numer edycji samych Dni nie jest podawany.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — BITWY POD JORDANOWEM 1939. Idzie na stronę gminy wiejskiej,
 *   bo walki toczyły się o Wysoką i Naprawę. Tu tylko nie pada wcale,
 * — CZASU PRZEJAZDU DO KRAKOWA SAMOCHODEM. Nie znalazłam źródła,
 *   któremu ufam. Piszę o drodze, nie o minutach,
 * — NAZW PRACODAWCÓW. Nie udało się potwierdzić żadnego dużego
 *   działającego zakładu w granicach miasta. Nie wymieniam firm,
 * — POTRAWY LOKALNEJ ANI KGW. W samym mieście brak potwierdzonych.
 *   Koła gospodyń działają w gminie wiejskiej i tam są opisane,
 * — NUMERU EDYCJI DNI JORDANOWA.
 *
 * PUŁAPKI:
 * — RUCH POCIĄGÓW JEST ZAWIESZONY. Absolutnie nie pisać „dojedziesz
 *   pociągiem” ani „szybki pociąg do Krakowa”. Strona mówi wprost,
 *   że linia jest w remoncie i jeździ komunikacja zastępcza,
 * — NIE MA WSI JORDANÓW. Gmina wiejska Jordanów ma siedzibę
 *   w mieście. Nie pisać „wieś Jordanów”,
 * — JORDANÓW ŚLĄSKI (dolnośląskie) i JORDANOWO (lubuskie)
 *   to inne miejscowości,
 * — LOKACJA 1564 to prawa miejskie. Nie mylić z wcześniejszą wsią
 *   Malejowa, na której gruntach miasto założono.
 */

export const JORDANOW: CityContent = {
  slug: "jordanow",
  h1: "Thermomix Jordanów – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Jordanów — prezentacja i cena",
  seoDescription:
    "Thermomix w Jordanowie: bezpłatna prezentacja TM7 u Ciebie w kuchni, cena i raty 0,6%. Dojazd bez dopłat. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Jordanów — zobacz TM7 na żywo u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w Jordanowie. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do Jordanowa przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje. Dojazd jest bez dopłaty, także pod górę i na obrzeża miasta.",

  highlights: highlightyStandardowe("całe miasto, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption:
      "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Jordanowie – jak wygląda prezentacja?",
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
      heading: "Rynek za duży na to miasto",
      paragraphs: [
        "Jordanów ma jeden z tych rynków, które od razu zdradzają, że miasto zbudowano pod coś innego, niż jest dzisiaj. Plac ma około dwóch hektarów. Mieszkańców jest niecałe pięć i pół tysiąca. To nieproporcjonalnie dużo placu na tak niewielu ludzi — i właśnie ta nieproporcjonalność jest tu najciekawsza.",
        "Powód jest prozaiczny. Miasto założono w tysiąc pięćset sześćdziesiątym czwartym roku, przywilejem Zygmunta Augusta dla wojewody krakowskiego Wawrzyńca Spytka Jordana, na gruntach wsi Malejowa. I przez wieki żyło z handlu bydłem. Taki plac musiał pomieścić zwierzęta, wozy i ludzi z całej okolicy — nie mieszkańców, tylko przyjezdnych.",
        "Wokół rynku, już na przełomie dziewiętnastego i dwudziestego wieku, stanął zespół budynków projektu jednego architekta, Jana Sasa Zubrzyckiego: dawny sąd powiatowy z tysiąc osiemset dziewięćdziesiątego piątego, kościół stawiany w latach tysiąc dziewięćset osiem–dwanaście i ratusz z tysiąc dziewięćset jedenastego. Neogotyk w górskim miasteczku wygląda z lekka nie na miejscu i to jest część uroku.",
        "W międzywojniu mówiło się na Jordanów „zielone miasteczko” — od letników, którzy przyjeżdżali tu na wakacje. Ten rys też został: to nadal miejsce, w którym mieszka się spokojnie, a średni wiek mieszkańca, prawie czterdzieści jeden lat, jest wyższy niż w okolicznych wsiach.",
        "Dla mnie ta demografia oznacza rzecz bardzo konkretną: jeżdżę tu często do domów, w których gotuje się dla dwóch osób, a nie dla sześciu. I to jest osobne zagadnienie, o którym w folderach nie pisze się wcale, bo urządzenia kuchenne pokazuje się zwykle przy rodzinie z trójką dzieci.",
        "Powiem więc od razu uczciwie: przy gotowaniu dla dwóch osób Thermomix nie zwraca się czasem, tylko wygodą i tym, że przestaje się jadać byle czego. To inny argument niż w domu z gromadą dzieci i nie zamierzam ich mieszać.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Jordanowie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Powiedz, w której części miasta mieszkasz. Jordanów jest rozłożony na wzgórzu i różnica między okolicami rynku a obrzeżami bywa dla dojazdu istotna, zwłaszcza zimą. Dopłaty nie ma żadnej — chodzi tylko o to, żebym zaplanowała czas.",
        "Wieczory w tygodniu i weekendy są tu najczęstszymi terminami. Jeśli w domu są osoby starsze, które wolą wcześniejszą porę, powiedz — przedpołudnie w dzień roboczy też jest dla mnie normalnym terminem.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Jordanowie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Gotowanie dla dwóch osób to osobna sprawa",
      paragraphs: [
        "W Jordanowie średni wiek mieszkańca to prawie czterdzieści jeden lat — więcej niż w okolicznych gminach wiejskich. Za taką liczbą stoją między innymi domy, w których dzieci już się wyprowadziły, i mieszkania, w których gotuje się dla dwojga albo dla jednej osoby.",
        "To jest sytuacja, o której przy urządzeniach kuchennych mówi się najmniej, a pytają o nią najczęściej. Bo rzeczywiście: przy dwóch porcjach argument „zaoszczędzisz godzinę dziennie” brzmi nieszczerze. Godziny tam nie ma, jest kwadrans.",
        "Realna zmiana jest inna i warto ją nazwać po imieniu. Gdy gotowanie dla dwojga przestaje się opłacać zachodem, ludzie zaczynają jeść byle jak: kanapka, coś odgrzanego, coś kupionego. Urządzenie, w którym zupa robi się sama, a porcję da się zrobić małą, przesuwa ten próg. Nie oszczędza czasu — sprawia, że ciepły obiad w ogóle powstaje.",
        "Praktycznie wygląda to tak, że gotuje się mniejszymi porcjami, ale częściej, i że przestaje przeszkadzać zmywanie, bo naczynie jest jedno. Do tego dochodzą rzeczy, których dla dwóch osób zwykle się nie robi, bo szkoda zachodu: własny chleb, pasty kanapkowe, mleko roślinne, przetwory z tego, co jest w ogrodzie.",
        "Jeśli natomiast jesteś tu z małymi dziećmi, to działa dokładnie tak, jak się spodziewasz: da się ugotować i zmiksować w jednym naczyniu, bez przelewania gorących rzeczy, a posiłek dla dziecka powstaje równolegle z obiadem dla reszty domu.",
      ],
      links: [
        { href: "/thermomix/dla-poczatkujacych", label: "Thermomix dla początkujących" },
        { href: "/thermomix/dla-rodziny", label: "Thermomix dla rodziny" },
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

  districtsHeading: "Gdzie w Jordanowie dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta, bez żadnej dopłaty za odległość. Jordanów jest gminą miejską i nie ma sołectw — nazwy poniżej są potoczne i służą wyłącznie temu, żeby łatwiej się umówić.",
    "Miasto zajmuje dwadzieścia jeden kilometrów kwadratowych i leży na wzgórzu, więc rozpiętość wysokości jest tu odczuwalna. Rynek stoi w najwyższym punkcie, zabudowa schodzi z niego w kilku kierunkach. Przy umawianiu zimą warto o tym wspomnieć — nie dlatego, że nie dojadę, tylko dlatego, żebym wyjechała odpowiednio wcześniej.",
    "O dojeździe muszę powiedzieć uczciwie jedną rzecz. Jordanów ma stację kolejową przy ulicy Kolejowej, ale linia numer dziewięćdziesiąt osiem z Suchej Beskidzkiej do Chabówki jest w trakcie modernizacji i ruch pasażerski jest zawieszony. Kursuje komunikacja zastępcza. Nie napiszę więc, że dojedziesz tu pociągiem, bo dziś nie dojedziesz.",
    "Zostaje droga. Przez miasto przechodzi droga krajowa numer dwadzieścia osiem z Wadowic do Nowego Sącza, a stąd jest już blisko do zakopianki. Ja przyjeżdżam samochodem i dla mnie to nie ma znaczenia — piszę o tym, bo dla Ciebie może mieć.",
  ],
  districts: [
    "Rynek i okolice",
    "Centrum",
    "Okolice dworca",
    "Obrzeża i zabudowa rozproszona",
  ],

  nearbyHeading: "Gmina wiejska Jordanów, Bystra-Sidzina i Maków też są na mojej trasie",
  nearbyParagraphs: [
    "Wokół miasta leży gmina wiejska o tej samej nazwie — Łętownia, Naprawa, Osielec, Toporzysko i Wysoka. To osobna jednostka z własnym urzędem, który mieści się zresztą przy tym samym rynku co ratusz. Do wszystkich tych wsi dojeżdżam bez dopłaty.",
    "Dalej jest Bystra-Sidzina, Maków Podhalański i Sucha Beskidzka. Jeśli mieszkasz na granicy miasta i gminy wiejskiej i nie masz pewności, po której stronie — po prostu zapytaj. Dla mnie to jedna trasa.",
  ],
  nearbyTowns: [
    "Łętownia",
    "Naprawa",
    "Osielec",
    "Toporzysko",
    "Wysoka",
    "Bystra-Sidzina",
    "Maków Podhalański",
    "Sucha Beskidzka",
  ],

  about: blokOMnie("do Jordanowa", "w powiecie suskim"),

  faq: [
    {
      question: "Gotuję dla dwóch osób. Czy to ma sens?",
      answer:
        "Ma, ale argument jest inny niż przy dużej rodzinie i wolę to powiedzieć wprost. Przy dwóch porcjach nie zaoszczędzisz godziny dziennie, bo tej godziny tam nie ma. Zmienia się co innego: ciepły obiad w ogóle powstaje, zamiast ustąpić kanapce, bo dla dwojga szkoda było zachodu. Naczynie jest jedno, porcję da się zrobić małą, a zupa gotuje się bez pilnowania.",
    },
    ...faqWspolne("w Jordanowie"),
    {
      question: "Czy dojadę do Jordanowa pociągiem?",
      answer:
        "Dziś nie. Stacja jest, ale linia z Suchej Beskidzkiej do Chabówki jest w trakcie modernizacji i ruch pasażerski został zawieszony — kursuje komunikacja zastępcza. Piszę to wprost, żebyś nie planowała podróży pociągiem. Przez miasto przechodzi za to droga krajowa numer dwadzieścia osiem.",
    },
    {
      question: "Mieszkam w Naprawie. To już gmina wiejska — dojeżdżasz tam?",
      answer:
        "Dojeżdżam, bez dopłaty. Naprawa, Łętownia, Osielec, Toporzysko i Wysoka to gmina wiejska Jordanów, formalnie osobna od miasta, ale dla mnie to ta sama trasa. Przy umawianiu wystarczy, że powiesz nazwę wsi.",
    },
  ],

  geo: { lat: 49.6486, lng: 19.8283 },
};
