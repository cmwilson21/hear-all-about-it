import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const ArticleCard = (article) => {
  return (
    <Card className="card" sx={{ maxWidth: 600 }}>
      <CardMedia
        component="img"
        height="250"
        width="auto"
        image={article.article.image_url}
        alt="news image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {article.article.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {article.article.description}
        </Typography>
        <Typography
          variant="caption"
          display="block"
          gutterBottom
          color="text.secondary"
        >
          {article.article.source_id}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
          <a href={article.article.link} target="_blank">
            Read More
          </a>
        </Button>
      </CardActions>
    </Card>
    // <div>
    //   <h3>Article Card</h3>
    //   <img src={article.article.image_url}></img>
    //   Title: {article.article.title}
    //   <br />
    //   Preview: {article.article.description}
    //   <br />
    //   Source: {article.article.source_id}
    //   <br />
    //   <a target="_blank" href={article.article.link}>
    //     Read More..{" "}
    //   </a>
    // </div>
  );
};

export default ArticleCard;
