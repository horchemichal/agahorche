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


  // Fala olkuska
  olkusz: { msc: "Olkuszu", dop: "Olkusza" },
  wolbrom: { msc: "Wolbromiu", dop: "Wolbromia" },
  klucze: { msc: "Kluczach", dop: "Klucz" },
  bukowno: { msc: "Bukownie", dop: "Bukowna" },
  boleslaw: { msc: "Bolesławiu", dop: "Bolesławia" },
  trzyciaz: { msc: "Trzyciążu", dop: "Trzyciąża" },

  // Fala wadowicka
  wadowice: { msc: "Wadowicach", dop: "Wadowic" },
  andrychow: { msc: "Andrychowie", dop: "Andrychowa" },
  "kalwaria-zebrzydowska": {
    msc: "Kalwarii Zebrzydowskiej",
    dop: "Kalwarii Zebrzydowskiej",
  },
  wieprz: { msc: "Wieprzu", dop: "Wieprza" },

  // Fala wadowicka cz. 2
  tomice: { msc: "Tomicach", dop: "Tomic" },
  brzeznica: { msc: "Brzeźnicy", dop: "Brzeźnicy" },
  spytkowice: { msc: "Spytkowicach", dop: "Spytkowic" },
  lanckorona: { msc: "Lanckoronie", dop: "Lanckorony" },
  stryszow: { msc: "Stryszowie", dop: "Stryszowa" },
  mucharz: { msc: "Mucharzu", dop: "Mucharza" },

  // Fala suska
  "sucha-beskidzka": { msc: "Suchej Beskidzkiej", dop: "Suchej Beskidzkiej" },
  "makow-podhalanski": {
    msc: "Makowie Podhalańskim",
    dop: "Makowa Podhalańskiego",
  },
  jordanow: { msc: "Jordanowie", dop: "Jordanowa" },
  "jordanow-gmina": { msc: "gminie Jordanów", dop: "gminy Jordanów" },
  zawoja: { msc: "Zawoi", dop: "Zawoi" },
  stryszawa: { msc: "Stryszawie", dop: "Stryszawy" },
  zembrzyce: { msc: "Zembrzycach", dop: "Zembrzyc" },
  budzow: { msc: "Budzowie", dop: "Budzowa" },
  "bystra-sidzina": {
    msc: "gminie Bystra-Sidzina",
    dop: "gminy Bystra-Sidzina",
  },

  // Fala miechowska
  miechow: { msc: "Miechowie", dop: "Miechowa" },
  charsznica: { msc: "Charsznicy", dop: "Charsznicy" },
  raclawice: { msc: "Racławicach", dop: "Racławic" },
  "ksiaz-wielki": { msc: "Książu Wielkim", dop: "Książa Wielkiego" },
  kozlow: { msc: "Kozłowie", dop: "Kozłowa" },
  golcza: { msc: "Gołczy", dop: "Gołczy" },
  slaboszow: { msc: "Słaboszowie", dop: "Słaboszowa" },
  slomniki: { msc: "Słomnikach", dop: "Słomnik" },

  // Fala tatrzanska
  zakopane: { msc: "Zakopanem", dop: "Zakopanego" },
  koscielisko: { msc: "Kościelisku", dop: "Kościeliska" },
  poronin: { msc: "Poroninie", dop: "Poronina" },
  "bukowina-tatrzanska": {
    msc: "Bukowinie Tatrzańskiej",
    dop: "Bukowiny Tatrzańskiej",
  },
  "bialy-dunajec": { msc: "Białym Dunajcu", dop: "Białego Dunajca" },

  // Fala brzeska — reszta powiatu brzeskiego
  czchow: { msc: "Czchowie", dop: "Czchowa" },
  debno: { msc: "Dębnie", dop: "Dębna" },
  gnojnik: { msc: "Gnojniku", dop: "Gnojnika" },
  iwkowa: { msc: "Iwkowej", dop: "Iwkowej" },
  borzecin: { msc: "Borzęcinie", dop: "Borzęcina" },
  szczurowa: { msc: "Szczurowej", dop: "Szczurowej" },

  // Fala myslenicka — reszta powiatu myslenickiego
  sulkowice: { msc: "Sułkowicach", dop: "Sułkowic" },
  siepraw: { msc: "Sieprawiu", dop: "Sieprawia" },
  pcim: { msc: "Pcimiu", dop: "Pcimia" },
  raciechowice: { msc: "Raciechowicach", dop: "Raciechowic" },
  tokarnia: { msc: "Tokarni", dop: "Tokarni" },
  wisniowa: { msc: "Wiśniowej", dop: "Wiśniowej" },
  lubien: { msc: "Lubniu", dop: "Lubnia" },

  // Fala domykajaca luki — Klaj, Biskupice, Babice, Niedzwiedz
  klaj: { msc: "Kłaju", dop: "Kłaja" },
  biskupice: { msc: "Biskupicach", dop: "Biskupic" },
  babice: { msc: "Babicach", dop: "Babic" },
  niedzwiedz: { msc: "Niedźwiedziu", dop: "Niedźwiedzia" },

  // Fala proszowicka — reszta powiatu proszowickiego
  koszyce: { msc: "Koszycach", dop: "Koszyc" },
  "nowe-brzesko": { msc: "Nowym Brzesku", dop: "Nowego Brzeska" },
  palecznica: { msc: "Pałecznicy", dop: "Pałecznicy" },
  radziemice: { msc: "Radziemicach", dop: "Radziemic" },

  // Fala nowotarska cz.1
  czorsztyn: { msc: "Czorsztynie", dop: "Czorsztyna" },
  szaflary: { msc: "Szaflarach", dop: "Szaflar" },
  "ochotnica-dolna": {
    msc: "Ochotnicy Dolnej",
    dop: "Ochotnicy Dolnej",
  },
  "nowy-targ": { msc: "Nowym Targu", dop: "Nowego Targu" },
  "nowy-targ-gmina": { msc: "gminie Nowy Targ", dop: "gminy Nowy Targ" },
  "raba-wyzna": { msc: "Rabie Wyżnej", dop: "Raby Wyżnej" },
  "rabka-zdroj": { msc: "Rabce-Zdroju", dop: "Rabki-Zdroju" },
  szczawnica: { msc: "Szczawnicy", dop: "Szczawnicy" },
  kroscienko: { msc: "Krościenku", dop: "Krościenka" },
  "czarny-dunajec": { msc: "Czarnym Dunajcu", dop: "Czarnego Dunajca" },
  "lapsze-nizne": { msc: "Łapszach Niżnych", dop: "Łapsz Niżnych" },
  "spytkowice-nowotarskie": { msc: "Spytkowicach", dop: "Spytkowic" },
  jablonka: { msc: "Jabłonce", dop: "Jabłonki" },
  "lipnica-wielka": {
    msc: "Lipnicy Wielkiej",
    dop: "Lipnicy Wielkiej",
  },

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
