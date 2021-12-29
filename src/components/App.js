import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

import axios from "axios";

import "../css/App.css";
import Header from "./Header";
import PhotosContainer from "./PhotosContainer";
import Nav from "./Nav";
import NotFound from "./NotFound";
import Home from "./Home";

class App extends Component {
  state = {
    data: [],
    curGif: null,
  };

  performSearch = (tag) => {
    this.setState({ curGif: tag });
    axios
      .get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=512dde26bd328d0f235a47c55d84e2ea&tags=${tag}&per_page=24&page=1&format=json&nojsoncallback=11`
      )
      .then((res) => {
        this.setState({ data: res.data.photos.photo });
      })
      .catch((error) => console.log("Error with fetching data ", error));
  };

  render() {
    return (
      <Container fluid>
        <BrowserRouter>
          <div className="contianer App">
            <Header />
            <Nav onSearch={this.performSearch} />
            <Switch>
              <Route
                exact
                path="/"
                render={(matchProps) => (
                  <Home tag={this.state.curGif} match={matchProps} />
                )}
              />

              <Route
                exact
                path="/photo/:id?"
                render={(matchProps) => (
                  <PhotosContainer
                    tag={this.state.curGif}
                    fetchByTag={this.performSearch}
                    match={matchProps}
                    data={this.state.data}
                  />
                )}
              />
              <Route component={NotFound} />
            </Switch>
          </div>
        </BrowserRouter>
      </Container>
    );
  }
}

export default App;
