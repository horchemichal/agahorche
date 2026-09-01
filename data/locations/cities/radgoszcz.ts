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
 * RADGOSZCZ — GMINA WIEJSKA w powiecie dąbrowskim.
 * 7 432 mieszkańców (31.12.2024), 88,1 km².
 * ⭐ ŚREDNI WIEK 39,5 — NAJMŁODSZA GMINA POWIATU.
 * REGON: 475; wśród osób fizycznych BUDOWNICTWO 38,3%, handel 14,0%.
 * W 2024 oddano 32 MIESZKANIA; średnia wielkość mieszkania 88,2 m²
 * — najmniejsza w powiecie.
 * 5 SOŁECTW: Luszowice, Małec, Radgoszcz, Smyków, Żdżary.
 *
 * OŚ STRONY: NAJMŁODSZA GMINA POWIATU — demografia i budownictwo.
 * ⚠️⚠️ NIE BRAĆ OSI „GARNKI RADGOSKIE” — koliduje z Olkuszem
 * („miasto, które robi garnki od 1907”). Garnki wchodzą wyłącznie
 * jako wzmianka historyczna.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — DEMOGRAFIA: średni wiek 39,5 lat — najniższy w powiecie
 *   (dla porównania Gręboszów 45,7). 32 mieszkania oddane w 2024,
 *   przy średniej wielkości 88,2 m² — najmniejszej w powiecie,
 * — BUDOWNICTWO 38,3% wśród działalności osób fizycznych,
 * — HISTORIA (radgoszcz.pl): 1386 pierwsza wzmianka o LUSZOWICACH;
 *   1500 Radgoszcz w dokumentach; 1662 erygowanie parafii;
 *   1786 opis u Kuropatnickiego.
 *   ⚠️ XVIII W. — RADGOSZCZ SŁYNĘŁA Z PRODUKCJI GARNKÓW, ZWANYCH
 *   „RADGOSKIMI”. WZMIANKA HISTORYCZNA, NIE OŚ — oś garncarska
 *   należy do Olkusza (`olkusz.ts`),
 * — RABACJA GALICYJSKA 1846 — napad chłopów na dwór, 19 ZAMORDOWANYCH,
 * — Powstanie styczniowe — ochotnicy do oddziału Dunajewskiego.
 *   I wojna — TRZY CMENTARZE WOJENNE.
 *   Okupacja: struktury AK, tajne nauczanie, OK. 180 ŻYDÓW
 *   WYWIEZIONYCH DO BEŁŻCA. 1934 gmina zbiorowa. 1944 linia frontu.
 *   Odbudowa pod wójtem Janem Golcem,
 * — GOSPODARKA HISTORYCZNA: przemysłowa produkcja masła (koniec
 *   XIX w.), BARTNICTWO I PRODUKCJA GONTÓW W ŻDŻARACH,
 *   eksploatacja piasku, żwiru i gliny, młyny i folwarki,
 * — ⚠️ Strona gminy pisze, że Radgoszcz była jedną z NAJWIĘKSZYCH
 *   POWIERZCHNIOWO gmin powiatu (120 km²) i zarazem jedną
 *   z NAJBIEDNIEJSZYCH — TO DANE HISTORYCZNE. DZIŚ 88 KM².
 *   NIE PODAWAĆ W CZASIE TERAŹNIEJSZYM,
 * — ZALEW / KĄPIELISKO NAROŻNIKI — kąpielisko strzeżone codziennie
 *   10:00–18:00, WSTĘP WOLNY, bezpłatny sprzęt wodny; zarejestrowane
 *   w Serwisie Kąpieliskowym GIS. W Narożnikach odbyło się
 *   XIII ŚWIĘTO POWIŚLA DĄBROWSKIEGO (25.08.2024).
 *   ⚠️ POWIERZCHNI ZBIORNIKA I ROKU POWSTANIA NIE POTWIERDZONO,
 * — POŁOŻENIE NA SKRAJU PUSZCZY SANDOMIERSKIEJ.
 *   ⚠️ KONKRETNEGO WSKAŹNIKA LESISTOŚCI NIE POTWIERDZONO,
 * — WSPÓŁRZĘDNE (UG, Pl. Św. Kazimierza 7-8): 50,2058 / 21,1115.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — NAZWANYCH DUŻYCH PRACODAWCÓW. Żadnego nie potwierdzono,
 * — WPISU NA LISTĘ PRODUKTÓW TRADYCYJNYCH. Nie potwierdzono,
 * — NAZW KÓŁ GOSPODYŃ. Nie potwierdzono,
 * — BEZROBOCIA I WYNAGRODZEŃ. Dane POWIATOWE (11,4%, 7 161,93 zł).
 *   ⚠️ Polska w Liczbach podaje „szacunkową” stopę 12,9% dla tej
 *   gminy — TO SZACUNEK SERWISU, NIE DANE GUS. NIE UŻYWAĆ,
 * — RUCHU PASAŻERSKIEGO KOLEJĄ. W całym powiecie go nie ma.
 *
 * PUŁAPKI:
 * — RADGOSZCZ istnieje też w wielkopolskim i mazowieckim,
 * — GRUSZÓW WIELKI (chleb żytni gruszowski) NALEŻY DO GMINY
 *   DĄBROWA TARNOWSKA, NIE DO RADGOSZCZY.
 */

