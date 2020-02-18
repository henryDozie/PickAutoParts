import React, { Component } from "react";
import { indexAutoparts } from "../services/api_helper";
import SingleAutopart from "./singleAutopart";
import { Link, Route } from "react-router-dom";
import Horizontal from "./range";
import AutoplaySlider from "./carousel";

class AutopartContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      autoparts: [],
      apiLoaded: false,
      orders: []
    };
  }

  updateCart = (e) => {
    e.preventDefault()

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
    console.log(autoparts);
  };

  render() {
    return (
      <div className="parts">
        <div className="leftSidebar">
          <h3>Categories</h3>
          <label class="container">
            <input type="checkbox" /> Acura
            <span class="checkmark"></span>
          </label>

          <label class="container">
            <input type="checkbox" /> BMW
            <span class="checkmark"></span>
          </label>

          <label class="container">
            <input type="checkbox" /> Mercedes
            <span class="checkmark"></span>
          </label>

          <label class="container">
            <input type="checkbox" /> Honda
            <span class="checkmark"></span>
          </label>

          <label class="container">
            <input type="checkbox" /> Toyota
            <span class="checkmark"></span>
          </label>

          <label class="container">
            <input type="checkbox" /> Land Rover
            <span class="checkmark"></span>
          </label>

          <label class="container">
            <input type="checkbox" /> Mazda
            <span class="checkmark"></span>
          </label>

          <label class="container">
            <input type="checkbox" /> Infinity
            <span class="checkmark"></span>
          </label>

          <label class="container">
            <input type="checkbox" /> Lexus
            <span class="checkmark"></span>
          </label>

          <label class="container">
            <input type="checkbox" /> Buick
            <span class="checkmark"></span>
          </label>

          <label class="container">
            <input type="checkbox" /> Volkswagen
            <span class="checkmark"></span>
          </label>

          <label class="container">
            <input type="checkbox" /> Peugeot
            <span class="checkmark"></span>
          </label>

          <label class="container">
            <input type="checkbox" /> BYD
            <span class="checkmark"></span>
          </label>

          <label class="container">
            <input type="checkbox" /> Ford
            <span class="checkmark"></span>
          </label>

          <label class="container">
            <input type="checkbox" /> Ram
            <span class="checkmark"></span>
          </label>

          <label class="container">
            <input type="checkbox" /> Nissan
            <span class="checkmark"></span>
          </label>

          <label class="container">
            <input type="checkbox" /> Chevrollet
            <span class="checkmark"></span>
          </label>

          <label class="container">
            <input type="checkbox" /> Jeep
            <span class="checkmark"></span>
          </label>

          <div className="rangeSlider">
            <h3>Price Range</h3>
            <Horizontal />
          </div>
        </div>

        <div className="partsContainer">
          <div className="autos">
            {this.state.apiLoaded &&
              this.state.autoparts.map(autopart => (
                <div className="autopartCard">
                  <div className="img">
                    <Link to={`/autoparts/single/${autopart.id}`}>
                      <img src={autopart.img_url} alt="loading"></img>
                    </Link>
                  </div>
                  <div className="partdesc">
                    <Link to={`/autoparts/single/${autopart.id}`}>
                      <h3>{autopart.name}</h3>
                    </Link>
                    <Link to={`/autoparts/single/${autopart.id}`}>
                      <h5>{autopart.description}</h5>
                    </Link>
                    <span>
                      <h4>$ {autopart.price}</h4>
                    </span>
                    <button onClick={e => this.props.handleOrder(e, autopart)}>
                      <h3>Add to Cart</h3>
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className="rightSideBar">
          <AutoplaySlider />
        </div>
      </div>
    );
  }
}

export default AutopartContainer;
