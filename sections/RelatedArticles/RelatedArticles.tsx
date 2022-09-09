import React from "react";
import styles from "./RelatedArticles.module.css";

type Props = {};

const RelatedArticles = (props: Props) => {
  return (
    <div className={styles.relatedArticles}>
      <h2 className={styles.title}>Related Posts</h2>
    </div>
  );
};

export default RelatedArticles;
