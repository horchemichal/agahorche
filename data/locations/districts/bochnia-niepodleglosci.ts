import type { DistrictContent } from "./typy";

/**
 * NIEPODLEGŁOŚCI — Osiedle nr 5 miasta Bochnia. Największe osiedle
 * blokowe w mieście: 22 budynki SM, 1 185 mieszkań, 65 389 m² —
 * POŁOWA CAŁEGO ZASOBU SPÓŁDZIELNI.
 *
 * OŚ STRONY: MURALE OJCÓW NIEPODLEGŁOŚCI NA ŚCIANACH BLOKÓW.
 * Cztery wielkoformatowe malowidła na budynkach spółdzielni, każde
 * z kodem QR z audiodeskrypcją. Osiedle dosłownie odgrywa swoją nazwę
 * na elewacjach — nie da się tego napisać o żadnym innym osiedlu.
 * Druga, twarda warstwa: ŚREDNIA POWIERZCHNIA MIESZKANIA 55,2 m²,
 * czyli o czternaście metrów więcej niż na Słonecznym i Windakiewicza.
 *
 * ⚠️⚠️ ROZDZIELENIE OD SŁONECZNEGO (oś: pierwsze bloki w mieście,
 * 1962–1973, mieszkania 38–42 m²) i od WINDAKIEWICZA (oś: osiedle
 * zamknięte w trzy lata, 1975–1977). Tu tezą jest SKALA I METRAŻ
 * plus murale. NIE pisać „najstarsze bloki” ani „jednolity rocznik”.
 *
 * FAKTY UŻYTE I ŹRÓDŁA (rejestr budynków SM Bochnia + prasa lokalna):
 * — ZASÓB: 22 budynki, 1 185 mieszkań, 65 389 m². Lata 1978–1991.
 *   Legionów Polskich 6 (1978, 90 mieszkań, 8 klatek) i 10 (1979,
 *   119 mieszkań, 11 klatek — NAJWIĘKSZY BLOK SPÓŁDZIELNI); fala lat 80.
 *   na Czumy (1981–1983), Jakubowskiego (1982–1989) i Legionów
 *   (1982–1988); domknięcie Legionów Polskich 26, 30, 32, 34, 36
 *   w latach 1990–1991 — NAJNOWSZE BLOKI W CAŁYM ZASOBIE SM,
 * — ⭐ ŚREDNIA POWIERZCHNIA 55,2 m² (wyliczenie z rejestru SM).
 *   Rozpiętość rośnie z rocznikiem: Legionów 6 (1978) — 47,1 m²,
 *   Legionów 20 (1985) — 60,6 m², Jakubowskiego 14 (1989) — 62,5 m².
 *   Dla porównania: Słoneczne 41,2 m², Windakiewicza 41,7 m²,
 *   średnia całego miasta 76 m²,
 * — ⭐ MURALE „OJCOWIE NIEPODLEGŁOŚCI” na blokach spółdzielni:
 *   Józef Piłsudski (Jakubowskiego 14, 2023, na 105. rocznicę
 *   odzyskania niepodległości), Ignacy Paderewski (Legionów Polskich 36,
 *   marzec 2024, tło nawiązujące do Powstania Wielkopolskiego),
 *   Wojciech Korfanty (Legionów Polskich 37), Wincenty Witos
 *   (Legionów Polskich 32, 13 października 2025). Murale mają KODY QR
 *   Z AUDIODESKRYPCJĄ. Pomysłodawca: Grzegorz Pałkowski, prezes
 *   Stowarzyszenia Bocheńscy Patrioci i przewodniczący Zarządu Osiedla,
 * — BUDYNEK WIELOFUNKCYJNY: budowa od połowy 2024, odbiór grudzień 2025,
 *   koszt 10,7 mln zł (w tym 8 mln z KPO). Miejskie Przedszkole nr 2,
 *   przychodnia, świetlica i usługi społeczne; przedszkole ma się
 *   wprowadzić we wrześniu 2026, na zagospodarowanie otoczenia 2 mln zł
 *   w budżecie 2026,
 * — PARKING: przebudowa 2023 — 16 miejsc + 2 dla osób
 *   z niepełnosprawnościami, ponad 600 000 zł, to był PIERWSZY ETAP,
 * — PUNKTY: Szkoła Podstawowa nr 7 im. Jana Pawła II przy Jakubowskiego
 *   (jedyna szkoła podstawowa wewnątrz osiedla blokowego w Bochni);
 *   siedziba Spółdzielni Mieszkaniowej przy Jakubowskiego; pętla
 *   autobusowa „Legionów Polskich”; parafia św. Pawła Apostoła,
 * — ⚠️ Krakowska 18 (1972) WYŁĄCZONA z sum i średnich — nie ustalono,
 *   czy leży po stronie tego osiedla.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — LICZBY PIĘTER I WIND. Rejestr SM ich nie podaje. Jedno ogłoszenie
 *   mówi „brak windy” dla bloku z 1990 r. — za słabe źródło,
 *   NIE PODAWAĆ,
 * — TECHNOLOGII (wielka płyta / cegła). Brak źródła urzędowego.
 *   NIE PISAĆ o wielkiej płycie,
 * — DATY I POWODU NADANIA NAZWY OSIEDLU. Nie ustalone,
 * — SKLEPU SPOŻYWCZEGO WEWNĄTRZ OSIEDLA. Plan z 2005 r. był,
 *   realizacji nie potwierdzono.
 *
 * PUŁAPKI:
 * — ⚠️ Ulica Legionów Polskich biegnie przez DWA osiedla: numery
 *   nieparzyste 5–11 to Windakiewicza, parzyste to Niepodległości.
 */
