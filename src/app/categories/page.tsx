import styles from "./styles.module.scss";
import { Metadata } from "next";
import { getCategories } from "@/lib/categories";
import CategoriesList from "@/components/CategoriesList";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.BASE_URL || "http://localhost:3000"),
  title: "Kategorien",
  description: "Entdecken Sie unsere vielfältigen Kategorien",
  openGraph: {
    title: "Kategorien",
    description: "Entdecken Sie unsere vielfältigen Kategorien",
    url: process.env.BASE_URL + "/categories",
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
    title: "Kategorien – Entdecken Sie unsere vielfältigen Kategorien",
    description: "Entdecken Sie unsere vielfältigen Kategorien.",
    images: [`${process.env.BASE_URL}/og-logo.png`],
  },
  alternates: {
    canonical: process.env.BASE_URL + "/categories",
  },
};

const Categories = async () => {
  const categories = await getCategories();

  return (
    <div className={styles.container}>
      <CategoriesList categories={categories} />
    </div>
  );
};

export default Categories;
