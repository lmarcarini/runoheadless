import Article from "@sections/Article";
import Footer from "@sections/Footer";
import Header from "@sections/Header";
import RelatedArticles from "@sections/RelatedArticles";
import { ArticleModel } from "models/ArticleModel";
import type { NextPage } from "next";
import Head from "next/head";
import { fetchArticle, fetchArticlesPaths } from "service/aem";
import styles from "styles/Home.module.css";

const ArticlePage: NextPage<{ article: ArticleModel }> = ({ article }) => {
  console.log(article.title);
  return (
    <div className={styles.container}>
      <Head>
        <title>{article.title} - Runo Headless</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Article article={article} />
      {article.relatedArticles.length > 0 && (
        <RelatedArticles articles={article.relatedArticles} />
      )}
    </div>
  );
};

export default ArticlePage;

export async function getStaticPaths() {
  const paths = await fetchArticlesPaths();
  return {
    paths,
    fallback: false, // can also be true or 'blocking'
  };
}

export async function getStaticProps(context: { params: { id: string } }) {
  const article = await fetchArticle(context.params.id);

  return {
    props: { article },
  };
}
