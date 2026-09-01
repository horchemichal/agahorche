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
 * MOSZCZENICA — GMINA WIEJSKA w powiecie gorlickim.
 * 4 897 mieszkańców (31.12.2024), 37,6 km², 304 podmioty REGON
 * — najmniej w powiecie. ⭐ TYLKO DWA SOŁECTWA: MOSZCZENICA
 * I STASZKÓWKA. Ok. 4,5% ludności powiatu. Siedziba ok. 9 km
 * na północny zachód od Gorlic.
 *
 * OŚ STRONY: DWIE WSIE, JEDEN BISKUP, CZTERY CMENTARZE.
 * Mała gmina, z której wychodzi się daleko.
 * ⚠️ NIE FORMUŁOWAĆ SUPERLATYWU „najmniejsza pod względem liczby
 * sołectw gmina w Małopolsce” — NIE POTWIERDZONO.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — ⭐ AKT LOKACYJNY 23 CZERWCA 1348 R. — Kazimierz Wielki zezwolił
 *   na założenie wsi NA 80 ŁANACH nad rzeką „Moszczenycza”.
 *   ZASADŹCA: JAN HERBART,
 * — Pierwszy pleban wzmiankowany 1513 (Sigismundus); parafia powstała
 *   prawdopodobnie w 2. poł. XIV w.,
 * — CZTERY KOLEJNE KOŚCIOŁY: I drewniany po 1348 (św. Szymona i Judy
 *   Apostołów, wzmiankowany 1568) → II drewniany, konsekrowany 1666
 *   (Trójcy Świętej) → III ukończony 1826, konsekrowany 6 LIPCA
 *   1850 R., wezwanie Matki Bożej Szkaplerznej → IV obecny: budowa
 *   od 23.04.1984, kamień węgielny 20.07.1986, KONSEKRACJA
 *   14 LIPCA 1996 R.,
 * — ⭐ BP LEON WAŁĘGA (1859–1933) — URODZONY W MOSZCZENICY
 *   W RODZINIE CHŁOPSKIEJ, BISKUP TARNOWSKI 1901–1932 (nominacja
 *   cesarza Franciszka Józefa, zatwierdzenie przez Leona XIII),
 *   zmarł 1933 w klasztorze redemptorystów w Tuchowie. Pośmiertnie
 *   odznaczony przez prez. Mościckiego Orderem Polonia Restituta.
 *   W Moszczenicy: DOM MŁODZIEŻY JEGO IMIENIA (nadany za życia)
 *   oraz PŁASKORZEŹBA NA MURZE STAREGO KOŚCIOŁA odsłonięta
 *   w 100. rocznicę urodzin. Popiersie dłuta Stanisława Bracha
 *   przekazano do Tuchowa.
 *   ⚠️ TYTUŁOWANY BYWA „ARCYBISKUPEM” — to tytuł osobisty,
 *   URZĄD TO BISKUP TARNOWSKI. Nie pisać „arcybiskup tarnowski”,
 * — ⭐ STASZKÓWKA — CZTERY CMENTARZE WOJENNE (nr 116, 117, 118, 119).
 *   CMENTARZ NR 118 to najbardziej monumentalny w okolicy: pomnik
 *   projektu HERMANNA KURTA HOSAEUSA, nagrobki projektu ANTONA
 *   MÜLLERA; cztery kamienne pylony z krzyżami. Pochowani:
 *   439 ŻOŁNIERZY NIEMIECKICH, 281 AUSTRO-WĘGIERSKICH,
 *   43 ROSYJSKICH = 763.
 *   ⭐ POWIATOWE OBCHODY 110. ROCZNICY BITWY GORLICKIEJ (2025)
 *   ODBYŁY SIĘ WŁAŚNIE TU, NIE W GORLICACH,
 * — DOŻYNKI GMINNE — edycja 2026: 23 SIERPNIA; korowód,
 *   stroje regionalne,
 * — KGW STASZKÓWKA startowało w konkursie „Wypiek Regionalny Ziemi
 *   Gorlickiej” podczas Agro Gorlice,
 * — KOLEJ: STACJA MOSZCZENICA MAŁOPOLSKA na linii 108.
 *   DW 977 Tarnów–Tuchów–Gromnik–Moszczenica–Gorlice–Konieczna
 *   (granica ze Słowacją),
 * — SĄSIEDZI: Biecz, Ciężkowice, Gorlice, Łużna,
 *   Rzepiennik Strzyżewski.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — NAZWANYCH DUŻYCH PRACODAWCÓW. Żadnego nie potwierdzono.
 *   304 podmioty REGON to najmniej w powiecie,
 * — WPISU NA LISTĘ PRODUKTÓW TRADYCYJNYCH. Nie potwierdzono,
 * — BEZROBOCIA I WYNAGRODZEŃ. Dane POWIATOWE (6,3%, 6 707,16 zł),
 * — SUPERLATYWU O LICZBIE SOŁECTW. Nie zweryfikowany.
 *
 * PUŁAPKI:
 * — ⚠️ MOSZCZENICA to nazwa spotykana w kilku województwach
 *   (m.in. łódzkie, podkarpackie). Stąd „Moszczenica Małopolska”
 *   w nazwie stacji kolejowej.
 */

