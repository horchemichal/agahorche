import type { Metadata } from "next";
import "./globals.css";
import { GoogleTagManager, GoogleTagManagerNoScript } from "@/components/layout/gtm";
import { buildRootMetadata } from "@/lib/seo/metadata";

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
      </head>
      <body className="flex min-h-full flex-col">
        <GoogleTagManagerNoScript />
        {children}
      </body>
    </html>
  );
}
