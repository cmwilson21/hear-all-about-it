import { React, useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";

const ArticleList = (articles) => {
  console.log("article list", articles.articles);
  // const [article, setArticle] = useState([]);

  // return an article card for each article in the articles array

  return (
    <div>
      <h1>Article List</h1>
      {articles.articles.map((article) => (
        <ArticleCard article={article} />
      ))}
      Here is the list of news
    </div>
  );
};

export default ArticleList;
