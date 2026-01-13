import React from "react";
import { getCategories } from "@/lib/categories";
import CategoryItem from "@/components/CategoryItem";
import { ICategory } from "@/types";
import styles from "./styles.module.scss";

export default async function CategoriesList() {
  const data = await getCategories();
  if (!Array.isArray(data) || data.length === 0) {
    return <p>Keine Kategorien verfügbar.</p>;
  }

  return (
    <ul className={styles.container}>
      {data.map((category: ICategory) => (
        <li key={category.id}>
          <CategoryItem title={category.name} imageUrl={category.image} />
        </li>
      ))}
    </ul>
  );
}
