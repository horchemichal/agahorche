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
 * NOWY TARG — GMINA WIEJSKA, powiat nowotarski. 21 sołectw,
 * ponad 23 tys. mieszkańców na 207,62 km².
 *
 * ⚠️ UWAGA NA BLIŹNIAKA: obok istnieje MIASTO NOWY TARG
 * (plik `nowy-targ.ts`) — osobna gmina miejska, ok. 33 tys.
 * mieszkańców. URZĄD TEJ GMINY MIEŚCI SIĘ W MIEŚCIE, przy
 * ul. Bulwarowej 9. WIEŚ O NAZWIE NOWY TARG NIE ISTNIEJE.
 * Osie rozłączne:
 *   — MIASTO: rytm targowy, branża skórzana po kombinacie,
 *   — GMINA WIEJSKA: obwarzanek bez stolicy, spinający Podhale
 *     ze Spiszem, i rekordowy konkurs potraw.
 *
 * OŚ STRONY: GMINA-OBWARZANEK BEZ WŁASNEJ STOLICY, KTÓRA SPINA
 * DWIE KRAINY. Osiemnaście wsi podhalańskich i TRZY SPISKIE:
 * Nowa Biała, Krempachy i Dursztyn.
 * ⚠️ SPISZ JAKO REGION jest osią gminy ŁAPSZE NIŻNE — tutaj
 * wyłącznie jako element struktury gminy, bez rozwijania tematu.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — 21 SOŁECTW: Dębno, Długopole, Dursztyn, Gronków, Harklowa,
 *   Klikuszowa, Knurów, Krauszów, Krempachy, Lasek, Ludźmierz,
 *   Łopuszna, Morawczyna, Nowa Biała, Obidowa, Ostrowsko, Pyzówka,
 *   Rogoźnik, Szlembark, Waksmund, Trute.
 *   ⚠️ LUDNOŚĆ POSZCZEGÓLNYCH SOŁECTW NIEPOTWIERDZONA,
 * — SIEDZIBA URZĘDU: ul. Bulwarowa 9, 34-400 Nowy Targ — czyli
 *   W MIEŚCIE, do którego gmina nie należy,
 * — WSIE SPISKIE W GMINIE: Nowa Biała, Krempachy, Dursztyn,
 * — POWIERZCHNIA 207,62 km². Ludność: 23 277 (dane urzędu gminy)
 *   albo 24 070 (GUS/vademecum 2019). ⚠️ ROZBIEŻNOŚĆ — podawać
 *   opisowo albo z datą,
 * — KOŚCIÓŁ ŚW. MICHAŁA ARCHANIOŁA W DĘBNIE — LISTA UNESCO,
 * — DWÓR TETMAJERÓW W ŁOPUSZNEJ, ok. 1790 r., filia Muzeum
 *   Tatrzańskiego. W Łopusznej także DOM PAMIĘCI KS. JÓZEFA
 *   TISCHNERA,
 * — LUDŹMIERZ — sanktuarium, bazylika mniejsza; opisywany
 *   jako najstarsza wieś Podhala,
 * — KONKURS POTRAW REGIONALNYCH W ŁOPUSZNEJ, dziś pod nazwą
 *   „Góralskie Jodło”: 47. EDYCJA 23 LIPCA 2019 R.,
 *   17 KÓŁ GOSPODYŃ Z GMINY, ŁĄCZNIE 557 POTRAW. Wymienione:
 *   pyzy pyzowiańskie (Pyzówka), kwaśnica, gołąbki.
 *   ⚠️ Rodowód konkursu sięga lat 70.; aktualnej edycji
 *   nie zweryfikowano — piszę o skali, nie o najbliższej dacie,
 * — GOSPODARKA (GUS 2019): 1 813 podmiotów REGON, w tym 258
 *   w przemyśle i 444 w budownictwie. 343 zarejestrowanych
 *   bezrobotnych, stopa 2,3%,
 * — KOLEJ: przystanki PYZÓWKA (km 15,052) i LASEK (km 18,098)
 *   na linii 99. Realnie mieszkańcy korzystają ze stacji
 *   w mieście Nowy Targ. Drogi: DK47 i DK49.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — LUDNOŚCI SOŁECTW. Nie znaleziono zestawienia,
 * — DATY NAJBLIŻSZEJ EDYCJI KONKURSU POTRAW,
 * — NAZW PRACODAWCÓW. Niepotwierdzone,
 * — WPISU NA LISTĘ PRODUKTÓW TRADYCYJNYCH. Nie zweryfikowano,
 * — SPISZA JAKO TEMATU. Należy do Łapsz Niżnych.
 *
 * PUŁAPKI:
 * — NIGDY NIE PISAĆ „we wsi Nowy Targ” — taka wieś nie istnieje.
 *   Pisać „gmina wiejska Nowy Targ”,
 * — ADRES URZĘDU JEST W MIEŚCIE — nie sugerować, że to siedziba
 *   w obrębie gminy,
 * — NIE PRZYPISYWAĆ GMINIE Jarmarku Podhalańskiego, Nowej
 *   Targowicy ani NZPS — to miasto,
 * — KREMPACHY, NOWA BIAŁA I DURSZTYN TO SPISZ, nie Podhale.
 *   Nie pisać o nich „podhalańskie”,
 * — DĘBNO z kościołem z listy UNESCO należy do TEJ gminy,
 *   nie do Czorsztyna.
 */

