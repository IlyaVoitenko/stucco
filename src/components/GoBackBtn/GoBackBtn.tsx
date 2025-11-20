import Link from "next/link";
import styles from "./styles.module.scss";
import { PAGES } from "@/config/pages.config";
const GoBackBtn = () => {
  return (
    <div className={styles.container}>
      <Link href={PAGES.CATEGORIES} className={styles.btnGoBack}>
        <button>
          {`←`}
          <span className={styles.btnText}>Zurück zu Kategorien</span>
        </button>
      </Link>
    </div>
  );
};

export default GoBackBtn;
