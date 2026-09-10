import type { CityContent } from "../city-content";
import {
  REGION_PODKARPACIE,
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
 * RADYMNO (MIASTO) — powiat jarosławski, 4 873 mieszkańców
 * (31.12.2024, GUS). Prawa miejskie 19 MARCA 1431 r. od Władysława
 * Jagiełły, na prawie magdeburskim, wraz ze zgodą na cotygodniowy
 * targ wtorkowy — 595. rocznicę obchodzono w marcu 2026 r.
 *
 * UWAGA — DWA RADYMNA. Osobno istnieje MIASTO Radymno (gmina
 * miejska, 4 873 mieszkańców) i osobno GMINA WIEJSKA Radymno
 * (10 868 mieszkańców), której urząd mieści się fizycznie w mieście.
 * Gmina wiejska jest ponad dwa razy ludniejsza. Przy każdej liczbie
 * trzeba sprawdzać, o którą jednostkę chodzi — w tekście zawsze
 * piszę „miasto Radymno".
 *
 * KĄT: makaron. Jedyne miejsce w serwisie, gdzie ten produkt jest
 * tematem. Miasto, którego akt lokacyjny z 1431 r. ustanawia
 * cotygodniowy targ, jest właściwym miejscem na rzecz najzwyklejszą
 * z codziennych.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że urządzenie ugotuje makaron, ale POJEMNOŚĆ JEST OGRANICZONA
 *   i przy rodzinie garnek bywa sensowniejszy,
 * — że prawdziwa różnica jest w SOSIE, nie w makaronie,
 * — że ciasto na makaron domowy owszem, ale WAŁKOWANIE I CIĘCIE
 *   zostają ręczne (albo wymagają osobnej maszynki),
 * — i uczciwie: makaron to jest dokładnie ten obszar, w którym
 *   „urządzenie zrobi wszystko" jest nieprawdą.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH (mąka, gluten, „lekkość").
 * — ŻADNYCH PORAD O PRZECHOWYWANIU domowego makaronu (suszenie,
 *   wilgotność) — to dziedzina bezpieczeństwa żywności.
 * — ŻADNEJ KRYTYKI makaronu ze sklepu ani producentów.
 * — ŻADNEGO SUGEROWANIA, że domowy makaron jest „lepszy". Jest inny.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Mąka i mielenie" (miasto
 * z młynem) dotyczy ZIARNA. „Chleb" (miasto spichrzów) — wypieku.
 * „Mak" — nadzienia. „Sosy, które się warzą" (Sędziszów Małopolski)
 * dotyczy EMULSJI i temperatury; sos do makaronu to inna rodzina
 * i tu wchodzi tylko jako kontrast. „Ziemniaki" (Nowa Sarzyna) to
 * inny surowiec podstawowy.
 *
 * ŚWIADOME POMINIĘCIE — ODNOTOWANE, NIEUŻYTE:
 * — BITWA POD RADYMNEM, 23–25 maja 1915 r. (3. Armia rosyjska
 *   przeciw 11. Armii niemieckiej gen. von Mackensena, duże
 *   zniszczenia miasta). Fakt sprawdzony. NIE UŻYWAM GO na stronie
 *   o sprzęcie AGD.
 *
 * CZEGO NIE TWIERDZĘ, MIMO ŻE BYŁO KUSZĄCE:
 * — NIE PISZĘ, że Radymno żyje z bliskości granicy z Ukrainą ani
 *   z przejścia w Korczowej. ŻADNE ŹRÓDŁO tego nie potwierdza —
 *   nie ma śladu klastra spedycyjnego ani danych. To była hipoteza
 *   i została obalona przez brak dowodów,
 * — NIE OCENIAM WPŁYWU AUTOSTRADY A4 na miasto. Odcinki
 *   „Jarosław–Radymno" i „Radymno–Korczowa" istnieją, ale żadne
 *   źródło nie mówi, czy autostrada miastu pomogła, czy zaszkodziła.
 *   Nie mam prawa tego rozstrzygać,
 * — NIE PISZĘ „jezioro" bez wyjaśnienia. Zbiornik ZEK to WYROBISKO
 *   PO WYDOBYCIU KRUSZYWA z 1968 r. (ok. 70 ha), a nie naturalny
 *   akwen. W tekście jest to powiedziane wprost,
 * — NIE WSKAZUJĘ NAJWIĘKSZEGO PRACODAWCY. Nie ustalono. Firma
 *   produkująca prefabrykaty betonowe działa tu od 1957 r., ale
 *   nie znam liczby zatrudnionych i nie wymieniam jej z nazwy,
 * — NIE PISZĘ, że miasto straciło prawa miejskie. Źródła mówią
 *   o zniszczeniach i „wzlotach i upadkach", ale formalnej
 *   degradacji nie potwierdzono,
 * — NIE PODAJĘ żadnego produktu z Listy Produktów Tradycyjnych.
 *   Dla miasta i gminy Radymno nie znaleziono wpisu,
 * — NIE wymyślam osiedli. Brak wykazu. districts to PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — prawa miejskie 19 marca 1431 r., Władysław Jagiełło, prawo
 *   magdeburskie, wraz z targiem wtorkowym; 595. rocznica
 *   obchodzona w marcu 2026 r.,
 * — osada istniała od 1366 r.,
 * — powroźnicy z Radymna dostarczali liny dla floty królewskiej
 *   (XVI w.),
 * — zbiornik ZEK to wyrobisko po żwirowni z 1968 r., ok. 70 ha;
 *   plaża miejska ok. 6,2 ha; sezon kąpielowy 2026: 27 czerwca –
 *   31 sierpnia,
 * — 4 873 mieszkańców miasta (31.12.2024).
 */
