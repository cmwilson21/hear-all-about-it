import { React, useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";
import MenuListComposition from "./NetworkButton";

const ArticleList = (articles) => {
  console.log("article list", articles);

  // return an article card for each article in the articles array

  return (
    <div>
      {/* {console.log(articles)} */}
      {articles.articles.map((article) => {
        return <ArticleCard key={article.title} article={article} />;
      })}
    </div>
  );

  // return (
  //   <div>
  //     {MenuListComposition()}
  //     <h1>Article List</h1>
  //     {articles.articles.map((article) => (
  //       <ArticleCard article={article} />
  //     ))}
  //   </div>
  // );
};

export default ArticleList;
