//import React libraries and add-ons
import React, { Component } from "react";
import { BrowserRouter, Route, withRouter } from "react-router-dom";

//import bootstrap-react add-on + elements
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

//import axios for fetching
import axios from "axios";

//import css
import "../css/App.css";

import apiKey from "../data/config";
//import components
import SearchForm from "./SearchForm";
import Header from "./Header";
import PhotosContainer from "./PhotosContainer";
import Nav from "./Nav";

class App extends Component {
  //initializing App state
  state = {
    data: [],
    curGif: null,
    loading: true,
  };

  //push the search input to the URL path
  pushUrl = (tag) => {
    let path = `${this.props.match.path}${tag}`;
    this.props.history.push(path);
  };

  //performSearch function that fetch interactive data from the api than update this.state
  performSearch = (tag = "cats") => {
    if (tag === null) {
      return undefined;
    } else {
      this.setState({
        loading: true,
      });
      axios
        .get(
          `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${tag}&per_page=24&page=1&format=json&nojsoncallback=11`
        )
        .then((res) => {
          this.setState({
            data: res.data.photos.photo,
            curGif: tag,
            loading: false,
          });
        })
        .catch((error) => console.log("Error with fetching data ", error));
    }
  };

  //render method
  render() {
    return (
      <Container fluid>
        <BrowserRouter>
          <div className="contianer App">
            <Header />
            <SearchForm onSearch={this.performSearch} pushUrl={this.pushUrl} />
            <Nav />
            <Route
              path="/:id?"
              render={(matchProps) => (
                <PhotosContainer
                  tag={this.state.curGif}
                  fetchByTag={this.performSearch}
                  match={matchProps}
                  data={this.state.data}
                  loading={this.state.loading}
                />
              )}
            />
          </div>
        </BrowserRouter>
      </Container>
    );
  }
}

export default withRouter(App);
