import React, { Component } from "react";

class Photo extends Component {
  componentWillMount() {
    this.props.fetchByTag(this.props.matchProps.match.params.id);
  }

  render() {
    return (
      <div className="photo-container">
        <h2>{this.props.matchProps.match.params.id.toUpperCase()} Gifs</h2>
        <ul>
          {this.props.data.map((gif, i) => {
            return (
              <li key={gif.id}>
                <img
                  src={`https://live.staticflickr.com/${gif.server}/${gif.id}_${gif.secret}.jpg`}
                ></img>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Photo;
/*   */
