import styles from "./styles.module.scss";
import GoBackBtn from "@/components/GoBackBtn";
import { PAGES } from "@/config/pages.config";
const CategoryPage = () => {
  return (
    <div className={styles.container}>
      <GoBackBtn path={PAGES.CATEGORIES} text="Zurück zu Kategorien" />
      page
    </div>
  );
};

export default CategoryPage;
