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
 * TUCHOLA — powiat tucholski, woj. kujawsko-pomorskie,
 * BORY TUCHOLSKIE.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 * MIASTO: 12 915 mieszkańców (GUS 31.12.2024), 17,7 km².
 * CAŁA GMINA MIEJSKO-WIEJSKA: 19 534 osoby.
 * ⚠ NIE MIESZAM TYCH DWÓCH LICZB. TWARDA GRANICA.
 * ⚠ ODMIANA: D. TUCHOLI, Ms. W TUCHOLI, przym. TUCHOLSKI.
 *   Region: BOROWIACY, przym. BOROWIACKI.
 *
 * ⚠⚠⚠ NAJWAŻNIEJSZE OSTRZEŻENIE TEJ STRONY:
 *   OBÓZ JENIECKI I INTERNOWANYCH 1914–1923 W TUCHOLI
 *   JEST TEMATEM CAŁKOWICIE WYŁĄCZONYM. ZERO WZMIANEK,
 *   ZERO ALUZJI, ZERO KONTEKSTU. Wypływa jako jeden
 *   z pierwszych wyników wyszukiwania i ma własne strony
 *   w muzeum i w urzędzie miasta — TYM BARDZIEJ
 *   GO NIE DOTYKAM. TWARDA GRANICA BEZWZGLĘDNA.
 *
 * HISTORIA — FAKTY UŻYTE:
 * — miasto w sercu Borów Tucholskich, siedziba powiatu,
 * — RZEMIOSŁO W 1632 R.: w mieście pracowało DWÓCH
 *   WIADROWNIKÓW I PIĘCIU ZDUNÓW,
 * — KOSZYKARSTWO: szkoły koszykarskie od 1896 r.,
 *   w 1906 r. w okolicy około 500 koszykarzy
 *   ⚠⚠ PODAJĘ WYŁĄCZNIE JAKO FAKT W RYSIE HISTORYCZNYM.
 *   ZERO ROZWIJANIA — KĄT „KOSZ I WIKLINA" JEST ZAJĘTY
 *   (Rudnik nad Sanem). TWARDA GRANICA.
 *
 * ⚠⚠ LISTA PRODUKTÓW TRADYCYJNYCH — PODSTAWA KĄTA:
 *   „MACE BOROWIACKIE", wpis 4 MARCA 2008 R.,
 *   kategoria: wyroby piekarnicze i cukiernicze.
 *   ⚠⚠ Z KARTY PRODUKTU WYNIKA RZECZ KLUCZOWA:
 *   WYPIEKANO JE Z CIASTA POZOSTAŁEGO PO WYPIEKU CHLEBA.
 *   Karta wskazuje wprost koło gospodyń wiejskich
 *   w Tucholi jako miejsce podtrzymania wyrobu.
 *   ⚠⚠⚠ ZERO ETYMOLOGII I ZERO ROZWIJANIA NAZWY PRODUKTU
 *   W JAKĄKOLWIEK STRONĘ. Podaję WYŁĄCZNIE tak, jak
 *   produkt figuruje na ministerialnej liście, i opisuję
 *   WYŁĄCZNIE technologię z karty: placki z resztki ciasta
 *   chlebowego. TWARDA GRANICA BEZWZGLĘDNA —
 *   nazwa ma skojarzenie, którego NIE DOTYKAM
 *   ani jednym słowem, w żadną stronę.
 *   ⚠ ŻADNYCH PROPORCJI I ŻADNEGO PRZEPISU.
 *
 * ⚠ OSIEDLI MIASTA NIE USTALONO — districts PUSTE.
 *
 * KĄT: CIASTO, KTÓRE ZOSTAŁO — resztka na dnie miski.
 * Kąt od karty mac borowiackich: to nie było osobne
 * wypiekanie, tylko użycie tego, co zostawało po chlebie.
 * W każdej kuchni zostaje resztka ciasta, resztka farszu,
 * resztka sosu — i praktycznie nikt nie ma na nie planu.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że 4 marca 2008 roku na ministerialną Listę Produktów
 *   Tradycyjnych wpisano mace borowiackie z Tucholi,
 *   a w karcie produktu stoi rzecz najciekawsza: wypiekano
 *   je Z CIASTA, KTÓRE ZOSTAWAŁO PO WYPIEKU CHLEBA,
 * — ŻE TO NIE BYŁ OSOBNY WYPIEK, TYLKO DOMKNIĘCIE
 *   POPRZEDNIEGO. Dawna kuchnia nie miała kategorii
 *   „resztka" — miała kategorię „jeszcze nie wykorzystane",
 * — ⚠⚠ ŻE DZIŚ JEST ODWROTNIE I TO JEST RDZEŃ TEKSTU:
 *   planujemy danie, a nie planujemy tego, co po nim
 *   zostanie — i dlatego zostaje to w lodówce, aż przestaje
 *   być pytaniem,
 * — CO ZOSTAJE NAPRAWDĘ, KONKRETNIE:
 *   — resztka ciasta, której nie starczyło na kolejną
 *     blachę,
 *   — farsz, którego zostało na trzy pierogi,
 *   — sos, którego zostało pół chochli,
 *   — ugotowana kasza albo makaron, których zostało
 *     na pół talerza,
 * — ŻE KAŻDA Z TYCH RZECZY MA OCZYWISTE DRUGIE ŻYCIE,
 *   tylko trzeba je wymyślić ZANIM wyląduje w lodówce,
 *   a nie trzy dni później:
 *   — resztka ciasta idzie na jeden placek na patelnię
 *     albo na kilka małych na blachę obok głównego wypieku,
 *   — farsz wchodzi do zupy albo na patelnię z jajkiem,
 *   — sos wchodzi jako baza następnego sosu,
 *   — kasza i makaron wchodzą do placków albo do zapiekanki,
 * — ⚠⚠ ŻE JEDYNA REGUŁA, KTÓRA TU DZIAŁA, JEST BANALNA:
 *   RESZTKA MUSI ZOSTAĆ UŻYTA W TEJ SAMEJ SESJI ALBO MIEĆ
 *   WYZNACZONE MIEJSCE W NASTĘPNEJ. Trzecia opcja nie
 *   istnieje — to znaczy istnieje, ale nazywa się „kosz",
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie tu nie pomaga
 *   w decyzji, bo decyzja jest w głowie. Pomaga w tym,
 *   że resztka ciasta wraca do naczynia i dorabia się
 *   do niej druga porcja bez drugiego naczynia
 *   i bez drugiego mycia. I że sos z resztek da się
 *   zmiksować na gładko, więc wygląda na zamierzony.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO OBOZU 1914–1923. BEZWZGLĘDNIE.
 * — ⚠⚠⚠ ZERO ETYMOLOGII NAZWY PRODUKTU I ZERO
 *   JAKICHKOLWIEK SKOJARZEŃ Z NIĄ. BEZWZGLĘDNIE.
 * — ⚠⚠ ZERO ROZWIJANIA KOSZYKARSTWA — kąt zajęty.
 * — ⚠⚠ ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI: ile dni
 *   resztka jest dobra, w czym ją trzymać. TWARDA GRANICA.
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH NAZW FIRM.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠⚠ ZERO OBOZU I ZERO LAT 1914–1923.
 * — ZERO wątków wojennych i okupacyjnych.
 * — ZERO wątków wyznaniowych.
 * — ZERO oszczędzania z biedy jako motywu — piszę
 *   o GOSPODARNOŚCI I ORGANIZACJI, nie o niedostatku.
 * — ZERO wyludniania i bezrobocia.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH — OBOWIĄZKOWE:
 * — „OBIERKI, SKÓRKI I ŁODYGI" (Wieruszów) dotyczy TEGO,
 *   CO WYRZUCAMY PRZED GOTOWANIEM. ⚠ TUTAJ chodzi o to,
 *   co zostaje PO. Odsyłam tam wprost.
 * — „GOTOWANIE NA ZAPAS" (Stopnica) dotyczy CELOWEGO
 *   ROBIENIA WIĘCEJ I MROŻENIA. ⚠ TUTAJ resztka jest
 *   NIEZAMIERZONA.
 * — „CIASTO DROŻDŻOWE — WYRABIANIE I ROZCZYN" (Wołczyn)
 *   dotyczy ROBIENIA CIASTA.
 * — „SERWATKA" (Rypin) dotyczy PŁYNU PO ODCEDZENIU.
 * TUTAJ chodzi o RESZTKĘ, KTÓREJ NIE STARCZYŁO
 * NA PEŁNĄ PORCJĘ.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MIESZAM liczby mieszkańców miasta i całej gminy.
 * — NIE PODAJĘ przepisu ani proporcji na mace borowiackie.
 * — NIE ROZWIJAM nazwy produktu w żadną stronę.
 * — NIE ORZEKAM, jak długo resztka nadaje się do użycia.
 * — NIE ROZWIJAM koszykarstwa.
 * — NIE PODAJĘ nazw osiedli.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Tuchola leży w sercu Borów Tucholskich, jest siedzibą
 *   powiatu tucholskiego i liczy 12 915 mieszkańców
 *   (GUS, 31.12.2024) na siedemnastu i siedmiu dziesiątych
 *   kilometra kwadratowego; cała gmina miejsko-wiejska
 *   ma 19 534 osoby,
 * — w 1632 roku pracowało w mieście dwóch wiadrowników
 *   i pięciu zdunów,
 * — od 1896 roku działały tu szkoły koszykarskie, a w 1906
 *   roku w okolicy pracowało około pięciuset koszykarzy,
 * — 4 marca 2008 roku na ministerialną Listę Produktów
 *   Tradycyjnych wpisano mace borowiackie w kategorii
 *   wyrobów piekarniczych i cukierniczych; z karty produktu
 *   wynika, że wypiekano je z ciasta pozostałego po wypieku
 *   chleba, a wyrób podtrzymuje koło gospodyń wiejskich
 *   w Tucholi.
 */
