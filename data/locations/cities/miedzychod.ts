import type { CityContent } from "../city-content";
import {
  REGION_WIELKOPOLSKIE,
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
 * MIĘDZYCHÓD — powiat międzychodzki (siedziba),
 * woj. wielkopolskie. MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 * MIASTO: 9 905 mieszkańców (GUS 31.12.2024), 7,0 km²,
 *   gęstość 1 419,1 os./km² [ZW — domyka się po
 *   cofnięciu zaokrąglenia do 6,98 km², potwierdzone
 *   niezależnie]. PODAJĘ.
 * CAŁA GMINA: 17 802 osoby, 307,1 km², gęstość
 *   58 os./km² [ZW — DOMYKA SIĘ: 57,97 → 58]. PODAJĘ.
 *   ⚠⚠ NIE MIESZAM LICZB MIASTA I GMINY.
 *   ⚠⚠⚠ POWIERZCHNIA GMINY MA W ŹRÓDŁACH PIĘĆ WARTOŚCI
 *   (306,25 / 306,85 / 307,0 / 307,1 / 307,24 km²).
 *   PODAJĘ WYŁĄCZNIE GUS (307,1) I NIE KOMENTUJĘ —
 *   figura „spór o liczbę" zajęta (Szamotuły).
 * MIEJSCOWOŚCI: ponad pięćdziesiąt [SP — źródła podają
 *   52, 54 i 49; sołectw jest 26]. PISZĘ „ponad
 *   pięćdziesiąt miejscowości i dwadzieścia sześć
 *   sołectw".
 * LESISTOŚĆ GMINY: 50,64 % — las to ponad połowa gminy.
 * ⚠ WYSOKOŚCI N.P.M. NIE USTALONO — NIE PODAJĘ.
 * ⚠ GEO: 52,600 / 15,883. Rzeka WARTA — miasto na jej
 *   POŁUDNIOWYM brzegu. Skrzyżowanie dróg wojewódzkich
 *   182 i 160.
 *
 * ⚠⚠ ODMIANA — WYMIANA Ó : O:
 *   D. do MIĘDZYCHODU (nie „Międzychoda"!) ·
 *   Ms. w MIĘDZYCHODZIE · N. Międzychodem.
 *   ⚠⚠⚠ BŁĘDY: „do Międzychoda", „w Międzychódzie",
 *   „międzychódzki". SPRAWDZIĆ OSOBNYM PRZEBIEGIEM.
 *   Przymiotnik: MIĘDZYCHODZKI (powiat międzychodzki).
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM.
 *
 * ⚠⚠⚠ KOLIZJE NAZW — GNIAZDO „MIĘDZY-":
 *   MIĘDZYRZECZ (lubuskie, pow. międzyrzecki —
 *     najczęstsza pomyłka) · MIĘDZYBÓRZ (dolnośląskie,
 *     OPISANY W TYM CYKLU) · MIĘDZYLESIE (dolnośląskie,
 *     OPISANE W TYM CYKLU) · ⚠⚠⚠ WIEŚ MIĘDZYLESIE
 *     W GMINIE ROGOŹNO (miasto opisane W TEJ SAMEJ
 *     FALI) · MIEDZICHOWO (wielkopolskie, bez „ę").
 *   ROZGRANICZAM W FAQ — OBOWIĄZKOWO.
 *
 * ⚠⚠ DATY USTROJOWE:
 *   — PIERWSZA WZMIANKA: 1378 r.
 *   — PRAWA MIEJSKIE: urząd podaje TEŻ 1378 r., en-wiki
 *     „przed 1400" ⚠⚠⚠ [SP]. PISZĘ „ten sam rok
 *     podawany jest jako data pierwszej wzmianki
 *     i jako data praw miejskich, a inne źródło mówi
 *     tylko »przed 1400«".
 *     ⚠⚠ ZEROWEJ RÓŻNICY NIE ROBIĘ KĄTEM.
 *   — Utraty praw nie stwierdzono.
 *   — „LAUFPOMPA" — głębinowa studnia artezyjska
 *     z 1912 r., wymieniana jako zabytek miasta.
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — NAZWA OBIECUJE STO:
 *   — region promowany jest jako „KRAINA STU JEZIOR",
 *   — przechodzi przez niego „SZLAK STU JEZIOR"
 *     o długości 110,8 km,
 *   — ⚠⚠⚠ ALE STRONA TURYSTYCZNA SAMEGO URZĘDU PISZE:
 *     „aż 35 jezior w promieniu kilku kilometrów
 *     od miasta".
 *   ⚠⚠⚠ NAZWA OBIECUJE STO. WŁASNA STRONA MIASTA
 *   POKAZUJE TRZYDZIEŚCI PIĘĆ. To jest cały kąt.
 *   ⚠⚠⚠ LICZBY JEZIOR Z REJESTRU NIE PODAJĘ — źródła
 *   są niespójne, a jedna z wartości może być pomyłką
 *   z liczbą miejscowości. PISZĘ WPROST, ŻE REJESTROWEJ
 *   LICZBY NIE PODAJĘ.
 *   ⚠⚠ NIE TWIERDZĘ, ŻE NAZWA KŁAMIE — „sto" w nazwach
 *   krain jest figurą, nie pomiarem. PISZĘ TO.
 *   ⚠⚠ NIE POLICZAM JEZIOR SAMA I NIE SZACUJĘ.
 *
 * POZOSTAŁE FAKTY UŻYTE:
 * — rezerwat „Kolno Międzychodzkie": 14 ha.
 * — długości szlaków podane przez urząd: Szlak Stu
 *   Jezior 110,8 km; Nadwarciański Szlak Rowerowy,
 *   odcinek zachodni 122 km; dwie trasy piesze po
 *   mieście 2,2 km i 3,9 km.
 *   ⚠⚠ TEGO, ŻE Z 17 SZLAKÓW TYLKO 6 MA PODANĄ DŁUGOŚĆ,
 *   NIE ROBIĘ KĄTEM — figura „opisane są tylko
 *   największe" zajęta (Wronki).
 * — ⚠⚠ PROPORCJI MIASTO/GMINA (2,27 % powierzchni,
 *   55,6 % ludności) NIE ROBIĘ KĄTEM.
 * — ⚠⚠ NIEDOMKNIĘCIA LUDNOŚCI POWIATU (36 932 vs
 *   36 982) NIE UŻYWAM — figura zajęta (Międzybórz),
 *   a dane są z 2018 r.
 * — ⚠ ODLEGŁOŚCI: urząd podaje 85 km do Poznania,
 *   en-wiki „ok. 75 km". NIE PODAJĘ ŻADNEJ.
 *
 * KĄT: OBIETNICA W NAZWIE, INNA LICZBA W REJESTRZE
 * — o etykietach, które przykleja się własnej kuchni.
 * Kąt z Międzychodu: „Kraina Stu Jezior", a własna
 * strona miasta pokazuje trzydzieści pięć.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że region nosi nazwę „Kraina Stu Jezior" i ma
 *   „Szlak Stu Jezior" długości 110,8 km,
 * — ŻE STRONA TURYSTYCZNA SAMEGO URZĘDU MÓWI
 *   O TRZYDZIESTU PIĘCIU JEZIORACH. TO JEST RDZEŃ,
 * — ⚠⚠ ŻE NIE PODAJĘ LICZBY Z REJESTRU, BO ŹRÓDŁA SIĘ
 *   NIE ZGADZAJĄ, I ŻE NIE TWIERDZĘ, IŻ NAZWA KŁAMIE —
 *   „sto" jest w takich nazwach figurą,
 * — ⚠⚠ ŻE W KUCHNI TAKICH ETYKIET MAMY PEŁNO: „zdrowa
 *   kuchnia", „u nas wszystko domowe", „gotujemy
 *   od podstaw",
 * — ⚠⚠ ŻE ETYKIETA JEST OBIETNICĄ, NIE POMIAREM —
 *   i że najsurowiej rozliczamy się z niej sami przed
 *   sobą,
 * — ⚠⚠ ŻE RUCH JEST JEDEN: zamień etykietę na liczbę.
 *   „Gotuję cztery razy w tygodniu" mówi więcej niż
 *   „gotuję zdrowo" i nie da się tego przegrać,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: nazwa z obietnicą
 *   potrafi ciągnąć do przodu. Ludzie przyjeżdżają
 *   po sto jezior i znajdują trzydzieści pięć, co jest
 *   i tak bardzo dużo. Etykieta nie zawsze jest
 *   kłamstwem — czasem jest kierunkiem,
 * — ⚠ UCZCIWIE O SPRZĘCIE: „robi wszystko" to
 *   obietnica na poziomie nazwy. MÓWIĘ WPROST, że
 *   w rejestrze jest określony zestaw rzeczy i że
 *   wielu rzeczy urządzenie nie robi.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO LISTY KANONICZNEJ — kąt zajęty (Mosina).
 *   ⚠⚠⚠ TO PARA LUSTRZANA I MUSZĘ JĄ ROZGRANICZYĆ
 *   JAWNIE: tam etykieta ZANIŻAŁA (masz więcej, niż
 *   mówisz); tu etykieta ZAWYŻA (obiecuje więcej, niż
 *   jest). JEDNO ZDANIE ROZGRANICZAJĄCE — OBOWIĄZKOWO.
 * — ⚠⚠⚠ ZERO SPORU O LICZBĘ — kąt zajęty (Szamotuły).
 *   DLATEGO NIE ROZSTRZYGAM I NIE PORÓWNUJĘ WARTOŚCI
 *   POWIERZCHNI.
 * — ⚠⚠⚠ ZERO WIĘCEJ TABLIC NIŻ PRZYSTANKÓW — kąt zajęty
 *   (Złotów). ⚠⚠ TAM OPIS ROZRASTAŁ SIĘ SZYBCIEJ NIŻ
 *   RZECZ; TU NAZWA OBIECUJE WIĘCEJ, NIŻ JEST.
 * — ⚠⚠ ZERO OPISANE SĄ TYLKO NAJWIĘKSZE — kąt zajęty
 *   (Wronki). ⚠⚠⚠ TAM TEŻ SĄ JEZIORA. ŻADNEGO
 *   PORÓWNYWANIA POWIERZCHNI JEZIOR.
 * — ⚠⚠ ZERO PIĘTNASTU EGZEMPLARZY, NIE GATUNKÓW — kąt
 *   zajęty (Polanica-Zdrój).
 * — ⚠⚠ ZERO MAŁE BEZ DUŻEGO — kąt zajęty (Prusice).
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH. ⚠⚠⚠ SZCZEGÓLNA
 *   OSTROŻNOŚĆ: mowa o ETYKIECIE „zdrowa kuchnia" jako
 *   o słowie, NIGDY o tym, co jest zdrowe.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 * — ⚠⚠ ŻADNEGO OCENIANIA CZYJEGOŚ SPOSOBU ODŻYWIANIA.
 *
 * ⚠ ETYKA: ZERO ROKU 1945, PRZESIEDLEŃ I NIEMIECKICH
 *   NAZW · ZERO WĄTKU WYZNANIOWEGO · ZERO WĄTKU
 *   MILITARNEGO · ZERO KOPALNI I WYDOBYCIA (trasa
 *   „Do kopalni Wanda" POMINIĘTA) · ZERO POWODZI
 *   I POŻARÓW JAKO ŻYWIOŁU · ZERO HERBU.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MIESZAM liczb miasta i gminy.
 * — NIE PODAJĘ liczby jezior z rejestru.
 * — NIE TWIERDZĘ, że nazwa „Kraina Stu Jezior" kłamie.
 * — NIE PODAJĘ dokładnej liczby miejscowości.
 * — NIE KOMENTUJĘ pięciu wartości powierzchni gminy.
 * — NIE PODAJĘ roku praw miejskich jako pewnego.
 * — NIE PODAJĘ wysokości n.p.m. ani odległości.
 * — NIE PISZĘ o kopalni.
 * — NIE UŻYWAM nazwy mieszkańca.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Międzychód jest siedzibą powiatu międzychodzkiego
 *   i leży na południowym brzegu Warty, na skrzyżowaniu
 *   dróg wojewódzkich 182 i 160; miasto liczy 9 905
 *   mieszkańców (GUS, 31.12.2024) na 7,0 km², czyli
 *   1 419,1 osoby na kilometr kwadratowy, a cała gmina
 *   miejsko-wiejska 17 802 osoby na 307,1 km², czyli
 *   58 osób na kilometr,
 * — gmina obejmuje ponad pięćdziesiąt miejscowości
 *   i dwadzieścia sześć sołectw, a lasy zajmują 50,64 %
 *   jej powierzchni,
 * — pierwsza wzmianka pochodzi z 1378 r.; ten sam rok
 *   bywa podawany jako data praw miejskich, a inne
 *   źródło mówi tylko „przed 1400",
 * — region promowany jest jako „Kraina Stu Jezior",
 *   a „Szlak Stu Jezior" ma 110,8 km; strona turystyczna
 *   urzędu wymienia 35 jezior w promieniu kilku
 *   kilometrów od miasta,
 * — Nadwarciański Szlak Rowerowy liczy w odcinku
 *   zachodnim 122 km, a dwie trasy piesze po mieście
 *   mają 2,2 i 3,9 km,
 * — rezerwat „Kolno Międzychodzkie" ma 14 ha,
 * — „Laufpompa", głębinowa studnia artezyjska z 1912 r.,
 *   jest wymieniana jako zabytek miasta.
 */
export const MIEDZYCHOD: CityContent = {
  slug: "miedzychod",
  h1: "Thermomix Międzychód – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Międzychód — prezentacja i cena",
  seoDescription:
    "Thermomix w Międzychodzie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Dojazd bezpłatny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Międzychód — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Międzychodzie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Międzychodu z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich miejscowości w gminie.",

  highlights: highlightyStandardowe("Międzychód"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Nazwa obiecuje sto. Własna strona miasta pokazuje trzydzieści pięć.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Międzychodzie – jak wygląda prezentacja?",
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
      id: "obietnica-w-nazwie",
      heading: "Obietnica w nazwie, inna liczba w rejestrze",
      paragraphs: [
        "Okolice Międzychodu promują się jako „Kraina Stu Jezior”. Przechodzi tu „Szlak Stu Jezior” o długości stu dziesięciu i ośmiu dziesiątych kilometra.",
        "Strona turystyczna samego urzędu pisze: „aż 35 jezior w promieniu kilku kilometrów od miasta”.",
        "Liczby z rejestru nie podaję, bo źródła się nie zgadzają i nie chcę powtarzać wartości, której nie umiem potwierdzić. I od razu dodam: nie twierdzę, że nazwa kłamie. „Sto” w nazwach krain jest figurą, nie pomiarem, i wszyscy to wiemy.",
        "Zatrzymuję się przy czymś innym: przy odległości między etykietą a liczbą. Bo w kuchni tych etykiet mamy pełno i rozliczamy się z nich najsurowiej sami przed sobą.",
        "„U nas zdrowa kuchnia”. „Wszystko domowe”. „Gotujemy od podstaw”. „Nie kupujemy gotowego”. Każde z tych zdań jest obietnicą, a nie pomiarem — i każde da się z hukiem przegrać w pierwszym trudnym tygodniu, bo skoro raz kupiło się gotowy rosół, to etykieta przestała być prawdziwa.",
        "Dopowiem, bo to leży blisko i wygląda na to samo: pisałam gdzie indziej o etykiecie, która zaniża — o „u nas robi się trzy rzeczy” w kuchni, przez którą przechodzi czterdzieści dań. Tu jest odwrotnie: etykieta zawyża. To dwa oddzielne błędy, tylko jedna wspólna przyczyna — nazwa nie jest liczbą.",
        "Ruch jest jeden. Zamień etykietę na liczbę. „Gotuję cztery razy w tygodniu” mówi więcej niż „gotuję zdrowo”, jest sprawdzalne i — co najważniejsze — nie da się tego przegrać. Liczby nie trzeba obronić, wystarczy ją podać.",
        "Uczciwie o drugiej stronie: nazwa z obietnicą potrafi ciągnąć do przodu. Ludzie przyjeżdżają po sto jezior, znajdują trzydzieści pięć i wracają, bo trzydzieści pięć to i tak bardzo dużo. Etykieta nie zawsze jest kłamstwem — czasem jest kierunkiem, w którym się idzie. Pod warunkiem że nie służy do rozliczania siebie.",
        "I uczciwie o sprzęcie. „Robi wszystko” to obietnica na poziomie nazwy i nie będę jej powtarzać. W rejestrze jest określony zestaw rzeczy, które Thermomix wykonuje dobrze, i całkiem długa lista tych, których nie robi — nie upiecze chleba na kamieniu, nie zrobi frytek, nie usmaży kotleta na złoto. Na prezentacji wolę pokazać ten pierwszy zestaw i wymienić drugi, niż sprzedawać etykietę.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/funkcje", label: "Co Thermomix właściwie robi" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Międzychodzie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu liczbę, nie etykietę: ile razy w tygodniu gotujecie i dla ilu osób.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Międzychodzie"),
    sekcjaRaty("w Międzychodzie"),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Międzychodu",
      paragraphs: [
        "Międzychód jest siedzibą powiatu międzychodzkiego i leży na południowym brzegu Warty, na skrzyżowaniu dróg wojewódzkich sto osiemdziesiąt dwa i sto sześćdziesiąt. Samo miasto liczy 9 905 mieszkańców (GUS, 31.12.2024) na siedmiu kilometrach kwadratowych, czyli tysiąc czterysta dziewiętnaście osób na kilometr, a cała gmina miejsko-wiejska 17 802 osoby na 307,1 kilometra, czyli pięćdziesiąt osiem osób na kilometr, i obejmuje ponad pięćdziesiąt miejscowości oraz dwadzieścia sześć sołectw. Lasy zajmują ponad połowę powierzchni gminy. Pierwsza wzmianka pochodzi z 1378 roku — ten sam rok bywa podawany jako data praw miejskich, a inne źródło mówi tylko „przed 1400”. Szlak Stu Jezior ma sto dziesięć i osiem dziesiątych kilometra, Nadwarciański Szlak Rowerowy w odcinku zachodnim sto dwadzieścia dwa, a dwie trasy piesze po mieście — dwa i dwie dziesiąte oraz trzy i dziewięć dziesiątych kilometra. Rezerwat „Kolno Międzychodzkie” ma czternaście hektarów, a wśród zabytków miasta wymieniana jest „Laufpompa”, głębinowa studnia artezyjska z 1912 roku.",
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

  districtsHeading: "Do których części Międzychodu dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich miejscowości w gminie: Lewic, Łowynia, Kamionny, Mnichów, Mniszek, Muchocina, Radgoszczy, Gorzynia, Kolna, Zatomia Starego i Nowego, Sowiej Góry, Wielowsi i pozostałych. Wszędzie bez dopłaty.",
    "Przy umawianiu warto podać powiat międzychodzki. Nazw na „Między-” jest w Polsce kilka i łatwo trafić do Międzyrzecza w lubuskiem albo do Międzyborza czy Międzylesia na Dolnym Śląsku.",
  ],
  districts: [],

  nearbyHeading: "Poza Międzychód też przyjadę",
  nearbyParagraphs: [
    "Dojeżdżam do Sierakowa, Pniew, Wronek, Kwilcza i Skwierzyny — wszędzie bezpłatnie, tak samo jak w samym Międzychodzie.",
  ],
  nearbyTowns: ["Sieraków", "Pniewy", "Wronki", "Kwilcz", "Skwierzyna"],

  about: blokOMnie("do Międzychodu", "w Międzychodzie i okolicy", REGION_WIELKOPOLSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Międzychodu bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich miejscowości w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dwie uwagi: mówi się „do Międzychodu”, a nie „do Międzychoda”, i „w Międzychodzie”, przez „o”. A przy szukaniu warto dopisać powiat międzychodzki, bo łatwo trafić do Międzyrzecza, Międzyborza albo Międzylesia.",
    },
    ...faqWspolne("w Międzychodzie"),
    {
      question: "Obiecałam sobie, że będziemy gotować od podstaw, i już po dwóch tygodniach się poddałam. Jak to inaczej ustawić?",
      answer:
        "Zamieniając etykietę na liczbę. Okolice Międzychodu nazywają się „Krainą Stu Jezior”, a strona turystyczna urzędu wymienia trzydzieści pięć — nazwa jest obietnicą, nie pomiarem, i tak jest ze wszystkimi nazwami. „Gotujemy od podstaw” da się przegrać w pierwszym trudnym tygodniu. „Gotuję cztery obiady w tygodniu” jest sprawdzalne i nie da się tego przegrać, bo liczby nie trzeba obronić — wystarczy ją podać.",
    },
    {
      question: "Czy Thermomix naprawdę robi wszystko?",
      answer:
        "Nie i nie będę tego powtarzać. Robi dobrze określony zestaw rzeczy: zupy, sosy, ciasta, pasty, mielenie, tarcie, gotowanie na parze, podgrzewanie z mieszaniem. Nie upiecze chleba na kamieniu, nie zrobi frytek, nie usmaży kotleta na złoto i nie zastąpi piekarnika. Na prezentacji pokazuję pierwszy zestaw i wymieniam drugi — wolę, żebyście znali granicę przed zakupem.",
    },
  ],

  geo: { lat: 52.6, lng: 15.883 },
};
