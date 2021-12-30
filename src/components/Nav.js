//import React libraries and add-ons
import React from "react";
import { NavLink } from "react-router-dom";

//import components
import SearchForm from "./SearchForm";

//import css
import "../css/Nav.css";

//import bootstrap-react add-on + elements
import "bootstrap/dist/css/bootstrap.min.css";
import { ListGroup, ListGroupItem } from "react-bootstrap";

const Nav = (props) => {
  return (
    <nav className="main-nav">
      <ListGroup horizontal>
        <ListGroup.Item action variant="info">
          <NavLink to={`/cats`}>Cats</NavLink>
        </ListGroup.Item>
        <ListGroup.Item action variant="info">
          <NavLink to="/dogs">Dogs</NavLink>
        </ListGroup.Item>
        <ListGroup.Item action variant="info">
          <NavLink to="/computers">Computers</NavLink>
        </ListGroup.Item>
      </ListGroup>
    </nav>
  );
};
export default Nav;
