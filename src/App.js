import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import "./App.scss";

import HomePage from "./components/Pages/HomePage/HomePage";
import ShopPage from "./components/Pages/Shop/Shop";
import Header from "./components/Header/Header";
import SignInSignOut from "./components/Pages/SignInSignOut/SignInSignOut";
import { auth } from "./firebase/firebase.utils";

export default class App extends Component {
  state = {
    currentUser: null
  };

  unsubscribeFromAuth = null;

  componentDidMount() {
    // open subscription/messaging between app and firebase app
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  componentWillUnmount() {
    // close subscription on unmount
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInSignOut} />
        </Switch>
      </div>
    );
  }
}
