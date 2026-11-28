"use client";

import { useEffect, useRef } from "react";

/**
 * Druga, dekoracyjna kopia rzędu karuzeli (potrzebna tylko do płynnej pętli
 * animacji). 24.11.2026: zamiast renderować ją na serwerze — co dublowało
 * w HTML-u każdą opinię i na ~1000 stronach miast dawało setki jednakowych
 * słów — kopiujemy DOM pierwszej grupy po załadowaniu strony. Klient widzi
 * dokładnie tę samą karuzelę co wcześniej; w kodzie strony każda opinia jest
 * raz. Element jest aria-hidden, tak jak poprzednio.
 */
export function KopiaGrupy({ className }: { className: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    const wzor = el?.previousElementSibling;
    if (el && wzor) {
      el.innerHTML = wzor.innerHTML;
      // Dopiero teraz wolno ruszyć animacją — patrz MARQUEE_CSS.
      el.parentElement?.setAttribute("data-gotowe", "1");
    }
  }, []);
  return <div ref={ref} className={className} aria-hidden="true" />;
}
