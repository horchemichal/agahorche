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
 * GMINA WIEJSKA GORLICE — powiat gorlicki.
 * 16 906 mieszkańców (31.12.2024), 102,9 km², 10 SOŁECTW.
 * ⚠️ GMINA ROŚNIE, GDY MIASTO SIĘ KURCZY (miasto: −12,3% od 2002).
 *
 * ⚠️ UWAGA NA BLIŹNIAKA: obok istnieje GMINA MIEJSKA GORLICE
 * (plik `gorlice.ts`) — 23,5 km², 25 367 mieszkańców, 12 osiedli.
 * Urząd TEJ gminy mieści się W MIEŚCIE, ul. 11 Listopada 2.
 * WSI O NAZWIE GORLICE NIE MA. Gmina otacza miasto pierścieniem.
 *
 * OŚ STRONY: KASZTEL GŁADYSZÓW I ŁEMKOWSKA BIELANKA.
 * Ładna klamra: Karwacjanowie założyli miasto w 1354 r., Gładyszowie
 * zbudowali kasztel w gminie.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — KASZTEL W SZYMBARKU — zbudowany w 1. POŁOWIE XVI W. przez ród
 *   GŁADYSZÓW H. GRYF (właściciele dóbr od XIV w.). NAJLEPSZY PRZYKŁAD
 *   POLSKIEGO KASZTELU RENESANSOWEGO — analogie tylko w Czechach,
 *   na Węgrzech i we Włoszech. 20 × 13 M, kwadratowe wieżyczki
 *   w narożach, ATTYKA ZDOBIONA SGRAFFITEM, machikuły, strzelnice,
 *   5 kondygnacji. Kolejni właściciele: Strońscy, Siedleccy,
 *   Bronikowscy, Żywiccy, Sękiewiczowie (do II wojny).
 *   REMONT ZAKOŃCZONY W 2010 R. — PO 75 LATACH. Dziś ośrodek
 *   konferencyjno-wystawienniczy Muzeum Dwory Karwacjanów
 *   i Gładyszów; ekspozycja m.in. Teodora Axentowicza,
 * — SKANSEN WSI POGÓRZAŃSKIEJ IM. PROF. ROMANA REINFUSSA: koncepcja
 *   1962 (konserwator Jerzy Tur), pierwsze obiekty przeniesione 1974,
 *   OTWARCIE 19 WRZEŚNIA 1987 R. Nazwa Reinfussa nadana 2010, pomnik
 *   odsłonięty 27 maja 2010 w setną rocznicę urodzin. Powierzchnia
 *   2,38 HA. Kuźnia, młyny, olejarnia, piec garncarski,
 * — SZYMBARK: największa miejscowość gminy, 3 092 mieszkańców,
 *   2 714 ha. Drewniany kościół św. Wojciecha 1782, dawna cerkiew
 *   greckokatolicka 1885,
 * — ⭐ BIELANKA: stara wieś łemkowska, lokowana w XV W. w dobrach
 *   Gładyszów. Słynęła z MAZIARSTWA (dziegieć z sosny i brzozy).
 *   Drewniana CERKIEW OPIEKI MATKI BOŻEJ Z 1773 R. — typ
 *   zachodniołemkowski, trójdzielna, trzy kopuły.
 *   ⭐⭐ BIELANKA JAKO PIERWSZA MIEJSCOWOŚĆ W MAŁOPOLSCE OTRZYMAŁA
 *   DWUJĘZYCZNE TABLICE POLSKO-ŁEMKOWSKIE — W 2009 R., po referendum
 *   wygranym niewielką przewagą. Dopiero w 2012 dołączyło 8 wsi
 *   z gminy Uście Gorlickie (`uscie-gorlickie.ts`).
 *   TO SPRAWDZALNE PIERWSZEŃSTWO — mocny, unikalny fakt.
 *   Bielanka liczy 179 mieszkańców — najmniejsze sołectwo gminy,
 * — 10 SOŁECTW z ludnością (koniec 2025): Szymbark 3 092,
 *   Kobylanka 2 449, Zagórzany 2 333, Ropica Polska 2 125,
 *   Dominikowice 2 117, Klęczany 879, Kwiatonowice 595, Bielanka 179,
 *   plus Bystra i Stróżówka,
 * — ⚠️⚠️ KLĘCZANY W TEJ GMINIE TO NIE KLĘCZANY Z GMINY CHEŁMIEC
 *   (powiat nowosądecki), o których pisze `chelmiec.ts` w kontekście
 *   ropy od 1858 r. Strona gminy Gorlice o swoich Klęczanach NIE
 *   WSPOMINA ROPY W OGÓLE: 215 ha, dolina Ropy, 265–280 m n.p.m.,
 *   lokacja na prawie niemieckim 1342 przez Kazimierza Wielkiego,
 *   XV w. Klęczańscy, XVIII w. Skrzyńscy. NIE ZLEPIAĆ — to poważne
 *   ryzyko błędu,
 * — CMENTARZE WOJENNE W GMINIE — 12, wszystkie zidentyfikowane;
 *   11 projektu HANSA MAYRA, jeden (nr 125 Zagórzany, 190 pochowanych)
 *   projektu ANTONA MÜLLERA. Największy z Mayrowskich: NR 97
 *   STRÓŻÓWKA — 343 POCHOWANYCH,
 * — AGRO GORLICE — wystawa rolnicza w BYSTREJ (sołectwo tej gminy),
 *   organizatorzy: Powiat Gorlicki, Gmina Gorlice, Ośrodek Kultury
 *   Gminy Gorlice. KONKURS „WYPIEK REGIONALNY ZIEMI GORLICKIEJ” —
 *   startuje w nim 10 KGW. Impreza istnieje co najmniej od 2023,
 * — KGW POTWIERDZONE IMIENNIE: Zagórzany, Stróżówka, Kobylanka,
 *   Klęczany,
 * — REGON: 1 612 podmiotów (2024),
 * — POŁOŻENIE: pogranicze Pogórza Karpackiego i Beskidu Niskiego,
 * — KOLEJ: stacja GORLICE ZAGÓRZANY na linii 108 leży W TEJ GMINIE,
 *   w Zagórzanach. DK 28 przez Klęczany.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — NAZWANYCH DUŻYCH PRACODAWCÓW. Żadnego nie potwierdzono,
 * — WPISU NA LISTĘ PRODUKTÓW TRADYCYJNYCH. Nie znaleziono,
 * — BEZROBOCIA I WYNAGRODZEŃ. Dane POWIATOWE (6,3%, 6 707,16 zł),
 *   identyczne dla wszystkich gmin powiatu. NIE CYTOWAĆ.
 *
 * PUŁAPKI:
 * — ZAGRODA MAZIARSKA W ŁOSIU należy do gorlickiego muzeum, ale
 *   ŁOSIE TO GMINA ROPA (`ropa.ts`) — tam jest oś maziarska.
 *   Tutaj maziarstwo Bielanki wspomniane jedynie faktograficznie,
 * — BIELANKA (gmina Gorlice) vs BIELANKA w innych powiatach.
 */

