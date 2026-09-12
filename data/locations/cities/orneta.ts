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
 * ORNETA — gmina miejsko-wiejska w powiecie lidzbarskim.
 * GMINA ok. 10 700 (dane GUS przez geoportal).
 * 20 SOŁECTW. Powierzchnia ok. 244 km².
 * ⚠ LUDNOŚCI SAMEGO MIASTA NIE PODAJĘ — nie potwierdzono.
 *
 * PRAWA MIEJSKIE: 12 sierpnia 1308 — pierwsza wzmianka
 * o osadzie; 26 MARCA 1313 — w dokumentach pojawia się
 * CIVITAS; 14 SIERPNIA 1359 — odnowiony przywilej na prawie
 * chełmińskim.
 * ⚠ OBALONE: „prawa miejskie w 1308 r." — 1308 to wzmianka
 * o osadzie, civitas dopiero 1313.
 * PRZYNALEŻNOŚĆ: WARMIA, dominium biskupów warmińskich.
 *
 * ⚠ POTWIERDZONE: ORNETA BYŁA SIEDZIBĄ BISKUPÓW WARMIŃSKICH
 * przez blisko dekadę w połowie XIV w. Źródła podają
 * 1340/1341 – 1349/1350 — PISZĘ OSTROŻNIE, bez dokładnych
 * lat granicznych. Siedzibę przeniesiono stąd do Lidzbarka
 * Warmińskiego.
 *
 * RATUSZ UKOŃCZONY W 1373 r. — JEDYNY ZACHOWANY RATUSZ
 * GOTYCKI NA WARMII. To najmocniejszy fakt tego miasta.
 * KOŚCIÓŁ PARAFIALNY — budowa od lat 40. XIV w., pierwszy
 * etap ukończony w 1379 r.; bazylika trójnawowa
 * czteroprzęsłowa, unikatowy CERAMICZNY FRYZ z maswerkami
 * i dekoracją figuralną obiegający elewacje, sklepienia
 * gwiaździste. Układ bazylikowy rzadki dla Warmii.
 * MURY MIEJSKIE od 1340 r.; dwie bramy: WYSOKA i NISKA
 * (ŁAZIENNA), rozebrane w połowie XIX w.
 * UKŁAD URBANISTYCZNY: prostokątny rynek o proporcjach 2:1,
 * z którego wybiega DZIESIĘĆ ULIC.
 * 1586 — powstanie klasztoru klarysek.
 * ZAMEK BISKUPI: w 1806 r. nakazano rozbiórkę fortyfikacji,
 * w 1890 rozebrano naziemne kondygnacje skrzydeł; ŚREDNIOWIECZNE
 * PIWNICE ZACHOWANE — stoi na nich dziś szkoła.
 * SMOK W HERBIE — miasto promuje się jako „miasto smoka".
 *
 * ⚠⚠ TEMAT ZAKAZANY — PROCESY O CZARY. Orneta ma taką
 * historię, ale dostępna relacja pochodzi z działu
 * „orneckie legendy", jest niepotwierdzona naukowo
 * i makabryczna. NIE PISZĘ O TYM ANI SŁOWA. To samo dotyczy
 * głośnej sprawy z Reszla.
 *
 * KĄT: TO, CO ZBIERA SIĘ NA POWIERZCHNI — piana, szumowiny
 * i tłuszcz. Kąt od ceramicznego fryzu obiegającego elewacje
 * kościoła: dekoracji, która jest właśnie na powierzchni.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że w zamkniętym naczyniu nie da się szumować i że to jest
 *   realne ograniczenie, o którym nikt nie uprzedza,
 * — czym jest szumowina: ścięte białko, które wypływa na
 *   wierzch przy gotowaniu mięsa, kości i roślin strączkowych,
 * — że zebranie jej daje klarowny wywar, a niezebranie —
 *   mętny; że to różnica wyłącznie w wyglądzie i częściowo
 *   w smaku,
 * — że piana z fasoli i grochu to co innego i pojawia się
 *   z innego powodu,
 * — że tłuszcz zbierający się na wierzchu zdejmuje się
 *   najłatwiej po schłodzeniu, a nie na gorąco,
 * — co z tego wynika praktycznie: bulion na uroczystość
 *   lepiej zrobić w garnku, a codzienny wywar spokojnie
 *   w urządzeniu,
 * — i ODMOWA: nie rozstrzygam, czy szumowiny trzeba usuwać
 *   ze względów innych niż wygląd.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH — także żadnych sugestii,
 *   że szumowiny albo tłuszcz są „niezdrowe". ODMOWA STOI
 *   W TEKŚCIE.
 * — ŻADNYCH PORAD o surowym mięsie i kościach.
 * — ŻADNYCH NAZW FIRM.
 * — NIE PODAJĘ ludności samego miasta.
 * — ZERO tematu procesów o czary.
 *
 * ⚠ ETYKA — WARMIŃSKO-MAZURSKIE:
 * — NIE UŻYWAM niemieckiej nazwy miasta — tym bardziej że
 *   nie została potwierdzona w źródłach.
 * — ZERO roku 1945 i zniszczeń.
 * — ZERO wysiedleń i akcji „Wisła".
 * — ZERO procesów o czary i egzekucji.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Rosół i wywar" (Gniew)
 * dotyczą wywaru jako bazy, z której robi się wszystko.
 * „Skropliny i wykipienie" (Skarszewy) dotyczą wody pod
 * pokrywką. „Urządzenie grzeje, nie chłodzi" dotyczy braku
 * chłodzenia. „Konsystencja" (Stryków) dotyczy rozdrobnienia.
 * Tutaj chodzi o POWIERZCHNIĘ: o to, co wypływa na wierzch
 * i czego w zamkniętym naczyniu nie da się zdjąć.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ ludności samego miasta.
 * — NIE PODAJĘ dokładnych lat, w których Orneta była
 *   siedzibą biskupów — źródła różnią się o rok.
 * — NIE PODAJĘ niemieckiej nazwy miasta, bo nie została
 *   potwierdzona.
 * — NIE PODAJĘ numerów rejestru zabytków.
 * — NIE PODAJĘ wydarzeń cyklicznych — nie sprawdzono.
 * — NIE PRZYPISUJĘ Ornecie produktu z Listy Produktów
 *   Tradycyjnych — nie potwierdzono żadnego.
 * — NIE MYLĘ Bramy Orneckiej w Dobrym Mieście z bramami
 *   w samej Ornecie.
 * — districts: brak potwierdzonych osiedli. PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — gmina liczy około dziesięciu i pół tysiąca mieszkańców
 *   i ma dwadzieścia sołectw,
 * — pierwsza wzmianka o osadzie pochodzi z 12 sierpnia 1308 r.,
 *   status civitas z 26 marca 1313 r., a odnowiony przywilej
 *   na prawie chełmińskim z 14 sierpnia 1359 r.,
 * — w połowie XIV w., przez blisko dekadę, Orneta była
 *   siedzibą biskupów warmińskich; potem przeniesiono ją
 *   do Lidzbarka Warmińskiego,
 * — ratusz ukończony w 1373 r. jest jedynym zachowanym
 *   ratuszem gotyckim na Warmii,
 * — kościół parafialny budowany od lat czterdziestych XIV w.,
 *   pierwszy etap ukończono w 1379 r.; ma rzadki dla Warmii
 *   układ bazylikowy, sklepienia gwiaździste i unikatowy
 *   ceramiczny fryz obiegający elewacje,
 * — mury miejskie budowano od 1340 r.; miały dwie bramy,
 *   Wysoką i Niską, rozebrane w połowie XIX w.,
 * — rynek ma proporcje dwa do jednego i wybiega z niego
 *   dziesięć ulic,
 * — w 1586 r. powstał klasztor klarysek,
 * — po zamku biskupim zachowały się średniowieczne piwnice,
 *   na których stoi dziś szkoła,
 * — w herbie miasta jest smok.
 */
