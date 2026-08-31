import type { CityContent } from "../city-content";

import { ALWERNIA } from "./alwernia";
import { BOCHNIA } from "./bochnia";
import { BRZESKO } from "./brzesko";
import { CHELMEK } from "./chelmek";
import { CHRZANOW } from "./chrzanow";
import { DOBRA } from "./dobra";
import { DRWINIA } from "./drwinia";
import { JODLOWNIK } from "./jodlownik";
import { KAMIENICA } from "./kamienica";
import { LAPANOW } from "./lapanow";
import { LASKOWA } from "./laskowa";
import { LIBIAZ } from "./libiaz";
import { LIPNICA_MUROWANA } from "./lipnica-murowana";
import { LUKOWICA } from "./lukowica";
import { MSZANA_DOLNA } from "./mszana-dolna";
import { OSWIECIM } from "./oswiecim";
import { RZEZAWA } from "./rzezawa";
import { SLOPNICE } from "./slopnice";
import { TRZCIANA } from "./trzciana";
import { TRZEBINIA } from "./trzebinia";
import { TYMBARK } from "./tymbark";
import { ZEGOCINA } from "./zegocina";
import { KRZESZOWICE } from "./krzeszowice";
import { MICHALOWICE } from "./michalowice";
import { MOGILANY } from "./mogilany";
import { SWIATNIKI_GORNE } from "./swiatniki-gorne";
import { ZABIERZOW } from "./zabierzow";
import { ZIELONKI } from "./zielonki";
import { DOBCZYCE } from "./dobczyce";
import { GDOW } from "./gdow";
import { LIMANOWA } from "./limanowa";
import { MYSLENICE } from "./myslenice";
import { NOWY_SACZ } from "./nowy-sacz";
import { NOWY_WISNICZ } from "./nowy-wisnicz";
import { PROSZOWICE } from "./proszowice";
import { TARNOW } from "./tarnow";
import { WOJNICZ } from "./wojnicz";
import { ZAKLICZYN } from "./zakliczyn";
import { OLKUSZ } from "./olkusz";
import { WOLBROM } from "./wolbrom";
import { KLUCZE } from "./klucze";
import { BUKOWNO } from "./bukowno";
import { BOLESLAW } from "./boleslaw";
import { TRZYCIAZ } from "./trzyciaz";
import { WADOWICE } from "./wadowice";
import { ANDRYCHOW } from "./andrychow";
import { KALWARIA_ZEBRZYDOWSKA } from "./kalwaria-zebrzydowska";
import { WIEPRZ } from "./wieprz";
import { TOMICE } from "./tomice";
import { BRZEZNICA } from "./brzeznica";
import { SPYTKOWICE } from "./spytkowice";
import { LANCKORONA } from "./lanckorona";
import { STRYSZOW } from "./stryszow";
import { MUCHARZ } from "./mucharz";
import { SUCHA_BESKIDZKA } from "./sucha-beskidzka";
import { MAKOW_PODHALANSKI } from "./makow-podhalanski";
import { JORDANOW } from "./jordanow";
import { JORDANOW_GMINA } from "./jordanow-gmina";
import { ZAWOJA } from "./zawoja";
import { STRYSZAWA } from "./stryszawa";
import { ZEMBRZYCE } from "./zembrzyce";
import { BUDZOW } from "./budzow";
import { BYSTRA_SIDZINA } from "./bystra-sidzina";
import { MIECHOW } from "./miechow";
import { CHARSZNICA } from "./charsznica";
import { RACLAWICE } from "./raclawice";
import { KSIAZ_WIELKI } from "./ksiaz-wielki";
import { KOZLOW } from "./kozlow";
import { GOLCZA } from "./golcza";
import { SLABOSZOW } from "./slaboszow";
import { SLOMNIKI } from "./slomniki";
import { ZAKOPANE } from "./zakopane";
import { KOSCIELISKO } from "./koscielisko";
import { PORONIN } from "./poronin";
import { BUKOWINA_TATRZANSKA } from "./bukowina-tatrzanska";
import { BIALY_DUNAJEC } from "./bialy-dunajec";
import { CZORSZTYN } from "./czorsztyn";
import { SZAFLARY } from "./szaflary";
import { OCHOTNICA_DOLNA } from "./ochotnica-dolna";
import { GORLICE } from "./gorlice";
import { GORLICE_GMINA } from "./gorlice-gmina";
import { BIECZ } from "./biecz";
import { BOBOWA } from "./bobowa";
import { USCIE_GORLICKIE } from "./uscie-gorlickie";
import { LIPINKI } from "./lipinki";
import { LUZNA } from "./luzna";
import { MOSZCZENICA } from "./moszczenica";
import { ROPA } from "./ropa";
import { SEKOWA } from "./sekowa";
import { SULOSZOWA } from "./suloszowa";
import { SKALA } from "./skala";
import { JERZMANOWICE_PRZEGINIA } from "./jerzmanowice-przeginia";
import { WIELKA_WIES } from "./wielka-wies";
import { LISZKI } from "./liszki";
import { CZERNICHOW } from "./czernichow";
import { IWANOWICE } from "./iwanowice";
import { KOCMYRZOW_LUBORZYCA } from "./kocmyrzow-luborzyca";
import { IGOLOMIA_WAWRZENCZYCE } from "./igolomia-wawrzenczyce";
import { TUCHOW } from "./tuchow";
import { ZABNO } from "./zabno";
import { CIEZKOWICE } from "./ciezkowice";
import { WIERZCHOSLAWICE } from "./wierzchoslawice";
import { RADLOW } from "./radlow";
import { WIETRZYCHOWICE } from "./wietrzychowice";
import { RYGLICE } from "./ryglice";
import { GROMNIK } from "./gromnik";
import { RZEPIENNIK_STRZYZEWSKI } from "./rzepiennik-strzyzewski";
import { SZERZYNY } from "./szerzyny";
import { TARNOW_GMINA } from "./tarnow-gmina";
import { LISIA_GORA } from "./lisia-gora";
import { SKRZYSZOW } from "./skrzyszow";
import { PLESNA } from "./plesna";
import { OSWIECIM_GMINA } from "./oswiecim-gmina";
import { KETY } from "./kety";
import { BRZESZCZE } from "./brzeszcze";
import { ZATOR } from "./zator";
import { OSIEK } from "./osiek";
import { POLANKA_WIELKA } from "./polanka-wielka";
import { PRZECISZOW } from "./przeciszow";
import { KONIUSZA } from "./koniusza";
import { LIMANOWA_GMINA } from "./limanowa-gmina";
import { MSZANA_DOLNA_GMINA } from "./mszana-dolna-gmina";
import { SZCZAWA } from "./szczawa";
import { BOCHNIA_GMINA } from "./bochnia-gmina";
import { DABROWA_TARNOWSKA } from "./dabrowa-tarnowska";
import { SZCZUCIN } from "./szczucin";
import { OLESNO } from "./olesno";
import { RADGOSZCZ } from "./radgoszcz";
import { GREBOSZOW } from "./greboszow";
import { MEDRZECHOW } from "./medrzechow";
import { BOLESLAW_DABROWSKI } from "./boleslaw-dabrowski";
import { STARY_SACZ } from "./stary-sacz";
import { PODEGRODZIE } from "./podegrodzie";
import { LACKO } from "./lacko";
import { CHELMIEC } from "./chelmiec";
import { KRYNICA_ZDROJ } from "./krynica-zdroj";
import { MUSZYNA } from "./muszyna";
import { PIWNICZNA_ZDROJ } from "./piwniczna-zdroj";
import { RYTRO } from "./rytro";
import { GRYBOW } from "./grybow";
import { GRYBOW_GMINA } from "./grybow-gmina";
import { KAMIONKA_WIELKA } from "./kamionka-wielka";
import { KORZENNA } from "./korzenna";
import { NAWOJOWA } from "./nawojowa";
import { LABOWA } from "./labowa";
import { GRODEK_NAD_DUNAJCEM } from "./grodek-nad-dunajcem";
import { LOSOSINA_DOLNA } from "./lososina-dolna";
import { NOWY_TARG } from "./nowy-targ";
import { NOWY_TARG_GMINA } from "./nowy-targ-gmina";
import { RABA_WYZNA } from "./raba-wyzna";
import { RABKA_ZDROJ } from "./rabka-zdroj";
import { SZCZAWNICA } from "./szczawnica";
import { KROSCIENKO } from "./kroscienko";
import { CZARNY_DUNAJEC } from "./czarny-dunajec";
import { LAPSZE_NIZNE } from "./lapsze-nizne";
import { SPYTKOWICE_NOWOTARSKIE } from "./spytkowice-nowotarskie";
import { JABLONKA } from "./jablonka";
import { LIPNICA_WIELKA } from "./lipnica-wielka";
import { CZCHOW } from "./czchow";
import { DEBNO } from "./debno";
import { GNOJNIK } from "./gnojnik";
import { IWKOWA } from "./iwkowa";
import { BORZECIN } from "./borzecin";
import { SZCZUROWA } from "./szczurowa";
import { SULKOWICE } from "./sulkowice";
import { SIEPRAW } from "./siepraw";
import { PCIM } from "./pcim";
import { RACIECHOWICE } from "./raciechowice";
import { TOKARNIA } from "./tokarnia";
import { WISNIOWA } from "./wisniowa";
import { LUBIEN } from "./lubien";
import { KLAJ } from "./klaj";
import { BISKUPICE } from "./biskupice";
import { BABICE } from "./babice";
import { NIEDZWIEDZ } from "./niedzwiedz";
import { KOSZYCE } from "./koszyce";
import { NOWE_BRZESKO } from "./nowe-brzesko";
import { PALECZNICA } from "./palecznica";
import { RADZIEMICE } from "./radziemice";