export const GORLICE_GMINA: CityContent = {
  slug: "gorlice-gmina",
  h1: "Thermomix gmina Gorlice – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix gmina Gorlice — cena i prezentacja",
  seoDescription:
    "Thermomix w gminie wiejskiej Gorlice: bezpłatna prezentacja TM7 u Ciebie w kuchni, cena i raty 0%. Dojazd do wszystkich sołectw bez dopłat. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix gmina Gorlice — zobacz TM7 u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w gminie wiejskiej Gorlice. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do Szymbarku, Kobylanki, Zagórzan, Bielanki i pozostałych sołectw gminy wiejskiej Gorlice przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje.",

  highlights: highlightyStandardowe("wszystkie dziesięć sołectw, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption:
      "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w gminie Gorlice – jak wygląda prezentacja?",
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
      heading: "Kasztel Gładyszów i wieś, która pierwsza dostała drugie imię",
      paragraphs: [
        "W Szymbarku, największej wsi tej gminy, stoi budowla, jakiej nie ma nigdzie indziej w Polsce w takim stanie. Kasztel wzniesiony w pierwszej połowie szesnastego wieku przez ród Gładyszów herbu Gryf uchodzi za najlepszy zachowany przykład polskiego kasztelu renesansowego — analogii szuka się dopiero w Czechach, na Węgrzech i we Włoszech.",
        "To budynek dwadzieścia na trzynaście metrów, pięciokondygnacyjny, z kwadratowymi wieżyczkami w narożach, attyką zdobioną sgraffitem, machikułami i strzelnicami. Rezydencja i warownia w jednym. Po Gładyszach byli tu Strońscy, Siedleccy, Bronikowscy, Żywieccy i Sękiewiczowie — do drugiej wojny.",
        "Remont trwał długo. Prace konserwatorskie zaczęto w tysiąc dziewięćset czterdziestym dziewiątym roku, a zakończono dopiero w dwa tysiące dziesiątym — po siedemdziesięciu pięciu latach. Dziś kasztel jest ośrodkiem konferencyjno-wystawienniczym gorlickiego muzeum, z ekspozycją między innymi obrazów Teodora Axentowicza.",
        "Obok, w tym samym Szymbarku, działa od tysiąc dziewięćset osiemdziesiątego siódmego roku Skansen Wsi Pogórzańskiej imienia profesora Romana Reinfussa — dwa i pół hektara z kuźnią, młynami, olejarnią i piecem garncarskim. Pomysł powstał w sześćdziesiątym drugim, pierwsze budynki przeniesiono w siedemdziesiątym czwartym.",
        "Druga historia tej gminy dzieje się w najmniejszej wsi. Bielanka liczy sto siedemdziesiąt dziewięć osób i jest starą wsią łemkowską, lokowaną w piętnastym wieku w dobrach tych samych Gładyszów. Słynęła z maziarstwa — pędzenia dziegciu z sosny i brzozy — a stoi w niej drewniana cerkiew Opieki Matki Bożej z tysiąc siedemset siedemdziesiątego trzeciego roku, trójdzielna, o trzech kopułach.",
        "I rzecz, o której warto wiedzieć, bo jest sprawdzalna i pierwsza: w dwa tysiące dziewiątym roku Bielanka jako pierwsza miejscowość w Małopolsce dostała dwujęzyczne tablice polsko-łemkowskie. Referendum wygrano niewielką przewagą. Osiem wsi z sąsiedniej gminy Uście Gorlickie dołączyło do niej dopiero trzy lata później.",
        "Warto jeszcze zauważyć jedną rzecz, która ładnie domyka historię okolicy. Miasto Gorlice założyli w tysiąc trzysta pięćdziesiątym czwartym roku Karwacjanowie. Kasztel w gminie zbudowali Gładyszowie. Gorlickie muzeum, które opiekuje się dziś obydwoma miejscami, nosi nazwę od nazwisk obu rodów.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w gminie Gorlice?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Podaj sołectwo — jest ich dziesięć i różnią się bardzo: Szymbark ma ponad trzy tysiące mieszkańców, a Bielanka mniej niż dwustu. Trasa wygląda w związku z tym inaczej, ale na cenę to nie wpływa.",
        "Powiedz też od razu, czy chodzi o gminę wiejską, czy o miasto Gorlice. To dwie osobne jednostki o tej samej nazwie i obie obsługuję, ale miasto ma u mnie własną stronę.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
        {
          href: "/thermomix/gorlice",
          label: "Mieszkasz w mieście Gorlice? Tu jest jego strona",
        },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w gminie Gorlice"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Pierścień, do którego się wprowadzają",
      paragraphs: [
        "Ta gmina ma cechę, którą widać dopiero w zestawieniu z sąsiadem. Gorlice jako miasto straciły od dwa tysiące drugiego roku ponad dwanaście procent mieszkańców. Gmina wiejska w tym samym czasie rosła. To znaczy, że ludzie nie wyjeżdżają z okolicy — przenoszą się o kilka kilometrów, z bloku do własnego domu.",
        "Skutek jest taki, że w tutejszych sołectwach mieszka dużo młodych rodzin, które codziennie dojeżdżają do miasta: do pracy, do szkoły średniej, do lekarza. Dom jest tutaj, życie zawodowe kilka kilometrów dalej.",
        "Kuchnia w takim domu obsługuje kilka rozkładów dnia naraz. Dzieci wracają wcześniej, dorośli po pracy w mieście, a w wielu rodzinach ktoś jeszcze pracuje na zmiany w zakładach Glinika. Jeden wspólny obiad o stałej porze zdarza się rzadko.",
        "Najbardziej praktyczna rzecz jest przy takim rozkładzie jedna. Danie jednogarnkowe gotuje się bez człowieka, samo się wyłącza i czeka na tego, kto wróci pierwszy. Nie stygnie w garnku od południa i nie przypala się.",
        "Druga to gotowanie z zapasem, przy dojazdach naturalne. Podwójna porcja zupy, sos na kilka dni, pasty na drugie śniadanie do szkoły i do pracy, ciasto — robione seriami w weekend, w jednym naczyniu.",
        "Trzecia dotyczy tego, kto gotuje. Przepis prowadzi krok po kroku, więc obiad może przygotować nastolatek, który wraca ze szkoły pierwszy. W domu, z którego wszyscy rano wyjeżdżają do miasta, to bywa realnym odciążeniem.",
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
    heading: "Wypiek Regionalny Ziemi Gorlickiej — konkurs, w którym startuje dziesięć kół",
    paragraphs: [
      "W Bystrej, jednym z sołectw tej gminy, odbywa się co roku wystawa rolnicza Agro Gorlice, a w jej ramach konkurs na Wypiek Regionalny Ziemi Gorlickiej. Startuje w nim dziesięć kół gospodyń z całej okolicy — z Zagórzan, Stróżówki, Kobylanki, Łużnej, Łosia, Krygu, Staszkówki i innych wsi.",
      "To warto podkreślić, bo mówi coś konkretnego: w tej gminie ciasto piecze się nadal w konkurencji, a nie z sentymentu. W samych sołectwach gminy Gorlice potwierdzone są koła w Zagórzanach, Stróżówce, Kobylance i Klęczanach.",
      "Powiem uczciwie, czego nie znalazłam: żadnego wpisu na ministerialnej Liście Produktów Tradycyjnych przypisanego wprost tej gminie. Nie będę więc dopisywać jej dorobku, którego nie umiem wskazać źródłem.",
      "Kuchnia jest tu pogórzańska, z domieszką łemkowskiej od strony Bielanki: ziemniaki, kapusta, fasola, zupy na kościach, kwaśne polewki, ciasto drożdżowe, przetwory z ogrodu. Wypieki mają w tym wszystkim miejsce szczególne, bo są tym, co się pokazuje ludziom spoza domu.",
      "Dla urządzenia najciekawsze są właśnie ciasta i to, co je poprzedza. Wyrabianie ciasta drożdżowego, ucieranie mas, mielenie maku, przygotowanie nadzień — to godziny pracy rękami, które maszyna przejmuje w całości i, co ważne przy konkursie, powtarza identycznie w każdej partii. Czego nie zrobi, mówię wprost: nie upiecze i nie oceni, kiedy ciasto wyrosło. Zabiera przygotowanie, nie rzemiosło.",
    ],
  },

  districtsHeading: "Do których sołectw gminy Gorlice dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich dziesięciu, bez żadnej dopłaty za odległość. Gmina zajmuje sto trzy kilometry kwadratowe i liczy blisko siedemnaście tysięcy mieszkańców — i, w odróżnieniu od miasta, rośnie.",
    "Sołectwa to: Bielanka, Bystra, Dominikowice, Klęczany, Kobylanka, Kwiatonowice, Ropica Polska, Stróżówka, Szymbark i Zagórzany. Największy jest Szymbark z ponad trzema tysiącami mieszkańców, najmniejsza Bielanka ze stu siedemdziesięcioma dziewięcioma.",
    "Warto zobaczyć trzy miejsca. W Szymbarku kasztel Gładyszów z pierwszej połowy szesnastego wieku i skansen wsi pogórzańskiej; w tej samej wsi stoi też drewniany kościół z tysiąc siedemset osiemdziesiątego drugiego roku. W Bielance drewniana cerkiew z tysiąc siedemset siedemdziesiątego trzeciego i dwujęzyczne tablice, pierwsze w Małopolsce.",
    "Na terenie gminy leży dwanaście cmentarzy wojennych z pierwszej wojny — jedenaście projektu Hansa Mayra, jeden Antona Müllera. Największe to numer dziewięćdziesiąt siedem w Stróżówce z trzystu czterdziestoma trzema pochowanymi i numer sto dwadzieścia pięć w Zagórzanach ze stu dziewięćdziesięcioma.",
    "Jedno doprecyzowanie, bo bywa mylące: Klęczany w tej gminie to nie te same Klęczany, w których od tysiąc osiemset pięćdziesiątego ósmego roku wydobywano ropę — tamte leżą w gminie Chełmiec w powiecie nowosądeckim. Tutejsze lokował Kazimierz Wielki w tysiąc trzysta czterdziestym drugim roku i o ropie nie ma tam mowy.",
    "Dojazd: stacja kolejowa Gorlice Zagórzany leży właśnie w tej gminie, na linii ze Stróż do Krościenka. Przez Klęczany biegnie droga krajowa z Zatora do Medyki.",
  ],
  districts: [
    "Szymbark",
    "Kobylanka",
    "Zagórzany",
    "Ropica Polska",
    "Dominikowice",
    "Stróżówka i Bystra",
    "Klęczany i Kwiatonowice",
    "Bielanka",
  ],

  nearbyHeading: "Miasto Gorlice, Ropa i Sękowa też są na mojej trasie",
  nearbyParagraphs: [
    "W środku gminy leży miasto Gorlice — osobna jednostka, w której mieści się zresztą urząd tej gminy. Dojeżdżam do obu tak samo, bez dopłaty; miasto ma u mnie własną stronę.",
    "Gmina graniczy też z Ropą, Sękową, Lipinkami, Bieczem, Moszczenicą i Łużną. Do żadnej z nich nie doliczam kosztu dojazdu.",
  ],
  nearbyTowns: [
    "Gorlice",
    "Ropa",
    "Sękowa",
    "Lipinki",
    "Biecz",
    "Łużna",
  ],

  about: blokOMnie("do gminy Gorlice", "w powiecie gorlickim"),

  faq: [
    {
      question: "Czym gmina Gorlice różni się od miasta Gorlice?",
      answer:
        "To dwie osobne gminy o tej samej nazwie. Gmina wiejska ma sto trzy kilometry kwadratowe, blisko siedemnaście tysięcy mieszkańców i dziesięć sołectw — od Szymbarku i Kobylanki po Bielankę. Miasto ma dwadzieścia trzy kilometry i ponad dwadzieścia pięć tysięcy mieszkańców. Urząd gminy wiejskiej mieści się w mieście, a wsi o nazwie Gorlice nie ma wcale. Dojeżdżam i tu, i tam, bez dopłaty.",
    },
    ...faqWspolne("w gminie Gorlice"),
    {
      question: "Mieszkam w Bielance, na końcu gminy. Dojedziesz?",
      answer:
        "Dojadę i nie doliczę za to ani złotówki. Bielanka jest najmniejszym sołectwem gminy, ale traktuję ją dokładnie tak samo jak Szymbark czy Zagórzany. Przy umawianiu podaj tylko nazwę wsi, żebym dobrze rozplanowała trasę.",
    },
  ],

  geo: { lat: 49.6546, lng: 21.1596 },
};
