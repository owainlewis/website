import type { Metadata } from "next";
import { Bricolage_Grotesque, DM_Sans, Instrument_Serif, Geist_Mono } from "next/font/google";
import "./globals.css";

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-bricolage-grotesque",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  weight: "400",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Owain Lewis — AI Engineering",
  description:
    "I help companies build AI systems that actually work in production. Consulting, community, and content for engineers and business owners.",
  openGraph: {
    title: "Owain Lewis — AI Engineering",
    description:
      "I help companies build AI systems that actually work in production.",
    url: "https://owainlewis.com",
    siteName: "Owain Lewis",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Owain Lewis — AI Engineering",
    description:
      "I help companies build AI systems that actually work in production.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bricolageGrotesque.variable} ${dmSans.variable} ${instrumentSerif.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}
