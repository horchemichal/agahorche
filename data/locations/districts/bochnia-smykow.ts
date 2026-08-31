import type { DistrictContent } from "./typy";

/**
 * SMYKÓW — Osiedle nr 12 miasta Bochnia, w północnej części, przy
 * granicy z sołectwami gminy wiejskiej (Słomka, Krzyżanowice).
 *
 * OŚ STRONY: WIEŚ, PRZEZ KTÓRĄ PRZEPROWADZONO ZJAZD Z AUTOSTRADY.
 * Zdjęcia z lat 1977–1980 pokazują ul. Smyków jako „drogę przez wieś”
 * z drewnianą zabudową i błoniami. Dziś przecina ją ŁĄCZNIK WĘZŁA A4
 * „BOCHNIA” Z DK94 (1 883 m, oddany 31.12.2021), a chodnik na
 * ul. Smyków powstał dopiero w GRUDNIU 2023.
 *
 * ⚠️⚠️ ROZDZIELENIE OD POZOSTAŁYCH DAWNYCH WSI: Chodenice mają
 * wodociąg, Kolanów las i solanki, Dołuszyce dwór, Kurów ród rycerski
 * i wysokość. Tu tezą jest ZDERZENIE WSI Z INFRASTRUKTURĄ.
 * ⚠️ ROZDZIELENIE OD PROSZOWSKIEGO: tam też jest o ruchu (15 tys.
 * pojazdów na dobę na Proszowskiej), ale osią jest TARG I GALERIA.
 * Tu — autostrada i strefa przemysłowa.
 *
 * ⚠️⚠️ ROZBIEŻNOŚĆ ŹRÓDEŁ, KTÓRĄ TRZEBA ZNAĆ:
 * Studium uwarunkowań wymienia Smyków wśród wsi włączonych w latach 70.
 * Kalendarium miejskie na 1 stycznia 1973 GO NIE WYMIENIA — wylicza
 * Chodenice, Kolanów, Dołuszyce i Kurów oraz CZĘŚCI Brzeźnicy,
 * Krzeczowa, Gorzkowa, Słomki i Krzyżanowic. Najprawdopodobniej Smyków
 * wszedł do miasta jako część Krzyżanowic i/lub Słomki.
 * ⚠️ NIE PISAĆ „Smyków był wsią przyłączoną w 1973 r.” — to
 * niepotwierdzone. Bezpieczna formuła użyta w treści: „teren dzisiejszego
 * Smykowa znalazł się w granicach Bochni przy poszerzaniu miasta
 * w latach siedemdziesiątych”.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — ⭐ ŁĄCZNIK WĘZŁA A4 „BOCHNIA” Z DK94, ETAP I: 1 883 m od węzła
 *   autostradowego do skrzyżowania z ul. Krzeczowską; PRZECINA DROGĘ
 *   GMINNĄ NR 580091K, CZYLI UL. SMYKÓW. Budowa 28.12.2017 –
 *   31.12.2021 (ZDW Kraków),
 * — ⭐ CHODNIK PRZY UL. SMYKÓW: odcinek 149 m i przejścia dla pieszych
 *   oddane dopiero w GRUDNIU 2023 za 624 033,44 zł (dotacja 467 071 zł
 *   z Rządowego Funduszu Rozwoju Dróg). Przez większość długości ulicy
 *   chodnika nadal nie ma (bochnia.eu),
 * — RONDA: rondo na osiedlu nosi nazwę „rondo 15 Pułku Piechoty Wilków”;
 *   drugie, przy Krzeczowskiej, to „rondo kard. Stefana Wyszyńskiego”,
 *   a łącząca je ulica to ul. Braci Rajskich. ⭐ MIESZKAŃCY CHCIELI
 *   NAZWY „RONDO SMYKÓW” ALBO „RONDO SMYKOWSKIE”,
 * — ETAP III (nowy przebieg DW965 klasy G, ok. 3,6 km, Bochnia +
 *   Proszówki + Krzeczów, 31.01.2025 – 31.01.2028, ponad 103 mln zł),
 * — LINIA 4 BZK (przywrócona): pl. Pułaskiego → ul. Wygoda →
 *   ul. Smyków → Bocheńska Strefa Aktywności Gospodarczej,
 * — ⭐ BŁONIA — łąka w środku osiedla, wokół której skupia się
 *   zabudowa; odbywają się tam imprezy plenerowe. Radna Zenona Banasiak
 *   mówi o „unikatowej zabudowie jednorodzinnej wokół błoni”
 *   i o „100-letniej tradycji i historii” Smykowa,
 * — FOTOGRAFIE Z LAT 1977–1980 (fotopolska) pokazują ul. Smyków jako
 *   „drogę przez wieś” z drewnianą zabudową i błoniami,
 * — BOCHEŃSKA STREFA AKTYWNOŚCI GOSPODARCZEJ: otwarta 25 października
 *   2014, PONAD 61 ha, koszt blisko 16 mln zł (ok. 10 mln z MRPO).
 *   Inwestorzy m.in. Werner Kenkel (największy), Górstal, Gerex Net;
 *   później CARGO-STAL i Bardusch,
 * — ⭐ ZIELEŃ IZOLACYJNA: w 2019 r. miasto wydało prawie 130 tys. zł
 *   na nasadzenia drzew i krzewów oddzielające zabudowę od strefy
 *   przemysłowej,
 * — BOISKO LZS „SMYKOWIANKA”,
 * — ULICE (statut): Birków, Graniczna, Hutnicza (na wschód od
 *   ul. Wygoda), Krzyżanowicka, Adolfa Mitery, ks. Józefa Skwiruta,
 *   Smyków, Wygoda (od skrzyżowania z ul. Hutniczą),
 * — SĄSIEDZTWO: od północy Słomka i Krzyżanowice — SOŁECTWA GMINY
 *   WIEJSKIEJ, czyli inna gmina zaraz za ostatnim domem.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — DATY PRZYŁĄCZENIA SMYKOWA JAKO OSOBNEJ WSI. Patrz rozbieżność wyżej,
 * — PIERWSZEJ PISEMNEJ WZMIANKI. NIE USTALONA. ⚠️ W wykazie ulic jest
 *   ul. Birków, a Birków to nazwa średniowieczna (osada sprzed 1253 r.,
 *   „młyn zwany Birkowskim” nad Rabą, 1401 i 1403) — związek nazwy ulicy
 *   z tą osadą jest PRAWDOPODOBNY, ale NIEPOTWIERDZONY. NIE UŻYWAĆ,
 * — STALPRODUKTU JAKO ZAKŁADU NA OSIEDLU. ⚠️ Adres Wygoda 69; ul. Wygoda
 *   należy do osiedla dopiero od skrzyżowania z Hutniczą i NIE USTALONO,
 *   czy numer 69 mieści się w granicach. W treści formuła „za miedzą”,
 * — LICZBY ZATRUDNIONYCH w strefie i deklaracji inwestorów.
 *   Nie potwierdzone niezależnie,
 * — AKTUALNEGO STATUSU ŚWIETLICY. ⚠️ Radna wymienia ją wśród zasobów
 *   osiedla, a w 2023 r. magistrat rozsyłał zapytania na dokumentację
 *   projektową JEJ BUDOWY. Sprzeczność — pominięte.
 *
 * PUŁAPKI:
 * — ⚠️ Smyków NIE jest sołectwem gminy wiejskiej Bochnia — sprawdzone
 *   na pełnej liście 31 sołectw. Ale sąsiaduje z dwoma.
 */
