import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Col, Row } from "react-bootstrap";

const Photo = ({ id, server, secret }) => {
  return (
    <li>
      <img
        src={`https://live.staticflickr.com/${server}/${id}_${secret}.jpg`}
      ></img>
    </li>
  );
};

export default Photo;
