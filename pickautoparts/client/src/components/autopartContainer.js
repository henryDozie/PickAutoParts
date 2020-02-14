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

  componentDidMount() {
    this.readAllAutoparts();
    this.setState({
      apiLoaded: true
    });
  }

  readAllAutoparts = async () => {
    const autoparts = await indexAutoparts();
    this.setState({ autoparts });
  };

  render() {
    return (
      <div>
      <div className="autos">
        {this.state.apiLoaded &&
          this.state.autoparts.map(autopart => (
            <div className="autopartCard">
              <div className="img">
                <img src={autopart.img_url} alt="loading"></img>
              </div>
              <div className="partdesc">
                <h3>{autopart.name}</h3>
                <h5>{autopart.description}</h5>
                <h4>$ {autopart.price}</h4>
              </div>
            </div>
          ))}
        </div>
        </div>
    );
  }
}

export default AutopartContainer;
