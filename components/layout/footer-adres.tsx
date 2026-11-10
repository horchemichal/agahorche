"use client";

import { usePathname } from "next/navigation";

/*
 * 10.11.2026 — prośba Agi z 8.11: na stronach miejscowości (/thermomix/<miasto>)
 * nie pokazujemy „Bochnia, województwo małopolskie” — klienci z innych miast
 * odbierali to jako „za daleko”. Adres zostaje na stronach Bochni, na stronach
 * produktowych pod /thermomix/ i wszędzie indziej. Dane strukturalne (schema.org)
 * bez zmian — spójność z wizytówką Google.
 */
const STRONY_PRODUKTOWE = new Set([
  "co-potrafi", "czego-nie-zrobi", "dla-mamy", "dla-poczatkujacych", "dla-rodziny", "funkcje",
  "gotowanie-na-zapas", "jadlospis-na-tydzien", "lidlomix-czy-thermomix", "modele", "mycie-i-obsluga",
  "odstapienie-od-umowy", "porownanie", "tm6", "tm7", "tm7-vs-tm6", "uzywany", "wady-i-zalety", "wymiana",
]);

export function FooterAdres() {
  const sciezka = usePathname() ?? "/";
  const czesci = sciezka.split("/").filter(Boolean);
  const stronaMiejscowosci =
    czesci[0] === "thermomix" &&
    czesci.length >= 2 &&
    !STRONY_PRODUKTOWE.has(czesci[1]) &&
    !czesci[1].startsWith("bochnia");
  if (stronaMiejscowosci) return null;
  return (
    <>
      Bochnia, województwo małopolskie
      <br />
    </>
  );
}
