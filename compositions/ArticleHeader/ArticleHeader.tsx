import BackgroundImage from "@components/BackgroundImage";
import Badge from "@components/Badge";
import React from "react";
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
      <Badge>{article.type}</Badge>
      <h1 className={styles["articleHeader__title"]}>{article.title}</h1>
      <p className={styles["articleHeader__description"]}>
        {article.description}
      </p>
      <p className={styles["articleHeader__author"]}>By {article.author}</p>
    </section>
  );
};

export default ArticleHeader;
