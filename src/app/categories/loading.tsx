import styles from "./styles.module.scss";
const Loading = () => {
  const arr = Array.from({ length: 6 }).fill(null);
  return (
    <div className={styles.containerLoader}>
      {arr.map((_, index) => {
        return (
          <div key={index} className={styles.containerCard}>
            <div className={styles.image}></div>
            <div className={styles.name}></div>
          </div>
        );
      })}
    </div>
  );
};

export default Loading;
