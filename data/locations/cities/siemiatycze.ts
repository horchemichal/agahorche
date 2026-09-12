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
 * SIEMIATYCZE — gmina MIEJSKA, siedziba powiatu siemiatyckiego.
 * MIASTO 13 340 (GUS 31.12.2024), powierzchnia 36,3 km².
 * ⚠ Notatka projektowa podawała 14 000 — ZAWYŻONE.
 * ⚠⚠ GMINA WIEJSKA SIEMIATYCZE TO ODRĘBNA JEDNOSTKA:
 * 5 694 mieszkańców, 226,8 km², 45 wsi, urząd w mieście.
 * SUMOWANIE OBU (≈19 tys.) TO TYPOWY BŁĄD.
 * Ciekawostka: 36,3 km² to bardzo dużo jak na 13 tys.
 * mieszkańców (Łapy: 12,1 km² przy 14 tys.).
 *
 * PRAWA MIEJSKIE STYCZEŃ 1542 r., nadał KRÓL ZYGMUNT I STARY
 * W WILNIE, na prośbę STANISŁAWA TĘCZYŃSKIEGO, właściciela
 * miasta. NA PRAWIE MAGDEBURSKIM.
 * Przywilej potwierdzony pieczęcią 31 SIERPNIA 1544 r.
 * na sejmie w Brześciu Litewskim.
 * Zawartość: PIĘCIOLETNIE ZWOLNIENIE Z PODATKÓW,
 * TRZY JARMARKI ROCZNE, TARGI TYGODNIOWE W CZWARTKI.
 * PRZYNALEŻNOŚĆ: PODLASIE NADBUŻAŃSKIE.
 * Miasto wyrosło jako ośrodek targowy po upadku Mielnika
 * i Drohiczyna.
 *
 * ⚠⚠ LISTA PRODUKTÓW TRADYCYJNYCH — „NADBUŻAŃSKA KAWA
 * ŻOŁĘDZIÓWKA", data wpisu 29 SIERPNIA 2008 r., kategoria
 * warzywa i owoce. SIEMIATYCZE WYMIENIONE WPROST w obszarze
 * (obok Drohiczyna i Ciechanowca). TO JEST PODSTAWA KĄTA.
 * Wytwarzanie: ŁUSKANIE ŻOŁĘDZI, OSTRUGANIE SKÓRKI,
 * SUSZENIE NA BLACHACH W ŁAGODNYM PIECU Z MIESZANIEM,
 * TŁUCZENIE I MIELENIE. Efekt: brązowy sypki proszek,
 * smak ostry, aromatyczny i gorzki; mieszany z kawą zwyczajną.
 *
 * ANNA PAULINA Z SAPIEHÓW JABŁONOWSKA — XVIII w. „złoty wiek"
 * miasta. Założyła ratusz, szpital, SZKOŁĘ POŁOŻNYCH,
 * DRUKARNIĘ oraz pałac z kolekcjami przyrodniczymi.
 * Jej salon odwiedzali Krasicki i Staszic.
 * ⚠ DAT ŻYCIA NIE PODAJĘ — źródło podaje (1744–1830),
 * data budzi wątpliwość, brak potwierdzenia.
 *
 * RZEKA KAMIONKA. TRZY ZBIORNIKI WODNE o łącznej powierzchni
 * ok. 33 ha. ⚠ NAZW ZBIORNIKÓW ANI ROKU POWSTANIA NIE PODAJĘ.
 * KOŚCIÓŁ WNIEBOWZIĘCIA NMP — obecny kształt 1719–1727,
 * barokowy.
 * ⚠ ORANŻERII NIE DATUJĘ — sprzeczność (1860 vs XVIII w.).
 * ⚠ KLASZTORU MISJONARZY NIE DATUJĘ — sprzeczność (XVII
 * vs późny barok).
 * GOSPODARKA HISTORYCZNA: manufaktury tkackie, cegielnie,
 * browary, gorzelnie, MŁYNY, warsztaty metalowe.
 * SIEMIATYCZE NIE NALEŻĄ DO CITTASLOW.
 *
 * KĄT: SKŁADNIKI, KTÓRE TRZEBA PRZYGOTOWAĆ, ZANIM W OGÓLE
 * STANĄ SIĘ SKŁADNIKIEM.
 * Kąt od żołędziówki: produktu, w którym cztery osobne
 * operacje (łuskanie, struganie, suszenie, mielenie)
 * poprzedzają moment, w którym cokolwiek trafia do garnka.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że przepisy zaczynają się od listy składników, jakby
 *   składniki były gotowe — a wiele z nich nie jest,
 * — NAMACZANIE: suche nasiona roślin strączkowych, suszone
 *   grzyby, suszone owoce, kasza gryczana niepalona —
 *   pominięcie tego kroku nie da się nadrobić gotowaniem,
 * — PRAŻENIE: orzechy, nasiona, przyprawy — inny składnik
 *   po prażeniu niż przed,
 * — SUSZENIE I ODPAROWANIE: gdy składnik ma za dużo wilgoci,
 * — ŁUSKANIE, OBIERANIE, USUWANIE BŁON I ŻYŁEK: praca,
 *   której nie widać w przepisie,
 * — DOPROWADZENIE DO TEMPERATURY POKOJOWEJ: to też jest
 *   przygotowanie,
 * — że te kroki są niewidoczne w spisie składników, więc
 *   ludzie planują czas źle i stąd bierze się wrażenie,
 *   że „gotowanie trwa wieczność",
 * — UCZCIWIE: to urządzenie nie skraca ANI JEDNEGO z tych
 *   kroków — one dzieją się poza nim,
 * — i że to jest właściwe kryterium przy zakupie: sprzęt
 *   skraca gotowanie, nie przygotowanie.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR (także żadnego
 *   „namaczaj przez noc" z liczbą godzin).
 * — ŻADNYCH PROPORCJI.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH — w szczególności
 *   NIC o kawie zbożowej jako „zdrowszej" ani o kofeinie.
 * — ŻADNYCH NAZW FIRM.
 * — ⚠ ŻOŁĘDZIE: opisuję je WYŁĄCZNIE jako produkt z Listy,
 *   NIE zachęcam do zbierania ani przetwarzania żołędzi
 *   w domu i NIE podaję żadnej instrukcji.
 *
 * ⚠ ETYKA — PODLASKIE:
 * — ZERO Zagłady, gett, pogromów, cmentarzy żydowskich.
 *   SYNAGOGA z 1797 r. — WYMIENIAM WYŁĄCZNIE jako budynek
 *   klasycystyczny, bez kontekstu wojennego.
 * — ZERO lat 1941/1943/1945, wysiedleń, pacyfikacji.
 * — ZERO granicy i Bugu jako granicy państwowej.
 * — ZERO konfliktów wyznaniowych. CERKWIE wymieniam
 *   wyłącznie jako zabytki.
 * — ZERO podziemia i akcji zbrojnych.
 * — ZERO biedy i wyludniania.
 * — ⚠ ZERO wątku „przednówkowego" przy żołędziówce: nie piszę,
 *   że jadano ją z głodu. Podaję ją jako wielowiekową
 *   tradycję, tak jak robi to opis urzędowy.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Wszystko przygotowane
 * przed startem" (Sulejów) dotyczy MISE EN PLACE, czyli
 * rozstawienia i odmierzenia tego, co już jest gotowe.
 * „Zamienniki" dotyczą braku składnika. „Kiszonki i zakwas"
 * dotyczą fermentacji. Tutaj chodzi o SKŁADNIKI, KTÓRE SAME
 * WYMAGAJĄ OBRÓBKI, zanim staną się tym, co wymienia przepis.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ dat życia Anny Pauliny Jabłonowskiej.
 * — NIE DATUJĘ oranżerii ani klasztoru misjonarzy.
 * — NIE PODAJĘ nazw ani roku powstania trzech zalewów.
 * — NIE UŻYWAM przydomka „mała Bruksela" — niezweryfikowany.
 * — NIE PRZYPISUJĘ Siemiatyczom MIELNICKIEGO KOROWAJA
 *   WESELNEGO — to gmina Mielnik.
 * — NIE MYLĘ miasta Siemiatycze z GMINĄ WIEJSKĄ SIEMIATYCZE.
 *   FAQ to rozróżnia.
 * — NIE PODAJĘ, czy Siemiatycze traciły prawa miejskie.
 * — districts: brak potwierdzonych osiedli. PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — miasto 13 340 mieszkańców na 36,3 km²,
 * — prawa miejskie na prawie magdeburskim nadane w styczniu
 *   1542 r. w Wilnie przez Zygmunta I Starego na prośbę
 *   Stanisława Tęczyńskiego; przywilej potwierdzono pieczęcią
 *   31 sierpnia 1544 r. na sejmie w Brześciu Litewskim
 *   i obejmował pięcioletnie zwolnienie z podatków, trzy
 *   jarmarki w roku i targi w czwartki,
 * — „Nadbużańska kawa żołędziówka" na Liście Produktów
 *   Tradycyjnych od 29 sierpnia 2008 r., z Siemiatyczami
 *   wymienionymi wprost w obszarze wytwarzania; powstaje przez
 *   łuskanie żołędzi, ostruganie skórki, suszenie na blachach
 *   w łagodnym piecu, tłuczenie i mielenie,
 * — księżna Anna Paulina z Sapiehów Jabłonowska założyła tu
 *   ratusz, szpital, szkołę położnych i drukarnię, a jej salon
 *   odwiedzali Ignacy Krasicki i Stanisław Staszic,
 * — rzeka Kamionka i trzy zbiorniki wodne o łącznej
 *   powierzchni około 33 ha,
 * — kościół Wniebowzięcia NMP w kształcie z lat 1719–1727,
 * — klasycystyczna synagoga z 1797 r.,
 * — historycznie działały tu manufaktury tkackie, cegielnie,
 *   browary, gorzelnie i młyny.
 */
export const SIEMIATYCZE: CityContent = {
  slug: "siemiatycze",
  h1: "Thermomix Siemiatycze – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Siemiatycze — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Siemiatyczach: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Siemiatycze — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Siemiatyczach. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Siemiatycz z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do okolicznych wsi.",

  highlights: highlightyStandardowe("Siemiatycze i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Przepisy zaczynają się od listy składników, jakby składniki były gotowe.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Siemiatyczach – jak wygląda prezentacja?",
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
      id: "przygotowanie-skladnikow",
      heading: "Cztery czynności przed pierwszą łyżką — czyli składniki, które trzeba dopiero zrobić",
      paragraphs: [
        "Na Liście Produktów Tradycyjnych figuruje od 29 sierpnia 2008 roku „Nadbużańska kawa żołędziówka”, a Siemiatycze są w opisie wymienione wprost jako jedno z miejsc jej wytwarzania. Ciekawe jest w niej to, co dzieje się zanim cokolwiek zostanie zaparzone: żołędzie się łuska, struga się z nich skórkę, suszy na blachach w łagodnym piecu, mieszając, a potem tłucze i mieli. Cztery osobne czynności — i dopiero na ich końcu powstaje coś, co w ogóle można nazwać składnikiem.",
        "To jest, moim zdaniem, najbardziej niedoceniana rzecz w domowej kuchni. Przepisy zaczynają się od listy składników, jakby wszystkie były gotowe do użycia. A spora ich część nie jest.",
        "Namaczanie to najczęstszy przypadek. Suche nasiona roślin strączkowych, suszone grzyby, suszone owoce — one nie są składnikiem, tylko półproduktem. Pominięcie namaczania nie da się nadrobić dłuższym gotowaniem: fasola gotowana bez namoczenia zostanie twarda w środku i miękka na zewnątrz, i tak zostanie.",
        "Prażenie zmienia składnik w coś innego. Orzechy, pestki, sezam, a przede wszystkim przyprawy w całości — po uprażeniu pachną i smakują zupełnie inaczej niż prosto z torebki. To jest jedna z tych rzeczy, po których człowiek dziwi się, że przez lata robił inaczej.",
        "Suszenie i odparowanie działa w drugą stronę: gdy składnik ma za dużo wilgoci, trzeba jej się pozbyć, zanim trafi do dania.",
        "Łuskanie, obieranie, usuwanie błon, żyłek i ogonków to praca, której w przepisie w ogóle nie widać. „Pół kilo fasolki szparagowej” to również kwadrans przy zlewie, o którym nikt nie uprzedza.",
        "I ostatnie, najprostsze: doprowadzenie do temperatury pokojowej. Masło, jajka, nabiał — to też jest przygotowanie, tylko takie, które nie wymaga nic poza wyjęciem z lodówki w odpowiednim momencie.",
        "Z tego wszystkiego bierze się jedno bardzo konkretne nieporozumienie. Ludzie planują czas na podstawie przepisu, a przepis podaje czas gotowania, nie czas przygotowania. Stąd wrażenie, że gotowanie od zera trwa wieczność — bo do policzonej godziny dochodzi niepoliczone czterdzieści minut łuskania, namaczania i czekania.",
        "Powiem teraz rzecz, którą sprzedawca sprzętu powinien powiedzieć, a rzadko mówi. To urządzenie nie skraca ani jednego z tych kroków. Ani jednego. Fasola musi się namoczyć tak samo, grzyby tak samo, masło tak samo musi zmięknąć. Wszystko to dzieje się poza urządzeniem i przed nim.",
        "Uważam, że to jest właściwe kryterium przy zakupie, dużo lepsze niż lista funkcji. Sprzęt skraca gotowanie, nie przygotowanie. Jeśli w Waszej kuchni najwięcej czasu zjada obieranie i krojenie — pomoże Wam znacznie mniej, niż obiecują reklamy. Jeśli najwięcej zjada stanie nad garnkiem i mieszanie — pomoże bardzo. Warto sobie odpowiedzieć na to pytanie uczciwie, zanim się wyda pieniądze.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Siemiatyczach?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Przy umawianiu warto powiedzieć, co w Waszej kuchni zjada najwięcej czasu: krojenie i obieranie czy stanie nad garnkiem. To zupełnie zmienia moją odpowiedź na pytanie, czy Wam się ten sprzęt przyda.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Siemiatyczach"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla siemiatyckiej rodziny",
      paragraphs: [
        "Miasto liczy przeszło trzynaście tysięcy mieszkańców i rozciąga się na ponad trzydziestu sześciu kilometrach kwadratowych — jak na tę liczbę mieszkańców to bardzo dużo. Prawa miejskie na prawie magdeburskim nadał Siemiatyczom w styczniu 1542 roku, w Wilnie, król Zygmunt I Stary, na prośbę właściciela miasta Stanisława Tęczyńskiego; przywilej potwierdzono pieczęcią 31 sierpnia 1544 roku na sejmie w Brześciu Litewskim, a dawał on pięcioletnie zwolnienie z podatków, trzy jarmarki w roku i targi w czwartki. Osiemnasty wiek to czas księżnej Anny Pauliny z Sapiehów Jabłonowskiej, która założyła tu ratusz, szpital, szkołę położnych i drukarnię, a w jej salonie bywali Ignacy Krasicki i Stanisław Staszic. Zachował się kościół Wniebowzięcia Najświętszej Maryi Panny w kształcie z lat 1719–1727 i klasycystyczna synagoga z 1797 roku. Przez miasto płynie Kamionka, a trzy zbiorniki wodne mają łącznie około trzydziestu trzech hektarów.",
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

  districtsHeading: "Do których części Siemiatycz dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do okolicznych wsi. Dojazd jest wszędzie bezpłatny.",
    "Przy umawianiu wystarczy podać ulicę i numer albo nazwę miejscowości.",
  ],
  districts: [],

  nearbyHeading: "Poza Siemiatycze też przyjadę",
  nearbyParagraphs: [
    "Drohiczyn, Ciechanowiec, Brańsk, Kleszczele i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Drohiczyn", "Ciechanowiec", "Brańsk", "Kleszczele"],

  about: blokOMnie("do Siemiatycz", "w Siemiatyczach i okolicy", REGION_PODLASIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Siemiatycz bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do okolicznych wsi. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku, bo to stale myli: miasto Siemiatycze i gmina wiejska Siemiatycze to dwie odrębne jednostki o tej samej nazwie, z urzędem gminy wiejskiej położonym w mieście. Do obu dojeżdżam.",
    },
    ...faqWspolne("w Siemiatyczach"),
    {
      question: "Dlaczego gotowanie od zera zajmuje mi więcej czasu, niż podaje przepis?",
      answer:
        "Bo przepis podaje czas gotowania, a nie czas przygotowania. Namaczanie, obieranie, łuskanie, prażenie i doprowadzanie nabiału do temperatury pokojowej nie są w nim policzone, choć potrafią zająć więcej niż samo gotowanie.",
      },
    {
      question: "Czy fasolę naprawdę trzeba namaczać?",
      answer:
        "Tak i tego kroku nie da się nadrobić dłuższym gotowaniem. Fasola gotowana bez namoczenia zostanie twarda w środku, a rozgotowana na zewnątrz. To samo dotyczy suszonych grzybów i suszonych owoców — to są półprodukty, nie gotowe składniki.",
    },
    {
      question: "Czy Thermomix skraca przygotowanie składników?",
      answer:
        "Nie, i to jest uczciwa odpowiedź. Namaczanie, obieranie i czekanie, aż masło zmięknie, dzieją się poza urządzeniem. Sprzęt skraca gotowanie, nie przygotowanie — jeśli w Waszej kuchni najwięcej czasu zjada krojenie, pomoże mniej, niż obiecują reklamy; jeśli stanie nad garnkiem, pomoże bardzo.",
    },
  ],

  geo: { lat: 52.4272, lng: 22.8631 },
};
