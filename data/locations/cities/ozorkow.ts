import type { CityContent } from "../city-content";
import {
  REGION_LODZKIE,
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
 * OZORKÓW — gmina miejska w powiecie zgierskim, 17 969
 * mieszkańców (31.12.2024, GUS). Brief mówił 19 000 — zawyżone.
 * Spadek o 14,3% od 2002 r. UWAGA: zbiorcze listy podają
 * przestarzałe 19 456 — tej liczby nie używam.
 *
 * PRAWA MIEJSKIE 30 STYCZNIA 1816 r., dekretem namiestnika
 * Królestwa Polskiego gen. JÓZEFA ZAJĄCZKA. Wcześniej
 * krótkotrwały status oppidum w 1652 r.
 *
 * HISTORIA SUKIENNICZA: w 1807 r. właściciel wsi IGNACY
 * STARZYŃSKI podpisał umowy z sukiennikami, w tym z farbiarzami
 * z Saksonii — to uruchomiło rozwój osady. Bracia SCHLÖSSEROWIE
 * przybyli z Nadrenii w 1817 r., manufaktura od 1821 r.
 * W 1866 r. Ozorków stał się miastem rządowym.
 * Miasto leży nad BZURĄ; nazwę wywodzi się od zakola rzeki.
 *
 * OBALONE: NIE PISZĘ o Ozorkowie jako o mieście włókienniczym
 * w czasie teraźniejszym. Zakłady Przemysłu Bawełnianego
 * są wykreślone z KRS, a teren figuruje w katalogach obiektów
 * opuszczonych. NAZWY ZAKŁADU NIE PODAJĘ i nie robię z jego
 * upadku scenografii.
 * OBALONE: tramwaj do Ozorkowa NIE KURSUJE od 2018 r. i NIE
 * WRÓCI — planowana odbudowa 2026–2029 obejmuje wyłącznie
 * odcinek w granicach Zgierza. Nie piszę o tramwaju.
 * OBALONE: pałac Schlösserów NIE jest ruiną ani muzeum —
 * mieści DOM KULTURY I BIBLIOTEKĘ, objęty programem
 * rewitalizacji.
 * NIE PODAJĘ pierwszej wzmianki — źródła podają 1342, 1344
 * albo 1415.
 * NIE UŻYWAM etykiety „miasto ziemi obiecanej" — nie znalazłam
 * potwierdzenia, że Ozorków występuje u Reymonta.
 *
 * PRODUKTY Z LISTY PRODUKTÓW TRADYCYJNYCH: chleb razowy parzony
 * z Ozorkowa (wpis 14.12.2012) i chleb kozacki z Ozorkowa.
 * WYMIENIAM JE JEDNYM ZDANIEM, ALE NIE ROBIĘ Z NICH KĄTA —
 * chleb ma w serwisie dwie własne strony i trzeciej nie będzie.
 *
 * KĄT: ZASMAŻKA. Mąka z tłuszczem — podstawa polskiej kuchni
 * codziennej i czynność, przy której najczęściej robią się
 * grudki. Kąt pasuje do miasta zbudowanego wokół pracy
 * fizycznej i prostego, sytego jedzenia.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że zasmażka to najprostsza rzecz w kuchni i najczęściej
 *   psuta,
 * — że grudki biorą się z jednego: z wlania zimnego do gorącego
 *   albo odwrotnie, bez mieszania,
 * — że urządzenie rozwiązuje to całkowicie, bo grzeje i miesza
 *   w tym samym momencie i nie przestaje,
 * — że NIE ZRUMIENI zasmażki tak jak patelnia — ciemna, orzechowa
 *   zasmażka do czerniny czy do zupy grzybowej wymaga patelni
 *   i oka, i tego nie udaję,
 * — że biała i jasna zasmażka wychodzi z niego bez zarzutu,
 * — że to samo dotyczy beszamelu, sosu do kapusty, zupy
 *   ogórkowej i podprawianej fasolki,
 * — i ODMOWA: żadnych temperatur i czasów.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH — tłuszcz, mąka, „ciężkie
 *   jedzenie". MÓWIĘ NIE.
 * — ŻADNYCH NAZW FIRM, w tym dawnych zakładów.
 * — ŻADNYCH PORAD O PRZECHOWYWANIU SOSÓW.
 * — NIE ROBIĘ TŁA z upadku przemysłu ani z wyludniania.
 * — NIE PISZĘ o tramwaju.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Sosy, które się warzą"
 * (inne miasto) dotyczą nabiału i kilku stopni różnicy przy
 * ścinaniu się śmietany — to zupełnie inny mechanizm.
 * „Cukier i karmel" dotyczą przypalania. Tutaj chodzi o JEDNĄ
 * CZYNNOŚĆ: mąkę smażoną w tłuszczu i o grudki. Chleb ma
 * własne strony i tu jest tylko wzmianką.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PISZĘ, że w Ozorkowie działa przemysł włókienniczy.
 * — NIE PODAJĘ nazwy żadnego zakładu ani pracodawcy.
 * — NIE PODAJĘ pierwszej wzmianki o osadzie.
 * — NIE POWTARZAM porównania liczby mieszkańców Ozorkowa
 *   i Łodzi w 1828 r. — liczba dla Łodzi w źródle wygląda
 *   na błędną.
 * — NIE PODAJĘ daty wpisu chleba kozackiego — nieustalona.
 * — districts: nie potwierdzono osiedli statutowych.
 *   PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — 17 969 mieszkańców (31.12.2024, GUS),
 * — prawa miejskie 30 stycznia 1816 r., dekret namiestnika
 *   gen. Józefa Zajączka,
 * — 1807 r. — umowy Ignacego Starzyńskiego z sukiennikami
 *   i farbiarzami, m.in. z Saksonii; bracia Schlösserowie
 *   z Nadrenii od 1817 r., manufaktura od 1821 r.,
 * — 1866 r. — status miasta rządowego,
 * — miasto leży nad Bzurą; nazwa od zakola rzeki,
 * — pałac Schlösserów mieści dom kultury i bibliotekę,
 * — chleb razowy parzony z Ozorkowa na Liście Produktów
 *   Tradycyjnych od 14 grudnia 2012 r.
 */
export const OZORKOW: CityContent = {
  slug: "ozorkow",
  h1: "Thermomix Ozorków – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Ozorków (łódzkie) — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Ozorkowie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Ozorków — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Ozorkowie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Ozorkowa z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do okolicy.",

  highlights: highlightyStandardowe("Ozorków i okolice"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Grudek nie będzie. Ale ciemnej zasmażki też nie.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Ozorkowie – jak wygląda prezentacja?",
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
      id: "zasmazka",
      heading: "Miasto sukienników nad Bzurą — czyli o zasmażce i o grudkach",
      paragraphs: [
        "Ozorków zaczął się od umów, które w 1807 roku właściciel wsi Ignacy Starzyński podpisał z sukiennikami i farbiarzami, w tym sprowadzonymi z Saksonii. Prawa miejskie miasto dostało 30 stycznia 1816 roku, dekretem namiestnika generała Józefa Zajączka, a od 1817 działali tu bracia Schlösserowie z Nadrenii. Ich pałac stoi do dziś i mieści dom kultury oraz bibliotekę. To było miasto pracy fizycznej i prostego, sytego jedzenia — i o takim jedzeniu chcę napisać.",
        "Zasmażka. Mąka wsypana do rozgrzanego tłuszczu, chwilę pomieszana i rozprowadzona wywarem albo mlekiem. Najprostsza rzecz w polskiej kuchni i jednocześnie ta, którą najczęściej się psuje.",
        "Grudki biorą się zawsze z jednego i tego samego: z różnicy temperatur bez mieszania. Wlejesz zimne mleko do gorącej mąki albo gorący wywar do zimnej zasmażki i nie zdążysz rozmieszać — mąka zbija się w kulki, a te kulki są już nie do uratowania. Można je przecedzić, ale wtedy z zasmażki nie zostaje nic.",
        "I to jest jedno z niewielu miejsc, w których to urządzenie rozwiązuje problem całkowicie, a nie częściowo. Grzeje i miesza w tej samej sekundzie i nie przestaje ani na moment. Nie ma chwili, w której coś stoi bez ruchu, więc nie ma z czego zrobić się grudce. Beszamel, sos do kapusty, podprawiana fasolka szparagowa, zupa ogórkowa, sos koperkowy — wszystko wychodzi gładkie za pierwszym razem i za dziesiątym tak samo.",
        "Teraz to, czego nie zrobi, i mówię to wprost. Nie zrumieni zasmażki. Ciemna, orzechowa, prawie brązowa zasmażka — taka, jaka idzie do czerniny, do zupy grzybowej albo do ciemnego sosu — powstaje na patelni, przy stałym patrzeniu, i różnica między dobrą a spaloną to kilkanaście sekund. Tego urządzenie nie zrobi, bo nie ma jak wysuszyć i przypalić powierzchni. Biała i jasna wychodzi bez zarzutu; ciemna zostaje na patelni.",
        "Dodam jeszcze jedno, bo pytanie wraca: nie doradzę Wam żadnych proporcji ani czasów. Ilość mąki do tłuszczu jest w każdym domu inna i tak ma być.",
        "I nie napiszę Wam nic o tym, czy zasmażka jest zdrowa albo ciężka. Wiem, co się o niej dziś mówi. Ja sprzedaję urządzenie kuchenne, a nie porady żywieniowe — jecie to, co lubicie, i to nie moja sprawa.",
        "Na marginesie, skoro Ozorków: chleb razowy parzony z Ozorkowa jest na Liście Produktów Tradycyjnych od grudnia 2012 roku, a obok niego chleb kozacki. O samym chlebie pisałam osobno, przy innych miastach.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Ozorkowie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeżeli chcecie zobaczyć zasmażkę bez grudek na własne oczy — powiedzcie przy umawianiu. Robi się to w dwie minuty i przekonuje lepiej niż cała reszta prezentacji.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Ozorkowie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla ozorkowskiej rodziny",
      paragraphs: [
        "Ozorków liczy blisko osiemnaście tysięcy mieszkańców i leży nad Bzurą — nazwę wywodzi się od zakola, jakie rzeka tu tworzy. Prawa miejskie otrzymał 30 stycznia 1816 roku dekretem namiestnika generała Józefa Zajączka, a jego rozwój zaczął się jeszcze wcześniej, od umów z sukiennikami z 1807 roku i od przybycia braci Schlösserów z Nadrenii w 1817. W 1866 roku Ozorków stał się miastem rządowym. Pałac Schlösserów stoi do dziś i mieści dom kultury oraz bibliotekę; jest objęty programem rewitalizacji, tak samo jak dwa tutejsze kościoły i kamienice w centrum.",
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

  districtsHeading: "Do których części Ozorkowa dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — do centrum przy placu Jana Pawła II, na osiedla i do zabudowy nad Bzurą — a także do wsi okolicznej gminy wiejskiej Ozorków. Dojazd jest wszędzie bezpłatny.",
    "Przy umawianiu wystarczy podać ulicę albo miejscowość.",
  ],
  districts: [],

  nearbyHeading: "Poza Ozorków też przyjadę",
  nearbyParagraphs: [
    "Zgierz, Aleksandrów Łódzki, Łęczyca, Parzęczew, Łódź i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Zgierz", "Aleksandrów Łódzki", "Łęczyca", "Łódź", "Konstantynów Łódzki"],

  about: blokOMnie("do Ozorkowa", "w Ozorkowie i okolicy", REGION_LODZKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Ozorkowa bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wsi okolicznej gminy wiejskiej Ozorków — to dwie odrębne gminy o tej samej nazwie, ale przyjeżdżam do obu. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Ozorkowie"),
    {
      question: "Czy zrobi zasmażkę bez grudek?",
      answer:
        "Tak, i to jest jedno z niewielu miejsc, gdzie problem znika całkowicie, a nie częściowo. Grudki biorą się z różnicy temperatur bez mieszania — a urządzenie grzeje i miesza w tej samej sekundzie i nie przestaje. Beszamel, sos do kapusty, podprawiana fasolka, ogórkowa: gładkie za pierwszym razem.",
    },
    {
      question: "A ciemna zasmażka do czerniny albo do zupy grzybowej?",
      answer:
        "Tej nie zrobi. Zrumienienia nie ma jak w nim uzyskać — ciemna, orzechowa zasmażka powstaje na patelni, przy stałym patrzeniu, i różnica między dobrą a spaloną to kilkanaście sekund. Biała i jasna wychodzi bez zarzutu; ciemna zostaje na patelni.",
    },
    {
      question: "Jakie proporcje mąki do tłuszczu?",
      answer:
        "Nie podam Ci ich i nie podam czasów — w każdym domu jest to inaczej i tak ma być. Nie napiszę też, czy zasmażka jest zdrowa albo ciężka; sprzedaję urządzenie kuchenne, nie porady żywieniowe.",
    },
  ],

  geo: { lat: 51.9633, lng: 19.2914 },
};
