import AuthorInfo from "@components/AuthorInfo";
import Tag from "@components/Tag";
import SocialBar from "@compositions/SocialBar";
import { Separator } from "@radix-ui/react-separator";
import { ArticleModel } from "models/ArticleModel";
import React from "react";
import styles from "./ArticleBody.module.css";

type Props = {
  article: ArticleModel;
};

const ArticleBody = ({ article }: Props) => {
  return (
    <div className={styles["grid"]}>
      <div className={styles["sideInfo"]}>
        <time>{article.createdAt}</time>
        <Separator className={styles["sideInfo__separator"]} />
        <span>{article.readingTime}</span>
      </div>
      <div className={styles["text"]} dangerouslySetInnerHTML={article.text} />
      <div className={styles["tags"]}>
        {article.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
      <Separator className={styles["separator"]} />
      <div className={styles["author"]}>
        <AuthorInfo authorInfo={article.author} />
        <div className="socialMedia">
          <SocialBar />
        </div>
      </div>
    </div>
  );
};

export default ArticleBody;
