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
 * DROHICZYN — gmina miejsko-wiejska w powiecie siemiatyckim.
 * MIASTO 1 740, GMINA 5 623 (GUS 31.12.2024).
 * POWIERZCHNIA MIASTA 15,7 km², GMINY 207,9 km².
 * GMINA OBEJMUJE MIASTO I 43 WSIE.
 * ⚠ LICZBY SOŁECTW NIE PODAJĘ.
 * ⚠ Notatka projektowa podawała 2 000 — ZAWYŻONE.
 * Średni wiek mieszkańców gminy 44,8 lat — Drohiczyn plasuje
 * się wysoko w rankingu miast o najstarszych mieszkańcach.
 * ⚠ TEGO OSTATNIEGO NIE UŻYWAM W TREŚCI — mogłoby zabrzmieć
 * jak komentarz o wyludnianiu.
 *
 * POCZĄTKI: gród założony w pierwszej połowie XI w. przez
 * osadników ruskich, nazwa od „Drohicz". Gród warowny obok
 * Brześcia i Mielnika, NA BUGU, na skrzyżowaniu szlaków
 * łączących Ruś, Bałtyk, Mazowsze i Polskę.
 * PRAWO MAGDEBURSKIE 1498 r., nadał KSIĄŻĘ ALEKSANDER
 * JAGIELLOŃCZYK.
 * ⚠⚠ STOLICA WOJEWÓDZTWA PODLASKIEGO od dekretu ZYGMUNTA I
 * z 1520 r. DO 1795 r. Zawsze podaję z latami.
 * ⚠ UTRATY I PRZYWRÓCENIA PRAW MIEJSKICH NIE PODAJĘ —
 * nie ustalono.
 *
 * KORONACJA DANIELA ROMANOWICZA:
 * ⚠ MIEJSCE nie jest kwestionowane (Kronika halicko-wołyńska),
 * ale DATA JEST SPORNA: źródła ruskie 1253, Długosz 1246.
 * ⚠⚠ BYŁA TO KORONACJA NA KRÓLA RUSI, NIE POLSKI.
 * NIE PISZĘ, że Drohiczyn jest „polskim miastem koronacyjnym"
 * — to nadinterpretacja promocyjna.
 * W TREŚCI PODAJĘ TEN WĄTEK MAKSYMALNIE OSZCZĘDNIE
 * ALBO WCALE — jest politycznie delikatny.
 *
 * ⚠⚠ GOSPODARKA XVI w. — PODSTAWA KĄTA:
 * PORT RZECZNY NA BUGU, 70 KARCZEM I 9 MŁYNÓW WODNYCH,
 * przy ok. 2 000 MIESZKAŃCÓW pod koniec stulecia.
 * To JEDNA KARCZMA NA OK. 29 OSÓB.
 * Miasto słynęło z TARGÓW I JARMARKÓW oraz z dobrych szkół
 * prowadzonych przez zakony.
 *
 * ZABYTKI:
 * KATEDRA TRÓJCY PRZENAJŚWIĘTSZEJ — fundacja 1392 r.
 * (Władysław Jagiełło), przebudowa barokowa 1696–1723
 * pod kier. ks. ALEKSANDRA ŻARDECKIEGO.
 * KOŚCIÓŁ FRANCISZKANÓW — pierwotny drewniany 1409 r.
 * ⚠ WERSJI MUROWANEJ NIE DATUJĘ.
 * KOŚCIÓŁ I KLASZTOR BENEDYKTYNEK — 1623 r., fundacja
 * WOJCIECHA NIEMIRY, wojewody podlaskiego; architekt
 * PAWEŁ FONTANA, późny barok.
 * CERKIEW ŚW. MIKOŁAJA — 1763–1792, klasycyzm.
 * ⚠ WYŁĄCZNIE JAKO ZABYTEK ARCHITEKTURY.
 * GÓRA ZAMKOWA — badania archeologiczne w 2012 r. ujawniły
 * zarysy kamiennych fundamentów.
 *
 * ⚠ NADBUŻAŃSKA KAWA ŻOŁĘDZIÓWKA (LPT, 29.08.2008) —
 * KĄT WYKORZYSTANY PRZY SIEMIATYCZACH. Tutaj NIE ROZWIJAM
 * I NIE WYMIENIAM, żeby nie dublować.
 * DROHICZYN NIE NALEŻY DO CITTASLOW (nie potwierdzono).
 *
 * KĄT: DANIA JEDNOGARNKOWE — dlaczego przetrwały wszędzie
 * i dlaczego wciąż są najlepszym pomysłem na obiad.
 * Kąt od miasta, które przy dwóch tysiącach mieszkańców
 * miało siedemdziesiąt karczem.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że danie jednogarnkowe to nie jest „danie gorszej
 *   kategorii", tylko najstarsza i najbardziej rozpowszechniona
 *   forma obiadu na świecie,
 * — DLACZEGO WYGRAŁO: jedno źródło ciepła, jedno naczynie,
 *   wszystko wybacza, skaluje się i nie wymaga zgrywania
 *   w czasie,
 * — że karczma nie serwowała pięciu dań — serwowała jedno,
 *   które stało i czekało,
 * — CZTERY RODZINY DAŃ JEDNOGARNKOWYCH: zupy gęste, dania
 *   duszone, dania z kaszą lub ryżem gotowane razem
 *   z dodatkami, zapiekanki,
 * — ZASADA BUDOWANIA: baza smaku na początku (cebula, warzywa
 *   korzeniowe), potem to, co potrzebuje długo, na końcu to,
 *   co potrzebuje krótko,
 * — że najczęstszy błąd to wrzucenie wszystkiego naraz —
 *   wtedy część jest rozgotowana, a część twarda,
 * — że danie jednogarnkowe zwykle jest lepsze następnego dnia
 *   i to jest jego cecha, nie wada,
 * — UCZCIWIE: to jest DOKŁADNIE ta kategoria, w której
 *   to urządzenie jest najlepsze, i mówię to bez ostrożności —
 *   jedno naczynie, mieszanie bez przerwy, brak przypalania,
 * — ALE także: ono nie zrobi zarumienienia bazy, a bez tego
 *   część tych dań traci połowę smaku. Warto zacząć na patelni.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PROPORCJI.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH NAZW FIRM.
 * — ⚠ ZERO alkoholu — karczmy wymieniam jako miejsca, gdzie
 *   podawano JEDZENIE podróżnym, bez wątku wyszynku.
 *
 * ⚠ ETYKA — PODLASKIE:
 * — ZERO Zagłady, gett, pogromów, cmentarzy żydowskich.
 * — ZERO lat 1941/1943/1945, wysiedleń, pacyfikacji.
 * — ZERO granicy — Bug jest dziś rzeką graniczną na innym
 *   odcinku, ale wątku granicznego nie poruszam wcale.
 * — ZERO konfliktów narodowościowych i wyznaniowych; cerkiew
 *   i katedra wyłącznie jako zabytki. ZERO unii i jej dziejów.
 * — ZERO podziemia i powstań.
 * — ZERO wyludniania i starzenia się ludności.
 * — Koronację Daniela podaję maksymalnie oszczędnie,
 *   jako koronację na króla Rusi, bez rozwijania.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Jedzenie na mieście
 * kontra gotowanie w domu" dotyczy dzisiejszej gastronomii.
 * „Gotowanie dla ekipy" dotyczy liczby jedzących. „Dania
 * układane warstwami" dotyczą konstrukcji zapiekanki.
 * „Kolejność dodawania składników" (Wolbórz) dotyczy sekwencji
 * w dowolnym daniu. „Zagęszczanie" (Barczewo) dotyczy gęstości.
 * Tutaj chodzi o CAŁĄ FORMĘ DANIA: o obiad, który mieści się
 * w jednym naczyniu, i o to, czemu ta forma wygrała.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PISZĘ, że Drohiczyn jest polskim miastem koronacyjnym.
 * — NIE PODAJĘ daty koronacji jako pewnej.
 * — NIE PODAJĘ dat utraty i przywrócenia praw miejskich.
 * — NIE PODAJĘ liczby sołectw.
 * — NIE DATUJĘ murowanego kościoła franciszkanów.
 * — NIE WYMIENIAM nadbużańskiej kawy żołędziówki — wątek
 *   wykorzystany przy Siemiatyczach.
 * — NIE PRZYPISUJĘ Drohiczynowi produktu z Listy Produktów
 *   Tradycyjnych.
 * — ⚠⚠ NIE MYLĘ DROHICZYNA NAD BUGIEM z DROHICZYNEM POLESKIM
 *   NA BIAŁORUSI. W tekście piszę „Drohiczyn nad Bugiem".
 *   FAQ to rozróżnia.
 * — districts: brak potwierdzonych osiedli. PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — miasto 1 740, gmina 5 623 mieszkańców; gmina obejmuje
 *   miasto i 43 wsie na 207,9 km²,
 * — gród założony w pierwszej połowie XI w. przez osadników
 *   ruskich, na Bugu, na skrzyżowaniu szlaków łączących Ruś,
 *   Bałtyk, Mazowsze i Polskę,
 * — prawo magdeburskie nadał w 1498 r. książę Aleksander
 *   Jagiellończyk; od dekretu Zygmunta I z 1520 r. do 1795
 *   Drohiczyn był stolicą województwa podlaskiego,
 * — w XVI w. miasto miało port rzeczny na Bugu, 70 karczem
 *   i 9 młynów wodnych przy około dwóch tysiącach mieszkańców;
 *   słynęło z targów i jarmarków oraz ze szkół prowadzonych
 *   przez zakony,
 * — katedra Trójcy Przenajświętszej: fundacja z 1392 r.,
 *   przebudowa barokowa w latach 1696–1723,
 * — kościół i klasztor benedyktynek z 1623 r., fundacji
 *   wojewody podlaskiego Wojciecha Niemiry, projektu
 *   Pawła Fontany,
 * — klasycystyczna cerkiew świętego Mikołaja z lat 1763–1792,
 * — na Górze Zamkowej badania archeologiczne w 2012 r.
 *   ujawniły zarysy kamiennych fundamentów.
 */
