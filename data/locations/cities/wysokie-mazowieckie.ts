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
 * WYSOKIE MAZOWIECKIE — gmina MIEJSKA, siedziba powiatu
 * wysokomazowieckiego.
 * MIASTO 8 997 (GUS 31.12.2024), powierzchnia 15,2 km².
 * ⚠ Notatka projektowa podawała 9 500 — ZAWYŻONE.
 * ⚠⚠ GMINA WIEJSKA WYSOKIE MAZOWIECKIE TO ODRĘBNA JEDNOSTKA:
 * 5 468 mieszkańców, 166,3 km², 56 wsi, urząd w mieście.
 * MIASTO DO NIEJ NIE NALEŻY. NIE SUMOWAĆ.
 *
 * PRAWA MIEJSKIE — DWUSTOPNIOWO wg strony miasta:
 * 1492 r. KAZIMIERZ JAGIELLOŃCZYK, potem 1503 r. PRAWO
 * MAGDEBURSKIE od ALEKSANDRA JAGIELLOŃCZYKA.
 * ⚠ W OBIEGU SĄ TEŻ LATA 1490 i 1494 — SPRZECZNOŚĆ.
 * PISZĘ „koniec XV wieku" i „prawo magdeburskie na początku
 * XVI wieku", BEZ ROZSTRZYGANIA.
 * Pierwsza wzmianka: 1203 r., jako wieś WYSOKIE.
 * Po powstaniu styczniowym zdegradowane do osady; prawa
 * przywrócone w 1915 r. ⚠ TYLKO JEDNO ŹRÓDŁO — podaję
 * ostrożnie jako „na początku XX wieku".
 *
 * ⚠ PRZYNALEŻNOŚĆ — CIEKAWY, NIEOCZYWISTY FAKT:
 * nazwa „Mazowieckie" NIE oznacza województwa mazowieckiego
 * ani przynależności historycznej do Mazowsza. Miasto leżało
 * w ZIEMI DROHICKIEJ, która należała do PODLASIA, a prawa
 * nadali KRÓLOWIE POLSCY, nie książęta mazowieccy.
 * Człon w nazwie pochodzi z mazowieckiej tradycji osadniczej.
 *
 * HERB: BIAŁY ŁABĘDŹ PŁYNĄCY PO WODZIE NA NIEBIESKIM TLE.
 *
 * ⚠⚠ MLECZARSTWO — PODSTAWA KĄTA.
 * Powiat wysokomazowiecki to najsilniejszy ośrodek mleczarski
 * województwa. Dane z zestawienia branżowego ZE STANU 2019:
 * 1 085 STAD pod oceną użytkowości mlecznej, 41 889 KRÓW,
 * średnia wydajność 8 324 kg mleka na krowę rocznie.
 * ⚠ PODAJĘ Z DATĄ 2019 — to nie są dane bieżące.
 * ŚWIĘTO MLEKA — coroczna impreza miejska z KONKURSEM
 * W PICIU MLEKA na stadionie miejskim. Pierwsza edycja
 * ok. 2008 r. ⚠ ROKU NIE PODAJĘ — wyliczony z numeracji.
 * ⚠ NAZWY SPÓŁDZIELNI NIE PODAJĘ.
 *
 * ZABYTKI:
 * KOŚCIÓŁ ŚW. JANA CHRZCICIELA — murowany, 1875–1888,
 * konsekrowany 1925. Wcześniej drewniany z 1773 r.
 * KOŚCIÓŁ POUNICKI NARODZENIA NMP — murowany,
 * W STYLU BIZANTYJSKIM, 1798 r. RZADKI OBIEKT.
 * ⚠ NIE PODAJĘ roku erygowania parafii (1496 „z fundacji
 * króla Aleksandra" jest wewnętrznie sprzeczne — Aleksander
 * został królem w 1501).
 * RZEKA BROK — ⚠ przepływa przez miasto, ale NIE PODAJĘ
 * żadnych danych hydrograficznych, bo ich nie potwierdzono.
 * WYSOKIE MAZOWIECKIE NIE NALEŻY DO CITTASLOW.
 *
 * KĄT: NADMIAR JEDNEGO SKŁADNIKA — co robić, gdy czegoś
 * jest naraz za dużo.
 * Kąt od powiatu, w którym na jeden surowiec przypada
 * czterdzieści jeden tysięcy krów i osobne święto z konkursem
 * w jego piciu.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że nadmiar jest w polskich domach zjawiskiem cyklicznym
 *   i przewidywalnym: wiadro jabłek od sąsiada, skrzynka
 *   cukinii, worek ziemniaków, pół barana od rodziny,
 *   dziesięć kilo śliwek,
 * — że pierwsza reakcja („zjemy") jest zawsze błędna, bo
 *   nikt tyle nie zje, i kończy się wyrzuceniem połowy,
 * — CZTERY DROGI i kiedy którą wybrać: PRZETWORZYĆ NA COŚ
 *   TRWAŁEGO, ZAMROZIĆ W FORMIE UŻYTECZNEJ, ODDAĆ, ZMIENIĆ
 *   W COŚ SKONCENTROWANEGO,
 * — że kluczowa jest decyzja PIERWSZEGO DNIA, nie trzeciego,
 * — że mrozi się w porcjach do jednego dania, nie w bryle,
 * — że koncentraty (przecier, pasta, powidła, sok) zajmują
 *   ułamek miejsca surowca — i to jest często najlepsza droga,
 * — że oddanie połowy sąsiadce nie jest porażką, tylko
 *   najstarszym systemem radzenia sobie z nadmiarem,
 * — UCZCIWIE: tu urządzenie pomaga naprawdę mocno, bo
 *   przetwarzanie dużej ilości to dokładnie praca powtarzalna
 *   i nudna,
 * — ALE: pojemność naczynia jest ograniczona, więc dwadzieścia
 *   kilo robi się partiami i to trwa. Nie ma cudów.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PROPORCJI.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH — NIC o mleku
 *   i zdrowiu, NIC o nietolerancjach.
 * — ŻADNYCH PORAD SANITARNYCH o przechowywaniu
 *   i bezpieczeństwie żywności.
 * — ŻADNYCH NAZW FIRM ANI SPÓŁDZIELNI.
 *
 * ⚠ ETYKA — PODLASKIE:
 * — ZERO Zagłady, gett, pogromów, cmentarzy żydowskich.
 * — ZERO lat 1941/1943/1945, wysiedleń, pacyfikacji.
 * — ZERO granicy, wojska, podziemia.
 * — ZERO konfliktów narodowościowych i wyznaniowych.
 *   KOŚCIÓŁ POUNICKI wymieniam WYŁĄCZNIE jako zabytek
 *   architektury, bez historii unii i jej likwidacji.
 * — ZERO powstania styczniowego jako wątku — degradację
 *   miasta podaję bez przyczyny.
 * — ZERO problemów rolnictwa, cen skupu i protestów.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Resztki" dotyczą tego,
 * co zostało PO obiedzie. „Zagęszczanie" (Barczewo) dotyczy
 * nadmiaru PŁYNU w daniu. „Skala i pojemność" dotyczy
 * gotowania dużych porcji. „Przechowywanie" dotyczy
 * trzymania gotowego jedzenia. Tutaj chodzi o NADMIAR
 * SUROWCA, który wpadł do domu naraz i trzeba go rozdysponować.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE ROZSTRZYGAM roku praw miejskich.
 * — NIE PODAJĘ roku erygowania parafii.
 * — NIE PODAJĘ danych hydrograficznych Broku.
 * — NIE PRZYPISUJĘ Wysokiemu Mazowieckiemu „PODLASKICH
 *   CIASTEK ZE SKWARKAMI" — to gmina Sokoły, nie to miasto.
 * — NIE PRZYPISUJĘ miastu produktu z Listy Produktów
 *   Tradycyjnych — nie ma takiego.
 * — NIE PODAJĘ nazwy ani roku rozpoczęcia święta mleka.
 * — NIE MYLĘ miasta z GMINĄ WIEJSKĄ o tej samej nazwie,
 *   z gminą WYSOKIE w lubelskiem ani z województwem
 *   mazowieckim. FAQ to rozróżnia.
 * — districts: brak potwierdzonych osiedli. PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — miasto 8 997 mieszkańców na 15,2 km²,
 * — pierwsza wzmianka z 1203 r., jako wieś Wysokie; prawa
 *   miejskie pod koniec XV w., prawo magdeburskie na początku
 *   XVI w.,
 * — mimo nazwy miasto leży w województwie podlaskim,
 *   a historycznie w ziemi drohickiej należącej do Podlasia,
 * — herb: biały łabędź płynący po wodzie na niebieskim tle,
 * — powiat wysokomazowiecki jest najsilniejszym ośrodkiem
 *   mleczarskim województwa: w zestawieniu z 2019 r. objęto
 *   tu oceną użytkowości mlecznej 1 085 stad i 41 889 krów,
 *   przy średniej wydajności 8 324 kg mleka na krowę rocznie,
 * — miasto obchodzi coroczne święto poświęcone mleku,
 *   z konkursem w jego piciu na stadionie miejskim,
 * — kościół świętego Jana Chrzciciela wznoszony w latach
 *   1875–1888 i konsekrowany w 1925 r.; wcześniej stał tu
 *   drewniany z 1773 r.,
 * — murowany kościół pounicki Narodzenia NMP z 1798 r.,
 *   w stylu bizantyjskim.
 */
export const WYSOKIE_MAZOWIECKIE: CityContent = {
  slug: "wysokie-mazowieckie",
  h1: "Thermomix Wysokie Mazowieckie – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Wysokie Mazowieckie — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Wysokiem Mazowieckiem: bezpłatna prezentacja TM7 u Ciebie w domu. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Wysokie Mazowieckie — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Wysokiem Mazowieckiem. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Wysokiego Mazowieckiego z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do okolicznych wsi.",

  highlights: highlightyStandardowe("Wysokie Mazowieckie i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Przy nadmiarze liczy się decyzja pierwszego dnia, nie trzeciego.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Wysokiem Mazowieckiem – jak wygląda prezentacja?",
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
      id: "nadmiar",
      heading: "Czterdzieści jeden tysięcy krów — czyli co robić, gdy czegoś jest naraz za dużo",
      paragraphs: [
        "Powiat wysokomazowiecki jest najsilniejszym ośrodkiem mleczarskim w województwie. W zestawieniu branżowym z 2019 roku objęto tu oceną użytkowości mlecznej tysiąc osiemdziesiąt pięć stad i blisko czterdzieści dwa tysiące krów, przy średniej wydajności ponad ośmiu tysięcy kilogramów mleka na krowę rocznie. Miasto obchodzi zresztą coroczne święto poświęcone temu jednemu surowcowi — z konkursem w piciu mleka na stadionie miejskim, co uważam za rozbrajająco szczere.",
        "Miejsce, w którym jednego produktu jest tak dużo, jest właściwym miejscem na temat, o którym w kuchni nikt nie pisze: co robić, gdy czegoś jest naraz za dużo.",
        "Bo to się zdarza cyklicznie i całkiem przewidywalnie. Wiadro jabłek od sąsiada. Skrzynka cukinii z działki, bo cukinia zawsze rodzi się w nadmiarze. Worek ziemniaków od rodziny. Dziesięć kilo śliwek. Ćwiartka mięsa po świniobiciu. Pięć bochenków chleba, bo była promocja.",
        "Pierwsza reakcja jest zawsze ta sama i zawsze błędna: „to zjemy”. Nie zjecie. Nikt nie zje dziesięciu kilo śliwek w tydzień, a kończy się to tym, że pierwsze dwa kilo się zjada, a osiem wyrzuca — czyli dokładnie odwrotnie do zamiaru.",
        "Dróg jest cztery i warto je znać, bo wybór między nimi robi się w pierwszym dniu, nie w trzecim.",
        "Pierwsza: przetworzyć na coś trwałego. Kiszonka, powidła, przecier, sos, pasta. To jest droga dla wszystkiego, co daje się zamknąć w słoiku.",
        "Druga: zamrozić — ale w formie użytecznej. To jest ta rzecz, którą wszyscy robią źle. Zamrożona bryła sześciu kilogramów niczemu nie służy, bo za każdym razem trzeba by rozmrozić całość. Mrozi się w porcjach odpowiadających jednemu daniu i to jest różnica między mrożonką, która się zużyje, a mrożonką, która przeleży rok.",
        "Trzecia: oddać. I nie traktujcie tego jako porażki — dzielenie się nadmiarem jest najstarszym i wciąż najskuteczniejszym systemem radzenia sobie z nim. Połowa skrzynki oddana sąsiadce wróci we wrześniu w innej postaci.",
        "Czwarta: skoncentrować. To jest droga, o której najczęściej się zapomina, a bywa najlepsza. Dwadzieścia kilo pomidorów zmienione w przecier zajmuje kilka słoików. Wiadro jabłek zmienione w mus mieści się na jednej półce. Koncentrat to nie tylko konserwacja, to przede wszystkim odzyskanie miejsca.",
        "Powiem uczciwie, jak wypada przy tym urządzenie, bo tu akurat wypada bardzo dobrze. Przetwarzanie dużej ilości jednego surowca to praca powtarzalna, nudna i długa — czyli dokładnie taka, jaką maszyna wykonuje lepiej od człowieka. Przecier, mus, pasta, powidła mieszane godzinę bez przypalania: to jest jego mocna strona i nie będę udawać, że jest inaczej.",
        "Ale jedno zastrzeżenie, żeby nikt się nie rozczarował. Pojemność naczynia jest ograniczona. Dwadzieścia kilo śliwek robi się partiami i to trwa cały wieczór, tyle że wieczór spędzony inaczej — bo nie trzeba stać nad garnkiem i mieszać. Sprzęt nie skraca ilości pracy do zera. Zmienia tylko to, czy trzeba przy niej stać.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Wysokiem Mazowieckiem?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli co roku wraca u Was ta sama historia z jabłkami albo cukinią, powiedzcie o tym przy umawianiu — to jest akurat sytuacja, w której warto zobaczyć sprzęt przy pracy, a nie tylko usłyszeć o niej.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Wysokiem Mazowieckiem"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla wysokomazowieckiej rodziny",
      paragraphs: [
        "Miasto liczy blisko dziewięć tysięcy mieszkańców na piętnastu kilometrach kwadratowych. Pierwsza wzmianka pochodzi z 1203 roku, gdy była to jeszcze wieś Wysokie; prawa miejskie nadano pod koniec piętnastego wieku, a prawo magdeburskie na początku szesnastego. Wbrew nazwie miasto nie leży na Mazowszu ani w województwie mazowieckim — historycznie należało do ziemi drohickiej, czyli do Podlasia, a przymiotnik w nazwie pochodzi z mazowieckiej tradycji osadniczej regionu. W herbie ma białego łabędzia płynącego po wodzie. Kościół świętego Jana Chrzciciela wznoszono w latach 1875–1888 i konsekrowano w 1925; wcześniej stał tu drewniany z 1773 roku. Rzadkim zabytkiem jest murowany kościół pounicki Narodzenia Najświętszej Maryi Panny z 1798 roku, wzniesiony w stylu bizantyjskim.",
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

  districtsHeading: "Do których części Wysokiego Mazowieckiego dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do okolicznych wsi. Dojazd jest wszędzie bezpłatny.",
    "Przy umawianiu wystarczy podać ulicę i numer albo nazwę miejscowości.",
  ],
  districts: [],

  nearbyHeading: "Poza Wysokie Mazowieckie też przyjadę",
  nearbyParagraphs: [
    "Czyżew, Szepietowo, Brańsk, Łapy i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Czyżew", "Szepietowo", "Brańsk", "Łapy"],

  about: blokOMnie("do Wysokiego Mazowieckiego", "w Wysokiem Mazowieckiem i okolicy", REGION_PODLASIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Wysokiego Mazowieckiego bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do okolicznych wsi. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku, bo nazwa myli: Wysokie Mazowieckie leży w województwie podlaskim, nie mazowieckim. Osobną jednostką jest też gmina wiejska Wysokie Mazowieckie — do niej również dojeżdżam.",
    },
    ...faqWspolne("w Wysokiem Mazowieckiem"),
    {
      question: "Co zrobić, gdy dostanę naraz skrzynkę jabłek albo cukinii?",
      answer:
        "Zdecydować pierwszego dnia, a nie trzeciego. Są cztery drogi: przetworzyć na coś trwałego, zamrozić, oddać część albo zamienić w coś skoncentrowanego — przecier, mus, powidła. Najgorsza jest ta pierwsza myśl, że „to zjemy”: zwykle kończy się zjedzeniem części i wyrzuceniem reszty.",
    },
    {
      question: "Jak mrozić nadmiar, żeby dało się go potem wykorzystać?",
      answer:
        "W porcjach odpowiadających jednemu daniu, nie w jednej bryle. Zamrożone sześć kilogramów w jednym worku trzeba za każdym razem rozmrozić w całości, więc zwykle przeleży rok i wyląduje w koszu. To jedna z tych drobnych zmian, które naprawdę robią różnicę.",
    },
    {
      question: "Czy Thermomix pomaga przy przetwarzaniu dużych ilości?",
      answer:
        "Bardzo, bo to praca powtarzalna i długa — przecier, mus czy powidła mieszane godzinę bez przypalania to jego mocna strona. Z jednym zastrzeżeniem: pojemność naczynia jest ograniczona, więc dwadzieścia kilo robi się partiami i to i tak zajmie wieczór. Różnica polega na tym, że nie trzeba przy tym stać.",
    },
  ],

  geo: { lat: 52.9142, lng: 22.5136 },
};
