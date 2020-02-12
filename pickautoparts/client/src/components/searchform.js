import React, { Component } from "react";

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

export default Form