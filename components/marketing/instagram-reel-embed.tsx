"use client";

import { useEffect, useRef, useState } from "react";
import { InstagramIcon } from "@/components/marketing/icons";

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } };
  }
}

/**
 * Reelsy z Instagrama — wersja „lekka” (23.10.2026).
 *
 * Wcześniej każda karta od razu ładowała embed.js Instagrama i trzy ramki
 * z odtwarzaczem (kilka MB, kilkanaście zapytań) — sekcja wczytywała się
 * kilka sekund. Teraz karta to sama okładka (webp z naszego serwera,
 * /api/instagram/okladka/[kod], ~30–60 kB) z przyciskiem „play”.
 * Prawdziwy odtwarzacz Instagrama ładuje się dopiero po kliknięciu.
 * Gdy okładki nie da się pobrać, karta pokazuje zielone tło z ikoną.
 */

let scriptLoadingPromise: Promise<void> | null = null;

function loadInstagramEmbedScript(): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();
  if (window.instgrm) return Promise.resolve();
  if (scriptLoadingPromise) return scriptLoadingPromise;
  scriptLoadingPromise = new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    script.onload = () => resolve();
    document.body.appendChild(script);
  });
  return scriptLoadingPromise;
}

function kodZUrl(url: string): string | null {
  const m = url.match(/instagram\.com\/(?:[^/?#]+\/)?(?:p|reel|reels|tv)\/([A-Za-z0-9_-]+)/);
  return m ? m[1] : null;
}

function Odtwarzacz({ url }: { url: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    loadInstagramEmbedScript().then(() => window.instgrm?.Embeds.process());
  }, []);
  return (
    <div
      ref={ref}
      className="flex min-h-[480px] justify-center overflow-hidden rounded-2xl border border-border bg-neutral-0 p-2 shadow-[var(--shadow-card)]"
    >
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={url}
        data-instgrm-version="14"
        style={{ width: "100%", margin: 0 }}
      />
    </div>
  );
}

function ReelKarta({ url }: { url: string }) {
  const kod = kodZUrl(url);
  const [graj, setGraj] = useState(false);
  const [bezOkladki, setBezOkladki] = useState(!kod);

  if (graj) return <Odtwarzacz url={url} />;

  return (
    <div className="group overflow-hidden rounded-2xl border border-border bg-neutral-0 shadow-[var(--shadow-card)]">
      <button
        type="button"
        onClick={() => setGraj(true)}
        aria-label="Odtwórz film z Instagrama"
        className="relative block aspect-[4/5] w-full cursor-pointer overflow-hidden bg-gradient-to-br from-brand-700 to-neutral-900"
      >
        {!bezOkladki && kod && (
          <img
            src={"/api/instagram/okladka/" + kod}
            alt=""
            loading="lazy"
            decoding="async"
            onError={() => setBezOkladki(true)}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          />
        )}
        {bezOkladki && (
          <span className="absolute inset-0 flex items-center justify-center text-neutral-0/25">
            <InstagramIcon width={120} height={120} strokeWidth={1} />
          </span>
        )}
        <span className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 via-transparent to-transparent" />
        <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-neutral-0/90 text-brand-700 shadow-lg transition-transform duration-200 group-hover:scale-110">
          <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor" aria-hidden="true">
            <path d="M8 5.5v13l10.5-6.5z" />
          </svg>
        </span>
        <span className="absolute bottom-3 left-4 flex items-center gap-2 text-sm font-medium text-neutral-0">
          <InstagramIcon width={18} height={18} />
          Obejrzyj film
        </span>
      </button>
      <div className="flex items-center justify-between gap-3 px-4 py-3 text-sm">
        <span className="text-neutral-600">Instagram</span>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-brand-700 underline underline-offset-4 hover:text-brand-600"
        >
          Otwórz w Instagramie
        </a>
      </div>
    </div>
  );
}

/**
 * Rząd reelsów — przewijany w poziomie na każdej szerokości (jak wcześniej),
 * każda karta ma stałą, wygodną szerokość.
 */
export function ReelsGrid({ urls }: { urls: string[] }) {
  return (
    <div className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:gap-5 sm:px-0 sm:pb-0 [scrollbar-width:none]">
      {urls.map((url) => (
        <div key={url} className="w-[min(80vw,340px)] flex-none snap-start">
          <ReelKarta url={url} />
        </div>
      ))}
    </div>
  );
}
