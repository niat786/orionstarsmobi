
import type { Metadata } from "next";
import "./globals.css";

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
      </head>
      <body
        className={` antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
