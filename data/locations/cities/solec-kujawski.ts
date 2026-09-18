import type { CityContent } from "../city-content";
import {
  REGION_KUJAWSKO_POMORSKIE,
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
 * SOLEC KUJAWSKI — powiat bydgoski, woj. kujawsko-pomorskie.
 * MIASTO 15 182 (GUS 31.12.2024), 18,7 km², ~813 os./km².
 * Gmina miejsko-wiejska: 16 304 osoby, 175,1 km², 19 wsi.
 * ⚠ LESISTOŚĆ 74,0% — lasy zajmują 12 961 ha.
 *   Podmiotów w rejestrze 1 606, z czego rolniczych zaledwie
 *   30. TO GMINA LEŚNO-PRZEMYSŁOWA, NIE ROLNICZA.
 *
 * ⚠⚠ HOMONIMY — REKORDOWE: w 1924 r. dodano do nazwy człon
 *   „Kujawski" DLA ODRÓŻNIENIA OD DWUNASTU INNYCH POLSKICH
 *   MIEJSCOWOŚCI O NAZWIE SOLEC. Najgroźniejsze:
 *   SOLEC NAD WISŁĄ (mazowieckie), SOLEC-ZDRÓJ
 *   (świętokrzyskie) i Solec w Warszawie.
 *   ⚠ ZAWSZE PEŁNA NAZWA. FAQ TO ROZRÓŻNIA.
 *   ⚠⚠ SOLEC KUJAWSKI NIE JEST UZDROWISKIEM — nie mylić
 *   z Solcem-Zdrojem przy hasłach o soli i wodach
 *   mineralnych. TWARDA GRANICA.
 * ⚠⚠ NAZWA MIESZKAŃCA JEST WSPÓLNA I NIEROZRÓŻNIAJĄCA:
 *   „solczanin" oznacza mieszkańca Solca Kujawskiego, Solca
 *   nad Wisłą i innych Solców. NIE UŻYWAM JEJ.
 *   Odmiana: „do Solca Kujawskiego", „w Solcu Kujawskim",
 *   przymiotnik „solecki".
 *
 * HISTORIA — FAKTY UŻYTE:
 * — ⚠ NAZWA — DWIE KONKURENCYJNE ETYMOLOGIE, PODAJĘ OBIE:
 *   od handlu SOLĄ albo od staropolskiego „SÓŁ / SOŁEK",
 *   czyli SPICHLERZA — miejsca, gdzie składano daniny
 *   zbożowe księciu kujawskiemu. Muzeum Solca podaje obie;
 *   strona miasta preferuje wersję spichlerzową.
 *   NIE ROZSTRZYGAM,
 * — 1263 R. — pierwsza wzmianka o Solcu jako PORCIE
 *   WIŚLANYM; miasto dysponowało PRAWEM PRZEWOZU WODNEGO,
 *   dającym dochody z przeprawy,
 * — 1325 R. — prawa miejskie od księcia Przemysła
 *   inowrocławskiego; przywilej gwarantował PRAWO
 *   RYBOŁÓWSTWA i dostęp do WYSP WIŚLANYCH,
 * — XIV–XV w. — ośrodek SZKUTNICZY I HANDLU ZBOŻEM,
 *   konkurujący z Toruniem; na początku XV w. miasto miało
 *   własne warsztaty szkutnicze,
 * — XVIII w. — Wisła tak zmieniła bieg, że statki nie mogły
 *   przybijać do brzegu. ⚠ PODAJĘ JAKO SUCHY FAKT
 *   GEOGRAFICZNY, BEZ SŁOWA „UPADEK",
 * — ⚠⚠ PODSTAWA KĄTA — SPIS RZEMIEŚLNIKÓW OKOŁO 1580 R.:
 *   SZEŚCIU PIEKARZY, czterech szewców, trzech krawców,
 *   dwóch cieśli, dwóch powoźników, dwóch garncarzy,
 *   jeden kowal, jeden bednarz, jeden kołodziej
 *   i czternastu komorników.
 *   ⚠ PIEKARZE BYLI NAJLICZNIEJSZYM RZEMIOSŁEM W MIEŚCIE.
 * — DREWNO: 1866 r. pierwszy tartak parowy w okolicy;
 *   na początku XX w. SZEŚĆ TARTAKÓW i DWA ZAKŁADY
 *   WIKLINIARSKIE; Wisłą spływały tratwy z surowcem.
 *   ⚠⚠ PRZEMYSŁ DRZEWNY OPISUJĘ WYŁĄCZNIE JAKO TARTAKI,
 *   WIKLINIARSTWO I SPŁAW. ZERO WZMIANKI O NASYCALNI
 *   PODKŁADÓW KOLEJOWYCH — patrz sekcja etyczna.
 *   TWARDA GRANICA.
 * — 1924 R. — dodanie członu „Kujawski".
 *
 * DZIŚ: silny przemysł, wbrew etykiecie sypialni Bydgoszczy
 * (miasto leży około 15 km na wschód od niej). Działają tu
 * duży producent materiałów budowlanych (od 1954 r.),
 * jeden z największych w Polsce zakładów drobiarskich
 * (od 1987 r.), dystrybutor części samochodowych i firma
 * instalacyjna; są dwa parki przemysłowe o łącznej
 * powierzchni siedemdziesięciu hektarów, z których pierwszy
 * działa od 2004 r. i mieści ponad trzydzieści firm.
 * ⚠ NAZW FIRM NIE PODAJĘ. TWARDA GRANICA.
 * Obiekty: Puszcza Bydgoska, wydmy śródlądowe, Wisła,
 * Muzeum Solca im. Księcia Przemysła, JuraPark.
 *
 * ⚠ LISTA PRODUKTÓW TRADYCYJNYCH: nie ustalono żadnego wpisu
 *   związanego z gminą Solec Kujawski. NIE WYMIENIAM
 *   ŻADNEGO PRODUKTU.
 * ⚠ OSIEDLA — POTWIERDZONE DWIE NAZWY: OSIEDLE TORUŃSKIE
 *   i OSIEDLE LEŚNE. Pełnego wykazu nie ustalono, więc
 *   districts PUSTE, ale te dwie nazwy MOGĘ wymienić
 *   w tekście o dojazdach.
 *
 * KĄT: WSPÓLNY PIEC — najdroższa rzecz, jaką się włącza
 * w kuchni.
 * Kąt od spisu z około 1580 r., w którym piekarze byli
 * najliczniejszym rzemiosłem Solca: sześciu na cały mały
 * port. Piekarz był potrzebny częściej niż kowal, bo chleb
 * robi się codziennie — a piec opalało się drewnem,
 * które kosztowało.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że w spisie rzemieślników Solca z około 1580 r. było
 *   sześciu piekarzy, czterech szewców, trzech krawców,
 *   dwóch cieśli, dwóch garncarzy i po jednym kowalu,
 *   bednarzu i kołodzieju — PIEKARZE BYLI NAJLICZNIEJSI,
 * — DLACZEGO: bo chleb robi się codziennie, a buty raz
 *   na kilka lat. Liczba rzemieślników danej branży mówi
 *   wprost, jak często czegoś potrzeba,
 * — ŻE PIEKARZ MIAŁ TEŻ DRUGI POWÓD ISTNIENIA: PIEC.
 *   Rozgrzanie pieca kosztowało drewno, więc opłacało się
 *   go rozgrzewać rzadko, a wykorzystywać do końca —
 *   i dlatego piec bywał wspólny,
 * — ⚠⚠ ŻE DOKŁADNIE TA SAMA EKONOMIA OBOWIĄZUJE DZIŚ
 *   W KAŻDEJ KUCHNI, tylko nikt jej tak nie liczy:
 *   PIEKARNIK JEST NAJDROŻSZĄ RZECZĄ, JAKĄ SIĘ WŁĄCZA.
 *   TO JEST RDZEŃ TEKSTU,
 * — ŻE WYNIKA Z TEGO JEDNA PROSTA ZASADA: ROZGRZANY
 *   PIEKARNIK WARTO ZAPEŁNIĆ. Skoro i tak grzeje, niech
 *   grzeje coś więcej niż jedną blachę,
 * — CO SIĘ DA UPIEC OBOK SIEBIE: warzywa korzeniowe
 *   na drugi dzień, pieczeń i warzywa razem, dwie blachy
 *   ciastek, chleb i coś jeszcze
 *   ⚠ BEZ PODAWANIA TEMPERATUR — mówię o ZASADZIE,
 *   nie o instrukcji,
 * — ⚠ ŻE NIE WSZYSTKO DA SIĘ ŁĄCZYĆ: rzeczy o bardzo
 *   różnych wymaganiach nie wejdą razem, a mocno pachnące
 *   udzielą zapachu reszcie. MÓWIĘ TO WPROST,
 * — ŻE CIEPŁO PO WYŁĄCZENIU TEŻ JEST ZA DARMO — piekarnik
 *   stygnie długo i to jest dobry moment na podsuszenie
 *   czegoś albo dogrzanie ⚠ ODSYŁAM DO STRONY O CIEPLE,
 *   KTÓRE ZOSTAJE, NIE ROZWIJAM,
 * — ŻE DRZWI OTWIERANE CO CHWILA KOSZTUJĄ NAJWIĘCEJ,
 *   bo za każdym razem ucieka to, za co się zapłaciło,
 * — ⚠⚠ UCZCIWIE O SPRZĘCIE — I TO JEST GŁÓWNY POWÓD,
 *   DLA KTÓREGO PISZĘ TĘ STRONĘ: THERMOMIX NIE JEST
 *   PIEKARNIKIEM I NIE ZASTĄPI GO. Ale przy daniach,
 *   które da się ugotować zamiast upiec, bywa tańszy
 *   w użyciu, bo grzeje mały, zamknięty wsad zamiast całej
 *   komory. ⚠ NIE PODAJĘ ŻADNYCH LICZB ANI WYLICZEŃ
 *   OSZCZĘDNOŚCI — to byłoby zmyślanie. Mówię tylko,
 *   że warto samemu porównać, co się w domu włącza
 *   i po co. TWARDA GRANICA.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ŻADNYCH WYLICZEŃ OSZCZĘDNOŚCI W ZŁOTÓWKACH,
 *   ŻADNYCH KILOWATOGODZIN, ŻADNYCH PORÓWNAŃ KOSZTU
 *   ENERGII. Zasada serwisu: zero liczb o oszczędnościach.
 *   TWARDA GRANICA — NAJWAŻNIEJSZA NA TEJ STRONIE.
 * — ⚠⚠ ŻADNYCH PORAD ELEKTRYCZNYCH I O INSTALACJI.
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR PIECZENIA.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠⚠ ZERO NASYCALNI PODKŁADÓW KOLEJOWYCH (1879–2001).
 *   Zakład zostawił SKAŻONY TEREN po impregnatach smołowych,
 *   rekultywowany przez lata ze środków wojewódzkiego
 *   funduszu ochrony środowiska. Przy stronie o gotowaniu
 *   to skojarzenie jest wykluczone.
 *   PRZEMYSŁ DRZEWNY OPISUJĘ WYŁĄCZNIE JAKO TARTAKI,
 *   WIKLINIARSTWO I SPŁAW TRATW. TWARDA GRANICA.
 * — ZERO tematów wojennych i wyznaniowych.
 * — ZERO słowa „upadek" przy XVIII-wiecznej zmianie biegu
 *   Wisły.
 * — ZERO nazw firm i ich historii właścicielskiej.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH — OBOWIĄZKOWE:
 * — „BRAK PIEKARNIKA" (Zdzieszowice) dotyczy SYTUACJI,
 *   W KTÓREJ PIEKARNIKA NIE MA W OGÓLE, i tego, czego
 *   urządzenie nie upiecze.
 * — „NIERÓWNE PIECZENIE" (Zielonka) dotyczy TEGO, ŻE
 *   PIEKARNIK PIECZE NIERÓWNO.
 * — „PIZZA W DOMOWYM PIEKARNIKU" (Jasień) dotyczy JEDNEGO
 *   DANIA.
 * — „CIEPŁO, KTÓRE ZOSTAJE" (Błaszki) dotyczy DOCHODZENIA
 *   DANIA PO WYŁĄCZENIU — czyli ciepła W JEDZENIU.
 *   ⚠ Odsyłam tam wprost przy akapicie o stygnięciu.
 * — „BEZWŁADNOŚĆ CIEPLNA" (Celestynów) dotyczy MASY
 *   NACZYNIA.
 * — „FORMA" (Żelechów) dotyczy KSZTAŁTU NACZYNIA.
 * TUTAJ chodzi o EKONOMIĘ WŁĄCZANIA PIEKARNIKA i o to,
 * żeby rozgrzany zapełnić.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE ROZSTRZYGAM etymologii nazwy.
 * — NIE PISZĘ o nasycalni ani o skażeniu terenu.
 * — NIE PODAJĘ nazw firm.
 * — NIE PODAJĘ żadnych liczb o kosztach energii.
 * — NIE UŻYWAM nazwy mieszkańca.
 * — NIE MYLĘ Solca Kujawskiego z Solcem nad Wisłą
 *   ani z Solcem-Zdrojem; NIE SUGERUJĘ, że to uzdrowisko.
 * — NIE WYMIENIAM żadnego produktu tradycyjnego.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Solec Kujawski liczy 15 182 mieszkańców (GUS,
 *   31.12.2024) na 18,7 km², a cała gmina miejsko-wiejska
 *   16 304 osoby na 175,1 km² i obejmuje dziewiętnaście wsi;
 *   lasy zajmują tu siedemdziesiąt cztery procent
 *   powierzchni gminy, blisko trzynaście tysięcy hektarów,
 * — nazwę wywodzi się dwojako: od handlu solą albo
 *   od staropolskiego „sół" czy „sołek", oznaczającego
 *   spichlerz — miejsce, w którym składano daniny zbożowe
 *   księciu kujawskiemu,
 * — pierwsza wzmianka z 1263 roku mówi o Solcu jako
 *   o porcie wiślanym; miasto miało prawo przewozu wodnego,
 *   dające dochody z przeprawy, a prawa miejskie otrzymało
 *   w 1325 roku od księcia Przemysła inowrocławskiego,
 *   wraz z prawem rybołówstwa i dostępem do wysp wiślanych,
 * — w XIV i XV wieku Solec był ośrodkiem szkutniczym
 *   i miejscem handlu zbożem, konkurującym z Toruniem,
 *   a na początku XV wieku miał własne warsztaty szkutnicze;
 *   w XVIII wieku Wisła zmieniła bieg na tyle, że statki
 *   przestały przybijać do brzegu,
 * — spis rzemieślników z około 1580 roku wymienia sześciu
 *   piekarzy, czterech szewców, trzech krawców, dwóch
 *   cieśli, dwóch powoźników, dwóch garncarzy oraz po jednym
 *   kowalu, bednarzu i kołodzieju — piekarze byli tu
 *   najliczniejszym rzemiosłem,
 * — w 1866 roku powstał w okolicy pierwszy tartak parowy,
 *   a na początku XX wieku działało tu sześć tartaków i dwa
 *   zakłady wikliniarskie; Wisłą spływały tratwy z surowcem,
 * — w 1924 roku dodano do nazwy człon „Kujawski",
 *   dla odróżnienia od dwunastu innych polskich
 *   miejscowości o nazwie Solec,
 * — dziś w mieście działa silny przemysł — produkcja
 *   materiałów budowlanych od 1954 roku, zakład drobiarski
 *   od 1987, dystrybucja części samochodowych i instalacje —
 *   a dwa parki przemysłowe zajmują łącznie siedemdziesiąt
 *   hektarów, przy czym pierwszy z nich działa od 2004 roku
 *   i mieści ponad trzydzieści firm; Bydgoszcz leży około
 *   piętnastu kilometrów na zachód,
 * — w gminie są Puszcza Bydgoska, wydmy śródlądowe i Wisła,
 *   a w mieście Muzeum Solca imienia Księcia Przemysła.
 */
export const SOLEC_KUJAWSKI: CityContent = {
  slug: "solec-kujawski",
  h1: "Thermomix Solec Kujawski – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Solec Kujawski — przedstawiciel i prezentacja",
  seoDescription:
    "Thermomix w Solcu Kujawskim: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Solec Kujawski — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Solcu Kujawskim. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Solca Kujawskiego z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wsi w gminie.",

  highlights: highlightyStandardowe("Solec Kujawski"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Skoro piekarnik i tak grzeje, niech grzeje coś więcej niż jedną blachę.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Solcu Kujawskim – jak wygląda prezentacja?",
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
      id: "wspolny-piec",
      heading: "Sześciu piekarzy i jeden kowal",
      paragraphs: [
        "Spis rzemieślników Solca z około 1580 roku wygląda tak: sześciu piekarzy, czterech szewców, trzech krawców, dwóch cieśli, dwóch powoźników, dwóch garncarzy, jeden kowal, jeden bednarz i jeden kołodziej.",
        "Piekarze byli najliczniejsi. Sześciu na cały mały port nad Wisłą — trzy razy więcej niż garncarzy, sześć razy więcej niż kowali.",
        "Powód jest oczywisty, kiedy się go nazwie: chleb robi się codziennie, a buty raz na kilka lat. Liczba rzemieślników danej branży mówi wprost, jak często czegoś potrzeba. To jest chyba najprostszy sposób czytania takich spisów.",
        "Ale piekarz miał jeszcze drugi powód istnienia i on interesuje mnie bardziej. Piec.",
        "Rozgrzanie pieca kosztowało drewno, a drewno kosztowało pieniądze — nawet w mieście, przez które spływały tratwy. Dlatego piec opłacało się rozgrzewać rzadko i wykorzystywać do końca. I dlatego piec bywał wspólny: jeden ogień, wiele bochenków.",
        "Dokładnie ta sama ekonomia obowiązuje dziś w każdej kuchni, tylko nikt jej tak nie liczy. Piekarnik jest najdroższą rzeczą, jaką się w kuchni włącza — grzeje dużą, pustą komorę, żeby ogrzać jedną blachę czegoś.",
        "Wniosek jest prosty i stary jak samo piekarnictwo: rozgrzany piekarnik warto zapełnić. Skoro i tak grzeje, niech grzeje coś więcej.",
        "W praktyce znaczy to tyle, że kiedy wstawiamy pieczeń, warto obok wstawić warzywa — nie na teraz, tylko na jutro. Że dwie blachy ciastek robi się tym samym kosztem co jedna. Że chleb i coś jeszcze mogą jechać razem. To nie jest oszczędzanie w brzydkim sensie; to jest po prostu niemarnowanie czegoś, za co się już zapłaciło.",
        "Z uczciwości dodam, że nie wszystko da się łączyć. Rzeczy o bardzo różnych wymaganiach nie wejdą razem, a coś mocno pachnącego udzieli zapachu reszcie — ryba i ciasto to zły pomysł, nawet na dwóch poziomach.",
        "Dwie rzeczy jeszcze, na marginesie. Ciepło po wyłączeniu też jest za darmo: piekarnik stygnie długo i to dobry moment, żeby coś podsuszyć albo dogrzać. A drzwi otwierane co chwilę kosztują najwięcej, bo za każdym razem ucieka dokładnie to, za co się zapłaciło.",
        "Teraz o sprzęcie i to jest właściwie główny powód, dla którego piszę tę stronę. Thermomix nie jest piekarnikiem i nie zastąpi go — o tym, czego nie upiecze, pisałam osobno i nie zamierzam tego zamazywać.",
        "Warto jednak wiedzieć, że przy daniach, które da się ugotować zamiast upiec, grzeje mały, zamknięty wsad, a nie całą komorę. Nie podam tu żadnych liczb ani wyliczeń, bo byłoby to zmyślanie — każda kuchnia, każdy piekarnik i każda taryfa są inne. Mówię tylko tyle: warto raz przyjrzeć się temu, co się w domu włącza i po co. Piekarze z 1580 roku mieli to policzone lepiej niż większość z nas.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Solcu Kujawskim?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli chcesz porównać, co u Was realnie robi piekarnik, a co dałoby się ugotować — powiedz to przy umawianiu. To dobra rozmowa na spotkanie.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Solcu Kujawskim"),
    sekcjaRaty("w Solcu Kujawskim"),
    {
      id: "rodzina",
      heading: "Thermomix dla soleckiej rodziny",
      paragraphs: [
        "Solec Kujawski liczy ponad piętnaście tysięcy mieszkańców na niespełna dziewiętnastu kilometrach kwadratowych, a cała gmina miejsko-wiejska ponad szesnaście tysięcy osób na stu siedemdziesięciu pięciu kilometrach i obejmuje dziewiętnaście wsi; lasy zajmują tu siedemdziesiąt cztery procent powierzchni gminy, blisko trzynaście tysięcy hektarów. Nazwę wywodzi się dwojako: od handlu solą albo od staropolskiego „sół” czy „sołek”, oznaczającego spichlerz — miejsce, w którym składano daniny zbożowe księciu kujawskiemu. Pierwsza wzmianka z 1263 roku mówi o Solcu jako o porcie wiślanym; miasto miało prawo przewozu wodnego, a prawa miejskie otrzymało w 1325 roku od księcia Przemysła inowrocławskiego, wraz z prawem rybołówstwa i dostępem do wysp wiślanych. W XIV i XV wieku był tu ośrodek szkutniczy i miejsce handlu zbożem, konkurujące z Toruniem, a w XVIII wieku Wisła zmieniła bieg na tyle, że statki przestały przybijać do brzegu. Spis rzemieślników z około 1580 roku wymienia sześciu piekarzy, czterech szewców, trzech krawców, dwóch cieśli, dwóch powoźników, dwóch garncarzy oraz po jednym kowalu, bednarzu i kołodzieju. W 1866 roku powstał w okolicy pierwszy tartak parowy, a na początku XX wieku działało tu sześć tartaków i dwa zakłady wikliniarskie; Wisłą spływały tratwy z surowcem. W 1924 roku dodano do nazwy człon „Kujawski”, dla odróżnienia od dwunastu innych polskich miejscowości o nazwie Solec. Dziś w mieście działa silny przemysł — produkcja materiałów budowlanych od 1954 roku, zakład drobiarski od 1987, dystrybucja części samochodowych i instalacje — a dwa parki przemysłowe zajmują łącznie siedemdziesiąt hektarów; Bydgoszcz leży około piętnastu kilometrów na zachód.",
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

  districtsHeading: "Do których części Solca Kujawskiego dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — w tym na Osiedle Toruńskie i Osiedle Leśne, które mają własne samorządy mieszkańców — oraz do domów przy drogach wylotowych i na skraju Puszczy Bydgoskiej. Dojeżdżam też do wsi w gminie.",
    "Przy umawianiu wystarczy podać ulicę i numer domu albo nazwę miejscowości. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Solec Kujawski też przyjadę",
  nearbyParagraphs: [
    "Bydgoszcz, Toruń, Nowa Wieś Wielka, Białe Błota, Osielsko, Wielka Nieszawka i Zławieś Wielka są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Bydgoszcz", "Toruń", "Nakło nad Notecią", "Chełmża"],

  about: blokOMnie("do Solca Kujawskiego", "w Solcu Kujawskim", REGION_KUJAWSKO_POMORSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Solca Kujawskiego bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta razem z Osiedlem Toruńskim i Osiedlem Leśnym oraz do wsi w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku: chodzi o Solec Kujawski w powiecie bydgoskim — nie o Solec nad Wisłą i nie o Solec-Zdrój, który jest uzdrowiskiem, a Solec Kujawski nim nie jest.",
    },
    ...faqWspolne("w Solcu Kujawskim"),
    {
      question: "Jak sensownie korzystać z piekarnika?",
      answer:
        "Zapełniać go, kiedy już grzeje. Piekarnik ogrzewa całą komorę, żeby ogrzać jedną blachę — więc kiedy wstawiamy pieczeń, warto obok wstawić warzywa na jutro, a dwie blachy ciastek robi się tym samym kosztem co jedna. Ciepło po wyłączeniu też jest za darmo. Najwięcej kosztuje otwieranie drzwi co chwilę.",
    },
    {
      question: "Czy wszystko można upiec razem?",
      answer:
        "Nie. Rzeczy o bardzo różnych wymaganiach nie wejdą razem, a coś mocno pachnącego udzieli zapachu reszcie — ryba i ciasto to zły pomysł nawet na dwóch poziomach. Łączy się rzeczy o podobnych wymaganiach i podobnym zapachu.",
    },
    {
      question: "Czy Thermomix zastąpi piekarnik?",
      answer:
        "Nie i nie zamierzam tego zamazywać — o tym, czego nie upiecze, pisałam osobno. Warto natomiast wiedzieć, że przy daniach, które da się ugotować zamiast upiec, grzeje mały, zamknięty wsad, a nie całą komorę. Nie podam tu żadnych wyliczeń, bo każda kuchnia i każda taryfa są inne — ale warto raz przyjrzeć się temu, co się w domu włącza i po co.",
    },
  ],

  geo: { lat: 53.083, lng: 18.233 },
};
