import React from "react";
import * as Avatar from "@radix-ui/react-avatar";
import styles from "./AuthorInfo.module.css";

type Props = {};

const AuthorInfo = (props: Props) => {
  return (
    <div className={styles.authorInfo}>
      <Avatar.Root className={styles.avatar__root}>
        <Avatar.Image
          src="images/Nicolas Cage.png"
          alt="Nicolas Cage"
          className={styles.avatar__image}
        />
        <Avatar.Fallback className={styles.avatar__fallback}>
          NC
        </Avatar.Fallback>
      </Avatar.Root>
      <span className={styles.authorName}>By Author Name</span>
      <span className={styles.authorProfession}>Profession</span>
    </div>
  );
};

export default AuthorInfo;
