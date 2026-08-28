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
 * DOBRA — gmina przełęczy i lasu. Największa powierzchniowo i najwyżej
 * położona z całego korytarza, z najżywszym życiem ludowym. To są
 * dwie osie tej strony.
 *
 * Sto dziesięć kilometrów kwadratowych, prawie połowa pod lasem,
 * zabudowa na 450–650 m n.p.m., a w Chyszówkach średnio 785 m.
 * Osiem kół gospodyń w jedenastu sołectwach, osiem zespołów, chórów
 * i orkiestr. I Przełęcz Gruszowiec, przez którą przechodzi jedyna
 * porządna droga. Tekst jest pisany dla domu stojącego wysoko, daleko
 * od sklepu, w gminie, gdzie zima naprawdę coś znaczy.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — 10 109 mieszkańców, GUS, stan na 31.12.2024 (gmina podaje 10 106 —
 *   praktycznie zgodne); wzrost o 8,1% w latach 2002–2024; przyrost
 *   naturalny 2024 +17, saldo migracji +1 — jedyne dodatnie w trójce,
 * — 11 sołectw, NSP 2021: Dobra 3 217, Jurków 1 249, Skrzydlna 1 086,
 *   Wilczyce 722, Chyszówki 685, Półrzeczki 610, Stróża 589,
 *   Porąbka 541, Przenosza 511, Gruszowiec 459, Wola Skrzydlańska 366,
 * — powierzchnia 109,8 km², gęstość 92 os./km², lesistość 46,8%
 *   (GUS 2019); średnia wysokość gminy 507 m n.p.m., zabudowa
 *   450–650 m, Chyszówki średnio 785 m,
 * — szczyty: Mogielica 1 170–1 171 m (najwyższy w Beskidzie Wyspowym,
 *   na styku gmin), Ćwilin (1 060 m wg gminy, 1 072 m wg Korony
 *   Beskidu Wyspowego), Jasień 1 062 m, Śnieżnica ok. 1 006 m,
 * — wieża widokowa na Mogielicy — ok. 25 m, zbudowana w 2008 r.
 *   we współpracy gmin Dobra, Kamienica i Słopnice,
 * — drewniany kościół św. Apostołów Szymona i Judy Tadeusza w Dobrej:
 *   po pożarze poprzedniego w 1678 r., konsekrowany 1684, polichromia
 *   z 1760 r.; w rejestrze zabytków i na Szlaku Architektury Drewnianej;
 *   przy kościele muzeum parafialne,
 * — Skrzydlna: osadnictwo od XIII w., siedziba powiatu 1850–1862,
 *   kościół św. Mikołaja z XVI-wiecznym kamiennym prezbiterium,
 * — Chyszówki: osadnictwo XVI-wieczne, tradycja wołoska (nazwa od
 *   „chyży” — szałasu pasterskiego); 23.11.1914 potyczka legionistów
 *   na przełęczy dziś nazwanej Przełęczą Rydza-Śmigłego,
 * — Dobra: pierwsza wzmianka 1361; w XVIII w. właścicielem był
 *   Stanisław Małachowski, marszałek Sejmu Czteroletniego,
 * — grupy etnograficzne: Zagórzanie i Lachy, w rejonie Skrzydlnej
 *   Lachy Szczyrzyckie,
 * — 8 Kół Gospodyń Wiejskich: Dobra, Gruszowiec, Porąbka, Przenosza,
 *   Skrzydlna, Stróża, Wilczyce, Wola Skrzydlańska,
 * — zespół „Jurkowianie” założony w 1966 r. przez członkinie
 *   miejscowego KGW; repertuar w gwarze zagórzańskiej; od 1971 r.
 *   regularne przeglądy,
 * — imprezy cykliczne: Konkurs Palm Wielkanocnych, Konkurs na
 *   Śmiguśnioka Roku, Wielka Majówka na Ćwilinie, Festiwal Kultury
 *   Beskidu Wyspowego „Beskidzkie Rytmy i Smaki”, Dożynki Gminne,
 *   Rodzinne Kolędowanie,
 * — DK28 przecina gminę: Tymbark → Dobra → Gruszowiec → Mszana Dolna;
 *   odcinek Limanowa–Mszana Dolna 31 km / ok. 32 min,
 * — stacje kolejowe Skrzydlna i Dobra koło Limanowej na linii 104;
 *   ruch pasażerski obecnie zawieszony; nowy przystanek Stróża koło
 *   Dobrej na budowanej linii 622, oddanie do połowy 2029 r.,
 * — 27.12.2019 — utrudnienia na DK28 w Gruszowcu: ciężarówki nie mogły
 *   pokonać ośnieżonego podjazdu, ruch wahadłowy (limanowa.in).
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — osuwiska na DK28 w Kasinie Wielkiej, przez które w latach 2023–2024
 *   droga Limanowa–Mszana Dolna była zamknięta, a objazd prowadził
 *   przez sołectwa gminy Dobra. To fakt dobrze udokumentowany, ale
 *   region jest osuwiskowy, a dom to dla klientki inwestycja życia.
 *   Sugerowanie zagrożenia byłoby wprost przeciwskuteczne. Zimę
 *   opisuję przez konkret z Gruszowca, bez słowa „osuwisko”,
 * — powodzi z 2010 r. i wydarzeń z Kłodnego — to sąsiednia gmina
 *   i cudza trauma,
 * — stacji narciarskiej. W granicach gminy Dobra JEJ NIE MA. Śnieżnica
 *   i Kasina Ski leżą w Kasinie Wielkiej, gmina Mszana Dolna, 8 km stąd.
 *   Nie wolno napisać „u nas są narty”,
 * — bezrobocia w powiecie i poziomu wynagrodzeń,
 * — obietnicy powrotu pociągów z datą,
 * — emigracji zarobkowej — brak danych,
 * — wysokości Ćwilina w metrach: źródła podają 1 060 i 1 072.
 *
 * PUŁAPKA NR 1: Mogielica leży na styku gmin Dobra, Słopnice i Jurków
 * — nie „w gminie Dobra”. Piszę o wieży, którą trzy gminy postawiły
 * wspólnie, i to jest prawda ze źródła.
 *
 * PUŁAPKA NR 2: nie mylić tej Dobrej z gminą Dobra w zachodniopomorskim
 * ani w wielkopolskim. W sieci łatwo trafić na cudze dane.
 */
