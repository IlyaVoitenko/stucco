"use client";
import Image from "next/image";
import { getCategoryById } from "@/lib/categories";
import { useCategoriesStore } from "@/stores/categories-store";
import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import React from "react";
import { hasAdditionalStyle } from "../CategoryItem/constants.data";

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const selectedCategoryId = useCategoriesStore(
    (state) => state.selectedCategoryId,
  );
  console.log("selectedCategoryId", selectedCategoryId);
  useEffect(() => {
    if (!selectedCategoryId) return;
    window.scrollTo(0, 0);
    const getProductsByCategory = async (id: number) => {
      const response = await getCategoryById(id);
      setProducts(response);
      return response;
    };
    getProductsByCategory(selectedCategoryId);
  }, [selectedCategoryId]);
  console.log("products", products);

  return (
    <main className={styles.CardLayout}>
      <main>
        {products.length > 0
          ? products.map((product: any) => (
              <div key={product.id} className={styles.container}>
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
                {product.name} - {product.price} €
              </div>
            ))
          : "Keine Produkte in dieser Kategorie gefunden."}
      </main>
    </main>
  );
};

export default ProductsList;
