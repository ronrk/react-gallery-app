import React, { Component } from "react";

import Photo from "./Photo";

import "../css/PhotosContainer.css";

class PhotosContainer extends Component {
  componentDidMount() {
    this.props.fetchByTag(this.props.match.match.params.id);
  }

  render() {
    let gifsDisplay = this.props.data.map((gif, i) => {
      return (
        <Photo
          key={gif.id}
          id={gif.id}
          server={gif.server}
          secret={gif.secret}
        />
      );
    });
    return (
      <div className="photo-container">
        <h2>Photos of "{this.props.tag}"</h2>
        <ul className="photo-list">{gifsDisplay}</ul>
      </div>
    );
  }
}

export default PhotosContainer;
