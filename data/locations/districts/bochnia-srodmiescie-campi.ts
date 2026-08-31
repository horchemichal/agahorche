import type { DistrictContent } from "./typy";

/**
 * ŚRÓDMIEŚCIE-CAMPI — Osiedle nr 1 miasta Bochnia.
 *
 * OŚ STRONY: JEDYNE OSIEDLE W STREFIE PŁATNEGO PARKOWANIA.
 * Wykaz ulic objętych SPP pokrywa się praktycznie z granicami tego
 * osiedla i tylko jego. Dla osoby, która przyjeżdża z urządzeniem
 * i wnosi je pod adres, to jest informacja operacyjna, a nie ciekawostka.
 * ⚠️ Formuła „praktycznie się pokrywa”, NIE „dokładnie” — ul. Kącik jest
 * w SPP, a statut przypisuje ją do Osiedla 4 Uzbornia; ul. Trudna jest
 * w SPP, a nie ma jej na liście ulic Osiedla 1.
 *
 * ⚠️⚠️ TO NIE JEST OŚ „ZABUDOWA Z RÓŻNYCH EPOK OBOK SIEBIE” — ta należy
 * do ŚW. JANA-MUROWIANKI (bloki 1972/78/82 kontra Panorama z 2022 r.).
 * Tutaj warstwy zabudowy wchodzą jako JEDNA SEKCJA, nie jako teza.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — STREFA PŁATNEGO PARKOWANIA (strefappbochnia.info): opłaty
 *   pon.–pt. 8:00–17:00, w weekendy i święta bezpłatnie. Stawki:
 *   1,00 zł / 30 min, 3,00 zł pierwsza godzina, 3,60 zł druga,
 *   4,30 zł trzecia, 3,00 zł każda kolejna. Abonament mieszkańca
 *   od 10 zł/mies. Rozszerzenie strefy weszło 1 kwietnia 2022
 *   (dołączyły m.in. Rynek, Mickiewicza, Sutoris, Solna, Rzeźnicka),
 * — REWITALIZACJA: od 29 września 2020 zamknięta droga wojewódzka wzdłuż
 *   zachodniej pierzei Rynku; UL. WOLNICA STAŁA SIĘ ŚLEPA, dojazd
 *   od Różanej; strefy uspokojonego ruchu. Fontanna multimedialna
 *   uruchomiona 17 września 2021 (bochnia.eu, Gazeta Krakowska),
 * — BLOKI SPÓŁDZIELCZE NA OSIEDLU (rejestr SM Bochnia): Krakowska 18
 *   (1972, 60 mieszkań), św. Marka 2 (1974, 45 mieszkań),
 *   Kazimierza Wielkiego 36 (1974, 60 mieszkań) i 37 (1975, 60 mieszkań),
 * — KAMIENICE: Rynek 2, Rynek 3, Kościuszki 4, d. Rada Powiatowa przy
 *   Kazimierza Wielkiego 31 (rejestr zabytków); oferty rynkowe podają
 *   roczniki od 1930 r.,
 * — ⭐ CAMPI = łac. CAMPUS, POLE. Szyb drążono w latach 1556–1568
 *   POZA ÓWCZESNYM MIASTEM, w polu; przebito warstwy kurzawki
 *   niszczące obudowę drewnianą. OD 1711 R. CAMPI BYŁ JEDYNYM CZYNNYM
 *   SZYBEM bocheńskiej kopalni (polska-org.pl),
 * — PUNKTY: Rynek z fontanną; Muzeum im. Stanisława Fischera w dawnym
 *   klasztorze dominikanów (Rynek 20); kościół św. Mikołaja przy
 *   pl. św. Kingi; Zamek Żupny przy Regis; Szyb Campi — turystyczne
 *   wejście do kopalni z listy UNESCO; Urząd Miasta; Szpital Powiatowy
 *   przy Krakowskiej; szkoły podstawowe nr 1 (Biała), nr 2 (Oracka)
 *   i nr 5 (Kazimierza Wielkiego),
 * — ⚠️ GRANICA PO TYPIE ZABUDOWY: statut przypisuje do Osiedla 1
 *   ul. Windakiewicza TYLKO w zakresie „domy prywatne”; bloki
 *   spółdzielcze przy tej samej ulicy należą do Osiedla 6.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — KOPALNI SOLI JAKO TEMATU. To oś strony miasta. Campi wchodzi
 *   wyłącznie jako etymologia nazwy osiedla,
 * — LICZBY MIESZKAŃCÓW OSIEDLA. Nie ustalona dla żadnego z czternastu,
 * — LICZBY PIĘTER I WIND w blokach. Rejestr SM podaje rok, liczbę
 *   mieszkań i klatek — nie podaje kondygnacji ani wind.
 *
 * PUŁAPKI:
 * — ⚠️ NIE PISAĆ, że SPP pokrywa się z osiedlem DOKŁADNIE. Dwa wyjątki
 *   wyżej,
 * — ⚠️ Od 1 kwietnia 2026 część miejsc traci możliwość opłaty aplikacją,
 *   zostaje parkomat — to zmienia się w czasie, więc w treści bez daty
 *   przyszłej, tylko „bywa, że działa sam parkomat”.
 */
