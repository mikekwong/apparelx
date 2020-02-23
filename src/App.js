import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import "./App.scss";

import HomePage from "./components/Pages/HomePage/HomePage";
import ShopPage from "./components/Pages/Shop/Shop";
import Header from "./components/Header/Header";
import SignInSignUp from "./components/Pages/SignInSignUp/SignInSignUp";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

export default class App extends Component {
  state = {
    currentUser: null
  };

  unsubscribeFromAuth = null;

  componentDidMount() {
    // open subscription/messaging between app and firebase app
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      } else {
        // if userAuth doesn't exist, then set it to the current state which is null
        this.setState({ currentUser: userAuth });
      }
    });
  }

  componentWillUnmount() {
    // close subscription on unmount
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInSignUp} />
        </Switch>
      </div>
    );
  }
}
