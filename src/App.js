import "./App.css";
import React from "react";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/static/NavBar";
import Home from "./components/static/Home";
import ArticleList from "./components/ArticleList";

function App() {
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
