import Main from "@/components/Main";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.BASE_URL || "http://localhost:3000"),
  title: "Home – Stuckwerkstatt Voitenko",
  description: "Willkommen bei der Stuckwerkstatt Voitenko",
  openGraph: {
    title: "Home – Stuckwerkstatt Voitenko",
    description: "Willkommen bei der Stuckwerkstatt Voitenko",
    url: process.env.BASE_URL + "/",
    siteName: "Stuckwerkstatt Voitenko",
    images: [
      {
        url: process.env.BASE_URL + "/logo.svg",
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
    title: "Home – Stuckwerkstatt Voitenko",
    description: "Willkommen bei der Stuckwerkstatt Voitenko",
    images: [`${process.env.BASE_URL + "/logo.svg"}`],
  },
  alternates: {
    canonical: process.env.BASE_URL + "/",
  },
};
export default function Home() {
  return (
    <main>
      <Main />
    </main>
  );
}
