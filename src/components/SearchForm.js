//import React libraries and add-ons
import React, { Component } from "react";

//import css
import "../css/Nav.css";
import "../css/SearchForm.css";

//import bootstrap-react add-on + elements
import { Button, Form, Row, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default class SearchForm extends Component {
  state = {
    searchText: "",
  };

  onSearchChange = (e) => {
    this.setState({ searchText: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSearch(this.tag.value);
    this.props.pushUrl(this.tag.value);
    e.currentTarget.reset();
  };

  render() {
    return (
      <Card>
        <form className="search-form" onSubmit={this.handleSubmit}>
          <Row>
            <Form.Control
              type="search"
              className="me-auto"
              onChange={this.onSearchChange}
              name="search"
              ref={(input) => (this.tag = input)}
              placeholder="Search"
              required
            />
            <Button size="sm" type="submit" className="search-button">
              <svg
                fill="#fff"
                height="24"
                viewBox="0 0 23 23"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                <path d="M0 0h24v24H0z" fill="none" />
              </svg>
            </Button>
          </Row>
        </form>
      </Card>
    );
  }
}
