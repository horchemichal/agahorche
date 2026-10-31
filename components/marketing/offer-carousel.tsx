"use client";

import { Children, useCallback, useEffect, useRef, useState } from "react";

/**
 * Karuzela kart ofert (28.10.2026). Przewija się sama co 4,5 s, w pętli.
 * Zatrzymuje się, gdy klient najedzie myszką, dotknie karuzeli albo przejdzie
 * do niej klawiaturą; po dotknięciu wraca do przewijania po 8 s.
 * Gdy wszystkie karty mieszczą się na ekranie — stoi i nie pokazuje strzałek.
 * Przy włączonym „ograniczeniu ruchu” w systemie nie przewija się sama.
 */
const CO_ILE_MS = 4500;

export function OfferCarousel({ children }: { children: React.ReactNode }) {
  const karty = Children.toArray(children);
  const tor = useRef<HTMLDivElement>(null);
  const [pauza, setPauza] = useState(false);
  const [aktywna, setAktywna] = useState(0);
  const [przewijalna, setPrzewijalna] = useState(false);
  const wznow = useRef<ReturnType<typeof setTimeout> | null>(null);

  const szerokoscKroku = useCallback(() => {
    const el = tor.current;
    const karta = el?.querySelector<HTMLElement>("[data-karta]");
    if (!el || !karta) return 0;
    const odstep = parseFloat(getComputedStyle(el).columnGap || "0") || 0;
    return karta.offsetWidth + odstep;
  }, []);

  const przewin = useCallback(
    (kierunek: 1 | -1) => {
      const el = tor.current;
      if (!el) return;
      const max = el.scrollWidth - el.clientWidth;
      if (kierunek === 1 && el.scrollLeft >= max - 8) el.scrollTo({ left: 0, behavior: "smooth" });
      else if (kierunek === -1 && el.scrollLeft <= 8) el.scrollTo({ left: max, behavior: "smooth" });
      else el.scrollBy({ left: kierunek * szerokoscKroku(), behavior: "smooth" });
    },
    [szerokoscKroku],
  );

  const doKarty = (i: number) => {
    const el = tor.current;
    if (!el) return;
    el.scrollTo({ left: i * szerokoscKroku(), behavior: "smooth" });
  };

  // Czy jest co przewijać (zmienia się z szerokością ekranu).
  useEffect(() => {
    const el = tor.current;
    if (!el) return;
    const sprawdz = () => setPrzewijalna(el.scrollWidth - el.clientWidth > 8);
    sprawdz();
    const ro = new ResizeObserver(sprawdz);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Automatyczne przewijanie.
  useEffect(() => {
    if (pauza || !przewijalna) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => {
      if (document.visibilityState === "visible") przewin(1);
    }, CO_ILE_MS);
    return () => clearInterval(t);
  }, [pauza, przewijalna, przewin]);

  useEffect(() => () => {
    if (wznow.current) clearTimeout(wznow.current);
  }, []);

  const naDotyk = () => {
    setPauza(true);
    if (wznow.current) clearTimeout(wznow.current);
    wznow.current = setTimeout(() => setPauza(false), 8000);
  };

  const naPrzewiniecie = () => {
    const el = tor.current;
    const krok = szerokoscKroku();
    if (!el || !krok) return;
    const max = el.scrollWidth - el.clientWidth;
    setAktywna(el.scrollLeft >= max - 8 ? karty.length - 1 : Math.round(el.scrollLeft / krok));
  };

  const strzalka =
    "absolute top-[38%] z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-neutral-0/95 text-neutral-900 shadow-[var(--shadow-card)] transition-colors hover:border-brand-500 hover:text-brand-700 sm:flex";

  return (
    <div
      className="relative"
      role="region"
      aria-roledescription="karuzela"
      aria-label="Aktualne oferty Thermomix"
      onMouseEnter={() => setPauza(true)}
      onMouseLeave={() => setPauza(false)}
      onTouchStart={naDotyk}
      onFocusCapture={() => setPauza(true)}
      onBlurCapture={() => setPauza(false)}
    >
      <div
        ref={tor}
        onScroll={naPrzewiniecie}
        className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-4 pb-2 sm:mx-0 sm:gap-5 sm:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {karty.map((karta, i) => (
          <div
            key={i}
            data-karta
            aria-label={"Oferta " + (i + 1) + " z " + karty.length}
            className="w-[82%] flex-none snap-start sm:w-[calc((100%_-_1.25rem)/2)] lg:w-[calc((100%_-_2.5rem)/3)]"
          >
            {karta}
          </div>
        ))}
      </div>

      {przewijalna && (
        <>
          <button type="button" onClick={() => przewin(-1)} aria-label="Poprzednia oferta" className={strzalka + " -left-3 lg:-left-5"}>
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button type="button" onClick={() => przewin(1)} aria-label="Następna oferta" className={strzalka + " -right-3 lg:-right-5"}>
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <div className="mt-5 flex justify-center gap-2">
            {karty.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => doKarty(i)}
                aria-label={"Pokaż ofertę " + (i + 1)}
                aria-current={i === aktywna}
                className={
                  "h-2.5 rounded-full transition-all " +
                  (i === aktywna ? "w-7 bg-brand-600" : "w-2.5 bg-neutral-300 hover:bg-neutral-400")
                }
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
