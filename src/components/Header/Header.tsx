"use client";
import { PAGES } from "@/config/pages.config";
import styles from "./styles.module.scss";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import menuClose from "../../assets/menu-close.svg";
import menu from "../../assets/menu.svg";
import { usePathname } from "next/navigation";

const handleMoveMobileMenu = (
  setIsMobile: React.Dispatch<React.SetStateAction<boolean>>
) => setIsMobile((prev: boolean) => !prev);
const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  const path = usePathname();
  return (
    <header>
      <div className={styles.mobileContainer}>
        <div className={styles.logoContainer}>
          <Image
            src={"/logo-white.png"}
            alt="logo"
            width={100}
            height={100}
            priority={true}
          />
          <Image
            src={isMobile ? menuClose : menu}
            alt="logo"
            width={20}
            height={20}
            priority={true}
            onClick={() => setIsMobile((value) => !value)}
          />
        </div>

        <nav
          className={`${styles.navList} ${
            isMobile ? styles.show : styles.hide
          }`}
        >
          <Link
            href={PAGES.HOME}
            className={path === PAGES.HOME ? styles.active : styles.inactive}
            onClick={() => handleMoveMobileMenu(setIsMobile)}
          >
            Startseite
          </Link>
          <Link
            href={PAGES.CONTACT_US}
            className={
              path === PAGES.CONTACT_US ? styles.active : styles.inactive
            }
            onClick={() => handleMoveMobileMenu(setIsMobile)}
          >
            Kontaktieren Sie uns
          </Link>
          <Link
            href={PAGES.ABOUT_US}
            className={
              path === PAGES.ABOUT_US ? styles.active : styles.inactive
            }
            onClick={() => handleMoveMobileMenu(setIsMobile)}
          >
            Über uns
          </Link>
        </nav>
      </div>
      <div className={styles.desktopContainer}>
        <Image
          src={"/logo-white.png"}
          alt="logo"
          width={100}
          height={100}
          priority={true}
          style={{
            width: "auto",
            height: "100%",
          }}
        />
        <nav className={styles.navList}>
          <Link
            href={PAGES.HOME}
            className={path === PAGES.HOME ? styles.active : styles.inactive}
          >
            Startseite
          </Link>
          <Link
            href={PAGES.CATEGORIES}
            className={
              path === PAGES.CATEGORIES ? styles.active : styles.inactive
            }
          >
            Kategorien
          </Link>
          <Link
            href={PAGES.CONTACT_US}
            className={
              path === PAGES.CONTACT_US ? styles.active : styles.inactive
            }
          >
            Kontaktieren Sie uns
          </Link>
          <Link
            href={PAGES.ABOUT_US}
            className={
              path === PAGES.ABOUT_US ? styles.active : styles.inactive
            }
          >
            Über uns
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
