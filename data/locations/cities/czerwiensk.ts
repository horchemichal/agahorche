import type { CityContent } from "../city-content";
import {
  REGION_LUBUSKIE,
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
 * CZERWIEŃSK — gmina miejsko-wiejska w powiecie zielonogórskim.
 * MIASTO 3 747, GMINA 10 153 (GUS 31.12.2024).
 * POWIERZCHNIA MIASTA 9,4 km², GMINY 195,5 km².
 * ⚠ LICZBY SOŁECTW NIE PODAJĘ — nieustalona; znane jest tylko
 *   „16 wsi i osad", a to liczba miejscowości.
 * ⚠ Portal turystyczny podaje zaniżone liczby ludności
 *   (ok. 9 380 gmina, ok. 4 255 miasto) bez daty — NIE CYTUJĘ.
 * LASY ZAJMUJĄ 99 km² z 196 — PONAD POŁOWĘ POWIERZCHNI.
 * GMINA ZDOMINOWANA GOSPODARCZO PRZEZ ROLNICTWO.
 * Odległość od Zielonej Góry ok. 12 km.
 *
 * ⚠ HOMONIMY: CZERWIEŃSK ≠ CZERWIŃSK NAD WISŁĄ (mazowieckie)
 * ≠ CZERWIONKA-LESZCZYNY ≠ CZERWIN. FAQ to rozróżnia.
 *
 * ⚠⚠ PRAWA MIEJSKIE — PEŁNY, POTWIERDZONY CIĄG (jedyny taki
 * w tej fali):
 * NADANIE 1690 r. — elektor brandenburski FRYDERYK III,
 * na wniosek CHRISTOPHA VON ROTHENBURGA.
 * UTRATA — LISTOPAD 1945 r. ⚠ Dziennej daty (20 listopada)
 *   NIE PODAJĘ — jedno źródło.
 * 1957 — przekwalifikowanie na osadę wiejską.
 * PRZYWRÓCENIE — 1 STYCZNIA 1969 r.
 *
 * HISTORIA: dawna nazwa ROTHENBURG, wcześniej „Nowy Nietków";
 * Nietków Polski wzmiankowany 1428 r. OK. 1550 r. Rothenburgowie
 * wznieśli zamek jako rezydencję, a wokół niego rozwinęła się
 * osada służebna. Po wojnie trzydziestoletniej osiedlili się
 * tu TKACZE ZE ŚLĄSKA.
 * ⚠⚠ SUKIENNICTWO: „podstawowym zajęciem mieszkańców
 * do końca XIX w. było sukiennictwo"; pod koniec XVIII w.
 * działało w mieście 100 SAMODZIELNYCH MISTRZÓW TKACKICH,
 * a pięćdziesiąt lat później utworzono SKŁAD WEŁNY.
 * Kolej przekształciła gospodarkę — Czerwieńsk stał się ważnym
 * węzłem kolejowym, a lata 70. XX w. przyniosły rozbudowę
 * magistrali „Śląsk – Porty".
 * ⚠ KĄTA KOLEJOWEGO NIE UŻYWAM — „węzeł kolejowy" ZAJĘTY.
 *
 * ⚠⚠ ARBORETUM W NIETKOWIE — PODSTAWA KĄTA:
 * Założone w drugiej połowie XIX w. przez rodzinę
 * VON ROTHENBURG, ok. 1,5 km na północny zachód od wsi,
 * nad strumieniem ZIMNY POTOK. W LATACH 1893–1895 ZAŁOŻONO
 * „GAJ IGLASTY" Z PONAD 150 GATUNKAMI DRZEW I KRZEWÓW,
 * wielu rzadkich dla flory europejskiej; nasadzenia wykonała
 * firma ogrodnicza. Dziś 1,85 ha w zarządzie Lasów Państwowych.
 * Gatunki: cyprysiki, dęby kaukaski, burgundzki i błotny,
 * odmiany buków, lipy, kasztanowce, klony.
 * Wśród postulatów konserwatorskich: TABLICZKI BOTANICZNE
 * i podział tematyczny. TO JEST KOTWICA.
 * ⚠ DATOWANIE SPRZECZNE (początek XIX w. kontra druga połowa
 *   i nasadzenia 1893–95) — idę za źródłem konserwatorskim.
 * ⚠ NAZWY FIRMY OGRODNICZEJ NIE PODAJĘ.
 * ⚠ POWODZI 1997 r. NIE OPISUJĘ — temat katastroficzny.
 *
 * PASIEKA w Czerwieńsku założona w 1984 r.: 45 rodzin
 * pszczelich w drewnianych ulach, miody akacjowy, wielokwiatowy
 * i lipowy; sprzedaż na targowiskach miejskich i wysyłkowo.
 * ⚠ NAZWISK NIE PODAJĘ. ⚠ KĄT MIODOWY ZAJĘTY — pasiekę
 *   podaję jako fakt.
 * KOŁO GOSPODYŃ WIEJSKICH W NIETKOWIE: ponad 40 członkiń,
 * pierwsze miejsca w konkursach gminnych na WIENIEC DOŻYNKOWY
 * w 2022 i 2024 r. oraz trzecie w wojewódzkim w 2021 r.;
 * siedziba w Domu Kultury w Nietkowie.
 * ⚠ NAZWISK NIE PODAJĘ. ⚠ ROKU ZAŁOŻENIA KGW NIE PODAJĘ.
 * ⚠⚠ DAT Z KALENDARZA WYDARZEŃ GMINY NIE UŻYWAM — odczyt
 *   zawierał oczywisty błąd („most na Wiśle w Pomorsku", które
 *   leży nad Odrą), więc cała lista jest niepewna. W szczególności
 *   NIE PODAJĘ lipcowej daty dożynek.
 * DNI CZERWIEŃSKA — 50. edycja w 2026 r., z symbolicznym
 * przekazaniem kluczy do bram miasta i korowodem.
 * ⚠⚠ TO 50. EDYCJA DNI, NIE 50-LECIE MIASTA — praw miejskich
 *   przywrócono 1.01.1969. Piszę to precyzyjnie.
 * ⚠ NIE ZNALEZIONO w gminie zakładu przetwórstwa spożywczego,
 *   piekarni, mleczarni, młyna ani winnicy.
 *
 * ZABYTKI: RATUSZ zbudowany w 1909 r. z wykorzystaniem
 * elementów wcześniejszej budowli z 1779 r., rozbudowany
 * w 1927 o parterowe aneksy; dwukondygnacyjny, z sygnaturką
 * w kalenicy. KOŚCIÓŁ NEOGOTYCKI 1882–1886. Kamienice
 * mieszkalne z XIX w. KOŚCIÓŁ W LEŚNIOWIE WIELKIM z XIV w.
 * — NAJSTARSZY W GMINIE.
 *
 * KĄT: KAWA — MIELENIE I ŚWIEŻOŚĆ.
 * Kąt od arboretum, w którym ktoś zebrał ponad sto pięćdziesiąt
 * gatunków drzew i chciał je opisać tabliczkami — podczas gdy
 * produkt kupowany w domu najczęściej, czyli kawa, trafia
 * do nas bez nazwy i bez daty.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że kawa jest produktem kupowanym w polskich domach
 *   najczęściej ze wszystkich, a wiemy o niej najmniej,
 * — ŻE NAJWAŻNIEJSZA JEST ŚWIEŻOŚĆ PALENIA, a nie cena
 *   ani kraj pochodzenia — i że data palenia bywa na paczce,
 *   tylko nikt jej nie szuka,
 * — ŻE KAWA MIELONA STARZEJE SIĘ NIEPORÓWNANIE SZYBCIEJ
 *   NIŻ ZIARNISTA: po zmieleniu aromat ulatnia się w ciągu
 *   kilkunastu minut, nie dni,
 * — WNIOSEK: mielić tuż przed zaparzeniem — to jedyna zmiana
 *   w całej kawie, którą czuć od pierwszego łyka,
 * — ŻE GRUBOŚĆ ZMIELENIA MUSI PASOWAĆ DO SPOSOBU PARZENIA:
 *   grubo tam, gdzie woda ma długi kontakt, drobno tam, gdzie
 *   przelatuje szybko — i że to jest cała teoria,
 * — CO SIĘ DZIEJE, GDY NIE PASUJE: za drobno przy długim
 *   kontakcie daje gorycz, za grubo przy krótkim daje kwaśną
 *   wodę; i że to NIE jest wina kawy,
 * — ŻE TEMPERATURA WODY MA ZNACZENIE: wrzątek prosto
 *   z czajnika wypala kawę i daje gorzki posmak,
 * — ŻE KAWA NIE LUBI LODÓWKI ANI PRZEZROCZYSTEGO SŁOIKA
 *   NA PARAPECIE — szczelnie, ciemno, w temperaturze pokojowej,
 * — I ŻE KUPOWANIE MAŁYCH PACZEK CZĘŚCIEJ jest tańsze
 *   w skutkach niż wielkie opakowanie, które wywietrzeje,
 * — UCZCIWIE: to urządzenie nie zaparzy kawy i nie jest
 *   ekspresem — nie zrobi espresso ani mlecznej pianki
 *   w takim sensie, jak ekspres,
 * — ale miele ziarno, i to jest dokładnie ta jedna czynność,
 *   od której zależy tu najwięcej.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR. ZERO stopni
 *   przy wodzie — piszę „nie wrzątek, chwilę po zagotowaniu".
 * — ŻADNYCH PROPORCJI I GRAMATUR.
 * — ⚠⚠ ŻADNYCH TWIERDZEŃ ZDROWOTNYCH. ZERO kofeiny jako
 *   tematu zdrowotnego, ZERO „ile kaw dziennie", ZERO ciśnienia,
 *   ZERO snu. Piszę WYŁĄCZNIE o smaku i aromacie.
 *   TWARDA GRANICA.
 * — ŻADNYCH NAZW FIRM, PALARNI ANI MAREK.
 * — ZERO snobizmu i zero wyśmiewania kawy rozpuszczalnej
 *   ani „sypanej". Ton życzliwy.
 *
 * ⚠ ETYKA — LUBUSKIE:
 * — ZERO tematów wojennych i granicznych.
 * — ZERO wysiedleń i przesiedleń po 1945 r.
 * — ZERO „Ziem Odzyskanych" jako tematu politycznego.
 * — ZERO konfliktów narodowościowych i wyznaniowych.
 * — ZERO bezrobocia i wyludniania.
 * — ZERO powodzi i katastrof.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Herbaty, napary i gorące
 * napoje" dotyczą temperatury wody przy naparach ziołowych
 * i herbacie. „Niedzielne popołudnie — kawa, ciasto i goście"
 * dotyczy okazji towarzyskiej, nie produktu. „Przyprawy całe
 * kontra mielone" dotyczą przypraw korzennych. „Mąka
 * i mielenie" dotyczą zboża. „Napoje robione w domu" dotyczą
 * napojów przygotowywanych samodzielnie. Tutaj chodzi o KAWĘ
 * JAKO PRODUKT: o świeżość palenia, mielenie i przechowywanie.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ liczby sołectw.
 * — NIE PODAJĘ dziennej daty utraty praw miejskich.
 * — NIE UŻYWAM dat z kalendarza wydarzeń gminy.
 * — NIE MYLĘ 50. edycji Dni Czerwieńska z 50-leciem miasta.
 * — NIE PODAJĘ nazwisk pszczelarza ani członkiń KGW.
 * — NIE OPISUJĘ powodzi.
 * — NIE PRZYPISUJĘ gminie produktu z Listy Produktów
 *   Tradycyjnych — nie znaleziono żadnego.
 * — NIE MYLĘ CZERWIEŃSKA z CZERWIŃSKIEM NAD WISŁĄ.
 * — districts: brak potwierdzonych osiedli. PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — miasto liczy blisko cztery tysiące mieszkańców na 9,4 km²,
 *   cała gmina ponad dziesięć tysięcy na 195,5 km²; lasy
 *   zajmują ponad połowę jej powierzchni, a gospodarczo gmina
 *   jest zdominowana przez rolnictwo; do Zielonej Góry jest
 *   stąd około dwunastu kilometrów,
 * — prawa miejskie nadał Czerwieńskowi w 1690 r. elektor
 *   brandenburski Fryderyk III, na wniosek Christopha
 *   von Rothenburga; miasto utraciło je w listopadzie 1945 r.,
 *   w 1957 przekwalifikowano je na osadę wiejską,
 *   a 1 stycznia 1969 r. prawa przywrócono,
 * — dawna nazwa brzmiała Rothenburg, a wcześniej „Nowy
 *   Nietków”; około 1550 r. Rothenburgowie wznieśli tu zamek,
 *   wokół którego rozwinęła się osada służebna, a po wojnie
 *   trzydziestoletniej osiedlili się tkacze ze Śląska.
 *   Podstawowym zajęciem mieszkańców do końca XIX w. było
 *   sukiennictwo — pod koniec XVIII w. pracowało w mieście
 *   stu samodzielnych mistrzów tkackich, a pięćdziesiąt lat
 *   później utworzono skład wełny,
 * — w Nietkowie, nad Zimnym Potokiem, rodzina von Rothenburg
 *   założyła w drugiej połowie XIX w. arboretum: w latach
 *   1893–1895 posadzono w nim ponad sto pięćdziesiąt gatunków
 *   drzew i krzewów, wiele rzadkich dla flory europejskiej
 *   — cyprysiki, dęby kaukaski, burgundzki i błotny, odmiany
 *   buków, lipy, kasztanowce i klony; dziś to 1,85 ha
 *   w zarządzie Lasów Państwowych, a konserwator postuluje
 *   między innymi opisanie okazów tabliczkami botanicznymi,
 * — w Czerwieńsku działa od 1984 r. pasieka z czterdziestoma
 *   pięcioma rodzinami pszczelimi w drewnianych ulach,
 *   z miodami akacjowym, wielokwiatowym i lipowym, sprzedawanymi
 *   na targowiskach i wysyłkowo; w Nietkowie koło gospodyń
 *   wiejskich liczy ponad czterdzieści członkiń i wygrywało
 *   gminne konkursy na wieniec dożynkowy w 2022 i 2024 r.,
 *   a w wojewódzkim zajęło w 2021 trzecie miejsce,
 * — w 2026 r. odbyła się pięćdziesiąta edycja Dni Czerwieńska,
 *   z symbolicznym przekazaniem kluczy do bram miasta
 *   i korowodem,
 * — ratusz zbudowano w 1909 r., z wykorzystaniem elementów
 *   wcześniejszej budowli z 1779, i rozbudowano w 1927
 *   o parterowe aneksy; kościół neogotycki powstał w latach
 *   1882–1886, wokół stoją dziewiętnastowieczne kamienice,
 *   a najstarszy w gminie jest czternastowieczny kościół
 *   w Leśniowie Wielkim.
 */
export const CZERWIENSK: CityContent = {
  slug: "czerwiensk",
  h1: "Thermomix Czerwieńsk – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Czerwieńsk — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Czerwieńsku: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Czerwieńsk — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Czerwieńsku. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Czerwieńska z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do całej gminy.",

  highlights: highlightyStandardowe("Czerwieńsk i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Po zmieleniu kawa traci aromat w kilkanaście minut, nie w dni.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Czerwieńsku – jak wygląda prezentacja?",
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
      id: "kawa",
      heading: "Arboretum w Nietkowie, gdzie każdy okaz ma nazwę — czyli o kawie",
      paragraphs: [
        "W Nietkowie, nad Zimnym Potokiem, rodzina von Rothenburg założyła w drugiej połowie XIX wieku arboretum. W latach 1893–1895 posadzono tam ponad sto pięćdziesiąt gatunków drzew i krzewów, wiele rzadkich dla europejskiej flory — cyprysiki, dęby kaukaski, burgundzki i błotny, odmiany buków, lipy, kasztanowce, klony. Do dziś wśród postulatów konserwatorskich jest ten najbardziej wzruszający: opisać okazy tabliczkami, żeby wiadomo było, co się właściwie ogląda.",
        "W kuchni mamy odwrotną sytuację z produktem kupowanym najczęściej ze wszystkich. Kawa trafia do polskich domów codziennie i prawie nic o niej nie wiemy — ani skąd jest, ani kiedy powstała.",
        "A najważniejsza jest przy niej jedna rzecz i nie jest nią ani cena, ani kraj pochodzenia: świeżość palenia. Kawa to produkt, który się starzeje, i to szybciej, niż sugeruje długi termin na opakowaniu. Data palenia bywa na paczce wydrukowana — tylko nikt jej nie szuka, bo nikt nas nie nauczył, że to ta ważna data.",
        "Druga rzecz jest jeszcze ważniejsza praktycznie: kawa mielona starzeje się nieporównanie szybciej niż ziarnista. Po zmieleniu aromat zaczyna ulatniać się w ciągu kilkunastu minut, a nie dni. Torebka kawy mielonej otwarta tydzień temu to już zupełnie inny produkt niż ta sama kawa w ziarnach.",
        "Stąd jedna jedyna zmiana, którą warto wprowadzić, jeśli ma się wprowadzić tylko jedną: mielić tuż przed zaparzeniem. To jest różnica, którą czuć od pierwszego łyka, i nie kosztuje nic poza chwilą.",
        "Potem zaczyna się rzecz, która brzmi technicznie, a jest banalna: grubość zmielenia musi pasować do sposobu parzenia. Grubo tam, gdzie woda ma z kawą długi kontakt. Drobno tam, gdzie przelatuje szybko. To jest cała teoria i naprawdę nie ma jej więcej.",
        "Kiedy nie pasuje, dzieje się jedno z dwojga. Za drobno przy długim kontakcie daje gorycz — tę charakterystyczną, ściągającą, po której człowiek uznaje, że kawa była kiepska. Za grubo przy krótkim daje kwaśną, wodnistą lurę. W obu przypadkach kawa nie jest niczemu winna.",
        "Ma też znaczenie temperatura wody, i to bardziej, niż się wydaje. Wrzątek prosto z czajnika wypala kawę i zostawia gorzki posmak. Wystarczy chwila przerwy po zagotowaniu, żeby to zniknęło.",
        "Przechowywanie jest ostatnią rzeczą z tej listy. Kawa nie lubi ani lodówki, ani przezroczystego słoika na parapecie — chce być szczelnie zamknięta, w ciemności i w temperaturze pokojowej. Z tego samego powodu kupowanie mniejszych paczek częściej wychodzi w skutkach taniej niż wielkie opakowanie, które zdąży wywietrzeć.",
        "Teraz uczciwie o sprzęcie. Thermomix nie zaparzy kawy i nie jest ekspresem. Nie zrobi espresso, nie zrobi mlecznej pianki w takim sensie, w jakim robi to ekspres, i nie ma sensu udawać inaczej.",
        "Mieli natomiast ziarno — a to jest dokładnie ta jedna czynność z całej powyższej listy, od której zależy najwięcej. Reszta to zwykły czajnik, zwykły dzbanek i dwie minuty uwagi.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Czerwieńsku?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedzcie przy umawianiu, o której u Was pije się kawę. Jeśli wpadnę w tej porze, zmielimy ziarno i porównamy — to najkrótsza droga, żeby usłyszeć różnicę.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Czerwieńsku"),
    sekcjaRaty("w Czerwieńsku"),
    {
      id: "rodzina",
      heading: "Thermomix dla czerwieńskiej rodziny",
      paragraphs: [
        "Samo miasto liczy blisko cztery tysiące mieszkańców na dziewięciu kilometrach kwadratowych, a cała gmina ponad dziesięć tysięcy na stu dziewięćdziesięciu pięciu; lasy zajmują ponad połowę jej powierzchni, a gospodarczo gmina jest zdominowana przez rolnictwo — do Zielonej Góry jest stąd około dwunastu kilometrów. Prawa miejskie nadał Czerwieńskowi w 1690 roku elektor brandenburski Fryderyk III, na wniosek Christopha von Rothenburga; miasto utraciło je w listopadzie 1945, w 1957 przekwalifikowano je na osadę wiejską, a 1 stycznia 1969 roku prawa przywrócono. Dawna nazwa brzmiała Rothenburg, a wcześniej „Nowy Nietków”; około 1550 roku Rothenburgowie wznieśli tu zamek, wokół którego rozwinęła się osada służebna, a po wojnie trzydziestoletniej osiedlili się tkacze ze Śląska. Podstawowym zajęciem mieszkańców do końca XIX wieku było sukiennictwo — pod koniec XVIII stulecia pracowało w mieście stu samodzielnych mistrzów tkackich, a pięćdziesiąt lat później utworzono skład wełny. W Nietkowie, nad Zimnym Potokiem, rodzina von Rothenburg założyła arboretum: w latach 1893–1895 posadzono w nim ponad sto pięćdziesiąt gatunków drzew i krzewów, dziś to blisko dwa hektary w zarządzie Lasów Państwowych. W Czerwieńsku działa od 1984 roku pasieka z czterdziestoma pięcioma rodzinami pszczelimi, a w Nietkowie koło gospodyń wiejskich liczące ponad czterdzieści członkiń, które wygrywało gminne konkursy na wieniec dożynkowy w 2022 i 2024 roku. W 2026 odbyła się pięćdziesiąta edycja Dni Czerwieńska, z symbolicznym przekazaniem kluczy do bram miasta i korowodem. Ratusz zbudowano w 1909 roku, z wykorzystaniem elementów budowli z 1779, kościół neogotycki powstał w latach 1882–1886, a najstarszy w gminie jest czternastowieczny kościół w Leśniowie Wielkim.",
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

  districtsHeading: "Do których części gminy Czerwieńsk dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich wsi gminy, w tym do Nietkowa, Nietkowic, Leśniowa Wielkiego i Płotów. Dojazd jest wszędzie bezpłatny.",
    "Przy umawianiu wystarczy podać miejscowość i ulicę albo numer domu.",
  ],
  districts: [],

  nearbyHeading: "Poza Czerwieńsk też przyjadę",
  nearbyParagraphs: [
    "Zielona Góra, Sulechów, Nowogród Bobrzański, Świdnica i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Zielona Góra", "Sulechów", "Nowogród Bobrzański", "Świdnica"],

  about: blokOMnie("do Czerwieńska", "w Czerwieńsku i całej gminie", REGION_LUBUSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Czerwieńska bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich wsi gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku, bo nazwy bywają mylone: Czerwieńsk pod Zieloną Górą to nie Czerwińsk nad Wisłą na Mazowszu.",
    },
    ...faqWspolne("w Czerwieńsku"),
    {
      question: "Dlaczego warto mielić kawę tuż przed zaparzeniem?",
      answer:
        "Bo po zmieleniu aromat zaczyna ulatniać się w ciągu kilkunastu minut, a nie dni. Torebka kawy mielonej otwarta tydzień temu to zupełnie inny produkt niż ta sama kawa w ziarnach. To jedyna zmiana w całej kawie, którą czuć od pierwszego łyka.",
    },
    {
      question: "Dlaczego kawa wychodzi gorzka albo kwaśna?",
      answer:
        "Bo grubość zmielenia nie pasuje do sposobu parzenia. Za drobno przy długim kontakcie z wodą daje gorycz, za grubo przy krótkim — kwaśną, wodnistą lurę. Gorzki posmak daje też wrzątek prosto z czajnika; wystarczy chwila przerwy po zagotowaniu.",
    },
    {
      question: "Jak przechowywać kawę?",
      answer:
        "Szczelnie, w ciemności i w temperaturze pokojowej — nie w lodówce i nie w przezroczystym słoiku na parapecie. Warto też kupować mniejsze paczki częściej: wielkie opakowanie zdąży wywietrzeć, zanim się je zużyje.",
    },
  ],

  geo: { lat: 52.0164, lng: 15.4283 },
};
