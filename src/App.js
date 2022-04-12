import "./App.css";
import { React, useState, useEffect } from "react";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/static/NavBar";
import Home from "./components/static/Home";
import ArticleList from "./components/articles/ArticleList";
import { API_KEY } from "./Globals";

function App() {
  const [articles, setArticles] = useState([]);
  const apiUrl = `https://newsdata.io/api/1/news?apikey=${API_KEY}&country=us,ca,gb`;

  useEffect(() => {
    const fetchArticles = async () => {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setArticles(data.results);
    };
    fetchArticles();
  }, []);
  // console.log("articles", articles[0].title);

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<ArticleList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
