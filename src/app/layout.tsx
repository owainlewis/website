import type { Metadata } from "next";
import Script from "next/script";
import "@fontsource-variable/bricolage-grotesque/wght.css";
import "@fontsource-variable/dm-sans/wght.css";
import "@fontsource-variable/geist-mono/wght.css";
import "@fontsource/instrument-serif/latin-400.css";
import "@fontsource/instrument-serif/latin-400-italic.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Owain Lewis | AI Engineering",
  description:
    "Owain Lewis teaches serious builders how to build real software with AI through YouTube, Kit, and AI Engineer.",
  openGraph: {
    title: "Owain Lewis | AI Engineering",
    description:
      "Practical AI engineering for serious builders.",
    url: "https://owainlewis.com",
    siteName: "Owain Lewis",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Owain Lewis | AI Engineering",
    description:
      "Practical AI engineering for serious builders.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-S76YWXC4XY"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-S76YWXC4XY');
          `}
        </Script>
      </head>
      <body className="min-h-full flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}
