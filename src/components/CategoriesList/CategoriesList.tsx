"use client";
import CategoryItem from "../CategoryItem";
import styles from "./styles.module.scss";
type Category = {
  id: number;
  name: string;
  image: string;
  updatedAt: string;
  createdAt: string;
};

const CategoriesList = ({ categories }: { categories: Category[] }) => {
  return (
    <ul className={styles.container}>
      {categories && categories.length > 0 ? (
        categories.map((category) => (
          <li key={category.id}>
            <CategoryItem title={category.name} imageUrl={category.image} />
          </li>
        ))
      ) : (
        <p>Keine Kategorien verfügbar.</p>
      )}
    </ul>
  );
};

export default CategoriesList;
