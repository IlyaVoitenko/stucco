import { PAGES } from "@/config/pages.config";
import styles from "./styles.module.scss";
import Link from "next/link";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className={styles.container}>
      <Image
        src={"/logo-white.png"}
        alt="logo"
        width={100}
        height={100}
        priority={true}
      />
      <nav className={styles.navList}>
        <Link href={PAGES.HOME}>Home</Link>
        <Link href={PAGES.CONTACT_US}>Contact Us</Link>
        <Link href={PAGES.ABOUT_US}>About Us</Link>
      </nav>
    </div>
  );
};

export default Header;
