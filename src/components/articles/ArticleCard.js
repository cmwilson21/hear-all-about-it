import React from "react";

const ArticleCard = (article) => {
  // return an article card for each article in the articles array containing title, author, and source_id
  // console.log("card", article);

  return (
    <div>
      <h3>Article Card</h3>
      <img src={article.article.image_url}></img>
      Title: {article.article.title}
      <br />
      Preview: {article.article.description}
      <br />
      Source: {article.article.source_id}
      <br />
      <a target="_blank" href={article.article.link}>
        Read More..{" "}
      </a>
    </div>
  );
};

export default ArticleCard;
