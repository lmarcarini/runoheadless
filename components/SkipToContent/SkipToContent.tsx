import styles from "./SkipToContent.module.css";
import React from "react";

type Props = {};

const SkipToContent = (props: Props) => {
  return (
    <a type="button" href="#main" className={styles.skipButton}>
      Skip To Content
    </a>
  );
};

export default SkipToContent;
