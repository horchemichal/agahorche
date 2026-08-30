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
 * ŁABOWA — GMINA WIEJSKA w powiecie nowosądeckim.
 * 6 034 mieszkańców (31.12.2024), 119,1 km².
 * GĘSTOŚĆ 50 OS./KM² — NAJNIŻSZA W POWIECIE.
 *
 * OŚ STRONY: LAS CHRONIONY, ZANIM ISTNIAŁO PRAWO. Adam hr. Stadnicki
 * i jego prywatne rezerwaty — konkretne daty 1906 i 1924, konkretna
 * postać. Oś biograficzno-instytucjonalna.
 * ⚠️ NIE DAWAĆ OSI KRAJOBRAZOWO-LEŚNEJ jak w Rytrze (`rytro.ts`) —
 * tam las jako tło zamku i turystyki, tu HISTORIA OCHRONY PRZYRODY.
 * ⚠️ NIE DAWAĆ OSI ŁEMKOWSKO-PASTERSKIEJ — należy do Szczawnicy
 * (`szczawnica.ts`, Ruś Szlachtowska). Historia łemkowska wchodzi
 * tu jako SEKCJA, i to w zupełnie innym ujęciu: pustka i ponowne
 * zaludnienie, nie żywa kultura pasterska.
 * ⚠️ NIE ROBIĆ Z KAMIANNEJ OSI PSZCZELARSKIEJ — ta należy do
 * Spytkowic nowotarskich, a przemysłowa do Stróż w gminie Grybów.
 * Kamianna wspomniana wyłącznie faktograficznie.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — ADAM HR. STADNICKI (1882–1982), właściciel Nawojowej, leśnik —
 *   WYDZIELIŁ ZE SWOICH DÓBR PRYWATNE REZERWATY na długo przed
 *   państwową ochroną przyrody,
 * — REZERWAT BARNOWIEC — OCHRONA OD 1906 R., FORMALNY REZERWAT
 *   ŚCISŁY 1924 R. (wtedy 70 ha); po wojnie potwierdzony 1957
 *   (2,26 ha), 1983 (21,61 ha), OD 2003: 44,57 HA.
 *   NAJSTARSZY REZERWAT PRZYRODY W BESKIDZIE SĄDECKIM.
 *   Wschodnie stoki Sokołowskiej Góry (1 028 m). Buk, jodła, jawor,
 *   wiąz; drzewa 110–210 lat, pojedyncze ponad 300 lat;
 *   75 gatunków roślin zielnych,
 * — REZERWATY ŁABOWIEC i UHRYŃ — także 1924 r., także w tej gminie.
 *   ⚠️ ICH POWIERZCHNI NIE POTWIERDZONO — nie podawać liczb,
 * — (Czwarty rezerwat Stadnickiego, BANISKA z 1916 r., leży POZA
 *   gminą — w paśmie Radziejowej. NIE PRZYPISYWAĆ ŁABOWEJ),
 * — REZERWATY CHRONIĄ RESZTKI PUSZCZY KARPACKIEJ: jodły ok.
 *   300-letnie, do 50 m wysokości. Fauna: ryś, wilk, niedźwiedź,
 * — ŚCIEŻKA PRZYRODNICZA IM. HR. ADAMA STADNICKIEGO,
 * — 71% OBSZARU GMINY W POPRADZKIM PARKU KRAJOBRAZOWYM I OTULINIE
 *   (49,9% = 6 943 ha park, 21,2% = 2 520 ha otulina).
 *   ⚠️ STRONA GMINY W JEDNYM MIEJSCU PISZE „PIENIŃSKI PARK
 *   KRAJOBRAZOWY” — TO BŁĄD, chodzi o POPRADZKI,
 * — 13 SOŁECTW: Barnowiec, Czaczów, Kamianna, Kotów, Krzyżówka,
 *   Łabowa, Łabowiec, Łosie, Maciejowa, Nowa Wieś, Roztoka Wielka,
 *   Składziste, Uhryń,
 * — GMINA UTWORZONA 1973 R.; Łabowa lokowana przed 1581 r.
 *   na prawie wołoskim za Branickich,
 * — AKCJA „WISŁA”: 28 kwietnia – 8 sierpnia 1947 r.
 *   Z TERENU DZISIEJSZEJ GMINY ŁABOWA WYSIEDLONO 1 457 OSÓB
 *   Z 294 RODZIN, MIĘDZY 27 CZERWCA A 10 LIPCA 1947 R.
 *   Rozbicie na wsie: NOWA WIEŚ 508, ŁOSIE 267, ROZTOKA WIELKA 255,
 *   ŁABOWA 170. Kierunki: ze stacji Nowy Sącz do Szprotawy, Legnicy,
 *   Chojnowa, Trzcianki.
 *   ⚠️ PISAĆ RZECZOWO, BEZ OCEN POLITYCZNYCH,
 * — ⚠️ LICZBA „5 472 MIESZKAŃCÓW UTRACONYCH W LATACH 1945–1947”
 *   WYGLĄDA NA DOTYCZĄCĄ SZERSZEGO OBSZARU NIŻ DZISIEJSZA GMINA.
 *   NIE UŻYWAĆ,
 * — CMENTARZ ŁEMKOWSKI W ŁABOWEJ: 0,89 ha, ok. 100 m na wschód
 *   od kościoła; założony prawdopodobnie po budowie KAMIENNEJ
 *   CERKWI W 1784 R. Część stara: 17 ZACHOWANYCH NAGROBKÓW,
 *   m.in. grób ks. Łomnickiego (1844–1883); część nowa ok. 30 grobów
 *   od 1917 r. Parafia grekokatolicka obejmowała Łabową, Łabowiec,
 *   Kotów i Uhryń — ok. 2 000 wiernych przed II wojną,
 * — CERKIEW GRECKOKATOLICKA W MACIEJOWEJ Z 1830 R.,
 * — KAMIANNA: ks. dr HENRYK OSTACH (9.12.1924 – 1.05.2011), od 1960
 *   proboszcz w Kamiannej; prezes, potem prezes honorowy Polskiego
 *   Związku Pszczelarskiego; prezydent Kongresu Apimondia 1987
 *   w Warszawie. Kamianna: ośrodek turystyczno-wypoczynkowy gminy,
 *   doroczne konferencje pszczelarskie.
 *   ⚠️ WSPOMNIEĆ FAKTOGRAFICZNIE, NIE BUDOWAĆ NA TYM OSI,
 * — BAZA NOCLEGOWA GMINY: ponad 400 miejsc,
 * — REGON: 566 podmiotów (31.12.2024) — najmniej w okolicy,
 * — DK 75 przez Nawojową, Frycową, Łabową, Nową Wieś, Krzyżówkę.
 *   BRAK KOLEI W GMINIE.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — ⚠️ ARBORETUM. NIE ISTNIEJE / NIE POTWIERDZONO. Nadleśnictwo
 *   Nawojowa ma ścieżki edukacyjne, ale nie arboretum.
 *   NIE PISAĆ O ARBORETUM W ŁABOWEJ,
 * — NAZWANYCH DUŻYCH PRACODAWCÓW. Żadnego nie potwierdzono,
 * — WPISU NA LISTĘ PRODUKTÓW TRADYCYJNYCH przypisanego tej gminie.
 *   ⚠️ „Sądecki miód spadziowy” i „małopolski miód spadziowy”
 *   to produkty REGIONALNE — NIE WOLNO pisać „produkt tradycyjny
 *   gminy Łabowa”,
 * — NAZW KÓŁ GOSPODYŃ. Nie potwierdzono,
 * — BEZROBOCIA I WYNAGRODZEŃ. Dane POWIATOWE, nie gminne.
 */

