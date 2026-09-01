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
 * KROŚCIENKO NAD DUNAJCEM — GMINA WIEJSKA w powiecie nowotarskim.
 * 6 630 mieszkańców (31.12.2024), 57,27 km².
 *
 * OŚ STRONY: DAWNE MIASTO. Prawa miejskie 1348–1932, degradacja
 * z powodu zbyt małej liczby mieszkańców, dziewięć lat wchłonięcia
 * przez Szczawnicę (1973–1982) i odzyskanie samodzielności.
 * Do dziś zachowany rynek — jedyna gmina wiejska w powiecie
 * z prawdziwym rynkiem miejskim; urząd gminy ma adres „Rynek 35”.
 *
 * ⚠️ ROZŁĄCZNOŚĆ: Nowy Targ ma oś targową (lokacja 1346) i skórzaną,
 * Szczawnica ma Ruś Szlachtowską, Czorsztyn zaporę. Krościenko ma
 * historię ODWROTNĄ do Nowego Targu — miasto, które przestało nim być.
 * NIE DAWAĆ MU OSI „PIENINY / SPŁYW DUNAJCEM”.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — 1251 — Krościenko wymienione u Długosza,
 * — 1348 — KAZIMIERZ WIELKI NADAJE PRAWA MIEJSKIE na prawie
 *   magdeburskim, pod nazwą „Crosno”,
 * — 1350 — parafia; 1433 — najazd husycki niszczy przywilej lokacyjny,
 * — 1493 — wizyta króla Jana Olbrachta, dar chrzcielnicy,
 * — 1565 — szkoła parafialna; 1770 — zajęcie przez Austriaków,
 * — 1822 — rodzina Grossów odkrywa źródła wód mineralnych
 *   (Stefan, Michalina, Maria, Anna),
 * — 1910 — pomnik Władysława Jagiełły w 500. rocznicę Grunwaldu,
 * — 1932 — UTRATA PRAW MIEJSKICH (za mała liczba mieszkańców).
 *   W TYM SAMYM ROKU, 1 CZERWCA 1932 R., utworzono PIENIŃSKI PARK
 *   NARODOWY,
 * — 1973–1982 — Krościenko połączone ze Szczawnicą w jeden organizm;
 *   usamodzielnienie 2 listopada 1982 r.,
 * — 1983 — dodanie do nazwy członu „nad Dunajcem”,
 * — DYREKCJA PIENIŃSKIEGO PARKU NARODOWEGO MIEŚCI SIĘ W KROŚCIENKU,
 *   ul. Jagiellońska 107B — nie w Szczawnicy ani Czorsztynie,
 * — KOŚCIÓŁ WSZYSTKICH ŚWIĘTYCH — XIV w., polichromie z XIV w.,
 * — KOŚCIÓŁ ŚW. MARCINA W GRYWAŁDZIE — drewniany, XV w.,
 *   Szlak Architektury Drewnianej Małopolski,
 * — KOPIA GÓRKA — centrum Ruchu Światło-Życie, dzieło ks. Franciszka
 *   Blachnickiego; kaplica Chrystusa Sługi poświęcona przez
 *   kard. Karola Wojtyłę,
 * — SOŁECTWA WG URZĘDU GMINY (8): Dziadowe Kąty, Grywałd, Hałuszowa,
 *   Kąty Niwki, Krościenko Centrum, Krościenko Zawodzie, Krośnica,
 *   Tylka Biały Potok.
 *   ⚠️ GUS PODAJE 5 MIEJSCOWOŚCI STATYSTYCZNYCH (Grywałd, Hałuszowa,
 *   Krościenko n.D., Krośnica, Tylka), Wikipedia 9 nazw. NIE MIESZAĆ
 *   TYCH LIST — używam listy URZĘDU GMINY,
 * — REGON: 882 podmioty (2024),
 * — KGW: „Zielony Las” oraz KGW w Krośnicy,
 * — DROGA WOJEWÓDZKA z Nowego Targu przez Czorsztyn i Krościenko
 *   do Starego Sącza; ścieżka VeloDunajec. BRAK KOLEI W GMINIE.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — DATY UZNANIA ZA UZDROWISKO. Źródła podają 1862 albo 1934
 *   i sprzeczności nie udało się rozstrzygnąć. POMINIĘTA,
 * — CYKLICZNYCH IMPREZ KULINARNYCH. Ośrodek kultury publikuje
 *   kalendarz wyłącznie jako grafiki — NIE POTWIERDZONO żadnej,
 * — WPISU NA LISTĘ PRODUKTÓW TRADYCYJNYCH. Nie znaleziono,
 * — BEZROBOCIA I WYNAGRODZEŃ. Dane POWIATOWE, nie gminne,
 * — TWIERDZENIA, ŻE GMINA GRANICZY ZE SŁOWACJĄ. Jedno źródło tak
 *   podaje, pozostałe nie — prawdopodobnie błąd.
 *
 * PUŁAPKI:
 * — KROŚCIENKO WYŻNE (powiat krośnieński) i KROŚCIENKO koło Ustrzyk
 *   Dolnych to INNE MIEJSCOWOŚCI. Wyszukiwarki je mieszają,
 * — PRZYSTAŃ SPŁYWU DUNAJCEM JEST W SROMOWCACH/KĄTACH, GMINA
 *   CZORSZTYN. Krościenko bywa metą, nie startem,
 * — ŹRÓDŁO „STEFAN” ISTNIEJE I TU, I W SZCZAWNICY.
 */

