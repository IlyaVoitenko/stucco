import Image from "next/image";
import styles from "./styles.module.scss";

type CategoryItemProps = {
  title: string;
  imageUrl: string;
};

const CategoryItem = ({ title, imageUrl }: CategoryItemProps) => {
  return (
    <div className={styles.container}>
      <Image
        src={imageUrl}
        className={`${styles.image} ${
          title === "Rosetten" || title === "Cornices" ? styles.fullSize : ""
        }`}
        alt="Category Image"
        width={100}
        height={100}
      />
      <h2>{title}</h2>
    </div>
  );
};

export default CategoryItem;
