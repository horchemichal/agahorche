import type { DistrictContent } from "./typy";

/**
 * DĘBNIKI (VIII) — największa terytorialnie dzielnica Krakowa i jedna
 * z najważniejszych dla nas, bo Ruczaj to fraza, którą ludzie wpisują
 * częściej niż „Dębniki”. Dlatego Ruczaj jest w treści wyeksponowany,
 * a nazwa urzędowa dzielnicy schodzi na drugi plan.
 *
 * Fakty potwierdzone i użyte:
 * — os. Podwawelskie budowane 1965–1972, proj. Witold Cęckiewicz,
 *   zaprojektowane na ok. 10 tys. mieszkańców,
 * — Ruczaj: pracownicy Krakowskiego Parku Technologicznego i korporacji,
 *   Kampus 600-lecia UJ, określany jako „nowa sypialnia Krakowa”,
 * — studenci to ok. 15% mieszkańców dzielnicy, seniorzy ok. 20% —
 *   dzielnica wyraźnie młoda,
 * — Ruczaj, Kliny, Skotniki, Sidzina i Tyniec są POZA strefą płatnego
 *   parkowania; strefa obejmuje tylko rejon Starych Dębnik, Ludwinowa
 *   i Kapelanki (sektory B5, C21, C22),
 * — nowe osiedla mają garaże podziemne i miejsca naziemne.
 *
 * Uwaga nazewnicza zostawiona świadomie poza treścią: przynależność
 * „Klinów” do Dzielnicy VIII albo X jest w źródłach sprzeczna, więc
 * w tekście mówię „Kliny” bez przypisywania ich do dzielnicy.
 */
