import { MenuBarIcon } from "@components/Icons";
import Logo from "@components/Logo";
import Link from "next/link";
import React from "react";
import styles from "./MobileNavMenu.module.css";

type Props = {};

const MobileNavMenu = (props: Props) => {
  return (
    <div className={styles.mobileNavMenu}>
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>
      <button
        type="button"
        aria-label="expand-menu"
        className={styles.expandMenuButton}
      >
        <MenuBarIcon />
      </button>
    </div>
  );
};

export default MobileNavMenu;
