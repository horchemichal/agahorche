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
 * ŁUŻNA — GMINA WIEJSKA w powiecie gorlickim.
 * 8 285 mieszkańców (31.12.2024), 56,3 km², 572 podmioty REGON.
 * 6 SOŁECTW: Biesna, Bieśnik, Łużna, Mszanka, Szalowa,
 * Wola Łużańska. Wzrost ludności ok. 3% od 2002.
 *
 * OŚ STRONY: DWA NAJWYŻSZE STOPNIE OCHRONY W JEDNEJ GMINIE —
 * europejski i krajowy. Cmentarz nr 123 ze ZNAKIEM DZIEDZICTWA
 * EUROPEJSKIEGO plus kościół w Szalowej jako POMNIK HISTORII.
 * ⚠️ NIE PISAĆ „duży cmentarz wojenny” — takich są setki. Sedno
 * to STATUS PRAWNY, którego nie ma prawie nikt.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — ⭐⭐ CMENTARZ WOJENNY NR 123 ŁUŻNA-PUSTKI:
 *   ⚠️⚠️ LICZBY — POPRAWIONE. Krążą wersje 909/65/212; POTWIERDZONE
 *   (dzieje.pl/PAP oraz en.wikipedia, zgodnie): 912 AUSTRO-WĘGIERSKICH
 *   (blisko połowa Polacy), 65 NIEMIECKICH, 227 ROSYJSKICH = 1 204.
 *   GROBY: 829 pojedynczych + 46 zbiorowych = 875.
 *   POWIERZCHNIA BLISKO 3 HA — największa nekropolia wojenna dawnej
 *   Galicji. Budowa 1917–1918,
 *   ⚠️ AUTORSTWO: NIE przypisywać całości Jurkoviču. DUŠAN JURKOVIČ
 *   zaprojektował KAPLICĘ (gontynę) w 1917 r., a rzeźbiarz
 *   JAN SZCZEPKOWSKI — UKŁAD PRZESTRZENNY.
 *   GONTYNA (25 m, drewniana) SPŁONĘŁA W 1985 R., odbudowana
 *   wg oryginalnego projektu,
 * — ⭐ ZNAK DZIEDZICTWA EUROPEJSKIEGO — CZWARTY OBIEKT W POLSCE
 *   z tym znakiem, po Unii Lubelskiej, Konstytucji 3 Maja i Stoczni
 *   Gdańskiej. ⚠️ TRZY RÓŻNE DATY, WSZYSTKIE PRAWDZIWE, dotyczą
 *   różnych etapów: nominacja panelu ekspertów KE 2.12.2015;
 *   wpis na listę luty 2016 plus ceremonia w Brukseli kwiecień 2016;
 *   odsłonięcie tablicy w Łużnej kwiecień 2017.
 *   PISAĆ OPISOWO, NIE PODAWAĆ JEDNEGO „ROKU PRZYZNANIA”,
 * — RENOWACJA 2025 (program MKiDN): 182 650 zł, dofinansowanie
 *   ponad 146 000 zł,
 * — DRUGI, POMIJANY CMENTARZ: NR 120 ŁUŻNA-PODBRZEZIE —
 *   417 ŻOŁNIERZY ARMII AUSTRO-WĘGIERSKIEJ NARODOWOŚCI WĘGIERSKIEJ,
 *   polegli głównie 2.05.1915 i w dniach następnych w walkach
 *   o wzgórze Wiatrówka; pułki honwedów 9, 10, 11 i 16. Węgierskie
 *   stowarzyszenie kombatanckie „KURUC VITÉZEK” Z KISKUNHALAS
 *   ufundowało węgierskojęzyczną tablicę na bramie; konserwacja
 *   2022–2024,
 * — ⭐ SZALOWA — POMNIK HISTORII, NIE UNESCO (⚠️ BARDZO ŁATWO
 *   POMYLIĆ, bo 20 km dalej są trzy obiekty UNESCO).
 *   Kościół ŚW. MICHAŁA ARCHANIOŁA, drewniany, 1739–1756,
 *   fundatorzy: właściciel wsi KRZYSZTOF JORDAN i proboszcz
 *   WOJCIECH STEFANOWSKI. Późny barok, konstrukcja zrębowa,
 *   ⭐ UKŁAD TRÓJNAWOWY BAZYLIKOWY — IMITACJA MUROWANEJ ŚWIĄTYNI
 *   BAROKOWEJ W DREWNIE, „jeden z najcenniejszych w skali
 *   europejskiej” przykładów tego typu. Polichromia iluzjonistyczna,
 *   Grupa Ukrzyżowania na belce tęczowej.
 *   ⭐ CIEKAWOSTKA: 153 WIZERUNKI ANIOŁÓW I 7 DIABŁÓW.
 *   NA SZLAKU ARCHITEKTURY DREWNIANEJ — potwierdzone.
 *   POMNIK HISTORII: Dz.U. 2017 poz. 2251 (ogłoszone 5.12.2017),
 *   pozycja 107 na krajowej liście.
 *   ⚠️ SAMEJ DATY ROZPORZĄDZENIA PREZYDENTA NIE POTWIERDZONO —
 *   ISAP i LEX blokowane. Pisać „w dwa tysiące siedemnastym roku”,
 * — SZALOWA — HISTORIA: lokacja prawdopodobnie XIII w. na prawie
 *   niemieckim, parafia w spisach świętopietrza z 1357
 *   (forma Schalayewa). W XVI w. właściciele SZALOWSCY H. STRZEMIĘ
 *   BYLI ARIANAMI i zbudowali przy dworze zbór. SZKOŁA PRZY KOŚCIELE
 *   OD 1595. Kapela ludowa od poł. XVIII w. → orkiestra dęta;
 *   Amatorski Zespół Teatralny od 1953; Szkoła Muzyczna od 1989,
 * — KGW ŁUŻNA — I MIEJSCE w konkursie „Wypiek Regionalny Ziemi
 *   Gorlickiej” podczas Agro Gorlice 2024. To potwierdzone
 *   i konkretne,
 * — KOLEJ: linia 108 Stróże–Krościenko ze STACJAMI SZALOWA
 *   i WOLA ŁUŻAŃSKA na terenie gminy.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — NAZWANYCH DUŻYCH PRACODAWCÓW. Żadnego nie potwierdzono,
 * — WPISU NA LISTĘ PRODUKTÓW TRADYCYJNYCH. Nie potwierdzono,
 * — BEZROBOCIA I WYNAGRODZEŃ. Dane POWIATOWE (6,3%, 6 707,16 zł).
 *
 * PUŁAPKI:
 * — SZALOWA TO POMNIK HISTORII, NIE UNESCO,
 * — WILCZYSKA leżą w tej gminie — ⚠️ ale są też Wilczyska w gminie
 *   Bobowa. Nie mylić.
 *   ⚠️ SPRAWDZIĆ: research podaje 6 sołectw BEZ Wilczysk;
 *   NIE WYMIENIAĆ ICH W LIŚCIE SOŁECTW.
 */

