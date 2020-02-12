import React, { Component } from "react";
import Form from "./searchform";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <header>
          <div className="logo"></div>
          <div className="headRegion">
            <div className="loginAndSignUp">
              <div className="login">
                <button><i class="fas fa-sign-in-alt fa-3x"></i></button>
              </div>
              <div className="signup">
                <button><i class="fas fa-user-plus fa-3x"></i></button>
              </div>
            </div>
            <div className="cartAndBar">
              <Form />
              <div className="profileButton">
                <button>
                  <i class="fas fa-user fa-3x"></i>
                </button>
              </div>
              <i class="fas fa-shopping-cart fa-3x"></i>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;
