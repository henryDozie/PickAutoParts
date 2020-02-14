import React, { Component } from "react";
import { indexAutoparts } from "../services/api_helper";

class AutopartContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      autoparts: [],
      apiLoaded: false
    };
  }

  

  render() {
    return (
      <div>
      
        </div>
    );
  }
}

export default AutopartContainer;
