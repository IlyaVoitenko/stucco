import styles from "./styles.module.scss";

export default function Loading() {
  return (
    <main className={styles.container}>
      <nav
        className={styles.breadcrumbs}
        aria-label="Breadcrumb"
        role="navigation"
      >
        <span></span>
        <span className={styles.currentBreadcrumb}> </span>
      </nav>
      <div className={styles.productImagePriceSizeContainer}>
        <div className={styles.productImage}></div>
        <div className={styles.productInfo}>
          <div className={styles.productSize}>
            <div className={styles.sizeItem}></div>
          </div>
        </div>
      </div>
      <div className={styles.productDetails}>
        <h1>hh</h1>
        <br />
        <span></span>
      </div>
    </main>
  );
}
