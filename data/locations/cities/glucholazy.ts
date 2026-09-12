import type { CityContent } from "../city-content";
import {
  REGION_OPOLSKIE,
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
 * GŁUCHOŁAZY — miasto w powiecie nyskim, 12 545 mieszkańców
 * (31.12.2024, GUS); cała gmina 22 183. Lokacja na prawie
 * flamandzkim około 1220–1230 r., w dobrach biskupów
 * wrocławskich. Miasto o wielkiej tradycji WODOLECZNICZEJ —
 * pierwsze zakłady kąpielowe od 1877 r., metody Priessnitza,
 * a po 1877 r. Kneippa; niemiecka nazwa brzmiała BAD ZIEGENHALS.
 * ALE FORMALNIE TO JUŻ NIE JEST UZDROWISKO: województwo opolskie
 * jest jednym z trzech w Polsce, które nie mają ANI JEDNEGO
 * uzdrowiska statutowego.
 *
 * UWAGA — HOMONIMY: nie mylić z GŁUBCZYCAMI (osobne miasto
 * w tym samym województwie) ani z Głuchowem.
 *
 * KĄT: herbaty, napary i gorące napoje — czyli temperatura wody.
 * Miasto, którego cały XIX-wieczny przemysł polegał na leczeniu
 * wodą, jest właściwym miejscem na jedyną stronę w serwisie
 * o tym, co się dzieje z wodą PRZED zalaniem — i o tym, że
 * urządzenie nie zastąpi czajnika.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że urządzenie trzyma ustawioną temperaturę i to jest jego
 *   realna przewaga przy herbacie, bo nie wszystko zalewa się
 *   wrzątkiem,
 * — że przy JEDNEJ filiżance to bez sensu — czajnik jest
 *   szybszy i nie trzeba go myć,
 * — że sens pojawia się przy dzbanku dla całego domu, przy
 *   naparze trzymanym w cieple i przy gorących napojach
 *   mlecznych, które lubią przywrzeć,
 * — i że NIE POWIEM ANI SŁOWA o tym, co zioła robią zdrowiu.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH O ZIOŁACH, NAPARACH ANI
 *   O WODZIE. Zero „oczyszczania", „wzmacniania odporności",
 *   „detoksu". W mieście o tradycji uzdrowiskowej pokusa jest
 *   największa i dlatego odmowa stoi w tekście wprost.
 * — ŻADNYCH KONKRETNYCH TEMPERATUR ANI CZASÓW PARZENIA.
 *   Piszę jakościowo: „nie wszystko zalewa się wrzątkiem".
 * — ŻADNYCH PORAD O ZBIERANIU DZIKO ROSNĄCYCH ZIÓŁ.
 * — ŻADNEGO NAZYWANIA GŁUCHOŁAZ UZDROWISKIEM. Formalnie nim
 *   nie są i strona mówi to wprost.
 * — ŻADNEGO UŻYWANIA POWODZI Z 2024 R. JAKO TŁA DLA OFERTY.
 *   Miasto zostało zalane we wrześniu 2024 r. i to jest prawda,
 *   ale nie jest to materiał, na którym przedstawicielka handlowa
 *   buduje sprzedaż. Nowy most wspominam wyłącznie neutralnie,
 *   jako fakt z życia miasta.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Twarda woda" (inne miasto)
 * dotyczy KAMIENIA i tego, co woda robi urządzeniu. „Napoje
 * domowe" (Nałęczów) dotyczą tego, czego się NIE zrobi —
 * wody mineralnej. „Zioła i własne uprawy" (inne miasto) dotyczą
 * hodowania. Tutaj chodzi o SAM MOMENT ZALANIA i o temperaturę.
 *
 * CZEGO NIE TWIERDZĘ, MIMO ŻE BYŁO KUSZĄCE:
 * — NIE PISZĘ „uzdrowisko Głuchołazy" ani „gmina uzdrowiskowa".
 *   Piszę: „miasto o tradycjach uzdrowiskowych", „dawne
 *   uzdrowisko". Województwo opolskie nie ma ani jednego
 *   uzdrowiska statutowego.
 * — NIE ROZSTRZYGAM, kto lokował miasto — źródła podają
 *   raz księcia, raz biskupa wrocławskiego. Piszę o dobrach
 *   biskupich i o dacie przybliżonej.
 * — NIE PODAJĘ NAZW FIRM ani liczby zatrudnionych. Największy
 *   pracodawca jest wskazywany w prasie, ale dane pochodzą
 *   z 2024 r.
 * — NIE WYMIENIAM Fabryki Armatur jako pracodawcy. Spółka
 *   została wykreślona z KRS 2 lutego 2021 r., a zakład
 *   następcy zlikwidowano w 2023 r.
 * — NIE PISZĘ o rozkładzie pociągów do Czech. Cztery pary
 *   pociągów przez Głuchołazy potwierdzono na grudzień 2024 r.,
 *   ale na odcinku do Jeseníka jeździła wtedy komunikacja
 *   zastępcza i stanu na 2026 r. nie potwierdzono. Piszę
 *   ogólnie o sąsiedztwie granicy.
 * — NIE PODAJĘ produktu z Listy Produktów Tradycyjnych.
 *   Dla Głuchołaz nic nie znaleziono.
 * — NIE wymyślam osiedli. Brak wykazu — gmina ma 17 sołectw,
 *   ale to nie są dzielnice miasta. districts to PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — lokacja na prawie flamandzkim ok. 1220–1230 r., w dobrach
 *   biskupów wrocławskich,
 * — pierwsze zakłady kąpielowe: 1877, 1882, 1891; metody
 *   Priessnitza i Kneippa; niemiecka nazwa Bad Ziegenhals;
 *   zachowany Park Zdrojowy,
 * — FORMALNIE miasto nie jest dziś uzdrowiskiem statutowym;
 *   działa tu natomiast szpital specjalistyczny,
 * — w XV–XVI w. jeden z większych ośrodków wydobycia złota
 *   w tej części Europy: ok. 80 szybów w Dolinie Sarniego
 *   Potoku, Sztolnia Trzech Króli, dokument z 1263 r.
 *   o czynszach płaconych w złocie, dziś pętlowy Szlak
 *   Górników Złota,
 * — papiernictwo działa tu nieprzerwanie od 1902 r.,
 * — miasto leży u stóp Gór Opawskich, przy granicy z Czechami,
 * — 12 545 mieszkańców (31.12.2024).
 */
export const GLUCHOLAZY: CityContent = {
  slug: "glucholazy",
  h1: "Thermomix Głuchołazy – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Głuchołazy — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Głuchołazach: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Głuchołazy — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Głuchołazach. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Głuchołaz z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do miejscowości gminy.",

  highlights: highlightyStandardowe("Głuchołazy i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Do jednej filiżanki weźcie czajnik. Naprawdę.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Głuchołazach – jak wygląda prezentacja?",
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
      id: "napary",
      heading: "Miasto, które przez sto lat leczyło wodą — czyli o temperaturze zalania",
      paragraphs: [
        "Zacznę od sprostowania, bo inaczej powtórzyłabym cudzy folder. Głuchołazy miały wielką tradycję uzdrowiskową — pierwsze zakłady kąpielowe od 1877 roku, metody Priessnitza, potem Kneippa, niemiecka nazwa brzmiała Bad Ziegenhals, a Park Zdrojowy stoi do dziś. Ale formalnie to już nie jest uzdrowisko: całe województwo opolskie nie ma ani jednego uzdrowiska statutowego. Napiszę więc „miasto o tradycjach uzdrowiskowych” i tyle, bo tak jest prawdziwie.",
        "Skoro jednak przez sto lat wszystko się tu kręciło wokół wody, to jest właściwe miejsce na temat, o którym w kuchni prawie nikt nie myśli: nie chodzi o to, czym zalewamy, tylko czym gorącym.",
        "Bo nie wszystko zalewa się wrzątkiem. Zielona herbata zalana wodą prosto z czajnika robi się gorzka i ściągająca — i większość ludzi, którzy mówią „nie lubię zielonej herbaty”, po prostu nigdy nie piła jej zaparzonej chłodniej. To samo dotyczy delikatnych naparów ziołowych i owocowych.",
        "Urządzenie ma tu jedną realną przewagę: ustawiacie temperaturę i ono ją trzyma. Nie zgadujecie, nie odstawiacie czajnika na cztery minuty, nie wkładacie palca. Woda dochodzi do tego, co wybraliście, i tam zostaje.",
        "Teraz uczciwie, gdzie to nie ma sensu. Przy jednej filiżance — nie ma. Czajnik jest szybszy, nie trzeba go myć i nie zajmuje urządzenia. Kto sobie wyobraża, że będzie w tym parzył poranną herbatę, ten po tygodniu wróci do czajnika i będzie miał rację.",
        "Sens pojawia się gdzie indziej: przy dzbanku dla całego domu, przy naparze, który ma stać ciepły przez pół godziny, i przy gorących napojach z mlekiem — bo te lubią przywrzeć do dna i wykipieć, a tutaj są mieszane i pilnowane same. Zimą, przy gościach albo przy chorym dziecku w domu, to jest różnica między „zaraz zrobię” a „już jest”.",
        "I zdanie, przy którym nie ustąpię, bo w mieście z taką przeszłością pokusa jest największa: nie napiszę Wam ani słowa o tym, co zioła robią zdrowiu. Ani że wzmacniają, ani że oczyszczają, ani że na coś pomagają. Jestem przedstawicielką handlową sprzętu kuchennego i moja wiedza kończy się na temperaturze wody.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Głuchołazach?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli pijecie w domu dużo herbaty, powiedzcie to przy umawianiu — zrobimy dzbanek na ustawionej temperaturze i porównacie z tym, co wychodzi z czajnika.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Głuchołazach"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla głuchołaskiej rodziny",
      paragraphs: [
        "Głuchołazy liczą nieco ponad dwanaście i pół tysiąca mieszkańców i leżą u stóp Gór Opawskich, tuż przy granicy z Czechami. Miasto lokowano na prawie flamandzkim około 1220–1230 roku, w dobrach biskupów wrocławskich. Rzecz, o której mało kto wie: w XV i XVI wieku był to jeden z większych ośrodków wydobycia złota w tej części Europy — w Dolinie Sarniego Potoku naliczono około osiemdziesięciu szybów, zachowała się Sztolnia Trzech Króli, a dokument z 1263 roku mówi o czynszach płaconych w złocie. Dziś prowadzi tamtędy pętlowy Szlak Górników Złota. Z rzeczy współczesnych: papiernictwo działa tu nieprzerwanie od 1902 roku.",
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

  districtsHeading: "Do których części Głuchołaz dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — łącznie z dzielnicą zdrojową — i do sołectw gminy, w tym Jarnołtówka, Pokrzywnej i Konradowa, bez dopłaty za dojazd.",
    "Miasto nie publikuje wykazu osiedli, więc nie będę wymyślać nazw; przy umawianiu wystarczy podać ulicę albo miejscowość.",
  ],
  districts: [],

  nearbyHeading: "Poza Głuchołazy też przyjadę",
  nearbyParagraphs: [
    "Nysa, Prudnik, Otmuchów, Paczków, Głubczyce i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Nysa", "Prudnik", "Paczków", "Głubczyce", "Opole", "Brzeg"],

  about: blokOMnie("do Głuchołaz", "w Głuchołazach i okolicy", REGION_OPOLSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Głuchołaz bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do sołectw gminy — także do Jarnołtówka i Pokrzywnej. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku: chodzi o Głuchołazy, nie o Głubczyce.",
    },
    ...faqWspolne("w Głuchołazach"),
    {
      question: "Czy warto parzyć w Thermomixie herbatę?",
      answer:
        "Przy jednej filiżance nie — czajnik jest szybszy i nie trzeba go myć. Sens pojawia się przy dzbanku dla całego domu, przy naparze, który ma stać ciepły, i przy gorących napojach z mlekiem, bo te lubią przywrzeć i wykipieć, a tutaj są mieszane same.",
    },
    {
      question: "Po co ustawiać temperaturę wody?",
      answer:
        "Bo nie wszystko zalewa się wrzątkiem. Zielona herbata zalana wodą prosto z czajnika robi się gorzka — podobnie delikatne napary ziołowe i owocowe. Urządzenie doprowadza wodę do wybranej temperatury i ją trzyma, więc nie trzeba zgadywać ani odstawiać czajnika na kilka minut.",
    },
    {
      question: "Czy napary z Thermomixa są zdrowsze?",
      answer:
        "Nie napiszę ani słowa o tym, co zioła robią zdrowiu — ani że wzmacniają, ani że oczyszczają, ani że na coś pomagają. Jestem przedstawicielką handlową sprzętu kuchennego i moja wiedza kończy się na temperaturze wody.",
    },
  ],

  geo: { lat: 50.3151, lng: 17.3836 },
};