export const ORNETA: CityContent = {
  slug: "orneta",
  h1: "Thermomix Orneta – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Orneta (warmińsko-mazurskie) — przedstawiciel",
  seoDescription:
    "Thermomix w Ornecie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Orneta — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Ornecie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Ornety z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich sołectw gminy.",

  highlights: highlightyStandardowe("Orneta i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "W zamkniętym naczyniu nie da się szumować. Nikt o tym nie uprzedza.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Ornecie – jak wygląda prezentacja?",
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
      id: "powierzchnia",
      heading: "Fryz obiegający kościół — czyli o tym, co zbiera się na powierzchni",
      paragraphs: [
        "Orneta ma coś, czego nie ma żadne inne warmińskie miasto: jedyny zachowany ratusz gotycki na Warmii, ukończony w 1373 roku. Ma też rzecz jeszcze rzadszą — kościół parafialny budowany od lat czterdziestych czternastego wieku, wokół którego biegnie unikatowy ceramiczny fryz z maswerkami i dekoracją figuralną. Cała ozdoba jest na zewnątrz, na powierzchni murów. Przez blisko dekadę w połowie czternastego wieku Orneta była zresztą siedzibą biskupów warmińskich, zanim przeniesiono ją do Lidzbarka Warmińskiego.",
        "Miasto, którego najciekawsza rzecz jest na powierzchni, jest właściwym miejscem na stronę o tym, co zbiera się na wierzchu w garnku — i o tym, czego w tym urządzeniu z tym nie zrobicie.",
        "Bo to jest realne ograniczenie, o którym nie uprzedza żadna ulotka: w zamkniętym naczyniu nie da się szumować. Nie widzicie powierzchni, nie macie jak wsunąć łyżki cedzakowej i nie ma momentu, w którym można by to zrobić. Trzeba to wiedzieć przed zakupem, a nie po pierwszym rosole.",
        "Przypomnę, o czym mowa. Szumowina to ścięte białko, które przy gotowaniu mięsa, kości i roślin strączkowych wypływa na wierzch jako szara piana. Zebranie jej daje wywar klarowny, złocisty, taki jak na świątecznym stole. Niezebranie daje wywar mętny — i to jest cała różnica, bo mówimy o wyglądzie i po części o smaku, a nie o niczym więcej.",
        "Warto rozróżnić dwie rzeczy, które nazywamy tak samo. Piana przy fasoli, grochu i soczewicy powstaje z innego powodu i jest zwykle obfitsza, a przy strączkach ma jeszcze jedną cechę: potrafi podnieść zawartość, więc naczynia nie należy napełniać po brzegi. To akurat dotyczy każdego naczynia, także zamkniętego.",
        "Osobno jest tłuszcz. Ten zbiera się na wierzchu każdego wywaru i tu mam dobrą wiadomość: zdejmuje się go najłatwiej nie na gorąco, tylko po schłodzeniu, kiedy zastyga i daje się zebrać łyżką w całości. Czyli akurat z tłuszczem urządzenie w niczym nie przeszkadza — po prostu robicie to później, przy innej okazji.",
        "Praktyczny wniosek jest prosty i mówię go wprost, choć nie jest dla mnie korzystny: jeśli robicie bulion na wesele albo na Wigilię i zależy Wam, żeby był przejrzysty jak szkło, zróbcie go w garnku. Codzienny wywar na zupę, którą i tak zabielicie albo zmiksujecie, spokojnie może powstać w urządzeniu i nikt nie zauważy różnicy.",
        "I granica: nie będę rozstrzygać, czy szumowiny trzeba usuwać z jakiegokolwiek powodu poza wyglądem i smakiem. Krąży na ten temat sporo twierdzeń i część z nich dotyczy zdrowia — a to nie jest dziedzina, w której cokolwiek orzekam.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Ornecie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeżeli macie pytanie o coś, czego urządzenie Waszym zdaniem nie zrobi — zadajcie je przy spotkaniu. Odpowiadam na takie najchętniej, bo są uczciwsze niż pytania o to, co wychodzi ładnie.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Ornecie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla orneckiej rodziny",
      paragraphs: [
        "Gmina Orneta liczy około dziesięciu i pół tysiąca mieszkańców i ma dwadzieścia sołectw. Pierwsza wzmianka o osadzie pochodzi z sierpnia 1308 roku, ale jako miasto pojawia się w dokumentach dopiero w 1313, a odnowiony przywilej na prawie chełmińskim wydano 14 sierpnia 1359. W połowie czternastego wieku przez blisko dziesięć lat Orneta była siedzibą biskupów warmińskich. Zostały po tamtych czasach rzeczy wyjątkowe: ratusz z 1373 roku, jedyny zachowany ratusz gotycki na Warmii, oraz kościół parafialny z ceramicznym fryzem obiegającym elewacje i sklepieniami gwiaździstymi. Rynek ma proporcje dwa do jednego i wybiega z niego dziesięć ulic, a pod budynkiem szkoły zachowały się średniowieczne piwnice zamku biskupiego. W herbie miasta jest smok.",
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

  districtsHeading: "Do których części gminy Orneta dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich dwudziestu sołectw gminy. Dojazd jest wszędzie bezpłatny.",
    "Przy umawianiu wystarczy podać miejscowość i ulicę albo numer domu.",
  ],
  districts: [],

  nearbyHeading: "Poza Ornetę też przyjadę",
  nearbyParagraphs: [
    "Lidzbark Warmiński, Dobre Miasto, Pieniężno, Braniewo, Miłakowo i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Lidzbark Warmiński", "Dobre Miasto", "Pieniężno", "Braniewo", "Miłakowo"],

  about: blokOMnie("do Ornety", "w Ornecie i całej gminie", REGION_WARMIA_MAZURY),

  faq: [
    {
      question: "Czy dojeżdżasz do Ornety bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich dwudziestu sołectw gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku: Orneta leży w powiecie lidzbarskim, ale to nie to samo co Lidzbark Warmiński ani tym bardziej Lidzbark w powiecie działdowskim — do wszystkich trzech przyjeżdżam osobno.",
    },
    ...faqWspolne("w Ornecie"),
    {
      question: "Czy w Thermomixie da się zebrać szumowiny z wywaru?",
      answer:
        "Nie i to jest realne ograniczenie, o którym warto wiedzieć przed zakupem. W zamkniętym naczyniu nie widać powierzchni i nie ma jak wsunąć łyżki cedzakowej. Efekt: wywar wyjdzie mętniejszy niż ten z garnka.",
    },
    {
      question: "To w czym zrobić klarowny bulion?",
      answer:
        "Jeśli ma być przejrzysty jak szkło — na wesele albo na Wigilię — zróbcie go w garnku i szumujcie. Codzienny wywar na zupę, którą i tak zabielicie albo zmiksujecie, spokojnie powstanie w urządzeniu i nikt nie zauważy różnicy. Mówię to wprost, choć nie jest to dla mnie korzystne.",
    },
    {
      question: "A co z tłuszczem na powierzchni?",
      answer:
        "Z tłuszczem nie ma problemu: najłatwiej zdejmuje się go nie na gorąco, tylko po schłodzeniu, gdy zastygnie i da się zebrać łyżką w całości. Tu urządzenie w niczym nie przeszkadza — po prostu robicie to później. Czy szumowiny trzeba usuwać z jakichkolwiek innych powodów niż wygląd i smak, nie rozstrzygam.",
    },
  ],

  geo: { lat: 54.1178, lng: 20.1339 },
};
