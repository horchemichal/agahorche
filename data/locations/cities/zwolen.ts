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
 * ZWOLEŃ — powiat zwoleński, woj. mazowieckie.
 * MIASTO 7 099 (GUS 31.12.2024), 15,9 km², 446,2 os./km².
 * Gmina: 14 279 osób, 162 km².
 *
 * ⚠ HOMONIMY: ZWOLEŃ ≠ ZWIERZYNIEC ≠ ZWOLENIE.
 *   FAQ to rozróżnia.
 *
 * ⚠⚠ KOCHANOWSKI — DWIE PUŁAPKI:
 * 1. JAN KOCHANOWSKI JEST POCHOWANY W ZWOLENIU, nie w
 *    Czarnolesie. Spoczywa w KRYPCIE POD KAPLICĄ KOCHANOWSKICH
 *    w kościele pw. Podwyższenia Krzyża Świętego. Czarnolas
 *    to dawny majątek, dziś Muzeum Jana Kochanowskiego
 *    (gmina Policzna).
 * 2. ⚠⚠ TO NIE JEST KOLEGIATA. Wszystkie źródła mówią
 *    o KOŚCIELE PARAFIALNYM. NIE PISZĘ „kolegiata".
 *    TWARDA GRANICA.
 * ⚠ CZASZKI POETY NIE MA W GROBIE — zabrał ją Tadeusz Czacki
 *   w 1791 r. ⚠ TEGO NIE PISZĘ — makabryczny szczegół
 *   nie pasuje do strony o gotowaniu. TWARDA GRANICA.
 *
 * HISTORIA:
 * — 20 LUTEGO 1425 — Władysław Jagiełło wydaje przywilej
 *   pozwalający Janowi Cielątko (Ciołkowi) lokować miasto
 *   na prawie magdeburskim,
 * — liczba jarmarków rocznie rosła: 2 (1488) → 4 (1682)
 *   → 8 (1723); w poł. XVI w. cechy: szewcy, krawcy, tkacze,
 * — targi od 1425 cotygodniowe W CZWARTKI; 1811 przeniesione
 *   na niedziele; 1820 zanik; na przełomie XIX/XX w. powrót
 *   na czwartki; główne przedmioty transakcji: bydło, konie,
 *   trzoda chlewna i produkty zbożowe; handel zbożem
 *   na wydzielonej części Nowego Rynku; w 1925 handlarzy
 *   mięsem przeniesiono do murowanych jatek,
 *   ⚠ KĄT „targ" ZAJĘTY — podaję jako fakty.
 * — ⚠ UTRATA PRAW MIEJSKICH 1869, ODZYSKANIE 1925; szkoła
 *   rolnicza 1926. ⚠ PODAJĘ JAKO SUCHE FAKTY, BEZ PRZYCZYN.
 * — kościół: 1440 pierwsza wzmianka o drewnianej świątyni;
 *   1558 pożar; 1570 murowane prezbiterium; 1595 nawa główna;
 *   KAPLICA KOCHANOWSKICH 1610 (fundator Adam Kochanowski,
 *   bratanek poety); kaplica Owadowska 1620–1630 (Zuzanna
 *   Wołucka, wnuczka poety); nawy boczne i wieża 1927–1928;
 *   Kochanowski prebendarzem od 1566, zm. 1584,
 * — krypta udostępniona turystom po remoncie ok. 2012; koszt
 *   prac blisko 8 mln zł.
 *
 * ⚠⚠ ROLNICTWO — PODSTAWA KĄTA:
 * Powiat zwoleński uprawia „zboża, KUKURYDZĘ, sadownictwo,
 * uprawę truskawek, warzywnictwo, produkcję pasz";
 * w sadownictwie — „JABŁKA, WIŚNIE, PORZECZKI, TRUSKAWKI",
 * owoce deserowe i przemysłowe. Powiat: 5 gmin (Zwoleń,
 * Kazanów, Policzna, Przyłęk, Tczów), ok. 35 tys. mieszkańców.
 * ⚠⚠ KĄTY „jabłko", „odmiany", „truskawki", „wiśnie
 *   i drylowanie", „soki", „kompoty i musy", „owoce leśne"
 *   SĄ ZAJĘTE. TEMATEM JEST WYŁĄCZNIE PORZECZKA.
 *   TWARDA GRANICA.
 *
 * ⚠ NIE POTWIERDZONO, czy jakikolwiek produkt Z GMINY ZWOLEŃ
 *   figuruje na Liście Produktów Tradycyjnych.
 * ⚠ NAZW OSIEDLI NIE USTALONO — districts PUSTE.
 *   (Stary Rynek i Nowy Rynek to historyczne place targowe.)
 *
 * KĄT: PORZECZKA — owoc, którego prawie nikt nie je surowego.
 * Kąt od sadownictwa powiatu zwoleńskiego, w którym obok
 * jabłek i wiśni wymienia się wprost porzeczki — owoce
 * dzielone na deserowe i przemysłowe.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że porzeczka jest owocem, który prawie wszyscy znają
 *   i prawie nikt nie je jej po prostu z krzaka — w odróżnieniu
 *   od truskawki czy czereśni,
 * — DLACZEGO: bo jest za kwaśna i ma pestki, więc od początku
 *   była owocem DO PRZEROBIENIA, nie do zjedzenia,
 * — ŻE TO TŁUMACZY PODZIAŁ NA OWOCE DESEROWE I PRZEMYSŁOWE,
 *   o którym mówi się w sadownictwie: część odmian hoduje się
 *   z założeniem, że nikt ich nie zje na surowo,
 * — TRZY PORZECZKI I TRZY RÓŻNE OWOCE:
 *   — CZARNA — najbardziej wyrazista, o zapachu, który czuć
 *     nawet przez rękawiczki; ona rządzi w każdym połączeniu,
 *     więc dodana do mieszanki przykryje resztę,
 *   — CZERWONA — najbardziej kwaśna i najbardziej klarowna;
 *     to z niej wychodzą przezroczyste galaretki,
 *   — BIAŁA — najłagodniejsza, jedyna, którą da się jeść
 *     garściami,
 * — ŻE PORZECZKA MA DUŻO PEKTYNY, więc tężeje sama, bez
 *   dodatków ⚠ ODSYŁAM DO STRONY O ŻELKACH I GALARETKACH,
 *   NIE ROZWIJAM,
 * — ŻE NIE TRZEBA OBRYWAĆ JEJ Z SZYPUŁEK, jeśli i tak
 *   będzie przecierana — a obrywanie to najczęstszy powód,
 *   dla którego ktoś rezygnuje,
 * — ⚠⚠ ŻE MROZI SIĘ JĄ W CAŁYCH GRONACH i po zamrożeniu
 *   szypułki odchodzą same — to jest najbardziej użyteczna
 *   rzecz w całym tym tekście,
 * — ŻE ŚWIETNIE ZNOSI MROŻENIE, bo i tak nie jemy jej
 *   surowej — więc utrata jędrności nic nie kosztuje,
 * — ŻE W DANIACH WYTRAWNYCH PORZECZKA ZACHOWUJE SIĘ
 *   JAK KWAS ⚠ ODSYŁAM DO STRON O KWASIE I O OWOCU W DANIU
 *   WYTRAWNYM, NIE ROZWIJAM,
 * — ŻE LIŚĆ PORZECZKI CZARNEJ MA WŁASNY ZAPACH i bywa
 *   używany w kuchni,
 * — UCZCIWIE: urządzenie nie obierze porzeczki z szypułek —
 *   to robi zamrażarka i ręka,
 * — ale robi rzecz, która przy porzeczce jest kłopotliwa:
 *   przeciera i pozwala oddzielić pestki, a to jest cała
 *   różnica między musem „z pestkami" a gładkim.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW NA PRZETWORY.
 * — ⚠⚠ ŻADNYCH TWIERDZEŃ ZDROWOTNYCH. ZERO tez o witaminie
 *   C, przeciwutleniaczach i „owocach zdrowia".
 *   TWARDA GRANICA.
 * — ŻADNYCH NAZW ODMIAN HANDLOWYCH — kąt „odmiany" ZAJĘTY.
 * — ŻADNYCH NAZW FIRM.
 * — ⚠ ZERO TEMATU NALEWEK I ALKOHOLU. TWARDA GRANICA.
 * — ⚠ ZERO makabrycznych szczegółów o grobie poety.
 *
 * ⚠ ETYKA:
 * — ZERO tematów wojennych.
 * — ZERO konfliktów narodowościowych i wyznaniowych.
 * — ZERO bezrobocia, biedy i wyludniania.
 * — ⚠ UTRATĘ PRAW MIEJSKICH PODAJĘ JAKO SUCHY FAKT.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH — OBOWIĄZKOWE:
 * — „jabłko", „odmiany", „truskawki", „wiśnie i drylowanie",
 *   „OWOCE LEŚNE" dotyczą INNYCH OWOCÓW.
 * — „kompoty i musy z własnych owoców" dotyczą PRZETWORÓW
 *   JAKO CZYNNOŚCI.
 * — „żelki, galaretki i kisiele" dotyczą TĘŻENIA.
 * — „KWAS W KUCHNI" (Łęknica) dotyczy KWASU JAKO NARZĘDZIA.
 * — „OWOC W DANIU WYTRAWNYM" (Gubin) dotyczy ŁĄCZENIA OWOCU
 *   Z MIĘSEM.
 * TUTAJ chodzi o JEDEN OWOC — porzeczkę — i o to, że
 * od początku była owocem do przerobienia.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PISZĘ „kolegiata" — to kościół parafialny.
 * — NIE TWIERDZĘ, że Kochanowski jest pochowany w Czarnolesie.
 * — NIE OPISUJĘ losów czaszki poety.
 * — NIE PODAJĘ nazw odmian ani osiedli.
 * — NIE WYMIENIAM produktu z Listy Produktów Tradycyjnych.
 * — NIE PISZĘ o nalewkach.
 * — NIE MYLĘ ZWOLENIA ze ZWIERZYŃCEM.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — 20 lutego 1425 r. Władysław Jagiełło wydał przywilej
 *   pozwalający Janowi Cielątko lokować Zwoleń na prawie
 *   magdeburskim; liczba dorocznych jarmarków rosła z dwóch
 *   w 1488 r. przez cztery w 1682 do ośmiu w 1723,
 *   a w połowie XVI w. działały tu cechy szewców, krawców
 *   i tkaczy,
 * — targi odbywały się od 1425 r. co tydzień w czwartki,
 *   w 1811 przeniesiono je na niedziele, w 1820 zanikły,
 *   a na przełomie XIX i XX w. wróciły na czwartki; głównym
 *   przedmiotem transakcji były bydło, konie, trzoda chlewna
 *   i produkty zbożowe, handel zbożem prowadzono
 *   na wydzielonej części Nowego Rynku, a w 1925 r. handlarzy
 *   mięsem przeniesiono do murowanych jatek,
 * — Zwoleń utracił prawa miejskie w 1869 r. i odzyskał
 *   je w 1925; rok później powstała szkoła rolnicza,
 * — w kościele parafialnym pod wezwaniem Podwyższenia Krzyża
 *   Świętego, którego prezbiterium zbudowano w 1570 r.,
 *   a nawę główną w 1595, znajduje się kaplica Kochanowskich
 *   z 1610 r., ufundowana przez Adama Kochanowskiego,
 *   bratanka poety; pod nią jest krypta, w której spoczywa
 *   Jan Kochanowski — prebendarz zwoleński od 1566 r.,
 *   zmarły w 1584; obok stoi kaplica Owadowska z lat
 *   1620–1630, ufundowana przez Zuzannę Wołucką, wnuczkę
 *   poety, a nawy boczne i wieżę dobudowano w latach
 *   1927–1928; kryptę udostępniono zwiedzającym po remoncie
 *   około 2012 r.,
 * — Czarnolas, dawny majątek poety, leży w sąsiedniej gminie
 *   Policzna i mieści dziś Muzeum Jana Kochanowskiego;
 *   Zwoleń urządza doroczny festiwal jego imienia pod koniec
 *   czerwca,
 * — w powiecie zwoleńskim uprawia się zboża i kukurydzę,
 *   prowadzi sadownictwo, uprawę truskawek i warzywnictwo;
 *   w sadownictwie wymienia się jabłka, wiśnie, porzeczki
 *   i truskawki, dzielone na owoce deserowe i przemysłowe.
 */
