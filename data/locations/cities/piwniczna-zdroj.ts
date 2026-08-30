import type { CityContent } from "../city-content";
import {
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
 * PIWNICZNA-ZDRÓJ — GMINA MIEJSKO-WIEJSKA w powiecie nowosądeckim.
 * 9 905 mieszkańców (31.12.2024), 126,5 km², lesistość 63,7%.
 * Rozpiętość wysokości: 347 m n.p.m. (dolina Popradu) → 1 162 m
 * (Mały Rogacz).
 *
 * OŚ STRONY: CZARNI GÓRALE I ICH PIERÓG. Górale Nadpopradzcy jako
 * grupa etnograficzna PLUS jedyny w całej dolinie Popradu potwierdzony
 * wpis na ministerialną Listę Produktów Tradycyjnych.
 * ⚠️ NIE DAWAĆ OSI „UZDROWISKO I WODY MINERALNE” — kolidowałaby
 * z Rabką i z sąsiadkami. Wody są tu TŁEM.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — PIEROGI ŁOMNICZAŃSKIE („piyrogi łomnicońskie”) — WPISANE
 *   NA MINISTERIALNĄ LISTĘ PRODUKTÓW TRADYCYJNYCH, CERTYFIKAT
 *   21 SIERPNIA 2011 R. Skład: ZIEMNIAKI TARTE NA GRUBYCH OCZKACH
 *   plus BIAŁY SER, jajka, mleko, mąka, sól; podawane ze słoniną
 *   albo boczkiem. Wniosek (30 stron) przygotowało STOWARZYSZENIE
 *   „ŁOMNICZANIE” — Stowarzyszenie na Rzecz Rozwoju Wsi
 *   Łomnica-Zdrój; autor wniosku: sekretarz Zbigniew Janeczek.
 *   ŚWIĘTO PIYROGA ŁOMNICOŃSKIEGO — festyn cykliczny w Łomnicy-Zdroju.
 *   ⚠️ TO JEDYNY POTWIERDZONY WPIS LPT W CAŁEJ DOLINIE POPRADU,
 * — CZARNI GÓRALE / GÓRALE NADPOPRADZCY — grupa etnograficzna
 *   wschodniej części Beskidu Sądeckiego; wsie: Piwniczna, Łomnica,
 *   Kokuszka, Głębokie, Sucha Struga, Rytro, Obłazy Ryterskie,
 *   Roztoka Ryterska, Młodów. Graniczą z Łemkami, Lachami Sądeckimi
 *   i Rusią Szlachtowską,
 * — STRÓJ: męski — biała lniana koszula wiązana czerwoną tasiemką,
 *   spodnie z ciemnego sukna domowego, GUNIA Z CZERWONYM „KOGUTKIEM”
 *   na biodrach, czarne filcowe kapelusze; damski — spódnice zwane
 *   „BŁĄKICIORAMI” (ręcznie drukowane i farbowane), białe zapaski,
 *   gorsety, kożuszki baranie, korale,
 * — ZESPÓŁ REGIONALNY „DOLINA POPRADU” — zał. 1965 przez nauczycieli
 *   Edwarda Grucelę, Eugeniusza Lebdowicza i Mieczysława Łomnickiego.
 *   NAGRODA IM. OSKARA KOLBERGA, im. Władysława Orkana,
 *   im. Romana Reinfussa. Scenariusze obrzędowe: WANDA ŁOMNICKA-DULAK,
 * — 1 LIPCA 1348 R. — KAZIMIERZ WIELKI nadaje prawo magdeburskie
 *   HANKOWI (HANUSZOWI), zezwalając lokować miasto „na surowym
 *   korzeniu” w miejscu zwanym „PIWNICZNA SZYJA”; targi i 20 lat
 *   zwolnienia od danin,
 * — 1655–1660 — spalenie podczas potopu szwedzkiego;
 *   7 KWIETNIA 1769 R. — bitwa konfederacji barskiej,
 * — 1874–1876 — budowa linii kolejowej Nowy Sącz–Muszyna,
 * — II WOJNA: JULIAN ZUBEK „TATAR” — dowódca partyzantki AK
 *   w lasach piwniczańskich; 18.10.1986 — Krzyż Walecznych
 *   dla miasta,
 * — ⚠️ DO 1999 R. MIASTO NAZYWAŁO SIĘ PO PROSTU „PIWNICZNA”,
 * — 6 SOŁECTW: Młodów, Głębokie, Kokuszka, Łomnica-Zdrój, Wierchomla,
 *   Zubrzyk. Plus 8 OSIEDLI MIEJSKICH: Miasto, Zdrojowe, Zawodzie,
 *   Borownice, Hanuszów, Czercz, Kosarzyska, Majerz.
 *   ⚠️ WIERCHOMLA TO JEDNO SOŁECTWO obejmujące Wierchomlę Małą
 *   i Wielką — nie dwa,
 * — WODY (TŁO): Piwniczanka, Julian, Łomniczanka, Stefan,
 *   Wierchomlanka, Zdrój. PIWNICZANKA Spółdzielnia Pracy —
 *   forma spółdzielcza od 1989 r.,
 * — REGON: 1 169 podmiotów (2024); tylko 16 obiektów noclegowych,
 * — KOLEJ: linia 96; ⚠️ W GMINIE SĄ DWIE RÓŻNE STACJE —
 *   „PIWNICZNA-ZDRÓJ” (km 111,157) i „PIWNICZNA” (km 113,308),
 *   oddalone o 2,1 km. To realna pułapka,
 * — DK 87 → przejście graniczne PIWNICZNA – MNÍŠEK NAD POPRADOM,
 * — Stacja narciarska Sucha Dolina; ok. 280 km szlaków.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — WSPÓŁRZĘDNYCH Z OFICJALNEGO ŹRÓDŁA. Żadna ze stron urzędowych
 *   ich nie podała — użyte przybliżone,
 * — ROKU UZYSKANIA STATUSU UZDROWISKA. Nie potwierdzony,
 * — FRAZY „JEDYNA POLSKA GRUPA GÓRALSKA NA WSCHÓD OD KARPAT
 *   NOSZĄCA BRĄZOWE SUKNO” ze strony gminy — niejasna geograficznie
 *   i marketingowa. NIE CYTOWAĆ,
 * — BEZROBOCIA I WYNAGRODZEŃ. Dane POWIATOWE, nie gminne,
 * — DATY OTWARCIA PRZEJŚCIA DLA CIĘŻARÓWEK. Sprzeczne źródła.
 *
 * PUŁAPKI:
 * — CZARNI GÓRALE OBEJMUJĄ TAKŻE RYTRO (Sucha Struga, Obłazy,
 *   Roztoka). Strona Rytra (`rytro.ts`) ma dlatego oś leśno-zamkową,
 *   NIE folklorystyczną,
 * — DWIE STACJE O MYLĄCYCH NAZWACH — patrz wyżej,
 * — RADZIEJOWA (1262 m) — przynależność gminna niepewna.
 *   NIE PRZYPISYWAĆ.
 */

export const PIWNICZNA_ZDROJ: CityContent = {
  slug: "piwniczna-zdroj",
  h1: "Thermomix Piwniczna-Zdrój – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Piwniczna-Zdrój — cena i prezentacja",
  seoDescription:
    "Thermomix w Piwnicznej-Zdroju: bezpłatna prezentacja TM7 u Ciebie w kuchni, cena i raty 0%. Dojazd do miasta i sołectw bez dopłat. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Piwniczna-Zdrój — zobacz TM7 u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w Piwnicznej-Zdroju. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do Piwnicznej-Zdroju, Łomnicy, Wierchomli i pozostałych sołectw gminy przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje.",

  highlights: highlightyStandardowe("miasto, osiedla i sołectwa, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption:
      "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Piwnicznej-Zdroju – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem, ze składnikami i z naczyniami, gdyby były potrzebne. Ty nie kupujesz nic i niczego nie przygotowujesz — wystarczy wolny kawałek blatu, gniazdko i godzina spokoju.",
        "Potem gotujemy. Coś na obiad, coś słodkiego i — jeśli chcesz — coś z tego, co akurat masz w lodówce. To ostatnie jest najlepszym testem, bo pokazuje, czy urządzenie pasuje do jedzenia, które i tak u Was powstaje, a nie do przepisu z folderu.",
        "Na koniec siadamy do liczb: aktualna cena, obowiązująca promocja i rata przy różnych okresach spłaty. Nie domykam niczego tego samego dnia i nie zostawiam nikogo z poczuciem, że musi zdecydować od razu.",
      ],
      links: [
        {
          href: "/prezentacja/jak-wyglada",
          label: "Zobacz, jak wygląda prezentacja krok po kroku",
        },
      ],
      photo: {
        src: "/media/aga-przedstawiciel-thermomix-hero-f49127f7.webp",
        alt: "Aga Horche z Thermomixem TM7 — napis „Przedstawiciel Thermomix”",
        caption:
          "Prezentację prowadzi Aga — ta sama osoba, która odbierze telefon po zakupie.",
      },
    },
    {
      id: "na-zywo",
      heading: "Czarni Górale — gunia z kogutkiem i spódnica-błąkicior",
      paragraphs: [
        "Mieszkańcy tej doliny to Czarni Górale, nazywani też Góralami Nadpopradzkimi. To osobna grupa etnograficzna wschodniej części Beskidu Sądeckiego, obejmująca Piwniczną, Łomnicę, Kokuszkę, Głębokie, Młodów i sąsiednie wsie po stronie Rytra.",
        "Nazwa wzięła się od stroju. Mężczyźni nosili spodnie z ciemnego, domowego sukna i gunię z czerwonym „kogutkiem” na biodrach, do tego białą lnianą koszulę wiązaną czerwoną tasiemką i czarny filcowy kapelusz. Kobiety — spódnice zwane błąkiciorami, ręcznie drukowane i farbowane, białe zapaski, gorsety, kożuszki baranie i korale.",
        "Ta grupa ma sąsiadów z każdej strony i wszyscy są inni: od zachodu Lachy Sądeckie, od wschodu Łemkowie, od południowego zachodu Ruś Szlachtowska. Piwniczna leży dokładnie pomiędzy, w wąskiej dolinie Popradu, i przez wieki to właśnie dolina wyznaczała, kto z kim się żeni i kto do kogo jeździ na targ.",
        "Kultura nie skończyła się na strojach w gablotach. Od tysiąc dziewięćset sześćdziesiątego piątego roku działa tu zespół regionalny „Dolina Popradu”, założony przez trzech miejscowych nauczycieli. Ma na koncie Nagrodę imienia Oskara Kolberga, imienia Władysława Orkana i imienia Romana Reinfussa — czyli komplet najpoważniejszych polskich wyróżnień w tej dziedzinie.",
        "Samo miasto lokował Kazimierz Wielki pierwszego lipca tysiąc trzysta czterdziestego ósmego roku, dając prawo magdeburskie niejakiemu Hankowi i pozwalając mu założyć miasto „na surowym korzeniu” w miejscu zwanym Piwniczną Szyją. Do tego dwudziestoletnie zwolnienie od danin i prawo targów.",
        "Ostatnia rzecz, o której warto wiedzieć, bo bywa mylona: człon „Zdrój” doszedł do nazwy dopiero w tysiąc dziewięćset dziewięćdziesiątym dziewiątym roku. Wcześniej była to po prostu Piwniczna.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Piwnicznej-Zdroju?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Podaj sołectwo albo osiedle. Gmina rozciąga się od trzystu czterdziestu siedmiu metrów w dolinie Popradu po tysiąc sto sześćdziesiąt dwa na Małym Rogaczu — jazda do Wierchomli to zupełnie co innego niż na Zawodzie. Na cenę to nie wpływa.",
        "Jeśli prowadzisz kwatery, powiedz to od razu. Lipiec i sierpień są u Was zwykle zajęte od rana, a maj, czerwiec i wrzesień zupełnie spokojne.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Piwnicznej-Zdroju"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Dolina, w której wszystko jest wzdłuż jednej drogi",
      paragraphs: [
        "Gmina liczy niecałe dziesięć tysięcy mieszkańców na stu dwudziestu sześciu kilometrach kwadratowych, z czego blisko dwie trzecie to lasy. Wsie ciągną się wzdłuż doliny Popradu i bocznych potoków — Łomnica, Wierchomla, Kokuszka, Zubrzyk — a wszystko wisi na jednej drodze i jednej linii kolejowej.",
        "Zarejestrowanych podmiotów jest ponad tysiąc sto, ale obiektów noclegowych tylko szesnaście — najmniej z całej okolicy. To znaczy, że Piwniczna żyje raczej z pracy niż z turystyki, a wielu mieszkańców dojeżdża do Nowego Sącza albo do rozlewni.",
        "Praktyczne przełożenie na kuchnię jest tu proste. Kiedy do większego sklepu jedzie się kilkanaście kilometrów, kupuje się rzadziej i większymi partiami — a wtedy gotowanie musi być planowane, nie improwizowane.",
        "Najbardziej opłaca się w takim układzie danie jednogarnkowe. Zupa albo duszone mięso gotuje się bez pilnowania, samo się wyłącza i czeka na tego, kto wróci pierwszy. Nie przypala się i nikt nie musi wracać, żeby zamieszać.",
        "Druga rzecz to gotowanie z zapasem: jedna duża porcja podzielona na pojemniki, sos na kilka dni, pasty, ciasto — robione seriami w weekend, w jednym naczyniu. Zimą, kiedy dojazd bywa trudniejszy, to nie wygoda, tylko rozsądek.",
        "Rodzicom najmłodszych dzieci przydaje się to, że da się ugotować i zmiksować w jednym naczyniu, bez przelewania gorących rzeczy między naczyniami.",
      ],
      links: [
        { href: "/thermomix/dla-rodziny", label: "Thermomix dla rodziny" },
        { href: "/thermomix/dla-mamy", label: "Thermomix dla mamy" },
      ],
      photo: {
        src: "/media/gotuj-z-dzieckiem-1-be78fd1c.webp",
        alt: "Aga Horche z synem i Thermomixem TM7 — napis „gotuj z dzieckiem i dla dziecka”",
        caption:
          "Posiłek dla dziecka może powstawać równolegle z obiadem dla reszty domu.",
      },
    },
    sekcjaCoUgotujesz(),
    sekcjaTradycyjneGotowanie(),
  ],

  culinary: {
    heading: "Piyrogi łomnicońskie — jedyny taki wpis w dolinie Popradu",
    paragraphs: [
      "Ta gmina ma coś, czego nie ma żadna inna w dolinie Popradu: własny, potwierdzony wpis na ministerialnej Liście Produktów Tradycyjnych. To pierogi łomniczańskie, po miejscowemu piyrogi łomnicońskie, z certyfikatem z dwudziestego pierwszego sierpnia dwa tysiące jedenastego roku.",
      "Robi się je z ziemniaków startych na grubych oczkach i z białego sera, z dodatkiem jajek, mleka, mąki i soli. Podaje ze słoniną albo boczkiem. Nic wyszukanego — dokładnie tak, jak wygląda prawdziwe jedzenie z tej doliny.",
      "Warto wiedzieć, kto to załatwił, bo to nie stało się samo. Trzydziestostronicowy wniosek przygotowało Stowarzyszenie „Łomniczanie” z Łomnicy-Zdroju. W tej samej wsi odbywa się co roku Święto Piyroga Łomnicońskiego.",
      "Poza tym kuchnia jest tu góralska w wersji nadpopradzkiej: ziemniaki w kilkunastu postaciach, kwaśne zupy, kapusta, biały ser, mięso duszone długo. Powiem uczciwie, że innych wpisów w rejestrze przypisanych tej gminie nie znalazłam — ten jeden jest za to solidnie udokumentowany.",
      "Dla urządzenia najciekawsze jest to, co w tych pierogach najbardziej pracochłonne: ucieranie ziemniaków i wyrabianie ciasta. To jest dokładnie ta część, którą maszyna robi za człowieka — szybciej i bez bolących rąk. Czego nie zrobi, mówię wprost: nie ulepi pierogów i nie wie, kiedy ciasto jest dobre. Zabiera przygotowanie, nie rzemiosło.",
    ],
  },

  districtsHeading: "Gdzie w gminie Piwniczna-Zdrój dojeżdżam?",
  districtsParagraphs: [
    "Do miasta ze wszystkimi jego osiedlami i do wszystkich sołectw, bez żadnej dopłaty za odległość. Gmina zajmuje sto dwadzieścia sześć kilometrów kwadratowych i liczy blisko dziesięć tysięcy mieszkańców.",
    "Sołectwa to: Młodów, Głębokie, Kokuszka, Łomnica-Zdrój, Wierchomla i Zubrzyk. Warto wiedzieć, że Wierchomla jest jednym sołectwem, choć obejmuje dwie miejscowości — Małą i Wielką. Miasto dzieli się dodatkowo na osiem osiedli: Miasto, Zdrojowe, Zawodzie, Borownice, Hanuszów, Czercz, Kosarzyska i Majerz.",
    "Teren jest tu wyjątkowo stromy: od trzystu czterdziestu siedmiu metrów nad poziomem morza w dolinie Popradu po tysiąc sto sześćdziesiąt dwa na Małym Rogaczu. Lasy zajmują niemal dwie trzecie powierzchni, a szlaków jest tu około dwustu osiemdziesięciu kilometrów.",
    "Dojazd: przez gminę biegnie linia kolejowa z Tarnowa do Leluchowa. Uwaga na pułapkę — są tu dwie różne stacje, „Piwniczna-Zdrój” i „Piwniczna”, oddalone od siebie o dwa kilometry. Przystanki są też w Łomnicy, Wierchomli i Zubrzyku. Samochodem prowadzi tędy droga krajowa do przejścia granicznego na Słowację.",
  ],
  districts: [
    "Piwniczna-Zdrój — Miasto i Zdrojowe",
    "Zawodzie i Kosarzyska",
    "Łomnica-Zdrój",
    "Wierchomla",
    "Kokuszka i Głębokie",
    "Młodów i Zubrzyk",
  ],

  nearbyHeading: "Rytro, Muszyna i Stary Sącz też są na mojej trasie",
  nearbyParagraphs: [
    "Gmina graniczy z Rytrem, Muszyną i Łabową, a od południa ze Słowacją. Dojeżdżam do wszystkich sąsiadów bez doliczania kosztu dojazdu, a także do Starego i Nowego Sącza.",
    "Warto wiedzieć, że Czarni Górale to nie tylko ta gmina — ich obszar obejmuje również Suchą Strugę, Obłazy i Roztokę Ryterską po stronie Rytra. Granica administracyjna i etnograficzna nie pokrywają się tu ze sobą.",
  ],
  nearbyTowns: [
    "Rytro",
    "Muszyna",
    "Stary Sącz",
    "Nowy Sącz",
    "Krynica-Zdrój",
    "Kraków",
  ],

  about: blokOMnie("do Piwnicznej-Zdroju", "w powiecie nowosądeckim"),

  faq: [
    {
      question: "Mieszkam w Łomnicy albo Wierchomli. Dojedziesz?",
      answer:
        "Dojadę i nie doliczę za to ani złotówki. Wszystkie sołectwa gminy traktuję dokładnie tak samo jak miasto. Przy umawianiu podaj nazwę miejscowości — dolina jest długa i chodzi wyłącznie o zaplanowanie trasy.",
    },
    ...faqWspolne("w Piwnicznej-Zdroju"),
    {
      question: "Robimy piyrogi łomnicońskie. Ten sprzęt się do tego nada?",
      answer:
        "Do części roboty tak, i to do tej najbardziej męczącej. Ucieranie ziemniaków i wyrabianie ciasta robi za Was maszyna, szybciej i bez bolących rąk. Lepienia nie zastąpi i nie wie, kiedy ciasto jest dobre — to zostaje przy Was. Na prezentacji chętnie ugotuję coś z Waszego repertuaru zamiast przepisu z folderu.",
    },
  ],

  geo: { lat: 49.4381, lng: 20.7139 },
};