export const BOCHNIA_SMYKOW: DistrictContent = {
  slug: "bochnia-smykow",
  urlPath: "/thermomix/bochnia/smykow",
  nazwa: "Smyków",
  miejscownik: "Smykowie",
  przyimek: "na",
  miasto: { nazwa: "Bochnia", slug: "bochnia", urlPath: "/thermomix/bochnia" },

  h1: "Thermomix Smyków — prezentacja u Ciebie w domu",
  seoTitle: "Thermomix Smyków Bochnia — prezentacja na osiedlu",
  seoDescription:
    "Thermomix na Smykowie w Bochni: bezpłatna prezentacja TM7 u Ciebie w kuchni — Smyków, Wygoda, Hutnicza, Krzyżanowicka, Birków. Aga, tel. 517 185 691.",

  lead:
    "Dojeżdżam pod adresy na całym Smykowie: Smyków, Wygoda, Hutnicza, Krzyżanowicka, Birków i Graniczna. Przywożę Thermomix TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja jest bezpłatna i do niczego nie zobowiązuje.",

  osiedla: [
    "Smyków",
    "Wygoda",
    "Hutnicza",
    "Krzyżanowicka",
    "Birków",
    "Graniczna",
    "Adolfa Mitery",
    "ks. Skwiruta",
  ],

  sections: [
    {
      id: "autostrada",
      heading: "Droga przez wieś, przez którą poprowadzono zjazd z autostrady",
      paragraphs: [
        "Na zdjęciach z przełomu lat siedemdziesiątych i osiemdziesiątych ulica Smyków wygląda dokładnie tak, jak się nazywa: droga przez wieś, drewniane domy, błonia. Trudno uwierzyć, że to ta sama ulica, którą dziś przecina łącznik węzła autostrady A cztery.",
        "Łącznik ma tysiąc osiemset osiemdziesiąt trzy metry i prowadzi od węzła Bochnia do skrzyżowania z Krzeczowską. Budowano go równo cztery lata, od końca dwa tysiące siedemnastego do końca dwa tysiące dwudziestego pierwszego. Przechodzi przez drogę gminną, czyli po prostu przez ulicę Smyków.",
        "Jest w tej historii szczegół, który mówi o osiedlu więcej niż kilometry i miliony. Rondo, które przy tej okazji powstało, nazwano imieniem piętnastego Pułku Piechoty Wilków. Mieszkańcy chcieli, żeby nazywało się po prostu rondo Smyków albo rondo smykowskie.",
        "Druga liczba jest jeszcze bardziej wymowna. Pierwszy chodnik przy ulicy Smyków — sto czterdzieści dziewięć metrów, wraz z przejściami dla pieszych — oddano dopiero w grudniu dwa tysiące dwudziestego trzeciego roku, dwa lata po autostradzie. Przez większość długości ulicy chodnika nadal nie ma.",
      ],
    },
    {
      id: "blonia",
      heading: "Domy wokół błoni, fabryki za żywopłotem",
      paragraphs: [
        "W środku osiedla jest łąka, którą wszyscy nazywają błoniami, i to wokół niej skupia się zabudowa. Domy jednorodzinne, ustawione tak, jak ustawia się je we wsi, a nie na osiedlu. Latem odbywają się tam imprezy plenerowe, jest też boisko miejscowego klubu.",
        "Kilkaset metrów dalej zaczyna się co innego: Bocheńska Strefa Aktywności Gospodarczej, otwarta w dwa tysiące czternastym roku, ponad sześćdziesiąt jeden hektarów hal i zakładów. Miasto wydało na nią blisko szesnaście milionów złotych.",
        "Najlepszym komentarzem do tego sąsiedztwa jest wydatek z dwa tysiące dziewiętnastego roku: prawie sto trzydzieści tysięcy złotych na zieleń izolacyjną, czyli nasadzenia drzew i krzewów oddzielające domy od strefy przemysłowej. Dosłownie żywopłot między jednym a drugim.",
        "Od północy zaczyna się już inna gmina — Słomka i Krzyżanowice to sołectwa gminy wiejskiej Bochnia, a granica biegnie tuż za ostatnimi domami. Dla mnie nie ma to żadnego znaczenia, bo jeżdżę po całym powiecie bez dopłat, ale przy umawianiu warto powiedzieć, czy adres jest jeszcze w mieście, czy już za granicą.",
      ],
      bullets: [
        "zabudowa jednorodzinna skupiona wokół błoni",
        "strefa gospodarcza ponad sześćdziesiąt jeden hektarów",
        "granica gminy wiejskiej zaraz za ostatnim domem",
      ],
    },
    {
      id: "kuchnia",
      heading: "Praca na zmiany i obiad, który czeka",
      paragraphs: [
        "Osiedle sąsiadujące ze strefą przemysłową i z dużym zakładem oznacza jedną rzecz, która realnie zmienia gotowanie: część domów żyje w rytmie zmian. Ktoś wraca o czternastej, ktoś o dwudziestej drugiej, ktoś je przed wyjściem o piątej rano.",
        "W takim domu obiad musi być czymś, co czeka i nie traci na odgrzaniu. Gulasz, fasolka, zupa, sos do makaronu, gołąbki. Urządzenie gotuje takie rzeczy bez pilnowania i samo się wyłącza, więc da się je nastawić przed wyjściem i wrócić do gotowego — każdy nakłada sobie wtedy, kiedy wraca.",
        "Druga rzecz to weekend, kiedy wszyscy są naraz. Wtedy gotuje się dla większej liczby osób i zysk jest inny: nie chodzi o to, żeby było szybciej, tylko żeby wyszło pewnie. Ciasto drożdżowe wyrabia się w kilka minut zamiast kwadransa ręcznie, a sos, który trzeba pilnować, żeby się nie zwarzył, robi się przy ustawionej temperaturze.",
        "Trzecia jest o miejscu i tu Smyków ma przewagę nad blokowiskami. Mieszka się w domach, więc blat jest długi i nie trzeba niczego przestawiać. Rzadko pytam też o obwód elektryczny, bo instalacje w tej zabudowie są zwykle nowsze niż w zasobie z lat sześćdziesiątych.",
      ],
    },
  ],

  faq: [
    {
      question: "Pracujemy na zmiany. Da się umówić poza standardowymi godzinami?",
      answer:
        "Da się i na Smykowie tak wygląda spora część moich spotkań. Prezentacja trwa około dwóch godzin i może wypaść równie dobrze o dziewiątej rano, jak o dziewiętnastej — dopasowuję się do Waszego grafiku, nie odwrotnie. Warto tylko przy umawianiu powiedzieć, kiedy realnie da się usiąść razem, bo to jedyny warunek, jaki ma znaczenie.",
    },
    {
      question: "Mieszkam przy Smykowie, ale chodnika u nas nie ma. Podjedziesz pod dom?",
      answer:
        "Podjadę. Ulica Smyków to droga gminna, chodnik ma dopiero na krótkim odcinku oddanym w grudniu dwa tysiące dwudziestego trzeciego roku, a poza tym jest po prostu wiejsko — i to mi nie przeszkadza. Strefy płatnego parkowania tu nie ma, więc zwykle staję przy furtce. Proszę o numer domu, bo ulica jest długa i przecina ją łącznik autostradowy, co potrafi zmylić nawigację.",
    },
    {
      question: "Mieszkam już w Słomce, zaraz za granicą miasta. Przyjedziesz?",
      answer:
        "Oczywiście i nic to nie zmienia. Słomka i Krzyżanowice to sołectwa gminy wiejskiej Bochnia — innej jednostki niż miasto, ale dla mnie to ta sama trasa. Dojeżdżam do wszystkich trzydziestu jeden sołectw gminy i do całego powiatu bez doliczania kosztu dojazdu. Granica biegnie tu dosłownie za ostatnimi domami Smykowa.",
    },
  ],

  geo: { lat: 49.9945, lng: 20.4439 },
};