export const RADGOSZCZ: CityContent = {
  slug: "radgoszcz",
  h1: "Thermomix Radgoszcz – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Radgoszcz — prezentacja i cena",
  seoDescription:
    "Thermomix w gminie Radgoszcz: bezpłatna prezentacja TM7 u Ciebie w kuchni, cena i raty 0,6%. Dojazd do wszystkich sołectw bez dopłat. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Radgoszcz — zobacz TM7 na żywo u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w gminie Radgoszcz. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do Radgoszczy, Luszowic, Żdżar i pozostałych sołectw gminy przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje.",

  highlights: highlightyStandardowe("wszystkie pięć sołectw, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption:
      "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Radgoszczy – jak wygląda prezentacja?",
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
      heading: "Najmłodsza gmina powiatu",
      paragraphs: [
        "W powiecie dąbrowskim średni wiek mieszkańca rośnie prawie wszędzie. W Gręboszowie wynosi już czterdzieści sześć lat, w Mędrzechowie prawie czterdzieści trzy. W Radgoszczy — trzydzieści dziewięć i pół. To najniższa liczba w całym powiecie i widać ją nie tylko w statystyce.",
        "Widać ją w budownictwie. W dwa tysiące dwudziestym czwartym roku oddano tu do użytku trzydzieści dwa mieszkania, a wśród firm prowadzonych przez osoby fizyczne prawie czterdzieści procent to budownictwo. To gmina, w której się buduje i do której się wprowadza.",
        "Ciekawy jest przy tym jeszcze jeden szczegół: średnia wielkość mieszkania wynosi tu osiemdziesiąt osiem metrów kwadratowych — najmniej w powiecie. To znaczy, że powstają domy rozsądne, a nie rezydencje, i że stawiają je młode rodziny, a nie ludzie wracający na emeryturę.",
        "Historia jest tu za to długa i miejscami ciężka. Pierwsza wzmianka o Luszowicach pochodzi z tysiąc trzysta osiemdziesiątego szóstego roku, Radgoszcz pojawia się w dokumentach w tysiąc pięćsetnym, a parafię erygowano w tysiąc sześćset sześćdziesiątym drugim. W osiemnastym wieku wieś słynęła z produkcji garnków, zwanych radgoskimi.",
        "W czasie rabacji galicyjskiej w tysiąc osiemset czterdziestym szóstym roku doszło tu do napadu na dwór, w którym zginęło dziewiętnaście osób. Podczas okupacji wywieziono do Bełżca około stu osiemdziesięciu tutejszych Żydów; działały struktury Armii Krajowej i tajne nauczanie, a w czterdziestym czwartym przez gminę przeszła linia frontu. Zostały po tamtej wojnie trzy cmentarze wojenne.",
        "Dawna gospodarka gminy była zresztą bardziej różnorodna, niż się dziś wydaje: pod koniec dziewiętnastego wieku działała tu przemysłowa produkcja masła, w Żdżarach zajmowano się bartnictwem i wyrobem gontów, a poza tym eksploatowano piasek, żwir i glinę i mielono w młynach.",
        "Dziś najbardziej znanym miejscem gminy jest zalew w Narożnikach z kąpieliskiem strzeżonym codziennie od dziesiątej do osiemnastej, bezpłatnym wstępem i darmowym sprzętem wodnym. To tam odbyło się w dwa tysiące dwudziestym czwartym roku Święto Powiśla Dąbrowskiego.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w gminie Radgoszcz?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Podaj sołectwo — jest ich pięć: Radgoszcz, Luszowice, Małec, Smyków i Żdżary. Gmina jest zwarta, więc różnice w trasie są niewielkie, a w cenie żadnych.",
        "Jeśli budujecie się albo właśnie wprowadziliście do nowego domu, powiedz to od razu. Wtedy najczęściej ma sens rozmowa o wyposażaniu kuchni od podstaw, a nie o dokładaniu kolejnego sprzętu do już zastawionego blatu.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w gminie Radgoszcz"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Nowe domy i pełne stoły",
      paragraphs: [
        "Trzydzieści dwa mieszkania oddane w jednym roku w gminie liczącej siedem i pół tysiąca mieszkańców to bardzo dużo. Powstają domy średniej wielkości, a wprowadzają się do nich młode rodziny — stąd najniższa średnia wieku w całym powiecie.",
        "Dom z małymi dziećmi ma bardzo konkretny problem kuchenny i nie jest nim wyrafinowanie. Chodzi o to, żeby obiad był codziennie, o rozsądnej porze i w wystarczającej ilości, a przy tym żeby ktoś zdążył go zrobić między pracą, przedszkolem i budową, która często trwa jeszcze w tle.",
        "Pierwsza praktyczna rzecz jest przy takim stole banalna: dania jednogarnkowe. Zupa albo duszone mięso na sześć osób gotuje się bez pilnowania, samo się wyłącza i czeka. Nie trzeba stać, mieszać ani wracać co dziesięć minut.",
        "Druga to zupy i przeciery dla najmłodszych. W gminie z tak młodą demografią to nie jest ciekawostka — w wielu domach jest niemowlę albo roczne dziecko. Ugotowanie i zmiksowanie w jednym naczyniu, bez przelewania gorących rzeczy między garnkiem a blenderem, oszczędza czas i zmniejsza ryzyko poparzenia.",
        "Trzecia dotyczy nowej kuchni. Kiedy urządza się dom od zera, warto policzyć nie tylko cenę, ale i miejsce: jedno urządzenie zajmuje mniej więcej tyle co czajnik z podstawką, a zastępuje blender, malakser, mikser i część garnków. W kuchni, która dopiero się zapełnia, to realna decyzja o tym, co stanie na blacie na następne lata.",
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
    heading: "Radgoszcz i gotowanie — masło, gonty i garnki",
    paragraphs: [
      "Zacznę uczciwie: nie potwierdziłam żadnego wpisu na ministerialnej Liście Produktów Tradycyjnych przypisanego tej gminie ani nazwy działającego koła gospodyń. Sąsiednie gminy Powiśla Dąbrowskiego mają takie wpisy, ale nie będę ich przypisywać Radgoszczy.",
      "Historycznie gmina miała za to bardzo konkretny związek z jedzeniem. Pod koniec dziewiętnastego wieku działała tu przemysłowa produkcja masła — a masło było wtedy jednym z niewielu produktów rolnych, które opłacało się wozić dalej niż na najbliższy targ. W Żdżarach zajmowano się bartnictwem, czyli miodem, i wyrobem gontów.",
      "Jest tu też ciekawostka, która mówi coś o dawnej kuchni. W osiemnastym wieku Radgoszcz słynęła z produkcji garnków, nazywanych radgoskimi. Naczynie było wtedy sprzętem inwestycyjnym: kupowało się je rzadko, używało latami, a od jego kształtu zależało, co i jak się w nim gotuje.",
      "Dziś gotuje się tu jak w całym Powiślu: kapusta, ziemniaki, fasola, zupy na kościach, wędliny robione w domu, ciasto drożdżowe, przetwory z ogrodu. Z tą różnicą, że przy tak młodej demografii bardzo często gotuje się dla dzieci.",
      "Dla urządzenia najciekawsze jest właśnie to: zupy, przeciery i papki dla najmłodszych, robione w jednym naczyniu, oraz duże porcje dla reszty domu. Czego nie zrobi, mówię wprost: nie ulepi pierogów i nie zastąpi wprawy. Zabiera tę część roboty, która jest wyłącznie czasem.",
    ],
  },

  districtsHeading: "Do których sołectw gminy Radgoszcz dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich pięciu, bez żadnej dopłaty za odległość. Gmina liczy siedem i pół tysiąca mieszkańców na osiemdziesięciu ośmiu kilometrach kwadratowych i leży na skraju Puszczy Sandomierskiej.",
    "Sołectwa to: Luszowice, Małec, Radgoszcz, Smyków i Żdżary. Warto wiedzieć, że starsze opisy gminy podają powierzchnię stu dwudziestu kilometrów kwadratowych — to dane historyczne, sprzed zmian administracyjnych.",
    "Najbardziej znanym miejscem jest zalew w Narożnikach: kąpielisko strzeżone codziennie od dziesiątej do osiemnastej, wstęp wolny, sprzęt wodny bezpłatny. To tam odbyło się Święto Powiśla Dąbrowskiego w sierpniu dwa tysiące dwudziestego czwartego roku.",
    "Na terenie gminy są też trzy cmentarze wojenne z pierwszej wojny światowej.",
    "Dojazd: kolei pasażerskiej w powiecie dąbrowskim nie ma. Samochodem najbliżej z Dąbrowy Tarnowskiej i z Tarnowa.",
  ],
  districts: [
    "Radgoszcz",
    "Luszowice",
    "Żdżary",
    "Smyków",
    "Małec",
  ],

  nearbyHeading: "Dąbrowa Tarnowska, Szczucin i Mędrzechów też są na mojej trasie",
  nearbyParagraphs: [
    "Gmina graniczy z Dąbrową Tarnowską, Szczucinem i Mędrzechowem. Dojeżdżam do wszystkich gmin powiatu dąbrowskiego bez doliczania kosztu dojazdu; blisko jest też do Tarnowa.",
    "Jedno rozróżnienie, bo bywa mylące: chleb żytni gruszowski, o którym można przeczytać w opisach Powiśla, pochodzi z Gruszowa Wielkiego w gminie Dąbrowa Tarnowska, a nie z tej gminy.",
  ],
  nearbyTowns: [
    "Dąbrowa Tarnowska",
    "Szczucin",
    "Mędrzechów",
    "Olesno",
    "Bolesław",
    "Tarnów",
  ],

  about: blokOMnie("do gminy Radgoszcz", "w powiecie dąbrowskim"),

  faq: [
    {
      question: "Mieszkam w Żdżarach albo Luszowicach. Dojedziesz?",
      answer:
        "Dojadę i nie doliczę za to ani złotówki. Wszystkie pięć sołectw gminy traktuję dokładnie tak samo. Przy umawianiu podaj nazwę wsi — to potrzebne wyłącznie do zaplanowania trasy.",
    },
    ...faqWspolne("w gminie Radgoszcz"),
    {
      question: "Właśnie się budujemy. Czy warto to brać pod uwagę przy kuchni?",
      answer:
        "Warto, i to z bardzo praktycznego powodu. Urządzenie zajmuje mniej więcej tyle co czajnik z podstawką, a zastępuje blender, malakser, mikser i część garnków — więc planując kuchnię od zera, można od razu policzyć mniej sprzętów i mniej gniazdek. Na prezentacji chętnie pokażę, ile miejsca realnie zajmuje, żeby to była decyzja na podstawie wymiaru, a nie zdjęcia.",
    },
  ],

  geo: { lat: 50.2058, lng: 21.1115 },
};
