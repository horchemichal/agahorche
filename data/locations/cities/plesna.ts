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
 * PLEŚNA — GMINA WIEJSKA w powiecie tarnowskim.
 * 11 740 mieszkańców (GUS, 31.12.2024), 83,1 km², 142 os./km²,
 * +4,1% od 2002 — ZDECYDOWANIE NAJWOLNIEJSZY WZROST w pierścieniu
 * tarnowskim (gmina Tarnów +20,8%, Lisia Góra +18,0%, Skrzyszów
 * +11,5%). SALDO MIGRACJI 2024: DOKŁADNIE ZERO. Średni wiek 40,7.
 * 11 SOŁECTW.
 *
 * OŚ STRONY: GMINA MIĘDZY DWIEMA RZEKAMI. Dunajec stanowi jej
 * zachodnią granicę, Biała Tarnowska przecina część
 * północno-wschodnią; teren to strefa przejściowa między Pogórzem
 * Ciężkowickim a nizinami opadającymi ku Wiśle. Osobliwości
 * geologiczne: skamieniałe pnie drzew w Lichwinie i piaskowcowy głaz
 * „Diabli Kamień”.
 * ⚠️⚠️ ROZDZIELENIE OD SZCZUROWEJ: tam woda jest ZAGROŻENIEM
 * I GOSPODARKĄ WODNĄ (widły Wisły i Raby, wały, powodzie).
 * Tu rzeki są GRANICAMI I KRAJOBRAZEM. To różne ujęcia.
 * ⚠️ Dojazdy do Tarnowa to oś WOJNICZA — nie używać.
 * ⚠️ Wzrost ludności to oś ZIELONEK — tu i tak byłby bez sensu,
 * bo gmina prawie nie rośnie.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — POŁOŻENIE (plesna.pl): Dunajec — zachodnia granica gminy;
 *   Biała Tarnowska przecina część północno-wschodnią; strefa
 *   przejściowa między Pogórzem Ciężkowickim a nizinami opadającymi
 *   ku Wiśle. Sąsiedzi: Tuchów, Gromnik, Zakliczyn, Wojnicz.
 *   Przyroda: lasy łęgowe jesionowo-wiązowe nad rzekami, buczyny,
 *   ok. 55 gatunków ptaków, bobry europejskie, nietoperze,
 * — OSOBLIWOŚCI GEOLOGICZNE: SKAMIENIAŁE PNIE DRZEW W LICHWINIE
 *   oraz piaskowcowy głaz „DIABLI KAMIEŃ”. Tego nie ma żadna inna
 *   gmina pierścienia,
 * — 11 SOŁECTW: Dąbrówka Szczepanowska, Janowice, Lichwin, Lubinka,
 *   Łowczówek, Pleśna, Rychwałd, Rzuchowa, Szczepanowice, Świebodzin,
 *   Woźniczna,
 * — KOLEJ: CZYNNA STACJA „ŁOWCZÓWEK PLEŚNA”, km 10,586 linii nr 96
 *   Tarnów–Leluchów. Ruch pasażerski DZIAŁA — stacja figuruje
 *   w Portalu Pasażera PKP PLK, w koleo.pl (relacje do Tarnowa
 *   i Tarnowa Mościc) oraz w przyjazdy.pl. Przewoźnik: Polregio,
 *   linia Tarnów–Nowy Sącz–Krynica-Zdrój. Odcinek Tarnów–Stróże
 *   modernizowany przez PKP PLK ze środków RPO, koszt
 *   58 763 612,34 zł. ⚠️ DOKŁADNA LICZBA PAR POCIĄGÓW
 *   NIEPOTWIERDZONA. ⚠️ NAZWA STACJI JEST DWUCZŁONOWA —
 *   „Łowczówek Pleśna”, nie rozdzielać,
 * — AUTOBUSY (plesna.pl): Koleje Małopolskie obsługują trzy linie —
 *   A31 Szczepanowice–Świebodzin (przez Błonie, Zgłobice, Koszyce
 *   Wielkie, Tarnów, Tarnowiec, Nowodworze, Radlną), A35
 *   Lichwin–Jodłówka-Wałki (przez Rychwałd, Pleśną, Rzuchową,
 *   Koszyce, Tarnów, Wolę Rzędzińską), A55 Wytrzyszczka–Tarnów
 *   (przez Czchów, Zakliczyn, Janowice, Lubinkę, Koszyce Wielkie).
 *   Przewoźnicy prywatni: Chran-Stan, TRANSPOT, FTU Magdalena Jakubas,
 * — HISTORIA (plesna.pl): PLEŚNA pierwsze zapiski 1236 (budowa
 *   pierwszego kościoła), w XIV w. w dokumentach jako „de Plessima”;
 *   JANOWICE najstarsza wzmianka 1347, prawa lokacyjne niemieckie,
 *   pierwsi właściciele Janowscy; SZCZEPANOWICE osada z XIV w. jako
 *   WOLA PELCZOWSKA, parafia ok. 1340; RYCHWAŁD 1508, własność
 *   Klemensa z Łowczowa; LICHWIN w XV w. w parafii Opatkowice,
 *   od 1558 własność Stadnickich przez cztery pokolenia; RZUCHOWA
 *   historycznie „Zuchowa”, w 1906 Leopold Dietl sprzedał majątek
 *   spółce żydowskiej; GMINA ZBIOROWA POWSTAŁA W 1935 R., obejmowała
 *   12 sołectw; pierwszy wójt BRONISŁAW KUBICZ, legionista, kawaler
 *   Virtuti Militari; SIEDZIBĄ GMINY BYŁ WTEDY BUDYNEK MIECZYSŁAWA
 *   BASZCZOWSKIEGO WE WSI ŁOWCZÓWEK,
 * — CMENTARZ WOJENNY NR 171 W ŁOWCZÓWKU: bitwa 22–25 GRUDNIA 1914
 *   z udziałem I Brygady Legionów Polskich pod ppłk. KAZIMIERZEM
 *   SOSNKOWSKIM; dodatkowe walki na początku maja 1915. Rejestr grobów
 *   wojennych Małopolskiego UW (obiekt 849): 591 POCHOWANYCH —
 *   270 armii austro-węgierskiej, 82 Legionów Polskich, 239 armii
 *   rosyjskiej; znanych 156 nazwisk. ⚠️ Strona gminy podaje inne
 *   liczby (513 żołnierzy) — UŻYĆ LICZBY Z REJESTRU URZĘDOWEGO
 *   i to zaznaczyć. Cmentarz na wzgórzu Kopaliny, 398 m n.p.m.;
 *   projektanci Siegfried Haller i Heinrich Scholz, ukończenie 1917.
 *   W 1984 r. pochowano tu gen. Gustawa Gryfa-Łowczowskiego,
 *   uczestnika tej bitwy. COROCZNIE W PIERWSZĄ NIEDZIELĘ PRZED
 *   11 LISTOPADA odbywa się „Zlot Niepodległościowy”.
 *   ⚠️⚠️ OŚ CMENTARNA NALEŻY DO ŁUŻNEJ I MOSZCZENICY — tu WZMIANKA,
 * — KGW „PEŁNA CHATA”: stowarzyszenie z gminy Pleśna prowadzące ofertę
 *   cateringową opartą na kuchni regionalnej (powiattarnowski.pl).
 *   W ofercie: PIEROGI Z FASOLĄ PIĘKNY JAŚ Z DOLINY DUNAJCA (ChNP),
 *   pierogi ze ŚLIWKĄ SUSKĄ SECHLOŃSKĄ (ChOG), prozioki, MASŁO
 *   RZUCHOWSKIE (Rzuchowa to sołectwo tej gminy), ogórki kiszone,
 *   ciasto drożdżowe z konfiturą z płatków róży, kluski wojnickie,
 *   smalec wiejski, sok malinowy zakliczyński, pasztety wegetariańskie.
 *   ⚠️ „Masło rzuchowskie” i „prozioki” JAKO FORMALNE WPISY na Listę
 *   Produktów Tradycyjnych — NIEPOTWIERDZONE. To oferta cateringowa,
 *   nie rejestr,
 * — FASOLA „PIĘKNY JAŚ” Z DOLINY DUNAJCA — ChNP, rejestracja
 *   27 października 2011; obszar obejmuje m.in. gminę PLEŚNA,
 * — ADRES: Pleśna 240, 33-171 Pleśna; współrzędne
 *   49,92286 / 20,94459. Gmina podaje własną powierzchnię 84,9 km².
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — WODY JAKO ZAGROŻENIA I GOSPODARKI WODNEJ. To oś SZCZUROWEJ.
 *   Tu rzeki są granicami i krajobrazem,
 * — CMENTARZY WOJENNYCH JAKO OSI. To oś ŁUŻNEJ i MOSZCZENICY.
 *   Łowczówek — wzmianka z konkretnymi liczbami z rejestru,
 * — DOJAZDÓW DO TARNOWA JAKO OSI. To oś WOJNICZA,
 * — WZROSTU LUDNOŚCI. +4,1% i saldo zero — użyte jako KONTRAST
 *   w treści, nie jako oś,
 * — POWIERZCHNI PARKU KRAJOBRAZOWEGO PASMA BRZANKI I JEGO UDZIAŁU
 *   W GMINIE. NIEPOTWIERDZONE — serwis ZPKWM zablokował pobranie.
 *   NIE PODAWAĆ LICZB,
 * — LICZBY PAR POCIĄGÓW na stacji Łowczówek Pleśna. Niepotwierdzona,
 * — WPISÓW NA LISTĘ PRODUKTÓW TRADYCYJNYCH z tej gminy. Nie
 *   potwierdzono żadnego. Masło rzuchowskie i prozioki figurują
 *   wyłącznie w ofercie cateringowej KGW,
 * — BEZROBOCIA I WYNAGRODZEŃ. 6 688,26 zł to dana POWIATOWA.
 *
 * PUŁAPKI:
 * — STACJA NAZYWA SIĘ „ŁOWCZÓWEK PLEŚNA” — jedna nazwa dwuczłonowa,
 * — ŁOWCZÓWEK (tu, z cmentarzem legionistów) to nie ŁOWCZÓW
 *   (sołectwo gminy Tuchów). Bitwa z 1914 r. nosi nazwę od Łowczówka,
 * — LICZBY POCHOWANYCH: rejestr urzędowy 591, strona gminy 513.
 *   Użyta liczba z rejestru,
 * — ŚLIWKA SUSKA SECHLOŃSKA i SOK MALINOWY ZAKLICZYŃSKI w ofercie
 *   KGW pochodzą spoza tej gminy — nie przypisywać ich Pleśnej.
 */