export const ZWOLEN: CityContent = {
  slug: "zwolen",
  h1: "Thermomix Zwoleń – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Zwoleń — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Zwoleniu: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Zwoleń — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Zwoleniu. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Zwolenia z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wsi w gminie.",

  highlights: highlightyStandardowe("Zwoleń"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Porzeczkę mrozi się w całych gronach — po zamrożeniu szypułki odchodzą same.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Zwoleniu – jak wygląda prezentacja?",
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
      id: "porzeczka",
      heading: "Owoce deserowe i przemysłowe — czyli o porzeczce",
      paragraphs: [
        "W opisie rolnictwa powiatu zwoleńskiego wymienia się cztery owoce: jabłka, wiśnie, porzeczki i truskawki — i od razu dodaje, że dzieli się je na deserowe i przemysłowe. To rozróżnienie brzmi urzędowo, a jest w istocie bardzo kuchenne: część owoców hoduje się z założeniem, że nikt ich nie zje na surowo.",
        "Porzeczka jest tu przypadkiem najczystszym. Wszyscy ją znają, prawie nikt nie je jej po prostu z krzaka. Truskawkę czy czereśnię zjada się w ogrodzie i do domu dochodzi połowa; porzeczkę przynosi się całą, bo jest za kwaśna i ma pestki. Od początku była owocem do przerobienia, a nie do zjedzenia.",
        "Warto przy tym wiedzieć, że „porzeczka” to w praktyce trzy różne owoce.",
        "Czarna jest najbardziej wyrazista — ma zapach, który czuć na rękach jeszcze długo po zbiorze. Ona rządzi w każdym połączeniu: dodana do mieszanki owoców przykryje wszystko inne, więc albo się to planuje, albo się tego żałuje.",
        "Czerwona jest najbardziej kwaśna i zarazem najbardziej klarowna — to z niej wychodzą te przezroczyste, czerwone galaretki, których nie da się podrobić niczym innym.",
        "Biała jest najłagodniejsza i jako jedyna nadaje się do jedzenia garściami. Jest przy tym najrzadsza, bo skoro i tak przerabiamy, to opłaca się sadzić te wyraziste.",
        "Porzeczka ma dużo pektyny, więc tężeje właściwie sama, bez żadnych dodatków — o samym tężeniu pisałam osobno. To jeden z powodów, dla których była tak ceniona w czasach, kiedy nie było czym zagęszczać.",
        "Teraz rzecz najbardziej użyteczna w całym tym tekście, a zarazem najmniej znana. Nie trzeba obrywać porzeczek z szypułek, jeśli i tak będą przecierane. A jeśli chcecie mieć je czyste — mrozi się je w całych gronach i po zamrożeniu szypułki odchodzą same, praktycznie przez potrząśnięcie. Obrywanie porzeczek na świeżo jest chyba najczęstszym powodem, dla którego ludzie z nich rezygnują, a jest całkowicie niepotrzebne.",
        "Porzeczka w ogóle znosi mrożenie wyjątkowo dobrze — właśnie dlatego, że i tak nie jemy jej surowej. Utrata jędrności, która psuje mrożoną truskawkę, przy porzeczce nie kosztuje nic.",
        "Na koniec dwie rzeczy na marginesie. W daniach wytrawnych porzeczka zachowuje się przede wszystkim jak kwas — o kwasie jako narzędziu i o owocu przy mięsie pisałam osobno. A liść czarnej porzeczki ma własny, mocny zapach i bywa używany w kuchni, choć samego owocu w nim nie ma.",
        "Teraz uczciwie o sprzęcie. Thermomix nie obierze porzeczki z szypułek — to robi zamrażarka i ręka. Nie ma na to funkcji i nie będzie.",
        "Robi natomiast tę część, która przy porzeczce jest naprawdę kłopotliwa: przeciera i pozwala oddzielić pestki. A to jest cała różnica między musem „z pestkami”, którego dzieci nie zjedzą, a gładkim. Przy owocu, który z definicji idzie do przerobienia, to jest właściwie jedyna robota, jaka zostaje.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Zwoleniu?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli macie owoce z ogrodu, z którymi nie wiadomo co zrobić — powiedzcie przy umawianiu. Chętnie zrobię z nich mus albo przecier.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Zwoleniu"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla zwoleńskiej rodziny",
      paragraphs: [
        "Zwoleń liczy ponad siedem tysięcy mieszkańców na niespełna szesnastu kilometrach kwadratowych i jest siedzibą gminy zamieszkanej przez ponad czternaście tysięcy osób. 20 lutego 1425 roku Władysław Jagiełło wydał przywilej pozwalający Janowi Cielątko lokować miasto na prawie magdeburskim; liczba dorocznych jarmarków rosła z dwóch w 1488 roku przez cztery w 1682 do ośmiu w 1723, a w połowie XVI wieku działały tu cechy szewców, krawców i tkaczy. Targi odbywały się od 1425 roku co tydzień w czwartki, w 1811 przeniesiono je na niedziele, w 1820 zanikły, a na przełomie XIX i XX wieku wróciły na czwartki; handlowano bydłem, końmi, trzodą i zbożem, przy czym zboże sprzedawano na wydzielonej części Nowego Rynku, a w 1925 roku handlarzy mięsem przeniesiono do murowanych jatek. Zwoleń utracił prawa miejskie w 1869 roku i odzyskał je w 1925; rok później powstała tu szkoła rolnicza. W kościele parafialnym pod wezwaniem Podwyższenia Krzyża Świętego — którego prezbiterium zbudowano w 1570 roku, a nawę główną w 1595 — znajduje się kaplica Kochanowskich z 1610 roku, ufundowana przez Adama Kochanowskiego, bratanka poety. Pod nią jest krypta, w której spoczywa Jan Kochanowski, prebendarz zwoleński od 1566 roku, zmarły w 1584; obok stoi kaplica Owadowska z lat 1620–1630, ufundowana przez jego wnuczkę Zuzannę Wołucką, a nawy boczne i wieżę dobudowano w latach 1927–1928. Kryptę udostępniono zwiedzającym po remoncie około 2012 roku. Czarnolas, dawny majątek poety, leży w sąsiedniej gminie Policzna i mieści dziś Muzeum Jana Kochanowskiego, a Zwoleń urządza doroczny festiwal jego imienia pod koniec czerwca. W powiecie uprawia się zboża i kukurydzę, prowadzi sadownictwo, uprawę truskawek i warzywnictwo; w sadownictwie wymienia się jabłka, wiśnie, porzeczki i truskawki.",
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

  districtsHeading: "Do których części Zwolenia dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — od Starego i Nowego Rynku po osiedla na obrzeżach. Dojeżdżam też do wsi w gminie oraz do Czarnolasu i Sycyny w okolicy.",
    "Przy umawianiu wystarczy podać miejscowość, ulicę i numer domu. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Zwoleń też przyjadę",
  nearbyParagraphs: [
    "Radom, Policzna, Kazanów, Przyłęk, Tczów i Kozienice są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Radom", "Kozienice", "Lipsko", "Pionki"],

  about: blokOMnie("do Zwolenia", "w Zwoleniu", REGION_MAZOWSZE),

  faq: [
    {
      question: "Czy dojeżdżasz do Zwolenia bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wsi w gminie, a także do Czarnolasu i Sycyny w okolicy. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku: chodzi o Zwoleń w powiecie zwoleńskim, gdzie w kościele parafialnym pochowany jest Jan Kochanowski.",
    },
    ...faqWspolne("w Zwoleniu"),
    {
      question: "Jak obrać porzeczki z szypułek?",
      answer:
        "Najprościej wcale ich nie obierać na świeżo. Jeśli owoce i tak będą przecierane, szypułki nie przeszkadzają; a jeśli chcecie mieć je czyste, wystarczy zamrozić całe grona — po zamrożeniu szypułki odchodzą same, praktycznie przez potrząśnięcie.",
    },
    {
      question: "Czym różnią się porzeczki czarna, czerwona i biała?",
      answer:
        "To w praktyce trzy różne owoce. Czarna jest najbardziej wyrazista i w mieszance przykryje wszystko inne. Czerwona jest najbardziej kwaśna i najbardziej klarowna — to z niej wychodzą przezroczyste galaretki. Biała jest najłagodniejsza i jako jedyna nadaje się do jedzenia garściami.",
    },
    {
      question: "Czy porzeczki dobrze znoszą mrożenie?",
      answer:
        "Wyjątkowo dobrze — właśnie dlatego, że i tak nie jemy ich surowych. Utrata jędrności, która psuje mrożoną truskawkę, przy porzeczce nie kosztuje nic. Mają też dużo pektyny, więc tężeją właściwie same, bez dodatków.",
    },
  ],

  geo: { lat: 51.3554, lng: 21.5878 },
};
