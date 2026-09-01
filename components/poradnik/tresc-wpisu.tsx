import type { ReactNode } from "react";

/**
 * OŚ PLIKU
 * Render treści wpisu poradnika. Obsługuje maleńki podzbiór formatowania:
 * akapity, listy i pogrubienia — i nic więcej.
 *
 * DLACZEGO NIE MARKDOWN Z BIBLIOTEKI. Aga pisze te wpisy w zwykłym polu
 * tekstowym w panelu. Pełny markdown dałby jej trzydzieści konstrukcji,
 * z których użyje trzech, i biblioteka renderująca HTML z tekstu — czyli
 * dodatkowa zależność i dodatkowa powierzchnia na błędy. Tutaj budujemy
 * elementy Reacta, nigdy nie wstawiamy surowego HTML-a, więc nie ma
 * możliwości wstrzyknięcia znaczników przez treść wpisu.
 *
 * SKŁADNIA, KTÓRA DZIAŁA:
 *   pusta linia          — nowy akapit
 *   linia od „- ”        — punkt listy (blok samych takich linii = lista)
 *   **tekst**            — pogrubienie
 *
 * Wszystko inne jest zwykłym tekstem — łącznie z gwiazdką, która nie ma
 * pary. To celowe: lepiej pokazać gwiazdkę niż zjeść pół zdania.
 */

/** Dzieli linię na fragmenty zwykłe i pogrubione po znacznikach **…**. */
function zPogrubieniami(linia: string, klucz: string): ReactNode[] {
  const czesci = linia.split(/\*\*(.+?)\*\*/g);
  return czesci.map((czesc, i) =>
    i % 2 === 1 ? (
      <strong key={`${klucz}-${i}`} className="font-semibold text-neutral-900">
        {czesc}
      </strong>
    ) : (
      <span key={`${klucz}-${i}`}>{czesc}</span>
    ),
  );
}

export function TrescWpisu({ tresc }: { tresc: string }) {
  const bloki = tresc
    .split(/\n\s*\n/)
    .map((b) => b.trim())
    .filter(Boolean);

  return (
    <div className="flex flex-col gap-4 text-[0.975rem] leading-relaxed text-neutral-700">
      {bloki.map((blok, i) => {
        const linie = blok.split("\n").map((l) => l.trim()).filter(Boolean);
        const toLista = linie.length > 0 && linie.every((l) => l.startsWith("- "));

        if (toLista) {
          return (
            <ul key={i} className="flex list-disc flex-col gap-1.5 pl-5">
              {linie.map((l, j) => (
                <li key={j}>{zPogrubieniami(l.slice(2), `${i}-${j}`)}</li>
              ))}
            </ul>
          );
        }

        return <p key={i}>{zPogrubieniami(linie.join(" "), String(i))}</p>;
      })}
    </div>
  );
}
