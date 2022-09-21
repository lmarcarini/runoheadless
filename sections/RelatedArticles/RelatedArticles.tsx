import ArticleCard from "@compositions/ArticleCard";
import { ArticleCompactModel } from "models/ArticleModel";
import React from "react";
import styles from "./RelatedArticles.module.css";

type Props = {
  articles: ArticleCompactModel[];
  sectionTitle?: string;
  largeTitle?: boolean;
};

const RelatedArticles = ({
  articles,
  sectionTitle = "Related Posts",
  largeTitle,
}: Props) => {
  return (
    <div className={styles.relatedArticles}>
      <h2
        className={
          largeTitle
            ? styles.title + " " + styles["title--large"]
            : styles.title
        }
      >
        {sectionTitle}
      </h2>
      <div className={styles.list}>
        {articles.slice(0, 3).map((article) => (
          <ArticleCard key={article.title} article={article} />
        ))}
      </div>
    </div>
  );
};

export default RelatedArticles;
