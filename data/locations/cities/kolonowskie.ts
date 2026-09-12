import type { CityContent } from "../city-content";
import {
  REGION_OPOLSKIE,
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
 * KOLONOWSKIE — miasto w powiecie strzeleckim, 3 187 mieszkańców
 * (31.12.2024, GUS); cała gmina 5 657. Miasto powstało wokół
 * WIELKIEGO PIECA zbudowanego w 1780 r. nad Brzyniczką, a nazwę
 * przyjęło w 1797 r. OD NAZWISKA HRABIEGO FILIPA COLONNY.
 * Prawa miejskie 1973 r., po przyłączeniu Fosowskiego.
 * Gmina jest DWUJĘZYCZNA: urzędowa nazwa niemiecka COLONNOWSKA
 * wpisana 14 listopada 2008 r., język pomocniczy od 2006 r.
 * Miasto ma OFICJALNĄ JEDNOSTKĘ POMOCNICZĄ: Dzielnicę Fosowskie.
 *
 * KĄT: smalec i pasty do chleba — jedzenie ludzi pracujących
 * fizycznie. Miasto zbudowane dla załogi huty, w którym
 * do dziś pracuje się w konstrukcjach stalowych i przy izolacji
 * rur, jest właściwym miejscem na stronę o tym, co się smaruje
 * na chleb, kiedy dzień zaczyna się o piątej.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że pasty do chleba to jedna z tych rzeczy, w których
 *   urządzenie jest po prostu wygodniejsze od miski i widelca,
 * — co realnie wychodzi: pasta jajeczna, rybna, twarogowa,
 *   z fasoli, z pieczonych warzyw, pasztet z gotowanego mięsa,
 * — że SMALCU nie wytopi tak jak patelnia — skwarki wymagają
 *   suchego, mocnego ognia i to zostaje przy patelni,
 * — i że wszystko sprowadza się do jednej decyzji: jak długo
 *   miksować, bo różnica między pastą a papką to kilka sekund.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PORAD O PRZECHOWYWANIU past i smalcu ani o tym,
 *   ile mogą stać. Bezpieczeństwo żywności.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH — ani o tłuszczu zwierzęcym,
 *   ani o „zdrowszych zamiennikach". Nie oceniam, co ludzie jedzą.
 * — ŻADNYCH NAZW FIRM.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Jedzenie zabierane ze sobą
 * do pracy" (inne miasto) dotyczy drugiego śniadania jako rytmu
 * dnia. „Czerstwy chleb" (Bodzentyn) dotyczy końca życia
 * bochenka. „Mielenie mięsa" (Modliborzyce) dotyczy maszynki.
 * „Chrzan, musztarda, ocet" (Działoszyce) dotyczy dodatków
 * kupowanych w słoiku. Tutaj chodzi o SAMĄ PASTĘ — o to,
 * co się rozsmarowuje.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PISZĘ, że prawa miejskie nadano w 1993 r. To BŁĄD,
 *   który krąży w sieci. Prawidłowo: 1973 r.
 * — NIE ROZSTRZYGAM, czy huta nad Brzyniczką z 1780 r. i zakład
 *   w Fosowskiem z 1790 r. to jedna, czy dwie inwestycje.
 * — NIE PODAJĘ NAZW FIRM ani liczby zatrudnionych. Zakłady są
 *   ustalone, ale ich nie reklamuję; siedziba jednej z nich jest
 *   zresztą w sąsiednim mieście, a tutaj działa tylko jej centrum.
 * — NIE WYMIENIAM firm z wykazu urzędu — wykaz opiera się
 *   na danych z 31 grudnia 2015 r.
 * — NIE PISZĘ, że huta żelaza działa. Nie znalazłem po niej śladu;
 *   dzisiejszy przemysł to izolacje rur, konstrukcje stalowe
 *   i drewno.
 * — NIE PODAJĘ produktu z Listy Produktów Tradycyjnych. Brak —
 *   „pieróg postny ze Starych Kolni" pochodzi z gminy Popielów,
 *   nie stąd; to łatwa pomyłka.
 * — DZIELNICA FOSOWSKIE JEST PRAWDZIWA: to jednostka pomocnicza
 *   z własnym Zarządem Dzielnicy, potwierdzona w BIP. districts
 *   zawiera JĄ JEDNĄ i nic więcej.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — wielki piec nad Brzyniczką z 1780 r.; nazwa Colonnowska
 *   od 1797 r., od nazwiska hrabiego Filipa Colonny,
 * — w latach 1936–1945 Niemcy zmienili nazwę na Grafenweiler,
 *   żeby usunąć włoskie nazwisko,
 * — prawa miejskie 1973 r., po przyłączeniu Fosowskiego,
 * — Fosowskie to historyczny węzeł kolejowy: linie od 1858 r.
 *   (Opole–Tarnowskie Góry), 1868 (Wrocław), 1894 (Lubliniec),
 *   1912–1913 (Strzelce Opolskie i Dobrodzień),
 * — gmina dwujęzyczna: nazwa Colonnowska wpisana 14 listopada
 *   2008 r., język pomocniczy od 2006 r., cztery miejscowości
 *   z tablicami,
 * — 75% powierzchni gminy to lasy; miasto ma 55,7 km² przy
 *   3 187 mieszkańcach,
 * — 3 187 mieszkańców miasta, 5 657 gminy (31.12.2024).
 */
export const KOLONOWSKIE: CityContent = {
  slug: "kolonowskie",
  h1: "Thermomix Kolonowskie – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Kolonowskie — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Kolonowskiem: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i Fosowskie. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Kolonowskie — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Kolonowskiem. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Kolonowskiego z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta, Fosowskiego i sołectw gminy.",

  highlights: highlightyStandardowe("Kolonowskie, Fosowskie i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Między pastą a papką jest kilka sekund różnicy.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Kolonowskiem – jak wygląda prezentacja?",
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
      id: "pasty",
      heading: "Miasto zbudowane dla załogi huty — czyli o tym, co się smaruje na chleb",
      paragraphs: [
        "Kolonowskie zaczęło się od pieca. W 1780 roku nad Brzyniczką stanął wielki piec do wytopu żelaza, a osiedle dla załogi wzięło w 1797 nazwę od nazwiska właściciela dóbr, hrabiego Filipa Colonny — Colonnowska. To jedna z niewielu miejscowości w Polsce nazwanych po prostu czyimś nazwiskiem. Prawa miejskie przyszły dopiero w 1973 roku, po przyłączeniu Fosowskiego.",
        "Miasto od początku było miejscem, w którym pracuje się rękami — dawniej przy piecu, dziś przy konstrukcjach stalowych i izolacji rur. A tam, gdzie dzień zaczyna się o piątej, kanapka nie jest przekąską, tylko posiłkiem. Więc napiszę o tym, co się na tę kanapkę kładzie.",
        "Pasty do chleba to jedna z tych rzeczy, w których urządzenie jest po prostu wygodniejsze od miski i widelca — bez wielkiej filozofii, ale realnie. W jednym naczyniu, w kilkanaście sekund, bez rozgniatania, bez tarcia i bez maszynki.",
        "Co wychodzi dobrze: pasta jajeczna, pasta z twarogu ze szczypiorkiem, pasta rybna z wędzonej makreli, pasta z fasoli albo ciecierzycy, pasta z pieczonych warzyw, masło ziołowe. Do tego pasztet z ugotowanego mięsa i warzyw — zmielony w naczyniu, przełożony do formy i dopieczony w piekarniku, bo tego ostatniego kroku urządzenie nie zrobi.",
        "Czego nie zrobi na pewno, a bywa mylone: nie wytopi smalcu ze skwarkami. Skwarki potrzebują suchego, mocnego ognia i odparowania wody — a tu wszystko dzieje się pod przykryciem, w wilgoci. Wychodzi tłuszcz z rozmiękłą słoniną zamiast chrupiących skwarków. Smalec zostaje przy patelni i tak ma być.",
        "I jedna rzecz, która decyduje o wszystkim: różnica między pastą a papką to kilka sekund. Pasta ma mieć wyczuwalną strukturę — kawałeczki jajka, grudki twarogu, coś, w co można wgryźć zęby. Krótkie, przerywane miksowanie daje pastę; ciągłe daje jednolitą maź, która wygląda i smakuje jak jedzenie ze słoiczka. Lepiej zmiksować za krótko i powtórzyć, niż raz za długo — bo tego się nie cofa.",
        "Czego nie doradzę: jak długo domowa pasta może stać w lodówce. To bezpieczeństwo żywności, a nie sprzęt kuchenny.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Kolonowskiem?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli w domu ktoś wychodzi do pracy wcześnie, powiedzcie to przy umawianiu — zrobimy dwie pasty i zobaczycie różnicę między krótkim a długim miksowaniem.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Kolonowskiem"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla kolonowskiej rodziny",
      paragraphs: [
        "Kolonowskie liczy nieco ponad trzy tysiące mieszkańców, a cała gmina blisko sześć tysięcy. Miasto ma nietypowo dużą powierzchnię — prawie pięćdziesiąt sześć kilometrów kwadratowych — bo w jego granicach mieszczą się rozległe lasy; w całej gminie zajmują one trzy czwarte terenu. Warto wiedzieć dwie rzeczy: w latach 1936–1945 Niemcy zmienili nazwę miasta na Grafenweiler, żeby usunąć z mapy włoskie nazwisko Colonny, a dzisiejsza urzędowa nazwa niemiecka brzmi Colonnowska i została wpisana 14 listopada 2008 roku — gmina jest dwujęzyczna, a język niemiecki ma tu status pomocniczego od 2006 roku. Fosowskie, dziś oficjalna dzielnica miasta, jest historycznym węzłem kolejowym: pierwsza linia dotarła tu w 1858 roku.",
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

  districtsHeading: "Do których części Kolonowskiego dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta, w tym do Dzielnicy Fosowskie, oraz do sołectw gminy — Staniszcz Wielkich, Staniszcz Małych i Spóroka — bez dopłaty za dojazd.",
    "Fosowskie jest oficjalną jednostką pomocniczą z własnym zarządem, więc przy umawianiu wystarczy podać nazwę dzielnicy albo ulicę.",
  ],
  districts: ["Fosowskie"],

  nearbyHeading: "Poza Kolonowskie też przyjadę",
  nearbyParagraphs: [
    "Zawadzkie, Strzelce Opolskie, Ozimek, Opole i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Zawadzkie", "Strzelce Opolskie", "Ozimek", "Opole", "Olesno", "Gogolin"],

  about: blokOMnie("do Kolonowskiego", "w Kolonowskiem i okolicy", REGION_OPOLSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Kolonowskiego bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta łącznie z Dzielnicą Fosowskie oraz do sołectw gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Kolonowskiem"),
    {
      question: "Jakie pasty do chleba wychodzą w Thermomiksie?",
      answer:
        "Jajeczna, twarogowa ze szczypiorkiem, rybna z wędzonej makreli, z fasoli albo ciecierzycy, z pieczonych warzyw, masło ziołowe. Wychodzi też pasztet z ugotowanego mięsa — zmielony w naczyniu, ale dopieczony już w piekarniku.",
    },
    {
      question: "Czy wytopi smalec ze skwarkami?",
      answer:
        "Nie. Skwarki potrzebują suchego, mocnego ognia i odparowania wody, a tutaj wszystko dzieje się pod przykryciem, w wilgoci — wyjdzie tłuszcz z rozmiękłą słoniną zamiast chrupiących skwarków. Smalec zostaje przy patelni.",
    },
    {
      question: "Dlaczego moja pasta wychodzi jak papka?",
      answer:
        "Bo była miksowana zbyt długo. Pasta ma mieć wyczuwalną strukturę, więc miksuje się krótko i z przerwami, a nie ciągiem. Lepiej zmiksować za krótko i powtórzyć — jednolitej mazi nie da się już cofnąć.",
    },
  ],

  geo: { lat: 50.6533, lng: 18.3842 },
};
