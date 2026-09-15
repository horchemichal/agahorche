import type { CityContent } from "../city-content";
import {
  REGION_KUJAWSKO_POMORSKIE,
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
 * LIPNO — powiat lipnowski, woj. kujawsko-pomorskie.
 * GMINA MIEJSKA. 13 331 mieszkańców (GUS 31.12.2024),
 * 11,0 km².
 * ⚠⚠ OBOK ISTNIEJE ODRĘBNA GMINA WIEJSKA LIPNO
 *   (11 526 osób) Z SIEDZIBĄ W TYM SAMYM MIEŚCIE.
 *   NIE MIESZAM TYCH DANYCH. TWARDA GRANICA.
 * ⚠⚠ DOMENA `lipno.pl` NALEŻY DO GMINY LIPNO
 *   W WIELKOPOLSCE (powiat leszczyński) — TO INNA GMINA.
 *   Miasto ma `umlipno.pl`, gmina wiejska `uglipno.pl`.
 *   NIE POWOŁUJĘ SIĘ NA `lipno.pl`. TWARDA GRANICA.
 * ⚠ ODMIANA: D. LIPNA, Ms. W LIPNIE, przym. LIPNOWSKI.
 *
 * HISTORIA — FAKTY UŻYTE:
 * — miasto ziemi dobrzyńskiej, siedziba powiatu lipnowskiego,
 * — ⚠⚠ RDZEŃ KĄTA — STRUKTURA ZAKŁADÓW W 1881 R.:
 *   w niedużym mieście działały równocześnie CZTERY
 *   GARBARNIE, DWIE MYDLARNIE, BROWAR I FABRYKA OCTU.
 *   Każdy z tych zakładów robił JEDNĄ rzecz i tylko jedną.
 *   ⚠ UŻYWAM TEJ LISTY WYŁĄCZNIE JAKO WYLICZENIA
 *   I JAKO STRUKTURY — NIE ROZWIJAM ŻADNEGO
 *   Z TYCH RZEMIOSŁ OSOBNO. TWARDA GRANICA
 *   (garbarstwo jest zajęte przez inne miasto).
 * — dziś w mieście działa duży zakład przetwórstwa warzyw
 *   ⚠⚠ BEZ NAZWY FIRMY, JEDNO ZDANIE, BEZ ROZWIJANIA
 *   TEMATU MROŻONEK — TEN KĄT JEST ZAJĘTY (Płońsk).
 *   TWARDA GRANICA.
 *
 * ⚠⚠ LISTA PRODUKTÓW TRADYCYJNYCH: region pochodzenia
 *   produktu „TWARÓG Z KUJAW I ZIEMI DOBRZYŃSKIEJ"
 *   (wpis 31 lipca 2013 r.) OBEJMUJE ziemię dobrzyńską,
 *   w której leży Lipno. ⚠ TEN PRODUKT JEST JUŻ PODSTAWĄ
 *   KĄTA STRONY RYPINA — TUTAJ GO NIE UŻYWAM W OGÓLE.
 *   TWARDA GRANICA.
 * ⚠ OSIEDLI MIASTA NIE USTALONO — districts PUSTE.
 *
 * KĄT: SZUFLADA — jedno narzędzie do jednej rzeczy kontra
 * jedno narzędzie do wielu rzeczy.
 * Kąt od spisu zakładów z 1881 r.: cztery garbarnie, dwie
 * mydlarnie, browar i fabryka octu w jednym niedużym
 * mieście. Osiem zakładów, z których każdy umiał jedną
 * rzecz. Dokładnie tak wygląda dziś szuflada w kuchni.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że w 1881 r. Lipno miało cztery garbarnie, dwie
 *   mydlarnie, browar i fabrykę octu — i że to była
 *   normalna struktura: każdy zakład robił jedno,
 * — ŻE W KUCHNI ZOSTAŁA DOKŁADNIE TA SAMA STRUKTURA,
 *   tylko w szufladzie: obieraczka do jarzyn, obieraczka
 *   do szparagów, nożyk do awokado, wykrawacz do jabłek,
 *   łopatka do ryby, szczypce do spaghetti, prasa
 *   do czosnku,
 * — ŻE TO NIE JEST TEKST PRZECIWKO GADŻETOM — część
 *   z nich robi swoją jedną rzecz LEPIEJ niż cokolwiek
 *   innego i dlatego ma sens,
 * — ⚠⚠ ŻE KRYTERIUM JEST JEDNO I DA SIĘ JE SPRAWDZIĆ:
 *   ILE RAZY W MIESIĄCU TEGO UŻYWAM. Rzecz używana raz
 *   w tygodniu zarabia na swoje miejsce. Rzecz używana
 *   raz w roku zajmuje miejsce rzeczy używanej codziennie
 *   — to jest cała arytmetyka szuflady,
 * — ŻE DRUGIE KRYTERIUM TO CZAS DOJŚCIA: narzędzie,
 *   po które trzeba sięgnąć na drugi koniec kuchni albo
 *   przekopać szufladę, przegrywa z gorszym narzędziem
 *   leżącym pod ręką — i dlatego układ szuflady jest
 *   ważniejszy niż jej zawartość,
 * — ŻE TRZECIE KRYTERIUM TO MYCIE: narzędzie, które trudno
 *   umyć, przestaje być używane, nawet jeśli jest dobre
 *   ⚠ ODSYŁAM DO STRONY O MYCIU MIĘDZY ETAPAMI,
 *   NIE ROZWIJAM,
 * — ŻE URZĄDZENIE WIELOFUNKCYJNE ROZWIĄZUJE CZĘŚĆ SZUFLADY,
 *   A NIE CAŁĄ — i to trzeba powiedzieć uczciwie,
 * — ⚠ UCZCIWIE O SPRZĘCIE: Thermomix zastępuje realnie
 *   kilka rzeczy — miksowanie, siekanie, ubijanie,
 *   podgrzewanie z mieszaniem, ważenie. ALE NIE ZASTĄPI
 *   DOBREGO NOŻA, DESKI, SITA, OBIERACZKI I ŁYŻKI
 *   DREWNIANEJ. Te pięć rzeczy zostaje w każdej kuchni
 *   i nic tego nie zmieni,
 * — ŻE PYTANIE „co mogę wyrzucić" JEST WAŻNIEJSZE
 *   NIŻ PYTANIE „co jeszcze dokupić" — i że odpowiedź
 *   na oba daje ten sam licznik użyć.
 *
 * TWARDE GRANICE:
 * — ⚠⚠ ZERO ROZWIJANIA GARBARSTWA — to kąt innego miasta.
 *   Garbarnie występują WYŁĄCZNIE jako liczba w wyliczeniu.
 *   TWARDA GRANICA.
 * — ⚠⚠ ZERO OCTU JAKO TEMATU — fabryka octu występuje
 *   WYŁĄCZNIE jako pozycja w wyliczeniu. Ocet jest kątem
 *   innych miast. TWARDA GRANICA.
 * — ⚠⚠ ZERO MYDŁA, ŁUGU I MYCIA JAKO TEMATU —
 *   mydlarnie występują WYŁĄCZNIE jako liczba.
 * — ⚠⚠ ZERO PIWA I ZERO ZACHĘTY DO ALKOHOLU — browar
 *   występuje WYŁĄCZNIE jako pozycja w wyliczeniu.
 * — ⚠⚠ ZERO ROZWIJANIA MROŻONEK — kąt zajęty.
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH NAZW FIRM.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ZERO wątków wojennych i okupacyjnych.
 * — ZERO wątków wyznaniowych.
 * — ZERO wyludniania, bezrobocia i zamykania zakładów.
 * — ZERO nazw firm działających dziś w mieście.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH — OBOWIĄZKOWE:
 * — „STARY SPRZĘT, KTÓRY NADAL DZIAŁA" (Dąbrowa
 *   Białostocka) dotyczy TEGO, KIEDY NIE WARTO WYMIENIAĆ.
 * — „KUPNO NA WYROST" (Kobyłka) dotyczy KUPOWANIA SPRZĘTU
 *   LEPSZEGO NIŻ DZISIEJSZE POTRZEBY.
 * — „SKALA I POJEMNOŚĆ" (Gniezno) dotyczy DUŻYCH ILOŚCI.
 * — „CZY MYĆ NACZYNIE MIĘDZY ETAPAMI" (Susz) dotyczy MYCIA
 *   W TRAKCIE GOTOWANIA. Odsyłam tam wprost.
 * TUTAJ chodzi o LICZBĘ NARZĘDZI W SZUFLADZIE i o to,
 * czym się mierzy ich sens.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MIESZAM danych gminy miejskiej i wiejskiej.
 * — NIE POWOŁUJĘ SIĘ na domenę lipno.pl.
 * — NIE PODAJĘ nazw dzisiejszych zakładów.
 * — NIE ROZWIJAM żadnego z rzemiosł z listy 1881 r.
 * — NIE PODAJĘ nazw osiedli.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Lipno jest gminą miejską w ziemi dobrzyńskiej, siedzibą
 *   powiatu lipnowskiego; liczy 13 331 mieszkańców
 *   (GUS, 31.12.2024) na jedenastu kilometrach kwadratowych,
 *   a obok istnieje odrębna gmina wiejska o tej samej nazwie
 *   z siedzibą w mieście,
 * — w 1881 roku działały tu równocześnie cztery garbarnie,
 *   dwie mydlarnie, browar i fabryka octu,
 * — dziś w mieście pracuje duży zakład przetwórstwa warzyw.
 */
