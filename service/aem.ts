import Article from "@sections/Article";
import { ArticleModel } from "models/ArticleModel";

const encodeValue = (valueToString: string) =>
  Buffer.from(valueToString).toString("base64");

const myHeaders = new Headers();
const user = `admin`;
const pass = `admin`;
myHeaders.append("Authorization", "Basic " + encodeValue(`${user}:${pass}`));
myHeaders.append("Content-Type", "application/json");

export const fetchArticle = async (articlePath: string) => {
  try {
    const response = await fetch(
      `http://localhost:4502/graphql/execute.json/Runo/getArticle;apath=/content/dam/projects/runoheadless/articles/${articlePath}`,
      { method: "GET", headers: myHeaders }
    );
    const data = await response.json();
    const article = {
      ...data.data.articleByPath.item,
      readingTime:
        data.data.articleByPath.item.estimatedTimeToRead + " minutes",
      createdAt: data.data.articleByPath.item.createdAt.replaceAll("-", "."),
      image:
        "http://localhost:4502/" +
        data.data.articleByPath.item.bannerIllustration._path,
      tags: data.data.articleByPath.item.tags.map((tag: string) =>
        tag.replace(/.*\//, "")
      ),
      text: { __html: data.data.articleByPath.item.content.html },
      author: {
        name: data.data.articleByPath.item.author.name,
        profession: data.data.articleByPath.item.author.profession,
        image:
          "http://localhost:4502/" +
          data.data.articleByPath.item.author.portrait._path,
      },
      relatedArticles: data.data.articleByPath.item.relatedArticles.map(
        (article: {
          title: string;
          description: string;
          _path: string;
          bannerIllustration: { _path: string };
          author: {
            name: string;
            profession: string;
            portrait: { _path: string };
          };
        }) => {
          return {
            ...article,
            id: article._path.split("/").pop(),
            image: "http://localhost:4502/" + article.bannerIllustration._path,
            author: {
              name: article.author.name,
              profession: article.author.profession,
              image: "http://localhost:4502/" + article.author.portrait._path,
            },
          };
        }
      ),
    } as ArticleModel;
    return article;
  } catch (err) {
    console.log(err);
  }
};

export const fetchArticlesPaths = async () => {
  try {
    const response = await fetch(
      "http://localhost:4502/graphql/execute.json/Runo/getArticlesPaths;apath=/content/dam/projects/runoheadless/articles",
      { method: "GET", headers: myHeaders }
    );
    const data = await response.json();
    return data.data.articleList.items.map(({ _path }: { _path: string }) => {
      return { params: { id: _path.split("/").pop() } };
    });
  } catch (err) {
    console.log(err);
  }
};
