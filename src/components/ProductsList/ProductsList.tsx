"use client";
import Image from "next/image";
import { getProductsCategoryById } from "@/lib/categories";
import { useCategoriesStore } from "@/stores/categories-store";
import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import React from "react";
import { hasAdditionalStyle } from "../CategoryItem/constants.data";
import { IProduct } from "@/types";
import Link from "next/dist/client/link";

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const selectedCategoryId = useCategoriesStore(
    (state) => state.selectedCategoryId,
  );
  useEffect(() => {
    if (!selectedCategoryId) return;
    window.scrollTo(0, 0);
    const getProductsByCategory = async (id: number) => {
      const response = await getProductsCategoryById(id);
      setProducts(response);
      return response;
    };
    getProductsByCategory(selectedCategoryId);
  }, [selectedCategoryId]);
  return (
    <main className={styles.CardLayout}>
      <main>
        {products.length > 0 ? (
          <ul className={styles.containerList}>
            {products.map((product: IProduct) => (
              <Link
                key={product.id}
                href={`/categories/${product.category.name.toLowerCase()}/${product.name.toLowerCase()}-${product.id}`}
              >
                <li className={styles.container}>
                  <Image
                    src={product.images[0]}
                    className={`${styles.image} ${
                      hasAdditionalStyle(product.name) ? styles.fullSize : ""
                    }`}
                    priority
                    alt={product.name}
                    width={100}
                    height={100}
                  />
                  <span>
                    {product.name} - {product.price} €{" "}
                  </span>
                </li>
              </Link>
            ))}
          </ul>
        ) : (
          <h1>Keine Produkte in dieser Kategorie gefunden.</h1>
        )}
      </main>
    </main>
  );
};

export default ProductsList;
