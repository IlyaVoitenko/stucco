import Link from "next/link";
import styles from "./styles.module.scss";
import { PAGES } from "@/config/pages.config";
const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.content}>
        <nav className={styles.nav}>
          <Link href={PAGES.HOME} className={styles.link}>
            Startseite
          </Link>
          <Link href={PAGES.ABOUT_US} className={styles.link}>
            Über uns
          </Link>
          <Link href={PAGES.CONTACT_US} className={styles.link}>
            Kontakt
          </Link>
          <Link href={PAGES.PRIVACY_POLICY} className={styles.link}>
            Datenschutz
          </Link>
          <Link href={PAGES.SITE_NOTICE} className={styles.link}>
            Impressum
          </Link>
        </nav>
        <div className={styles.workHours}>
          <h3>Arbeitsplan</h3>
          <ul>
            <li>Mo–Fr: 08:00 — 16:00</li>
            <li>Sa-So: Geschlossen</li>
          </ul>
        </div>
      </div>

      <p className={styles.copy}>&copy; 2025 Stuckwerkstatt Voitenko</p>
    </footer>
  );
};

export default Footer;
