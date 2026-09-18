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
 * SZEPIETOWO — gmina miejsko-wiejska w powiecie wysokomazowieckim.
 * MIASTO 1 999, GMINA 6 354 (GUS 31.12.2024).
 * POWIERZCHNIA MIASTA 2,8 km², GMINY 151,7 km², ok. 50 wsi.
 *
 * ⚠⚠ PRAWA MIEJSKIE 1 STYCZNIA 2010 r. — TO NADANIE PIERWSZE
 * W HISTORII, NIE PRZYWRÓCENIE. Szepietowo NIGDY WCZEŚNIEJ
 * NIE BYŁO MIASTEM. Piszę to wprost, bo to rzadkość.
 *
 * KOLEJ: miejscowość wyrosła przy KOLEI WARSZAWSKO-PETERSBURSKIEJ
 * budowanej 1851–1862, pierwszy pociąg 1860 r. Kapliczka
 * upamiętnia otwarcie linii w 1862 r.
 * ⚠ KĄTA KOLEJOWEGO NIE UŻYWAM — „węzeł kolejowy" jest ZAJĘTY
 *   przez inne miasto. Kolej podaję wyłącznie jako fakt.
 *
 * ⚠⚠ PODR — PODSTAWA KĄTA:
 * PODLASKI OŚRODEK DORADZTWA ROLNICZEGO działa w Szepietowie
 * OD 26 MARCA 1948 r.
 * REGIONALNA WYSTAWA ZWIERZĄT HODOWLANYCH:
 * — XXX edycja 29–30.06.2024 (117 zwierząt, 39 wystawców,
 *   rasy zachowawcze: polska czarno-biała, simentalska,
 *   polska czerwona),
 * — ⚠⚠ XXXI edycja 28–29.06.2025 — TŁOCZENIE OLEJU RZEPAKOWEGO
 *   I DEGUSTACJA POLSKICH OLEJÓW RZEPAKOWYCH. TO JEST KOTWICA.
 *   Finał „Bitwy Regionów" z Kołami Gospodyń Wiejskich.
 * — XXXII edycja 19–21.06.2026.
 * Frekwencja ok. 90 000 zwiedzających.
 *
 * PARK DWORSKI z 1927 r.
 * ⚠ TYLKO JEDEN MIESZKANIEC SAMEGO MIASTA UTRZYMUJE SIĘ
 *   Z ROLNICTWA — tego faktu NIE UŻYWAM, bo brzmi jak
 *   ciekawostka statystyczna i łatwo go źle zrozumieć.
 * ⚠⚠ RZEKI NIE PODAJĘ — jedno źródło mówi wprost, że nie ma
 *   tu cieku o znaczeniu gospodarczym.
 *
 * KĄT: OLEJE — KTÓRY DO CZEGO.
 * Kąt od tłoczenia oleju rzepakowego i degustacji polskich
 * olejów na wystawie w 2025 r.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że olej to w większości kuchni jeden anonimowy produkt
 *   z półki, a różnice między nimi są duże i praktyczne,
 * — PODZIAŁ, KTÓRY MA ZNACZENIE: olej tłoczony na zimno
 *   kontra rafinowany — pierwszy ma smak i zapach, drugi
 *   jest neutralny i znosi wyższą temperaturę,
 * — że to jest podział na „do smaku" i „do smażenia",
 *   i że pomylenie ich to najczęstszy błąd,
 * — że olej o wyraźnym smaku dodany na końcu robi więcej
 *   niż ten sam olej wlany na patelnię na początku,
 * — o RZEPAKU: że wrócił do łask i że tłoczony na zimno
 *   ma wyraźny smak, który komuś odpowiada, a komuś nie,
 * — że oliwa nie jest odpowiedzią na wszystko,
 * — ŻE OLEJ SIĘ PSUJE: światło i ciepło mu szkodzą,
 *   a zjełczały olej zepsuje całe danie,
 * — jak to sprawdzić: powąchać, zanim się wleje,
 * — UCZCIWIE: urządzenie nie zmienia jakości oleju
 *   i nie usmaży na nim frytek,
 * — ale robi dwie rzeczy: emulguje (majonez, dressing,
 *   sos) i pozwala oleju pracować w niskiej, PILNOWANEJ
 *   temperaturze, czego na patelni nie ma.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH LICZB — zero stopni „punktu dymienia",
 *   zero proporcji. Piszę jakościowo: „wyższa", „niższa".
 * — ⚠⚠ ŻADNYCH TWIERDZEŃ ZDROWOTNYCH. ZERO omega-3,
 *   ZERO cholesterolu, ZERO „zdrowszy olej", ZERO tłuszczów
 *   nasyconych i nienasyconych. Piszę WYŁĄCZNIE o smaku,
 *   zapachu, zachowaniu w cieple i trwałości. TWARDA GRANICA.
 * — ŻADNYCH NAZW FIRM ANI MAREK OLEJÓW.
 * — ZERO wartościowania „polskie kontra zagraniczne".
 *
 * ⚠ ETYKA — PODLASKIE:
 * — ZERO Zagłady, gett, pogromów, cmentarzy żydowskich.
 * — ZERO lat 1941/1943/1945, wysiedleń, pacyfikacji.
 * — ZERO granicy, wojska, podziemia.
 * — ZERO konfliktów narodowościowych i wyznaniowych.
 * — ZERO bezrobocia i wyludniania.
 * — ⚠ ZERO polityki rolnej, dopłat, cen skupu i protestów.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Masło" (inne miasto)
 * dotyczy jednego produktu mlecznego. „Tłuste kontra chude"
 * dotyczy zawartości tłuszczu w mięsie i nabiale. „Zasmażka"
 * dotyczy mąki z tłuszczem jako techniki. „Smalec i pasty
 * do chleba" dotyczą tłuszczu zwierzęcego jako dodatku
 * do pieczywa. Tutaj chodzi o OLEJE ROŚLINNE JAKO OSOBNĄ
 * KATEGORIĘ ZAKUPOWĄ i o to, który z nich do czego.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PISZĘ, że Szepietowo „odzyskało" prawa miejskie.
 * — NIE PODAJĘ rzeki.
 * — NIE PODAJĘ frekwencji wystawy jako liczby pewnej —
 *   piszę „kilkadziesiąt tysięcy".
 * — NIE PRZYPISUJĘ Szepietowu produktu z Listy Produktów
 *   Tradycyjnych.
 * — NIE MYLĘ SZEPIETOWA z SZEPIETÓWKĄ (Ukraina) ani
 *   z WYSOKIM MAZOWIECKIM. FAQ to rozróżnia.
 * — districts: brak potwierdzonych osiedli. PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — miasto liczy niecałe dwa tysiące mieszkańców na 2,8 km²,
 *   cała gmina ponad sześć tysięcy na 151,7 km², około
 *   pięćdziesięciu wsi,
 * — prawa miejskie 1 stycznia 2010 r. — nadanie pierwsze
 *   w historii miejscowości,
 * — miejscowość wyrosła przy kolei warszawsko-petersburskiej
 *   budowanej w latach 1851–1862; pierwszy pociąg przejechał
 *   w 1860 r., a kapliczka upamiętnia otwarcie linii w 1862,
 * — Podlaski Ośrodek Doradztwa Rolniczego działa tu
 *   od 26 marca 1948 r.,
 * — Regionalna Wystawa Zwierząt Hodowlanych: XXX edycja
 *   29–30 czerwca 2024 r. (117 zwierząt, 39 wystawców, rasy
 *   zachowawcze), XXXI 28–29 czerwca 2025 r. z tłoczeniem
 *   oleju rzepakowego i degustacją polskich olejów oraz
 *   finałem „Bitwy Regionów" kół gospodyń wiejskich,
 *   XXXII zaplanowana na 19–21 czerwca 2026 r.,
 * — park dworski z 1927 r.
 */
