import React from "react";
import { NavLink } from "react-router-dom";

import SearchForm from "./SearchForm";

import "../css/Nav.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { ListGroup, ListGroupItem } from "react-bootstrap";

const Nav = (props) => {
  return (
    <nav className="main-nav">
      <ListGroup horizontal>
        <ListGroup.Item action variant="info">
          <NavLink to={`/photo/cats`}>Cats</NavLink>
        </ListGroup.Item>
        <ListGroup.Item action variant="info">
          <NavLink to="/photo/dogs">Dogs</NavLink>
        </ListGroup.Item>
        <ListGroup.Item action variant="info">
          <NavLink to="/photo/computers">Computers</NavLink>
        </ListGroup.Item>
        <ListGroupItem variant="info">
          <SearchForm onSearch={props.onSearch} />
        </ListGroupItem>
      </ListGroup>
    </nav>
  );
};
export default Nav;
