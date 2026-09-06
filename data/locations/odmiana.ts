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
  gorlice: { msc: "Gorlicach", dop: "Gorlic" },
  "gorlice-gmina": { msc: "gminie Gorlice", dop: "gminy Gorlice" },
  biecz: { msc: "Bieczu", dop: "Biecza" },
  bobowa: { msc: "Bobowej", dop: "Bobowej" },
  "uscie-gorlickie": { msc: "gminie Uście Gorlickie", dop: "gminy Uście Gorlickie" },
  lipinki: { msc: "gminie Lipinki", dop: "gminy Lipinki" },
  luzna: { msc: "gminie Łużna", dop: "gminy Łużna" },
  moszczenica: { msc: "gminie Moszczenica", dop: "gminy Moszczenica" },
  ropa: { msc: "gminie Ropa", dop: "gminy Ropa" },
  sekowa: { msc: "gminie Sękowa", dop: "gminy Sękowa" },
  "dabrowa-tarnowska": { msc: "Dąbrowie Tarnowskiej", dop: "Dąbrowy Tarnowskiej" },
  szczucin: { msc: "Szczucinie", dop: "Szczucina" },
  olesno: { msc: "gminie Olesno", dop: "gminy Olesno" },
  suloszowa: { msc: "gminie Sułoszowa", dop: "gminy Sułoszowa" },
  skala: { msc: "Skale", dop: "Skały" },
  "jerzmanowice-przeginia": { msc: "gminie Jerzmanowice-Przeginia", dop: "gminy Jerzmanowice-Przeginia" },
  "wielka-wies": { msc: "gminie Wielka Wieś", dop: "gminy Wielka Wieś" },
  liszki: { msc: "Liszkach", dop: "Liszek" },
  czernichow: { msc: "Czernichowie", dop: "Czernichowa" },
  iwanowice: { msc: "Iwanowicach", dop: "Iwanowic" },
  "kocmyrzow-luborzyca": { msc: "gminie Kocmyrzów-Luborzyca", dop: "gminy Kocmyrzów-Luborzyca" },
  "igolomia-wawrzenczyce": { msc: "gminie Igołomia-Wawrzeńczyce", dop: "gminy Igołomia-Wawrzeńczyce" },
  tuchow: { msc: "Tuchowie", dop: "Tuchowa" },
  zabno: { msc: "Żabnie", dop: "Żabna" },
  ciezkowice: { msc: "Ciężkowicach", dop: "Ciężkowic" },
  wierzchoslawice: { msc: "Wierzchosławicach", dop: "Wierzchosławic" },
  radlow: { msc: "Radłowie", dop: "Radłowa" },
  wietrzychowice: { msc: "Wietrzychowicach", dop: "Wietrzychowic" },
  ryglice: { msc: "Ryglicach", dop: "Ryglic" },
  gromnik: { msc: "Gromniku", dop: "Gromnika" },
  "rzepiennik-strzyzewski": { msc: "Rzepienniku Strzyżewskim", dop: "Rzepiennika Strzyżewskiego" },
  szerzyny: { msc: "Szerzynach", dop: "Szerzyn" },
  "tarnow-gmina": { msc: "gminie Tarnów", dop: "gminy Tarnów" },
  "lisia-gora": { msc: "Lisiej Górze", dop: "Lisiej Góry" },
  skrzyszow: { msc: "Skrzyszowie", dop: "Skrzyszowa" },
  plesna: { msc: "Pleśnej", dop: "Pleśnej" },
  "oswiecim-gmina": { msc: "gminie Oświęcim", dop: "gminy Oświęcim" },
  kety: { msc: "Kętach", dop: "Kęt" },
  brzeszcze: { msc: "Brzeszczach", dop: "Brzeszcz" },
  zator: { msc: "Zatorze", dop: "Zatora" },
  osiek: { msc: "Osieku", dop: "Osieka" },
  "polanka-wielka": { msc: "Polance Wielkiej", dop: "Polanki Wielkiej" },
  przeciszow: { msc: "Przeciszowie", dop: "Przeciszowa" },
  koniusza: { msc: "Koniuszy", dop: "Koniuszy" },
  "limanowa-gmina": { msc: "gminie Limanowa", dop: "gminy Limanowa" },
  "mszana-dolna-gmina": { msc: "gminie Mszana Dolna", dop: "gminy Mszana Dolna" },
  szczawa: { msc: "Szczawie", dop: "Szczawy" },
  "bochnia-gmina": { msc: "gminie Bochnia", dop: "gminy Bochnia" },
  radgoszcz: { msc: "gminie Radgoszcz", dop: "gminy Radgoszcz" },
  greboszow: { msc: "gminie Gręboszów", dop: "gminy Gręboszów" },
  medrzechow: { msc: "gminie Mędrzechów", dop: "gminy Mędrzechów" },
  "boleslaw-dabrowski": { msc: "gminie Bolesław", dop: "gminy Bolesław" },
  "stary-sacz": { msc: "Starym Sączu", dop: "Starego Sącza" },
  podegrodzie: { msc: "Podegrodziu", dop: "Podegrodzia" },
  lacko: { msc: "Łącku", dop: "Łącka" },
  chelmiec: { msc: "Chełmcu", dop: "Chełmca" },
  "krynica-zdroj": { msc: "Krynicy-Zdroju", dop: "Krynicy-Zdroju" },
  muszyna: { msc: "Muszynie", dop: "Muszyny" },
  "piwniczna-zdroj": { msc: "Piwnicznej-Zdroju", dop: "Piwnicznej-Zdroju" },
  rytro: { msc: "Rytrze", dop: "Rytra" },
  grybow: { msc: "Grybowie", dop: "Grybowa" },
  "grybow-gmina": { msc: "gminie Grybów", dop: "gminy Grybów" },
  "kamionka-wielka": { msc: "Kamionce Wielkiej", dop: "Kamionki Wielkiej" },
  korzenna: { msc: "Korzennej", dop: "Korzennej" },
  nawojowa: { msc: "Nawojowej", dop: "Nawojowej" },
  labowa: { msc: "Łabowej", dop: "Łabowej" },
  "grodek-nad-dunajcem": { msc: "Gródku nad Dunajcem", dop: "Gródka nad Dunajcem" },
  "lososina-dolna": { msc: "Łososinie Dolnej", dop: "Łososiny Dolnej" },
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
  // ——— Województwo śląskie (wrzesień 2026) ———
  // Śląskie nazwy sprawiają odmianie więcej kłopotu niż małopolskie, bo
  // wiele z nich to liczba mnoga (Katowice, Gliwice, Tychy, Siemianowice)
  // albo nazwy dwuczłonowe, w których odmieniają się oba człony
  // (Bielsko-Biała → w Bielsku-Białej). Bez tabeli szablon pisałby
  // „w Bielsko-Biała" i „do Bielsko-Biała".
  sosnowiec: { msc: "Sosnowcu", dop: "Sosnowca" },
  zabrze: { msc: "Zabrzu", dop: "Zabrza" },
  bytom: { msc: "Bytomiu", dop: "Bytomia" },
  "ruda-slaska": { msc: "Rudzie Śląskiej", dop: "Rudy Śląskiej" },
  tychy: { msc: "Tychach", dop: "Tychów" },
  "dabrowa-gornicza": { msc: "Dąbrowie Górniczej", dop: "Dąbrowy Górniczej" },
  chorzow: { msc: "Chorzowie", dop: "Chorzowa" },
  myslowice: { msc: "Mysłowicach", dop: "Mysłowic" },
  "siemianowice-slaskie": { msc: "Siemianowicach Śląskich", dop: "Siemianowic Śląskich" },
  bedzin: { msc: "Będzinie", dop: "Będzina" },
  "piekary-slaskie": { msc: "Piekarach Śląskich", dop: "Piekar Śląskich" },
  swietochlowice: { msc: "Świętochłowicach", dop: "Świętochłowic" },
  "tarnowskie-gory": { msc: "Tarnowskich Górach", dop: "Tarnowskich Gór" },
  czeladz: { msc: "Czeladzi", dop: "Czeladzi" },
  knurow: { msc: "Knurowie", dop: "Knurowa" },
  "bielsko-biala": { msc: "Bielsku-Białej", dop: "Bielska-Białej" },
  rybnik: { msc: "Rybniku", dop: "Rybnika" },
  "jastrzebie-zdroj": { msc: "Jastrzębiu-Zdroju", dop: "Jastrzębia-Zdroju" },
  zory: { msc: "Żorach", dop: "Żor" },
  "wodzislaw-slaski": { msc: "Wodzisławiu Śląskim", dop: "Wodzisławia Śląskiego" },
  raciborz: { msc: "Raciborzu", dop: "Raciborza" },
  zywiec: { msc: "Żywcu", dop: "Żywca" },
  cieszyn: { msc: "Cieszynie", dop: "Cieszyna" },
  "czechowice-dziedzice": { msc: "Czechowicach-Dziedzicach", dop: "Czechowic-Dziedzic" },
  zawiercie: { msc: "Zawierciu", dop: "Zawiercia" },
  myszkow: { msc: "Myszkowie", dop: "Myszkowa" },
  lubliniec: { msc: "Lublińcu", dop: "Lublińca" },
  pszczyna: { msc: "Pszczynie", dop: "Pszczyny" },
  mikolow: { msc: "Mikołowie", dop: "Mikołowa" },

  // ——— Województwo podkarpackie (wrzesień 2026) ———
  // Uwaga na Jasło i Krosno: to rodzaj nijaki, więc „w Jaśle”, „do Jasła”,
  // a nie „w Jasłu”. Przemyśl ma miejscownik „w Przemyślu” i dopełniacz
  // „do Przemyśla”. Sanok i Zagórz odmieniają się jak rzeczowniki męskie.
  przemysl: { msc: "Przemyślu", dop: "Przemyśla" },
  mielec: { msc: "Mielcu", dop: "Mielca" },
  "stalowa-wola": { msc: "Stalowej Woli", dop: "Stalowej Woli" },
  tarnobrzeg: { msc: "Tarnobrzegu", dop: "Tarnobrzega" },
  krosno: { msc: "Krośnie", dop: "Krosna" },
  debica: { msc: "Dębicy", dop: "Dębicy" },
  jaroslaw: { msc: "Jarosławiu", dop: "Jarosławia" },
  sanok: { msc: "Sanoku", dop: "Sanoka" },
  jaslo: { msc: "Jaśle", dop: "Jasła" },
  lancut: { msc: "Łańcucie", dop: "Łańcuta" },
  przeworsk: { msc: "Przeworsku", dop: "Przeworska" },
  nisko: { msc: "Nisku", dop: "Niska" },
  ropczyce: { msc: "Ropczycach", dop: "Ropczyc" },
  lezajsk: { msc: "Leżajsku", dop: "Leżajska" },
  "sedziszow-malopolski": { msc: "Sędziszowie Małopolskim", dop: "Sędziszowa Małopolskiego" },
  lubaczow: { msc: "Lubaczowie", dop: "Lubaczowa" },
  "nowa-deba": { msc: "Nowej Dębie", dop: "Nowej Dęby" },
  kolbuszowa: { msc: "Kolbuszowej", dop: "Kolbuszowej" },
  "ustrzyki-dolne": { msc: "Ustrzykach Dolnych", dop: "Ustrzyk Dolnych" },
  strzyzow: { msc: "Strzyżowie", dop: "Strzyżowa" },
  brzozow: { msc: "Brzozowie", dop: "Brzozowa" },
  boguchwala: { msc: "Boguchwale", dop: "Boguchwały" },
  lesko: { msc: "Lesku", dop: "Leska" },
  "glogow-malopolski": { msc: "Głogowie Małopolskim", dop: "Głogowa Małopolskiego" },
  "sokolow-malopolski": { msc: "Sokołowie Małopolskim", dop: "Sokołowa Małopolskiego" },
  zagorz: { msc: "Zagórzu", dop: "Zagórza" },
  "nowa-sarzyna": { msc: "Nowej Sarzynie", dop: "Nowej Sarzyny" },
  "rudnik-nad-sanem": { msc: "Rudniku nad Sanem", dop: "Rudnika nad Sanem" },
  dynow: { msc: "Dynowie", dop: "Dynowa" },
  radymno: { msc: "Radymnie", dop: "Radymna" },
  pilzno: { msc: "Pilźnie", dop: "Pilzna" },
  rymanow: { msc: "Rymanowie", dop: "Rymanowa" },
  dukla: { msc: "Dukli", dop: "Dukli" },
  cieszanow: { msc: "Cieszanowie", dop: "Cieszanowa" },
  oleszyce: { msc: "Oleszycach", dop: "Oleszyc" },

  /*
   * ŚWIĘTOKRZYSKIE. Trzy pułapki, przez które te nazwy trzeba było
   * sprawdzać po jednej, a nie dopisywać z pamięci:
   * — nazwy dwuczłonowe odmieniają się w obu członach: „w Ostrowcu
   *   Świętokrzyskim”, „w Skarżysku-Kamiennej”, „w Busku-Zdroju”;
   * — Kazimierza Wielka to nie jest imię — to rodzaj żeński i miejscownik
   *   brzmi „w Kazimierzy Wielkiej”, nie „w Kazimierzu”;
   * — Wąchock, Zawichost i Małogoszcz mają nieoczywisty dopełniacz
   *   („Zawichostu”, nie „Zawichosta”).
   */
  "ostrowiec-swietokrzyski": { msc: "Ostrowcu Świętokrzyskim", dop: "Ostrowca Świętokrzyskiego" },
  starachowice: { msc: "Starachowicach", dop: "Starachowic" },
  "skarzysko-kamienna": { msc: "Skarżysku-Kamiennej", dop: "Skarżyska-Kamiennej" },
  suchedniow: { msc: "Suchedniowie", dop: "Suchedniowa" },
  wachock: { msc: "Wąchocku", dop: "Wąchocka" },
  staporkow: { msc: "Stąporkowie", dop: "Stąporkowa" },
  kunow: { msc: "Kunowie", dop: "Kunowa" },
  konskie: { msc: "Końskich", dop: "Końskich" },
  wloszczowa: { msc: "Włoszczowie", dop: "Włoszczowy" },
  jedrzejow: { msc: "Jędrzejowie", dop: "Jędrzejowa" },
  sedziszow: { msc: "Sędziszowie", dop: "Sędziszowa" },
  malogoszcz: { msc: "Małogoszczu", dop: "Małogoszcza" },
  checiny: { msc: "Chęcinach", dop: "Chęcin" },
  morawica: { msc: "Morawicy", dop: "Morawicy" },
  daleszyce: { msc: "Daleszycach", dop: "Daleszyc" },
  bodzentyn: { msc: "Bodzentynie", dop: "Bodzentyna" },
  "nowa-slupia": { msc: "Nowej Słupi", dop: "Nowej Słupi" },
  chmielnik: { msc: "Chmielniku", dop: "Chmielnika" },
  pierzchnica: { msc: "Pierzchnicy", dop: "Pierzchnicy" },
  lagow: { msc: "Łagowie", dop: "Łagowa" },
  sandomierz: { msc: "Sandomierzu", dop: "Sandomierza" },
  opatow: { msc: "Opatowie", dop: "Opatowa" },
  ozarow: { msc: "Ożarowie", dop: "Ożarowa" },
  cmielow: { msc: "Ćmielowie", dop: "Ćmielowa" },
  zawichost: { msc: "Zawichoście", dop: "Zawichostu" },
  koprzywnica: { msc: "Koprzywnicy", dop: "Koprzywnicy" },
  klimontow: { msc: "Klimontowie", dop: "Klimontowa" },
  polaniec: { msc: "Połańcu", dop: "Połańca" },
  staszow: { msc: "Staszowie", dop: "Staszowa" },
  szydlow: { msc: "Szydłowie", dop: "Szydłowa" },
  "busko-zdroj": { msc: "Busku-Zdroju", dop: "Buska-Zdroju" },
  stopnica: { msc: "Stopnicy", dop: "Stopnicy" },
  pinczow: { msc: "Pińczowie", dop: "Pińczowa" },
  wislica: { msc: "Wiślicy", dop: "Wiślicy" },
  "nowy-korczyn": { msc: "Nowym Korczynie", dop: "Nowego Korczyna" },
  "kazimierza-wielka": { msc: "Kazimierzy Wielkiej", dop: "Kazimierzy Wielkiej" },
  skalbmierz: { msc: "Skalbmierzu", dop: "Skalbmierza" },
  dzialoszyce: { msc: "Działoszycach", dop: "Działoszyc" },

  /*
   * LUBELSKIE. Jedna nazwa jest tu pułapką, przy której myli się większość
   * piszących: KRASNYSTAW odmienia się w obu członach i to nieregularnie —
   * „w Krasnymstawie”, ale „do Krasnegostawu”. Pozostałe nazwy dwuczłonowe
   * (Biała Podlaska, Tomaszów Lubelski, Międzyrzec Podlaski, Radzyń Podlaski,
   * Kazimierz Dolny, Opole Lubelskie, Janów Lubelski, Ostrów Lubelski,
   * Stoczek Łukowski, Józefów nad Wisłą) trzymają się reguły, ale i tak
   * wymagają obu członów.
   */
  zamosc: { msc: "Zamościu", dop: "Zamościa" },
  chelm: { msc: "Chełmie", dop: "Chełma" },
  "biala-podlaska": { msc: "Białej Podlaskiej", dop: "Białej Podlaskiej" },
  pulawy: { msc: "Puławach", dop: "Puław" },
  swidnik: { msc: "Świdniku", dop: "Świdnika" },
  krasnik: { msc: "Kraśniku", dop: "Kraśnika" },
  lukow: { msc: "Łukowie", dop: "Łukowa" },
  bilgoraj: { msc: "Biłgoraju", dop: "Biłgoraja" },
  lubartow: { msc: "Lubartowie", dop: "Lubartowa" },
  leczna: { msc: "Łęcznej", dop: "Łęcznej" },
  "tomaszow-lubelski": { msc: "Tomaszowie Lubelskim", dop: "Tomaszowa Lubelskiego" },
  krasnystaw: { msc: "Krasnymstawie", dop: "Krasnegostawu" },
  hrubieszow: { msc: "Hrubieszowie", dop: "Hrubieszowa" },
  "miedzyrzec-podlaski": { msc: "Międzyrzecu Podlaskim", dop: "Międzyrzeca Podlaskiego" },
  deblin: { msc: "Dęblinie", dop: "Dęblina" },
  "radzyn-podlaski": { msc: "Radzyniu Podlaskim", dop: "Radzynia Podlaskiego" },
  wlodawa: { msc: "Włodawie", dop: "Włodawy" },
  "janow-lubelski": { msc: "Janowie Lubelskim", dop: "Janowa Lubelskiego" },
  parczew: { msc: "Parczewie", dop: "Parczewa" },
  ryki: { msc: "Rykach", dop: "Ryk" },
  poniatowa: { msc: "Poniatowej", dop: "Poniatowej" },
  "opole-lubelskie": { msc: "Opolu Lubelskim", dop: "Opola Lubelskiego" },
  belzyce: { msc: "Bełżycach", dop: "Bełżyc" },
  terespol: { msc: "Terespolu", dop: "Terespola" },
  szczebrzeszyn: { msc: "Szczebrzeszynie", dop: "Szczebrzeszyna" },
  bychawa: { msc: "Bychawie", dop: "Bychawy" },
  "rejowiec-fabryczny": { msc: "Rejowcu Fabrycznym", dop: "Rejowca Fabrycznego" },
  naleczow: { msc: "Nałęczowie", dop: "Nałęczowa" },
  "kazimierz-dolny": { msc: "Kazimierzu Dolnym", dop: "Kazimierza Dolnego" },
  kock: { msc: "Kocku", dop: "Kocka" },
  zwierzyniec: { msc: "Zwierzyńcu", dop: "Zwierzyńca" },
  tarnogrod: { msc: "Tarnogrodzie", dop: "Tarnogrodu" },
  krasnobrod: { msc: "Krasnobrodzie", dop: "Krasnobrodu" },
  annopol: { msc: "Annopolu", dop: "Annopola" },
  jozefow: { msc: "Józefowie", dop: "Józefowa" },
  "stoczek-lukowski": { msc: "Stoczku Łukowskim", dop: "Stoczka Łukowskiego" },
  piaski: { msc: "Piaskach", dop: "Piask" },
  "ostrow-lubelski": { msc: "Ostrowie Lubelskim", dop: "Ostrowa Lubelskiego" },
  urzedow: { msc: "Urzędowie", dop: "Urzędowa" },
  modliborzyce: { msc: "Modliborzycach", dop: "Modliborzyc" },
  frampol: { msc: "Frampolu", dop: "Frampola" },
  "jozefow-nad-wisla": { msc: "Józefowie nad Wisłą", dop: "Józefowa nad Wisłą" },

  /*
   * OPOLSKIE. Dwie pułapki. Kędzierzyn-Koźle odmienia oba człony
   * („w Kędzierzynie-Koźlu", „do Kędzierzyna-Koźla"). Zawadzkie
   * i Kolonowskie to nazwy w formie przymiotnikowej rodzaju nijakiego,
   * więc miejscownik brzmi „w Zawadzkiem" i „w Kolonowskiem" — nie
   * „w Zawadzkiu". Do tego Ujazd ma miejscownik „w Ujeździe".
   */
  "kedzierzyn-kozle": { msc: "Kędzierzynie-Koźlu", dop: "Kędzierzyna-Koźla" },
  nysa: { msc: "Nysie", dop: "Nysy" },
  brzeg: { msc: "Brzegu", dop: "Brzegu" },
  kluczbork: { msc: "Kluczborku", dop: "Kluczborka" },
  prudnik: { msc: "Prudniku", dop: "Prudnika" },
  "strzelce-opolskie": { msc: "Strzelcach Opolskich", dop: "Strzelec Opolskich" },
  krapkowice: { msc: "Krapkowicach", dop: "Krapkowic" },
  namyslow: { msc: "Namysłowie", dop: "Namysłowa" },
  glucholazy: { msc: "Głuchołazach", dop: "Głuchołaz" },
  glubczyce: { msc: "Głubczycach", dop: "Głubczyc" },
  zdzieszowice: { msc: "Zdzieszowicach", dop: "Zdzieszowic" },
  ozimek: { msc: "Ozimku", dop: "Ozimka" },
  grodkow: { msc: "Grodkowie", dop: "Grodkowa" },
  paczkow: { msc: "Paczkowie", dop: "Paczkowa" },
  praszka: { msc: "Praszce", dop: "Praszki" },
  zawadzkie: { msc: "Zawadzkiem", dop: "Zawadzkiego" },
  gogolin: { msc: "Gogolinie", dop: "Gogolina" },
  otmuchow: { msc: "Otmuchowie", dop: "Otmuchowa" },
  niemodlin: { msc: "Niemodlinie", dop: "Niemodlina" },
  kietrz: { msc: "Kietrzu", dop: "Kietrza" },
  wolczyn: { msc: "Wołczynie", dop: "Wołczyna" },
  "lewin-brzeski": { msc: "Lewinie Brzeskim", dop: "Lewina Brzeskiego" },
  glogowek: { msc: "Głogówku", dop: "Głogówka" },
  tulowice: { msc: "Tułowicach", dop: "Tułowic" },
  dobrodzien: { msc: "Dobrodzieniu", dop: "Dobrodzienia" },
  byczyna: { msc: "Byczynie", dop: "Byczyny" },
  kolonowskie: { msc: "Kolonowskiem", dop: "Kolonowskiego" },
  baborow: { msc: "Baborowie", dop: "Baborowa" },
  proszkow: { msc: "Prószkowie", dop: "Prószkowa" },
  lesnica: { msc: "Leśnicy", dop: "Leśnicy" },
  "biala-opolska": { msc: "Białej", dop: "Białej" },
  korfantow: { msc: "Korfantowie", dop: "Korfantowa" },
  ujazd: { msc: "Ujeździe", dop: "Ujazdu" },

  /*
   * ŁÓDZKIE. Nazwy dwuczłonowe odmieniają się w obu członach (Piotrków
   * Trybunalski, Tomaszów Mazowiecki, Aleksandrów Łódzki, Konstantynów
   * Łódzki, Rawa Mazowiecka, Zduńska Wola, Biała Rawska). Osobno warto
   * pamiętać, że Łask i Szadek mają dopełniacz zakończony na -u
   * („do Łasku", „do Szadku"), a nie na -a.
   */
  "piotrkow-trybunalski": { msc: "Piotrkowie Trybunalskim", dop: "Piotrkowa Trybunalskiego" },
  pabianice: { msc: "Pabianicach", dop: "Pabianic" },
  "tomaszow-mazowiecki": { msc: "Tomaszowie Mazowieckim", dop: "Tomaszowa Mazowieckiego" },
  belchatow: { msc: "Bełchatowie", dop: "Bełchatowa" },
  zgierz: { msc: "Zgierzu", dop: "Zgierza" },
  skierniewice: { msc: "Skierniewicach", dop: "Skierniewic" },
  radomsko: { msc: "Radomsku", dop: "Radomska" },
  kutno: { msc: "Kutnie", dop: "Kutna" },
  sieradz: { msc: "Sieradzu", dop: "Sieradza" },
  "zdunska-wola": { msc: "Zduńskiej Woli", dop: "Zduńskiej Woli" },
  lowicz: { msc: "Łowiczu", dop: "Łowicza" },
  "aleksandrow-lodzki": { msc: "Aleksandrowie Łódzkim", dop: "Aleksandrowa Łódzkiego" },
  wielun: { msc: "Wieluniu", dop: "Wielunia" },
  opoczno: { msc: "Opocznie", dop: "Opoczna" },
  ozorkow: { msc: "Ozorkowie", dop: "Ozorkowa" },
  "konstantynow-lodzki": { msc: "Konstantynowie Łódzkim", dop: "Konstantynowa Łódzkiego" },
  "rawa-mazowiecka": { msc: "Rawie Mazowieckiej", dop: "Rawy Mazowieckiej" },
  lask: { msc: "Łasku", dop: "Łasku" },
  leczyca: { msc: "Łęczycy", dop: "Łęczycy" },
  glowno: { msc: "Głownie", dop: "Głowna" },
  koluszki: { msc: "Koluszkach", dop: "Koluszek" },
  brzeziny: { msc: "Brzezinach", dop: "Brzezin" },
  wieruszow: { msc: "Wieruszowie", dop: "Wieruszowa" },
  zychlin: { msc: "Żychlinie", dop: "Żychlina" },
  poddebice: { msc: "Poddębicach", dop: "Poddębic" },
  zelow: { msc: "Zelowie", dop: "Zelowa" },
  tuszyn: { msc: "Tuszynie", dop: "Tuszyna" },
  pajeczno: { msc: "Pajęcznie", dop: "Pajęczna" },
  sulejow: { msc: "Sulejowie", dop: "Sulejowa" },
  dzialoszyn: { msc: "Działoszynie", dop: "Działoszyna" },
  krosniewice: { msc: "Krośniewicach", dop: "Krośniewic" },
  drzewica: { msc: "Drzewicy", dop: "Drzewicy" },
  przedborz: { msc: "Przedborzu", dop: "Przedborza" },
  strykow: { msc: "Strykowie", dop: "Strykowa" },
  rzgow: { msc: "Rzgowie", dop: "Rzgowa" },
  warta: { msc: "Warcie", dop: "Warty" },
  zloczew: { msc: "Złoczewie", dop: "Złoczewa" },
  "biala-rawska": { msc: "Białej Rawskiej", dop: "Białej Rawskiej" },
  uniejow: { msc: "Uniejowie", dop: "Uniejowa" },
  kamiensk: { msc: "Kamieńsku", dop: "Kamieńska" },
  wolborz: { msc: "Wolborzu", dop: "Wolborza" },
  blaszki: { msc: "Błaszkach", dop: "Błaszek" },
  szadek: { msc: "Szadku", dop: "Szadku" },
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
