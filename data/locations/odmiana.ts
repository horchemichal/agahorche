/**
 * Odmiana nazw własnych przez przypadki. Bez tego szablon stron lokalnych
 * generował zdania w rodzaju „Thermomix w Kraków”, „w województwie
 * małopolskie” i „Czy Aga dojeżdża do Kraków?” — czyli dokładnie ten rodzaj
 * niechlujstwa, po którym widać, że stronę wygenerował skrypt.
 *
 * Potrzebne są dwa przypadki:
 * — miejscownik („w Krakowie”, „w Bochni”),
 * — dopełniacz („do Krakowa”, „do Bochni”).
 *
 * Nie da się tego wyliczyć regułą: Kraków → Krakowie, ale Białystok →
 * Białymstoku, a Limanowa → Limanowej. Dlatego jest to zwykła tabela,
 * uzupełniana ręcznie razem z każdą nową miejscowością. Gdy nazwy brakuje,
 * `odmien()` zwraca formę mianownikową — zdanie brzmi topornie, ale nigdy
 * nie jest błędne gramatycznie w sposób, który rzuca się w oczy, bo szablon
 * używa wtedy konstrukcji bez przyimka.
 */
export interface Odmiana {
  /** miejscownik — „w …” */
  msc: string;
  /** dopełniacz — „do …” */
  dop: string;
}

export const ODMIANA_MIEJSCOWOSCI: Record<string, Odmiana> = {
  // Tier A — ogólnopolskie
  warszawa: { msc: "Warszawie", dop: "Warszawy" },
  krakow: { msc: "Krakowie", dop: "Krakowa" },
  lodz: { msc: "Łodzi", dop: "Łodzi" },
  wroclaw: { msc: "Wrocławiu", dop: "Wrocławia" },
  poznan: { msc: "Poznaniu", dop: "Poznania" },
  gdansk: { msc: "Gdańsku", dop: "Gdańska" },
  szczecin: { msc: "Szczecinie", dop: "Szczecina" },
  bydgoszcz: { msc: "Bydgoszczy", dop: "Bydgoszczy" },
  lublin: { msc: "Lublinie", dop: "Lublina" },
  bialystok: { msc: "Białymstoku", dop: "Białegostoku" },
  katowice: { msc: "Katowicach", dop: "Katowic" },

  // Tier B — ogólnopolskie
  gdynia: { msc: "Gdyni", dop: "Gdyni" },
  czestochowa: { msc: "Częstochowie", dop: "Częstochowy" },
  radom: { msc: "Radomiu", dop: "Radomia" },
  rzeszow: { msc: "Rzeszowie", dop: "Rzeszowa" },
  torun: { msc: "Toruniu", dop: "Torunia" },
  kielce: { msc: "Kielcach", dop: "Kielc" },
  gliwice: { msc: "Gliwicach", dop: "Gliwic" },
  olsztyn: { msc: "Olsztynie", dop: "Olsztyna" },
  "zielona-gora": { msc: "Zielonej Górze", dop: "Zielonej Góry" },
  opole: { msc: "Opolu", dop: "Opola" },

  // Małopolska — obszar, w którym Aga realnie pracuje
  bochnia: { msc: "Bochni", dop: "Bochni" },
  brzesko: { msc: "Brzesku", dop: "Brzeska" },
  chrzanow: { msc: "Chrzanowie", dop: "Chrzanowa" },
  trzebinia: { msc: "Trzebini", dop: "Trzebini" },
  libiaz: { msc: "Libiążu", dop: "Libiąża" },
  oswiecim: { msc: "Oświęcimiu", dop: "Oświęcimia" },
  chelmek: { msc: "Chełmku", dop: "Chełmka" },
  alwernia: { msc: "Alwerni", dop: "Alwerni" },
  jodlownik: { msc: "Jodłowniku", dop: "Jodłownika" },
  tymbark: { msc: "Tymbarku", dop: "Tymbarku" },
  dobra: { msc: "Dobrej", dop: "Dobrej" },
  laskowa: { msc: "Laskowej", dop: "Laskowej" },
  slopnice: { msc: "Słopnicach", dop: "Słopnic" },
  lukowica: { msc: "Łukowicy", dop: "Łukowicy" },
  "mszana-dolna": { msc: "Mszanie Dolnej", dop: "Mszany Dolnej" },
  kamienica: { msc: "Kamienicy", dop: "Kamienicy" },
  zielonki: { msc: "Zielonkach", dop: "Zielonek" },
  michalowice: { msc: "Michałowicach", dop: "Michałowic" },
  zabierzow: { msc: "Zabierzowie", dop: "Zabierzowa" },
  krzeszowice: { msc: "Krzeszowicach", dop: "Krzeszowic" },
  mogilany: { msc: "Mogilanach", dop: "Mogilan" },
  "swiatniki-gorne": { msc: "Świątnikach Górnych", dop: "Świątnik Górnych" },
  wieliczka: { msc: "Wieliczce", dop: "Wieliczki" },
  niepolomice: { msc: "Niepołomicach", dop: "Niepołomic" },
  "nowy-wisnicz": { msc: "Nowym Wiśniczu", dop: "Nowego Wiśnicza" },
  tarnow: { msc: "Tarnowie", dop: "Tarnowa" },
  dobczyce: { msc: "Dobczycach", dop: "Dobczyc" },
  limanowa: { msc: "Limanowej", dop: "Limanowej" },
  myslenice: { msc: "Myślenicach", dop: "Myślenic" },
  "nowy-sacz": { msc: "Nowym Sączu", dop: "Nowego Sącza" },
  gdow: { msc: "Gdowie", dop: "Gdowa" },
  zakliczyn: { msc: "Zakliczynie", dop: "Zakliczyna" },
  wojnicz: { msc: "Wojniczu", dop: "Wojnicza" },
  skawina: { msc: "Skawinie", dop: "Skawiny" },
  proszowice: { msc: "Proszowicach", dop: "Proszowic" },

  // Pierscien wokol Bochni
  rzezawa: { msc: "Rzezawie", dop: "Rzezawy" },
  drwinia: { msc: "Drwini", dop: "Drwini" },
  lapanow: { msc: "Łapanowie", dop: "Łapanowa" },
  trzciana: { msc: "Trzcianie", dop: "Trzciany" },
  zegocina: { msc: "Żegocinie", dop: "Żegociny" },
  "lipnica-murowana": { msc: "Lipnicy Murowanej", dop: "Lipnicy Murowanej" },

  // Powiaty
  krakowski: { msc: "powiecie krakowskim", dop: "powiatu krakowskiego" },
};