export const TUCHOLA: CityContent = {
  slug: "tuchola",
  h1: "Thermomix Tuchola – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Tuchola — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Tucholi: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Tuchola — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Tucholi. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Tucholi z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wsi w gminie.",

  highlights: highlightyStandardowe("Tuchola"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Dawna kuchnia nie miała kategorii „resztka”. Miała „jeszcze nie wykorzystane”.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Tucholi – jak wygląda prezentacja?",
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
      id: "resztka-ciasta",
      heading: "To, co zostało na dnie miski",
      paragraphs: [
        "4 marca 2008 roku na ministerialną Listę Produktów Tradycyjnych wpisano mace borowiackie z Tucholi — w kategorii wyrobów piekarniczych i cukierniczych, a wyrób podtrzymuje tutejsze koło gospodyń wiejskich. Najciekawsza rzecz stoi jednak nie w kategorii, tylko w opisie technologii: wypiekano je z ciasta, które zostawało po wypieku chleba.",
        "To znaczy, że nie były osobnym wypiekiem. Były domknięciem poprzedniego.",
        "I to jest różnica, która mnie w tym opisie zatrzymała. Dawna kuchnia w zasadzie nie miała kategorii „resztka”. Miała kategorię „jeszcze nie wykorzystane” — bo skoro piec był rozgrzany, a ciasto leżało na dnie dzieży, to pytanie nie brzmiało „wyrzucić czy schować”, tylko „co z tego jeszcze będzie”.",
        "Dziś mamy dokładnie odwrotnie. Planujemy danie, ale nie planujemy tego, co po nim zostanie. I dlatego zostaje — w lodówce, w miseczce przykrytej talerzykiem, aż przestaje być pytaniem i staje się odpowiedzią samo przez się.",
        "A zostaje zawsze to samo. Resztka ciasta, której nie starczyło na kolejną blachę. Farsz, którego wyszło na trzy pierogi. Pół chochli sosu. Pół talerza ugotowanej kaszy albo makaronu, bo sypało się „na oko”.",
        "Każda z tych rzeczy ma oczywiste drugie życie. Problem polega wyłącznie na tym, że trzeba je wymyślić, zanim wyląduje w lodówce, a nie trzy dni później.",
        "Resztka ciasta to jeden placek na patelnię albo kilka małych na blachę, wstawionych obok głównego wypieku — dokładnie tak, jak to robiono tutaj z ciastem chlebowym. Farsz wchodzi do zupy albo na patelnię z jajkiem i przestaje być farszem. Sos jest bazą następnego sosu, a nie osobnym daniem. Kasza i makaron idą do placków albo do zapiekanki.",
        "Jedyna reguła, która tu naprawdę działa, jest banalna aż do wstydu: resztka musi zostać użyta w tej samej sesji albo mieć wyznaczone miejsce w następnej. Trzeciej opcji nie ma. To znaczy jest, tylko nazywa się „kosz” i wszyscy udajemy, że jej nie wybieramy.",
        "Osobna sprawa to rzeczy, które odcinamy jeszcze przed gotowaniem — obierki, skórki, łodygi. O tym pisałam przy innym mieście, bo to zupełnie inna kategoria: tam decyzja zapada na początku, tutaj na końcu.",
        "I uczciwie o sprzęcie, bo tu nie ma czego koloryzować. Urządzenie nie pomoże w decyzji, bo decyzja jest w głowie i nic jej nie zastąpi. Pomaga w czymś mniejszym, ale realnym: resztka ciasta wraca do tego samego naczynia i dorabia się do niej drugą porcję bez drugiej miski i bez drugiego mycia. A sos poskładany z resztek da się zmiksować na gładko — i wtedy wygląda na zamierzony, bo w gruncie rzeczy jest.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/funkcje", label: "Funkcje Thermomixa" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Tucholi?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli chcesz, żebyśmy ugotowały coś z tego, co akurat masz w lodówce — powiedz to przy umawianiu. To zwykle najciekawsza część spotkania.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Tucholi"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla tucholskiej rodziny",
      paragraphs: [
        "Tuchola leży w sercu Borów Tucholskich, jest siedzibą powiatu i liczy blisko trzynaście tysięcy mieszkańców na niecałych osiemnastu kilometrach kwadratowych; cała gmina miejsko-wiejska ma ponad dziewiętnaście tysięcy osób. W 1632 roku pracowało w mieście dwóch wiadrowników i pięciu zdunów. Od 1896 roku działały tu szkoły koszykarskie, a w 1906 roku w okolicy pracowało około pięciuset koszykarzy. 4 marca 2008 roku na ministerialną Listę Produktów Tradycyjnych wpisano mace borowiackie — wyroby piekarnicze, które według karty produktu wypiekano z ciasta pozostałego po wypieku chleba.",
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

  districtsHeading: "Do których części Tucholi dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — od rynku i starego centrum po osiedla przy wylotach dróg i tereny na skraju lasu. Dojeżdżam też do wsi w gminie.",
    "Przy umawianiu wystarczy podać ulicę i numer domu albo nazwę miejscowości. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Tucholę też przyjadę",
  nearbyParagraphs: [
    "Sępólno Krajeńskie, Więcbork, Kamień Krajeński, Czersk, Chojnice, Koronowo i Świecie są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Sępólno Krajeńskie", "Więcbork", "Kamień Krajeński", "Koronowo"],

  about: blokOMnie("do Tucholi", "w Tucholi", REGION_KUJAWSKO_POMORSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Tucholi bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wsi w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku: Tuchola jest miastem w gminie miejsko-wiejskiej i siedzibą powiatu — przyjeżdżam wszędzie na tych samych zasadach.",
    },
    ...faqWspolne("w Tucholi"),
    {
      question: "Co zrobić z resztką ciasta, której nie starczyło na blachę?",
      answer:
        "Upiec ją od razu — jeden placek na patelnię albo kilka małych na blachę, wstawionych obok głównego wypieku. Dokładnie tak powstawały mace borowiackie z tucholskiej listy produktów tradycyjnych: z ciasta, które zostawało po wypieku chleba. Reguła jest tylko jedna: resztka musi zostać użyta w tej samej sesji albo mieć wyznaczone miejsce w następnej.",
    },
    {
      question: "Czy Thermomix pomaga wykorzystać resztki?",
      answer:
        "W decyzji nie, bo decyzja jest w głowie. Pomaga w czymś mniejszym, ale realnym: resztka ciasta wraca do tego samego naczynia i dorabia się do niej drugą porcję bez drugiej miski i bez drugiego mycia. A sos poskładany z resztek da się zmiksować na gładko — wtedy wygląda na zamierzony.",
    },
  ],

  geo: { lat: 53.58762, lng: 17.85955 },
};
