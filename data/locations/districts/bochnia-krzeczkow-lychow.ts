import type { DistrictContent } from "./typy";

/**
 * KRZĘCZKÓW-ŁYCHÓW — Osiedle nr 3 miasta Bochnia. Wschodnia część
 * miasta, na wzniesieniu.
 *
 * OŚ STRONY: NAJWIĘKSZE OSIEDLE DOMÓW JEDNORODZINNYCH W BOCHNI,
 * DO KTÓREGO NIE DOJEŻDŻA ŻADNA LINIA MIEJSKA. Żadna z pięciu linii
 * BZK nie obsługuje Krzęczkowa ani Łychowa — to osiedle wyłącznie
 * samochodowe, i to pod górę. Dla strony o przedstawicielce, która sama
 * przyjeżdża ze sprzętem, jest to argument wprost.
 *
 * ⚠️⚠️ ROZDZIELENIE OD KUROWA: tam też jest wzniesienie (269 m n.p.m.)
 * i dawna wieś, ale osią jest WYSOKOŚĆ + RÓD RYCERSKI, a autobusy tam
 * DOJEŻDŻAJĄ, i to dwiema liniami. Tu osią jest ICH BRAK i skala
 * zabudowy jednorodzinnej.
 * ⚠️ ROZDZIELENIE OD UZBORNI: tam osią jest GIPS, a jeden blok wchodzi
 * jako sekcja. Tu nie ma bloków w ogóle i nie ma przemysłu.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — ⭐ BRAK KOMUNIKACJI MIEJSKIEJ: wśród pięciu linii BZK (1, 3, 4, 5a,
 *   9) żadna nie obsługuje Krzęczkowa ani Łychowa (BZUK),
 * — ⭐ NAJWIĘKSZE OSIEDLE DOMÓW JEDNORODZINNYCH: Studium uwarunkowań
 *   miasta opisuje je tak wprost; „we wschodniej części miasta
 *   przeznaczono cały teren wzniesienia Krzęczków i Dębcza pod
 *   budownictwo jednorodzinne”. Układ uporządkowany, współczesny —
 *   w odróżnieniu od ekstensywnych układów dawnych wsi,
 * — NOWE BUDOWNICTWO: wniosek do budżetu obywatelskiego 2024 uzasadnia
 *   inwestycję „nowym dużym kompleksem mieszkaniowym na ulicy
 *   Podedworze”, który przyniósł napływ mieszkańców, W TYM RODZIN
 *   Z DZIEĆMI,
 * — 17 ULIC (statut): Brzeska, Brzeźnicka (za obwodnicą do granic
 *   miasta), Dębcza, Stanisława Gąsiorka, Waleriana Hillebranda,
 *   Krzęczków, Konfederatów Barskich, Łychów, Łopianka, Heleny
 *   Modrzejewskiej, Murowianka (od ul. Brzeźnickiej DO KAPLICZKI),
 *   Myśliwska, Ogrodowa, Wawrzyńca Pisza, Podedworze, św. Urbana,
 *   ks. Stanisława Wójtowicza,
 * — ⭐ GRANICA OSIEDLA NA MUROWIANCE BIEGNIE „DO KAPLICZKI” — przydrożna
 *   kapliczka jako granica administracyjna. Detal, którego nie ma nikt,
 * — PODEDWORZE — HISTORIA: „od czasu lokacji [1253] jako odrębna
 *   jednostka przestrzenna ukształtowany został teren WÓJTOSTWA
 *   BOCHEŃSKIEGO, odpowiadający wsi Podedworze”; uposażenie 52 łanów;
 *   w 1539 r. wójtowie dostali pozwolenie na budowę domów dla osadników.
 *   WÓJTOSTWO SKASOWAŁY WŁADZE AUSTRIACKIE W 1778 R. (Atlas Historyczny
 *   Miast Polskich),
 * — CMENTARZ KOMUNALNY NA ŁYCHOWIE: „na malowniczym wzgórzu
 *   w północno-wschodniej części Bochni, przy ulicy Łychów”; adres
 *   w bazach adresowych figuruje jako Podedworze. ⚠️ Daty założenia
 *   (1984) i kaplicy (1987) pochodzą z portalu komercyjnego — NIE UŻYTE
 *   w treści. Sama lokalizacja pewna,
 * — DĘBCZA: teren rekreacyjno-sportowy z trawiastym boiskiem, „miejsce
 *   spokoju, dużej ilości dziko rosnącej zieleni, częściowo zalesiony,
 *   bez ruchu kołowego”, z oświetlonym deptakiem łączącym osiedle.
 *   Przy Dębczy CMENTARZ Z I WOJNY ŚWIATOWEJ,
 * — INNE: plac zabaw przy ul. Krzęczków (ogrodzony, urządzenia
 *   sprawnościowe, stoły do szachów), mini boisko przy ul. Łychów,
 * — PANORAMA: z ul. Krzęczków rozciąga się widok na Bochnię —
 *   potwierdzone niezależnie przez ogłoszenia nieruchomości i tytuł
 *   artykułu bocheńskiego portalu historycznego.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — DATY WEJŚCIA KRZĘCZKOWA I ŁYCHOWA W GRANICE MIASTA. ⚠️ NIE MA ICH
 *   na liście wsi przyłączonych w 1973 r. Prawdopodobnie były to grunty
 *   przedmiejskie należące do Bochni wcześniej, ale NIE ZNALEZIONO
 *   źródła z datą. NIE PODAWAĆ ŻADNEGO ROKU,
 * — ETYMOLOGII NAZW „KRZĘCZKÓW” I „ŁYCHÓW”. Zero opracowań. NIE ZGADYWAĆ,
 * — DAT ZAŁOŻENIA CMENTARZA. Źródło komercyjne, niepotwierdzone,
 * — SCHRONÓW Z II WOJNY NA ŁYCHOWIE (tobruk i Kochbunker). Stoją
 *   na terenie prywatnym, przejście blokuje drut kolczasty, a oficjalny
 *   przewodnik radzi pytać właścicieli o zgodę. NIE ZACHĘCAĆ,
 * — SPRZECZNOŚCI WÓJTOSTWO KONTRA PODEDWORZE. Atlas utożsamia je,
 *   inne źródło traktuje jako dwa różne miejsca. NIE ROZSTRZYGAĆ.
 *
 * PUŁAPKI:
 * — ⚠️ Ul. Podedworze należy do TEGO osiedla, choć „Podedworze”
 *   funkcjonuje też jako samodzielna nazwa potoczna,
 * — ⚠️ Ul. Murowianka jest podzielona: do kapliczki należy tutaj,
 *   dalej do osiedla Św. Jana-Murowianka.
 */
