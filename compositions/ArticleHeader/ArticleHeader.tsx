import React from "react";
import BackgroundImage from "../../components/BackgroundImage";
import styles from "./ArticleHeader.module.css";

type Props = {};

const article = {
  type: "FASHION",
  title: "Richird Norton photorealistic rendering as real photos",
  description:
    "Progressively incentivize cooperative systems through technically sound functionalities. The credibly productivate seamless data.",
  createdAt: new Date(),
  author: "Jennifer Lawrence",
  readingTime: "4 minutes",
};

const ArticleHeader = (props: Props) => {
  return (
    <section className={styles["articleHeader"]}>
      <BackgroundImage src="images/Rectangle 9.png" />
      <div className={styles["articleHeader__type"]}>{article.type}</div>
      <h1 className={styles["articleHeader__title"]}>{article.title}</h1>
      <p className={styles["articleHeader__description"]}>
        {article.description}
      </p>
      <p className={styles["articleHeader__author"]}>By {article.author}</p>
    </section>
  );
};

export default ArticleHeader;
