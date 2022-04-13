import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
      <h3 className="title">Hear All About It</h3>
      <ul className="nav-ul">
        <li className="nav-li">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="nav-li">
          <NavLink to="/news">News</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
