import Link from "next/link";
import styles from "./styles.module.scss";
import { PAGES } from "@/config/pages.config";
const Footer = () => {
  return (
    <footer className={styles.container}>
      <nav className={styles.nav}>
        <Link href={PAGES.HOME}>Startseite</Link>
        <Link href={PAGES.ABOUT_US}>Über uns</Link>
        <Link href={PAGES.CONTACT_US}>Kontakt</Link>
        <Link href={PAGES.PRIVACY_POLICY}>Datenschutz</Link>
        <Link href={PAGES.SITE_NOTICE}>Impressum</Link>
      </nav>
    </footer>
  );
};

export default Footer;
