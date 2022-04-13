import { React, useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";
import MenuListComposition from "./NetworkButton";

const ArticleList = (articles) => {
  console.log("article list", articles);

  // return an article card for each article in the articles array

  return (
    <div>
      {/* {console.log(articles)} */}
      <h3>These are the latest headlines from around the world.</h3>
      <div className="menu">{MenuListComposition()}</div>
      {articles.articles.map((article) => {
        return <ArticleCard key={article.title} article={article} />;
      })}
    </div>
  );
};

export default ArticleList;
