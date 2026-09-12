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
 * WASILKÓW — gmina miejsko-wiejska w powiecie białostockim.
 * MIASTO 12 790, GMINA 21 148 (GUS 31.12.2024).
 * POWIERZCHNIA MIASTA 28,3 km², GMINY 127,1 km².
 * ⚠ Notatka projektowa podawała 12 000 — tu ZANIŻONE.
 * MIASTO ROSNĄCE — silne osadnictwo podmiejskie Białegostoku.
 * LICZBY SOŁECTW NIE PODAJĘ — nie potwierdzono.
 *
 * PRAWA MIEJSKIE 8 GRUDNIA 1566 r., nadał KRÓL ZYGMUNT AUGUST,
 * NA PRAWIE MAGDEBURSKIM. Przywileje: prawo pobierania ceł
 * i myt oraz wolnizna. DWA DNI PÓŹNIEJ, 10 GRUDNIA 1566 r.,
 * przywilej na utworzenie parafii katolickiej.
 * ⚠ NIE PODAJĘ, czy prawa były tracone — nie ustalono.
 *
 * ⚠ PRZYNALEŻNOŚĆ: PUSZCZA GRODZIEŃSKA, nie „Podlasie
 * właściwe". Tereny należały kolejno do Rusi Kijowskiej,
 * księstw włodzimierskich, a w 1340 r. włączone do Litwy.
 * RZEKA SUPRAŚL pełniła w średniowieczu rolę granicy.
 *
 * ⚠⚠ KOPALNIE KRZEMIENIA W RYBNIKACH (Puszcza Knyszyńska) —
 * PODSTAWA KĄTA. Eksploatacja ok. 3000 LAT TEMU, szacunkowo
 * OK. 300 KOPALŃ oraz kamieniołomy. Odkryte w 1991 r. przez
 * leśnika ROMANA PRUSKIEGO. Stanowisko przetrwało „w niemal
 * nienaruszonym stanie" dzięki ochronie przez las —
 * NIEZWYKLE RZADKIE.
 * ⚠ NIE POWTARZAM twierdzenia „najdalej na północ wysunięte
 * stanowisko w Polsce" — niepotwierdzone.
 * ⚠ NIE PRZESĄDZAM epoki (brąz czy neolit) — piszę
 * „około trzech tysięcy lat temu".
 * ⚠ NIE PODAJĘ roku ani powierzchni rezerwatu Krzemianka.
 *
 * WIATRAK TYPU HOLENDERSKIEGO W STUDZIANKACH (gmina Wasilków) —
 * DREWNIANY, KONIEC XIX w., w rejestrze zabytków.
 * ⚠ DOKŁADNEGO ROKU NIE PODAJĘ.
 * PARK KRAJOBRAZOWY PUSZCZY KNYSZYŃSKIEJ im. prof. Witolda
 * Sławińskiego — uchwała 24 MAJA 1988 r., park 72 860 ha,
 * otulina 53 827 ha. Gmina Wasilków jest jedną z 11 gmin.
 * WŁÓKIENNICTWO: w 1880 r. działało tu 12 ZAKŁADÓW
 * WŁÓKIENNICZYCH, łącznie ok. 300 pracowników.
 * SANKTUARIUM ŚWIĘTA WODA — pierwsza wzmianka 1719 r.;
 * w 1778 r. Stolica Apostolska przyznała przywilej odpustowy.
 * ⚠ NIE OPISUJĘ legendy o uzdrowieniu ze ślepoty — to byłoby
 * twierdzenie zdrowotne. Podaję wyłącznie daty.
 * WASILKÓW NIE NALEŻY DO CITTASLOW.
 *
 * KĄT: JAK STARE SĄ NAPRAWDĘ TECHNIKI KUCHENNE — co w kuchni
 * jest nowe, a co ma tysiące lat.
 * Kąt od trzystu kopalń krzemienia sprzed trzech tysięcy lat,
 * leżących w lesie kilka kilometrów od miasta.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że w kuchni prawie nic nie jest nowe i to jest dobra
 *   wiadomość, nie zła,
 * — STARE JAK ŚWIAT: krojenie, gotowanie w wodzie, pieczenie
 *   w popiele, suszenie, kiszenie, wędzenie, mielenie kamieniem
 *   — wszystkie liczą tysiące lat,
 * — STARE, ALE NIE AŻ TAK: żeliwna patelnia, piekarnik
 *   z regulacją, lodówka, mrożonki — to jest sprawa
 *   ostatnich dwóch stuleci albo mniej,
 * — NAPRAWDĘ NOWE: ciągła kontrola temperatury i ciągłe
 *   mieszanie bez człowieka. Tylko to,
 * — że dlatego reklamy sprzętu obiecujące „rewolucję
 *   w gotowaniu" są nieuczciwe — rewolucji nie ma,
 *   jest jedna konkretna nowa rzecz,
 * — że to zarazem najlepszy argument ZA: skoro techniki się
 *   nie zmieniają, to nauczone raz zostają na całe życie,
 *   niezależnie od sprzętu,
 * — UCZCIWIE: urządzenie nie nauczy Was gotować. Wykona
 *   za Was czynność, ale decyzja, po co ją wykonać,
 *   zostaje po Waszej stronie.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PROPORCJI.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH — także żadnych
 *   o „naturalnym" czy „pierwotnym" jedzeniu.
 * — ŻADNYCH NAZW FIRM.
 *
 * ⚠ ETYKA — PODLASKIE:
 * — ZERO Zagłady, gett, pogromów, cmentarzy żydowskich.
 * — ZERO lat 1941/1943/1945, wysiedleń, pacyfikacji.
 * — ZERO granicy z Białorusią, przejść, wojska, straży.
 * — ZERO konfliktów narodowościowych i wyznaniowych.
 * — ZERO podziemia i akcji zbrojnych.
 * — SANKTUARIUM: wyłącznie daty, ZERO uzdrowień.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Tradycyjne gotowanie"
 * jako wspólna sekcja dotyczy porównania z garnkiem.
 * „Garnki i naczynia odziedziczone" (Krośniewice) dotyczą
 * przedmiotów po kimś. „Noże i ostrzenie" (Drzewica) dotyczą
 * jednego narzędzia. Tutaj chodzi o WIEK TECHNIK — o to,
 * co w gotowaniu jest naprawdę nowe, a co tylko wygląda.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE POWTARZAM twierdzenia o „najdalej na północ".
 * — NIE PODAJĘ roku budowy wiatraka w Studziankach ani tego,
 *   czy zachowały się w nim urządzenia mielące.
 * — NIE PODAJĘ liczby sołectw.
 * — NIE PRZYPISUJĘ Wasilkowowi produktu z Listy Produktów
 *   Tradycyjnych — nie ma takiego.
 * — NIE PISZĘ, że Muzeum Ikon jest w Wasilkowie — jest
 *   w Supraślu.
 * — NIE MYLĘ rzeki Supraśl z miastem Supraśl. FAQ to rozróżnia.
 * — NIE MYLĘ Wasilkowa z WASILKOWEM na Ukrainie ani
 *   z Wasilkowem-osadą.
 * — districts: brak potwierdzonych osiedli. PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — miasto 12 790, gmina 21 148 mieszkańców; gmina rośnie,
 * — prawa miejskie na prawie magdeburskim nadane 8 grudnia
 *   1566 r. przez Zygmunta Augusta, z prawem pobierania ceł
 *   i myt oraz wolnizną; dwa dni później przywilej parafialny,
 * — w Rybnikach, w Puszczy Knyszyńskiej, zachowało się
 *   szacunkowo około 300 kopalń krzemienia eksploatowanych
 *   około trzech tysięcy lat temu; odkrył je w 1991 r. leśnik
 *   Roman Pruski, a las ochronił stanowisko w niemal
 *   nienaruszonym stanie,
 * — drewniany wiatrak typu holenderskiego w Studziankach
 *   z końca XIX w., wpisany do rejestru zabytków,
 * — gmina należy do Parku Krajobrazowego Puszczy Knyszyńskiej
 *   im. prof. Witolda Sławińskiego (24 maja 1988 r.,
 *   park 72 860 ha, otulina 53 827 ha),
 * — w 1880 r. działało w mieście 12 zakładów włókienniczych,
 *   zatrudniających łącznie około 300 osób,
 * — sanktuarium Święta Woda: pierwsza wzmianka z 1719 r.,
 *   przywilej odpustowy Stolicy Apostolskiej z 1778 r.,
 * — miasto leży nad Supraślą.
 */
