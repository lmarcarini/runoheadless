import BackgroundImage from "@components/BackgroundImage";
import Badge from "@components/Badge";
import React from "react";
import styles from "./ArticleCard.module.css";
import { ArticleCompactModel } from "models/ArticleModel";

type Props = {
  article: ArticleCompactModel;
};

const ArticleCard = ({ article }: Props) => {
  const { createdAt, badge, title, description, image } = article;
  return (
    <div className={styles.card}>
      <div className={styles.card__header}>
        <Badge>{badge}</Badge>
      </div>
      <div className={styles.card__body}>
        <time className={styles.card__date}>{createdAt}</time>
        <h3 className={styles.card__title}>{title}</h3>
        <p className={styles.card__description}>{description}</p>
      </div>
      <BackgroundImage src={image} />
    </div>
  );
};

export default ArticleCard;
