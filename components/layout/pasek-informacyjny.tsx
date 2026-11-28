/**
 * Pasek informacyjny nad nagłówkiem — przewijany tekst jak pasek wiadomości
 * w telewizji (28.11.2026, prośba Agi). Jest w layoucie, więc pokazuje się
 * na wszystkich stronach publicznych.
 *
 * Treść zmienia się w jednym miejscu: stała TEKST poniżej. Pusty tekst
 * wyłącza pasek. Sam CSS, bez JavaScriptu; przy „ogranicz ruch” w systemie
 * tekst stoi w miejscu.
 */
const TEKST = "Uwaga: od stycznia cena Thermomix będzie wyższa";

const CSS = `
.pasek-info { overflow: hidden; background: #14532d; color: #fff; }
.pasek-info__tor { display: flex; width: max-content; animation: pasek-info-ruch 28s linear infinite; }
.pasek-info__el { flex: none; padding: 0.45rem 2.5rem; font-size: 0.875rem; font-weight: 600; letter-spacing: 0.01em; white-space: nowrap; }
.pasek-info__el::before { content: "●"; margin-right: 2.5rem; font-size: 0.5rem; vertical-align: middle; opacity: 0.7; }
@keyframes pasek-info-ruch { from { transform: translateX(0); } to { transform: translateX(-50%); } }
@media (prefers-reduced-motion: reduce) {
  .pasek-info__tor { animation: none; width: 100%; justify-content: center; }
  .pasek-info__el[aria-hidden="true"] { display: none; }
  .pasek-info__el::before { content: none; }
}
`;

export function PasekInformacyjny() {
  if (!TEKST) return null;
  // Dwie identyczne połowy toru: przesunięcie o -50% daje pętlę bez skoku.
  const polowa = Array.from({ length: 6 });
  return (
    <div className="pasek-info" data-chrome="marketing" role="note" aria-label="Ważna informacja">
      <style>{CSS}</style>
      <div className="pasek-info__tor">
        {[0, 1].map((p) =>
          polowa.map((_, i) => (
            <span key={`${p}-${i}`} className="pasek-info__el" aria-hidden={p === 0 && i === 0 ? undefined : true}>
              {TEKST}
            </span>
          )),
        )}
      </div>
    </div>
  );
}