/**
 * Miejscownik nazw województw — używany wyłącznie w zwrocie
 * „w województwie …”, więc wystarczy jedna forma.
 */
export const ODMIANA_WOJEWODZTW: Record<string, string> = {
  dolnoslaskie: "dolnośląskim",
  "kujawsko-pomorskie": "kujawsko-pomorskim",
  lubelskie: "lubelskim",
  lubuskie: "lubuskim",
  lodzkie: "łódzkim",
  malopolskie: "małopolskim",
  mazowieckie: "mazowieckim",
  opolskie: "opolskim",
  podkarpackie: "podkarpackim",
  podlaskie: "podlaskim",
  pomorskie: "pomorskim",
  slaskie: "śląskim",
  swietokrzyskie: "świętokrzyskim",
  "warminsko-mazurskie": "warmińsko-mazurskim",
  wielkopolskie: "wielkopolskim",
  zachodniopomorskie: "zachodniopomorskim",
};

/** Miejscownik miejscowości albo `null`, jeśli nazwy nie ma w tabeli. */
export function miejscownik(slug: string): string | null {
  return ODMIANA_MIEJSCOWOSCI[slug]?.msc ?? null;
}

/** Dopełniacz miejscowości albo `null`, jeśli nazwy nie ma w tabeli. */
export function dopelniacz(slug: string): string | null {
  return ODMIANA_MIEJSCOWOSCI[slug]?.dop ?? null;
}

/** Miejscownik nazwy województwa albo `null`. */
export function miejscownikWojewodztwa(slug: string): string | null {
  return ODMIANA_WOJEWODZTW[slug] ?? null;
}
