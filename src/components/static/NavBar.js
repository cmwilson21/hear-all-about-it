import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <ul>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/news">News</NavLink>
      </ul>
    </div>
  );
};

export default NavBar;
