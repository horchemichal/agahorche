import type { CityContent } from "../city-content";
import {
  REGION_LUBUSKIE,
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
 * GUBIN — ⚠ GMINA MIEJSKA, powiat krośnieński.
 * MIASTO 15 495 (GUS 31.12.2024), 20,7 km².
 * BEZ SOŁECTW — gmina miejska.
 * ⚠⚠ OSOBNA JEDNOSTKA: GMINA WIEJSKA GUBIN — 7 221 mieszk.,
 * 379,6 km², ok. 50 miejscowości. TO DWIE RÓŻNE GMINY
 * O TEJ SAMEJ NAZWIE. Piszę o MIEŚCIE, ale dojeżdżam
 * i do gminy wiejskiej — mówię o tym wprost w districts.
 *
 * PRAWA MIEJSKIE 1235 r. (prawo magdeburskie, margrabia
 * Miśni Henryk Dostojny). POTWIERDZENIE: w 2025 r. Gubin
 * i Guben świętowały wspólnie 790-lecie.
 * 1211 r. — poświadczone PRAWO SKŁADU SOLI.
 * ⚠ KĄTA SOLNEGO NIE UŻYWAM — „sól w gotowaniu" ZAJĘTA.
 *
 * GEOGRAFIA: nad NYSĄ ŁUŻYCKĄ, historycznie DOLNE ŁUŻYCE.
 * WZNIESIENIA GUBIŃSKIE. Rezerwat DĘBOWIEC.
 * EUROMIASTO GUBIN-GUBEN.
 * ⚠ ROKU POWSTANIA EUROMIASTA NIE PODAJĘ.
 *
 * ⚠⚠ WINIARSTWO I SADOWNICTWO — PODSTAWA KĄTA:
 * 1136 — pierwsza wzmianka o uprawie winorośli.
 * 1280 — zgoda margrabiego na zamianę pastwisk na winnice.
 * 1327 — wino gubeńskie eksportowane do Wrocławia.
 * 1446 — sprowadzenie odmian z Węgier, Francji i Austrii.
 * XVIII w. — ok. 1000 winnic.
 * 1846 — kolej czyni import win opłacalniejszym; schyłek.
 * 1900 — zaledwie 4 ha. 1926 — OSTATNIA WINNICA KOŃCZY
 * DZIAŁALNOŚĆ. Od lat 90. XX w. odrodzenie.
 * ⚠⚠ PO UPADKU WINIARSTWA — MASOWY ROZWÓJ SADOWNICTWA.
 * POD KONIEC XIX w. DZIAŁAŁY W REJONIE 23 PRASY HYDRAULICZNE
 * DO PRZETWARZANIA OWOCÓW. Robiono WINA OWOCOWE z jabłek
 * i śliwek. TO JEST KOTWICA.
 * ŚWIĘTO JABŁKA → JARMARK JESIENNY EUROMIASTA, pierwsza
 * edycja jako wspólny projekt 19 WRZEŚNIA 2020 r.; odmiany
 * regionalne „Gubener Warraschke" i „Rotgelber Spilling".
 * ⚠ CIĄGŁOŚCI JARMARKU PO 2020 NIE POTWIERDZONO.
 * WIOSNA NAD NYSĄ — 62. edycja 23–25 maja 2025 r., scena
 * na WYSPIE TEATRALNEJ, organizator Gubiński Dom Kultury.
 * ⚠ NUMERU KOLEJNEJ EDYCJI NIE PODAJĘ (możliwa sprzeczność).
 *
 * ⚠⚠ HIPOTEZA OBALONA: „Gubin miastem wiśni" — ŻADNE ŹRÓDŁO
 * TEGO NIE POTWIERDZA. Tradycja owocowa Gubina to JABŁKA
 * I WINOROŚL. NIE PISZĘ O WIŚNIACH.
 *
 * FARA GUBIŃSKA — ⚠ ŹRÓDŁA SPRZECZNE: pierwsza wzmianka
 * 1324 albo 1294. NIE ROZSTRZYGAM — piszę „w XIV wieku".
 * Fundacja „Fara Gubińska" 2005 r., nowy hełm wieży
 * 1 czerwca 2007 r., wieża jako punkt widokowy czynny latem.
 * MURY MIEJSKIE: 1301 pierwsza wzmianka o wale, XIV w. mury
 * murowane, 1523–1544 wzmocnienie bram.
 *
 * KĄT: OWOC W DANIU WYTRAWNYM — jabłko do mięsa, śliwka,
 * żurawina, kwaśny owoc zamiast octu.
 * Kąt od miasta, w którym owoc przez osiemset lat był
 * SUROWCEM GOSPODARCZYM, a nie deserem.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że w polskim domu owoc jest przypisany do deseru,
 *   a to jest przyzwyczajenie, nie zasada,
 * — ŻE OWOC W DANIU WYTRAWNYM PEŁNI DWIE ROLE: daje kwas
 *   i daje słodycz — czyli dokładnie to, czego szuka się
 *   potem w occie i w cukrze,
 * — KIEDY TO DZIAŁA NAJLEPIEJ: przy tłustym mięsie, przy
 *   kaszy, przy wszystkim ciężkim — kwaśny owoc przecina
 *   tłuszcz lepiej niż cokolwiek innego,
 * — KONKRETY, KTÓRE ZNA KAŻDY, ale nie łączy ich w regułę:
 *   jabłko do kaczki, śliwka do mięsa, żurawina do serów,
 *   jabłko w surówce z kapustą,
 * — ŻE KWAŚNA ODMIANA JABŁKA ROBI CO INNEGO NIŻ SŁODKA
 *   — i że to jedyne miejsce, gdzie warto zwrócić uwagę,
 *   które jabłko się kupuje,
 * — DWA BŁĘDY: za dużo owocu, przez co danie robi się
 *   słodkie zamiast wyrazistego, i dodanie owocu za wcześnie,
 *   przez co rozpada się do niczego,
 * — ŻE OWOC SUSZONY ZACHOWUJE SIĘ INACZEJ NIŻ ŚWIEŻY:
 *   jest skoncentrowany i słodszy, więc potrzeba go mniej,
 * — że to nie jest kuchnia wymyślna ani nowa — po prostu
 *   przestano tak gotować, bo owoc stanieje dopiero w sezonie,
 * — UCZCIWIE: urządzenie nie obierze i nie wydrąży owoców,
 *   a przy nich to jest najwięcej pracy,
 * — ale gotowanie z mieszaniem w pilnowanej temperaturze
 *   ratuje dokładnie to, co przy owocach idzie źle:
 *   przypalanie cukru na dnie i rozgotowanie na papkę.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PROPORCJI.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH. ZERO witamin,
 *   ZERO błonnika, ZERO cukru jako tematu dietetycznego.
 * — ⚠⚠ ZERO ALKOHOLU JAKO ZACHĘTY. Winiarstwo podaję
 *   WYŁĄCZNIE jako fakt historyczno-gospodarczy. Nie zachęcam
 *   do picia, nie podaję przepisów na nalewki i wina,
 *   nie opisuję smaku alkoholu. TWARDA GRANICA.
 * — ŻADNYCH NAZW FIRM. ⚠ NAZWISK WSPÓŁCZESNYCH WINIARZY
 *   NIE PODAJĘ.
 *
 * ⚠ ETYKA — LUBUSKIE:
 * — ZERO tematów wojennych i granicznych.
 * — ZERO wysiedleń i przesiedleń po 1945 r.
 * — ZERO „Ziem Odzyskanych" jako tematu politycznego.
 * — ZERO konfliktów narodowościowych.
 * — ZERO bezrobocia i wyludniania.
 * — Ruiny fary podaję WYŁĄCZNIE jako architekturę
 *   i jako odbudowę; przyczyn zniszczenia NIE PODAJĘ.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Jabłko" dotyczy jednego
 * owocu jako składnika. „Odmiany" dotyczą wyboru odmiany
 * jabłka. „Soki i moszcze" dotyczą napojów. „Kompoty i musy"
 * dotyczą przetworów. „Dżemy, konfitury i powidła" dotyczą
 * słodkich przetworów. „Równowaga smaków" dotyczy czterech
 * smaków jako teorii. Tutaj chodzi o TECHNIKĘ: użycie owocu
 * w daniu SŁONYM i o to, co on tam robi.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PISZĘ o tradycji wiśniowej Gubina — nie istnieje
 *   w źródłach.
 * — NIE ROZSTRZYGAM daty pierwszej wzmianki o farze.
 * — NIE PODAJĘ numeru kolejnej edycji Wiosny nad Nysą.
 * — NIE TWIERDZĘ, że Jarmark Jesienny odbywa się co roku.
 * — NIE PRZYPISUJĘ miastu produktu z Listy Produktów
 *   Tradycyjnych — nie znaleziono żadnego.
 * — NIE MYLĘ MIASTA GUBIN z GMINĄ WIEJSKĄ GUBIN.
 *   FAQ i districts to rozróżniają.
 * — districts: brak potwierdzonych osiedli. PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — gmina miejska licząca ponad piętnaście tysięcy
 *   mieszkańców na 20,7 km²; obok istnieje osobna gmina
 *   wiejska Gubin, licząca ponad siedem tysięcy osób
 *   na 379,6 km² w około pięćdziesięciu miejscowościach,
 * — prawa magdeburskie z 1235 r.; w 2025 r. Gubin i Guben
 *   świętowały wspólnie 790-lecie; już w 1211 r. miasto
 *   miało poświadczone prawo składu soli,
 * — miasto leży nad Nysą Łużycką, historycznie na Dolnych
 *   Łużycach, przy Wzniesieniach Gubińskich z rezerwatem
 *   Dębowiec; z Guben tworzy Euromiasto,
 * — uprawę winorośli odnotowano tu po raz pierwszy w 1136 r.;
 *   w 1280 margrabia zezwolił zamieniać pastwiska na winnice,
 *   w 1327 wino wywożono do Wrocławia, a w 1446 sprowadzono
 *   odmiany z Węgier, Francji i Austrii; w XVIII w. było
 *   tu około tysiąca winnic, po 1846 r. kolej przechyliła
 *   rachunek na korzyść win przywożonych, w 1900 r. zostały
 *   cztery hektary, a w 1926 zamknęła się ostatnia winnica;
 *   od lat dziewięćdziesiątych uprawa wróciła,
 * — po upadku winiarstwa nastąpił rozwój sadownictwa —
 *   pod koniec XIX w. działały w rejonie dwadzieścia trzy
 *   prasy hydrauliczne do przetwarzania owoców, a z jabłek
 *   i śliwek robiono wina owocowe,
 * — Jarmark Jesienny Euromiasta, kontynuacja dawnego Święta
 *   Jabłka, odbył się jako wspólny projekt 19 września
 *   2020 r., z regionalnymi odmianami jabłek „Gubener
 *   Warraschke” i „Rotgelber Spilling”,
 * — Wiosna nad Nysą to największa impreza obu miast:
 *   sześćdziesiąta druga edycja odbyła się 23–25 maja
 *   2025 r. ze sceną na Wyspie Teatralnej, a organizuje ją
 *   Gubiński Dom Kultury,
 * — fara gubińska notowana jest od XIV w.; w 2005 r. powstała
 *   Fundacja „Fara Gubińska”, 1 czerwca 2007 r. wieża
 *   otrzymała nowy hełm, a latem służy jako punkt widokowy;
 *   mury miejskie wzniesiono w XIV w., a bramy wzmacniano
 *   w latach 1523–1544.
 */
export const GUBIN: CityContent = {
  slug: "gubin",
  h1: "Thermomix Gubin – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Gubin — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Gubinie: bezpłatna prezentacja TM7 u Ciebie w domu, miasto i okolice. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Gubin — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Gubinie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Gubina z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wsi wokół.",

  highlights: highlightyStandardowe("Gubin i okolice"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Kwaśny owoc przecina tłuszcz lepiej niż cokolwiek innego.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Gubinie – jak wygląda prezentacja?",
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
      id: "owoc-wytrawnie",
      heading: "Osiemset lat, w których owoc był surowcem — czyli owoc w daniu wytrawnym",
      paragraphs: [
        "Uprawę winorośli odnotowano tutaj po raz pierwszy w 1136 roku. W 1280 margrabia pozwolił zamieniać pastwiska na winnice, w 1327 wino wywożono stąd do Wrocławia, a w XVIII wieku było w okolicy około tysiąca winnic. Potem przyszła kolej — dosłownie: od 1846 roku przywożone wino stało się tańsze, w 1900 zostały cztery hektary, a w 1926 zamknęła się ostatnia winnica. Ich miejsce zajęły sady i pod koniec XIX wieku pracowały tu dwadzieścia trzy prasy hydrauliczne do owoców.",
        "Przez osiemset lat owoc był tu więc surowcem gospodarczym, a nie deserem. I to jest dokładnie to, o czym chcę napisać, bo w polskim domu owoc jest dziś przypisany do słodkiego — a to jest przyzwyczajenie, nie zasada.",
        "Owoc w daniu wytrawnym pełni dwie role naraz: daje kwas i daje słodycz. Czyli dokładnie to, czego potem szukamy w occie i w cukrze, tylko w jednym składniku i łagodniej.",
        "Najlepiej działa tam, gdzie danie jest ciężkie. Przy tłustym mięsie, przy kaszy, przy wszystkim duszonym — kwaśny owoc przecina tłuszcz skuteczniej niż cokolwiek innego i robi to bez ostrości, jaką daje ocet.",
        "Konkrety zna każdy, tylko nikt nie składa ich w regułę. Jabłko do kaczki. Śliwka do mięsa. Żurawina do serów i do pieczonego drobiu. Jabłko starte do surówki z kapusty. To nie są cztery ciekawostki — to cztery przykłady tej samej zasady.",
        "Skoro o jabłku: kwaśna odmiana robi w słonym daniu zupełnie co innego niż słodka. Kwaśna trzyma kształt i daje wyrazistość, słodka rozpada się i dosładza. To jedno z niewielu miejsc w kuchni, gdzie naprawdę warto zwrócić uwagę, które jabłko się kupuje.",
        "Błędy są dwa i oba łatwe do uniknięcia. Pierwszy: za dużo owocu — danie robi się wtedy po prostu słodkie, zamiast wyraziste, a to zupełnie inny efekt niż zamierzony. Drugi: dodanie owocu za wcześnie, przez co rozpada się do niczego i zostaje po nim tylko słodycz bez śladu smaku.",
        "Owoc suszony zachowuje się inaczej niż świeży i warto o tym pamiętać. Jest skoncentrowany i dużo słodszy, więc potrzeba go znacznie mniej — suszona śliwka nie jest tym samym co świeża, tylko jej mocniejszą wersją.",
        "To nie jest przy tym żadna kuchnia wymyślna ani nowa. Tak gotowano powszechnie, dopóki owoc był tani przez cały rok, bo rósł za domem. Przestano nie dlatego, że przestało smakować, tylko dlatego, że owoc przeniósł się do sklepu i stał się produktem sezonowym.",
        "Teraz uczciwie o sprzęcie. Thermomix nie obierze i nie wydrąży owoców, a przy nich to jest właśnie najwięcej pracy — drylowanie i obieranie zostaje po Twojej stronie i nic tego nie zmieni.",
        "Robi natomiast to, co przy owocach w gorącym daniu idzie najczęściej źle. Gotuje z mieszaniem, w temperaturze, która nie skacze — a cukier zawarty w owocach przypala się na dnie w chwilę i zostawia gorzki posmak w całym daniu. Do tego można zatrzymać rozdrabnianie na dowolnym etapie, więc sos owocowy do mięsa może zostać z kawałkami albo być zupełnie gładki, zależnie od tego, co chcesz podać.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Gubinie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedzcie przy umawianiu, czy lubicie wyraziste połączenia smaków. Od tego zależy, co warto pokazać.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Gubinie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla gubińskiej rodziny",
      paragraphs: [
        "Miasto liczy ponad piętnaście tysięcy mieszkańców na dwudziestu kilometrach kwadratowych; obok istnieje osobna gmina wiejska o tej samej nazwie, z ponad siedmioma tysiącami osób w około pięćdziesięciu miejscowościach. Prawa magdeburskie Gubin otrzymał w 1235 roku i dlatego w 2025 razem z Guben świętował 790-lecie; jeszcze wcześniej, bo w 1211, miał poświadczone prawo składu soli. Leży nad Nysą Łużycką, historycznie na Dolnych Łużycach, przy Wzniesieniach Gubińskich z rezerwatem Dębowiec, a z Guben tworzy Euromiasto. Uprawę winorośli odnotowano tu w 1136 roku; w XVIII wieku było około tysiąca winnic, a ostatnia zamknęła się w 1926 — od lat dziewięćdziesiątych uprawa wróciła. Po winnicach przyszły sady i pod koniec XIX wieku pracowały w rejonie dwadzieścia trzy prasy hydrauliczne do owoców. Jarmark Jesienny Euromiasta, kontynuacja dawnego Święta Jabłka, odbył się jako wspólny projekt 19 września 2020 roku, z regionalnymi odmianami jabłek „Gubener Warraschke” i „Rotgelber Spilling”. Największą imprezą pozostaje Wiosna nad Nysą — sześćdziesiąta druga edycja odbyła się 23–25 maja 2025 roku ze sceną na Wyspie Teatralnej, a organizuje ją Gubiński Dom Kultury. Farę notowaną od XIV wieku odbudowuje powołana w 2005 roku fundacja; wieża dostała nowy hełm 1 czerwca 2007 roku i latem służy jako punkt widokowy.",
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

  districtsHeading: "Do których części Gubina dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta, a także do wsi sąsiedniej gminy wiejskiej o tej samej nazwie. Dojazd jest wszędzie bezpłatny.",
    "Przy umawianiu wystarczy podać miejscowość i ulicę albo numer domu.",
  ],
  districts: [],

  nearbyHeading: "Poza Gubin też przyjadę",
  nearbyParagraphs: [
    "Krosno Odrzańskie, Cybinka, Brody, Lubsko i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Krosno Odrzańskie", "Cybinka", "Brody", "Lubsko"],

  about: blokOMnie("do Gubina", "w Gubinie i okolicy", REGION_LUBUSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Gubina bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wsi sąsiedniej gminy wiejskiej. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku: miasto Gubin i gmina wiejska Gubin to dwie osobne jednostki o tej samej nazwie — przyjeżdżam i tu, i tam.",
    },
    ...faqWspolne("w Gubinie"),
    {
      question: "Po co dodawać owoc do dania słonego?",
      answer:
        "Bo pełni dwie role naraz: daje kwas i daje słodycz, czyli to, czego potem szukamy w occie i cukrze — tylko łagodniej. Najlepiej działa przy daniach ciężkich: kwaśny owoc przecina tłuszcz skuteczniej niż cokolwiek innego. Jabłko do kaczki, śliwka do mięsa, żurawina do serów to cztery przykłady tej samej zasady.",
    },
    {
      question: "Jakie jabłko do dania wytrawnego?",
      answer:
        "Kwaśne. Trzyma kształt i daje wyrazistość, podczas gdy słodkie rozpada się i po prostu dosładza. To jedno z niewielu miejsc w kuchni, gdzie naprawdę warto zwrócić uwagę, którą odmianę się kupuje.",
    },
    {
      question: "Jakie błędy popełnia się z owocem w gorącym daniu?",
      answer:
        "Dwa. Za dużo owocu — danie robi się wtedy słodkie zamiast wyraziste. I dodanie go za wcześnie — rozpada się do niczego i zostaje sama słodycz. Owoc suszony jest przy tym skoncentrowany i dużo słodszy, więc potrzeba go znacznie mniej niż świeżego.",
    },
  ],

  geo: { lat: 51.9494, lng: 14.7139 },
};
