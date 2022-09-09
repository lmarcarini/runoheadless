import BackgroundImage from "@components/BackgroundImage";
import Badge from "@components/Badge";
import React from "react";
import styles from "./ArticleCard.module.css";

type Props = {};

const ArticleCard = (props: Props) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__header}>
        <Badge>Badge</Badge>
      </div>
      <div className={styles.card__body}>
        <time className={styles.card__date}>08.08.2021</time>
        <h3 className={styles.card__title}>Article card</h3>
        <p className={styles.card__description}>
          Write a long description here
        </p>
      </div>
      <BackgroundImage src="images/Rectangle 9.png" />
    </div>
  );
};

export default ArticleCard;
