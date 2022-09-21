import BackgroundImage from "@components/BackgroundImage";
import Badge from "@components/Badge";
import { Separator } from "@radix-ui/react-separator";
import { ArticleCompactModel } from "models/ArticleModel";
import Link from "next/link";
import React from "react";
import styles from "./Carousel.module.css";

type Props = {
  article: ArticleCompactModel;
};

const Carousel = ({ article }: Props) => {
  const { image, badge, title, description, createdAt, id } = article;

  return (
    <section className={styles["carousel"]}>
      <BackgroundImage src={image} />
      <Badge>{badge}</Badge>
      <Link href={"/articles/" + id}>
        <a className={styles["title"]}>{title}</a>
      </Link>
      <div className={styles["description"]}>
        <time className={styles["description__date"]}>{createdAt}</time>
        <Separator className={styles["description__separator"]} />
        <span className={styles["description__text"]}>{description}</span>
      </div>
    </section>
  );
};

export default Carousel;
