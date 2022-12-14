import Footer from "@sections/Footer";
import Header from "@sections/Header";
import styles from "./Layout.module.css";
import React from "react";
import SkipToContent from "@components/SkipToContent";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className={styles.body}>
      <SkipToContent />
      <header className={styles.header}>
        <Header />
      </header>
      <main className={styles.main} id="main">
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
