
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css";

const basePath = '/favicon';

export const metadata: Metadata = {
  title: "Orion Stars Casino App Download Latest | Android & iOS - orionstarsmobi.com",
  description: "Download Orion Stars Casino app for Android and iOS. Safe, secure mobile casino gaming with slots, table games, and live dealers. Official download guide.",
  keywords: "Orion Stars, casino app, Android download, iOS download, mobile casino, slots, gambling app",
  authors: [{ name: "Orion Stars Casino" }],
  robots: "index, follow",
  openGraph: {
    title: "Orion Stars Casino App Download | Android & iOS",
    description: "Download Orion Stars Casino app for Android and iOS. Safe, secure mobile casino gaming.",
    url: "https://orionstarsmobi.com",
    siteName: "Orion Stars Casino",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Orion Stars Casino App Download",
    description: "Download Orion Stars Casino app for Android and iOS",
  },
  alternates: {
    canonical: "https://orionstarsmobi.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <link rel="canonical" href="https://orionstarsmobi.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Apple Touch Icons */}
        <link rel="apple-touch-icon" sizes="57x57" href={`${basePath}/apple-icon-57x57.png`} />
        <link rel="apple-touch-icon" sizes="60x60" href={`${basePath}/apple-icon-60x60.png`} />
        <link rel="apple-touch-icon" sizes="72x72" href={`${basePath}/apple-icon-72x72.png`} />
        <link rel="apple-touch-icon" sizes="76x76" href={`${basePath}/apple-icon-76x76.png`} />
        <link rel="apple-touch-icon" sizes="114x114" href={`${basePath}/apple-icon-114x114.png`} />
        <link rel="apple-touch-icon" sizes="120x120" href={`${basePath}/apple-icon-120x120.png`} />
        <link rel="apple-touch-icon" sizes="144x144" href={`${basePath}/apple-icon-144x144.png`} />
        <link rel="apple-touch-icon" sizes="152x152" href={`${basePath}/apple-icon-152x152.png`} />
        <link rel="apple-touch-icon" sizes="180x180" href={`${basePath}/apple-icon-180x180.png`} />

        {/* Standard Icons */}
        <link rel="icon" type="image/png" sizes="192x192" href={`${basePath}/android-icon-192x192.png`} />
        <link rel="icon" type="image/png" sizes="32x32" href={`${basePath}/favicon-32x32.png`} />
        <link rel="icon" type="image/png" sizes="96x96" href={`${basePath}/favicon-96x96.png`} />
        <link rel="icon" type="image/png" sizes="16x16" href={`${basePath}/favicon-16x16.png`} />

        {/* Manifest and Meta Tags */}
        <link rel="manifest" href={`${basePath}/manifest.json`} />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content={`${basePath}/ms-icon-144x144.png`} />
        <meta name="theme-color" content="#ffffff" />
        <meta name="msvalidate.01" content="37DBF83F609ECE90A19D392734E8BB3A" />

      </head>
      <body
        className={` antialiased`}
      >
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
