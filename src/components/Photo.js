import React, { Component } from "react";

class Photo extends Component {
  componentDidMount() {
    this.props.fetchData(this.props.match.match.params.id);
  }

  render() {
    return <h2>{this.props.match.match.params.id} Photos</h2>;
  }
}

export default Photo;
/*   */
