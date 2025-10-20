import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.scss";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Stuckwerkstatt Voitenko",
    template: "%s | Stuckwerkstatt Voitenko",
  },
  description: "Willkommen bei der Stuckwerkstatt Voitenko",
  metadataBase: new URL(process.env.BASE_URL || "http://localhost:3000"),
  openGraph: {
    title: "Stuckwerkstatt Voitenko",
    description: "Willkommen bei der Stuckwerkstatt Voitenko",
    url: process.env.BASE_URL || "http://localhost:3000",
    siteName: "Stuckwerkstatt Voitenko",
    images: [
      {
        url: process.env.BASE_URL + "logo.svg",
        width: 800,
        height: 600,
        alt: "Logo der Firma",
      },
    ],
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stuckwerkstatt Voitenko",
    description: "Willkommen bei der Stuckwerkstatt Voitenko",
    images: [`${process.env.BASE_URL + "logo.svg"}`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.svg" sizes="any" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
