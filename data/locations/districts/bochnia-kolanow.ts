import type { DistrictContent } from "./typy";

/**
 * KOLANÓW — Osiedle nr 7 miasta Bochnia. Dawna wieś, w granicach miasta
 * od 1 stycznia 1973 r.
 *
 * OŚ STRONY: OSIEDLE POD LASEM. Las Kolanowski ma 420 ha i kulminację
 * 289 m n.p.m.; przepływa przez niego potok Babica. Z krawędzi lasu widok
 * na miasto z sylwetkami dwóch kościołów. Zachowane betonowe schrony
 * z II wojny i XIX-wieczna strzelnica wojskowa.
 * Druga warstwa: SOLANKI WZMIANKOWANE 1123–1125, zarządzane przez
 * benedyktynów z Tyńca — wcześniej niż pierwsza wzmianka o soli
 * bocheńskiej (1198) i o lokacji miasta (1253).
 *
 * ⚠️⚠️ ROZDZIELENIE OD CHODENIC (oś: zakład uzdatniania wody, woda
 * z kranu dla całego miasta). Tu woda jest HISTORYCZNA i SŁONA, tam
 * współczesna i pitna. Solanki wchodzą jako sekcja historyczna,
 * NIE jako wątek o wodzie w naczyniu.
 * ⚠️ ROZDZIELENIE OD STRONY MIASTA: kopalnia soli i UNESCO to oś Bochni.
 * Tu wyłącznie solanki kolanowskie i benedyktyni tynieccy.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — ⭐ PIERWSZE WZMIANKI 1123–1125 — dotyczą SOLANEK NA TERENIE
 *   KOLANOWA, zarządzanych przez BENEDYKTYNÓW Z TYŃCA. To wcześniej
 *   niż pierwsza wzmianka o soli bocheńskiej (1198) i niż lokacja
 *   miasta (1253),
 * — Do 31 grudnia 1972 samodzielna wieś; W GRANICACH BOCHNI
 *   OD 1 STYCZNIA 1973, równolegle z budową filii Huty im. Lenina,
 * — Las Kolanowski należał pierwotnie do benedyktynów tynieckich jako
 *   właścicieli Kolanowa,
 * — ⭐ LAS KOLANOWSKI: 420 ha, kulminacja 289 m n.p.m., na południowo-
 *   -zachodnich obrzeżach miasta. Dąb szypułkowy, sosna, jodła, buk;
 *   przepływa potok BABICA. Szlak spacerowy Planty Salinarne – Las
 *   Kolanowski (4,8 km) i Rowerowy Pierścień Solny „Salina Cracoviensis”
 *   (86,1 km). Z krawędzi lasu widok na miasto z sylwetkami kościołów
 *   św. Pawła i św. Mikołaja. Zachowane betonowe schrony z II wojny
 *   i XIX-wieczna strzelnica wojskowa (PTTK Małopolska),
 * — BUNKIER: niemiecki punkt oporu, Regelbau 668 („Bunkier XII”),
 *   broniący wylotu drogi na Kraków; obok zasypany Ringstand.
 *   ⚠️ STOI NA TERENIE PRYWATNYM, właściciel nie życzy sobie odwiedzin —
 *   w treści wyłącznie jako fakt, BEZ zachęty do wizyty (bochnia.eu),
 * — ⭐ KAPLICA MATKI BOŻEJ RÓŻAŃCOWEJ przy ul. Kolanowskiej —
 *   WZNIESIONA PRZEZ SAMYCH MIESZKAŃCÓW W LATACH 1934–1935,
 *   neogotycka,
 * — ŚWIETLICA OSIEDLOWA przy ul. Kolanowskiej, z zieloną siłownią
 *   i boiskiem; w budżecie obywatelskim 2022 finansowano wykończenie
 *   jej poddasza,
 * — OŚWIETLENIE: ul. ks. Kuca dostała pierwsze pięć lamp LED dopiero
 *   z budżetu obywatelskiego 2018/2019 — argumentem było bezpieczeństwo
 *   mieszkańców WRACAJĄCYCH Z NOCNYCH ZMIAN,
 * — KOŚCIÓŁ ŚW. PAWŁA APOSTOŁA przy ul. Wyspiańskiego: parafia
 *   erygowana 25 maja 1984, kościół konsekrowany w 2004; druga co
 *   do wielkości parafia w Bochni, ok. 7,5 tys. wiernych. Ulice
 *   św. Pawła Apostoła i Wyspiańskiego należą do osiedla,
 * — SZKOŁA: dzieci z Kolanowa należą do obwodu SP nr 5 przy
 *   ul. Kazimierza Wielkiego — czyli POZA osiedlem.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — KOPALNI SOLI I UNESCO. To oś strony miasta,
 * — STRUKTURY WIEKOWEJ ZABUDOWY. Nie ustalona; wiadomo tylko, że
 *   dominują domy jednorodzinne i brak wzmianek o blokach,
 * — PRZYSTANKÓW KOMUNIKACJI MIEJSKIEJ. ⚠️ Żadna z linii BZK nie
 *   wymienia Kolanowa w opisie trasy; czy istnieją tam przystanki —
 *   NIE USTALONO. NIE TWIERDZIĆ ani że są, ani że ich nie ma,
 * — ZACHĘTY DO ODWIEDZANIA BUNKRA. Teren prywatny.
 *
 * PUŁAPKI:
 * — ⚠️ ul. Krakowskie Przedmieście i ul. Czerwieniec NALEŻĄ DO TEGO
 *   OSIEDLA, choć funkcjonują też jako nazwy potoczne części miasta.
 */
