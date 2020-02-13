import React, { Component } from "react";
import { registerUser, loginUser } from "./services/api_helper";
// import logo from "./logo.svg";
import Header from "./components/header";
import { Route, withRouter } from "react-router-dom";
import OrderContainer from "./components/orderContainer";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";
import "./App.css";
import AutopartContainer from "./components/autopartContainer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      currentUser: false,
      errorText: "",
      loggedIn: false
    };
  }

  handleRegister = async (e, registerData) => {
    e.preventDefault();
    const currentUser = await registerUser(registerData);
    if (!currentUser.errorMessage) {
      this.setState({ currentUser, loggedIn: true });
      this.props.history.push("/orders");
    } else {
      this.setState({ errorText: currentUser.errorMessage });
    }
  };

  handleLogin = async (e, loginData) => {
    e.preventDefault();
    console.log("hit handlelogin");
    const currentUser = await loginUser(loginData);
    console.log(currentUser);
    this.setState({ currentUser });
    this.props.history.push("/orders");
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

        <AutopartContainer />
        <Route
          path="/login"
          render={() => <LoginForm handleLogin={this.handleLogin} />}
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
        <Route path="/orders" render={() => <OrderContainer />} />
      </div>
    );
  }
}

export default withRouter(App);
