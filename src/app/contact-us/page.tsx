import styles from "./styles.module.scss";
import { Metadata } from "next";
import { WithContext, ContactPoint } from "schema-dts";

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
        url: `${process.env.BASE_URL}/og-logo.png`,
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
    images: [`${process.env.BASE_URL}/og-logo.png`],
  },
  alternates: {
    canonical: process.env.BASE_URL + "/contact-us",
  },
};

const jsonLd: WithContext<ContactPoint> = {
  "@context": "https://schema.org",
  "@type": "ContactPoint",
  name: "Stuckwerkstatt Voitenko Kontaktseite",
  image: `${process.env.BASE_URL}/og-logo.png`,
  email: "stuckwerkstattvoitenko@gmail.com",
  telephone: "+491639252077",
  areaServed: "DE",
  availableLanguage: ["Deutsch", "Russisch", "Ukrainisch"],
  contactType: "customer support",
  hoursAvailable: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
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
        <p>Adress: Berliner str 23A, 19300, Grabow </p>
      </address>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
    </main>
  );
}
