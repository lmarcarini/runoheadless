import { Separator } from "@radix-ui/react-separator";
import React from "react";
import AuthorInfo from "../../components/AuthorInfo";
import styles from "./ArticleBody.module.css";

type Props = {};

const article = {
  createdAt: "08.08.2021",
  readingTime: "4 minutes",
  text: {
    __html:
      "<p>Seamlessly syndicate cutting-edge architectures rather than collaborative collaboration and idea-sharing. Proactively incubate visionary interfaces whereas premium benefits. Seamlessly negotiate ubiquitous leadership skills rather than parallel ideas. Dramatically visualize superior interfaces for best-of-breed alignments. Synergistically formulate performance based users through customized relationships. Interactively deliver cross-platform ROI via granular systems. Intrinsicly enhance effective initiatives vis-a-vis orthogonal outsourcing. Rapidiously monetize market-driven opportunities with multifunctional users. Collaboratively enhance visionary opportunities through revolutionary schemas. Progressively network just in time customer service without real-time scenarios.</p>",
  },
  tags: ["ADVENTURE", "PHOTO", "DESIGN"],
  author: { name: "Jennifer Lawrence", profession: "Designer" },
};

const ArticleBody = (props: Props) => {
  return (
    <div className={styles["grid"]}>
      <div className={styles["sideInfo"]}>
        {article.createdAt}
        <Separator />
        {article.readingTime}
      </div>
      <div className={styles["text"]} dangerouslySetInnerHTML={article.text} />
      <div className={styles["tags"]}>Tags</div>
      <Separator className={styles["separator"]} />
      <div className={styles["author"]}>
        <AuthorInfo />
        <div className="socialMedia"></div>
      </div>
    </div>
  );
};

export default ArticleBody;
