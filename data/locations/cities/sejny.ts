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
 * SEJNY — gmina MIEJSKA, siedziba powiatu sejneńskiego.
 * MIASTO 4 845 (GUS 31.12.2024), powierzchnia 4,5 km².
 * ⚠ Notatka projektowa podawała 5 000 — ZAWYŻONE.
 * ⚠⚠ GMINA WIEJSKA SEJNY TO ODRĘBNA JEDNOSTKA:
 * 3 793 mieszkańców, 217,4 km², 47 wsi, siedziba w mieście,
 * ale MIASTA NIE OBEJMUJE. NIE SUMOWAĆ.
 * ⚠ LICZBY SOŁECTW NIE PODAJĘ.
 *
 * POCZĄTKI: 1522 r. — Zygmunt I Stary nakazuje wymierzenie
 * terenu nad rzeką Sejną dla Iwana Wiśniowieckiego.
 * 1593 r. — JERZY GRODZIŃSKI zakłada miasto.
 * 1602 r. — Grodziński przekazuje dobra dominikanom z Wilna.
 * ⚠⚠ ROKU ANI TYPU PRAWA MIEJSKIEGO NIE PODAJĘ.
 * Opracowanie uniwersyteckie mówi wyłącznie o przedziale
 * 1593–1602 i NIE potwierdza roku 1602 jako daty lokacji.
 * PISZĘ: „miasto założone na przełomie XVI i XVII wieku".
 * 1670 r. — król Michał Korybut Wiśniowiecki PRZYWRACA TARGI
 * TYGODNIOWE i zwalnia kupców z opłat.
 * 1828 r. — drugi targ tygodniowy; trzy jarmarki w Królestwie
 * Polskim: 4 MARCA, 8 MAJA, 6 GRUDNIA.
 * ⚠ NIE PODAJĘ, czy Sejny traciły prawa miejskie.
 *
 * PRZYNALEŻNOŚĆ: SUWALSZCZYZNA, POJEZIERZE SEJNEŃSKIE.
 * RZEKA MARYCHA — 80,8 km całkowitej długości, 17,6 km poza
 * Polską; zlewnia w Polsce 409,8 km².
 * ⚠ Najstarsze dokumenty mówią o „rzece Sejnie" —
 * NIE MIESZAM tych nazw, piszę tylko o Marysze.
 *
 * ⚠⚠ UKŁAD URBANISTYCZNY — CECHA NIETYPOWA:
 * miasto rozwinęło się RÓWNOLEGLE DO RZEKI, a centrum to nie
 * jeden rynek, lecz SYSTEM CZTERECH POWIĄZANYCH PLACÓW.
 * Rynek główny 90 × 120 m.
 *
 * ZABYTKI:
 * BAZYLIKA NAWIEDZENIA NMP — budowa 1610–1619; gruntowna
 * przebudowa 1760, wtedy prezbiterium odwrócono do miasta
 * i dodano dwie wieże. ⚠ NIE PODAJĘ „XVI w." ze strony
 * miasta — to najpewniej błąd.
 * KLASZTOR PODOMINIKAŃSKI — daty na hełmach 1777 i 1779.
 * RATUSZ — ok. 1770, przebudowany klasycystycznie w XIX w.
 * KRAMNICE MUROWANE — 1828–1833 (wcześniej drewniane
 * sukiennice, 1787).
 * KAPLICA 1789; figura św. Agaty 1828.
 * BIAŁA SYNAGOGA i dawny dom talmudyczny — poł. XIX w.
 * ⚠ WYŁĄCZNIE JAKO BUDYNKI, dziś użytkowane przez ośrodek
 * kultury.
 * INWENTARZ DWORU Z 1593 r. WYMIENIA BROWAR I MŁYN NA RZECE
 * Z JEDNYM KOŁEM.
 * SEJNY NIE NALEŻĄ DO CITTASLOW.
 *
 * ⚠⚠ KUCHNIA SEJNEŃSZCZYZNY — PODSTAWA KĄTA.
 * SOCZEWIAKI i KAKORY: TA SAMA MASA (z tartych ziemniaków)
 * i TO SAMO NADZIENIE (zmielona soczewica ze skwarkami),
 * ale SOCZEWIAKI SĄ SMAŻONE, A KAKORY PIECZONE W PIECU
 * CHLEBOWYM. RÓŻNI JE WYŁĄCZNIE TECHNIKA OBRÓBKI.
 * KARTACZE SEJNEŃSKIE — owalne kluski 10–12 cm z ziemniaków
 * surowych i gotowanych, nadziewane mielonym mięsem.
 * SĘKACZ SEJNEŃSKI (BANKUCHEN) — pieczony przez polewanie
 * ciasta na obracający się wałek nad ogniem.
 * ⚠ PROPORCJI SĘKACZA NIE PODAJĘ (są w źródle, ale zasada
 * projektu zabrania podawania proporcji).
 * CHLEB WIEJSKI NA KALMUSIE — żytni razowy pieczony
 * NA LIŚCIACH TATARAKU UŁOŻONYCH POD SPODEM.
 * Dalej w kuchni regionu: kiszka i babka ziemniaczana, bliny,
 * czenaki (pieczone warstwowo w glinianych garnuszkach),
 * kindziuk, kołduny, chłodnik, mrowisko i komin (chrusty
 * maczane w miodzie), ryby jeziorne, sery domowe, miody.
 *
 * ⚠ LISTA PRODUKTÓW TRADYCYJNYCH — wpisy z powiatu należą
 * do GMINY PUŃSK, NIE DO SEJN: „Chleb domowy na kalmusie
 * z Puńska" (3.06.2018) i „Kuciukai" (marzec 2023).
 * NIE PRZYPISUJĘ ICH SEJNOM. Kuchnię regionu opisuję
 * jako kuchnię SEJNEŃSZCZYZNY, nie jako produkt miasta.
 *
 * KĄT: SMAŻYĆ CZY PIEC — ta sama masa, dwa różne dania.
 * Kąt od soczewiaków i kakorów: potraw, które różni wyłącznie
 * to, czy trafiły na patelnię, czy do pieca.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że w kuchni tradycyjnej nazwa potrawy bywa nazwą METODY,
 *   nie składu, i soczewiaki kontra kakory są tego dowodem,
 * — że smażenie i pieczenie to dwie różne rzeczy fizycznie:
 *   smażenie to kontakt z gorącym tłuszczem, pieczenie
 *   to gorące powietrze wokół,
 * — SMAŻENIE: szybkie, skórka z jednej strony naraz, wymaga
 *   obecności, wchłania tłuszcz, daje chrupkość,
 * — PIECZENIE: wolne, równe ze wszystkich stron, nie wymaga
 *   obecności, wysusza,
 * — że dlatego to samo ciasto usmażone jest cięższe,
 *   a upieczone bardziej suche — i żadna wersja nie jest
 *   „lepsza", tylko inna,
 * — że zamiana jednego na drugie prawie nigdy nie jest
 *   zamianą jeden do jednego,
 * — UCZCIWIE I WPROST: to urządzenie NIE SMAŻY i NIE PIECZE.
 *   Nie ma patelni ani piekarnika. To jest jego największe
 *   ograniczenie i nie ma sensu go ukrywać,
 * — co robi zamiast: gotuje, dusi, gotuje na parze — czyli
 *   trzecią rodzinę technik, opartą na wodzie,
 * — i że kto smaży codziennie, skorzysta z niego mniej niż
 *   ktoś, kto gotuje i dusi.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PROPORCJI — także żadnych proporcji sękacza.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH — NIC o tym, że pieczenie
 *   jest „zdrowsze" od smażenia. To jest twarda granica.
 * — ŻADNYCH NAZW FIRM.
 *
 * ⚠⚠ ETYKA — SEJNY SĄ JEDNYM Z NAJTRUDNIEJSZYCH MIAST
 * W CAŁYM PROJEKCIE:
 * — ZERO Zagłady, gett, pogromów, cmentarzy żydowskich.
 *   BIAŁĄ SYNAGOGĘ wymieniam WYŁĄCZNIE jako budynek
 *   z połowy XIX w., dziś siedzibę ośrodka kultury.
 * — ZERO lat 1941/1943/1945, wysiedleń, pacyfikacji.
 * — ⚠⚠ ZERO wątku mniejszości litewskiej i stosunków
 *   polsko-litewskich. ZERO sporów o kościół, szkołę i język.
 *   TWARDA GRANICA. Kuchnię regionu opisuję jako wspólną
 *   kuchnię Sejneńszczyzny, bez przypisywania jej narodowości.
 *   Nazwy „chłodnik litewski" i „bliny po litewsku" to nazwy
 *   POTRAW i tak ich używam — nie jako etykiet etnicznych.
 * — ZERO granicy z Litwą i Białorusią, przejść, wojska.
 * — ZERO konfliktów wyznaniowych i kasat.
 * — ZERO podziemia i akcji zbrojnych.
 * — ZERO biedy i wyludniania.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Wolno czy szybko"
 * (Lidzbark) dotyczy tempa gotowania w wodzie. „Danie, które
 * może poczekać" (Kamieńsk) dotyczy odgrzewania. „Odpoczynek
 * po upieczeniu" (Młynary) dotyczy etapu po piecu. „Naczynia
 * do pieczenia" (Czarna Białostocka) dotyczą materiału formy.
 * Tutaj chodzi o WYBÓR MIĘDZY DWIEMA TECHNIKAMI dla tej samej
 * masy.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ roku ani typu praw miejskich.
 * — NIE PODAJĘ, czy Sejny traciły prawa miejskie.
 * — NIE DATUJĘ bazyliki na XVI w.
 * — NIE PODAJĘ liczby sołectw gminy wiejskiej.
 * — NIE PODAJĘ roku założenia ośrodka „Pogranicze".
 * — NIE PRZYPISUJĘ SEJNOM produktów z Listy Produktów
 *   Tradycyjnych — wpisy powiatu należą do gminy Puńsk.
 * — NIE MYLĘ gminy miejskiej Sejny z gminą wiejską Sejny
 *   ani miasta z całą Sejneńszczyzną. FAQ to rozróżnia.
 * — districts: brak potwierdzonych osiedli. PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — miasto 4 845 mieszkańców na 4,5 km²,
 * — początki od 1522 r., gdy Zygmunt I Stary nakazał
 *   wymierzenie terenu; miasto założył Jerzy Grodziński
 *   w 1593 r., a w 1602 przekazał dobra dominikanom z Wilna,
 * — w 1670 r. Michał Korybut Wiśniowiecki przywrócił targi
 *   tygodniowe; w XIX w. doszedł drugi targ i trzy jarmarki:
 *   4 marca, 8 maja i 6 grudnia,
 * — inwentarz dworu z 1593 r. wymienia browar i młyn na rzece
 *   z jednym kołem,
 * — centrum miasta to nie jeden rynek, lecz system czterech
 *   powiązanych placów, a rynek główny ma 90 na 120 metrów;
 *   miasto rozwinęło się równolegle do rzeki,
 * — bazylika Nawiedzenia NMP budowana w latach 1610–1619,
 *   gruntownie przebudowana w 1760 r., gdy odwrócono
 *   prezbiterium ku miastu i dodano dwie wieże,
 * — klasztor podominikański z datami 1777 i 1779 na hełmach,
 *   ratusz z około 1770 r., murowane kramnice z lat 1828–1833,
 * — kuchnia Sejneńszczyzny: soczewiaki i kakory z tej samej
 *   masy i tego samego nadzienia, różniące się wyłącznie tym,
 *   że jedne się smaży, a drugie piecze w piecu chlebowym;
 *   kartacze o długości 10–12 cm; sękacz pieczony przez
 *   polewanie ciasta na obracający się nad ogniem wałek;
 *   chleb żytni pieczony na liściach tataraku,
 * — rzeka Marycha ma 80,8 km długości, z czego 17,6 km poza
 *   Polską.
 */
