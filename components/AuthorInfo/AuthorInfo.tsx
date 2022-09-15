import React from "react";
import * as Avatar from "@radix-ui/react-avatar";
import styles from "./AuthorInfo.module.css";

type Props = {
  authorInfo: {
    name: string;
    profession: string;
    image: string;
  };
};

const AuthorInfo = ({ authorInfo }: Props) => {
  const { name, profession, image } = authorInfo;
  return (
    <div className={styles.authorInfo}>
      <Avatar.Root className={styles.avatar__root}>
        <Avatar.Image src={image} alt={name} className={styles.avatar__image} />
        <Avatar.Fallback className={styles.avatar__fallback}>
          NC
        </Avatar.Fallback>
      </Avatar.Root>
      <span className={styles.authorName}>{name}</span>
      <span className={styles.authorProfession}>{profession}</span>
    </div>
  );
};

export default AuthorInfo;
