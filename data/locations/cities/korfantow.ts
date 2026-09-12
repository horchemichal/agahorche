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
 * KORFANTÓW — miasto w powiecie nyskim, 1 688 mieszkańców
 * (31.12.2024, GUS); cała gmina 8 348. NAJMNIEJSZE MIASTO
 * TEJ FALI. Prawa miejskie nadano w drugiej połowie XIV w.,
 * utracono po aneksji pruskiej w 1742 r., odzyskano w 1867 r.,
 * utracono ponownie po II wojnie i ODZYSKANO PO RAZ TRZECI
 * 13 SIERPNIA 1993 r. Nazwa pochodzi od Wojciecha Korfantego
 * i została nadana po 1945 r. — sama gmina pisze o niej, że
 * „nie miała uzasadnienia historycznego". Największym
 * pracodawcą jest wojewódzkie centrum rehabilitacji narządu
 * ruchu, mieszczące się w dawnym zespole pałacowym.
 *
 * KĄT: gotowanie, kiedy nie można długo stać. Miasto, którego
 * największym pracodawcą jest ośrodek rehabilitacji ortopedycznej,
 * jest jedynym właściwym miejscem na stronę o kuchni bez stania
 * przy garnku — i o granicy, za którą nie doradzam niczego.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że w gotowaniu problemem bywa nie umiejętność, tylko
 *   TRZYDZIEŚCI MINUT NA NOGACH przy jednym garnku,
 * — że to urządzenie akurat tego nie wymaga: nastawia się je
 *   i siada,
 * — co realnie da się zrobić na siedząco, a czego nie,
 * — i że NIE doradzam niczego z zakresu zdrowia, diety,
 *   rehabilitacji ani sprzętu wspomagającego. To jest granica
 *   i stoi w tekście wprost.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH PORAD MEDYCZNYCH, DIETETYCZNYCH ANI
 *   REHABILITACYJNYCH. Zero sugestii, co komu wolno robić
 *   po operacji albo przy jakimkolwiek ograniczeniu sprawności.
 *   To jest sprawa lekarza i fizjoterapeuty. Odmowa jest
 *   najważniejszym zdaniem tej strony.
 * — ŻADNEGO OPISYWANIA KONKRETNYCH SCHORZEŃ ani zakładania,
 *   z jakiego powodu ktoś nie może stać. Piszę o sytuacji,
 *   nie o diagnozie.
 * — ŻADNEGO LITOWANIA SIĘ ANI PODNIOSŁEGO TONU. Rzeczowo,
 *   po ludzku, bez „mimo wszystko" i bez inspirujących historii.
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNEGO WYKORZYSTYWANIA PACJENTÓW OŚRODKA jako argumentu.
 *   Ośrodek jest wspomniany jako największy pracodawca miasta,
 *   a nie jako grupa docelowa.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Waga urządzenia i kto je
 * podniesie" (inne miasto) dotyczy przenoszenia sprzętu.
 * „Gotowanie dla jednej osoby" dotyczy wielkości porcji.
 * „Mieszanie" dotyczy samej czynności. Tutaj chodzi o CZAS
 * SPĘDZANY NA NOGACH i o to, że kuchnia bywa barierą fizyczną,
 * a nie kulinarną.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ NAZWY ośrodka ani liczby pracowników i łóżek.
 *   Nie są ujawnione.
 * — NIE MYLĘ ośrodka rehabilitacji z dawnym szpitalem
 *   św. Elżbiety z 1892 r., który zamknięto w 1976 r.,
 *   a w jego budynkach działa dziś dom pomocy społecznej.
 * — NIE PODAJĘ dokładnego roku pierwszego nadania praw miejskich
 *   („druga połowa XIV w.") ani nie rozstrzygam, czy nazwę
 *   zmieniono w 1945 czy 1946 r.
 * — NIE PISZĘ, że Korfantów ma dwujęzyczne tablice. NIE MA.
 *   Nazwa Friedland jest historyczna, nie urzędowa.
 * — NIE PODAJĘ produktu z Listy Produktów Tradycyjnych. Brak.
 * — NIE wymyślam osiedli. Brak wykazu. districts to PUSTA TABLICA.
 *
 * ŚWIADOMIE POMINIĘTE. W latach 1942–1943 działał tu niemiecki
 * obóz dla wysiedlonych Polaków, a na cmentarzu parafialnym jest
 * zbiorowa mogiła ofiar. To prawda o tym mieście, ale nie materiał
 * na tło oferty handlowej.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — prawa miejskie w drugiej połowie XIV w., utrata po 1742 r.,
 *   odzyskanie 1867 r., ponowna utrata po II wojnie, trzecie
 *   nadanie 13 sierpnia 1993 r.,
 * — najwcześniejsza nazwa Hurthland (XIV w.); w 1347 r. książę
 *   Bolko Niemodliński nazwał osadę Fredeland — „spokojny kraj";
 *   niemiecka forma Friedland utrzymała się do 1945 r.;
 *   dzisiejsza nazwa upamiętnia Wojciecha Korfantego, choć sama
 *   gmina pisze, że nie miała ona uzasadnienia historycznego,
 * — gmina należy do sieci „Miast Friedlandzkich",
 * — działa tu wojewódzkie centrum rehabilitacji narządu ruchu,
 *   mieszczące się w zabytkowych budynkach pałacowych; nowy
 *   pawilon oddano na przełomie 2023 i 2024 r. za ponad 30 mln zł,
 * — zabytki: zespół pałacowy z XVII w., neogotycka remiza
 *   strażacka z 1910 r., kościół Trójcy Świętej wzmiankowany
 *   w 1335 r.; w gminie trzy krzyże pokutne,
 * — 1 688 mieszkańców miasta, 8 348 gminy (31.12.2024).
 */
export const KORFANTOW: CityContent = {
  slug: "korfantow",
  h1: "Thermomix Korfantów – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Korfantów — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Korfantowie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Korfantów — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Korfantowie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Korfantowa z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do sołectw gminy.",

  highlights: highlightyStandardowe("Korfantów i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Czasem barierą nie jest przepis, tylko trzydzieści minut na nogach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Korfantowie – jak wygląda prezentacja?",
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
      id: "bez-stania",
      heading: "Miasto, w którym największym pracodawcą jest ośrodek rehabilitacji",
      paragraphs: [
        "W Korfantowie, mieście liczącym niecałe tysiąc siedemset osób, największym pracodawcą jest wojewódzkie centrum rehabilitacji narządu ruchu, mieszczące się w dawnym zespole pałacowym. To jest miejsce, w którym pojęcie „nie mogę długo stać” nie wymaga tłumaczenia nikomu.",
        "Więc napiszę o czymś, o czym w folderach sprzętu kuchennego nie ma ani słowa: o tym, że kuchnia bywa barierą fizyczną, a nie kulinarną.",
        "Zwykły obiad z jednego garnka to około trzydziestu minut na nogach. Nie ciężkiej pracy — po prostu stania, przy krojeniu, mieszaniu, doglądaniu, żeby nie wykipiało. Dla większości ludzi to nic. Dla części to jest właśnie ta rzecz, przez którą obiad zamienia się w kanapkę albo w coś odgrzanego, i to nie dlatego, że ktoś nie umie gotować.",
        "To urządzenie z zasady nie wymaga obecności. Nastawia się je i odchodzi — a odejść znaczy też: usiąść. Nie trzeba mieszać, nie trzeba pilnować, nie trzeba wracać do garnka co pięć minut, bo nic nie przywrze i nic nie wykipi. Praca dzieje się bez Was i to jest cała rzecz.",
        "Co z tego wynika praktycznie. Zupa, sos, gulasz, risotto, kasza, przecier, danie jednogarnkowe — wszystko to powstaje w cyklu, który zaczyna się i kończy przy urządzeniu, a między jednym a drugim można siedzieć. Warzywa da się posiekać na siedząco przy stole, wsypać i zamknąć. Wszystko dzieje się w jednym naczyniu, więc nie ma chodzenia między zlewem, kuchenką a blatem — a to często męczy bardziej niż samo stanie.",
        "Uczciwie o tym, czego to nie rozwiązuje. Urządzenie waży swoje i przestawianie go nie jest wygodne — dlatego powinno stać na stałe tam, gdzie się go używa. Naczynie z gorącą zupą też trzeba przenieść. Zmywanie zostaje. I dojście do kuchni zostaje.",
        "A teraz zdanie, przy którym nie ustąpię, i jest ono najważniejsze na tej stronie: nie doradzę Wam niczego z zakresu zdrowia. Ani co jeść, ani czego unikać, ani co wolno robić po zabiegu, ani jak urządzić kuchnię przy ograniczonej sprawności. Nie jestem lekarzem, dietetykiem ani fizjoterapeutą i nie zamierzam nimi udawać — akurat w tym mieście byłoby to szczególnie nie na miejscu. Mówię wyłącznie o jednym: ile czasu trzeba spędzić na nogach przy tym konkretnym garnku. Resztę zostawiam ludziom, którzy się na tym znają.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/tm7", label: "Co potrafi TM7" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Korfantowie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli wygodniej Wam, żeby prezentacja odbyła się przy stole, a nie przy blacie — powiedzcie to przy umawianiu. Przywiozę urządzenie i ustawimy je tam, gdzie Wam pasuje.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Korfantowie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla korfantowskiej rodziny",
      paragraphs: [
        "Korfantów liczy niecałe tysiąc siedemset mieszkańców, a cała gmina ponad osiem tysięcy. Historia praw miejskich jest tu wyjątkowa nawet jak na Śląsk Opolski: miasto dostało je w drugiej połowie XIV wieku, straciło po przejęciu przez Prusy w 1742, odzyskało w 1867, straciło ponownie po drugiej wojnie i odzyskało po raz trzeci 13 sierpnia 1993 roku. Nazwa też ma swoją historię — najstarsza brzmiała Hurthland, a w 1347 roku książę Bolko Niemodliński nazwał osadę Fredeland, czyli „spokojny kraj”; niemiecka forma Friedland utrzymała się do 1945 roku. Dzisiejsza nazwa upamiętnia Wojciecha Korfantego, choć sama gmina uczciwie pisze na swojej stronie, że zmiana nie miała uzasadnienia historycznego. Do dziś Korfantów należy do sieci „Miast Friedlandzkich”. Ze starszej zabudowy zachowały się zespół pałacowy z XVII wieku, kościół Trójcy Świętej wzmiankowany w 1335 roku i neogotycka remiza strażacka z 1910.",
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

  districtsHeading: "Do których części Korfantowa dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do sołectw gminy — bez dopłaty za dojazd. Gmina jest rozległa, ale to niczego nie zmienia w rozliczeniu.",
    "Miasto nie publikuje wykazu osiedli, więc nie będę wymyślać nazw; przy umawianiu wystarczy podać ulicę albo miejscowość.",
  ],
  districts: [],

  nearbyHeading: "Poza Korfantów też przyjadę",
  nearbyParagraphs: [
    "Nysa, Prudnik, Biała, Niemodlin, Tułowice i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Nysa", "Prudnik", "Biała", "Niemodlin", "Tułowice", "Opole"],

  about: blokOMnie("do Korfantowa", "w Korfantowie i okolicy", REGION_OPOLSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Korfantowa bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do sołectw gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Korfantowie"),
    {
      question: "Czy da się w tym gotować bez długiego stania?",
      answer:
        "Na tym polega cała różnica: urządzenie nie wymaga obecności. Nastawia się je i odchodzi — a odejść znaczy też usiąść. Nie trzeba mieszać ani pilnować, bo nic nie przywrze i nie wykipi. Warzywa można posiekać przy stole, wsypać i zamknąć.",
    },
    {
      question: "Czego to nie rozwiązuje?",
      answer:
        "Urządzenie waży swoje, więc powinno stać na stałe tam, gdzie się go używa — przestawianie nie jest wygodne. Naczynie z gorącą zupą i tak trzeba przenieść, zmywanie zostaje, dojście do kuchni zostaje. Nie będę obiecywać więcej, niż to potrafi.",
    },
    {
      question: "Doradzisz, co jeść przy problemach ze zdrowiem?",
      answer:
        "Nie i przy tym nie ustąpię. Nie jestem lekarzem, dietetykiem ani fizjoterapeutą. Mówię wyłącznie o jednym: ile czasu trzeba spędzić na nogach przy tym konkretnym garnku. Wszystko inne należy do ludzi, którzy się na tym znają.",
    },
  ],

  geo: { lat: 50.5, lng: 17.6 },
};
