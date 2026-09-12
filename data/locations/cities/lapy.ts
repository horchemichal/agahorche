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
 * ŁAPY — gmina miejsko-wiejska w powiecie białostockim.
 * MIASTO 14 333, GMINA 20 160 (GUS 31.12.2024).
 * POWIERZCHNIA MIASTA 12,1 km², GMINY 127,7 km².
 * ⚠ Notatka projektowa podawała 15 000 — ZAWYŻONE.
 * ⚠ Źródła popularne mówią o „16-tysięcznym mieście" —
 * NIEAKTUALNE. Trzymam się GUS.
 * LICZBY SOŁECTW NIE PODAJĘ — nie potwierdzono.
 *
 * PRAWA MIEJSKIE — ROZPORZĄDZENIE PREZESA RADY MINISTRÓW
 * z 25 LIPCA 1924 r., W ŻYCIE WESZŁO 1 STYCZNIA 1925 r.
 * MIASTO Z XX WIEKU, zbudowane wokół kolei, nie wokół rynku.
 * POWSTAŁO ZE ZLEPIENIA osady Łapy i kilku wsi o nazwach
 * zaczynających się od „Łapy-".
 *
 * ⚠⚠ LISTA PRODUKTÓW TRADYCYJNYCH — „KLINEK Z ŁAP",
 * data wpisu 12 CZERWCA 2019 r., kategoria produkty mleczne.
 * TO JEST PODSTAWA KĄTA.
 * Cechy z opisu urzędowego: kształt SPŁASZCZONEGO STOŻKA,
 * przekrój owalny; „struktura zwarta, jednolita" ze ŚLADAMI
 * ODCIŚNIĘTEJ STRUKTURY WORKA PŁÓCIENNEGO Z CHARAKTERYSTYCZNYM
 * ŚLADEM RĘCZNEGO WIĄZANIA; masa 0,3–0,5 kg; smak mleczny,
 * czysty, łagodny, lekko kwaśny. Wytwarzanie: ODSĄCZANIE
 * ZSIADŁEGO MLEKA W PŁÓCIENNYM WORECZKU, potem PRASOWANIE
 * dla usunięcia serwatki. Produkcja przeniesiona z Poświętnego
 * DO ŁAP W 1974 r.
 * ⚠ NIE MYLIĆ z KLINKIEM DĄBROWSKIM (Dąbrowa Białostocka,
 * wpis 25.02.2014) — inny produkt, inna gmina.
 *
 * OGÓRKI KWASZONE „NARWIAŃSKIE" — LPT, wpis 7 WRZEŚNIA 2005 r.,
 * kategoria warzywa i owoce. Produkcja w otulinie Narwiańskiego
 * PN, w siedmiu gminach, W TYM W ŁAPACH. Historycznie kwaszone
 * W DREWNIANYCH BECZKACH ZANURZONYCH W NARWI.
 *
 * NARWIAŃSKI PARK NARODOWY — obejmuje m.in. gminę Łapy.
 * NAREW JEST RZEKĄ ANASTOMOZUJĄCĄ (wielokorytową) — stąd
 * „Polska Amazonia". Ponad 200 gatunków ptaków, 154 lęgowe.
 * ⚠ SIEDZIBA PARKU NIE JEST W ŁAPACH — jest w Kurowie,
 * gmina Kobylin-Borzymy. NIE PISZĘ, że park ma siedzibę w Łapach.
 * ⚠ DATY UTWORZENIA PARKU NIE PODAJĘ — sprzeczność źródeł
 * (1 lipca vs 14 lipca 1996). POWIERZCHNI TEŻ NIE PODAJĘ
 * (7 350 ha vs 6 805,02 ha vs 6 810,23 ha).
 *
 * WARSZTATY KOLEJOWE — od uruchomienia linii Warszawa–Białystok
 * w 1862 r., pierwotnie „Depot de Lapy". Zlikwidowane,
 * wykreślone z rejestru 6 LIPCA 2016 r. Ponad 150 lat.
 * KOŚCIÓŁ ŚWIĘTYCH PIOTRA I PAWŁA — wieża 37 m,
 * budowany 1913–1926.
 * ŁAPY NIE NALEŻĄ DO CITTASLOW.
 *
 * KĄT: ODSĄCZANIE I ODCISKANIE — ILE WODY TRZEBA WYGNAĆ
 * ZE SKŁADNIKA, ZANIM SIĘ GO UŻYJE.
 * Kąt od klinka z Łap: sera, którego urzędowy opis wymienia
 * jako cechę rozpoznawczą ślad płóciennego worka i węzła.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że najczęstsza przyczyna rozwodnionego dania to woda,
 *   której nikt nie usunął ze składnika,
 * — konkretne przypadki: cukinia, ogórek, kapusta kiszona,
 *   szpinak mrożony, twaróg, mozzarella, warzywa po
 *   rozmrożeniu, ziemniaki na placki,
 * — trzy różne narzędzia i trzy różne sytuacje: SÓL (wyciąga
 *   powoli i sama), SITO (odsącza bez nacisku), PŁÓTNO
 *   I NACISK (odciska),
 * — że sól i cierpliwość są skuteczniejsze niż siła,
 * — że wyciśniętej wody czasem NIE WYRZUCA SIĘ — sok
 *   z warzyw i serwatka mają zastosowanie,
 * — że przy cieście woda ze składnika liczy się do bilansu,
 *   dlatego placki z mokrej cukinii wymagają więcej mąki,
 * — UCZCIWIE: to urządzenie nie odsącza. NIE MA takiej
 *   funkcji i nie da się jej udawać — to jest praca ręczna
 *   przed albo po,
 * — ALE robi jedną rzecz dobrze: startą cukinię czy ziemniaki
 *   dostajecie w kilka sekund, a odsączanie i tak jest
 *   osobnym krokiem.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PROPORCJI (także żadnego „łyżka soli na kilogram").
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH NAZW FIRM — także żadnej mleczarni.
 *
 * ⚠ ETYKA — PODLASKIE:
 * — ZERO Zagłady, gett, pogromów, cmentarzy żydowskich.
 * — ZERO lat 1941/1943/1945, wysiedleń, pacyfikacji.
 * — ZERO granicy, wojska, straży granicznej.
 * — ZERO konfliktów narodowościowych i wyznaniowych.
 * — ZERO podziemia i akcji zbrojnych.
 * — ZERO likwidacji zakładów jako dramatu społecznego —
 *   koniec warsztatów kolejowych podaję WYŁĄCZNIE jako datę
 *   administracyjną, bez zwolnień i bez bezrobocia.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Zagęszczanie" (Barczewo)
 * dotyczy dodawania czegoś do płynu. „Ile wody naprawdę
 * potrzeba" (Warta) dotyczy wody DOLEWANEJ. „Sito" dotyczy
 * oddzielania i przesiewania sypkich. „Kiszonki i zakwas"
 * dotyczą fermentacji. Tutaj chodzi o WODĘ, KTÓRA JUŻ JEST
 * W SKŁADNIKU i którą trzeba z niego wygnać.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ daty utworzenia ani powierzchni Narwiańskiego PN.
 * — NIE PISZĘ, że siedziba parku jest w Łapach.
 * — NIE PODAJĘ liczby sołectw.
 * — NIE PODAJĘ dat cukrowni w Łapach — niepotwierdzone.
 * — NIE PODAJĘ roku założenia mleczarni.
 * — NIE PODAJĘ etymologii nazwy — niepotwierdzona.
 * — NIE MYLĘ miasta Łapy z sześcioma osobnymi wsiami gminy
 *   o nazwach „Łapy-…". FAQ o tym wspomina.
 * — NIE MYLĘ klinka z Łap z klinkiem dąbrowskim ani z serem
 *   narwiańskim — to trzy różne wpisy.
 * — districts: brak potwierdzonych osiedli. PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — miasto 14 333, gmina 20 160 mieszkańców,
 * — prawa miejskie z rozporządzenia z 25 lipca 1924 r.,
 *   obowiązujące od 1 stycznia 1925 r.; miasto powstało
 *   ze zlepienia osady i kilku sąsiednich wsi,
 * — „Klinek z Łap" wpisany na Listę Produktów Tradycyjnych
 *   12 czerwca 2019 r.: spłaszczony stożek o masie 0,3–0,5 kg,
 *   ze śladami odciśniętego płóciennego worka i ręcznego
 *   wiązania; powstaje przez odsączenie zsiadłego mleka
 *   w woreczku i prasowanie; produkcję przeniesiono
 *   do Łap w 1974 r.,
 * — ogórki kwaszone „narwiańskie" na Liście od 7 września
 *   2005 r., kwaszone dawniej w beczkach zanurzonych w Narwi,
 * — gmina leży w zasięgu Narwiańskiego Parku Narodowego;
 *   Narew płynie tu wieloma korytami, stąd „Polska Amazonia";
 *   ponad 200 gatunków ptaków, w tym 154 lęgowe,
 * — warsztaty kolejowe działały od 1862 r., ponad 150 lat,
 * — kościół świętych Piotra i Pawła z wieżą wysoką na 37 m,
 *   budowany w latach 1913–1926.
 */
export const LAPY: CityContent = {
  slug: "lapy",
  h1: "Thermomix Łapy – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Łapy — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Łapach: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Łapy — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Łapach. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Łap z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do całej gminy.",

  highlights: highlightyStandardowe("Łapy i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Najczęstsza przyczyna rozwodnionego dania to woda, której nikt nie usunął.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Łapach – jak wygląda prezentacja?",
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
      id: "odsaczanie",
      heading: "Ser ze śladem worka — czyli o wodzie, którą trzeba wygnać ze składnika",
      paragraphs: [
        "Na Liście Produktów Tradycyjnych figuruje od 12 czerwca 2019 roku „Klinek z Łap”. W jego urzędowym opisie jest zdanie, które mnie zachwyciło: cechą rozpoznawczą tego sera są „ślady odciśniętej struktury worka płóciennego z charakterystycznym śladem ręcznego wiązania”. Czyli po serze widać nie tylko, z czego został zrobiony, ale jak i czym — bo ktoś zawiązał worek ręką i ten węzeł został w masie na zawsze. Cały ser powstaje przez odsączenie zsiadłego mleka w płóciennym woreczku i wyprasowanie z niego serwatki. Produkcję przeniesiono tu z sąsiedniej miejscowości w 1974 roku.",
        "Skoro więc mamy w mieście produkt, którego cała technologia sprowadza się do usuwania wody, napiszę o czynności, która w domowej kuchni jest pomijana najczęściej ze wszystkich.",
        "Bardzo dużo dań wychodzi rozwodnionych nie dlatego, że ktoś dolał za dużo płynu, tylko dlatego, że woda była już w środku składnika i nikt jej stamtąd nie wygnał.",
        "Lista podejrzanych jest krótka i stale ta sama: cukinia, ogórek, kapusta kiszona, mrożony szpinak, twaróg, mozzarella, wszystkie warzywa po rozmrożeniu i starte ziemniaki na placki. Każde z nich składa się w większości z wody i każde odda ją w najgorszym możliwym momencie — na patelni, w piekarniku, w środku zapiekanki.",
        "Narzędzia są trzy i to nie to samo. Sól wyciąga wodę powoli i sama, bez żadnego wysiłku — wystarczy posolić i odstawić, a po chwili w misce stoi kałuża. Sito odsącza to, co spływa samo, bez nacisku. Płótno albo czysta ściereczka pozwala odcisnąć — czyli wygnać wodę siłą, tę, która sama by nie wyszła.",
        "Rzecz, którą warto zapamiętać: sól i cierpliwość działają lepiej niż siła. Wyciskanie surowej cukinii od razu, gołymi rękami, daje niewiele. Ta sama cukinia posolona i odstawiona na chwilę oddaje wodę praktycznie sama, a wtedy odciśnięcie idzie bez wysiłku.",
        "Druga rzecz: wyciśniętej wody nie zawsze się wyrzuca. Sok z warzyw ma smak i można nim zastąpić część płynu w zupie albo sosie. Serwatka po odsączonym twarogu też nadaje się do ciasta i do chleba. Wylanie tego do zlewu jest odruchem, nie decyzją.",
        "I trzecia, ważna przy wypiekach: woda ze składnika liczy się do bilansu przepisu, choć w spisie składników jej nie ma. Dlatego placki z nieodciśniętej cukinii wymagają nagle dużo więcej mąki, a ciasto robi się ciężkie — nie dlatego, że przepis był zły, tylko dlatego, że doszło do niego pół szklanki niewidzialnej wody.",
        "Powiem teraz uczciwie coś, czego nie usłyszycie od kogoś, kto sprzedaje sprzęt. To urządzenie nie odsącza. Nie ma takiej funkcji, nie da się jej udawać i nie ma sensu obiecywać, że będzie inaczej. Odsączanie i odciskanie to praca ręczna, wykonywana przed włożeniem składnika do naczynia albo po jego wyjęciu, z sitem i ściereczką w ręku.",
        "Jedno robi natomiast bardzo dobrze i to jest realna oszczędność czasu: tarcie. Kilogram cukinii albo ziemniaków macie starty w kilka sekund, zamiast kwadransa nad tarką. Ale zaraz potem i tak trzeba to posolić, odstawić i odcisnąć — i ten krok zostaje po Waszej stronie.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Łapach?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli placki z cukinii albo zapiekanka wychodzą Wam mokre, powiedzcie o tym przy umawianiu. To zwykle nie jest kwestia przepisu i naprawia się w jednym kroku.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Łapach"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla łapskiej rodziny",
      paragraphs: [
        "Samo miasto liczy przeszło czternaście tysięcy mieszkańców na dwunastu kilometrach kwadratowych, a cała gmina ponad dwadzieścia tysięcy. Łapy są miastem młodym i nietypowym: prawa miejskie dostały rozporządzeniem z 25 lipca 1924 roku, które weszło w życie 1 stycznia 1925, a samo miasto powstało ze zlepienia osady i kilku sąsiednich wsi. Wyrosło wokół kolei, nie wokół rynku — warsztaty kolejowe działały tu od 1862 roku, ponad sto pięćdziesiąt lat. Kościół świętych Piotra i Pawła, z wieżą wysoką na trzydzieści siedem metrów, budowano w latach 1913–1926. Gmina leży w zasięgu Narwiańskiego Parku Narodowego, gdzie Narew płynie wieloma korytami naraz — stąd nazwa „Polska Amazonia” — i gdzie naliczono ponad dwieście gatunków ptaków, w tym sto pięćdziesiąt cztery lęgowe.",
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

  districtsHeading: "Do których części gminy Łapy dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich miejscowości gminy. Dojazd jest wszędzie bezpłatny.",
    "Przy umawianiu wystarczy podać miejscowość i ulicę albo numer domu.",
  ],
  districts: [],

  nearbyHeading: "Poza Łapy też przyjadę",
  nearbyParagraphs: [
    "Choroszcz, Suraż, Wysokie Mazowieckie, Białystok i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Choroszcz", "Suraż", "Wysokie Mazowieckie", "Białystok"],

  about: blokOMnie("do Łap", "w Łapach i całej gminie", REGION_PODLASIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Łap bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich miejscowości gminy — w tym do wsi o nazwach zaczynających się od „Łapy-”, które są odrębnymi miejscowościami, a nie częściami miasta. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Łapach"),
    {
      question: "Dlaczego placki z cukinii wychodzą mi mokre?",
      answer:
        "Bo cukinia to w większości woda, a ona wychodzi dopiero na patelni. Najprościej ją posolić i odstawić — sól wyciąga wodę sama, bez wysiłku — a potem odcisnąć w ściereczce. Wyciskanie surowej, nieposolonej cukinii gołymi rękami daje niewiele.",
    },
    {
      question: "Czy wodę wyciśniętą ze składników trzeba wylewać?",
      answer:
        "Nie zawsze i szkoda ją wylewać odruchowo. Sok z warzyw ma smak i może zastąpić część płynu w zupie albo sosie, a serwatka po odsączonym twarogu nadaje się do ciasta i do chleba.",
    },
    {
      question: "Czy Thermomix odsączy za mnie cukinię albo twaróg?",
      answer:
        "Nie i nie ma sensu twierdzić inaczej — takiej funkcji po prostu nie ma. Odsączanie i odciskanie to praca ręczna, z sitem i ściereczką, przed włożeniem składnika do naczynia albo po wyjęciu. Urządzenie oszczędza czas na czymś innym: kilogram cukinii macie starty w kilka sekund zamiast kwadransa nad tarką.",
    },
  ],

  geo: { lat: 52.9908, lng: 22.8781 },
};
