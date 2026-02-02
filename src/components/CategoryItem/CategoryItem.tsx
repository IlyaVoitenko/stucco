"use client";
import Image from "next/image";
import styles from "./styles.module.scss";
import { hasAdditionalStyle } from "./constants.data";
import Link from "next/link";
import { useCategoriesStore } from "@/stores/categories-store";

type CategoryItemProps = {
  title: string;
  imageUrl: string;
  id: number;
};

const CategoryItem = ({ title, imageUrl, id }: CategoryItemProps) => {
  const setSelectedCategory = useCategoriesStore(
    (state) => state.setSelectedCategory,
  );

  return (
    <Link
      href={`/categories/${title.toLowerCase()}`}
      onClick={() => setSelectedCategory({ id, name: title })}
    >
      <div className={styles.container}>
        <Image
          src={imageUrl}
          className={`${styles.image} ${
            hasAdditionalStyle(title) ? styles.fullSize : ""
          }`}
          priority
          alt={title}
          width={100}
          height={100}
        />
        <h2> {title}</h2>
      </div>
    </Link>
  );
};

export default CategoryItem;
