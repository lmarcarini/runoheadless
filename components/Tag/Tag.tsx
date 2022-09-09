import React from "react";
import styles from "./Tag.module.css";

type Props = {
  children: string;
};

const Tag = ({ children }: Props) => {
  return <div className={styles["tag"]}>{children}</div>;
};

export default Tag;