export const LUZNA: CityContent = {
  slug: "luzna",
  h1: "Thermomix Łużna – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Łużna — prezentacja i cena",
  seoDescription:
    "Thermomix w gminie Łużna: bezpłatna prezentacja TM7 u Ciebie w kuchni, cena i raty 0%. Dojazd do wszystkich sołectw bez dopłat. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Łużna — zobacz TM7 na żywo u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w gminie Łużna. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do Łużnej, Szalowej, Woli Łużańskiej i pozostałych sołectw gminy przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje.",

  highlights: highlightyStandardowe("wszystkie sołectwa, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption:
      "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Łużnej – jak wygląda prezentacja?",
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
      heading: "Wiejska gmina obok Konstytucji 3 Maja i Stoczni Gdańskiej",
      paragraphs: [
        "Znak Dziedzictwa Europejskiego ma w Polsce zaledwie kilka obiektów. Pierwsze trzy to Unia Lubelska, Konstytucja Trzeciego Maja i Stocznia Gdańska. Czwartym jest cmentarz wojenny numer sto dwadzieścia trzy na wzgórzu Pustki w gminie Łużna.",
        "Zaznaczę od razu, jak to szło, bo krążą trzy różne daty i wszystkie są prawdziwe. Panel ekspertów Komisji Europejskiej nominował cmentarz drugiego grudnia dwa tysiące piętnastego roku, wpis na listę i uroczystość w Brukseli odbyły się w dwa tysiące szesnastym, a tablica stanęła w Łużnej rok później.",
        "Sam cmentarz jest największą nekropolią wojenną dawnej Galicji: blisko trzy hektary, osiemset dwadzieścia dziewięć grobów pojedynczych i czterdzieści sześć zbiorowych. Spoczywa tu tysiąc dwustu czterech żołnierzy — dziewięciuset dwunastu austro-węgierskich, z czego blisko połowa to Polacy, sześćdziesięciu pięciu niemieckich i dwustu dwudziestu siedmiu rosyjskich. Zginęli w bitwie gorlickiej i w walkach po niej.",
        "Autorstwo warto podać precyzyjnie, bo powszechnie się je upraszcza. Drewnianą kaplicę, zwaną gontyną, zaprojektował w tysiąc dziewięćset siedemnastym Dušan Jurkovič. Układ przestrzenny całego założenia przypisuje się natomiast rzeźbiarzowi Janowi Szczepkowskiemu. Gontyna spłonęła w tysiąc dziewięćset osiemdziesiątym piątym roku i została odbudowana według oryginalnego projektu.",
        "W tej samej gminie jest jeszcze drugi cmentarz, o którym prawie nikt nie pisze. Numer sto dwadzieścia w Podbrzeziu kryje czterystu siedemnastu żołnierzy narodowości węgierskiej — honwedów z pułków dziewiątego, dziesiątego, jedenastego i szesnastego, poległych głównie drugiego maja tysiąc dziewięćset piętnastego roku w walkach o wzgórze Wiatrówka. Węgierskie stowarzyszenie kombatanckie z Kiskunhalas ufundowało na bramie tablicę po węgiersku.",
        "I druga rzecz, przez którą ta gmina ma komplet: w Szalowej stoi kościół świętego Michała Archanioła, który w dwa tysiące siedemnastym roku uznano za Pomnik Historii — czyli objęto najwyższą krajową formą ochrony zabytków. Zbudowany w latach tysiąc siedemset trzydziestych i czterdziestych, drewniany, ale zbudowany jak murowana bazylika barokowa: trójnawowy, z iluzjonistyczną polichromią. Konserwatorzy nazywają go jednym z najcenniejszych obiektów tego typu w skali europejskiej.",
        "Jest tam też szczegół, który mówi o tym kościele więcej niż fachowe określenia. Ktoś policzył wizerunki: sto pięćdziesiąt trzy anioły i siedem diabłów.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w gminie Łużna?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Podaj sołectwo — Łużna, Szalowa, Wola Łużańska, Mszanka, Biesna albo Bieśnik. Gmina jest niewielka, więc różnice w trasie są krótkie, a w cenie żadnych.",
        "Jeśli jesteś w kole gospodyń, powiedz to od razu. Wiem, że tutejsze koło wygrało konkurs na wypiek regionalny ziemi gorlickiej, więc przy takiej prezentacji chętnie pokażę raczej ciasta i większe porcje niż jeden obiad na dwie osoby.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w gminie Łużna"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Gmina, do której się wraca",
      paragraphs: [
        "Łużna liczy ponad osiem tysięcy mieszkańców na pięćdziesięciu sześciu kilometrach kwadratowych i — w odróżnieniu od miasta Gorlice — od dwa tysiące drugiego roku urosła o około trzy procent. To niewiele, ale w tej części Małopolski każdy wzrost jest wyjątkiem.",
        "Gmina ma przy tym rzecz, której brakuje wielu sąsiadkom: dwie czynne stacje kolejowe, w Szalowej i Woli Łużańskiej, na linii ze Stróż do Krościenka. Dojazd do Gorlic czy Nowego Sącza jest stąd realny bez samochodu.",
        "Ma to konkretne przełożenie na domowy dzień. Część mieszkańców dojeżdża do pracy albo do szkoły średniej i wraca o stałych, ale późnych porach; część pracuje na miejscu w gospodarstwie. Obiad musi obsłużyć oba te rozkłady.",
        "Najbardziej praktyczna rzecz jest przy tym prosta. Danie jednogarnkowe gotuje się bez człowieka, samo się wyłącza i czeka na tego, kto wróci pierwszy. Nie stygnie w garnku od południa i nie przypala się.",
        "Druga to gotowanie z zapasem i wypieki. W gminie, w której koło gospodyń wygrywa konkurs na wypiek regionalny, ciasto piecze się nie od święta. A wyrabianie ciasta drożdżowego, ucieranie mas i mielenie maku to godziny pracy rękami — dokładnie ta część, którą maszyna przejmuje w całości i powtarza identycznie w każdej partii.",
        "Trzecia dotyczy tego, kto gotuje. Przepis prowadzi krok po kroku, więc obiad może przygotować nastolatek, który wraca ze szkoły pierwszy. W domu, z którego rano wszyscy wyjeżdżają, to bywa realnym odciążeniem.",
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
    heading: "Łużna i gotowanie — koło, które wygrało konkurs",
    paragraphs: [
      "Zacznę od faktu, który jest tu najkonkretniejszy: koło gospodyń wiejskich z Łużnej zajęło pierwsze miejsce w konkursie na Wypiek Regionalny Ziemi Gorlickiej podczas dorocznej wystawy rolniczej. Startowało w nim dziesięć kół z całej okolicy.",
      "Powiem uczciwie, czego nie znalazłam: żadnego wpisu na ministerialnej Liście Produktów Tradycyjnych przypisanego tej gminie. Ale konkurs wygrany w konkurencji z dziewięcioma innymi kołami mówi o kondycji tutejszej kuchni więcej niż niejeden rejestr.",
      "Wypieki są zresztą w tej okolicy najważniejszą kategorią domowej kuchni. Ciasto drożdżowe, placki, kołacze i pierniki to rzeczy, które się pokazuje ludziom spoza domu — na odpuście, na dożynkach, na weselu, na konkursie. Reszta, czyli ziemniaki, kapusta, fasola i zupy na kościach, zostaje w domu.",
      "Ciekawa jest tu jeszcze jedna warstwa historyczna. W Szalowej działała szkoła przy kościele już od tysiąc pięćset dziewięćdziesiątego piątego roku, a wcześniej, w szesnastym wieku, tutejsi właściciele byli arianami i mieli przy dworze zbór. Od połowy osiemnastego wieku istnieje we wsi kapela ludowa, z której wyrosła orkiestra dęta, a od tysiąc dziewięćset pięćdziesiątego trzeciego amatorski teatr. To wieś z bardzo długą tradycją robienia rzeczy wspólnie.",
      "Dla urządzenia najciekawsze jest właśnie to, co poprzedza pieczenie: wyrabianie ciasta, ucieranie mas, mielenie maku i orzechów, przygotowanie nadzień. To godziny pracy rękami, które maszyna przejmuje i — co ważne przy konkursie — powtarza tak samo za każdym razem. Czego nie zrobi, mówię wprost: nie upiecze i nie oceni, kiedy ciasto wyrosło. Zabiera przygotowanie, nie rzemiosło.",
    ],
  },

  districtsHeading: "Do których sołectw gminy Łużna dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich sześciu, bez żadnej dopłaty za odległość. Gmina liczy ponad osiem tysięcy mieszkańców na pięćdziesięciu sześciu kilometrach kwadratowych.",
    "Sołectwa to: Biesna, Bieśnik, Łużna, Mszanka, Szalowa i Wola Łużańska.",
    "Dwa miejsca warto znać i oba mają najwyższy możliwy status ochrony. Na wzgórzu Pustki leży cmentarz wojenny numer sto dwadzieścia trzy — blisko trzy hektary, tysiąc dwustu czterech pochowanych, czwarty obiekt w Polsce ze Znakiem Dziedzictwa Europejskiego. W Podbrzeziu jest drugi cmentarz, numer sto dwadzieścia, z czterystu siedemnastoma żołnierzami węgierskimi. A w Szalowej stoi drewniany kościół świętego Michała Archanioła z lat tysiąc siedemset trzydziestych i czterdziestych, uznany w dwa tysiące siedemnastym roku za Pomnik Historii i wpisany na Szlak Architektury Drewnianej.",
    "Warto tu zaznaczyć jedno rozróżnienie, bo w promieniu dwudziestu kilometrów są trzy obiekty z listy UNESCO: kościół w Szalowej do nich nie należy. Ma status krajowy, nie światowy — i to również jest bardzo wysoko.",
    "Dojazd: przez gminę biegnie linia kolejowa ze Stróż do Krościenka, ze stacjami w Szalowej i Woli Łużańskiej. Do Gorlic jest stąd kilkanaście kilometrów.",
  ],
  districts: [
    "Łużna",
    "Szalowa",
    "Wola Łużańska",
    "Mszanka",
    "Biesna",
    "Bieśnik",
  ],

  nearbyHeading: "Gorlice, Moszczenica i Bobowa też są na mojej trasie",
  nearbyParagraphs: [
    "Gmina graniczy z gminą wiejską Gorlice, Moszczenicą, Bobową i Grybowem. Dojeżdżam do wszystkich sąsiadów bez doliczania kosztu dojazdu.",
    "Przy umawianiu wystarczy, że podasz sołectwo. Resztę zaplanuję sama.",
  ],
  nearbyTowns: [
    "Gorlice",
    "Moszczenica",
    "Bobowa",
    "Grybów",
    "Biecz",
    "Nowy Sącz",
  ],

  about: blokOMnie("do gminy Łużna", "w powiecie gorlickim"),

  faq: [
    {
      question: "Mieszkam w Szalowej albo Woli Łużańskiej. Dojedziesz?",
      answer:
        "Dojadę i nie doliczę za to ani złotówki. Wszystkie sześć sołectw gminy traktuję tak samo. Przy umawianiu podaj nazwę wsi — to potrzebne wyłącznie do zaplanowania trasy.",
    },
    ...faqWspolne("w gminie Łużna"),
    {
      question: "Dużo pieczemy. Czy ten sprzęt w tym pomoże?",
      answer:
        "Pomoże i to jest w Waszej gminie chyba jego najmocniejsza strona. Wyrabianie ciasta drożdżowego, ucieranie mas, mielenie maku i orzechów, przygotowanie nadzień — to wszystko robi maszyna, szybciej i bez bolących rąk, a każda kolejna partia wychodzi identycznie. Nie upiecze i nie oceni, kiedy ciasto wyrosło — to zostaje przy Was.",
    },
  ],

  geo: { lat: 49.7123, lng: 21.0456 },
};