export const RADYMNO: CityContent = {
  slug: "radymno",
  h1: "Thermomix Radymno – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Radymno — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Radymnie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i okolica. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Radymno — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Radymnie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Radymna z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do okolicznych miejscowości.",

  highlights: highlightyStandardowe("Radymno i okolice"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-5.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Najzwyklejsza kolacja w Polsce. I tu akurat nie zrobię wszystkiego.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Radymnie – jak wygląda prezentacja?",
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
      id: "makaron",
      heading: "Miasto z targiem wpisanym w akt lokacyjny — czyli o makaronie",
      paragraphs: [
        "Radymno dostało prawa miejskie dziewiętnastego marca 1431 roku, od Władysława Jagiełły, a przywilej zawierał zgodę na cotygodniowy targ wtorkowy. Sześćset lat później miasto obchodziło pięćset dziewięćdziesiątą piątą rocznicę tego dokumentu. To jest miejsce, którego historia od początku kręci się wokół rzeczy codziennych — więc napiszę o najbardziej codziennym daniu, jakie w polskich domach istnieje.",
        "Makaron. I od razu ostrzegam: to jest jeden z tych tematów, przy których hasło „urządzenie zrobi wszystko” najszybciej się rozsypuje.",
        "Ugotuje makaron — owszem. Ale pojemność jest ograniczona i to nie jest szczegół. Przy porcji na jedną czy dwie osoby jest w porządku; przy rodzinie na pięć osób zwykły duży garnek zrobi to szybciej i w jednym podejściu. Wolę powiedzieć to wprost, niż zostawić Was z odkryciem po miesiącu.",
        "Prawdziwa różnica jest gdzie indziej — w sosie. Bolognese, sos pomidorowy, sos serowy, wszystko, co trzeba dusić i mieszać, żeby nie przywarło: to jest miejsce, gdzie urządzenie naprawdę pracuje za Was. Gotuje z ustawioną temperaturą i miesza samo, więc sos, który normalnie wymaga stania nad garnkiem, przestaje wymagać obecności. Jeśli miałabym wskazać jeden powód, dla którego makaronowe kolacje robią się w tym łatwiejsze, to właśnie ten — a nie samo gotowanie makaronu.",
        "Makaron domowy to trzecia sprawa i tu też mówię, jak jest. Ciasto urządzenie wyrobi i to jest realna oszczędność wysiłku, bo wyrabianie makaronowego ciasta jest ciężkie. Ale wałkowanie i krojenie zostają. Albo robicie to ręcznie, albo potrzebujecie osobnej maszynki — trzeciej drogi nie ma i żaden pokaz nie powinien sugerować inaczej.",
        "Nie napiszę też, że domowy makaron jest lepszy od kupnego. Jest inny. Ludzie, którzy go robią, robią go dlatego, że lubią, a nie dlatego, że sklepowy jest zły — i nie moja rzecz oceniać cudze zakupy.",
        "Czego nie doradzę: niczego o suszeniu i przechowywaniu domowego makaronu. To jest dziedzina bezpieczeństwa żywności, nie moja.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Radymnie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedzcie przy umawianiu, ile osób siada u Was do stołu. Przy makaronie i podobnych daniach wielkość porcji ma znaczenie i wolę to wiedzieć przed przyjazdem, a nie na miejscu.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Radymnie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla radymniańskiej rodziny",
      paragraphs: [
        "Miasto Radymno liczy niecałe cztery tysiące dziewięćset mieszkańców — warto dodać „miasto”, bo obok istnieje osobna gmina wiejska o tej samej nazwie, ponad dwa razy ludniejsza, której urząd mieści się zresztą w mieście. Osada istniała tu od 1366 roku, a w szesnastym wieku miejscowi powroźnicy dostarczali liny dla floty królewskiej. Zbiornik ZEK, nad którym latem działa plaża, nie jest naturalnym jeziorem — to wyrobisko po wydobyciu kruszywa z 1968 roku, około siedemdziesięciu hektarów.",
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

  districtsHeading: "Do których części Radymna dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do okolicznych miejscowości, bez dopłaty za dojazd — także do wsi należących do sąsiedniej gminy wiejskiej Radymno.",
    "Miasto nie publikuje wykazu osiedli, więc nie będę wymyślać nazw; przy umawianiu wystarczy podać ulicę albo miejscowość.",
  ],
  districts: [],

  nearbyHeading: "Poza Radymno też przyjadę",
  nearbyParagraphs: [
    "Jarosław, Przemyśl, Sieniawa, Pruchnik i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Jarosław", "Przemyśl", "Sieniawa", "Pruchnik", "Przeworsk", "Lubaczów"],

  about: blokOMnie("do Radymna", "w Radymnie i okolicy", REGION_PODKARPACIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Radymna bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do okolicznych miejscowości, również tych z sąsiedniej gminy wiejskiej. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Radymnie"),
    {
      question: "Ugotuję w tym makaron dla całej rodziny?",
      answer:
        "Dla jednej czy dwóch osób — bez problemu. Przy pięciu osobach zwykły duży garnek zrobi to szybciej i w jednym podejściu, bo pojemność urządzenia jest ograniczona. Prawdziwa różnica przy makaronowej kolacji jest zresztą w sosie, nie w makaronie: sos gotuje się z ustawioną temperaturą i sam się miesza, więc nie trzeba nad nim stać.",
    },
    {
      question: "Zrobię makaron domowy?",
      answer:
        "Ciasto tak i to jest realna pomoc, bo wyrabianie makaronowego ciasta jest ciężkie. Ale wałkowanie i krojenie zostają ręczne albo wymagają osobnej maszynki — urządzenie tego nie zrobi. I nie powiem, że domowy jest lepszy od kupnego. Jest inny.",
    },
  ],

  geo: { lat: 49.9497, lng: 22.8039 },
};
