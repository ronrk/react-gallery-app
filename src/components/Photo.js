import React from "react";

import "../css/PhotosContainer.css";

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
