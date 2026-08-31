import type { DistrictContent } from "./typy";

/**
 * PROSZOWSKIE — Osiedle nr 14 miasta Bochnia, część północna, przy Rabie.
 *
 * ⚠️⚠️ ROZSTRZYGNIĘCIE NA WSTĘPIE: Osiedle Proszowskie JEST osiedlem
 * MIASTA Bochnia (nr 14 w statucie, z własnym zarządem i pulą budżetu
 * obywatelskiego). PROSZÓWKI to ODRĘBNE SOŁECTWO GMINY WIEJSKIEJ —
 * inna jednostka samorządowa. Nazwa osiedla pochodzi od ul. Proszowskiej,
 * czyli drogi w kierunku Proszówek. NIE MYLIĆ.
 *
 * OŚ STRONY: TARG I GALERIA PO DWÓCH STRONACH JEDNEJ ULICY.
 * Targowisko „Mój Rynek” przy ul. Partyzantów (czwartki i soboty,
 * 277 stanowisk) i Galeria Rondo przy Partyzantów, otwarta w grudniu
 * 2010 r. NA TERENIE DAWNEGO DWORCA PKS — 14 000 m² powierzchni
 * handlowej i 600 miejsc parkingowych. Tu robi zakupy pół miasta.
 *
 * ⚠️⚠️ ROZDZIELENIE OD SMYKOWA: tam też jest o drogach i ruchu, ale osią
 * jest AUTOSTRADA I STREFA PRZEMYSŁOWA. Tu — HANDEL. Wątek 15 tys.
 * pojazdów na dobę wchodzi jako sekcja o dojeździe, nie jako teza.
 * ⚠️ Targowisko jest już wspomniane na stronie miasta Bochnia — tam
 * jako jeden z wielu faktów, tu jako oś. To jest dopuszczalne, ale
 * treść MUSI iść dalej: dni, godziny, sąsiedztwo galerii, brak szkoły.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — ⭐ TARGOWISKO „MÓJ RYNEK”, ul. Partyzantów: czwartki i soboty,
 *   277 stanowisk, od 4:00 (lato) / 5:00 (zima) do 14:00,
 * — ⭐ GALERIA RONDO, ul. Partyzantów: otwarta w GRUDNIU 2010 na terenie
 *   DAWNEGO DWORCA PKS, 2 kondygnacje nadziemne, 14 000 m² powierzchni
 *   handlowej, 600 MIEJSC PARKINGOWYCH, projekt ARKUS / Marek Gachowski,
 *   nagroda w konkursie Shopping Center Awards 2011. ⚠️ Obiekt stoi
 *   u zbiegu z ul. Konstytucji 3 Maja, która należy do Osiedla 1 —
 *   opisywać jako „na skraju osiedla”, nie „w środku”,
 * — ⭐ NATĘŻENIE RUCHU NA UL. PROSZOWSKIEJ SIĘGA 15 TYSIĘCY POJAZDÓW
 *   NA DOBĘ. Wąskie ulice Na Kąty i Na Buczków nie radzą sobie z ruchem
 *   generowanym przez nowe osiedla wielorodzinne; mieszkańcy skarżą się
 *   na łamanie ograniczeń tonażowych DO 2,5 TONY i na brak miejsc
 *   parkingowych. Postulaty: droga wzdłuż Raby, pas rowerowy przy
 *   Proszowskiej, poszerzenie ul. Na Kąty (bochnianin.pl,
 *   bochniazbliska.pl),
 * — ⭐ ZMIANA CHARAKTERU ZABUDOWY: żaden z 51 budynków Spółdzielni
 *   Mieszkaniowej nie leży na tym osiedlu. Historycznie zabudowa
 *   jednorodzinna — i to się właśnie zmienia: „w miejscu tradycyjnych
 *   domów jednorodzinnych projektowane są obiekty o znacznie większej
 *   liczbie lokali mieszkalnych”. Mieszkańcy domagają się miejscowego
 *   planu, obawiając się „chaosu budowlanego i paraliżu
 *   komunikacyjnego”. Przykład: Osiedle Magnolia przy ul. Proszowskiej
 *   (GH Investment) — dwa kameralne, TRZYKONDYGNACYJNE budynki
 *   wielorodzinne, z ogrodzeniem, monitoringiem, parkingiem i placem
 *   zabaw,
 * — ⭐ BRAK SZKOŁY NA OSIEDLU. W wykazie siedzib obwodów głosowania
 *   figurują tylko dawne Archiwum przy Proszowskiej i świetlica BZUK
 *   przy 20 Stycznia — żadnej placówki oświatowej. Miasto analizuje
 *   budowę zespołu szkolno-przedszkolnego z halą sportową przy
 *   ul. Proszowskiej; rozważane przeniesienie tam Szkoły Podstawowej
 *   nr 1, która dziś mieści się przy ul. Białej, czyli w Śródmieściu.
 *   Spotkanie w sprawie projektu odbyło się 14 marca 2025 r.,
 * — DOM SĄSIEDZKI: budynek dawnego Archiwum Państwowego przy
 *   ul. Proszowskiej przekazywany przez starostę miastu; realizacja
 *   przewidywana do 2029 r.,
 * — NAZWY ULIC ZDRADZAJĄ PAS USŁUGOWO-PRZEMYSŁOWY: Gazowa, Składowa,
 *   Targowa, Wodociągowa, Hutnicza,
 * — OSIEDLE MA PIĘĆ TABLIC OGŁOSZENIOWYCH sfinansowanych z budżetu
 *   obywatelskiego (2023 i 2024) — komunikacja idzie przez gabloty,
 * — POZA STREFĄ PŁATNEGO PARKOWANIA.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — HISTORII TERENU. ⚠️ NIE USTALONO, kiedy wszedł w granice miasta
 *   ani co tu było wcześniej. To najsłabszy punkt tego osiedla —
 *   i dlatego strona stoi na teraźniejszości, nie na przeszłości,
 * — PRZYPISANIA NAZWY POTOCZNEJ „WYGODA” DO TEGO OSIEDLA. ⚠️ Ul. Wygoda
 *   należy tu od skrzyżowania z Hutniczą, ale że mieszkańcy tak nazywają
 *   tę część — NIE USTALONO. Nie twierdzić,
 * — „PODEDWORZA”. Ta ulica NIE figuruje na liście Osiedla 14 —
 *   należy do Krzęczkowa-Łychowa.
 *
 * PUŁAPKI:
 * — ⚠️⚠️ PROSZOWSKIE ≠ PROSZÓWKI. Pierwsze to osiedle miasta, drugie
 *   sołectwo gminy wiejskiej.
 */
