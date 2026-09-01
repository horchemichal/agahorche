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
 * NAWOJOWA — GMINA WIEJSKA w powiecie nowosądeckim.
 * 8 883 mieszkańców (31.12.2024), 50,2 km², gęstość 176 os./km².
 *
 * OŚ STRONY: GMINA, KTÓRA UCZY UPRAWY. Ciągłość instytucji rolniczych
 * w jednym miejscu przez kilkadziesiąt lat plus park dendrologiczny
 * z 1840 r.
 * ⚠️ OŚ OPARTA NA PARKU I SZKOLE, NIE NA PAŁACU JAKO ATRAKCJI —
 * pałac jest zamknięty (patrz niżej).
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — PARK KRAJOBRAZOWY ZAŁOŻONY W 1840 R. przez EDWARDA HR.
 *   STADNICKIEGO i szwagra KAZIMIERZA HR. KRASICKIEGO.
 *   ⚠️ POWIERZCHNIA SPORNA: 14 ha (PTTK) vs 11 ha (inne źródło);
 *   ok. 9 ha część ozdobna w stylu angielskim. NIE PODAWAĆ LICZBY.
 *   Najstarsze okazy (wiązy, lipy, dęby, jesiony) z XVIII w.;
 *   PLATAN, TULIPANOWIEC, DĘBY CZERWONE z lat 40. XIX w.;
 *   ścieżka przyrodnicza z 15 PRZYSTANKAMI,
 * — HISTORIA DWORU: 1440 pierwszy drewniany kościół, 1638 konsekracja.
 *   1580–1590 PIOTR NAWOJOWSKI buduje renesansowy dwór obronny
 *   (zachowane grube mury przyziemia, sklepienia, kamienne portale).
 *   Właściciele: Braniccy (1595) → Lubomirscy (1601) → Massalski
 *   (1763) → HR. FRANCISZEK STADNICKI (1799). 1842 Edward hr.
 *   Stadnicki obejmuje zarząd, rozbudowa neogotycka.
 *   1894–1898 Edward Stadnicki funduje murowany kościół.
 *   Lata 30. XX w. — ADAM HR. STADNICKI (1882–1982) modernizuje
 *   skrzydło zachodnie; sześciokondygnacyjna wieża łączy skrzydła.
 *   1945 nacjonalizacja, rodzina wyjeżdża; od 1982 Państwowe
 *   Technikum Hodowlane,
 * — ⚠️⚠️ PAŁAC JEST DZIŚ ZAMKNIĘTY. 2013 — Andrzej Mańkowski
 *   (spadkobierca Adama Stadnickiego) odzyskuje pałac; 2019 start
 *   remontu, budżet 16,5 mln zł; PRACE WSTRZYMANE OK. MAJA 2022,
 *   PAŁAC NIEDOSTĘPNY DLA ZWIEDZAJĄCYCH.
 *   KATEGORYCZNIE NIE PISAĆ „można zwiedzać” ANI „hotel”,
 * — EDUKACJA: ZESPÓŁ SZKÓŁ PONADPODSTAWOWYCH IM. WINCENTEGO WITOSA
 *   w Nawojowej — powiatowa szkoła zawodowa. Po 1945 r. technikum
 *   rolnicze o specjalności hodowlanej. ⚠️ ROKU ZAŁOŻENIA
 *   NIE POTWIERDZONO — nie podawać daty,
 * — 8 SOŁECTW: Bącza-Kunina, Frycowa, Homrzyska, Nawojowa,
 *   Popardowa, Złotne, Żeleźnikowa Mała, Żeleźnikowa Wielka,
 * — REGON: 858 podmiotów (31.12.2024),
 * — DROGA KRAJOWA NR 75 (Kraków–Brzesko–Nowy Sącz–Krzyżówka–Tylicz–
 *   Muszynka/granica), ok. 133 km,
 * — ⚠️ BRAK STACJI KOLEJOWEJ W GMINIE. Linia 96 przebiega na wschód;
 *   najbliższe przystanki to Kamionka Wielka i Nowy Sącz Jamnica.
 *   NIE MA przystanku „Nawojowa” ani „Frycowa”,
 * — POSTAĆ POWIĄZANA: ADAM HR. STADNICKI to ta sama osoba,
 *   która wydzieliła prywatne rezerwaty w gminie Łabowa
 *   (patrz `labowa.ts`) — ładny link wewnętrzny.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — ⚠️⚠️ AGROPROMOCJI. IMPREZA PRZENIOSŁA SIĘ Z NAWOJOWEJ
 *   DO STAREGO SĄCZA (XXXIV edycja 5–6 września 2026 r.,
 *   Diecezjalne Centrum Pielgrzymowania). Powiat próbował ratować
 *   „Agro Nawojowa” w 2022 i 2023, po czym zrezygnował.
 *   KATEGORYCZNIE NIE PISAĆ, ŻE AGROPROMOCJA ODBYWA SIĘ
 *   W NAWOJOWEJ,
 * — ⚠️ ODDZIAŁU MAŁOPOLSKIEGO OŚRODKA DORADZTWA ROLNICZEGO.
 *   Oficjalna strona kontaktowa MODR NIE WYMIENIA oddziału
 *   w Nawojowej — najbliższy to Nowy Sącz. Stare strony turystyczne
 *   wciąż piszą, że ODR jest w pałacu. STAN NIEPOTWIERDZONY —
 *   NIE PISAĆ, ŻE MODR TU JEST,
 * — BŁ. S. JULII RODZIŃSKIEJ (patronki miejscowej szkoły
 *   podstawowej). ⚠️ JEJ DAT I ZWIĄZKU Z NAWOJOWĄ NIE ZWERYFIKOWANO,
 * — NAZWANYCH DUŻYCH PRACODAWCÓW. Żadnego nie potwierdzono,
 * — WPISU NA LISTĘ PRODUKTÓW TRADYCYJNYCH. Nie znaleziono,
 * — NAZW KÓŁ GOSPODYŃ. Nie potwierdzono,
 * — BEZROBOCIA I WYNAGRODZEŃ. Dane POWIATOWE, nie gminne.
 */