/**
 * Miasta, których treść powstała po pierwszej trójce satelitów Krakowa.
 * Każde ma własny plik, bo `city-content.ts` przy dwunastu kolejnych
 * miastach urósłby do kilku tysięcy linii i przestał być czytelny.
 *
 * Kolejność alfabetyczna, nie „ważnościowa” — o kolejności wyświetlania
 * decydują dane lokalizacji (`seoPriority`), a nie ta tablica.
 */
export const MIASTA_DOPISANE: CityContent[] = [
  ALWERNIA,
  BOCHNIA,
  BRZESKO,
  CHELMEK,
  CHRZANOW,
  DOBRA,
  DRWINIA,
  JODLOWNIK,
  KAMIENICA,
  LAPANOW,
  LASKOWA,
  LIBIAZ,
  LIPNICA_MUROWANA,
  LUKOWICA,
  MSZANA_DOLNA,
  OSWIECIM,
  RZEZAWA,
  SLOPNICE,
  TRZCIANA,
  TRZEBINIA,
  TYMBARK,
  ZEGOCINA,
  KRZESZOWICE,
  MICHALOWICE,
  MOGILANY,
  SWIATNIKI_GORNE,
  ZABIERZOW,
  ZIELONKI,
  DOBCZYCE,
  GDOW,
  LIMANOWA,
  MYSLENICE,
  NOWY_SACZ,
  NOWY_WISNICZ,
  PROSZOWICE,
  TARNOW,
  WOJNICZ,
  ZAKLICZYN,
  OLKUSZ,
  WOLBROM,
  KLUCZE,
  BUKOWNO,
  BOLESLAW,
  TRZYCIAZ,
  WADOWICE,
  ANDRYCHOW,
  KALWARIA_ZEBRZYDOWSKA,
  WIEPRZ,
  TOMICE,
  BRZEZNICA,
  SPYTKOWICE,
  LANCKORONA,
  STRYSZOW,
  MUCHARZ,
  // Fala suska — caly powiat suski
  SUCHA_BESKIDZKA,
  MAKOW_PODHALANSKI,
  JORDANOW,
  JORDANOW_GMINA,
  ZAWOJA,
  STRYSZAWA,
  ZEMBRZYCE,
  BUDZOW,
  BYSTRA_SIDZINA,
  // Fala miechowska — caly powiat miechowski + Slomniki (pow. krakowski)
  MIECHOW,
  CHARSZNICA,
  RACLAWICE,
  KSIAZ_WIELKI,
  KOZLOW,
  GOLCZA,
  SLABOSZOW,
  SLOMNIKI,
  // Fala tatrzanska — caly powiat tatrzanski
  ZAKOPANE,
  KOSCIELISKO,
  PORONIN,
  BUKOWINA_TATRZANSKA,
  BIALY_DUNAJEC,
  // Fala brzeska - domkniecie powiatu brzeskiego
  CZCHOW,
  DEBNO,
  GNOJNIK,
  IWKOWA,
  BORZECIN,
  SZCZUROWA,
  // Fala myslenicka — domkniecie powiatu myslenickiego
  SULKOWICE,
  SIEPRAW,
  PCIM,
  RACIECHOWICE,
  TOKARNIA,
  WISNIOWA,
  LUBIEN,
  // Fala domykajaca luki — Klaj, Biskupice, Babice, Niedzwiedz
  KLAJ,
  BISKUPICE,
  BABICE,
  NIEDZWIEDZ,
  // Fala proszowicka — domkniecie powiatu proszowickiego
  KOSZYCE,
  NOWE_BRZESKO,
  PALECZNICA,
  RADZIEMICE,
  // Fala nowotarska cz.1
  GORLICE,
  GORLICE_GMINA,
  BIECZ,
  BOBOWA,
  USCIE_GORLICKIE,
  LIPINKI,
  LUZNA,
  MOSZCZENICA,
  ROPA,
  SEKOWA,
  SULOSZOWA,
  SKALA,
  JERZMANOWICE_PRZEGINIA,
  WIELKA_WIES,
  LISZKI,
  CZERNICHOW,
  IWANOWICE,
  KOCMYRZOW_LUBORZYCA,
  IGOLOMIA_WAWRZENCZYCE,
  TUCHOW,
  ZABNO,
  CIEZKOWICE,
  WIERZCHOSLAWICE,
  RADLOW,
  WIETRZYCHOWICE,
  RYGLICE,
  GROMNIK,
  RZEPIENNIK_STRZYZEWSKI,
  SZERZYNY,
  TARNOW_GMINA,
  LISIA_GORA,
  SKRZYSZOW,
  PLESNA,
  OSWIECIM_GMINA,
  KETY,
  BRZESZCZE,
  ZATOR,
  OSIEK,
  POLANKA_WIELKA,
  PRZECISZOW,
  KONIUSZA,
  LIMANOWA_GMINA,
  MSZANA_DOLNA_GMINA,
  SZCZAWA,
  BOCHNIA_GMINA,
  DABROWA_TARNOWSKA,
  SZCZUCIN,
  OLESNO,
  RADGOSZCZ,
  GREBOSZOW,
  MEDRZECHOW,
  BOLESLAW_DABROWSKI,
  STARY_SACZ,
  PODEGRODZIE,
  LACKO,
  CHELMIEC,
  KRYNICA_ZDROJ,
  MUSZYNA,
  PIWNICZNA_ZDROJ,
  RYTRO,
  GRYBOW,
  GRYBOW_GMINA,
  KAMIONKA_WIELKA,
  KORZENNA,
  NAWOJOWA,
  LABOWA,
  GRODEK_NAD_DUNAJCEM,
  LOSOSINA_DOLNA,
  NOWY_TARG,
  NOWY_TARG_GMINA,
  RABA_WYZNA,
  RABKA_ZDROJ,
  SZCZAWNICA,
  KROSCIENKO,
  CZARNY_DUNAJEC,
  LAPSZE_NIZNE,
  SPYTKOWICE_NOWOTARSKIE,
  JABLONKA,
  SZAFLARY,
  OCHOTNICA_DOLNA,
  CZORSZTYN,
  LIPNICA_WIELKA,
];
