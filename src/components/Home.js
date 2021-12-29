import React, { Component } from "react";

class Home extends Component {
  componentDidUpdate() {
    let path = `photo/${this.props.tag}`;
    this.props.match.history.push(path);
  }

  render() {
    return <h2>Home</h2>;
  }
}

export default Home;
