import React from "react";
import styles from "./Badge.module.css";

type Props = { children: string };

const Badge = ({ children }: Props) => {
  return <div className={styles.badge}>{children}</div>;
};

export default Badge;
