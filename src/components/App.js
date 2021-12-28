import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import axios from "axios";

import "../css/App.css";
import Photo from "./Photo";
import SearchForm from "./SearchForm";
import Nav from "./Nav";
import NotFound from "./NotFound";
import Home from "./Home";

class App extends Component {
  state = {
    data: [],
    curGif: null,
  };

  componentDidMount() {
    this.performSearch();
  }

  performSearch = (tag) => {
    axios
      .get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=512dde26bd328d0f235a47c55d84e2ea&tags=${tag}&per_page=24&page=1&format=json&nojsoncallback=11`
      )
      .then((res) => {
        this.setState({ data: res.data.photos.photo, curGif: tag });
      })
      .catch((error) => console.log("Error with fetching data ", error));
  };

  render() {
    return (
      <BrowserRouter>
        <div className="contianer">
          <SearchForm onSearch={this.performSearch} />
          <Nav />
          <Switch>
            <Route
              exact
              path="/"
              render={(matchProps) => (
                <Home tag={this.state.curGif} match={matchProps} />
              )}
            />
            <Route
              path="/photo/:id?"
              render={(matchProps) => (
                <Photo
                  title={this.state.curGif}
                  fetchByTag={this.performSearch}
                  matchProps={matchProps}
                  data={this.state.data}
                />
              )}
            />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
