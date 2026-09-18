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
 * LUBNIEWICE — powiat sulęciński, woj. lubuskie.
 * MIASTO 1 999 (GUS 31.12.2024), 12,1 km².
 * Gmina miejsko-wiejska: 3 028 mieszkańców, 129,7 km².
 *
 * ⚠ „LUBUSKIEGO ZAKOPANEGO" NIE UŻYWAM — to slogan
 *   marketingowy bez potwierdzenia w źródłach. TWARDA GRANICA.
 *
 * HISTORIA — PODSTAWA KĄTA:
 * — ⚠⚠ 1751 — ODKRYCIE ZŁÓŻ AŁUNU I URUCHOMIENIE KOPALNI.
 *   Ałun eksploatowano też w GLIŚNIE (ta sama gmina), gdzie
 *   obok rezydencji działały AŁUNIARNIA I FABRYKA JEDWABIU.
 *   TO JEST KOTWICA.
 *   ⚠ DOKŁADNYCH DAT DZIAŁANIA AŁUNIARNI NIE ZNALEZIONO —
 *     NIE PODAJĘ.
 * — 1698–1738 — baron von Schmettau zakłada w Lubniewicach
 *   KOLONIĘ TKACZY; włókiennictwo głównym zajęciem ludności
 *   w XVIII w.,
 * — pełne prawa miejskie 1808; utrata po 1945; odzyskanie
 *   1995. ⚠ PRZYCZYN UTRATY NIE OPISUJĘ.
 *
 * GEOGRAFIA: miasto między jeziorami LUBIĄŻ (zachód)
 * i KRAJNIK (wschód), w pobliżu jeziora LUBNIEWSKO.
 * Zespół Przyrodniczo-Krajobrazowy „Uroczysko Lubniewsko"
 * utworzony 21.02.2002, 1 143,02 ha, w tym jezioro
 * Lubniewsko 240,96 ha; ok. 300 gatunków roślin
 * i 90 gatunków ptaków. Gmina: 12 997 ha, lasy 8 656 ha
 * (ok. 70%).
 * ⚠ POWIERZCHNI JEZIOR LUBIĄŻ I KRAJNIK NIE PODAJĘ —
 *   nieustalone.
 *
 * ZABYTKI: STARY ZAMEK 1812 (Adolf Friedrich IV von Waldow,
 * klasycyzm, na miejscu dawnego „Czerwonego Dworu");
 * NOWY ZAMEK 1909–1911 (fundator Carl Friedrich Ernst
 * Edward von Waldow-Reitzenstein, proj. A. Dinklage,
 * E. Paulus, O. Lilloe, neorenesans, plan L z wieżą);
 * kościół gotycki XV w., wieża neogotycka 1882; pałac
 * w Gliśnie 1793 (Friedrich von Posera), przebudowa 1846,
 * od 1978 siedziba ośrodka doradztwa rolniczego; chałupa
 * szachulcowa z końca XVIII w.
 *
 * ⚠ ŻADNEGO PRODUKTU Z GMINY NIE MA NA LIŚCIE PRODUKTÓW
 * TRADYCYJNYCH. NIE WYMYŚLAM ŻADNEGO.
 *
 * KĄT: CIERPKOŚĆ — smak, który ściąga język, a nie jest
 * ani kwaśny, ani gorzki.
 * Kąt od ałunu: od 1751 r. Lubniewice żyły z jego wydobycia,
 * a w Gliśnie działała ałuniarnia. Ałun był historycznie
 * dodawany m.in. po to, żeby produkt się nie rozpadał —
 * i jest klasycznym przykładem substancji ściągającej.
 * ⚠⚠ NIE ZACHĘCAM DO UŻYWANIA AŁUNU W KUCHNI, NIE PODAJĘ
 *   ŻADNYCH ZASTOSOWAŃ SPOŻYWCZYCH I NIE OPISUJĘ, JAK GO
 *   DODAWAĆ. Ałun jest WYŁĄCZNIE punktem wyjścia
 *   historycznym. TWARDA GRANICA.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że w polskim opisie smaków brakuje jednego słowa —
 *   mówimy „kwaśne" i „gorzkie", a to, co ŚCIĄGA JĘZYK,
 *   nie jest ani jednym, ani drugim,
 * — ŻE CIERPKOŚĆ TO NIE SMAK, TYLKO WRAŻENIE DOTYKOWE —
 *   uczucie szorstkości i suchości w ustach,
 * — GDZIE JĄ ZNAMY: niedojrzała pigwa, tarnina, niedojrzały
 *   banan, mocno zaparzona herbata, skórka orzecha
 *   włoskiego, aronia, granat, nieobrany bakłażan,
 *   skórki winogron,
 * — DLACZEGO TO WAŻNE: cierpkość bardzo często bierze się
 *   za gorycz i „naprawia" cukrem, co nie działa,
 * — CO NAPRAWDĘ POMAGA: TŁUSZCZ I BIAŁKO — śmietana,
 *   mleko, masło, jogurt; dlatego herbatę z mlekiem pije
 *   się inaczej, a aronia w cieście ze śmietaną przestaje
 *   ściągać,
 * — ŻE DRUGIM SPOSOBEM JEST DOJRZEWANIE I MRÓZ — pigwa
 *   i tarnina po przemarznięciu tracą cierpkość,
 * — ŻE TRZECIM JEST OBRANIE — bo cierpkość siedzi
 *   najczęściej w skórce i w pestkach, a nie w miąższu,
 * — ŻE CZWARTYM JEST CZAS I TEMPERATURA PARZENIA — herbata
 *   trzymana za długo robi się cierpka, i to nie jest kwestia
 *   gatunku, tylko obchodzenia się z nią,
 * — ŻE CIERPKOŚĆ NIE ZAWSZE JEST WADĄ: w małej dawce robi
 *   danie „czystym" i nie pozwala mu się rozlać w słodycz,
 * — ŻE NAJCZĘSTSZE DOMOWE POTKNIĘCIE TO ZMIKSOWANE PESTKI
 *   — mus z jabłek albo winogron miksowany w całości
 *   robi się cierpki i nikt nie wie dlaczego,
 * — UCZCIWIE: urządzenie nie usunie cierpkości i nie zmieni
 *   niedojrzałego owocu w dojrzały,
 * — ale pomaga w dwóch rzeczach: przeciera przez sito,
 *   czyli oddziela skórki i pestki, w których cierpkość
 *   siedzi; i trzyma stałą temperaturę przy parzeniu
 *   naparów, czyli usuwa najczęstszą przyczynę cierpkiej
 *   herbaty.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR W LICZBACH.
 * — ŻADNYCH PROPORCJI.
 * — ⚠⚠ ŻADNYCH TWIERDZEŃ ZDROWOTNYCH. ZERO tez o garbnikach,
 *   wchłanianiu, żelazie i „oczyszczaniu". Piszę WYŁĄCZNIE
 *   o wrażeniu w ustach. TWARDA GRANICA.
 * — ⚠⚠ ZERO INSTRUKCJI UŻYCIA AŁUNU. TWARDA GRANICA.
 * — ŻADNYCH NAZW FIRM.
 * — ZERO tez o tym, które owoce są jadalne, a które nie.
 *
 * ⚠ ETYKA — LUBUSKIE:
 * — ZERO tematów wojennych i granicznych.
 * — ZERO wysiedleń i przesiedleń po 1945 r.
 * — ZERO „Ziem Odzyskanych" jako tematu politycznego.
 * — ZERO konfliktów narodowościowych i wyznaniowych.
 * — ZERO bezrobocia, biedy i wyludniania.
 * — ⚠ ZAMKNIĘCIE KOPALNI I KOLONII TKACKIEJ — SUCHE FAKTY,
 *   NIGDY JAKO UPADEK.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH — OBOWIĄZKOWE:
 * — „GORYCZ W KUCHNI" dotyczy SMAKU GORZKIEGO.
 * — „KWAS" (Łęknica) dotyczy octu, cytryny i kwaśnego
 *   nabiału jako narzędzia doprawiania.
 * — „RÓWNOWAGA SMAKÓW" dotyczy CZWÓRKI PODSTAWOWEJ.
 * — „KISZONKI I ZAKWAS" dotyczą FERMENTACJI.
 * TUTAJ chodzi o WRAŻENIE ŚCIĄGAJĄCE — o rzecz, która
 * nie jest smakiem w ogóle, tylko odczuciem w ustach,
 * i o to, że myli się ją z goryczą.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE NAZYWAM Lubniewic „lubuskim Zakopanem".
 * — NIE PODAJĘ dat działania ałuniarni w Gliśnie.
 * — NIE PODAJĘ powierzchni jezior Lubiąż i Krajnik.
 * — NIE PODAJĘ przyczyn utraty praw miejskich.
 * — NIE WYMYŚLAM produktu lokalnego ani imprezy kulinarnej.
 * — NIE PODAJĘ żadnych zastosowań ałunu w jedzeniu.
 * — districts: brak potwierdzonych osiedli. PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — w 1751 r. odkryto pod Lubniewicami złoża ałunu
 *   i uruchomiono kopalnię; ałun eksploatowano także
 *   w Gliśnie w tej samej gminie, gdzie obok rezydencji
 *   działały ałuniarnia i fabryka jedwabiu,
 * — w latach 1698–1738 baron von Schmettau założył tu
 *   kolonię tkaczy, a włókiennictwo było w XVIII w. głównym
 *   zajęciem mieszkańców,
 * — pełne prawa miejskie Lubniewice otrzymały w 1808 r.,
 *   utraciły je po 1945 r. i odzyskały w 1995 r.,
 * — miasto leży między jeziorami Lubiąż i Krajnik, w pobliżu
 *   jeziora Lubniewsko; 21 lutego 2002 r. utworzono Zespół
 *   Przyrodniczo-Krajobrazowy „Uroczysko Lubniewsko"
 *   o powierzchni 1 143,02 ha, w którym samo jezioro
 *   Lubniewsko zajmuje 240,96 ha, a stwierdzono tam około
 *   trzystu gatunków roślin i dziewięćdziesięciu gatunków
 *   ptaków; lasy zajmują w gminie 8 656 ha,
 * — w mieście stoją dwa zamki: Stary z 1812 r., klasycystyczny,
 *   wzniesiony przez Adolfa Friedricha IV von Waldow,
 *   i Nowy z lat 1909–1911, neorenesansowy, na planie
 *   litery L z wieżą,
 * — w Gliśnie zachował się pałac z 1793 r., przebudowany
 *   w 1846 r., od 1978 r. siedziba ośrodka doradztwa
 *   rolniczego.
 */
export const LUBNIEWICE: CityContent = {
  slug: "lubniewice",
  h1: "Thermomix Lubniewice – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Lubniewice — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Lubniewicach: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Lubniewice — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Lubniewicach. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Lubniewic z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wsi w gminie.",

  highlights: highlightyStandardowe("Lubniewice"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "To, co ściąga język, nie jest ani kwaśne, ani gorzkie — i dlatego myli.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Lubniewicach – jak wygląda prezentacja?",
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
      id: "cierpkosc",
      heading: "Miasto, które żyło z ałunu — czyli o smaku, który ściąga język",
      paragraphs: [
        "W 1751 roku odkryto pod Lubniewicami złoża ałunu i uruchomiono kopalnię. Ałun wydobywano też w pobliskim Gliśnie, gdzie obok rezydencji działały ałuniarnia i fabryka jedwabiu. To był na kilkadziesiąt lat gospodarczy fundament tego miasteczka. I to jest jedyny pretekst w całym serwisie, żeby napisać o rzeczy, dla której w polskiej kuchni nie mamy nawet dobrego słowa — bo ałun jest podręcznikowym przykładem substancji ściągającej.",
        "Mówimy „kwaśne” i „gorzkie”. A to trzecie wrażenie — kiedy język robi się szorstki, a usta jakby wysuszone — nie jest ani jednym, ani drugim. Nazywa się cierpkość i, ściśle biorąc, nie jest nawet smakiem, tylko odczuciem dotykowym. Dlatego nie da się jej „posolić” ani „dosłodzić” tak, jak reszty.",
        "Znamy ją wszyscy, tylko rzadko nazywamy. Niedojrzała pigwa. Tarnina. Niedojrzały banan. Herbata trzymana o pięć minut za długo. Skórka orzecha włoskiego. Aronia, granat, skórki winogron, nieobrany bakłażan. Wszystkie robią z ustami dokładnie to samo.",
        "Dlaczego to ważne w praktyce? Bo cierpkość nagminnie bierze się za gorycz — i „naprawia” cukrem. To nie działa. Cukier zamaskuje gorycz, ale cierpkości nie ruszy w ogóle; danie zrobi się słodkie i nadal będzie ściągać. To jeden z tych momentów, kiedy się dokłada, dokłada i nic z tego nie wynika.",
        "Naprawdę pomagają cztery rzeczy. Pierwsza: tłuszcz i białko. Śmietana, mleko, masło, jogurt — one wiążą cierpkość i po prostu ją wyłączają. Dlatego mocna herbata z mlekiem pije się zupełnie inaczej niż bez, a aronia w cieście ze śmietaną przestaje ściągać.",
        "Druga: dojrzewanie, a przy niektórych owocach mróz. Pigwa i tarnina po przemarznięciu tracą cierpkość i to jest powód, dla którego zbiera się je późno, a nie kaprys tradycji.",
        "Trzecia, najbardziej praktyczna: obieranie i odpestczanie. Cierpkość siedzi prawie zawsze w skórce i w pestkach, a nie w miąższu. To prowadzi wprost do najczęstszego domowego potknięcia: mus albo koktajl zmiksowany razem z pestkami i skórkami robi się cierpki, a nikt nie wie dlaczego — bo z tych samych owoców zjedzonych normalnie nic takiego nie wychodziło.",
        "Czwarta dotyczy naparów: cierpka herbata to prawie zawsze kwestia zbyt długiego parzenia albo zbyt gorącej wody, a nie gatunku. Ta sama herbata potraktowana krócej i chłodniej bywa nie do poznania.",
        "Warto przy tym dodać, że cierpkość nie zawsze jest wadą. W małej dawce robi danie „czystym” i nie pozwala mu rozpłynąć się w słodyczy — dlatego mus z jabłek z odrobiną skórki jest ciekawszy niż sam miąższ, a granat w sałatce robi więcej niż tylko kolor.",
        "Teraz uczciwie o sprzęcie. Thermomix nie usunie cierpkości i nie zmieni niedojrzałego owocu w dojrzały. Tego nie da się obejść.",
        "Pomaga natomiast w dwóch konkretnych miejscach. Po pierwsze przeciera i pozwala przepuścić masę przez sito — czyli oddziela skórki i pestki, w których cierpkość siedzi; przy musach z aronii, winogron czy jabłek to jest cała różnica między „dobre” a „dziwne”. Po drugie utrzymuje stałą temperaturę przy parzeniu naparów, co usuwa najczęstszą przyczynę cierpkiej herbaty: wodę gorętszą, niż powinna być.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Lubniewicach?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli macie owoce z ogrodu, z którymi nie wiadomo co zrobić — powiedzcie przy umawianiu. Chętnie zrobię z nich mus albo przecier.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Lubniewicach"),
    sekcjaRaty("w Lubniewicach"),
    {
      id: "rodzina",
      heading: "Thermomix dla lubniewickiej rodziny",
      paragraphs: [
        "Lubniewice liczą niespełna dwa tysiące mieszkańców na dwunastu kilometrach kwadratowych, a cała gmina blisko trzy tysiące osób na stu trzydziestu. W 1751 roku odkryto tu złoża ałunu i uruchomiono kopalnię; ałun eksploatowano również w Gliśnie, gdzie obok rezydencji działały ałuniarnia i fabryka jedwabiu. Wcześniej, w latach 1698–1738, baron von Schmettau założył w Lubniewicach kolonię tkaczy, a włókiennictwo było w XVIII wieku głównym zajęciem mieszkańców. Pełne prawa miejskie miasto otrzymało w 1808 roku, utraciło je po 1945 i odzyskało w 1995. Leży między jeziorami Lubiąż i Krajnik, w pobliżu jeziora Lubniewsko; 21 lutego 2002 roku utworzono tu Zespół Przyrodniczo-Krajobrazowy „Uroczysko Lubniewsko” o powierzchni ponad tysiąca stu czterdziestu hektarów, w którym samo jezioro Lubniewsko zajmuje blisko dwieście czterdzieści jeden hektarów, a stwierdzono około trzystu gatunków roślin i dziewięćdziesięciu gatunków ptaków; lasy zajmują w gminie ponad osiem i pół tysiąca hektarów. W mieście stoją dwa zamki: Stary z 1812 roku, klasycystyczny, wzniesiony przez Adolfa Friedricha IV von Waldow, i Nowy z lat 1909–1911, neorenesansowy, na planie litery L z wieżą. W Gliśnie zachował się pałac z 1793 roku, przebudowany w 1846, od 1978 roku siedziba ośrodka doradztwa rolniczego.",
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

  districtsHeading: "Do których części Lubniewic dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — po obu stronach, od jeziora Lubiąż po Krajnik. Dojeżdżam też do wsi w gminie: Glisna, Jarnatowa, Rogów, Osieczyc, Rybakówka, Sobieraja i Zofiówki.",
    "Przy umawianiu wystarczy podać miejscowość, ulicę i numer domu. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Lubniewice też przyjadę",
  nearbyParagraphs: [
    "Sulęcin, Krzeszyce, Bledzew, Ośno Lubuskie i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Sulęcin", "Bledzew", "Ośno Lubuskie", "Gorzów Wielkopolski"],

  about: blokOMnie("do Lubniewic", "w Lubniewicach", REGION_LUBUSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Lubniewic bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wsi w gminie — Glisna, Jarnatowa, Rogów i pozostałych. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Lubniewicach"),
    {
      question: "Czym różni się cierpkość od goryczy?",
      answer:
        "Gorycz jest smakiem, a cierpkość wrażeniem dotykowym — to uczucie szorstkości i suchości w ustach. Dlatego cukier, który maskuje gorycz, na cierpkość nie działa w ogóle: danie robi się słodkie i nadal ściąga język.",
    },
    {
      question: "Co pomaga na cierpki smak?",
      answer:
        "Tłuszcz i białko — śmietana, mleko, masło, jogurt — bo wiążą cierpkość. Pomaga też obranie i odpestkowanie, bo cierpkość siedzi zwykle w skórce i pestkach, oraz dojrzewanie, a przy pigwie i tarninie przemarznięcie.",
    },
    {
      question: "Dlaczego domowy mus bywa cierpki?",
      answer:
        "Najczęściej dlatego, że został zmiksowany razem ze skórkami i pestkami. Te same owoce zjedzone normalnie nie ściągają — cierpkość uwalnia się dopiero po rozdrobnieniu. Rozwiązaniem jest przetarcie masy przez sito.",
    },
  ],

  geo: { lat: 52.5159, lng: 15.25 },
};
