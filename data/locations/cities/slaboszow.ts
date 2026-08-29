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
 * SŁABOSZÓW — gmina wiejska, powiat miechowski. 20 sołectw,
 * 3 293 mieszkańców na 76,8 km², gęstość 44 os./km².
 * Jedna z najmniej ludnych gmin Małopolski.
 *
 * OŚ STRONY: PARADOKS. Gleby klas I–IIIb zajmują tu 78,8% gruntów
 * ornych — to jedna z najżyźniejszych gmin w Polsce. I jednocześnie
 * prognoza GUS mówi o spadku ludności z 3 345 (2022) do 2 534 (2040)
 * i 1 620 (2060), czyli o ponad połowę w niecałe cztery dekady.
 * Najlepsza ziemia i najgłębsza zapaść demograficzna, w jednym miejscu.
 *
 * ⚠️ TON. To musi być napisane z szacunkiem i bez katastrofizmu.
 * Ludzie tam mieszkają i to jest ich dom, a nie studium przypadku.
 * Piszę o tym uczciwie, ale bez straszenia i bez litowania się.
 *
 * Druga oś: GMINA BEZ CENTRUM. Siedziba — Słaboszów — ma 232
 * mieszkańców, a największa wieś, Kalina Wielka, 430. Żadne sołectwo
 * nie przekracza 450 osób.
 *
 * FAKTY UŻYTE I ŹRÓDŁA (diagnoza gminna z czerwca 2025 r.
 * i GUS/polskawliczbach):
 * — GLEBY: klasy I–IIIb to 78,8% gruntów ornych. Użytki rolne
 *   6 534 ha, czyli 85% powierzchni gminy,
 * — PROGNOZA GUS: 3 345 (2022) → 2 534 (2040) → 1 620 (2060),
 *   spadek o 51,6% w 38 lat,
 * — SOŁECTWA (20) z ludnością: Kalina Wielka 430, Słupów 255,
 *   Ilkowice 249, Słaboszów 232, Kropidło 229, Święcice 221,
 *   Nieszków 200, Janowice 198, Buszków 187, Śladów 181,
 *   Rzemiędzice 170, Dziaduszyce 150, Wymysłów 139, Jazdowice 107,
 *   Maciejów 96, Raszówek 74, Rędziny-Borek 73, Zagorzany 71,
 *   Rędziny Zbigalskie 68, Grzymałów 30,
 * — LUDNOŚĆ 3 293 (31.12.2024), powierzchnia 76,8 km²,
 *   gęstość 44 os./km². Spadek o 16,7% w latach 2002–2024,
 * — DEMOGRAFIA 2024: przyrost naturalny −27 (−8,20/1000),
 *   saldo migracji −15, średni wiek 44,4 lat. Struktura 2023:
 *   przedprodukcyjny 16,2%, produkcyjny 55,9%, poprodukcyjny 27,9%,
 * — MIESZKANIA: 1 286 (2022), średnio 89,5 m², nowych w 2022 r. — 3,
 * — INFRASTRUKTURA: wodociąg 87,2% ludności (2023).
 *   KANALIZACJI ZBIORCZEJ NIE MA WCALE; 431 przydomowych
 *   oczyszczalni. Gazyfikacja praktycznie zerowa,
 * — GOSPODARKA: 252 podmioty REGON (2023), w tym 202 osoby fizyczne.
 *   Rolnictwo 21 podmiotów (8,3%), przemysł i budownictwo 63 (25%),
 *   pozostałe 168. Bezrobocie 5,2% (2024).
 *   WYJEŻDŻAJĄCYCH DO PRACY POZA GMINĘ: 167 (2023).
 *   Kierunek produkcji: zboża i chów trzody chlewnej; uzupełniająco
 *   bydło, warzywa, buraki cukrowe,
 * — KOLEJKA WĄSKOTOROWA: zbudowana przez Austriaków w 1916 r.,
 *   zlikwidowana w latach 60. Gmina rozważa ścieżkę rowerową
 *   na dawnym nasypie,
 * — KOLEI NIE MA. Najbliższa stacja: Miechów, linia
 *   Kraków–Miechów–Sędziszów, obsługiwana przez Koleje Małopolskie.
 *   W sąsiedztwie przebiega DW 783,
 * — KGW działają w: Kalinie Wielkiej, Nieszkowie, Janowicach,
 *   Rzemiędzicach i Kropidle,
 * — DNI SŁABOSZOWA: III edycja, 2–3 sierpnia 2025 r., połączona
 *   z I Traktoriadą „Słaboszowskie Spotkanie z Tradycją”,
 * — ZABYTKI w rejestrze: kościół św. Mikołaja w Słaboszowie
 *   i zespół dworsko-parkowy w Święcicach.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — ODLEGŁOŚCI I CZASU DO KRAKOWA W LICZBACH. Nie udało się
 *   zweryfikować w wiarygodnym źródle. Piszę opisowo,
 * — WINNICY ŚW. URSZULI. Wymieniona tylko przez jedno źródło jako
 *   „jedyna w powiecie prywatna winnica”, bez potwierdzenia,
 *   że wciąż działa. Nie używam,
 * — DWORÓW W RZEMIĘDZICACH, JANOWICACH I KALINIE WIELKIEJ.
 *   Wzmiankowane, ale ich stan i status prawny niepotwierdzone,
 * — NAZW PRACODAWCÓW. Nie zidentyfikowano żadnego dużego,
 * — DAT ZAŁOŻENIA KÓŁ GOSPODYŃ ani ich potraw konkursowych,
 * — WPISU NA LISTĘ PRODUKTÓW TRADYCYJNYCH. Brak.
 *
 * PUŁAPKI:
 * — NIE MYLIĆ ZE SŁOMNIKAMI (powiat krakowski) ani
 *   ze Słaboszowicami czy Słaboszewkiem,
 * — GAZYFIKACJA: diagnoza gminna mówi 0%, GUS 0,47%. Piszę
 *   „praktycznie brak sieci gazowej”,
 * — KANALIZACJI ZBIORCZEJ NIE MA W OGÓLE — nie pisać o „rozwiniętej
 *   infrastrukturze”,
 * — SIEDZIBA NIE JEST NAJWIĘKSZĄ WSIĄ. Słaboszów ma 232 mieszkańców,
 *   Kalina Wielka 430. Nie pisać o Słaboszowie jako „głównym
 *   ośrodku”,
 * — DANE Z PORTRETU GUS 2019 (3 522 os., 77 km²) są stare.
 */