export const BOCHNIA_KRZECZKOW_LYCHOW: DistrictContent = {
  slug: "bochnia-krzeczkow-lychow",
  urlPath: "/thermomix/bochnia/krzeczkow-lychow",
  nazwa: "Krzęczków-Łychów",
  miejscownik: "Krzęczkowie i na Łychowie",
  przyimek: "na",
  miasto: { nazwa: "Bochnia", slug: "bochnia", urlPath: "/thermomix/bochnia" },

  h1: "Thermomix Krzęczków-Łychów — prezentacja u Ciebie w domu",
  seoTitle: "Thermomix Krzęczków Łychów Bochnia — prezentacja",
  seoDescription:
    "Thermomix na Krzęczkowie i Łychowie w Bochni: bezpłatna prezentacja TM7 u Ciebie w kuchni — Podedworze, Dębcza, Myśliwska, Łopianka. Aga, tel. 517 185 691.",

  lead:
    "Dojeżdżam pod adresy na całym wzniesieniu: Krzęczków, Łychów, Podedworze, Dębcza, Myśliwska, Łopianka, Ogrodowa i dalej. Przywożę Thermomix TM7 i gotujemy razem u Ciebie w kuchni — a że autobus tu nie dojeżdża, tym bardziej przyjeżdżam sama. Prezentacja jest bezpłatna.",

  osiedla: [
    "Krzęczków",
    "Łychów",
    "Podedworze",
    "Dębcza",
    "Myśliwska",
    "Łopianka",
    "Ogrodowa",
    "Brzeska",
    "Brzeźnicka",
    "Konfederatów Barskich",
    "Modrzejewskiej",
    "św. Urbana",
    "ks. Wójtowicza",
    "Murowianka",
  ],

  sections: [
    {
      id: "bez-autobusu",
      heading: "Osiedle, do którego nie dojeżdża żaden autobus",
      paragraphs: [
        "Bocheńska komunikacja miejska ma pięć linii. Żadna z nich nie obsługuje Krzęczkowa ani Łychowa. To osiedle jest w całości samochodowe — i do tego położone na wzniesieniu, więc jedzie się tu pod górę.",
        "Dla mieszkańca to niedogodność. Dla mnie to argument, żeby o tym w ogóle napisać: przyjeżdżam sama, z urządzeniem i ze składnikami, i to jest cały sens tej pracy. Nie musisz nic nigdzie wozić ani szukać, gdzie obejrzeć sprzęt na żywo. Dojazd jest bezpłatny, także tutaj.",
        "Praktycznie wygląda to tak, że proszę o numer domu i nazwę ulicy, bo osiedle ma ich siedemnaście i część nosi nazwy, które nawigacja lubi mylić: Dębcza, Łopianka, Myśliwska, Podedworze. Strefy płatnego parkowania tu nie ma, więc pod większość adresów podjeżdża się pod furtkę.",
        "Jest tu jeszcze jeden szczegół, który mnie rozbraja za każdym razem. Granica tego osiedla na ulicy Murowianka biegnie — dosłownie tak zapisano w statucie miasta — do kapliczki. Nie do skrzyżowania, nie do numeru. Do kapliczki.",
      ],
    },
    {
      id: "domy",
      heading: "Największe osiedle domów jednorodzinnych w mieście",
      paragraphs: [
        "Studium miasta opisuje to miejsce bez ogródek: cały teren wzniesienia Krzęczków i Dębcza przeznaczono pod budownictwo jednorodzinne. Powstało z tego największe osiedle domów w Bochni — i w odróżnieniu od dawnych wsi, takich jak Kurów czy Kolanów, w układzie uporządkowanym, a nie rozrzuconym wzdłuż starych dróg.",
        "Bloków tu nie ma w ogóle. Zabudowa spółdzielcza w Bochni skupia się po zachodniej stronie miasta i tu nie sięga.",
        "Co więcej, osiedle wciąż rośnie. Przy ulicy Podedworze powstał duży nowy kompleks mieszkaniowy, a wniosek mieszkańców do budżetu obywatelskiego uzasadniano wprost napływem nowych ludzi, w tym rodzin z dziećmi. To znaczy, że mam tu do czynienia z dwoma zupełnie różnymi kuchniami: starszymi domami z ustaloną rutyną i świeżo urządzanymi mieszkaniami, w których wszystko dopiero się kupuje.",
        "W nowym mieszkaniu rozmowa idzie zwykle o tym, ile sprzętów w ogóle trzeba mieć — bo jedno urządzenie zastępuje blender, malakser, mikser i wagę. W domu z ogrodem o czymś innym: o skali gotowania i o przetworach, przy których największą różnicę robi to, że nie trzeba stać nad garnkiem.",
      ],
      bullets: [
        "brak bloków — wyłącznie zabudowa jednorodzinna",
        "nowy kompleks mieszkaniowy przy Podedworzu",
        "dwie różne rozmowy: dom z ogrodem i świeżo urządzana kuchnia",
      ],
    },
    {
      id: "wzgorze",
      heading: "Wzgórze z panoramą, wójtostwo z trzynastego wieku",
      paragraphs: [
        "Z ulicy Krzęczków widać całą Bochnię — to jeden z niewielu punktów w mieście, z których da się je objąć wzrokiem. Sam grzbiet wymieniany jest w dokumentach planistycznych obok Uzborni i Solnej Góry.",
        "Najstarsza historia tego terenu wiąże się jednak nie z Krzęczkowem, tylko z Podedworzem. Od lokacji Bochni w tysiąc dwieście pięćdziesiątym trzecim roku ukształtował się tu teren wójtostwa bocheńskiego, obejmujący pięćdziesiąt dwa łany. W tysiąc pięćset trzydziestym dziewiątym wójtowie dostali pozwolenie na budowę domów dla osadników, a samo wójtostwo skasowały władze austriackie w tysiąc siedemset siedemdziesiątym ósmym.",
        "Uczciwie dodam, czego nie wiem. Nie ustaliłam, kiedy Krzęczków i Łychów weszły w granice miasta — nie ma ich na liście wsi przyłączonych w tysiąc dziewięćset siedemdziesiątym trzecim roku, więc prawdopodobnie należały do Bochni wcześniej, ale daty nie znalazłam. Nie znalazłam też wyjaśnienia obu nazw i nie zamierzam ich wymyślać.",
        "Punktem orientacyjnym całej wschodniej części miasta jest cmentarz komunalny na Łychowie, położony na wzgórzu. Obok, przy Dębczy, jest teren rekreacyjny z boiskiem i oświetlonym deptakiem, a przy nim cmentarz z pierwszej wojny światowej.",
      ],
    },
  ],

  faq: [
    {
      question: "Autobus tu nie dojeżdża. Czy to problem przy umawianiu prezentacji?",
      answer:
        "Wręcz przeciwnie — to argument za. Ja przyjeżdżam samochodem, z urządzeniem i ze składnikami, więc brak linii miejskiej niczego nie zmienia. To Ty nie musisz nigdzie jechać, żeby zobaczyć sprzęt na żywo. Dojazd jest bezpłatny, także na Krzęczków i Łychów. Proszę tylko o numer domu, bo osiedle ma siedemnaście ulic i jest rozłożone na wzniesieniu.",
    },
    {
      question: "Wprowadziliśmy się do nowego mieszkania przy Podedworzu. Od czego zacząć wyposażanie kuchni?",
      answer:
        "Od policzenia, co i tak byście kupili osobno. Jedno urządzenie zastępuje blender kielichowy, malakser, mikser i wagę kuchenną, więc przy urządzaniu od zera warto zestawić to razem, a nie po kolei. Nie zastąpi piekarnika ani patelni — chleba nie upiecze i kotleta nie usmaży, i mówię o tym zawsze. Chętnie przejdę przez to na prezentacji, zanim wydacie pieniądze na cztery sprzęty zamiast na jeden.",
    },
    {
      question: "Mieszkam przy Murowiance. To Wasze osiedle czy Św. Jana-Murowianka?",
      answer:
        "Zależy, po której stronie kapliczki — i nie żartuję, bo tak właśnie zapisano granicę w statucie miasta. Odcinek od Brzeźnickiej do kapliczki należy do Krzęczkowa-Łychowa, dalszy do osiedla Św. Jana-Murowianka. Dla dojazdu to bez znaczenia, jeżdżę na oba bez dopłaty; pytam tylko o numer domu, żeby trafić za pierwszym razem.",
    },
  ],

  geo: { lat: 49.9702, lng: 20.4505 },
};
