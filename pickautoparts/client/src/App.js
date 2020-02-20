import React, { Component } from "react";
import ResetPassword from "./components/resetPassword";
import ForgotPassword from "./components/forgotPassword";
import { registerUser, loginUser, verifyUser, postAutopart } from "./services/api_helper";
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

  addToCart = (e, autoparts) => {
    verifyUser();
    e.preventDefault();
    postAutopart(this.state.currentUser.id, autoparts)
    let cartFlag = true;
    let newCartList = this.state.cart;
    for (let i = 0; i < newCartList.length; i++) {
      if (newCartList[i].id === autoparts.id) {
        cartFlag = false;
        break;
      }
    }
    if (cartFlag) {
      newCartList.push(autoparts);
    }
    this.setState({
      cart: newCartList
    });
    localStorage.setItem('cart', this.state.cart)
  };

  removeFromCart = (e, autoparts) => {
    verifyUser();
    e.preventDefault();
    

    const newList = this.state.cart.filter(part => part.id !== autoparts.id);
    this.setState({
      cart: newList
    });
  };

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
    // localStorage.setItem("authToken");
    // localStorage.setItem("name");
    // localStorage.setItem("email");
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

  render() {
    return (
      <div className="App">
        <Header
          currentUser={this.state.currentUser}
          handleLogout={this.handleLogout}
          cart={this.state.cart}
        />

        <Route
          path="/home"
          render={() => <AutopartContainer
            handleClick={this.addToCart}
            currentUser={this.state.currentUser}
          />}
        />
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
        <Route
          path="/cart"
          render={() => (
            <Cart cart={this.state.cart} handleRemove={this.removeFromCart} />
          )}
        />
        <Route
          path="/autoparts/single/:id"
          render={props => (
            <SingleAutopart
              autopartId={props.match.params.id}
            />
          )}
        />
      </div>
    );
  }
}

export default withRouter(App);
