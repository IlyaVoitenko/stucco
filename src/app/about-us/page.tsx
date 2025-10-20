import React from "react";
import styles from "./styles.module.scss";
import { Metadata } from "next";
import { WithContext, AboutPage } from "schema-dts";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.BASE_URL || "http://localhost:3000"),
  title: "Über uns",
  description: "Erfahren Sie mehr über unsere Geschichte und unser Team",
  openGraph: {
    title: "Über uns",
    description: "Erfahren Sie mehr über unsere Geschichte und unser Team",
    url: process.env.BASE_URL + "/about-us",
    siteName: "Stuckwerkstatt Voitenko",
    images: [
      {
        url: process.env.BASE_URL + "about-us/logo.svg",
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
    title: "Über uns – Unsere Geschichte und Traditionen",
    description:
      "Erfahren Sie mehr über unsere Geschichte, unsere Traditionen und unser Team.",
    images: [`${process.env.BASE_URL + "/logo.svg"}`],
  },
  alternates: {
    canonical: process.env.BASE_URL + "/about-us",
  },
};
const jsonLd: WithContext<AboutPage> = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "Stuckwerkstatt Voitenko Über uns Seite",
  description:
    "Meine berufliche Geschichte begann bereits Ende der 90er Jahre.  Inspiriert wurde ich von meinem Großvater, der aus Österreich in die Ukraine kam und sich dort niederließ. Er brachte meinem Vater das Handwerk des Stuckdekors bei, und mit der Zeit wurde dieser Beruf zu einer Familientradition, die bis heute fortgeführt wird.",
  image: process.env.BASE_URL + "/logo.svg",
};
export default function AboutUs() {
  return (
    <div className={styles.container}>
      <h1 className={`${styles.title} ${styles.mb}`}>HERZLICH WILLKOMMEN</h1>
      <br />
      <p>
        Meine berufliche Geschichte begann bereits Ende der 90er Jahre.
        Inspiriert wurde ich von meinem Großvater, der aus Österreich in die
        Ukraine kam und sich dort niederließ. Er brachte meinem Vater das
        Handwerk des Stuckdekors bei, und mit der Zeit wurde dieser Beruf zu
        einer Familientradition, die bis heute fortgeführt wird.
      </p>
      <br />
      <p>
        Im Laufe meiner Arbeit in der Ukraine hatte ich die Gelegenheit,
        Projekte für vier Präsidenten des Landes zu realisieren. Darüber hinaus
        arbeitete ich für Abgeordnete, Minister und andere hochrangige Beamte.
        Eines der bedeutendsten Projekte meiner Laufbahn war die Arbeit am
        Marienpalast – der Residenz, in der die ukrainischen Präsidenten und
        Regierungsvertreter Staatsoberhäupter und Delegationen aus aller Welt
        empfangen.
      </p>
      <br />
      <p>
        Heute gründe ich ein Unternehmen in Deutschland, um hier die Traditionen
        und das handwerkliche Können einzubringen, die ich in mehr als einem
        Vierteljahrhundert gesammelt habe. Für mich ist dies nicht nur ein
        Beruf, sondern eine Möglichkeit, die Arbeit und das Können nicht nur
        meiner Generation, sondern auch der früheren Meister zu zeigen. Meine
        Aufgabe ist es, das bereits Geschaffene zu bewahren, Erhaltenes zu
        restaurieren und gleichzeitig Neues zu schaffen. Das ist eine Geschichte
        über Tradition, Wertschätzung der Vergangenheit und das Streben nach
        Perfektion in jedem Projekt.
      </p>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
    </div>
  );
}