export const WASILKOW: CityContent = {
  slug: "wasilkow",
  h1: "Thermomix Wasilków – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Wasilków — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Wasilkowie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Wasilków — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Wasilkowie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Wasilkowa z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do całej gminy.",

  highlights: highlightyStandardowe("Wasilków i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "W kuchni prawie nic nie jest nowe. I to jest dobra wiadomość.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Wasilkowie – jak wygląda prezentacja?",
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
      id: "wiek-technik",
      heading: "Trzysta kopalń w lesie — czyli jak stare są naprawdę techniki kuchenne",
      paragraphs: [
        "Kilka kilometrów od Wasilkowa, w Puszczy Knyszyńskiej pod Rybnikami, leży w ziemi około trzystu kopalń krzemienia. Ludzie wydobywali tam surowiec na narzędzia jakieś trzy tysiące lat temu. Odkrył to dopiero w 1991 roku leśnik Roman Pruski, a stanowisko przetrwało w niemal nienaruszonym stanie właśnie dlatego, że przez cały ten czas rósł nad nim las.",
        "Trzysta kopalń, żeby mieć czym kroić. To dobry punkt wyjścia do pytania, które warto sobie zadać przed każdym zakupem sprzętu kuchennego: co w gotowaniu jest naprawdę nowe.",
        "Odpowiedź brzmi: bardzo niewiele. I to jest dobra wiadomość, nie zła.",
        "Techniki, których używacie codziennie, mają po kilka tysięcy lat. Krojenie ostrym narzędziem. Gotowanie w wodzie. Pieczenie w popiele i na kamieniu. Suszenie. Kiszenie. Wędzenie. Mielenie ziarna między dwoma kamieniami. Wszystko to jest starsze niż pismo. Człowiek, który wydobywał krzemień pod Rybnikami, rozumiałby większość tego, co robicie w kuchni w niedzielę.",
        "Rzeczy, które uważamy za odwieczne, bywają zaskakująco młode. Żeliwna patelnia w domowej kuchni, piekarnik z regulowaną temperaturą, lodówka, mrożonki, gaz w kuchence — to jest sprawa ostatnich dwustu lat, a część z tego ostatnich siedemdziesięciu. Babcia, która „zawsze tak robiła”, robiła tak przez pół wieku, a nie przez tysiąc lat.",
        "A co jest w gotowaniu naprawdę nowe? Jedna rzecz. Ciągła, stabilna kontrola temperatury połączona z ciągłym mieszaniem, bez człowieka stojącego obok. Tego wcześniej po prostu nie było — nie dlatego, że nikt nie wpadł na pomysł, tylko dlatego, że ktoś musiał trzymać łyżkę.",
        "Dlatego reklamy obiecujące „rewolucję w gotowaniu” mnie irytują, choć sama ten sprzęt sprzedaję. Rewolucji nie ma. Jest jedna konkretna nowa rzecz i lepiej ją nazwać po imieniu, niż udawać, że wynaleziono kuchnię od nowa.",
        "Ale to samo jest jednocześnie najlepszym argumentem za tym, żeby się gotowania uczyć — i tu przechodzę na drugą stronę. Skoro techniki się nie zmieniają, to każda nauczona raz zostaje na całe życie. Zrozumienie, dlaczego mięso ma odpocząć albo dlaczego zimna śmietana się warzy, będzie prawdziwe za trzydzieści lat i będzie prawdziwe niezależnie od tego, jaki sprzęt będziecie mieli. To jest wiedza, która się nie starzeje — rzadkość w czasach, gdy starzeje się wszystko.",
        "Z tego wynika jedna uczciwa rzecz, którą mówię na każdym spotkaniu. To urządzenie nie nauczy Was gotować. Wykona za Was czynność — czasem lepiej, niż zrobiłaby ręka — ale decyzja, po co tę czynność wykonać i kiedy przestać, zostaje po Waszej stronie. Sprzęt jest narzędziem, dokładnie tak samo jak krzemienny nóż sprzed trzech tysięcy lat. Lepszym, wygodniejszym, ale tak samo bezradnym bez kogoś, kto wie, co chce zrobić.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/przepisy", label: "Przepisy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Wasilkowie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli macie wrażenie, że sprzęt miałby Was „nauczyć gotować” — powiedzcie to przy umawianiu. Wolę wyjaśnić od razu, co on robi, a czego nie zrobi za nikogo.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Wasilkowie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla wasilkowskiej rodziny",
      paragraphs: [
        "Samo miasto liczy blisko trzynaście tysięcy mieszkańców, a cała gmina ponad dwadzieścia jeden tysięcy — i jest to jedna z tych gmin, które rosną. Prawa miejskie na prawie magdeburskim nadał Wasilkowowi 8 grudnia 1566 roku król Zygmunt August, razem z prawem pobierania ceł i myt oraz czasowym zwolnieniem z podatków; dwa dni później wydano przywilej na utworzenie parafii. Miasto leży nad Supraślą, w dawnej Puszczy Grodzieńskiej, a gmina należy do Parku Krajobrazowego Puszczy Knyszyńskiej imienia profesora Witolda Sławińskiego, powołanego 24 maja 1988 roku. W Studziankach stoi drewniany wiatrak typu holenderskiego z końca dziewiętnastego wieku, wpisany do rejestru zabytków. W 1880 roku działało tu dwanaście zakładów włókienniczych, zatrudniających łącznie około trzystu osób. Sanktuarium Święta Woda po raz pierwszy wzmiankowano w 1719 roku, a przywilej odpustowy Stolica Apostolska przyznała mu w 1778.",
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

  districtsHeading: "Do których części gminy Wasilków dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich miejscowości gminy, w tym do Studzianek i Świętej Wody. Dojazd jest wszędzie bezpłatny.",
    "Przy umawianiu wystarczy podać miejscowość i ulicę albo numer domu.",
  ],
  districts: [],

  nearbyHeading: "Poza Wasilków też przyjadę",
  nearbyParagraphs: [
    "Białystok, Supraśl, Czarna Białostocka, Choroszcz i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Białystok", "Supraśl", "Czarna Białostocka", "Choroszcz"],

  about: blokOMnie("do Wasilkowa", "w Wasilkowie i całej gminie", REGION_PODLASIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Wasilkowa bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich miejscowości gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku: Wasilków leży nad rzeką Supraśl, ale to nie to samo co miasto Supraśl — to dwie sąsiednie miejscowości i jedna rzeka o tej samej nazwie.",
    },
    ...faqWspolne("w Wasilkowie"),
    {
      question: "Czy Thermomix nauczy mnie gotować?",
      answer:
        "Nie i wolę powiedzieć to wprost, choć go sprzedaję. Wykona za Was czynność, czasem lepiej niż ręka, ale decyzja, po co ją wykonać i kiedy przestać, zostaje po Waszej stronie. To narzędzie, nie nauczyciel.",
    },
    {
      question: "Co w gotowaniu jest naprawdę nowe?",
      answer:
        "Jedna rzecz: ciągła, stabilna kontrola temperatury połączona z ciągłym mieszaniem, bez człowieka stojącego obok. Krojenie, gotowanie w wodzie, pieczenie, suszenie, kiszenie i mielenie mają po kilka tysięcy lat. Nawet piekarnik z regulacją i lodówka to sprawa ostatnich dwóch stuleci.",
    },
    {
      question: "Czy warto uczyć się technik, skoro sprzęt robi to za mnie?",
      answer:
        "Właśnie dlatego warto. Skoro techniki gotowania nie zmieniły się od tysięcy lat, to każda nauczona raz zostaje na całe życie i działa niezależnie od tego, jaki sprzęt akurat stoi na blacie. To jedna z niewielu rzeczy, które się nie starzeją.",
    },
  ],

  geo: { lat: 53.2033, lng: 23.2069 },
};
