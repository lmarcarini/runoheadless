import Link from "next/link";
import React from "react";
import {
  BehanceIcon,
  FacebookIcon,
  PinterestIcon,
  TwitterIcon,
  YoutubeIcon,
} from "@components/Icons";
import styles from "./SocialBar.module.css";

type Props = {
  youtube?: string;
};

const SocialBar = ({ youtube }: Props) => {
  return (
    <ul className={styles.socialBar}>
      <li>
        <Link href={"/"}>
          <a role="link" aria-label="facebook">
            <FacebookIcon color="black" />
          </a>
        </Link>
      </li>
      <li>
        <Link href={"/"}>
          <a role="link" aria-label="twitter">
            <TwitterIcon color="black" />
          </a>
        </Link>
      </li>
      {youtube && (
        <li>
          <Link href={"/"}>
            <a role="link" aria-label="youtube">
              <YoutubeIcon color="black" />
            </a>
          </Link>
        </li>
      )}
      <li>
        <Link href={"/"}>
          <a role="link" aria-label="pinterest">
            <PinterestIcon color="black" />
          </a>
        </Link>
      </li>
      <li>
        <Link href={"/"}>
          <a role="link" aria-label="behance">
            <BehanceIcon color="black" />
          </a>
        </Link>
      </li>
    </ul>
  );
};

export default SocialBar;
