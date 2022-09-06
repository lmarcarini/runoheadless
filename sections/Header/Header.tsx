import React from "react";
import NavMenu from "../../compositions/NavMenu";
import styles from "./Header.module.css";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className={styles["header"]}>
      <NavMenu />
    </header>
  );
};

export default Header;
