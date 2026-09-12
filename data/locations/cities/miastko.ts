import type { CityContent } from "../city-content";
import {
  REGION_POMORZE,
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
 * MIASTKO — miasto w powiecie bytowskim, 9 283 mieszkańców
 * (31.12.2024, GUS). W briefie 10 000 — zawyżone.
 *
 * LASY: ok. 53% powierzchni gminy. Gmina rolniczo-leśna.
 *
 * FABRYKA RĘKAWICZEK — dawny największy zakład — została
 * ROZEBRANA W 2012 r. Piszę o tym OSTROŻNIE, jednym zdaniem
 * i bez robienia z tego tła sprzedażowego: cudza utrata pracy
 * nie jest scenografią do prezentacji sprzętu.
 *
 * TRUSKAWKA KASZUBSKA / KASZËBSKÔ MALËNA ma ChOG obejmujące
 * m.in. powiat bytowski, więc formalnie także gminę Miastko.
 * KĄTA TRUSKAWKOWEGO NIE UŻYWAM — jest już ZAJĘTY przez inne
 * miasto w serwisie. Wspominam ten fakt najwyżej marginalnie
 * albo wcale.
 *
 * KĄT: MIELONE MIĘSO I MASZYNKA DO MIELENIA — czym to urządzenie
 * NIE jest. Kąt gruntuje się w tym, że Miastko to gmina
 * rolniczo-leśna, gdzie mielenie mięsa w domu wciąż jest
 * normalną czynnością, a maszynka stoi w szafce w każdym domu.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że to NIE JEST maszynka do mielenia mięsa i nie zastąpi jej,
 * — dlaczego: maszynka PRZECISKA przez sitko i daje włókna,
 *   a to urządzenie SIEKA nożem i daje pastę — to dwie różne
 *   struktury i nie da się jednej udawać drugą,
 * — że do kotletów mielonych i do wędlin maszynka zostaje,
 * — co za to robi bardzo dobrze: pasty, farsze na gładko, kremy
 *   mięsne, siekanie warzyw do farszu, mielenie orzechów, bułki
 *   tartej, kaszy, ziół,
 * — że przy surowym mięsie obowiązuje odmowa i higiena, i że
 *   nie doradzam nic o bezpieczeństwie surowego mięsa,
 * — że mielenie kości, ścięgien i mrożonego mięsa w kostce jest
 *   po prostu zabronione i psuje sprzęt.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE SUROWEGO MIĘSA —
 *   przechowywanie, temperatura obróbki, mycie po surowym.
 *   ODMOWA STOI W TEKŚCIE.
 * — ŻADNYCH PORAD O WĘDLINACH DOMOWYCH, PEKLOWANIU, SOLENIU,
 *   WĘDZENIU. To osobna dziedzina z realnym ryzykiem.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH ani o zawartości tłuszczu.
 * — ŻADNYCH NAZW FIRM.
 * — NIE ROBIĘ TŁA ze zlikwidowanej fabryki.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Ryba" i „ryby" mają własne
 * strony w serwisie. „Smalec i pasty" (Kolonowskie) dotyczy
 * tłuszczu i smarowideł. „Pasztet" nigdzie nie jest kątem.
 * Tutaj chodzi o KONKRETNE URZĄDZENIE — maszynkę do mięsa —
 * i o pytanie, czy Thermomix ją zastąpi. Odpowiedź brzmi NIE
 * i tak jest napisane.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ nazwy zlikwidowanego zakładu ani liczby
 *   zwolnionych. Wspominam rozbiórkę jednym zdaniem.
 * — NIE PISZĘ, że w Miastku uprawia się truskawki na dużą skalę.
 *   Obszar ChOG obejmuje powiat, ale skali dla samej gminy
 *   nie potwierdziłam.
 * — NIE PODAJĘ nazw gospodarstw ani hodowli.
 * — NIE PODAJĘ mocy silnika ani parametrów technicznych.
 * — districts: miasto nie ma statutowych osiedli. PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — 9 283 mieszkańców (31.12.2024, GUS),
 * — ok. 53% powierzchni gminy zajmują lasy,
 * — dawna fabryka rękawiczek rozebrana w 2012 r.,
 * — gmina leży w powiecie bytowskim.
 */
export const MIASTKO: CityContent = {
  slug: "miastko",
  h1: "Thermomix Miastko – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Miastko (pomorskie) — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Miastku: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Miastko — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Miastku. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Miastka z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do sołectw gminy.",

  highlights: highlightyStandardowe("Miastko i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Maszynki do mięsa nie wyrzucaj. Serio.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Miastku – jak wygląda prezentacja?",
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
      id: "maszynka",
      heading: "Czy Thermomix zastąpi maszynkę do mięsa? Nie — i wyjaśnię dlaczego",
      paragraphs: [
        "Miastko to gmina rolniczo-leśna: ponad połowa jej powierzchni to las, a poza miastem wciąż są domy, w których mięso miele się samemu i wie się dokładnie, z czego. W takich domach maszynka nie jest gadżetem, tylko narzędziem pracy. Dlatego pytanie, które dostaję tu najczęściej, brzmi: „to ja tę maszynkę wyrzucę?”. Nie. I to jest najuczciwsza rzecz, jaką mogę na tej stronie napisać.",
        "Różnica jest fizyczna, nie marketingowa. Maszynka PRZECISKA mięso przez sitko: ślimak popycha, nóż tnie przy otworach, a to, co wychodzi, ma włókna ułożone w jedną stronę. Właśnie dlatego kotlet mielony trzyma się w całości i ma strukturę, którą znamy. Thermomix natomiast SIEKA — nóż obraca się w naczyniu i uderza w kawałki z każdej strony. Efektem nie są włókna, tylko masa: im dłużej, tym bliżej pasty. To nie jest gorsze ani lepsze. To jest coś innego.",
        "Więc jeżeli robisz kotlety mielone, pulpety, które mają być sprężyste, albo cokolwiek do wędlin domowych — maszynka zostaje w szafce i będzie Ci służyć dalej.",
        "A teraz to, co ten sprzęt robi w temacie mięsa naprawdę dobrze, i to znacznie lepiej niż maszynka. Pasty mięsne i rybne. Farsze na gładko — do pierogów, do gołąbków, do naleśników, do faszerowanych warzyw. Kremy i musy z gotowanego mięsa, także dla kogoś, kto ma trudność z gryzieniem. I cała robota wokół farszu, o której zapominamy, a która zajmuje najwięcej czasu: posiekana cebula, starta marchewka, natka, czosnek, namoczona bułka, bułka tarta, mielone orzechy, kasza. To wszystko powstaje w jednym naczyniu, po kolei, bez wyjmowania tarki i trzech misek.",
        "Trzy rzeczy, których w nim nie wolno robić, i mówię to wprost, żeby nikt nie zepsuł sobie sprzętu: kości. Ścięgien i chrząstek. Mięsa zamrożonego w jednej bryle. Nóż jest ostry, ale nie jest do tego i nie ma o czym dyskutować.",
        "I granica, przy której nie ustąpię. Nie doradzę Ci nic o surowym mięsie: ile może leżeć, w jakiej temperaturze, co robić z deską i naczyniem po nim, jak głęboko ma być wysmażone. To jest bezpieczeństwo żywności i realne ryzyko, a ja sprzedaję sprzęt kuchenny. Tak samo nie doradzę nic o wędlinach domowych, peklowaniu i wędzeniu — to osobne rzemiosło z własnymi zasadami i własnym ryzykiem, i nie będę udawać, że się na nim znam.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Miastku?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeżeli chcesz zobaczyć różnicę między siekaniem a mieleniem na własne oczy — powiedz przy umawianiu. Pokażę na spotkaniu i sama ocenisz.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Miastku"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla miasteckiej rodziny",
      paragraphs: [
        "Miastko liczy nieco ponad dziewięć tysięcy mieszkańców i leży w powiecie bytowskim, w gminie, której ponad połowę powierzchni zajmują lasy. Dawna fabryka rękawiczek, przez lata największy tutejszy zakład, została rozebrana w 2012 roku i dziś ludzie pracują raczej w usługach, w mniejszych firmach i w gospodarstwach. To jest miejsce, gdzie odległość do sklepu bywa realnym argumentem za gotowaniem większą porcją.",
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

  districtsHeading: "Do których części Miastka dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do sołectw gminy — Piaszczyny, Świerzna, Wałdowa, Dretynia, Słosinka i pozostałych. Dojazd jest wszędzie bezpłatny.",
    "Miasto nie dzieli się na statutowe osiedla, więc przy umawianiu wystarczy podać ulicę albo miejscowość.",
  ],
  districts: [],

  nearbyHeading: "Poza Miastko też przyjadę",
  nearbyParagraphs: [
    "Bytów, Człuchów, Kępice, Biały Bór, Bobolice i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Bytów", "Człuchów", "Kępice", "Słupsk", "Chojnice"],

  about: blokOMnie("do Miastka", "w Miastku i okolicy", REGION_POMORZE),

  faq: [
    {
      question: "Czy dojeżdżasz do Miastka bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do sołectw gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Miastku"),
    {
      question: "Czy Thermomix zastąpi maszynkę do mielenia mięsa?",
      answer:
        "Nie. Maszynka przeciska mięso przez sitko i daje włókna — dlatego kotlet mielony się trzyma. Thermomix sieka nożem i daje masę, im dłużej, tym bliżej pasty. Do kotletów i do wędlin maszynka zostaje w szafce.",
    },
    {
      question: "To co zrobi z mięsem lepiej?",
      answer:
        "Pasty, farsze na gładko do pierogów i gołąbków, kremy z gotowanego mięsa — i całą robotę wokół farszu: cebulę, marchewkę, czosnek, namoczoną bułkę, bułkę tartą, orzechy, kaszę. Wszystko po kolei w jednym naczyniu.",
    },
    {
      question: "Czego nie wolno w nim mielić?",
      answer:
        "Kości, ścięgien i chrząstek oraz mięsa zamrożonego w jednej bryle. Nóż jest ostry, ale nie jest do tego. A o samym surowym mięsie — przechowywaniu, temperaturze, myciu po nim — nie doradzę: to bezpieczeństwo żywności, nie obsługa sprzętu.",
    },
  ],

  geo: { lat: 54.0072, lng: 16.9822 },
};
