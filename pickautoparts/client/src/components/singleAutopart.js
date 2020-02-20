import React, { Component } from "react";
import { showAutopart } from "../services/api_helper";
// import { Link } from 'react-router-dom';

export default class SingleAutopart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPart: null
    };
  }

  setcurrentPart = async () => {
    const currentPart = await showAutopart(this.props.autopartId);
    console.log(currentPart);
    this.setState({ currentPart });
  };

  componentDidMount() {
    this.setcurrentPart();
  }


  render() {
    console.log(this.props);
    console.log("Hello");
    return (
      <div>
        <h1>TESTING</h1>
        {this.state.currentPart && (
          <>
            <h1>{this.state.currentPart.name}</h1>
            <h1>{this.state.currentPart.description}</h1>
            <img src={this.state.currentPart.img_url}></img>
            <button>
              <h3>Add to Cart</h3>
            </button>
          </>
        )}
      </div>
    );
  }
}
