import type { CityContent } from "../city-content";
import {
  REGION_WARMIA_MAZURY,
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
 * BISKUPIEC — gmina miejsko-wiejska w powiecie OLSZTYŃSKIM.
 * Zwany BISKUPCEM RESZELSKIM.
 * GMINA ok. 17 500 (dane GUS przez geoportale: 17 445
 * i 17 629 — piszę „ponad siedemnaście tysięcy").
 * 29 SOŁECTW. Powierzchnia ok. 290 km², 54 miejscowości.
 * ⚠ LUDNOŚCI SAMEGO MIASTA NIE PODAJĘ — nie potwierdzono.
 *
 * ⚠⚠ ISTNIEJE DRUGI BISKUPIEC — WIEŚ w powiecie nowomiejskim,
 * siedziba osobnej gminy wiejskiej. FAQ MUSI to rozróżniać.
 * W tytule i H1 doprecyzowuję powiat.
 *
 * PRAWA MIEJSKIE: dokument lokacyjny wystawiony 17 PAŹDZIERNIKA
 * 1395 r. NA TUTEJSZYM ZAMKU przez BISKUPA WARMIŃSKIEGO
 * HENRYKA III SORBOMA, na prawie chełmińskim; miasto dostało
 * 160 włók chełmińskich.
 * PRZYNALEŻNOŚĆ: WARMIA, dominium biskupów warmińskich.
 *
 * RZEKA DYMER i JEZIORO KRAKSY w granicach miejskich.
 * ⚠ OBALONE: „Biskupiec leży nad jeziorem Dadaj" — Dadaj leży
 * w gminie, ale NIE w mieście.
 * KOŚCIÓŁ ŚW. JANA CHRZCICIELA — istniał przed lokacją 1395;
 * ostatnia odbudowa 1948–1949. PRZYCZYNY ZNISZCZEŃ NIE PODAJĘ.
 * SANKTUARIUM MATKI BOŻEJ FATIMSKIEJ — w dawnej świątyni
 * ewangelickiej z lat 1842–1846; ranga sanktuarium od 1998 r.
 * RATUSZ z 1895 r.; budynek administracyjny z 1908 r.
 * CZTERY KAPLICZKI PRZYDROŻNE z przełomu XIX i XX w.
 * ⚠ Motywu „dziękczynienia za przetrwanie zarazy" NIE
 * ROZWIJAM — prowadzi w stronę twierdzeń zdrowotnych.
 * DAWNA KAFLARNIA Z 1865 r. — obiekt poprzemysłowy.
 * BISKUPIEC NALEŻY DO SIECI CITTASLOW.
 * Położenie na pograniczu Pojezierza Olsztyńskiego
 * i Mrągowskiego.
 *
 * KĄT: CZEKOLADA — masa, która nie wybacza wody i ciepła.
 * Kąt od kaflarni z 1865 r.: zakładu, w którym wszystko
 * zależało od gładkiej polewy i od temperatury wypału.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że czekolada ma dwie właściwości, o które rozbija się
 *   większość domowych prób: nie znosi wody i nie znosi
 *   nadmiaru ciepła,
 * — że kropla wody w roztopionej czekoladzie zamienia ją
 *   w grudkowatą masę i tego NIE DA SIĘ odkręcić,
 * — że przegrzana czekolada robi się matowa i ziarnista,
 * — że urządzenie pomaga, bo grzeje łagodnie i miesza —
 *   ale że łatwo tu przesadzić, bo nie widać, co się dzieje,
 * — że najbezpieczniej jest rozpuszczać ją resztkowym
 *   ciepłem: przerwać wcześniej i domieszać,
 * — że mokre naczynie po myciu to najczęstsza przyczyna
 *   nieudanej polewy — i że to jest błąd sprzed startu,
 * — i ODMOWA: nie doradzam temperowania czekolady, bo to
 *   robota cukiernicza wymagająca liczb, których nie podaję.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR — w tym żadnych
 *   temperatur temperowania. ODMOWA STOI W TEKŚCIE.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH — także żadnych
 *   o „zdrowej gorzkiej czekoladzie".
 * — ŻADNYCH NAZW FIRM ani marek czekolady.
 * — NIE PODAJĘ ludności samego miasta.
 * — NIE ROZWIJAM motywu zarazy przy kapliczkach.
 *
 * ⚠ ETYKA — WARMIŃSKO-MAZURSKIE:
 * — NIE UŻYWAM niemieckiej nazwy miasta.
 * — ZERO roku 1945 i przyczyn zniszczenia kościoła.
 * — ZERO wysiedleń i akcji „Wisła".
 * — NIE CYTUJĘ formuł o „powrocie do Polski po latach
 *   niemieckiego panowania".
 * — Wojnę z 1414 r. pomijam.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Ser, który się topi"
 * (Pajęczno) dotyczy sera na gorąco. „Cukier i karmel"
 * dotyczą przypalania cukru. „Bita śmietana" dotyczy jednej
 * czynności i jej pułapki. „Sernik i masy na ciasto" dotyczą
 * wypieków. Tutaj chodzi o CZEKOLADĘ jako surowiec i o dwie
 * jej właściwości, które psują robotę.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ ludności samego miasta.
 * — NIE PISZĘ, że miasto leży nad Dadajem.
 * — NIE PODAJĘ numerów rejestru zabytków.
 * — NIE PODAJĘ roku przystąpienia do Cittaslow.
 * — NIE PODAJĘ wydarzeń cyklicznych — nie sprawdzono.
 * — NIE PRZYPISUJĘ Biskupcowi produktu z Listy Produktów
 *   Tradycyjnych — nie potwierdzono żadnego.
 * — NIE MYLĘ tego Biskupca z Biskupcem w powiecie
 *   nowomiejskim ani z gminą Biskupice w małopolskiem.
 * — districts: brak potwierdzonych osiedli. PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — gmina liczy ponad siedemnaście tysięcy mieszkańców,
 *   ma 29 sołectw i około 290 km²,
 * — dokument lokacyjny wystawiono 17 października 1395 r.
 *   na tutejszym zamku; wydał go biskup warmiński Henryk III
 *   Sorbom, na prawie chełmińskim, przyznając miastu
 *   160 włók chełmińskich,
 * — przez miasto płynie Dymer, w jego granicach leży
 *   jezioro Kraksy,
 * — kościół świętego Jana Chrzciciela istniał już przed
 *   lokacją; ostatnia odbudowa w latach 1948–1949,
 * — sanktuarium Matki Bożej Fatimskiej mieści się w dawnej
 *   świątyni ewangelickiej z lat 1842–1846 i ma rangę
 *   sanktuarium od 1998 r.,
 * — ratusz pochodzi z 1895 r., a budynek dzisiejszego urzędu
 *   z 1908 r.,
 * — zachowały się cztery kapliczki przydrożne z przełomu
 *   XIX i XX w. oraz dawna kaflarnia z 1865 r.,
 * — Biskupiec należy do międzynarodowej sieci Cittaslow.
 */
export const BISKUPIEC: CityContent = {
  slug: "biskupiec",
  h1: "Thermomix Biskupiec – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Biskupiec (powiat olsztyński) — przedstawiciel",
  seoDescription:
    "Thermomix w Biskupcu w powiecie olsztyńskim: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Biskupiec — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Biskupcu. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Biskupca w powiecie olsztyńskim z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich sołectw gminy.",

  highlights: highlightyStandardowe("Biskupiec i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Kropla wody w roztopionej czekoladzie to koniec. Bez odwrotu.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Biskupcu – jak wygląda prezentacja?",
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
      id: "czekolada",
      heading: "Kaflarnia z 1865 roku — czyli o czekoladzie i gładkiej polewie",
      paragraphs: [
        "Biskupiec, ten w powiecie olsztyńskim, zwany też Reszelskim, dostał prawa miejskie 17 października 1395 roku — dokument lokacyjny wystawił na tutejszym zamku biskup warmiński Henryk III Sorbom, na prawie chełmińskim, przyznając miastu sto sześćdziesiąt włók. To Warmia, dominium biskupie, i stąd nazwa. Przez miasto płynie Dymer, w granicach leży jezioro Kraksy — nie Dadaj, wbrew temu, co często się pisze; Dadaj jest w gminie, ale nie w mieście. Z ciekawszych budynków stoi tu dawna kaflarnia z 1865 roku.",
        "Zakład, w którym wszystko zależało od gładkiej polewy i od tego, żeby nie przegrzać wypału, jest dla mnie dobrym pretekstem do napisania o czekoladzie — bo z nią w domowej kuchni jest dokładnie ten sam problem.",
        "Czekolada ma dwie właściwości, o które rozbija się większość domowych prób, i obie warto znać przed startem, bo potem jest już za późno.",
        "Pierwsza: czekolada nie znosi wody. To brzmi absurdalnie, skoro potem wmieszacie w nią śmietanę i wyjdzie gładka polewa — ale różnica jest w momencie. Kropla wody w czystej, roztopionej czekoladzie natychmiast zamienia ją w matową, grudkowatą masę i tego nie da się odkręcić. Dlatego najczęstsza przyczyna nieudanej polewy to nie technika, tylko mokre naczynie po myciu. Błąd popełniony jeszcze zanim cokolwiek się zaczęło.",
        "Druga: czekolada nie znosi nadmiaru ciepła. Przegrzana traci połysk, robi się ziarnista i gęstnieje zamiast rzednąć. I tu jest paradoks tego urządzenia: ono grzeje bardzo równomiernie i miesza, więc do topienia czekolady nadaje się świetnie — ale właśnie dlatego, że nie widać, co dzieje się w środku, łatwo pójść o krok za daleko.",
        "Sposób, który jest tu najbezpieczniejszy, jest zresztą bardzo prosty i wart zapamiętania: nie doprowadzać do końca. Przerwać, gdy większość jest już płynna, a reszta jeszcze nie, i domieszać resztkowym ciepłem. Czekolada dojdzie sama. Ta sama zasada, która działa przy kaszach, działa i tutaj.",
        "Warto też wiedzieć, że różne czekolady zachowują się różnie — biała jest najbardziej kapryśna i najszybciej się przegrzewa, gorzka najbardziej wybaczająca. Jeśli robicie coś pierwszy raz, nie zaczynajcie od białej.",
        "I granica: nie będę doradzać temperowania czekolady. To robota cukiernicza, w której o wszystkim decydują konkretne temperatury, a ja z zasady nie podaję liczb — więc udawanie, że mogę Was przez to przeprowadzić, byłoby nieuczciwe. Do polewy, deseru i ciasta w domu temperowanie nie jest potrzebne.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Biskupcu?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeżeli w domu są dzieci, coś czekoladowego robię chętnie — to najkrótsza droga do tego, żeby zobaczyły, o co chodzi, i najkrótsza droga do zabrudzonej kuchni. Uprzedzam lojalnie.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Biskupcu"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla biskupieckiej rodziny",
      paragraphs: [
        "Gmina Biskupiec liczy ponad siedemnaście tysięcy mieszkańców, ma dwadzieścia dziewięć sołectw i blisko dwieście dziewięćdziesiąt kilometrów kwadratowych, na pograniczu Pojezierza Olsztyńskiego i Mrągowskiego. Prawa miejskie nadał tu 17 października 1395 roku biskup warmiński Henryk III Sorbom. Kościół świętego Jana Chrzciciela istniał jeszcze przed lokacją, a ostatnią odbudowę przeszedł w latach 1948–1949. W dawnej świątyni ewangelickiej z lat 1842–1846 mieści się sanktuarium Matki Bożej Fatimskiej, mające tę rangę od 1998 roku. Ratusz pochodzi z 1895 roku, a dawna kaflarnia z 1865. Biskupiec należy do międzynarodowej sieci Cittaslow.",
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

  districtsHeading: "Do których części gminy Biskupiec dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich dwudziestu dziewięciu sołectw gminy. Dojazd jest wszędzie bezpłatny.",
    "Przy umawianiu wystarczy podać miejscowość i ulicę albo numer domu.",
  ],
  districts: [],

  nearbyHeading: "Poza Biskupiec też przyjadę",
  nearbyParagraphs: [
    "Olsztyn, Mrągowo, Reszel, Barczewo, Jeziorany i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Barczewo", "Reszel", "Jeziorany", "Dobre Miasto"],

  about: blokOMnie("do Biskupca", "w Biskupcu i całej gminie", REGION_WARMIA_MAZURY),

  faq: [
    {
      question: "Czy dojeżdżasz do Biskupca bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich dwudziestu dziewięciu sołectw gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja. Bardzo ważne rozróżnienie: chodzi o Biskupiec w powiecie olsztyńskim, na Warmii, zwany Reszelskim — a nie o Biskupiec w powiecie nowomiejskim, który jest wsią i siedzibą osobnej gminy.",
    },
    ...faqWspolne("w Biskupcu"),
    {
      question: "Czy Thermomix nadaje się do topienia czekolady?",
      answer:
        "Bardzo dobrze, bo grzeje równomiernie i miesza. Ale ponieważ nie widać, co dzieje się w środku, łatwo pójść o krok za daleko. Najbezpieczniej przerwać, gdy większość jest już płynna, i domieszać resztkowym ciepłem — czekolada dojdzie sama.",
    },
    {
      question: "Dlaczego czekolada zrobiła mi się grudkowata?",
      answer:
        "Najczęściej dlatego, że trafiła do niej woda — wystarczy kropla w niedosuszonym naczyniu po myciu. Czysta roztopiona czekolada natychmiast wtedy matowieje i zbija się w grudki, czego nie da się odkręcić. Drugą przyczyną bywa przegrzanie: czekolada traci połysk i gęstnieje zamiast rzednąć.",
    },
    {
      question: "Jak temperować czekoladę w Thermomixie?",
      answer:
        "Tego nie doradzę. Temperowanie to robota cukiernicza, w której o wszystkim decydują konkretne temperatury, a ja z zasady nie podaję liczb — udawanie, że przeprowadzę Was przez to na stronie, byłoby nieuczciwe. Do domowej polewy, deseru czy ciasta temperowanie i tak nie jest potrzebne.",
    },
  ],

  geo: { lat: 53.8636, lng: 20.9497 },
};
