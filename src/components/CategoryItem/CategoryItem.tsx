import Image from "next/image";
import styles from "./styles.module.scss";
import { categories } from "./constants.data";
import Link from "next/link";

type CategoryItemProps = {
  title: string;
  imageUrl: string;
};

const CategoryItem = ({ title, imageUrl }: CategoryItemProps) => {
  return (
    <Link href={`/categories/${title.toLowerCase()}`}>
      <div className={styles.container}>
        <Image
          src={imageUrl}
          className={`${styles.image} ${
            title === "Rosettes" || title === "Cornices" ? styles.fullSize : ""
          }`}
          alt="Category Image"
          width={100}
          height={100}
        />
        <h2> {categories[title as keyof typeof categories]}</h2>
      </div>
    </Link>
  );
};

export default CategoryItem;
