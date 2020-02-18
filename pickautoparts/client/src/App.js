import React, { Component } from "react";
import ResetPassword from "./components/resetPassword";
import ForgotPassword from "./components/forgotPassword";
import { registerUser, loginUser } from "./services/api_helper";
// import logo from "./logo.svg";
import Header from "./components/header";
import { Route, withRouter } from "react-router-dom";
import OrderContainer from "./components/orderContainer";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";
import "./App.css";
import AutopartContainer from "./components/autopartContainer";
import Cart from "./components/cart";
import SingleAutopart from "./components/singleAutopart";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      currentUser: false,
      errorText: "",
      loggedIn: false,
      cart: []
    };
  }

  // handleOrder = (e, autopart) => {
  //   e.preventDefault();
  //   let cartFlag = true;
  //   let newCart = this.state.cart;
  //   for (let i = 0; i < newCart.length; i++) {
  //     if (newCart[i].id === autoparts.id) {
  //       cartFlag = false;
  //       break;
  //     }
  //   }
  //   if (cartFlag) {
  //     newCart.push(autoparts);
  //   }
  //   this.setState({
  //     cart: newCart
  //   });
  // };

  handleRegister = async (e, registerData) => {
    e.preventDefault();
    const currentUser = await registerUser(registerData);
    if (!currentUser.errorMessage) {
      this.setState({ currentUser, loggedIn: true });
      this.props.history.push("/autoparts");
    } else {
      this.setState({ errorText: currentUser.errorMessage });
    }
  };

  handleLogin = async (e, loginData) => {
    e.preventDefault();
    const currentUser = await loginUser(loginData);
    console.log(currentUser);
    this.setState({ currentUser });
    this.props.history.push("/home");
  };

  handleLogout = e => {
    e.preventDefault();
    this.setState({
      currentUser: false
    });
    localStorage.removeItem("authToken");
    localStorage.removeItem("name");
    localStorage.removeItem("email");
  };

  render() {
    return (
      <div className="App">
        <Header
          currentUser={this.state.currentUser}
          handleLogout={this.handleLogout}
        />

        <Route path="/home" render={() => <AutopartContainer />} />
        <Route
          path="/login"
          render={() => (
            <LoginForm
              handleLogin={this.handleLogin}
              handleReset={this.handleReset}
              errorText={this.state.errorText}
            />
          )}
        />
        <Route
          path="/register"
          render={() => (
            <RegisterForm
              handleRegister={this.handleRegister}
              errorText={this.state.errorText}
            />
          )}
        />
        <Route exact path="/forgotpassword" render={() => <ForgotPassword />} />
        <Route
          exact
          path="/passwordreset/:token"
          render={props => <ResetPassword token={props.match.params.token} />}
        />
        <Route path="/orders" render={() => <OrderContainer />} />
        <Route path="/cart" render={() => <Cart />} />
        <Route
          path="/autoparts/single/:id"
          render={props => (
            <SingleAutopart
              autopartId={props.match.params.id}
              // autoparts={this.state.autoparts}
            />
          )}
        />
      </div>
    );
  }
}

export default withRouter(App);