export const MOSZCZENICA: CityContent = {
  slug: "moszczenica",
  h1: "Thermomix Moszczenica – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Moszczenica — cena i prezentacja",
  seoDescription:
    "Thermomix w gminie Moszczenica pod Gorlicami: bezpłatna prezentacja TM7 u Ciebie w kuchni, cena i raty 0%. Dojazd bez dopłat. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Moszczenica — zobacz TM7 u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w gminie Moszczenica. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do Moszczenicy i Staszkówki przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje.",

  highlights: highlightyStandardowe("cała gmina, obie wsie, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption:
      "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Moszczenicy – jak wygląda prezentacja?",
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
      heading: "Dwie wsie, z których wyszedł biskup diecezji tarnowskiej",
      paragraphs: [
        "Moszczenica jest najprostszą administracyjnie gminą w powiecie: dwa sołectwa i koniec. Moszczenica i Staszkówka, cztery tysiące dziewięćset osób na trzydziestu ośmiu kilometrach kwadratowych, trzysta cztery zarejestrowane firmy — najmniej w całym powiecie gorlickim.",
        "Historia zaczyna się od konkretnej daty. Dwudziestego trzeciego czerwca tysiąc trzysta czterdziestego ósmego roku Kazimierz Wielki zezwolił na założenie wsi na osiemdziesięciu łanach nad rzeką zapisaną w dokumencie jako Moszczenycza. Zasadźcą był Jan Herbart.",
        "Kościołów było tu potem cztery, jeden po drugim: pierwszy drewniany po lokacji, drugi konsekrowany w tysiąc sześćset sześćdziesiątym szóstym, trzeci w tysiąc osiemset pięćdziesiątym, a obecny w tysiąc dziewięćset dziewięćdziesiątym szóstym. Sześć i pół wieku ciągłości w jednym miejscu.",
        "Z tej wsi, z rodziny chłopskiej, wyszedł Leon Wałęga — biskup tarnowski w latach tysiąc dziewięćset pierwszym–trzydziestym drugim, czyli przez trzydzieści jeden lat, w jednej z największych diecezji w Polsce. Nominację dostał od cesarza Franciszka Józefa, a zatwierdził ją papież Leon XIII. Zmarł w tysiąc dziewięćset trzydziestym trzecim i został pośmiertnie odznaczony Orderem Polonia Restituta.",
        "W Moszczenicy jest po nim Dom Młodzieży, nazwany tak jeszcze za jego życia, oraz płaskorzeźba na murze starego kościoła, odsłonięta w setną rocznicę urodzin. Bywa tytułowany arcybiskupem — to był tytuł osobisty, urząd nazywał się biskup tarnowski.",
        "W drugiej wsi gminy dzieje się coś zupełnie innego. W Staszkówce są cztery cmentarze wojenne z pierwszej wojny, a jeden z nich, numer sto osiemnaście, jest najbardziej monumentalnym w całej okolicy: pomnik zaprojektował Hermann Kurt Hosaeus, nagrobki Anton Müller, a całość zamykają cztery kamienne pylony z krzyżami. Spoczywa tam siedmiuset sześćdziesięciu trzech żołnierzy — czterystu trzydziestu dziewięciu niemieckich, dwustu osiemdziesięciu jeden austro-węgierskich i czterdziestu trzech rosyjskich.",
        "I szczegół, który mówi o randze tego miejsca więcej niż liczby: powiatowe obchody sto dziesiątej rocznicy bitwy gorlickiej odbyły się w dwa tysiące dwudziestym piątym roku właśnie w Staszkówce, a nie w Gorlicach.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w gminie Moszczenica?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Powiedz tylko, czy chodzi o Moszczenicę, czy o Staszkówkę. Gmina ma dwa sołectwa i trzydzieści osiem kilometrów kwadratowych, więc trasa jest krótka niezależnie od odpowiedzi.",
        "Do Gorlic jest stąd dziewięć kilometrów i wielu mieszkańców tam pracuje. Jeśli tak jest u Was, powiedz — wtedy najprościej umówić się na wieczór albo weekend.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w gminie Moszczenica"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Cztery tysiące dziewięćset osób i jeden wspólny kalendarz",
      paragraphs: [
        "Dwie wsie i cztery tysiące dziewięćset osób to skala, w której gmina ma jeden kalendarz. Dożynki, odpust, rocznica przy cmentarzu w Staszkówce, komunie, wesela — wszyscy wiedzą, co i kiedy się dzieje, i połowa okolicy bierze w tym udział.",
        "Dla kuchni ma to bardzo konkretną konsekwencję, o której rzadko się myśli. W takiej gminie znacznie częściej niż gdzie indziej gotuje się dla gości: dla rodziny, sąsiadów, kolegów z pracy, ludzi po uroczystości. Nie raz na rok, tylko regularnie.",
        "Gotowanie dla dwudziestu osób rządzi się inną logiką niż obiad dla czterech. Liczy się powtarzalność — żeby dziesiąta partia farszu miała tę samą gęstość co pierwsza — i to, żeby dało się część zrobić dzień wcześniej.",
        "Praktycznie oznacza to serie. Ciasto na pierogi, farsz, pasztet, krem do tortu, sałatka — wszystko robione partiami według tego samego przepisu, a urządzenie odmierza czas, temperaturę i obroty samo. To jest ta część, w której oko przestaje wystarczać przy większej ilości.",
        "Druga rzecz dotyczy rąk. Wyrabianie ciasta na kilkaset pierogów albo ucieranie masy na kilka blach to godziny fizycznej pracy — i to jest dokładnie ta robota, którą maszyna przejmuje w całości.",
        "Na co dzień zostaje natomiast rzecz najprostsza: danie jednogarnkowe, które wstawia się rano i wychodzi. Gotuje się bez pilnowania, samo się wyłącza i czeka do wieczora.",
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
    heading: "Moszczenica i gotowanie — dożynki i konkurs na wypiek",
    paragraphs: [
      "Zacznę uczciwie: nie potwierdziłam żadnego wpisu na ministerialnej Liście Produktów Tradycyjnych przypisanego tej gminie. Potwierdzone jest natomiast koło gospodyń ze Staszkówki, które startuje w konkursie na Wypiek Regionalny Ziemi Gorlickiej podczas dorocznej wystawy rolniczej w sąsiedniej gminie.",
      "Drugą pewną rzeczą są dożynki gminne — w dwa tysiące dwudziestym szóstym roku dwudziestego trzeciego sierpnia, z korowodem i strojami regionalnymi. W gminie liczącej dwie wsie dożynki nie są imprezą dla turystów, tylko świętem, na które przychodzi po prostu cała gmina.",
      "Kuchnia jest tu pogórzańska i rolnicza: ziemniaki, kapusta, fasola, zupy na kościach, wędliny robione w domu, ciasto drożdżowe, przetwory z ogrodu. Nic egzotycznego i nic, czego nie dałoby się zjeść na co dzień — i właśnie dlatego to działa.",
      "Wypieki mają w tym wszystkim miejsce szczególne, bo są tym, co się wystawia na widok: na dożynki, na odpust, na konkurs. Reszta zostaje w domu.",
      "Dla urządzenia najciekawsze jest to, co powtarzalne i pracochłonne: wyrabianie ciasta, ucieranie mas, mielenie maku, farsze, pasty, zupy na zapas, przetwory. Czego nie zrobi, powiem wprost: nie upiecze i nie zastąpi wprawy. Zabiera tę część roboty, która jest wyłącznie wysiłkiem i czasem.",
    ],
  },

  districtsHeading: "Gdzie w gminie Moszczenica dojeżdżam?",
  districtsParagraphs: [
    "Do obu sołectw — Moszczenicy i Staszkówki — bez żadnej dopłaty za odległość. Gmina liczy blisko pięć tysięcy mieszkańców na trzydziestu ośmiu kilometrach kwadratowych i jest pod względem struktury najprostsza w powiecie: dwie wsie i nic więcej.",
    "W Moszczenicy stoi kościół konsekrowany w tysiąc dziewięćset dziewięćdziesiątym szóstym roku — czwarty z kolei w tym samym miejscu od czasu lokacji z tysiąc trzysta czterdziestego ósmego. Jest tu również Dom Młodzieży imienia biskupa Leona Wałęgi, urodzonego w tej wsi, oraz poświęcona mu płaskorzeźba na murze starego kościoła.",
    "W Staszkówce są cztery cmentarze wojenne z pierwszej wojny światowej, o numerach od stu szesnastu do stu dziewiętnastu. Najbardziej okazały jest numer sto osiemnaście: pomnik Hermanna Kurta Hosaeusa, nagrobki Antona Müllera, cztery kamienne pylony i siedmiuset sześćdziesięciu trzech pochowanych. To tam odbyły się powiatowe obchody sto dziesiątej rocznicy bitwy gorlickiej.",
    "Dojazd: przez gminę biegnie linia kolejowa ze Stróż do Krościenka, ze stacją nazwaną Moszczenica Małopolska — nazwa ma człon regionalny, bo miejscowości o tej nazwie są też w innych województwach. Samochodem prowadzi tędy droga wojewódzka z Tarnowa przez Tuchów i Gromnik do Gorlic i dalej do granicy słowackiej.",
  ],
  districts: ["Moszczenica", "Staszkówka"],

  nearbyHeading: "Gorlice, Łużna i Biecz też są na mojej trasie",
  nearbyParagraphs: [
    "Gmina graniczy z gminą wiejską Gorlice, Łużną, Bieczem, Ciężkowicami i Rzepiennikiem Strzyżewskim. Dojeżdżam do wszystkich sąsiadów bez doliczania kosztu dojazdu — do Gorlic jest stąd dziewięć kilometrów.",
    "Przy umawianiu wystarczy, że powiesz, czy chodzi o Moszczenicę, czy o Staszkówkę.",
  ],
  nearbyTowns: [
    "Gorlice",
    "Łużna",
    "Biecz",
    "Bobowa",
    "Lipinki",
    "Tarnów",
  ],

  about: blokOMnie("do gminy Moszczenica", "w powiecie gorlickim"),

  faq: [
    {
      question: "Mieszkam w Staszkówce. Dojedziesz?",
      answer:
        "Dojadę i nie doliczę za to ani złotówki. Gmina ma dwa sołectwa i traktuję oba dokładnie tak samo. Przy umawianiu wystarczy, że podasz adres.",
    },
    ...faqWspolne("w gminie Moszczenica"),
    {
      question: "Czy to Moszczenica pod Gorlicami?",
      answer:
        "Tak, ta strona dotyczy gminy Moszczenica w powiecie gorlickim, dziewięć kilometrów od Gorlic, złożonej z dwóch wsi: Moszczenicy i Staszkówki. Miejscowości o tej nazwie są też w innych województwach — stąd zresztą tutejsza stacja kolejowa nazywa się Moszczenica Małopolska.",
    },
  ],

  geo: { lat: 49.7313, lng: 21.0915 },
};
