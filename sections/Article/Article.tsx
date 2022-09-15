import ArticleBody from "@compositions/ArticleBody";
import ArticleHeader from "@compositions/ArticleHeader";
import { ArticleModel } from "models/ArticleModel";
import React from "react";

import styles from "./Article.module.css";

type Props = {
  article: ArticleModel;
};

const Article = ({ article }: Props) => {
  return (
    <article className={styles["article"]}>
      <ArticleHeader article={article} />
      <ArticleBody article={article} />
    </article>
  );
};

export default Article;