export const NAWOJOWA: CityContent = {
  slug: "nawojowa",
  h1: "Thermomix Nawojowa – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Nawojowa — prezentacja i cena",
  seoDescription:
    "Thermomix w gminie Nawojowa: bezpłatna prezentacja TM7 u Ciebie w kuchni, cena i raty 0,6%. Dojazd do wszystkich sołectw bez dopłat. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Nawojowa — zobacz TM7 na żywo u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w gminie Nawojowa. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do Nawojowej, Frycowej, Żeleźnikowej i pozostałych sołectw gminy przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje.",

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
      heading: "Thermomix w Nawojowej – jak wygląda prezentacja?",
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
      heading: "Wieś, w której od pokoleń uczy się uprawy",
      paragraphs: [
        "W Nawojowej stoi zespół pałacowo-parkowy, a wokół niego jest coś, czego zwykle po dworach nie zostaje: ciągłość zawodowa. Po nacjonalizacji w tysiąc dziewięćset czterdziestym piątym w tych murach ulokowano technikum rolnicze o specjalności hodowlanej, a szkolnictwo rolnicze działa tu do dziś — dziś jako powiatowy zespół szkół imienia Wincentego Witosa.",
        "To rzadka rzecz. Zwykle dwór albo popada w ruinę, albo staje się hotelem. Tutaj przez kilkadziesiąt lat uczono w nim, jak się hoduje i uprawia — a więc, w gruncie rzeczy, skąd bierze się jedzenie.",
        "Najciekawsza jest jednak nie architektura, tylko park. Założyli go w tysiąc osiemset czterdziestym roku Edward hrabia Stadnicki i jego szwagier Kazimierz hrabia Krasicki, w stylu angielskim. Najstarsze drzewa — wiązy, lipy, dęby i jesiony — pochodzą jeszcze z osiemnastego wieku, a z lat czterdziestych dziewiętnastego platan, tulipanowiec i dęby czerwone. Przez park prowadzi ścieżka przyrodnicza z piętnastoma przystankami.",
        "Historia samego dworu sięga znacznie głębiej. W latach tysiąc pięćset osiemdziesiątych Piotr Nawojowski postawił tu renesansowy dwór obronny; z tamtej budowli zachowały się grube mury przyziemia, sklepienia i kamienne portale. Właściciele zmieniali się przez wieki — Braniccy, Lubomirscy, Massalski — aż w tysiąc siedemset dziewięćdziesiątym dziewiątym majątek objęli Stadniccy i zostali tu na półtora wieku.",
        "Ostatni z nich, Adam hrabia Stadnicki, żył sto lat, od tysiąc osiemset osiemdziesiątego drugiego do tysiąc dziewięćset osiemdziesiątego drugiego roku, i był leśnikiem. To on wydzielił ze swoich dóbr prywatne rezerwaty przyrody w sąsiedniej gminie Łabowa — na długo przed tym, zanim państwo zaczęło las chronić.",
        "Muszę tu być uczciwa co do stanu obecnego. W dwa tysiące trzynastym roku pałac odzyskali spadkobiercy, w dwa tysiące dziewiętnastym ruszył remont z budżetem szesnastu i pół miliona złotych, ale prace wstrzymano około maja dwa tysiące dwudziestego drugiego. Pałac jest zamknięty i niedostępny dla zwiedzających. Park pozostaje.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w gminie Nawojowa?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Podaj sołectwo. Gmina ma ich osiem na pięćdziesięciu kilometrach kwadratowych, więc jest zwarta — ale trasa do Homrzysk wygląda inaczej niż do Frycowej.",
        "Do Nowego Sącza jest stąd kilka kilometrów i wielu mieszkańców tam pracuje. Jeśli tak jest u Was, powiedz — wtedy najprościej umówić się na wieczór albo weekend.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w gminie Nawojowa"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Najgęściej zaludniona wieś pod Nowym Sączem",
      paragraphs: [
        "Nawojowa ma sto siedemdziesiąt sześć osób na kilometr kwadratowy — więcej niż większość okolicznych gmin wiejskich. Na pięćdziesięciu kilometrach mieszka blisko dziewięć tysięcy osób, a do Nowego Sącza jedzie się stąd kilka minut drogą krajową.",
        "To znaczy, że gmina jest w praktyce bliskim zapleczem miasta: wielu mieszkańców pracuje w Sączu, ale mieszka we własnym domu, często obok rodziców. Zarejestrowanych firm jest tu ponad osiemset i są to niemal wyłącznie małe działalności.",
        "Najbardziej praktyczna rzecz jest przy takim rytmie prosta. Danie jednogarnkowe wstawia się rano i wychodzi z domu. Gotuje się bez pilnowania, samo się wyłącza i czeka na tego, kto wróci pierwszy. Nie przypala się i nikt nie musi wracać, żeby zamieszać.",
        "Druga to gotowanie z zapasem. Podwójna porcja zupy, sos na kilka dni, pasty do kanapek, ciasto — robione seriami w weekend, w jednym naczyniu. W tygodniu tylko się to odgrzewa.",
        "Trzecia dotyczy tego, kto gotuje. Przepis prowadzi krok po kroku, więc obiad może zrobić nastolatek albo ktokolwiek, kto wraca do domu wcześniej. W rodzinie, w której oboje dorośli dojeżdżają do miasta, to bywa realnym odciążeniem.",
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
    heading: "Nawojowa i gotowanie — gmina, która uczy, skąd bierze się jedzenie",
    paragraphs: [
      "Zacznę uczciwie: nie znalazłam wpisu na ministerialnej Liście Produktów Tradycyjnych przypisanego tej gminie ani nazwy działającego koła gospodyń. Nie będę więc wymyślać Nawojowej kulinarnego dorobku.",
      "Sprostuję też rzecz, która krąży po starszych tekstach. Agropromocja, największa rolnicza impreza regionu, nie odbywa się już w Nawojowej — przeniosła się do Starego Sącza. Powiat próbował utrzymać tu osobne wydarzenie, ale z niego zrezygnował. Nie będę pisać o czymś, czego nie ma.",
      "To, co jest tu prawdziwe i trwałe, to szkolnictwo rolnicze. Po wojnie w pałacu ulokowano technikum hodowlane, a kształcenie zawodowe w tej dziedzinie działa w Nawojowej do dziś. To gmina, w której od pokoleń uczy się, jak się hoduje, uprawia i przetwarza — a to jest przecież początek każdej kuchni.",
      "Sama kuchnia domowa jest tu sądecka i rolnicza: ziemniaki, kapusta, fasola, zupy na kościach, wędliny robione w domu, ciasto drożdżowe, przetwory z ogrodu. Rzecz robiona sezonami i w większych partiach.",
      "Dla urządzenia najciekawsze jest to, co powtarzalne i sezonowe: przetwory, farsze, pasty, ciasto na pierogi, zupy na zapas. Czyli rozdrabnianie, mielenie, wyrabianie i długie mieszanie w cieple. Czego nie zrobi, powiem wprost: nie wyhoduje warzywa i nie zastąpi wprawy. Zabiera tę część roboty, która jest wyłącznie czasem.",
    ],
  },

  districtsHeading: "Do których sołectw gminy Nawojowa dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich ośmiu, bez żadnej dopłaty za odległość. Gmina liczy blisko dziewięć tysięcy mieszkańców na pięćdziesięciu kilometrach kwadratowych i jest jedną z gęściej zaludnionych gmin wiejskich powiatu.",
    "Sołectwa to: Bącza-Kunina, Frycowa, Homrzyska, Nawojowa, Popardowa, Złotne, Żeleźnikowa Mała i Żeleźnikowa Wielka.",
    "Warto zobaczyć park przy zespole pałacowym — założony w tysiąc osiemset czterdziestym roku w stylu angielskim, z drzewami sięgającymi osiemnastego wieku, platanem, tulipanowcem i dębami czerwonymi z lat czterdziestych dziewiętnastego stulecia. Prowadzi przez niego ścieżka przyrodnicza z piętnastoma przystankami. Sam pałac jest natomiast zamknięty — remont wstrzymano kilka lat temu i budynku nie da się zwiedzać.",
    "Dojazd: przez gminę biegnie droga krajowa z Nowego Sącza w stronę Krzyżówki i Tylicza. Stacji kolejowej w gminie nie ma — najbliższe przystanki leżą w sąsiedniej Kamionce Wielkiej i w Nowym Sączu.",
  ],
  districts: [
    "Nawojowa",
    "Frycowa",
    "Żeleźnikowa Wielka",
    "Żeleźnikowa Mała",
    "Bącza-Kunina",
    "Homrzyska",
    "Popardowa i Złotne",
  ],

  nearbyHeading: "Nowy Sącz, Łabowa i Kamionka Wielka też są na mojej trasie",
  nearbyParagraphs: [
    "Do Nowego Sącza jest stąd kilka kilometrów, więc to naturalny kierunek dla większości mieszkańców. Dojeżdżam też do Łabowej, Kamionki Wielkiej, Rytra i Nawojowej — bez doliczania kosztu dojazdu.",
    "Ciekawostka łącząca te dwie gminy: Adam hrabia Stadnicki, ostatni właściciel tutejszego majątku, wydzielił ze swoich dóbr prywatne rezerwaty przyrody w sąsiedniej Łabowej. Ten sam człowiek, dwie różne gminy.",
  ],
  nearbyTowns: [
    "Nowy Sącz",
    "Łabowa",
    "Kamionka Wielka",
    "Rytro",
    "Stary Sącz",
    "Kraków",
  ],

  about: blokOMnie("do gminy Nawojowa", "w powiecie nowosądeckim"),

  faq: [
    {
      question: "Mieszkam w Homrzyskach albo Żeleźnikowej. Dojedziesz?",
      answer:
        "Dojadę i nie doliczę za to ani złotówki. Wszystkie osiem sołectw gminy traktuję tak samo jak samą Nawojową. Przy umawianiu podaj nazwę wsi — to potrzebne wyłącznie do zaplanowania trasy.",
    },
    ...faqWspolne("w gminie Nawojowa"),
    {
      question: "Czy Agropromocja jest jeszcze w Nawojowej?",
      answer:
        "Nie. Ta impreza od kilku lat odbywa się w Starym Sączu, w Diecezjalnym Centrum Pielgrzymowania. Powiat próbował utrzymać w Nawojowej osobne wydarzenie w dwa tysiące dwudziestym drugim i dwudziestym trzecim roku, ale z niego zrezygnował. Piszę o tym, bo w internecie wciąż krąży stara informacja.",
    },
  ],

  geo: { lat: 49.56, lng: 20.7462 },
};