export const DROHICZYN: CityContent = {
  slug: "drohiczyn",
  h1: "Thermomix Drohiczyn – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Drohiczyn nad Bugiem — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Drohiczynie nad Bugiem: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Drohiczyn — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Drohiczynie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Drohiczyna nad Bugiem z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do całej gminy.",

  highlights: highlightyStandardowe("Drohiczyn i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Danie jednogarnkowe nie jest gorszą kategorią. Jest najstarszą formą obiadu.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Drohiczynie – jak wygląda prezentacja?",
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
      id: "dania-jednogarnkowe",
      heading: "Siedemdziesiąt karczem na dwa tysiące mieszkańców — czyli o daniach z jednego garnka",
      paragraphs: [
        "W szesnastym wieku Drohiczyn nad Bugiem miał port rzeczny, dziewięć młynów wodnych i siedemdziesiąt karczem — przy jakichś dwóch tysiącach mieszkańców. To jedna karczma na dwadzieścia dziewięć osób. Nie dlatego, że tutejsi mieszkańcy jedli poza domem; dlatego, że przez miasto przewijał się nieprzerwany ruch ludzi z Rusi, znad Bałtyku, z Mazowsza i z Korony. Drohiczyn był wtedy stolicą województwa podlaskiego, którą pozostał od 1520 do 1795 roku.",
        "Karczma nie miała karty dań. Miała jedno albo dwa dania, które stały w kotle, były gotowe o każdej porze i nadawały się dla każdego, kto akurat wszedł. I to jest forma obiadu, o której chcę napisać, bo w domowej kuchni ma dziś opinię gorszej kategorii, a jest dokładnie odwrotnie.",
        "Danie jednogarnkowe jest najstarszą i najbardziej rozpowszechnioną formą posiłku na świecie. Nie ma kuchni narodowej, która by go nie miała. Wygrało wszędzie i wygrało z bardzo konkretnych powodów.",
        "Po pierwsze: jedno źródło ciepła. Przez większość historii nikt nie miał czterech palników, więc wszystko musiało zmieścić się w jednym naczyniu nad jednym ogniem. Po drugie: wybacza. Dziesięć minut dłużej nie robi różnicy, składnik można dodać albo pominąć, a proporcje są elastyczne. Po trzecie: skaluje się — to samo danie robi się dla trzech i dla dwunastu osób. I po czwarte, moim zdaniem najważniejsze: nie wymaga zgrywania w czasie. Nie trzeba pilnować, żeby ziemniaki, mięso i warzywa były gotowe równocześnie, bo są w tym samym garnku.",
        "Rodzin takich dań jest cztery i warto je rozróżniać. Zupy gęste, które są pełnym posiłkiem, a nie wstępem do niego. Dania duszone, gdzie mięso i warzywa dochodzą razem w niewielkiej ilości płynu. Dania z kaszą albo ryżem, gotowanymi razem z dodatkami, żeby ziarno wchłonęło smak. I zapiekanki, czyli to samo, tylko z wierzchem.",
        "Zasada budowania jest we wszystkich czterech ta sama i jest jedyną rzeczą, którą trzeba tu umieć. Najpierw baza smaku: cebula, warzywa korzeniowe, to, co ma się zeszklić albo zarumienić. Potem to, co potrzebuje najdłużej — twarde mięso, suche strączki, kasza. Na końcu to, co potrzebuje najkrócej: zielone warzywa, zioła, nabiał.",
        "Najczęstszy błąd polega na wrzuceniu wszystkiego naraz. Wynik jest zawsze ten sam: część rozgotowana na papkę, część twarda, a całość bez wyrazu. Danie jednogarnkowe nie znaczy „jednoetapowe”.",
        "I jeszcze jedna rzecz, którą warto wiedzieć zawczasu: te dania są zwykle lepsze następnego dnia. To nie jest wada ani oznaka, że coś poszło nie tak — smaki potrzebują czasu, żeby się połączyć. Gulasz w niedzielę i gulasz w poniedziałek to dwa różne dania, i to poniedziałkowe jest lepsze.",
        "Teraz o sprzęcie i tu wyjątkowo powiem bez żadnej ostrożności: to jest dokładnie ta kategoria, w której to urządzenie jest najlepsze. Wszystko w jednym naczyniu, mieszanie bez przerwy przez godzinę, brak przypalania na dnie, brak konieczności stania obok. Dania jednogarnkowe są jego naturalnym repertuarem i to na nich najczęściej pracuje w domach, do których wracam po latach.",
        "Jedno zastrzeżenie, żeby było uczciwie do końca: bazy nie zarumieni. Cebula się w nim zeszkli, ale nie skarmelizuje, a mięso nie dostanie skórki. Przy części tych dań to jest połowa smaku. Dlatego przy gulaszu czy pieczeni warto poświęcić dziesięć minut na patelnię na początku, a resztę zostawić urządzeniu. To jest kompromis, który polecam najczęściej ze wszystkich.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Drohiczynie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli w domu królują zupy, gulasze i wszystko, co robi się w jednym garnku — powiedzcie to przy umawianiu. To najmocniejsza strona tego sprzętu i najlepiej zobaczyć ją na własnym daniu.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Drohiczynie"),
    sekcjaRaty("w Drohiczynie"),
    {
      id: "rodzina",
      heading: "Thermomix dla drohiczyńskiej rodziny",
      paragraphs: [
        "Samo miasto liczy nieco ponad tysiąc siedemset mieszkańców, a cała gmina blisko pięć i pół tysiąca — miasto i czterdzieści trzy wsie na ponad dwustu kilometrach kwadratowych. Gród nad Bugiem założyli osadnicy ruscy w pierwszej połowie jedenastego wieku, na skrzyżowaniu szlaków łączących Ruś, Bałtyk, Mazowsze i Koronę. Prawo magdeburskie nadał Drohiczynowi w 1498 roku książę Aleksander Jagiellończyk, a od dekretu Zygmunta I z 1520 roku aż do 1795 miasto było stolicą województwa podlaskiego. W szesnastym wieku działał tu port rzeczny, dziewięć młynów wodnych i siedemdziesiąt karczem, a miasto słynęło z targów, jarmarków i szkół prowadzonych przez zakony. Katedrę Trójcy Przenajświętszej ufundowano w 1392 roku i przebudowano w barokową w latach 1696–1723; kościół i klasztor benedyktynek z 1623 roku zaprojektował Paweł Fontana z fundacji wojewody podlaskiego Wojciecha Niemiry; klasycystyczna cerkiew świętego Mikołaja pochodzi z lat 1763–1792. Na Górze Zamkowej badania archeologiczne w 2012 roku ujawniły zarysy kamiennych fundamentów.",
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

  districtsHeading: "Do których części gminy Drohiczyn dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich czterdziestu trzech wsi gminy. Dojazd jest wszędzie bezpłatny.",
    "Przy umawianiu wystarczy podać miejscowość i ulicę albo numer domu.",
  ],
  districts: [],

  nearbyHeading: "Poza Drohiczyn też przyjadę",
  nearbyParagraphs: [
    "Siemiatycze, Ciechanowiec, Brańsk i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Siemiatycze", "Ciechanowiec", "Brańsk", "Kleszczele"],

  about: blokOMnie("do Drohiczyna", "w Drohiczynie i całej gminie", REGION_PODLASIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Drohiczyna bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich czterdziestu trzech wsi gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku, bo to poważna pomyłka wyszukiwarek: chodzi o Drohiczyn nad Bugiem w powiecie siemiatyckim, a nie o Drohiczyn Poleski na Białorusi.",
    },
    ...faqWspolne("w Drohiczynie"),
    {
      question: "Dlaczego dania jednogarnkowe są tak popularne na całym świecie?",
      answer:
        "Bo przez większość historii nikt nie miał czterech palników, a poza tym takie danie wybacza błędy, skaluje się na dowolną liczbę osób i nie wymaga zgrywania składników w czasie — wszystko dochodzi w tym samym naczyniu. To najstarsza forma obiadu, nie gorsza kategoria.",
    },
    {
      question: "W jakiej kolejności dodawać składniki do jednego garnka?",
      answer:
        "Najpierw baza smaku: cebula i warzywa korzeniowe. Potem to, co potrzebuje najdłużej — twarde mięso, suche strączki, kasza. Na końcu to, co potrzebuje najkrócej: zielone warzywa, zioła, nabiał. Wrzucenie wszystkiego naraz kończy się tym, że część jest rozgotowana, a część twarda.",
    },
    {
      question: "Czy Thermomix dobrze radzi sobie z gulaszem i zupami?",
      answer:
        "To jego najmocniejsza strona i mówię to bez ostrożności: jedno naczynie, mieszanie bez przerwy przez godzinę, zero przypalania i brak konieczności stania obok. Jedno zastrzeżenie — bazy nie zarumieni, a przy gulaszu czy pieczeni to bywa połowa smaku. Warto poświęcić dziesięć minut na patelnię na początku, a resztę zostawić urządzeniu.",
    },
  ],

  geo: { lat: 52.4003, lng: 22.6586 },
};
