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
 * GOSTYNIN — powiat gostyniński, woj. mazowieckie.
 * MIASTO 16 839 (GUS 31.12.2024), 32,4 km², 519,7 os./km²,
 * 79 m n.p.m.
 * ⚠ BRIEF PODAWAŁ ~18 tys. — GUS mówi 16 839. UŻYWAM GUS.
 *
 * ⚠⚠ HOMONIM — KLUCZOWY:
 * GOSTYNIN (mazowieckie, powiat gostyniński)
 * ≠ GOSTYŃ (wielkopolskie). Mylenie jest bardzo łatwe, bo
 * produkty spółdzielni mleczarskiej z GOSTYNIA są
 * ogólnopolskie. FAQ MUSI TO ROZRÓŻNIAĆ. TWARDA GRANICA.
 * ⚠ W gminie Gostynin leży też wieś SOKOŁÓW — nie mylić
 *   z Sokołowem Podlaskim.
 *
 * HISTORIA — PODSTAWA KĄTA:
 * — 1382 — prawa miejskie na prawie chełmińskim od Siemowita
 *   IV; 1462 — przywilej dla mieszczan od Kazimierza,
 * — ⚠⚠ TARGI W KAŻDY WTOREK — handlowano ZBOŻEM, SKÓRAMI,
 *   WOSKIEM I MIODEM,
 * — ⚠⚠ CZTERY JARMARKI ROCZNIE, ROZPISANE NA DNI ŚWIĘTYCH:
 *   Przewodnia Niedziela (wiosna), św. Jakuba (25 lipca),
 *   św. Szymona (28 października), św. Andrzeja
 *   (30 listopada). TO JEST CZĘŚĆ KOTWICY.
 * — 1564 — 176 rzemieślników (szewcy, krawcy, piekarze),
 *   w tym 25 piwowarów; produkowano gorzałkę, głównie
 *   żytniówkę. ⚠ ZERO TEMATU ALKOHOLU — wymieniam tylko
 *   jako suchy fakt liczbowy w bloku o mieście,
 * — ⚠⚠ FARA GOSTYNIŃSKA NOSI WEZWANIE ŚW. MARCINA;
 *   kościół pod tym wezwaniem istniał tu prawdopodobnie
 *   przed 1439 r. (obecny budynek 1969–1978, proj. Wacław
 *   Pieńkowski). TO JEST GŁÓWNA KOTWICA.
 * — 1611 — na zamku więziono cara Wasyla Szujskiego,
 * — kolej Płock–Gostynin–Kutno; 1912 — 6700 mieszkańców,
 * — Budynek Kramów, ul. Floriańska 23 (ok. 1927) — powstał
 *   jako nowoczesne JATKI MIEJSKIE,
 * — Kamienica Rynek 16 (lata 20. XIX w.) — dawny zajazd,
 *   drugi murowany budynek w mieście.
 *
 * GEOGRAFIA: Jezioro Lucieńskie (leszcz, płoć, wzdręga,
 * krąp), Pojezierze Gostynińskie, Gostynińsko-Włocławski
 * Park Krajobrazowy, liczne gospodarstwa agroturystyczne.
 * W powiecie 2694 gospodarstwa rolne, średnio 7,7 ha,
 * dominuje uprawa zbóż i ziemniaków.
 * ⚠ POWIERZCHNI I GŁĘBOKOŚCI JEZIORA LUCIEŃSKIEGO
 *   NIE PODAJĘ — nieustalone.
 *
 * ⚠ ŻADNEGO PRODUKTU Z GMINY NIE ZNALEZIONO NA LIŚCIE
 *   PRODUKTÓW TRADYCYJNYCH.
 * ⚠ „TERMY GOSTYNIŃSKIE" NIE ISTNIEJĄ — inwestycja
 *   nie powstała. NIE WYMIENIAM ICH W OGÓLE.
 * ⚠ NAZW OSIEDLI MIEJSKICH NIE USTALONO — districts PUSTE.
 *
 * KĄT: GĘŚ — mięso, które w Polsce ma swój dzień w roku
 * i prawie nie ma innych.
 * Kąt od fary gostynińskiej pod wezwaniem św. Marcina,
 * istniejącej tu prawdopodobnie już przed 1439 rokiem,
 * i od czterech jarmarków rozpisanych na dni świętych —
 * bo kalendarz kuchni przez stulecia był kalendarzem
 * kościelnym.
 * ⚠ KĄTY „KURCZAK" (Kostrzyn) i „INDYK" (Sława) SĄ ZAJĘTE.
 *   GĘŚ TO OSOBNE MIĘSO I OSOBNA TECHNIKA.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że gęś jest w polskiej kuchni mięsem jednodniowym —
 *   jedenasty listopada i koniec, a przez resztę roku
 *   prawie nikt jej nie kupuje,
 * — ŻE KALENDARZ KUCHNI BYŁ KIEDYŚ KALENDARZEM ŚWIĄT:
 *   w Gostyninie jarmarki wyznaczały święta Jakuba, Szymona
 *   i Andrzeja, a rok dzielił się na okresy, w których
 *   jadło się zupełnie co innego,
 * — ⚠⚠ NAJWAŻNIEJSZA RZECZ TECHNICZNA: GĘŚ TO NIE JEST
 *   DUŻY KURCZAK. Ma znacznie więcej tłuszczu i zupełnie
 *   inaczej się piecze — tłuszcz musi mieć KĘDY WYPŁYNĄĆ,
 *   inaczej skóra się nie zrumieni,
 * — ŻE DLATEGO NACINA SIĘ SKÓRĘ (samą skórę, nie mięso)
 *   i pierwszą część pieczenia prowadzi tak, żeby tłuszcz
 *   się wytopił,
 * — ŻE WYTOPIONY TŁUSZCZ JEST OSOBNYM PRODUKTEM — zlewa
 *   się go i zostawia; to on jest właściwie najlepszą rzeczą,
 *   jaką daje gęś,
 * — ŻE PIERŚ I UDO TO DWA RÓŻNE MIĘSA I TRAKTUJE SIĘ
 *   je inaczej: pierś krótko, udo długo,
 * — ŻE GĘŚ NIE WYBACZA POŚPIECHU — jest z natury mięsem
 *   na całe popołudnie,
 * — ŻE KLASYCZNE DODATKI — jabłko, śliwka, majeranek
 *   i czerwona kapusta — nie są tradycją dla tradycji,
 *   tylko odpowiedzią na tłustość,
 * — ŻE TO SAMO DOTYCZY KACZKI, tylko w mniejszej skali,
 * — ŻE JEDNA GĘŚ TO DUŻO JEDZENIA i sensownie jest planować
 *   ją jako dwa albo trzy dania, a nie jedno,
 * — UCZCIWIE: urządzenie nie upiecze gęsi. Pieczenie zostaje
 *   piekarnikowe i to jest twarde ograniczenie,
 * — ale robi trzy rzeczy wokół: farsz (jabłka, śliwki,
 *   pieczywo), sos z tego, co zostanie w brytfannie,
 *   i czerwoną kapustę, czyli dokładnie tę część obiadu,
 *   która przy gęsi zajmuje najwięcej czasu.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 *   „Pierwszą część pieczenia", „krótko", „długo" —
 *   TYLKO OPISOWO.
 * — ŻADNYCH PROPORCJI.
 * — ⚠⚠ ŻADNYCH TWIERDZEŃ ZDROWOTNYCH. ZERO tez o smalcu
 *   gęsim, cholesterolu i „zdrowym tłuszczu". TWARDA GRANICA.
 * — ŻADNYCH NAZW FIRM.
 * — ⚠ ZERO TEMATU ALKOHOLU — 25 piwowarów i gorzałka
 *   wyłącznie jako liczby historyczne w bloku o mieście.
 * — ZERO tematu uboju i hodowli.
 * — ⚠ ZERO TEMATU RELIGIJNEGO JAKO TEMATU. Święty Marcin
 *   i dni jarmarków wchodzą WYŁĄCZNIE jako kalendarz
 *   gospodarczy. TWARDA GRANICA.
 *
 * ⚠ ETYKA:
 * — ZERO tematów wojennych.
 * — ZERO konfliktów narodowościowych i wyznaniowych.
 * — ZERO bezrobocia, biedy i wyludniania.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH — OBOWIĄZKOWE:
 * — „KURCZAK" (Kostrzyn) i „INDYK" (Sława) dotyczą DROBIU
 *   CHUDEGO I CODZIENNEGO.
 * — „PODROBY" (Sokołów Podlaski) dotyczą WNĘTRZNOŚCI.
 * — „ODPOCZYNEK PO UPIECZENIU" dotyczy JEDNEGO ETAPU.
 * — „DEGLASOWANIE" (Torzym) dotyczy SOSU Z DNA PATELNI.
 * — „święta" i „wigilia" dotyczą ŚWIĄT GRUDNIOWYCH.
 * TUTAJ chodzi o JEDNO MIĘSO — gęś — i o to, że jej
 * tłustość wymusza inną technikę niż reszta drobiu.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ powierzchni ani głębokości jeziora Lucieńskiego.
 * — NIE WYMIENIAM nieistniejących „Term Gostynińskich".
 * — NIE PODAJĘ nazw osiedli miejskich ani zakładów.
 * — NIE WYMYŚLAM produktu lokalnego ani święta kulinarnego.
 * — NIE MYLĘ GOSTYNINA z GOSTYNIEM w wielkopolskim.
 * — districts: brak publicznego wykazu. PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — prawa miejskie na prawie chełmińskim nadał Gostyninowi
 *   w 1382 r. Siemowit IV, a w 1462 r. mieszczanie otrzymali
 *   przywilej od króla Kazimierza,
 * — targi odbywały się w każdy wtorek i handlowano na nich
 *   zbożem, skórami, woskiem i miodem; cztery jarmarki
 *   roczne wyznaczały Przewodnia Niedziela, św. Jakub
 *   (25 lipca), św. Szymon (28 października) i św. Andrzej
 *   (30 listopada),
 * — w 1564 r. pracowało w mieście 176 rzemieślników,
 *   w tym szewcy, krawcy i piekarze,
 * — fara gostynińska nosi wezwanie św. Marcina, a kościół
 *   pod tym wezwaniem istniał tu prawdopodobnie już przed
 *   1439 r.; obecny budynek powstał w latach 1969–1978
 *   według projektu Wacława Pieńkowskiego,
 * — zamek murowany wzniósł na przełomie XIV i XV w.
 *   Siemowit IV; w 1611 r. więziono na nim cara Wasyla
 *   Szujskiego, a dziś mieści hotel i centrum szkoleniowe,
 * — ratusz zbudowano w latach 1821–1824 według projektu
 *   Hilarego Szpilowskiego, kaplicę św. Jakuba w latach
 *   1883–1886, a budynek Kramów przy ulicy Floriańskiej 23
 *   powstał około 1927 r. jako nowoczesne jatki miejskie;
 *   kamienica przy Rynku 16 z lat dwudziestych XIX w. była
 *   dawnym zajazdem i drugim murowanym budynkiem w mieście,
 * — miasto leży na Pojezierzu Gostynińskim, w pobliżu
 *   jeziora Lucieńskiego i Gostynińsko-Włocławskiego Parku
 *   Krajobrazowego; w powiecie jest 2694 gospodarstwa rolne
 *   o średniej powierzchni 7,7 ha, a dominuje uprawa zbóż
 *   i ziemniaków.
 */
