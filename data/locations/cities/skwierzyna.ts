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
 * SKWIERZYNA — gmina miejsko-wiejska w powiecie międzyrzeckim.
 * MIASTO 9 020, GMINA 11 462 (GUS 31.12.2024).
 * POWIERZCHNIA MIASTA 35,9 km², GMINY 284,8 km².
 * ⚠⚠ LICZBY SOŁECTW NIE PODAJĘ — nie ustalono.
 * ⚠⚠ „PONAD 10 TYSIĘCY MIESZKAŃCÓW" z portalu turystycznego
 * TO DANE NIEAKTUALNE — obalone dwoma źródłami (9 020
 * na 31.12.2024 i 9 078 na 31.12.2023). NIE CYTUJĘ.
 *
 * PRAWA MIEJSKIE: przed 1296 r. (lokacja na prawie polskim),
 * 1313 r. — nowe prawa na wzorach magdeburskich,
 * ⚠⚠ 26 CZERWCA 1406 r. — KRÓL WŁADYSŁAW JAGIEŁŁO „ODNOWIŁ
 * I POSZERZYŁ PRAWA MIEJSKIE". 1530 — nadanie herbu.
 * 1543 — MIASTO KRÓLEWSKIE. Marka „Skwierzyna — Miasto
 * Królewskie". W 2026 r. obchody 730-lecia praw miejskich.
 * POMNIK WŁADYSŁAWA JAGIEŁŁY odsłonięty w 1970 r.
 *
 * GEOGRAFIA: na LEWYM BRZEGU WARTY, PRZY UJŚCIU OBRY,
 * na rozwidleniu dróg z Gorzowa do Zielonej Góry i Poznania.
 * PUSZCZA NOTECKA na północ, lasy sulęcińsko-skwierzyńskie
 * na zachodzie.
 *
 * ⚠⚠ HANDEL TRANZYTOWY — PODSTAWA KĄTA:
 * VIII–X w. — przeprawa przez Wartę wykorzystywana w handlu
 * „na stosunkowo szeroką skalę".
 * 1390 r. — KOMORA CELNA NA TRAKCIE SZCZECIN–POZNAŃ–KRAKÓW.
 * 1392 r. — KUPCOM SKWIERZYŃSKIM PRZYZNANO PRAWO SKŁADU.
 * TO JEST KOTWICA — miasto żyło z towarów, które PRZEZ NIE
 * PRZECHODZIŁY.
 * 1613 r. — zakaz sprzedaży zagranicznych sukien na jarmarku
 * miejskim (ochrona miejscowych sukienników).
 *
 * MŁYNY — bogaty materiał, ale ⚠ KĄT MŁYNARSKI ZAJĘTY
 * („mąka i mielenie"). Podaję jako fakty:
 * 1499 — młyny zalegają z podatkiem od czterech kół;
 * 1508 — „molendinum Obersky", dwa koła; 1513 — król Zygmunt
 * nadał młyn miejski Szymonowi Brzozie, który pobierał
 * TRZECIĄ MIARĘ; trzy koła przemielały rocznie 96 ćwierci
 * żyta; słód mielono w osobnym młynie na strumieniu Zgubionym.
 *
 * STRUKTURA ZAWODOWA 1793 r.: PIWOWARZY 44 (grupa
 * najliczniejsza), SZEWCY 26, RYBACY 20, SUKIENNICY 16.
 * 1524 — uregulowano prawa przynależności do cechów.
 * 1510 — prawo połowu ryb między Zielonymi Świątkami a dniem
 * św. Bartłomieja.
 * ⚠ KĄTA RYBNEGO NIE UŻYWAM — „ryba" i „ryby" ZAJĘTE.
 * ⚠ O BROWARZE piszę jednym zdaniem, BEZ ZACHĘTY DO ALKOHOLU.
 * ⚠ FABRYKI TYTONIU I CYGAR NIE WYMIENIAM — używki.
 *
 * ZABYTKI: kościół św. Mikołaja (XIV w., przebudowany
 * 1861–1869), RATUSZ NEOROMAŃSKI z 1841 r., kościół Zbawiciela
 * 1846–1854. Węzeł kolejowy.
 *
 * KĄT: CYTRUSY — SKÓRKA KONTRA SOK.
 * Kąt od miasta, które od średniowiecza żyło z towarów
 * przechodzących przez nie tranzytem: komora celna 1390,
 * prawo składu 1392.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że cytryna i pomarańcza to w polskiej kuchni składniki
 *   przywiezione, a mimo to całkowicie zadomowione,
 * — ŻE SKÓRKA I SOK TO DWA RÓŻNE SKŁADNIKI, nie dwie części
 *   jednego — i że mylenie ich to najczęstszy błąd,
 * — SOK daje kwas: rozjaśnia, przecina tłuszcz, ale
 *   ma niewiele zapachu,
 * — SKÓRKA daje zapach, prawie bez kwasu — i to w niej
 *   siedzi wszystko, co kojarzymy z „cytrynowym" smakiem
 *   ciasta,
 * — WNIOSEK: ciasto pachnące cytryną robi się skórką,
 *   nie sokiem; sok dodany do ciasta daje głównie wilgoć,
 * — ŻE BIAŁA WARSTWA POD SKÓRKĄ JEST GORZKA i dlatego ściera
 *   się wyłącznie kolorową część,
 * — ŻE OWOCE BYWAJĄ WOSKOWANE, więc do skórki wybiera się
 *   te z odpowiednim oznaczeniem i myje przed tarciem,
 * — ŻE SKÓRKA ŚWIETNIE ZNOSI MROŻENIE, a sok jeszcze lepiej
 *   — i że warto zetrzeć skórkę ZAWSZE, zanim wyciśnie się
 *   sok, bo odwrotnej kolejności nie da się wykonać,
 * — ŻE CYTRUSY NIE SĄ WYŁĄCZNIE DO SŁODKIEGO: sok ratuje
 *   zupę, sos i danie, które „czegoś nie ma",
 * — UCZCIWIE: urządzenie nie obiera ani nie wyciska cytrusów,
 *   a przy skórce tarka jest szybsza,
 * — ale robi jedną rzecz naprawdę dobrze: miele całą skórkę
 *   z cukrem na aromatyczną masę, która rozprowadza się
 *   w cieście równo — czego ręcznie nie da się osiągnąć.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PROPORCJI.
 * — ⚠⚠ ŻADNYCH TWIERDZEŃ ZDROWOTNYCH. ZERO witaminy C,
 *   ZERO odporności, ZERO „woda z cytryną na rano".
 *   ZERO tez o szkodliwości wosku i środków ochrony —
 *   piszę tylko, że skórkę woskowanych owoców się myje,
 *   jako o kwestii SMAKU I PRAKTYKI. TWARDA GRANICA.
 * — ŻADNYCH NAZW FIRM.
 * — ZERO ZACHĘTY DO ALKOHOLU (nalewki, likiery — pomijam).
 *
 * ⚠ ETYKA — LUBUSKIE:
 * — ZERO tematów wojennych i granicznych.
 * — ZERO wysiedleń i przesiedleń po 1945 r.
 * — ZERO „Ziem Odzyskanych" jako tematu politycznego.
 * — ZERO konfliktów narodowościowych i wyznaniowych.
 * — ZERO bezrobocia i wyludniania.
 * — ZERO używek (tytoń, cygara) mimo faktu historycznego.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Równowaga smaków"
 * dotyczy czterech smaków jako teorii. „Chrzan, musztarda,
 * ocet" dotyczą dodatków ostrych i kwaśnych. „Obierki, skórki
 * i łodygi" dotyczą tego, co wyrzucamy. „Zioła świeże kontra
 * suszone" dotyczą ziół. „Owoc w daniu wytrawnym" (Gubin)
 * dotyczy owoców krajowych jako źródła kwasu i słodyczy
 * w daniach słonych. Tutaj chodzi o JEDEN OWOC W DWÓCH
 * POSTACIACH — skórce i soku — i o ich różne role.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ liczby sołectw.
 * — NIE CYTUJĘ nieaktualnej liczby „ponad 10 tysięcy".
 * — NIE PODAJĘ nazwy ani dat browaru skwierzyńskiego.
 * — NIE PISZĘ o fabryce tytoniu.
 * — NIE TWIERDZĘ, że w Skwierzynie odbywa się impreza
 *   kulinarna — nie potwierdzono żadnej.
 * — NIE PRZYPISUJĘ gminie produktu z Listy Produktów
 *   Tradycyjnych — nie potwierdzono żadnego.
 * — NIE MYLĘ SKWIERZYNY ze SKWIERZYNKĄ ani ze SKWIERCZYNEM.
 *   FAQ to rozróżnia.
 * — districts: brak potwierdzonych osiedli. PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — miasto liczy ponad dziewięć tysięcy mieszkańców
 *   na 35,9 km², cała gmina ponad jedenaście tysięcy
 *   na 284,8 km²,
 * — prawa miejskie Skwierzyna miała przed 1296 r., w 1313
 *   otrzymała nowe na wzorach magdeburskich, a 26 czerwca
 *   1406 r. król Władysław Jagiełło je odnowił i poszerzył;
 *   herb nadano w 1530, a w 1543 miasto stało się królewskie
 *   — do dziś używa marki „Miasto Królewskie”, a pomnik
 *   Jagiełły odsłonięto w 1970 r.; w 2026 przypada 730-lecie
 *   praw miejskich,
 * — miasto leży na lewym brzegu Warty, przy ujściu Obry,
 *   na rozwidleniu dróg z Gorzowa do Zielonej Góry i Poznania;
 *   na północ rozciąga się Puszcza Notecka,
 * — przeprawy przez Wartę używano w handlu już między VIII
 *   a X wiekiem; w 1390 r. założono tu komorę celną na trakcie
 *   Szczecin–Poznań–Kraków, a w 1392 kupcom skwierzyńskim
 *   przyznano prawo składu; w 1613 zakazano sprzedaży
 *   zagranicznych sukien na jarmarku miejskim, chroniąc
 *   miejscowych sukienników,
 * — młyny skwierzyńskie notowano od 1499 r., gdy zalegały
 *   z podatkiem od czterech kół; w 1508 r. młyn na Obrze
 *   zapisano jako „molendinum Obersky”, a w 1513 król Zygmunt
 *   nadał młyn miejski Szymonowi Brzozie, który pobierał
 *   trzecią miarę; trzy koła przemielały rocznie dziewięćdziesiąt
 *   sześć ćwierci żyta, a słód mielono w osobnym młynie,
 * — w 1793 r. najliczniejszą grupą zawodową miasta byli
 *   piwowarzy — czterdziestu czterech — dalej szewcy,
 *   dwudziestu rybaków i szesnastu sukienników; prawa
 *   przynależności do cechów uregulowano w 1524 r.,
 *   a w 1510 wydano dokument nadający prawo połowu ryb między
 *   Zielonymi Świątkami a dniem świętego Bartłomieja,
 * — z zabytków: kościół świętego Mikołaja z XIV w.,
 *   przebudowany w latach 1861–1869, neoromański ratusz
 *   z 1841 r. i kościół Zbawiciela z lat 1846–1854.
 */
export const SKWIERZYNA: CityContent = {
  slug: "skwierzyna",
  h1: "Thermomix Skwierzyna – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Skwierzyna — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Skwierzynie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Skwierzyna — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Skwierzynie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Skwierzyny z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do całej gminy.",

  highlights: highlightyStandardowe("Skwierzyna i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Zapach cytryny siedzi w skórce, nie w soku.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Skwierzynie – jak wygląda prezentacja?",
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
      id: "cytrusy",
      heading: "Komora celna i prawo składu — czyli o cytrusach, skórce i soku",
      paragraphs: [
        "Skwierzyna od średniowiecza żyła z towarów, które przez nią przechodziły. Przeprawy przez Wartę używano w handlu już między VIII a X wiekiem, w 1390 roku założono tu komorę celną na trakcie Szczecin–Poznań–Kraków, a dwa lata później kupcom skwierzyńskim przyznano prawo składu. Przez takie właśnie miasta docierały do polskich kuchni rzeczy, które dziś wydają się w nich odwieczne.",
        "Cytryna i pomarańcza są dokładnie takim przypadkiem: składniki przywiezione, a zadomowione tak głęboko, że nikt już o tym nie myśli. I właśnie o nich chcę napisać — a konkretnie o jednym rozróżnieniu, którego nie robi prawie nikt.",
        "Skórka i sok to dwa różne składniki, a nie dwie części jednego owocu. Mają inne zastosowania, inne właściwości i nie zastępują się nawzajem. Mylenie ich to najczęstszy błąd, jaki widzę w domowym pieczeniu.",
        "Sok daje kwas. Rozjaśnia smak, przecina tłuszcz, poprawia zupę i sos — ale zapachu ma w sobie zaskakująco mało.",
        "Skórka jest odwrotna: daje zapach, prawie bez kwasu. To w niej siedzi wszystko, co kojarzymy ze smakiem „cytrynowym” — te olejki, które czuć, gdy tylko zacznie się ją ścierać.",
        "Stąd wniosek, który zmienia niejedno ciasto: wyraźnie cytrynowe ciasto robi się skórką, a nie sokiem. Sok wlany do ciasta daje przede wszystkim wilgoć, a potem człowiek się dziwi, że mimo pół cytryny nic nie czuć.",
        "Przy ścieraniu ważna jest jedna rzecz: biała warstwa pod skórką jest gorzka. Ściera się więc wyłącznie kolorową część i przestaje w momencie, gdy pod tarką pojawia się biel. To jest cała technika.",
        "Druga rzecz praktyczna: owoce bywają woskowane, więc do skórki wybiera się te z odpowiednim oznaczeniem, a przed tarciem się je myje i wyciera. Chodzi po prostu o to, żeby w cieście znalazł się tylko zapach owocu, a nic poza nim.",
        "I nawyk, który polecam najbardziej: skórkę ścieraj zawsze, zanim wyciśniesz sok. Odwrotnej kolejności po prostu nie da się wykonać — z wyciśniętej połówki nic już porządnie nie zetrzesz. A skórka świetnie znosi mrożenie, sok jeszcze lepiej, więc nic się nie marnuje, nawet jeśli akurat nie masz na co ich użyć.",
        "Warto też pamiętać, że cytrusy nie są wyłącznie do słodkiego. Łyżka soku ratuje zupę, która „czegoś nie ma”, sos, który jest zbyt ciężki, i danie duszone, które wyszło mdłe. To jest jedna z tych rzeczy, po które doświadczeni kucharze sięgają odruchowo, a w domowych przepisach prawie ich nie ma.",
        "Teraz uczciwie o sprzęcie. Thermomix nie obierze i nie wyciśnie cytrusów, a do samego startego pyłku ze skórki zwykła tarka jest szybsza i wygodniejsza. Nie ma co udawać inaczej.",
        "Robi natomiast jedną rzecz, której ręcznie zrobić się nie da: miele całą skórkę razem z cukrem na aromatyczną, jednolitą masę. Taka masa rozprowadza się w cieście równo, zamiast siedzieć w kilku miejscach — i to jest różnica, którą czuć w każdym kęsie, a nie tylko w co trzecim.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Skwierzynie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedzcie przy umawianiu, czy w domu piecze się ciasta. Jeśli tak, pokażę masę ze skórki — to najlepiej widać na miejscu.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Skwierzynie"),
    sekcjaRaty("w Skwierzynie"),
    {
      id: "rodzina",
      heading: "Thermomix dla skwierzyńskiej rodziny",
      paragraphs: [
        "Samo miasto liczy ponad dziewięć tysięcy mieszkańców na blisko trzydziestu sześciu kilometrach kwadratowych, a cała gmina ponad jedenaście tysięcy na dwustu osiemdziesięciu pięciu. Prawa miejskie Skwierzyna miała już przed 1296 rokiem, w 1313 otrzymała nowe na wzorach magdeburskich, a 26 czerwca 1406 roku król Władysław Jagiełło je odnowił i poszerzył; herb nadano w 1530, a w 1543 miasto stało się królewskie — do dziś używa marki „Miasto Królewskie”, a pomnik Jagiełły odsłonięto tu w 1970 roku. W 2026 przypada 730-lecie praw miejskich. Miasto leży na lewym brzegu Warty, przy ujściu Obry, na rozwidleniu dróg z Gorzowa do Zielonej Góry i Poznania; na północ rozciąga się Puszcza Notecka. Przeprawy przez Wartę używano w handlu już między VIII a X wiekiem, w 1390 roku założono tu komorę celną na trakcie Szczecin–Poznań–Kraków, w 1392 kupcom przyznano prawo składu, a w 1613 zakazano sprzedaży zagranicznych sukien na jarmarku, chroniąc miejscowych sukienników. Młyny notowano od 1499 roku, gdy zalegały z podatkiem od czterech kół; w 1508 młyn na Obrze zapisano jako „molendinum Obersky”, a w 1513 król Zygmunt nadał młyn miejski Szymonowi Brzozie, który pobierał trzecią miarę — trzy koła przemielały rocznie dziewięćdziesiąt sześć ćwierci żyta, a słód mielono osobno. W 1793 roku najliczniejszą grupą zawodową byli piwowarzy, czterdziestu czterech, dalej szewcy, dwudziestu rybaków i szesnastu sukienników; prawa cechowe uregulowano w 1524, a w 1510 wydano dokument nadający prawo połowu ryb między Zielonymi Świątkami a dniem świętego Bartłomieja. Z zabytków zostały kościół świętego Mikołaja z XIV wieku, przebudowany w latach 1861–1869, neoromański ratusz z 1841 roku i kościół Zbawiciela z lat 1846–1854.",
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

  districtsHeading: "Do których części gminy Skwierzyna dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich wsi gminy. Dojazd jest wszędzie bezpłatny.",
    "Przy umawianiu wystarczy podać miejscowość i ulicę albo numer domu.",
  ],
  districts: [],

  nearbyHeading: "Poza Skwierzynę też przyjadę",
  nearbyParagraphs: [
    "Międzyrzecz, Drezdenko, Bledzew, Gorzów Wielkopolski i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Międzyrzecz", "Drezdenko", "Bledzew", "Gorzów Wielkopolski"],

  about: blokOMnie("do Skwierzyny", "w Skwierzynie i całej gminie", REGION_LUBUSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Skwierzyny bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich wsi gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku, bo nazwy bywają mylone: Skwierzyna nad Wartą to nie Skwierzynka ani Skwierczyn.",
    },
    ...faqWspolne("w Skwierzynie"),
    {
      question: "Skórka czy sok — czym pachnie ciasto cytrynowe?",
      answer:
        "Skórką. To w niej siedzą olejki i cały zapach, który kojarzymy ze smakiem cytrynowym; sok daje przede wszystkim kwas i wilgoć. Dlatego wyraźnie cytrynowe ciasto robi się skórką, a nie sokiem.",
    },
    {
      question: "Jak ścierać skórkę z cytryny?",
      answer:
        "Wyłącznie kolorową część — biała warstwa pod spodem jest gorzka, więc przestaje się w momencie, gdy pod tarką pojawia się biel. Owoce woskowane warto przed tarciem umyć i wytrzeć. I zawsze ścieraj skórkę, zanim wyciśniesz sok: odwrotnej kolejności nie da się wykonać.",
    },
    {
      question: "Czy cytryna przydaje się w daniach słonych?",
      answer:
        "Bardzo. Łyżka soku ratuje zupę, która „czegoś nie ma”, sos zbyt ciężki i mdłe danie duszone. Doświadczeni kucharze sięgają po nią odruchowo, a w domowych przepisach prawie jej nie ma.",
    },
  ],

  geo: { lat: 52.5958, lng: 15.5069 },
};
