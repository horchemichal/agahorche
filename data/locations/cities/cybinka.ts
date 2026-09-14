import type { CityContent } from "../city-content";
import {
  REGION_LUBUSKIE,
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
 * CYBINKA — powiat słubicki, woj. lubuskie.
 * MIASTO 2 654 (GUS 31.12.2024), 5,3 km².
 * Gmina miejsko-wiejska, 279,72 km², 12 wsi.
 * Gmina graniczy z Niemcami.
 *
 * ⚠⚠ HOMONIMY — KLUCZOWE:
 * — CYBINKA (miasto, powiat słubicki) ≠ CYBINA (rzeka
 *   w Poznaniu). FAQ to rozróżnia.
 * — ⚠⚠ DRZENIÓW (gmina Cybinka) ≠ DRZECIN (gmina Słubice).
 *   „CHLEB ZE STAREGO PIECA" Z LISTY PRODUKTÓW TRADYCYJNYCH
 *   POCHODZI Z DRZECINA W GMINIE SŁUBICE — NIE Z CYBINKI.
 *   NIE PRZYPISUJĘ GO TEJ GMINIE. TWARDA GRANICA.
 *
 * ⚠ ŻADNEGO PRODUKTU Z GMINY CYBINKA NIE MA NA LIŚCIE
 * PRODUKTÓW TRADYCYJNYCH. NIE WYMYŚLAM ŻADNEGO.
 *
 * HISTORIA — PODSTAWA KĄTA:
 * — pierwsza wzmianka 1472 („Zibingen"),
 * — dobra należały do ZAKONU JOANNITÓW w latach 1582–1804,
 *   potem do rodu Finckensteinów (1802–1945),
 * — kościół 1784–1786, przebudowany 1866,
 * — kolej 1902–1909, młyn i tartak 1900–1910,
 * — ⚠⚠ PAPIERNIA W MACZKOWIE OD 1590 r. — KOTWICA.
 *   Druga papiernia działała w SĄDOWIE.
 *   ⚠ ŹRÓDŁO: STRONA URZĘDU MIEJSKIEGO W CYBINCE.
 *   DRUGIEGO ŹRÓDŁA NIE ZNALEZIONO — dlatego w tekście
 *   piszę „według miejskiego opracowania historycznego",
 *   a nie jako fakt bezsporny. TWARDA GRANICA OSTROŻNOŚCI.
 * — SĄDÓW w 1800 r.: 77 domów, 3 młyny, papiernia, huta
 *   dymarkowa, 518 mieszkańców; „miasteczkiem" nazywany
 *   już w 1375 r.,
 * — RĄPICE w 1800 r.: 131 domów, 3 młyny wodne i tartak,
 * — BIAŁKÓW w 1804 r.: 92 domy, 3 młyny wodne, wiatrak,
 *   kuźnia.
 *
 * ⚠ NIE TWIERDZĘ, DO KIEDY DZIAŁAŁA PAPIERNIA ANI CO
 *   PRODUKOWAŁA — nieustalone.
 *
 * KŁOPOT i URAD — wsie nadodrzańskie, pierwsza wzmianka 1350;
 * Kłopot do 1810 własność joannitów ze Słońska, układ
 * owalnicy. MUZEUM BOCIANA BIAŁEGO W KŁOPOCIE mieści się
 * w starej szkole w centrum wsi, prowadzi je Liga Ochrony
 * Przyrody w Zielonej Górze.
 * ⚠ LICZBY GNIAZD ANI ROKU OTWARCIA MUZEUM NIE PODAJĘ.
 *
 * PAŁAC W MACZKOWIE — 2. poł. XVIII w., klasycystyczny,
 * fundacja pruskiego generała Gustava von Münchowa, park
 * nad Ilanką.
 *
 * KĄT: PAPIER W KUCHNI — do pieczenia, do zawijania,
 * do odsączania: co naprawdę działa, a co jest mitem.
 * Kąt od papierni, która według miejskiego opracowania
 * historycznego działała w Maczkowie od 1590 roku — czyli
 * od gminy, w której obok młynów i tartaków robiono papier.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że papier jest najbardziej niedocenianym narzędziem
 *   w kuchni: kosztuje grosze, a rozwiązuje kilka problemów
 *   naraz,
 * — ŻE TO NIE JEST JEDEN PAPIER, TYLKO KILKA RÓŻNYCH
 *   I NIE SĄ ZAMIENNE:
 *   — papier do pieczenia (silikonowany) — nie przywiera
 *     i znosi wysoką temperaturę,
 *   — papier śniadaniowy i pergamin roślinny — do zawijania
 *     i przekładania, nie do gorącego piekarnika,
 *   — ⚠ folia aluminiowa to NIE papier i zachowuje się
 *     zupełnie inaczej — przewodzi ciepło zamiast izolować,
 *   — ręcznik papierowy — wyłącznie do odsączania,
 * — ŻE NAJCZĘSTSZY BŁĄD TO UŻYCIE PAPIERU ŚNIADANIOWEGO
 *   ZAMIAST DO PIECZENIA, a drugi — mylenie strony błyszczącej
 *   z matową w folii, co nie ma znaczenia,
 * — DO CZEGO PAPIER SIĘ NAPRAWDĘ PRZYDAJE: wyłożenie blachy
 *   i formy, przełożenie warstw mrożonego ciasta i kotletów,
 *   żeby się nie skleiły, odsączanie smażonych rzeczy,
 *   przykrycie ciasta wyrastającego zamiast ściereczki,
 * — ŻE PAPIER DO PIECZENIA MOŻNA WYCIĄĆ RAZ NA ZAWSZE
 *   DO SWOJEJ FORMY i używać jako szablonu,
 * — ŻE PRZY TORTOWNICY OPŁACA SIĘ WYŁOŻYĆ DNO, A NIE BOKI
 *   — biszkopt potrzebuje się „wspiąć" po ściankach,
 * — ŻE ZAWIJANIE W PAPIER PRZED WŁOŻENIEM DO LODÓWKI
 *   działa lepiej niż folia przy serach i pieczywie,
 *   bo przepuszcza wilgoć,
 * — CZEGO NIE ROBIĆ: nie używać papieru z nadrukiem,
 *   gazet ani papieru biurowego do kontaktu z jedzeniem,
 * — UCZCIWIE: to nie jest temat, w którym urządzenie cokolwiek
 *   zmienia — papier zostaje papierem,
 * — ale jedna rzecz się łączy: przy gotowaniu na parze
 *   w koszyku papier do pieczenia z nakłutymi dziurkami
 *   ratuje delikatne rzeczy przed przywarciem, a to jest
 *   najczęstszy problem przy parze.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PROPORCJI.
 * — ⚠⚠ ŻADNYCH TWIERDZEŃ ZDROWOTNYCH I TOKSYKOLOGICZNYCH.
 *   Przy nadruku i gazetach piszę wyłącznie „nie używać",
 *   bez tez o substancjach i ich wpływie. TWARDA GRANICA.
 * — ŻADNYCH NAZW FIRM ANI MAREK PAPIERU.
 * — ZERO twierdzeń o maksymalnych temperaturach papieru.
 *
 * ⚠ ETYKA — LUBUSKIE:
 * — ZERO tematów wojennych i granicznych.
 * — ⚠⚠ GRANICA Z NIEMCAMI — WYŁĄCZNIE JAKO FAKT
 *   GEOGRAFICZNY, NIGDY JAKO TEMAT. TWARDA GRANICA.
 * — ZERO wysiedleń i przesiedleń po 1945 r.
 * — ZERO „Ziem Odzyskanych" jako tematu politycznego.
 * — ZERO konfliktów narodowościowych i wyznaniowych.
 * — ZERO bezrobocia, biedy i wyludniania.
 * — ⚠ KOPALNIE WĘGLA BRUNATNEGO Z XIX w. POMIJAM —
 *   prowadziłyby do tematu upadku.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Naczynia do pieczenia"
 * dotyczą form i blach. „Gotowanie na parze" dotyczy techniki.
 * „Kolacja bez gotowania" dotyczy półmiska. Tutaj chodzi
 * wyłącznie o PAPIER JAKO NARZĘDZIE — o rzecz z szuflady,
 * o której nikt nie pisze.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PRZYPISUJĘ Cybince „Chleba ze starego pieca"
 *   (Drzecin, gmina Słubice — NIE Drzeniów).
 * — NIE PODAJĘ, do kiedy działała papiernia i co robiła.
 * — NIE PODAJĘ liczby gniazd bocianich ani roku otwarcia
 *   muzeum w Kłopocie.
 * — NIE WYMYŚLAM produktu lokalnego ani imprezy kulinarnej.
 * — NIE MYLĘ CYBINKI z rzeką CYBINĄ w Poznaniu.
 * — districts: brak potwierdzonych osiedli. PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — pierwsza wzmianka o Cybince pochodzi z 1472 r.,
 * — tutejsze dobra należały do zakonu joannitów w latach
 *   1582–1804, a następnie do rodu Finckensteinów,
 * — kościół w mieście wzniesiono w latach 1784–1786
 *   i przebudowano w 1866 r.,
 * — według miejskiego opracowania historycznego papiernia
 *   w Maczkowie działała od 1590 r., a druga papiernia
 *   znajdowała się w Sądowie,
 * — w 1800 r. Sądów liczył 77 domów i 518 mieszkańców i miał
 *   trzy młyny, papiernię i hutę dymarkową; Rąpice miały
 *   131 domów, trzy młyny wodne i tartak; Białków — 92 domy,
 *   trzy młyny wodne, wiatrak i kuźnię,
 * — w Maczkowie stoi klasycystyczny pałac z drugiej połowy
 *   XVIII w. z parkiem nad Ilanką,
 * — w Kłopocie, wsi o układzie owalnicy wzmiankowanej
 *   w 1350 r., działa Muzeum Bociana Białego mieszczące się
 *   w starej szkole w centrum wsi, prowadzone przez Ligę
 *   Ochrony Przyrody.
 */
export const CYBINKA: CityContent = {
  slug: "cybinka",
  h1: "Thermomix Cybinka – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Cybinka — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Cybince: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Cybinka — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Cybince. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Cybinki z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wsi w gminie.",

  highlights: highlightyStandardowe("Cybinka"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Najtańsze narzędzie w kuchni leży w szufladzie i nazywa się papier.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Cybince – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem i ze składnikami — nie robisz zakupów ani porządków na tę okazję. Wystarczy blat, gniazdko i godzina spokoju.",
        "Gotujemy naprawdę: obiad, coś słodkiego i chętnie coś z tego, co masz w domu. Powiedz wcześniej, ile osób siada u Was do stołu i czego nie jecie, a dobiorę dania pod Was.",
        "Na koniec liczby: cena, aktualna promocja i rata przy kilku okresach spłaty. Nie musisz decydować tego samego dnia i nic za spotkanie nie płacisz.",
      ],
      links: [{ href: "/prezentacja/jak-wyglada", label: "Zobacz, jak wygląda prezentacja krok po kroku" }],
      photo: {
        src: "/media/aga-przedstawiciel-thermomix-hero-f49127f7.webp",
        alt: "Aga Horche z Thermomixem TM7 — napis „Przedstawiciel Thermomix”",
        caption: "Prezentację prowadzi Aga — ta sama osoba, która odbierze telefon po zakupie.",
      },
    },
    {
      id: "papier-w-kuchni",
      heading: "Papiernia w Maczkowie — czyli o papierze, który leży w Waszej szufladzie",
      paragraphs: [
        "Według miejskiego opracowania historycznego papiernia w Maczkowie pod Cybinką działała już od 1590 roku, a druga stała w Sądowie. To ciekawe zestawienie: w gminie, w której w 1800 roku liczono młyny, tartaki, wiatrak i hutę dymarkową, robiono również papier. Rzecz codzienną, tanią i zupełnie niewidoczną — dokładnie tak, jak w kuchni.",
        "Bo papier jest chyba najbardziej niedocenianym narzędziem kuchennym, jakie mamy. Kosztuje grosze, leży w szufladzie i rozwiązuje kilka problemów naraz. A jednocześnie prawie nikt nie wie, że to nie jest jeden papier, tylko kilka różnych — i że nie są zamienne.",
        "Papier do pieczenia jest silikonowany. To on nie przywiera i znosi gorący piekarnik. Papier śniadaniowy i pergamin roślinny są do zawijania i przekładania — do piekarnika się nie nadają. Ręcznik papierowy służy wyłącznie do odsączania. A folia aluminiowa to w ogóle nie papier: zachowuje się odwrotnie, bo przewodzi ciepło zamiast izolować, więc pod nią rzeczy się dopiekają, a nie chronią.",
        "Najczęstszy błąd w kuchniach wygląda tak: ktoś sięga po papier śniadaniowy, bo leżał bliżej, i wkłada go do piekarnika. Drugi najczęstszy jest nieszkodliwy, ale uparty — spór o to, którą stroną kłaść folię aluminiową, błyszczącą czy matową. To nie ma znaczenia; różnica bierze się ze sposobu walcowania, nie z właściwości.",
        "Do czego papier do pieczenia przydaje się naprawdę? Do wyłożenia blachy i formy, żeby nie szorować. Do przełożenia warstw — kotletów, pierogów, ciasta przed zamrożeniem, żeby się nie skleiły w jedną bryłę. Do odsączenia rzeczy smażonych. I do przykrycia ciasta drożdżowego zamiast ściereczki, która lubi przywrzeć.",
        "Dwie sztuczki, które oszczędzają najwięcej czasu. Pierwsza: wystarczy raz wyciąć kółko pasujące do swojej tortownicy i zachować je jako szablon — potem obrysowuje się je w sekundę zamiast mierzyć za każdym razem. Druga: w tortownicy wykłada się dno, a nie boki. Biszkopt potrzebuje się „wspiąć” po ściankach i na wyłożonym papierem boku po prostu zsuwa się w dół.",
        "Osobna rzecz to przechowywanie. Ser i pieczywo trzymają się lepiej zawinięte w papier niż w folię, bo papier przepuszcza wilgoć, a folia ją zatrzymuje przy powierzchni. To dlatego ser w folii robi się śliski, a w papierze wysycha powoli i równomiernie.",
        "Czego nie robić: nie używać do kontaktu z jedzeniem papieru z nadrukiem, gazet ani papieru biurowego. To nie jest materiał przeznaczony do żywności i nie ma powodu, żeby ryzykować, skoro właściwy kosztuje tyle co nic.",
        "Teraz uczciwie o sprzęcie. To akurat temat, w którym urządzenie niczego nie zmienia. Papier zostaje papierem i nikt nie kupuje Thermomixa dlatego, że ma szufladę.",
        "Jedna rzecz się jednak łączy. Przy gotowaniu na parze w koszyku albo w naczyniu Varoma najczęstszym problemem jest przywieranie — pulpety, ryba i warzywa liściaste lubią zostać na dnie. Kawałek papieru do pieczenia z ponakłuwanymi dziurkami rozwiązuje to całkowicie: para przechodzi, a jedzenie schodzi w całości. To najtańsze usprawnienie, jakie znam.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Cybince?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli chcecie zobaczyć gotowanie na parze — powiedzcie przy umawianiu, wtedy zaplanuję danie, przy którym najlepiej to widać.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Cybince"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla cybinkowskiej rodziny",
      paragraphs: [
        "Cybinka liczy ponad dwa i pół tysiąca mieszkańców na niespełna pięciu i pół kilometra kwadratowego i jest siedzibą gminy złożonej z dwunastu wsi. Pierwsza wzmianka o miejscowości pochodzi z 1472 roku, tutejsze dobra należały do zakonu joannitów w latach 1582–1804, a następnie do rodu Finckensteinów; kościół wzniesiono w latach 1784–1786 i przebudowano w 1866 roku. Według miejskiego opracowania historycznego papiernia w Maczkowie działała od 1590 roku, a druga znajdowała się w Sądowie — wsi, która w 1800 roku liczyła siedemdziesiąt siedem domów i pięciuset osiemnastu mieszkańców i miała trzy młyny, papiernię oraz hutę dymarkową. Rąpice miały wtedy sto trzydzieści jeden domów, trzy młyny wodne i tartak, a Białków — dziewięćdziesiąt dwa domy, trzy młyny wodne, wiatrak i kuźnię. W Maczkowie stoi klasycystyczny pałac z drugiej połowy XVIII wieku z parkiem nad Ilanką, a w Kłopocie, wsi o układzie owalnicy wzmiankowanej w 1350 roku, działa Muzeum Bociana Białego mieszczące się w starej szkole w centrum wsi i prowadzone przez Ligę Ochrony Przyrody.",
        "Thermomix pomaga tym, że nie wymaga obecności. Danie gotuje się z ustawioną temperaturą i mieszaniem, więc może pracować, gdy zajmujesz się czymś innym, a wszystko dzieje się w jednym naczyniu.",
        "Przy małym dziecku dochodzi Varoma: porcja na parze powstaje równolegle z obiadem dla dorosłych, w tym samym urządzeniu.",
      ],
      links: [
        { href: "/thermomix/dla-rodziny", label: "Thermomix dla rodziny" },
        { href: "/thermomix/dla-mamy", label: "Thermomix dla mamy" },
      ],
      photo: {
        src: "/media/gotuj-z-dzieckiem-1-be78fd1c.webp",
        alt: "Aga Horche z dzieckiem przy Thermomixie TM7 — napis „gotuj z dzieckiem i dla dziecka”",
        caption: "Obiad dla dziecka i dla dorosłych w jednym urządzeniu.",
      },
    },
    sekcjaCoUgotujesz(),
    sekcjaTradycyjneGotowanie(),
  ],

  districtsHeading: "Do których części Cybinki dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wsi w gminie — Białkowa, Bieganowa, Drzeniowa, Grzmiącej, Kłopotu, Krzesina, Maczkowa, Mielesznicy, Radzikowa, Rąpic, Sądowa i Uradu. Dojazd jest wszędzie bezpłatny.",
    "Przy umawianiu wystarczy podać miejscowość, ulicę i numer domu.",
  ],
  districts: [],

  nearbyHeading: "Poza Cybinkę też przyjadę",
  nearbyParagraphs: [
    "Słubice, Rzepin, Torzym, Gubin i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Słubice", "Rzepin", "Torzym", "Gubin"],

  about: blokOMnie("do Cybinki", "w Cybince", REGION_LUBUSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Cybinki bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wsi w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku, bo nazwy bywają mylone: chodzi o Cybinkę — miasto w powiecie słubickim — a nie o Cybinę, rzekę w Poznaniu.",
    },
    ...faqWspolne("w Cybince"),
    {
      question: "Czym różni się papier do pieczenia od śniadaniowego?",
      answer:
        "Papier do pieczenia jest silikonowany — nie przywiera i znosi gorący piekarnik. Papier śniadaniowy i pergamin roślinny są do zawijania i przekładania, do piekarnika się nie nadają. Ręcznik papierowy służy tylko do odsączania, a folia aluminiowa to w ogóle nie papier: przewodzi ciepło zamiast izolować.",
    },
    {
      question: "Dlaczego biszkopt opada w tortownicy wyłożonej papierem?",
      answer:
        "Bo wyłożone zostały boki. Biszkopt potrzebuje się „wspiąć” po ściankach formy, a po papierze zsuwa się w dół. W tortownicy wykłada się samo dno — boki najwyżej smaruje.",
    },
    {
      question: "Jak uniknąć przywierania przy gotowaniu na parze?",
      answer:
        "Wyłożyć koszyk albo naczynie Varoma kawałkiem papieru do pieczenia z ponakłuwanymi dziurkami. Para przechodzi swobodnie, a pulpety, ryba czy warzywa liściaste schodzą w całości zamiast zostawać na dnie.",
    },
  ],

  geo: { lat: 52.1946, lng: 14.7958 },
};