export const KRAKOW_DEBNIKI: DistrictContent = {
  slug: "krakow-debniki",
  urlPath: "/thermomix/krakow/debniki",
  nazwa: "Dębniki i Ruczaj",
  miejscownik: "Dębnikach i na Ruczaju",
  miasto: { nazwa: "Kraków", slug: "krakow", urlPath: "/thermomix/krakow" },

  h1: "Thermomix Ruczaj i Dębniki — prezentacja u Ciebie w domu",
  seoTitle: "Thermomix Dębniki i Ruczaj — przedstawiciel w Krakowie",
  seoDescription:
    "Thermomix na Ruczaju i Dębnikach: bezpłatna prezentacja TM7 u Ciebie w kuchni — Ruczaj, os. Podwawelskie, Kliny, Skotniki. Bez dopłat. Aga, tel. 517 185 691.",

  lead:
    "Dojeżdżam na cały Ruczaj, na os. Podwawelskie, na Kliny, Skotniki i Sidzinę, a także do Starych Dębnik i Tyńca. Przywożę Thermomix TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja jest bezpłatna.",

  osiedla: [
    "Ruczaj",
    "Nowy Ruczaj",
    "os. Podwawelskie",
    "Zakrzówek",
    "Ludwinów",
    "Kapelanka",
    "Stare Dębniki",
    "Pychowice",
    "Kliny",
    "os. Europejskie",
    "os. Panorama",
    "Skotniki",
    "Sidzina",
    "Kostrze",
    "Bodzów",
    "Tyniec",
  ],

  sections: [
    {
      id: "kuchnia",
      heading: "Aneks na Ruczaju, wąska kuchnia na Podwawelskim",
      paragraphs: [
        "Nowy Ruczaj to przede wszystkim mieszkania z aneksem kuchennym otwartym na salon. Blat jest zwykle jeden, ciągły, często z półwyspem — czyli miejsce do gotowania jest, ale jest też widoczne z całego pokoju. W praktyce oznacza to, że prezentacja odbywa się na środku mieszkania i wszyscy domownicy w niej uczestniczą, chcąc czy nie chcąc. Zwykle wychodzi to na dobre.",
        "Kilkanaście minut dalej, na osiedlu Podwawelskim budowanym od tysiąc dziewięćset sześćdziesiątego piątego roku, sytuacja jest odwrotna: kuchnia jest osobnym, wąskim pomieszczeniem, a blat kończy się przy zlewie. Tam planuję spotkanie inaczej i część rzeczy robimy przy stole.",
        "Trzecia grupa to domy na Klinach, w Skotnikach, Sidzinie i Tyńcu. Tam problemem nie jest miejsce, tylko to, że gotuje się dla większej liczby osób — i wtedy rozmowa idzie zupełnie w inną stronę.",
      ],
      bullets: [
        "Nowy Ruczaj, os. Europejskie, Panorama — aneks kuchenny, nowa instalacja",
        "os. Podwawelskie, Ruczaj-Zaborze — kuchnia osobna, wąska, blat krótki",
        "Kliny, Skotniki, Sidzina, Kostrze, Tyniec — domy, duże kuchnie",
      ],
    },
    {
      id: "godziny",
      heading: "Jeśli pracujesz w Parku Technologicznym, umówmy się po siedemnastej",
      paragraphs: [
        "Ruczaj jest jednocześnie sypialnią i miejscem pracy — Krakowski Park Technologiczny i biura wokół kampusu UJ zatrudniają sporo osób, które mieszkają kilka przystanków dalej. To rzadka sytuacja w Krakowie i wygodna dla nas obu: nie trzeba czekać, aż ktoś przejedzie pół miasta.",
        "Dzielnica jest wyraźnie młoda — studenci to około piętnastu procent mieszkańców. W praktyce oznacza to dużo małych mieszkań na wynajem i sporo pierwszych własnych kuchni. Jeśli to Twoja pierwsza kuchnia i nie masz w niej jeszcze prawie nic, powiedz o tym przy umawianiu — przywiozę wszystko, łącznie z naczyniami.",
      ],
    },
    {
      id: "dojazd",
      heading: "Strefa płatnego parkowania kończy się przed Ruczajem",
      paragraphs: [
        "To warto wiedzieć, bo mapa strefy jest tu nieoczywista. Płatne parkowanie obejmuje rejon Starych Dębnik, Ludwinowa i Kapelanki. Ruczaj, Kliny, Skotniki, Sidzina i Tyniec są poza strefą — parkuje się bezpłatnie, a nowe osiedla mają własne miejsca postojowe i garaże.",
        "Dla Ciebie nie zmienia to nic, bo za dojazd nie płacisz niezależnie od dzielnicy. Zmienia natomiast to, jak planuję dzień: przy adresach w strefie rezerwuję więcej czasu, przy Ruczaju czy Klinach po prostu podjeżdżam.",
        "Dzielnica jest bardzo rozległa — od Ludwinowa po Tyniec to kilkanaście kilometrów. Przy dalszych adresach umawiam kilka spotkań w jednym rejonie tego samego dnia.",
      ],
    },
  ],

  faq: [
    {
      question: "Czy dojeżdżasz na Ruczaj?",
      answer:
        "Tak, na cały Ruczaj — stary i nowy, łącznie z osiedlami przy kampusie i os. Europejskim. Dojazd jest bezpłatny, a parkowanie w tym rejonie nie jest objęte strefą płatną.",
    },
    {
      question: "Mam aneks kuchenny otwarty na salon. Czy to dobre miejsce na prezentację?",
      answer:
        "Bardzo dobre. Aneks daje ciągły blat i miejsce, żeby stanąć obok siebie, a przy okazji widzą to wszyscy w mieszkaniu — co akurat przy takim zakupie bywa pomocne, bo decyzja rzadko jest jednoosobowa.",
    },
    {
      question: "Czy przyjedziesz do Tyńca albo Sidziny?",
      answer:
        "Tak. To dalsza część dzielnicy, więc zwykle proponuję termin z nieco większym wyprzedzeniem i łączę kilka spotkań w tym rejonie jednego dnia — ale dojeżdżam i nie doliczam za to niczego.",
    },
  ],

  geo: { lat: 50.0289, lng: 19.9014 },
};
