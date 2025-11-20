"use client";
import styles from "./styles.module.scss";

export default function Error({ error }: { error: Error }) {
  return (
    <div className={styles.container}>
      <h2 className={styles.errorTitle}>
        Etwas ist schief gelaufen! Status: {error.message}
      </h2>
      <p className={styles.errorMessage}>
        Leider konnte die Kategorie nicht geladen werden. Bitte versuchen Sie es
        später erneut.
      </p>
    </div>
  );
}
