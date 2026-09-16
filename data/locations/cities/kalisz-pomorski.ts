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
 * KALISZ POMORSKI — powiat drawski,
 * woj. zachodniopomorskie, Równina Wałecka.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 * MIASTO: 4 032 mieszkańców (GUS 31.12.2024), 12,0 km²,
 * gęstość 337,1 os./km².
 * CAŁA GMINA: 6 818 osób, 480,9 km², 33 MIEJSCOWOŚCI.
 * ⚠ NIE MIESZAM LICZB MIASTA I GMINY. TWARDA GRANICA.
 * ⚠ GEO: 53,2986 / 15,9060.
 * ⚠ WYSOKOŚCI N.P.M. NIE USTALONO — nie podaję.
 *
 * ⚠⚠⚠ NAJWAŻNIEJSZA PUŁAPKA JĘZYKOWA I SEO:
 *   WEDŁUG PWN PRZYMIOTNIK OD „KALISZ POMORSKI" TO
 *   „KALISKI" — DOKŁADNIE TEN SAM CO OD KALISZA
 *   W WIELKOPOLSCE (miasta ponad trzydziestokrotnie
 *   większego).
 *   ⚠⚠ DLATEGO NA CAŁEJ STRONIE NIE UŻYWAM PRZYMIOTNIKA
 *   ANI RAZU. Piszę zawsze pełną nazwę: „Kalisz Pomorski",
 *   „do Kalisza Pomorskiego", „w Kaliszu Pomorskim",
 *   a w nagłówku sekcji rodzinnej „dla rodziny z Kalisza
 *   Pomorskiego". TWARDA GRANICA BEZWZGLĘDNA.
 *   ⚠⚠ NAZWY MIESZKAŃCA TEŻ NIE UŻYWAM — „kaliszanin"
 *   to ta sama forma co dla Kalisza wielkopolskiego.
 *   ⚠ ODMIANA (PWN): D. KALISZA POMORSKIEGO,
 *   Ms. W KALISZU POMORSKIM — oba człony.
 *   ⚠⚠ ROZGRANICZAM W FAQ — obowiązkowo. Ryzyko pomyłki
 *   jest potwierdzone: kalkulatory tras podmieniają
 *   jedno miasto na drugie.
 *
 * HISTORIA — FAKTY UŻYTE:
 * — 14 WRZEŚNIA 1303 — PRAWA MIEJSKIE od margrabiów
 *   brandenburskich. ⚠ DATA DZIENNA, PEWNA.
 * — MURY MIEJSKIE Z DWIEMA BRAMAMI: KAMIENNĄ
 *   (w stronę Wałcza) i RECKĄ (w stronę Recza).
 * — ZAMEK Z XIV W., wzniesiony przez ród von Wedel.
 * — 1888–1900 — budowa linii kolejowej; miasto stało się
 *   węzłem na trasie Wałcz–Szczecin.
 * — ⚠⚠ POŻARU Z 17 MAJA 1771 R. (130 budynków)
 *   NIE UŻYWAM — opis zniszczeń.
 * — ⚠⚠ LICZBY 271 WARSZTATÓW SUKIENNICZYCH Z 1816 R.
 *   NIE UŻYWAM: jest podejrzanie wysoka jak na miasto
 *   tej wielkości i NIE ZOSTAŁA ZWERYFIKOWANA W ŹRÓDLE
 *   PIERWOTNYM. Poza tym „spis rzemiosł jako miara
 *   proporcji" to kąt zajęty (Górzno).
 * GEOGRAFIA: rzeka Drawica; jeziora Bobrowo Małe,
 *   Bobrowo Wielkie, Lasek i MŁYŃSKIE.
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — JEZIOROWY OGÓREK KISZONY:
 * — WPIS NA LISTĘ PRODUKTÓW TRADYCYJNYCH MRiRW:
 *   7 MAJA 2008 R., kategoria „warzywa i owoce",
 *   woj. zachodniopomorskie. PRZYPISANY WPROST
 *   DO KALISZA POMORSKIEGO. NIE JEST ALKOHOLEM.
 * — WYMIARY Z KARTY: 8–15 CM DŁUGOŚCI,
 *   3–5 CM ŚREDNICY, kolor oliwkowozielony.
 * — ⚠⚠⚠ METODA — TO JEST WŁAŚCIWY HAK:
 *   drewniane beczki ZANURZONE W JEZIORZE MŁYŃSKIM,
 *   w STAŁEJ TEMPERATURZE 3–4 °C; beczki dociążano tak,
 *   by woda sięgała pokrywy.
 * — produkcję zaczęto w latach sześćdziesiątych XX w.
 *   w spółdzielni przy Jeziorze Młyńskim.
 *   ⚠⚠ ZAKOŃCZENIA DZIAŁALNOŚCI SPÓŁDZIELNI (maj 1984)
 *   NIE PODAJĘ — wątek upadłości.
 * — ⚠⚠⚠ KARTA PRODUKTU WSPOMINA, ŻE PRODUKCJA
 *   ZAOPATRYWAŁA WOJSKO I ZAKŁADY KARNE.
 *   ZERO TEGO WĄTKU. TWARDA GRANICA BEZWZGLĘDNA.
 * — dziś gmina organizuje jarmark nawiązujący do tego
 *   dziedzictwa.
 *
 * ⚠⚠⚠ KISZENIE JAKO TECHNIKA JEST KĄTEM ZAJĘTYM
 *   (Dzierzgoń — kiszonki i zakwas; Pisz — marynaty
 *   i zalewy). DLATEGO KĄT TEJ STRONY NIE JEST
 *   O KISZENIU. Jest o STAŁYCH WARUNKACH KONTRA
 *   PILNOWANIU. Ani jednego zdania o tym, JAK COKOLWIEK
 *   ukisić. TWARDA GRANICA BEZWZGLĘDNA.
 *
 * ⚠ OSIEDLI STATUTOWYCH MIASTA NIE USTALONO —
 *   districts PUSTE.
 *
 * KĄT: STAŁE WARUNKI ZAMIAST PILNOWANIA — czyli dlaczego
 * warto raz ustawić otoczenie, zamiast w kółko poprawiać
 * przebieg.
 * Kąt od beczek zanurzonych w Jeziorze Młyńskim: woda
 * trzymała stałe trzy–cztery stopnie sama z siebie,
 * bez dozoru, bez chłodni i bez niczyjej uwagi.
 * Nikt tego nie pilnował, bo nie było czego pilnować.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że jeziorowy ogórek kiszony trafił na ministerialną
 *   listę 7 maja 2008 r. i że jego cechą wyróżniającą
 *   jest miejsce, w którym dojrzewał: drewniane beczki
 *   zanurzone w Jeziorze Młyńskim, dociążone tak, by woda
 *   sięgała pokrywy, przy stałej temperaturze trzech
 *   do czterech stopni,
 * — ŻE TO NIE BYŁ SPOSÓB NA OSZCZĘDNOŚĆ, TYLKO
 *   NA STABILNOŚĆ — to jest rdzeń. Jezioro nie było
 *   tańszą piwnicą; było warunkiem, który nie zmieniał się
 *   sam z siebie,
 * — ⚠⚠ ŻE W KUCHNI ROBIMY ODWROTNIE: pilnujemy przebiegu
 *   zamiast ustawić warunki. Stąd stanie nad garnkiem,
 *   zaglądanie, poprawianie i ciągłe wracanie,
 * — ⚠⚠ ŻE TO SIĘ MŚCI W JEDEN KONKRETNY SPOSÓB:
 *   PILNOWANIE DZIAŁA TYLKO WTEDY, GDY JEST SIĘ OBECNYM,
 *   a warunek raz ustawiony działa także wtedy, gdy się
 *   wyszło z kuchni,
 * — ⚠⚠ ŻE Z TEGO WYNIKA PYTANIE, KTÓRE WARTO SOBIE
 *   ZADAĆ RAZ NA KWARTAŁ: co w mojej kuchni wymaga
 *   pilnowania, a dałoby się ustawić.
 *   ⚠⚠⚠ NIE PODAJĘ ODPOWIEDZI ANI PRZYKŁADÓW — każdy
 *   przykład byłby albo instrukcją kulinarną, albo poradą
 *   o przechowywaniu żywności,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: CZĘŚCI RZECZY NIE DA SIĘ
 *   USTAWIĆ I TRZEBA PRZY NICH BYĆ. Udawanie, że wszystko
 *   da się zautomatyzować, kosztuje więcej niż uczciwe
 *   przyznanie, że przy czymś się po prostu stoi,
 * — ⚠ UCZCIWIE O SPRZĘCIE: URZĄDZENIE JEST DOKŁADNIE
 *   TYM — ustawionym warunkiem zamiast pilnowania.
 *   Trzyma temperaturę i miesza samo. ⚠⚠ ALE MÓWIĘ TEŻ
 *   WPROST, ŻE TO NIE JEST TO SAMO CO JEZIORO: jezioro
 *   trzymało warunek miesiącami i za darmo, a urządzenie
 *   robi to przez czas jednego gotowania i kosztuje
 *   tyle, ile kosztuje.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO KISZENIA, ZAKWASU, MARYNAT I ZALEW —
 *   kąty zajęte (Dzierzgoń, Pisz). TWARDA GRANICA
 *   BEZWZGLĘDNA — rozgraniczam wprost.
 * — ⚠⚠⚠ ZERO PRZECHOWYWANIA ŻYWNOŚCI — kąt zajęty
 *   (Dobiegniew), a przy beczkach w jeziorze to
 *   jednocześnie ryzyko porady o bezpieczeństwie żywności.
 *   Opisuję METODĘ HISTORYCZNĄ, nie zalecam jej nikomu
 *   i nie piszę ani słowa o tym, jak cokolwiek trzymać.
 * — ⚠⚠ ZERO GOTOWANIA NA ZAPAS I MROŻENIA — kąt zajęty
 *   (Stopnica).
 * — ⚠⚠ ZERO PRZERWY W ŚRODKU GOTOWANIA — kąt zajęty
 *   (Pasłęk). Tam chodzi o WYJŚCIE Z DOMU w połowie;
 *   TUTAJ o TO, CO TRZEBA PILNOWAĆ, A CO NIE.
 * — ⚠⚠ ZERO MINUT I ROZPOZNAWANIA GOTOWOŚCI — kąty zajęte
 *   (Mońki, Trzebiatów).
 * — ⚠ ZERO UKŁADU KUCHNI — kąt zajęty (Myślibórz).
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 *   ⚠⚠ TRZY–CZTERY STOPNIE PODAJĘ WYŁĄCZNIE JAKO
 *   TEMPERATURĘ WODY W JEZIORZE, NIGDY JAKO NASTAWĘ.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNEGO PRZYKŁADU „CO USTAWIĆ ZAMIAST PILNOWAĆ".
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ⚠⚠⚠ ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI —
 *   przy beczkach zanurzonych w jeziorze to ryzyko numer
 *   jeden na tej stronie. TWARDA GRANICA BEZWZGLĘDNA.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠⚠ ZERO WĄTKU WOJSKA I ZAKŁADÓW KARNYCH
 *   z karty produktu.
 * — ⚠⚠ ZERO ZAKOŃCZENIA DZIAŁALNOŚCI SPÓŁDZIELNI
 *   W 1984 R. — wątek upadłości.
 * — ⚠⚠ ZERO POŻARU Z 1771 R.
 * — ⚠⚠ ZERO ROKU 1945 I PRZESIEDLEŃ.
 * — ⚠ ZERO PRZYMIOTNIKA „KALISKI" — patrz wyżej.
 * — ⚠ ŹRÓDŁA ODRZUCONE: superpolonia.info,
 *   infodlapolaka.pl, gminya1.pl, nonsa.pl.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MIESZAM liczb miasta i gminy.
 * — NIE PODAJĘ liczby warsztatów z 1816 r.
 * — NIE PODAJĘ wysokości n.p.m.
 * — NIE UŻYWAM przymiotnika ani nazwy mieszkańca.
 * — NIE ZALECAM NIKOMU METODY Z BECZKAMI.
 * — NIE PODAJĘ PRZYKŁADÓW RZECZY DO „USTAWIENIA".
 * — NIE PODAJĘ nazw osiedli.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Kalisz Pomorski leży na Równinie Wałeckiej, nad
 *   Drawicą, w powiecie drawskim; jest miastem w gminie
 *   miejsko-wiejskiej i liczy 4 032 mieszkańców
 *   (GUS, 31.12.2024) na 12 km², a cała gmina 6 818 osób
 *   na 480,9 km² w 33 miejscowościach,
 * — prawa miejskie nadali mu margrabiowie brandenburscy
 *   14 września 1303 r.,
 * — miasto miało mury z dwiema bramami — Kamienną
 *   w stronę Wałcza i Recką w stronę Recza — oraz zamek
 *   z XIV w., wzniesiony przez ród von Wedel,
 * — linię kolejową budowano w latach 1888–1900; miasto
 *   stało się węzłem na trasie z Wałcza do Szczecina,
 * — w gminie leżą jeziora Bobrowo Małe, Bobrowo Wielkie,
 *   Lasek i Młyńskie,
 * — jeziorowy ogórek kiszony trafił na ministerialną
 *   Listę Produktów Tradycyjnych 7 maja 2008 r.; ma
 *   od 8 do 15 cm długości i od 3 do 5 cm średnicy,
 *   a jego cechą wyróżniającą było dojrzewanie
 *   w drewnianych beczkach zanurzonych w Jeziorze
 *   Młyńskim, dociążonych tak, by woda sięgała pokrywy,
 *   przy stałej temperaturze 3–4 °C. Produkcję zaczęto
 *   w latach sześćdziesiątych XX w. w spółdzielni
 *   nad tym jeziorem, a dziś gmina organizuje jarmark
 *   nawiązujący do tej tradycji.
 */
