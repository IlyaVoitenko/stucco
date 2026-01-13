import Link from "next/link";
import styles from "./styles.module.scss";
import { PAGES } from "@/config/pages.config";
type GoBackBtnProps = {
  path: string;
  text: string;
};
const GoBackBtn = ({ path, text }: GoBackBtnProps) => {
  return (
    <div className={styles.container}>
      <Link href={path} className={styles.btnGoBack}>
        <button>
          {`←`}
          <span className={styles.btnText}>{text}</span>
        </button>
      </Link>
    </div>
  );
};

export default GoBackBtn;