export const NOWY_TARG_GMINA: CityContent = {
  slug: "nowy-targ-gmina",
  h1: "Thermomix gmina Nowy Targ – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix gmina Nowy Targ — cena",
  seoDescription:
    "Thermomix w gminie wiejskiej Nowy Targ: bezpłatna prezentacja TM7 u Ciebie w kuchni — Ludźmierz, Waksmund, Łopuszna, Krempachy. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix gmina Nowy Targ — zobacz TM7 u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w gminie wiejskiej Nowy Targ. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do gminy wiejskiej Nowy Targ przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje. Dojeżdżam do wszystkich dwudziestu jeden sołectw, bez dopłaty za odległość.",

  highlights: highlightyStandardowe("wszystkie 21 sołectw, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption:
      "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w gminie Nowy Targ – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem, ze składnikami i z naczyniami, gdyby były potrzebne. Ty nie kupujesz nic i niczego nie przygotowujesz — wystarczy wolny kawałek blatu, gniazdko i godzina spokoju. Tak samo w Ludźmierzu, jak w Waksmundzie, Łopusznej czy Krempachach.",
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
      heading: "Gmina, która nie ma własnej stolicy — i leży w dwóch krainach",
      paragraphs: [
        "Ta gmina jest zbudowana inaczej niż wszystkie inne, o których pisałam. Nie ma własnej stolicy: dwadzieścia jeden sołectw okala pierścieniem miasto, do którego nie należy, a urząd gminy urzęduje w tym mieście, przy ulicy Bulwarowej. Wsi o nazwie Nowy Targ nie ma i nigdy nie było.",
        "Druga rzecz jest jeszcze ciekawsza. Osiemnaście tutejszych wsi to Podhale, ale trzy — Nowa Biała, Krempachy i Dursztyn — leżą już na Spiszu. To inna kraina: inna gwara, inny strój, inna kuchnia i inna historia, bo Spisz przez wieki należał do Węgier. Ta gmina jako jedyna w powiecie spina obie te krainy w jednej strukturze administracyjnej.",
        "W praktyce znaczy to, że jadąc z Klikuszowej do Krempach, przejeżdżam między dwoma światami etnograficznymi, nie opuszczając jednej gminy. O samym Spiszu piszę szerzej przy Łapszach Niżnych, bo tam jest jego środek — tutaj jest jego skraj.",
        "Rozrzut jest też historyczny. W Dębnie stoi drewniany kościół świętego Michała Archanioła, wpisany na listę światowego dziedzictwa UNESCO. W Łopusznej jest dwór Tetmajerów z około tysiąc siedemset dziewięćdziesiątego roku, filia Muzeum Tatrzańskiego, a obok Dom Pamięci księdza Józefa Tischnera. Ludźmierz z kolei uchodzi za najstarszą wieś Podhala i ma sanktuarium w randze bazyliki mniejszej.",
        "Cała gmina zajmuje ponad dwieście siedem kilometrów kwadratowych i liczy przeszło dwadzieścia trzy tysiące mieszkańców — dodam uczciwie, że dane urzędu i Głównego Urzędu Statystycznego różnią się tu o blisko osiemset osób, więc podaję to zaokrąglone.",
        "Dla mnie ta struktura ma bardzo praktyczne znaczenie: przy umawianiu pytam zawsze o sołectwo, nigdy o „Nowy Targ”. Bo Nowy Targ to albo miasto, do którego nie jadę, gdy jedziemy do gminy, albo adres urzędu, pod którym nikt nie mieszka.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w gminie Nowy Targ?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Powiedz nazwę sołectwa — i to jest tutaj naprawdę ważne, bo jest ich dwadzieścia jeden, a samo „Nowy Targ” nic mi nie mówi: to nazwa gminy i nazwa sąsiedniego miasta, ale nie nazwa żadnej tutejszej wsi. Dojazd wszędzie jest bez dopłaty.",
        "Jeśli masz gospodarstwo, powiedz po prostu, o której masz spokojną godzinę. Dopasowuję się do obrządku i prac polowych. Weekendy są równie normalnym terminem jak wieczory w tygodniu.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w gminie Nowy Targ"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Dwadzieścia jeden wsi, jedno miasto obok",
      paragraphs: [
        "Ta gmina ma bardzo niskie bezrobocie — nieco ponad dwa procent — i nie jest to zasługa dużego zakładu, bo takiego tu nie ma. Zasługą jest miasto, które gmina otacza: praca, szkoła, szpital, targ i dworzec są kilka kilometrów od każdej wsi.",
        "To układ, który spotykam rzadko. W większości gmin wiejskich, do których jeżdżę, do najbliższego miasta jest dwadzieścia albo czterdzieści kilometrów. Tutaj jest kilka. Dzień nie jest więc rozciągnięty dojazdem, tylko poszatkowany: ktoś wpada do domu w środku dnia, ktoś inny wraca późno, dzieci wracają ze szkoły w mieście.",
        "Praktyczna korzyść jest w takim domu inna niż w gminie oddalonej od wszystkiego. Nie chodzi o to, że nie ma gdzie kupić obiadu — chodzi o to, że obiad ma czekać i być dobry o kilku różnych porach. Danie jednogarnkowe gotuje się bez nikogo, samo się wyłącza i nie robi się gorsze po odgrzaniu.",
        "Druga rzecz to skala. Domy są tu duże i wielopokoleniowe, a gotuje się dla większej liczby osób niż w mieście. Rozdrabnianie, ucieranie, wyrabianie ciasta — to wszystko przy garnku dla ośmiu osób zajmuje realnie dużo czasu i dokładnie tę część urządzenie przejmuje.",
        "Trzecia rzecz to zapasy i przetwory z własnego. W gminie, w której gospodarstw jest wiele, jesień oznacza przerabianie wszystkiego naraz — powidła, przeciery, kiszonki, mrożonki. Seriami, w jednym naczyniu, bez stania i mieszania.",
        "Rodzicom najmłodszych dzieci przydaje się to, że da się ugotować i zmiksować w jednym naczyniu, bez przelewania gorących rzeczy. Starsze dzieci często zaczynają gotować same, bo przepis prowadzi krok po kroku.",
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
    heading: "Pięćset pięćdziesiąt siedem potraw w jeden dzień",
    paragraphs: [
      "W Łopusznej odbywa się konkurs potraw regionalnych o rodowodzie sięgającym lat siedemdziesiątych. Na czterdziestej siódmej edycji stanęło do niego siedemnaście kół gospodyń z tej gminy, a na stołach znalazło się łącznie pięćset pięćdziesiąt siedem potraw.",
      "Zatrzymam się przy tej liczbie, bo jest nadzwyczajna. Pięćset pięćdziesiąt siedem dań jednego dnia, w jednej gminie. To nie jest impreza folklorystyczna dla przyjezdnych — to jest przegląd tego, co siedemnaście wiejskich kuchni potrafi ugotować, kiedy się postara. Nie znam drugiej takiej skali w żadnej z gmin, o których pisałam.",
      "Wśród nagradzanych potraw są między innymi pyzy pyzowiańskie z Pyzówki, kwaśnica i gołąbki. Nazwa pierwszej z nich jest przy okazji ładnym dowodem, jak lokalna bywa tutejsza kuchnia: danie nazwane od wsi, a wieś prawdopodobnie od dania.",
      "Muszę dodać zastrzeżenie, które powtarzam wszędzie: to są potrawy konkursowe, a nie wpisy na ministerialną Listę Produktów Tradycyjnych. Oscypek i bryndza podhalańska mają unijną ochronę nazwy, ale obejmuje ona całe Podhale, nie tę gminę. Wpisu przypisanego wprost gminie nie zweryfikowałam.",
      "Co z tego wynika dla urządzenia? Popatrzmy na te pyzy i gołąbki. Ciasto trzeba wyrobić, ziemniaki zetrzeć, farsz zmielić i wymieszać — a przy gotowaniu na konkurs albo na dożynki robi się to nie na cztery osoby, tylko na kilkadziesiąt. Wyrabianie i rozdrabnianie urządzenie przejmuje w całości; lepienie i zawijanie zostaje rękami i tak zostanie.",
      "Kwaśnica z kolei w ogóle nie potrzebuje pilnowania — gotuje się w stałej temperaturze i nie wykipi. To akurat najprostszy przykład tego, co ten sprzęt naprawdę robi: nie gotuje lepiej, tylko zwalnia Cię ze stania przy garnku.",
    ],
  },

  districtsHeading: "Gdzie w gminie Nowy Targ dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich dwudziestu jeden sołectw, bez żadnej dopłaty za odległość: Ludźmierza, Waksmunda, Łopusznej, Dębna, Harklowej, Ostrowska, Gronkowa, Klikuszowej, Knurowa, Krauszowa, Długopola, Lasku, Morawczyny, Obidowej, Pyzówki, Rogoźnika, Szlembarku, Trutego oraz spiskich Nowej Białej, Krempach i Dursztyna.",
    "Warto wiedzieć, że trzy ostatnie leżą na Spiszu, a nie na Podhalu — to inna kraina etnograficzna, z inną gwarą i inną kuchnią. Ta gmina jako jedyna w powiecie łączy obie.",
    "Kilka miejsc, które warto znać. W Dębnie stoi drewniany kościół świętego Michała Archanioła z listy światowego dziedzictwa UNESCO. W Łopusznej jest dwór Tetmajerów z końca osiemnastego wieku, filia Muzeum Tatrzańskiego, i Dom Pamięci księdza Józefa Tischnera. Ludźmierz uchodzi za najstarszą wieś Podhala i ma sanktuarium w randze bazyliki mniejszej.",
    "Dojazd: w granicach gminy są dwa przystanki kolejowe, w Pyzówce i Lasku, ale w praktyce jeździ się ze stacji w mieście Nowy Targ. Przez gminę przechodzą drogi krajowe czterdzieści siedem i czterdzieści dziewięć. Cała gmina zajmuje ponad dwieście siedem kilometrów kwadratowych, więc jest rozległa — dlatego przy umawianiu proszę o nazwę sołectwa.",
  ],
  districts: [
    "Ludźmierz",
    "Waksmund",
    "Łopuszna",
    "Dębno",
    "Harklowa",
    "Ostrowsko",
    "Gronków",
    "Klikuszowa",
    "Knurów",
    "Krauszów",
    "Długopole",
    "Lasek",
    "Morawczyna",
    "Obidowa",
    "Pyzówka",
    "Rogoźnik",
    "Szlembark",
    "Trute",
    "Nowa Biała",
    "Krempachy",
    "Dursztyn",
  ],

  nearbyHeading: "Nowy Targ, Szaflary i Czorsztyn też są na mojej trasie",
  nearbyParagraphs: [
    "Miasto Nowy Targ leży w środku tej gminy i jest osobną jednostką — urząd gminy wiejskiej mieści się zresztą właśnie tam. Dojeżdżam i tu, i tam, bez dopłaty.",
    "Dalej mam Szaflary, Czorsztyn, Ochotnicę Dolną i Białym Dunajcem w stronę Zakopanego. Jeśli mieszkasz w Krempachach albo Nowej Białej, bliżej Ci przez Spisz w stronę Łapsz Niżnych — to też moja trasa.",
  ],
  nearbyTowns: [
    "Nowy Targ",
    "Szaflary",
    "Czorsztyn",
    "Ochotnica Dolna",
    "Biały Dunajec",
    "Kraków",
  ],

  about: blokOMnie("do gminy Nowy Targ", "w powiecie nowotarskim"),

  faq: [
    {
      question: "Czy istnieje wieś Nowy Targ?",
      answer:
        "Nie — Nowy Targ to nazwa miasta i nazwa otaczającej je gminy wiejskiej, ale wsi o takiej nazwie nie ma. Gmina składa się z dwudziestu jeden sołectw, od Ludźmierza i Waksmunda po spiskie Krempachy, a jej urząd mieści się w mieście, przy ulicy Bulwarowej. Dlatego przy umawianiu proszę zawsze o nazwę sołectwa.",
    },
    ...faqWspolne("w gminie Nowy Targ"),
    {
      question: "Mieszkam w Krempachach. To Podhale czy Spisz?",
      answer:
        "Spisz — podobnie jak Nowa Biała i Dursztyn. To trzy spiskie wsie w gminie, która poza tym jest podhalańska, z inną gwarą, innym strojem i inną kuchnią. Ta gmina jako jedyna w powiecie łączy obie krainy. Dojeżdżam tam bez dopłaty, tak samo jak wszędzie indziej.",
    },
    {
      question: "Gotujemy na dożynki dla kilkudziesięciu osób. Da radę?",
      answer:
        "Da, ale powiem uczciwie, jak to wygląda: przy takich ilościach gotuje się partiami i to normalne. Urządzenie przejmuje wyrabianie ciasta, mielenie farszu i rozdrabnianie — czyli te czynności, które przy gotowaniu na pięćdziesiąt osób zajmują najwięcej czasu. Lepienie i zawijanie zostaje rękami. Na prezentacji chętnie policzę to na Waszych realnych ilościach.",
    },
  ],

  geo: { lat: 49.4636, lng: 19.9714 },
};
