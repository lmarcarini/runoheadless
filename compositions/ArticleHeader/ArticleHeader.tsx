import BackgroundImage from "@components/BackgroundImage";
import Badge from "@components/Badge";
import { ArticleModel } from "models/ArticleModel";
import React from "react";
import styles from "./ArticleHeader.module.css";

type Props = {
  article: ArticleModel;
};

const ArticleHeader = ({ article }: Props) => {
  const { image, badge, title, description, author } = article;
  return (
    <section className={styles["articleHeader"]}>
      <BackgroundImage src={image} />
      <Badge>{badge}</Badge>
      <h1 className={styles["articleHeader__title"]}>{title}</h1>
      <p className={styles["articleHeader__description"]}>{description}</p>
      <p className={styles["articleHeader__author"]}>By {author.name}</p>
    </section>
  );
};

export default ArticleHeader;
