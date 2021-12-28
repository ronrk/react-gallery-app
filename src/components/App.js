import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import axios from "axios";

import "../css/App.css";

import SearchForm from "./SearchForm";
import Nav from "./Nav";
import Home from "./Home";
import Photo from "./Photo";
import NotFound from "./NotFound";

class App extends Component {
  state = {
    data: [],
    curGif: null,
  };

  performFetch = (tag) => {
    this.setState({ curGif: tag });
    console.log(tag);
  };

  componentDidMount() {
    if (this.state.curGif) {
      this.performFetch(this.state.curGif);
    }
  }

  render() {
    return (
      <BrowserRouter>
        <div className="contianer">
          <SearchForm onSearch={this.performFetch} />
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              path="/photo/:id"
              render={(matchProps) => {
                return (
                  <Photo
                    data={this.state.data}
                    match={matchProps}
                    fetchData={this.performFetch}
                  />
                );
              }}
            />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