export const SZEPIETOWO: CityContent = {
  slug: "szepietowo",
  h1: "Thermomix Szepietowo – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Szepietowo — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Szepietowie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Szepietowo — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Szepietowie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Szepietowa z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do całej gminy.",

  highlights: highlightyStandardowe("Szepietowo i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Olej do smaku i olej do smażenia to dwie różne rzeczy.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Szepietowie – jak wygląda prezentacja?",
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
      id: "oleje",
      heading: "Tłoczenie oleju na wystawie — czyli który olej do czego",
      paragraphs: [
        "Na czerwcowej wystawie zwierząt hodowlanych w 2025 roku, oprócz zwierząt, tłoczono tu olej rzepakowy i można było spróbować polskich olejów obok siebie. To dobry pretekst, żeby napisać o czymś, o czym w kuchni prawie nikt nie myśli: że olej to nie jest jeden produkt.",
        "W większości domów olej jest anonimową butelką z półki, kupowaną bez zastanowienia. Tymczasem różnice między olejami są duże i całkowicie praktyczne — słychać je w smaku i widać na patelni.",
        "Podział, który naprawdę ma znaczenie, jest tylko jeden: olej tłoczony na zimno kontra olej rafinowany. Ten pierwszy ma własny smak i zapach — czasem bardzo wyraźny. Ten drugi jest celowo pozbawiony smaku i znosi wyższą temperaturę bez przykrego zapachu.",
        "Z tego wynika cała reszta. Olej tłoczony na zimno jest do smaku, olej rafinowany do smażenia. Pomylenie tych dwóch ról to najczęstszy błąd, jaki widzę: ktoś kupuje drogi, pachnący olej i wylewa go na rozgrzaną patelnię, gdzie cały jego zapach po prostu znika, a często zamienia się w coś niedobrego.",
        "Zasada odwrotna działa równie mocno. Ten sam olej dodany na końcu, już do gotowego dania — do zupy w talerzu, do warzyw, do sałatki — robi więcej niż litr tego samego oleju wlany na początku. Łyżka na koniec zmienia smak całej potrawy.",
        "Rzepak wrócił po latach do łask i słusznie. Tłoczony na zimno ma charakterystyczny, trochę orzechowy smak, który jednym bardzo odpowiada, a innym w ogóle nie — i to jest w porządku, bo to kwestia gustu, a nie jakości. Warto go po prostu spróbować, zanim się kupi większą butelkę.",
        "Oliwa też nie jest odpowiedzią na wszystko. Jest znakomita tam, gdzie jej smak pasuje, i zupełnie nie na miejscu tam, gdzie ma go nie być — na przykład w cieście albo w delikatnym kremie, któremu potrafi narzucić własny charakter.",
        "Rzecz, o której zapomina się najczęściej: olej się psuje. Światło i ciepło mu szkodzą, więc butelka stojąca na parapecie obok kuchenki starzeje się szybciej niż ta w szafce. Zjełczały olej ma charakterystyczny, drapiący zapach i potrafi zepsuć całe danie — a wlewa się go zwykle bez sprawdzenia.",
        "Nawyk, który polecam każdemu: przed wlaniem powąchać. Dwie sekundy, a oszczędza czasem cały obiad. Dotyczy to zwłaszcza olejów tłoczonych na zimno, które kupuje się rzadko i trzyma długo.",
        "Teraz uczciwie o sprzęcie. Thermomix nie zmieni jakości oleju, którym dysponujesz, i nie usmaży na nim frytek — to nie jest frytkownica i nigdy nią nie będzie.",
        "Robi natomiast dwie rzeczy, których na patelni nie ma. Po pierwsze emulguje: majonez, dressing, sos na bazie oleju powstają przewidywalnie, bo olej dodaje się stopniowo przy stałym mieszaniu, a to jest cała tajemnica emulsji. Po drugie pozwala oleju pracować w niskiej i pilnowanej temperaturze — dusić, a nie smażyć. Dla oleju z wyraźnym smakiem to różnica między zachowaniem go a spaleniem.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Szepietowie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedzcie przy umawianiu, czy w domu jest ktoś, kto lubi wyraziste smaki, a kto woli neutralne. Od tego zależy, co warto pokazać.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Szepietowie"),
    sekcjaRaty("w Szepietowie"),
    {
      id: "rodzina",
      heading: "Thermomix dla szepietowskiej rodziny",
      paragraphs: [
        "Samo miasto liczy niecałe dwa tysiące mieszkańców na niespełna trzech kilometrach kwadratowych, a cała gmina ponad sześć tysięcy na stu pięćdziesięciu jeden, z blisko pięćdziesięcioma wsiami. Szepietowo jest miastem dopiero od 1 stycznia 2010 roku — i, co rzadkie, jest to nadanie pierwsze w jego historii, a nie przywrócenie czegoś dawnego. Miejscowość wyrosła przy kolei warszawsko-petersburskiej, budowanej w latach 1851–1862; pierwszy pociąg przejechał tędy w 1860 roku, a przydrożna kapliczka upamiętnia otwarcie linii dwa lata później. Od 26 marca 1948 roku działa tu Podlaski Ośrodek Doradztwa Rolniczego, a organizowana przy nim Regionalna Wystawa Zwierząt Hodowlanych ściąga kilkadziesiąt tysięcy odwiedzających: trzydziesta edycja odbyła się 29 i 30 czerwca 2024 roku ze stu siedemnastoma zwierzętami od trzydziestu dziewięciu wystawców, w tym rasami zachowawczymi, trzydziesta pierwsza 28 i 29 czerwca 2025 roku — z tłoczeniem oleju rzepakowego, degustacją polskich olejów i finałem „Bitwy Regionów” kół gospodyń wiejskich — a kolejną zaplanowano na 19–21 czerwca 2026. Z 1927 roku pochodzi tutejszy park dworski.",
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

  districtsHeading: "Do których części gminy Szepietowo dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich wsi gminy. Dojazd jest wszędzie bezpłatny.",
    "Przy umawianiu wystarczy podać miejscowość i ulicę albo numer domu.",
  ],
  districts: [],

  nearbyHeading: "Poza Szepietowo też przyjadę",
  nearbyParagraphs: [
    "Wysokie Mazowieckie, Czyżew, Ciechanowiec, Zambrów i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Wysokie Mazowieckie", "Czyżew", "Ciechanowiec", "Zambrów"],

  about: blokOMnie("do Szepietowa", "w Szepietowie i całej gminie", REGION_PODLASIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Szepietowa bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich wsi gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku, bo nazwy bywają mylone: Szepietowo w powiecie wysokomazowieckim to nie Szepietówka na Ukrainie.",
    },
    ...faqWspolne("w Szepietowie"),
    {
      question: "Który olej do smażenia, a który do smaku?",
      answer:
        "Do smażenia olej rafinowany — jest celowo pozbawiony smaku i znosi wyższą temperaturę. Do smaku olej tłoczony na zimno, dodawany na końcu, już do gotowego dania. Najczęstszy błąd to wylanie drogiego, pachnącego oleju na rozgrzaną patelnię, gdzie cały jego zapach znika.",
    },
    {
      question: "Jak poznać, że olej jest zepsuty?",
      answer:
        "Po zapachu — zjełczały olej ma charakterystyczną, drapiącą nutę. Warto powąchać przed każdym wlaniem, zwłaszcza oleje tłoczone na zimno, które kupuje się rzadko i trzyma długo. Światło i ciepło im szkodzą, więc butelka na parapecie obok kuchenki starzeje się szybciej niż ta w szafce.",
    },
    {
      question: "Czy w Thermomixie da się smażyć na oleju?",
      answer:
        "Nie w takim sensie jak na patelni i to nie jest frytkownica. Urządzenie robi natomiast dwie inne rzeczy: emulguje, więc majonez, dressing i sosy na bazie oleju wychodzą przewidywalnie, oraz pozwala oleju pracować w niskiej, pilnowanej temperaturze — czyli dusić zamiast smażyć.",
    },
  ],

  geo: { lat: 52.8722, lng: 22.5528 },
};