export const SLABOSZOW: CityContent = {
  slug: "slaboszow",
  h1: "Thermomix Słaboszów – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Słaboszów — prezentacja i cena",
  seoDescription:
    "Thermomix w gminie Słaboszów: bezpłatna prezentacja TM7 u Ciebie w kuchni — Kalina Wielka, Słupów, Ilkowice, Słaboszów. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Słaboszów — zobacz TM7 na żywo u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w gminie Słaboszów. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do gminy Słaboszów przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje. To niewielka gmina i dojeżdżam do każdego z dwudziestu sołectw, bez dopłaty za odległość.",

  highlights: highlightyStandardowe("wszystkie dwadzieścia sołectw, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption:
      "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w gminie Słaboszów – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem, ze składnikami i z naczyniami, gdyby były potrzebne. Ty nie kupujesz nic i niczego nie przygotowujesz — wystarczy wolny kawałek blatu, gniazdko i godzina spokoju. Tak samo w Słaboszowie, jak w Kalinie Wielkiej, Słupowie czy Ilkowicach.",
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
      heading: "Najlepsza ziemia i najmniej ludzi",
      paragraphs: [
        "W gminie Słaboszów gleby najwyższych klas — od pierwszej do trzeciej b — zajmują blisko osiemdziesiąt procent gruntów ornych. To jest ziemia, o jakiej rolnicy w większości Polski mogą tylko czytać. Użytki rolne to osiemdziesiąt pięć procent powierzchni gminy.",
        "I w tej samej gminie mieszka trzy tysiące dwieście dziewięćdziesiąt trzy osoby na siedemdziesięciu siedmiu kilometrach kwadratowych, czyli czterdzieści cztery osoby na kilometr. Prognoza Głównego Urzędu Statystycznego mówi, że do dwa tysiące czterdziestego roku zostanie ich dwa i pół tysiąca, a do dwa tysiące sześćdziesiątego — nieco ponad półtora tysiąca.",
        "Zestawiam te dwie rzeczy obok siebie, bo tak właśnie wyglądają: najlepsza ziemia w kraju i jedna z najgłębszych zapaści demograficznych w Małopolsce. Nie mam zamiaru z tego robić morału ani nikogo pocieszać. Chcę tylko powiedzieć wprost, że wiem, dokąd jadę, i że nie przyjeżdżam tu z folderem, w którym wszyscy są młodzi i uśmiechnięci.",
        "Bo to też jest prawda o tej gminie: średni wiek mieszkańca to czterdzieści cztery lata, a niemal co trzeci jest w wieku poprodukcyjnym. Kanalizacji zbiorczej nie ma tu w ogóle — są czterysta trzydzieści jeden przydomowych oczyszczalni. Gazu sieciowego praktycznie też nie. Sto sześćdziesiąt siedem osób wyjeżdża do pracy poza gminę.",
        "Jest tu za to coś, czego nie ma w gminach, o których pisze się częściej: dwadzieścia sołectw, z których żadne nie przekracza czterystu pięćdziesięciu osób, i siedziba gminy, która jest dopiero czwartą co do wielkości wsią. Największa jest Kalina Wielka, z czterystoma trzydziestoma mieszkańcami. Najmniejszy Grzymałów ma trzydziestu.",
        "W takim miejscu wszystko robi się u siebie i to nie jest wybór stylu życia, tylko konsekwencja odległości. Ta strona jest o urządzeniu kuchennym, więc powiem, co z tego wynika dla kuchni — i powiem to bez podkręcania.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w gminie Słaboszów?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Powiedz nazwę sołectwa. Jest ich dwadzieścia, wszystkie niewielkie, a niektóre naprawdę małe — Grzymałów liczy trzydzieści osób, Rędziny Zbigalskie sześćdziesiąt osiem. Do każdego dojeżdżam bez dopłaty, ale wolę wiedzieć dokładnie, dokąd jadę. Uwaga też na dwa Rędziny: Rędziny-Borek i Rędziny Zbigalskie to osobne wsie.",
        "Jeśli masz gospodarstwo, powiedz po prostu, o której masz spokojną godzinę. Dopasowuję się do prac polowych, nie odwrotnie. Weekendy są równie normalnym terminem jak wieczory w tygodniu.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w gminie Słaboszów"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Dom, do którego przyjeżdża się na niedzielę",
      paragraphs: [
        "W gminie, w której niemal co trzeci mieszkaniec jest w wieku poprodukcyjnym, wiele domów wygląda podobnie: mieszkają w nich dwie osoby, a dzieci mieszkają gdzie indziej i przyjeżdżają na niedzielę albo na święta. To jest bardzo konkretna sytuacja kuchenna i rzadko się o niej mówi wprost.",
        "Przez większość tygodnia gotuje się dla dwojga i przy takiej skali argument „zaoszczędzisz godzinę dziennie” byłby nieuczciwy — tej godziny tam po prostu nie ma. Zmienia się co innego: kiedy gotowanie dla dwóch osób przestaje się opłacać zachodem, ludzie zaczynają jeść byle jak. Kanapka, coś odgrzanego, coś kupionego w sklepie na rogu, o ile jest sklep na rogu.",
        "Urządzenie, w którym zupa robi się sama, a porcję da się zrobić małą, przesuwa ten próg. Nie oszczędza czasu — sprawia, że ciepły obiad w ogóle powstaje. Naczynie jest jedno, więc zmywanie też przestaje być powodem, żeby nie gotować.",
        "A potem przychodzi niedziela i skala zmienia się z dwóch porcji na dziesięć. I to jest ta druga sytuacja, w której to urządzenie naprawdę pomaga: duży obiad, ciasto, pierogi — bez spędzenia przy tym całego przedpołudnia i bez rozstawiania połowy kuchni. Ciasto wyrabia się samo, farsz miele się bez maszynki, sos gotuje bez pilnowania.",
        "Trzecia rzecz to przetwory. W gminie, gdzie osiemdziesiąt pięć procent powierzchni to pole i prawie każdy ma ogród, jesień oznacza powidła, przeciery, kiszonki i zupy do zamrożenia. To i tak się dzieje — chodzi tylko o to, żeby nie trzeba było przy tym stać i mieszać, żeby nie przywarło.",
        "I uczciwie na koniec: to urządzenie nie odwróci demografii ani nie skróci drogi do lekarza. Zabiera jedną konkretną rzecz — stanie przy garnku. Nic więcej i nic mniej.",
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

  culinary: {
    heading: "Słaboszów i gotowanie — zboże, trzoda i pięć kół gospodyń",
    paragraphs: [
      "Zacznę uczciwie: nie znalazłam żadnego wpisu z gminy Słaboszów na ministerialnej Liście Produktów Tradycyjnych ani udokumentowanej potrawy, którą można by nazwać wyłącznie tutejszą. Mogłabym wpisać w to miejsce coś ogólnie małopolskiego i pewnie nikt by nie sprawdził. Nie zrobię tego.",
      "To, co da się o tej kuchni powiedzieć na pewno, wynika z tego, co się tu uprawia i hoduje. Podstawowy kierunek to zboża i chów trzody chlewnej, uzupełniająco bydło, warzywa i buraki cukrowe. Z takiego gospodarstwa wychodzi kuchnia mączna i wieprzowa: kluski, pierogi, chleb, kasza, mięso przerabiane u siebie.",
      "Podtrzymuje ją pięć kół gospodyń — w Kalinie Wielkiej, Nieszkowie, Janowicach, Rzemiędzicach i Kropidle. To dużo jak na gminę liczącą trzy i pół tysiąca osób: jedno koło na siedemset mieszkańców. W dwa tysiące dwudziestym piątym roku odbyła się trzecia edycja Dni Słaboszowa, połączona z pierwszą Traktoriadą, i to właśnie gospodynie robiły tam poczęstunek.",
      "Co z tego wynika dla urządzenia? Przy kuchni mącznej najwięcej zabiera wyrabianie — ciasta na kluski, na pierogi, na chleb. To jest tu czynność codzienna, nie odświętna, i to właśnie ona najbardziej męczy ręce. Ciasto wyrabia się w naczyniu samo. Farsz miele się i miesza bez maszynki. Kasza gotuje się bez pilnowania i nie przywiera.",
      "Nie zmienia to niczego w smaku i nie ma zmieniać. Zmienia tylko to, ile czasu stoisz przy blacie, zanim zaczniesz gotować — a przy gotowaniu dla dziesięciu osób na niedzielę ta różnica robi się bardzo konkretna.",
    ],
  },

  districtsHeading: "Gdzie w gminie Słaboszów dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich dwudziestu sołectw, bez żadnej dopłaty za odległość: Kaliny Wielkiej, Słupowa, Ilkowic, Słaboszowa, Kropidła, Święcic, Nieszkowa, Janowic, Buszkowa, Śladowa, Rzemiędzic, Dziaduszyc, Wymysłowa, Jazdowic, Maciejowa, Raszówka, Rędzin-Borku, Zagorzan, Rędzin Zbigalskich i Grzymałowa.",
    "Warto wiedzieć, że ta gmina nie ma jednego środka. Siedziba, Słaboszów, liczy dwustu trzydziestu dwóch mieszkańców i jest dopiero czwartą co do wielkości wsią — większe są Kalina Wielka z czterystoma trzydziestoma osobami, Słupów i Ilkowice. Żadne sołectwo nie przekracza czterystu pięćdziesięciu mieszkańców, a najmniejszy Grzymałów ma trzydziestu.",
    "Cała gmina to trzy tysiące dwieście dziewięćdziesiąt trzy osoby na siedemdziesięciu siedmiu kilometrach kwadratowych — jedna z najmniej ludnych w Małopolsce. Osiemdziesiąt pięć procent powierzchni zajmują użytki rolne, a gleby najlepszych klas stanowią blisko osiemdziesiąt procent gruntów ornych. W rejestrze zabytków są kościół świętego Mikołaja w Słaboszowie i zespół dworsko-parkowy w Święcicach.",
    "O dojeździe uczciwie: w gminie Słaboszów nie ma kolei. Najbliższa stacja to Miechów, skąd Koleje Małopolskie dowożą do Krakowa. W sąsiedztwie przebiega droga wojewódzka numer siedemset osiemdziesiąt trzy. Ciekawostka historyczna: przez gminę biegła kiedyś kolejka wąskotorowa, zbudowana przez Austriaków w tysiąc dziewięćset szesnastym roku i zlikwidowana w latach sześćdziesiątych — gmina rozważa poprowadzenie ścieżki rowerowej po jej nasypie.",
  ],
  districts: [
    "Kalina Wielka",
    "Słupów",
    "Ilkowice",
    "Słaboszów",
    "Kropidło",
    "Święcice",
    "Nieszków",
    "Janowice",
    "Buszków",
    "Śladów",
    "Rzemiędzice",
    "Dziaduszyce",
    "Wymysłów",
    "Jazdowice",
    "Maciejów",
    "Raszówek",
    "Rędziny-Borek",
    "Zagorzany",
    "Rędziny Zbigalskie",
    "Grzymałów",
  ],

  nearbyHeading: "Miechów, Racławice i Książ Wielki też są na mojej trasie",
  nearbyParagraphs: [
    "Do Miechowa mam stąd najbliżej i tam też jeździ się na pociąg. Dalej są Racławice, Książ Wielki i Charsznica. Do żadnej z tych gmin nie doliczam kosztu dojazdu.",
    "Gmina leży na północno-wschodnim skraju Małopolski, przy granicy ze świętokrzyskim, więc część spraw załatwia się tu równie często po tamtej stronie granicy. Dla umówienia prezentacji to bez znaczenia.",
  ],
  nearbyTowns: [
    "Miechów",
    "Racławice",
    "Książ Wielki",
    "Charsznica",
    "Kraków",
  ],

  about: blokOMnie("do gminy Słaboszów", "w powiecie miechowskim"),

  faq: [
    {
      question: "Czy to Słaboszów, czy Słomniki?",
      answer:
        "Słaboszów — gmina wiejska w powiecie miechowskim, na północno-wschodnim skraju Małopolski, przy granicy ze świętokrzyskim. Słomniki to zupełnie inna gmina, w powiecie krakowskim, przy trasie z Krakowa do Kielc. Nazwy bywają mylone, więc odpowiadam wprost. Dojeżdżam zresztą do obu.",
    },
    ...faqWspolne("w gminie Słaboszów"),
    {
      question: "Mieszkam w małej wsi na końcu gminy. Naprawdę przyjedziesz?",
      answer:
        "Przyjadę i bez dopłaty — także do Grzymałowa, który liczy trzydziestu mieszkańców, i do Rędzin Zbigalskich. Odległość nie ma dla mnie znaczenia cenowego i nie robię listy miejsc, do których „się nie opłaca”. Proszę tylko o punkt orientacyjny obok adresu, bo zabudowa bywa tu rozproszona.",
    },
    {
      question: "Gotuję dla dwóch osób, dzieci przyjeżdżają na niedzielę. Ma to sens?",
      answer:
        "Ma, ale argument jest inny niż przy domu pełnym dzieci i wolę powiedzieć to wprost. Przy dwóch porcjach nie zaoszczędzisz godziny dziennie, bo tej godziny tam nie ma. Zmienia się co innego: łatwiej ugotować porządnie, kiedy naczynie jest jedno i nie trzeba stać przy garnku. A na niedzielę, kiedy zjeżdża się rodzina, da się zrobić duży obiad bez spędzenia przy nim całego przedpołudnia.",
    },
  ],

  geo: { lat: 50.3311, lng: 20.2508 },
};