export const BOCHNIA_KOLANOW: DistrictContent = {
  slug: "bochnia-kolanow",
  urlPath: "/thermomix/bochnia/kolanow",
  nazwa: "Kolanów",
  miejscownik: "Kolanowie",
  przyimek: "w",
  miasto: { nazwa: "Bochnia", slug: "bochnia", urlPath: "/thermomix/bochnia" },

  h1: "Thermomix Kolanów — prezentacja u Ciebie w domu",
  seoTitle: "Thermomix Kolanów Bochnia — prezentacja na osiedlu",
  seoDescription:
    "Thermomix na Kolanowie w Bochni: bezpłatna prezentacja TM7 u Ciebie w kuchni — Kolanowska, Krakowskie Przedmieście, Czerwieniec, Nowy Świat. Tel. 517 185 691.",

  lead:
    "Dojeżdżam pod adresy na całym Kolanowie: Kolanowska, Krakowskie Przedmieście, Czerwieniec, Nowy Świat, Wyspiańskiego, Armii Krajowej i dalej pod las. Przywożę Thermomix TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja jest bezpłatna.",

  osiedla: [
    "Kolanowska",
    "Krakowskie Przedmieście",
    "Czerwieniec",
    "Nowy Świat",
    "Wyspiańskiego",
    "Armii Krajowej",
    "św. Pawła Apostoła",
    "ks. Kuca",
    "Brodzińskiego",
    "Działkowa",
    "Dołuszycka",
    "Sondla",
  ],

  sections: [
    {
      id: "las",
      heading: "Czterysta dwadzieścia hektarów lasu za ostatnim domem",
      paragraphs: [
        "Kolanów kończy się lasem i to jest jego najważniejsza cecha. Las Kolanowski ma czterysta dwadzieścia hektarów, wznosi się do dwustu osiemdziesięciu dziewięciu metrów nad poziomem morza i rosną w nim dęby szypułkowe, sosny, jodły i buki. Przepływa przez niego potok Babica.",
        "Z krawędzi lasu widać całe miasto z wieżami dwóch kościołów — świętego Pawła i świętego Mikołaja. Prowadzi tędy szlak spacerowy z Plant Salinarnych, niecałe pięć kilometrów, i rowerowy Pierścień Solny, który liczy ponad osiemdziesiąt.",
        "Są tu też rzeczy, których nikt się nie spodziewa: betonowe schrony z drugiej wojny, w tym niemiecki punkt oporu broniący wylotu drogi na Kraków, oraz strzelnica wojskowa z dziewiętnastego wieku. Zaznaczam od razu, że schron stoi na prywatnej działce i właściciel nie życzy sobie odwiedzin — piszę o nim jako o fakcie, nie jako o atrakcji.",
        "Dla spotkania las oznacza jedną praktyczną rzecz. To osiedle żyje sezonem: grzyby, spacery, rower, a jesienią przetwory z tego, co się przyniosło albo zebrało w ogrodzie. Kiedy umawiamy się o tej porze roku, częściej niż gdzie indziej gotujemy coś, co potem trafi do słoika.",
      ],
    },
    {
      id: "solanki",
      heading: "Solanki wzmiankowane wcześniej niż bocheńska sól",
      paragraphs: [
        "Bochnia liczy swoją historię od tysiąc sto dziewięćdziesiątego ósmego roku, kiedy pojawia się zapis o tutejszej soli, i od lokacji miasta w tysiąc dwieście pięćdziesiątym trzecim. Kolanów jest starszy od obu tych dat.",
        "Pierwsze wzmianki pochodzą z lat tysiąc sto dwadzieścia trzy do tysiąc sto dwadzieścia pięć i dotyczą solanek na tym terenie, zarządzanych przez benedyktynów z Tyńca. Do nich należał też później las, jako do właścicieli wsi.",
        "Kolanów pozostał samodzielną wsią aż do końca tysiąc dziewięćset siedemdziesiątego drugiego roku. Do Bochni wszedł pierwszego stycznia siedemdziesiątego trzeciego, razem z Chodenicami, Dołuszycami i Kurowem — kiedy miasto powiększano pod budowę wielkiego zakładu.",
        "Ślad tamtej samodzielności widać do dziś w rzeczach zrobionych własnymi rękami. Kaplicę Matki Bożej Różańcowej przy Kolanowskiej postawili sami mieszkańcy w latach trzydziestych. Świetlicę osiedlową z zieloną siłownią i boiskiem doposażano z budżetu obywatelskiego. A pierwsze lampy przy ulicy księdza Kuca zapaliły się dopiero kilka lat temu, też z budżetu obywatelskiego — w uzasadnieniu napisano wprost, że chodzi o ludzi wracających po ciemku z nocnych zmian.",
      ],
    },
    {
      id: "kuchnia",
      heading: "Domy, ogrody i gotowanie na więcej niż dwie osoby",
      paragraphs: [
        "Na Kolanowie mieszka się w domach. Nie znalazłam tu ani jednego bloku spółdzielczego, a zabudowa rozkłada się luźno, w układzie dawnej wsi — bez zwartych ciągów, za to z ogrodami.",
        "To zmienia rozmowę w kuchni. W bloku pierwsze pytanie brzmi „gdzie ja to postawię”, tutaj prawie nigdy nie pada — miejsca jest dość, a blat bywa dłuższy niż w niejednym mieszkaniu w centrum. Zamiast tego pytacie o co innego: ile tego naraz się zmieści, czy poradzi sobie z większą ilością warzyw i czy da się w nim zrobić przetwory.",
        "Odpowiadam po kolei. Przy większych porcjach najwięcej daje mieszanie i pilnowanie temperatury — powidła, przeciery i sosy pomidorowe przestają wymagać stania nad garnkiem, bo mieszają się same i nie przywierają. Tarcie i siekanie warzyw z ogrodu schodzi z kwadransa do kilkunastu sekund. Zupa krem gotuje się i miksuje w jednym naczyniu, bez przelewania gorącego.",
        "Czego nie zrobi, mówię wprost: nie upiecze chleba ani ciasta, bo do tego potrzebny jest piekarnik, i nie zawekuje słoików. Zabiera tę część roboty, która jest wyłącznie czasem i pracą rąk.",
      ],
      bullets: [
        "zabudowa jednorodzinna w układzie dawnej wsi, bez bloków",
        "jesienią najwięcej daje mieszanie przy przetworach",
        "obwód elektryczny rzadko bywa tu problemem",
      ],
    },
  ],

  faq: [
    {
      question: "Mieszkam pod samym lasem, na końcu Kolanowskiej. Dojedziesz?",
      answer:
        "Dojadę i nie doliczę za to ani złotówki. Kolanów jest rozłożony luźno, więc przy umawianiu proszę o numer domu, a nie samą nazwę ulicy — przy dłuższych ulicach na obrzeżach nawigacja potrafi poprowadzić naokoło. Strefy płatnego parkowania tu nie ma, więc pod większość adresów podjeżdża się pod furtkę.",
    },
    {
      question: "Robię dużo przetworów. Czy to się do czegoś przyda?",
      answer:
        "Przyda się dokładnie do tej części, przez którą ludzie przetwory odpuszczają — do mieszania i pilnowania. Powidła, przeciery i mus jabłkowy trzeba normalnie mieszać przez godzinę, żeby się nie przypaliły; tutaj dzieje się to samo, przy ustawionej temperaturze i obrotach, więc można odejść od garnka. Tarcie i siekanie warzyw schodzi z kwadransa do kilkunastu sekund. Czego nie zrobi: nie zawekuje słoików i nie upiecze niczego, bo do tego potrzebny jest piekarnik.",
    },
  ],

  geo: { lat: 49.9617, lng: 20.4092 },
};
