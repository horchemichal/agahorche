import type { CityContent } from "../city-content";
import {
  REGION_PODLASIE,
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
 * DĄBROWA BIAŁOSTOCKA — gmina miejsko-wiejska w powiecie
 * sokólskim.
 * MIASTO 4 967, GMINA 9 986 (GUS 31.12.2024).
 * POWIERZCHNIA GMINY 263,8 km². 52 SOŁECTWA —
 * potwierdzone dwoma źródłami.
 * ⚠ Notatka projektowa podawała 5 500 — ZAWYŻONE o 11%.
 * ⚠ Serwis lokalny podaje 13 661 (gmina) i 6 600 (miasto) —
 * DANE WYRAŹNIE PRZESTARZAŁE. Trzymam się GUS.
 *
 * PRAWA MIEJSKIE — CHRONOLOGIA NIEPEWNA. Strona urzędu podaje:
 * 1712 r. pierwsza wzmianka, formalnie 1772–1775 staraniem
 * ANTONIEGO TYZENHAUZA; utrata 1950, przywrócenie 1965.
 * ⚠ TO JEDNO ŹRÓDŁO, bez niezależnego potwierdzenia; GUS podaje
 * sprzecznie „2. połowa XVI w.". PISZĘ OSTROŻNIE: osada
 * targowa w XVII w., prawa miejskie w XVIII w. za Tyzenhauza,
 * przywrócone w 1965 r. NIE PODAJĘ roku utraty.
 * Geneza: 1558 r. bojar KUŹMA HORCZAKOWICZ oddał królowi
 * Zygmuntowi Augustowi wieś Dąbrowę. Osada z kolonizacji
 * PUSZCZY NOWODWORSKIEJ, rozwój dzięki reformom KRÓLOWEJ BONY
 * i położeniu na skrzyżowaniu szlaków.
 *
 * ⚠⚠ RZEKA — HIPOTEZA ZABITA. Strona urzędu pisze „nad rzeką
 * Biebrzą" — TO NIEŚCISŁE. Miasto leży NAD KROPIWNĄ,
 * dopływem Biebrzy. Potwierdzone dwoma niezależnymi źródłami.
 * ⚠⚠ BIEBRZAŃSKI PARK NARODOWY — gmina leży W OTULINIE,
 * NIE w granicach parku. BbPN: rozporządzenie z 9 WRZEŚNIA
 * 1993 r., 59 223 ha, największy park narodowy w Polsce.
 *
 * STRUKTURA UŻYTKOWANIA ZIEMI: grunty orne 45,24%,
 * lasy 16,9%, PASTWISKA 15,67%, ŁĄKI 12,69%, sady 0,70%.
 * ŁĄKI I PASTWISKA RAZEM 28,36%. 1 719 gospodarstw powyżej
 * 1 ha, ŚREDNIA WIELKOŚĆ 11,55 ha.
 *
 * ⚠⚠ LISTA PRODUKTÓW TRADYCYJNYCH — „KLINEK DĄBROWSKI",
 * data wpisu 25 LUTEGO 2014 r. wg gov.pl, kategoria produkty
 * mleczne. (⚠ Serwis lokalny podaje 28.02.2014 — używam gov.pl.)
 * Ser twarogowy z podgrzewanego mleka zsiadłego, KSZTAŁT
 * TRÓJKĄTNY, „KLINOWATY" — stąd nazwa. Wytwarzanie: mleko
 * podgrzewa się, przelewa DO ROGÓW WORKÓW LUB PŁÓTNA,
 * PRASUJE OBCIĄŻNIKAMI, kroi, soli i SUSZY W BUDYNKACH
 * ZWANYCH SERNIKAMI. Tradycja udokumentowana w piśmiennictwie
 * XVIII-wiecznym. W momencie wpisu wytwarzało go 10 gospodarzy.
 * ⚠ NIE MYLIĆ z KLINKIEM Z ŁAP (wpis 12.06.2019).
 *
 * ⚠⚠ WIATRAK TYPU HOLENDERSKIEGO — PODSTAWA KĄTA.
 * Dane NID: ROK BUDOWY 1924, wieża MUROWANA Z KAMIENIA
 * spajanego zaprawą, projektant JAN OWSIEJKO, murarz
 * JAN ZABŁOCKI. MIELIŁ ZBOŻE DO 1960 r. Średnica 840 cm,
 * wysokość z dachem 1340 cm. „Jeden z nielicznych przykładów
 * dobrze zachowanego murowanego wiatraka wieżowego".
 * WŁASNOŚĆ PRYWATNA, BEZ DOSTĘPU DLA ZWIEDZAJĄCYCH —
 * ⚠ NIE ZAPRASZAM DO ZWIEDZANIA.
 * ⚠ Serwis lokalny podaje „betonowy z 1928" — SPRZECZNE
 * z NID. Używam NID.
 *
 * KOŚCIÓŁ ŚW. STANISŁAWA — ⚠ NIE DATUJĘ, sprzeczność
 * (1869–1905 vs 1897–1902). Piszę „neogotycki, XIX/XX w.".
 * KOŚCIÓŁ ŚW. ANNY W KAMIENNEJ STAREJ (gmina Dąbrowa
 * Białostocka) — ok. 1610 r., fundator PIOTR WIESIOŁOWSKI,
 * konstrukcja ZRĘBOWA na kamiennej podmurówce, KRYTY GONTEM.
 * NAJSTARSZY DREWNIANY KOŚCIÓŁ W WOJEWÓDZTWIE PODLASKIM.
 * ZESPÓŁ KLASZTORNY W RÓŻANYMSTOKU (gmina Dąbrowa Białostocka) —
 * klasztor ukończony 1794 r., późnobarokowy; od 2000 r.
 * dom pielgrzyma. To tu przeniesiono w 1832 r. dominikanów
 * z Choroszczy.
 * DĄBROWA BIAŁOSTOCKA NIE NALEŻY DO CITTASLOW.
 *
 * KĄT: STARY SPRZĘT, KTÓRY NADAL DZIAŁA — kiedy NIE warto
 * wymieniać.
 * Kąt od wiatraka z 1924 r., który mielił zboże jeszcze
 * w 1960 — trzydzieści sześć lat po zbudowaniu i długo po tym,
 * jak wszyscy uznali tę technologię za skończoną.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST — I TO JEST STRONA, NA KTÓREJ
 * AGA ODRADZA ZAKUP:
 * — że technologie w kuchni żyją dłużej, niż się sądzi,
 *   i że wiatrak mielący w 1960 roku jest tego dowodem,
 * — że sprzęt wymienia się z trzech powodów: bo się zepsuł,
 *   bo przestał wystarczać, albo bo jest nowszy — i tylko
 *   dwa pierwsze są powodami,
 * — CZEGO NIE WARTO WYMIENIAĆ: dobrej patelni, ostrego noża,
 *   sprawnego miksera ręcznego, garnka z grubym dnem,
 *   działającego piekarnika,
 * — że kuchnia pełna sprzętu używanego raz w roku jest gorsza
 *   niż kuchnia z pięcioma rzeczami używanymi codziennie,
 * — PYTANIA PRZED ZAKUPEM CZEGOKOLWIEK: co dokładnie przestanę
 *   robić ręcznie; ile razy w tygodniu; gdzie to będzie stało;
 *   co z tego, co mam, przestanie być potrzebne,
 * — UCZCIWIE, WPROST I BEZ ASEKURACJI: jeżeli Wasza obecna
 *   kuchnia działa, a Wy gotujecie rzadko — NIE KUPUJCIE.
 *   Mówię to, sprzedając ten sprzęt,
 * — i że urządzenie zastępuje kilka rzeczy naraz, więc warto
 *   policzyć, co po zakupie zniknie z szafki — bo jeśli nic,
 *   to jest to zakup dokładany, nie zastępujący.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH KWOT, WYLICZEŃ ZWROTU ANI PORÓWNAŃ CENOWYCH.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH NAZW FIRM ANI MAREK SPRZĘTU.
 * — NIE ZAPRASZAM do zwiedzania wiatraka — prywatny.
 *
 * ⚠ ETYKA — PODLASKIE:
 * — ZERO Zagłady, gett, pogromów, cmentarzy żydowskich.
 * — ZERO lat 1941/1943/1945, wysiedleń, pacyfikacji.
 *   Utraty praw miejskich NIE tłumaczę zniszczeniami wojennymi.
 * — ZERO granicy, wojska, podziemia.
 * — ZERO konfliktów narodowościowych i wyznaniowych.
 * — ZERO bezrobocia, biedy i wyludniania.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Garnki i naczynia
 * odziedziczone" (Krośniewice) dotyczą przedmiotów po kimś.
 * „Rzecz kupowana raz" dotyczy jednego trwałego przedmiotu.
 * „Nie kupujcie wszystkiego naraz" dotyczy tempa
 * kompletowania. „Przebudowa, nie budowa od zera" dotyczy
 * remontu kuchni. Tutaj chodzi o DECYZJĘ O WYMIANIE
 * DZIAŁAJĄCEGO SPRZĘTU — i o to, kiedy jej nie podejmować.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ roku utraty praw miejskich.
 * — NIE DATUJĘ kościoła świętego Stanisława.
 * — NIE PISZĘ, że miasto leży nad Biebrzą — leży nad Kropiwną.
 * — NIE PISZĘ, że gmina leży w Biebrzańskim PN — leży
 *   w otulinie.
 * — NIE PODAJĘ fundatora ani architekta zespołu
 *   w Różanymstoku.
 * — NIE PODAJĘ, ilu gospodarzy wytwarza dziś klinek —
 *   liczba 10 pochodzi z 2014 r.
 * — NIE MYLĘ klinka dąbrowskiego z KLINKIEM Z ŁAP.
 * — NIE MYLĘ Dąbrowy Białostockiej z DĄBROWĄ GÓRNICZĄ
 *   ani z CZARNĄ BIAŁOSTOCKĄ. FAQ to rozróżnia.
 * — districts: brak potwierdzonych osiedli. PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — miasto 4 967, gmina 9 986 mieszkańców na 263,8 km²,
 *   52 sołectwa,
 * — początek od 1558 r., gdy bojar Kuźma Horczakowicz oddał
 *   królowi Zygmuntowi Augustowi wieś Dąbrowę; osada powstała
 *   z kolonizacji Puszczy Nowodworskiej, a rozwinęła się dzięki
 *   reformom królowej Bony i położeniu na skrzyżowaniu szlaków;
 *   prawa miejskie w XVIII w. staraniem Antoniego Tyzenhauza,
 *   przywrócone w 1965 r.,
 * — miasto leży nad Kropiwną, dopływem Biebrzy; gmina znajduje
 *   się w otulinie Biebrzańskiego Parku Narodowego,
 *   utworzonego 9 września 1993 r. i liczącego 59 223 ha —
 *   największego parku narodowego w Polsce,
 * — łąki i pastwiska zajmują łącznie 28,36% powierzchni gminy,
 *   a średnie gospodarstwo ma 11,55 ha,
 * — „Klinek dąbrowski" wpisany na Listę Produktów Tradycyjnych
 *   25 lutego 2014 r.: ser twarogowy o trójkątnym, klinowatym
 *   kształcie, odsączany w rogach worków, prasowany
 *   obciążnikami, solony i suszony w budynkach zwanych
 *   sernikami; tradycja udokumentowana w piśmiennictwie
 *   osiemnastowiecznym,
 * — murowany wiatrak typu holenderskiego z 1924 r., wzniesiony
 *   z kamienia według projektu Jana Owsiejki, mielił zboże
 *   do 1960 r.; ma 840 cm średnicy i 1340 cm wysokości
 *   z dachem, jest własnością prywatną,
 * — kościół świętej Anny w Kamiennej Starej z około 1610 r.,
 *   fundacji Piotra Wiesiołowskiego, o konstrukcji zrębowej
 *   na kamiennej podmurówce, kryty gontem — najstarszy
 *   drewniany kościół w województwie podlaskim,
 * — późnobarokowy klasztor w Różanymstoku ukończony w 1794 r.,
 *   od 2000 r. dom pielgrzyma.
 */
export const DABROWA_BIALOSTOCKA: CityContent = {
  slug: "dabrowa-bialostocka",
  h1: "Thermomix Dąbrowa Białostocka – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Dąbrowa Białostocka — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Dąbrowie Białostockiej: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Dąbrowa Białostocka — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Dąbrowie Białostockiej. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Dąbrowy Białostockiej z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich sołectw gminy.",

  highlights: highlightyStandardowe("Dąbrowa Białostocka i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Wiatrak z 1924 roku mielił zboże jeszcze w 1960. Sprzęt żyje dłużej, niż się sądzi.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Dąbrowie Białostockiej – jak wygląda prezentacja?",
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
      id: "stary-sprzet",
      heading: "Wiatrak, który mielił do 1960 roku — czyli kiedy nie warto niczego wymieniać",
      paragraphs: [
        "W Dąbrowie Białostockiej stoi murowany wiatrak typu holenderskiego, wzniesiony w 1924 roku z kamienia spajanego zaprawą, według projektu Jana Owsiejki. Ma osiem metrów czterdzieści średnicy i ponad trzynaście metrów wysokości z dachem. Najciekawsza jest w nim jednak jedna data: mielił zboże do 1960 roku. Trzydzieści sześć lat pracy i to długo po tym, jak wszyscy uznali tę technologię za skończoną. Dziś jest własnością prywatną i nie zwiedza się go — ale sam fakt, że pracował tak długo, wart jest zapamiętania.",
        "Napiszę więc rzecz, która jest wbrew mojemu interesowi, i chcę, żeby zabrzmiała bez żadnych zastrzeżeń: sprzęt kuchenny żyje dłużej, niż się nam wydaje, i bardzo często nie ma powodu, żeby cokolwiek wymieniać.",
        "Sprzęt wymienia się z trzech powodów. Bo się zepsuł. Bo przestał wystarczać — na przykład rodzina się powiększyła. Albo dlatego, że jest nowszy model. Tylko dwa pierwsze są powodami. Trzeci jest nastrojem.",
        "Rzeczy, których szczególnie nie warto wymieniać, dopóki działają: dobra patelnia, która się dotarła. Ostry nóż — bo nóż się ostrzy, a nie kupuje od nowa. Sprawny mikser ręczny. Garnek z grubym dnem. Piekarnik, który grzeje. Te przedmioty przy odpowiednim traktowaniu przeżyją kilka mieszkań.",
        "Widzę też u ludzi coś odwrotnego do tego, co obiecują reklamy: kuchnia pełna sprzętu używanego raz do roku jest gorsza niż kuchnia z pięcioma rzeczami używanymi codziennie. Nie z powodów estetycznych. Po prostu każdy przedmiot, który stoi, zabiera miejsce temu, który pracuje, i po pewnym czasie na blacie nie ma już gdzie kroić.",
        "Dlatego przed kupieniem czegokolwiek — mojego sprzętu również — warto zadać sobie cztery pytania. Co dokładnie przestanę robić ręcznie? Ile razy w tygodniu to się zdarzy? Gdzie to będzie stało, kiedy nie pracuje? I najważniejsze: co z tego, co już mam, przestanie być potrzebne?",
        "To ostatnie pytanie jest testem uczciwym i bezlitosnym. Jeśli po zakupie nic z szafki nie zniknie, to nie jest zakup zastępujący, tylko dokładany. A dokładać da się w nieskończoność i to jest droga donikąd.",
        "Teraz powiem to wprost, wiedząc, że sprzedaję właśnie ten sprzęt. Jeżeli Wasza kuchnia działa, sprzęt macie sprawny, a gotujecie rzadko — nie kupujcie. Nie dlatego, że urządzenie jest złe, tylko dlatego, że u Was będzie stało. To są duże pieniądze i wolę, żebyście wydali je na coś, czego naprawdę potrzebujecie, niż żebyście za rok żałowali. Mówiłam to już kilku osobom na spotkaniach i żadnej z nich nie żałuję.",
        "Kiedy więc ten zakup ma sens? Wtedy, gdy odpowiedź na czwarte pytanie jest długa — gdy z szafki naprawdę znika kilka rzeczy naraz, bo urządzenie robi to, co robiły one. I wtedy, gdy gotujecie często, a nie od święta. Tylko wtedy.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/przepisy", label: "Przepisy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Dąbrowie Białostockiej?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli macie wątpliwości, czy ten sprzęt jest Wam w ogóle potrzebny, powiedzcie to wprost przy umawianiu. Wolę przyjechać i powiedzieć „raczej nie”, niż sprzedać coś, co będzie stało w szafce.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Dąbrowie Białostockiej"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla dąbrowskiej rodziny",
      paragraphs: [
        "Samo miasto liczy niecałe pięć tysięcy mieszkańców, a cała gmina blisko dziesięć tysięcy, w pięćdziesięciu dwóch sołectwach, na ponad dwustu sześćdziesięciu kilometrach kwadratowych. Historia zaczyna się w 1558 roku, gdy bojar Kuźma Horczakowicz oddał królowi Zygmuntowi Augustowi wieś Dąbrowę; osada wyrosła z kolonizacji Puszczy Nowodworskiej i rozwinęła się dzięki reformom królowej Bony oraz położeniu na skrzyżowaniu szlaków, a prawa miejskie zawdzięcza osiemnastowiecznym staraniom Antoniego Tyzenhauza — po przerwie odzyskała je w 1965 roku. Wbrew temu, co często się pisze, miasto leży nie nad Biebrzą, lecz nad Kropiwną, jej dopływem; gmina znajduje się w otulinie Biebrzańskiego Parku Narodowego, utworzonego 9 września 1993 roku i będącego z blisko sześćdziesięcioma tysiącami hektarów największym parkiem narodowym w Polsce. Łąki i pastwiska zajmują tu łącznie ponad dwadzieścia osiem procent powierzchni. Stąd pochodzi „Klinek dąbrowski”, wpisany na Listę Produktów Tradycyjnych 25 lutego 2014 roku. W Kamiennej Starej stoi kościół świętej Anny z około 1610 roku — najstarszy drewniany kościół w województwie podlaskim — a w Różanymstoku późnobarokowy klasztor ukończony w 1794 roku.",
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

  districtsHeading: "Do których części gminy Dąbrowa Białostocka dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich pięćdziesięciu dwóch sołectw gminy, w tym do Kamiennej Starej i Różanegostoku. Dojazd jest wszędzie bezpłatny.",
    "Przy umawianiu wystarczy podać miejscowość i ulicę albo numer domu.",
  ],
  districts: [],

  nearbyHeading: "Poza Dąbrowę Białostocką też przyjadę",
  nearbyParagraphs: [
    "Sokółka, Suchowola, Lipsk, Sztabin i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Sokółka", "Suchowola", "Lipsk", "Sztabin"],

  about: blokOMnie("do Dąbrowy Białostockiej", "w Dąbrowie Białostockiej i całej gminie", REGION_PODLASIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Dąbrowy Białostockiej bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich pięćdziesięciu dwóch sołectw gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku, bo obie nazwy bywają mylone: Dąbrowa Białostocka leży w powiecie sokólskim, a Czarna Białostocka w białostockim — dzieli je kilkadziesiąt kilometrów. To także nie jest Dąbrowa Górnicza.",
    },
    ...faqWspolne("w Dąbrowie Białostockiej"),
    {
      question: "Czy warto wymieniać sprzęt kuchenny, który jeszcze działa?",
      answer:
        "Zwykle nie. Sprzęt wymienia się, gdy się zepsuł albo przestał wystarczać — to, że jest nowszy model, nie jest powodem. Dobrej patelni, ostrego noża, sprawnego miksera i garnka z grubym dnem nie warto wymieniać, dopóki pracują; nóż się ostrzy, a nie kupuje od nowa.",
    },
    {
      question: "Jak sprawdzić, czy zakup ma sens?",
      answer:
        "Czterema pytaniami: co dokładnie przestanę robić ręcznie, ile razy w tygodniu to się zdarzy, gdzie to będzie stało, gdy nie pracuje, i co z tego, co już mam, przestanie być potrzebne. To ostatnie jest najważniejsze — jeśli po zakupie nic z szafki nie znika, to nie jest zakup zastępujący, tylko dokładany.",
    },
    {
      question: "Czy zdarza Ci się odradzić zakup?",
      answer:
        "Tak i mówię to wprost, choć ten sprzęt sprzedaję. Jeżeli Wasza kuchnia działa, sprzęt jest sprawny, a gotujecie rzadko — nie kupujcie. Nie dlatego, że urządzenie jest złe, tylko dlatego, że u Was będzie stało. To duże pieniądze i wolę powiedzieć „raczej nie” przed zakupem niż tłumaczyć się rok później.",
    },
  ],

  geo: { lat: 53.6553, lng: 23.3492 },
};
