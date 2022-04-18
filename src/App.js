import "./App.css";
import { React, useState, useEffect } from "react";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/static/NavBar";
import Home from "./components/static/Home";
import ArticleList from "./components/articles/ArticleList";
// import { API_KEY } from "./Globals";
import { apiUrl } from "./Globals";

function App() {
  const [articles, setArticles] = useState([]);
  // const apiUrl = `https://newsapi.org/v2/top-headlines?sources=bbc-news,abc-news,fox-news,reuters,the-washington-post,politico,cbs-news,associated-press,cnn&apiKey=${API_KEY}`;

  useEffect(() => {
    const fetchArticles = async () => {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setArticles(data.articles);
      // console.log("data", data);
      // console.log("articles", articles);
    };
    fetchArticles();
  }, []);
  // console.log("articles", articles.articles[0].source.name);
  // console.log("articles", articles);

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<ArticleList articles={articles} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
