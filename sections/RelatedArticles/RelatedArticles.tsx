import ArticleCard from "@compositions/ArticleCard";
import React from "react";
import styles from "./RelatedArticles.module.css";

type Props = {};

const articles = [
  { title: "1" },
  { title: "2" },
  { title: "3" },
  { title: "4" },
];

const RelatedArticles = (props: Props) => {
  return (
    <div className={styles.relatedArticles}>
      <h2 className={styles.title}>Related Posts</h2>
      <div className={styles.list}>
        {articles.slice(0, 3).map((article) => (
          <ArticleCard key={article.title} />
        ))}
      </div>
    </div>
  );
};

export default RelatedArticles;
