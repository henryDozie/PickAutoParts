import React, { Component } from "react";
import { indexAutoparts } from "../services/api_helper";
import { Link } from "react-router-dom";
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

  updateCart = e => {
    e.preventDefault();
  };

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
      <div className="partsContainer">
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

        <div className="parts">
          <div className="autos">
            {this.state.apiLoaded &&
              this.state.autoparts.map(autopart => (
                <div className="autopartCard">
                  <div className="img">
                    <Link to={`/autoparts/single/${autopart.id}`}>
                      <img src={autopart.img_url} alt="loading" className="autoImg"></img>
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
                    {this.props.currentUser ? (
                      <button
                        onClick={e => this.props.handleClick(e, autopart)}
                        className="orderButton"
                      >
                        <h3>Add to Cart</h3>
                      </button>
                    ) : (
                      <Link to="/login">
                        <button className="orderButton"><h3>Login to Shop</h3></button>
                      </Link>
                    )}
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className="rightSideBar">
          <AutoplaySlider />
          {this.props.currentUser ? (
            <div className="rightSideBarMap">
              <iframe
                title="You are here"
                id="googleMaps"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1511.2591469244708!2d-73.987004!3d40.7506239!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa89dbb19d96569cc!2sKeens%20Steakhouse!5e0!3m2!1sen!2sus!4v1580232117513!5m2!1sen!2sus"
                frameborder="0"
                allowfullscreen=""
              ></iframe>
            </div>
          ) : (
            <div className="rightSideBarMap">
                <iframe
                title="You are here"
                id="googleMaps"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1511.2591469244708!2d-73.987004!3d40.7506239!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa89dbb19d96569cc!2sKeens%20Steakhouse!5e0!3m2!1sen!2sus!4v1580232117513!5m2!1sen!2sus"
                frameborder="0"
                allowfullscreen=""
              ></iframe>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default AutopartContainer;
