import type { CityContent } from "../city-content";
import {
  REGION_KUJAWSKO_POMORSKIE,
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
 * MOGILNO — powiat mogileński, woj. kujawsko-pomorskie,
 * PAŁUKI.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 * MIASTO: 10 895 mieszkańców (GUS 31.12.2024), 8,3 km².
 * CAŁA GMINA MIEJSKO-WIEJSKA: 23 752 osoby, 256,3 km².
 * ⚠ NIE MA ODRĘBNEJ GMINY WIEJSKIEJ MOGILNO.
 * ⚠ NIE MIESZAM LICZB MIASTA I GMINY. TWARDA GRANICA.
 * ⚠ ODMIANA: D. MOGILNA, Ms. W MOGILNIE,
 *   przym. MOGILEŃSKI (powiat mogileński).
 *   ⚠ NAZWY MIESZKAŃCA NIE USTALONO — NIE UŻYWAM ŻADNEJ.
 * ⚠ ISTNIEJĄ WSIE MOGILNO W MAŁOPOLSKIM I W ŁÓDZKIM.
 *   ⚠ MOGILNO ≠ MOGILANY.
 *
 * HISTORIA — FAKTY UŻYTE:
 * — ⚠⚠ RDZEŃ KĄTA, CZĘŚĆ PIERWSZA:
 *   PRAWA MIEJSKIE Z DATĄ DZIENNĄ — 17 MAJA 1398 R.,
 *   nadane przez Władysława Jagiełłę.
 *   ⚠⚠ TREŚCI PRZYWILEJU NIE USTALONO — NIE WYMYŚLAM
 *   ŻADNYCH TARGÓW ANI JARMARKÓW. Znamy datę,
 *   nie znamy zawartości. TWARDA GRANICA.
 * — ⚠⚠ RDZEŃ KĄTA, CZĘŚĆ DRUGA — KOLEJ DOCHODZIŁA
 *   DO MIASTA W CZTERECH ETAPACH, KAŻDY PO OKOŁO
 *   DWUDZIESTU LATACH CZEKANIA:
 *   — 26 maja 1872 — odcinek Poznań–Inowrocław, 101 km,
 *   — 15 października 1892 — linia do Strzelna, 16,7 km,
 *   — 1 października 1912 — linia do Barcina, 23,9 km,
 *   — 1921 — linia do Orchowa, 20,4 km.
 *   ⚠ JEDNO ŹRÓDŁO. ⚠ ROZSTAWU TORÓW NIE PODANO —
 *   NIE PISZĘ, ŻE TO BYŁA WĄSKOTORÓWKA.
 * — geografia: miasto leży MIĘDZY DWOMA JEZIORAMI,
 *   na Pojezierzu Gnieźnieńskim, nad rzeczułką PANNĄ.
 * — ratusz w stylu eklektycznym z 1890 r.
 * — ⚠ HODOWLA KONI RASOWYCH W XIX W. — dwa źródła
 *   wtórne, NIE UŻYWAM (kontekst „cesarskich stadnin"
 *   niesie wątek zaborczy).
 *
 * ⚠⚠ LISTA PRODUKTÓW TRADYCYJNYCH: BRAK produktu
 *   z gminy Mogilno na liście MRiRW.
 *   ⚠⚠ PUŁAPKA: katalog KPODR wymienia „chleb
 *   kwieciszewski" i „szynkę wędzoną" z Kwieciszewa
 *   (gmina Mogilno) — ALE TO KATALOG REGIONALNY,
 *   NIE MINISTERIALNA LISTA. NIE PODAJĘ ICH JAKO
 *   PRODUKTÓW Z LISTY. TWARDA GRANICA.
 * ⚠ OSIEDLI MIASTA NIE USTALONO — districts PUSTE.
 *
 * KĄT: TEMPERATURA SKŁADNIKÓW — co wyjąć z lodówki,
 * zanim się zacznie.
 * Kąt od kolei: cztery linie, cztery daty, między nimi
 * po dwadzieścia lat. Nic nie dojechało do Mogilna od razu.
 * W kuchni jest cała grupa składników, które też muszą
 * najpierw dojść — i prawie nikt im na to nie daje czasu.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że kolej dochodziła do Mogilna czterokrotnie,
 *   w 1872, 1892, 1912 i 1921 roku, z dokładnym
 *   kilometrażem, i że między kolejnymi liniami mijało
 *   po dwadzieścia lat,
 * — ŻE W KUCHNI ISTNIEJE GRUPA SKŁADNIKÓW, KTÓRE MUSZĄ
 *   DOJŚĆ DO TEMPERATURY POKOJOWEJ, ZANIM ZACZNIE SIĘ
 *   ROBOTĘ — i że to jest chyba najczęściej pomijany
 *   krok w domowym gotowaniu,
 * — ⚠⚠ CO KONKRETNIE I DLACZEGO — TO JEST RDZEŃ:
 *   — MASŁO PROSTO Z LODÓWKI NIE UTRZE SIĘ Z CUKREM.
 *     Twarde masło nie zwiąże powietrza, więc ciasto
 *     wychodzi zbite — i nie jest to wina przepisu,
 *   — ZIMNE JAJKA DODANE DO UTARTEGO MASŁA POTRAFIĄ
 *     JE ZWARZYĆ: masa się rozwarstwia, bo tłuszcz
 *     gwałtownie tężeje,
 *   — MIĘSO PROSTO Z LODÓWKI SMAŻY SIĘ NIERÓWNO —
 *     wierzch jest gotowy, środek jeszcze zimny,
 *   — ⚠ ODWROTNIE W CIEŚCIE KRUCHYM: TAM MASŁO MUSI
 *     BYĆ ZIMNE, bo ma zostać kawałkami, a nie połączyć
 *     się z mąką. To jest jedyny wyjątek i dlatego
 *     ludzie się gubią,
 * — ŻE CAŁE ROZWIĄZANIE POLEGA NA JEDNEJ CZYNNOŚCI:
 *   WYJĄĆ ZAWCZASU. Nie na technice, nie na sprzęcie —
 *   na kolejności,
 * — ⚠ UCZCIWIE O SPRZĘCIE: Thermomix podgrzeje delikatnie
 *   i to bywa wyjściem awaryjnym, gdy się zapomniało.
 *   ALE TO JEST RATUNEK, A NIE METODA — rozpuszczone
 *   masło to już inny składnik niż miękkie masło i daje
 *   inne ciasto. Mówię to wprost.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI:
 *   JAK DŁUGO COKOLWIEK MOŻE STAĆ POZA LODÓWKĄ,
 *   W JAKIEJ TEMPERATURZE, CZY TO BEZPIECZNE.
 *   Piszę WYŁĄCZNIE „wyjmij zawczasu", bez żadnych
 *   czasów. TO JEST NAJWIĘKSZE RYZYKO TEJ STRONY.
 *   TWARDA GRANICA BEZWZGLĘDNA.
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH NAZW FIRM.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ⚠⚠ ZERO PRODUKTÓW Z KATALOGU KPODR JAKO „LISTY".
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠⚠ ZERO 11 WRZEŚNIA 1939 R. I ZERO OBOZU PRACY
 *   PRZYMUSOWEJ 1941–1943. Oba tematy wypływają jako
 *   pierwsze wyniki wyszukiwania. TWARDA GRANICA
 *   BEZWZGLĘDNA.
 * — ⚠⚠ ZERO ETYMOLOGII NAZWY OD „MOGIŁY". Fakt istnieje,
 *   ale przy lekkim tekście o gotowaniu jest nie do obrony.
 *   TWARDA GRANICA.
 * — ZERO pożaru z 1808 r.
 * — ZERO klasztoru benedyktynów, herbu i wątków
 *   wyznaniowych.
 * — ZERO wyludniania (−14,0% w latach 2002–2024)
 *   i bezrobocia.
 * — ZERO hodowli koni i „cesarskich stadnin".
 * — ZERO wątków militarnych i politycznych.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH — OBOWIĄZKOWE:
 * — „CZEGO NIE DA SIĘ PRZYSPIESZYĆ" (Namysłów) dotyczy
 *   PROCESÓW, KTÓRE TRWAJĄ SWOJE — fermentacji.
 *   ⚠ TUTAJ chodzi o STAN POCZĄTKOWY SKŁADNIKA, nie
 *   o proces. Odsyłam tam wprost.
 * — „CIASTO DROŻDŻOWE" (Wołczyn) dotyczy WYRABIANIA
 *   I ROZCZYNU.
 * — „SERNIK I MASY NA CIASTO" (Włoszczowa) dotyczy
 *   GRANIC URZĄDZENIA PRZY MASACH.
 * — „PANIERKA" (Hel) dotyczy TRZECH MISEK.
 * TUTAJ chodzi o TO, W JAKIEJ TEMPERATURZE SKŁADNIK
 * TRAFIA DO ROBOTY.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MIESZAM liczb miasta i gminy.
 * — NIE PODAJĘ treści przywileju z 1398 r.
 * — NIE PISZĘ, że linie kolejowe były wąskotorowe.
 * — NIE PODAJĘ produktów z katalogu KPODR jako z Listy.
 * — NIE ORZEKAM, jak długo cokolwiek może stać
 *   poza lodówką.
 * — NIE ROZWIJAM etymologii nazwy miasta.
 * — NIE PODAJĘ nazw osiedli ani nazwy mieszkańca.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Mogilno leży na Pałukach, na Pojezierzu Gnieźnieńskim,
 *   między dwoma jeziorami i nad rzeczułką Panną; jest
 *   siedzibą powiatu mogileńskiego i liczy 10 895
 *   mieszkańców (GUS, 31.12.2024) na ośmiu i trzech
 *   dziesiątych kilometra kwadratowego, a cała gmina
 *   miejsko-wiejska ma 23 752 osoby na 256,3 km²,
 * — prawa miejskie nadał miastu Władysław Jagiełło
 *   17 maja 1398 roku — z datą dzienną,
 * — kolej dochodziła do Mogilna w czterech etapach:
 *   26 maja 1872 roku odcinek Poznań–Inowrocław o długości
 *   101 km, 15 października 1892 roku linia do Strzelna
 *   (16,7 km), 1 października 1912 roku linia do Barcina
 *   (23,9 km) i w 1921 roku linia do Orchowa (20,4 km),
 * — ratusz w stylu eklektycznym pochodzi z 1890 roku.
 */
export const MOGILNO: CityContent = {
  slug: "mogilno",
  h1: "Thermomix Mogilno – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Mogilno — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Mogilnie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Mogilno — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Mogilnie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Mogilna z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wsi w gminie.",

  highlights: highlightyStandardowe("Mogilno"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Są składniki, które muszą najpierw dojść. Nic więcej.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Mogilnie – jak wygląda prezentacja?",
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
      id: "temperatura-skladnikow",
      heading: "Cztery linie, cztery daty, po dwadzieścia lat przerwy",
      paragraphs: [
        "Do Mogilna kolej dochodziła czterokrotnie i za każdym razem trzeba było poczekać. 26 maja 1872 roku ruszył odcinek Poznań–Inowrocław o długości stu jeden kilometrów. Dwadzieścia lat później, 15 października 1892, linia do Strzelna — szesnaście i siedem dziesiątych kilometra. Potem 1 października 1912 linia do Barcina, dwadzieścia trzy i dziewięć dziesiątych. I wreszcie w 1921 roku linia do Orchowa, dwadzieścia koma cztery kilometra.",
        "Nic nie dojechało tu od razu. Między jedną a drugą linią mijało mniej więcej dwadzieścia lat.",
        "W kuchni jest cała grupa składników, które też muszą najpierw dojść — i to jest chyba najczęściej pomijany krok w domowym gotowaniu. Nie technika, nie sprzęt. Po prostu wyjęcie czegoś zawczasu.",
        "Masło prosto z lodówki nie utrze się z cukrem. Twarde masło nie zwiąże powietrza, więc masa nie urośnie, a ciasto wychodzi zbite i ciężkie. Potem człowiek myśli, że przepis był zły — a przepis był w porządku, tylko masło wyszło z lodówki pięć minut wcześniej.",
        "Zimne jajka dodane do utartego masła potrafią je zwarzyć. Masa nagle się rozwarstwia, robi się grudkowata i wygląda na zepsutą, bo tłuszcz gwałtownie stężał od zimna. To nie jest katastrofa, da się to jeszcze uratować, ale w ogóle nie musiało się wydarzyć.",
        "Mięso prosto z lodówki smaży się nierówno — wierzch jest już gotowy, kiedy środek dopiero przestaje być zimny. Efekt widać na przekroju i żadna zmiana ognia tego nie naprawi.",
        "I teraz wyjątek, przez który wszyscy się gubią: w cieście kruchym jest dokładnie odwrotnie. Tam masło musi być zimne, bo ma zostać kawałkami między mąką, a nie połączyć się z nią w jednolitą masę. To właśnie te kawałki dają kruchość. Jedna zasada, jeden wyjątek — i warto pamiętać, który jest który.",
        "Poza tym jednym przypadkiem reguła jest prosta do bólu: wyjąć zawczasu. To nie wymaga niczego oprócz przypomnienia sobie o tym w odpowiednim momencie, czyli na samym początku, a nie wtedy, gdy miska już stoi na blacie.",
        "O rzeczach, które trwają swoje i których nie da się popędzić, pisałam osobno przy innym mieście — ale tam chodzi o procesy. Tu chodzi o coś prostszego: o stan, w jakim składnik w ogóle wchodzi do roboty.",
        "Uczciwie o sprzęcie na koniec. Thermomix podgrzeje delikatnie i bywa to wyjściem awaryjnym, gdy się zapomniało — masło da się doprowadzić do miękkości bez rozpuszczania. Ale to jest ratunek, a nie metoda. Rozpuszczone masło to już inny składnik niż masło miękkie i daje inne ciasto. Mówię to wprost, bo lepiej wiedzieć niż się potem dziwić.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Mogilnie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli u Was w domu coś regularnie nie wychodzi — ciasto, masa, mięso — powiedz to przy umawianiu. Bardzo często przyczyna leży na samym początku.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Mogilnie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla mogileńskiej rodziny",
      paragraphs: [
        "Mogilno leży na Pałukach, na Pojezierzu Gnieźnieńskim, między dwoma jeziorami i nad rzeczułką Panną; jest siedzibą powiatu mogileńskiego i liczy blisko jedenaście tysięcy mieszkańców na ośmiu i trzech dziesiątych kilometra kwadratowego, a cała gmina miejsko-wiejska ma ponad dwadzieścia trzy tysiące osób. Prawa miejskie nadał miastu Władysław Jagiełło 17 maja 1398 roku — z datą dzienną, co przy średniowiecznych przywilejach jest rzadkością. Kolej dochodziła tu w czterech etapach: w 1872 roku odcinek Poznań–Inowrocław o długości stu jeden kilometrów, w 1892 linia do Strzelna, w 1912 do Barcina i w 1921 do Orchowa. Ratusz w stylu eklektycznym pochodzi z 1890 roku.",
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

  districtsHeading: "Do których części Mogilna dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — od placu Wolności i śródmieścia po osiedla nad jeziorami i zabudowę przy wylotach dróg. Dojeżdżam też do wsi w gminie.",
    "Przy umawianiu wystarczy podać ulicę i numer domu albo nazwę miejscowości. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Mogilno też przyjadę",
  nearbyParagraphs: [
    "Strzelno, Barcin, Janikowo, Kruszwica, Pakość, Żnin i Inowrocław są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Strzelno", "Barcin", "Janikowo", "Kruszwica"],

  about: blokOMnie("do Mogilna", "w Mogilnie", REGION_KUJAWSKO_POMORSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Mogilna bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wsi w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku: Mogilno jest miastem w gminie miejsko-wiejskiej i siedzibą powiatu — przyjeżdżam wszędzie na tych samych zasadach.",
    },
    ...faqWspolne("w Mogilnie"),
    {
      question: "Dlaczego masło z lodówki nie chce się utrzeć z cukrem?",
      answer:
        "Bo twarde masło nie zwiąże powietrza. Masa nie urośnie i ciasto wychodzi zbite — a przepis nie ma z tym nic wspólnego. To samo dotyczy zimnych jajek dodanych do utartego masła: masa potrafi się rozwarstwić, bo tłuszcz gwałtownie tężeje od zimna. Rozwiązanie to jedna czynność: wyjąć zawczasu, na samym początku.",
    },
    {
      question: "Czy masło zawsze powinno być miękkie?",
      answer:
        "Nie — w cieście kruchym jest odwrotnie. Tam masło musi być zimne, bo ma zostać kawałkami między mąką, a nie połączyć się z nią w jednolitą masę; te kawałki dają kruchość. To jedyny duży wyjątek od reguły i właśnie dlatego tak łatwo się pogubić.",
    },
  ],

  geo: { lat: 52.6578, lng: 17.9557 },
};
