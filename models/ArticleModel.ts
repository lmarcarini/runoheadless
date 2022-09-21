export type ArticleCompactModel = {
  createdAt: string;
  description: string;
  title: string;
  image: string;
  badge: string;
  id: string;
  readingTime?: string;
};

export type ArticleModel = {
  description: string;
  title: string;
  image: string;
  badge: string;
  createdAt: string;
  readingTime: string;
  text: {
    __html: string;
  };
  tags: Array<string>;
  author: {
    name: string;
    profession: string;
    image: string;
  };
  relatedArticles: ArticleCompactModel[];
};
