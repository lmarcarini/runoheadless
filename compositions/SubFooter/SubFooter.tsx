import React from "react";
import styles from "./SubFooter.module.css";

type Props = {};

const SubFooter = (props: Props) => {
  return (
    <div className={styles.subFooter}>
      <span>2021 | RUNO Publisher Studio</span>
      <a>Subscribe Now</a>
    </div>
  );
};

export default SubFooter;
