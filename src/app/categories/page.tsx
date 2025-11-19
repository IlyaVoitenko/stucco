import styles from "./styles.module.scss";
import CategoriesList from "@/components/CategoriesList";

const Categories = async () => {
  const data = await fetch("http://localhost:3000/api/categories", {
    method: "GET",
  });
  const posts = await data.json();
  return (
    <div className={styles.container}>
      <CategoriesList categories={posts} />
    </div>
  );
};

export default Categories;
