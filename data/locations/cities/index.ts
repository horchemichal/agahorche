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

// ——— Województwo śląskie (wrzesień 2026, pierwsza fala) ———
import { KATOWICE } from "./katowice";
import { SOSNOWIEC } from "./sosnowiec";
import { GLIWICE } from "./gliwice";
import { ZABRZE } from "./zabrze";
import { TYCHY } from "./tychy";
import { CZESTOCHOWA } from "./czestochowa";
import { BIELSKO_BIALA } from "./bielsko-biala";
import { RYBNIK } from "./rybnik";
import { BYTOM } from "./bytom";
import { CHORZOW } from "./chorzow";
import { DABROWA_GORNICZA } from "./dabrowa-gornicza";
import { MYSLOWICE } from "./myslowice";
import { RUDA_SLASKA } from "./ruda-slaska";
import { SIEMIANOWICE_SLASKIE } from "./siemianowice-slaskie";
import { BEDZIN } from "./bedzin";
import { SWIETOCHLOWICE } from "./swietochlowice";
import { TARNOWSKIE_GORY } from "./tarnowskie-gory";
import { PIEKARY_SLASKIE } from "./piekary-slaskie";
import { CZELADZ } from "./czeladz";
import { CIESZYN } from "./cieszyn";
import { ZYWIEC } from "./zywiec";
import { PSZCZYNA } from "./pszczyna";
import { JASTRZEBIE_ZDROJ } from "./jastrzebie-zdroj";
import { ZORY } from "./zory";
import { MIKOLOW } from "./mikolow";
import { RACIBORZ } from "./raciborz";
import { KNUROW } from "./knurow";
import { WODZISLAW_SLASKI } from "./wodzislaw-slaski";
import { ZAWIERCIE } from "./zawiercie";
import { LUBLINIEC } from "./lubliniec";
import { CZECHOWICE_DZIEDZICE } from "./czechowice-dziedzice";
import { MYSZKOW } from "./myszkow";
// ——— Województwo podkarpackie (wrzesień 2026, pierwsza fala) ———
import { RZESZOW } from "./rzeszow";
import { PRZEMYSL } from "./przemysl";
import { STALOWA_WOLA } from "./stalowa-wola";
import { KROSNO } from "./krosno";
import { MIELEC } from "./mielec";
import { SANOK } from "./sanok";
import { DEBICA } from "./debica";
import { JASLO } from "./jaslo";
import { JAROSLAW } from "./jaroslaw";
import { TARNOBRZEG } from "./tarnobrzeg";
import { LANCUT } from "./lancut";
import { NISKO } from "./nisko";
import { LUBACZOW } from "./lubaczow";
import { LEZAJSK } from "./lezajsk";
import { ROPCZYCE } from "./ropczyce";
import { PRZEWORSK } from "./przeworsk";
import { USTRZYKI_DOLNE } from "./ustrzyki-dolne";
import { KOLBUSZOWA } from "./kolbuszowa";
import { NOWA_DEBA } from "./nowa-deba";
import { BRZOZOW } from "./brzozow";
import { STRZYZOW } from "./strzyzow";
import { RYMANOW } from "./rymanow";
import { RUDNIK_NAD_SANEM } from "./rudnik-nad-sanem";
import { LESKO } from "./lesko";
import { BOGUCHWALA } from "./boguchwala";
import { GLOGOW_MALOPOLSKI } from "./glogow-malopolski";
import { KIELCE } from "./kielce";
import { OSTROWIEC_SWIETOKRZYSKI } from "./ostrowiec-swietokrzyski";
import { STARACHOWICE } from "./starachowice";
import { SKARZYSKO_KAMIENNA } from "./skarzysko-kamienna";
import { SANDOMIERZ } from "./sandomierz";
import { BUSKO_ZDROJ } from "./busko-zdroj";
import { JEDRZEJOW } from "./jedrzejow";
import { CMIELOW } from "./cmielow";
import { WACHOCK } from "./wachock";
import { PINCZOW } from "./pinczow";
import { KAZIMIERZA_WIELKA } from "./kazimierza-wielka";
import { CHECINY } from "./checiny";
import { SZYDLOW } from "./szydlow";
import { POLANIEC } from "./polaniec";
import { CHMIELNIK } from "./chmielnik";
import { NOWA_SLUPIA } from "./nowa-slupia";
import { WISLICA } from "./wislica";
import { OPATOW } from "./opatow";
import { KONSKIE } from "./konskie";
import { LUBLIN } from "./lublin";
import { ZAMOSC } from "./zamosc";
import { CHELM } from "./chelm";
import { BIALA_PODLASKA } from "./biala-podlaska";
import { PULAWY } from "./pulawy";
import { KRASNIK } from "./krasnik";
import { SZCZEBRZESZYN } from "./szczebrzeszyn";
import { KAZIMIERZ_DOLNY } from "./kazimierz-dolny";
import { BILGORAJ } from "./bilgoraj";
import { KRASNYSTAW } from "./krasnystaw";
import { WLODAWA } from "./wlodawa";
import { SWIDNIK } from "./swidnik";
import { LECZNA } from "./leczna";
import { TERESPOL } from "./terespol";
import { OPOLE } from "./opole";
import { KEDZIERZYN_KOZLE } from "./kedzierzyn-kozle";
import { NYSA } from "./nysa";
import { GOGOLIN } from "./gogolin";
import { OZIMEK } from "./ozimek";
import { DOBRODZIEN } from "./dobrodzien";
import { GLUBCZYCE } from "./glubczyce";
import { KLUCZBORK } from "./kluczbork";
import { PRUDNIK } from "./prudnik";
import { NAMYSLOW } from "./namyslow";
import { STRZELCE_OPOLSKIE } from "./strzelce-opolskie";
import { LODZ } from "./lodz";
import { BELCHATOW } from "./belchatow";
import { KUTNO } from "./kutno";
import { LOWICZ } from "./lowicz";
import { PIOTRKOW_TRYBUNALSKI } from "./piotrkow-trybunalski";
import { BRZEZINY } from "./brzeziny";
import { RZGOW } from "./rzgow";
import { TOMASZOW_MAZOWIECKI } from "./tomaszow-mazowiecki";
import { SKIERNIEWICE } from "./skierniewice";
import { ZDUNSKA_WOLA } from "./zdunska-wola";
import { RADOMSKO } from "./radomsko";
import { PABIANICE } from "./pabianice";
import { ZGIERZ } from "./zgierz";
import { OPOCZNO } from "./opoczno";
import { WALBRZYCH } from "./walbrzych";
import { LEGNICA } from "./legnica";
import { JELENIA_GORA } from "./jelenia-gora";
import { LUBIN } from "./lubin";
import { GLOGOW } from "./glogow";
import { SWIDNICA } from "./swidnica";
import { BOLESLAWIEC } from "./boleslawiec";
import { KLODZKO } from "./klodzko";
import { ZGORZELEC } from "./zgorzelec";
import { KARPACZ } from "./karpacz";
import { BYSTRZYCA_KLODZKA } from "./bystrzyca-klodzka";
import { ZABKOWICE_SLASKIE } from "./zabkowice-slaskie";
import { KALISZ } from "./kalisz";
import { KONIN } from "./konin";
import { PILA } from "./pila";
import { OSTROW_WIELKOPOLSKI } from "./ostrow-wielkopolski";
import { GNIEZNO } from "./gniezno";
import { LESZNO } from "./leszno";
import { WRZESNIA } from "./wrzesnia";
import { TUREK } from "./turek";
import { JAROCIN } from "./jarocin";
import { WAGROWIEC } from "./wagrowiec";
import { GOSTYN } from "./gostyn";
import { KORNIK } from "./kornik";
import { PLOCK } from "./plock";
import { SIEDLCE } from "./siedlce";
import { PRUSZKOW } from "./pruszkow";
import { LEGIONOWO } from "./legionowo";
import { PIASECZNO } from "./piaseczno";
import { CIECHANOW } from "./ciechanow";
import { MLAWA } from "./mlawa";
import { OSTROLEKA } from "./ostroleka";
import { SLUPSK } from "./slupsk";
import { SOPOT } from "./sopot";
import { CHOJNICE } from "./chojnice";
import { MALBORK } from "./malbork";
import { BYTOW } from "./bytow";
import { KARTUZY } from "./kartuzy";
import { WEJHEROWO } from "./wejherowo";
import { WLOCLAWEK } from "./wloclawek";
import { GRUDZIADZ } from "./grudziadz";
import { INOWROCLAW } from "./inowroclaw";
import { SWIECIE } from "./swiecie";
import { KOSZALIN } from "./koszalin";
import { SZCZECINEK } from "./szczecinek";
import { KOLOBRZEG } from "./kolobrzeg";
import { SWINOUJSCIE } from "./swinoujscie";
import { PYRZYCE } from "./pyrzyce";
import { ELBLAG } from "./elblag";
import { MIKOLAJKI } from "./mikolajki";
import { GIZYCKO } from "./gizycko";
import { OLSZTYNEK } from "./olsztynek";
import { SUWALKI } from "./suwalki";
import { BIELSK_PODLASKI } from "./bielsk-podlaski";
import { AUGUSTOW } from "./augustow";
import { GORZOW_WIELKOPOLSKI } from "./gorzow-wielkopolski";
import { SULECHOW } from "./sulechow";
import { MIEDZYRZECZ } from "./miedzyrzecz";
import { WARSZAWA } from "./warszawa";
import { WROCLAW } from "./wroclaw";
import { POZNAN } from "./poznan";
import { GDANSK } from "./gdansk";
import { SZCZECIN } from "./szczecin";
import { BYDGOSZCZ } from "./bydgoszcz";
import { BIALYSTOK } from "./bialystok";
import { GDYNIA } from "./gdynia";
import { RADOM } from "./radom";
import { TORUN } from "./torun";
import { OLSZTYN } from "./olsztyn";
import { ZIELONA_GORA } from "./zielona-gora";
import { STARGARD } from "./stargard";
import { LOMZA } from "./lomza";
import { ELK } from "./elk";
import { TCZEW } from "./tczew";
import { RUMIA } from "./rumia";
import { STAROGARD_GDANSKI } from "./starogard-gdanski";
import { OTWOCK } from "./otwock";
import { SIERADZ } from "./sieradz";
import { ZABKI } from "./zabki";
import { MARKI } from "./marki";
import { MINSK_MAZOWIECKI } from "./minsk-mazowiecki";
import { ZYRARDOW } from "./zyrardow";
import { NOWA_SOL } from "./nowa-sol";
import { WOLOMIN } from "./wolomin";
import { KWIDZYN } from "./kwidzyn";
import { ZARY } from "./zary";
import { SOCHACZEW } from "./sochaczew";
import { OLESNICA } from "./olesnica";
import { BRZEG } from "./brzeg";
import { LEBORK } from "./lebork";
import { DZIERZONIOW } from "./dzierzoniow";
import { OLAWA } from "./olawa";
import { OSTRODA } from "./ostroda";
import { ILAWA } from "./ilawa";
import { SWARZEDZ } from "./swarzedz";
import { GRODZISK_MAZOWIECKI } from "./grodzisk-mazowiecki";
import { PRUSZCZ_GDANSKI } from "./pruszcz-gdanski";
import { LUBON } from "./lubon";
import { POLICE } from "./police";
import { BIELAWA } from "./bielawa";
import { LUKOW } from "./lukow";
import { SREM } from "./srem";
import { KROTOSZYN } from "./krotoszyn";
import { BRODNICA } from "./brodnica";
import { NOWY_DWOR_MAZOWIECKI } from "./nowy-dwor-mazowiecki";
import { WYSZKOW } from "./wyszkow";
import { REDA } from "./reda";
import { KETRZYN } from "./ketrzyn";
import { ZAGAN } from "./zagan";
import { KOBYLKA } from "./kobylka";
import { KOSCIAN } from "./koscian";
import { WALCZ } from "./walcz";
import { PIASTOW } from "./piastow";
import { KOSCIERZYNA } from "./koscierzyna";
import { SZCZYTNO } from "./szczytno";
import { BARTOSZYCE } from "./bartoszyce";
import { BIALOGARD } from "./bialogard";
import { SWIEBODZICE } from "./swiebodzice";
import { JAWOR } from "./jawor";
import { POLKOWICE } from "./polkowice";
import { OSTROW_MAZOWIECKA } from "./ostrow-mazowiecka";
import { PLONSK } from "./plonsk";
import { KOLO } from "./kolo";
import { SRODA_WIELKOPOLSKA } from "./sroda-wielkopolska";
import { GOLENIOW } from "./goleniow";
import { WIELUN } from "./wielun";
import { SWIEBODZIN } from "./swiebodzin";
import { NOWA_RUDA } from "./nowa-ruda";
import { LUBAN } from "./luban";
import { ALEKSANDROW_LODZKI } from "./aleksandrow-lodzki";
import { LUBARTOW } from "./lubartow";
import { MRAGOWO } from "./mragowo";
import { DZIALDOWO } from "./dzialdowo";
import { ZAMBROW } from "./zambrow";
import { HAJNOWKA } from "./hajnowka";
import { SULEJOWEK } from "./sulejowek";
import { JOZEFOW_MAZOWIECKI } from "./jozefow-mazowiecki";
import { RAWICZ } from "./rawicz";
import { GRYFINO } from "./gryfino";
import { GRAJEWO } from "./grajewo";
import { HRUBIESZOW } from "./hrubieszow";
import { DEBLIN } from "./deblin";
import { RADZYN_PODLASKI } from "./radzyn-podlaski";
import { TOMASZOW_LUBELSKI } from "./tomaszow-lubelski";
import { JANOW_LUBELSKI } from "./janow-lubelski";
import { MIEDZYRZEC_PODLASKI } from "./miedzyrzec-podlaski";
import { PONIATOWA } from "./poniatowa";
import { RYKI } from "./ryki";
import { PARCZEW } from "./parczew";
import { OPOLE_LUBELSKIE } from "./opole-lubelskie";
import { BELZYCE } from "./belzyce";
import { BYCHAWA } from "./bychawa";
import { ZWIERZYNIEC } from "./zwierzyniec";
import { REJOWIEC_FABRYCZNY } from "./rejowiec-fabryczny";
import { KRASNOBROD } from "./krasnobrod";
import { TARNOGROD } from "./tarnogrod";
import { ANNOPOL } from "./annopol";
import { PIASKI } from "./piaski";
import { STOCZEK_LUKOWSKI } from "./stoczek-lukowski";
import { OSTROW_LUBELSKI } from "./ostrow-lubelski";
import { URZEDOW } from "./urzedow";
import { JOZEFOW_NAD_WISLA } from "./jozefow-nad-wisla";
import { KOCK } from "./kock";
import { NALECZOW } from "./naleczow";
import { FRAMPOL } from "./frampol";
import { MODLIBORZYCE } from "./modliborzyce";
import { JOZEFOW } from "./jozefow";
import { SEDZISZOW_MALOPOLSKI } from "./sedziszow-malopolski";
import { NOWA_SARZYNA } from "./nowa-sarzyna";
import { DYNOW } from "./dynow";
import { RADYMNO } from "./radymno";
import { ZAGORZ } from "./zagorz";
import { PILZNO } from "./pilzno";
import { OLESZYCE } from "./oleszyce";
import { DUKLA } from "./dukla";
import { SOKOLOW_MALOPOLSKI } from "./sokolow-malopolski";
import { CIESZANOW } from "./cieszanow";
import { STASZOW } from "./staszow";
import { WLOSZCZOWA } from "./wloszczowa";
import { SUCHEDNIOW } from "./suchedniow";
import { SEDZISZOW } from "./sedziszow";
import { STAPORKOW } from "./staporkow";
import { OZAROW } from "./ozarow";
import { MALOGOSZCZ } from "./malogoszcz";
import { KUNOW } from "./kunow";
import { KOPRZYWNICA } from "./koprzywnica";
import { KLIMONTOW } from "./klimontow";
import { DALESZYCE } from "./daleszyce";
import { BODZENTYN } from "./bodzentyn";
import { ZAWICHOST } from "./zawichost";
import { STOPNICA } from "./stopnica";
import { MORAWICA } from "./morawica";
import { LAGOW } from "./lagow";
import { SKALBMIERZ } from "./skalbmierz";
import { PIERZCHNICA } from "./pierzchnica";
import { NOWY_KORCZYN } from "./nowy-korczyn";
import { DZIALOSZYCE } from "./dzialoszyce";
import { KRAPKOWICE } from "./krapkowice";
import { GLUCHOLAZY } from "./glucholazy";
import { ZDZIESZOWICE } from "./zdzieszowice";
import { GRODKOW } from "./grodkow";
import { PACZKOW } from "./paczkow";
import { PRASZKA } from "./praszka";
import { ZAWADZKIE } from "./zawadzkie";
import { OTMUCHOW } from "./otmuchow";
import { NIEMODLIN } from "./niemodlin";
import { KIETRZ } from "./kietrz";
import { WOLCZYN } from "./wolczyn";
import { LEWIN_BRZESKI } from "./lewin-brzeski";
import { GLOGOWEK } from "./glogowek";
import { TULOWICE } from "./tulowice";
import { BYCZYNA } from "./byczyna";
import { KOLONOWSKIE } from "./kolonowskie";
import { BABOROW } from "./baborow";
import { PROSZKOW } from "./proszkow";
import { LESNICA } from "./lesnica";
import { BIALA_OPOLSKA } from "./biala-opolska";
import { KORFANTOW } from "./korfantow";
import { UJAZD } from "./ujazd";


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

  // ——— Województwo śląskie ———
  KATOWICE,
  SOSNOWIEC,
  GLIWICE,
  ZABRZE,
  TYCHY,
  CZESTOCHOWA,
  BIELSKO_BIALA,
  RYBNIK,
  BYTOM,
  CHORZOW,
  DABROWA_GORNICZA,
  MYSLOWICE,
  RUDA_SLASKA,
  SIEMIANOWICE_SLASKIE,
  BEDZIN,
  SWIETOCHLOWICE,
  TARNOWSKIE_GORY,
  PIEKARY_SLASKIE,
  CZELADZ,
  CIESZYN,
  ZYWIEC,
  PSZCZYNA,
  JASTRZEBIE_ZDROJ,
  ZORY,
  MIKOLOW,
  RACIBORZ,
  KNUROW,
  WODZISLAW_SLASKI,
  ZAWIERCIE,
  LUBLINIEC,
  CZECHOWICE_DZIEDZICE,
  MYSZKOW,

  // ——— Województwo podkarpackie ———
  RZESZOW,
  PRZEMYSL,
  STALOWA_WOLA,
  KROSNO,
  MIELEC,
  SANOK,
  DEBICA,
  JASLO,
  JAROSLAW,
  TARNOBRZEG,
  LANCUT,
  NISKO,
  LUBACZOW,
  LEZAJSK,
  ROPCZYCE,
  PRZEWORSK,
  USTRZYKI_DOLNE,
  KOLBUSZOWA,
  NOWA_DEBA,
  BRZOZOW,
  STRZYZOW,
  RYMANOW,
  RUDNIK_NAD_SANEM,
  LESKO,
  BOGUCHWALA,
  GLOGOW_MALOPOLSKI,

  // ——— Województwo świętokrzyskie ———
  KIELCE,
  OSTROWIEC_SWIETOKRZYSKI,
  STARACHOWICE,
  SKARZYSKO_KAMIENNA,
  SANDOMIERZ,
  BUSKO_ZDROJ,
  JEDRZEJOW,
  CMIELOW,
  WACHOCK,
  PINCZOW,
  KAZIMIERZA_WIELKA,
  CHECINY,
  SZYDLOW,
  POLANIEC,
  CHMIELNIK,
  NOWA_SLUPIA,
  WISLICA,
  OPATOW,
  KONSKIE,

  // ——— Województwo lubelskie ———
  LUBLIN,
  ZAMOSC,
  CHELM,
  BIALA_PODLASKA,
  PULAWY,
  KRASNIK,
  SZCZEBRZESZYN,
  KAZIMIERZ_DOLNY,
  BILGORAJ,
  KRASNYSTAW,
  WLODAWA,
  SWIDNIK,
  LECZNA,
  TERESPOL,

  // ——— Województwo opolskie ———
  OPOLE,
  KEDZIERZYN_KOZLE,
  NYSA,
  GOGOLIN,
  OZIMEK,
  DOBRODZIEN,
  GLUBCZYCE,
  KLUCZBORK,
  PRUDNIK,
  NAMYSLOW,
  STRZELCE_OPOLSKIE,

  // ——— Województwo łódzkie ———
  LODZ,
  BELCHATOW,
  KUTNO,
  LOWICZ,
  PIOTRKOW_TRYBUNALSKI,
  BRZEZINY,
  RZGOW,
  TOMASZOW_MAZOWIECKI,
  SKIERNIEWICE,
  ZDUNSKA_WOLA,
  RADOMSKO,
  PABIANICE,
  ZGIERZ,
  OPOCZNO,

  // ——— Województwo dolnośląskie ———
  WALBRZYCH,
  LEGNICA,
  JELENIA_GORA,
  LUBIN,
  GLOGOW,
  SWIDNICA,
  BOLESLAWIEC,
  KLODZKO,
  ZGORZELEC,
  KARPACZ,
  BYSTRZYCA_KLODZKA,
  ZABKOWICE_SLASKIE,

  // ——— Województwo wielkopolskie ———
  KALISZ,
  KONIN,
  PILA,
  OSTROW_WIELKOPOLSKI,
  GNIEZNO,
  LESZNO,
  WRZESNIA,
  TUREK,
  JAROCIN,
  WAGROWIEC,
  GOSTYN,
  KORNIK,

  // ——— Województwo mazowieckie ———
  PLOCK,
  SIEDLCE,
  PRUSZKOW,
  LEGIONOWO,
  PIASECZNO,
  CIECHANOW,
  MLAWA,
  OSTROLEKA,

  // ——— Województwo pomorskie ———
  SLUPSK,
  SOPOT,
  CHOJNICE,
  MALBORK,
  BYTOW,
  KARTUZY,
  WEJHEROWO,

  // ——— Województwo kujawsko-pomorskie ———
  WLOCLAWEK,
  GRUDZIADZ,
  INOWROCLAW,
  SWIECIE,

  // ——— Województwo zachodniopomorskie ———
  KOSZALIN,
  SZCZECINEK,
  KOLOBRZEG,
  SWINOUJSCIE,
  PYRZYCE,

  // ——— Województwo warmińsko-mazurskie ———
  ELBLAG,
  MIKOLAJKI,
  GIZYCKO,
  OLSZTYNEK,

  // ——— Województwo podlaskie ———
  SUWALKI,
  BIELSK_PODLASKI,
  AUGUSTOW,

  // ——— Województwo lubuskie ———
  GORZOW_WIELKOPOLSKI,
  SULECHOW,
  MIEDZYRZECZ,

  // ——— Największe miasta kraju ———
  WARSZAWA,
  WROCLAW,
  POZNAN,
  GDANSK,
  SZCZECIN,
  BYDGOSZCZ,
  BIALYSTOK,
  GDYNIA,
  RADOM,
  TORUN,
  OLSZTYN,
  ZIELONA_GORA,

  // ——— Fala miast 45-70 tys. ———
  STARGARD,
  LOMZA,
  ELK,
  TCZEW,
  RUMIA,
  STAROGARD_GDANSKI,
  OTWOCK,
  SIERADZ,
  ZABKI,

  // ——— Fala miast 36-40 tys. ———
  MARKI,
  MINSK_MAZOWIECKI,
  ZYRARDOW,
  NOWA_SOL,
  WOLOMIN,
  KWIDZYN,

  // ——— Fala miast 34-37 tys. ———
  ZARY,
  SOCHACZEW,
  OLESNICA,
  BRZEG,
  LEBORK,

  // ——— Fala miast 31-33 tys. ———
  DZIERZONIOW,
  OLAWA,
  OSTRODA,
  ILAWA,
  SWARZEDZ,

  // ——— Fala miast 29-32 tys. ———
  GRODZISK_MAZOWIECKI,
  PRUSZCZ_GDANSKI,
  LUBON,
  POLICE,
  BIELAWA,

  // ——— Fala miast 27-29 tys. ———
  LUKOW,
  SREM,
  KROTOSZYN,
  BRODNICA,
  NOWY_DWOR_MAZOWIECKI,

  // ——— Fala miast 25-27 tys. ———
  WYSZKOW,
  REDA,
  KETRZYN,
  ZAGAN,
  KOBYLKA,

  // ——— Fala miast 23-24 tys. ———
  KOSCIAN,
  WALCZ,
  PIASTOW,
  KOSCIERZYNA,
  SZCZYTNO,

  // ——— Fala miast 22-23 tys. (research: podagenci, źródła w notatce) ———
  BARTOSZYCE,
  BIALOGARD,
  SWIEBODZICE,
  JAWOR,
  POLKOWICE,
  OSTROW_MAZOWIECKA,
  PLONSK,
  KOLO,
  SRODA_WIELKOPOLSKA,
  GOLENIOW,

  // ——— Fala miast 20-24 tys. (research: podagenci, źródła w notatce) ———
  WIELUN,
  SWIEBODZIN,
  NOWA_RUDA,
  LUBAN,
  ALEKSANDROW_LODZKI,
  LUBARTOW,
  MRAGOWO,
  DZIALDOWO,
  ZAMBROW,
  HAJNOWKA,
  SULEJOWEK,
  JOZEFOW_MAZOWIECKI,
  RAWICZ,
  GRYFINO,
  GRAJEWO,
  HRUBIESZOW,
  DEBLIN,
  RADZYN_PODLASKI,
  TOMASZOW_LUBELSKI,
  JANOW_LUBELSKI,
  MIEDZYRZEC_PODLASKI,
  PONIATOWA,
  RYKI,
  PARCZEW,
  OPOLE_LUBELSKIE,
  BELZYCE,
  BYCHAWA,
  ZWIERZYNIEC,
  REJOWIEC_FABRYCZNY,
  KRASNOBROD,
  TARNOGROD,
  ANNOPOL,
  PIASKI,
  STOCZEK_LUKOWSKI,
  OSTROW_LUBELSKI,
  URZEDOW,
  JOZEFOW_NAD_WISLA,
  KOCK,
  NALECZOW,
  FRAMPOL,
  MODLIBORZYCE,
  JOZEFOW,
  SEDZISZOW_MALOPOLSKI,
  NOWA_SARZYNA,
  DYNOW,
  RADYMNO,
  ZAGORZ,
  PILZNO,
  OLESZYCE,
  DUKLA,
  SOKOLOW_MALOPOLSKI,
  CIESZANOW,
  STASZOW,
  WLOSZCZOWA,
  SUCHEDNIOW,
  SEDZISZOW,
  STAPORKOW,
  OZAROW,
  MALOGOSZCZ,
  KUNOW,
  KOPRZYWNICA,
  KLIMONTOW,
  DALESZYCE,
  BODZENTYN,
  ZAWICHOST,
  STOPNICA,
  MORAWICA,
  LAGOW,
  SKALBMIERZ,
  PIERZCHNICA,
  NOWY_KORCZYN,
  DZIALOSZYCE,
  KRAPKOWICE,
  GLUCHOLAZY,
  ZDZIESZOWICE,
  GRODKOW,
  PACZKOW,
  PRASZKA,
  ZAWADZKIE,
  OTMUCHOW,
  NIEMODLIN,
  KIETRZ,
  WOLCZYN,
  LEWIN_BRZESKI,
  GLOGOWEK,
  TULOWICE,
  BYCZYNA,
  KOLONOWSKIE,
  BABOROW,
  PROSZKOW,
  LESNICA,
  BIALA_OPOLSKA,
  KORFANTOW,
  UJAZD,
];
