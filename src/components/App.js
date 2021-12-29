//import React libraries and add-ons
import React, { Component } from "react";
import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom";

//import bootstrap-react add-on + elements
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

//import axios for fetching
import axios from "axios";

//import css
import "../css/App.css";

//import components
import Header from "./Header";
import PhotosContainer from "./PhotosContainer";
import Nav from "./Nav";
import NotFound from "./NotFound";
import Home from "./Home";

class App extends Component {
  //initializing App state
  state = {
    data: [],
    curGif: null,
    loading: true,
  };

  componentDidMount() {
    if (this.state.data.length > 0) {
      this.performSearch(this.state.curGif);
    }
  }

  //performSearch function that fetch interactive data from the api than update this.state than push the URL path
  performSearch = (tag = "cats") => {
    this.setState({
      loading: true,
    });
    axios
      .get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=512dde26bd328d0f235a47c55d84e2ea&tags=${tag}&per_page=24&page=1&format=json&nojsoncallback=11`
      )
      .then((res) => {
        this.setState({
          data: res.data.photos.photo,
          curGif: tag,
          loading: false,
        });
      })
      .catch((error) => console.log("Error with fetching data ", error));
    let path = `${this.props.match.path}${tag}`;
    this.props.history.push(path);
  };

  //render method
  render() {
    console.log(this.props);
    return (
      <Container fluid>
        <BrowserRouter>
          <div className="contianer App">
            <Header />
            <Route
              render={(matchProps) => (
                <Nav onSearch={this.performSearch} match={matchProps} />
              )}
            />
            <Switch>
              {/*               <Route
                exact
                path="/"
                render={(matchProps) => (
                  <Home tag={this.state.curGif} match={matchProps} />
                )}
              /> */}

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
              <Route component={NotFound} />
            </Switch>
          </div>
        </BrowserRouter>
      </Container>
    );
  }
}

export default withRouter(App);
