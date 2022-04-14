import { React, useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";
import MenuListComposition from "./NetworkButton";

const ArticleList = (articles) => {
  // console.log("article list", articles);

  return (
    <div>
      {/* {console.log(articles)} */}
      <h3>These are the latest headlines from around the world.</h3>
      {/* <div className="menu">{MenuListComposition()}</div> */}
      {/* pass articles into the NetworkButton component */}
      <MenuListComposition articles={articles} />
      {articles.articles.map((article) => {
        return <ArticleCard key={article.title} article={article} />;
      })}
    </div>
  );
};

export default ArticleList;
