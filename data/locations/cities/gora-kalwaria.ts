import type { CityContent } from "../city-content";
import {
  REGION_MAZOWSZE,
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
 * GÓRA KALWARIA — powiat piaseczyński, woj. mazowieckie.
 * MIASTO 12 188 (GUS 31.12.2024), 13,7 km², 891,6 os./km²,
 * 120 m n.p.m.
 *
 * ⚠ HOMONIMY: GÓRA KALWARIA ≠ KALWARIA ZEBRZYDOWSKA
 *   ≠ GÓRA (dolnośląskie). FAQ to rozróżnia.
 *
 * HISTORIA:
 * — wieś Góra istniała od XIII w., ale MIASTO ZAŁOŻONO
 *   DOPIERO PRZYWILEJEM MICHAŁA KORYBUTA WIŚNIOWIECKIEGO
 *   Z 26 LUTEGO 1670 r. — jako projekt urbanistyczny od zera;
 *   dwie główne ulice tworzyły figurę, ponad 40 obiektów
 *   rozmieszczono według planu, a architektem był
 *   prawdopodobnie Tylman z Gameren,
 *   ⚠⚠ PIERWOTNEJ NAZWY MIASTA I JEGO CHARAKTERU
 *     PIELGRZYMKOWEGO NIE ROZWIJAM — temat wyznaniowy.
 *     Piszę wyłącznie, że miasto zaprojektowano od zera
 *     według planu. TWARDA GRANICA.
 *   ⚠ KĄT „zaprojektowane naraz kontra dokładane po kolei"
 *     (Zamość) i „UKŁAD KUCHNI" (Michałowo) SĄ ZAJĘTE —
 *     planu miasta NIE ROBIĘ KĄTEM.
 * — ⚠⚠ JATKI MIEJSKIE Z 1836 r. — PODSTAWA KĄTA:
 *   klasycystyczne kramy handlowe przy ratuszu, projekt
 *   BONIFACEGO WITKOWSKIEGO (autora ratusza); miały charakter
 *   JATEK PIEKARSKO-RZEŹNICZYCH — pieczywo i mięso sprzedawane
 *   w jednym rzędzie kramów; działały do 1939 r.,
 *   zrekonstruowane w latach 50.
 * — ratusz 1829–1834, proj. Bonifacy Witkowski i Henryk
 *   Marconi,
 * — zakład przetwórstwa owocowo-warzywnego przy ul. Pijarskiej
 *   działał od 1966 r., m.in. na eksport; dziś go nie ma.
 *   ⚠ NAZWY ZAKŁADU NIE PODAJĘ i NIE ROBIĘ TEMATU Z JEGO
 *     KOŃCA. TWARDA GRANICA.
 *
 * GEOGRAFIA: gmina leży na Równinie Warszawskiej i w Dolinie
 * Środkowej Wisły; podłoże to żwiry, piaski i gliny morenowe.
 * Rejon grójecko-warecko-piaseczyński to największe skupisko
 * sadownicze w Polsce; ok. połowy gospodarstw w gminie
 * zajmuje się sadownictwem.
 * ⚠ NIE TWIERDZĘ, że gmina jest liderem sadowniczym —
 *   w rankingu powierzchni sadów jabłoniowych NIE MA jej
 *   w czołówce (dominują Warka, Błędów, Biała Rawska).
 * ⚠ NIE TWIERDZĘ, że sadownictwo jest tu tradycją od wieków
 *   — to zjawisko nowsze. TWARDA GRANICA.
 *
 * ⚠ ŻADNEGO PRODUKTU Z GMINY NIE POTWIERDZONO NA LIŚCIE
 *   PRODUKTÓW TRADYCYJNYCH (weryfikacja niepełna — nie
 *   twierdzę, że go nie ma; po prostu żadnego nie wymieniam).
 *
 * KĄT: CO OBOK CZEGO — sąsiedztwo produktów w koszyku,
 * w siatce i na półce.
 * Kąt od jatek z 1836 roku, opisanych jako piekarsko-rzeźnicze:
 * jeden rząd kramów, w którym pieczywo stało obok mięsa.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że o tym, co z czym leży, myśli się w kuchni dopiero
 *   wtedy, gdy coś się zepsuje albo przejdzie zapachem,
 * — ŻE SĄ TRZY RZECZY, KTÓRE PRZECHODZĄ Z PRODUKTU
 *   NA PRODUKT: ZAPACH, WILGOĆ I DOJRZEWANIE,
 * — ZAPACH: chleb obok cebuli, masło obok wędzonej ryby,
 *   ser obok melona — tłuszcz i pieczywo chłoną zapachy
 *   najszybciej i najtrwalej ze wszystkiego,
 * — ŻE MASŁO JEST TU NAJWRAŻLIWSZE I NAJCZĘŚCIEJ
 *   POSZKODOWANE — trzyma się je zamknięte, nie w otwartej
 *   maselniczce obok wszystkiego,
 * — WILGOĆ: pieczywo obok czegoś mokrego mięknie, a warzywa
 *   obok czegoś suchego wiotczeją; dlatego chleb nie leży
 *   w lodówce razem z warzywami,
 * — DOJRZEWANIE: jabłka i banany przyspieszają dojrzewanie
 *   sąsiadów ⚠ JEDNYM AKAPITEM, ODSYŁAM DO OSOBNEJ STRONY,
 *   NIE ROZWIJAM,
 * — CO Z TEGO WYNIKA PRZY ZAKUPACH: w jednej siatce nie wozi
 *   się pieczywa razem z chemią i proszkiem do prania,
 *   a mięsa razem z tym, co jemy na surowo,
 * — ŻE W LODÓWCE NAJWAŻNIEJSZA ZASADA JEST JEDNA: TO, CO
 *   JEMY NA SUROWO, NIGDY POD TYM, CO JEMY PO OBRÓBCE
 *   ⚠ PISZĘ TO JAKO ZASADĘ PORZĄDKU, BEZ TEZ SANITARNYCH
 *     I BEZ NAZYWANIA ZAGROŻEŃ. TWARDA GRANICA,
 * — ŻE NAJPROSTSZE ROZWIĄZANIE TO ZAMKNIĘTE POJEMNIKI —
 *   nie dla estetyki, tylko dlatego, że odcinają sąsiedztwo,
 * — ŻE CZĘŚĆ SĄSIEDZTW JEST POŻĄDANA: wanilia w cukrze,
 *   czosnek w oliwie, zioła w soli — to ten sam mechanizm,
 *   tylko użyty świadomie,
 * — UCZCIWIE: urządzenie nie ma z przechowywaniem nic
 *   wspólnego,
 * — ale jedna rzecz się łączy: to, co przeszło obcym zapachem,
 *   rzadko da się uratować — więc najlepszym wyjściem jest
 *   przerobić taki produkt tam, gdzie zapach i tak zginie
 *   wśród innych, czyli w daniu wyrazistym, a nie
 *   w delikatnym.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PROPORCJI.
 * — ⚠⚠ ŻADNYCH TWIERDZEŃ SANITARNYCH, ZDROWOTNYCH
 *   I MIKROBIOLOGICZNYCH. ZERO nazywania bakterii i zatruć.
 *   Zasadę „surowe nie nad gotowym" podaję jako PORZĄDEK,
 *   nie jako ostrzeżenie. TWARDA GRANICA.
 * — ŻADNYCH NAZW FIRM.
 * — ⚠ ZERO TEMATU WYZNANIOWEGO I PIELGRZYMKOWEGO.
 *   TWARDA GRANICA.
 *
 * ⚠ ETYKA:
 * — ZERO tematów wojennych.
 * — ZERO konfliktów narodowościowych i wyznaniowych.
 * — ZERO bezrobocia, biedy i wyludniania.
 * — ZERO tematu końca zakładu przetwórstwa.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH — OBOWIĄZKOWE:
 * — „LODÓWKA — CO GDZIE STOI I DLACZEGO" (Witnica) dotyczy
 *   STREF I PÓŁEK W LODÓWCE.
 *   ⚠⚠ DLATEGO O LODÓWCE PISZĘ MINIMALNIE, tylko tam, gdzie
 *     chodzi o SĄSIEDZTWO PRODUKTÓW, nigdy o układ półek.
 * — „CO PSUJE SIĘ NAJPIERW" (Łomianki) dotyczy KOLEJNOŚCI
 *   ZJADANIA.
 * — „WARZYWA POZA LODÓWKĄ" (Trzciel) dotyczy MIEJSCA
 *   PRZECHOWYWANIA WARZYW.
 * — „POWIETRZE" (Grójec) dotyczy TLENU.
 * — „UKŁAD KUCHNI" (Michałowo) dotyczy ROZMIESZCZENIA
 *   STANOWISK PRACY.
 * TUTAJ chodzi o WPŁYW PRODUKTÓW NA SIEBIE NAWZAJEM —
 * o zapach, wilgoć i dojrzewanie przechodzące z jednego
 * na drugie.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PISZĘ o pielgrzymkowym charakterze miasta.
 * — NIE TWIERDZĘ, że gmina jest liderem sadowniczym.
 * — NIE TWIERDZĘ, że sadownictwo jest tu tradycją od wieków.
 * — NIE PODAJĘ nazw zakładów ani osiedli miejskich.
 * — NIE WYMIENIAM produktu z Listy Produktów Tradycyjnych.
 * — NIE NAZYWAM zagrożeń sanitarnych.
 * — NIE MYLĘ GÓRY KALWARII z KALWARIĄ ZEBRZYDOWSKĄ.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — wieś Góra istniała od XIII w., a miasto założono
 *   przywilejem Michała Korybuta Wiśniowieckiego 26 lutego
 *   1670 r. — jako projekt urbanistyczny od zera, w którym
 *   ponad czterdzieści obiektów rozmieszczono według planu,
 *   a autorem założenia był prawdopodobnie Tylman z Gameren,
 * — ratusz zbudowano w latach 1829–1834 według projektu
 *   Bonifacego Witkowskiego i Henryka Marconiego,
 * — w 1836 r. przy ratuszu stanęły klasycystyczne jatki
 *   miejskie, projektu Bonifacego Witkowskiego; miały
 *   charakter jatek piekarsko-rzeźniczych, działały do 1939 r.
 *   i zostały zrekonstruowane w latach pięćdziesiątych,
 * — zachowały się też kościół „Na Górce" z 1680 r.,
 *   przebudowany w 1791, Wieczernik w dzielnicy Marianki
 *   z 1674 r., kościół parafialny z lat 1755–1756 projektu
 *   Jakuba Fontany i kaplica na skarpie wiślanej z drugiej
 *   połowy XVIII w.,
 * — gmina leży na Równinie Warszawskiej i w Dolinie Środkowej
 *   Wisły, a jej podłoże tworzą żwiry, piaski i gliny
 *   morenowe; około połowy tutejszych gospodarstw zajmuje się
 *   sadownictwem, bo rejon grójecko-warecko-piaseczyński jest
 *   największym skupiskiem sadowniczym w Polsce,
 * — gmina liczy czterdzieści sołectw, wśród nich Czersk,
 *   Baniochę, Cendrowice, Czachówek, Coniew, Solec, Brześce
 *   i Łubną.
 */
export const GORA_KALWARIA: CityContent = {
  slug: "gora-kalwaria",
  h1: "Thermomix Góra Kalwaria – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Góra Kalwaria — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Górze Kalwarii: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Góra Kalwaria — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Górze Kalwarii. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Góry Kalwarii z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do sołectw gminy.",

  highlights: highlightyStandardowe("Góra Kalwaria"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Zapach, wilgoć i dojrzewanie przechodzą z produktu na produkt.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Górze Kalwarii – jak wygląda prezentacja?",
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
      id: "co-obok-czego",
      heading: "Jatki piekarsko-rzeźnicze z 1836 roku — czyli o tym, co leży obok czego",
      paragraphs: [
        "W 1836 roku przy ratuszu w Górze Kalwarii stanęły klasycystyczne jatki miejskie, zaprojektowane przez Bonifacego Witkowskiego — tego samego, który projektował ratusz. W opisach figurują jako jatki piekarsko-rzeźnicze: jeden rząd kramów, w którym pieczywo stało obok mięsa. Działały tak do 1939 roku.",
        "Dziś takie sąsiedztwo brzmi trochę dziwnie, ale prowadzi do tematu, o którym w domowej kuchni myśli się dopiero wtedy, gdy coś się zepsuje albo przejdzie zapachem: co właściwie leży obok czego.",
        "Rzeczy, które przechodzą z jednego produktu na drugi, są trzy: zapach, wilgoć i dojrzewanie. Warto je znać osobno, bo działają inaczej.",
        "Zapach jest najbardziej dokuczliwy i najtrudniejszy do odwrócenia. Chleb leżący obok cebuli, masło obok wędzonej ryby, ser obok melona — wszystko to kończy się tak samo. Tłuszcz i pieczywo chłoną zapachy najszybciej i najtrwalej ze wszystkiego, co mamy w kuchni.",
        "Najbardziej poszkodowane bywa masło i to ono zasługuje na osobne zdanie: trzyma się je zamknięte, a nie w otwartej maselniczce obok reszty lodówki. Masło, które przez tydzień stało przy czosnku, smakuje czosnkiem — i nie pomoże odkrojenie wierzchu.",
        "Wilgoć działa ciszej. Pieczywo położone obok czegoś mokrego mięknie, a warzywa obok czegoś suchego wiotczeją. Z tego samego powodu chleb nie ma czego szukać w lodówce razem z warzywami — tam jest wilgotno, a jemu to nie służy.",
        "Trzecia rzecz to dojrzewanie: jabłka i banany przyspieszają dojrzewanie wszystkiego, co leży obok. Pisałam o tym osobno, więc tu tylko wspomnę, że działa to w obie strony — bywa problemem i bywa użyteczne.",
        "Przy zakupach z tego wszystkiego wynikają dwie proste zasady. W jednej siatce nie wozi się pieczywa razem z chemią i proszkiem do prania. I nie wozi się mięsa razem z tym, co zjemy na surowo.",
        "W lodówce zasada jest podobnie krótka: to, co jemy na surowo, nie stoi pod tym, co jemy po obróbce. Nie chodzi o miejsce na półce — chodzi o to, co jest nad czym.",
        "Najprostszym rozwiązaniem całego tego tematu są zamknięte pojemniki. Nie dla porządku ani dla ładnego wyglądu lodówki, tylko dlatego, że odcinają sąsiedztwo: zamknięty ser nie pachnie na resztę, a zamknięte masło nie chłonie niczego.",
        "Warto na koniec zauważyć, że część sąsiedztw jest pożądana i celowo je robimy. Laska wanilii włożona do cukru. Czosnek albo chili w oliwie. Zioła w soli. Skórka cytryny w słoiku z herbatą. To jest dokładnie ten sam mechanizm, tylko użyty świadomie — dowód, że nie chodzi o to, żeby wszystko od siebie odseparować, tylko żeby wiedzieć, co na co wpływa.",
        "Teraz uczciwie o sprzęcie. Thermomix nie ma z przechowywaniem nic wspólnego. Nie przechowuje, nie chłodzi i nie odcina zapachów.",
        "Jedna rzecz się jednak łączy, i to praktycznie. Produkt, który przeszedł obcym zapachem, rzadko daje się uratować — zapachu się nie wypłucze. Najrozsądniej jest wtedy przerobić go tam, gdzie i tak zginie wśród innych: w wyrazistym sosie, w gęstej zupie, w farszu z przyprawami. To lepsze wyjście niż wyrzucenie i znacznie lepsze niż podanie go w czymś delikatnym, gdzie obcy zapach będzie jedyną rzeczą, jaką ktokolwiek zapamięta.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Górze Kalwarii?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli macie coś, co przeszło obcym zapachem i szkoda wyrzucić — powiedzcie przy umawianiu. Poszukamy dania, w którym to zginie.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Górze Kalwarii"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla kalwaryjskiej rodziny",
      paragraphs: [
        "Góra Kalwaria liczy ponad dwanaście tysięcy mieszkańców na niespełna czternastu kilometrach kwadratowych, na wysokości stu dwudziestu metrów nad poziomem morza. Wieś Góra istniała tu od XIII wieku, ale samo miasto założono dopiero przywilejem Michała Korybuta Wiśniowieckiego z 26 lutego 1670 roku — jako projekt urbanistyczny od zera, w którym ponad czterdzieści obiektów rozmieszczono według jednego planu, a autorem założenia był prawdopodobnie Tylman z Gameren. Ratusz zbudowano w latach 1829–1834 według projektu Bonifacego Witkowskiego i Henryka Marconiego, a w 1836 roku stanęły przy nim klasycystyczne jatki miejskie tego samego architekta — jatki piekarsko-rzeźnicze, działające do 1939 roku i zrekonstruowane w latach pięćdziesiątych. Zachowały się też kościół „Na Górce” z 1680 roku, przebudowany w 1791, Wieczernik w dzielnicy Marianki z 1674 roku, kościół parafialny z lat 1755–1756 projektu Jakuba Fontany i kaplica na skarpie wiślanej z drugiej połowy XVIII wieku. Gmina leży na Równinie Warszawskiej i w Dolinie Środkowej Wisły, a jej podłoże tworzą żwiry, piaski i gliny morenowe; około połowy tutejszych gospodarstw zajmuje się sadownictwem, bo rejon grójecko-warecko-piaseczyński jest największym skupiskiem sadowniczym w Polsce. Do gminy należy czterdzieści sołectw, wśród nich Czersk, Baniocha, Cendrowice, Czachówek, Coniew, Solec, Brześce i Łubna.",
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

  districtsHeading: "Do których części Góry Kalwarii dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — do centrum przy Rynku, na Marianki, w rejon ulicy Pijarskiej i na skarpę nadwiślańską. Dojeżdżam też do sołectw gminy: Czerska, Baniochy, Cendrowic, Czachówka, Sierzchowa, Coniewa, Solca, Kątów, Brześc i Łubnej.",
    "Przy umawianiu wystarczy podać miejscowość, ulicę i numer domu. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: ["Marianki", "Centrum"],

  nearbyHeading: "Poza Górę Kalwarię też przyjadę",
  nearbyParagraphs: [
    "Piaseczno, Konstancin-Jeziorna, Karczew, Warka, Grójec i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Piaseczno", "Konstancin-Jeziorna", "Karczew", "Warka"],

  about: blokOMnie("do Góry Kalwarii", "w Górze Kalwarii", REGION_MAZOWSZE),

  faq: [
    {
      question: "Czy dojeżdżasz do Góry Kalwarii bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta — łącznie z Mariankami — oraz do sołectw gminy, w tym Czerska, Baniochy i Czachówka. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku, bo nazwy bywają mylone: chodzi o Górę Kalwarię nad Wisłą w powiecie piaseczyńskim, a nie o Kalwarię Zebrzydowską.",
    },
    ...faqWspolne("w Górze Kalwarii"),
    {
      question: "Czego nie trzymać obok siebie w kuchni?",
      answer:
        "Chleba obok cebuli, masła obok wędzonej ryby, sera obok melona — tłuszcz i pieczywo chłoną zapachy najszybciej i najtrwalej. Pieczywa nie trzyma się też obok czegoś mokrego, bo mięknie, ani w lodówce razem z warzywami. A przy zakupach: pieczywa nie wozi się w jednej siatce z chemią.",
    },
    {
      question: "Dlaczego masło smakuje czosnkiem?",
      answer:
        "Bo stało otwarte obok czegoś, co mocno pachnie. Masło jest w całej lodówce najwrażliwsze na zapachy i nie pomaga odkrojenie wierzchu — trzyma się je zamknięte, a nie w otwartej maselniczce.",
    },
    {
      question: "Czy sąsiedztwo produktów zawsze szkodzi?",
      answer:
        "Nie — część robimy celowo: laska wanilii w cukrze, czosnek albo chili w oliwie, zioła w soli, skórka cytryny w herbacie. To ten sam mechanizm, tylko użyty świadomie. Nie chodzi więc o to, żeby wszystko odseparować, tylko żeby wiedzieć, co na co wpływa.",
    },
  ],

  geo: { lat: 51.9765, lng: 21.2154 },
};
