import React, { Component } from "react";
import Form from "./searchform";
import { verifyUser, indexOrders } from "../services/api_helper";
import { Link, withRouter } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      currentUser: false,
      errorText: "",
      loggedIn: false,

    };
  }
  componentDidMount() {
    verifyUser();
    if (localStorage.getItem("authToken")) {
      const name = localStorage.getItem("name");
      const email = localStorage.getItem("email");
      const user = { name, email };
      user &&
        this.setState({
          currentUser: user
        });
    }
  }

  increCount = async (e) => {
    e.preventDefault()
    const resp = await indexOrders()
    const count = resp.length
    this.setState({ count })
  }

  profileSubmit = async e => {
    e.preventDefault();
    const resp = await indexOrders();
    console.log(resp);

    const smthing = resp.filter(resp => resp.created_by === 1);

    console.log(smthing);
  };

  render() {
    console.log(this.state.currentUser);
    return (
      <div>
        <header>
          <Link to="/home">
            <div className="logo"> <img src="../images/logo.png"/></div>
          </Link>
          <div className="headRegion">
            <div className="loginAndSignUp">
              <div className="login">
                {this.props.currentUser ? (
                  <div className="logout">
                    <button onClick={e => this.props.handleLogout(e)}>
                      <h2>Logout</h2>
                    </button>
                  </div>
                ) : (
                  <Link to="/login">
                    <button>
                      <i className="fas fa-sign-in-alt fa-3x"></i>
                    </button>
                  </Link>
                )}
              </div>
              <div className="signup">
                <Link to="/register">
                  <button>
                    <i className="fas fa-user-plus fa-3x"></i>
                  </button>
                </Link>
              </div>
            </div>
            {/* )} */}
            <div className="cartAndBar">
              <Form handleLogin={this.handleLogin} />
              {this.props.currentUser && (
                <div className="profileButton">
                  <button onClick={e => this.profileSubmit(e)}>
                    {/* <i className="fas fa-user fa-3x"></i> */}
                    <h2>Profile</h2>
                  </button>
                </div>
              )}
              <div className="cart">
                <Link to="/cart">
                  <i className="fas fa-shopping-cart fa-3x"></i>
                </Link>
                <h3 className="cartNum">{this.props.cart.length}</h3>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default withRouter(Header);