export const KALISZ_POMORSKI: CityContent = {
  slug: "kalisz-pomorski",
  h1: "Thermomix Kalisz Pomorski – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Kalisz Pomorski — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Kaliszu Pomorskim: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Dojazd bezpłatny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Kalisz Pomorski — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Kaliszu Pomorskim. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Kalisza Pomorskiego z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wsi w gminie.",

  highlights: highlightyStandardowe("Kalisz Pomorski"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Pilnowanie działa, gdy jesteś w kuchni. Ustawiony warunek działa także wtedy, gdy wyjdziesz.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Kaliszu Pomorskim – jak wygląda prezentacja?",
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
      id: "stale-warunki",
      heading: "Beczki w jeziorze, czyli warunek zamiast pilnowania",
      paragraphs: [
        "Siódmego maja 2008 roku na ministerialną Listę Produktów Tradycyjnych trafił jeziorowy ogórek kiszony z Kalisza Pomorskiego. Karta produktu podaje wymiary: od ośmiu do piętnastu centymetrów długości, od trzech do pięciu średnicy, kolor oliwkowozielony.",
        "Ale wyróżniało go co innego — miejsce, w którym dojrzewał. Drewniane beczki zanurzano w Jeziorze Młyńskim i dociążano tak, żeby woda sięgała pokrywy. Temperatura w tym miejscu trzymała się stale między trzema a czterema stopniami. Produkcję zaczęto tam w latach sześćdziesiątych, w spółdzielni nad samym jeziorem.",
        "Zwróćcie uwagę, czego w tym opisie nie ma. Nie ma nikogo, kto sprawdza temperaturę. Nie ma dozoru, chłodni ani niczyjej uwagi. Nikt tego nie pilnował, bo nie było czego pilnować — warunek trzymał się sam.",
        "To nie był sposób na oszczędność, tylko na stabilność. Jezioro nie było tańszą piwnicą. Było warunkiem, który nie zmieniał się z dnia na dzień ani z tygodnia na tydzień.",
        "A w kuchni robimy dokładnie odwrotnie i rzadko to zauważamy.",
        "Pilnujemy przebiegu, zamiast ustawić warunki. Stoimy nad garnkiem. Zaglądamy, poprawiamy, mieszamy „na wszelki wypadek”, wracamy z drugiego pokoju sprawdzić. Cała ta praca idzie w utrzymywanie czegoś, co przy dobrze ustawionym warunku utrzymałoby się bez nas.",
        "I to się mści w jeden konkretny sposób, zawsze ten sam: pilnowanie działa wyłącznie wtedy, kiedy się jest. Warunek raz ustawiony działa także wtedy, gdy się wyszło z kuchni — a w domowym wieczorze wychodzi się z kuchni bez przerwy.",
        "Stąd pytanie, które warto sobie zadać raz na kwartał i które zajmuje pięć minut: co u mnie wymaga pilnowania, a dałoby się ustawić. Nie podpowiem odpowiedzi — zależy od tego, co gotujecie, a poza tym każda moja podpowiedź byłaby albo instrukcją kulinarną, albo poradą o przechowywaniu jedzenia, a od żadnej z tych rzeczy nie jestem.",
        "Uczciwie o drugiej stronie, bo bez niej brzmiałoby to jak obietnica. Części rzeczy nie da się ustawić i po prostu trzeba przy nich być. Udawanie, że wszystko da się przestawić na tryb bezobsługowy, kosztuje więcej niż uczciwe przyznanie, że przy czymś się stoi — bo kończy się przypilnowaniem tego, co i tak by się zrobiło, a przegapieniem tego, co wymagało uwagi.",
        "Na koniec o urządzeniu, bo jest dokładnie tym: ustawionym warunkiem zamiast pilnowania. Trzyma temperaturę i miesza samo, więc danie nie wymaga, żeby ktoś przy nim stał.",
        "Ale nie jest jeziorem i nie będę tego udawać. Jezioro trzymało swój warunek miesiącami, bez prądu i bez niczyjego udziału. Urządzenie robi to przez czas jednego gotowania i kosztuje tyle, ile kosztuje. To jest ta sama zasada w zupełnie innej skali — i warto wiedzieć którą się kupuje.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/funkcje", label: "Funkcje TM7" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Kaliszu Pomorskim?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, przy czym w Waszej kuchni trzeba stać najdłużej — od tego zacznę, bo tam różnicę widać najszybciej.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Kaliszu Pomorskim"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Kalisza Pomorskiego",
      paragraphs: [
        "Kalisz Pomorski leży na Równinie Wałeckiej, nad Drawicą, w powiecie drawskim, i jest miastem w gminie miejsko-wiejskiej: samo miasto liczy ponad cztery tysiące mieszkańców na dwunastu kilometrach kwadratowych, a cała gmina blisko siedem tysięcy osób na czterystu osiemdziesięciu kilometrach kwadratowych, w trzydziestu trzech miejscowościach. Prawa miejskie nadali mu margrabiowie brandenburscy czternastego września 1303 roku. Miasto miało mury z dwiema bramami — Kamienną, w stronę Wałcza, i Recką, w stronę Recza — oraz zamek z czternastego wieku, wzniesiony przez ród von Wedel. Linię kolejową budowano w latach 1888–1900 i miasto stało się węzłem na trasie z Wałcza do Szczecina. W gminie leżą jeziora Bobrowo Małe, Bobrowo Wielkie, Lasek i Młyńskie. Siódmego maja 2008 roku na ministerialną Listę Produktów Tradycyjnych trafił jeziorowy ogórek kiszony: od ośmiu do piętnastu centymetrów długości i od trzech do pięciu średnicy, a jego cechą wyróżniającą było dojrzewanie w drewnianych beczkach zanurzonych w Jeziorze Młyńskim, dociążonych tak, by woda sięgała pokrywy, przy stałej temperaturze trzech do czterech stopni. Produkcję zaczęto w latach sześćdziesiątych w spółdzielni nad tym jeziorem, a dziś gmina organizuje jarmark nawiązujący do tej tradycji.",
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

  districtsHeading: "Do których części Kalisza Pomorskiego dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich trzydziestu trzech miejscowości w gminie — a gmina jest rozległa, ponad czterysta osiemdziesiąt kilometrów kwadratowych. Bez wyjątku i bez dopłaty za odległość.",
    "Przy umawianiu wystarczy podać ulicę i numer domu albo nazwę miejscowości. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Kalisz Pomorski też przyjadę",
  nearbyParagraphs: [
    "Drawsko Pomorskie i Wałcz są w zasięgu jednej trasy, podobnie jak Choszczno i Stargard — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Drawsko Pomorskie", "Wałcz", "Choszczno", "Stargard"],

  about: blokOMnie("do Kalisza Pomorskiego", "w Kaliszu Pomorskim", REGION_POMORZE_ZACHODNIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Kalisza Pomorskiego bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich trzydziestu trzech miejscowości w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Doprecyzowanie jest tu wyjątkowo potrzebne: chodzi o Kalisz Pomorski w powiecie drawskim w województwie zachodniopomorskim, a nie o Kalisz w Wielkopolsce. To dwa różne miasta, a mylą je nawet kalkulatory tras.",
    },
    ...faqWspolne("w Kaliszu Pomorskim"),
    {
      question: "Co daje ustawienie warunków zamiast pilnowania?",
      answer:
        "To, że warunek działa również wtedy, gdy wyjdziesz z kuchni — a pilnowanie działa wyłącznie wtedy, kiedy jesteś. Taka była zresztą cała tajemnica tutejszych beczek zanurzanych w Jeziorze Młyńskim: woda trzymała stałe trzy do czterech stopni sama z siebie, bez dozoru. Warto raz na kwartał zapytać samą siebie, co w kuchni wymaga pilnowania, a dałoby się po prostu ustawić.",
    },
    {
      question: "Czy Thermomix załatwia to za nas?",
      answer:
        "W swojej skali tak: trzyma temperaturę i miesza sam, więc danie nie wymaga, żeby ktoś przy nim stał. Ale nie jest jeziorem i nie będę tego udawać — jezioro trzymało swój warunek miesiącami, bez prądu i bez niczyjego udziału, a urządzenie robi to przez czas jednego gotowania. Warto też pamiętać, że części rzeczy nie da się ustawić i po prostu trzeba przy nich być.",
    },
  ],

  geo: { lat: 53.2986, lng: 15.906 },
};