export const BOCHNIA_NIEPODLEGLOSCI: DistrictContent = {
  slug: "bochnia-niepodleglosci",
  urlPath: "/thermomix/bochnia/niepodleglosci",
  nazwa: "Niepodległości",
  miejscownik: "osiedlu Niepodległości",
  przyimek: "na",
  miasto: { nazwa: "Bochnia", slug: "bochnia", urlPath: "/thermomix/bochnia" },

  h1: "Thermomix osiedle Niepodległości — prezentacja u Ciebie w domu",
  seoTitle: "Thermomix Niepodległości Bochnia — prezentacja na osiedlu",
  seoDescription:
    "Thermomix na osiedlu Niepodległości w Bochni: bezpłatna prezentacja TM7 u Ciebie w kuchni — Legionów Polskich, Jakubowskiego, Czumy. Aga, tel. 517 185 691.",

  lead:
    "Dojeżdżam pod bloki przy Legionów Polskich, Jakubowskiego i Czumy — na całe osiedle, bez wyjątków i bez dopłaty. Przywożę Thermomix TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja jest bezpłatna i trwa około dwóch godzin.",

  osiedla: [
    "Legionów Polskich",
    "Jakubowskiego",
    "Czumy",
    "Kazimierza Brodzińskiego",
    "Krakowska",
  ],

  sections: [
    {
      id: "murale",
      heading: "Osiedle, które odgrywa swoją nazwę na ścianach",
      paragraphs: [
        "Nazwa tego osiedla nie jest tu tylko napisem na tabliczce. Na ścianach bloków spółdzielni powstała galeria wielkoformatowych murali z Ojcami Niepodległości i rośnie od kilku lat.",
        "Zaczęło się w dwa tysiące dwudziestym trzecim od Józefa Piłsudskiego na bloku przy Jakubowskiego, odsłoniętego na sto piątą rocznicę odzyskania niepodległości. W marcu dwa tysiące dwudziestego czwartego doszedł Ignacy Paderewski przy Legionów Polskich, z tłem nawiązującym do Powstania Wielkopolskiego. Potem Wojciech Korfanty, a w październiku dwa tysiące dwudziestego piątego Wincenty Witos.",
        "Każdy mural ma kod QR z audiodeskrypcją, więc da się go nie tylko obejrzeć, ale i wysłuchać. Pomysł wyszedł od przewodniczącego zarządu osiedla, nie z ratusza — i to widać po tym, jak konsekwentnie jest prowadzony.",
        "Piszę o tym, bo to najprostszy sposób, żeby się tu zorientować. Kiedy umawiamy spotkanie, wystarczy powiedzieć „blok z Witosem” albo „ten z Paderewskim” i wiem dokładnie, gdzie jechać.",
      ],
    },
    {
      id: "kuchnia",
      heading: "Największe mieszkania z bocheńskich osiedli blokowych",
      paragraphs: [
        "To jest osiedle, na którym mieszka najwięcej ludzi w całej Bochni: dwadzieścia dwa bloki spółdzielni i tysiąc sto osiemdziesiąt pięć mieszkań, czyli połowa wszystkiego, co ma tutejsza spółdzielnia.",
        "Ale ważniejsza jest inna liczba. Przeciętne mieszkanie ma tu pięćdziesiąt pięć metrów kwadratowych, podczas gdy na Słonecznym i na Windakiewicza — czterdzieści jeden. Czternaście metrów różnicy to w praktyce inna kuchnia.",
        "Widać w tym też historię budowy. Bloki stawiano przez trzynaście lat, od tysiąc dziewięćset siedemdziesiątego ósmego do dziewięćdziesiątego pierwszego, i mieszkania rosły razem z rocznikiem: najstarsze przy Legionów mają średnio czterdzieści siedem metrów, te z połowy lat osiemdziesiątych już sześćdziesiąt, a najmłodsze przy Jakubowskiego ponad sześćdziesiąt dwa.",
        "Co z tego wynika dla spotkania? Zwykle jest gdzie stanąć obok siebie przy blacie, a nie po przekątnej. Rzadziej niż na starszych osiedlach pytam o obwód elektryczny, bo instalacje z lat osiemdziesiątych i dziewięćdziesiątych radzą sobie lepiej niż te z sześćdziesiątych. I częściej gotujemy coś na większą liczbę porcji, bo jest w czym.",
      ],
      bullets: [
        "dwadzieścia dwa bloki, tysiąc sto osiemdziesiąt pięć mieszkań",
        "średnio pięćdziesiąt pięć metrów — najwięcej z bocheńskich osiedli blokowych",
        "im młodszy blok, tym większe mieszkanie",
      ],
    },
    {
      id: "dojazd",
      heading: "Osiedle w trakcie przebudowy",
      paragraphs: [
        "Tu się sporo dzieje i warto o tym wiedzieć, zanim wpiszesz adres w nawigację. W środku osiedla stanął budynek wielofunkcyjny za blisko jedenaście milionów złotych, w większości z Krajowego Planu Odbudowy — z przedszkolem, przychodnią i świetlicą. Wokół niego miasto zapowiedziało zagospodarowanie otoczenia, czyli parking i plac zabaw.",
        "Parking osiedlowy przebudowano wcześniej: szesnaście miejsc plus dwa dla osób z niepełnosprawnościami, za ponad sześćset tysięcy złotych. I to był dopiero pierwszy etap, co samo w sobie mówi, jak wygląda tu popołudniami sytuacja z miejscem.",
        "Strefy płatnego parkowania na osiedlu nie ma. Zdarza się natomiast, że pod blok trzeba podejść kawałek, więc jeśli umawiamy się po siedemnastej, wyjeżdżam z zapasem. Na miejscu orientuję się po pętli autobusowej przy Legionów Polskich albo po szkole podstawowej numer siedem przy Jakubowskiego.",
        "Uwaga na jedną rzecz przy podawaniu adresu: ulica Legionów Polskich biegnie przez dwa osiedla. Numery parzyste należą do Niepodległości, nieparzyste od piątego do jedenastego — już do Windakiewicza. Dlatego zawsze proszę o numer bloku, nie tylko o nazwę ulicy.",
      ],
    },
  ],

  faq: [
    {
      question: "Mieszkam przy Legionów Polskich. Skąd wiesz, na którym jestem osiedlu?",
      answer:
        "Nie wiem i dlatego pytam o numer. Ta ulica biegnie przez dwa osiedla: numery parzyste to Niepodległości, a nieparzyste od piątego do jedenastego należą już do Windakiewicza. Dla trasy to bez znaczenia, bo dojeżdżam wszędzie bez dopłaty, ale dzięki numerowi trafiam pod właściwą klatkę za pierwszym razem. Najprościej podać numer bloku i klatkę.",
    },
    {
      question: "Mam mieszkanie z lat osiemdziesiątych, około sześćdziesięciu metrów. Będzie gdzie postawić urządzenie?",
      answer:
        "Będzie i to jest akurat najwygodniejszy metraż z bocheńskich osiedli blokowych. Mieszkania na Niepodległości mają średnio pięćdziesiąt pięć metrów, a te z lat osiemdziesiątych i późniejsze jeszcze więcej — kuchnie są tu wyraźnie większe niż na Słonecznym czy Windakiewicza. Samo urządzenie zajmuje mniej więcej tyle co czajnik z podstawką i zastępuje blender, malakser oraz mikser, więc po zakupie z blatu zwykle coś znika, a nie przybywa.",
    },
    {
      question: "Da się umówić wieczorem, po pracy?",
      answer:
        "Tak i na tym osiedlu to najczęstszy termin. Spotkanie trwa około dwóch godzin, więc spokojnie mieści się po siedemnastej. Jedyna praktyczna uwaga: wieczorem bywa tu ciasno z miejscem postojowym, bo parking przebudowano dopiero w pierwszym etapie, więc wyjeżdżam z zapasem. Ciebie to nie kosztuje ani minuty — po prostu przyjeżdżam wcześniej i czekam.",
    },
  ],

  geo: { lat: 49.967, lng: 20.4101 },
};
