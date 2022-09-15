import SocialBar from "@compositions/SocialBar";
import React from "react";
import styles from "./FooterBody.module.css";

type Props = {};

const FooterBody = (props: Props) => {
  return (
    <div className={styles.body}>
      <div className={styles.col}>
        <h2 className={styles.sectionTitle}>Contact the Publisher</h2>
        <ul className={styles.infoList}>
          <li>
            <a href="mailto:mike@runo.com">mike@runo.com</a>
          </li>
          <li>
            <a href="tel:+944450904505">+944 450 904 505</a>
          </li>
        </ul>
      </div>
      <div className={styles.col}>
        <h2 className={styles.sectionTitle}>Explorate</h2>
        <ul className={styles.infoList}>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="">Partners</a>
          </li>
          <li>
            <a href="">Job Opportunities</a>
          </li>
          <li>
            <a href="">Advertise</a>
          </li>
          <li>
            <a href="">Membership</a>
          </li>
        </ul>
      </div>
      <div className={styles.col}>
        <h2 className={styles.sectionTitle}>Headquarter</h2>
        <ul className={styles.infoList}>
          <li>191 Middleville Road, NY 1001, Sydney Australia</li>
        </ul>
      </div>
      <div className={styles.col}>
        <h2 className={styles.sectionTitle}>Connections</h2>
        <SocialBar />
      </div>
    </div>
  );
};

export default FooterBody;
