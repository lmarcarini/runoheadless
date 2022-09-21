import styles from "./HiddenHeading.module.css";
import React from "react";

type Props = {
  children: string;
};

const HiddenHeading = ({ children }: Props) => {
  return <h1 className={styles.heading}>{children}</h1>;
};

export default HiddenHeading;