export const BOCHNIA_SRODMIESCIE_CAMPI: DistrictContent = {
  slug: "bochnia-srodmiescie-campi",
  urlPath: "/thermomix/bochnia/srodmiescie-campi",
  nazwa: "Śródmieście-Campi",
  miejscownik: "Śródmieściu-Campi",
  przyimek: "w",
  miasto: { nazwa: "Bochnia", slug: "bochnia", urlPath: "/thermomix/bochnia" },

  h1: "Thermomix Śródmieście-Campi — prezentacja u Ciebie w domu",
  seoTitle: "Thermomix Śródmieście Bochnia — prezentacja w centrum",
  seoDescription:
    "Thermomix w Śródmieściu i na Campi w Bochni: bezpłatna prezentacja TM7 u Ciebie w kuchni — Rynek, Solna, Kazimierza Wielkiego, Krakowska. Aga, tel. 517 185 691.",

  lead:
    "Dojeżdżam pod adresy w całym Śródmieściu: Rynek, Solna, Sutoris, Kazimierza Wielkiego, Krakowska, Campi i okoliczne uliczki. Przywożę Thermomix TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja jest bezpłatna, a parkowanie w strefie to mój problem, nie Twój.",

  osiedla: [
    "Rynek",
    "Solna",
    "Sutoris",
    "Kazimierza Wielkiego",
    "Krakowska",
    "Campi",
    "Bernardyńska",
    "Kowalska",
    "Oracka",
    "Biała",
    "Wolnica",
    "Regis",
    "Solna Góra",
    "Mickiewicza",
    "Matejki",
    "Kościuszki",
    "Konstytucji 3 Maja",
    "Floris",
    "Parkowa",
    "Ofiar Katynia",
  ],

  sections: [
    {
      id: "parkowanie",
      heading: "Jedyne osiedle w Bochni, gdzie stoi parkomat",
      paragraphs: [
        "Strefa płatnego parkowania w Bochni obejmuje praktycznie to jedno osiedle i tylko to. Rynek, Mickiewicza, Sutoris, Solna, Rzeźnicka, Bernardyńska, Kowalska, Oracka, Krakowska, plac Pułaskiego, plac świętej Kingi — wszystko płatne od poniedziałku do piątku między ósmą a siedemnastą. W weekendy i święta parkowanie jest bezpłatne.",
        "Dla Ciebie to nie zmienia niczego, bo opłata za postój to mój koszt i nigdy go nie doliczam. Warto o tym wiedzieć z innego powodu: w środku tygodnia lepiej, żebym wyjechała z zapasem, bo miejsce pod adresem w centrum bywa zajęte i trzeba je znaleźć kawałek dalej. Kiedy umawiamy się w sobotę, ten problem znika w całości.",
        "Jest jeszcze druga rzecz, o której nie wiedzą nawigacje. Po rewitalizacji Rynku zachodnia pierzeja jest zamknięta dla ruchu, a ulica Wolnica stała się ślepa i dojeżdża się do niej od Różanej. Jeśli mieszkasz w tamtym kwartale, powiedz to przy umawianiu — oszczędzimy oboje kwadrans.",
      ],
      bullets: [
        "opłata w strefie to mój koszt, nie Twój",
        "weekend w centrum jest łatwiejszy niż środek tygodnia",
        "Wolnica jest ślepa — dojazd od Różanej",
      ],
    },
    {
      id: "kuchnia",
      heading: "Kamienica z lat trzydziestych i blok z tysiąc dziewięćset siedemdziesiątego drugiego — czterysta metrów od siebie",
      paragraphs: [
        "To osiedle ma trzy zupełnie różne rodzaje mieszkań w promieniu kilku minut spaceru i widzę to za każdym razem, kiedy wchodzę do kuchni.",
        "Kamienice wokół Rynku i przy Kościuszki to mieszkania z lat trzydziestych i starsze. Kuchnia bywa tu przestronna, ale często wąska i długa, blat kończy się szybciej, niż się wydaje, a instalacja jest tak stara, jak dawno robiono remont. Urządzenie pobiera około tysiąca pięciuset watów, więc pytam wtedy, czy na tym samym obwodzie nie chodzi akurat czajnik albo piekarnik. Nigdy nie było z tego problemu, ale wolę zapytać.",
        "Cztery bloki spółdzielni stoją tuż obok: przy Krakowskiej, świętego Marka i Kazimierza Wielkiego, wszystkie z lat siedemdziesiątych, po czterdzieści pięć do sześćdziesięciu mieszkań. Tam kuchnia jest osobna i mniejsza, ale przewidywalna — wiem, czego się spodziewać, zanim wejdę.",
        "Trzecia warstwa to nowe mieszkania z ostatnich lat, z aneksem otwartym na salon. Tu miejsca jest najwięcej i spotkanie wygląda inaczej: stoimy obok siebie przy blacie, zamiast mijać się w drzwiach.",
        "Nie musisz nic z tego rozstrzygać przed spotkaniem. Wystarczy, że przy umawianiu powiesz ulicę — resztę doczytam sama i przywiozę to, co przy Twoim blacie ma sens.",
      ],
    },
    {
      id: "campi",
      heading: "Campi znaczy pole",
      paragraphs: [
        "Nazwa drugiej części osiedla nie ma nic wspólnego z kampusem ani z niczym współczesnym. Campi to po prostu łacińskie pole — i tak właśnie było, kiedy w latach tysiąc pięćset pięćdziesiątych zaczęto tu drążyć szyb. Stał poza ówczesnym miastem, w polu za murami.",
        "Drążenie trwało dwanaście lat, bo trzeba było przebić warstwy kurzawki, które niszczyły drewnianą obudowę. Od początku osiemnastego wieku Campi był już jedynym czynnym szybem bocheńskiej kopalni, a dziś to przez niego schodzi się pod ziemię jako turysta.",
        "Piszę o tym nie dla ozdoby, tylko dlatego, że to tłumaczy układ osiedla. Śródmieście-Campi to dwie zrośnięte rzeczy: średniowieczne miasto lokacyjne i pole, w którym postawiono szyb. Stąd biorą się tak różne adresy pod jedną nazwą — i tak różne kuchnie.",
      ],
    },
  ],

  faq: [
    {
      question: "Mieszkam w strefie płatnego parkowania. Czy doliczysz sobie postój?",
      answer:
        "Nie, ani złotówki. Opłata za postój jest moim kosztem dojazdu i traktuję ją tak samo jak paliwo. Jedyne, o co proszę, to żebyś przy umawianiu podała ulicę i numer — w środku tygodnia wyjeżdżam wtedy z zapasem, bo miejsca pod adresem w centrum bywają zajęte. W sobotę strefa nie działa i jest po prostu łatwiej.",
    },
    {
      question: "Mieszkam w kamienicy przy Rynku, kuchnia jest wąska. Da się tam cokolwiek zrobić?",
      answer:
        "Da się i robię to regularnie. Urządzenie zajmuje mniej więcej tyle miejsca co czajnik z podstawką, więc potrzebuję kawałka blatu, gniazdka i miejsca, żeby stanąć. W starszej zabudowie pytam tylko o jedno: czy na tym samym obwodzie nie pracuje w tym czasie piekarnik albo czajnik, bo urządzenie bierze około tysiąca pięciuset watów. Jeśli wiesz, że u Ciebie z prądem bywa różnie, powiedz przy umawianiu — ustawimy spotkanie tak, żeby nic nie wyskoczyło w połowie gotowania.",
    },
    {
      question: "Da się umówić w sobotę?",
      answer:
        "Tak i w centrum Bochni to często najlepszy termin. Strefa płatnego parkowania w weekend nie obowiązuje, ruch w Śródmieściu jest mniejszy, a spotkanie trwa około dwóch godzin i nikt nie patrzy na zegarek. Wieczory w tygodniu też są u mnie normalne — dopasowuję się do Twojego grafiku.",
    },
  ],

  geo: { lat: 49.969, lng: 20.424 },
};
