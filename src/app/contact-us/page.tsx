import styles from "./styles.module.scss";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.BASE_URL || "http://localhost:3000"),
  title: "Kontaktieren Sie uns – Stuckwerkstatt Voitenko",
  description: "Kontaktieren Sie uns für Anfragen und Unterstützung",
  openGraph: {
    title: "Kontaktieren Sie uns – Stuckwerkstatt Voitenko",
    description: "Kontaktieren Sie uns für Anfragen und Unterstützung",
    url: process.env.BASE_URL + "/contact-us",
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
    title: "Kontaktieren Sie uns – Stuckwerkstatt Voitenko",
    description: "Kontaktieren Sie uns für Anfragen und Unterstützung",
    images: [`${process.env.BASE_URL + "/logo.svg"}`],
  },
  alternates: {
    canonical: process.env.BASE_URL + "/contact-us",
  },
};
export default function ContactUs() {
  return (
    <main className={styles.container}>
      <h1>Kontaktieren Sie uns</h1>
      <br />
      <span>
        Email:{" "}
        <a href="mailto:stuckwerkstattvoitenko@gmail.com">
          stuckwerkstattvoitenko@gmail.com
        </a>
      </span>

      <br />
      <span>
        Telefon: <a href="tel:+491639252077">+491639252077</a>
      </span>
      <br />
      <address>
        <p>Stuckwerkstatt Voitenko</p>
        <p>adress</p>
        <p> </p>
      </address>
    </main>
  );
}