export const LIPNO: CityContent = {
  slug: "lipno",
  h1: "Thermomix Lipno – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Lipno — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Lipnie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i okolica. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Lipno — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Lipnie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Lipna z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do okolicznych wsi.",

  highlights: highlightyStandardowe("Lipno"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Rzecz używana raz w roku zajmuje miejsce rzeczy używanej codziennie.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Lipnie – jak wygląda prezentacja?",
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
      id: "szuflada",
      heading: "Osiem zakładów, z których każdy umiał jedną rzecz",
      paragraphs: [
        "W 1881 roku w Lipnie działały równocześnie cztery garbarnie, dwie mydlarnie, browar i fabryka octu. Osiem zakładów w niedużym mieście, a każdy z nich robił jedną rzecz i tylko jedną. Nikt wtedy nie uważał tego za dziwne — tak po prostu wyglądała gospodarka: specjalizacja była tańsza niż uniwersalność.",
        "Otwórz teraz szufladę w swojej kuchni. Zobaczysz dokładnie tę samą strukturę.",
        "Obieraczka do jarzyn. Obieraczka do szparagów. Nożyk do awokado. Wykrawacz do gniazd nasiennych w jabłku. Łopatka do ryby. Szczypce do spaghetti. Prasa do czosnku. Siedem przedmiotów, siedem funkcji, jedna szuflada, która się nie domyka.",
        "I od razu zastrzeżenie, bo to nie jest tekst przeciwko gadżetom. Część z nich robi swoją jedną rzecz lepiej niż cokolwiek innego i dokładnie dlatego ma sens. Obieraczka obiera szybciej niż nóż i nikt rozsądny nie będzie z tym dyskutował.",
        "Rzecz w tym, że nikt tego nie liczy. A policzyć się da i to jest cała arytmetyka szuflady: ile razy w miesiącu tego użyłam. Rzecz używana raz w tygodniu zarabia na swoje miejsce. Rzecz używana raz w roku zajmuje miejsce rzeczy używanej codziennie — i to jest jej prawdziwy koszt, nie ta stówka, którą kiedyś za nią zapłaciłam.",
        "Drugie kryterium jest jeszcze mniej oczywiste: czas dojścia. Narzędzie, po które trzeba iść na drugi koniec kuchni albo przekopać całą szufladę, przegrywa z gorszym narzędziem leżącym pod ręką. Zawsze. To znaczy, że układ szuflady jest ważniejszy niż jej zawartość — i że pięć rzeczy używanych codziennie powinno leżeć osobno od trzydziestu używanych czasem.",
        "Trzecie kryterium to mycie. Narzędzie, które trudno domyć, po prostu przestaje być używane, nawet jeśli jest świetne. O myciu w trakcie gotowania pisałam osobno, ale tu chodzi o coś prostszego: jeśli po każdym użyciu muszę dłubać wykałaczką, to za trzecim razem sięgnę po nóż.",
        "I teraz o urządzeniu wielofunkcyjnym, bo trzeba to powiedzieć uczciwie. Thermomix zastępuje realnie kilka rzeczy z tej szuflady i z tego blatu: miksowanie, siekanie, ubijanie, podgrzewanie z mieszaniem, ważenie. To nie jest marketing, to jest po prostu lista funkcji, które wykonuje jedno urządzenie zamiast czterech.",
        "Ale nie zastąpi dobrego noża, deski, sita, obieraczki i drewnianej łyżki. Te pięć rzeczy zostaje w każdej kuchni i nic tego nie zmieni — pisałam o tym przy wadach i zaletach, bo to jest dokładnie ten rodzaj rzeczy, o którym na prezentacji trzeba powiedzieć wprost.",
        "Więc pytanie nie brzmi „co jeszcze dokupić”. Brzmi „co mogę stąd wyjąć”. Odpowiedź na oba daje ten sam licznik użyć — i w Lipnie, mieście ośmiu zakładów od jednej rzeczy, jakoś szczególnie dobrze to brzmi.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/funkcje", label: "Funkcje Thermomixa" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Lipnie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli chcesz sprawdzić, które rzeczy z Twojego blatu urządzenie realnie zastąpi, a które zostaną — powiedz to przy umawianiu i przejdziemy to po kolei.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Lipnie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla lipnowskiej rodziny",
      paragraphs: [
        "Lipno jest gminą miejską w ziemi dobrzyńskiej i siedzibą powiatu lipnowskiego; liczy ponad trzynaście tysięcy mieszkańców na jedenastu kilometrach kwadratowych, a obok istnieje odrębna gmina wiejska o tej samej nazwie, z siedzibą w tym samym mieście. W 1881 roku działały tu równocześnie cztery garbarnie, dwie mydlarnie, browar i fabryka octu — osiem zakładów, z których każdy robił jedną rzecz. Dziś w mieście pracuje duży zakład przetwórstwa warzyw.",
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

  districtsHeading: "Do których części Lipna dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — od centrum i okolic rynku po osiedla przy wylotach dróg. Dojeżdżam też do wsi w okolicznej gminie wiejskiej.",
    "Przy umawianiu wystarczy podać ulicę i numer domu albo nazwę miejscowości. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Lipno też przyjadę",
  nearbyParagraphs: [
    "Rypin, Skępe, Dobrzyń nad Wisłą, Kowal, Chodecz, Lubień Kujawski i Włocławek są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Rypin", "Skępe", "Dobrzyń nad Wisłą", "Włocławek"],

  about: blokOMnie("do Lipna", "w Lipnie", REGION_KUJAWSKO_POMORSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Lipna bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wsi w okolicznej gminie wiejskiej. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku: Lipno to gmina miejska w powiecie lipnowskim, a obok istnieje odrębna gmina wiejska o tej samej nazwie — do obu przyjeżdżam tak samo.",
    },
    ...faqWspolne("w Lipnie"),
    {
      question: "Ile rzeczy z kuchni realnie zastąpi Thermomix?",
      answer:
        "Miksowanie, siekanie, ubijanie, podgrzewanie z mieszaniem i ważenie — to jest lista funkcji, które wykonuje jedno urządzenie zamiast kilku osobnych. Ale nie zastąpi dobrego noża, deski, sita, obieraczki i drewnianej łyżki. Te pięć rzeczy zostaje w każdej kuchni i mówię to wprost, zanim ktoś zapyta.",
    },
    {
      question: "Jak sprawdzić, czy gadżet w szufladzie ma sens?",
      answer:
        "Policzyć, ile razy w miesiącu się go używa. Rzecz używana raz w tygodniu zarabia na swoje miejsce; rzecz używana raz w roku zajmuje miejsce rzeczy używanej codziennie — i to jest jej prawdziwy koszt. Do tego dwa kryteria, o których się nie mówi: czas dojścia i to, czy łatwo się myje. Narzędzie trudne do umycia przestaje być używane, nawet jeśli jest dobre.",
    },
  ],

  geo: { lat: 52.8441, lng: 19.1784 },
};
