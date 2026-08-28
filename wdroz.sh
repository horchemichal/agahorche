#!/usr/bin/env bash
#
# Wdrożenie agahorche.pl — jedna komenda zamiast ręcznego przenoszenia plików.
#
# Użycie na serwerze:
#   bash /root/agahorche/wdroz.sh
#
# Co robi po kolei: pobiera zmiany z GitHuba, buduje obraz, restartuje
# kontener i sprawdza, czy strona faktycznie wstała. Jeśli którykolwiek
# krok się wywali, skrypt przerywa (set -e) i nie restartuje kontenera —
# lepiej zostać na działającej wersji niż wdrożyć zepsutą.
#
# UWAGA: `git pull --ff-only` celowo NIE robi merge'a. Jeśli ktoś zmienił
# pliki bezpośrednio na serwerze, pull się zatrzyma zamiast po cichu
# nadpisać albo zrobić commit scalający. Wtedy trzeba zdecydować ręcznie.

set -euo pipefail

KATALOG=/root/agahorche
KLUCZ=/root/.ssh/agahorche_deploy

cd "$KATALOG"

echo "==> 1/4 pobieram zmiany z GitHuba"
GIT_SSH_COMMAND="ssh -i $KLUCZ" git pull --ff-only origin main

echo "==> 2/4 buduję obraz"
docker compose build agahorche

echo "==> 3/4 restartuję kontener"
docker compose up -d agahorche

echo "==> 4/4 czekam na start i sprawdzam, czy strona odpowiada"
sleep 10

bledy=0
for adres in / /thermomix/bochnia /thermomix/krakow /thermomix/rzezawa; do
  kod=$(curl -s -o /dev/null -w '%{http_code}' --max-time 20 "https://agahorche.pl${adres}" || echo "000")
  if [ "$kod" = "200" ]; then
    printf '    OK   %-28s %s\n' "$adres" "$kod"
  else
    printf '    BŁĄD %-28s %s\n' "$adres" "$kod"
    bledy=$((bledy + 1))
  fi
done

if [ "$bledy" -gt 0 ]; then
  echo
  echo "!! $bledy adres(ów) nie odpowiada poprawnie."
  echo "!! Sprawdź logi:  docker logs agahorche --tail 40"
  exit 1
fi

echo
echo "==> gotowe. Wdrożono commit: $(git rev-parse --short HEAD)"
