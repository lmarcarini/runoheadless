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
          <li>mike@runo.com</li>
          <li>+944 450 904 505</li>
        </ul>
      </div>
      <div className={styles.col}>
        <h2 className={styles.sectionTitle}>Explorate</h2>
        <ul className={styles.infoList}>
          <li>About</li>
          <li>Partners</li>
          <li>Job Opportunities</li>
          <li>Advertise</li>
          <li>Membership</li>
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
