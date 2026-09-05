#!/usr/bin/env bash
#
# KOPIA ZAPASOWA CAŁEGO SERWISU agahorche.pl
# ==========================================
#
# Uruchamiać NA SERWERZE (konsola internetowa Hostingera):
#
#     bash /root/agahorche/scripts/zrob-kopie.sh
#
# Efekt: /root/kopie/kopia-RRRR-MM-DD-GGMM.tar.gz — jeden plik, z którego da
# się postawić serwis od zera. Do pobrania na komputer przez panel:
# https://agahorche.pl/admin/kopie (tylko po zalogowaniu jako Aga).
#
# DLACZEGO ARCHIWUM POWSTAJE TUTAJ, A NIE W APLIKACJI. Zrzut bazy robi
# `pg_dump`, który jest w kontenerze Postgresa, nie w kontenerze aplikacji.
# Aplikacja dostaje ten katalog podmontowany TYLKO DO ODCZYTU — ma go
# udostępniać, a nie tworzyć w nim pliki.
#
# CO JEST W ŚRODKU I DLACZEGO KAŻDA CZĘŚĆ MUSI TAM BYĆ:
#   baza.sql        — konta klientek, jadłospisy, poradnik, wyzwanie, leady.
#                     Tego nie ma nigdzie indziej.
#   media/          — wszystkie wgrane zdjęcia. Też nigdzie indziej.
#   kod.tar.gz      — źródła strony. Są też na GitHubie, ale kopia ma
#                     działać także wtedy, gdy GitHub jest niedostępny.
#   env-sekrety.txt — .env: klucze podpisujące sesje, hasło do bazy, do
#                     poczty i klucze powiadomień push. BEZ TEGO PLIKU
#                     odtworzenie oznacza wylogowanie wszystkich i utratę
#                     wszystkich zgód na powiadomienia.
#   wersja-kodu.txt — commit, z którego zrobiono kopię.
#
# Z TEGO POWODU ARCHIWUM JEST KLUCZEM DO WSZYSTKIEGO. Nie wysyłać mailem,
# nie kłaść w folderze współdzielonym.

set -euo pipefail

REPO=/root/agahorche
KATALOG=/root/kopie
ILE_TRZYMAC=5

mkdir -p "$KATALOG"

ZNACZNIK=$(date +%Y-%m-%d-%H%M)
ROBOCZY=$(mktemp -d)
trap 'rm -rf "$ROBOCZY"' EXIT
SRODEK="$ROBOCZY/kopia-$ZNACZNIK"
mkdir -p "$SRODEK"

echo "1/5 baza danych…"
docker exec agahorche-postgres pg_dump -U agahorche -d agahorche > "$SRODEK/baza.sql"

echo "2/5 zdjęcia…"
docker cp agahorche:/app/storage/media "$SRODEK/media" > /dev/null

echo "3/5 kod…"
tar czf "$SRODEK/kod.tar.gz" \
  --exclude=.git --exclude=node_modules --exclude=.next --exclude=.env \
  -C "$REPO" .

echo "4/5 ustawienia…"
cp "$REPO/.env" "$SRODEK/env-sekrety.txt"
git -C "$REPO" rev-parse HEAD > "$SRODEK/wersja-kodu.txt" 2>/dev/null || echo "nieznana" > "$SRODEK/wersja-kodu.txt"
date -u +'%Y-%m-%d %H:%M UTC' > "$SRODEK/data-kopii.txt"

echo "5/5 pakowanie…"
tar czf "$KATALOG/kopia-$ZNACZNIK.tar.gz" -C "$ROBOCZY" "kopia-$ZNACZNIK"

# Archiwum czyta aplikacja (użytkownik w kontenerze), ale nikt spoza serwera.
chmod 640 "$KATALOG/kopia-$ZNACZNIK.tar.gz"
chmod 755 "$KATALOG"

# Zostawiamy pięć najnowszych. Bez tego katalog rośnie w nieskończoność,
# a każda kopia to komplet danych osobowych klientek.
ls -1t "$KATALOG"/kopia-*.tar.gz 2>/dev/null | tail -n +$((ILE_TRZYMAC + 1)) | xargs -r rm -f

echo
echo "Gotowe: $KATALOG/kopia-$ZNACZNIK.tar.gz"
ls -lh "$KATALOG"/kopia-*.tar.gz
