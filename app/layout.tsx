import type { Metadata } from "next";
import "./globals.css";
import { GoogleTagManager, GoogleTagManagerNoScript } from "@/components/layout/gtm";
import { buildRootMetadata } from "@/lib/seo/metadata";
import { RejestracjaServiceWorkera } from "@/components/pwa/rejestracja-sw";

export async function generateMetadata(): Promise<Metadata> {
  return buildRootMetadata();
}

/**
 * Root shell only — html/body + the one truly site-wide concern (GTM).
 * Public marketing chrome (Header/Footer/StickyMobileCta + site-wide
 * schema) lives in app/(site)/layout.tsx, NOT here, so that /admin gets
 * its own independent shell (AdminShell) instead of being nested inside
 * the public site's header and footer.
 */
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pl" className="h-full">
      <head>
        <GoogleTagManager />
        {/*
          APLIKACJA AGA CLUB — te trzy znaczniki dotyczą wyłącznie iPhone'a.
          Android czyta wszystko z manifestu (app/manifest.ts), Safari nie:
          bez nich ikona na pulpicie iPhone'a byłaby zrzutem ekranu strony,
          a aplikacja otwierałaby się z paskiem adresu Safari, czyli jako
          strona — dokładnie to, czego Michał nie chciał.
        */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Aga Club" />
        <link rel="apple-touch-icon" href="/ikony/apple-touch-icon.png" />
        {/* Kolor paska systemowego wokół aplikacji — ten sam zielony co przyciski. */}
        <meta name="theme-color" content="#00973d" />
      </head>
      <body className="flex min-h-full flex-col">
        <GoogleTagManagerNoScript />
        {children}
        {/*
          Rejestracja service workera (public/sw.js). Bez czynnego service
          workera telefon nie uzna serwisu za instalowalny — sam manifest
          nie wystarcza. Komponent nic nie rysuje.
        */}
        <RejestracjaServiceWorkera />
      </body>
    </html>
  );
}