export const KROSCIENKO: CityContent = {
  slug: "kroscienko",
  h1: "Thermomix Krościenko nad Dunajcem – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Krościenko nad Dunajcem — cena",
  seoDescription:
    "Thermomix w Krościenku nad Dunajcem: bezpłatna prezentacja TM7 u Ciebie w kuchni, cena i raty 0%. Dojazd do wszystkich sołectw bez dopłat. Tel. 517 185 691.",
  ogTitle: "Thermomix Krościenko nad Dunajcem — zobacz TM7 u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w Krościenku nad Dunajcem. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do Krościenka nad Dunajcem i do wszystkich sołectw gminy przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje.",

  highlights: highlightyStandardowe("cała gmina, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption:
      "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Krościenku – jak wygląda prezentacja?",
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
      heading: "Wieś, która przez sześćset lat była miastem",
      paragraphs: [
        "Urząd gminy w Krościenku ma adres: Rynek trzydzieści pięć. To nie jest przenośnia ani nazwa nadana dla ozdoby — to prawdziwy rynek, taki, jakie mają miasta lokowane w średniowieczu. I Krościenko takim miastem było, przez blisko sześćset lat.",
        "Prawa miejskie na prawie magdeburskim nadał tej miejscowości Kazimierz Wielki w tysiąc trzysta czterdziestym ósmym roku, pod nazwą Crosno — czyli dwa lata po tym, jak ten sam król lokował Nowy Targ. Wcześniej, w tysiąc dwieście pięćdziesiątym pierwszym, Krościenko wymienia już Długosz.",
        "Potem było różnie. W tysiąc czterysta trzydziestym trzecim najazd husycki zniszczył przywilej lokacyjny. W tysiąc czterysta dziewięćdziesiątym trzecim odwiedził miasto król Jan Olbracht i podarował kościołowi chrzcielnicę. W tysiąc pięćset sześćdziesiątym piątym działała już szkoła parafialna. W tysiąc osiemset dwudziestym drugim rodzina Grossów odkryła tu źródła wód mineralnych.",
        "Koniec przyszedł w tysiąc dziewięćset trzydziestym drugim roku i był całkiem prozaiczny: Krościenko straciło prawa miejskie, bo miało za mało mieszkańców. Ciekawy zbieg okoliczności — w tym samym roku, pierwszego czerwca, utworzono Pieniński Park Narodowy, drugi najstarszy park narodowy w Polsce.",
        "Historia miała jeszcze jeden zakręt. Od tysiąc dziewięćset siedemdziesiątego trzeciego do osiemdziesiątego drugiego Krościenko było administracyjnie połączone ze Szczawnicą w jeden organizm. Samodzielność odzyskało drugiego listopada osiemdziesiątego drugiego roku, a rok później do nazwy dodano człon „nad Dunajcem”.",
        "I jedna rzecz, która to wszystko domyka. Dyrekcja Pienińskiego Parku Narodowego mieści się właśnie w Krościenku, przy ulicy Jagiellońskiej. Administracyjną stolicą Pienin jest więc formalnie wieś — wieś z rynkiem, kościołem z czternastego wieku i pomnikiem Jagiełły postawionym w pięćsetlecie Grunwaldu.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w gminie Krościenko?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Podaj sołectwo albo przynajmniej część miejscowości. Gmina dzieli się na osiem jednostek, a samo Krościenko na Centrum i Zawodzie — dla mnie to różnica w planowaniu trasy, nie w cenie.",
        "Jeśli pracujesz sezonowo przy turystach albo prowadzisz kwatery, powiedz to od razu. Lipiec i sierpień bywają u Was nie do ruszenia, a maj, czerwiec i wrzesień są zwykle zupełnie spokojne.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Krościenku"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Sezon trwa cztery miesiące, rok ma dwanaście",
      paragraphs: [
        "W gminie zarejestrowanych jest niecałe dziewięćset podmiotów gospodarczych przy sześciu i pół tysiąca mieszkańców. Ogromna większość z nich to firmy jedno- albo kilkuosobowe, w dużej mierze związane z turystyką i z ruchem, który latem przechodzi przez Pieniny.",
        "Taka gospodarka ma rytm, którego nie widać w statystyce, a który zna każda tutejsza kuchnia. Od maja do września dzień nie ma stałych godzin i nikt nie wie, o której siądzie do obiadu. Od października do kwietnia jest odwrotnie: czasu jest więcej, a pieniędzy mniej.",
        "Praktyczna korzyść w sezonie jest jedna i bardzo konkretna. Danie jednogarnkowe wstawia się i wychodzi. Gotuje się bez człowieka, samo się wyłącza i czeka na tego, kto wróci pierwszy. Nikt nie musi pilnować garnka ani wracać, żeby zamieszać.",
        "Poza sezonem najbardziej opłaca się gotowanie z zapasem i do zamrażarki. Zupy, sosy, pasty, ciasto na pierogi, chleb — robione seriami w jednym naczyniu, wtedy kiedy jest spokój. Latem odbiera się to z zamrażarki zamiast gotować od zera.",
        "Trzecia rzecz dotyczy tego, kto gotuje. Ponieważ przepis prowadzi krok po kroku, obiad może zrobić ktokolwiek, kto akurat jest w domu — także nastolatek. W rodzinie, w której w sezonie pracują oboje dorośli, to bywa realnym odciążeniem.",
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
    heading: "Krościenko i gotowanie — kuchnia bez metryki",
    paragraphs: [
      "Zacznę od tego, czego nie znalazłam, bo tak jest uczciwiej. Nie ma wpisu na ministerialnej Liście Produktów Tradycyjnych przypisanego wprost tej gminie i nie udało mi się potwierdzić żadnej cyklicznej imprezy kulinarnej — miejscowy ośrodek kultury publikuje kalendarz wyłącznie w postaci grafik, więc po prostu do niego nie dotarłam.",
      "To, co jest potwierdzone, jest skromniejsze, ale prawdziwe: działają tu dwa koła gospodyń wiejskich, „Zielony Las” i koło w Krośnicy, a obok nich Stowarzyszenie Kobiet Pienińskich i miejscowy oddział Związku Podhalan. To one, a nie żaden rejestr, trzymają tutejszą kuchnię.",
      "A kuchnia jest tu pieniński, czyli pogranicza. Krościenko leży między Podhalem, Sądecczyzną i Spiszem, i przez wieki wszystkie trzy tu docierały. Nie ma jednej listy „naszych dań”, którą można by wypisać i zamknąć temat. Jest natomiast kuchnia domowa: zupy na kościach, kwaśnica, ziemniaki, kapusta, sery, ciasto drożdżowe.",
      "Dla urządzenia to dobra wiadomość, bo ono nie narzuca przepisów. Możesz w nim odtworzyć zupę babci co do składnika, tylko bez trzydziestu minut stania przy garnku. Możesz zrobić ciasto na pierogi bez wyrabiania rękami i pasztet bez maszynki do mielenia.",
      "Czego nie zrobi, powiem wprost: nie ulepi pierogów i nie zastąpi wprawy. Nie wybierze dobrego twarogu i nie doprawi za Ciebie zupy. Zabiera tę część roboty, która jest tylko czasem — rozdrabnianie, wyrabianie, mieszanie i pilnowanie, żeby nie przywarło.",
    ],
  },

  districtsHeading: "Do których sołectw gminy Krościenko dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich, bez żadnej dopłaty za odległość. Gmina liczy około sześciu i pół tysiąca mieszkańców na pięćdziesięciu siedmiu kilometrach kwadratowych, z czego prawie połowa to lasy.",
    "Z podziałem administracyjnym jest tu drobne zamieszanie, więc powiem, czego się trzymam. Urząd gminy wymienia osiem jednostek: Dziadowe Kąty, Grywałd, Hałuszowa, Kąty Niwki, Krościenko Centrum, Krościenko Zawodzie, Krośnica oraz Tylka Biały Potok. Statystyka publiczna liczy inaczej, bo grupuje to w pięć miejscowości. Ja podaję listę za urzędem.",
    "W Grywałdzie stoi drewniany kościół świętego Marcina z piętnastego wieku, wpisany na Szlak Architektury Drewnianej Małopolski. W samym Krościenku jest kościół Wszystkich Świętych z czternastego wieku, z polichromiami z tego samego stulecia. Na Kopiej Górce działa centrum Ruchu Światło-Życie, założone przez księdza Franciszka Blachnickiego.",
    "Dojazd: kolei w gminie nie ma. Prowadzi tędy droga wojewódzka z Nowego Targu przez Czorsztyn do Starego Sącza, a z Krakowa jedzie się zakopianką i dalej w stronę Pienin. Biegnie tu również trasa rowerowa VeloDunajec.",
  ],
  districts: [
    "Krościenko Centrum",
    "Krościenko Zawodzie",
    "Grywałd",
    "Krośnica",
    "Hałuszowa",
    "Tylka Biały Potok",
    "Dziadowe Kąty",
    "Kąty Niwki",
  ],

  nearbyHeading: "Szczawnica, Czorsztyn i Ochotnica też są na mojej trasie",
  nearbyParagraphs: [
    "Tuż obok leży Szczawnica — dziś osobna gmina, choć od tysiąc dziewięćset siedemdziesiątego trzeciego do osiemdziesiątego drugiego roku obie tworzyły jedną jednostkę administracyjną. Dojeżdżam do obu tak samo.",
    "Dalej są Czorsztyn, Ochotnica Dolna i Łapsze Niżne. Do żadnej z tych gmin nie doliczam kosztu dojazdu, a przy umawianiu wystarczy, że podasz sołectwo.",
  ],
  nearbyTowns: [
    "Szczawnica",
    "Czorsztyn",
    "Ochotnica Dolna",
    "Łapsze Niżne",
    "Nowy Targ",
    "Kraków",
  ],

  about: blokOMnie("do Krościenka nad Dunajcem", "w powiecie nowotarskim"),

  faq: [
    {
      question: "Mieszkam w Grywałdzie albo Krośnicy. Dojedziesz?",
      answer:
        "Dojadę i nie doliczę za to ani złotówki. Wszystkie sołectwa gminy traktuję tak samo jak samo Krościenko. Przy umawianiu podaj miejscowość, bo od tego zależy tylko to, jak zaplanuję trasę.",
    },
    ...faqWspolne("w Krościenku"),
    {
      question: "Czy chodzi o Krościenko nad Dunajcem, czy to inne Krościenko?",
      answer:
        "O to nad Dunajcem, w powiecie nowotarskim, w Pieninach. W Polsce są jeszcze Krościenko Wyżne w powiecie krośnieńskim i Krościenko koło Ustrzyk Dolnych — to zupełnie inne miejscowości, kilkaset kilometrów stąd. Ta strona dotyczy gminy z rynkiem i dyrekcją Pienińskiego Parku Narodowego.",
    },
  ],

  geo: { lat: 49.4404, lng: 20.4282 },
};
