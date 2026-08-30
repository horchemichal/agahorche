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
 * PODEGRODZIE — GMINA WIEJSKA w powiecie nowosądeckim.
 * 13 640 mieszkańców (31.12.2024), 64,7 km².
 *
 * OŚ STRONY: GRÓD PRZED MIASTEM. Naszacowice jako jedno z trzech
 * plemiennych grodzisk Małopolski, kolebka Lachów Sądeckich
 * i św. Stanisław Papczyński — trzy warstwy tej samej opowieści
 * o pierwszeństwie wobec Sącza.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — GRODZISKO W NASZACOWICACH, wzgórze „Zamczysko” nad Dunajcem.
 *   Osadnictwo od 2. poł. VIII w., cztery główne fazy umocnień
 *   do 2. poł. XI w. Powierzchnia w obrębie obwałowań OK. 15 HA:
 *   człon główny owalny 1,2 ha plus PIĘĆ PODGRODZI. Dendrochronologia:
 *   ostatnia przebudowa wału po 989 albo 1079 r. ODKRYTE W 1863 R.
 *   PRZEZ SZCZĘSNEGO MORAWSKIEGO. Do 10 faz osadniczych.
 *   JEDNO Z TRZECH PLEMIENNYCH GRODZISK MAŁOPOLSKI (obok Krakowa
 *   i Stradowa), dla których udokumentowano funkcjonowanie także
 *   w monarchii piastowskiej. Znaleziska późnoawarskie,
 * — 1273 — pierwsza wzmianka o Podegrodziu jako osadzie rolniczej
 *   „pod grodem”,
 * — ⚠️ ZAŁOŻENIE PARAFII PRZEZ BOLESŁAWA CHROBREGO W 1014 R.
 *   TO TRADYCJA POWTARZANA PRZEZ GMINĘ, BEZ POTWIERDZENIA
 *   ŹRÓDŁOWEGO. Jeśli w ogóle — wyłącznie jako tradycja,
 * — 1257 — Kinga otrzymuje Sądecczyznę; klaryski przejmują m.in.
 *   Brzezną, Gostwicę i Podrzecze,
 * — ŚW. STANISŁAW PAPCZYŃSKI — ur. 18 MAJA 1631 R. W PODEGRODZIU.
 *   Założyciel Zgromadzenia Księży Marianów, PIERWSZEGO POLSKIEGO
 *   MĘSKIEGO ZAKONU. Beatyfikacja 16 września 2007 w Licheniu,
 *   KANONIZACJA 5 CZERWCA 2016 PRZEZ PAPIEŻA FRANCISZKA.
 *   Kaplica-pomnik w miejscu urodzenia,
 * — 1781–1798 — kolonizacja józefińska: niemieccy osadnicy
 *   ewangeliccy w Stadłach,
 * — REGIONALNY ZESPÓŁ „PODEGRODZIE” — ZAŁOŻONY 1937 R.
 *   CZTERY ZŁOTE CIUPAGI w Zakopanem (1968, 1972, 1976, 2008),
 *   Złote Serce Lachowskie (2004), NAGRODA IM. OSKARA KOLBERGA (2008).
 *   Tańce: krzyżak, sztajer, tramelka,
 * — ⚠️ MUZEUM NAZYWA SIĘ „MUZEUM LACHÓW SĄDECKICH IM. ZOFII
 *   I STANISŁAWA CHRZĄSTOWSKICH”, NIE „im. Cieślów”. Oddział Muzeum
 *   Ziemi Sądeckiej, Podegrodzie 248. Zbiory: stroje z przełomu
 *   XIX/XX w., rzemiosło, sztuka ludowa, ARCHIWALNE FOTOGRAFIE
 *   WIEJSKIEGO FOTOGRAFA WOJCIECHA MIGACZA (1874–1944),
 * — 13 SOŁECTW (⚠️ NIE 14): Brzezna, Chochorowice, Długołęka-Świerkla,
 *   Gostwica, Juraszowa, Mokra Wieś, Naszacowice, Olszana, Olszanka,
 *   Podegrodzie, Podrzecze, Rogi, Stadła,
 * — 6 KÓŁ GOSPODYŃ WIEJSKICH: Gostwica, Juraszowa, Naszacowice,
 *   Olszana, Olszanka, Stadła,
 * — LACHOWSKIE LATO — święto gminy, lipiec,
 * — REGON: 1 295 podmiotów (31.12.2024), 1 093 osoby fizyczne;
 *   budownictwo ok. 34% osób fizycznych,
 * — JABŁKA ŁĄCKIE ChOG OBEJMUJĄ TAKŻE GMINĘ PODEGRODZIE.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — TWIERDZENIA, ŻE PODEGRODZKIE WĘDLINY SĄ NA LIŚCIE PRODUKTÓW
 *   TRADYCYJNYCH. Potwierdzona jest tylko POZYTYWNA OPINIA
 *   wojewódzkiej Rady ds. Produktów Tradycyjnych — nie wpis.
 *   NIE PISAĆ „są na Liście”,
 * — NAZWANYCH DUŻYCH PRACODAWCÓW. Żadnego nie potwierdzono,
 * — BEZROBOCIA I WYNAGRODZEŃ. Dane POWIATOWE, nie gminne.
 *
 * PUŁAPKI:
 * — OŚ „LACHY SĄDECKIE” NALEŻY DO TEJ STRONY. Kamionka Wielka
 *   (`kamionka-wielka.ts`) dostaje oś pogranicza i demografii,
 * — BRAK STACJI KOLEJOWEJ W GMINIE — linia 96 biegnie po drugiej
 *   stronie Dunajca.
 */