export const PLESNA: CityContent = {
  slug: "plesna",
  h1: "Thermomix Pleśna – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Pleśna — prezentacja i cena",
  seoDescription:
    "Thermomix w gminie Pleśna: bezpłatna prezentacja TM7 u Ciebie w kuchni, cena i raty 0%. Dojazd do wszystkich jedenastu sołectw bez dopłat. Tel. 517 185 691.",
  ogTitle: "Thermomix Pleśna — zobacz TM7 na żywo u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w gminie Pleśna. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do Pleśnej, Rzuchowej, Szczepanowic, Lichwina i pozostałych sołectw gminy przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje.",

  highlights: highlightyStandardowe("wszystkie jedenaście sołectw, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption:
      "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Pleśnej – jak wygląda prezentacja?",
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
      heading: "Gmina między dwiema rzekami",
      paragraphs: [
        "Zachodnią granicą gminy Pleśna jest Dunajec. Część północno-wschodnią przecina Biała Tarnowska. Między nimi teren podnosi się z nizin opadających ku Wiśle na próg Pogórza Ciężkowickiego — i to właśnie ta granica krajobrazowa, a nie odległość do Tarnowa, tłumaczy, jak ta gmina wygląda.",
        "Nad rzekami rosną lasy łęgowe, jesionowo-wiązowe, wyżej buczyny. Żyje tu około pięćdziesięciu pięciu gatunków ptaków, są bobry europejskie i nietoperze.",
        "Ale najciekawsze są dwie rzeczy z kamienia. W Lichwinie znaleźć można skamieniałe pnie drzew, a gdzie indziej w gminie leży piaskowcowy głaz nazywany Diablim Kamieniem. Żadna inna gmina w pierścieniu wokół Tarnowa nie ma takich osobliwości.",
        "Pleśna wyróżnia się też liczbą, która na pierwszy rzut oka wygląda nieciekawie, a przy bliższym spojrzeniu mówi wiele. Od dwa tysiące drugiego roku gmina urosła o cztery procent, podczas gdy sąsiednia gmina Tarnów o dwadzieścia jeden, a Lisia Góra o osiemnaście. Saldo migracji w dwa tysiące dwudziestym czwartym wyniosło dokładnie zero: tyle samo osób się wprowadziło, ile wyprowadziło.",
        "To nie jest gmina, do której się masowo przeprowadza. To gmina, w której się mieszka — często w tych samych domach co dziadkowie.",
        "Ma za to jedną przewagę praktyczną nad wszystkimi sąsiadami z pierścienia: czynną stację kolejową. Łowczówek Pleśna leży na dziesiątym kilometrze linii numer dziewięćdziesiąt sześć z Tarnowa do Leluchowa; kursują stamtąd pociągi Polregio w stronę Tarnowa oraz Nowego Sącza i Krynicy. Odcinek Tarnów–Stróże był modernizowany za blisko pięćdziesiąt dziewięć milionów złotych.",
        "Historia poszczególnych wsi jest tu bardzo nierówna. Pleśna pojawia się w zapiskach w tysiąc dwieście trzydziestym szóstym roku, przy budowie pierwszego kościoła, a w czternastowiecznych dokumentach występuje jako de Plessima. Janowice wzmiankowano w tysiąc trzysta czterdziestym siódmym, Rychwałd dopiero w tysiąc pięćset ósmym. Szczepanowice nazywały się pierwotnie Wolą Pelczowską.",
        "Gminę zbiorową utworzono w tysiąc dziewięćset trzydziestym piątym roku; pierwszym wójtem był Bronisław Kubicz, legionista i kawaler Virtuti Militari, a siedziba mieściła się wtedy w budynku prywatnym we wsi Łowczówek.",
        "Ta sama wieś ma zresztą własne miejsce w historii. Między dwudziestym drugim a dwudziestym piątym grudnia tysiąc dziewięćset czternastego roku rozegrała się pod nią bitwa z udziałem Pierwszej Brygady Legionów Polskich pod dowództwem podpułkownika Kazimierza Sosnkowskiego. Na wzgórzu Kopaliny leży cmentarz wojenny numer sto siedemdziesiąt jeden, gdzie według rejestru grobów wojennych spoczywa pięciuset dziewięćdziesięciu jeden żołnierzy trzech armii; znane jest sto pięćdziesiąt sześć nazwisk. Co roku, w pierwszą niedzielę przed jedenastym listopada, odbywa się tam Zlot Niepodległościowy.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w gminie Pleśna?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Podaj sołectwo — jest ich jedenaście, a gmina rozciąga się od doliny Dunajca po próg pogórza. Dąbrówka Szczepanowska i Lichwin leżą wyżej, Rzuchowa i Świebodzin bliżej nizin; trasy wyglądają inaczej, choć koszt jest ten sam, czyli żaden.",
        "Jedno rozróżnienie, bo bywa mylące: Łowczówek z cmentarzem legionistów leży w tej gminie, a Łowczów to sołectwo sąsiedniego Tuchowa. Nazwy różnią się dwiema literami.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w gminie Pleśna"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Trzy pokolenia przy jednym stole",
      paragraphs: [
        "W gminie, która przez dwadzieścia lat urosła o cztery procent i ma zerowe saldo migracji, dom rzadko jest domem jednego pokolenia. Częściej mieszkają w nim rodzice, dzieci i babcia — czasem w jednym budynku, czasem w dwóch obok siebie.",
        "Gotowanie dla trzech pokoleń naraz ma swoje kłopoty i żaden z nich nie polega na braku przepisów. Dziecko chce inaczej niż dorosły, babcia często musi mniej soli albo miękciej, a nikomu nie chce się robić trzech obiadów.",
        "Pierwsza rzecz, która to ułatwia, jest bardzo prosta: gotowanie na parze piętrowo. Na dole zupa albo ziemniaki, wyżej warzywa lub ryba — jedno danie, dwie konsystencje, wszystko w jednym cyklu. Dla kogoś, kto ma kłopot z gryzieniem, warzywa gotowane na parze są miękkie bez rozgotowania w wodzie.",
        "Druga to kontrola soli. Kiedy sos, zupa i pasta powstają w domu, wiadomo dokładnie, ile jej w nich jest — a przy nadciśnieniu, które w starszym pokoleniu jest częste, to konkretna różnica.",
        "Trzecia dotyczy najmłodszych. Ta sama zupa, którą je reszta domu, zmiksowana i bez przypraw, jest posiłkiem dla rocznego dziecka. Nie trzeba gotować osobno — wystarczy odłożyć porcję przed doprawieniem.",
        "Czwarta jest o pamięci. W wielu tutejszych domach są przepisy, których nikt nie zapisał, bo babcia robiła je na oko. Wspólne przygotowanie takiego dania z odmierzaniem i zapisaniem gramatury to sposób, żeby nie przepadły — i jedna z tych rzeczy, które ludzie robią po zakupie najczęściej.",
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
    heading: "Pleśna i gotowanie — Pełna Chata, fasola z Dunajca i masło rzuchowskie",
    paragraphs: [
      "Ta gmina ma coś, czego nie mają sąsiedzi: koło gospodyń, które prowadzi regularną ofertę cateringową opartą na kuchni regionalnej. Stowarzyszenie nazywa się Pełna Chata, a jego menu jest właściwie spisem tego, co się w tej okolicy jada.",
      "Są w nim pierogi z fasolą Piękny Jaś z doliny Dunajca — a Dunajec jest zachodnią granicą gminy, więc to składnik z sąsiedztwa, nie zapożyczony. Fasola ma Chronioną Nazwę Pochodzenia od dwudziestego siódmego października dwa tysiące jedenastego roku, a obszar chroniony obejmuje między innymi Pleśną. Są też pierogi ze śliwką suską sechlońską, ogórki kiszone, prozioki, smalec wiejski, ciasto drożdżowe z konfiturą z płatków róży i kluski wojnickie.",
      "Osobno w tym menu figuruje masło rzuchowskie — Rzuchowa jest jednym z sołectw tej gminy. Uczciwie zaznaczę, że ani masła rzuchowskiego, ani proziaków nie znalazłam na ministerialnej Liście Produktów Tradycyjnych; to nazwy z oferty koła gospodyń, a nie wpisy do rejestru.",
      "Reszta wynika z geografii. Gmina leży między Dunajcem a Białą Tarnowską, na progu Pogórza Ciężkowickiego, więc kuchnia jest tu przejściowa: trochę nizinna, trochę pogórzańska. Ziemniaki, kapusta, zupy, kluski, ciasto drożdżowe, przetwory z ogrodu.",
      "Dla urządzenia najsensowniejsze jest tu gotowanie na parze piętrowo — jedno danie w dwóch konsystencjach, dla dziecka i dla starszej osoby naraz — oraz zupy i pasty, w których wiadomo, ile jest soli. Czego nie zrobi, mówię wprost: nie ulepi pierogów i nie zastąpi wprawy. Zabiera tę część roboty, która jest wyłącznie czasem.",
    ],
  },

  districtsHeading: "Do których sołectw gminy Pleśna dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich jedenastu, bez żadnej dopłaty za odległość. Gmina liczy blisko dwanaście tysięcy mieszkańców na osiemdziesięciu trzech kilometrach kwadratowych.",
    "Sołectwa to: Pleśna, Rzuchowa, Szczepanowice, Lichwin, Janowice, Lubinka, Łowczówek, Rychwałd, Świebodzin, Woźniczna i Dąbrówka Szczepanowska.",
    "Zachodnią granicą gminy jest Dunajec, a część północno-wschodnią przecina Biała Tarnowska. Teren to strefa przejściowa między Pogórzem Ciężkowickim a nizinami opadającymi ku Wiśle.",
    "W Lichwinie znajdują się skamieniałe pnie drzew, a w gminie leży też piaskowcowy głaz zwany Diablim Kamieniem. Nad rzekami rosną lasy łęgowe jesionowo-wiązowe, wyżej buczyny; żyje tu około pięćdziesięciu pięciu gatunków ptaków i bobry europejskie.",
    "W Łowczówku, na wzgórzu Kopaliny, leży cmentarz wojenny numer sto siedemdziesiąt jeden z bitwy stoczonej w Boże Narodzenie tysiąc dziewięćset czternastego roku przez Pierwszą Brygadę Legionów. Według rejestru grobów wojennych spoczywa tam pięciuset dziewięćdziesięciu jeden żołnierzy trzech armii. Co roku, w pierwszą niedzielę przed jedenastym listopada, odbywa się tam Zlot Niepodległościowy.",
    "Dojazd: w gminie działa czynna stacja kolejowa Łowczówek Pleśna na linii numer dziewięćdziesiąt sześć z Tarnowa do Leluchowa, z pociągami Polregio w stronę Tarnowa, Nowego Sącza i Krynicy. Kursują też autobusy aglomeracyjne Kolei Małopolskich, między innymi linie A trzydzieści jeden, A trzydzieści pięć i A pięćdziesiąt pięć.",
  ],
  districts: [
    "Pleśna",
    "Rzuchowa",
    "Szczepanowice",
    "Lichwin",
    "Janowice",
    "Lubinka",
    "Łowczówek",
    "Rychwałd",
    "Świebodzin",
    "Woźniczna",
    "Dąbrówka Szczepanowska",
  ],

  nearbyHeading: "Tuchów, Gromnik i Zakliczyn też są na mojej trasie",
  nearbyParagraphs: [
    "Gmina sąsiaduje z Tuchowem, Gromnikiem, Zakliczynem, Wojniczem i gminą wiejską Tarnów. Dojeżdżam do wszystkich gmin powiatu tarnowskiego bez doliczania kosztu dojazdu.",
    "Jedno rozróżnienie, bo różnica to dwie litery: Łowczówek z cmentarzem legionistów leży w tej gminie, a Łowczów jest sołectwem sąsiedniego Tuchowa. Bitwa z grudnia tysiąc dziewięćset czternastego roku nosi nazwę od Łowczówka.",
  ],
  nearbyTowns: [
    "Tuchów",
    "Gromnik",
    "Zakliczyn",
    "Wojnicz",
    "Skrzyszów",
    "Tarnów",
  ],

  about: blokOMnie("do gminy Pleśna", "w powiecie tarnowskim"),

  faq: [
    {
      question: "Mieszkam w Rzuchowej albo w Lichwinie. Dojedziesz?",
      answer:
        "Dojadę i nie doliczę za to ani złotówki. Wszystkie jedenaście sołectw traktuję dokładnie tak samo. Przy umawianiu podaj nazwę wsi — potrzebuję jej wyłącznie do zaplanowania trasy, bo gmina rozciąga się od doliny Dunajca po próg pogórza.",
    },
    ...faqWspolne("w gminie Pleśna"),
    {
      question: "Mieszkamy pod jednym dachem w trzech pokoleniach. Czy to ma sens?",
      answer:
        "Ma i to jest chyba najlepszy argument w takim domu. Najbardziej pomaga gotowanie na parze piętrowo: na dole zupa albo ziemniaki, wyżej warzywa lub ryba — jedno danie w dwóch konsystencjach, miękkiej dla kogoś, kto ma kłopot z gryzieniem, i normalnej dla reszty. Druga rzecz to sól: kiedy zupa i sos powstają w domu, wiadomo dokładnie, ile jej w nich jest, a przy nadciśnieniu to konkret. Trzecia dotyczy najmłodszych — tę samą zupę wystarczy odłożyć przed doprawieniem i zmiksować. Nie trzeba gotować trzy razy.",
    },
  ],

  geo: { lat: 49.92286, lng: 20.94459 },
};
