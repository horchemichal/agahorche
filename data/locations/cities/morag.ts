import type { CityContent } from "../city-content";
import {
  REGION_WARMIA_MAZURY,
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
 * MORĄG — gmina miejsko-wiejska w powiecie ostródzkim.
 * MIASTO 12 654, GMINA 22 895 (GUS 31.12.2024).
 * 29 SOŁECTW obejmujących 60 miejscowości wiejskich;
 * miasto podzielone na 8 OSIEDLI.
 * ⚠ SERIE DANYCH ZA 2024 I 2025 SĄ WZAJEMNIE NIESPÓJNE
 * (dałyby wzrost ludności wiejskiej przy spadku miejskiej
 * o 762 osoby w rok). UŻYWAM WYŁĄCZNIE SERII 2024 i nie
 * mieszam jej z inną.
 *
 * PRAWA MIEJSKIE 1327 r. (źródło urzędowe: Raport o stanie
 * Gminy). ⚠ WYSTAWCY NIE POTWIERDZONO. To teren dawnego
 * państwa zakonu krzyżackiego, NIE Warmia — NIE PISZĘ
 * „nadane przez biskupa warmińskiego".
 * OBALONE: „Morąg to Warmia" — to powiat ostródzki,
 * Pojezierze Iławskie.
 *
 * PRZYRODA: Pojezierze Iławskie. Jeziora NARIE, RUSKIE,
 * BARTĘŻEK, SKIERTĄG. Obszar Natura 2000 „Uroczysko Markowo".
 * Cztery obszary chronionego krajobrazu i trzy rezerwaty
 * lub użytki ekologiczne — NAZW NIE PODAJĘ, nie potwierdzono.
 * MIEJSKI SZLAK TURYSTYCZNY — trzynaście zabytków w centrum.
 * TRZY TRASY ROWEROWE, łącznie ok. 114 km.
 * Muzeum Warmii i Mazur prowadzi tu MORĄSKĄ IZBĘ PAMIĘCI
 * HISTORYCZNEJ w piwnicach ratusza.
 * ⚠ NIE PISZĘ o „Muzeum im. Herdera w pałacu Dohnów" —
 * raport gminy tego nie potwierdza.
 *
 * KĄT: PRZEPIS, KTÓRY SAM SOBIE PRZECZY — co robić, gdy
 * liczby w przepisie się nie zgadzają. Kąt wprost z tego,
 * że nawet urzędowe statystyki tego miasta są ze sobą
 * sprzeczne — piszę o tym otwarcie i bez złośliwości.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że sprzeczny przepis to nie rzadkość, tylko norma,
 *   i że nie jest to wina czytającego,
 * — cztery typowe sprzeczności: składnik na liście, którego
 *   nie ma w wykonaniu; składnik w wykonaniu, którego nie ma
 *   na liście; liczba porcji nieadekwatna do ilości; dwa
 *   różne czasy albo dwie różne ilości tego samego,
 * — co robić przy każdej z nich, po kolei i konkretnie,
 * — że przy zamkniętym naczyniu sprzeczność kosztuje więcej
 *   niż przy garnku, bo nie widać, co się dzieje w środku,
 * — że przeczytanie przepisu DO KOŃCA przed startem wyłapuje
 *   większość takich rzeczy — i że robi to mniejszość ludzi,
 * — że przepis z sumą składników niepasującą do liczby porcji
 *   trzeba przeliczyć, a nie zaufać nagłówkowi,
 * — i ODMOWA: nie poprawiam cudzych przepisów zdalnie
 *   i nie zgaduję, co autor miał na myśli.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH NAZW FIRM, portali ani autorów przepisów.
 * — NIE PODAJĘ wystawcy praw miejskich.
 * — NIE ROBIĘ TŁA z wyludniania.
 *
 * ⚠ ETYKA — WARMIŃSKO-MAZURSKIE:
 * — NIE UŻYWAM niemieckiej nazwy miasta — zwłaszcza
 *   w połączeniu z nazwiskiem filozofa, bo taka zbitka to
 *   formuła z niemieckiej tradycji ziomkowskiej.
 * — O HERDERZE NIE PISZĘ WCALE. Powód: nie potwierdzono
 *   źródłowo związku z miastem, a jego myśl została później
 *   zawłaszczona przez niemiecki nacjonalizm. Pominięcie jest
 *   tańsze niż ryzyko.
 * — O RODZINIE VON DOHNA NIE PISZĘ — nie potwierdzono pałacu.
 * — ZERO roku 1945, zniszczeń, wysiedleń.
 * — ZERO akcji „Wisła" 1947.
 * — ZERO twierdzeń o „mikroklimacie Pojezierza".
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Nieprecyzyjny język
 * przepisów" (Pelplin) dotyczy sformułowań w rodzaju
 * „szczypta" i „do smaku". „Przepisy w cudzych miarach"
 * dotyczą jednostek. „Danie nie wyszło i nie wiadomo
 * dlaczego" dotyczy diagnozy po fakcie. „Kolejność dodawania
 * składników" (Wolbórz) dotyczy porządku. Tutaj chodzi
 * o WEWNĘTRZNĄ SPRZECZNOŚĆ tekstu: o przepis, który
 * w jednym miejscu mówi co innego niż w drugim.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ wystawcy praw miejskich z 1327 r.
 * — NIE PISZĘ o pałacu Dohnów ani o muzeum Herdera.
 * — NIE PODAJĘ nazw trzech rezerwatów ani czterech obszarów
 *   chronionego krajobrazu.
 * — NIE WYMIENIAM trzynastu zabytków z nazwy — źródło ich
 *   nie podaje.
 * — NIE PODAJĘ wydarzeń cyklicznych — żadnego nie
 *   potwierdzono.
 * — NIE PRZYPISUJĘ Morągowi produktu z Listy Produktów
 *   Tradycyjnych — nie potwierdzono żadnego.
 * — NIE MYLĘ miasta Morąg z gminą Morąg. FAQ to rozróżnia.
 * — districts: miasto ma 8 osiedli, ale ich urzędowych nazw
 *   nie potwierdzono. PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — miasto 12 654, gmina 22 895 mieszkańców; 29 sołectw
 *   obejmujących 60 miejscowości; miasto ma 8 osiedli,
 * — prawa miejskie z 1327 r.,
 * — gmina leży na Pojezierzu Iławskim, w powiecie ostródzkim,
 * — jeziora Narie, Ruskie, Bartężek i Skiertąg,
 * — obszar Natura 2000 „Uroczysko Markowo”,
 * — Miejski Szlak Turystyczny obejmuje trzynaście zabytków
 *   w centrum,
 * — trzy oznakowane trasy rowerowe o łącznej długości
 *   około 114 km,
 * — w piwnicach ratusza działa Morąska Izba Pamięci
 *   Historycznej, oddział Muzeum Warmii i Mazur.
 */
export const MORAG: CityContent = {
  slug: "morag",
  h1: "Thermomix Morąg – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Morąg (warmińsko-mazurskie) — przedstawiciel",
  seoDescription:
    "Thermomix w Morągu: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Morąg — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Morągu. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Morąga z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich sołectw gminy.",

  highlights: highlightyStandardowe("Morąg i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Gdy przepis sam sobie przeczy, to nie jest wina czytającego.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Morągu – jak wygląda prezentacja?",
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
      id: "sprzeczny-przepis",
      heading: "Miasto, w którym nie zgadzają się własne statystyki — czyli o przepisach, które sobie przeczą",
      paragraphs: [
        "Przygotowując tę stronę, natknęłam się na drobiazg, który mnie rozbawił i który świetnie pasuje do tego, o czym chcę napisać. Morąg ma dwie serie danych o liczbie mieszkańców — za 2024 i za 2025 rok — i one się ze sobą nie zgadzają: zestawione razem dają spadek w mieście i jednoczesny wzrost na wsi, którego nikt nie umie wyjaśnić. Nie jest to niczyja wina i nie robię z tego zarzutu. Po prostu wybrałam jedną serię, tę z końca 2024 roku, i trzymam się jej konsekwentnie: miasto dwanaście i pół tysiąca, gmina blisko dwadzieścia trzy tysiące, dwadzieścia dziewięć sołectw obejmujących sześćdziesiąt miejscowości.",
        "Dokładnie to samo trzeba robić z przepisami. Bo przepis, który sam sobie przeczy, to nie rzadkość — to norma, zwłaszcza w internecie. I najważniejsze zdanie tej strony brzmi: kiedy przepis się nie zgadza, to nie jest Wasza wina.",
        "Sprzeczności są zwykle czterech rodzajów i warto je umieć rozpoznać w dziesięć sekund.",
        "Pierwsza: składnik jest na liście, ale w opisie wykonania nie pojawia się nigdy. Ktoś go dopisał i zapomniał, albo usunął z opisu przy poprawkach. Wtedy trzeba samemu zdecydować, gdzie logicznie pasuje — a jeśli nie wiadomo, bezpieczniej go pominąć, niż wrzucić w przypadkowym momencie. Danie bez jednego dodatku nadal będzie dobre; danie z czosnkiem dodanym w złej chwili już niekoniecznie.",
        "Druga, odwrotna i gorsza: w opisie nagle pojawia się coś, czego nie ma na liście zakupów. To wychodzi zwykle w połowie gotowania, kiedy jest już za późno na sklep. Dlatego przeczytanie przepisu do końca przed startem wyłapuje większość takich niespodzianek — i dlatego robi to zdecydowana mniejszość ludzi, łącznie ze mną w gorszy dzień.",
        "Trzecia: liczba porcji nie pasuje do ilości składników. Cztery porcje z dwustu gramów mąki i jednego jajka to nie są cztery porcje. Nagłówek jest w przepisach najmniej wiarygodną częścią, bo bywa ustawiany pod tabelę na stronie. Lepiej policzyć samemu z ilości niż uwierzyć w liczbę u góry.",
        "Czwarta: dwie różne wartości tego samego. W jednym miejscu jest jedna ilość, dwa akapity dalej inna. Tutaj nie ma dobrego rozwiązania poza ostrożnym: wybrać mniejszą i ewentualnie dodać. Wybór większej zwykle się nie da odkręcić.",
        "Przy zamkniętym naczyniu każda taka sprzeczność kosztuje więcej niż przy garnku i to jest rzecz, o której warto wiedzieć. W garnku widzicie, że coś jest nie tak, i reagujecie w trakcie. Tutaj nie widzicie nic, dopóki nie skończy. Dlatego przeczytanie całości przed startem nie jest tu pedanterią, tylko oszczędnością.",
        "I granica: nie poprawiam cudzych przepisów zdalnie. Jeśli przyślecie mi przepis z pytaniem „co autor miał na myśli”, odpowiem uczciwie, że nie wiem — bo nie wiem. Mogę powiedzieć, co zrobiłabym na Waszym miejscu i dlaczego, ale nie będę udawać, że czytam w cudzych intencjach.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Morągu?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeżeli macie przepis, z którym coś jest nie tak — weźcie go na spotkanie. Przejdziemy go razem punkt po punkcie; to zwykle ciekawsze niż gotowanie z gotowej listy.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Morągu"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla morąskiej rodziny",
      paragraphs: [
        "Samo miasto liczy nieco ponad dwanaście i pół tysiąca mieszkańców, a cała gmina blisko dwadzieścia trzy tysiące, w dwudziestu dziewięciu sołectwach obejmujących sześćdziesiąt miejscowości; miasto dzieli się na osiem osiedli. Prawa miejskie Morąg ma od 1327 roku — kto je wtedy nadał, nie podaję, bo nie znalazłam pewnego źródła, a zgadywanie w takiej sprawie nie ma sensu. Warto natomiast wiedzieć, że to nie jest Warmia: Morąg leży w powiecie ostródzkim, na Pojezierzu Iławskim. W gminie są jeziora Narie, Ruskie, Bartężek i Skiertąg oraz obszar Natura 2000 „Uroczysko Markowo”, a przez okolicę biegną trzy oznakowane trasy rowerowe o łącznej długości około stu czternastu kilometrów. W centrum wytyczono Miejski Szlak Turystyczny z trzynastoma zabytkami, a w piwnicach ratusza działa Morąska Izba Pamięci Historycznej, oddział Muzeum Warmii i Mazur.",
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

  districtsHeading: "Do których części gminy Morąg dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich dwudziestu dziewięciu sołectw gminy. Dojazd jest wszędzie bezpłatny.",
    "Przy umawianiu wystarczy podać miejscowość i ulicę albo numer domu.",
  ],
  districts: [],

  nearbyHeading: "Poza Morąg też przyjadę",
  nearbyParagraphs: [
    "Ostróda, Pasłęk, Miłakowo, Miłomłyn, Zalewo i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Ostróda", "Pasłęk", "Miłakowo", "Miłomłyn", "Zalewo"],

  about: blokOMnie("do Morąga", "w Morągu i całej gminie", REGION_WARMIA_MAZURY),

  faq: [
    {
      question: "Czy dojeżdżasz do Morąga bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich dwudziestu dziewięciu sołectw gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku: miasto Morąg liczy około dwunastu i pół tysiąca mieszkańców, a liczba dwudziestu trzech tysięcy, którą często mu się przypisuje, dotyczy całej gminy.",
    },
    ...faqWspolne("w Morągu"),
    {
      question: "Co zrobić, gdy przepis sam sobie przeczy?",
      answer:
        "Rozpoznać typ sprzeczności. Składnik z listy, którego nie ma w wykonaniu — pominąć, jeśli nie wiadomo, gdzie pasuje. Składnik w wykonaniu, którego nie ma na liście — dlatego warto czytać przepis do końca przed startem. Liczba porcji niepasująca do ilości — policzyć samemu. Dwie różne wartości tego samego — wziąć mniejszą i ewentualnie dodać.",
    },
    {
      question: "Dlaczego w Thermomixie błąd w przepisie kosztuje więcej?",
      answer:
        "Bo nie widać, co się dzieje w środku. W garnku zauważacie, że coś idzie źle, i reagujecie w trakcie. W zamkniętym naczyniu dowiadujecie się po fakcie. Dlatego przeczytanie całego przepisu przed startem to nie pedanteria, tylko oszczędność.",
    },
    {
      question: "Czy poprawisz mi przepis, który znalazłam w internecie?",
      answer:
        "Nie zgadnę, co autor miał na myśli, i nie będę udawać, że umiem. Mogę powiedzieć, co sama zrobiłabym na Waszym miejscu i dlaczego — ale to będzie moja decyzja, a nie odczytanie cudzej intencji.",
    },
  ],

  geo: { lat: 53.916, lng: 19.928 },
};
