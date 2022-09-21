import ArticleCard from "@compositions/ArticleCard";
import { ArticleCompactModel } from "models/ArticleModel";
import React from "react";
import styles from "./PopularTopics.module.css";

type Props = {
  articles: ArticleCompactModel[];
};

const PopularTopics = ({ articles }: Props) => {
  return (
    <section className={styles.container}>
      <h2 className={styles.heading}>Popular Topics</h2>
      <div className={styles.tagMenu}>View Tags</div>
      <div className={styles.articles}>
        {articles.map((article) => (
          <div key={article.id}>
            <ArticleCard article={article} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularTopics;
