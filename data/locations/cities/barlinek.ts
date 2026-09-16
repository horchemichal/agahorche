import type { CityContent } from "../city-content";
import {
  REGION_POMORZE_ZACHODNIE,
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
 * BARLINEK — powiat myśliborski, woj. zachodniopomorskie,
 * przy Puszczy Barlinecko-Gorzowskiej.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 * MIASTO: 12 878 mieszkańców (GUS 31.12.2024), 17,6 km²,
 * gęstość 733,8 os./km².
 * CAŁA GMINA: 18 247 osób, 258,7 km², 36 miejscowości.
 * ⚠ NIE MIESZAM LICZB MIASTA I GMINY. TWARDA GRANICA.
 * ⚠ GEO: 52,9944 / 15,2191.
 * ⚠ en.wikipedia podaje 13 491 za 31.12.2021 — różnica
 *   wynika z DATY, nie z metody. NIE PISZĘ o zawyżaniu.
 *
 * ⚠ ODMIANA: RODZAJ MĘSKI. D. BARLINKA,
 *   Ms. W BARLINKU, przym. BARLINECKI,
 *   mieszkaniec BARLINCZANIN/BARLINCZANKA.
 *   ⚠⚠ NIE „BARLINIANIN" — to forma błędna.
 * ⚠ HOMONIMU BRAK.
 * ⚠⚠ PUŁAPKA SKOJARZENIOWA: pierwotna nazwa osady
 *   brzmiała „Nowy Berlin" i była używana do 1499 r.
 *   To zbieżność nazewnicza z czasów kolonizacji,
 *   NIE związek z Berlinem. ⚠⚠ NIE UŻYWAM TEGO FAKTU
 *   WCALE — każde sformułowanie jest tu myląca,
 *   a wartości dla strony o gotowaniu nie ma żadnej.
 *
 * HISTORIA — FAKTY UŻYTE:
 * — ⚠⚠⚠ RDZEŃ KĄTA: DOKUMENT Z 25 STYCZNIA 1278 R.
 *   Nazywany potocznie aktem lokacyjnym Barlinka.
 *   HISTORYCY SPIERAJĄ SIĘ, CZY NIM JEST:
 *   — Grzegorz Brzustowicz twierdzi, że to raczej
 *     DOKUMENT SOŁTYSI, bo dotyczy przede wszystkim praw
 *     jednej osoby, a nie przywilejów miasta,
 *   — Paul von Niessen określił go jako wyjątkowo ubogi
 *     w porównaniu z typowymi aktami lokacyjnymi — brakuje
 *     w nim podziału na łany i standardowych przywilejów,
 *   — ⚠⚠ DRUGI DOKUMENT, WYSTAWIONY ODRĘBNIE
 *     DLA MIESZCZAN, PRAWDOPODOBNIE ZAGINĄŁ.
 *     TO JEST WŁAŚCIWY HAK KĄTA.
 *   ⚠ REFERUJĘ SPÓR, NIE ROZSTRZYGAM GO. Piszę „część
 *   historyków uważa", nie „to nie był akt lokacyjny".
 * — POŁOWA XIV W. — mury obronne z DWIEMA BRAMAMI:
 *   MYŚLIBORSKĄ I MŁYŃSKĄ.
 *   ⚠ WYMIARÓW MURÓW NIE USTALONO — nie podaję.
 * — 1852 — ratusz spłonął; 1912 — na rynku odsłonięto
 *   fontannę z figurą dziewczynki.
 *   ⚠ MOTYWU FIGURY NIE ROZSTRZYGAM (źródła podają
 *   różnie) — piszę „z figurą dziewczynki".
 * — BARLINEK JAKO „EUROPEJSKA STOLICA NORDIC WALKING":
 *   7 oznakowanych tras o łącznej długości 54 km.
 *   ⚠ DATY PRZYJĘCIA TYTUŁU NIE USTALONO — nie podaję
 *   roku. ⚠⚠ NIE ROZWIJAM WĄTKU RUCHU I AKTYWNOŚCI —
 *   to prosta droga do twierdzeń zdrowotnych.
 *   Wymieniam wyłącznie liczbę i długość tras
 *   w bloku faktograficznym.
 *
 * ⚠⚠ JEZIORO BARLINECKIE: PARAMETRÓW NIE POTWIERDZONO
 *   (powierzchnia, głębokość). NIE PODAJĘ ŻADNEJ LICZBY.
 *   Wymieniam jezioro opisowo albo wcale.
 * ⚠⚠ LISTA PRODUKTÓW TRADYCYJNYCH: BRAK potwierdzonego
 *   wpisu dla Barlinka, gminy ani powiatu myśliborskiego.
 *   NIE WYMYŚLAM ŻADNEGO.
 * ⚠ OSIEDLI STATUTOWYCH MIASTA NIE USTALONO —
 *   districts PUSTE.
 * ⚠⚠ LISTY GMIN SĄSIEDNICH NIE ZWERYFIKOWANO
 *   KARTOGRAFICZNIE. W nearbyTowns podaję wyłącznie
 *   miasta, które mają własne strony w serwisie
 *   i leżą bezspornie w zasięgu trasy.
 *
 * KĄT: PRZEPIS, W KTÓRYM CZEGOŚ BRAKUJE — co zrobić,
 * gdy w rodzinnym zapisie nie ma jednego kroku albo
 * jednej ilości.
 * Kąt od 1278 r.: zachował się jeden dokument, a drugi —
 * ten wystawiony dla mieszczan — prawdopodobnie zaginął.
 * Do dziś nie wiadomo, co w nim było, i historycy spierają
 * się o to, jak czytać ten, który został.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że dokument z 25 stycznia 1278 r. bywa nazywany
 *   aktem lokacyjnym, ale część historyków uważa go
 *   raczej za dokument sołtysi, bo dotyczy przede wszystkim
 *   praw jednej osoby,
 * — ŻE DRUGI DOKUMENT, DLA MIESZCZAN, ZAGINĄŁ —
 *   i to jest rdzeń: całość trzeba odtwarzać z tego,
 *   co zostało,
 * — ⚠⚠ ŻE DOKŁADNIE TAK WYGLĄDA WIĘKSZOŚĆ PRZEPISÓW
 *   RODZINNYCH. Nie dlatego, że ktoś ukrywał, tylko
 *   dlatego, że autorka zapisywała dla siebie —
 *   a dla siebie nie zapisuje się rzeczy oczywistych,
 * — ⚠⚠ TRZY RZECZY, KTÓRYCH BRAKUJE NAJCZĘŚCIEJ, PODANE
 *   JAKOŚCIOWO, BEZ ŻADNYCH LICZB:
 *   (1) ilość czegoś, co dodawano „na oko",
 *   (2) kolejność, gdy zapis jest listą składników,
 *       a nie opisem czynności,
 *   (3) moment, w którym coś się kończy — „aż będzie
 *       dobre" znaczyło coś konkretnego dla autorki,
 * — ⚠⚠ CO Z TYM ZROBIĆ, PO KOLEI:
 *   najpierw zapytać, póki jest kogo pytać — to jest
 *   pierwsza i najważniejsza rada i nie ma dla niej
 *   zamiennika; potem odtworzyć raz, notując na bieżąco,
 *   co się faktycznie zrobiło; a na końcu dopisać
 *   do przepisu to, czego w nim brakowało — dla kogoś,
 *   kto będzie go czytał po nas,
 * — ⚠⚠ UCZCIWIE: CZĘŚCI NIE DA SIĘ ODTWORZYĆ i lepiej
 *   to powiedzieć wprost. Wtedy zostaje wersja własna,
 *   podobna, ale nie ta sama — i to jest w porządku,
 *   pod warunkiem że nie nazywa się jej oryginałem,
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie nie odtworzy
 *   brakującego kroku — nie wie, czego nie ma.
 *   Robi jedną rzecz, która tu pomaga: zapisuje to,
 *   co ustalicie, tak samo za każdym razem, więc wersja
 *   raz odtworzona przestaje się rozjeżdżać przy kolejnych
 *   podejściach.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO ZAMIENNIKÓW SKŁADNIKÓW — kąt zajęty
 *   (Kwidzyn). ⚠⚠ TO JEST NAJBLIŻSZY KĄT. Tam chodzi
 *   o SKŁADNIK, KTÓREGO NIE MA W DOMU ANI W SKLEPIE;
 *   TUTAJ o KROK ALBO ILOŚĆ, KTÓRYCH NIE MA W ZAPISIE.
 *   Ani jednego zdania o zastępowaniu jednego produktu
 *   drugim. TWARDA GRANICA — rozgraniczam wprost.
 * — ⚠⚠ ZERO PRZEPISÓW, KTÓRE PRZYJECHAŁY Z LUDŹMI —
 *   kąt zajęty (Żelów).
 * — ⚠⚠ ZERO WŁASNEJ MIARY I SZKLANEK — kąt zajęty
 *   (Gryfice, ta sama fala). „Na oko" wymieniam jako
 *   jeden z trzech braków i NIE ROZWIJAM w stronę miar.
 * — ⚠⚠ ZERO PRZEPISÓW W CUDZYCH MIARACH — kąt zajęty
 *   (Zgorzelec).
 * — ⚠ ZERO ODWRÓCONEJ KOLEJNOŚCI „NAJPIERW ZAKUPY,
 *   POTEM PRZEPIS" — kąt zajęty (Kock).
 * — ⚠ ZERO OZNACZEŃ I ETYKIET — kąt zajęty (Chodecz).
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW — ⚠⚠ przy kącie
 *   o brakujących ilościach to najkrótsza droga do wpadki.
 *   NIE PADA ANI JEDNA LICZBA KUCHENNA.
 *   TWARDA GRANICA BEZWZGLĘDNA.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH — ⚠⚠ przy wątku
 *   nordic walking szczególnie. NIE PISZĘ ANI SŁOWA
 *   O KORZYŚCIACH Z RUCHU.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠ ZERO PIERWOTNEJ NAZWY MIASTA — patrz pułapka
 *   skojarzeniowa wyżej.
 * — ⚠⚠ ZERO ROKU 1945, ZERO PRZESIEDLEŃ.
 * — ⚠⚠ ZERO POŻARU RATUSZA JAKO WĄTKU — podaję rok 1852
 *   wyłącznie po to, żeby wyjaśnić, skąd na rynku fontanna.
 * — ⚠ ZERO SPADKU LICZBY LUDNOŚCI (−11,0 % w latach
 *   2002–2024, najwięcej z tej fali) I JEGO PRZYCZYN.
 * — ⚠ ZERO NAGRÓD I RANKINGÓW TURYSTYCZNYCH —
 *   nie jest to materiał o kuchni.
 * — ⚠ ŹRÓDŁA ODRZUCONE: superpolonia.info,
 *   infodlapolaka.pl, gminya1.pl, nonsa.pl.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MIESZAM liczb miasta i gminy.
 * — NIE ROZSTRZYGAM sporu o charakter dokumentu z 1278 r.
 * — NIE TWIERDZĘ, co było w zaginionym dokumencie.
 * — NIE PODAJĘ parametrów jeziora Barlineckiego.
 * — NIE PODAJĘ roku przyjęcia tytułu związanego
 *   z nordic walkingiem.
 * — NIE PODAJĘ wymiarów murów miejskich.
 * — NIE PRZYPISUJĘ Barlinkowi żadnego produktu z Listy.
 * — NIE PODAJĘ nazw osiedli.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Barlinek leży w powiecie myśliborskim, przy Puszczy
 *   Barlinecko-Gorzowskiej, jest miastem w gminie
 *   miejsko-wiejskiej i liczy 12 878 mieszkańców
 *   (GUS, 31.12.2024) na 17,6 km²; cała gmina ma
 *   18 247 osób na 258,7 km² i obejmuje 36 miejscowości,
 * — dokument z 25 stycznia 1278 r. bywa nazywany aktem
 *   lokacyjnym, ale część historyków uważa go raczej
 *   za dokument sołtysi — brakuje w nim podziału na łany
 *   i standardowych przywilejów miejskich, a drugi
 *   dokument, wystawiony dla mieszczan, prawdopodobnie
 *   zaginął,
 * — mury obronne wzniesiono w połowie XIV w.; miały dwie
 *   bramy: Myśliborską i Młyńską,
 * — ratusz spłonął w 1852 r., a w 1912 na rynku odsłonięto
 *   fontannę z figurą dziewczynki,
 * — przez miasto i okolicę prowadzi siedem oznakowanych
 *   tras o łącznej długości 54 km.
 */
export const BARLINEK: CityContent = {
  slug: "barlinek",
  h1: "Thermomix Barlinek – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Barlinek — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Barlinku: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Dojazd bezpłatny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Barlinek — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Barlinku. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Barlinka z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wsi w gminie.",

  highlights: highlightyStandardowe("Barlinek"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Najcenniejsze przepisy w domu to zwykle te, w których czegoś brakuje.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Barlinku – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem i ze składnikami — nie robisz zakupów ani porządków na tę okazję. Wystarczy blat, gniazdko i godzina spokoju.",
        "Gotujemy naprawdę: obiad, coś słodkiego i chętnie coś z tego, co macie w domu. Powiedz wcześniej, ile osób siada u Was do stołu i czego nie jecie, a dobiorę dania pod Was.",
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
      id: "brakujacy-krok",
      heading: "Dokument, który zaginął, i przepis, w którym czegoś brakuje",
      paragraphs: [
        "Najstarszy dokument Barlinka nosi datę dwudziestego piątego stycznia 1278 roku i potocznie nazywa się go aktem lokacyjnym. Rzecz w tym, że część historyków się z tym nie zgadza: uważają, że to raczej dokument sołtysi, bo dotyczy przede wszystkim praw jednej osoby, a nie przywilejów miasta. Brakuje w nim podziału na łany i całej reszty rzeczy, które w takich aktach normalnie stoją.",
        "A drugi dokument — ten wystawiony osobno dla mieszczan — prawdopodobnie zaginął. Nie wiadomo, co w nim było. Zostało to, co zostało, i z tego trzeba odtwarzać całość.",
        "Dokładnie tak wygląda większość przepisów rodzinnych i to jest cała rzecz, o którą tu chodzi.",
        "Zeszyt po babci, kartka w książce kucharskiej, SMS od cioci — w każdym z nich czegoś brakuje. Nie dlatego, że ktokolwiek coś ukrywał. Dlatego, że autorka zapisywała dla siebie, a dla siebie nie zapisuje się rzeczy oczywistych. Ona wiedziała, o co chodzi. Przepis był przypomnieniem, nie instrukcją.",
        "Brakuje zwykle jednej z trzech rzeczy. Najczęściej ilości czegoś, co dodawano na oko i czego nigdy nie było powodu mierzyć. Czasem kolejności — bo zapis jest listą składników, a nie opisem czynności, więc nie wiadomo, co dochodzi kiedy. A czasem momentu, w którym coś się kończy: „aż będzie dobre” znaczyło dla autorki coś zupełnie konkretnego, tylko nie zostało to nigdzie opisane.",
        "Co z tym zrobić — po kolei, bo kolejność tu akurat ma znaczenie.",
        "Najpierw zapytać, póki jest kogo pytać. To jest pierwsza i najważniejsza rada i nie ma dla niej żadnego zamiennika. Jeden telefon dziś jest wart więcej niż dziesięć prób za pięć lat. Jeśli macie w rodzinie przepis, o który nikt nigdy nie dopytał — to jest dobry tydzień, żeby to zrobić.",
        "Potem odtworzyć raz i notować na bieżąco. Nie po fakcie, tylko w trakcie: co faktycznie poszło, w jakiej kolejności, po czym poznaliście, że pora na następny krok. To jest ta jedna rzecz, której nikt nie robi, a która rozwiązuje problem raz na zawsze.",
        "I na końcu dopisać do przepisu to, czego w nim brakowało. Nie dla siebie — dla kogoś, kto będzie go czytał po Was i nie będzie miał kogo zapytać.",
        "Uczciwie: części nie da się odtworzyć i nie ma sensu udawać, że da. Wtedy zostaje wersja własna — podobna, czasem bardzo bliska, ale nie ta sama. To jest całkowicie w porządku, pod jednym warunkiem: że nie nazywa się jej oryginałem. Przepis babci i przepis „jak u babci” to dwie różne rzeczy i obie mają prawo istnieć.",
        "Na koniec o urządzeniu, bez obiecywania cudów. Ono nie odtworzy brakującego kroku, bo nie wie, czego nie ma. Nie zgadnie, ile było tej mąki na oko.",
        "Robi natomiast jedną rzecz, która tu naprawdę pomaga: kiedy już raz ustalicie wersję, wykonuje ją tak samo za każdym razem. Przepis odtworzony przestaje się rozjeżdżać przy kolejnych podejściach — a to właśnie rozjeżdżanie się sprawia zwykle, że po trzech próbach ludzie dają sobie spokój.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Barlinku?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli macie w domu przepis, w którym czegoś brakuje — weźcie go na spotkanie. Spróbujemy odtworzyć go razem i od razu zapiszemy, co faktycznie poszło.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Barlinku"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla barlineckiej rodziny",
      paragraphs: [
        "Barlinek leży w powiecie myśliborskim, przy Puszczy Barlinecko-Gorzowskiej, i jest miastem w gminie miejsko-wiejskiej: samo miasto liczy blisko trzynaście tysięcy mieszkańców na siedemnastu i sześciu dziesiątych kilometra kwadratowego, a cała gmina ponad osiemnaście tysięcy osób na dwustu pięćdziesięciu ośmiu kilometrach kwadratowych, w trzydziestu sześciu miejscowościach. Najstarszy dokument miasta nosi datę dwudziestego piątego stycznia 1278 roku i bywa nazywany aktem lokacyjnym, choć część historyków uważa go raczej za dokument sołtysi — brakuje w nim podziału na łany i standardowych przywilejów miejskich, a drugi dokument, wystawiony osobno dla mieszczan, prawdopodobnie zaginął. Mury obronne wzniesiono w połowie czternastego wieku; miały dwie bramy — Myśliborską i Młyńską. Ratusz spłonął w 1852 roku, a w 1912 na rynku odsłonięto fontannę z figurą dziewczynki, która stoi tam do dziś. Przez miasto i okolicę prowadzi siedem oznakowanych tras o łącznej długości pięćdziesięciu czterech kilometrów.",
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

  districtsHeading: "Do których części Barlinka dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich trzydziestu sześciu miejscowości w gminie. Bez wyjątku i bez dopłaty za odległość.",
    "Przy umawianiu wystarczy podać ulicę i numer domu albo nazwę miejscowości. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Barlinek też przyjadę",
  nearbyParagraphs: [
    "Gorzów Wielkopolski jest niespełna czterdzieści kilometrów stąd, Choszczno jeszcze bliżej, a Stargard i Szczecin mieszczą się w tej samej trasie — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Gorzów Wielkopolski", "Choszczno", "Stargard", "Szczecin"],

  about: blokOMnie("do Barlinka", "w Barlinku", REGION_POMORZE_ZACHODNIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Barlinka bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich trzydziestu sześciu miejscowości w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku: chodzi o Barlinek w powiecie myśliborskim w województwie zachodniopomorskim.",
    },
    ...faqWspolne("w Barlinku"),
    {
      question: "Co zrobić z przepisem rodzinnym, w którym czegoś brakuje?",
      answer:
        "Po kolei trzy rzeczy. Najpierw zapytać, póki jest kogo pytać — na to nie ma zamiennika i jeden telefon dziś jest wart więcej niż dziesięć prób za pięć lat. Potem odtworzyć raz, notując na bieżąco, co faktycznie poszło i w jakiej kolejności. Na końcu dopisać do przepisu to, czego w nim brakowało — dla kogoś, kto będzie go czytał po Was.",
    },
    {
      question: "Czy Thermomix pomoże odtworzyć stary przepis?",
      answer:
        "Nie odtworzy brakującego kroku, bo nie wie, czego nie ma — i nie będę twierdzić inaczej. Robi jedną rzecz, która tu pomaga naprawdę: kiedy raz ustalicie wersję, wykonuje ją tak samo za każdym razem. To właśnie rozjeżdżanie się kolejnych prób sprawia zwykle, że po trzecim podejściu ludzie dają sobie spokój.",
    },
  ],

  geo: { lat: 52.9944, lng: 15.2191 },
};
