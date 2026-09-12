import type { CityContent } from "../city-content";
import {
  REGION_PODLASIE,
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
 * SUCHOWOLA — gmina miejsko-wiejska w powiecie SOKÓLSKIM.
 * GMINA 255,89 km².
 * ⚠⚠ LICZB MIESZKAŃCÓW NIE PODAJĘ. Najświeższe dostępne:
 * miasto 2 196 (2017), gmina 7 350 (2006) — ZDECYDOWANIE
 * ZA STARE. Notatka projektowa podawała 2 200 — NIE UŻYWAM.
 * ⚠ LICZBY SOŁECTW NIE PODAJĘ (ok. 60 miejscowości).
 *
 * PRAWA MIEJSKIE 1777 r. → UTRATA 1950 r. → PRZYWRÓCENIE
 * 1 STYCZNIA 1997 r. PRZERWA 47 LAT.
 * ⚠ NIE PODAJĘ, kto nadał prawa ani na jakim prawie.
 * ⚠ PRZYCZYNY UTRATY NIE PODAJĘ.
 *
 * ⚠⚠ GEOGRAFICZNY ŚRODEK EUROPY — PODSTAWA KĄTA,
 * ALE TWIERDZENIE JEST SPORNE I MUSZĘ TO POWIEDZIEĆ.
 * Wyliczenia dokonał SZYMON ANTONI SOBIEKRAJSKI W 1775 r.
 * ⚠ TYTUŁU SOBIEKRAJSKIEGO NIE PODAJĘ — źródła podają
 * różnie (kartograf / kartograf i astronom / astronom
 * królewski). Piszę po prostu „Szymon Antoni Sobiekrajski".
 * METODA: konstrukcja oparta na skrajnych punktach kontynentu
 * i środkach odcinków między nimi.
 * UPAMIĘTNIENIE: OBELISK Z TABLICĄ W PARKU MIEJSKIM.
 * ⚠ DATY POSTAWIENIA, WYMIARÓW ANI TREŚCI INSKRYPCJI
 * NIE PODAJĘ.
 * ⚠⚠ TWIERDZENIE JEST KWESTIONOWANE. KONKURENCI:
 * — PURNUŠKĖS k. Wilna (LITWA) — wyliczenie JEAN-GEORGE'A
 *   AFFHOLDERA, 1989 r., metodą CENTROIDU; kolumna z białego
 *   granitu z koroną gwiazd, 2004, proj. Gediminas Jakūbonis,
 * — DIŁOWE k. Rachowa (UKRAINA) — geodeci austro-węgierscy,
 *   1887 r., obelisk z łacińską inskrypcją,
 * — KREMNICKÉ BANE / KRAHULE (SŁOWACJA) — kamień
 *   z napisem „Stred Európy",
 * — PRZYLĄDEK KOLKA (ŁOTWA).
 * ROZBIEŻNOŚCI WYNIKAJĄ Z: odmiennych definicji granic
 * Europy, uwzględniania lub pomijania wysp, wyboru
 * odwzorowania kartograficznego i samej metody obliczeniowej.
 * ⚠⚠ NIE WOLNO NAPISAĆ, ŻE SUCHOWOLA „JEST" ŚRODKIEM EUROPY.
 * PISZĘ: wyliczenie z 1775 r. i lokalna tradycja upamiętniona
 * obeliskiem, ORAZ ŻE INNE MIEJSCA TWIERDZĄ TO SAMO,
 * bo wynik zależy od przyjętej metody.
 * ⚠ Terminologia: źródła używają zamiennie „geograficzny"
 * i „geometryczny". Piszę „geograficzny", odnotowując,
 * że nazewnictwo bywa różne.
 *
 * GEOGRAFIA: miasto leży PO OBU BRZEGACH RZEKI OLSZANKI.
 * W pobliżu Biebrzański Park Narodowy.
 * ⚠ NIE PISZĘ, że gmina leży w parku.
 * ZABYTKI: KOŚCIÓŁ ŚŚ. APOSTOŁÓW PIOTRA I PAWŁA.
 * ⚠ DATOWANIA 1885 NIE PODAJĘ Z PEWNOŚCIĄ — jedno źródło
 * turystyczne. Piszę „dziewiętnastowieczny".
 * ZACHOWANA HISTORYCZNA ZABUDOWA DREWNIANA.
 * ⚠ BEZ KONKRETÓW OBIEKTOWYCH — nie potwierdzono.
 * PARK MIEJSKI.
 * SUCHOWOLA NIE NALEŻY DO CITTASLOW (nie potwierdzono —
 * nie twierdzę, że należy).
 * ⚠ NIE PRZYPISUJĘ Suchowoli produktu z Listy Produktów
 * Tradycyjnych — nie znaleziono.
 *
 * KĄT: RÓWNOWAGA SMAKÓW — słone, kwaśne, słodkie, gorzkie
 * i to, że „środek" zależy od tego, jak się go mierzy.
 * Kąt od miasta, które od 1775 roku uważa się za środek
 * Europy — i od czterech innych miejsc, które twierdzą
 * dokładnie to samo o sobie.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że w każdym daniu jest jakiś „środek" i że tak samo
 *   jak przy środku Europy zależy on od przyjętej metody,
 * — CZTERY KIERUNKI, w które można pociągnąć każde danie:
 *   SÓL, KWAS, SŁODYCZ, GORYCZ — i że większość domowych
 *   dań jest niedoprawiona nie solą, tylko KWASEM,
 * — ŻE KWAS JEST NAJCZĘŚCIEJ POMIJANY: sok z cytryny,
 *   ocet, kiszony ogórek, kwaśna śmietana, pomidor —
 *   wrzucone na końcu potrafią uratować danie, które
 *   „czegoś nie ma",
 * — że gdy ktoś mówi „mdłe", zwykle sięga po sól, a często
 *   potrzebny jest kwas — i odwrotnie: gdy jest „za ostre"
 *   albo „za kwaśne", pomaga tłuszcz albo odrobina słodyczy,
 * — że gorycz jest jedynym kierunkiem, którego się nie dodaje
 *   celowo w domowej kuchni, a warto o niej wiedzieć,
 *   bo bierze się z przypalenia, ze skórki cytrusa
 *   i z przegrzanego czosnku,
 * — ZASADA NADRZĘDNA: doprawia się PO PRÓBOWANIU
 *   i po jednej rzeczy naraz, a nie wszystko naraz,
 * — że nie ma jednego poprawnego środka: to samo danie
 *   doprawione przez dwie osoby wychodzi inaczej i obie
 *   wersje mogą być dobre,
 * — UCZCIWIE: w zamkniętym naczyniu nie da się próbować
 *   w trakcie, więc doprawianie przesuwa się NA KONIEC —
 *   i tam trzeba je zrobić świadomie, bo inaczej danie
 *   wychodzi płaskie,
 * — i że to jest jedyna rzecz, której urządzenie nie zrobi
 *   za nikogo: nie ma języka.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PROPORCJI ANI ILOŚCI SOLI.
 * — ⚠ ŻADNYCH TWIERDZEŃ ZDROWOTNYCH — NIC o soli
 *   a ciśnieniu, NIC o cukrze. TWARDA GRANICA.
 * — ŻADNYCH NAZW FIRM.
 *
 * ⚠⚠ ETYKA — PODLASKIE:
 * — ⚠⚠ KS. JERZY POPIEŁUSZKO — POMIJAM CAŁKOWICIE.
 *   Żadnej wzmianki, w żadnym kontekście. TWARDA GRANICA.
 * — ZERO Zagłady, gett, pogromów, cmentarzy żydowskich.
 * — ZERO lat 1941/1943/1945, wysiedleń, pacyfikacji.
 * — ZERO granicy, wojska, podziemia.
 * — ZERO konfliktów narodowościowych i wyznaniowych.
 * — ZERO biedy i wyludniania.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Doprawianie"
 * (Węgorzewo) dotyczy MOMENTU i techniki solenia.
 * „Nieprecyzyjny język przepisów" (Pelplin) dotyczy słów
 * typu „do smaku". „Sól w gotowaniu" dotyczy samej soli.
 * „Zmysły — jak poznać, że jest gotowe" dotyczy gotowości.
 * Tutaj chodzi o CZTERY KIERUNKI SMAKU i o to, że równowaga
 * nie ma jednego poprawnego punktu.
 *
 * CZEGO NIE TWIERDZĘ:
 * — ⚠⚠ NIE PISZĘ, że Suchowola JEST środkiem Europy.
 * — NIE PODAJĘ liczby mieszkańców ani sołectw.
 * — NIE PODAJĘ tytułu Sobiekrajskiego ani tytułu jego pracy.
 * — NIE DATUJĘ obeliska ani kościoła co do roku.
 * — NIE PODAJĘ współrzędnych punktu.
 * — NIE PISZĘ, że gmina leży w Biebrzańskim PN.
 * — NIE PRZYPISUJĘ Suchowoli produktu z Listy Produktów
 *   Tradycyjnych.
 * — NIE TWIERDZĘ, że należy do Cittaslow.
 * — NIE MYLĘ SUCHOWOLI w powiecie sokólskim z Suchowolą
 *   w lubelskiem, świętokrzyskiem i na Mazowszu.
 *   FAQ to rozróżnia.
 * — districts: brak potwierdzonych osiedli. PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — gmina liczy 255,89 km²,
 * — prawa miejskie nadane w 1777 r., utracone w 1950
 *   i przywrócone 1 stycznia 1997 — po czterdziestu
 *   siedmiu latach przerwy,
 * — w 1775 r. Szymon Antoni Sobiekrajski wyliczył, że tutaj
 *   leży geograficzny środek Europy; wynik oparł na skrajnych
 *   punktach kontynentu i środkach odcinków między nimi,
 *   a upamiętnia go obelisk z tablicą w parku miejskim,
 * — to samo o sobie twierdzą co najmniej cztery inne miejsca:
 *   Purnuškės pod Wilnem na Litwie, gdzie stoi kolumna z 2004 r.
 *   postawiona po wyliczeniu Jeana-George'a Affholdera z 1989
 *   metodą centroidu; Diłowe na ukraińskim Zakarpaciu
 *   z obeliskiem austro-węgierskich geodetów z 1887 r.;
 *   Kremnické Bane na Słowacji z kamieniem „Stred Európy";
 *   oraz przylądek Kolka na Łotwie. Rozbieżności biorą się
 *   z odmiennych definicji granic Europy, uwzględniania lub
 *   pomijania wysp, wyboru odwzorowania kartograficznego
 *   i samej metody obliczeniowej,
 * — miasto leży po obu brzegach rzeki Olszanki, w pobliżu
 *   Biebrzańskiego Parku Narodowego,
 * — dziewiętnastowieczny kościół świętych Apostołów Piotra
 *   i Pawła oraz zachowana historyczna zabudowa drewniana.
 */
export const SUCHOWOLA: CityContent = {
  slug: "suchowola",
  h1: "Thermomix Suchowola – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Suchowola — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Suchowoli, powiat sokólski: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Suchowola — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Suchowoli. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Suchowoli z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do całej gminy.",

  highlights: highlightyStandardowe("Suchowola i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Środek zależy od tego, jak się go mierzy. W daniu tak samo.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Suchowoli – jak wygląda prezentacja?",
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
      id: "rownowaga-smakow",
      heading: "Pięć miejsc, które są środkiem Europy — czyli o równowadze smaków",
      paragraphs: [
        "W 1775 roku Szymon Antoni Sobiekrajski wyliczył, że geograficzny środek Europy leży w Suchowoli. W parku miejskim stoi obelisk z tablicą, która to upamiętnia. Metoda była prosta: wziąć skrajne punkty kontynentu i znaleźć środki odcinków między nimi.",
        "Rzecz w tym, że to samo o sobie twierdzi co najmniej cztery inne miejsca. Purnuškės pod Wilnem, gdzie po wyliczeniu Jeana-George'a Affholdera z 1989 roku, wykonanym zupełnie inną metodą — jako środek ciężkości kontynentu — postawiono w 2004 kolumnę z białego granitu. Diłowe na ukraińskim Zakarpaciu, z obeliskiem, który austro-węgierscy geodeci ustawili tam w 1887. Kremnické Bane na Słowacji, z kamieniem „Stred Európy”. I łotewski przylądek Kolka.",
        "Wszyscy liczyli uczciwie. Różnią się tym, gdzie postawili granicę Europy, czy policzyli wyspy i jakiej metody użyli. Środek nie jest faktem — jest funkcją przyjętej metody.",
        "I to jest, moim zdaniem, najlepsze możliwe wprowadzenie do sprawy, która w domowej kuchni sprawia najwięcej kłopotu: do doprawiania. Bo w każdym daniu też jest jakiś środek i też nie ma jednego poprawnego.",
        "Każde danie można pociągnąć w cztery strony. W stronę soli, kwasu, słodyczy i goryczy. Większość ludzi zna tylko pierwszą i to jest źródło całego problemu.",
        "Bo najczęstszym brakiem w domowych daniach nie jest sól. Jest kwas. Kiedy ktoś mówi, że zupa jest mdła, że „czegoś jej brakuje”, że jest jakaś płaska — odruchowo sięga po sól i dosala, a danie robi się słone i nadal płaskie. A potrzebny był kwas: sok z cytryny, łyżka octu, kiszony ogórek, kwaśna śmietana, pomidor. Kwas rozjaśnia i ożywia, robi z ciężkiego dania danie, które chce się jeść dalej. To jest jedna z tych rzeczy, które zmieniają gotowanie natychmiast po zrozumieniu.",
        "Działa to też w drugą stronę. Gdy coś jest za kwaśne albo za ostre, pomaga tłuszcz — masło, śmietana, oliwa — albo odrobina słodyczy. Nie po to, żeby danie było słodkie, tylko żeby ostry kierunek stracił krawędź.",
        "Gorycz jest w tym towarzystwie osobna: w domowej kuchni prawie nigdy nie dodaje się jej celowo, ale warto wiedzieć, skąd się bierze. Z przypalonego dna. Ze startej skórki cytrusa, jeśli zejdzie się do białej części. Z czosnku, który zbyt długo był na gorącym tłuszczu. Kiedy danie ma gorzki posmak, którego nikt nie planował, to zwykle jeden z tych trzech powodów.",
        "Zasada nadrzędna jest banalna, a łamana codziennie: doprawia się po spróbowaniu i po jednej rzeczy naraz. Nie wsypuje się soli, ziół i kwasu jednocześnie, bo potem nie wiadomo, co zadziałało. Dodać jedno, wymieszać, spróbować. Nudne, ale to jest cała technika.",
        "I rzecz, którą uważam za najważniejszą: nie ma jednego poprawnego środka. To samo danie doprawione przez dwie osoby wyjdzie inaczej i obie wersje mogą być dobre. Dokładnie tak jak z tym środkiem Europy — pytanie nie brzmi „gdzie jest naprawdę”, tylko „jaką metodę przyjmujesz”.",
        "Teraz uczciwie o sprzęcie i to jest ważne. W zamkniętym naczyniu nie da się próbować w trakcie. Nie zdejmiecie pokrywki co pięć minut, nie umoczycie łyżki, nie skorygujecie po drodze. Doprawianie przesuwa się w całości na koniec — i tam trzeba je zrobić świadomie, bo inaczej danie wychodzi płaskie mimo poprawnego przepisu.",
        "To jest zresztą jedyna rzecz, której to urządzenie nie zrobi za nikogo, i mówię to bez żalu. Ono nie ma języka. Może zmierzyć wszystko poza tym jednym, co naprawdę decyduje.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Suchowoli?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli Wasze dania bywają „jakieś płaskie” mimo że robicie wszystko zgodnie z przepisem, powiedzcie o tym przy umawianiu. To zwykle nie jest kwestia przepisu, tylko jednego brakującego kierunku.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Suchowoli"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla suchowolskiej rodziny",
      paragraphs: [
        "Gmina Suchowola liczy blisko dwieście pięćdziesiąt sześć kilometrów kwadratowych, a samo miasto rozłożyło się po obu brzegach rzeki Olszanki, w pobliżu Biebrzańskiego Parku Narodowego. Prawa miejskie Suchowola otrzymała w 1777 roku, straciła je w 1950 i odzyskała 1 stycznia 1997 — po czterdziestu siedmiu latach przerwy. Najbardziej znana jest z obelisku w parku miejskim, upamiętniającego wyliczenie Szymona Antoniego Sobiekrajskiego z 1775 roku, według którego to tutaj leży geograficzny środek Europy. Warto przy tym wiedzieć, że to samo o sobie twierdzą co najmniej cztery inne miejsca — Purnuškės pod Wilnem, Diłowe na ukraińskim Zakarpaciu, Kremnické Bane na Słowacji i łotewski przylądek Kolka — a rozbieżności biorą się z tego, gdzie stawia się granicę Europy, czy liczy się wyspy i jakiej metody się użyje. Stoi tu też dziewiętnastowieczny kościół świętych Apostołów Piotra i Pawła oraz zachowana historyczna zabudowa drewniana.",
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

  districtsHeading: "Do których części gminy Suchowola dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich miejscowości gminy. Dojazd jest wszędzie bezpłatny.",
    "Przy umawianiu wystarczy podać miejscowość i ulicę albo numer domu.",
  ],
  districts: [],

  nearbyHeading: "Poza Suchowolę też przyjadę",
  nearbyParagraphs: [
    "Dąbrowa Białostocka, Sokółka, Lipsk, Sztabin i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Dąbrowa Białostocka", "Sokółka", "Lipsk", "Sztabin"],

  about: blokOMnie("do Suchowoli", "w Suchowoli i całej gminie", REGION_PODLASIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Suchowoli bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich miejscowości gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku, bo tę nazwę nosi kilka miejscowości: chodzi o Suchowolę w powiecie sokólskim, w województwie podlaskim.",
    },
    ...faqWspolne("w Suchowoli"),
    {
      question: "Czy Suchowola jest geograficznym środkiem Europy?",
      answer:
        "Tak wynika z wyliczenia Szymona Antoniego Sobiekrajskiego z 1775 roku, upamiętnionego obeliskiem w parku miejskim. Ale to samo o sobie twierdzą co najmniej cztery inne miejsca — na Litwie, Ukrainie, Słowacji i Łotwie. Wynik zależy od tego, gdzie postawi się granicę Europy, czy policzy się wyspy i jakiej metody się użyje.",
    },
    {
      question: "Dlaczego moje danie jest „jakieś płaskie”, choć zrobiłam wszystko zgodnie z przepisem?",
      answer:
        "Najczęściej brakuje w nim kwasu, a nie soli. Sok z cytryny, łyżka octu, kiszony ogórek, kwaśna śmietana albo pomidor potrafią ożywić danie, które wydaje się mdłe. Odruch mówi, żeby dosolić — i wtedy robi się słone, a nadal płaskie.",
    },
    {
      question: "Jak doprawiać, żeby nie przesadzić?",
      answer:
        "Po spróbowaniu i po jednej rzeczy naraz. Dodać jedno, wymieszać, spróbować, dopiero potem następne — inaczej nie wiadomo, co zadziałało. Przy gotowaniu w zamkniętym naczyniu doprawianie przesuwa się w całości na koniec, bo nie da się próbować w trakcie; wtedy trzeba je zrobić świadomie. To jedyna rzecz, której urządzenie nie zrobi za nikogo, bo nie ma języka.",
    },
  ],

  geo: { lat: 53.5772, lng: 23.1039 },
};
