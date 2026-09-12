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
 * WIERUSZÓW — gmina miejsko-wiejska w powiecie wieruszowskim.
 * MIASTO 8 266 mieszkańców, CAŁA GMINA 14 023 (31.12.2024, GUS).
 * Brief mówił 8 500 — nieznacznie zawyżone. Bezrobocie w powiecie
 * 4,4% — NAJNIŻSZE ze wszystkich miast tej fali, poniżej średniej
 * krajowej.
 *
 * PRAWA MIEJSKIE — DATA SPORNA: 1401 r. z inicjatywy Bernarda
 * Wierusza (wersja gminy) albo 1368 r. NADAWCY też nie ustalono
 * — Bernard Wierusz był inicjatorem, nie nadawcą. W TEKŚCIE
 * PISZĘ „na przełomie XIV i XV wieku" i nie rozstrzygam.
 * Utrata praw 1870, odzyskanie 1919. Od 1999 r. siedziba powiatu.
 *
 * OBALONE, WAŻNE: nazwa dużego zakładu płytowego ZMIENIŁA SIĘ
 * W CZERWCU 2024 r. wraz ze zmianą właściciela. Ponieważ i tak
 * NIE PODAJĘ NAZW FIRM, w tekście piszę opisowo: „zakład
 * produkujący płyty drewnopochodne".
 * OBALONE: Wieruszów NIE JEST miastem papierniczym. Papiernia
 * w Mirkowie (dziś sołectwo gminy) została zlikwidowana w 1888 r.
 * rozkazem władz carskich i przeniesiona do Jeziorny pod
 * Warszawą. Piszę o niej wyłącznie w czasie przeszłym.
 * OBALONE: Wieruszów leży w WOJEWÓDZTWIE ŁÓDZKIM, nie
 * w Wielkopolsce — choć jest tuż przy granicy, nad Prosną.
 * OBALONE: zamku nie ma — ostatnie pozostałości rozebrano
 * w latach 60. XX w. Nie piszę o „zamku w Wieruszowie".
 *
 * FAKT OSIOWY DLA KĄTA: 23 MAJA 2024 r. w tutejszej fabryce
 * uruchomiono WIEŻĘ RECYKLINGU za ponad 60 MLN ZŁ. Przerabia
 * ok. 80–90 TYS. TON odpadów drzewnych rocznie i podnosi udział
 * drewna z recyklingu w produkcji płyt Z 30% DO 50%.
 *
 * KLASZTOR PAULINÓW ufundowany 1401 r., kościół barokowy 1676 r.;
 * paulini usunięci w 1864 r., wrócili w 1983 r.; od 2009 r.
 * sanktuarium diecezjalne — PIERWSZE W POLSCE pod swoim
 * wezwaniem. O. Augustyn Kordecki, obrońca Jasnej Góry, zmarł
 * w Wieruszowie w 1673 r.
 * SAMOLOT LISUNOW LI-2P stoi w mieście od 1968 r. — jeden
 * z trzech zachowanych w Polsce. ALEJA DĘBÓW CZERWONYCH: ponad
 * 90 drzew pomnikowych. GMINA MA 14 SOŁECTW.
 *
 * KĄT: OBIERKI, SKÓRKI I ŁODYGI — czyli to, co wyrzucamy PRZED
 * gotowaniem. Kąt bierze się wprost z wieży recyklingu:
 * z zakładu, który odzyskuje to, co dotąd było odpadem.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że przed gotowaniem wyrzucamy więcej, niż nam się wydaje:
 *   łodygi natki i kopru, twarde części brokuła i kalafiora,
 *   końcówki włoszczyzny, skórki,
 * — że część z tego ma realne zastosowanie, a część nie —
 *   i nie będę udawać, że wszystko da się uratować,
 * — co konkretnie: łodygi natki i kopru siekają się razem
 *   z listkami i w sosie ich nie widać; łodyga brokuła obrana
 *   jest lepsza od różyczek; końcówki włoszczyzny idą do wywaru,
 * — że nóż tego urządzenia radzi sobie z twardymi częściami
 *   lepiej niż ręka, i to jest cała jego rola,
 * — że są rzeczy, których NIE wolno wrzucać: pestki, twarde
 *   ogonki, gałązki, kości,
 * — i ODMOWA, wyraźna: nie doradzam nic o skórkach warzyw
 *   i owoców pod kątem tego, czy są jadalne albo bezpieczne.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PORAD O TYM, CZY DANA SKÓRKA JEST JADALNA,
 *   ani o myciu warzyw, pozostałościach środków ochrony roślin
 *   czy pestkach zawierających substancje szkodliwe.
 *   ODMOWA STOI W TEKŚCIE.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH — błonnik, witaminy
 *   „w skórce". MÓWIĘ NIE.
 * — ŻADNYCH PORAD O KOMPOSTOWANIU.
 * — ŻADNYCH NAZW FIRM.
 * — ŻADNEJ DATY PRAW MIEJSKICH.
 * — NIE CYTUJĘ i nie nawiązuję do opinii pracowniczych
 *   o miejscowym zakładzie.
 * — NIE ROBIĘ TŁA z zaniku przemysłu papierniczego.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH — TU JEST NAJWAŻNIEJSZE.
 * „Resztki. Co zrobić z tym, co zostało po obiedzie" (inne
 * miasto) dotyczą jedzenia UGOTOWANEGO. „Marnowanie" (Rawa
 * Mazowiecka) dotyczy produktów, które kupiliśmy i o których
 * zapomnieliśmy. „Spiżarnia" (Brusy) dotyczy braku składnika.
 * Tutaj chodzi o COŚ TRZECIEGO i najwęższego: o części warzyw
 * odcinane w trakcie przygotowania, zanim danie w ogóle
 * powstanie.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ daty praw miejskich ani nadawcy.
 * — NIE PISZĘ, że Wieruszów leży w Wielkopolsce.
 * — NIE PISZĘ o zamku w czasie teraźniejszym.
 * — NIE PISZĘ o przemyśle papierniczym w czasie teraźniejszym.
 * — NIE PODAJĘ nazw zakładów ani liczby zatrudnionych;
 *   nie rozstrzygam, który jest największym pracodawcą.
 * — NIE PODAJĘ lokalizacji drewnianego kościoła św. Rocha —
 *   źródła podają rozbieżnie Wieruszów albo Kuźnicę Skakawską.
 * — NIE TWIERDZĘ, że samolot nadal stoi — źródło jest
 *   niedatowane, więc piszę „stanął w 1968 roku".
 * — NIE PISZĘ o produkcie z Listy Produktów Tradycyjnych —
 *   dla tej gminy nie ma żadnego.
 * — districts: nie potwierdzono osiedli statutowych miasta;
 *   status Podzamcza jest sporny. PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — miasto 8 266, gmina 14 023 mieszkańców (31.12.2024, GUS),
 * — prawa miejskie na przełomie XIV i XV w. (data sporna),
 *   utracone w 1870, odzyskane w 1919; od 1999 r. siedziba
 *   powiatu,
 * — miasto leży nad Prosną, przy granicy z Wielkopolską,
 * — 23 maja 2024 r. uruchomiono w tutejszej fabryce płyt wieżę
 *   recyklingu za ponad 60 mln zł; przerabia 80–90 tys. ton
 *   odpadów rocznie i podnosi udział drewna z recyklingu
 *   z 30% do 50%,
 * — klasztor paulinów ufundowany w 1401 r., kościół barokowy
 *   z 1676 r.; paulini usunięci w 1864 r., wrócili w 1983 r.;
 *   od 2009 r. sanktuarium diecezjalne, pierwsze w Polsce pod
 *   swoim wezwaniem,
 * — o. Augustyn Kordecki zmarł w Wieruszowie w 1673 r.,
 * — samolot Lisunow Li-2p stanął w mieście w 1968 r. — jeden
 *   z trzech zachowanych w Polsce,
 * — Aleja Dębów Czerwonych: ponad 90 drzew pomnikowych,
 * — gmina ma 14 sołectw.
 */