export const SEJNY: CityContent = {
  slug: "sejny",
  h1: "Thermomix Sejny – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Sejny — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Sejnach: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i okolica. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Sejny — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Sejnach. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Sejn z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do okolicznych wsi.",

  highlights: highlightyStandardowe("Sejny i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Ta sama masa, to samo nadzienie. Jedno się smaży, drugie piecze — i to są dwa dania.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Sejnach – jak wygląda prezentacja?",
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
      id: "smazyc-czy-piec",
      heading: "Soczewiaki i kakory — czyli dwie potrawy, które różni tylko sposób obróbki",
      paragraphs: [
        "W kuchni Sejneńszczyzny są dwie potrawy, które od lat uważam za najlepszą lekcję gotowania, jaką da się zmieścić w dwóch nazwach. Soczewiaki i kakory. Ta sama masa z tartych ziemniaków. To samo nadzienie ze zmielonej soczewicy ze skwarkami. Wszystko identyczne — poza jednym: soczewiaki się smaży, a kakory piecze w piecu chlebowym. I to wystarczy, żeby dostały dwie różne nazwy.",
        "To nie jest drobiazg językowy. To zapisana w nazwach wiedza, którą dzisiejsze przepisy zgubiły: sposób obróbki decyduje o daniu tak samo mocno jak składniki.",
        "Fizycznie są to dwie zupełnie różne rzeczy. Smażenie to kontakt z gorącym tłuszczem — ciepło wchodzi punktowo, od jednej strony naraz, przez bezpośredni dotyk. Pieczenie to gorące powietrze wokół — ciepło wchodzi ze wszystkich stron, wolniej i łagodniej.",
        "Z tego wynika wszystko inne. Smażenie jest szybkie, daje chrupkość i przypieczenie z tej strony, która akurat leży na dnie, wymaga obecności i przewracania — i zawsze coś z tłuszczu zostaje w daniu. Pieczenie jest wolne, równe ze wszystkich stron, nie wymaga stania obok, ale wysusza, bo wilgoć ma dokąd uciec.",
        "Dlatego ta sama masa usmażona jest cięższa, bardziej wilgotna w środku i chrupiąca na zewnątrz, a upieczona lżejsza, bardziej sucha i równa. Żadna z tych wersji nie jest lepsza. Są inne i o to właśnie chodziło ludziom, którzy nazwali je osobno.",
        "Praktyczny wniosek jest taki, że zamiana jednego na drugie prawie nigdy nie jest zamianą jeden do jednego. Kotlet upieczony zamiast usmażonego nie jest tym samym kotletem — będzie suchszy i będzie potrzebował więcej tłuszczu albo płynu w masie. Racuchy upieczone przestają być racuchami. To jest w porządku, ale trzeba wiedzieć, że robi się coś innego, a nie tę samą rzecz mniejszym kosztem.",
        "I teraz muszę powiedzieć rzecz, którą sprzedawca sprzętu powinien powiedzieć na początku, a zwykle mówi na końcu albo wcale. To urządzenie nie smaży i nie piecze. Nie ma patelni i nie ma piekarnika. Ani soczewiaków, ani kakorów nie zrobi. To jest jego największe ograniczenie i nie ma sensu go owijać w bawełnę.",
        "Co robi zamiast tego? Trzecią rodzinę technik, opartą na wodzie i parze: gotuje, dusi, gotuje na parze, podgrzewa mieszając. To jest cała jego dziedzina i w niej jest bardzo dobry. Masę na soczewiaki utrze i wymiesza w kilka minut. Nadzienie ugotuje. Ale potem bierzecie patelnię albo blachę i dalej to już Wasza robota.",
        "Dlatego, gdy ktoś pyta mnie, czy mu się przyda, pytam najpierw, co gotuje. Kto smaży codziennie — kotlety, naleśniki, placki, ryby — skorzysta wyraźnie mniej. Kto gotuje zupy, dusi, robi sosy, kasze i masy, skorzysta bardzo. To jest uczciwsza odpowiedź niż lista funkcji.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Sejnach?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedzcie przy umawianiu, ile u Was smażycie, a ile gotujecie. Od tej jednej odpowiedzi zależy większość tego, co będę miała do powiedzenia.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Sejnach"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla sejneńskiej rodziny",
      paragraphs: [
        "Miasto liczy niecałe pięć tysięcy mieszkańców na zaledwie czterech i pół kilometrach kwadratowych. Początki sięgają 1522 roku, gdy Zygmunt I Stary nakazał wymierzenie terenu nad rzeką; samo miasto założył w 1593 roku Jerzy Grodziński, a w 1602 przekazał dobra dominikanom z Wilna. W 1670 roku król Michał Korybut Wiśniowiecki przywrócił targi tygodniowe, a w dziewiętnastym wieku doszedł drugi targ i trzy jarmarki: na 4 marca, 8 maja i 6 grudnia. Sejny mają nietypowy układ: rozwinęły się równolegle do rzeki, a centrum to nie jeden rynek, lecz system czterech powiązanych placów, z rynkiem głównym o wymiarach dziewięćdziesiąt na sto dwadzieścia metrów. Bazylikę Nawiedzenia Najświętszej Maryi Panny budowano w latach 1610–1619, a w 1760 gruntownie przebudowano — wtedy odwrócono prezbiterium ku miastu i dodano dwie wieże. Klasztor podominikański nosi na hełmach daty 1777 i 1779, ratusz pochodzi z około 1770 roku, a murowane kramnice z lat 1828–1833. Miasto leży na Suwalszczyźnie, nad Marychą, która ma osiemdziesiąt kilometrów długości.",
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

  districtsHeading: "Do których części Sejn dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do okolicznych wsi. Dojazd jest wszędzie bezpłatny.",
    "Przy umawianiu wystarczy podać ulicę i numer albo nazwę miejscowości.",
  ],
  districts: [],

  nearbyHeading: "Poza Sejny też przyjadę",
  nearbyParagraphs: [
    "Suwałki, Puńsk, Augustów, Krasnopol i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Suwałki", "Augustów", "Puńsk", "Krasnopol"],

  about: blokOMnie("do Sejn", "w Sejnach i okolicy", REGION_PODLASIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Sejn bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do okolicznych wsi. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku: miasto Sejny i gmina wiejska Sejny to dwie odrębne jednostki o tej samej nazwie, obie z siedzibą w mieście. Do obu dojeżdżam.",
    },
    ...faqWspolne("w Sejnach"),
    {
      question: "Czy można upiec zamiast usmażyć?",
      answer:
        "Można, ale to nie jest zamiana jeden do jednego i warto o tym wiedzieć. Smażenie to kontakt z gorącym tłuszczem, więc daje chrupkość i wilgotny środek; pieczenie to gorące powietrze ze wszystkich stron, więc daje równomierność, ale wysusza. Upieczony kotlet będzie suchszy i masa potrzebuje więcej tłuszczu albo płynu.",
    },
    {
      question: "Czy w Thermomixie da się smażyć albo piec?",
      answer:
        "Nie i to jego największe ograniczenie. Nie ma patelni ani piekarnika. Jego dziedzina to techniki oparte na wodzie i parze: gotowanie, duszenie, gotowanie na parze i podgrzewanie z mieszaniem. Masę i nadzienie przygotuje, ale smażenie czy pieczenie zostaje po Waszej stronie.",
    },
    {
      question: "Komu ten sprzęt przyda się najmniej?",
      answer:
        "Komuś, kto smaży codziennie — kotlety, naleśniki, placki, ryby. Wtedy pomoc jest ograniczona do przygotowania masy. Najwięcej daje w domach, gdzie gotuje się zupy, dusi, robi sosy, kasze i masy.",
    },
  ],

  geo: { lat: 54.1069, lng: 23.3486 },
};
