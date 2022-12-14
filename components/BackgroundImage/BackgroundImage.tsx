import React from "react";
import styles from "./BackgroundImage.module.css";

type Props = {
  src: string;
};

const BackgroundImage = ({ src }: Props) => {
  return (
    <picture className={styles["backgroundImage"]}>
      <img src={src} alt="" className={styles["backgroundImage"]} />
    </picture>
  );
};

export default BackgroundImage;
