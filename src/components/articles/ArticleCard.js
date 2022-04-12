import React from "react";

const ArticleCard = (articles) => {
  // return an article card for each article in the articles array containing title, author, and source_id

  return (
    <div>
      <h1>Article Card</h1>
      {articles.articles.map((article) => (
        <div>
          <p>{article.title}</p>
          <p>{article.author}</p>
          <p>{article.source_id}</p>
        </div>
      ))}
    </div>
  );
};

export default ArticleCard;