export const PODEGRODZIE: CityContent = {
  slug: "podegrodzie",
  h1: "Thermomix Podegrodzie – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Podegrodzie — prezentacja i cena",
  seoDescription:
    "Thermomix w gminie Podegrodzie: bezpłatna prezentacja TM7 u Ciebie w kuchni, cena i raty 0%. Dojazd do wszystkich sołectw bez dopłat. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Podegrodzie — zobacz TM7 na żywo u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w gminie Podegrodzie. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do Podegrodzia i wszystkich trzynastu sołectw gminy przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje.",

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
      heading: "Thermomix w Podegrodziu – jak wygląda prezentacja?",
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
      heading: "Zanim powstał Sącz, tu stał gród",
      paragraphs: [
        "Nazwa gminy mówi wszystko: Podegrodzie znaczy „pod grodem”. Gród stał w Naszacowicach, na wzgórzu nazywanym do dziś Zamczyskiem, nad samym Dunajcem. I nie był to byle jaki gród.",
        "W obrębie obwałowań mieściło się około piętnastu hektarów: człon główny miał hektar z niewielkim okładem, a wokół niego było pięć podgrodzi. Osadnictwo zaczęło się w drugiej połowie ósmego wieku, umocnienia przebudowywano czterokrotnie, a ostatnią przebudowę wału datuje się na czasy po dziewięćset osiemdziesiątym dziewiątym albo po tysiąc siedemdziesiątym dziewiątym roku.",
        "Rzecz najważniejsza: to jedno z zaledwie trzech plemiennych grodzisk Małopolski — obok Krakowa i Stradowa — dla których udało się udokumentować, że działały również po włączeniu do monarchii piastowskiej. Znaleziono tu przy tym przedmioty późnoawarskie, czyli ślady handlu przez Karpaty. Odkrył to wszystko w tysiąc osiemset sześćdziesiątym trzecim roku Szczęsny Morawski.",
        "Samo Podegrodzie pojawia się w źródłach w tysiąc dwieście siedemdziesiątym trzecim roku, już jako wieś rolnicza pod grodem. Szesnaście lat wcześniej Kinga dostała Sądecczyznę, a klaryski przejęły tutejsze wsie — Brzezną, Gostwicę, Podrzecze. Miasta powstały później. Gród był pierwszy.",
        "Osiemnastego maja tysiąc sześćset trzydziestego pierwszego roku urodził się tu Stanisław Papczyński, założyciel Zgromadzenia Księży Marianów — pierwszego polskiego męskiego zakonu. Beatyfikowano go w dwa tysiące siódmym, a kanonizował papież Franciszek piątego czerwca dwa tysiące szesnastego roku. W miejscu urodzenia stoi kaplica.",
        "I jeszcze jedna warstwa, ta najżywsza. Podegrodzie uchodzi za kolebkę Lachów Sądeckich, a tutejszy zespół regionalny działa nieprzerwanie od tysiąc dziewięćset trzydziestego siódmego roku. Ma na koncie cztery Złote Ciupagi z Zakopanego i Nagrodę imienia Oskara Kolberga. W Muzeum Lachów Sądeckich imienia Zofii i Stanisława Chrząstowskich można zobaczyć stroje z przełomu wieków i fotografie Wojciecha Migacza — wiejskiego fotografa, który dokumentował tę okolicę od końca dziewiętnastego wieku.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w gminie Podegrodzie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Podaj sołectwo. Gmina ma ich trzynaście, od Brzeznej i Stadeł po Naszacowice i Olszankę, a dla mnie to różnica wyłącznie w planowaniu trasy.",
        "Jeśli jesteś w kole gospodyń, powiedz to od razu. W gminie działa ich sześć i przy takich prezentacjach zwykle gotuje się inaczej — więcej i na większą liczbę osób. Chętnie to uwzględnię.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w gminie Podegrodzie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Sześć kół gospodyń i zespół, który jeździ od 1937 roku",
      paragraphs: [
        "W tej gminie działa sześć kół gospodyń wiejskich i zespół regionalny, który ma na koncie cztery Złote Ciupagi. To znaczy, że gotowanie dla trzydziestu osób nie jest tu wydarzeniem raz na rok, tylko powtarzalną czynnością — przed przeglądem, dożynkami, Lachowskim Latem albo zwyczajnym weselem.",
        "Gotowanie dla grupy rządzi się zupełnie inną logiką niż obiad dla czterech osób. Liczy się powtarzalność i to, żeby wszystko wyszło tak samo za każdym razem: ta sama gęstość farszu, ta sama konsystencja ciasta, ta sama ilość. Przy trzydziestu porcjach oko przestaje wystarczać.",
        "Praktyczne przełożenie jest tu bardzo konkretne. Ciasto na pierogi, farsz, pasztet, krem do tortu — wszystko to robi się w kolejnych partiach według tego samego przepisu, a urządzenie odmierza czas, temperaturę i obroty samo. Partia numer osiem wychodzi identycznie jak pierwsza.",
        "Druga rzecz dotyczy rąk. Wyrabianie ciasta na kilkaset pierogów albo ucieranie masy na kilka blach to godziny fizycznej pracy, po których boli bark. To jest dokładnie ta część, którą maszyna przejmuje w całości.",
        "Trzecia dotyczy codzienności, bo gminy nie tworzą same imprezy. W wielu domach mieszkają tu obok siebie trzy pokolenia, a stół musi pogodzić dziecko, dorosłego i osobę starszą w tej samej godzinie. Danie jednogarnkowe gotuje się wtedy bez pilnowania, samo się wyłącza i czeka na tego, kto siada ostatni.",
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
    heading: "Podegrodzie i gotowanie — sześć kół gospodyń i wędliny domowe",
    paragraphs: [
      "Ta gmina ma coś, czego brakuje wielu innym: sześć działających kół gospodyń wiejskich — w Gostwicy, Juraszowej, Naszacowicach, Olszanie, Olszance i Stadłach. To one, a nie żaden rejestr, trzymają tutejszą kuchnię i wystawiają ją co roku na Lachowskie Lato.",
      "Podegrodzie jest przy tym znane z wędlin domowych: szynki, boczku, kiełbasy wiejskiej, słoniny rosolonej. Muszę tu być precyzyjna, bo krąży to w zbyt mocnej wersji. Zestaw tutejszych produktów mięsnych dostał pozytywną opinię wojewódzkiej rady do spraw produktów tradycyjnych — ale finalnego wpisu na ministerialną Listę Produktów Tradycyjnych nie udało mi się potwierdzić. Piszę więc, że jest opinia, a nie że jest wpis.",
      "Jest natomiast fakt formalny, który potwierdzić się dało. Unijne chronione oznaczenie geograficzne dla jabłek łąckich obejmuje cztery gminy i Podegrodzie jest jedną z nich. Jabłka stąd mają do tej nazwy takie samo prawo jak te z Łącka.",
      "Kuchnia jest tu lachowska: ziemniaki, kapusta, fasola, zupy na kościach, wędliny robione w domu, ciasto drożdżowe. Rzecz robiona sezonami i w większych partiach — bo w gospodarstwie inaczej się nie da.",
      "Dla urządzenia najciekawsze jest to, co powtarzalne. Farsze, pasztety, pasty, ciasto na pierogi, zupy na zapas, przetwory — czyli rozdrabnianie, mielenie, wyrabianie i mieszanie. Czego nie zrobi, powiem wprost: nie uwędzi kiełbasy i nie zastąpi wprawy przy peklowaniu. Zabiera tę część, która jest wyłącznie czasem.",
    ],
  },

  districtsHeading: "Do których sołectw gminy Podegrodzie dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich trzynastu, bez żadnej dopłaty za odległość. Gmina liczy około trzynastu i pół tysiąca mieszkańców na sześćdziesięciu pięciu kilometrach kwadratowych.",
    "Sołectwa to: Brzezna, Chochorowice, Długołęka-Świerkla, Gostwica, Juraszowa, Mokra Wieś, Naszacowice, Olszana, Olszanka, Podegrodzie, Podrzecze, Rogi i Stadła. Samo Podegrodzie liczy nieco ponad dwa tysiące mieszkańców.",
    "Warto wiedzieć o dwóch miejscach. W Naszacowicach, na wzgórzu Zamczysko nad Dunajcem, leży grodzisko z ósmego wieku — piętnaście hektarów, pięć podgrodzi. W Stadłach osiedlili się pod koniec osiemnastego wieku niemieccy koloniści ewangeliccy, sprowadzeni w ramach kolonizacji józefińskiej. Muzeum Lachów Sądeckich mieści się w samym Podegrodziu.",
    "Dojazd: stacji kolejowej w gminie nie ma — linia z Tarnowa do Leluchowa biegnie po drugiej stronie Dunajca. Samochodem jest stąd jakieś jedenaście kilometrów do Nowego Sącza i trzy do Starego Sącza.",
  ],
  districts: [
    "Podegrodzie",
    "Brzezna",
    "Gostwica",
    "Naszacowice",
    "Olszana i Olszanka",
    "Stadła",
    "Długołęka-Świerkla",
    "Podrzecze, Rogi, Juraszowa",
  ],

  nearbyHeading: "Stary Sącz, Nowy Sącz i Łącko też są na mojej trasie",
  nearbyParagraphs: [
    "Do Starego Sącza są stąd trzy kilometry, do Nowego Sącza jedenaście. Dojeżdżam do obu, a także do Łącka, Chełmca i Łososiny Dolnej — bez doliczania kosztu dojazdu.",
    "Przy umawianiu wystarczy, że podasz sołectwo. Resztę zaplanuję sama.",
  ],
  nearbyTowns: [
    "Stary Sącz",
    "Nowy Sącz",
    "Łącko",
    "Chełmiec",
    "Rytro",
    "Kraków",
  ],

  about: blokOMnie("do gminy Podegrodzie", "w powiecie nowosądeckim"),

  faq: [
    {
      question: "Mieszkam w Brzeznej albo Stadłach. Dojedziesz?",
      answer:
        "Dojadę i nie doliczę za to ani złotówki. Wszystkie trzynaście sołectw gminy traktuję tak samo jak samo Podegrodzie. Przy umawianiu podaj nazwę wsi — to potrzebne wyłącznie do zaplanowania trasy.",
    },
    ...faqWspolne("w gminie Podegrodzie"),
    {
      question: "Jestem w kole gospodyń. Da się zrobić prezentację dla większej grupy?",
      answer:
        "Da się i chętnie to robię. Wtedy gotujemy inaczej niż w domu na cztery osoby — pokazuję raczej większe porcje, ciasta i rzeczy robione seriami. Zadzwoń i powiedz, ile osób i gdzie; dopasuję program do tego, co Wasze koło zwykle przygotowuje.",
    },
  ],

  geo: { lat: 49.5761, lng: 20.5889 },
};
