import BackgroundImage from "@components/BackgroundImage";
import Badge from "@components/Badge";
import { Separator } from "@radix-ui/react-separator";
import { ArticleCompactModel } from "models/ArticleModel";
import Link from "next/link";
import React from "react";
import styles from "./FeaturedArticle.module.css";

type Props = {
  article: ArticleCompactModel;
};

const FeaturedArticle = ({ article }: Props) => {
  const { image, badge, title, description, createdAt, id } = article;
  return (
    <section className={styles["container"]}>
      <BackgroundImage src={image} />
      <Badge>{badge}</Badge>
      <Link href={"/articles/" + id}>
        <a className={styles["title"]}>{title}</a>
      </Link>
      <p className={styles["description"]}>{description}</p>
      <Separator className={styles["separator"]} />
      <time className={styles["time"]}>{createdAt}</time>
    </section>
  );
};

export default FeaturedArticle;
