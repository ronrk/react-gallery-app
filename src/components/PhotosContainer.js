//import React libraries and add-ons
import React, { Component } from "react";

//import components
import Photo from "./Photo";
import Home from "./Home";

//import css
//import "../css/PhotosContainer.css";

//import bootstrap-react add-on + elements
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";

let gifsDisplay;

class PhotosContainer extends Component {
  //after the component mount invoking fetchByData function with match.params.id as parameter

  componentDidUpdate(prevProps) {
    if (this.props.match.match.params.id !== prevProps.match.match.params.id)
      this.props.fetchByTag(this.props.match.match.params.id);
  }

  render() {
    //iterating over data and return a jsx list elements
    gifsDisplay = this.props.data.map((gif, i) => {
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
        {this.props.tag ? (
          this.props.loading ? (
            <h3>The Pages Is Loading, It May Takes A Couple Of Seconds...</h3>
          ) : (
            <div>
              <h2>Photos of "{this.props.tag}"</h2>
              <ul className="photo-list">{gifsDisplay}</ul>
            </div>
          )
        ) : (
          <Home />
        )}
      </div>
    );
  }
}

export default PhotosContainer;

// if loading === false and tag === false => <Home />
// if loading === true => Loading
// if tag=== true and loading === false => <Photo />
