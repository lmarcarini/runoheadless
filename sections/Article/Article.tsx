import React from "react";
import ArticleBody from "../../compositions/ArticleBody";
import ArticleHeader from "../../compositions/ArticleHeader";
import styles from "./Article.module.css";

type Props = {};

const Article = (props: Props) => {
  return (
    <article className={styles["article"]}>
      <ArticleHeader />
      <ArticleBody />
    </article>
  );
};

export default Article;