export const BOCHNIA_PROSZOWSKIE: DistrictContent = {
  slug: "bochnia-proszowskie",
  urlPath: "/thermomix/bochnia/proszowskie",
  nazwa: "Proszowskie",
  miejscownik: "Proszowskiem",
  przyimek: "na",
  miasto: { nazwa: "Bochnia", slug: "bochnia", urlPath: "/thermomix/bochnia" },

  h1: "Thermomix osiedle Proszowskie — prezentacja u Ciebie w domu",
  seoTitle: "Thermomix Proszowskie Bochnia — prezentacja na osiedlu",
  seoDescription:
    "Thermomix na osiedlu Proszowskim w Bochni: bezpłatna prezentacja TM7 u Ciebie w kuchni — Proszowska, Partyzantów, Łany, Na Kąty, Wygoda. Aga, tel. 517 185 691.",

  lead:
    "Dojeżdżam pod adresy na całym Proszowskiem: Proszowska, Partyzantów, Łany, Na Kąty, Na Buczków, Hutnicza i dalej. Przywożę Thermomix TM7 i gotujemy razem u Ciebie w kuchni — chętnie z tego, co przyniosłaś w czwartek z targu. Prezentacja jest bezpłatna.",

  osiedla: [
    "Proszowska",
    "Partyzantów",
    "Łany",
    "Na Kąty",
    "Na Buczków",
    "Hutnicza",
    "Targowa",
    "Składowa",
    "Gazowa",
    "Wodociągowa",
    "Rejtana",
    "Staszica",
    "20 Stycznia",
    "Żeromskiego",
    "Garncarska",
    "ks. Tischnera",
  ],

  sections: [
    {
      id: "targ",
      heading: "Targ i galeria po dwóch stronach jednej ulicy",
      paragraphs: [
        "Przy Partyzantów, na tym osiedlu, stoją obok siebie dwa miejsca, w których Bochnia robi zakupy — i trudno o lepszy przykład na to, jak zmieniło się kupowanie jedzenia w ciągu jednego pokolenia.",
        "Pierwsze to targowisko Mój Rynek: dwieście siedemdziesiąt siedem stanowisk, czwartki i soboty, od czwartej rano latem i piątej zimą do drugiej po południu. Kto chce najlepszych warzyw, przychodzi wcześnie i wie o tym całe miasto.",
        "Drugie to Galeria Rondo, otwarta w grudniu dwa tysiące dziesiątego roku na terenie dawnego dworca autobusowego. Czternaście tysięcy metrów kwadratowych powierzchni handlowej i sześćset miejsc parkingowych. Rok po otwarciu dostała nagrodę w branżowym konkursie.",
        "Dla prezentacji ma to konkretne przełożenie i chętnie z niego korzystam. Jeśli umawiamy się na czwartek albo sobotę, najsensowniejsze spotkanie to takie, w którym gotujemy z tego, co przyniosłaś z targu, a nie z tego, co przywiozłam w torbie. To jest zresztą najlepszy test dla takiego urządzenia — nie przepis z folderu, tylko koszyk, który i tak byś tego dnia kupiła.",
      ],
    },
    {
      id: "zmiana",
      heading: "Osiedle domów, na którym wyrastają bloki",
      paragraphs: [
        "W zasobie bocheńskiej spółdzielni mieszkaniowej jest pięćdziesiąt jeden budynków. Na Proszowskiem nie stoi ani jeden. Historycznie to osiedle domów jednorodzinnych — i właśnie przestaje nim być.",
        "W miejscu tradycyjnych domów projektuje się dziś obiekty z dużo większą liczbą lokali. Powstało już osiedle złożone z dwóch kameralnych, trzykondygnacyjnych budynków przy Proszowskiej, z ogrodzeniem, monitoringiem, parkingiem i placem zabaw. Mieszkańcy domagają się uchwalenia miejscowego planu, bo obawiają się — cytuję za lokalną prasą — chaosu budowlanego i paraliżu komunikacyjnego.",
        "Dla mnie oznacza to dwa różne rodzaje spotkań na jednym osiedlu. W domu na Łanach czy Na Buczków rozmawiamy o skali: ile osób siada do stołu, co się robi z warzywami z ogrodu, jak wyglądają jesienne przetwory. W nowym mieszkaniu przy Proszowskiej — o czym innym: ile sprzętów w ogóle trzeba kupić, skoro kuchnia jest urządzana od zera.",
        "Jest jeszcze jedna rzecz, której na tym osiedlu nie ma i która sporo o nim mówi: szkoły podstawowej. Dzieci chodzą do szkół w innych częściach miasta. Miasto analizuje budowę zespołu szkolno-przedszkolnego przy Proszowskiej i rozważa przeniesienie tu jednej z istniejących podstawówek, ale to na razie plany.",
      ],
      bullets: [
        "ani jednego bloku spółdzielczego — i pierwsze nowe budynki wielorodzinne",
        "dom z ogrodem i nowe mieszkanie to dwie różne rozmowy",
        "na osiedlu nie ma szkoły podstawowej",
      ],
    },
    {
      id: "dojazd",
      heading: "Piętnaście tysięcy samochodów na dobę",
      paragraphs: [
        "Ulicą Proszowską przejeżdża do piętnastu tysięcy pojazdów na dobę i to jest liczba, która tłumaczy większość tutejszych problemów. Boczne uliczki — Na Kąty i Na Buczków — są wąskie i nie radzą sobie z ruchem, jaki generują nowe budynki; mieszkańcy skarżą się też na łamanie ograniczenia tonażowego do dwóch i pół tony.",
        "Postulaty zgłaszane na zebraniach osiedlowych są równie konkretne: droga wzdłuż Raby, która odciążyłaby Proszowską, pas rowerowy po jednej stronie i poszerzenie ulicy Na Kąty.",
        "Co z tego wynika dla nas? Tyle, że w godzinach szczytu wyjeżdżam z zapasem, a przy adresach w bocznych uliczkach proszę o numer domu i, jeśli wiesz, o wskazówkę, z której strony lepiej wjechać. Strefy płatnego parkowania tu nie ma, ale miejsc pod nowymi budynkami bywa mniej niż samochodów.",
        "Najprostszym punktem orientacyjnym jest Galeria Rondo z jej sześciuset miejscami — od niej trafiam wszędzie. W dawnym budynku Archiwum przy Proszowskiej ma zresztą powstać Dom Sąsiedzki, więc za kilka lat orientować się będzie jeszcze łatwiej.",
      ],
    },
  ],

  faq: [
    {
      question: "Możemy gotować z tego, co kupiłam na targu?",
      answer:
        "Bardzo chętnie i na tym osiedlu proponuję to sama. Targowisko Mój Rynek działa przy Partyzantów w czwartki i soboty, więc jeśli umówimy się na jeden z tych dni albo zaraz po, ugotujemy z Twojego koszyka, a nie z moich składników. To najuczciwszy test, jaki znam: pokazuje, czy urządzenie pasuje do jedzenia, które i tak u Was powstaje. Wystarczy, że przy umawianiu powiesz, co planujesz kupić.",
    },
    {
      question: "Mieszkam na Proszowskiem, ale to nie to samo co Proszówki, prawda?",
      answer:
        "Dokładnie tak i to jest w Bochni częsta pomyłka. Osiedle Proszowskie leży w granicach miasta, a Proszówki to odrębne sołectwo gminy wiejskiej Bochnia — innej jednostki samorządowej. Nazwa osiedla wzięła się po prostu od ulicy Proszowskiej, czyli drogi w tamtą stronę. Dojeżdżam i tu, i tam bez dopłaty, więc dla umówienia się nie ma to znaczenia — ale nawigacji potrafi namieszać.",
    },
    {
      question: "U nas na Na Kąty jest wąsko i ruch. Dasz radę podjechać?",
      answer:
        "Dam i robię to regularnie. Proszowską przejeżdża do piętnastu tysięcy samochodów na dobę, a boczne uliczki są wąskie, więc w godzinach szczytu po prostu wyjeżdżam wcześniej. Przy umawianiu przydaje się numer domu i, jeśli wiesz, wskazówka, z której strony lepiej wjechać. Strefy płatnego parkowania tu nie ma.",
    },
  ],

  geo: { lat: 49.98, lng: 20.42 },
};
