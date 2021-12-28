import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="main-nav">
      <ul>
        <li>
          <NavLink to="/photo/cats">Cats</NavLink>
        </li>
        <li>
          <NavLink to="/photo/dogs">Dogs</NavLink>
        </li>
        <li>
          <NavLink to="/photo/computers">Computers</NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
