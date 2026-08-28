"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } };
  }
}

let scriptLoadingPromise: Promise<void> | null = null;

/** Loads Instagram's official embed script once, shared across every embed on the page. */
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

/**
 * Single Instagram reel, rendered via the official `instagram-media`
 * blockquote embed (spec §29: no third-party embed libraries). Instagram's
 * embed enforces its own minimum rendered width (~326px) and doesn't
 * always shrink its inner header/caption text to match a narrower
 * container — a tight `overflow-hidden` wrapper with no breathing room
 * ends up cropping that text mid-word. Framed in a card (border + shadow,
 * matching the site's `Card` styling) with generous padding instead, so
 * the embed always has enough room to render in full. The embed.js script
 * — and the network request it triggers — only loads once this card
 * scrolls near the viewport, so reels below the fold don't cost anything
 * on first load.
 */
function InstagramReelEmbed({ url }: { url: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          loadInstagramEmbedScript().then(() => window.instgrm?.Embeds.process());
          observer.disconnect();
        }
      },
      { rootMargin: "200px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex justify-center overflow-hidden rounded-2xl border border-border bg-neutral-0 p-2 shadow-[var(--shadow-card)]"
    >
      <blockquote className="instagram-media" data-instgrm-permalink={url} data-instgrm-version="14" style={{ width: "100%", margin: 0 }} />
    </div>
  );
}

/**
 * Row of featured reels — always a horizontal swipe/scroll, at every
 * breakpoint, rather than switching to a fixed n-column grid on desktop:
 * a grid column that happens to compute narrower than Instagram's ~326px
 * embed floor is exactly what was cropping reels before. Each card gets a
 * comfortably wide, capped width instead, so scrolling reveals the rest.
 */
export function ReelsGrid({ urls }: { urls: string[] }) {
  return (
    <div className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:gap-5 sm:px-0 sm:pb-0 [scrollbar-width:none]">
      {urls.map((url) => (
        <div key={url} className="w-[min(90vw,380px)] flex-none snap-start">
          <InstagramReelEmbed url={url} />
        </div>
      ))}
    </div>
  );
}
