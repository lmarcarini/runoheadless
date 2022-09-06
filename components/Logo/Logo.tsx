import Link from "next/link";
import React from "react";
import styles from "./Logo.module.css";

type Props = {};

const Logo = (props: Props) => {
  return <span className={styles["logo"]}>RUNO</span>;
};

export default Logo;
