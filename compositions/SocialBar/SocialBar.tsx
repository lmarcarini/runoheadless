import Link from "next/link";
import React from "react";
import {
  BehanceIcon,
  FacebookIcon,
  PinterestIcon,
  TwitterIcon,
} from "@components/Icons";
import styles from "./SocialBar.module.css";

type Props = {};

const SocialBar = (props: Props) => {
  return (
    <div className={styles.socialBar}>
      <Link href={"/"}>
        <a role="link" aria-label="facebook">
          <FacebookIcon color="black" />
        </a>
      </Link>
      <Link href={"/"}>
        <a role="link" aria-label="twitter">
          <TwitterIcon color="black" />
        </a>
      </Link>
      <Link href={"/"}>
        <a role="link" aria-label="pinterest">
          <PinterestIcon color="black" />
        </a>
      </Link>
      <Link href={"/"}>
        <a role="link" aria-label="behance">
          <BehanceIcon color="black" />
        </a>
      </Link>
    </div>
  );
};

export default SocialBar;
