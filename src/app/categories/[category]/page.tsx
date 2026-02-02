import styles from "./styles.module.scss";
import GoBackBtn from "@/components/GoBackBtn";
import { PAGES } from "@/config/pages.config";
import ProductsList from "@/components/ProductsList";

const CategoryPage = () => {
  return (
    <div className={styles.container}>
      <GoBackBtn path={PAGES.CATEGORIES} text="Zurück zu Kategorien" />
      <ProductsList />
    </div>
  );
};

export default CategoryPage;