export const WIERUSZOW: CityContent = {
  slug: "wieruszow",
  h1: "Thermomix Wieruszów – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Wieruszów (łódzkie) — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Wieruszowie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i sołectwa gminy. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Wieruszów — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Wieruszowie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Wieruszowa z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do sołectw gminy.",

  highlights: highlightyStandardowe("Wieruszów i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Łodygi natki są lepsze niż listki. Serio.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Wieruszowie – jak wygląda prezentacja?",
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
      id: "obierki",
      heading: "Wieża, która odzyskuje drewno — czyli o obierkach, skórkach i łodygach",
      paragraphs: [
        "23 maja 2024 roku w tutejszej fabryce płyt drewnopochodnych uruchomiono wieżę recyklingu za ponad sześćdziesiąt milionów złotych. Przerabia osiemdziesiąt do dziewięćdziesięciu tysięcy ton odpadów drzewnych rocznie i podniosła udział drewna z odzysku w produkcji płyt z trzydziestu do pięćdziesięciu procent. Połowa tego, z czego powstaje płyta, była kiedyś czymś innym i miała iść na spalenie.",
        "Napiszę więc o kuchennym odpowiedniku: o tym, co wyrzucamy zanim jeszcze zaczniemy gotować. Nie o resztkach po obiedzie i nie o zapomnianym jogurcie — o częściach warzyw, które odcinamy w trakcie przygotowania i wrzucamy do kosza w pierwszych dwóch minutach.",
        "Zacznę uczciwie: nie wszystko da się uratować i nie zamierzam udawać, że da. Część obierek to po prostu obierki. Ale trzy rzeczy wyrzucamy zupełnie niepotrzebnie i o nich warto wiedzieć.",
        "Pierwsza: łodygi natki i kopru. Mają więcej smaku niż listki — to nie jest sposób na oszczędność, tylko fakt kulinarny. Problem polega na tym, że są twarde i nożem sieka się je źle. W naczyniu idą razem z listkami i po kilku sekundach nikt ich w sosie nie znajdzie. To samo dotyczy łodyżek kolendry i bazylii.",
        "Druga: łodyga brokuła i głąb kalafiora. Obrana z twardej warstwy łodyga brokuła jest słodsza i delikatniejsza niż różyczki, a wylatuje do kosza w co drugim domu. Do zupy krem albo startej na surówkę — bez różnicy w smaku, za to z realną różnicą w ilości.",
        "Trzecia: końcówki włoszczyzny. Zielone części pora, obierki z selera, korzeń pietruszki, którego nikt nie chce jeść — to jest materiał na wywar, a nie na kosz. Wystarczy zbierać je przez tydzień w zamrażarce.",
        "Rola urządzenia w tym wszystkim jest jedna i konkretna: nóż radzi sobie z twardymi częściami dużo lepiej niż ręka i deska. To, co nożem kroi się z oporem i nierówno, tu po prostu znika. Dzięki temu w ogóle opłaca się tych części używać — bo problem nigdy nie polegał na tym, że są niedobre, tylko na tym, że robota z nimi była nieproporcjonalna.",
        "Czego wrzucać nie wolno, żeby nie zniszczyć noża: pestek, twardych ogonków, gałązek i kości. To nie jest rozdrabniacz ogrodowy.",
        "I granica, przy której nie ustąpię. Nie doradzę Wam nic w sprawie tego, czy dana skórka jest jadalna, jak myć warzywa ani co z pozostałościami środków ochrony roślin. Nie napiszę też, że w skórce „jest najwięcej witamin” — to zdanie powtarza się wszędzie i ja go nie powtórzę. Mówię o smaku i o tym, ile roboty ubywa. Reszta to nie moja dziedzina.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Wieruszowie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeżeli chcecie sprawdzić, czy łodygi natki naprawdę znikają w sosie — kupcie pęczek przed moim przyjazdem. Zrobimy to na miejscu i sami ocenicie.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Wieruszowie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla wieruszowskiej rodziny",
      paragraphs: [
        "Samo miasto Wieruszów liczy nieco ponad osiem tysięcy mieszkańców, a cała gmina ponad czternaście, w tym czternaście sołectw. Prawa miejskie miasto otrzymało na przełomie czternastego i piętnastego wieku — daty nie podaję, bo źródła podają dwie różne — straciło je w 1870 roku, odzyskało w 1919, a od 1999 jest siedzibą powiatu. Leży nad Prosną, tuż przy granicy z Wielkopolską, choć administracyjnie należy do województwa łódzkiego. Klasztor paulinów ufundowano tu w 1401 roku; barokowy kościół pochodzi z 1676, paulinów usunięto w 1864 i wrócili dopiero w 1983 roku, a od 2009 działa tu sanktuarium diecezjalne — pierwsze w Polsce pod swoim wezwaniem. W Wieruszowie zmarł w 1673 roku ojciec Augustyn Kordecki, obrońca Jasnej Góry. Miasto ma też dwie rzeczy, których nikt się nie spodziewa: aleję ponad dziewięćdziesięciu pomnikowych dębów czerwonych i samolot Lisunow Li-2, jeden z trzech zachowanych w Polsce, który stanął tu w 1968 roku.",
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

  districtsHeading: "Do których części gminy Wieruszów dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich czternastu sołectw gminy — Cieszęcina, Kuźnicy Skakawskiej, Mirkowa, Wyszanowa, Chobanina, Pieczysk, Górki Wieruszowskiej i pozostałych. Dojazd jest wszędzie bezpłatny.",
    "Przy umawianiu wystarczy podać miejscowość i ulicę albo numer domu.",
  ],
  districts: [],

  nearbyHeading: "Poza Wieruszów też przyjadę",
  nearbyParagraphs: [
    "Kępno, Wieluń, Złoczew, Bolesławiec, Praszka i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Kępno", "Wieluń", "Złoczew", "Praszka", "Sieradz"],

  about: blokOMnie("do Wieruszowa", "w Wieruszowie i całej gminie", REGION_LODZKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do sołectw gminy Wieruszów?",
      answer:
        "Tak, do wszystkich czternastu — Cieszęcina, Kuźnicy Skakawskiej, Mirkowa, Wyszanowa i pozostałych — oraz do całego miasta. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku: chodzi o Wieruszów w województwie łódzkim, a nie o wieś o tej samej nazwie na Dolnym Śląsku.",
    },
    ...faqWspolne("w Wieruszowie"),
    {
      question: "Co da się zrobić z tym, co zwykle wyrzucam przed gotowaniem?",
      answer:
        "Trzy rzeczy warto zatrzymać. Łodygi natki i kopru — mają więcej smaku niż listki, a posiekane razem z nimi znikają w sosie. Łodygę brokuła i głąb kalafiora — obrane są słodsze od różyczek. Końcówki włoszczyzny — zielony por, obierki selera, korzeń pietruszki: to materiał na wywar. Reszta obierek to po prostu obierki i nie będę udawać, że jest inaczej.",
    },
    {
      question: "Po co do tego urządzenie?",
      answer:
        "Bo problem nigdy nie polegał na tym, że te części są niedobre, tylko na tym, że robota z nimi była nieproporcjonalna. Nóż w naczyniu radzi sobie z twardymi łodygami dużo lepiej niż ręka i deska — i dopiero wtedy w ogóle opłaca się ich używać.",
    },
    {
      question: "Czego nie wolno w nim rozdrabniać?",
      answer:
        "Pestek, twardych ogonków, gałązek i kości — to nie jest rozdrabniacz ogrodowy. Nie doradzę też, czy dana skórka jest jadalna, jak myć warzywa ani co z pozostałościami środków ochrony roślin. I nie napiszę, że „w skórce jest najwięcej witamin” — mówię o smaku i o tym, ile roboty ubywa.",
    },
  ],

  geo: { lat: 51.2949, lng: 18.1548 },
};
