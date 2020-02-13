import React, { Component } from "react";
import { withRouter } from 'react-router-dom';

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {};
  }

  render() {
    return (
      <form className="searchBar">
        <input
          type="text"
          value=""
        >
        </input>
        <button><i className="fas fa-search fa-3x"></i></button>
      </form>
    );
  }
}

export default withRouter(Form);