export const LABOWA: CityContent = {
  slug: "labowa",
  h1: "Thermomix Łabowa – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Łabowa — prezentacja i cena",
  seoDescription:
    "Thermomix w gminie Łabowa: bezpłatna prezentacja TM7 u Ciebie w kuchni, cena i raty 0%. Dojazd do wszystkich sołectw bez dopłat. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Łabowa — zobacz TM7 na żywo u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w gminie Łabowa. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do Łabowej, Kamiannej, Maciejowej i pozostałych sołectw gminy przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje.",

  highlights: highlightyStandardowe("wszystkie trzynaście sołectw, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption:
      "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Łabowej – jak wygląda prezentacja?",
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
      heading: "Las chroniony na osiemnaście lat przed ustawą",
      paragraphs: [
        "W tysiąc dziewięćset szóstym roku Adam hrabia Stadnicki, właściciel Nawojowej i z wykształcenia leśnik, objął ochroną fragment własnego lasu w miejscu, które dziś nazywa się Barnowiec. Zrobił to sam, ze swoich dóbr, bez żadnego przepisu, który by go do tego zmuszał — polskie prawo o ochronie przyrody powstało dopiero po odzyskaniu niepodległości.",
        "W tysiąc dziewięćset dwudziestym czwartym Barnowiec stał się formalnym rezerwatem ścisłym, obejmującym wtedy siedemdziesiąt hektarów. W tym samym roku Stadnicki wydzielił jeszcze dwa: Łabowiec i Uhryń. Wszystkie trzy leżą w tej gminie.",
        "Barnowiec jest dziś najstarszym rezerwatem przyrody w Beskidzie Sądeckim i obejmuje ponad czterdzieści cztery hektary na wschodnich stokach Sokołowskiej Góry. Rosną tam buki, jodły, jawory i wiązy w wieku od stu dziesięciu do dwustu dziesięciu lat, a pojedyncze drzewa przekraczają trzysta. Naliczono siedemdziesiąt pięć gatunków roślin zielnych.",
        "To, co się w tych rezerwatach chroni, to resztki Puszczy Karpackiej — lasu, który kiedyś pokrywał całe te góry. Jodły dochodzą tam do pięćdziesięciu metrów wysokości. Chodzą tędy rysie i wilki, bywa niedźwiedź. Przez gminę prowadzi ścieżka przyrodnicza imienia hrabiego Stadnickiego.",
        "Cała reszta gminy jest w podobnym duchu. Siedemdziesiąt jeden procent jej powierzchni leży w Popradzkim Parku Krajobrazowym albo w jego otulinie, a gęstość zaludnienia wynosi pięćdziesiąt osób na kilometr kwadratowy — najmniej w całym powiecie nowosądeckim. Sześć tysięcy ludzi na stu dziewiętnastu kilometrach.",
        "Powód tej pustki jest jednak nie tylko przyrodniczy i trzeba go powiedzieć. Do tysiąc dziewięćset czterdziestego siódmego roku były to wsie łemkowskie. Między dwudziestym siódmym czerwca a dziesiątym lipca tego roku, w ramach akcji „Wisła”, wysiedlono stąd tysiąc czterysta pięćdziesiąt siedem osób z dwustu dziewięćdziesięciu czterech rodzin — z Nowej Wsi pięćset osiem, z Łosia dwieście sześćdziesiąt siedem, z Roztoki Wielkiej dwieście pięćdziesiąt pięć, z samej Łabowej sto siedemdziesiąt. Wywożono ich ze stacji w Nowym Sączu na Ziemie Zachodnie.",
        "Zostały cerkwie i cmentarze. W Łabowej cmentarz łemkowski zajmuje niecały hektar i ma siedemnaście zachowanych starych nagrobków; w Maciejowej stoi cerkiew greckokatolicka z tysiąc osiemset trzydziestego roku. Wsie zaludniono potem na nowo, innymi ludźmi.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w gminie Łabowa?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Koniecznie podaj sołectwo. Gmina ma trzynaście wsi rozrzuconych na stu dziewiętnastu kilometrach kwadratowych, w dolinach i po stokach — jazda do Uhrynia to zupełnie co innego niż do Krzyżówki. Na cenę to nie wpływa.",
        "Jeśli prowadzisz agroturystykę albo wynajmujesz pokoje, wspomnij o tym od razu. W gminie jest ponad czterysta miejsc noclegowych i wiem, że lato oraz ferie bywają u Was zajęte od rana.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w gminie Łabowa"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Pięćdziesiąt osób na kilometr kwadratowy",
      paragraphs: [
        "Łabowa jest najrzadziej zaludnioną gminą powiatu nowosądeckiego: sześć tysięcy mieszkańców na stu dziewiętnastu kilometrach kwadratowych. Zarejestrowanych podmiotów gospodarczych jest tu pięćset sześćdziesiąt sześć — również najmniej w okolicy.",
        "W praktyce znaczy to, że wsie leżą daleko od siebie, do większego sklepu jedzie się kilkanaście kilometrów, a do pracy — do Nowego Sącza albo do Krynicy. Część mieszkańców żyje z turystyki i wynajmu; miejsc noclegowych jest w gminie ponad czterysta.",
        "Kuchnia musi się do tego dostosować i robi to od pokoleń. Kupuje się rzadziej i większymi partiami, a gotuje z zapasem. Nie robi się „czegoś na dziś” — robi się na kilka dni, bo zjazd po jeden składnik nie ma sensu.",
        "Najbardziej opłaca się w takim układzie gotowanie jednogarnkowe. Zupa albo duszone mięso gotuje się bez pilnowania, samo się wyłącza i czeka. Jedna duża porcja podzielona na pojemniki obsługuje kilka dni bez dodatkowej pracy.",
        "Druga rzecz to zamrażarka, w tej gminie wręcz podstawowa. Zupy, sosy, pasty, ciasto na pierogi, chleb — robione seriami w spokojne popołudnie, w jednym naczyniu. Zimą, kiedy dojazd bywa trudniejszy, to nie wygoda, tylko rozsądek.",
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
    heading: "Łabowa i gotowanie — las, miód i kuchnia zaczęta od nowa",
    paragraphs: [
      "Zacznę uczciwie: nie znalazłam wpisu na ministerialnej Liście Produktów Tradycyjnych przypisanego wprost tej gminie ani nazwy działającego koła gospodyń. Istnieją wprawdzie wpisy dla sądeckiego i małopolskiego miodu spadziowego, ale to produkty regionalne — nie wolno mi ich przypisywać żadnej konkretnej gminie i tego nie zrobię.",
      "Warto natomiast wiedzieć o Kamiannej. Od tysiąc dziewięćset sześćdziesiątego roku był tam proboszczem ksiądz Henryk Ostach, późniejszy prezes Polskiego Związku Pszczelarskiego i prezydent światowego kongresu pszczelarskiego, który odbył się w Warszawie w tysiąc dziewięćset osiemdziesiątym siódmym roku. Kamianna jest do dziś miejscem dorocznych konferencji pszczelarskich.",
      "Poza tym tutejsza kuchnia ma cechę, o której trzeba powiedzieć wprost. Do tysiąc dziewięćset czterdziestego siódmego roku były to wsie łemkowskie; po wysiedleniach zaludniono je od nowa ludźmi z różnych stron. To znaczy, że nie ma tu jednej nieprzerwanej tradycji kulinarnej — jest kilka, przywiezionych i przemieszanych.",
      "Co się gotuje: ziemniaki, kapusta, fasola, kwaśne zupy, grzyby i jagody z lasu, mięso duszone długo. W gminie, gdzie siedemdziesiąt jeden procent powierzchni leży w parku krajobrazowym, zbieractwo naprawdę ma znaczenie, a nie jest tylko folklorem.",
      "Dla urządzenia najciekawsze są dwie rzeczy: dania długie, które trzeba dusić godzinami w niskiej temperaturze, oraz przetwory robione seriami jesienią — grzyby, powidła, dżemy, przeciery. Czego nie zrobi, mówię wprost: nie znajdzie grzyba w lesie i nie zastąpi wprawy. Zabiera tę część, która jest wyłącznie czasem — rozdrabnianie, wyrabianie, mieszanie i stanie przy garnku.",
    ],
  },

  districtsHeading: "Do których sołectw gminy Łabowa dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich trzynastu, bez żadnej dopłaty za odległość. Gmina liczy sześć tysięcy mieszkańców na stu dziewiętnastu kilometrach kwadratowych — to najniższa gęstość zaludnienia w powiecie nowosądeckim.",
    "Sołectwa to: Barnowiec, Czaczów, Kamianna, Kotów, Krzyżówka, Łabowa, Łabowiec, Łosie, Maciejowa, Nowa Wieś, Roztoka Wielka, Składziste i Uhryń.",
    "Siedemdziesiąt jeden procent obszaru gminy leży w Popradzkim Parku Krajobrazowym albo w jego otulinie. Są tu trzy rezerwaty wydzielone jeszcze przez hrabiego Adama Stadnickiego: Barnowiec — najstarszy w Beskidzie Sądeckim, chroniony od tysiąc dziewięćset szóstego roku — oraz Łabowiec i Uhryń, oba z tysiąc dziewięćset dwudziestego czwartego. Chronią resztki Puszczy Karpackiej z jodłami dochodzącymi do pięćdziesięciu metrów.",
    "Z zabytków warto znać cmentarz łemkowski w Łabowej, z siedemnastoma zachowanymi starymi nagrobkami, oraz cerkiew greckokatolicką w Maciejowej z tysiąc osiemset trzydziestego roku. Kamianna jest głównym ośrodkiem turystycznym gminy.",
    "Dojazd: kolei w gminie nie ma. Prowadzi tędy droga krajowa z Nowego Sącza przez Nawojową i Łabową do Krzyżówki i dalej w stronę Krynicy.",
  ],
  districts: [
    "Łabowa",
    "Kamianna",
    "Maciejowa",
    "Nowa Wieś",
    "Krzyżówka",
    "Roztoka Wielka i Łosie",
    "Barnowiec i Uhryń",
    "Czaczów, Kotów, Składziste",
  ],

  nearbyHeading: "Nawojowa, Krynica i Kamionka Wielka też są na mojej trasie",
  nearbyParagraphs: [
    "Gmina graniczy z Nawojową, Krynicą-Zdrojem, Muszyną, Piwniczną-Zdrojem, Kamionką Wielką i gminą wiejską Grybów. Dojeżdżam do wszystkich sąsiadów bez doliczania kosztu dojazdu.",
    "Ciekawostka łącząca tę gminę z sąsiednią: Adam hrabia Stadnicki, który wydzielił tutejsze rezerwaty, był właścicielem majątku w Nawojowej. Ten sam człowiek, dwie różne gminy.",
  ],
  nearbyTowns: [
    "Nawojowa",
    "Krynica-Zdrój",
    "Kamionka Wielka",
    "Muszyna",
    "Nowy Sącz",
    "Kraków",
  ],

  about: blokOMnie("do gminy Łabowa", "w powiecie nowosądeckim"),

  faq: [
    {
      question: "Mieszkam w Uhryniu albo Roztoce Wielkiej. Dojedziesz?",
      answer:
        "Dojadę i nie doliczę za to ani złotówki. Wszystkie trzynaście sołectw gminy traktuję tak samo, niezależnie od tego, jak daleko w dolinę trzeba skręcić. Przy umawianiu podaj nazwę wsi, żebym dobrze rozplanowała trasę.",
    },
    ...faqWspolne("w gminie Łabowa"),
    {
      question: "Dużo zbieramy i robimy przetwory. To urządzenie w tym pomoże?",
      answer:
        "Pomoże i to jest w takiej gminie jak Wasza jego najmocniejsza strona. Przy powidłach, dżemach i przecierach cała robota polega na rozdrabnianiu i długim mieszaniu w cieple — trzeba pilnować godzinami, żeby nie przywarło. Urządzenie robi to bez człowieka i samo się wyłącza. Grzyba w lesie za Was nie znajdzie, ale wszystko, co dzieje się potem w kuchni, przejmuje.",
    },
  ],

  geo: { lat: 49.4984, lng: 20.8861 },
};
