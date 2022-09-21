import MobileNavMenu from "@compositions/MobileNavMenu";
import React from "react";
import NavMenu from "@compositions/NavMenu";
import styles from "./Header.module.css";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className={styles["wrapper"]}>
      <NavMenu />
      <MobileNavMenu />
    </div>
  );
};

export default Header;
