"use client";
import CategoryItem from "../CategoryItem";

type Category = {
  id: number;
  name: string;
  image: string;
  updatedAt: string;
  createdAt: string;
};

const CategoriesList = ({ categories }: { categories: Category[] }) => {
  return (
    <ul>
      {categories &&
        categories.map((category) => (
          <li key={category.id}>
            <CategoryItem title={category.name} imageUrl={category.image} />
          </li>
        ))}
    </ul>
  );
};

export default CategoriesList;