export const GOSTYNIN: CityContent = {
  slug: "gostynin",
  h1: "Thermomix Gostynin – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Gostynin — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Gostyninie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Dojazd bezpłatny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Gostynin — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Gostyninie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Gostynina z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i okolic.",

  highlights: highlightyStandardowe("Gostynin"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Gęś to nie jest duży kurczak — i stąd bierze się większość nieudanych pieczeni.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Gostyninie – jak wygląda prezentacja?",
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
      id: "ges",
      heading: "Fara świętego Marcina i cztery jarmarki — czyli o gęsi",
      paragraphs: [
        "Gostynińska fara nosi wezwanie świętego Marcina, a kościół pod tym wezwaniem stał tu prawdopodobnie już przed 1439 rokiem. Cztery doroczne jarmarki miasta też były rozpisane na dni świętych: Przewodnia Niedziela, święty Jakub dwudziestego piątego lipca, święty Szymon dwudziestego ósmego października i święty Andrzej trzydziestego listopada. Targ odbywał się w każdy wtorek, a handlowano zbożem, skórami, woskiem i miodem.",
        "To dobrze pokazuje rzecz, o której dziś nie myślimy: kalendarz kuchni przez stulecia był kalendarzem kościelnym. Nie dlatego, że ludzie byli szczególnie pobożni przy garnku, tylko dlatego, że święta wyznaczały dni targowe, posty i terminy uboju. Rok dzielił się na okresy, w których jadło się zupełnie co innego.",
        "Z całego tego kalendarza zostało nam właściwie jedno mięso przypisane do jednego dnia: gęś na świętego Marcina. Przez pozostałe trzysta sześćdziesiąt cztery dni prawie nikt jej nie kupuje. A szkoda, bo gęś jest ciekawa — i rządzi się zupełnie innymi prawami niż reszta drobiu.",
        "Rzecz najważniejsza i najczęściej pomijana: gęś to nie jest duży kurczak. Ma nieporównanie więcej tłuszczu i właśnie dlatego pieczenie wygląda inaczej. Ten tłuszcz musi mieć którędy wypłynąć — jeśli nie ma, skóra nigdy się nie zrumieni, tylko zostanie blada i gumowata, a pod nią zbierze się warstwa, której nikt nie zje.",
        "Dlatego skórę się nacina, i to samą skórę, nie mięso pod spodem. Pierwszą część pieczenia prowadzi się tak, żeby tłuszcz zaczął się wytapiać i spływać, a dopiero potem dochodzi rumienienie. Odwrotna kolejność — od razu mocno, żeby „ładnie wyszła” — kończy się ciemną skórą na warstwie niewytopionego tłuszczu.",
        "Wytopiony tłuszcz jest przy tym osobnym produktem i moim zdaniem najlepszą rzeczą, jaką daje gęś. Zlewa się go do słoika i zostawia; służy potem do ziemniaków, do smażenia, do kaszy. Wyrzucanie go jest najczęstszym marnotrawstwem w całym tym daniu.",
        "Warto też wiedzieć, że pierś i udo to w gęsi dwa różne mięsa. Pierś jest chuda i wymaga krótkiej obróbki, udo tłuste i wymaga długiej. Pieczone razem, w całości, zawsze są kompromisem — i dlatego coraz częściej kupuje się je osobno, co przy gęsi ma więcej sensu niż przy jakimkolwiek innym ptaku.",
        "Gęś nie wybacza też pośpiechu. To jest z natury mięso na całe popołudnie i nie da się tego skrócić. Kto planuje ją na wieczór po pracy, ten planuje rozczarowanie.",
        "Klasyczne dodatki — jabłko, śliwka, majeranek, czerwona kapusta — nie są tradycją dla tradycji. Wszystkie robią to samo: odpowiadają na tłustość. Kwas jabłka i śliwki przecina tłuszcz, majeranek go równoważy, czerwona kapusta z octem robi dokładnie to co one, tylko na talerzu obok. To jedno z tych zestawień, które ludzie wymyślili, zanim ktokolwiek umiał wyjaśnić dlaczego.",
        "Wszystko to dotyczy w mniejszej skali także kaczki — ta sama tłustość, ta sama potrzeba wytopienia, te same dodatki.",
        "I rzecz praktyczna na koniec: jedna gęś to bardzo dużo jedzenia. Rozsądniej jest planować ją jako dwa albo trzy dania — pieczeń, potem coś z resztek mięsa, potem wywar — niż jako jeden obiad, po którym pół ptaka stoi w lodówce.",
        "Teraz uczciwie o sprzęcie. Thermomix gęsi nie upiecze. Pieczenie zostaje piekarnikowe i to jest ograniczenie twarde, bez wyjątków.",
        "Robi natomiast trzy rzeczy wokół, a akurat one przy gęsi zajmują najwięcej czasu. Farsz — jabłka, śliwki, pieczywo, wszystko rozdrobnione i wymieszane w jednym naczyniu. Sos z tego, co zostanie w brytfannie. I czerwoną kapustę, która przy tej pieczeni jest obowiązkowa, a robi się długo. Zostaje sama gęś i piekarnik, czyli ta część, którą i tak trzeba zrobić po swojemu.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Gostyninie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli planujecie w tym roku gęś — powiedzcie przy umawianiu. Zrobimy farsz i czerwoną kapustę, a Wy zobaczycie, ile z tego obiadu da się przygotować wcześniej.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Gostyninie"),
    sekcjaRaty("w Gostyninie"),
    {
      id: "rodzina",
      heading: "Thermomix dla gostynińskiej rodziny",
      paragraphs: [
        "Gostynin liczy blisko siedemnaście tysięcy mieszkańców na trzydziestu dwóch kilometrach kwadratowych i leży na wysokości siedemdziesięciu dziewięciu metrów nad poziomem morza. Prawa miejskie na prawie chełmińskim nadał mu w 1382 roku Siemowit IV, a w 1462 mieszczanie otrzymali przywilej od króla Kazimierza. Targi odbywały się w każdy wtorek i handlowano na nich zbożem, skórami, woskiem i miodem, a cztery jarmarki roczne wyznaczały Przewodnia Niedziela oraz dni świętych Jakuba, Szymona i Andrzeja. W 1564 roku pracowało tu stu siedemdziesięciu sześciu rzemieślników, wśród nich szewcy, krawcy i piekarze. Fara nosi wezwanie świętego Marcina, a kościół pod tym wezwaniem istniał w Gostyninie prawdopodobnie już przed 1439 rokiem; obecny budynek powstał w latach 1969–1978 według projektu Wacława Pieńkowskiego. Murowany zamek wzniósł na przełomie XIV i XV wieku Siemowit IV — w 1611 więziono na nim cara Wasyla Szujskiego, a dziś mieści hotel i centrum szkoleniowe. Ratusz zbudowano w latach 1821–1824 według projektu Hilarego Szpilowskiego, kaplicę świętego Jakuba w latach 1883–1886, a budynek Kramów przy ulicy Floriańskiej powstał około 1927 roku jako nowoczesne jatki miejskie; kamienica przy Rynku 16 z lat dwudziestych XIX wieku była dawnym zajazdem i drugim murowanym budynkiem w mieście. Gostynin leży na Pojezierzu Gostynińskim, w pobliżu jeziora Lucieńskiego i Gostynińsko-Włocławskiego Parku Krajobrazowego; w powiecie jest blisko dwa tysiące siedemset gospodarstw rolnych o średniej powierzchni niespełna ośmiu hektarów, a dominuje uprawa zbóż i ziemniaków.",
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

  districtsHeading: "Do których części Gostynina dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — od Rynku i okolic zamku po osiedla na obrzeżach. Dojeżdżam też do wsi w gminie: Lucienia nad jeziorem, Bolesławowa, Kazimierzowa, Nowej Wsi, Osin, Białego, Miałkówka i Sokołowa.",
    "Przy umawianiu wystarczy podać miejscowość, ulicę i numer domu. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Gostynin też przyjadę",
  nearbyParagraphs: [
    "Płock, Kutno, Włocławek, Łąck i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Płock", "Kutno", "Włocławek"],

  about: blokOMnie("do Gostynina", "w Gostyninie", REGION_MAZOWSZE),

  faq: [
    {
      question: "Czy dojeżdżasz do Gostynina bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wsi w gminie, łącznie z Lucieniem nad jeziorem. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku, bo nazwy bywają mylone: chodzi o Gostynin w powiecie gostynińskim na Mazowszu, a nie o Gostyń w Wielkopolsce.",
    },
    ...faqWspolne("w Gostyninie"),
    {
      question: "Dlaczego skóra gęsi nie chce się zrumienić?",
      answer:
        "Bo tłuszcz nie miał którędy wypłynąć. Gęś ma go nieporównanie więcej niż inny drób — trzeba naciąć samą skórę (nie mięso) i pierwszą część pieczenia prowadzić tak, żeby tłuszcz się wytapiał, a dopiero potem rumienić. Odwrotna kolejność daje ciemną skórę na warstwie niewytopionego tłuszczu.",
    },
    {
      question: "Co zrobić z tłuszczem z pieczonej gęsi?",
      answer:
        "Zlać do słoika i zachować — to najlepsza rzecz, jaką gęś daje. Służy potem do ziemniaków, do smażenia i do kaszy. Wyrzucanie go jest najczęstszym marnotrawstwem przy tym daniu.",
    },
    {
      question: "Dlaczego do gęsi podaje się jabłko, śliwkę i czerwoną kapustę?",
      answer:
        "Bo wszystkie odpowiadają na tłustość. Kwas jabłka i śliwki przecina tłuszcz, majeranek go równoważy, a czerwona kapusta z octem robi to samo obok, na talerzu. To zestawienie wymyślono na długo przed tym, zanim ktokolwiek umiał wyjaśnić, dlaczego działa.",
    },
  ],

  geo: { lat: 52.4293, lng: 19.462 },
};
