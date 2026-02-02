import React from "react";
import CategoryItem from "@/components/CategoryItem";
import { ICategory } from "@/types";
import styles from "./styles.module.scss";

interface CategoriesListProps {
  categories: ICategory;
}

export default async function CategoriesList({
  categories,
}: CategoriesListProps) {
  if (!Array.isArray(categories) || categories.length === 0)
    return <p>Keine Kategorien verfügbar.</p>;

  return (
    <ul className={styles.container}>
      {categories.map((category: ICategory) => (
        <li key={category.id}>
          <CategoryItem
            title={category.name}
            imageUrl={category.image}
            id={category.id}
          />
        </li>
      ))}
    </ul>
  );
}
