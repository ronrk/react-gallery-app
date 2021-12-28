import React from "react";

const Home = (props) => {
  if (props.tag === null) {
    let path = `${props.match.match.path}photo/${props.tag}`;
    props.match.history.push(path);
  }
  return <h2>Home</h2>;
};

export default Home;
