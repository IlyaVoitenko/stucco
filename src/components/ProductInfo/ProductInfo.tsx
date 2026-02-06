"use client";
import React from "react";
import Image from "next/image";
import styles from "./styles.module.scss";
import { IProduct, IProductSize } from "@/types";
import { capitalizeFirstLetter, translateToGerman } from "./constants";

interface ProductInfoProps {
  product: IProduct;
}
const ProductInfo = ({ product }: ProductInfoProps) => {
  return (
    <>
      {" "}
      <div className={styles.productImagePriceSizeContainer}>
        <Image
          src={product.images?.[0]}
          alt={product.name}
          priority
          width={600}
          height={400}
          className={styles.productImage}
        />
        <div className={styles.productInfo}>
          <div className={styles.productSize}>
            {product.sizes.map((size: IProductSize) => (
              <div key={size.id} className={styles.sizeItem}>
                {size.width && <p>Breite: {size.width} cm</p>}
                {size.height && <p>Höhe: {size.height} cm</p>}
                {size.depth && <p>Tiefe: {size.depth} cm</p>}
                {size.diameter && <p>Durchmesser: {size.diameter} cm</p>}-
                <p>
                  {size.itemPrice.toLocaleString("de-DE", {
                    style: "currency",
                    currency: "EUR",
                  })}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.productDetails}>
        <h1>{product.name}</h1>
        <br />
        <p>{product.description}</p>
        <br />
        <p>Kategorie : {product.category.name}</p>
        <br />
        <p>Produkttyp : {translateToGerman(product.type)}</p>
        <br />
        <p>Material : {capitalizeFirstLetter(product.material)}</p>
      </div>
    </>
  );
};

export default ProductInfo;
