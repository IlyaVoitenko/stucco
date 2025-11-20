import styles from "./styles.module.scss";
import CategoriesList from "@/components/CategoriesList";

const getCategories = async () => {
  const data = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}categories`, {
    method: "GET",
  });
  if (!data.ok) throw new Error("Failed to fetch categories");
  return data.json();
};

const Categories = async () => {
  const posts = await getCategories();
  return (
    <div className={styles.container}>
      <CategoriesList categories={posts} />
    </div>
  );
};

export default Categories;
