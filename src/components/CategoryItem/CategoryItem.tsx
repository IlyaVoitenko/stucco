import Image from "next/image";
import styles from "./styles.module.scss";
import { additionalStyles } from "./constants.data";
import Link from "next/link";

type CategoryItemProps = {
  title: string;
  imageUrl: string;
};

const CategoryItem = ({ title, imageUrl }: CategoryItemProps) => {
  const hasAdditionalStyle =
    title in additionalStyles
      ? additionalStyles[title as keyof typeof additionalStyles]
      : false;
  return (
    <Link href={`/categories/${title.toLowerCase()}`}>
      <div className={styles.container}>
        <Image
          src={imageUrl}
          className={`${styles.image} ${
            hasAdditionalStyle ? styles.fullSize : ""
          }`}
          alt="Category Image"
          width={100}
          height={100}
        />
        <h2> {title}</h2>
      </div>
    </Link>
  );
};

export default CategoryItem;