export const DOBRA: CityContent = {
  slug: "dobra",
  h1: "Thermomix Dobra – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Dobra — prezentacja i cena",
  seoDescription:
    "Thermomix w gminie Dobra: bezpłatna prezentacja TM7 u Ciebie w kuchni — Jurków, Skrzydlna, Chyszówki, Półrzeczki i pozostałe sołectwa. Tel. 517 185 691.",
  ogTitle: "Thermomix Dobra — zobacz TM7 na żywo u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w gminie Dobra. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do gminy Dobra przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje. Dojeżdżam do wszystkich jedenastu sołectw, także tych położonych najwyżej.",

  highlights: highlightyStandardowe("cała gmina Dobra, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption:
      "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Dobrej – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem, ze składnikami i z naczyniami, gdyby były potrzebne. Ty nie kupujesz nic i niczego nie przygotowujesz — wystarczy wolny kawałek blatu, gniazdko i godzina spokoju. Tak samo w domu przy głównej drodze w Dobrej, jak w Chyszówkach pod samą przełęczą.",
        "Potem gotujemy. Coś na obiad, coś słodkiego i — jeśli chcesz — coś z tego, co akurat masz w lodówce. To ostatnie jest najlepszym testem, bo pokazuje, czy urządzenie pasuje do jedzenia, które i tak u Was powstaje, a nie do przepisu dobranego pod pokaz.",
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
      heading: "Gmina, w której mieszka się wysoko i daleko od sklepu",
      paragraphs: [
        "Dobra jest największa w całym tym korytarzu — sto dziesięć kilometrów kwadratowych, prawie połowa pod lasem, jedenaście sołectw rozrzuconych po dolinach i grzbietach. Zabudowa stoi na wysokości od czterystu pięćdziesięciu do sześciuset pięćdziesięciu metrów, a Chyszówki średnio na siedmiuset osiemdziesięciu. To już nie jest podgórze, to góry.",
        "Praktyczna konsekwencja jest taka, że zakupy robi się rzadko i duże. Do sklepu z prawdziwego zdarzenia bywa kwadrans jazdy, a od listopada do marca ten kwadrans potrafi się wydłużyć. O Gruszowcu, przez który przechodzi krajowa dwudziestka ósma, pisano nawet w lokalnych mediach: przy ośnieżonej jezdni ciężarówki nie były w stanie pokonać podjazdu i ruch szedł wahadłowo. Kto tu mieszka, ten planuje spiżarnię, a nie codzienne wypady.",
        "Druga rzecz to sady i hodowla. Mimo tej wysokości i tego lasu na nasłonecznionych stokach rosną jabłonie, grusze i śliwy, a w gospodarstwach jest bydło, trzoda i drób. Bardzo dużo tego, co ląduje tu na stole, powstaje kilkaset metrów od stołu.",
        "Trzecia — i to jest w Dobrej naprawdę wyjątkowe — życie ludowe. Osiem kół gospodyń w jedenastu sołectwach. Zespół „Jurkowianie” założyły w 1966 roku same panie z koła w Jurkowie i śpiewają w gwarze zagórzańskiej do dziś. Do tego chóry, orkiestra dęta, kameralna orkiestra i konkurs na Śmiguśnioka Roku, którego nie ma nigdzie indziej. Kobiety w tej gminie od pokoleń gotują razem i pokazują sobie nawzajem, co ugotowały.",
        "Dla kuchni wnioski są dwa. Pierwszy: gotuje się tu z zapasu i z tego, co jest w domu, bo tak wymusza geografia. Drugi: umiejętności nikomu tu brakuje najmniej ze wszystkiego.",
        "Dlatego mówię wprost, czego Thermomix nie robi: nie ugotuje za Was i nie nauczy niczego, czego babcia nie umiała lepiej. Zabiera dwie konkretne rzeczy. Konieczność stania obok i pilnowania — zupa może się gotować, kiedy Ty jesteś przy zwierzętach albo przy dzieciach, i sama się wyłączy. I żmudne czynności, przez które odkłada się na później: siekanie, tarcie, ucieranie, przecieranie owoców przez sito.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w gminie Dobra?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Powiedz koniecznie, w którym sołectwie mieszkasz — a jeśli to możliwe, też jak trafić na miejsce. W tej gminie różnica między Skrzydlną a Półrzeczkami to nie tylko kilometry, ale i kilkaset metrów wysokości i zupełnie inny podjazd. Od tego zależy, ile czasu rezerwuję i o której realnie jestem u Ciebie.",
        "Zimą proszę o jeszcze jedną rzecz: krótką informację, w jakim stanie jest droga pod dom. Nie chodzi o nic więcej niż o to, żebym wiedziała, czy podjadę pod same drzwi, czy zostawiam samochód niżej i idę kawałek. Wolę wiedzieć wcześniej, niż dzwonić z zaspy.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w gminie Dobra"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix w domu, w którym gotuje się z zapasu",
      paragraphs: [
        "W gminie, gdzie do sklepu jest kwadrans, kuchnia działa inaczej niż w mieście. W spiżarni stoją słoiki, w zamrażarce leży to, co obrodziło, a pytanie nie brzmi „co dziś kupimy”, tylko „co da się z tego zrobić”. To zupełnie inny sposób planowania i inne wymagania wobec sprzętu.",
        "Praktyczne bywa tu przede wszystkim gotowanie na zapas. Większy garnek zupy albo dania jednogarnkowego, rozłożony na pojemniki, wystarcza na kilka dni. Wszystko dzieje się w jednym naczyniu, więc sprzątanie po tym trwa moment, a urządzenie samo pilnuje czasu i wyłącza się w odpowiednim momencie.",
        "Druga rzecz to podstawy, po które inaczej trzeba by zjechać z góry: chleb, bułki, ciasto na pierogi, pasty kanapkowe, sosy, mleka roślinne. I przetwory — musy, powidła, soki, przeciery — bo przy tutejszych sadach wrzesień to i tak miesiąc słoików. Przecieranie owoców przez sito jest jedną z tych czynności, których nikt nie lubi i które akurat da się zdjąć z głowy.",
        "Rodzicom najmłodszych dzieci przydaje się to, że da się ugotować i zmiksować bez przelewania gorących rzeczy. Starsze dzieci często same zaczynają gotować, bo przepis prowadzi krok po kroku — a w gminie, gdzie autobus szkolny wyznacza cały dzień, samodzielny podwieczorek bywa realną pomocą, nie ciekawostką.",
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

  districtsHeading: "Gdzie w gminie Dobra dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich jedenastu sołectw i bez żadnej dopłaty za odległość: do Dobrej, Jurkowa, Skrzydlnej, Wilczyc, Chyszówek, Półrzeczek, Stróży, Porąbki, Przenoszy, Gruszowca i Woli Skrzydlańskiej.",
    "Gmina dzieli się w praktyce na dwie części. Północna — Skrzydlna, Wola Skrzydlańska, Porąbka, Przenosza — leży niżej i ciąży w stronę Dobczyc i Krakowa; Skrzydlna była zresztą przez dwanaście lat w połowie dziewiętnastego wieku siedzibą powiatu. Południowa i wschodnia — Chyszówki, Półrzeczki, Jurków — to już wysokie góry, wąskie drogi i długie podjazdy. Do jednych i drugich jadę tak samo chętnie, tylko innym dniem.",
    "Przez środek biegnie krajowa dwudziestka ósma z Przełęczą Gruszowiec, między Śnieżnicą a Ćwilinem. To jedyna porządna droga w tej okolicy i wszystko się przez nią przetacza — a zimą potrafi być wąskim gardłem. Dlatego przy umawianiu zostawiam sobie zapas czasu i wolę uprzedzić, niż spóźnić się bez słowa.",
    "Jedna uwaga, żeby nie było nieporozumienia: stacja narciarska Śnieżnica leży w Kasinie Wielkiej, czyli już w gminie Mszana Dolna — osiem kilometrów stąd. Za to wieża widokowa na Mogielicy, najwyższym szczycie Beskidu Wyspowego, powstała w 2008 roku ze wspólnej inicjatywy trzech gmin: Dobrej, Kamienicy i Słopnic.",
  ],
  districts: [
    "Dobra",
    "Jurków",
    "Skrzydlna",
    "Wilczyce",
    "Chyszówki",
    "Półrzeczki",
    "Stróża",
    "Porąbka",
    "Przenosza",
    "Gruszowiec",
    "Wola Skrzydlańska",
  ],

  nearbyHeading: "Tymbark, Mszana Dolna i Limanowa też są na mojej trasie",
  nearbyParagraphs: [
    "Dobra leży dokładnie w połowie drogi między Limanową a Mszaną Dolną i do obu mam stąd kilkanaście minut. Do Tymbarku jest jeszcze bliżej, do Jodłownika i Słopnic niewiele dalej. Do żadnej z tych gmin nie doliczam dojazdu.",
    "Jeśli umawiasz się razem z koleżankami z koła gospodyń albo z sąsiedniej wsi, powiedz o tym od razu. W tej gminie działa osiem kół i spotkania grupowe są tu najzupełniej normalne — potrzebuję tylko wiedzieć, ile osób będzie i na jakim blacie pracujemy.",
  ],
  nearbyTowns: [
    "Tymbark",
    "Mszana Dolna",
    "Limanowa",
    "Jodłownik",
    "Słopnice",
    "Kamienica",
    "Bochnia",
    "Kraków",
  ],

  about: blokOMnie("do Dobrej", "w powiecie limanowskim"),

  faq: [
    {
      question: "Mieszkam wysoko, droga pod dom jest kiepska. Dojedziesz?",
      answer:
        "Dojeżdżam do wszystkich jedenastu sołectw, łącznie z Chyszówkami i Półrzeczkami. Powiedz tylko przy umawianiu, jak wygląda dojazd i czy zimą da się podjechać pod dom — jeśli nie, zostawiam samochód niżej i idę kawałek. To nie jest problem, o ile wiem o tym wcześniej.",
    },
    ...faqWspolne("w gminie Dobra"),
    {
      question: "Czy przyjedziesz na spotkanie koła gospodyń?",
      answer:
        "Tak i w tej gminie robię tak często — kół jest tu osiem, po jednym w większości sołectw. Powiedz przy umawianiu, ile osób będzie i gdzie się spotykacie, żebym dobrała przepisy, wzięła więcej składników i wiedziała, na jakim blacie pracujemy.",
    },
    {
      question: "Robię dużo przetworów. Czy to naprawdę pomaga?",
      answer:
        "Przy przetworach różnica jest największa i mówię to bez owijania. Musy, powidła, soki i przeciery robi się partiami, bez stania nad garnkiem i bez przecierania przez sito. Jeśli chcesz, na prezentacji zrobimy coś dokładnie z tego, co masz w domu — to lepszy sprawdzian niż przepis dobrany pod pokaz.",
    },
    {
      question: "Zimą trudno tu o wolny wieczór. Czy da się umówić w weekend?",
      answer:
        "Tak, sobotnie przedpołudnia to jeden z najczęściej wybieranych terminów w tej gminie. Umawiam się też w niedzielne popołudnia, jeśli to Wam pasuje bardziej — powiedz przy ustalaniu, co jest wygodniejsze.",
    },
  ],

  geo: { lat: 49.718056, lng: 20.251111 },
};
